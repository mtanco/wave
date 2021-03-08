// Copyright 2020 H2O.ai, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as Fluent from '@fluentui/react'
import React from 'react'
import { stylesheet } from 'typestyle'
import { B, bond, box, Id, qd, S } from './qd'
import { border, cssVar, displayMixin, margin } from './theme'

/**
 * Create a color picker.
 *
 * A date picker allows a user to pick a color value.
 * If the 'choices' parameter is set, a swatch picker is displayed instead of the standard color picker.
 */
export interface ColorPicker {
  /** An identifying name for this component. */
  name: Id
  /** Text to be displayed alongside the component. */
  label?: S
  /** The selected color (CSS-compatible string). */
  value?: S
  /** A list of colors (CSS-compatible strings) to limit color choices to. */
  choices?: S[]
  /** True if user should be allowed to pick color transparency. Defaults to "true". */
  alpha?: B
  /** True if color picker should be displayed inline (takes less space). Doesn't work with choices specified. Defaults to "false". */
  inline?: B
  /** True if the component should be visible. Defaults to true. */
  visible?: B
  /** True if the form should be submitted when the color picker value changes. */
  trigger?: B
  /** An optional tooltip message displayed when a user clicks the help icon to the right of the component. */
  tooltip?: S
}

const
  css = stylesheet({
    inlinePickerContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: 250
    },
    preview: {
      width: 20,
      height: 20,
      margin: margin(0, 15),
      border: border(1, cssVar('$text')),
    },
    rhs: {
      display: 'flex',
      alignItems: 'center',
    }
  }),
  toColorCells = (cs: S[]) => cs.map((c): Fluent.IColorCellProps => ({ id: c, label: c, color: c })),
  InlineColorPicker = bond(({ model, onChange }: { model: ColorPicker, onChange: (...args: any) => void }) => {
    const
      isCalloutVisibleB = box(false),
      val = model.value || '#000',
      colorValueB = box(Fluent.getColorFromString(val)),
      textValueB = box(val),
      toggleCallout = () => isCalloutVisibleB(!isCalloutVisibleB()),
      onTextChange = (_e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, val = '') => {
        textValueB(val)
        if (!val?.match(/^#([0-9a-f]{3}){1,2}$/i)) return // Hex format validation.

        const fluentColor = Fluent.getColorFromString(val)!
        colorValueB(fluentColor)
        onChange(null, fluentColor)
      },
      onColorChange = (_e: React.SyntheticEvent<HTMLElement>, color: Fluent.IColor) => {
        colorValueB(color)
        textValueB(color.str)
        onChange(null, color)
      },
      render = () => (
        <div className={css.inlinePickerContainer}>
          <Fluent.Label>{model.label}</Fluent.Label>
          <div className={css.rhs}>
            <div className={css.preview} style={{ background: colorValueB().str }} onClick={toggleCallout} />
            {isCalloutVisibleB() && (
              <Fluent.Callout directionalHint={Fluent.DirectionalHint.rightBottomEdge} target={`.${css.preview}`} onDismiss={toggleCallout} gapSpace={10}>
                <Fluent.ColorPicker alphaType={model.alpha ? 'alpha' : 'none'} color={colorValueB()} onChange={onColorChange} />
              </Fluent.Callout>
            )}
            <Fluent.TextField value={textValueB()} onChange={onTextChange} />
          </div>
        </div>
      )

    return { render, isCalloutVisibleB, colorValueB, textValueB }
  })

export const
  XColorPicker = bond(({ model: m }: { model: ColorPicker }) => {
    const value = m.value || null
    qd.args[m.name] = value
    const
      onColorChanged = (_id?: S, color?: S) => {
        qd.args[m.name] = color || value
        if (m.trigger) qd.sync()
      },
      onChange = (_e: React.SyntheticEvent<HTMLElement>, color: Fluent.IColor) => {
        qd.args[m.name] = color?.str || value
        if (m.trigger) qd.sync()
      },
      render = () => (
        <div data-test={m.name} style={displayMixin(m.visible)}>
          {
            m.inline
              ? <InlineColorPicker model={m} onChange={onChange} />
              : (
                <>
                  <Fluent.Label>{m.label}</Fluent.Label>
                  {
                    m.choices?.length
                      ? <Fluent.SwatchColorPicker columnCount={10} selectedId={value || m.choices[0]} colorCells={toColorCells(m.choices)} onColorChanged={onColorChanged} />
                      : <Fluent.ColorPicker alphaType={m.alpha ? 'alpha' : 'none'} color={value || '#000'} onChange={onChange} />
                  }
                </>
              )
          }
        </div>
      )

    return { render }
  })