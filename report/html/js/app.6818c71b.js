;(function (t) {
  function e(e) {
    for (var a, o, i = e[0], n = e[1], c = e[2], p = 0, f = []; p < i.length; p++)
      (o = i[p]), Object.prototype.hasOwnProperty.call(r, o) && r[o] && f.push(r[o][0]), (r[o] = 0)
    for (a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a])
    d && d(e)
    while (f.length) f.shift()()
    return l.push.apply(l, c || []), s()
  }
  function s() {
    for (var t, e = 0; e < l.length; e++) {
      for (var s = l[e], a = !0, i = 1; i < s.length; i++) {
        var n = s[i]
        0 !== r[n] && (a = !1)
      }
      a && (l.splice(e--, 1), (t = o((o.s = s[0]))))
    }
    return t
  }
  var a = {},
    r = { app: 0 },
    l = []
  function o(e) {
    if (a[e]) return a[e].exports
    var s = (a[e] = { i: e, l: !1, exports: {} })
    return t[e].call(s.exports, s, s.exports, o), (s.l = !0), s.exports
  }
  ;(o.m = t),
    (o.c = a),
    (o.d = function (t, e, s) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s })
    }),
    (o.r = function (t) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (o.t = function (t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t
      if (4 & e && 'object' === typeof t && t && t.__esModule) return t
      var s = Object.create(null)
      if (
        (o.r(s),
        Object.defineProperty(s, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var a in t)
          o.d(
            s,
            a,
            function (e) {
              return t[e]
            }.bind(null, a)
          )
      return s
    }),
    (o.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t['default']
            }
          : function () {
              return t
            }
      return o.d(e, 'a', e), e
    }),
    (o.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (o.p = '')
  var i = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    n = i.push.bind(i)
  ;(i.push = e), (i = i.slice())
  for (var c = 0; c < i.length; c++) e(i[c])
  var d = n
  l.push([0, 'chunk-vendors']), s()
})({
  0: function (t, e, s) {
    t.exports = s('cd49')
  },
  '2f98': function (t, e, s) {
    t.exports = s.p + 'img/logo-small-box.3a28a9a0.svg'
  },
  '5c0b': function (t, e, s) {
    'use strict'
    var a = s('9c0c'),
      r = s.n(a)
    r.a
  },
  '9c0c': function (t, e, s) {},
  ba8c: function (t, e, s) {},
  cd49: function (t, e, s) {
    'use strict'
    s.r(e)
    var a = s('2b0e'),
      r = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e
        return s('div', { attrs: { id: 'app' } }, [s('router-view')], 1)
      },
      l = [],
      o = (s('5c0b'), s('2877')),
      i = {},
      n = Object(o['a'])(i, r, l, !1, null, null, null),
      c = n.exports,
      d = s('8c4f'),
      p = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e
        return s(
          'div',
          [
            s('sidebar-component', { attrs: { formats: Object.keys(t.statistics.formats) } }),
            s(
              'div',
              { staticClass: 'relative md:ml-64 bg-gray-200' },
              [
                s('navbar-component'),
                s('div', { staticClass: 'relative bg-blue-600 md:pt-32 pb-32 pt-12' }, [
                  s('div', { staticClass: 'px-4 md:px-10 mx-auto w-full' }, [
                    s('div', [s('Cards', { attrs: { info: t.statistics.total } })], 1)
                  ])
                ]),
                s(
                  'div',
                  { staticClass: 'px-4 md:px-10 mx-auto w-full -m-24' },
                  [
                    s('div', { staticClass: 'flex flex-wrap mt-4' }, [s('FormatsTable')], 1),
                    s('Footer')
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      },
      f = [],
      u = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e
        return s(
          'nav',
          {
            staticClass:
              'absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-no-wrap md:justify-start flex items-center p-4'
          },
          [
            s(
              'div',
              {
                staticClass:
                  'w-full mx-autp items-center flex justify-between md:flex-no-wrap flex-wrap md:px-10 px-4'
              },
              [
                t.brand
                  ? t._e()
                  : s(
                      'router-link',
                      {
                        staticClass:
                          'text-white text-sm uppercase hidden lg:inline-block font-semibold',
                        attrs: { to: '/' }
                      },
                      [t._v('Dashboard ')]
                    ),
                'clones' === t.brand
                  ? s(
                      'router-link',
                      {
                        staticClass:
                          'text-white text-sm uppercase hidden lg:inline-block font-semibold',
                        attrs: { to: '/clones' }
                      },
                      [t._v('All Clones ')]
                    )
                  : t._e(),
                'format' === t.brand
                  ? s(
                      'router-link',
                      {
                        staticClass:
                          'text-white text-sm uppercase hidden lg:inline-block font-semibold',
                        attrs: { to: '/format/' + t.$route.params.format }
                      },
                      [t._v('Format: ' + t._s(t.$route.params.format) + ' ')]
                    )
                  : t._e()
              ],
              1
            )
          ]
        )
      },
      m = [],
      b = { props: ['brand'] },
      x = b,
      w = Object(o['a'])(x, u, m, !1, null, null, null),
      v = w.exports,
      h = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e
        return a(
          'nav',
          {
            staticClass:
              'md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6'
          },
          [
            a(
              'div',
              {
                staticClass:
                  'md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto'
              },
              [
                a(
                  'button',
                  {
                    staticClass:
                      'cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent',
                    attrs: { type: 'button' },
                    on: {
                      click: function (e) {
                        return t.toggleCollapseShow('bg-white m-2 py-3 px-6')
                      }
                    }
                  },
                  [a('i', { staticClass: 'fas fa-bars' })]
                ),
                a(
                  'router-link',
                  {
                    staticClass:
                      'md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0',
                    attrs: { to: '/' }
                  },
                  [
                    a('img', {
                      staticClass: 'm-2 max-w-full h-auto align-middle border-none',
                      attrs: { src: s('2f98') }
                    })
                  ]
                ),
                a(
                  'div',
                  {
                    staticClass:
                      'md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded',
                    class: t.collapseShow
                  },
                  [
                    a(
                      'div',
                      {
                        staticClass:
                          'md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-300'
                      },
                      [
                        a('div', { staticClass: 'flex flex-wrap' }, [
                          a(
                            'div',
                            { staticClass: 'w-6/12' },
                            [
                              a(
                                'router-link',
                                {
                                  staticClass:
                                    'md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0',
                                  attrs: { to: '/' }
                                },
                                [t._v(' copy/paste report ')]
                              )
                            ],
                            1
                          ),
                          a('div', { staticClass: 'w-6/12 flex justify-end' }, [
                            a(
                              'button',
                              {
                                staticClass:
                                  'cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent',
                                attrs: { type: 'button' },
                                on: {
                                  click: function (e) {
                                    return t.toggleCollapseShow('hidden')
                                  }
                                }
                              },
                              [a('i', { staticClass: 'fas fa-times' })]
                            )
                          ])
                        ])
                      ]
                    ),
                    a('ul', { staticClass: 'md:flex-col md:min-w-full flex flex-col list-none' }, [
                      a(
                        'li',
                        { staticClass: 'inline-flex' },
                        [
                          a(
                            'router-link',
                            {
                              staticClass:
                                'hover:text-grey-600 text-xs uppercase py-3 font-bold block',
                              class: { 'text-gray-500': !t.menuItem, 'text-gray-800': t.menuItem },
                              attrs: { to: '/' }
                            },
                            [
                              a('i', { staticClass: 'fas fa-tv opacity-75 mr-2 text-sm' }),
                              t._v(' Dashboard ')
                            ]
                          )
                        ],
                        1
                      ),
                      a(
                        'li',
                        { staticClass: 'inline-flex' },
                        [
                          a(
                            'router-link',
                            {
                              staticClass:
                                'text-grey-500 hover:text-grey-600 text-xs uppercase py-3 font-bold block',
                              class: {
                                'text-gray-500': 'clones' === t.menuItem,
                                'text-gray-800': 'clones' !== t.menuItem
                              },
                              attrs: { to: '/clones' }
                            },
                            [
                              a('i', { staticClass: 'fas fa-clone opacity-75 mr-2 text-sm' }),
                              t._v(' All clones ')
                            ]
                          )
                        ],
                        1
                      )
                    ]),
                    a('hr', { staticClass: 'my-4 md:min-w-full' }),
                    a('FormatsList', {
                      attrs: { list: t.formats, 'current-format': t.currentFormat }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ]
        )
      },
      g = [],
      C = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e
        return s('div', [
          s(
            'a',
            {
              ref: 'btnDropdownRef',
              staticClass: 'text-gray-600 block py-1 px-3',
              attrs: { href: '#pablo' },
              on: {
                click: function (e) {
                  return t.toggleDropdown(e)
                }
              }
            },
            [s('i', { staticClass: 'fas fa-bell' })]
          ),
          s(
            'div',
            {
              ref: 'popoverDropdownRef',
              staticClass:
                'bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1',
              class: { hidden: !t.dropdownPopoverShow, block: t.dropdownPopoverShow },
              staticStyle: { 'min-width': '12rem' }
            },
            [
              s(
                'a',
                {
                  staticClass:
                    'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800',
                  attrs: { href: '#pablo' }
                },
                [t._v(' Action ')]
              ),
              s(
                'a',
                {
                  staticClass:
                    'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800',
                  attrs: { href: '#pablo' }
                },
                [t._v(' Another action ')]
              ),
              s(
                'a',
                {
                  staticClass:
                    'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800',
                  attrs: { href: '#pablo' }
                },
                [t._v(' Something else here ')]
              ),
              s('div', { staticClass: 'h-0 my-2 border border-solid border-gray-200' }),
              s(
                'a',
                {
                  staticClass:
                    'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800',
                  attrs: { href: '#pablo' }
                },
                [t._v(' Seprated link ')]
              )
            ]
          )
        ])
      },
      y = [],
      _ = {
        data() {
          return { dropdownPopoverShow: !1 }
        },
        methods: {
          toggleDropdown: function (t) {
            t.preventDefault(),
              this.dropdownPopoverShow
                ? (this.dropdownPopoverShow = !1)
                : (this.dropdownPopoverShow = !0)
          }
        }
      },
      k = _,
      j = Object(o['a'])(k, C, y, !1, null, null, null),
      F = j.exports,
      O = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e
        return s('div', [
          s(
            'a',
            {
              ref: 'btnDropdownRef',
              staticClass: 'text-gray-600 block',
              attrs: { href: '#pablo' },
              on: {
                click: function (e) {
                  return t.toggleDropdown(e)
                }
              }
            },
            [t._m(0)]
          ),
          s(
            'div',
            {
              ref: 'popoverDropdownRef',
              staticClass:
                'bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1',
              class: { hidden: !t.dropdownPopoverShow, block: t.dropdownPopoverShow },
              staticStyle: { 'min-width': '12rem' }
            },
            [
              s(
                'a',
                {
                  staticClass:
                    'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800',
                  attrs: { href: '#pablo' }
                },
                [t._v(' Action ')]
              ),
              s(
                'a',
                {
                  staticClass:
                    'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800',
                  attrs: { href: '#pablo' }
                },
                [t._v(' Another action ')]
              ),
              s(
                'a',
                {
                  staticClass:
                    'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800',
                  attrs: { href: '#pablo' }
                },
                [t._v(' Something else here ')]
              ),
              s('div', { staticClass: 'h-0 my-2 border border-solid border-gray-200' }),
              s(
                'a',
                {
                  staticClass:
                    'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800',
                  attrs: { href: '#pablo' }
                },
                [t._v(' Seprated link ')]
              )
            ]
          )
        ])
      },
      S = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e
          return s('div', { staticClass: 'items-center flex' }, [
            s('span', {
              staticClass:
                'w-12 h-12 text-sm text-white bg-gray-300 inline-flex items-center justify-center rounded-full'
            })
          ])
        }
      ],
      $ = {
        data() {
          return { dropdownPopoverShow: !1 }
        },
        methods: {
          toggleDropdown: function (t) {
            t.preventDefault(),
              this.dropdownPopoverShow
                ? (this.dropdownPopoverShow = !1)
                : (this.dropdownPopoverShow = !0)
          }
        }
      },
      D = $,
      E = Object(o['a'])(D, O, S, !1, null, null, null),
      T = E.exports,
      P = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e
        return s(
          'div',
          [
            s(
              'h6',
              {
                staticClass:
                  'md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline'
              },
              [t._v('Formats')]
            ),
            t._l(Object.keys(t.statistics.formats), function (e, a) {
              return s(
                'router-link',
                {
                  key: a,
                  staticClass:
                    'text-white active:bg-blue-600 font-bold uppercase text-xs px-2 py-1 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1',
                  class: {
                    'bg-blue-500': e !== t.currentFormat,
                    'bg-gray-500': e === t.currentFormat
                  },
                  staticStyle: { transition: 'all .15s ease' },
                  attrs: { to: '/format/' + e, type: 'button' }
                },
                [t._v(' ' + t._s(e) + ' ')]
              )
            })
          ],
          2
        )
      },
      L = [],
      A = s('2f62'),
      I = {
        data() {
          return {}
        },
        props: ['currentFormat'],
        computed: Object(A['c'])({ statistics: t => t.statistics })
      },
      z = I,
      M = Object(o['a'])(z, P, L, !1, null, null, null),
      N = M.exports,
      R = {
        data() {
          return { collapseShow: 'hidden' }
        },
        props: ['formats', 'currentFormat', 'menuItem'],
        methods: {
          toggleCollapseShow: function (t) {
            this.collapseShow = t
          }
        },
        components: { FormatsList: N, NotificationDropdownComponent: F, UserDropdownComponent: T }
      },
      Y = R,
      J = Object(o['a'])(Y, h, g, !1, null, null, null),
      U = J.exports,
      H = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e
        return s('div', { staticClass: 'flex flex-wrap' }, [
          s('div', { staticClass: 'w-full lg:w-6/12 xl:w-3/12 px-4' }, [
            s(
              'div',
              {
                staticClass:
                  'relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg'
              },
              [
                s('div', { staticClass: 'flex-auto p-4' }, [
                  s('div', { staticClass: 'flex flex-wrap' }, [
                    s('div', { staticClass: 'relative w-full pr-4 max-w-full flex-grow flex-1' }, [
                      s('h5', { staticClass: 'text-gray-500 uppercase font-bold text-xs' }, [
                        t._v(' Total files ')
                      ]),
                      s('span', { staticClass: 'font-semibold text-xl text-gray-800' }, [
                        t._v(t._s(t.info.sources))
                      ])
                    ]),
                    t._m(0)
                  ]),
                  s('p', { staticClass: 'text-sm text-gray-500 mt-4' }, [
                    s('span', { staticClass: 'text-green-500 mr-2' }, [
                      t._v(' ' + t._s(t.info.lines) + ' ')
                    ]),
                    s('span', { staticClass: 'whitespace-no-wrap' }, [
                      t._v(' Lines of of code in the files ')
                    ])
                  ])
                ])
              ]
            )
          ]),
          s('div', { staticClass: 'w-full lg:w-6/12 xl:w-3/12 px-4' }, [
            s(
              'div',
              {
                staticClass:
                  'relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg'
              },
              [
                s('div', { staticClass: 'flex-auto p-4' }, [
                  s('div', { staticClass: 'flex flex-wrap' }, [
                    s('div', { staticClass: 'relative w-full pr-4 max-w-full flex-grow flex-1' }, [
                      s('h5', { staticClass: 'text-gray-500 uppercase font-bold text-xs' }, [
                        t._v(' Clones ')
                      ]),
                      s('span', { staticClass: 'font-semibold text-xl text-gray-800' }, [
                        t._v(' ' + t._s(t.info.clones) + ' ')
                      ])
                    ]),
                    t._m(1)
                  ]),
                  s('p', { staticClass: 'text-sm text-gray-500 mt-4' }, [
                    s('span', { staticClass: 'text-red-500 mr-2' }, [
                      t._v(
                        ' ' + t._s(t.info.duplicatedLines) + ' (' + t._s(t.info.percentage) + '%) '
                      )
                    ]),
                    s('span', { staticClass: 'whitespace-no-wrap' }, [t._v('Duplicated lines')])
                  ])
                ])
              ]
            )
          ])
        ])
      },
      q = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e
          return s('div', { staticClass: 'relative w-auto pl-4 flex-initial' }, [
            s(
              'div',
              {
                staticClass:
                  'text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-700'
              },
              [s('i', { staticClass: 'far fa-chart-bar' })]
            )
          ])
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e
          return s('div', { staticClass: 'relative w-auto pl-4 flex-initial' }, [
            s(
              'div',
              {
                staticClass:
                  'text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-700'
              },
              [s('i', { staticClass: 'fas fa-chart-pie' })]
            )
          ])
        }
      ],
      B = {
        data() {
          return {}
        },
        props: ['info']
      },
      G = B,
      K = Object(o['a'])(G, H, q, !1, null, null, null),
      Q = K.exports,
      V = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e
        return s('div', { staticClass: 'w-full xl:w-8/12 mb-12 xl:mb-0 px-4' }, [
          s(
            'div',
            {
              staticClass:
                'relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded'
            },
            [
              s('div', { staticClass: 'rounded-t mb-0 px-4 py-3 border-0' }, [
                s('div', { staticClass: 'flex flex-wrap items-center' }, [
                  t._m(0),
                  s(
                    'div',
                    {
                      staticClass:
                        'relative w-full font-semibold px-4 max-w-full flex-grow flex-1 text-right'
                    },
                    [t._v(' Total: ' + t._s(Object.keys(t.statistics.formats).length) + ' ')]
                  )
                ])
              ]),
              s('div', { staticClass: 'block w-full overflow-x-auto' }, [
                s('table', { staticClass: 'items-center w-full bg-transparent border-collapse' }, [
                  t._m(1),
                  s(
                    'tbody',
                    t._l(Object.keys(t.statistics.formats), function (e, a) {
                      return s('tr', { key: a }, [
                        s(
                          'th',
                          {
                            staticClass:
                              'border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left'
                          },
                          [
                            s(
                              'router-link',
                              { staticClass: 'font-semibold', attrs: { to: '/format/' + e } },
                              [t._v(t._s(e))]
                            )
                          ],
                          1
                        ),
                        s(
                          'td',
                          {
                            staticClass:
                              'border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left'
                          },
                          [t._v(' ' + t._s(t.statistics.formats[e].total.sources) + ' ')]
                        ),
                        s(
                          'td',
                          {
                            staticClass:
                              'border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left'
                          },
                          [t._v(' ' + t._s(t.statistics.formats[e].total.lines) + ' ')]
                        ),
                        s(
                          'td',
                          {
                            staticClass:
                              'border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left'
                          },
                          [t._v(' ' + t._s(t.statistics.formats[e].total.clones) + ' ')]
                        ),
                        s(
                          'td',
                          {
                            staticClass:
                              'border-t-0 font-semibold px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left'
                          },
                          [
                            t._v(' ' + t._s(t.statistics.formats[e].total.duplicatedLines) + ' ('),
                            s('b', [t._v(t._s(t.statistics.formats[e].total.percentage) + '%')]),
                            t._v(') ')
                          ]
                        ),
                        s(
                          'td',
                          {
                            staticClass:
                              'border-t-0 font-semibold px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left'
                          },
                          [
                            t._v(' ' + t._s(t.statistics.formats[e].total.duplicatedTokens) + ' ('),
                            s('b', [
                              t._v(t._s(t.statistics.formats[e].total.percentageTokens) + '%')
                            ]),
                            t._v(') ')
                          ]
                        )
                      ])
                    }),
                    0
                  )
                ])
              ])
            ]
          )
        ])
      },
      W = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e
          return s('div', { staticClass: 'relative w-full px-4 max-w-full flex-grow flex-1' }, [
            s('h3', { staticClass: 'font-semibold text-base text-gray-800' }, [t._v(' Formats ')])
          ])
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e
          return s('thead', [
            s('tr', [
              s('th', {
                staticClass:
                  'px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left'
              }),
              s(
                'th',
                {
                  staticClass:
                    'px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left'
                },
                [t._v(' Files ')]
              ),
              s(
                'th',
                {
                  staticClass:
                    'px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left'
                },
                [t._v(' Lines ')]
              ),
              s(
                'th',
                {
                  staticClass:
                    'px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left'
                },
                [t._v(' Clones ')]
              ),
              s(
                'th',
                {
                  staticClass:
                    'px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left'
                },
                [t._v(' Duplicated lines ')]
              ),
              s(
                'th',
                {
                  staticClass:
                    'px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left'
                },
                [t._v(' Duplicated tokens ')]
              )
            ])
          ])
        }
      ],
      X = {
        data() {
          return {}
        },
        methods: Object(A['b'])(['setCurrentFormat']),
        computed: Object(A['c'])({ statistics: t => t.statistics })
      },
      Z = X,
      tt = Object(o['a'])(Z, V, W, !1, null, null, null),
      et = tt.exports,
      st = function () {
        var t = this,
          e = t.$createElement
        t._self._c
        return t._m(0)
      },
      at = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e
          return s('footer', { staticClass: 'block py-4' }, [
            s('div', { staticClass: 'container mx-auto px-4' }, [
              s('hr', { staticClass: 'mb-4 border-b-1 border-gray-300' }),
              s(
                'div',
                { staticClass: 'flex flex-wrap items-center md:justify-between justify-center' },
                [
                  s('div', { staticClass: 'w-full md:w-4/12 px-4' }, [
                    s('div', { staticClass: 'text-sm text-gray-600 font-semibold py-1' }, [
                      t._v(' The report generated with '),
                      s(
                        'a',
                        {
                          staticClass:
                            'text-gray-600 hover:text-gray-800 text-sm font-semibold py-1',
                          attrs: { href: 'https://github.com/kucherenko/jscpd' }
                        },
                        [t._v(' jscpd ')]
                      )
                    ])
                  ]),
                  s('div', { staticClass: 'w-full md:w-8/12 px-4' }, [
                    s(
                      'ul',
                      { staticClass: 'flex flex-wrap list-none md:justify-end  justify-center' },
                      [
                        s('li', [
                          s(
                            'a',
                            {
                              staticClass:
                                'text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3',
                              attrs: { href: 'https://github.com/kucherenko/jscpd' }
                            },
                            [t._v(' jscpd - copy/paste detector ')]
                          )
                        ]),
                        s('li', [
                          s(
                            'a',
                            {
                              staticClass:
                                'text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3',
                              attrs: {
                                href: 'https://github.com/kucherenko/jscpd/blob/master/LICENSE'
                              }
                            },
                            [t._v(' MIT License ')]
                          )
                        ])
                      ]
                    )
                  ])
                ]
              )
            ])
          ])
        }
      ],
      rt = { components: { UserDropdownComponent: T } },
      lt = rt,
      ot = Object(o['a'])(lt, st, at, !1, null, null, null),
      it = ot.exports,
      nt = {
        name: 'dashboard-page',
        components: {
          Footer: it,
          NavbarComponent: v,
          SidebarComponent: U,
          Cards: Q,
          FormatsTable: et
        },
        data() {
          return { date: new Date().getFullYear() }
        },
        computed: Object(A['c'])({
          duplicates: t => t.duplicates,
          statistics: t => t.statistics,
          currentFormat: t => t.currentFormat
        })
      },
      ct = nt,
      dt = Object(o['a'])(ct, p, f, !1, null, null, null),
      pt = dt.exports,
      ft = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e
        return s(
          'div',
          [
            s('sidebar-component', {
              attrs: { 'menu-item': 'format', 'current-format': t.$route.params.format }
            }),
            s(
              'div',
              { staticClass: 'relative md:ml-64 bg-gray-200' },
              [
                s('navbar-component', { attrs: { brand: 'format' } }),
                s('div', { staticClass: 'relative bg-blue-600 md:pt-32 pb-32 pt-12' }, [
                  s('div', { staticClass: 'px-4 md:px-10 mx-auto w-full' }, [
                    s(
                      'div',
                      [
                        s('Cards', {
                          attrs: { info: t.statistics.formats[t.$route.params.format].total }
                        })
                      ],
                      1
                    ),
                    s('div', { staticClass: 'w-full lg:w-6/12 xl:w-3/12 px-4' }, [
                      s('ul', { staticClass: 'flex' }, [
                        s('li', { staticClass: '-mb-px mr-1' }, [
                          s(
                            'a',
                            {
                              staticClass: 'inline-block rounded-t py-2 px-4 font-semibold',
                              class: {
                                'text-blue-200': 'clones' !== t.activeTab,
                                'border-b-2 text-white': 'clones' === t.activeTab
                              },
                              on: {
                                click: function (e) {
                                  t.activeTab = 'clones'
                                }
                              }
                            },
                            [t._v('Clones ')]
                          )
                        ]),
                        s('li', { staticClass: 'mr-1' }, [
                          s(
                            'a',
                            {
                              staticClass:
                                'inline-block py-2 px-4 hover:text-blue-200 font-semibold',
                              class: {
                                'text-blue-200': 'files' !== t.activeTab,
                                'border-b-2 text-white': 'files' === t.activeTab
                              },
                              on: {
                                click: function (e) {
                                  t.activeTab = 'files'
                                }
                              }
                            },
                            [t._v('Files ')]
                          )
                        ])
                      ])
                    ])
                  ])
                ]),
                s(
                  'div',
                  { staticClass: 'px-4 md:px-10 mx-auto w-full -m-24' },
                  [
                    s(
                      'div',
                      { staticClass: 'flex flex-wrap mt-4' },
                      [
                        'clones' === t.activeTab
                          ? s('Clones', {
                              attrs: {
                                list: t.duplicates.filter(function (e) {
                                  return e.format === t.$route.params.format
                                })
                              }
                            })
                          : t._e(),
                        'files' === t.activeTab
                          ? s('SourcesTable', {
                              attrs: {
                                sources: t.statistics.formats[t.$route.params.format].sources
                              }
                            })
                          : t._e()
                      ],
                      1
                    ),
                    s('Footer')
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      },
      ut = [],
      mt = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e
        return s(
          'div',
          { staticClass: 'w-full xl:w-8/12 mb-12 xl:mb-0 px-4' },
          t._l(t.list, function (t, e) {
            return s(
              'div',
              {
                key: e,
                staticClass:
                  'relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded'
              },
              [s('Clone', { attrs: { clone: t } })],
              1
            )
          }),
          0
        )
      },
      bt = [],
      xt = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e
        return s('div', [
          s('div', { staticClass: 'md:flex' }, [
            s('div', { staticClass: 'mt-4 md:mt-0 md:ml-6 p-5' }, [
              s(
                'div',
                {
                  staticClass: 'uppercase tracking-wide text-left text-sm text-indigo-600 font-bold'
                },
                [t._v(t._s(t.clone.format))]
              ),
              s('p', { staticClass: 'mt-2 text-gray-800 text-left' }, [
                t._v(' ' + t._s(t.clone.firstFile.name) + ' '),
                s('span', { staticClass: 'text-gray-600' }, [
                  t._v(
                    '(' +
                      t._s(t.clone.firstFile.startLoc.line) +
                      ':' +
                      t._s(t.clone.firstFile.startLoc.column) +
                      '-' +
                      t._s(t.clone.firstFile.endLoc.line) +
                      ':' +
                      t._s(t.clone.firstFile.endLoc.column) +
                      ')'
                  )
                ])
              ]),
              s('p', { staticClass: 'mt-2 text-gray-800 text-left' }, [
                t._v(' ' + t._s(t.clone.secondFile.name) + ' '),
                s('span', { staticClass: 'text-gray-600' }, [
                  t._v(
                    '(' +
                      t._s(t.clone.secondFile.startLoc.line) +
                      ':' +
                      t._s(t.clone.secondFile.startLoc.column) +
                      '-' +
                      t._s(t.clone.secondFile.endLoc.line) +
                      ':' +
                      t._s(t.clone.secondFile.endLoc.column) +
                      ')'
                  )
                ])
              ])
            ])
          ]),
          s('div', { staticClass: 'text-center' }, [
            t.isActive
              ? t._e()
              : s(
                  'button',
                  {
                    staticClass: 'text-grey-200 text-sm',
                    on: {
                      click: function (e) {
                        return t.toggleCode()
                      }
                    }
                  },
                  [t._v(' Show code ')]
                ),
            t.isActive
              ? s(
                  'button',
                  {
                    staticClass: 'text-grey-200 text-sm',
                    on: {
                      click: function (e) {
                        return t.toggleCode()
                      }
                    }
                  },
                  [t._v(' Hide code ')]
                )
              : t._e()
          ]),
          t.isActive
            ? s('div', [
                s('pre', { staticClass: 'text-left bg-gray-100 p-5 text-sm' }, [
                  t._v(t._s(t.clone.fragment))
                ])
              ])
            : t._e()
        ])
      },
      wt = [],
      vt = {
        data() {
          return { isActive: !1 }
        },
        methods: {
          toggleCode() {
            this.isActive = !this.isActive
          }
        },
        components: {},
        props: ['clone']
      },
      ht = vt,
      gt = Object(o['a'])(ht, xt, wt, !1, null, null, null),
      Ct = gt.exports,
      yt = { components: { Clone: Ct }, props: ['list'] },
      _t = yt,
      kt = Object(o['a'])(_t, mt, bt, !1, null, null, null),
      jt = kt.exports,
      Ft = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e
        return s('div', { staticClass: 'w-full xl:w-8/12 mb-12 xl:mb-0 px-4' }, [
          s(
            'div',
            {
              staticClass:
                'relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded'
            },
            [
              s('div', { staticClass: 'rounded-t mb-0 px-4 py-3 border-0' }, [
                s('div', { staticClass: 'flex flex-wrap items-center' }, [
                  t._m(0),
                  s(
                    'div',
                    {
                      staticClass:
                        'relative w-full font-semibold px-4 max-w-full flex-grow flex-1 text-right'
                    },
                    [t._v(' Total: ' + t._s(Object.keys(t.sources).length) + ' ')]
                  )
                ])
              ]),
              s('div', { staticClass: 'block w-full overflow-x-auto' }, [
                s('table', { staticClass: 'items-center w-full bg-transparent border-collapse' }, [
                  t._m(1),
                  s(
                    'tbody',
                    t._l(Object.keys(t.sources), function (e, a) {
                      return s('tr', { key: a }, [
                        s(
                          'th',
                          {
                            staticClass:
                              'border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left'
                          },
                          [t._v(' ' + t._s(e) + ' ')]
                        ),
                        s(
                          'td',
                          {
                            staticClass:
                              'border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left'
                          },
                          [t._v(' ' + t._s(t.sources[e].lines) + ' ')]
                        ),
                        s(
                          'td',
                          {
                            staticClass:
                              'border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left'
                          },
                          [t._v(' ' + t._s(t.sources[e].duplicatedLines) + ' ')]
                        )
                      ])
                    }),
                    0
                  )
                ])
              ])
            ]
          )
        ])
      },
      Ot = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e
          return s('div', { staticClass: 'relative w-full px-4 max-w-full flex-grow flex-1' }, [
            s('h3', { staticClass: 'font-semibold text-base text-gray-800' }, [t._v(' Files ')])
          ])
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e
          return s('thead', [
            s('tr', [
              s('th', {
                staticClass:
                  'px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left'
              }),
              s(
                'th',
                {
                  staticClass:
                    'px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left'
                },
                [t._v(' Lines ')]
              ),
              s(
                'th',
                {
                  staticClass:
                    'px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left'
                },
                [t._v(' Duplicated lines ')]
              )
            ])
          ])
        }
      ],
      St = {
        data() {
          return {}
        },
        props: ['sources']
      },
      $t = St,
      Dt = Object(o['a'])($t, Ft, Ot, !1, null, null, null),
      Et = Dt.exports,
      Tt = {
        name: 'dashboard-page',
        components: {
          Clones: jt,
          Footer: it,
          NavbarComponent: v,
          SidebarComponent: U,
          Cards: Q,
          SourcesTable: Et
        },
        data() {
          return { date: new Date().getFullYear(), activeTab: 'clones' }
        },
        computed: Object(A['c'])({
          duplicates: t => t.duplicates,
          statistics: t => t.statistics,
          currentFormat: t => t.currentFormat
        })
      },
      Pt = Tt,
      Lt = Object(o['a'])(Pt, ft, ut, !1, null, null, null),
      At = Lt.exports,
      It = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e
        return s(
          'div',
          [
            s('sidebar-component', { attrs: { 'menu-item': 'clones' } }),
            s(
              'div',
              { staticClass: 'relative md:ml-64 bg-gray-200' },
              [
                s('navbar-component', { attrs: { brand: 'clones' } }),
                s('div', { staticClass: 'relative bg-blue-600 md:pt-32 pb-32 pt-12' }, [
                  s('div', { staticClass: 'px-4 md:px-10 mx-auto w-full' }, [
                    s('div', [s('Cards', { attrs: { info: t.statistics.total } })], 1)
                  ])
                ]),
                s(
                  'div',
                  { staticClass: 'px-4 md:px-10 mx-auto w-full -m-24' },
                  [
                    s(
                      'div',
                      { staticClass: 'flex flex-wrap mt-4' },
                      [s('Clones', { attrs: { list: t.duplicates } })],
                      1
                    ),
                    s('Footer')
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      },
      zt = [],
      Mt = {
        name: 'dashboard-page',
        components: {
          Clones: jt,
          Footer: it,
          NavbarComponent: v,
          SidebarComponent: U,
          Cards: Q,
          FormatsTable: et
        },
        data() {
          return { date: new Date().getFullYear() }
        },
        computed: Object(A['c'])({
          duplicates: t => t.duplicates,
          statistics: t => t.statistics,
          currentFormat: t => t.currentFormat
        })
      },
      Nt = Mt,
      Rt = Object(o['a'])(Nt, It, zt, !1, null, null, null),
      Yt = Rt.exports
    a['a'].use(d['a'])
    var Jt = [
        { path: '/', name: 'Dashboard', component: pt },
        { path: '/clones', name: 'Clones', component: Yt },
        { path: '/format/:format', name: 'Format', component: At }
      ],
      Ut = new d['a']({ base: '', routes: Jt }),
      Ht = Ut,
      qt = s('9ab4'),
      Bt = window.initialData || {
        statistics: { detectionDate: '', formats: {}, total: {} },
        duplicates: []
      }
    a['a'].use(A['a'])
    var Gt = new A['a'].Store({
      state: Object(qt['a'])({}, Bt),
      mutations: {
        init: function (t, e) {
          ;(t.statistics = e.statistics), (t.duplicates = e.duplicates)
        },
        setDuplicates: function (t, e) {
          t.duplicates = e
        },
        setStatistics: function (t, e) {
          t.statistics = e
        }
      },
      actions: {
        initData: function (t) {
          var e = t.commit
          fetch('jscpd-report.json')
            .then(function (t) {
              return t.json()
            })
            .then(function (t) {
              e('init', t)
            })
        }
      },
      modules: {}
    })
    s('becf'), s('ba8c')
    ;(a['a'].config.productionTip = !1),
      new a['a']({
        router: Ht,
        store: Gt,
        render: function (t) {
          return t(c)
        },
        created: function () {
          this.$store.dispatch('initData')
        }
      }).$mount('#app')
  }
})
//# sourceMappingURL=app.6818c71b.js.map
