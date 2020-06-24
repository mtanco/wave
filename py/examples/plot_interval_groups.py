# Plot / Interval / Groups
# No description available.
# ---
from synth import FakeMultiCategoricalSeries
from telesync import Site, data, ui

site = Site()

page = site['/demo']

n = 10
k = 3
f = FakeMultiCategoricalSeries(groups=k)
v = page.add('example', ui.plot_card(
    box='1 1 4 5',
    title='Intervals, groups',
    data=data('country product price', n * k),
    vis=ui.vis([ui.mark(mark='interval', x='=product', y='=price', color='=country', dodge='auto', y_min=0)])
))

v.data = [(g, t, x) for x in [f.next() for _ in range(n)] for g, t, x, dx in x]

page.sync()