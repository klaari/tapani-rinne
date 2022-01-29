parcelRequire = (function (e, r, t, n) {
    var i,
        o = "function" == typeof parcelRequire && parcelRequire,
        u = "function" == typeof require && require;
    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i) return i(t, !0);
                if (o) return o(t, !0);
                if (u && "string" == typeof t) return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw ((c.code = "MODULE_NOT_FOUND"), c);
            }
            (p.resolve = function (r) {
                return e[t][1][r] || r;
            }),
                (p.cache = {});
            var l = (r[t] = new f.Module(t));
            e[t][0].call(l.exports, p, l, l.exports, this);
        }
        return r[t].exports;
        function p(e) {
            return f(p.resolve(e));
        }
    }
    (f.isParcelRequire = !0),
        (f.Module = function (e) {
            (this.id = e), (this.bundle = f), (this.exports = {});
        }),
        (f.modules = e),
        (f.cache = r),
        (f.parent = o),
        (f.register = function (r, t) {
            e[r] = [
                function (e, r) {
                    r.exports = t;
                },
                {},
            ];
        });
    for (var c = 0; c < t.length; c++)
        try {
            f(t[c]);
        } catch (e) {
            i || (i = e);
        }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = l)
            : "function" == typeof define && define.amd
            ? define(function () {
                  return l;
              })
            : n && (this[n] = l);
    }
    if (((parcelRequire = f), i)) throw i;
    return f;
})(
    {
        vMKL: [
            function (require, module, exports) {},
            {
                "./../../dist/fonts/Tuffy-Bold.eot": [
                    ["Tuffy-Bold.abde551f.eot", "TKaX"],
                    "TKaX",
                ],
                "./../../dist/fonts/Tuffy-Bold.woff": [
                    ["Tuffy-Bold.ce9e8109.woff", "Nbus"],
                    "Nbus",
                ],
                "./../../dist/fonts/Tuffy-Bold.ttf": [
                    ["Tuffy-Bold.2014c3be.ttf", "g9Ou"],
                    "g9Ou",
                ],
                "./../../dist/fonts/Tuffy-Bold.svg": [
                    ["Tuffy-Bold.ee9a0ee1.svg", "JYnB"],
                    "JYnB",
                ],
                "./../../dist/fonts/Tuffy-Regular.eot": [
                    ["Tuffy-Regular.76b303da.eot", "SBUy"],
                    "SBUy",
                ],
                "./../../dist/fonts/Tuffy-Regular.woff": [
                    ["Tuffy-Regular.44d6e7c5.woff", "vagG"],
                    "vagG",
                ],
                "./../../dist/fonts/Tuffy-Regular.ttf": [
                    ["Tuffy-Regular.08327c29.ttf", "tLFO"],
                    "tLFO",
                ],
                "./../../dist/fonts/Tuffy-Regular.svg": [
                    ["Tuffy-Regular.4a7a3993.svg", "Xf9p"],
                    "Xf9p",
                ],
            },
        ],
        epB2: [
            function (require, module, exports) {
                "use strict";
                require("../stylus/main.styl");
                var e = document.querySelector("header"),
                    d = document.querySelector("nav"),
                    i = null,
                    t = null,
                    n = document.querySelector(".sidebar-container"),
                    a = window.matchMedia("(min-width: 700px)"),
                    r = window.matchMedia("(max-width: 700px)"),
                    c = function (e) {
                        e.matches &&
                            (n.classList.remove("hide"),
                            n.appendChild(d),
                            t && n.appendChild(t));
                    },
                    s = function (a) {
                        a.matches &&
                            (n.classList.add("hide"),
                            e.appendChild(d),
                            t && i.appendChild(t));
                    };
                a.addListener(c), r.addListener(s), c(a), s(r);
            },
            { "../stylus/main.styl": "vMKL" },
        ],
    },
    {},
    ["epB2"],
    null
);
//# sourceMappingURL=main.js.map
