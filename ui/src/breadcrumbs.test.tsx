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

import { initializeIcons } from '@fluentui/react'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { View } from './breadcrumbs'
import * as T from './qd'

const
  name = 'breadcrumbs',
  nameWithHash = `#${name}`,
  label = 'Menu 1',
  breadcrumbsProps: T.Card<any> = {
    name,
    state: { items: [{ name, label }] },
    changed: T.box(false)
  },
  breadcrumbsPropsHash: T.Card<any> = {
    name,
    state: { items: [{ name: nameWithHash, label },] },
    changed: T.box(false)
  }

describe('Breadcrumbs.tsx', () => {
  beforeAll(() => initializeIcons())
  beforeEach(() => {
    T.qd.args[name] = null
    jest.clearAllMocks()
  })

  it('Renders data-test attr', () => {
    const { queryByTestId } = render(<View {...breadcrumbsProps} />)
    expect(queryByTestId(name)).toBeInTheDocument()
  })

  it('Sets args - init', () => {
    render(<View {...breadcrumbsProps} />)
    expect(T.qd.args[name]).toBeNull()
  })

  it('Sets args and calls sync on click', () => {
    const syncMock = jest.fn()
    T.qd.sync = syncMock

    const { getByText } = render(<View {...breadcrumbsProps} />)
    fireEvent.click(getByText(label))

    expect(T.qd.args[name]).toBe(true)
    expect(syncMock).toHaveBeenCalled()
  })

  it('Does not set args and calls sync on click when name starts with hash', () => {
    const syncMock = jest.fn()
    T.qd.sync = syncMock

    const { getByText } = render(<View {...breadcrumbsPropsHash} />)
    fireEvent.click(getByText(label))

    expect(T.qd.args[name]).toBeNull()
    expect(syncMock).toHaveBeenCalledTimes(0)
  })

  it('Sets window window location hash when name starts with hash', () => {
    const { getByText } = render(<View {...breadcrumbsPropsHash} />)
    fireEvent.click(getByText(label))

    expect(window.location.hash).toBe(nameWithHash)
  })

})