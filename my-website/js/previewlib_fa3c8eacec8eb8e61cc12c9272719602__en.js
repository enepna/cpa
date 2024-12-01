(function() {
    var GBS_HOST = "https://books.google.com/";
    var f, aa = [];

    function ba(a) {
        return function() {
            return aa[a].apply(this, arguments)
        }
    }

    function ca(a, b) {
        return aa[a] = b
    }

    function da(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var ea = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ia(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ja = ia(this);

    function ka(a, b) {
        if (b) a: {
            var c = ja;a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c)) break a;
                c = c[e]
            }
            a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ea(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    ka("Symbol", function(a) {
        function b(g) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (g || "") + "_" + e++, g)
        }

        function c(g, h) {
            this.i = g;
            ea(this, "description", {
                configurable: !0,
                writable: !0,
                value: h
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.i
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    });
    ka("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ja[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ea(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return la(da(this))
                }
            })
        }
        return a
    });

    function la(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        };
        return a
    }

    function ma(a) {
        return a.raw = a
    }

    function na(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: da(a)
        }
    }

    function oa(a) {
        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
        return c
    }
    var pa = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        qa;
    if ("function" == typeof Object.setPrototypeOf) qa = Object.setPrototypeOf;
    else {
        var ra;
        a: {
            var sa = {
                    a: !0
                },
                ua = {};
            try {
                ua.__proto__ = sa;
                ra = ua.a;
                break a
            } catch (a) {}
            ra = !1
        }
        qa = ra ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var va = qa;

    function n(a, b) {
        a.prototype = pa(b.prototype);
        a.prototype.constructor = a;
        if (va) va(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.ua = b.prototype
    }

    function wa() {
        this.s = !1;
        this.i = null;
        this.N = void 0;
        this.j = 1;
        this.ka = 0;
        this.o = null
    }

    function ya(a) {
        if (a.s) throw new TypeError("Generator is already running");
        a.s = !0
    }
    wa.prototype.O = function(a) {
        this.N = a
    };

    function za(a, b) {
        a.o = {
            st: b,
            Wu: !0
        };
        a.j = a.ka
    }
    wa.prototype.return = function(a) {
        this.o = {
            return: a
        };
        this.j = this.ka
    };

    function Aa(a) {
        this.i = new wa;
        this.j = a
    }

    function Ca(a, b) {
        ya(a.i);
        var c = a.i.i;
        if (c) return Da(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.i.return);
        a.i.return(b);
        return Ea(a)
    }

    function Da(a, b, c, d) {
        try {
            var e = b.call(a.i.i, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.i.s = !1, e;
            var g = e.value
        } catch (h) {
            return a.i.i = null, za(a.i, h), Ea(a)
        }
        a.i.i = null;
        d.call(a.i, g);
        return Ea(a)
    }

    function Ea(a) {
        for (; a.i.j;) try {
            var b = a.j(a.i);
            if (b) return a.i.s = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.i.N = void 0, za(a.i, c)
        }
        a.i.s = !1;
        if (a.i.o) {
            b = a.i.o;
            a.i.o = null;
            if (b.Wu) throw b.st;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    }

    function Fa(a) {
        this.next = function(b) {
            ya(a.i);
            a.i.i ? b = Da(a, a.i.i.next, b, a.i.O) : (a.i.O(b), b = Ea(a));
            return b
        };
        this.throw = function(b) {
            ya(a.i);
            a.i.i ? b = Da(a, a.i.i["throw"], b, a.i.O) : (za(a.i, b), b = Ea(a));
            return b
        };
        this.return = function(b) {
            return Ca(a, b)
        };
        this[Symbol.iterator] = function() {
            return this
        }
    }

    function Ga(a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }
        return new Promise(function(d, e) {
            function g(h) {
                h.done ? d(h.value) : Promise.resolve(h.value).then(b, c).then(g, e)
            }
            g(a.next())
        })
    }

    function Ha(a) {
        return Ga(new Fa(new Aa(a)))
    }

    function Ia() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    }
    ka("Promise", function(a) {
        function b(h) {
            this.i = 0;
            this.o = void 0;
            this.j = [];
            this.ka = !1;
            var k = this.s();
            try {
                h(k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        }

        function c() {
            this.i = null
        }

        function d(h) {
            return h instanceof b ? h : new b(function(k) {
                k(h)
            })
        }
        if (a) return a;
        c.prototype.j = function(h) {
            if (null == this.i) {
                this.i = [];
                var k = this;
                this.o(function() {
                    k.N()
                })
            }
            this.i.push(h)
        };
        var e = ja.setTimeout;
        c.prototype.o = function(h) {
            e(h, 0)
        };
        c.prototype.N = function() {
            for (; this.i && this.i.length;) {
                var h = this.i;
                this.i = [];
                for (var k = 0; k < h.length; ++k) {
                    var l =
                        h[k];
                    h[k] = null;
                    try {
                        l()
                    } catch (m) {
                        this.s(m)
                    }
                }
            }
            this.i = null
        };
        c.prototype.s = function(h) {
            this.o(function() {
                throw h;
            })
        };
        b.prototype.s = function() {
            function h(m) {
                return function(p) {
                    l || (l = !0, m.call(k, p))
                }
            }
            var k = this,
                l = !1;
            return {
                resolve: h(this.va),
                reject: h(this.N)
            }
        };
        b.prototype.va = function(h) {
            if (h === this) this.N(new TypeError("A Promise cannot resolve to itself"));
            else if (h instanceof b) this.Ca(h);
            else {
                a: switch (typeof h) {
                    case "object":
                        var k = null != h;
                        break a;
                    case "function":
                        k = !0;
                        break a;
                    default:
                        k = !1
                }
                k ? this.Na(h) : this.O(h)
            }
        };
        b.prototype.Na = function(h) {
            var k = void 0;
            try {
                k = h.then
            } catch (l) {
                this.N(l);
                return
            }
            "function" == typeof k ? this.Da(k, h) : this.O(h)
        };
        b.prototype.N = function(h) {
            this.ha(2, h)
        };
        b.prototype.O = function(h) {
            this.ha(1, h)
        };
        b.prototype.ha = function(h, k) {
            if (0 != this.i) throw Error("Cannot settle(" + h + ", " + k + "): Promise already settled in state" + this.i);
            this.i = h;
            this.o = k;
            2 === this.i && this.wa();
            this.oa()
        };
        b.prototype.wa = function() {
            var h = this;
            e(function() {
                    if (h.ta()) {
                        var k = ja.console;
                        "undefined" !== typeof k && k.error(h.o)
                    }
                },
                1)
        };
        b.prototype.ta = function() {
            if (this.ka) return !1;
            var h = ja.CustomEvent,
                k = ja.Event,
                l = ja.dispatchEvent;
            if ("undefined" === typeof l) return !0;
            "function" === typeof h ? h = new h("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof k ? h = new k("unhandledrejection", {
                cancelable: !0
            }) : (h = ja.document.createEvent("CustomEvent"), h.initCustomEvent("unhandledrejection", !1, !0, h));
            h.promise = this;
            h.reason = this.o;
            return l(h)
        };
        b.prototype.oa = function() {
            if (null != this.j) {
                for (var h = 0; h < this.j.length; ++h) g.j(this.j[h]);
                this.j =
                    null
            }
        };
        var g = new c;
        b.prototype.Ca = function(h) {
            var k = this.s();
            h.kj(k.resolve, k.reject)
        };
        b.prototype.Da = function(h, k) {
            var l = this.s();
            try {
                h.call(k, l.resolve, l.reject)
            } catch (m) {
                l.reject(m)
            }
        };
        b.prototype.then = function(h, k) {
            function l(D, E) {
                return "function" == typeof D ? function(H) {
                    try {
                        m(D(H))
                    } catch (O) {
                        p(O)
                    }
                } : E
            }
            var m, p, w = new b(function(D, E) {
                m = D;
                p = E
            });
            this.kj(l(h, m), l(k, p));
            return w
        };
        b.prototype.catch = function(h) {
            return this.then(void 0, h)
        };
        b.prototype.kj = function(h, k) {
            function l() {
                switch (m.i) {
                    case 1:
                        h(m.o);
                        break;
                    case 2:
                        k(m.o);
                        break;
                    default:
                        throw Error("Unexpected state: " + m.i);
                }
            }
            var m = this;
            null == this.j ? g.j(l) : this.j.push(l);
            this.ka = !0
        };
        b.resolve = d;
        b.reject = function(h) {
            return new b(function(k, l) {
                l(h)
            })
        };
        b.race = function(h) {
            return new b(function(k, l) {
                for (var m = na(h), p = m.next(); !p.done; p = m.next()) d(p.value).kj(k, l)
            })
        };
        b.all = function(h) {
            var k = na(h),
                l = k.next();
            return l.done ? d([]) : new b(function(m, p) {
                function w(H) {
                    return function(O) {
                        D[H] = O;
                        E--;
                        0 == E && m(D)
                    }
                }
                var D = [],
                    E = 0;
                do D.push(void 0), E++, d(l.value).kj(w(D.length -
                    1), p), l = k.next(); while (!l.done)
            })
        };
        return b
    });

    function Ka(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    ka("WeakMap", function(a) {
        function b(l) {
            this.Cb = (k += Math.random() + 1).toString();
            if (l) {
                l = na(l);
                for (var m; !(m = l.next()).done;) m = m.value, this.set(m[0], m[1])
            }
        }

        function c() {}

        function d(l) {
            var m = typeof l;
            return "object" === m && null !== l || "function" === m
        }

        function e(l) {
            if (!Ka(l, h)) {
                var m = new c;
                ea(l, h, {
                    value: m
                })
            }
        }

        function g(l) {
            var m = Object[l];
            m && (Object[l] = function(p) {
                if (p instanceof c) return p;
                Object.isExtensible(p) && e(p);
                return m(p)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var l = Object.seal({}),
                        m = Object.seal({}),
                        p = new a([
                            [l, 2],
                            [m, 3]
                        ]);
                    if (2 != p.get(l) || 3 != p.get(m)) return !1;
                    p.delete(l);
                    p.set(m, 4);
                    return !p.has(l) && 4 == p.get(m)
                } catch (w) {
                    return !1
                }
            }()) return a;
        var h = "$jscomp_hidden_" + Math.random();
        g("freeze");
        g("preventExtensions");
        g("seal");
        var k = 0;
        b.prototype.set = function(l, m) {
            if (!d(l)) throw Error("Invalid WeakMap key");
            e(l);
            if (!Ka(l, h)) throw Error("WeakMap key fail: " + l);
            l[h][this.Cb] = m;
            return this
        };
        b.prototype.get = function(l) {
            return d(l) && Ka(l, h) ? l[h][this.Cb] : void 0
        };
        b.prototype.has = function(l) {
            return d(l) &&
                Ka(l, h) && Ka(l[h], this.Cb)
        };
        b.prototype.delete = function(l) {
            return d(l) && Ka(l, h) && Ka(l[h], this.Cb) ? delete l[h][this.Cb] : !1
        };
        return b
    });
    ka("Map", function(a) {
        function b() {
            var k = {};
            return k.df = k.next = k.head = k
        }

        function c(k, l) {
            var m = k.i;
            return la(function() {
                if (m) {
                    for (; m.head != k.i;) m = m.df;
                    for (; m.next != m.head;) return m = m.next, {
                        done: !1,
                        value: l(m)
                    };
                    m = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(k, l) {
            var m = l && typeof l;
            "object" == m || "function" == m ? g.has(l) ? m = g.get(l) : (m = "" + ++h, g.set(l, m)) : m = "p_" + l;
            var p = k.j[m];
            if (p && Ka(k.j, m))
                for (k = 0; k < p.length; k++) {
                    var w = p[k];
                    if (l !== l && w.key !== w.key || l === w.key) return {
                        id: m,
                        list: p,
                        index: k,
                        Pc: w
                    }
                }
            return {
                id: m,
                list: p,
                index: -1,
                Pc: void 0
            }
        }

        function e(k) {
            this.j = {};
            this.i = b();
            this.size = 0;
            if (k) {
                k = na(k);
                for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
            }
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var k = Object.seal({
                            x: 4
                        }),
                        l = new a(na([
                            [k, "s"]
                        ]));
                    if ("s" != l.get(k) || 1 != l.size || l.get({
                            x: 4
                        }) || l.set({
                            x: 4
                        }, "t") != l || 2 != l.size) return !1;
                    var m = l.entries(),
                        p = m.next();
                    if (p.done || p.value[0] != k || "s" != p.value[1]) return !1;
                    p = m.next();
                    return p.done || 4 != p.value[0].x ||
                        "t" != p.value[1] || !m.next().done ? !1 : !0
                } catch (w) {
                    return !1
                }
            }()) return a;
        var g = new WeakMap;
        e.prototype.set = function(k, l) {
            k = 0 === k ? 0 : k;
            var m = d(this, k);
            m.list || (m.list = this.j[m.id] = []);
            m.Pc ? m.Pc.value = l : (m.Pc = {
                next: this.i,
                df: this.i.df,
                head: this.i,
                key: k,
                value: l
            }, m.list.push(m.Pc), this.i.df.next = m.Pc, this.i.df = m.Pc, this.size++);
            return this
        };
        e.prototype.delete = function(k) {
            k = d(this, k);
            return k.Pc && k.list ? (k.list.splice(k.index, 1), k.list.length || delete this.j[k.id], k.Pc.df.next = k.Pc.next, k.Pc.next.df = k.Pc.df,
                k.Pc.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this.j = {};
            this.i = this.i.df = b();
            this.size = 0
        };
        e.prototype.has = function(k) {
            return !!d(this, k).Pc
        };
        e.prototype.get = function(k) {
            return (k = d(this, k).Pc) && k.value
        };
        e.prototype.entries = function() {
            return c(this, function(k) {
                return [k.key, k.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(k) {
                return k.key
            })
        };
        e.prototype.values = function() {
            return c(this, function(k) {
                return k.value
            })
        };
        e.prototype.forEach = function(k, l) {
            for (var m = this.entries(),
                    p; !(p = m.next()).done;) p = p.value, k.call(l, p[1], p[0], this)
        };
        e.prototype[Symbol.iterator] = e.prototype.entries;
        var h = 0;
        return e
    });
    ka("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, g = 0; g < e; g++) {
                    var h = d[g];
                    if (b.call(c, h, g, d)) {
                        b = h;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });

    function La(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    ka("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = La(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    });
    ka("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = La(this, b, "startsWith"),
                e = d.length,
                g = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var h = 0; h < g && c < e;)
                if (d[c++] != b[h++]) return !1;
            return h >= g
        }
    });
    ka("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    });
    ka("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = La(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    });

    function Ma(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var g = c++;
                        return {
                            value: b(g, a[g]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[Symbol.iterator] = function() {
            return e
        };
        return e
    }
    ka("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Ma(this, function(b) {
                return b
            })
        }
    });
    ka("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(k) {
                return k
            };
            var e = [],
                g = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if ("function" == typeof g) {
                b = g.call(b);
                for (var h = 0; !(g = b.next()).done;) e.push(c.call(d, g.value, h++))
            } else
                for (g = b.length, h = 0; h < g; h++) e.push(c.call(d, b[h], h));
            return e
        }
    });
    ka("Set", function(a) {
        function b(c) {
            this.i = new Map;
            if (c) {
                c = na(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.i.size
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(na([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        g = e.next();
                    if (g.done || g.value[0] != c || g.value[1] != c) return !1;
                    g = e.next();
                    return g.done || g.value[0] == c || 4 != g.value[0].x ||
                        g.value[1] != g.value[0] ? !1 : e.next().done
                } catch (h) {
                    return !1
                }
            }()) return a;
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.i.set(c, c);
            this.size = this.i.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.i.delete(c);
            this.size = this.i.size;
            return c
        };
        b.prototype.clear = function() {
            this.i.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.i.has(c)
        };
        b.prototype.entries = function() {
            return this.i.entries()
        };
        b.prototype.values = function() {
            return this.i.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] =
            b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.i.forEach(function(g) {
                return c.call(d, g, g, e)
            })
        };
        return b
    });
    ka("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Ma(this, function(b, c) {
                return [b, c]
            })
        }
    });
    var Na = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Ka(d, e) && (a[e] = d[e])
        }
        return a
    };
    ka("Object.assign", function(a) {
        return a || Na
    });
    ka("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Ma(this, function(b, c) {
                return c
            })
        }
    });
    ka("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) Ka(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    ka("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    });
    ka("Array.prototype.fill", function(a) {
        return a ? a : function(b, c, d) {
            var e = this.length || 0;
            0 > c && (c = Math.max(0, e + c));
            if (null == d || d > e) d = e;
            d = Number(d);
            0 > d && (d = Math.max(0, e + d));
            for (c = Number(c || 0); c < d; c++) this[c] = b;
            return this
        }
    });

    function Oa(a) {
        return a ? a : Array.prototype.fill
    }
    ka("Int8Array.prototype.fill", Oa);
    ka("Uint8Array.prototype.fill", Oa);
    ka("Uint8ClampedArray.prototype.fill", Oa);
    ka("Int16Array.prototype.fill", Oa);
    ka("Uint16Array.prototype.fill", Oa);
    ka("Int32Array.prototype.fill", Oa);
    ka("Uint32Array.prototype.fill", Oa);
    ka("Float32Array.prototype.fill", Oa);
    ka("Float64Array.prototype.fill", Oa);
    ka("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    ka("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var g = d[c];
                if (g === b || Object.is(g, b)) return !0
            }
            return !1
        }
    });
    ka("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== La(this, b, "includes").indexOf(b, c || 0)
        }
    });
    ka("String.prototype.replaceAll", function(a) {
        return a ? a : function(b, c) {
            if (b instanceof RegExp && !b.global) throw new TypeError("String.prototype.replaceAll called with a non-global RegExp argument.");
            return b instanceof RegExp ? this.replace(b, c) : this.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), c)
        }
    });
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var Pa = Pa || {},
        q = this || self;

    function Qa(a, b) {
        a = a.split(".");
        b = b || q;
        for (var c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    }

    function Ra(a) {
        a.kg = void 0;
        a.Ib = function() {
            return a.kg ? a.kg : a.kg = new a
        }
    }

    function Sa(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function Ta(a) {
        var b = Sa(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function Ua(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function Va(a) {
        return Object.prototype.hasOwnProperty.call(a, Wa) && a[Wa] || (a[Wa] = ++Xa)
    }
    var Wa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Xa = 0;

    function Ya(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Za(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function r(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? r = Ya : r = Za;
        return r.apply(null, arguments)
    }

    function t(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function $a() {
        return Date.now()
    }

    function bb(a, b) {
        a = a.split(".");
        var c = q;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function u(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.ua = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Zw = function(d, e, g) {
            for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++) h[k - 2] = arguments[k];
            return b.prototype[e].apply(d, h)
        }
    }

    function cb(a) {
        return a
    };

    function db(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, db);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    u(db, Error);
    db.prototype.name = "CustomError";
    var eb;

    function fb(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        db.call(this, c + a[d])
    }
    u(fb, db);
    fb.prototype.name = "AssertionError";

    function hb(a) {
        return a[a.length - 1]
    }
    var ib = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        jb = Array.prototype.lastIndexOf ? function(a, b) {
            return Array.prototype.lastIndexOf.call(a, b, a.length - 1)
        } : function(a, b) {
            var c = a.length - 1;
            0 > c && (c = Math.max(0, a.length + c));
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.lastIndexOf(b, c);
            for (; 0 <= c; c--)
                if (c in a && a[c] === b) return c;
            return -1
        },
        v = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = "string" === typeof a ? a.split("") : a, g = 0; g < d; g++) g in e && b.call(c, e[g], g, a)
        },
        kb = Array.prototype.filter ? function(a, b, c) {
            return Array.prototype.filter.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = [], g = 0, h = "string" === typeof a ? a.split("") : a, k = 0; k < d; k++)
                if (k in h) {
                    var l = h[k];
                    b.call(c, l, k, a) && (e[g++] = l)
                } return e
        },
        lb = Array.prototype.map ?
        function(a, b, c) {
            return Array.prototype.map.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = Array(d), g = "string" === typeof a ? a.split("") : a, h = 0; h < d; h++) h in g && (e[h] = b.call(c, g[h], h, a));
            return e
        },
        mb = Array.prototype.some ? function(a, b) {
            return Array.prototype.some.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        };

    function nb(a, b) {
        b = ob(a, b);
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function ob(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, g = 0; g < d; g++)
            if (g in e && b.call(c, e[g], g, a)) return g;
        return -1
    }

    function pb(a, b) {
        return 0 <= ib(a, b)
    }

    function qb(a, b) {
        pb(a, b) || a.push(b)
    }

    function rb(a, b) {
        b = ib(a, b);
        var c;
        (c = 0 <= b) && sb(a, b);
        return c
    }

    function sb(a, b) {
        Array.prototype.splice.call(a, b, 1)
    }

    function tb(a, b) {
        b = ob(a, b);
        0 <= b && sb(a, b)
    }

    function ub(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function vb(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function wb(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (Ta(d)) {
                var e = a.length || 0,
                    g = d.length || 0;
                a.length = e + g;
                for (var h = 0; h < g; h++) a[e + h] = d[h]
            } else a.push(d)
        }
    }

    function xb(a, b, c, d) {
        Array.prototype.splice.apply(a, yb(arguments, 1))
    }

    function yb(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function zb(a, b) {
        a.sort(b || Ab)
    }

    function Ab(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function Bb(a, b) {
        for (var c = {}, d = 0; d < a.length; d++) {
            var e = a[d],
                g = b.call(void 0, e, d, a);
            void 0 !== g && (c[g] || (c[g] = [])).push(e)
        }
        return c
    }

    function Cb(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (Array.isArray(d))
                for (var e = 0; e < d.length; e += 8192)
                    for (var g = Cb.apply(null, yb(d, e, e + 8192)), h = 0; h < g.length; h++) b.push(g[h]);
            else b.push(d)
        }
        return b
    }

    function Db(a) {
        if (a.length) {
            var b = 1 % a.length;
            0 < b ? Array.prototype.unshift.apply(a, a.splice(-b, b)) : 0 > b && Array.prototype.push.apply(a, a.splice(0, -b))
        }
        return a
    }

    function Eb(a, b) {
        return ub.apply([], lb(a, b))
    };

    function Fb(a) {
        return "string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || ""
    }

    function Gb(a) {
        return a.classList ? a.classList : Fb(a).match(/\S+/g) || []
    }

    function Hb(a, b) {
        "string" == typeof a.className ? a.className = b : a.setAttribute && a.setAttribute("class", b)
    }

    function Ib(a, b) {
        return a.classList ? a.classList.contains(b) : pb(Gb(a), b)
    }

    function x(a, b) {
        if (a.classList) a.classList.add(b);
        else if (!Ib(a, b)) {
            var c = Fb(a);
            Hb(a, c + (0 < c.length ? " " + b : b))
        }
    }

    function Jb(a, b) {
        if (a.classList) Array.prototype.forEach.call(b, function(e) {
            x(a, e)
        });
        else {
            var c = {};
            Array.prototype.forEach.call(Gb(a), function(e) {
                c[e] = !0
            });
            Array.prototype.forEach.call(b, function(e) {
                c[e] = !0
            });
            b = "";
            for (var d in c) b += 0 < b.length ? " " + d : d;
            Hb(a, b)
        }
    }

    function Kb(a, b) {
        a.classList ? a.classList.remove(b) : Ib(a, b) && Hb(a, Array.prototype.filter.call(Gb(a), function(c) {
            return c != b
        }).join(" "))
    }

    function Lb(a, b) {
        a.classList ? Array.prototype.forEach.call(b, function(c) {
            Kb(a, c)
        }) : Hb(a, Array.prototype.filter.call(Gb(a), function(c) {
            return !pb(b, c)
        }).join(" "))
    }

    function y(a, b, c) {
        c ? x(a, b) : Kb(a, b)
    }

    function Mb(a, b, c) {
        Kb(a, b);
        x(a, c)
    };

    function Nb(a, b) {
        return 0 == a.lastIndexOf(b, 0)
    }

    function Ob(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }

    function Pb(a) {
        return /^[\s\xa0]*$/.test(a)
    }
    var Qb = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };

    function Rb(a) {
        if (!Sb.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Tb, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Ub, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Vb, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Wb, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Xb, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Yb, "&#0;"));
        return a
    }
    var Tb = /&/g,
        Ub = /</g,
        Vb = />/g,
        Wb = /"/g,
        Xb = /'/g,
        Yb = /\x00/g,
        Sb = /[\x00&<>"']/;

    function Zb(a, b) {
        return -1 != a.indexOf(b)
    }

    function $b(a, b) {
        var c = 0;
        a = Qb(String(a)).split(".");
        b = Qb(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var g = a[e] || "",
                h = b[e] || "";
            do {
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                if (0 == g[0].length && 0 == h[0].length) break;
                c = ac(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || ac(0 == g[2].length, 0 == h[2].length) || ac(g[2], h[2]);
                g = g[3];
                h = h[3]
            } while (0 == c)
        }
        return c
    }

    function ac(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function bc() {
        var a = q.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function z(a) {
        return Zb(bc(), a)
    };

    function cc() {
        return z("Trident") || z("MSIE")
    }

    function dc() {
        return z("Firefox") || z("FxiOS")
    }

    function ec() {
        return (z("Chrome") || z("CriOS")) && !z("Edge") || z("Silk")
    }

    function fc() {
        var a = bc();
        if (cc()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
        } else a = "";
        if ("" === a) return NaN;
        a = a.split(".");
        return 0 === a.length ? NaN : Number(a[0])
    };

    function gc() {
        return z("iPhone") && !z("iPod") && !z("iPad")
    }

    function hc() {
        return gc() || z("iPad") || z("iPod")
    };

    function ic(a) {
        ic[" "](a);
        return a
    }
    ic[" "] = function() {};

    function jc(a, b) {
        try {
            return ic(a[b]), !0
        } catch (c) {}
        return !1
    }

    function kc(a, b, c, d) {
        d = d ? d(b) : b;
        return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b)
    };
    var lc = z("Opera"),
        A = cc(),
        mc = z("Edge"),
        nc = mc || A,
        oc = z("Gecko") && !(Zb(bc().toLowerCase(), "webkit") && !z("Edge")) && !(z("Trident") || z("MSIE")) && !z("Edge"),
        pc = Zb(bc().toLowerCase(), "webkit") && !z("Edge"),
        qc = pc && z("Mobile"),
        rc = z("Macintosh"),
        sc = z("Windows"),
        tc = z("Linux") || z("CrOS"),
        uc = z("Android"),
        vc = gc(),
        wc = z("iPad"),
        xc = z("iPod"),
        yc = hc();

    function zc() {
        var a = q.document;
        return a ? a.documentMode : void 0
    }
    var Ac;
    a: {
        var Bc = "",
            Cc = function() {
                var a = bc();
                if (oc) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (mc) return /Edge\/([\d\.]+)/.exec(a);
                if (A) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (pc) return /WebKit\/(\S+)/.exec(a);
                if (lc) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Cc && (Bc = Cc ? Cc[1] : "");
        if (A) {
            var Dc = zc();
            if (null != Dc && Dc > parseFloat(Bc)) {
                Ac = String(Dc);
                break a
            }
        }
        Ac = Bc
    }
    var Ec = Ac,
        Fc = {};

    function Gc(a) {
        return kc(Fc, a, function() {
            return 0 <= $b(Ec, a)
        })
    }

    function Hc(a) {
        return Number(Ic) >= a
    }
    var Jc;
    if (q.document && A) {
        var Kc = zc();
        Jc = Kc ? Kc : parseInt(Ec, 10) || void 0
    } else Jc = void 0;
    var Ic = Jc;
    var Lc = A || pc;

    function Mc() {
        return !0
    }

    function Nc() {
        return null
    }

    function Oc() {}

    function Pc(a) {
        return a
    }

    function Qc(a, b) {
        function c() {}
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    }

    function Rc(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };

    function Sc(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function Tc(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function Uc(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    }

    function Vc(a, b) {
        for (var c in a)
            if (a[c] == b) return !0;
        return !1
    }

    function Wc(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return c
    }

    function Xc() {
        var a = Yc,
            b;
        for (b in a) return !1;
        return !0
    }

    function Zc(a, b, c) {
        if (null !== a && b in a) throw Error('The object already contains the key "' + b + '"');
        a[b] = c
    }

    function $c(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    }
    var ad = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function bd(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var g = 0; g < ad.length; g++) c = ad[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }

    function cd(a) {
        var b = arguments.length;
        if (1 == b && Array.isArray(arguments[0])) return cd.apply(null, arguments[0]);
        if (b % 2) throw Error("Uneven number of arguments");
        for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
        return c
    };
    var dd = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var ed;

    function fd() {
        if (void 0 === ed) {
            var a = null,
                b = q.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: cb,
                        createScript: cb,
                        createScriptURL: cb
                    })
                } catch (c) {
                    q.console && q.console.error(c.message)
                }
                ed = a
            } else ed = a
        }
        return ed
    };

    function gd(a, b) {
        this.i = a === hd && b || "";
        this.j = id
    }
    gd.prototype.Yd = !0;
    gd.prototype.vd = function() {
        return this.i
    };

    function jd(a) {
        return a instanceof gd && a.constructor === gd && a.j === id ? a.i : "type_error:Const"
    }

    function kd(a) {
        return new gd(hd, a)
    }
    var id = {},
        hd = {};
    var ld = {};

    function md(a, b) {
        this.i = b === ld ? a : "";
        this.Yd = !0
    }
    md.prototype.toString = function() {
        return this.i.toString()
    };
    md.prototype.vd = function() {
        return this.i.toString()
    };

    function nd(a, b) {
        this.i = b === od ? a : ""
    }
    nd.prototype.toString = function() {
        return this.i + ""
    };
    nd.prototype.Yd = !0;
    nd.prototype.vd = function() {
        return this.i.toString()
    };

    function pd(a) {
        return a instanceof nd && a.constructor === nd ? a.i : "type_error:TrustedResourceUrl"
    }
    var qd = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        od = {};

    function rd(a) {
        var b = fd();
        a = b ? b.createScriptURL(a) : a;
        return new nd(a, od)
    }

    function sd(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var g = 0; g < e.length; g++) {
                    var h = e[g];
                    null != h && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(h)))
                }
            } return b
    };

    function td(a, b) {
        this.i = b === ud ? a : ""
    }
    td.prototype.toString = function() {
        return this.i.toString()
    };
    td.prototype.Yd = !0;
    td.prototype.vd = function() {
        return this.i.toString()
    };

    function vd(a) {
        return a instanceof td && a.constructor === td ? a.i : "type_error:SafeUrl"
    }
    var wd = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        xd = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function yd(a) {
        a instanceof td || (a = "object" == typeof a && a.Yd ? a.vd() : String(a), xd.test(a) ? a = zd(a) : (a = String(a).replace(/(%0A|%0D)/g, ""), a = a.match(wd) ? zd(a) : null));
        return a || Ad
    }

    function Bd(a) {
        if (a instanceof td) return a;
        a = "object" == typeof a && a.Yd ? a.vd() : String(a);
        xd.test(a) || (a = "about:invalid#zClosurez");
        return zd(a)
    }
    var ud = {};

    function zd(a) {
        return new td(a, ud)
    }
    var Ad = zd("about:invalid#zClosurez");
    var Cd = {};

    function Dd(a, b) {
        this.i = b === Cd ? a : "";
        this.Yd = !0
    }
    Dd.prototype.vd = function() {
        return this.i
    };
    Dd.prototype.toString = function() {
        return this.i.toString()
    };

    function Ed(a) {
        return a instanceof Dd && a.constructor === Dd ? a.i : "type_error:SafeStyle"
    }

    function Fd(a) {
        var b = "",
            c;
        for (c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
                var d = a[c];
                null != d && (d = Array.isArray(d) ? d.map(Gd).join(" ") : Gd(d), b += c + ":" + d + ";")
            } return b ? new Dd(b, Cd) : Hd
    }
    var Hd = new Dd("", Cd);

    function Gd(a) {
        if (a instanceof td) return 'url("' + vd(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof gd) a = jd(a);
        else {
            a = String(a);
            var b = a.replace(Id, "$1").replace(Id, "$1").replace(Jd, "url");
            if (Kd.test(b)) {
                if (b = !Ld.test(a)) {
                    for (var c = b = !0, d = 0; d < a.length; d++) {
                        var e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && Md(a)
                }
                a = b ? Nd(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new fb("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function Md(a) {
        for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    }
    var Kd = RegExp("^[-,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
        Jd = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
        Id = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"),
        Ld = /\/\*/;

    function Nd(a) {
        return a.replace(Jd, function(b, c, d, e) {
            var g = "";
            d = d.replace(/^(['"])(.*)\1$/, function(h, k, l) {
                g = k;
                return l
            });
            b = yd(d).vd();
            return c + g + b + g + e
        })
    };
    var Od = {};

    function Pd(a, b) {
        this.i = b === Od ? a : "";
        this.Yd = !0
    }
    Pd.prototype.toString = function() {
        return this.i.toString()
    };

    function Qd(a, b) {
        if (Zb(a, "<")) throw Error("Selector does not allow '<', got: " + a);
        var c = a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
        if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c)) throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + a);
        a: {
            for (var d = {
                    "(": ")",
                    "[": "]"
                }, e = [], g = 0; g < c.length; g++) {
                var h = c[g];
                if (d[h]) e.push(d[h]);
                else if (Vc(d, h) && e.pop() != h) {
                    c = !1;
                    break a
                }
            }
            c = 0 == e.length
        }
        if (!c) throw Error("() and [] in selector must be balanced, got: " + a);
        b instanceof
        Dd || (b = Fd(b));
        return new Pd(a + "{" + Ed(b).replace(/</g, "\\3C ") + "}", Od)
    }

    function Rd(a) {
        function b(d) {
            Array.isArray(d) ? d.forEach(b) : c += Sd(d)
        }
        var c = "";
        Array.prototype.forEach.call(arguments, b);
        return new Pd(c, Od)
    }
    Pd.prototype.vd = function() {
        return this.i
    };

    function Sd(a) {
        return a instanceof Pd && a.constructor === Pd ? a.i : "type_error:SafeStyleSheet"
    }
    var Td = new Pd("", Od);
    var Ud = {};

    function Vd(a, b) {
        this.i = b === Ud ? a : "";
        this.Yd = !0
    }
    Vd.prototype.vd = function() {
        return this.i.toString()
    };
    Vd.prototype.toString = function() {
        return this.i.toString()
    };

    function Wd(a) {
        return Xd(a).toString()
    }

    function Xd(a) {
        return a instanceof Vd && a.constructor === Vd ? a.i : "type_error:SafeHtml"
    }

    function Yd(a) {
        return a instanceof Vd ? a : Zd(Rb("object" == typeof a && a.Yd ? a.vd() : String(a)))
    }

    function $d(a) {
        if (a instanceof Vd) return a;
        a = Yd(a);
        return Zd(Wd(a).replace(/(\r\n|\r|\n)/g, "<br>"))
    }

    function ae(a, b, c) {
        be(String(a));
        return ce(String(a), b, c)
    }

    function be(a) {
        if (!de.test(a)) throw Error("");
        if (a.toUpperCase() in ee) throw Error("");
    }

    function fe(a) {
        function b(e) {
            Array.isArray(e) ? e.forEach(b) : (e = Yd(e), d.push(Wd(e)))
        }
        var c = Yd(ge),
            d = [];
        a.forEach(b);
        return Zd(d.join(Wd(c)))
    }

    function he(a) {
        return fe(Array.prototype.slice.call(arguments))
    }

    function Zd(a) {
        var b = fd();
        a = b ? b.createHTML(a) : a;
        return new Vd(a, Ud)
    }

    function ce(a, b, c) {
        b = "<" + a + ie(b);
        null == c ? c = [] : Array.isArray(c) || (c = [c]);
        !0 === dd[a.toLowerCase()] ? b += ">" : (c = he(c), b += ">" + Wd(c) + "</" + a + ">");
        return Zd(b)
    }

    function ie(a) {
        var b = "";
        if (a)
            for (var c in a)
                if (Object.prototype.hasOwnProperty.call(a, c)) {
                    if (!de.test(c)) throw Error("");
                    var d = a[c];
                    if (null != d) {
                        var e = c;
                        if (d instanceof gd) d = jd(d);
                        else if ("style" == e.toLowerCase()) {
                            if (!Ua(d)) throw Error("");
                            d instanceof Dd || (d = Fd(d));
                            d = Ed(d)
                        } else {
                            if (/^on/i.test(e)) throw Error("");
                            if (e.toLowerCase() in je)
                                if (d instanceof nd) d = pd(d).toString();
                                else if (d instanceof td) d = vd(d);
                            else if ("string" === typeof d) d = yd(d).vd();
                            else throw Error("");
                        }
                        d.Yd && (d = d.vd());
                        e = e + '="' + Rb(String(d)) +
                            '"';
                        b += " " + e
                    }
                } return b
    }
    var de = /^[a-zA-Z0-9-]+$/,
        je = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        ee = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        },
        ke = Zd("<!DOCTYPE html>"),
        ge = new Vd(q.trustedTypes && q.trustedTypes.emptyHTML || "", Ud),
        le = Zd("<br>");

    function me(a, b, c) {
        a.insertAdjacentHTML(b, Xd(c))
    }
    var ne = Rc(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = Xd(ge);
        return !b.parentElement
    });

    function oe(a, b) {
        if (ne())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = Xd(b)
    }

    function pe(a, b) {
        b = b instanceof td ? b : Bd(b);
        a.href = vd(b)
    }

    function qe(a, b) {
        var c = re(a.ownerDocument && a.ownerDocument.defaultView);
        c && a.setAttribute("nonce", c);
        a.src = pd(b)
    }

    function se(a, b) {
        b = b instanceof td ? b : Bd(b);
        a.href = vd(b)
    }

    function te(a, b) {
        b = b instanceof td ? b : Bd(b);
        a.replace(vd(b))
    }

    function re(a) {
        return ue("script[nonce]", a)
    }
    var ve = /^[\w+/_-]+[=]{0,2}$/;

    function ue(a, b) {
        b = (b || q).document;
        return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && ve.test(a) ? a : "" : ""
    };

    function we(a, b, c) {
        return Math.min(Math.max(a, b), c)
    };

    function B(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    f = B.prototype;
    f.clone = function() {
        return new B(this.x, this.y)
    };

    function xe(a, b) {
        return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1
    }

    function ye(a, b) {
        var c = a.x - b.x;
        a = a.y - b.y;
        return Math.sqrt(c * c + a * a)
    }

    function ze(a, b) {
        return new B(a.x - b.x, a.y - b.y)
    }
    f.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    f.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    f.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    f.qk = function(a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this
    };

    function Ae(a, b) {
        this.width = a;
        this.height = b
    }

    function Be(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    }
    f = Ae.prototype;
    f.clone = function() {
        return new Ae(this.width, this.height)
    };
    f.aspectRatio = function() {
        return this.width / this.height
    };
    f.Hc = ba(6);
    f.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    f.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    f.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function Ce(a, b) {
        for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
        return d + c.join("%s")
    }

    function De(a) {
        return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
    }

    function Ee(a) {
        return a.replace(/\xa0|[ \t]+/g, " ")
    }

    function Fe(a) {
        return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
    }

    function Ge(a) {
        return decodeURIComponent(a.replace(/\+/g, " "))
    }

    function He(a) {
        return a = Rb(a)
    }

    function Ie(a) {
        return Zb(a, "&") ? "document" in q ? Je(a) : Ke(a) : a
    }

    function Je(a) {
        var b = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        var c = q.document.createElement("div");
        return a.replace(Le, function(d, e) {
            var g = b[d];
            if (g) return g;
            "#" == e.charAt(0) && (e = Number("0" + e.slice(1)), isNaN(e) || (g = String.fromCharCode(e)));
            g || (g = Zd(d + " "), oe(c, g), g = c.firstChild.nodeValue.slice(0, -1));
            return b[d] = g
        })
    }

    function Ke(a) {
        return a.replace(/&([^;]+);/g, function(b, c) {
            switch (c) {
                case "amp":
                    return "&";
                case "lt":
                    return "<";
                case "gt":
                    return ">";
                case "quot":
                    return '"';
                default:
                    return "#" != c.charAt(0) || (c = Number("0" + c.slice(1)), isNaN(c)) ? b : String.fromCharCode(c)
            }
        })
    }
    var Le = /&([^;\s<&]+);?/g;

    function Me(a, b) {
        a.length > b && (a = a.substring(0, b - 3) + "...");
        return a
    }

    function Ne(a) {
        return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    }
    var Oe = String.prototype.repeat ? function(a, b) {
        return a.repeat(b)
    } : function(a, b) {
        return Array(b + 1).join(a)
    };

    function Pe(a) {
        return null == a ? "" : String(a)
    }

    function Qe() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ $a()).toString(36)
    }

    function Re(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function Se(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function Te(a) {
        return a ? new Ue(Ve(a)) : eb || (eb = new Ue)
    }

    function C(a) {
        return We(document, a)
    }

    function We(a, b) {
        return "string" === typeof b ? a.getElementById(b) : b
    }

    function Xe(a, b) {
        return (b || document).getElementsByTagName(String(a))
    }

    function Ye(a, b, c) {
        return Ze(document, a, b, c)
    }

    function $e(a, b) {
        var c = b || document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : Ze(document, "*", a, b)
    }

    function af(a, b) {
        var c = b || document,
            d = null;
        c.getElementsByClassName ? d = c.getElementsByClassName(a)[0] : d = bf("*", a, b);
        return d || null
    }

    function Ze(a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, g = 0, h; h = a[g]; g++) b == h.nodeName && (d[e++] = h);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (g = e = 0; h = a[g]; g++) b = h.className, "function" == typeof b.split && pb(b.split(/\s+/), c) && (d[e++] = h);
            d.length = e;
            return d
        }
        return a
    }

    function bf(a, b, c) {
        var d = document,
            e = c || d,
            g = a && "*" != a ? String(a).toUpperCase() : "";
        return e.querySelectorAll && e.querySelector && (g || b) ? e.querySelector(g + (b ? "." + b : "")) : Ze(d, a, b, c)[0] || null
    }

    function cf(a, b) {
        Sc(b, function(c, d) {
            c && "object" == typeof c && c.Yd && (c = c.vd());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : df.hasOwnProperty(d) ? a.setAttribute(df[d], c) : Nb(d, "aria-") || Nb(d, "data-") ? a.setAttribute(d, c) : a[d] = c
        })
    }
    var df = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function ef(a) {
        a = (a || window).document;
        a = ff(a) ? a.documentElement : a.body;
        return new Ae(a.clientWidth, a.clientHeight)
    }

    function gf(a) {
        var b = hf(a);
        a = a.parentWindow || a.defaultView;
        return A && a.pageYOffset != b.scrollTop ? new B(b.scrollLeft, b.scrollTop) : new B(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function hf(a) {
        return a.scrollingElement ? a.scrollingElement : !pc && ff(a) ? a.documentElement : a.body || a.documentElement
    }

    function jf(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function F(a, b, c) {
        return kf(document, arguments)
    }

    function kf(a, b) {
        var c = b[1],
            d = lf(a, String(b[0]));
        c && ("string" === typeof c ? d.className = c : Array.isArray(c) ? d.className = c.join(" ") : cf(d, c));
        2 < b.length && mf(a, d, b, 2);
        return d
    }

    function mf(a, b, c, d) {
        function e(k) {
            k && b.appendChild("string" === typeof k ? a.createTextNode(k) : k)
        }
        for (; d < c.length; d++) {
            var g = c[d];
            if (!Ta(g) || Ua(g) && 0 < g.nodeType) e(g);
            else {
                a: {
                    if (g && "number" == typeof g.length) {
                        if (Ua(g)) {
                            var h = "function" == typeof g.item || "string" == typeof g.item;
                            break a
                        }
                        if ("function" === typeof g) {
                            h = "function" == typeof g.item;
                            break a
                        }
                    }
                    h = !1
                }
                v(h ? vb(g) : g, e)
            }
        }
    }

    function G(a) {
        return lf(document, a)
    }

    function lf(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function of(a) {
        return document.createTextNode(String(a))
    }

    function ff(a) {
        return "CSS1Compat" == a.compatMode
    }

    function pf(a, b) {
        a.appendChild(b)
    }

    function qf(a, b) {
        mf(Ve(a), a, arguments, 1)
    }

    function rf(a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    }

    function sf(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b)
    }

    function tf(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    }

    function uf(a, b, c) {
        a.insertBefore(b, a.childNodes[c] || null)
    }

    function I(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }

    function vf(a, b) {
        var c = b.parentNode;
        c && c.replaceChild(a, b)
    }

    function wf(a) {
        return void 0 != a.children ? a.children : Array.prototype.filter.call(a.childNodes, function(b) {
            return 1 == b.nodeType
        })
    }

    function xf(a) {
        return void 0 !== a.firstElementChild ? a.firstElementChild : yf(a.firstChild, !0)
    }

    function yf(a, b) {
        for (; a && 1 != a.nodeType;) a = b ? a.nextSibling : a.previousSibling;
        return a
    }

    function zf(a) {
        return Ua(a) && 1 == a.nodeType
    }

    function Af(a) {
        var b;
        if (Lc && (b = a.parentElement)) return b;
        b = a.parentNode;
        return zf(b) ? b : null
    }

    function Bf(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    }

    function Ve(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function Cf(a) {
        return a.contentDocument || a.contentWindow.document
    }

    function J(a, b) {
        if ("textContent" in a) a.textContent = b;
        else if (3 == a.nodeType) a.data = String(b);
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
            a.firstChild.data = String(b)
        } else rf(a), a.appendChild(Ve(a).createTextNode(String(b)))
    }
    var Df = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        Ef = {
            IMG: " ",
            BR: "\n"
        };

    function Ff(a) {
        return a.hasAttribute("tabindex") && Gf(a)
    }

    function Hf(a, b) {
        b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
    }

    function Gf(a) {
        a = a.tabIndex;
        return "number" === typeof a && 0 <= a && 32768 > a
    }

    function If(a) {
        var b = [];
        Jf(a, b, !0);
        a = b.join("");
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        a = a.replace(/ +/g, " ");
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }

    function Kf(a) {
        var b = [];
        Jf(a, b, !1);
        return b.join("")
    }

    function Jf(a, b, c) {
        if (!(a.nodeName in Df))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Ef) b.push(Ef[a.nodeName]);
        else
            for (a = a.firstChild; a;) Jf(a, b, c), a = a.nextSibling
    }

    function Lf(a) {
        return Mf(a, function(b) {
            return "DIV" == b.nodeName && "string" === typeof b.className && pb(b.className.split(/\s+/), "slider-box")
        })
    }

    function Mf(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function Nf(a) {
        try {
            var b = a && a.activeElement;
            return b && b.nodeName ? b : null
        } catch (c) {
            return null
        }
    }

    function Ue(a) {
        this.i = a || q.document || document
    }
    f = Ue.prototype;
    f.ma = function(a) {
        return We(this.i, a)
    };
    f.getElementsByTagName = function(a, b) {
        return (b || this.i).getElementsByTagName(String(a))
    };
    f.Ua = function(a, b, c) {
        return kf(this.i, arguments)
    };

    function Of(a, b) {
        return lf(a.i, b)
    }

    function Pf(a) {
        a = a.i;
        return a.parentWindow || a.defaultView
    }
    f.appendChild = pf;
    f.Km = qf;
    f.Mm = rf;
    f.Tu = sf;
    f.Su = tf;
    f.Li = I;
    f.Do = wf;
    f.Fo = xf;
    f.Vu = zf;
    f.Lm = Bf;

    function Qf() {}
    Qf.prototype.next = function() {
        return Rf
    };
    var Rf = {
        done: !0,
        value: void 0
    };
    Qf.prototype.vf = function() {
        return this
    };
    var Sf = {};

    function Tf(a) {
        var b = Sf.hasOwnProperty(a) ? Sf[a] : null;
        if (b) return b;
        65536 < Object.keys(Sf).length && (Sf = {});
        var c = [0, 0, 0, 0],
            d = RegExp("\\\\[0-9A-Fa-f]{1,5}\\s", "g");
        b = Uf(a, RegExp("\\\\[0-9A-Fa-f]{6}\\s?", "g"));
        b = Uf(b, d);
        b = Uf(b, /\\./g);
        b = b.replace(RegExp(":not\\(([^\\)]*)\\)", "g"), "     $1 ");
        b = b.replace(RegExp("{[^]*", "gm"), "");
        b = Vf(b, c, RegExp("(\\[[^\\]]+\\])", "g"), 2);
        b = Vf(b, c, RegExp("(#[^\\#\\s\\+>~\\.\\[:]+)", "g"), 1);
        b = Vf(b, c, RegExp("(\\.[^\\s\\+>~\\.\\[:]+)", "g"), 2);
        b = Vf(b, c, /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi, 3);
        b = Vf(b, c, /(:[\w-]+\([^\)]*\))/gi, 2);
        b = Vf(b, c, /(:[^\s\+>~\.\[:]+)/g, 2);
        b = b.replace(/[\*\s\+>~]/g, " ");
        b = b.replace(/[#\.]/g, " ");
        Vf(b, c, /([^\s\+>~\.\[:]+)/g, 3);
        b = c;
        return Sf[a] = b
    }

    function Vf(a, b, c, d) {
        return a.replace(c, function(e) {
            b[d] += 1;
            return Array(e.length + 1).join(" ")
        })
    }

    function Uf(a, b) {
        return a.replace(b, function(c) {
            return Array(c.length + 1).join("A")
        })
    };
    var Wf = {
            rgb: !0,
            rgba: !0,
            alpha: !0,
            rect: !0,
            image: !0,
            "linear-gradient": !0,
            "radial-gradient": !0,
            "repeating-linear-gradient": !0,
            "repeating-radial-gradient": !0,
            "cubic-bezier": !0,
            matrix: !0,
            perspective: !0,
            rotate: !0,
            rotate3d: !0,
            rotatex: !0,
            rotatey: !0,
            steps: !0,
            rotatez: !0,
            scale: !0,
            scale3d: !0,
            scalex: !0,
            scaley: !0,
            scalez: !0,
            skew: !0,
            skewx: !0,
            skewy: !0,
            translate: !0,
            translate3d: !0,
            translatex: !0,
            translatey: !0,
            translatez: !0
        },
        Xf = /[\n\f\r"'()*<>]/g,
        Yf = {
            "\n": "%0a",
            "\f": "%0c",
            "\r": "%0d",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "*": "%2a",
            "<": "%3c",
            ">": "%3e"
        };

    function Zf(a) {
        return Yf[a]
    }

    function $f(a, b, c) {
        b = Qb(b);
        if ("" == b) return null;
        var d = String(b.slice(0, 4)).toLowerCase();
        if (0 == ("url(" < d ? -1 : "url(" == d ? 0 : 1)) {
            if (!b.endsWith(")") || 1 < (b ? b.split("(").length - 1 : 0) || 1 < (b ? b.split(")").length - 1 : 0) || !c) a = null;
            else {
                a: for (b = b.substring(4, b.length - 1), d = 0; 2 > d; d++) {
                    var e = "\"'".charAt(d);
                    if (b.charAt(0) == e && b.charAt(b.length - 1) == e) {
                        b = b.substring(1, b.length - 1);
                        break a
                    }
                }
                a = c ? (a = c(b, a)) && "about:invalid#zClosurez" != vd(a) ? 'url("' + vd(a).replace(Xf, Zf) + '")' : null : null
            }
            return a
        }
        if (0 < b.indexOf("(")) {
            if (/"|'/.test(b)) return null;
            for (a = /([\-\w]+)\(/g; c = a.exec(b);)
                if (!(c[1].toLowerCase() in Wf)) return null
        }
        return b
    };
    var ag = dc(),
        bg = gc() || z("iPod"),
        cg = z("iPad"),
        dg = z("Android") && !(ec() || dc() || z("Opera") || z("Silk")),
        eg = ec(),
        fg = z("Safari") && !(ec() || z("Coast") || z("Opera") || z("Edge") || z("Edg/") || z("OPR") || dc() || z("Silk") || z("Android")) && !hc();

    function gg(a, b) {
        a = q[a];
        return a && a.prototype ? (b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get || null : null
    }

    function hg(a, b) {
        return (a = q[a]) && a.prototype && a.prototype[b] || null
    }
    var ig = gg("Element", "attributes") || gg("Node", "attributes"),
        jg = hg("Element", "hasAttribute"),
        kg = hg("Element", "getAttribute"),
        lg = hg("Element", "setAttribute"),
        mg = hg("Element", "removeAttribute");
    gg("Element", "innerHTML") || gg("HTMLElement", "innerHTML");
    var ng = hg("Element", "getElementsByTagName"),
        og = hg("Element", "matches") || hg("Element", "msMatchesSelector"),
        pg = gg("Node", "nodeName"),
        qg = gg("Node", "nodeType"),
        rg = gg("Node", "parentNode");
    gg("Node", "childNodes");
    var sg = gg("HTMLElement", "style") || gg("Element", "style"),
        tg = gg("HTMLStyleElement", "sheet"),
        ug = hg("CSSStyleDeclaration", "getPropertyValue"),
        vg = hg("CSSStyleDeclaration", "setProperty"),
        wg = gg("Element", "namespaceURI") || gg("Node", "namespaceURI");

    function xg(a, b, c, d) {
        if (a) return a.apply(b);
        a = b[c];
        if (!d(a)) throw Error("Clobbering detected");
        return a
    }

    function yg(a, b, c, d) {
        if (a) return a.apply(b, d);
        if (A && 10 > document.documentMode) {
            if (!b[c].call) throw Error("IE Clobbering detected");
        } else if ("function" != typeof b[c]) throw Error("Clobbering detected");
        return b[c].apply(b, d)
    }

    function zg(a) {
        return xg(ig, a, "attributes", function(b) {
            return b instanceof NamedNodeMap
        })
    }

    function Ag(a, b, c) {
        try {
            yg(lg, a, "setAttribute", [b, c])
        } catch (d) {
            if (-1 == d.message.indexOf("A security problem occurred")) throw d;
        }
    }

    function Bg(a) {
        return xg(sg, a, "style", function(b) {
            return b instanceof CSSStyleDeclaration
        })
    }

    function Cg(a) {
        return xg(tg, a, "sheet", function(b) {
            return b instanceof CSSStyleSheet
        })
    }

    function Dg(a) {
        return xg(pg, a, "nodeName", function(b) {
            return "string" == typeof b
        })
    }

    function Eg(a) {
        return xg(qg, a, "nodeType", function(b) {
            return "number" == typeof b
        })
    }

    function Fg(a) {
        return xg(rg, a, "parentNode", function(b) {
            return !(b && "string" == typeof b.name && b.name && "parentnode" == b.name.toLowerCase())
        })
    }

    function Gg(a, b) {
        return yg(ug, a, a.getPropertyValue ? "getPropertyValue" : "getAttribute", [b]) || ""
    }

    function Hg(a, b, c) {
        yg(vg, a, a.setProperty ? "setProperty" : "setAttribute", [b, c])
    }

    function Ig(a) {
        return xg(wg, a, "namespaceURI", function(b) {
            return "string" == typeof b
        })
    };
    var Jg = A && 10 > document.documentMode ? null : RegExp("\\s*([^\\s'\",]+[^'\",]*(('([^'\\r\\n\\f\\\\]|\\\\[^])*')|(\"([^\"\\r\\n\\f\\\\]|\\\\[^])*\")|[^'\",])*)", "g"),
        Kg = {
            "-webkit-border-horizontal-spacing": !0,
            "-webkit-border-vertical-spacing": !0
        };

    function Lg(a, b, c) {
        var d = [];
        Mg(vb(a.cssRules)).forEach(function(e) {
            if (b && !/[a-zA-Z][\w-:\.]*/.test(b)) throw Error("Invalid container id");
            if (!(b && A && 10 == document.documentMode && /\\['"]/.test(e.selectorText))) {
                var g = b ? e.selectorText.replace(Jg, "#" + b + " $1") : e.selectorText;
                d.push(Qd(g, Ng(e.style, c)))
            }
        });
        return Rd(d)
    }

    function Mg(a) {
        return a.filter(function(b) {
            return b instanceof CSSStyleRule || b.type == CSSRule.STYLE_RULE
        })
    }

    function Og(a, b, c) {
        a = Pg("<style>" + a + "</style>");
        return null == a || null == a.sheet ? Td : Lg(a.sheet, void 0 != b ? b : null, c)
    }

    function Pg(a) {
        a = Zd("<html><head></head><body>" + a + "</body></html>");
        return (new DOMParser).parseFromString(Xd(a), "text/html").body.children[0]
    }

    function Ng(a, b) {
        if (!a) return Hd;
        var c = document.createElement("div").style;
        Qg(a).forEach(function(d) {
            var e = pc && d in Kg ? d : d.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
            Nb(e, "--") || Nb(e, "var") || (d = Gg(a, d), d = $f(e, d, b), null != d && Hg(c, e, d))
        });
        return new Dd(c.cssText || "", Cd)
    }

    function Rg(a) {
        var b = Array.from(yg(ng, a, "getElementsByTagName", ["STYLE"])),
            c = Eb(b, function(h) {
                return vb(Cg(h).cssRules)
            });
        c = Mg(c);
        for (var d = [], e = 0; e < c.length; e++) d[e] = {
            index: e,
            jm: c[e]
        };
        d.sort(function(h, k) {
            var l = Tf(h.jm.selectorText),
                m = Tf(k.jm.selectorText);
            a: {
                for (var p = Ab, w = Math.min(l.length, m.length), D = 0; D < w; D++) {
                    var E = p(l[D], m[D]);
                    if (0 != E) {
                        l = E;
                        break a
                    }
                }
                l = Ab(l.length, m.length)
            }
            return l || h.index - k.index
        });
        for (e = 0; e < d.length; e++) c[e] = d[e].jm;
        c.reverse();
        a = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT,
            null, !1);
        for (var g; g = a.nextNode();) c.forEach(function(h) {
            yg(og, g, g.matches ? "matches" : "msMatchesSelector", [h.selectorText]) && h.style && Sg(g, h.style)
        });
        b.forEach(I)
    }

    function Sg(a, b) {
        var c = Qg(a.style);
        Qg(b).forEach(function(d) {
            if (!(0 <= c.indexOf(d))) {
                var e = Gg(b, d);
                Hg(a.style, d, e)
            }
        })
    }

    function Qg(a) {
        Ta(a) ? a = vb(a) : (a = Uc(a), rb(a, "cssText"));
        return a
    };

    function Tg(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }

    function Ug(a) {
        for (var b = new Tg(arguments[0].y, arguments[0].x, arguments[0].y, arguments[0].x), c = 1; c < arguments.length; c++) {
            var d = b,
                e = arguments[c];
            d.top = Math.min(d.top, e.y);
            d.right = Math.max(d.right, e.x);
            d.bottom = Math.max(d.bottom, e.y);
            d.left = Math.min(d.left, e.x)
        }
        return b
    }
    f = Tg.prototype;
    f.Bb = function() {
        return this.right - this.left
    };
    f.Hb = function() {
        return this.bottom - this.top
    };
    f.clone = function() {
        return new Tg(this.top, this.right, this.bottom, this.left)
    };

    function Vg(a, b) {
        return a && b ? b instanceof Tg ? b.left >= a.left && b.right <= a.right && b.top >= a.top && b.bottom <= a.bottom : b.x >= a.left && b.x <= a.right && b.y >= a.top && b.y <= a.bottom : !1
    }

    function Wg(a, b) {
        var c = b.x < a.left ? b.x - a.left : b.x > a.right ? b.x - a.right : 0;
        a = b.y < a.top ? b.y - a.top : b.y > a.bottom ? b.y - a.bottom : 0;
        return Math.sqrt(c * c + a * a)
    }
    f.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    f.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    f.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function Xg(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }
    f = Xg.prototype;
    f.clone = function() {
        return new Xg(this.left, this.top, this.width, this.height)
    };

    function Yg(a) {
        return new Tg(a.top, a.left + a.width, a.top + a.height, a.left)
    }

    function Zg(a) {
        return new Xg(a.left, a.top, a.right - a.left, a.bottom - a.top)
    }

    function $g(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            b = Math.min(a.top + a.height, b.top + b.height);
            if (e <= b) return a.left = c, a.top = e, a.width = d - c, a.height = b - e, !0
        }
        return !1
    }

    function ah(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new Xg(c, e, d - c, a - e)
        }
        return null
    }

    function bh(a, b) {
        return a.left <= b.left + b.width && b.left <= a.left + a.width && a.top <= b.top + b.height && b.top <= a.top + a.height
    }

    function ch(a, b) {
        if (!a || !b) return null;
        a = new Xg(a.left, a.top, a.width, a.height);
        var c = Math.max(a.left + a.width, b.left + b.width),
            d = Math.max(a.top + a.height, b.top + b.height);
        a.left = Math.min(a.left, b.left);
        a.top = Math.min(a.top, b.top);
        a.width = c - a.left;
        a.height = d - a.top;
        return a
    }
    f.Fa = function() {
        return new Ae(this.width, this.height)
    };
    f.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    f.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    f.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function K(a, b, c) {
        if ("string" === typeof b)(b = dh(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    g = dh(c, d);
                g && (c.style[g] = e)
            }
    }
    var eh = {};

    function dh(a, b) {
        var c = eh[b];
        if (!c) {
            var d = Re(b);
            c = d;
            void 0 === a.style[d] && (d = (pc ? "Webkit" : oc ? "Moz" : A ? "ms" : null) + Se(d), void 0 !== a.style[d] && (c = d));
            eh[b] = c
        }
        return c
    }

    function fh(a, b) {
        var c = a.style[Re(b)];
        return "undefined" !== typeof c ? c : a.style[dh(a, b)] || ""
    }

    function gh(a, b) {
        var c = Ve(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function hh(a, b) {
        return a.currentStyle ? a.currentStyle[b] : null
    }

    function ih(a, b) {
        return gh(a, b) || hh(a, b) || a.style && a.style[b]
    }

    function jh(a, b, c) {
        if (b instanceof B) {
            var d = b.x;
            b = b.y
        } else d = b, b = c;
        a.style.left = kh(d, !1);
        a.style.top = kh(b, !1)
    }

    function lh(a) {
        return new B(a.offsetLeft, a.offsetTop)
    }

    function mh(a) {
        a = a ? Ve(a) : document;
        return !A || Hc(9) || ff(Te(a).i) ? a.documentElement : a.body
    }

    function nh(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }

    function oh(a) {
        if (A && !Hc(8)) return a.offsetParent;
        var b = Ve(a),
            c = ih(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host), c = ih(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    }

    function ph(a) {
        for (var b = new Tg(0, Infinity, Infinity, 0), c = Te(a), d = c.i.body, e = c.i.documentElement, g = hf(c.i); a = oh(a);)
            if (!(A && 0 == a.clientWidth || pc && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" != ih(a, "overflow")) {
                var h = qh(a),
                    k = new B(a.clientLeft, a.clientTop);
                h.x += k.x;
                h.y += k.y;
                b.top = Math.max(b.top, h.y);
                b.right = Math.min(b.right, h.x + a.clientWidth);
                b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
                b.left = Math.max(b.left, h.x)
            } d = g.scrollLeft;
        g = g.scrollTop;
        b.left = Math.max(b.left, d);
        b.top = Math.max(b.top, g);
        c =
            ef(Pf(c));
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, g + c.height);
        return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
    }

    function rh(a, b) {
        b = b || hf(document);
        var c = b || hf(document);
        var d = qh(a),
            e = qh(c),
            g = sh(c);
        if (c == hf(document)) {
            var h = d.x - c.scrollLeft;
            d = d.y - c.scrollTop;
            A && !Hc(10) && (h += g.left, d += g.top)
        } else h = d.x - e.x - g.left, d = d.y - e.y - g.top;
        a = th(a);
        g = c.clientHeight - a.height;
        e = c.scrollLeft;
        var k = c.scrollTop;
        e += Math.min(h, Math.max(h - (c.clientWidth - a.width), 0));
        k += Math.min(d, Math.max(d - g, 0));
        c = new B(e, k);
        b.scrollLeft = c.x;
        b.scrollTop = c.y
    }

    function qh(a) {
        var b = Ve(a),
            c = new B(0, 0),
            d = mh(b);
        if (a == d) return c;
        a = nh(a);
        b = gf(Te(b).i);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function uh(a, b) {
        a = vh(a);
        b = vh(b);
        return new B(a.x - b.x, a.y - b.y)
    }

    function wh(a) {
        a = nh(a);
        return new B(a.left, a.top)
    }

    function vh(a) {
        if (1 == a.nodeType) return wh(a);
        a = a.changedTouches ? a.changedTouches[0] : a;
        return new B(a.clientX, a.clientY)
    }

    function xh(a, b, c) {
        var d = qh(a);
        b instanceof B && (c = b.y, b = b.x);
        jh(a, a.offsetLeft + (b - d.x), a.offsetTop + (Number(c) - d.y))
    }

    function L(a, b, c) {
        if (b instanceof Ae) c = b.height, b = b.width;
        else if (void 0 == c) throw Error("missing height argument");
        yh(a, b);
        a.style.height = kh(c, !0)
    }

    function kh(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    }

    function yh(a, b) {
        a.style.width = kh(b, !0)
    }

    function M(a) {
        var b = th;
        if ("none" != ih(a, "display")) return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            g = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = g;
        c.visibility = e;
        return a
    }

    function th(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = pc && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = nh(a), new Ae(a.right - a.left, a.bottom - a.top)) : new Ae(b, c)
    }

    function zh(a) {
        var b = qh(a);
        a = M(a);
        return new Xg(b.x, b.y, a.width, a.height)
    }

    function Ah(a, b) {
        a = a.style;
        "opacity" in a ? a.opacity = b : "MozOpacity" in a ? a.MozOpacity = b : "filter" in a && (a.filter = "" === b ? "" : "alpha(opacity=" + 100 * Number(b) + ")")
    }

    function N(a, b) {
        a.style.display = b ? "" : "none"
    }

    function Bh(a) {
        return "none" != a.style.display
    }

    function Ch(a) {
        return "rtl" == ih(a, "direction")
    }
    var Dh = oc ? "MozUserSelect" : pc || mc ? "WebkitUserSelect" : null;

    function Eh(a, b, c) {
        c = c ? null : a.getElementsByTagName("*");
        if (Dh) {
            if (b = b ? "none" : "", a.style && (a.style[Dh] = b), c) {
                a = 0;
                for (var d; d = c[a]; a++) d.style && (d.style[Dh] = b)
            }
        } else if (A && (b = b ? "on" : "", a.setAttribute("unselectable", b), c))
            for (a = 0; d = c[a]; a++) d.setAttribute("unselectable", b)
    }

    function Fh(a, b) {
        Gh(a, b, "border-box")
    }

    function Hh(a) {
        var b = Ve(a),
            c = A && a.currentStyle;
        if (c && ff(Te(b).i) && "auto" != c.width && "auto" != c.height && !c.boxSizing) return b = Ih(a, c.width, "width", "pixelWidth"), a = Ih(a, c.height, "height", "pixelHeight"), new Ae(b, a);
        c = new Ae(a.offsetWidth, a.offsetHeight);
        if (A) {
            b = Jh(a, "paddingLeft");
            var d = Jh(a, "paddingRight"),
                e = Jh(a, "paddingTop"),
                g = Jh(a, "paddingBottom");
            b = new Tg(e, d, g, b)
        } else b = gh(a, "paddingLeft"), d = gh(a, "paddingRight"), e = gh(a, "paddingTop"), g = gh(a, "paddingBottom"), b = new Tg(parseFloat(e), parseFloat(d), parseFloat(g),
            parseFloat(b));
        a = sh(a);
        return new Ae(c.width - a.left - b.left - b.right - a.right, c.height - a.top - b.top - b.bottom - a.bottom)
    }

    function Gh(a, b, c) {
        a = a.style;
        oc ? a.MozBoxSizing = c : pc ? a.WebkitBoxSizing = c : a.boxSizing = c;
        a.width = Math.max(b.width, 0) + "px";
        a.height = Math.max(b.height, 0) + "px"
    }

    function Ih(a, b, c, d) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var e = a.style[c],
            g = a.runtimeStyle[c];
        a.runtimeStyle[c] = a.currentStyle[c];
        a.style[c] = b;
        b = a.style[d];
        a.style[c] = e;
        a.runtimeStyle[c] = g;
        return +b
    }

    function Jh(a, b) {
        return (b = hh(a, b)) ? Ih(a, b, "left", "pixelLeft") : 0
    }
    var Kh = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function Lh(a, b) {
        if ("none" == hh(a, b + "Style")) return 0;
        b = hh(a, b + "Width");
        return b in Kh ? Kh[b] : Ih(a, b, "left", "pixelLeft")
    }

    function sh(a) {
        if (A && !Hc(9)) {
            var b = Lh(a, "borderLeft"),
                c = Lh(a, "borderRight"),
                d = Lh(a, "borderTop");
            a = Lh(a, "borderBottom");
            return new Tg(d, c, a, b)
        }
        b = gh(a, "borderLeftWidth");
        c = gh(a, "borderRightWidth");
        d = gh(a, "borderTopWidth");
        a = gh(a, "borderBottomWidth");
        return new Tg(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
    };
    var Mh = {
            "* ARIA-CHECKED": !0,
            "* ARIA-COLCOUNT": !0,
            "* ARIA-COLINDEX": !0,
            "* ARIA-CONTROLS": !0,
            "* ARIA-DESCRIBEDBY": !0,
            "* ARIA-DISABLED": !0,
            "* ARIA-EXPANDED": !0,
            "* ARIA-GOOG-EDITABLE": !0,
            "* ARIA-HASPOPUP": !0,
            "* ARIA-HIDDEN": !0,
            "* ARIA-LABEL": !0,
            "* ARIA-LABELLEDBY": !0,
            "* ARIA-MULTILINE": !0,
            "* ARIA-MULTISELECTABLE": !0,
            "* ARIA-ORIENTATION": !0,
            "* ARIA-PLACEHOLDER": !0,
            "* ARIA-READONLY": !0,
            "* ARIA-REQUIRED": !0,
            "* ARIA-ROLEDESCRIPTION": !0,
            "* ARIA-ROWCOUNT": !0,
            "* ARIA-ROWINDEX": !0,
            "* ARIA-SELECTED": !0,
            "* ABBR": !0,
            "* ACCEPT": !0,
            "* ACCESSKEY": !0,
            "* ALIGN": !0,
            "* ALT": !0,
            "* AUTOCOMPLETE": !0,
            "* AXIS": !0,
            "* BGCOLOR": !0,
            "* BORDER": !0,
            "* CELLPADDING": !0,
            "* CELLSPACING": !0,
            "* CHAROFF": !0,
            "* CHAR": !0,
            "* CHECKED": !0,
            "* CLEAR": !0,
            "* COLOR": !0,
            "* COLSPAN": !0,
            "* COLS": !0,
            "* COMPACT": !0,
            "* COORDS": !0,
            "* DATETIME": !0,
            "* DIR": !0,
            "* DISABLED": !0,
            "* ENCTYPE": !0,
            "* FACE": !0,
            "* FRAME": !0,
            "* HEIGHT": !0,
            "* HREFLANG": !0,
            "* HSPACE": !0,
            "* ISMAP": !0,
            "* LABEL": !0,
            "* LANG": !0,
            "* MAX": !0,
            "* MAXLENGTH": !0,
            "* METHOD": !0,
            "* MULTIPLE": !0,
            "* NOHREF": !0,
            "* NOSHADE": !0,
            "* NOWRAP": !0,
            "* OPEN": !0,
            "* READONLY": !0,
            "* REQUIRED": !0,
            "* REL": !0,
            "* REV": !0,
            "* ROLE": !0,
            "* ROWSPAN": !0,
            "* ROWS": !0,
            "* RULES": !0,
            "* SCOPE": !0,
            "* SELECTED": !0,
            "* SHAPE": !0,
            "* SIZE": !0,
            "* SPAN": !0,
            "* START": !0,
            "* SUMMARY": !0,
            "* TABINDEX": !0,
            "* TITLE": !0,
            "* TYPE": !0,
            "* VALIGN": !0,
            "* VALUE": !0,
            "* VSPACE": !0,
            "* WIDTH": !0
        },
        Nh = {
            "* USEMAP": !0,
            "* ACTION": !0,
            "* CITE": !0,
            "* HREF": !0,
            "* LONGDESC": !0,
            "* SRC": !0,
            "LINK HREF": !0,
            "* FOR": !0,
            "* HEADERS": !0,
            "* NAME": !0,
            "A TARGET": !0,
            "* CLASS": !0,
            "* ID": !0,
            "* STYLE": !0
        };
    var Oh = "undefined" != typeof WeakMap && -1 != WeakMap.toString().indexOf("[native code]"),
        Ph = 0;

    function Qh() {
        this.o = [];
        this.j = [];
        this.i = "data-elementweakmap-index-" + Ph++
    }
    Qh.prototype.set = function(a, b) {
        if (yg(jg, a, "hasAttribute", [this.i])) {
            var c = parseInt(yg(kg, a, "getAttribute", [this.i]) || null, 10);
            this.j[c] = b
        } else c = this.j.push(b) - 1, Ag(a, this.i, c.toString()), this.o.push(a);
        return this
    };
    Qh.prototype.get = function(a) {
        if (yg(jg, a, "hasAttribute", [this.i])) return a = parseInt(yg(kg, a, "getAttribute", [this.i]) || null, 10), this.j[a]
    };
    Qh.prototype.clear = function() {
        this.o.forEach(function(a) {
            yg(mg, a, "removeAttribute", [this.i])
        }, this);
        this.o = [];
        this.j = []
    };
    var Rh = !A || Hc(10),
        Sh = !A || null == document.documentMode;

    function Th() {};
    var Uh = {
        APPLET: !0,
        AUDIO: !0,
        BASE: !0,
        BGSOUND: !0,
        EMBED: !0,
        FORM: !0,
        IFRAME: !0,
        ISINDEX: !0,
        KEYGEN: !0,
        LAYER: !0,
        LINK: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        SVG: !0,
        STYLE: !0,
        TEMPLATE: !0,
        VIDEO: !0
    };
    var Vh = {
        A: !0,
        ABBR: !0,
        ACRONYM: !0,
        ADDRESS: !0,
        AREA: !0,
        ARTICLE: !0,
        ASIDE: !0,
        B: !0,
        BDI: !0,
        BDO: !0,
        BIG: !0,
        BLOCKQUOTE: !0,
        BR: !0,
        BUTTON: !0,
        CAPTION: !0,
        CENTER: !0,
        CITE: !0,
        CODE: !0,
        COL: !0,
        COLGROUP: !0,
        DATA: !0,
        DATALIST: !0,
        DD: !0,
        DEL: !0,
        DETAILS: !0,
        DFN: !0,
        DIALOG: !0,
        DIR: !0,
        DIV: !0,
        DL: !0,
        DT: !0,
        EM: !0,
        FIELDSET: !0,
        FIGCAPTION: !0,
        FIGURE: !0,
        FONT: !0,
        FOOTER: !0,
        FORM: !0,
        H1: !0,
        H2: !0,
        H3: !0,
        H4: !0,
        H5: !0,
        H6: !0,
        HEADER: !0,
        HGROUP: !0,
        HR: !0,
        I: !0,
        IMG: !0,
        INPUT: !0,
        INS: !0,
        KBD: !0,
        LABEL: !0,
        LEGEND: !0,
        LI: !0,
        MAIN: !0,
        MAP: !0,
        MARK: !0,
        MENU: !0,
        METER: !0,
        NAV: !0,
        NOSCRIPT: !0,
        OL: !0,
        OPTGROUP: !0,
        OPTION: !0,
        OUTPUT: !0,
        P: !0,
        PRE: !0,
        PROGRESS: !0,
        Q: !0,
        S: !0,
        SAMP: !0,
        SECTION: !0,
        SELECT: !0,
        SMALL: !0,
        SOURCE: !0,
        SPAN: !0,
        STRIKE: !0,
        STRONG: !0,
        STYLE: !0,
        SUB: !0,
        SUMMARY: !0,
        SUP: !0,
        TABLE: !0,
        TBODY: !0,
        TD: !0,
        TEXTAREA: !0,
        TFOOT: !0,
        TH: !0,
        THEAD: !0,
        TIME: !0,
        TR: !0,
        TT: !0,
        U: !0,
        UL: !0,
        VAR: !0,
        WBR: !0
    };
    var Wh = {
        "ANNOTATION-XML": !0,
        "COLOR-PROFILE": !0,
        "FONT-FACE": !0,
        "FONT-FACE-SRC": !0,
        "FONT-FACE-URI": !0,
        "FONT-FACE-FORMAT": !0,
        "FONT-FACE-NAME": !0,
        "MISSING-GLYPH": !0
    };

    function Xh(a) {
        a = a || new Yh;
        Zh(a);
        this.i = $c(a.i);
        this.N = $c(a.va);
        this.j = $c(a.wa);
        this.ha = a.ta;
        a.Da.forEach(function(b) {
            if (!Nb(b, "data-")) throw new fb('Only "data-" attributes allowed, got: %s.', [b]);
            if (Nb(b, "data-sanitizer-")) throw new fb('Attributes with "%s" prefix are not allowed, got: %s.', ["data-sanitizer-", b]);
            this.i["* " + b.toUpperCase()] = $h
        }, this);
        a.Ca.forEach(function(b) {
            b = b.toUpperCase();
            if (!Zb(b, "-") || Wh[b]) throw new fb("Only valid custom element tag names allowed, got: %s.", [b]);
            this.j[b] = !0
        }, this);
        this.ka = a.o;
        this.s = a.Na;
        this.o = null;
        this.O = a.oa
    }
    u(Xh, Th);

    function ai(a) {
        return function(b, c) {
            return (b = a(Qb(b), c)) && "about:invalid#zClosurez" != vd(b) ? vd(b) : null
        }
    }

    function Yh() {
        this.i = {};
        v([Mh, Nh], function(a) {
            Uc(a).forEach(function(b) {
                this.i[b] = $h
            }, this)
        }, this);
        this.j = {};
        this.Da = [];
        this.Ca = [];
        this.va = $c(Uh);
        this.wa = $c(Vh);
        this.ta = !1;
        this.ha = yd;
        this.ka = this.s = this.N = this.o = Nc;
        this.Na = null;
        this.O = this.oa = !1
    }

    function bi(a, b) {
        return function(c, d, e, g) {
            c = a(c, d, e, g);
            return null == c ? null : b(c, d, e, g)
        }
    }

    function ci(a, b, c, d) {
        a[c] && !b[c] && (a[c] = bi(a[c], d))
    }

    function Zh(a) {
        if (a.O) throw Error("HtmlSanitizer.Builder.build() can only be used once.");
        ci(a.i, a.j, "* USEMAP", di);
        var b = ai(a.ha);
        ["* ACTION", "* CITE", "* HREF"].forEach(function(d) {
            ci(this.i, this.j, d, b)
        }, a);
        var c = ai(a.o);
        ["* LONGDESC", "* SRC", "LINK HREF"].forEach(function(d) {
            ci(this.i, this.j, d, c)
        }, a);
        ["* FOR", "* HEADERS", "* NAME"].forEach(function(d) {
            ci(this.i, this.j, d, t(ei, this.N))
        }, a);
        ci(a.i, a.j, "A TARGET", t(fi, ["_blank", "_self"]));
        ci(a.i, a.j, "* CLASS", t(gi, a.s));
        ci(a.i, a.j, "* ID", t(hi, a.s));
        ci(a.i,
            a.j, "* STYLE", t(a.ka, c));
        a.O = !0
    }

    function ii(a, b) {
        a || (a = "*");
        return (a + " " + b).toUpperCase()
    }

    function $h(a) {
        return Qb(a)
    }

    function fi(a, b) {
        b = Qb(b);
        return pb(a, b.toLowerCase()) ? b : null
    }

    function di(a) {
        return (a = Qb(a)) && "#" == a.charAt(0) ? a : null
    }

    function ei(a, b, c) {
        return a(Qb(b), c)
    }

    function gi(a, b, c) {
        b = b.split(/(?:\s+)/);
        for (var d = [], e = 0; e < b.length; e++) {
            var g = a(b[e], c);
            g && d.push(g)
        }
        return 0 == d.length ? null : d.join(" ")
    }

    function hi(a, b, c) {
        return a(Qb(b), c)
    }
    Xh.prototype.xd = function(a) {
        var b = !("STYLE" in this.N) && "STYLE" in this.j;
        this.o = "*" == this.s && b ? "sanitizer-" + Qe() : this.s;
        if (Rh) {
            b = a;
            if (Rh) {
                a = G("SPAN");
                this.o && "*" == this.s && (a.id = this.o);
                this.O && (b = Pg("<div>" + b + "</div>"), Rg(b), b = b.innerHTML);
                b = Zd(b);
                var c = document.createElement("template");
                if (Sh && "content" in c) oe(c, b), c = c.content;
                else {
                    var d = document.implementation.createHTMLDocument("x");
                    c = d.body;
                    oe(d.body, b)
                }
                b = document.createTreeWalker(c, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null, !1);
                for (c = Oh ?
                    new WeakMap : new Qh; d = b.nextNode();) {
                    c: {
                        var e = d;
                        switch (Eg(e)) {
                            case 3:
                                e = ji(this, e);
                                break c;
                            case 1:
                                if ("TEMPLATE" == Dg(e).toUpperCase()) e = null;
                                else {
                                    var g = Dg(e).toUpperCase();
                                    if (g in this.N || "http://www.w3.org/1999/xhtml" != Ig(e)) var h = null;
                                    else this.j[g] ? h = document.createElement(g) : (h = G("SPAN"), this.ha && Ag(h, "data-sanitizer-original-tag", g.toLowerCase()));
                                    if (h) {
                                        var k = h,
                                            l = zg(e);
                                        if (null != l)
                                            for (var m = 0; g = l[m]; m++)
                                                if (g.specified) {
                                                    var p = e;
                                                    var w = g;
                                                    var D = w.name;
                                                    if (Nb(D, "data-sanitizer-")) w = null;
                                                    else {
                                                        var E = Dg(p);
                                                        w = w.value;
                                                        var H = {
                                                                tagName: Qb(E).toLowerCase(),
                                                                attributeName: Qb(D).toLowerCase()
                                                            },
                                                            O = {
                                                                hl: void 0
                                                            };
                                                        "style" == H.attributeName && (O.hl = Bg(p));
                                                        p = ii(E, D);
                                                        p in this.i ? (D = this.i[p], w = D(w, H, O)) : (D = ii(null, D), D in this.i ? (D = this.i[D], w = D(w, H, O)) : w = null)
                                                    }
                                                    null !== w && Ag(k, g.name, w)
                                                } e = h
                                    } else e = null
                                }
                                break c;
                            default:
                                e = null
                        }
                    }
                    if (e) {
                        if (1 == Eg(e) && c.set(d, e), d = Fg(d), g = !1, d) h = Eg(d), k = Dg(d).toLowerCase(), l = Fg(d), 11 != h || l ? "body" == k && l && (h = Fg(l)) && !Fg(h) && (g = !0) : g = !0, h = null, g || !d ? h = a : 1 == Eg(d) && (h = c.get(d)), h.content && (h = h.content),
                            h.appendChild(e)
                    } else rf(d)
                }
                c.clear && c.clear()
            } else a = G("SPAN");
            0 < zg(a).length && (b = G("SPAN"), b.appendChild(a), a = b);
            a = (new XMLSerializer).serializeToString(a);
            a = a.slice(a.indexOf(">") + 1, a.lastIndexOf("</"))
        } else a = "";
        return Zd(a)
    };

    function ji(a, b) {
        var c = b.data;
        (b = Fg(b)) && "style" == Dg(b).toLowerCase() && !("STYLE" in a.N) && "STYLE" in a.j && (c = Sd(Og(c, a.o, r(function(d, e) {
            return this.ka(d, {
                dt: e
            })
        }, a))));
        return document.createTextNode(c)
    };

    function ki(a) {
        return (new Xh(new Yh)).xd(a)
    };

    function li(a) {
        a && "function" == typeof a.Ia && a.Ia()
    };

    function mi() {
        this.Pd = this.Pd;
        this.Na = this.Na
    }
    mi.prototype.Pd = !1;
    mi.prototype.Ia = function() {
        this.Pd || (this.Pd = !0, this.ya())
    };

    function ni(a, b) {
        b = t(li, b);
        a.Pd ? b() : (a.Na || (a.Na = []), a.Na.push(b))
    }
    mi.prototype.ya = function() {
        if (this.Na)
            for (; this.Na.length;) this.Na.shift()()
    };

    function oi(a) {
        this.id = a
    }
    oi.prototype.toString = function() {
        return this.id
    };

    function pi(a, b) {
        this.type = a instanceof oi ? String(a) : a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.i = !1
    }
    pi.prototype.stopPropagation = function() {
        this.i = !0
    };
    pi.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    };

    function qi(a) {
        a.preventDefault()
    };
    var ri = function() {
        if (!q.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        try {
            q.addEventListener("test", function() {}, b), q.removeEventListener("test", function() {}, b)
        } catch (c) {}
        return a
    }();

    function si(a, b) {
        pi.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.key = "";
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.fm = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.Rb = null;
        a && this.Il(a, b)
    }
    u(si, pi);
    var ti = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    si.prototype.Il = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        (b = a.relatedTarget) ? oc && (jc(b, "nodeName") || (b = null)): "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.offsetX = pc || void 0 !== a.offsetX ?
            a.offsetX : a.layerX, this.offsetY = pc || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.fm = rc ? a.metaKey : a.ctrlKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType =
            "string" === typeof a.pointerType ? a.pointerType : ti[a.pointerType] || "";
        this.state = a.state;
        this.Rb = a;
        a.defaultPrevented && si.ua.preventDefault.call(this)
    };

    function ui(a) {
        return 0 == a.Rb.button && !(rc && a.ctrlKey)
    }
    si.prototype.stopPropagation = function() {
        si.ua.stopPropagation.call(this);
        this.Rb.stopPropagation ? this.Rb.stopPropagation() : this.Rb.cancelBubble = !0
    };
    si.prototype.preventDefault = function() {
        si.ua.preventDefault.call(this);
        var a = this.Rb;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    var vi = "closure_listenable_" + (1E6 * Math.random() | 0);

    function wi(a) {
        return !(!a || !a[vi])
    };
    var xi = 0;

    function yi(a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.Bj = e;
        this.key = ++xi;
        this.mh = this.jj = !1
    }

    function zi(a) {
        a.mh = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.Bj = null
    };

    function Ai(a) {
        this.src = a;
        this.i = {};
        this.j = 0
    }
    f = Ai.prototype;
    f.add = function(a, b, c, d, e) {
        var g = a.toString();
        a = this.i[g];
        a || (a = this.i[g] = [], this.j++);
        var h = Bi(a, b, d, e); - 1 < h ? (b = a[h], c || (b.jj = !1)) : (b = new yi(b, this.src, g, !!d, e), b.jj = c, a.push(b));
        return b
    };
    f.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.i)) return !1;
        var e = this.i[a];
        b = Bi(e, b, c, d);
        return -1 < b ? (zi(e[b]), sb(e, b), 0 == e.length && (delete this.i[a], this.j--), !0) : !1
    };

    function Ci(a, b) {
        var c = b.type;
        c in a.i && rb(a.i[c], b) && (zi(b), 0 == a.i[c].length && (delete a.i[c], a.j--))
    }
    f.eh = ba(8);
    f.ci = function(a, b, c, d) {
        a = this.i[a.toString()];
        var e = -1;
        a && (e = Bi(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    f.hasListener = function(a, b) {
        var c = void 0 !== a,
            d = c ? a.toString() : "",
            e = void 0 !== b;
        return Tc(this.i, function(g) {
            for (var h = 0; h < g.length; ++h)
                if (!(c && g[h].type != d || e && g[h].capture != b)) return !0;
            return !1
        })
    };

    function Bi(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var g = a[e];
            if (!g.mh && g.listener == b && g.capture == !!c && g.Bj == d) return e
        }
        return -1
    };
    var Di = "closure_lm_" + (1E6 * Math.random() | 0),
        Ei = {},
        Fi = 0;

    function P(a, b, c, d, e) {
        if (d && d.once) return Gi(a, b, c, d, e);
        if (Array.isArray(b)) {
            for (var g = 0; g < b.length; g++) P(a, b[g], c, d, e);
            return null
        }
        c = Hi(c);
        return wi(a) ? a.na(b, c, Ua(d) ? !!d.capture : !!d, e) : Ii(a, b, c, !1, d, e)
    }

    function Ii(a, b, c, d, e, g) {
        if (!b) throw Error("Invalid event type");
        var h = Ua(e) ? !!e.capture : !!e,
            k = Ji(a);
        k || (a[Di] = k = new Ai(a));
        c = k.add(b, c, d, h, g);
        if (c.proxy) return c;
        d = Ki();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) ri || (e = h), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent) a.attachEvent(Li(b.toString()), d);
        else if (a.addListener && a.removeListener) a.addListener(d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        Fi++;
        return c
    }

    function Ki() {
        function a(c) {
            return b.call(a.src, a.listener, c)
        }
        var b = Mi;
        return a
    }

    function Gi(a, b, c, d, e) {
        if (Array.isArray(b)) {
            for (var g = 0; g < b.length; g++) Gi(a, b[g], c, d, e);
            return null
        }
        c = Hi(c);
        return wi(a) ? a.Hf(b, c, Ua(d) ? !!d.capture : !!d, e) : Ii(a, b, c, !0, d, e)
    }

    function Ni(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var g = 0; g < b.length; g++) Ni(a, b[g], c, d, e);
        else d = Ua(d) ? !!d.capture : !!d, c = Hi(c), wi(a) ? a.hb(b, c, d, e) : a && (a = Ji(a)) && (b = a.ci(b, c, d, e)) && Oi(b)
    }

    function Oi(a) {
        if ("number" !== typeof a && a && !a.mh) {
            var b = a.src;
            if (wi(b)) Ci(b.Qd, a);
            else {
                var c = a.type,
                    d = a.proxy;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Li(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                Fi--;
                (c = Ji(b)) ? (Ci(c, a), 0 == c.j && (c.src = null, b[Di] = null)) : zi(a)
            }
        }
    }

    function Li(a) {
        return a in Ei ? Ei[a] : Ei[a] = "on" + a
    }

    function Pi(a, b) {
        var c = a.listener,
            d = a.Bj || a.src;
        a.jj && Oi(a);
        return c.call(d, b)
    }

    function Mi(a, b) {
        return a.mh ? !0 : Pi(a, new si(b, this))
    }

    function Ji(a) {
        a = a[Di];
        return a instanceof Ai ? a : null
    }
    var Qi = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function Hi(a) {
        if ("function" === typeof a) return a;
        a[Qi] || (a[Qi] = function(b) {
            return a.handleEvent(b)
        });
        return a[Qi]
    };

    function Ri(a) {
        mi.call(this);
        this.O = a;
        this.o = {}
    }
    u(Ri, mi);
    var Si = [];
    f = Ri.prototype;
    f.na = function(a, b, c, d) {
        return Ti(this, a, b, c, d)
    };

    function Ui(a, b, c, d, e) {
        Ti(a, b, c, d, !1, e)
    }

    function Ti(a, b, c, d, e, g) {
        Array.isArray(c) || (c && (Si[0] = c.toString()), c = Si);
        for (var h = 0; h < c.length; h++) {
            var k = P(b, c[h], d || a.handleEvent, e || !1, g || a.O || a);
            if (!k) break;
            a.o[k.key] = k
        }
        return a
    }
    f.Hf = function(a, b, c, d) {
        return Vi(this, a, b, c, d)
    };

    function Vi(a, b, c, d, e, g) {
        if (Array.isArray(c))
            for (var h = 0; h < c.length; h++) Vi(a, b, c[h], d, e, g);
        else {
            b = Gi(b, c, d || a.handleEvent, e, g || a.O || a);
            if (!b) return a;
            a.o[b.key] = b
        }
        return a
    }
    f.hb = function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var g = 0; g < b.length; g++) this.hb(a, b[g], c, d, e);
        else c = c || this.handleEvent, d = Ua(d) ? !!d.capture : !!d, e = e || this.O || this, c = Hi(c), d = !!d, b = wi(a) ? a.ci(b, c, d, e) : a ? (a = Ji(a)) ? a.ci(b, c, d, e) : null : null, b && (Oi(b), delete this.o[b.key]);
        return this
    };

    function Wi(a) {
        Sc(a.o, function(b, c) {
            this.o.hasOwnProperty(c) && Oi(b)
        }, a);
        a.o = {}
    }
    f.ya = function() {
        Ri.ua.ya.call(this);
        Wi(this)
    };
    f.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var Xi;
    try {
        new URL("s://g"), Xi = !0
    } catch (a) {
        Xi = !1
    }
    var Yi = Xi;

    function Zi(a) {
        if (!Yi) {
            a: {
                var b = document.createElement("a");
                try {
                    b.href = a
                } catch (c) {
                    a = void 0;
                    break a
                }
                a = b.protocol;a = ":" === a || "" === a ? "https:" : a
            }
            return a
        }
        try {
            b = new URL(a)
        } catch (c) {
            return "https:"
        }
        return b.protocol
    }
    var $i = ["data:", "http:", "https:", "mailto:", "ftp:"];

    function aj(a) {
        a instanceof td ? a = vd(a) : a = "javascript:" !== Zi(a) ? a : void 0;
        return a
    };

    function bj(a, b) {
        b = aj(b);
        void 0 !== b && (a.href = b)
    };
    var cj = {};

    function dj() {}

    function ej(a) {
        this.i = a
    }
    n(ej, dj);
    ej.prototype.toString = function() {
        return this.i
    };

    function Q(a, b) {
        if (void 0 !== a.tagName) {
            if ("script" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript.");
            if ("style" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet.");
        }
        a.innerHTML = Xd(b)
    }

    function fj(a, b) {
        var c = gj;
        if (0 === c.length) throw Error("No prefixes are provided");
        if (c.map(function(d) {
                if (d instanceof ej) d = d.i;
                else throw Error("");
                return d
            }).every(function(d) {
                return 0 !== "value".indexOf(d)
            })) throw Error('Attribute "value" does not match any of the allowed prefixes.');
        a.setAttribute("value", b)
    };

    function hj(a) {
        var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };

    function ij(a, b) {
        b = aj(b);
        void 0 !== b && (a.href = b)
    };

    function jj(a) {
        this.Ml = a
    }

    function kj(a) {
        return new jj(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    }
    var lj = [kj("data"), kj("http"), kj("https"), kj("mailto"), kj("ftp"), new jj(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];

    function mj(a) {
        var b = void 0 === b ? lj : b;
        a: {
            b = void 0 === b ? lj : b;
            for (var c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d instanceof jj && d.Ml(a)) {
                    a = zd(a);
                    break a
                }
            }
            a = void 0
        }
        return a || Ad
    };

    function R() {
        mi.call(this);
        this.Qd = new Ai(this);
        this.Js = this;
        this.dm = null
    }
    u(R, mi);
    R.prototype[vi] = !0;
    f = R.prototype;
    f.fh = function() {
        return this.dm
    };
    f.oh = function(a) {
        this.dm = a
    };
    f.addEventListener = function(a, b, c, d) {
        P(this, a, b, c, d)
    };
    f.removeEventListener = function(a, b, c, d) {
        Ni(this, a, b, c, d)
    };
    f.dispatchEvent = function(a) {
        var b, c = this.fh();
        if (c)
            for (b = []; c; c = c.fh()) b.push(c);
        c = this.Js;
        var d = a.type || a;
        if ("string" === typeof a) a = new pi(a, c);
        else if (a instanceof pi) a.target = a.target || c;
        else {
            var e = a;
            a = new pi(d, c);
            bd(a, e)
        }
        e = !0;
        if (b)
            for (var g = b.length - 1; !a.i && 0 <= g; g--) {
                var h = a.currentTarget = b[g];
                e = nj(h, d, !0, a) && e
            }
        a.i || (h = a.currentTarget = c, e = nj(h, d, !0, a) && e, a.i || (e = nj(h, d, !1, a) && e));
        if (b)
            for (g = 0; !a.i && g < b.length; g++) h = a.currentTarget = b[g], e = nj(h, d, !1, a) && e;
        return e
    };
    f.ya = function() {
        R.ua.ya.call(this);
        if (this.Qd) {
            var a = this.Qd,
                b = 0,
                c;
            for (c in a.i) {
                for (var d = a.i[c], e = 0; e < d.length; e++) ++b, zi(d[e]);
                delete a.i[c];
                a.j--
            }
        }
        this.dm = null
    };
    f.na = function(a, b, c, d) {
        return this.Qd.add(String(a), b, !1, c, d)
    };
    f.Hf = function(a, b, c, d) {
        return this.Qd.add(String(a), b, !0, c, d)
    };
    f.hb = function(a, b, c, d) {
        return this.Qd.remove(String(a), b, c, d)
    };

    function nj(a, b, c, d) {
        b = a.Qd.i[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, g = 0; g < b.length; ++g) {
            var h = b[g];
            if (h && !h.mh && h.capture == c) {
                var k = h.listener,
                    l = h.Bj || h.src;
                h.jj && Ci(a.Qd, h);
                e = !1 !== k.call(l, d) && e
            }
        }
        return e && !d.defaultPrevented
    }
    f.eh = ba(7);
    f.ci = function(a, b, c, d) {
        return this.Qd.ci(String(a), b, c, d)
    };
    f.hasListener = function(a, b) {
        return this.Qd.hasListener(void 0 !== a ? String(a) : void 0, b)
    };

    function oj(a) {
        R.call(this);
        this.i = a || window;
        this.o = P(this.i, "resize", this.s, !1, this);
        this.j = ef(this.i)
    }
    u(oj, R);
    oj.prototype.Fa = function() {
        return this.j ? this.j.clone() : null
    };
    oj.prototype.ya = function() {
        oj.ua.ya.call(this);
        this.o && (Oi(this.o), this.o = null);
        this.j = this.i = null
    };
    oj.prototype.s = function() {
        var a = ef(this.i);
        Be(a, this.j) || (this.j = a, this.dispatchEvent("resize"))
    };

    function pj(a) {
        if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) return !1;
        if (qj(a.keyCode)) return !0;
        switch (a.keyCode) {
            case 18:
            case 20:
            case 93:
            case 17:
            case 40:
            case 35:
            case 27:
            case 36:
            case 45:
            case 37:
            case 224:
            case 91:
            case 144:
            case 12:
            case 34:
            case 33:
            case 19:
            case 255:
            case 44:
            case 39:
            case 145:
            case 16:
            case 38:
            case 252:
            case 224:
            case 92:
                return !1;
            case 0:
                return !oc;
            default:
                return 166 > a.keyCode || 183 < a.keyCode
        }
    }

    function rj(a, b, c, d, e, g) {
        if (rc && e) return qj(a);
        if (e && !d) return !1;
        if (!oc) {
            "number" === typeof b && (b = sj(b));
            var h = 17 == b || 18 == b || rc && 91 == b;
            if ((!c || rc) && h || rc && 16 == b && (d || g)) return !1
        }
        if ((pc || mc) && d && c) switch (a) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
                return !1
        }
        if (A && d && b == a) return !1;
        switch (a) {
            case 13:
                return oc ? g || e ? !1 : !(c && d) : !0;
            case 27:
                return !(pc || mc || oc)
        }
        return oc && (d || e || g) ? !1 : qj(a)
    }

    function qj(a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (pc || mc) && 0 == a) return !0;
        switch (a) {
            case 32:
            case 43:
            case 63:
            case 64:
            case 107:
            case 109:
            case 110:
            case 111:
            case 186:
            case 59:
            case 189:
            case 187:
            case 61:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
            case 219:
            case 220:
            case 221:
            case 163:
            case 58:
                return !0;
            case 173:
                return oc;
            default:
                return !1
        }
    }

    function sj(a) {
        if (oc) a = tj(a);
        else if (rc && pc) switch (a) {
            case 93:
                a = 91
        }
        return a
    }

    function tj(a) {
        switch (a) {
            case 61:
                return 187;
            case 59:
                return 186;
            case 173:
                return 189;
            case 224:
                return 91;
            case 0:
                return 224;
            default:
                return a
        }
    };

    function uj(a) {
        if (a.tc && "function" == typeof a.tc) return a.tc();
        if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set) return Array.from(a.values());
        if ("string" === typeof a) return a.split("");
        if (Ta(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        b = [];
        c = 0;
        for (d in a) b[c++] = a[d];
        return b
    }

    function vj(a) {
        if (a.ke && "function" == typeof a.ke) return a.ke();
        if (!a.tc || "function" != typeof a.tc) {
            if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys());
            if (!("undefined" !== typeof Set && a instanceof Set)) {
                if (Ta(a) || "string" === typeof a) {
                    var b = [];
                    a = a.length;
                    for (var c = 0; c < a; c++) b.push(c);
                    return b
                }
                return Uc(a)
            }
        }
    }

    function wj(a, b, c) {
        if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
        else if (Ta(a) || "string" === typeof a) Array.prototype.forEach.call(a, b, c);
        else
            for (var d = vj(a), e = uj(a), g = e.length, h = 0; h < g; h++) b.call(c, e[h], d && d[h], a)
    };
    var xj = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function yj(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("="),
                    e = null;
                if (0 <= d) {
                    var g = a[c].substring(0, d);
                    e = a[c].substring(d + 1)
                } else g = a[c];
                b(g, e ? Ge(e) : "")
            }
        }
    }

    function zj(a, b, c) {
        c = null != c ? "=" + encodeURIComponent(String(c)) : "";
        if (b += c) {
            c = a.indexOf("#");
            0 > c && (c = a.length);
            var d = a.indexOf("?");
            if (0 > d || d > c) {
                d = c;
                var e = ""
            } else e = a.substring(d + 1, c);
            a = [a.slice(0, d), e, a.slice(c)];
            c = a[1];
            a[1] = b ? c ? c + "&" + b : b : c;
            a = a[0] + (a[1] ? "?" + a[1] : "") + a[2]
        }
        return a
    }

    function Aj(a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
            var g = a.charCodeAt(b - 1);
            if (38 == g || 63 == g)
                if (g = a.charCodeAt(b + e), !g || 61 == g || 38 == g || 35 == g) return b;
            b += e + 1
        }
        return -1
    }
    var Bj = /#|$/;

    function Cj(a) {
        var b = window.location.href,
            c = b.search(Bj),
            d = Aj(b, 0, a, c);
        if (0 > d) return null;
        var e = b.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += a.length + 1;
        return Ge(b.slice(d, -1 !== e ? e : 0))
    }
    var Dj = /[?&]($|#)/;

    function S(a, b) {
        this.j = this.ka = this.N = "";
        this.ha = null;
        this.i = this.s = "";
        this.O = !1;
        var c;
        a instanceof S ? (this.O = void 0 !== b ? b : a.O, Ej(this, a.N), this.ka = a.ka, this.j = a.j, Fj(this, a.ha), Gj(this, a.s), Hj(this, a.o.clone()), this.i = a.i) : a && (c = String(a).match(xj)) ? (this.O = !!b, Ej(this, c[1] || "", !0), this.ka = Ij(c[2] || ""), this.j = Ij(c[3] || "", !0), Fj(this, c[4]), Gj(this, c[5] || "", !0), Hj(this, c[6] || "", !0), this.i = Ij(c[7] || "")) : (this.O = !!b, this.o = new Jj(null, this.O))
    }
    S.prototype.toString = function() {
        var a = [],
            b = this.N;
        b && a.push(Kj(b, Lj, !0), ":");
        var c = this.j;
        if (c || "file" == b) a.push("//"), (b = this.ka) && a.push(Kj(b, Lj, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.ha, null != c && a.push(":", String(c));
        if (c = this.s) this.j && "/" != c.charAt(0) && a.push("/"), a.push(Kj(c, "/" == c.charAt(0) ? Mj : Nj, !0));
        (c = this.o.toString()) && a.push("?", c);
        (c = this.i) && a.push("#", Kj(c, Oj));
        return a.join("")
    };
    S.prototype.resolve = function(a) {
        var b = this.clone(),
            c = !!a.N;
        c ? Ej(b, a.N) : c = !!a.ka;
        c ? b.ka = a.ka : c = !!a.j;
        c ? b.j = a.j : c = null != a.ha;
        var d = a.s;
        if (c) Fj(b, a.ha);
        else if (c = !!a.s) {
            if ("/" != d.charAt(0))
                if (this.j && !this.s) d = "/" + d;
                else {
                    var e = b.s.lastIndexOf("/"); - 1 != e && (d = b.s.slice(0, e + 1) + d)
                } e = d;
            if (".." == e || "." == e) d = "";
            else if (Zb(e, "./") || Zb(e, "/.")) {
                d = Nb(e, "/");
                e = e.split("/");
                for (var g = [], h = 0; h < e.length;) {
                    var k = e[h++];
                    "." == k ? d && h == e.length && g.push("") : ".." == k ? ((1 < g.length || 1 == g.length && "" != g[0]) && g.pop(), d && h == e.length &&
                        g.push("")) : (g.push(k), d = !0)
                }
                d = g.join("/")
            } else d = e
        }
        c ? Gj(b, d) : c = "" !== a.o.toString();
        c ? Hj(b, a.o.clone()) : c = !!a.i;
        c && (b.i = a.i);
        return b
    };
    S.prototype.clone = function() {
        return new S(this)
    };

    function Ej(a, b, c) {
        a.N = c ? Ij(b, !0) : b;
        a.N && (a.N = a.N.replace(/:$/, ""))
    }

    function Fj(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
            a.ha = b
        } else a.ha = null
    }

    function Gj(a, b, c) {
        a.s = c ? Ij(b, !0) : b
    }

    function Hj(a, b, c) {
        b instanceof Jj ? (a.o = b, Pj(a.o, a.O)) : (c || (b = Kj(b, Qj)), a.o = new Jj(b, a.O))
    }
    S.prototype.getQuery = function() {
        return this.o.toString()
    };

    function T(a, b, c) {
        a.o.set(b, c);
        return a
    }

    function U(a, b) {
        return a.o.get(b)
    }

    function Rj(a, b) {
        a.o.remove(b);
        return a
    }

    function Ij(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }

    function Kj(a, b, c) {
        return "string" === typeof a ? (a = encodeURI(a).replace(b, Sj), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    }

    function Sj(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
    var Lj = /[#\/\?@]/g,
        Nj = /[#\?:]/g,
        Mj = /[#\?]/g,
        Qj = /[#\?@]/g,
        Oj = /#/g;

    function Jj(a, b) {
        this.j = this.i = null;
        this.o = a || null;
        this.s = !!b
    }

    function Tj(a) {
        a.i || (a.i = new Map, a.j = 0, a.o && yj(a.o, function(b, c) {
            a.add(Ge(b), c)
        }))
    }

    function Uj(a) {
        var b = vj(a);
        if ("undefined" == typeof b) throw Error("Keys are undefined");
        var c = new Jj(null);
        a = uj(a);
        for (var d = 0; d < b.length; d++) {
            var e = b[d],
                g = a[d];
            Array.isArray(g) ? Vj(c, e, g) : c.add(e, g)
        }
        return c
    }
    f = Jj.prototype;
    f.add = function(a, b) {
        Tj(this);
        this.o = null;
        a = Wj(this, a);
        var c = this.i.get(a);
        c || this.i.set(a, c = []);
        c.push(b);
        this.j += 1;
        return this
    };
    f.remove = function(a) {
        Tj(this);
        a = Wj(this, a);
        return this.i.has(a) ? (this.o = null, this.j -= this.i.get(a).length, this.i.delete(a)) : !1
    };
    f.Hc = ba(5);

    function Xj(a, b) {
        Tj(a);
        b = Wj(a, b);
        return a.i.has(b)
    }
    f.forEach = function(a, b) {
        Tj(this);
        this.i.forEach(function(c, d) {
            c.forEach(function(e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    };
    f.ke = function() {
        Tj(this);
        for (var a = Array.from(this.i.values()), b = Array.from(this.i.keys()), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], g = 0; g < e.length; g++) c.push(b[d]);
        return c
    };
    f.tc = function(a) {
        Tj(this);
        var b = [];
        if ("string" === typeof a) Xj(this, a) && (b = b.concat(this.i.get(Wj(this, a))));
        else {
            a = Array.from(this.i.values());
            for (var c = 0; c < a.length; c++) b = b.concat(a[c])
        }
        return b
    };
    f.set = function(a, b) {
        Tj(this);
        this.o = null;
        a = Wj(this, a);
        Xj(this, a) && (this.j -= this.i.get(a).length);
        this.i.set(a, [b]);
        this.j += 1;
        return this
    };
    f.get = function(a, b) {
        if (!a) return b;
        a = this.tc(a);
        return 0 < a.length ? String(a[0]) : b
    };

    function Vj(a, b, c) {
        a.remove(b);
        0 < c.length && (a.o = null, a.i.set(Wj(a, b), vb(c)), a.j += c.length)
    }
    f.toString = function() {
        if (this.o) return this.o;
        if (!this.i) return "";
        for (var a = [], b = Array.from(this.i.keys()), c = 0; c < b.length; c++) {
            var d = b[c],
                e = encodeURIComponent(String(d));
            d = this.tc(d);
            for (var g = 0; g < d.length; g++) {
                var h = e;
                "" !== d[g] && (h += "=" + encodeURIComponent(String(d[g])));
                a.push(h)
            }
        }
        return this.o = a.join("&")
    };
    f.clone = function() {
        var a = new Jj;
        a.o = this.o;
        this.i && (a.i = new Map(this.i), a.j = this.j);
        return a
    };

    function Wj(a, b) {
        b = String(b);
        a.s && (b = b.toLowerCase());
        return b
    }

    function Pj(a, b) {
        b && !a.s && (Tj(a), a.o = null, a.i.forEach(function(c, d) {
            var e = d.toLowerCase();
            d != e && (this.remove(d), Vj(this, e, c))
        }, a));
        a.s = b
    }
    f.Gq = function(a) {
        for (var b = 0; b < arguments.length; b++) wj(arguments[b], function(c, d) {
            this.add(d, c)
        }, this)
    };

    function Yj(a) {
        try {
            return q.JSON.parse(a)
        } catch (b) {}
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + a + ")")
        } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    };

    function Zj() {}
    Zj.prototype.i = null;

    function ak(a) {
        var b;
        (b = a.i) || (b = {}, bk(a) && (b[0] = !0, b[1] = !0), b = a.i = b);
        return b
    };
    var ck;

    function dk() {}
    u(dk, Zj);

    function ek(a) {
        return (a = bk(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    }

    function bk(a) {
        if (!a.j && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.j = d
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.j
    }
    ck = new dk;

    function fk(a, b) {
        this.o = a;
        this.s = b;
        this.j = 0;
        this.i = null
    }
    fk.prototype.get = function() {
        if (0 < this.j) {
            this.j--;
            var a = this.i;
            this.i = a.next;
            a.next = null
        } else a = this.o();
        return a
    };

    function gk(a, b) {
        a.s(b);
        100 > a.j && (a.j++, b.next = a.i, a.i = b)
    };

    function hk(a, b) {
        var c = a;
        b && (c = r(a, b));
        c = ik(c);
        "function" !== typeof q.setImmediate || q.Window && q.Window.prototype && !z("Edge") && q.Window.prototype.setImmediate == q.setImmediate ? (jk || (jk = kk()), jk(c)) : q.setImmediate(c)
    }
    var jk;

    function kk() {
        var a = q.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !z("Presto") && (a = function() {
            var e = G("IFRAME");
            e.style.display = "none";
            document.documentElement.appendChild(e);
            var g = e.contentWindow;
            e = g.document;
            e.open();
            e.close();
            var h = "callImmediate" + Math.random(),
                k = "file:" == g.location.protocol ? "*" : g.location.protocol + "//" + g.location.host;
            e = r(function(l) {
                if (("*" == k || l.origin == k) && l.data == h) this.port1.onmessage()
            }, this);
            g.addEventListener("message",
                e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    g.postMessage(h, k)
                }
            }
        });
        if ("undefined" !== typeof a && !cc()) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.cb;
                    c.cb = null;
                    e()
                }
            };
            return function(e) {
                d.next = {
                    cb: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function(e) {
            q.setTimeout(e, 0)
        }
    }
    var ik = Pc;

    function lk(a) {
        q.setTimeout(function() {
            throw a;
        }, 0)
    };

    function mk() {
        this.j = this.i = null
    }
    mk.prototype.add = function(a, b) {
        var c = nk.get();
        c.set(a, b);
        this.j ? this.j.next = c : this.i = c;
        this.j = c
    };
    mk.prototype.remove = function() {
        var a = null;
        this.i && (a = this.i, this.i = this.i.next, this.i || (this.j = null), a.next = null);
        return a
    };
    var nk = new fk(function() {
        return new ok
    }, function(a) {
        return a.reset()
    });

    function ok() {
        this.next = this.i = this.Te = null
    }
    ok.prototype.set = function(a, b) {
        this.Te = a;
        this.i = b;
        this.next = null
    };
    ok.prototype.reset = function() {
        this.next = this.i = this.Te = null
    };
    var pk, qk = !1,
        rk = new mk;

    function sk(a, b) {
        pk || tk();
        qk || (pk(), qk = !0);
        rk.add(a, b)
    }

    function tk() {
        if (q.Promise && q.Promise.resolve) {
            var a = q.Promise.resolve(void 0);
            pk = function() {
                a.then(uk)
            }
        } else pk = function() {
            hk(uk)
        }
    }

    function uk() {
        for (var a; a = rk.remove();) {
            try {
                a.Te.call(a.i)
            } catch (b) {
                lk(b)
            }
            gk(nk, a)
        }
        qk = !1
    };

    function vk(a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };

    function wk(a) {
        this.i = 0;
        this.ka = void 0;
        this.s = this.j = this.o = null;
        this.N = this.O = !1;
        if (a != Oc) try {
            var b = this;
            a.call(void 0, function(c) {
                xk(b, 2, c)
            }, function(c) {
                xk(b, 3, c)
            })
        } catch (c) {
            xk(this, 3, c)
        }
    }

    function yk() {
        this.next = this.context = this.j = this.o = this.i = null;
        this.s = !1
    }
    yk.prototype.reset = function() {
        this.context = this.j = this.o = this.i = null;
        this.s = !1
    };
    var zk = new fk(function() {
        return new yk
    }, function(a) {
        a.reset()
    });

    function Ak(a, b, c) {
        var d = zk.get();
        d.o = a;
        d.j = b;
        d.context = c;
        return d
    }

    function Bk() {
        var a, b, c = new wk(function(d, e) {
            a = d;
            b = e
        });
        return new Ck(c, a, b)
    }
    wk.prototype.then = function(a, b, c) {
        return Dk(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
    };
    wk.prototype.$goog_Thenable = !0;
    wk.prototype.cancel = function(a) {
        if (0 == this.i) {
            var b = new Ek(a);
            sk(function() {
                Fk(this, b)
            }, this)
        }
    };

    function Fk(a, b) {
        if (0 == a.i)
            if (a.o) {
                var c = a.o;
                if (c.j) {
                    for (var d = 0, e = null, g = null, h = c.j; h && (h.s || (d++, h.i == a && (e = h), !(e && 1 < d))); h = h.next) e || (g = h);
                    e && (0 == c.i && 1 == d ? Fk(c, b) : (g ? (d = g, d.next == c.s && (c.s = d), d.next = d.next.next) : Gk(c), Hk(c, e, 3, b)))
                }
                a.o = null
            } else xk(a, 3, b)
    }

    function Ik(a, b) {
        a.j || 2 != a.i && 3 != a.i || Jk(a);
        a.s ? a.s.next = b : a.j = b;
        a.s = b
    }

    function Dk(a, b, c, d) {
        var e = Ak(null, null, null);
        e.i = new wk(function(g, h) {
            e.o = b ? function(k) {
                try {
                    var l = b.call(d, k);
                    g(l)
                } catch (m) {
                    h(m)
                }
            } : g;
            e.j = c ? function(k) {
                try {
                    var l = c.call(d, k);
                    void 0 === l && k instanceof Ek ? h(k) : g(l)
                } catch (m) {
                    h(m)
                }
            } : h
        });
        e.i.o = a;
        Ik(a, e);
        return e.i
    }
    wk.prototype.oa = function(a) {
        this.i = 0;
        xk(this, 2, a)
    };
    wk.prototype.ta = function(a) {
        this.i = 0;
        xk(this, 3, a)
    };

    function xk(a, b, c) {
        if (0 == a.i) {
            a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
            a.i = 1;
            a: {
                var d = c,
                    e = a.oa,
                    g = a.ta;
                if (d instanceof wk) {
                    Ik(d, Ak(e || Oc, g || null, a));
                    var h = !0
                } else if (vk(d)) d.then(e, g, a),
                h = !0;
                else {
                    if (Ua(d)) try {
                        var k = d.then;
                        if ("function" === typeof k) {
                            Kk(d, k, e, g, a);
                            h = !0;
                            break a
                        }
                    } catch (l) {
                        g.call(a, l);
                        h = !0;
                        break a
                    }
                    h = !1
                }
            }
            h || (a.ka = c, a.i = b, a.o = null, Jk(a), 3 != b || c instanceof Ek || Lk(a, c))
        }
    }

    function Kk(a, b, c, d, e) {
        function g(l) {
            k || (k = !0, d.call(e, l))
        }

        function h(l) {
            k || (k = !0, c.call(e, l))
        }
        var k = !1;
        try {
            b.call(a, h, g)
        } catch (l) {
            g(l)
        }
    }

    function Jk(a) {
        a.O || (a.O = !0, sk(a.ha, a))
    }

    function Gk(a) {
        var b = null;
        a.j && (b = a.j, a.j = b.next, b.next = null);
        a.j || (a.s = null);
        return b
    }
    wk.prototype.ha = function() {
        for (var a; a = Gk(this);) Hk(this, a, this.i, this.ka);
        this.O = !1
    };

    function Hk(a, b, c, d) {
        if (3 == c && b.j && !b.s)
            for (; a && a.N; a = a.o) a.N = !1;
        if (b.i) b.i.o = null, Mk(b, c, d);
        else try {
            b.s ? b.o.call(b.context) : Mk(b, c, d)
        } catch (e) {
            Nk.call(null, e)
        }
        gk(zk, b)
    }

    function Mk(a, b, c) {
        2 == b ? a.o.call(a.context, c) : a.j && a.j.call(a.context, c)
    }

    function Lk(a, b) {
        a.N = !0;
        sk(function() {
            a.N && Nk.call(null, b)
        })
    }
    var Nk = lk;

    function Ek(a) {
        db.call(this, a)
    }
    u(Ek, db);
    Ek.prototype.name = "cancel";

    function Ck(a, b, c) {
        this.promise = a;
        this.resolve = b;
        this.reject = c
    };

    function Ok(a, b) {
        R.call(this);
        this.j = a || 1;
        this.i = b || q;
        this.o = r(this.uw, this);
        this.s = $a()
    }
    u(Ok, R);
    f = Ok.prototype;
    f.enabled = !1;
    f.ab = null;

    function Pk(a, b) {
        a.j = b;
        a.ab && a.enabled ? (a.stop(), a.start()) : a.ab && a.stop()
    }
    f.uw = function() {
        if (this.enabled) {
            var a = $a() - this.s;
            0 < a && a < .8 * this.j ? this.ab = this.i.setTimeout(this.o, this.j - a) : (this.ab && (this.i.clearTimeout(this.ab), this.ab = null), this.dispatchEvent("tick"), this.enabled && (this.stop(), this.start()))
        }
    };
    f.start = function() {
        this.enabled = !0;
        this.ab || (this.ab = this.i.setTimeout(this.o, this.j), this.s = $a())
    };
    f.stop = function() {
        this.enabled = !1;
        this.ab && (this.i.clearTimeout(this.ab), this.ab = null)
    };
    f.ya = function() {
        Ok.ua.ya.call(this);
        this.stop();
        delete this.i
    };

    function V(a, b, c) {
        if ("function" === typeof a) c && (a = r(a, c));
        else if (a && "function" == typeof a.handleEvent) a = r(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : q.setTimeout(a, b || 0)
    }

    function Qk(a) {
        q.clearTimeout(a)
    };

    function Rk(a) {
        R.call(this);
        this.headers = new Map;
        this.ha = a || null;
        this.j = !1;
        this.ka = this.i = null;
        this.Lj = "";
        this.o = this.ta = this.s = this.oa = !1;
        this.O = 0;
        this.N = null;
        this.Ca = "";
        this.va = this.wa = !1
    }
    u(Rk, R);
    var Sk = /^https?$/i,
        Tk = ["POST", "PUT"],
        Uk = [];

    function Vk(a, b, c, d, e, g, h) {
        var k = new Rk;
        Uk.push(k);
        b && k.na("complete", b);
        k.Hf("ready", k.Ws);
        g && (k.O = Math.max(0, g));
        h && (k.wa = h);
        k.send(a, c, d, e)
    }
    f = Rk.prototype;
    f.Ws = function() {
        this.Ia();
        rb(Uk, this)
    };
    f.send = function(a, b, c, d) {
        if (this.i) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.Lj + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.Lj = a;
        this.oa = !1;
        this.j = !0;
        this.i = this.ha ? ek(this.ha) : ek(ck);
        this.ka = this.ha ? ak(this.ha) : ak(ck);
        this.i.onreadystatechange = r(this.Ip, this);
        try {
            this.ta = !0, this.i.open(b, String(a), !0), this.ta = !1
        } catch (h) {
            Wk(this);
            return
        }
        a = c || "";
        c = new Map(this.headers);
        if (d)
            if (Object.getPrototypeOf(d) === Object.prototype)
                for (var e in d) c.set(e, d[e]);
            else if ("function" ===
            typeof d.keys && "function" === typeof d.get) {
            e = na(d.keys());
            for (var g = e.next(); !g.done; g = e.next()) g = g.value, c.set(g, d.get(g))
        } else throw Error("Unknown input type for opt_headers: " + String(d));
        d = Array.from(c.keys()).find(function(h) {
            return "content-type" == h.toLowerCase()
        });
        e = q.FormData && a instanceof q.FormData;
        !pb(Tk, b) || d || e || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        b = na(c);
        for (d = b.next(); !d.done; d = b.next()) c = na(d.value), d = c.next().value, c = c.next().value, this.i.setRequestHeader(d,
            c);
        this.Ca && (this.i.responseType = this.Ca);
        "withCredentials" in this.i && this.i.withCredentials !== this.wa && (this.i.withCredentials = this.wa);
        try {
            Xk(this), 0 < this.O && ((this.va = Yk(this.i)) ? (this.i.timeout = this.O, this.i.ontimeout = r(this.wg, this)) : this.N = V(this.wg, this.O, this)), this.s = !0, this.i.send(a), this.s = !1
        } catch (h) {
            Wk(this)
        }
    };

    function Yk(a) {
        return A && "number" === typeof a.timeout && void 0 !== a.ontimeout
    }
    f.wg = function() {
        "undefined" != typeof Pa && this.i && (this.dispatchEvent("timeout"), this.abort(8))
    };

    function Wk(a) {
        a.j = !1;
        a.i && (a.o = !0, a.i.abort(), a.o = !1);
        Zk(a);
        $k(a)
    }

    function Zk(a) {
        a.oa || (a.oa = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
    }
    f.abort = function() {
        this.i && this.j && (this.j = !1, this.o = !0, this.i.abort(), this.o = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), $k(this))
    };
    f.ya = function() {
        this.i && (this.j && (this.j = !1, this.o = !0, this.i.abort(), this.o = !1), $k(this, !0));
        Rk.ua.ya.call(this)
    };
    f.Ip = function() {
        this.Pd || (this.ta || this.s || this.o ? al(this) : this.Av())
    };
    f.Av = function() {
        al(this)
    };

    function al(a) {
        if (a.j && "undefined" != typeof Pa && (!a.ka[1] || 4 != (a.i ? a.i.readyState : 0) || 2 != bl(a)))
            if (a.s && 4 == (a.i ? a.i.readyState : 0)) V(a.Ip, 0, a);
            else if (a.dispatchEvent("readystatechange"), 4 == (a.i ? a.i.readyState : 0)) {
            a.j = !1;
            try {
                cl(a) ? (a.dispatchEvent("complete"), a.dispatchEvent("success")) : Zk(a)
            } finally {
                $k(a)
            }
        }
    }

    function $k(a, b) {
        if (a.i) {
            Xk(a);
            var c = a.i,
                d = a.ka[0] ? function() {} : null;
            a.i = null;
            a.ka = null;
            b || a.dispatchEvent("ready");
            try {
                c.onreadystatechange = d
            } catch (e) {}
        }
    }

    function Xk(a) {
        a.i && a.va && (a.i.ontimeout = null);
        a.N && (Qk(a.N), a.N = null)
    }
    f.isActive = function() {
        return !!this.i
    };

    function cl(a) {
        var b = bl(a);
        a: switch (b) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                var c = !0;
                break a;
            default:
                c = !1
        }
        if (!c) {
            if (b = 0 === b) a = String(a.Lj).match(xj)[1] || null, !a && q.self && q.self.location && (a = q.self.location.protocol.slice(0, -1)), b = !Sk.test(a ? a.toLowerCase() : "");
            c = b
        }
        return c
    }

    function bl(a) {
        try {
            return 2 < (a.i ? a.i.readyState : 0) ? a.i.status : -1
        } catch (b) {
            return -1
        }
    }

    function dl(a) {
        try {
            return a.i ? a.i.responseText : ""
        } catch (b) {
            return ""
        }
    }

    function el(a, b) {
        if (a.i) {
            a = a.i.responseText;
            b && 0 == a.indexOf(b) && (a = a.substring(b.length));
            a: {
                b = a;
                if (q.JSON) try {
                    var c = q.JSON.parse(b);
                    break a
                } catch (d) {}
                c = Yj(b)
            }
            return c
        }
    };

    function fl(a) {
        var b = {
            nonce: re()
        };
        b = void 0 === b ? {} : b;
        a = (a instanceof md && a.constructor === md ? a.i : "type_error:SafeScript").toString();
        var c = "<script";
        b.id && (c += ' id="' + gl(b.id) + '"');
        b.nonce && (c += ' nonce="' + gl(b.nonce) + '"');
        b.type && (c += ' type="' + gl(b.type) + '"');
        return Zd(c + (">" + a + "\x3c/script>"))
    }

    function gl(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    };

    function hl(a) {
        var b = document.createElement("template");
        if (!("content" in b)) {
            b = Zd("<html><body>" + a);
            b = (new DOMParser).parseFromString(Xd(b), "text/html");
            for (a = b.createDocumentFragment(); 0 < b.body.childNodes.length;) a.appendChild(b.body.firstChild);
            return a
        }
        a = Zd(a);
        Q(b, a);
        return b.content
    };

    function il(a) {
        a = a.nodeName;
        return "string" === typeof a ? a : "FORM"
    }

    function jl(a) {
        a = a.nodeType;
        return a === Node.ELEMENT_NODE || "number" !== typeof a
    };

    function kl(a, b, c, d) {
        this.j = a;
        this.i = b;
        this.o = c;
        this.s = d
    };
    var ll = new kl(new Set("ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER".split(" ")), new Map([
            ["A",
                new Map([
                    ["href", {
                        Cc: 2
                    }]
                ])
            ],
            ["AREA", new Map([
                ["href", {
                    Cc: 2
                }]
            ])],
            ["LINK", new Map([
                ["href", {
                    Cc: 2,
                    conditions: new Map([
                        ["rel", new Set("alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" "))]
                    ])
                }]
            ])],
            ["SOURCE", new Map([
                ["src", {
                    Cc: 2
                }]
            ])],
            ["IMG", new Map([
                ["src", {
                    Cc: 2
                }]
            ])],
            ["VIDEO", new Map([
                ["src", {
                    Cc: 2
                }]
            ])],
            ["AUDIO", new Map([
                ["src", {
                    Cc: 2
                }]
            ])]
        ]), new Set("title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(" ")),
        new Map([
            ["dir", {
                Cc: 3,
                conditions: new Map([
                    ["dir", new Set(["auto", "ltr", "rtl"])]
                ])
            }],
            ["async", {
                Cc: 3,
                conditions: new Map([
                    ["async", new Set(["async"])]
                ])
            }],
            ["cite", {
                Cc: 2
            }],
            ["loading", {
                Cc: 3,
                conditions: new Map([
                    ["loading", new Set(["eager", "lazy"])]
                ])
            }],
            ["poster", {
                Cc: 2
            }],
            ["target", {
                Cc: 3,
                conditions: new Map([
                    ["target", new Set(["_self", "_blank"])]
                ])
            }]
        ]));

    function ml(a) {
        this.j = a;
        this.i = [];
        if (cj !== cj) throw Error("Bad secret");
    }

    function nl(a, b) {
        a.i = [];
        b = a.xd(b);
        if (0 !== a.i.length) throw Error("");
        return b
    }
    ml.prototype.xd = function(a) {
        var b = document.createElement("span");
        b.appendChild(ol(this, a));
        a = (new XMLSerializer).serializeToString(b);
        a = a.slice(a.indexOf(">") + 1, a.lastIndexOf("</"));
        return Zd(a)
    };

    function ol(a, b) {
        b = hl(b);
        b = document.createTreeWalker(b, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, function(h) {
            return pl(a, h)
        }, !1);
        for (var c = b.nextNode(), d = document.createDocumentFragment(), e = d; null !== c;) {
            var g = void 0;
            if (c.nodeType === Node.TEXT_NODE) g = document.createTextNode(c.data);
            else if (jl(c)) g = ql(a, c);
            else throw Error("Node is not of type text or element");
            e.appendChild(g);
            if (c = b.firstChild()) e = g;
            else
                for (; !(c = b.nextSibling()) && (c = b.parentNode());) e = e.parentNode
        }
        return d
    }

    function ql(a, b) {
        var c = il(b),
            d = document.createElement(c);
        b = b.attributes;
        for (var e = na(b), g = e.next(); !g.done; g = e.next()) {
            var h = g.value;
            g = h.name;
            h = h.value;
            var k = a.j,
                l = k.i.get(c);
            k = (null == l ? 0 : l.has(g)) ? l.get(g) : k.o.has(g) ? {
                Cc: 1
            } : k.s.get(g) || {
                Cc: 0
            };
            a: {
                if (l = k.conditions) {
                    l = na(l);
                    for (var m = l.next(); !m.done; m = l.next()) {
                        var p = na(m.value);
                        m = p.next().value;
                        p = p.next().value;
                        var w = void 0;
                        if ((m = null == (w = b.getNamedItem(m)) ? void 0 : w.value) && !p.has(m)) {
                            l = !1;
                            break a
                        }
                    }
                }
                l = !0
            }
            if (l) switch (k.Cc) {
                case 1:
                    d.setAttribute(g,
                        h);
                    break;
                case 2:
                    k = Zi(h);
                    k = void 0 !== k && -1 !== $i.indexOf(k.toLowerCase()) ? h : "about:invalid#zClosurez";
                    k !== h && rl(a);
                    d.setAttribute(g, k);
                    break;
                case 3:
                    d.setAttribute(g, h.toLowerCase());
                    break;
                case 4:
                    d.setAttribute(g, h);
                    break;
                case 0:
                    rl(a);
                    break;
                default:
                    throw Error("Unhandled AttributePolicyAction case");
            } else rl(a)
        }
        return d
    }

    function pl(a, b) {
        if (b.nodeType === Node.TEXT_NODE) return NodeFilter.FILTER_ACCEPT;
        if (!jl(b)) return NodeFilter.FILTER_REJECT;
        b = il(b);
        if (null === b) return rl(a), NodeFilter.FILTER_REJECT;
        var c = a.j;
        if ("form" !== b.toLowerCase() && (c.j.has(b) || c.i.has(b))) return NodeFilter.FILTER_ACCEPT;
        rl(a);
        return NodeFilter.FILTER_REJECT
    }

    function rl(a) {
        0 === a.i.length && a.i.push("")
    }
    var sl = new ml(ll);

    function ul(a) {
        return nl(sl, a)
    };
    var vl = {
            0: 1,
            1: .01
        },
        wl = {
            0: .1,
            1: .01
        };

    function xl(a, b) {
        var c = void 0;
        yl ? c = yl : "undefined" !== typeof window && window.navigator && void 0 !== window.navigator.sendBeacon ? c = navigator.sendBeacon.bind(navigator) : c = zl;
        c("https://csp.withgoogle.com/csp/lcreport/" + a.yi, JSON.stringify({
            host: window.location.hostname,
            type: b,
            additionalData: void 0
        }))
    }

    function zl(a, b) {
        var c = new XMLHttpRequest;
        c.open("POST", a);
        c.setRequestHeader("Content-Type", "application/json");
        c.send(b)
    }
    var Al, Bl = new function() {
            this.j = !1;
            this.i = ll
        },
        Cl = new Map(Bl.i.s);
    Cl.set("style", {
        Cc: 4
    });
    Bl.i = new kl(Bl.i.j, Bl.i.i, Bl.i.o, Cl);
    var Dl = new Map(Bl.i.s);
    Dl.set("class", {
        Cc: 1
    });
    Bl.i = new kl(Bl.i.j, Bl.i.i, Bl.i.o, Dl);
    var El = new Map(Bl.i.s);
    El.set("id", {
        Cc: 1
    });
    Bl.i = new kl(Bl.i.j, Bl.i.i, Bl.i.o, El);
    if (Bl.j) throw Error("this sanitizer has already called build");
    Bl.j = !0;
    Al = new ml(Bl.i);
    var yl;

    function Fl(a, b) {
        a = Gl(a);
        var c;
        if (c = b) {
            var d, e;
            c = Math.random() < (null != (e = null != (d = b.ux) ? d : vl[b.yi[0]]) ? e : 0)
        }
        if (c && "DocumentFragment" in window) {
            var g, h;
            Math.random() < (null != (h = null != (g = b.jx) ? g : wl[b.yi[0]]) ? h : 0) && xl(b, "HEARTBEAT");
            b: {
                try {
                    nl(Al, a)
                } catch (l) {
                    xl(b, "H_RSANITIZE");
                    d = !0;
                    break b
                }
                try {
                    ul(a)
                } catch (l) {
                    xl(b, "H_SANITIZE");
                    d = !0;
                    break b
                }
                d = !1
            }
            if (!d) {
                var k = void 0 === k ? {} : k;
                d = gl(a);
                k.px && (d = d.replace(/(^|[\r\n\t ]) /g, "$1&#160;"));
                k.ox && (d = d.replace(/(\r\n|\n|\r)/g, "<br>"));
                k.qx && (d = d.replace(/(\t+)/g,
                    '<span style="white-space:pre">$1</span>'));
                Zd(d).toString() !== a && xl(b, "H_ESCAPE")
            }
        }
        return Zd(a)
    }

    function Gl(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    };

    function Hl() {}
    f = Hl.prototype;
    f.ub = function(a) {
        this.Ab = a.width;
        this.Fb = a.height
    };
    f.Fa = function() {
        return new Ae(this.Ab, this.Fb)
    };
    f.le = function() {
        return this.ka
    };
    f.ud = function() {
        return this.O
    };
    f.Bb = function() {
        return this.Ab
    };
    f.Hb = function() {
        return this.Fb
    };
    f.rd = function() {
        return new B(this.ka, this.O)
    };

    function Il(a) {
        return new Xg(a.ka, a.O, a.Ab, a.Fb)
    };

    function Jl() {
        this.i = []
    }
    Jl.prototype.Va = function(a) {
        this.i.push(a)
    };
    Jl.prototype.Fa = function() {
        var a = this.Bb(),
            b = this.Hb();
        return null === a || null === b ? null : new Ae(a, b)
    };
    Jl.prototype.Sd = function(a) {
        return this.i.filter(a || Mc)
    };

    function Kl(a, b) {
        for (var c = 0; c < a.i.length; c++) {
            var d = a.i[c];
            if (b(d)) return d
        }
        return null
    }

    function Ll(a, b) {
        return Kl(a, function(c) {
            return c.ud() <= b && c.ud() + c.Fa().height >= b
        })
    }

    function Ml(a, b) {
        return a.i.find(function(c) {
            return Vg(Yg(Il(c)), b)
        })
    };

    function Nl() {
        this.i = [];
        this.cells = []
    }
    u(Nl, Jl);
    f = Nl.prototype;
    f.Nm = 0;
    f.Ni = 0;
    f.marginRight = 0;
    f.Mi = 0;
    f.Gl = 0;
    f.ik = 0;
    f.wq = !1;
    f.Bb = function() {
        return this.Ab
    };
    f.Hb = function() {
        return this.Fb
    };

    function Ol(a) {
        a.ka();
        for (var b = a.Nm, c = 0; c < a.o; c++) {
            var d = Pl(a, c);
            a.cells[c].forEach(function(h) {
                if (h) {
                    var k = b + Math.round((d - h.Fa().width) / 2);
                    h.ka = k
                }
            });
            b += d + a.Gl
        }
        a.Ab = b + a.marginRight;
        var e = a.Ni;
        for (c = 0; c < a.j; c++) {
            var g = Ql(a, c);
            Rl(a, c).forEach(function(h) {
                if (h)
                    if (this.wq) {
                        var k = e + Math.round((g - h.Fa().height) / 2);
                        h.O = k
                    } else h.O = e
            });
            e += g + a.ik
        }
        a.Fb = e + a.Mi
    }

    function Rl(a, b) {
        return a.cells.map(function(c) {
            return c[b]
        })
    }

    function Pl(a, b) {
        var c = 0;
        a.cells[b].forEach(function(d) {
            d && (c = Math.max(c, d.Fa().width))
        });
        return c
    }

    function Ql(a, b) {
        var c = 0;
        Rl(a, b).forEach(function(d) {
            d && (c = Math.max(c, d.Fa().height))
        });
        return c
    };

    function Sl(a) {
        this.s = a
    }
    n(Sl, Hl);
    Sl.prototype.Ha = function() {
        return this.s
    };
    Sl.prototype.ub = function(a) {
        void 0 == a.width ? (this.Fb = a.height, this.Ab = Math.round(a.height * Tl(this.s))) : void 0 == a.height ? (this.Ab = a.width, this.Fb = Math.round(a.width / Tl(this.s))) : (this.Ab = a.width, this.Fb = a.height)
    };

    function Ul() {
        return "rtl" == document.body.dir
    }

    function Vl(a, b, c) {
        a = a.style;
        A ? a.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + b + '", sizingMethod="scale")' : (a.backgroundImage = "url(" + b + ")", a.backgroundRepeat = c || "no-repeat")
    }
    var Wl = {
            border: !0,
            padding: !0,
            margin: !0
        },
        Xl = ["Top", "Bottom", "Right", "Left"],
        Yl = {
            color: "#0000cc",
            textDecoration: "underline"
        };

    function Zl(a) {
        var b = {
            backgroundColor: "transparent",
            border: "0px",
            color: "#000",
            fontFamily: "Arial, sans-serif",
            fontSize: "13.28px",
            fontWeight: "normal",
            lineHeight: "1",
            margin: "0px",
            padding: "0px",
            textAlign: "left",
            textDecoration: "none",
            verticalAlign: "middle"
        };
        v(a, function(c) {
            Sc(b, t($l, c))
        })
    }

    function $l(a, b, c) {
        var d = "" == fh(a, c);
        Wl[c] ? v(Xl, function(e) {
            d && "" == fh(a, c + e) && K(a, c + e, b)
        }) : d && ("a" == a.tagName.toLowerCase() && Yl[c] ? K(a, c, Yl[c]) : K(a, c, b))
    }

    function W(a, b) {
        var c = {
                img: !0,
                div: !0,
                table: !0,
                td: !0,
                span: !0,
                a: !0
            },
            d = [];
        c[a.tagName.toLowerCase()] && d.push(a);
        b || Sc(c, function(e, g) {
            wb(d, vb(a.getElementsByTagName(g)))
        });
        Zl(d)
    };

    function am(a, b, c) {
        mi.call(this);
        this.ti = a;
        this.o = b || 0;
        this.i = c;
        this.j = r(this.Hq, this)
    }
    u(am, mi);
    f = am.prototype;
    f.Cb = 0;
    f.ya = function() {
        am.ua.ya.call(this);
        this.stop();
        delete this.ti;
        delete this.i
    };
    f.start = function(a) {
        this.stop();
        this.Cb = V(this.j, void 0 !== a ? a : this.o)
    };
    f.stop = function() {
        this.isActive() && Qk(this.Cb);
        this.Cb = 0
    };
    f.isActive = function() {
        return 0 != this.Cb
    };
    f.Hq = function() {
        this.Cb = 0;
        this.ti && this.ti.call(this.i)
    };
    var Yc = {},
        bm = null;

    function cm(a) {
        a = Va(a);
        delete Yc[a];
        Xc() && bm && bm.stop()
    }

    function dm() {
        bm || (bm = new am(function() {
            em()
        }, 20));
        var a = bm;
        a.isActive() || a.start()
    }

    function em() {
        var a = $a();
        Sc(Yc, function(b) {
            fm(b, a)
        });
        Xc() || dm()
    };

    function gm() {
        R.call(this);
        this.Nc = 0;
        this.endTime = this.startTime = null
    }
    u(gm, R);
    gm.prototype.Kf = function() {
        this.Ad("begin")
    };
    gm.prototype.af = function() {
        this.Ad("end")
    };
    gm.prototype.Ad = function(a) {
        this.dispatchEvent(a)
    };

    function hm(a, b, c, d) {
        gm.call(this);
        if (!Array.isArray(a) || !Array.isArray(b)) throw Error("Start and end parameters must be arrays");
        if (a.length != b.length) throw Error("Start and end points must be the same length");
        this.j = a;
        this.N = b;
        this.duration = c;
        this.s = d;
        this.coords = [];
        this.progress = 0
    }
    u(hm, gm);
    f = hm.prototype;
    f.play = function(a) {
        if (a || 0 == this.Nc) this.progress = 0, this.coords = this.j;
        else if (1 == this.Nc) return !1;
        cm(this);
        this.startTime = a = $a(); - 1 == this.Nc && (this.startTime -= this.duration * this.progress);
        this.endTime = this.startTime + this.duration;
        this.progress || this.Kf();
        this.Ad("play"); - 1 == this.Nc && this.Ad("resume");
        this.Nc = 1;
        var b = Va(this);
        b in Yc || (Yc[b] = this);
        dm();
        fm(this, a);
        return !0
    };
    f.stop = function(a) {
        cm(this);
        this.Nc = 0;
        a && (this.progress = 1);
        im(this, this.progress);
        this.Ad("stop");
        this.af()
    };
    f.ya = function() {
        0 == this.Nc || this.stop(!1);
        this.Ad("destroy");
        hm.ua.ya.call(this)
    };

    function fm(a, b) {
        b < a.startTime && (a.endTime = b + a.endTime - a.startTime, a.startTime = b);
        a.progress = (b - a.startTime) / (a.endTime - a.startTime);
        1 < a.progress && (a.progress = 1);
        im(a, a.progress);
        1 == a.progress ? (a.Nc = 0, cm(a), a.Ad("finish"), a.af()) : 1 == a.Nc && a.am()
    }

    function im(a, b) {
        "function" === typeof a.s && (b = a.s(b));
        a.coords = Array(a.j.length);
        for (var c = 0; c < a.j.length; c++) a.coords[c] = (a.N[c] - a.j[c]) * b + a.j[c]
    }
    f.am = function() {
        this.Ad("animate")
    };
    f.Ad = function(a) {
        this.dispatchEvent(new jm(a, this))
    };

    function jm(a, b) {
        pi.call(this, a);
        this.coords = b.coords;
        this.x = b.coords[0];
        this.y = b.coords[1];
        this.z = b.coords[2];
        this.duration = b.duration;
        this.progress = b.progress;
        this.state = b.Nc
    }
    u(jm, pi);

    function km(a) {
        return 3 * a * a - 2 * a * a * a
    };

    function X() {
        R.call(this);
        this.i = new Ri(this)
    }
    u(X, R);
    X.prototype.ya = function() {
        this.dispatchEvent("dispose");
        X.ua.ya.call(this);
        this.i.Ia()
    };

    function lm() {
        X.call(this)
    }
    u(lm, X);

    function mm(a, b) {
        this.x = a;
        this.y = b
    }
    u(mm, B);

    function nm(a) {
        return new mm(a.x, a.y)
    }
    mm.prototype.clone = function() {
        return new mm(this.x, this.y)
    };
    mm.prototype.qk = B.prototype.qk;
    mm.prototype.add = function(a) {
        this.x += a.x;
        this.y += a.y;
        return this
    };

    function om(a, b) {
        a.x -= b.x;
        a.y -= b.y
    };

    function pm(a, b) {
        this.i = a;
        this.j = b
    }

    function qm(a, b) {
        var c = Ml(a.i, b);
        if (!c) a: {
            c = Number.POSITIVE_INFINITY;
            for (var d = a.i.Sd(), e = d[0], g = 0; g < d.length; g++) {
                var h = d[g],
                    k = Wg(Yg(Il(h)), b);
                if (k < c) {
                    c = k;
                    if (0 == k) {
                        c = h;
                        break a
                    }
                    e = h
                }
            }
            c = e
        }
        a = a.j.Yh(c);
        b = nm(b);
        om(b, c.rd());
        d = a.Fa().width / c.Fa().width;
        c = a.Fa().height / c.Fa().height;
        b = new B(Math.round(b.x * d), Math.round(b.y * c));
        return nm(a.rd()).add(b)
    };
    var rm = {};
    var sm;
    var tm = "combobox grid group listbox menu menubar radiogroup row rowgroup tablist textbox toolbar tree treegrid".split(" ");

    function um(a, b) {
        b ? a.setAttribute("role", b) : a.removeAttribute("role")
    }

    function Y(a, b, c) {
        Array.isArray(c) && (c = c.join(" "));
        var d = "aria-" + b;
        "" === c || void 0 == c ? (sm || (c = {}, sm = (c.atomic = !1, c.autocomplete = "none", c.dropeffect = "none", c.haspopup = !1, c.live = "off", c.multiline = !1, c.multiselectable = !1, c.orientation = "vertical", c.readonly = !1, c.relevant = "additions text", c.required = !1, c.sort = "none", c.busy = !1, c.disabled = !1, c.hidden = !1, c.invalid = "false", c)), c = sm, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
    }

    function vm(a, b) {
        a = a.getAttribute("aria-" + b);
        return null == a || void 0 == a ? "" : String(a)
    }

    function wm(a) {
        var b = vm(a, "activedescendant");
        return Ve(a).getElementById(b)
    }

    function xm(a, b) {
        var c = "";
        b && (c = b.id);
        Y(a, "activedescendant", c)
    }

    function ym(a, b) {
        Y(a, "label", b)
    };
    var zm = function() {
        if (sc) {
            var a = /Windows NT ([0-9.]+)/;
            return (a = a.exec(bc())) ? a[1] : "0"
        }
        return rc ? (a = /1[0|1][_.][0-9_.]+/, (a = a.exec(bc())) ? a[0].replace(/_/g, ".") : "10") : uc ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(bc())) ? a[1] : "") : vc || wc || xc ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(bc())) ? a[1].replace(/_/g, ".") : "") : ""
    }();

    function Am(a) {
        return (a = a.exec(bc())) ? a[1] : ""
    }
    var Bm = function() {
        if (ag) return Am(/Firefox\/([0-9.]+)/);
        if (A || mc || lc) return Ec;
        if (eg) {
            if (hc() || z("Macintosh")) {
                var a = Am(/CriOS\/([0-9.]+)/);
                if (a) return a
            }
            return Am(/Chrome\/([0-9.]+)/)
        }
        if (fg && !hc()) return Am(/Version\/([0-9.]+)/);
        if (bg || cg) {
            if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(bc())) return a[1] + "." + a[2]
        } else if (dg) return (a = Am(/Android\s+([0-9.]+)/)) ? a : Am(/Version\/([0-9.]+)/);
        return ""
    }();

    function Cm(a, b, c) {
        R.call(this);
        this.target = a;
        this.N = b || a;
        this.va = c || new Xg(NaN, NaN, NaN, NaN);
        this.o = Ve(a);
        this.i = new Ri(this);
        ni(this, this.i);
        this.deltaY = this.deltaX = this.Da = this.Ca = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.Ub = !0;
        this.j = !1;
        this.ta = 0;
        P(this.N, ["touchstart", "mousedown"], this.zm, !1, this);
        this.O = Dm
    }
    u(Cm, R);
    var Dm = q.document && q.document.documentElement && !!q.document.documentElement.setCapture && !!q.document.releaseCapture;

    function Em(a, b) {
        a.va = b || new Xg(NaN, NaN, NaN, NaN)
    }
    f = Cm.prototype;
    f.Ta = function(a) {
        this.Ub = a
    };
    f.ya = function() {
        Cm.ua.ya.call(this);
        Ni(this.N, ["touchstart", "mousedown"], this.zm, !1, this);
        Wi(this.i);
        this.O && this.o.releaseCapture();
        this.N = this.target = null
    };
    f.zm = function(a) {
        var b = "mousedown" == a.type;
        if (!this.Ub || this.j || b && !ui(a)) this.dispatchEvent("earlycancel");
        else {
            if (0 == this.ta)
                if (this.dispatchEvent(new Fm("start", this, a.clientX, a.clientY, a))) this.j = !0, b && a.preventDefault();
                else return;
            else b && a.preventDefault();
            b = this.o;
            var c = b.documentElement,
                d = !this.O;
            this.i.na(b, ["touchmove", "mousemove"], this.ku, {
                capture: d,
                passive: !1
            });
            this.i.na(b, ["touchend", "mouseup"], this.nj, d);
            this.O ? (c.setCapture(!1), this.i.na(c, "losecapture", this.nj)) : this.i.na(jf(b), "blur",
                this.nj);
            this.Ka && this.i.na(this.Ka, "scroll", this.Bv, d);
            this.clientX = this.Ca = a.clientX;
            this.clientY = this.Da = a.clientY;
            this.screenX = a.screenX;
            this.screenY = a.screenY;
            this.deltaX = this.target.offsetLeft;
            this.deltaY = this.target.offsetTop;
            this.wa = gf(Te(this.o).i)
        }
    };
    f.nj = function(a, b) {
        Wi(this.i);
        this.O && this.o.releaseCapture();
        this.j ? (this.j = !1, this.dispatchEvent(new Fm("end", this, a.clientX, a.clientY, a, Gm(this, this.deltaX), Hm(this, this.deltaY), b || "touchcancel" == a.type))) : this.dispatchEvent("earlycancel")
    };
    f.ku = function(a) {
        if (this.Ub) {
            var b = a.clientX - this.clientX,
                c = a.clientY - this.clientY;
            this.clientX = a.clientX;
            this.clientY = a.clientY;
            this.screenX = a.screenX;
            this.screenY = a.screenY;
            if (!this.j) {
                var d = this.Ca - this.clientX,
                    e = this.Da - this.clientY;
                if (d * d + e * e > this.ta)
                    if (this.dispatchEvent(new Fm("start", this, a.clientX, a.clientY, a))) this.j = !0;
                    else {
                        this.Pd || this.nj(a);
                        return
                    }
            }
            c = Im(this, b, c);
            b = c.x;
            c = c.y;
            this.j && this.dispatchEvent(new Fm("beforedrag", this, a.clientX, a.clientY, a, b, c)) && (Jm(this, a, b, c), a.preventDefault())
        }
    };

    function Im(a, b, c) {
        var d = gf(Te(a.o).i);
        b += d.x - a.wa.x;
        c += d.y - a.wa.y;
        a.wa = d;
        a.deltaX += b;
        a.deltaY += c;
        return new B(Gm(a, a.deltaX), Hm(a, a.deltaY))
    }
    f.Bv = function(a) {
        var b = Im(this, 0, 0);
        a.clientX = this.clientX;
        a.clientY = this.clientY;
        Jm(this, a, b.x, b.y)
    };

    function Jm(a, b, c, d) {
        a.jl(c, d);
        a.dispatchEvent(new Fm("drag", a, b.clientX, b.clientY, b, c, d))
    }

    function Gm(a, b) {
        var c = a.va;
        a = isNaN(c.left) ? null : c.left;
        c = isNaN(c.width) ? 0 : c.width;
        return Math.min(null != a ? a + c : Infinity, Math.max(null != a ? a : -Infinity, b))
    }

    function Hm(a, b) {
        var c = a.va;
        a = isNaN(c.top) ? null : c.top;
        c = isNaN(c.height) ? 0 : c.height;
        return Math.min(null != a ? a + c : Infinity, Math.max(null != a ? a : -Infinity, b))
    }
    f.jl = function(a, b) {
        this.target.style.left = a + "px";
        this.target.style.top = b + "px"
    };

    function Fm(a, b, c, d, e, g, h) {
        pi.call(this, a);
        this.clientX = c;
        this.clientY = d;
        this.j = e;
        this.left = void 0 !== g ? g : b.deltaX;
        this.top = void 0 !== h ? h : b.deltaY
    }
    u(Fm, pi);

    function Km(a) {
        this.Jd = new Map;
        var b = arguments.length;
        if (1 < b) {
            if (b % 2) throw Error("Uneven number of arguments");
            for (var c = 0; c < b; c += 2) this.set(arguments[c], arguments[c + 1])
        } else if (a)
            if (a instanceof Km)
                for (b = na(a.Jd), c = b.next(); !c.done; c = b.next()) {
                    var d = na(c.value);
                    c = d.next().value;
                    d = d.next().value;
                    this.Jd.set(c, d)
                } else if (a)
                    for (b = na(Object.entries(a)), c = b.next(); !c.done; c = b.next()) d = na(c.value), c = d.next().value, d = d.next().value, this.Jd.set(c, d)
    }
    f = Km.prototype;
    f.tc = function() {
        return Array.from(this.Jd.values())
    };
    f.ke = function() {
        return Array.from(this.Jd.keys())
    };
    f.Hc = ba(4);
    f.remove = function(a) {
        return this.Jd.delete(a)
    };
    f.get = function(a, b) {
        return this.Jd.has(a) ? this.Jd.get(a) : b
    };
    f.set = function(a, b) {
        this.Jd.set(a, b);
        return this
    };
    f.forEach = function(a, b) {
        var c = this;
        b = void 0 === b ? this : b;
        this.Jd.forEach(function(d, e) {
            return a.call(b, d, e, c)
        })
    };
    f.clone = function() {
        return new Km(this)
    };
    (function() {
        for (var a = ["ms", "moz", "webkit", "o"], b, c = 0; b = a[c] && !q.requestAnimationFrame; ++c) q.requestAnimationFrame = q[b + "RequestAnimationFrame"], q.cancelAnimationFrame = q[b + "CancelAnimationFrame"] || q[b + "CancelRequestAnimationFrame"];
        if (!q.requestAnimationFrame) {
            var d = 0;
            q.requestAnimationFrame = function(e) {
                var g = (new Date).getTime(),
                    h = Math.max(0, 16 - (g - d));
                d = g + h;
                return q.setTimeout(function() {
                    e(g + h)
                }, h)
            };
            q.cancelAnimationFrame || (q.cancelAnimationFrame = function(e) {
                clearTimeout(e)
            })
        }
    })();
    var Lm = [
            [],
            []
        ],
        Mm = 0,
        Nm = !1,
        Om = 0;

    function Pm(a, b) {
        var c = Om++,
            d = {
                gv: {
                    id: c,
                    Te: a.measure,
                    context: b
                },
                lv: {
                    id: c,
                    Te: a.kv,
                    context: b
                },
                state: {},
                od: void 0,
                Hj: !1
            };
        return function() {
            0 < arguments.length ? (d.od || (d.od = []), d.od.length = 0, d.od.push.apply(d.od, arguments), d.od.push(d.state)) : d.od && 0 != d.od.length ? (d.od[0] = d.state, d.od.length = 1) : d.od = [d.state];
            d.Hj || (d.Hj = !0, Lm[Mm].push(d));
            Nm || (Nm = !0, window.requestAnimationFrame(Qm))
        }
    }

    function Qm() {
        Nm = !1;
        var a = Lm[Mm],
            b = a.length;
        Mm = (Mm + 1) % 2;
        for (var c, d = 0; d < b; ++d) {
            c = a[d];
            var e = c.gv;
            c.Hj = !1;
            e.Te && e.Te.apply(e.context, c.od)
        }
        for (d = 0; d < b; ++d) c = a[d], e = c.lv, c.Hj = !1, e.Te && e.Te.apply(e.context, c.od), c.state = {};
        a.length = 0
    };
    var Rm = A ? rd(jd(kd('javascript:""'))) : rd(jd(kd("about:blank")));
    A ? rd(jd(kd('javascript:""'))) : rd(jd(kd("javascript:undefined")));

    function Sm(a) {
        R.call(this);
        this.Aa = a;
        a = A ? "focusout" : "blur";
        this.i = P(this.Aa, A ? "focusin" : "focus", this, !A);
        this.j = P(this.Aa, a, this, !A)
    }
    u(Sm, R);
    Sm.prototype.handleEvent = function(a) {
        var b = new si(a.Rb);
        b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
        this.dispatchEvent(b)
    };
    Sm.prototype.ya = function() {
        Sm.ua.ya.call(this);
        Oi(this.i);
        Oi(this.j);
        delete this.Aa
    };

    function Tm() {}
    Ra(Tm);
    Tm.prototype.i = 0;

    function Um(a) {
        return ":" + (a.i++).toString(36)
    };

    function Vm(a) {
        R.call(this);
        this.i = a || Te();
        this.Sb = Wm;
        this.Cb = null;
        this.kb = !1;
        this.Aa = null;
        this.ta = void 0;
        this.oa = this.ka = this.O = this.Xl = null;
        this.Od = !1
    }
    u(Vm, R);
    Vm.prototype.Ge = Tm.Ib();
    var Wm = null;

    function Xm(a, b) {
        switch (a) {
            case 1:
                return b ? "disable" : "enable";
            case 2:
                return b ? "highlight" : "unhighlight";
            case 4:
                return b ? "activate" : "deactivate";
            case 8:
                return b ? "select" : "unselect";
            case 16:
                return b ? "check" : "uncheck";
            case 32:
                return b ? "focus" : "blur";
            case 64:
                return b ? "open" : "close"
        }
        throw Error("Invalid component state");
    }
    f = Vm.prototype;
    f.getId = function() {
        return this.Cb || (this.Cb = Um(this.Ge))
    };
    f.nh = function(a) {
        if (this.O && this.O.oa) {
            var b = this.O.oa,
                c = this.Cb;
            c in b && delete b[c];
            Zc(this.O.oa, a, this)
        }
        this.Cb = a
    };
    f.ma = function() {
        return this.Aa
    };

    function Z(a) {
        a.ta || (a.ta = new Ri(a));
        return a.ta
    }
    f.we = function(a) {
        if (this == a) throw Error("Unable to set parent component");
        if (a && this.O && this.Cb && Ym(this.O, this.Cb) && this.O != a) throw Error("Unable to set parent component");
        this.O = a;
        Vm.ua.oh.call(this, a)
    };
    f.getParent = function() {
        return this.O
    };
    f.oh = function(a) {
        if (this.O && this.O != a) throw Error("Method not supported");
        Vm.ua.oh.call(this, a)
    };
    f.Wa = function() {
        this.Aa = Of(this.i, "DIV")
    };
    f.render = function(a) {
        Zm(this, a)
    };

    function Zm(a, b, c) {
        if (a.kb) throw Error("Component already rendered");
        a.Aa || a.Wa();
        b ? b.insertBefore(a.Aa, c || null) : a.i.i.body.appendChild(a.Aa);
        a.O && !a.O.kb || a.Oa()
    }

    function $m(a, b) {
        if (a.kb) throw Error("Component already rendered");
        if (b && a.Oi(b)) {
            a.Od = !0;
            var c = Ve(b);
            a.i && a.i.i == c || (a.i = Te(b));
            a.Qb(b);
            a.Oa()
        } else throw Error("Invalid element to decorate");
    }
    f.Oi = function() {
        return !0
    };
    f.Qb = function(a) {
        this.Aa = a
    };
    f.Oa = function() {
        this.kb = !0;
        an(this, function(a) {
            !a.kb && a.ma() && a.Oa()
        })
    };
    f.oc = function() {
        an(this, function(a) {
            a.kb && a.oc()
        });
        this.ta && Wi(this.ta);
        this.kb = !1
    };
    f.ya = function() {
        this.kb && this.oc();
        this.ta && (this.ta.Ia(), delete this.ta);
        an(this, function(a) {
            a.Ia()
        });
        !this.Od && this.Aa && I(this.Aa);
        this.O = this.Xl = this.Aa = this.oa = this.ka = null;
        Vm.ua.ya.call(this)
    };
    f.Ra = function(a, b) {
        this.Pg(a, bn(this), b)
    };
    f.Pg = function(a, b, c) {
        if (a.kb && (c || !this.kb)) throw Error("Component already rendered");
        if (0 > b || b > bn(this)) throw Error("Child component index out of bounds");
        this.oa && this.ka || (this.oa = {}, this.ka = []);
        if (a.getParent() == this) {
            var d = a.getId();
            this.oa[d] = a;
            rb(this.ka, a)
        } else Zc(this.oa, a.getId(), a);
        a.we(this);
        xb(this.ka, b, 0, a);
        a.kb && this.kb && a.getParent() == this ? (c = this.Mb(), (c.childNodes[b] || null) != a.ma() && (a.ma().parentElement == c && c.removeChild(a.ma()), b = c.childNodes[b] || null, c.insertBefore(a.ma(), b))) :
            c ? (this.Aa || this.Wa(), b = cn(this, b + 1), Zm(a, this.Mb(), b ? b.Aa : null)) : this.kb && !a.kb && a.Aa && a.Aa.parentNode && 1 == a.Aa.parentNode.nodeType && a.Oa()
    };
    f.Mb = function() {
        return this.Aa
    };

    function dn(a) {
        null == a.Sb && (a.Sb = Ch(a.kb ? a.Aa : a.i.i.body));
        return a.Sb
    }

    function bn(a) {
        return a.ka ? a.ka.length : 0
    }

    function Ym(a, b) {
        a.oa && b ? (a = a.oa, b = (null !== a && b in a ? a[b] : void 0) || null) : b = null;
        return b
    }

    function cn(a, b) {
        return a.ka ? a.ka[b] || null : null
    }

    function an(a, b, c) {
        a.ka && a.ka.forEach(b, c)
    }

    function en(a, b) {
        return a.ka && b ? a.ka.indexOf(b) : -1
    }
    f.removeChild = function(a, b) {
        if (a) {
            var c = "string" === typeof a ? a : a.getId();
            a = Ym(this, c);
            if (c && a) {
                var d = this.oa;
                c in d && delete d[c];
                rb(this.ka, a);
                b && (a.oc(), a.Aa && I(a.Aa));
                a.we(null)
            }
        }
        if (!a) throw Error("Child is not in parent component");
        return a
    };

    function fn(a, b) {
        this.Aa = a;
        this.j = b
    };

    function gn(a, b) {
        R.call(this);
        this.s = new Ri(this);
        this.Bg(a || null);
        b && (this.Cg = b)
    }
    u(gn, R);
    f = gn.prototype;
    f.Aa = null;
    f.Wk = !0;
    f.fo = null;
    f.mf = !1;
    f.Ql = -1;
    f.Kj = -1;
    f.yo = !0;
    f.Cg = "toggle_display";
    f.getType = function() {
        return this.Cg
    };
    f.ma = function() {
        return this.Aa
    };
    f.Bg = function(a) {
        hn(this);
        this.Aa = a
    };

    function hn(a) {
        if (a.mf) throw Error("Can not change this state of the popup while showing.");
    }
    f.isVisible = function() {
        return this.mf
    };
    f.Ea = function(a) {
        this.Ka && this.Ka.stop();
        this.va && this.va.stop();
        if (a) {
            if (!this.mf && this.bm()) {
                if (!this.Aa) throw Error("Caller must call setElement before trying to show the popup");
                this.Ag();
                a = Ve(this.Aa);
                if (this.Wk)
                    if (this.s.na(a, "mousedown", this.Cp, !0), A) {
                        try {
                            var b = a.activeElement
                        } catch (d) {}
                        for (; b && "IFRAME" == b.nodeName;) {
                            try {
                                var c = Cf(b)
                            } catch (d) {
                                break
                            }
                            a = c;
                            b = a.activeElement
                        }
                        this.s.na(a, "mousedown", this.Cp, !0);
                        this.s.na(a, "deactivate", this.Bp)
                    } else this.s.na(a, "blur", this.Bp);
                "toggle_display" == this.Cg ?
                    (this.Aa.style.visibility = "visible", N(this.Aa, !0)) : "move_offscreen" == this.Cg && this.Ag();
                this.mf = !0;
                this.Ql = Date.now();
                this.Kj = -1;
                this.Ka ? (Gi(this.Ka, "end", this.Pi, !1, this), this.Ka.play()) : this.Pi()
            }
        } else jn(this)
    };
    f.Ag = function() {};

    function jn(a, b) {
        a.mf && a.dispatchEvent({
            type: "beforehide",
            target: b
        }) && (a.s && Wi(a.s), a.mf = !1, a.Kj = Date.now(), a.va ? (Gi(a.va, "end", t(a.lo, b), !1, a), a.va.play()) : a.lo(b))
    }
    f.lo = function(a) {
        "toggle_display" == this.Cg ? this.Iu() : "move_offscreen" == this.Cg && (this.Aa.style.top = "-10000px");
        this.xh(a)
    };
    f.Iu = function() {
        this.Aa.style.visibility = "hidden";
        N(this.Aa, !1)
    };
    f.bm = function() {
        return this.dispatchEvent("beforeshow")
    };
    f.Pi = function() {
        this.dispatchEvent("show")
    };
    f.xh = function(a) {
        this.dispatchEvent({
            type: "hide",
            target: a
        })
    };
    f.Cp = function(a) {
        a = a.target;
        Bf(this.Aa, a) || kn(this, a) || 150 > Date.now() - this.Ql || jn(this, a)
    };
    f.Bp = function(a) {
        if (this.yo) {
            var b = Ve(this.Aa);
            if ("undefined" != typeof document.activeElement) {
                if (a = b.activeElement, !a || Bf(this.Aa, a) || "BODY" == a.tagName || kn(this, a)) return
            } else if (a.target != b) return;
            150 > Date.now() - this.Ql || jn(this)
        }
    };

    function kn(a, b) {
        return mb(a.fo || [], function(c) {
            return b === c || Bf(c, b)
        })
    }
    f.ya = function() {
        gn.ua.ya.call(this);
        this.s.Ia();
        li(this.Ka);
        li(this.va);
        delete this.Aa;
        delete this.s;
        delete this.fo
    };

    function ln(a, b) {
        Vm.call(this, b);
        this.Vf = !!a;
        this.va = null;
        this.Lc = Pm({
            kv: this.Tj
        }, this)
    }
    u(ln, Vm);
    f = ln.prototype;
    f.tl = null;
    f.Si = !1;
    f.qd = null;
    f.Fc = null;
    f.de = null;
    f.Xk = !1;
    f.yh = function() {
        return "goog-modalpopup"
    };
    f.Wh = function() {
        return this.qd
    };
    f.Wa = function() {
        ln.ua.Wa.call(this);
        var a = this.ma();
        Jb(a, Qb(this.yh()).split(" "));
        Hf(a, !0);
        N(a, !1);
        mn(this);
        nn(this)
    };

    function mn(a) {
        if (a.Vf && !a.Fc) {
            var b = a.i.Ua("IFRAME", {
                frameborder: 0,
                style: "border:0;vertical-align:bottom;"
            });
            b.src = pd(Rm).toString();
            a.Fc = b;
            a.Fc.className = a.yh() + "-bg";
            N(a.Fc, !1);
            Ah(a.Fc, 0)
        }
        a.qd || (a.qd = a.i.Ua("DIV", a.yh() + "-bg"), N(a.qd, !1))
    }

    function nn(a) {
        a.de || (a.de = Of(a.i, "SPAN"), N(a.de, !1), Hf(a.de, !0), a.de.style.position = "absolute")
    }
    f.Yp = function() {
        this.Xk = !1
    };
    f.Oi = function(a) {
        return !!a && "DIV" == a.tagName
    };
    f.Qb = function(a) {
        ln.ua.Qb.call(this, a);
        a = Qb(this.yh()).split(" ");
        Jb(this.ma(), a);
        mn(this);
        nn(this);
        Hf(this.ma(), !0);
        N(this.ma(), !1)
    };
    f.Oa = function() {
        this.Fc && sf(this.Fc, this.ma());
        sf(this.qd, this.ma());
        ln.ua.Oa.call(this);
        tf(this.de, this.ma());
        this.tl = new Sm(this.i.i);
        Z(this).na(this.tl, "focusin", this.wv);
        on(this, !1)
    };
    f.oc = function() {
        this.isVisible() && this.Ea(!1);
        li(this.tl);
        ln.ua.oc.call(this);
        I(this.Fc);
        I(this.qd);
        I(this.de)
    };
    f.Ea = function(a) {
        if (a != this.Si)
            if (this.Ca && this.Ca.stop(), this.Ma && this.Ma.stop(), this.wa && this.wa.stop(), this.Ka && this.Ka.stop(), this.kb && on(this, a), a) {
                if (this.dispatchEvent("beforeshow")) {
                    try {
                        this.va = this.i.i.activeElement
                    } catch (e) {}
                    this.Tj();
                    this.zh();
                    Z(this).na(Pf(this.i), "resize", this.Tj).na(Pf(this.i), "orientationchange", this.Lc);
                    pn(this, !0);
                    this.focus();
                    this.Si = !0;
                    this.Ca && this.Ma ? (Gi(this.Ca, "end", this.Ri, !1, this), this.Ma.play(), this.Ca.play()) : this.Ri()
                }
            } else if (this.dispatchEvent("beforehide")) {
            Z(this).hb(Pf(this.i),
                "resize", this.Tj).hb(Pf(this.i), "orientationchange", this.Lc);
            this.Si = !1;
            this.wa && this.Ka ? (Gi(this.wa, "end", this.Qi, !1, this), this.Ka.play(), this.wa.play()) : this.Qi();
            a: {
                try {
                    var b = this.i,
                        c = b.i.body,
                        d = b.i.activeElement || c;
                    if (!this.va || this.va == c) {
                        this.va = null;
                        break a
                    }(d == c || b.Lm(this.ma(), d)) && this.va.focus()
                } catch (e) {}
                this.va = null
            }
        }
    };

    function on(a, b) {
        a.yc || (a.yc = new fn(a.Aa, a.i));
        a = a.yc;
        if (b) {
            a.i || (a.i = []);
            b = a.j.Do(a.j.i.body);
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d == a.Aa || vm(d, "hidden") || (Y(d, "hidden", !0), a.i.push(d))
            }
        } else if (a.i) {
            for (c = 0; c < a.i.length; c++) a.i[c].removeAttribute("aria-hidden");
            a.i = null
        }
    }

    function pn(a, b) {
        a.Fc && N(a.Fc, b);
        a.qd && N(a.qd, b);
        N(a.ma(), b);
        N(a.de, b)
    }
    f.Ri = function() {
        this.dispatchEvent("show")
    };
    f.Qi = function() {
        pn(this, !1);
        this.dispatchEvent("hide")
    };
    f.isVisible = function() {
        return this.Si
    };
    f.focus = function() {
        this.Co()
    };
    f.Tj = function() {
        this.Fc && N(this.Fc, !1);
        this.qd && N(this.qd, !1);
        var a = this.i.i,
            b = ef(jf(a) || window),
            c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth));
        a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
        this.Fc && (N(this.Fc, !0), L(this.Fc, c, a));
        this.qd && (N(this.qd, !0), L(this.qd, c, a))
    };
    f.zh = function() {
        var a = jf(this.i.i) || window;
        if ("fixed" == ih(this.ma(), "position")) var b = 0,
            c = 0;
        else c = gf(this.i.i), b = c.x, c = c.y;
        var d = M(this.ma());
        a = ef(a);
        b = Math.max(b + a.width / 2 - d.width / 2, 0);
        c = Math.max(c + a.height / 2 - d.height / 2, 0);
        jh(this.ma(), b, c);
        jh(this.de, b, c)
    };
    f.wv = function(a) {
        this.Xk ? this.Yp() : a.target == this.de && V(this.Co, 0, this)
    };
    f.Co = function() {
        try {
            A && this.i.i.body.focus(), this.ma().focus()
        } catch (a) {}
    };
    f.ya = function() {
        li(this.Ca);
        this.Ca = null;
        li(this.wa);
        this.wa = null;
        li(this.Ma);
        this.Ma = null;
        li(this.Ka);
        this.Ka = null;
        ln.ua.ya.call(this)
    };

    function qn(a, b, c) {
        ln.call(this, b, c);
        this.s = a || "modal-dialog";
        this.o = rn(rn(new sn, tn, !0), un, !1, !0)
    }
    u(qn, ln);
    f = qn.prototype;
    f.ki = !0;
    f.vp = !0;
    f.nl = !0;
    f.ij = .5;
    f.Ec = "";
    f.Sf = null;
    f.Ae = null;
    f.uo = !1;
    f.kd = null;
    f.ld = null;
    f.Ii = null;
    f.Kc = null;
    f.Kd = null;
    f.zc = null;
    f.Pm = "dialog";
    f.yh = function() {
        return this.s
    };

    function vn(a, b) {
        a.Ec = b;
        a.ld && J(a.ld, b)
    }
    f.ob = function() {
        return this.Ec
    };
    f.Mc = function() {
        return null != this.Sf ? Wd(this.Sf) : ""
    };
    f.Bf = function() {
        return this.Pm
    };
    f.ug = function(a) {
        this.Pm = a
    };

    function wn(a) {
        a.ma() || a.render()
    }
    f.Mb = function() {
        wn(this);
        return this.Kd
    };

    function xn(a) {
        wn(a);
        return a.zc
    }

    function yn(a) {
        wn(a);
        return a.ma()
    }
    f.Wh = function() {
        wn(this);
        return qn.ua.Wh.call(this)
    };

    function zn(a, b) {
        a.ij = b;
        a.ma() && (b = a.Wh()) && Ah(b, a.ij)
    }
    f.Iq = function() {};

    function An(a, b) {
        var c = Qb(a.s + "-title-draggable").split(" ");
        a.ma() && (b ? Jb(a.kd, c) : Lb(a.kd, c));
        b && !a.Ae ? (b = new Cm(a.ma(), a.kd), a.Ae = b, Jb(a.kd, c), P(a.Ae, "start", a.ew, !1, a), P(a.Ae, "drag", a.Iq, !1, a)) : !b && a.Ae && (a.Ae.Ia(), a.Ae = null)
    }
    f.Wa = function() {
        qn.ua.Wa.call(this);
        var a = this.ma(),
            b = this.i;
        this.Ii = this.getId();
        var c = this.getId() + ".contentEl";
        this.kd = b.Ua("DIV", this.s + "-title", this.ld = b.Ua("SPAN", {
            className: this.s + "-title-text",
            id: this.Ii
        }, this.Ec), this.Kc = b.Ua("SPAN", this.s + "-title-close"));
        qf(a, this.kd, this.Kd = b.Ua("DIV", {
            className: this.s + "-content",
            id: c
        }), this.zc = b.Ua("DIV", this.s + "-buttons"));
        um(this.ld, "heading");
        um(this.Kc, "button");
        Hf(this.Kc, !0);
        ym(this.Kc, "Close");
        um(a, this.Bf());
        Y(a, "labelledby", this.Ii || "");
        this.Sf &&
            oe(this.Kd, this.Sf);
        N(this.Kc, this.ki);
        this.o && (a = this.o, a.Aa = this.zc, a.render());
        N(this.zc, !!this.o);
        zn(this, this.ij)
    };
    f.Qb = function(a) {
        qn.ua.Qb.call(this, a);
        a = this.ma();
        var b = this.s + "-content";
        this.Kd = Ye(null, b, a)[0];
        this.Kd || (this.Kd = this.i.Ua("DIV", b), this.Sf && oe(this.Kd, this.Sf), a.appendChild(this.Kd));
        b = this.s + "-title";
        var c = this.s + "-title-text",
            d = this.s + "-title-close";
        (this.kd = Ye(null, b, a)[0]) ? (this.ld = Ye(null, c, this.kd)[0], this.Kc = Ye(null, d, this.kd)[0]) : (this.kd = this.i.Ua("DIV", b), a.insertBefore(this.kd, this.Kd));
        this.ld ? (this.Ec = If(this.ld), this.ld.id || (this.ld.id = this.getId())) : (this.ld = F("SPAN", {
            className: c,
            id: this.getId()
        }), this.kd.appendChild(this.ld));
        this.Ii = this.ld.id;
        Y(a, "labelledby", this.Ii || "");
        this.Kc || (this.Kc = this.i.Ua("SPAN", d), this.kd.appendChild(this.Kc));
        N(this.Kc, this.ki);
        b = this.s + "-buttons";
        if (this.zc = Ye(null, b, a)[0]) {
            if (a = this.o = new sn(this.i), (b = this.zc) && 1 == b.nodeType) {
                a.Aa = b;
                b = Xe("BUTTON", a.Aa);
                c = 0;
                for (var e, g; d = b[c]; c++)
                    if (e = d.name || d.id, g = If(d) || d.value, e) {
                        var h = 0 == c;
                        a.set(e, g, h, "cancel" == d.name);
                        h && x(d, "goog-buttonset-default")
                    }
            }
        } else this.zc = this.i.Ua("DIV", b), a.appendChild(this.zc),
            this.o && (a = this.o, a.Aa = this.zc, a.render()), N(this.zc, !!this.o);
        zn(this, this.ij)
    };
    f.Oa = function() {
        qn.ua.Oa.call(this);
        Z(this).na(this.ma(), "keydown", this.Om).na(this.ma(), "keypress", this.Om);
        Z(this).na(this.zc, "click", this.rv);
        An(this, this.nl);
        Z(this).na(this.Kc, "click", this.Fv);
        var a = this.ma();
        um(a, this.Bf());
        "" !== this.ld.id && Y(a, "labelledby", this.ld.id);
        if (!this.vp) {
            this.vp = !1;
            if (this.kb) {
                a = this.i;
                var b = this.Wh();
                a.Li(this.Fc);
                a.Li(b)
            }
            this.isVisible() && on(this, !1)
        }
    };
    f.oc = function() {
        this.isVisible() && this.Ea(!1);
        An(this, !1);
        qn.ua.oc.call(this)
    };
    f.Ea = function(a) {
        a != this.isVisible() && (this.kb || this.render(), qn.ua.Ea.call(this, a))
    };
    f.Ri = function() {
        qn.ua.Ri.call(this);
        this.dispatchEvent("aftershow")
    };
    f.Qi = function() {
        qn.ua.Qi.call(this);
        this.dispatchEvent("afterhide");
        this.uo && this.Ia()
    };
    f.ew = function() {
        var a = this.i.i,
            b = ef(jf(a) || window),
            c = Math.max(a.body.scrollWidth, b.width);
        a = Math.max(a.body.scrollHeight, b.height);
        var d = M(this.ma());
        "fixed" == ih(this.ma(), "position") ? Em(this.Ae, new Xg(0, 0, Math.max(0, b.width - d.width), Math.max(0, b.height - d.height))) : Em(this.Ae, new Xg(0, 0, c - d.width, a - d.height))
    };
    f.Fv = function() {
        Bn(this)
    };

    function Bn(a) {
        if (a.ki) {
            var b = a.o,
                c = b && b.i;
            c ? (b = b.get(c), a.dispatchEvent(new Cn(c, b)) && a.Ea(!1)) : a.Ea(!1)
        }
    }
    f.ya = function() {
        this.zc = this.Kc = null;
        qn.ua.ya.call(this)
    };

    function Dn(a, b) {
        a.o = b;
        a.zc && (a.o ? (b = a.o, b.Aa = a.zc, b.render()) : oe(a.zc, ge), N(a.zc, !!a.o))
    }
    f.rv = function(a) {
        a: {
            for (a = a.target; null != a && a != this.zc;) {
                if ("BUTTON" == a.tagName) break a;
                a = a.parentNode
            }
            a = null
        }
        if (a && !a.disabled) {
            a = a.name;
            var b = this.o.get(a);
            this.dispatchEvent(new Cn(a, b)) && this.Ea(!1)
        }
    };
    f.Om = function(a) {
        var b = !1,
            c = !1,
            d = this.o,
            e = a.target;
        if ("keydown" == a.type)
            if (27 == a.keyCode) {
                var g = d && d.i;
                e = "SELECT" == e.tagName && !e.disabled;
                g && !e ? (c = !0, b = d.get(g), b = this.dispatchEvent(new Cn(g, b))) : e || (b = !0)
            } else {
                if (9 == a.keyCode && a.shiftKey && e == this.ma()) {
                    this.Xk = !0;
                    try {
                        this.de.focus()
                    } catch (l) {}
                    V(this.Yp, 0, this)
                }
            }
        else if (13 == a.keyCode) {
            if ("BUTTON" == e.tagName && !e.disabled) g = e.name;
            else if (e == this.Kc) Bn(this);
            else if (d) {
                var h = d.j,
                    k = h && En(d, h);
                e = ("TEXTAREA" == e.tagName || "SELECT" == e.tagName || "A" == e.tagName) &&
                    !e.disabled;
                !k || k.disabled || e || (g = h)
            }
            g && d && (c = !0, b = this.dispatchEvent(new Cn(g, String(d.get(g)))))
        } else e != this.Kc || 32 != a.keyCode && " " != a.key || Bn(this);
        if (b || c) a.stopPropagation(), a.preventDefault();
        b && this.Ea(!1)
    };

    function Cn(a, b) {
        this.type = "dialogselect";
        this.key = a;
        this.caption = b
    }
    u(Cn, pi);

    function sn(a) {
        Km.call(this);
        a || Te();
        this.i = this.Aa = this.j = null
    }
    u(sn, Km);
    sn.prototype.set = function(a, b, c, d) {
        Km.prototype.set.call(this, a, b);
        c && (this.j = a);
        d && (this.i = a);
        return this
    };

    function rn(a, b, c, d) {
        return a.set(b.key, b.caption, c, d)
    }
    sn.prototype.render = function() {
        if (this.Aa) {
            oe(this.Aa, ge);
            var a = Te(this.Aa);
            this.forEach(function(b, c) {
                b = a.Ua("BUTTON", {
                    name: c
                }, b);
                c == this.j && (b.className = "goog-buttonset-default");
                this.Aa.appendChild(b)
            }, this)
        }
    };
    sn.prototype.ma = function() {
        return this.Aa
    };

    function En(a, b) {
        a = Xe("BUTTON", a.Aa);
        for (var c = 0, d; d = a[c]; c++)
            if (d.name == b || d.id == b) return d;
        return null
    }
    var tn = {
            key: "ok",
            caption: "OK"
        },
        un = {
            key: "cancel",
            caption: "Cancel"
        },
        Fn = {
            key: "yes",
            caption: "Yes"
        },
        Gn = {
            key: "no",
            caption: "No"
        },
        Hn = {
            key: "save",
            caption: "Save"
        },
        In = {
            key: "continue",
            caption: "Continue"
        };
    "undefined" != typeof document && (rn(new sn, tn, !0, !0), rn(rn(new sn, tn, !0), un, !1, !0), rn(rn(new sn, Fn, !0), Gn, !1, !0), rn(rn(rn(new sn, Fn), Gn, !0), un, !1, !0), rn(rn(rn(new sn, In), Hn), un, !0, !0));

    function Jn(a, b, c, d, e) {
        hm.call(this, b, c, d, e);
        this.i = a
    }
    u(Jn, hm);
    Jn.prototype.xg = function() {};
    Jn.prototype.am = function() {
        this.xg();
        Jn.ua.am.call(this)
    };
    Jn.prototype.af = function() {
        this.xg();
        Jn.ua.af.call(this)
    };
    Jn.prototype.Kf = function() {
        this.xg();
        Jn.ua.Kf.call(this)
    };

    function Kn(a, b, c, d, e) {
        "number" === typeof b && (b = [b]);
        "number" === typeof c && (c = [c]);
        Jn.call(this, a, b, c, d, e);
        if (1 != b.length || 1 != c.length) throw Error("Start and end points must be 1D");
        this.o = -1
    }
    u(Kn, Jn);
    var Ln = 1 / 1024;
    f = Kn.prototype;
    f.xg = function() {
        var a = this.coords[0];
        Math.abs(a - this.o) >= Ln && (Ah(this.i, a), this.o = a)
    };
    f.Kf = function() {
        this.o = -1;
        Kn.ua.Kf.call(this)
    };
    f.af = function() {
        this.o = -1;
        Kn.ua.af.call(this)
    };
    f.show = function() {
        this.i.style.display = ""
    };
    f.rb = function() {
        this.i.style.display = "none"
    };

    function Mn(a, b, c) {
        Kn.call(this, a, 1, 0, b, c)
    }
    u(Mn, Kn);
    Mn.prototype.Kf = function() {
        this.show();
        Mn.ua.Kf.call(this)
    };
    Mn.prototype.af = function() {
        this.rb();
        Mn.ua.af.call(this)
    };

    function Nn(a, b, c, d, e) {
        if (3 != b.length || 3 != c.length) throw Error("Start and end points must be 3D");
        Jn.call(this, a, b, c, d, e)
    }
    u(Nn, Jn);
    Nn.prototype.xg = function() {
        for (var a = [], b = 0; b < this.coords.length; b++) a[b] = Math.round(this.coords[b]);
        this.i.style.backgroundColor = "rgb(" + a.join(",") + ")"
    };

    function On(a, b) {
        this.i = a[q.Symbol.iterator]();
        this.j = b
    }
    On.prototype[Symbol.iterator] = function() {
        return this
    };
    On.prototype.next = function() {
        var a = this.i.next();
        return {
            value: a.done ? void 0 : this.j.call(void 0, a.value),
            done: a.done
        }
    };

    function Pn(a, b) {
        return new On(a, b)
    };

    function Qn(a) {
        if (a instanceof Rn || a instanceof Sn || a instanceof Tn) return a;
        if ("function" == typeof a.next) return new Rn(function() {
            return a
        });
        if ("function" == typeof a[Symbol.iterator]) return new Rn(function() {
            return a[Symbol.iterator]()
        });
        if ("function" == typeof a.vf) return new Rn(function() {
            return a.vf()
        });
        throw Error("Not an iterator or iterable.");
    }

    function Rn(a) {
        this.i = a
    }
    Rn.prototype.vf = function() {
        return new Sn(this.i())
    };
    Rn.prototype[Symbol.iterator] = function() {
        return new Tn(this.i())
    };
    Rn.prototype.j = function() {
        return new Tn(this.i())
    };

    function Sn(a) {
        this.i = a
    }
    n(Sn, Qf);
    Sn.prototype.next = function() {
        return this.i.next()
    };
    Sn.prototype[Symbol.iterator] = function() {
        return new Tn(this.i)
    };
    Sn.prototype.j = function() {
        return new Tn(this.i)
    };

    function Tn(a) {
        Rn.call(this, function() {
            return a
        });
        this.o = a
    }
    n(Tn, Rn);
    Tn.prototype.next = function() {
        return this.o.next()
    };

    function Un(a, b) {
        this.j = {};
        this.i = [];
        this.o = this.size = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof Un)
                for (c = a.ke(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    }
    f = Un.prototype;
    f.tc = function() {
        Vn(this);
        for (var a = [], b = 0; b < this.i.length; b++) a.push(this.j[this.i[b]]);
        return a
    };
    f.ke = function() {
        Vn(this);
        return this.i.concat()
    };

    function Wn(a, b) {
        return a.has(b)
    }
    f.has = function(a) {
        return Xn(this.j, a)
    };
    f.Hc = ba(3);

    function Yn(a) {
        a.j = {};
        a.i.length = 0;
        a.size = 0;
        a.o = 0
    }
    f.remove = function(a) {
        Xn(this.j, a) ? (delete this.j[a], --this.size, this.o++, this.i.length > 2 * this.size && Vn(this), a = !0) : a = !1;
        return a
    };

    function Vn(a) {
        if (a.size != a.i.length) {
            for (var b = 0, c = 0; b < a.i.length;) {
                var d = a.i[b];
                Xn(a.j, d) && (a.i[c++] = d);
                b++
            }
            a.i.length = c
        }
        if (a.size != a.i.length) {
            var e = {};
            for (c = b = 0; b < a.i.length;) d = a.i[b], Xn(e, d) || (a.i[c++] = d, e[d] = 1), b++;
            a.i.length = c
        }
    }
    f.get = function(a, b) {
        return Xn(this.j, a) ? this.j[a] : b
    };
    f.set = function(a, b) {
        Xn(this.j, a) || (this.size += 1, this.i.push(a), this.o++);
        this.j[a] = b
    };
    f.forEach = function(a, b) {
        for (var c = this.ke(), d = 0; d < c.length; d++) {
            var e = c[d],
                g = this.get(e);
            a.call(b, g, e, this)
        }
    };
    f.clone = function() {
        return new Un(this)
    };
    f.keys = function() {
        return Qn(this.vf(!0)).j()
    };
    f.values = function() {
        return Qn(this.vf(!1)).j()
    };
    f.entries = function() {
        var a = this;
        return Pn(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    };
    f.vf = function(a) {
        Vn(this);
        var b = 0,
            c = this.o,
            d = this,
            e = new Qf;
        e.next = function() {
            if (c != d.o) throw Error("The map has changed since the iterator was created");
            if (b >= d.i.length) return Rf;
            var g = d.i[b++];
            return {
                value: a ? g : d.j[g],
                done: !1
            }
        };
        return e
    };

    function Xn(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };

    function Zn() {
        this.j = new Un;
        this.i = new $n("");
        this.i.next = this.i.i = this.i
    }
    f = Zn.prototype;
    f.get = function(a, b) {
        return (a = this.j.get(a)) ? a.value : b
    };
    f.set = function(a, b) {
        var c = this.j.get(a);
        c ? c.value = b : (c = new $n(a, b), this.j.set(a, c), a = c, a.i = this.i.i, a.next = this.i, this.i.i = a, a.i.next = a)
    };
    f.shift = function() {
        return ao(this, this.i.next)
    };
    f.pop = function() {
        return ao(this, this.i.i)
    };
    f.remove = function(a) {
        return (a = this.j.get(a)) ? (a.remove(), this.j.remove(a.key), !0) : !1
    };
    f.Hc = ba(2);
    f.ke = function() {
        return this.map(function(a, b) {
            return b
        })
    };
    f.tc = function() {
        return this.map(function(a) {
            return a
        })
    };
    f.forEach = function(a, b) {
        for (var c = this.i.next; c != this.i; c = c.next) a.call(b, c.value, c.key, this)
    };
    f.map = function(a, b) {
        for (var c = [], d = this.i.next; d != this.i; d = d.next) c.push(a.call(b, d.value, d.key, this));
        return c
    };
    f.some = function(a, b) {
        for (var c = this.i.next; c != this.i; c = c.next)
            if (a.call(b, c.value, c.key, this)) return !0;
        return !1
    };
    f.every = function(a, b) {
        for (var c = this.i.next; c != this.i; c = c.next)
            if (!a.call(b, c.value, c.key, this)) return !1;
        return !0
    };

    function ao(a, b) {
        a.i != b && (b.remove(), a.j.remove(b.key));
        return b.value
    }

    function $n(a, b) {
        this.key = a;
        this.value = b
    }
    $n.prototype.remove = function() {
        this.i.next = this.next;
        this.next.i = this.i;
        delete this.i;
        delete this.next
    };

    function bo() {
        R.call(this);
        this.j = new Zn
    }
    u(bo, R);
    bo.prototype.o = function(a) {
        a.sort(co);
        v(a, function(b) {
            b.we(this)
        }, this);
        this.j = new Zn;
        v(a, function(b) {
            this.j.set(b.Sa(), b)
        }, this);
        this.dispatchEvent("update")
    };

    function co(a, b) {
        return eo(a) - eo(b)
    }

    function fo(a) {
        return a.j.tc()
    }

    function go(a, b, c) {
        a = fo(a);
        for (var d = -1, e = 0; e < a.length; e++)
            if (a[e].Sa() == b) {
                d = e;
                break
            } if (0 <= d) return a[c + d]
    }

    function ho(a, b) {
        return a.j.get(b)
    }

    function io(a, b) {
        b = Qb(b);
        if (0 != b.length) return nb(fo(a), function(c) {
            return c.ob() == b
        })
    };

    function jo() {};
    /*

     Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: MIT
    */
    function ko(a, b) {
        this.N = [];
        this.va = a;
        this.Na = b || null;
        this.s = this.o = !1;
        this.j = void 0;
        this.oa = this.wa = this.ka = !1;
        this.O = 0;
        this.i = null;
        this.ha = 0
    }
    u(ko, jo);
    ko.prototype.cancel = function(a) {
        if (this.o) this.j instanceof ko && this.j.cancel();
        else {
            if (this.i) {
                var b = this.i;
                delete this.i;
                a ? b.cancel(a) : (b.ha--, 0 >= b.ha && b.cancel())
            }
            this.va ? this.va.call(this.Na, this) : this.oa = !0;
            this.o || (a = new lo(this), mo(this), no(this, !1, a))
        }
    };
    ko.prototype.ta = function(a, b) {
        this.ka = !1;
        no(this, a, b)
    };

    function no(a, b, c) {
        a.o = !0;
        a.j = c;
        a.s = !b;
        oo(a)
    }

    function mo(a) {
        if (a.o) {
            if (!a.oa) throw new po(a);
            a.oa = !1
        }
    }
    ko.prototype.Qg = function(a) {
        mo(this);
        no(this, !0, a)
    };

    function qo(a, b, c, d) {
        a.N.push([b, c, d]);
        a.o && oo(a)
    }
    ko.prototype.then = function(a, b, c) {
        var d, e, g = new wk(function(h, k) {
            e = h;
            d = k
        });
        qo(this, e, function(h) {
            h instanceof lo ? g.cancel() : d(h);
            return ro
        }, this);
        return g.then(a, b, c)
    };
    ko.prototype.$goog_Thenable = !0;

    function so(a) {
        return mb(a.N, function(b) {
            return "function" === typeof b[1]
        })
    }
    var ro = {};

    function oo(a) {
        if (a.O && a.o && so(a)) {
            var b = a.O,
                c = to[b];
            c && (q.clearTimeout(c.Cb), delete to[b]);
            a.O = 0
        }
        a.i && (a.i.ha--, delete a.i);
        b = a.j;
        for (var d = c = !1; a.N.length && !a.ka;) {
            var e = a.N.shift(),
                g = e[0],
                h = e[1];
            e = e[2];
            if (g = a.s ? h : g) try {
                var k = g.call(e || a.Na, b);
                k === ro && (k = void 0);
                void 0 !== k && (a.s = a.s && (k == b || k instanceof Error), a.j = b = k);
                if (vk(b) || "function" === typeof q.Promise && b instanceof q.Promise) d = !0, a.ka = !0
            } catch (l) {
                b = l, a.s = !0, so(a) || (c = !0)
            }
        }
        a.j = b;
        d && (k = r(a.ta, a, !0), d = r(a.ta, a, !1), b instanceof ko ? (qo(b, k, d),
            b.wa = !0) : b.then(k, d));
        c && (b = new uo(b), to[b.Cb] = b, a.O = b.Cb)
    }

    function po() {
        db.call(this)
    }
    u(po, db);
    po.prototype.message = "Deferred has already fired";
    po.prototype.name = "AlreadyCalledError";

    function lo() {
        db.call(this)
    }
    u(lo, db);
    lo.prototype.message = "Deferred was canceled";
    lo.prototype.name = "CanceledError";

    function uo(a) {
        this.Cb = q.setTimeout(r(this.j, this), 0);
        this.i = a
    }
    uo.prototype.j = function() {
        delete to[this.Cb];
        throw this.i;
    };
    var to = {};

    function vo(a, b) {
        var c = b || {};
        b = c.document || document;
        var d = pd(a).toString(),
            e = Of(new Ue(b), "SCRIPT"),
            g = {
                cq: e,
                wg: void 0
            },
            h = new ko(wo, g),
            k = null,
            l = null != c.timeout ? c.timeout : 5E3;
        0 < l && (k = window.setTimeout(function() {
            xo(e, !0);
            var m = new yo(1, "Timeout reached for loading script " + d);
            mo(h);
            no(h, !1, m)
        }, l), g.wg = k);
        e.onload = e.onreadystatechange = function() {
            e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (xo(e, c.Xs || !1, k), h.Qg(null))
        };
        e.onerror = function() {
            xo(e, !0, k);
            var m = new yo(0, "Error while loading script " +
                d);
            mo(h);
            no(h, !1, m)
        };
        g = c.attributes || {};
        bd(g, {
            type: "text/javascript",
            charset: "UTF-8"
        });
        cf(e, g);
        qe(e, a);
        zo(b).appendChild(e);
        return h
    }

    function zo(a) {
        var b = Xe("HEAD", a);
        return b && 0 !== b.length ? b[0] : a.documentElement
    }

    function wo() {
        if (this && this.cq) {
            var a = this.cq;
            a && "SCRIPT" == a.tagName && xo(a, !0, this.wg)
        }
    }

    function xo(a, b, c) {
        null != c && q.clearTimeout(c);
        a.onload = function() {};
        a.onerror = function() {};
        a.onreadystatechange = function() {};
        b && window.setTimeout(function() {
            I(a)
        }, 0)
    }

    function yo(a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        db.call(this, c);
        this.code = a
    }
    u(yo, db);

    function Ao(a, b, c) {
        Bo() && (vo(Co, {
            document: a
        }).then(function() {
            var d = Qa("gapi.load", b);
            d && d("gapi.rpc", {
                Qg: function() {
                    return Do(c)
                },
                onerror: function() {
                    return null
                },
                timeout: 5E3,
                ontimeout: function() {
                    return null
                }
            })
        }), V(function() {
            Do(c)
        }, 5E3))
    }

    function Eo(a) {
        var b = {};
        b.q = a;
        Fo("updateInViewportPage", b)
    }

    function Do(a) {
        var b = Qa("gapi.rpc.register");
        "function" === typeof b && (b("handshake", function() {}), Go(), Ho(a))
    }

    function Go() {
        P(document, "keydown", function(a) {
            27 == a.keyCode && Fo("closeViewportDialog")
        })
    }

    function Ho(a) {
        var b = Qa("gapi.rpc.register");
        if ("function" === typeof b)
            for (var c in a) b(c, a[c])
    }

    function Fo(a, b) {
        if (Bo()) {
            var c = Qa("gapi.rpc.call");
            "function" === typeof c && c("..", a, null, b)
        }
    }

    function Bo() {
        try {
            return window.self !== window.top
        } catch (a) {
            return !0
        }
    }
    var Co = rd(jd(kd("//apis.google.com/js/api.js")));

    function Io(a) {
        R.call(this);
        Jo(this, a || "")
    }
    n(Io, R);
    Io.prototype.getQuery = function() {
        return this.s
    };

    function Jo(a, b) {
        a.s != b && (a.s = b, a.dispatchEvent("change"), Eo(b))
    }

    function Ko(a) {
        a = new S(a);
        return U(a, "q") || U(a, "vq") || U(a, "dq")
    }

    function Lo() {
        return U(new S(window.location.toString()), "q")
    };

    function Mo(a) {
        this.i = {};
        this.V = a
    }

    function No(a, b) {
        var c = [];
        if (a.i[b]) {
            var d = [],
                e;
            for (e in a.i[b]) d.push(e);
            zb(d);
            for (e = 0; e < d.length; e++) c.push(a.i[b][d[e]])
        }
        return c
    };

    function Oo(a) {
        this.V = a;
        this.o = a.Eb()
    }
    Oo.prototype.ac = function(a) {
        this.Ga && (this.Ga.Ia(), rf(this.V.Ja().O.j));
        this.Ga = new a(this.V);
        this.Ga.Wd && this.Ga.Wd(this.V.Ha());
        this.Ga.Xd && this.Ga.Xd()
    };
    Oo.prototype.Ja = function() {
        return this.Ga
    };

    function Po(a) {
        X.call(this);
        this.oa = a;
        rf(a);
        K(a, "overflow", "hidden");
        this.o = G("div");
        K(this.oa, {
            position: "relative",
            padding: "0px"
        });
        uf(this.oa, this.o, 0);
        this.Sb = new Mo(this);
        this.Ka = [];
        this.ha = [];
        a = r(this.Qm, this, 1);
        this.ha.push(["next", a]);
        a = r(this.Qm, this, -1);
        this.ha.push(["previous", a]);
        a = r(this.Mq, this);
        this.ha.push(["turntopage", a]);
        a = r(this.Nq, this);
        this.ha.push(["zoomin", a]);
        a = r(this.Oq, this);
        this.ha.push(["zoomout", a]);
        this.ta = new Oo(this);
        a = G("div");
        W(a, !0);
        K(a, {
            position: "absolute",
            left: "0px",
            top: "0px"
        });
        this.oa.appendChild(a);
        this.Ob = a;
        this.ub(Hh(this.oa));
        Qo.push(this);
        this.Id = new Io;
        P(this.Id, "change", this.Lq, !1, this)
    }
    u(Po, X);
    var Qo = [];
    f = Po.prototype;
    f.Eb = function() {
        return this.o
    };
    f.Cd = function() {
        return this.Ob
    };
    f.ub = function(a) {
        a.width = Math.max(a.width, 0);
        a.height = Math.max(a.height, 0);
        if (!this.j || !Be(this.j, a)) {
            Gh(this.o, a, "content-box");
            this.j = a;
            var b = this.ta.Ja();
            b && b.ub(a);
            this.dispatchEvent("resize")
        }
    };
    f.Fa = function() {
        return this.j
    };
    f.Bb = function() {
        return this.j.width
    };
    f.Hb = function() {
        return this.j.height
    };
    f.go = function() {
        this.dispatchEvent("load")
    };
    f.ac = function(a) {
        this.ka != a && (this.ka = a, this.ta.ac(a), this.dispatchEvent("viewportmodechange"))
    };
    f.Za = function() {
        return this.N
    };
    f.Ja = function() {
        return this.ta.Ja()
    };

    function Ro(a, b) {
        if (a.O) throw "";
        a.O = b;
        P(b, "update", r(a.Jq, a))
    }
    f.Jq = function() {
        this.dispatchEvent("pagesupdate")
    };
    f.mb = function() {
        return this.O
    };
    f.yd = function(a, b) {
        return (a = ho(this.O, a)) ? (this.tb(a, b), a) : null
    };
    f.tb = function(a, b) {
        if (this.s != a || b) this.s = a, this.dispatchEvent("pagechange")
    };

    function So(a, b) {
        To(a, b, r(function(c) {
            V(r(this.tb, this, c))
        }, a))
    }

    function To(a, b, c) {
        a = a.mb();
        new S(b);
        b = new a.s({
            url: b
        });
        b.we(a);
        Uo(b, r(a.oa, a, c))
    }
    f.hi = function(a, b) {
        var c = this.ta.Ja().Jb();
        if (c && c.Gc && (c = c.Gc(a))) {
            b = b || new B(40, 80);
            var d = this.Ya().getQuery();
            if (!d) return;
            var e = Vo(a, d);
            if (e) {
                Wo(this, c, b, e);
                return
            }
            Uo(a, r(this.Kq, this, c, b, d))
        }
        this.tb(a)
    };
    f.Kq = function(a, b, c, d) {
        (c = Vo(d, c)) && Wo(this, a, b, c)
    };

    function Wo(a, b, c, d) {
        if (d && d.length) {
            for (var e = d[0], g = 1; g < d.length; g++) e = ch(e, d[g]);
            d = b.Ha().Be();
            d = b.Fa().width / d;
            e = new mm(e.left, e.top);
            e.qk(d);
            e.x = Math.round(e.x);
            e.y = Math.round(e.y);
            b = nm(b.rd());
            b.add(e);
            om(b, c);
            a.Ja().Lf(b)
        }
    }
    f.Sa = function() {
        return this.s.Sa()
    };
    f.Ha = function() {
        return this.s
    };
    f.wb = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) b.push(arguments[c]);
        this.Ka.push(b);
        1 == this.Ka.length && Xo(this)
    };

    function Xo(a) {
        var b = a.Ka.shift();
        if (b) {
            for (var c = b.shift(), d = 0; d < a.ha.length; d++) a.ha[d][0] == c && a.ha[d][1].apply(a, b);
            Xo(a)
        }
    }

    function Yo(a) {
        var b = a.ta.Ja();
        b.ol && b.ol(a.Ha())
    }
    f.Qm = function(a) {
        var b = this.ta.Ja(),
            c;
        b.va ? c = b.va(this.Ha(), a) : c = go(this.mb(), this.Ha().Sa(), a);
        c && (this.tb(c), Yo(this), this.dispatchEvent("pageturn"))
    };
    f.Mq = function(a) {
        if (a = ho(this.O, a)) this.tb(a), Yo(this)
    };
    f.Nq = function() {
        var a = this.ta.Ja();
        a.Sc && (a.Sc(), Yo(this))
    };
    f.Oq = function() {
        var a = this.ta.Ja();
        a.nd && (a.nd(), Yo(this))
    };
    f.Lq = function() {
        this.dispatchEvent("searchupdate")
    };
    f.Ya = function() {
        return this.Id
    };
    var Zo = {
        update: function(a) {
            for (var b in a) Zo[b] = a[b]
        },
        Ms: function(a) {
            if ("string" === typeof a) try {
                a = JSON.parse(a)
            } catch (c) {
                a = null
            }
            for (var b in a) Zo.Ls(b, a[b])
        },
        Ls: function(a, b) {
            Zo[a] = b
        }
    };
    bb("_OC_addFlags", Zo.Ms);

    function $o(a) {
        var b = Ia.apply(1, arguments);
        if (0 === b.length) return rd(a[0]);
        for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return rd(c.join(""))
    };
    var ap;

    function bp(a, b, c) {
        c = new S(c.replace(/#.*/g, ""));
        T(c, a, b);
        return c.toString()
    }

    function cp(a) {
        if (ap) {
            var b = new S(ap);
            Gj(b, a);
            return b.toString()
        }
        return a
    }

    function dp(a) {
        return bp("hl", "en", a)
    }

    function ep(a) {
        a = new S(a);
        var b = a.s.split("/");
        b[0] || b.shift();
        return 3 < b.length ? b[3] : U(a, "id") || ""
    }

    function fp() {
        var a = window.location.pathname.split("/");
        return 1 > a.length ? "" : a[1]
    };

    function gp(a) {
        R.call(this);
        this.vb = {};
        a && this.Ld(a)
    }
    u(gp, R);
    f = gp.prototype;
    f.Be = function() {
        return this.vb.w || this.getParent().i.width
    };
    f.ne = function() {
        return this.vb.h || this.getParent().i.height
    };

    function Tl(a) {
        return a.Be() / a.ne()
    }
    f.Fa = function() {
        return new Ae(this.Be(), this.ne())
    };
    f.Ld = function(a) {
        for (var b in a) this.vb[b] = a[b];
        this.dispatchEvent("update")
    };
    f.we = function(a) {
        this.O = a
    };
    f.getParent = function() {
        return this.O
    };
    f.ob = function() {
        return this.vb.title
    };
    f.Td = function() {
        var a = this.ob();
        return a ? "Page " + a : ""
    };

    function eo(a) {
        return a.vb.order
    }
    f.Ed = function(a) {
        if (this.vb.src && a) {
            var b = new S(this.vb.src);
            T(b, "w", a.width);
            return b.toString()
        }
        return this.vb.src
    };
    f.Sa = function() {
        return this.vb.pid
    };

    function hp(a, b, c) {
        if (8 >= fc()) {
            var d = [];
            d[0] = P(a, "readystatechange", t(ip, a, t(jp, b), d))
        } else Gi(a, "load", t(jp, b));
        c && Gi(a, "error", t(jp, c))
    }

    function jp(a) {
        V(a)
    }

    function ip(a, b, c) {
        if ("complete" != a.readyState) return !0;
        Oi(c[0]);
        b();
        return !1
    }
    var kp = G("div");

    function lp(a) {
        if (a)
            if (A) {
                kp.appendChild(a);
                var b = t(I, a);
                hp(a, b, b);
                a.src = "//www.google.com/images/cleardot.gif"
            } else a.src = "//www.google.com/images/cleardot.gif", I(a)
    };

    function mp(a, b, c, d, e, g, h) {
        R.call(this);
        this.O = a;
        this.Ab = b;
        this.Fb = c;
        this.o = d;
        this.j = e;
        this.oa = g;
        this.ka = h;
        this.s = Math.ceil(this.Ab / this.o);
        this.N = Math.ceil(this.Fb / this.j);
        this.i = [];
        for (a = 0; a < this.s; ++a) {
            b = [];
            for (c = 0; c < this.N; ++c) b.push(null);
            this.i.push(b)
        }
    }
    n(mp, R);
    mp.prototype.empty = function() {
        for (var a; a = this.O.firstChild;) lp(a)
    };

    function np(a, b) {
        var c = Math.floor(b.left / a.o),
            d = Math.floor(b.top / a.j),
            e = Math.ceil((b.left + b.width) / a.o),
            g = Math.ceil((b.top + b.height) / a.j);
        e = Math.min(e, a.s);
        for (g = Math.min(g, a.N); c < e; c++)
            for (var h = d; h < g; h++)
                if (!a.i[c][h]) {
                    var k = a;
                    var l = c,
                        m = h;
                    if (!k.i[l][m]) {
                        var p = G("IMG");
                        K(p, {
                            position: "absolute",
                            left: l * k.o + "px",
                            top: m * k.j + "px",
                            display: "none"
                        });
                        k.i[l][m] = p;
                        k.O.appendChild(p)
                    }
                    k = k.i[l][m];
                    l = a.oa(c, h);
                    hp(k, r(a.ha, a, k, l), r(a.ta, a, k, l));
                    k.src = l
                } for (c = 0; c < a.s; ++c)
            for (h = 0; h < a.N; ++h) {
                if (d = !!a.i[c][h]) d = !bh(new Xg(c *
                    a.o, h * a.j, (c + 1) * a.o, (h + 1) * a.j), b);
                d && (lp(a.i[c][h]), a.i[c][h] = null)
            }
    }
    mp.prototype.ha = function(a, b) {
        K(a, {
            display: ""
        });
        this.ka && this.ka(b)
    };
    mp.prototype.ta = function() {};

    function op() {};

    function pp(a) {
        this.i = {};
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            this.i[c.z] = new Ae(c.w, c.h)
        }
    }

    function qp(a, b) {
        return (a = Wc(a.i, function(c) {
            return c.height == b
        })) ? Number(a) : null
    }

    function rp(a, b) {
        return (a = a.i[b]) ? a.width : null
    };

    function sp(a) {
        if (a) return a.isEntityPageViewport;
        a = U(new S(window.location.href), "source");
        return "entity_page" == a || "entity_page_gbs_snippet" == a
    }

    function tp(a) {
        if (a) return a.isEntityPageViewportV2;
        var b = new S(window.location.href);
        a = U(b, "source");
        b = void 0 !== U(b, "ov2");
        return ("entity_page" == a || "entity_page_gbs_snippet" == a) && b
    }

    function up() {
        var a = U(new S(window.location.href), "output");
        return (sp() || tp()) && "text" == a
    };

    function vp(a) {
        gp.call(this, a);
        this.Uj = {};
        this.Ca = {};
        this.N = {};
        this.wa = this.ta = null
    }
    var wp;
    u(vp, gp);
    f = vp.prototype;
    f.Ld = function(a, b) {
        vp.ua.Ld.call(this, a);
        b && (this.va = b)
    };

    function Uo(a, b) {
        xp(a, a.zf(), b)
    }
    f.zf = function() {
        var a = yp(this);
        T(a, "jscmd", "click3");
        var b;
        this.Id && (b = this.Id.getQuery());
        zp(this, "vq", b);
        Sc(this.Uj, function(c, d) {
            T(a, d, c)
        });
        return a
    };

    function xp(a, b, c) {
        b = b.toString();
        if (b == a.va) c && c(a);
        else if (c && (a.N[b] = a.N[b] || []).push(c), b != a.ha) {
            a.ha = b;
            a.o && q.clearTimeout(a.o);
            a.o = q.setTimeout(r(a.Ut, a, b), 6E3);
            var d;
            a.Id && (d = a.Id.getQuery());
            wp(b, r(a.Pq, a, b, d))
        }
    }

    function zp(a, b, c) {
        c ? a.Uj[b] = c : delete a.Uj[b]
    }
    f.Uj = null;
    f.Pq = function(a, b, c) {
        this.ha == a && (this.ha = null, this.o && (q.clearTimeout(this.o), this.o = null), this.va = a, Ap(this, c.page[0]), this.O.Hl(c), b = this.N[a]) && (v(b, function(d) {
            d(this)
        }, this), delete this.N[a])
    };
    f.Ut = function(a) {
        this.o = this.ha = null;
        delete this.N[a]
    };

    function yp(a) {
        var b = a.vb.url;
        b ? b = new S(b) : (b = new S(a.O.Mp), T(b, "pg", a.Sa()), a.vb.sig && T(b, "sig", a.vb.sig));
        sp() && T(b, "source", "entity_page");
        return b
    }
    f.qc = function() {
        return yp(this).toString()
    };
    f.Be = function() {
        return this.vb.w || this.getParent().i.width
    };
    f.ne = function() {
        return this.vb.h || this.getParent().i.height
    };
    var Bp = {
        additional_info: "additional_info",
        content: "content",
        feedbackUrl: "uf",
        flags: "flags",
        highlights: "highlights",
        links: "links",
        order: "order",
        pid: "pid",
        src: "src",
        snippetSrc: "snippet_src"
    };

    function Ap(a, b) {
        var c = {},
            d;
        for (d in Bp) {
            var e = Bp[d],
                g = b[e];
            void 0 !== g && ("highlights" == e ? a.Ca[b.vq] = g : c[d] = g)
        }
        c.additional_info && (d = c.additional_info["[NewspaperJSONPageInfo]"]) && (a.ta = new pp(d.tileres), d = d.page_scanjob_coordinates) && (a.wa = "" + d.x + "," + d.y);
        b.vq && !c.snippetSrc && (c.snippetSrc = "");
        a.Ld(c)
    }
    vp.prototype.Mc = function() {
        return this.vb.content
    };
    vp.prototype.s = function(a) {
        return !!(this.vb.flags & a)
    };

    function Cp(a, b) {
        return mb(b, r(a.s, a))
    }

    function Dp(a, b) {
        b = He(b);
        b = b.replace(/'/g, "&#39;");
        if (a = a.Ca[b]) {
            var c = [];
            v(a, function(d) {
                c.push([d.X, d.Y, d.W, d.H])
            });
            return c
        }
    }

    function Vo(a, b) {
        if (a = Dp(a, b)) return lb(a, t(Ep, 1))
    }

    function Ep(a, b) {
        b = lb(b, function(c) {
            return Math.round(c * a)
        });
        return new Xg(b[0], b[1], b[2], b[3])
    }

    function Fp(a) {
        if (a.vb.links) return lb(a.vb.links, function(b) {
            var c = b.region;
            return [c.X, c.Y, c.W, c.H, b.target_pid, b.url]
        })
    }

    function Gp(a) {
        if (a.vb.clip_highlight || a.vb.clip_highlights) {
            var b = [];
            v(a.vb.clip_highlights || [a.vb.clip_highlight], function(c) {
                var d = [];
                v(["X", "Y", "W", "H"], function(e) {
                    d.push(c[e])
                });
                b.push(d)
            });
            return b
        }
        return null
    }
    vp.prototype.Ed = function(a) {
        if (this.vb.src && a) {
            var b = new S(this.vb.src);
            a && Sc(this.xl(), function(c, d) {
                "height" == d && a.height ? T(b, c, a.height) : "width" == d && a.width && T(b, c, a.width)
            });
            return b.toString()
        }
        return this.vb.src
    };
    vp.prototype.xl = function() {
        return {
            width: "w",
            height: "h"
        }
    };

    function Hp(a, b, c, d) {
        this.sk = a || 256;
        this.rk = b || 256;
        this.j = c || 3;
        this.o = d || 3;
        this.i = null
    }

    function Ip(a, b) {
        a.i = b
    }
    Hp.prototype.Jo = function(a, b, c, d, e) {
        var g = this.j,
            h = this.o;
        b = Math.ceil(b / this.sk);
        c = Math.ceil(c / this.rk);
        var k = Math.floor(e / g),
            l = Math.floor(d / h),
            m = g * b * k;
        e -= k * g;
        g = Math.min(g, c - k * g);
        m += g * h * l;
        d -= l * h;
        h = Math.min(h, b - l * h);
        d = m + (e * h + d);
        a = new S(a);
        T(a, "tid", d);
        this.i && (a = this.i(a, d));
        return a.toString()
    };

    function Jp() {}
    Jp.prototype.ob = function() {
        return this.Ec
    };

    function Kp() {
        this.i = new Map
    }
    Kp.prototype.add = function(a, b) {
        this.i.set(Va(a), b)
    };

    function Lp(a, b) {
        b = void 0 === b ? [] : b;
        b = new Set(b.map(function(g) {
            return Va(g)
        }));
        for (var c = na(a.i.keys()), d = c.next(); !d.done; d = c.next())
            if (d = d.value, !b.has(d)) {
                var e = a.i.get(d);
                e && e.Qa();
                a.i.delete(d)
            }
    };

    function Mp() {
        this.j = {};
        this.i = new Kp
    }

    function Np(a, b, c) {
        a.j[Va(b)] = c
    }
    Mp.prototype.Qa = function() {
        Lp(this.i)
    };

    function Op(a, b) {
        b = kb(b, function(c) {
            return !!this.j[Va(c.constructor)]
        }, a);
        Lp(a.i, b);
        v(b, function(c) {
            this.i.i.has(Va(c)) || this.i.add(c, this.j[Va(c.constructor)].render(c))
        }, a)
    };

    function Pp(a) {
        this.Rf = a
    }

    function Qp(a, b, c, d) {
        a = Rp(a, d);
        if (0 < c)
            for (c = 0; c < a.length; c++) {
                if (a[c] > b) return a[c]
            } else
                for (c = a.length - 1; 0 <= c; c--)
                    if (a[c] < b) return a[c];
        return b
    }

    function Rp(a, b) {
        var c = b || [];
        a = kb(a.Rf, function(d) {
            return !mb(c, function(e) {
                return 50 > Math.abs(e - d)
            })
        });
        a.push.apply(a, c);
        zb(a);
        return a
    };

    function Sp(a, b) {
        bo.call(this);
        this.ka = {};
        a && (this.Mp = a.prefix, this.hp = a.image_prefix || a.prefix, a = lb(a.page, function(c) {
            c = new this.s(c);
            b && (c.Id = b);
            return c
        }, this), this.o(a))
    }
    u(Sp, bo);
    Sp.prototype.Hl = function(a) {
        a = a.page;
        for (var b = 0; b < a.length; b++) {
            var c = a[b],
                d = ho(this, c.pid);
            d && Ap(d, c)
        }
    };
    Sp.prototype.s = vp;
    Sp.prototype.oa = function(a, b) {
        if (!ho(this, b.Sa())) {
            var c = vb(fo(this));
            wb(c, b);
            this.o(c)
        }
        this.ka[b.Sa()] = !0;
        a && a(b)
    };

    function Tp(a, b, c) {
        Vk(a, t(Up, b, c))
    }

    function Up(a, b, c) {
        c = c.target;
        cl(c) ? a(el(c)) : b && b()
    };
    var Vp = {},
        Wp = null;

    function Xp(a) {
        var b;
        void 0 === b && (b = 0);
        if (!Wp) {
            Wp = {};
            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var g = c.concat(d[e].split(""));
                Vp[e] = g;
                for (var h = 0; h < g.length; h++) {
                    var k = g[h];
                    void 0 === Wp[k] && (Wp[k] = h)
                }
            }
        }
        b = Vp[b];
        c = Array(Math.floor(a.length / 3));
        d = b[64] || "";
        for (e = g = 0; g < a.length - 2; g += 3) {
            var l = a[g],
                m = a[g + 1];
            k = a[g + 2];
            h = b[l >> 2];
            l = b[(l & 3) << 4 | m >> 4];
            m = b[(m & 15) << 2 | k >> 6];
            k = b[k & 63];
            c[e++] = h + l + m + k
        }
        h = 0;
        k = d;
        switch (a.length - g) {
            case 2:
                h =
                    a[g + 1], k = b[(h & 15) << 2] || d;
            case 1:
                a = a[g], c[e] = b[a >> 2] + b[(a & 3) << 4 | h >> 4] + k + d
        }
        return c.join("")
    };
    var Yp = "undefined" !== typeof Uint8Array,
        Zp = {};
    var $p;

    function aq(a) {
        if (Zp !== Zp) throw Error("illegal external caller");
        this.yg = a;
        if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
    }
    aq.prototype.Hc = ba(1);
    var bq = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : void 0;

    function cq(a, b) {
        if (bq) return a[bq] |= b;
        if (void 0 !== a.te) return a.te |= b;
        Object.defineProperties(a, {
            te: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return b
    }

    function dq(a) {
        var b;
        bq ? b = a[bq] : b = a.te;
        return null == b ? 0 : b
    }

    function eq(a, b) {
        bq ? a[bq] = b : void 0 !== a.te ? a.te = b : Object.defineProperties(a, {
            te: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    }

    function fq(a) {
        cq(a, 1);
        return a
    }

    function gq(a) {
        return !!(dq(a) & 2)
    }

    function hq(a) {
        cq(a, 16);
        return a
    }

    function iq(a, b) {
        eq(b, (a | 0) & -51)
    }

    function jq(a, b) {
        eq(b, (a | 18) & -41)
    };
    var kq = {};

    function lq(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var mq, nq = [];
    eq(nq, 23);
    mq = Object.freeze(nq);

    function oq(a) {
        if (gq(a.Zb)) throw Error("Cannot mutate an immutable Message");
    }

    function pq(a) {
        var b = a.length;
        (b = b ? a[b - 1] : void 0) && lq(b) ? b.g = 1 : (b = {}, a.push((b.g = 1, b)))
    };
    var qq;

    function rq(a, b) {
        qq = b;
        a = new a(b);
        qq = void 0;
        return a
    };

    function sq(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (0 !== (dq(a) & 128)) return a = Array.prototype.slice.call(a), pq(a), a
                    } else {
                        if (Yp && null != a && a instanceof Uint8Array) return Xp(a);
                        if (a instanceof aq) {
                            var b = a.yg;
                            return null == b ? "" : "string" === typeof b ? b : a.yg = Xp(b)
                        }
                    }
        }
        return a
    };

    function tq(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = uq(a, b, c, void 0 !== d);
            else if (lq(a)) {
                var e = {},
                    g;
                for (g in a) e[g] = tq(a[g], b, c, d);
                a = e
            } else a = b(a, d);
            return a
        }
    }

    function uq(a, b, c, d) {
        var e = dq(a);
        d = d ? !!(e & 16) : void 0;
        a = Array.prototype.slice.call(a);
        for (var g = 0; g < a.length; g++) a[g] = tq(a[g], b, c, d);
        c(e, a);
        return a
    }

    function vq(a) {
        return a.Mj === kq ? a.toJSON() : sq(a)
    }

    function wq(a) {
        if (!a) return a;
        if ("object" === typeof a) {
            if (Yp && null != a && a instanceof Uint8Array) return new Uint8Array(a);
            if (a.Mj === kq) return a.clone()
        }
        return a
    }

    function xq(a, b) {
        a & 128 && pq(b)
    };

    function yq(a) {
        var b = a.i + a.Wf;
        return a.Gd || (a.Gd = a.Zb[b] = {})
    }

    function zq(a, b, c) {
        return -1 === b ? null : b >= a.i ? a.Gd ? a.Gd[b] : void 0 : c && a.Gd && (c = a.Gd[b], null != c) ? c : a.Zb[b + a.Wf]
    }

    function Aq(a, b, c, d) {
        a.j && (a.j = void 0);
        if (b >= a.i || d) return yq(a)[b] = c, a;
        a.Zb[b + a.Wf] = c;
        (c = a.Gd) && b in c && delete c[b];
        return a
    }

    function Bq(a, b, c, d) {
        a = zq(a, b, c);
        Array.isArray(a) || (a = mq);
        b = dq(a);
        b & 1 || fq(a);
        d && (b & 2 || cq(a, 2));
        return a
    }

    function Cq(a, b) {
        oq(a);
        Aq(a, b, void 0, !1);
        return a
    }

    function Dq(a, b, c, d) {
        oq(a);
        if (null != c) {
            var e = fq([]);
            for (var g = !1, h = 0; h < c.length; h++) e[h] = c[h].Zb, g = g || gq(e[h]);
            a.Rc || (a.Rc = {});
            a.Rc[b] = c;
            c = e;
            g ? bq ? c[bq] && (c[bq] &= -9) : void 0 !== c.te && (c.te &= -9) : cq(c, 8)
        } else a.Rc && (a.Rc[b] = void 0), e = mq;
        Aq(a, b, e, d)
    }

    function Eq(a, b) {
        a = zq(a, b);
        a = null == a ? a : !!a;
        return null == a ? !1 : a
    };

    function Fq(a) {
        var b = dq(a);
        if (b & 2) return a;
        a = lb(a, Gq);
        jq(b, a);
        Object.freeze(a);
        return a
    }

    function Hq(a, b, c) {
        c = void 0 === c ? jq : c;
        if (null != a) {
            if (Yp && a instanceof Uint8Array) return a.length ? new aq(new Uint8Array(a)) : $p || ($p = new aq(null));
            if (Array.isArray(a)) {
                var d = dq(a);
                if (d & 2) return a;
                if (b && !(d & 32) && (d & 16 || 0 === d)) return eq(a, d | 2), a;
                a = uq(a, Hq, c, !0);
                b = dq(a);
                b & 4 && b & 2 && Object.freeze(a);
                return a
            }
            return a.Mj === kq ? Gq(a) : a
        }
    }

    function Gq(a) {
        if (gq(a.Zb)) return a;
        a = Iq(a, !0);
        cq(a.Zb, 2);
        return a
    }

    function Iq(a, b) {
        var c = a.Zb,
            d = hq([]),
            e = a.constructor.i;
        e && d.push(e);
        e = a.Gd;
        if (e) {
            d.length = c.length;
            d.fill(void 0, d.length, c.length);
            var g = {};
            d[d.length - 1] = g
        }
        0 !== (dq(c) & 128) && pq(d);
        b = b || gq(a.Zb) ? jq : iq;
        d = rq(a.constructor, d);
        a.ni && (d.ni = a.ni.slice());
        for (var h = !!(dq(c) & 16), k = e ? c.length - 1 : c.length, l = 0; l < k; l++) {
            var m = l - a.Wf,
                p = c[l],
                w = a.Rc && a.Rc[m];
            w ? Dq(d, m, Fq(w), !1) : (p = Hq(p, h, b), oq(d), Aq(d, m, p, !1))
        }
        if (e)
            for (var D in e) k = e[D], c = +D, Number.isNaN(c) ? g[c] = k : (l = a.Rc && a.Rc[c]) ? Dq(d, c, Fq(l), !0) : (k = Hq(k, h, b), oq(d),
                Aq(d, c, k, !0));
        return d
    };

    function Jq(a, b, c) {
        null == a && (a = qq);
        qq = void 0;
        var d = this.constructor.j || 0,
            e = 0 < d,
            g = this.constructor.i,
            h = !1;
        if (null == a) {
            a = g ? [g] : [];
            var k = !0;
            eq(a, 48)
        } else {
            if (!Array.isArray(a)) throw Error();
            if (g && g !== a[0]) throw Error();
            var l = cq(a, 0),
                m = l;
            if (k = 0 !== (16 & m))(h = 0 !== (32 & m)) || (m |= 32);
            if (e)
                if (128 & m) d = 0;
                else {
                    if (0 < a.length) {
                        var p = a[a.length - 1];
                        if (lq(p) && "g" in p) {
                            d = 0;
                            m |= 128;
                            delete p.g;
                            var w = !0,
                                D;
                            for (D in p) {
                                w = !1;
                                break
                            }
                            w && a.pop()
                        }
                    }
                }
            else if (128 & m) throw Error();
            l !== m && eq(a, m)
        }
        this.Wf = (g ? 0 : -1) - d;
        this.Rc = void 0;
        this.Zb =
            a;
        a: {
            g = this.Zb.length;d = g - 1;
            if (g && (g = this.Zb[d], lq(g))) {
                this.Gd = g;
                this.i = d - this.Wf;
                break a
            }
            void 0 !== b && -1 < b ? (this.i = Math.max(b, d + 1 - this.Wf), this.Gd = void 0) : this.i = Number.MAX_VALUE
        }
        if (!e && this.Gd && "g" in this.Gd) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
        if (c) {
            b = k && !h && !0;
            e = this.i;
            var E;
            for (k = 0; k < c.length; k++) h = c[k], h < e ? (h += this.Wf, (d = a[h]) ? Kq(d, b) : a[h] = mq) : (E || (E = yq(this)), (d = E[h]) ? Kq(d, b) : E[h] = mq)
        }
    }
    Jq.prototype.toJSON = function() {
        return uq(this.Zb, vq, xq)
    };

    function Lq(a, b) {
        if (null == b || "" == b) return new a;
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error(void 0);
        return rq(a, hq(b))
    }
    Jq.prototype.clone = function() {
        var a = uq(this.Zb, wq, iq);
        hq(a);
        qq = a;
        a = new this.constructor(a);
        qq = void 0;
        Mq(a, this);
        return a
    };

    function Nq(a) {
        if (gq(a.Zb)) {
            var b = Iq(a, !1);
            b.j = a;
            a = b
        }
        return a
    }

    function Kq(a, b) {
        if (Array.isArray(a)) {
            var c = dq(a),
                d = 1;
            !b || c & 2 || (d |= 16);
            (c & d) !== d && eq(a, c | d)
        }
    }
    Jq.prototype.Mj = kq;
    Jq.prototype.toString = function() {
        return this.Zb.toString()
    };

    function Mq(a, b) {
        b.ni && (a.ni = b.ni.slice());
        var c = b.Rc;
        if (c) {
            b = b.Gd;
            for (var d in c) {
                var e = c[d];
                if (e) {
                    var g = !(!b || !b[d]),
                        h = +d;
                    if (Array.isArray(e)) {
                        if (e.length) {
                            var k = a,
                                l = gq(k.Zb);
                            var m = k;
                            var p = e[0].constructor,
                                w = l,
                                D = l;
                            m.Rc || (m.Rc = {});
                            var E = m.Rc[h],
                                H = Bq(m, h, g, D);
                            if (E) D || (Object.isFrozen(E) ? w || (E = Array.prototype.slice.call(E), m.Rc[h] = E) : w && Object.freeze(E)), m = E;
                            else {
                                var O = H,
                                    Ja = p;
                                p = [];
                                var gb = !!(dq(m.Zb) & 16);
                                H = gq(O);
                                E = O;
                                !D && H && (O = Array.prototype.slice.call(O));
                                var ha = H;
                                for (var xa = 0; xa < O.length; xa++) {
                                    var fa =
                                        O[xa];
                                    var ab = Ja,
                                        Ba = !1;
                                    Ba = void 0 === Ba ? !1 : Ba;
                                    fa = Array.isArray(fa) ? new ab(fa) : Ba ? new ab : void 0;
                                    if (void 0 !== fa) {
                                        ab = fa.Zb;
                                        var ta = Ba = dq(ab);
                                        H && (ta |= 2);
                                        gb && (ta |= 16);
                                        ta != Ba && eq(ab, ta);
                                        ab = ta;
                                        ha || (ha = !!(2 & ab));
                                        p.push(fa)
                                    }
                                }
                                m.Rc[h] = p;
                                Ja = dq(O);
                                gb = Ja | 33;
                                ha = ha ? gb & -9 : gb | 8;
                                Ja != ha && (Object.isFrozen(O) && (O = Array.prototype.slice.call(O)), eq(O, ha));
                                E !== O && Aq(m, h, O, g);
                                (D || w && H) && cq(p, 2);
                                (D || w) && Object.freeze(p);
                                m = p
                            }
                            g = Bq(k, h, g, l);
                            if (!(l || dq(g) & 8)) {
                                for (l = 0; l < m.length; l++) h = m[l], k = Nq(h), h !== k && (m[l] = k, g[l] = m[l].Zb);
                                cq(g,
                                    8)
                            }
                            l = m;
                            for (g = 0; g < Math.min(l.length, e.length); g++) Mq(l[g], e[g])
                        }
                    } else throw Error("unexpected object: type: " + Sa(e) + ": " + e);
                }
            }
        }
    };

    function Oq(a, b) {
        Vm.call(this, b);
        this.o = a
    }
    u(Oq, Vm);
    Oq.prototype.j = "info";
    Oq.prototype.s = !1;
    var Pq = {
        info: "jfk-butterBar-info",
        error: "jfk-butterBar-error",
        warning: "jfk-butterBar-warning",
        promo: "jfk-butterBar-promo"
    };
    Oq.prototype.getType = function() {
        return this.j
    };

    function Qq(a, b) {
        a.Mb() && Mb(a.ma(), Pq[a.j], Pq[b]);
        a.j = b
    }

    function Rq(a, b) {
        a.o = b;
        if (b = a.ma()) {
            var c = a.i;
            c.Mm(b);
            c.Km(b, a.o)
        }
    }
    Oq.prototype.isVisible = function() {
        var a = this.ma();
        return null != a && Ib(a, "jfk-butterBar-shown")
    };
    Oq.prototype.Ea = function(a) {
        y(this.ma(), "jfk-butterBar-shown", a)
    };

    function Sq(a, b) {
        a.s = b;
        (b = a.ma()) && y(b, "jfk-butterBar-mini", a.s)
    }
    Oq.prototype.Wa = function() {
        this.Aa = this.i.Ua("DIV", "jfk-butterBar");
        var a = this.ma();
        a && (Y(a, "live", "assertive"), Y(a, "atomic", "true"));
        Rq(this, this.o);
        Sq(this, this.s);
        Qq(this, this.j)
    };

    function Tq(a) {
        this.i = a
    }
    Tq.prototype.Bd = function() {
        return this.i.aid
    };
    Tq.prototype.ah = function() {
        var a = this.i.x_focus,
            b = this.i.y_focus;
        if (void 0 === a || void 0 === b) {
            b = this.fg();
            if (!b.length) return null;
            a = b[0][0];
            b = b[0][1]
        }
        return new B(a, b)
    };
    Tq.prototype.ul = ba(9);
    Tq.prototype.fg = function() {
        return Uq(this, "head_boxes")
    };

    function Uq(a, b) {
        var c = [];
        a.i[b] && v(a.i[b], function(d) {
            c.push([d.X, d.Y, d.W, d.H])
        });
        return c
    };

    function Vq(a) {
        this.i = a
    };

    function Wq(a, b, c) {
        this.o = a;
        this.i = b;
        this.s = c || !1;
        a = this.Fa();
        this.j() ? a.height = 120 : a.height = 65;
        this.ub(a)
    }
    n(Wq, Hl);
    Wq.prototype.j = function() {
        var a = C("gb-mobile-menu-pubinfo");
        return a ? 0 < wf(a).length && null != this.o && 0 == eo(this.o) : !1
    };

    function Xq(a) {
        Nl.call(this);
        this.o = a
    }
    u(Xq, Nl);
    Xq.prototype.ka = function() {
        this.j = Math.ceil(this.i.length / this.o);
        for (var a = 0; a < this.j; a++)
            for (var b = 0; b < this.o; b++) {
                var c = a * this.o + b;
                this.cells[b] = this.cells[b] || [];
                this.cells[b][a] = this.i[c]
            }
    };

    function Yq(a) {
        Xq.call(this, a);
        this.Ye = new Map
    }
    u(Yq, Xq);
    Yq.prototype.Gc = function(a) {
        return this.Ye.get(Zq(Sl, a))
    };
    Yq.prototype.Yh = function(a) {
        if (a instanceof Wq) a = Zq(a.constructor, a.i);
        else if (a instanceof Sl) a = Zq(a.constructor, a.Ha());
        else throw Error("Input item must be a LayoutPage or LayoutSeparator.");
        return this.Ye.get(a)
    };
    Yq.prototype.Va = function(a) {
        if (a instanceof Wq) {
            var b = Zq(a.constructor, a.i);
            this.Ye.set(b, a)
        } else a instanceof Sl && (b = Zq(a.constructor, a.Ha()), this.Ye.set(b, a));
        Yq.ua.Va.call(this, a)
    };

    function Zq(a, b) {
        return Va(a) + "#" + b.Sa()
    };

    function $q(a, b, c, d, e) {
        Yq.call(this, 1);
        this.N = b;
        this.s = c;
        var g = d || !1,
            h;
        a = fo(a);
        v(a, function(k) {
            g && h && 1 < eo(k) - eo(h) && ar(this, h, k);
            var l = C("gb-mobile-menu-pubinfo");
            l && 0 < wf(l).length && !g && h && k && 0 == eo(h) && ar(this, h, k, !0);
            l = new Sl(k);
            var m = l.Fa();
            "fixed_height" == this.N ? m.height = this.s : m.width = this.s;
            l.ub(m);
            this.Va(l);
            h = k
        }, this);
        g && h && e && eo(h) < eo(e) && ar(this, h, e);
        Ol(this)
    }
    n($q, Yq);

    function ar(a, b, c, d) {
        b = new Wq(b, c, d || !1);
        c = b.Fa();
        "fixed_height" == a.N ? c.height = a.s : c.width = a.s;
        b.ub(c);
        a.Va(b)
    }
    $q.prototype.O = function() {
        return this.s
    };
    $q.prototype.ig = function() {
        return this.N
    };
    $q.prototype.ik = 8;

    function br(a, b) {
        this.V = a;
        this.i = b
    }
    n(br, op);
    br.prototype.render = function(a) {
        var b = this.i(a);
        b.ub(a.Fa());
        b.setPosition(a.rd());
        return b
    };

    function cr() {}
    n(cr, Hl);

    function dr() {
        X.call(this)
    }
    u(dr, X);
    dr.prototype.Ce = function(a) {
        this.j = a;
        this.s = er(a)
    };
    dr.prototype.ya = function() {
        dr.ua.ya.call(this);
        I(this.s)
    };

    function fr(a) {
        X.call(this);
        this.o = a
    }
    n(fr, dr);
    fr.prototype.Ea = function(a) {
        N(this.s, a)
    };
    fr.prototype.Ce = function(a) {
        dr.prototype.Ce.call(this, a);
        var b = this.j.Fa();
        a = this.s;
        var c = b.width;
        b = b.height;
        var d = Math.floor(.035 * c),
            e = this.o ? "/googlebooks/images/burn-left.png" : "/googlebooks/images/burn-right.png";
        jh(a, this.o ? c - d : 0, 0);
        L(a, d, b);
        K(a, {
            position: "absolute"
        });
        A ? Vl(a, e) : (c = F("IMG", {
            src: e,
            width: d,
            height: b,
            border: 0,
            position: "absolute",
            top: 0,
            left: 0
        }), a.appendChild(c))
    };

    function gr(a) {
        X.call(this);
        this.ha = a;
        this.ka = []
    }
    u(gr, dr);
    f = gr.prototype;
    f.Ce = function(a) {
        gr.ua.Ce.call(this, a);
        this.Bh();
        this.Ha() && this.i.na(this.Ha(), "update", this.Bh)
    };
    f.Ha = function() {
        return this.j.Ha()
    };
    f.Ah = function(a, b, c, d) {
        var e = G("div");
        W(e, !0);
        this.s.appendChild(e);
        a = hr(this, a, b, c, d);
        K(e, {
            position: "absolute",
            left: a[0] + "px",
            top: a[1] + "px",
            width: a[2] + "px",
            height: a[3] + "px"
        });
        this.ha && (K(e, {
            backgroundColor: this.ha
        }), Ah(e, .3));
        this.ka.push(new Xg(a[0], a[1], a[2], a[3]));
        return e
    };

    function ir(a) {
        return a.j.Fa().width / a.j.Ha().getParent().i.width
    }

    function hr(a, b, c, d, e) {
        var g = ir(a);
        return lb([b, c, d, e], function(h) {
            return Math.round(h * g)
        })
    }

    function jr(a, b) {
        v(b, function(c) {
            this.Ah.apply(this, c)
        }, a)
    }
    f.xo = function(a) {
        return this.Ah(a.left, a.top, a.width, a.height)
    };
    f.Dg = function() {
        rf(this.s);
        this.ka = []
    };
    f.Bh = function() {};

    function kr() {
        gr.call(this)
    }
    n(kr, gr);
    f = kr.prototype;
    f.Bh = function() {
        if (!this.o) {
            var a = this.Ha();
            a && (a = Gp(a)) && (jr(this, a), this.o = !0)
        }
    };
    f.Ah = function(a, b, c, d) {
        this.N = gr.prototype.Ah.call(this, a, b, c, d);
        K(this.N, {
            border: "2px #aaaaff dashed"
        });
        this.O = G("IMG");
        this.N.appendChild(this.O);
        this.O.src = "/googlebooks/images/dialog_close_x.gif";
        a = hr(this, a, b, c, d);
        K(this.O, {
            position: "absolute",
            cursor: "pointer",
            left: a[2] - 19 + "px",
            top: "4px",
            display: "none"
        });
        P(this.N, "mouseout", r(this.Qq, this));
        P(this.N, "mouseover", r(this.gp, this, !0));
        Gi(this.O, "click", r(this.Qa, this));
        return this.N
    };
    f.Qa = function() {
        I(this.N)
    };
    f.Qq = function(a) {
        Bf(this.N, a.target) || this.gp(!1)
    };
    f.gp = function(a) {
        K(this.O, {
            display: a ? "" : "none"
        })
    };

    function lr(a) {
        gr.call(this);
        this.V = a
    }
    n(lr, gr);
    lr.prototype.Bh = function() {
        if (!this.o) {
            var a = this.Ha();
            a && (a = Fp(a)) && (v(a, function(b) {
                var c = b.pop(),
                    d = b.pop();
                b = this.Ah.apply(this, b);
                K(b, {
                    cursor: "pointer"
                });
                this.i.na(b, "click", r(this.N, this, d, c))
            }, this), this.o = !0)
        }
    };
    lr.prototype.N = function(a, b) {
        (a = ho(this.V.mb(), a)) ? this.V.tb(a): So(this.V, b)
    };

    function mr(a, b) {
        this.s = a;
        this.i = b
    }
    mr.prototype.Ha = function() {
        return this.s
    };
    mr.prototype.j = function() {
        return this.s.Ed(this.i)
    };

    function nr(a, b, c) {
        mr.call(this, a, b);
        this.o = c
    }
    n(nr, mr);
    nr.prototype.j = function() {
        return this.o.width > this.i.width ? this.s.Ed(this.o) : mr.prototype.j.call(this)
    };

    function or(a, b, c, d, e) {
        X.call(this);
        this.oh(a.Ja());
        this.V = a;
        this.j = c;
        this.ta = [];
        this.Rm = d;
        L(d, c);
        this.va = er(this);
        K(this.va, "backgroundColor", "#fff");
        L(this.va, c);
        if (this.Ca = void 0 !== e ? e : !0) a = er(this), L(a, c), this.wa = new pr(a), this.wa.show();
        b && (this.s = b, this.i.na(b, "update", this.Eg), Uo(b))
    }
    u(or, X);
    f = or.prototype;
    f.Fa = function() {
        return this.j
    };
    f.Ha = function() {
        return this.s
    };

    function qr(a, b) {
        a.ta.push(b);
        b.Ce(a)
    }
    f.Eg = function() {};

    function rr(a) {
        a.dispatchEvent("load");
        a.Ca && a.wa.rb()
    }

    function er(a) {
        var b = G("div");
        W(b, !0);
        K(b, {
            position: "absolute",
            left: 0,
            top: 0
        });
        a.Rm.appendChild(b);
        return b
    }
    f.Qa = function() {
        v(this.ta, function(a) {
            a.Ia()
        });
        this.ta = null;
        this.N && I(this.N)
    };

    function sr(a) {
        a.O = er(a);
        L(a.O, a.Fa());
        K(a.O, {
            backgroundImage: "url(//www.google.com/images/cleardot.gif)",
            backgroundRepeat: "repeat"
        });
        a.i.na(a.O, "mousedown", a.Rq);
        a.i.na(a.O, "dragstart", qi)
    }
    f.Rq = function(a) {
        a.display = this;
        tr.dispatchEvent(a)
    };
    var tr = new R;

    function pr(a) {
        this.i = a;
        a = {
            position: "absolute",
            left: 0,
            color: "#808080",
            fontSize: "13px",
            backgroundColor: "white"
        };
        for (var b = 0; 2 > b; b++) {
            var c = G("div");
            W(c);
            K(c, a);
            this.i.appendChild(c);
            c.textContent = "Loading...";
            a.bottom = 0
        }
    }
    pr.prototype.show = function(a) {
        K(this.i, {
            display: a ? "none" : ""
        })
    };
    pr.prototype.rb = function() {
        this.show(!0)
    };
    or.prototype.sm = function() {
        ur(this)
    };

    function ur(a, b) {
        a.N && I(a.N);
        a.N = er(a);
        new vr(a.N, a.Fa(), b)
    }

    function vr(a, b, c) {
        this.i = a;
        K(a, {
            backgroundColor: "#FFF",
            textAlign: "center"
        });
        L(a, b);
        Q(a, Fl(c || ""));
        W(this.i)
    };

    function wr(a, b, c) {
        or.call(this, a, b.Ha(), b.i, c);
        this.oh(xr);
        a = er(this);
        this.ha = new yr(b.i, a);
        a = er(this);
        this.ka = new yr(b.i, a);
        sr(this);
        Eh(c, !0);
        x(c, "pageImageDisplay");
        this.oa = b;
        b.Ha() && this.Eg()
    }
    n(wr, or);
    f = wr.prototype;
    f.tb = function(a) {
        zp(a, "output", null);
        or.prototype.tb.call(this, a);
        a.Ed() && this.Eg()
    };
    f.Eg = function() {
        var a = this.Ha(),
            b = this.oa.j();
        if (b && !this.o) {
            b = zr(b);
            Gi(this.ha, "load", r(this.Sq, this, a, b, this.Fa().width));
            Ar(this.ha, [b]);
            var c = No(this.V.Sb, a.Sa());
            c.push(b);
            Ar(this.ka, c);
            this.o = !0;
            a == this.V.Ha() && this.dispatchEvent("fetch")
        }
        Cp(a, [16, 8]) && (a = Ce('<table width=100% height=100%><tr><td><img src="%s"/><br/>%s</td></tr></table>', cp("/googlebooks/restricted_logo.gif"), "You have either reached a page that is unavailable for viewing or reached your viewing limit for this book."), ur(this,
            a), rr(this))
    };
    f.Sq = function(a, b, c) {
        a == this.V.Ha() && this.dispatchEvent("loaded");
        this.ka.empty();
        var d = this.V.Sb;
        a = a.Sa();
        d.i[a] = d.i[a] || {};
        d.i[a][c] = b;
        rr(this)
    };
    f.uc = ba(12);
    f.Qa = function() {
        this.o = !1;
        this.ha.empty();
        this.ka.empty();
        or.prototype.Qa.call(this)
    };
    var xr = new R,
        zr = Pc;

    function yr(a, b) {
        R.call(this);
        this.j = a;
        this.o = b;
        this.If = !1;
        this.i = G("IMG");
        this.i.width = this.j.width;
        this.o.appendChild(this.i);
        W(this.o)
    }
    n(yr, R);
    yr.prototype.empty = function() {
        for (var a; a = xf(this.o);) lp(a)
    };

    function Ar(a, b) {
        hp(a.i, r(a.s, a, a.i));
        for (var c = 0; c < b.length; c++) a.i.src = b[c]
    }
    yr.prototype.s = function(a) {
        this.i == a && (this.dispatchEvent("load"), this.If = !0)
    };
    yr.prototype.uc = ba(11);

    function Br(a) {
        var b = this;
        X.call(this);
        this.O = a;
        this.o = a.s;
        this.ub(Hh(this.o));
        this.Kb = new B(0, 0);
        this.ha = null;
        this.ta = new am(function() {
            N(b.ha, !1)
        }, 600);
        ni(this, this.ta)
    }
    u(Br, X);
    f = Br.prototype;
    f.ub = function(a) {
        if (!this.j || !Be(this.j, a)) {
            this.j = a;
            var b = this.O;
            b.ha = a;
            Cr(b);
            this.dispatchEvent("resize")
        }
    };
    f.ad = function(a) {
        this.Bc = a;
        this.ka.Qa();
        var b = this.O,
            c = this.Fa();
        b.ha = c;
        Cr(b);
        b = this.O;
        a = new Ae(a.Bb(), a.Hb());
        b.oa = a;
        b.N = !0;
        L(b.j, a);
        V(b.ta, 0, b);
        Cr(b);
        this.dispatchEvent("layoutchange")
    };

    function Dr(a, b) {
        a.ka = b
    }
    f.yl = function() {
        return this.ka
    };
    f.Jb = function() {
        return this.Bc
    };
    f.mc = function() {
        var a = this.Bc.Sd();
        this.oa && (a = this.oa.wl(a));
        Op(this.ka, a);
        this.dispatchEvent("update")
    };

    function Er(a, b) {
        a.oa = b
    }
    f.hd = function(a) {
        var b = this.Kb.x,
            c = this.Kb.y;
        "number" === typeof a.x && (a.x = we(a.x, 0, Math.max(this.Bc.Bb() - this.j.width, 0)));
        "number" === typeof a.y && (a.y = we(a.y, 0, Math.max(this.Bc.Hb() - this.j.height, 0)));
        "number" === typeof a.x && (b = a.x);
        "number" === typeof a.y && (1 < a.y - c ? this.dispatchEvent("scrolldown") : 1 < c - a.y && this.dispatchEvent("scrollup"), c = a.y);
        this.Kb = new B(b, c);
        b = this.O;
        a = this.Kb;
        b.ka || (b = b.s, null != a.y && (b.scrollTop = a.y), null != a.x && (b.scrollLeft = a.x));
        this.dispatchEvent("move")
    };

    function Fr(a) {
        var b = a.Kb;
        return b ? new Xg(b.x, b.y, a.j.width, a.j.height) : null
    }
    f.Fa = function() {
        return this.j
    };
    f.Md = function(a) {
        this.dispatchEvent("movestart");
        this.hd(a);
        this.dispatchEvent("moveend")
    };

    function Gr(a, b, c) {
        a = a.Kb;
        c(new B(a.x + b.x, a.y + b.y))
    }
    f.Lf = function(a) {
        var b = this.Kb,
            c = this.Fa();
        !b || Math.abs(b.x - a.x) > c.width || Math.abs(b.y - a.y) > c.height ? this.Md(a) : (this.s && (this.s.Ia(), this.s = null), this.s = new hm([b.x, b.y], [a.x, a.y], 250 + 250 * we(ye(b, a) / 800, 0, 1), km), P(this.s, "animate", r(this.Tm, this)), P(this.s, "end", r(this.Tq, this)), this.dispatchEvent("movestart"), Gi(this, "movestart", r(this.s.Ia, this.s)), this.s.play())
    };
    f.Tm = function(a) {
        a = a.coords.map(Math.round);
        this.hd(new B(a[0], a[1]))
    };
    f.Tq = function(a) {
        this.Tm(a);
        this.dispatchEvent("moveend")
    };
    f.Eb = function() {
        return this.o
    };
    f.Ue = ba(13);
    f.Qc = function() {
        return new B(Math.round(this.Kb.x + this.j.width / 2), Math.round(this.Kb.y + this.j.height / 2))
    };
    f.Ze = function(a) {
        return new B(Math.round(a.x + this.j.width / 2 * -1), Math.round(a.y + this.j.height / 2 * -1))
    };
    f.ya = function() {
        Br.ua.ya.call(this);
        this.ka.Qa()
    };
    f.rl = function(a) {
        null == this.ha && (this.ha = a);
        this.ha.style.opacity = 0;
        this.ta.start()
    };
    f.tt = function() {
        var a = this;
        this.ta.stop();
        N(this.ha, !0);
        V(function() {
            a.ha.style.opacity = 1
        })
    };
    f.Sm = 1;

    function Hr(a, b, c, d) {
        or.call(this, a, b.Ha(), b.i, c, d);
        this.oa = er(this);
        sr(this);
        b.Ha() && this.Eg();
        this.V = a;
        this.ka = P(this.V.Ja(), "update", this.Da, !1, this)
    }
    n(Hr, or);
    Hr.prototype.Eg = function() {
        var a = this.Ha(),
            b = a.Ed(),
            c = this.V.Za().yj(),
            d = a.ta;
        if (b && d && !this.o) {
            var e = qp(d, this.Fa().height);
            "number" === typeof e && (d = rp(d, e), b = new S(b), T(b, "zoom", e), T(b, "pg", a.wa), b = b.toString(), this.ha = new mp(this.oa, d, this.Fa().height, c.sk, c.rk, r(c.Jo, c, b, d, this.Fa().height), null), this.o = !0, this.Da())
        }
    };
    Hr.prototype.Da = function() {
        if (this.o) {
            var a = ph(this.oa);
            if (a) {
                var b = vh(this.oa);
                a.top -= b.y;
                a.bottom -= b.y;
                a.left -= b.x;
                a.right -= b.x;
                0 < a.bottom - a.top && 0 < a.right - a.left && np(this.ha, Zg(a))
            }
            Yo(this.V)
        }
    };
    Hr.prototype.Qa = function() {
        this.o && (this.ha.empty(), this.o = !1);
        this.ka && (Oi(this.ka), this.ka = null);
        or.prototype.Qa.call(this)
    };

    function Ir(a) {
        this.Id = a;
        gr.call(this, "#ffff00")
    }
    u(Ir, gr);
    Ir.prototype.Bh = function() {
        var a = this.j.Ha();
        if (a) {
            var b = this.Id.getQuery();
            b != this.N && (a = Vo(a, b), this.Dg(), a && (lb(a, r(this.xo, this)), this.N = b))
        }
    };

    function Jr(a) {
        R.call(this);
        this.url = a;
        this.o = null;
        this.O = !0
    }
    n(Jr, R);
    Jr.prototype.nf = function() {
        if (this.O) this.O = !1;
        else throw Error();
    };

    function Kr(a, b) {
        Jr.call(this, a);
        this.ka = b || "GET";
        this.j = new Ri;
        this.i = new Rk
    }
    n(Kr, Jr);
    f = Kr.prototype;
    f.nf = function(a, b) {
        Jr.prototype.nf.call(this, a, b);
        this.N = a;
        this.s = b;
        this.j.na(this.i, "success", r(this.Vq, this));
        this.j.na(this.i, "error", r(this.Uq, this));
        this.i.send(this.url.toString(), this.ka, void 0)
    };
    f.Vq = function(a) {
        this.o = JSON.parse(dl(a.target));
        V(r(this.dispatchEvent, this, "success"));
        this.N && V(t(this.N, this.o));
        V(r(this.tk, this))
    };
    f.Uq = function() {
        V(r(this.dispatchEvent, this, "error"));
        this.s && V(this.s);
        V(r(this.tk, this))
    };
    f.abort = function() {
        this.i.abort();
        this.tk();
        return !1
    };
    f.tk = function() {
        Wi(this.j);
        this.s = this.N = null
    };

    function Lr(a, b, c) {
        a = ["event", a, b, c];
        if (b = q.ga) a = ["send"].concat(a), "timing" === a[1] && null == a[4] && (a[4] = Math.round(performance.now())), b.apply(null, a)
    }

    function Mr(a, b, c, d) {
        "string" === typeof a && (a = C(a));
        a && P(a, "click", t(Lr, b, c, d))
    }
    bb("_OC_analyticsTrack", Lr);

    function Nr(a) {
        return a.length ? a.reduce(function(b, c) {
            return ch(b, c)
        }, a[0].clone()) : null
    };

    function Or(a, b, c, d, e) {
        X.call(this);
        this.O = a;
        this.ta = b;
        this.wa = e;
        this.s = d;
        this.j = !1;
        this.N = G("div");
        c.appendChild(this.N);
        this.i.na(b, "mousemove", this.ka);
        this.i.na(b, "mouseup", this.ha)
    }
    u(Or, X);
    Or.prototype.ka = function(a) {
        if (!this.va) {
            a = ze(new B(a.clientX, a.clientY), qh(this.ta));
            a = Ug(a, this.wa);
            K(this.N, {
                border: "2px dashed #99AAEE",
                position: "absolute"
            });
            var b = a.right - a.left,
                c = a.bottom - a.top;
            jh(this.N, a.left, a.top);
            L(this.N, b, c);
            this.o = a
        }
    };
    Or.prototype.ha = function(a) {
        this.ka(a);
        this.va = !0;
        a = this.s;
        var b = Zg(this.o),
            c = ir(this.O);
        c = Pr(b, 1 / c);
        b = Qr(Pr(c, 1 / a.Fa().width * 1E3));
        a = new S(a.qc());
        T(a, "ci", [b.left, b.top, b.width, b.height].join());
        T(a, "jscmd", "click3");
        T(a, "output", "text");
        c = Qr(c);
        Rr(this.O, [c]);
        I(this.N);
        (new Kr(a)).nf(r(this.oa, this, c, b));
        this.dispatchEvent("endsize")
    };
    Or.prototype.oa = function(a, b, c) {
        c = c.page[0];
        var d = !1,
            e = c.clip_highlights;
        if (e) {
            var g = [];
            v(e, function(h) {
                g.push(new Xg(h.X, h.Y, h.W, h.H))
            });
            if (c = c.content) Rr(this.O, [a], c, b), d = !0, Lr("Web Reader", "Selection")
        }
        d || this.O.Dg();
        this.Ia()
    };

    function Pr(a, b) {
        return new Xg(a.left * b, a.top * b, a.width * b, a.height * b)
    }

    function Qr(a) {
        return new Xg(Math.round(a.left), Math.round(a.top), Math.round(a.width), Math.round(a.height))
    }
    Or.prototype.ya = function() {
        Or.ua.ya.call(this);
        I(this.N)
    };

    function Sr(a, b) {
        X.call(this);
        this.N = a;
        this.Ga = b
    }
    var Tr;
    n(Sr, dr);
    f = Sr.prototype;
    f.Ce = function(a) {
        dr.prototype.Ce.call(this, a);
        a = this.s;
        var b = G("div");
        W(b, !0);
        a.appendChild(b);
        Hb(b, "selection-layer");
        L(a, this.j.Fa());
        L(b, this.j.Fa());
        this.i.na(b, "click", this.Wq);
        this.i.na(b, "mousedown", this.Xq)
    };
    f.Xq = function(a) {
        if (Tr) {
            a.stopPropagation();
            this.o && this.o.Ia();
            var b = this.j.Rm;
            a = ze(new B(a.clientX, a.clientY), qh(b));
            this.o = new Or(this.N, b, this.s, this.j.Ha(), a);
            this.O = P(document.body, "mousemove", r(this.Yq, this));
            Gi(this.o, ["endsize", "dispose"], r(this.qt, this))
        }
    };
    f.Wq = function(a) {
        Tr && a.stopPropagation()
    };
    f.Yq = function(a) {
        if (this.o && !this.o.Pd) {
            var b = new B(a.clientX, a.clientY),
                c = Yg(zh(this.Ga.Eb()));
            if (Vg(c, b)) {
                var d = new B(0, 0);
                v([
                    [c.top - a.clientY, 0, -1],
                    [c.bottom - a.clientY, 0, 1],
                    [c.left - a.clientX, -1, 0],
                    [c.right - a.clientX, 1, 0]
                ], function(e) {
                    40 > Math.abs(e[0]) && (d.x = e[1] || d.x, d.y = e[2] || d.y)
                });
                this.ka || (this.ka = new Ok(100), this.i.na(this.ka, "tick", this.Zq));
                this.ha = d;
                d.x || d.y ? this.ka.start() : this.ka.stop()
            }
        }
    };
    f.Zq = function() {
        var a = this.ha,
            b = this.Ga;
        Gr(b, new B(15 * a.x, 15 * a.y), r(b.Md, b))
    };
    f.qt = function() {
        Oi(this.O);
        li(this.ka);
        this.ka = null
    };

    function Ur() {
        this.N = "Selection copied to clipboard";
        this.i = !1;
        var a = F("DIV", "entity-page-snackbar"),
            b = F("SPAN", "entity-page-snackbar-text");
        J(b, this.N);
        a.appendChild(b);
        Y(a, "hidden", !0);
        document.body.appendChild(a);
        this.s = a
    }
    Ur.prototype.show = function() {
        this.i ? (this.j(), V(r(this.o, this), 500)) : this.o();
        V(r(this.j, this), 6E3)
    };
    Ur.prototype.o = function() {
        K(this.s, "bottom", "0");
        this.i = !0
    };
    Ur.prototype.j = function() {
        K(this.s, "bottom", "-48px");
        this.i = !1
    };

    function Vr(a) {
        this.j = a;
        this.s = new Ur;
        this.o = Wr(this)
    }
    Vr.prototype.ma = function() {
        return this.o
    };

    function Wr(a) {
        var b = F("DIV");
        Jb(b, ["entity-page-copy-button", "entity-page-action-chip"]);
        var c = F("SPAN");
        x(c, "entity-page-action-chip-icon");
        var d = F("SPAN");
        x(d, "entity-page-action-chip-label");
        J(d, "Copy");
        b.appendChild(c);
        b.appendChild(d);
        P(b, "click", r(a.i, a));
        um(b, "button");
        Hf(b, !0);
        P(b, "keydown", function(e) {
            32 != e.keyCode && 13 != e.keyCode || a.i.call(a)
        });
        return b
    }
    Vr.prototype.i = function() {
        this.j.focus();
        this.j.select();
        document.execCommand("copy");
        this.s.show()
    };

    function Xr() {}
    Xr.prototype.Tc = function() {};

    function Yr(a, b, c, d, e, g, h, k, l) {
        var m = Zr(c),
            p = zh(a),
            w = ph(a);
        w && $g(p, Zg(w));
        w = Te(a);
        var D = Te(c);
        if (w.i != D.i) {
            var E = w.i.body;
            D = Pf(D);
            var H = new B(0, 0),
                O = jf(Ve(E));
            if (jc(O, "parent")) {
                var Ja = E;
                do {
                    var gb = O == D ? qh(Ja) : wh(Ja);
                    H.x += gb.x;
                    H.y += gb.y
                } while (O && O != D && O != O.parent && (Ja = O.frameElement) && (O = O.parent))
            }
            E = ze(H, qh(E));
            !A || Hc(9) || ff(w.i) || (E = ze(E, gf(w.i)));
            p.left += E.x;
            p.top += E.y
        }
        a = $r(a, b);
        b = p.left;
        a & 4 ? b += p.width : a & 2 && (b += p.width / 2);
        p = new B(b, p.top + (a & 1 ? p.height : 0));
        p = ze(p, m);
        e && (p.x += (a & 4 ? -1 : 1) * e.x, p.y +=
            (a & 1 ? -1 : 1) * e.y);
        if (h)
            if (l) var ha = l;
            else if (ha = ph(c)) ha.top -= m.y, ha.right -= m.x, ha.bottom -= m.y, ha.left -= m.x;
        return as(p, c, d, g, ha, h, k)
    }

    function Zr(a) {
        if (a = a.offsetParent) {
            var b = "HTML" == a.tagName || "BODY" == a.tagName;
            if (!b || "static" != ih(a, "position")) {
                var c = qh(a);
                if (!b) {
                    b = Ch(a);
                    var d;
                    if (d = b) {
                        d = fg && 0 <= $b(Bm, 10);
                        var e;
                        if (e = yc) e = 0 <= $b(zm, 10);
                        var g = eg && 0 <= $b(Bm, 85);
                        d = oc || d || e || g
                    }
                    b = d ? -a.scrollLeft : b && !nc && "visible" != ih(a, "overflowX") ? a.scrollWidth - a.clientWidth - a.scrollLeft : a.scrollLeft;
                    c = ze(c, new B(b, a.scrollTop))
                }
            }
        }
        return c || new B
    }

    function as(a, b, c, d, e, g, h) {
        a = a.clone();
        var k = $r(b, c);
        c = M(b);
        h = h ? h.clone() : c.clone();
        a = a.clone();
        h = h.clone();
        var l = 0;
        if (d || 0 != k) k & 4 ? a.x -= h.width + (d ? d.right : 0) : k & 2 ? a.x -= h.width / 2 : d && (a.x += d.left), k & 1 ? a.y -= h.height + (d ? d.bottom : 0) : d && (a.y += d.top);
        g && (e ? (d = h, k = 0, 65 == (g & 65) && (a.x < e.left || a.x >= e.right) && (g &= -2), 132 == (g & 132) && (a.y < e.top || a.y >= e.bottom) && (g &= -5), a.x < e.left && g & 1 && (a.x = e.left, k |= 1), g & 16 && (l = a.x, a.x < e.left && (a.x = e.left, k |= 4), a.x + d.width > e.right && (d.width = Math.min(e.right - a.x, l + d.width - e.left),
            d.width = Math.max(d.width, 0), k |= 4)), a.x + d.width > e.right && g & 1 && (a.x = Math.max(e.right - d.width, e.left), k |= 1), g & 2 && (k |= (a.x < e.left ? 16 : 0) | (a.x + d.width > e.right ? 32 : 0)), a.y < e.top && g & 4 && (a.y = e.top, k |= 2), g & 32 && (l = a.y, a.y < e.top && (a.y = e.top, k |= 8), a.y + d.height > e.bottom && (d.height = Math.min(e.bottom - a.y, l + d.height - e.top), d.height = Math.max(d.height, 0), k |= 8)), a.y + d.height > e.bottom && g & 4 && (a.y = Math.max(e.bottom - d.height, e.top), k |= 2), g & 8 && (k |= (a.y < e.top ? 64 : 0) | (a.y + d.height > e.bottom ? 128 : 0)), e = k) : e = 256, l = e);
        e = new Xg(0,
            0, 0, 0);
        e.left = a.x;
        e.top = a.y;
        e.width = h.width;
        e.height = h.height;
        a = l;
        if (a & 496) return a;
        jh(b, new B(e.left, e.top));
        h = e.Fa();
        Be(c, h) || Fh(b, h);
        return a
    }

    function $r(a, b) {
        return (b & 8 && Ch(a) ? b ^ 4 : b) & -9
    };

    function bs(a, b) {
        this.Nb = 8;
        this.Ma = b || void 0;
        gn.call(this, a)
    }
    u(bs, gn);

    function cs(a, b) {
        a.Nb = b;
        a.isVisible() && a.Ag()
    }
    bs.prototype.rd = function() {
        return this.Ma || null
    };
    bs.prototype.setPosition = function(a) {
        this.Ma = a || void 0;
        this.isVisible() && this.Ag()
    };
    bs.prototype.Ag = function() {
        if (this.Ma) {
            var a = !this.isVisible() && "move_offscreen" != this.getType(),
                b = this.ma();
            a && (b.style.visibility = "hidden", N(b, !0));
            this.Ma.Tc(b, this.Nb, this.Ul);
            a && N(b, !1)
        }
    };

    function ds(a) {
        bs.call(this, a);
        hn(this);
        this.Wk = !1;
        this.j = new Ri;
        this.i = sp();
        x(a, "viewport-selection-popup");
        es && es.Ia();
        es = this
    }
    n(ds, bs);
    ds.prototype.o = function() {
        this.dispatchEvent("close");
        this.Ia()
    };

    function fs(a, b, c) {
        var d = a.i ? C("selection-popup-table") : a.ma(),
            e = a.i ? G("TR") : G("div");
        x(e, "selection-popup-select-container");
        d.appendChild(e);
        d = a.i ? G("TD") : G("div");
        x(d, "selection-popup-select-label");
        e.appendChild(d);
        d.appendChild(of(b));
        d = a.i ? G("TD") : G("div");
        e.appendChild(d);
        b = G("input");
        b.value = c;
        x(b, "viewport-input");
        d.appendChild(b);
        Eh(b, !1);
        a.i && (c = G("TD"), e.appendChild(c), e = (new Vr(b)).ma(), c.appendChild(e));
        a.j.na(b, "mousedown", gs)
    }

    function gs(a) {
        a.stopPropagation()
    }
    ds.prototype.ya = function() {
        I(this.ma());
        bs.prototype.ya.call(this);
        this.j.Ia()
    };
    var es = null;

    function hs(a, b) {
        this.i = a instanceof B ? a : new B(a, b)
    }
    u(hs, Xr);
    hs.prototype.Tc = function(a, b, c, d) {
        var e = Ve(a);
        var g = e.body;
        e = e.documentElement;
        e = new B(g.scrollLeft || e.scrollLeft, g.scrollTop || e.scrollTop);
        g = this.i.x + e.x;
        e = this.i.y + e.y;
        var h = Zr(a);
        g -= h.x;
        e -= h.y;
        as(new B(g, e), a, b, c, null, null, d)
    };

    function is(a, b) {
        hs.call(this, a, b)
    }
    u(is, hs);
    is.prototype.j = 0;
    is.prototype.s = function(a) {
        this.j = a
    };
    is.prototype.Tc = function(a, b, c, d) {
        var e = mh(a);
        e = ph(e);
        var g = hf(Te(a).i);
        g = new B(this.i.x + g.scrollLeft, this.i.y + g.scrollTop);
        var h = b,
            k = as(g, a, h, c, e, 10, d);
        if (0 != (k & 496)) {
            if (k & 16 || k & 32) h ^= 4;
            if (k & 64 || k & 128) h ^= 1;
            k = as(g, a, h, c, e, 10, d);
            0 != (k & 496) && as(g, a, b, c, e, this.j, d)
        }
    };

    function js(a) {
        gr.call(this, "#4a95d6");
        this.o = a
    }
    n(js, gr);
    js.prototype.Ce = function(a) {
        gr.prototype.Ce.call(this, a);
        K(this.s, {
            cursor: "pointer"
        });
        this.i.na(this.s, "mousedown", ks)
    };

    function ks(a) {
        a.stopPropagation()
    }

    function Rr(a, b, c, d) {
        a.Dg();
        lb(b, r(a.xo, a));
        a.O && Oi(a.O);
        a.N && a.N.Ia();
        b = G("div");
        document.body.appendChild(b);
        var e = Nr(a.ka);
        if (e) {
            var g = qh(a.s);
            b = new ds(b);
            if (c && d) {
                var h = a.Ha(),
                    k = h.Ed();
                if (k) {
                    var l = new S(k);
                    d = [d.left, d.top, d.width, d.height].join();
                    T(l, "ci", d);
                    T(l, "edge", 0);
                    l = l.toString();
                    var m = new S(h.qc());
                    T(m, "ci", d);
                    T(m, "source", "bookclip");
                    m = Ce('<a href="%s"><img src="%s"/></a>', m.toString(), l)
                }
                d = m;
                rf(b.ma());
                m = b.ma();
                h = G("IMG");
                h.src = "/googlebooks/images/material/close_black_24dp.png";
                x(h,
                    "selection-popup-close");
                m.appendChild(h);
                b.j.Hf(h, "click", r(b.o, b));
                h = F("DIV", {}, "Share this clip");
                x(h, "selection-popup-title");
                m.appendChild(h);
                b.i && (h = F("TABLE", {
                    id: "selection-popup-table"
                }), m.appendChild(h));
                c && (fs(b, "Selection text", c), m = G("DIV"), x(m, "selection-popup-translate-container"), b.i ? (h = xf(C("selection-popup-table")), k = G("TD"), h.appendChild(k), k.appendChild(m)) : b.ma().appendChild(m), h = new S("https://translate.google.com/translate_t"), T(h, "text", c), T(h, "sl", "auto"), T(h, "tl", "auto"),
                    c = G("A"), c.href = h.toString(), c.target = "_blank", b.i && (h = F("SPAN"), Jb(h, ["selection-popup-translate-icon", "entity-page-action-chip-icon"]), c.appendChild(h)), h = F("SPAN"), J(h, "Translate"), x(h, "entity-page-action-chip-label"), c.appendChild(h), h = G("SPAN"), J(h, "\u00bb"), x(h, "selection-popup-translate-arrow"), c.appendChild(h), x(c, "selection-popup-translate-link"), x(c, "entity-page-action-chip"), m.appendChild(c));
                l && fs(b, "Image", l);
                d && fs(b, "Embed", d)
            } else c = G("DIV"), J(c, "Loading..."), x(c, "selection-popup-loading-msg"),
                b.ma().appendChild(c);
            cs(b, 4);
            a.N = b;
            c = g.x + e.left + e.width;
            e = g.y + e.top + e.height;
            g = M(b.ma()).width;
            24 > c - g && (c = g + 24);
            V(t(ls, b, new is(new B(c, e))));
            a.O = Gi(b, "close", r(a.Dg, a))
        }
    }

    function ls(a, b) {
        a.Pd || (a.setPosition(b), a.Ea(!0))
    }
    js.prototype.Dg = function() {
        gr.prototype.Dg.call(this);
        this.N && this.N.Ia()
    };
    js.prototype.ya = function() {
        gr.prototype.ya.call(this);
        this.N && this.N.Ia();
        this.O && Oi(this.O)
    };

    function ms(a, b, c) {
        return a.Za().yj() ? new Hr(a, b, c) : new wr(a, b, c)
    }

    function ns(a, b) {
        if (b instanceof wr) {
            qr(b, new Ir(a.Ya()));
            qr(b, new kr);
            var c = new js(a.Eb()),
                d = new Sr(c, a.Ja());
            qr(b, d);
            qr(b, c);
            qr(b, new lr(a))
        }
    };

    function os(a, b) {
        X.call(this);
        this.V = a;
        b = Math.floor(b / 2);
        var c = Math.floor(b / this.V.mb().i.aspectRatio());
        this.o = new Ae(b, c);
        this.j = G("div");
        K(this.j, {
            position: "absolute",
            backgroundColor: "white",
            top: 0,
            left: 0
        });
        this.ta = [];
        a.Ja().O.j.appendChild(this.j);
        this.s = G("div");
        this.O = G("div");
        this.ta.push(P(this.s, "dblclick", r(this.fu, this)));
        a = {
            overflow: "hidden",
            backgroundColor: "#fcfcfc",
            position: "absolute",
            border: "1px solid #ccc"
        };
        K(this.s, a);
        K(this.O, a);
        this.j.appendChild(this.s);
        this.j.appendChild(this.O);
        this.ha = G("div");
        this.oa = G("div");
        this.s.appendChild(this.ha);
        this.O.appendChild(this.oa);
        ps(this)
    }
    n(os, lm);

    function ps(a) {
        a.N && a.N.Qa();
        a.ka && a.ka.Qa();
        rf(a.ha);
        rf(a.oa);
        Fh(a.s, a.o);
        Fh(a.O, a.o);
        a.N = ms(a.V, new mr(a.va, a.o), a.ha);
        ns(a.V, a.N);
        a.wa = new fr(!0);
        qr(a.N, a.wa);
        a.ka = ms(a.V, new mr(a.Ca, a.o), a.oa);
        a.Da = new fr(!1);
        ns(a.V, a.ka);
        qr(a.ka, a.Da)
    }
    f = os.prototype;
    f.setPosition = function(a) {
        0 > a.x && (a.x = 0);
        jh(this.j, a)
    };
    f.fu = function(a) {
        a.preventDefault();
        a.stopPropagation();
        this.V.wb("previous")
    };
    f.Ea = function(a) {
        K(this.j, {
            display: a ? "" : "none"
        })
    };
    f.Vc = function() {
        K(this.s, {
            left: 0,
            top: 0
        });
        K(this.O, {
            left: this.o.width + "px",
            top: 0
        })
    };
    f.Ud = function() {
        return kb([this.va, this.Ca], function(a) {
            return !!a
        })
    };
    f.Qa = function() {
        this.N.Qa();
        this.ka.Qa();
        for (var a; a = this.ta.pop();) Oi(a);
        this.j.parentNode && I(this.j)
    };

    function qs(a) {
        return 2 * a
    };

    function rs(a) {
        this.V = a
    }
    n(rs, op);
    rs.prototype.render = function(a) {
        var b = new os(this.V, a.Fa().width);
        b.setPosition(a.rd());
        b.Vc();
        b.Ea(!0);
        return this.i = b
    };

    function ss(a, b) {
        var c = a.match(ts);
        return c ? Number(c[1]) * b[c[2]] : Number(a)
    }
    var ts = /^(-?\d+\.?\d*)([KMGTPEZYkmun]?)B?$/,
        us = {
            "": 1,
            n: 1E-9,
            u: 1E-6,
            m: .001,
            k: 1E3,
            K: 1E3,
            M: 1E6,
            G: 1E9,
            T: 1E12,
            P: 1E15,
            E: 1E18,
            Z: 1E21,
            Y: 1E24
        },
        vs = {
            "": 1,
            n: Math.pow(1024, -3),
            u: Math.pow(1024, -2),
            m: 1 / 1024,
            k: 1024,
            K: 1024,
            M: Math.pow(1024, 2),
            G: Math.pow(1024, 3),
            T: Math.pow(1024, 4),
            P: Math.pow(1024, 5),
            E: Math.pow(1024, 6),
            Z: Math.pow(1024, 7),
            Y: Math.pow(1024, 8)
        };

    function ws(a, b) {
        var c = xs(a),
            d = xs(b);
        0 == eo(a) || 0 == eo(b) ? d = "This is a preview. The total pages displayed will be limited." : "number" !== typeof c || "number" !== typeof d || c >= d || 1 == Math.abs(c - d) ? d = "Some pages are omitted from this book preview." : ys(a, b) ? d = "Page " + (--d + " is not part of this book preview.") : (a = ++c + "", d = --d + "", d = "Pages " + a + " to " + d + " are not shown in this preview.");
        return d
    }

    function xs(a) {
        a = a.ob();
        var b;
        /[^0-9]/.test(a) || Pb(a) ? b = null : b = Ob(a, "B") ? ss(a, vs) : ss(a, us);
        return b
    }

    function ys(a, b) {
        a = xs(a);
        b = xs(b);
        return 0 == a + 1 - (b - 1)
    };

    function zs(a, b, c) {
        R.call(this);
        this.V = a;
        this.o = b;
        this.N = M(b).width;
        this.O = c;
        this.j = !1;
        this.i = Ul()
    }
    n(zs, R);
    zs.prototype.Gf = function() {
        return this.j
    };

    function As(a, b) {
        if (b != a.j) {
            a.j = b;
            var c = a.V.Ja().O.j;
            N(c, !1);
            M(c);
            [t(Bs, a.o, a.O, a.N, a.i, b), r(a.s, a), t(N, c, !0)].forEach(V)
        }
    }
    zs.prototype.s = function() {
        this.dispatchEvent("change")
    };

    function Bs(a, b, c, d, e) {
        var g = b.style.width;
        d = d ? "right" : "left";
        e ? (b.style[d] = "0", b.style.width = g + c) : (b.style[d] = "", b.style.width = "");
        N(a, !e)
    };
    var Cs = null;

    function Ds(a, b) {
        Ri.call(this);
        this.j = Cs;
        this.V = a;
        this.i = b;
        this.V.Za().ka || (this.na(this.V, "pageturn", this.s), this.na(this.i, "dispose", this.Ia))
    }
    n(Ds, Ri);
    Ds.prototype.s = function() {
        var a = this.i.N.i.Ud()[0] || new gp,
            b = this.i.N.i.Ud()[1] || new gp,
            c = this.ka,
            d = this.N,
            e = d ? eo(d) : -1,
            g = eo(a) || -1,
            h = eo(b) || -1,
            k = Math.max(c ? eo(c) : -1, e),
            l = Math.max(g, h);
        if (Math.abs(l - k) > this.i.Sm) {
            if (0 < l - k) {
                var m = k == e ? d : c;
                var p = a
            }
            0 > l - k && (m = -1 != h ? b : a, p = d);
            1 < h - g && (m = a, p = b);
            ys(m, p) || void 0 === m || void 0 === p || (a = ws(m, p), this.j.ha(a), this.j.show(3E3))
        }
    };

    function Es(a) {
        vp.call(this, a)
    }
    n(Es, vp);
    f = Es.prototype;
    f.Ld = function(a) {
        vp.prototype.Ld.call(this, a);
        a && a.additional_info && (this.i = a.additional_info["[NewspaperJSONPageInfo]"], this.i.articles && (this.j = {}, v(this.i.articles, function(b) {
            var c = b.aid;
            c && (this.j[c] = new Tq(b))
        }, this)))
    };
    f.Td = function() {
        return this.s(32) ? "Front Cover" : this.s(64) ? "Back Cover" : vp.prototype.Td.call(this)
    };
    f.xl = function() {
        return {
            width: "w"
        }
    };
    f.tj = ba(14);
    f.Ho = function() {
        return this.ka
    };

    function Fs(a) {
        Sp.call(this);
        Sp.apply(this, arguments);
        this.O();
        P(this, "update", r(this.O, this))
    }
    n(Fs, Sp);

    function Gs(a, b) {
        var c = {};
        v(b.page, function(e) {
            var g = ho(this, e.pid);
            g && Ap(g, e);
            c[e.pid] = !0
        }, a);
        b = fo(a);
        var d = kb(b, function(e) {
            return !!c[e.Sa()] || !!this.ka[e.Sa()]
        }, a);
        b.length != d.length && a.o(d)
    }
    Fs.prototype.Hl = function(a) {
        this.N ? Gs(this, a) : Sp.prototype.Hl.call(this, a)
    };
    Fs.prototype.O = function() {
        var a = {},
            b = 0;
        v(fo(this), function(h) {
            var k = eo(h);
            a[k] = h;
            b = Math.max(b, k)
        });
        for (var c = [], d = -1; d <= b; d += 2) {
            var e = a[d],
                g = a[d + 1];
            (e || g) && c.push([e, g])
        }
        this.ha = c
    };
    Fs.prototype.s = Es;

    function Hs(a) {
        this.N = a.Seller;
        this.Pa = a.Url;
        this.j = a.TrackingUrl;
        this.i = a.Price;
        this.o = a.IsInStock;
        this.s = a.IsPublisher
    };

    function Is(a) {
        this.o = a.page_id;
        this.i = a.page_number || "";
        this.j = a.snippet_text || "";
        this.s = a.page_url
    }
    Is.prototype.Sa = function() {
        return this.o
    };
    Is.prototype.qc = function() {
        return this.s
    };

    function Js(a) {
        this.i = a;
        0 < this.i.number_of_results ? (this.Gb = lb(this.i.search_results, function(b) {
            return new Is(b)
        }, this), this.id = this.i.search_results[0].page_id + Ks(this) + this.i.search_results[this.i.number_of_results - 1].page_id) : this.Gb = []
    }

    function Ls(a) {
        return a.i.spellresults && a.i.spellresults.correct_spell ? a.i.spellresults.correct_spell : null
    }

    function Ks(a) {
        return a.i.search_query_escaped
    };

    function Ms(a, b) {
        X.call(this);
        this.N = a;
        this.O = b;
        this.s = b.o;
        this.o = b.i;
        this.j = G("DIV");
        this.j.className = "separator-container";
        this.N.appendChild(this.j);
        a = G("TABLE");
        a.className = "separator-outer-table";
        this.j.appendChild(a);
        var c = a.insertRow(-1).insertCell(-1);
        c.align = "center";
        var d = G("DIV");
        d.className = "separator-background";
        c.appendChild(d);
        c = G("TABLE");
        c.className = "separator-inner-table";
        d.appendChild(c);
        c.align = "center";
        if (b.j()) {
            var e = C("gb-mobile-menu-pubinfo");
            if (e) {
                b = Xe("IMG", e);
                if (1 == b.length) {
                    b =
                        b[0].cloneNode(!0);
                    var g = c.insertRow(-1).insertCell(-1);
                    uf(g, b, 0);
                    x(g, "separator-message");
                    x(g, "separator-pubinfo-message")
                }
                b = ws(this.s, this.o);
                e = If(e);
                c = c.insertRow(-1).insertCell(-1);
                g = G("SPAN");
                g.className = "separator-text";
                c.appendChild(g);
                var h = this.O;
                h.j && h.s ? Q(g, ki(e)) : Q(g, ki(b + "<br>" + e));
                x(c, "separator-message");
                x(c, "separator-pubinfo-message")
            }
            x(a, "separator-pubinfo");
            x(d, "separator-pubinfo")
        } else a = c.insertRow(-1).insertCell(-1), x(a, "separator-message"), a.textContent = ws(this.s, this.o);
        Eh(this.j,
            !0);
        W(this.j)
    }
    n(Ms, lm);
    Ms.prototype.ub = function(a) {
        L(this.j, a)
    };
    Ms.prototype.setPosition = function(a) {
        jh(this.j, a)
    };
    Ms.prototype.Qa = function() {
        I(this.j)
    };

    function Ns(a, b, c, d) {
        this.ik = this.Gl = 10;
        this.Mi = this.Ni = 20;
        b = Math.floor((b - 20) / (100 + this.Gl));
        d && 2 < b && (b -= b % 2);
        Yq.call(this, b);
        fo(a);
        a = lb(fo(a), function(e) {
            e = new Sl(e);
            var g = e.Fa();
            g.width = 100;
            e.ub(g);
            return e
        });
        c && (c = a[0].Fa(), d = new Hl, d.ub(c), this.Va(d));
        v(a, r(this.Va, this));
        Ol(this)
    }
    u(Ns, Yq);

    function Os(a, b) {
        Br.call(this, b);
        this.yb = a;
        this.i.na(a, "pagechange", this.Xd);
        this.i.na(this.yb, "searchupdate", this.El);
        if (a = C("subscription-bar")) this.i.na(this, "scrolldown", t(this.rl, a)), this.i.na(this, "scrollup", t(this.tt, a))
    }
    u(Os, Br);
    f = Os.prototype;
    f.Ud = function() {
        var a = this.Bc.Sd(),
            b = [];
        this.oa && (a = this.oa.Ci(a)[0] || []);
        v(a, function(c) {
            c instanceof Sl && b.push(c.Ha())
        });
        return b
    };
    f.zg = function(a) {
        this.tg(!1, !1);
        this.kf(this.Ug(a))
    };
    f.jf = function(a) {
        var b = [];
        "fixed_width" == this.Jb().ig() && b.push(this.Fa().width);
        this.oe && (a = Qp(this.oe(), this.Jb().O(), a, b)) && this.zg(a)
    };
    f.Se = function() {
        this.tg(!0, !1);
        var a = this.Fa().width;
        this.kf(this.Ug(a))
    };
    f.Ff = ba(15);
    f.tg = function(a, b) {
        this.Vg = a;
        this.sj = b
    };
    f.resize = function() {
        if (this.Vg) this.Se();
        else {
            var a = this.Jb().O();
            a && this.zg(a)
        }
    };
    f.kf = function(a) {
        var b = this.Jb();
        this.ad(a);
        b && (a = qm(new pm(b, a), this.Qc()), (a = this.Ze(a)) && this.Md(a))
    };
    f.Xd = function() {
        this.mi || this.Wd(this.yb.Ha())
    };
    f.Wd = function(a) {
        this.Bc.Gc && (a = this.Bc.Gc(a)) && this.hd(new B(Math.round(a.le()), Math.round(a.ud())))
    };
    f.El = function() {
        Ps && (this.yl().Qa(), this.wa && this.wa(), this.mc())
    };
    var Ps = !0;

    function Qs(a, b) {
        this.Ga = a;
        this.i = b
    }
    n(Qs, op);
    Qs.prototype.render = function(a) {
        var b = this.i(),
            c = a.Ha(),
            d = hb(this.Ga.oe().Rf) / a.Fa().width,
            e = a.Fa();
        b.Nj = e.width;
        b.lh = e.height;
        e = a.Fa().clone();
        e.width *= d;
        e.height *= d;
        b.Mu = e.width;
        b.Ju = e.height;
        b.setPosition(a.le(), a.ud());
        b.tb(c);
        b.Vc();
        return b
    };

    function Rs() {};

    function Ss(a) {
        this.Ga = a
    }
    u(Ss, Rs);
    Ss.prototype.wl = function(a) {
        var b = this.Ci(a);
        a = b[0] || [];
        b = b[1] || [];
        b.sort(t(Ts, this.Ga.Qc()));
        var c = [];
        wb(c, a, b);
        return c
    };

    function Ts(a, b, c) {
        return Wg(Yg(Il(b)), a) - Wg(Yg(Il(c)), a)
    }
    Ss.prototype.Ci = function(a) {
        var b = Fr(this.Ga),
            c = new Xg(b.left - 800, b.top - 800, b.width + 1600, b.height + 1600);
        return Bb(a, function(d) {
            d = Il(d);
            if (ah(c, d)) return ah(b, d) ? 0 : 1
        })
    };

    function Us(a, b) {
        this.Ga = b;
        this.V = a
    }
    n(Us, Ss);
    Us.prototype.wl = function(a) {
        var b = Ss.prototype.wl.call(this, a),
            c = this.V.Ha();
        if (c) {
            var d = [],
                e = this.V.mb();
            v([1, -1], function() {
                var g = go(e, c.Sa(), 1);
                g && d.push(g)
            });
            v(a, function(g) {
                g.Ha && pb(d, g.Ha()) && qb(b, g)
            })
        }
        return b
    };

    function Vs(a, b, c) {
        X.call(this);
        this.V = a;
        this.Ga = b;
        this.o = G("div");
        W(this.o, !0);
        K(this.o, {
            position: "absolute",
            display: "none"
        });
        c.appendChild(this.o);
        this.N = G("div");
        W(this.N, !0);
        K(this.N, {
            position: "absolute"
        });
        this.o.appendChild(this.N);
        this.O = G("div");
        W(this.O, !0);
        this.o.appendChild(this.O);
        this.ka = G("div");
        W(this.ka, !0);
        this.O.appendChild(this.ka);
        this.rb()
    }
    u(Vs, lm);
    f = Vs.prototype;
    f.Vc = function() {
        var a = this.Nj - 2,
            b = this.lh - 2,
            c = this.Mu - 2,
            d = this.Ju - 2;
        K(this.O, {
            backgroundColor: "#cccccc",
            position: "absolute"
        });
        jh(this.O, 0, 0);
        L(this.O, this.Nj, this.lh);
        K(this.ka, {
            overflow: "hidden",
            backgroundColor: "#fcfcfc",
            position: "absolute"
        });
        jh(this.ka, 1, 1);
        L(this.ka, a, b);
        this.show();
        var e = this.V;
        a = ms(e, new nr(this.Ha(), new Ae(a, b), new Ae(c, d)), this.ka);
        a instanceof wr ? ns(e, a) : a instanceof Hr && a instanceof Hr && qr(a, new Ir(e.Ya()));
        this.j = a
    };
    f.rb = function() {
        N(this.o, !1)
    };
    f.show = function() {
        N(this.o, !0)
    };
    f.uc = ba(10);
    f.Qa = function() {
        this.j && this.j.Qa();
        I(this.o)
    };
    f.setPosition = function(a, b) {
        jh(this.o, a, b)
    };
    f.ud = function() {
        return lh(this.o).x
    };
    f.le = function() {
        return lh(this.o).y
    };
    f.tb = function(a) {
        this.s = a
    };
    f.Ha = function() {
        return this.s
    };
    f.Hb = function() {
        return this.lh
    };
    f.Bb = function() {
        return this.Nj
    };

    function Ws(a) {
        return a + 2
    }
    f.Fa = function() {
        return new Ae(this.Nj, this.lh)
    };

    function Xs(a) {
        X.call(this);
        rf(a);
        W(a);
        this.s = a;
        this.j = G("div");
        W(this.j, !0);
        Ul() && (cf(a, {
            dir: "ltr"
        }), cf(this.j, {
            dir: "rtl"
        }));
        a.appendChild(this.j)
    }
    u(Xs, X);

    function Ys(a, b) {
        Xs.call(this, b);
        this.Ga = a;
        this.i.na(b, "scroll", this.O);
        K(b, "position", "relative");
        K(this.j, "position", "absolute");
        this.o = G("div");
        x(this.o, "scroll-background");
        W(this.o, !0);
        b.appendChild(this.o);
        this.o.appendChild(this.j)
    }
    n(Ys, Xs);

    function Cr(a) {
        var b = a.oa;
        a.ha && b && (K(a.j, "left", Math.floor(Math.max(0, a.Ga.O.s.clientWidth - b.width) / 2) + "px"), K(a.o, "height", b.height + "px"))
    }
    Ys.prototype.ta = function() {
        this.N = !1;
        this.O()
    };
    Ys.prototype.O = function() {
        if (!this.N) {
            var a = this.Ga.Kb;
            if (a) {
                a = a.clone();
                var b = this.s;
                b = new B(b.scrollLeft, b.scrollTop);
                xe(a, b) || (this.ka = !0, this.Ga.Md(b), this.ka = !1)
            }
        }
    };

    function Zs(a) {
        var b = a.Eb(),
            c = new Ys(this, b);
        $s(b);
        Os.call(this, a, c);
        Er(this, new Us(a, this));
        Dr(this, at(this));
        var d = a.mb(),
            e = a.Za().ig();
        this.N = a.Za().ka ? function(g) {
            return new $q(d, e, g)
        } : a.Za().ta ? function(g) {
            return new $q(d, e, g, !0, a.Za().ta)
        } : function(g) {
            return new $q(d, e, g, !0)
        };
        b = this.yb.Za();
        "fixed_height" == b.ig() ? (b = b.oe(), b = b[Math.floor(b.length / 2)] + 2) : b = bt(b) + 2;
        this.zg(b);
        this.i.na(this.yb, "pagesupdate", this.nu);
        this.i.na(this.yb, "pagemodechange", this.ar);
        this.i.na(this, "move", this.mc);
        this.i.na(this,
            "move", this.Aw)
    }
    u(Zs, Os);

    function $s(a) {
        K(a, "overflow", "auto");
        K(a, {
            overflowX: "auto",
            overflowY: "scroll"
        });
        x(a, "overflow-scrolling");
        cf(a, {
            dir: "ltr"
        })
    }
    f = Zs.prototype;
    f.Sc = function() {
        this.jf(1)
    };
    f.nd = function() {
        this.jf(-1)
    };
    f.oe = function() {
        var a = this.yb.Za(),
            b = vb(a.oe());
        "fixed_width" == a.ig() && (a = this.yb.Za().Na) && 150 < a - hb(b) && (1500 > a ? qb(b, a) : qb(b, 1500));
        return new Pp(lb(b, Ws))
    };
    f.Ug = function(a) {
        return this.N(a)
    };
    f.Fa = function() {
        if (this.o.hasChildNodes()) {
            var a = Hh(this.o.childNodes[0]).width;
            a = new Ae(a, this.j.height)
        } else a = this.j;
        return a
    };

    function at(a) {
        var b = new Mp;
        Np(b, Sl, new Qs(a, t(Qc, Vs, a.yb, a, a.O.j)));
        Np(b, Wq, new br(a.yb, function(c) {
            return new Ms(a.O.j, c)
        }));
        return b
    }
    f.Aw = function() {
        if (this.Ca) {
            var a = Ll(this.Bc, this.Qc().y);
            a && a.Ha && (a = a.Ha(), this.yb.Ha() != a && (this.mi = !0, this.yb.yd(a.Sa()), this.mi = !1))
        }
        this.Ca = !0
    };
    f.nu = function() {
        var a = this.yb.Ha(),
            b = this.yb.mb(),
            c = ho(b, a.Sa());
        if (!c) a: {
            c = eo(a);b = fo(b);
            for (a = b.length - 1; 0 <= a; a--) {
                var d = b[a];
                if (eo(d) <= c) {
                    c = d;
                    break a
                }
            }
            c = null
        }
        a = this.Kb;
        b = this.Jb();
        d = b.Gc(c);
        a = ze(a, d.rd());
        b = this.Ug(b.O());
        c = b.Gc(c).rd();
        c = new B(c.x + a.x, c.y + a.y);
        this.ad(b);
        this.Md(c)
    };
    f.ar = function() {
        this.ka.Qa();
        this.mc()
    };
    f.ol = function(a) {
        if (a.Ho && a.ka) {
            var b = a.ka;
            if (null != a.oa) var c = a.oa;
            else a.oa = new Vq(this.O.j), c = a.oa;
            c.i = this.O.j;
            if (C("focus_article_div")) {
                var d = C("focus_article_div");
                I(d)
            }
            d = this.Jb().Gc(a);
            a = d.Bb() / a.Be();
            if (b.fg() && (b = b.fg())) {
                var e = b[0];
                if (e && 4 == e.length) {
                    b = a * e[0] + d.le();
                    d = a * e[1] + d.ud();
                    var g = a * e[2];
                    a *= e[3];
                    e = G("DIV");
                    e.setAttribute("id", "focus_article_div");
                    W(e, !0);
                    Ah(e, .3);
                    K(e, {
                        position: "absolute",
                        left: b + "px",
                        top: d + "px",
                        width: g + "px",
                        height: a + "px",
                        cursor: "pointer",
                        backgroundColor: "#36C",
                        border: "2px solid #00F"
                    });
                    c.i.appendChild(e)
                }
            }
        }
    };

    function ct(a, b, c, d, e) {
        X.call(this);
        this.V = a;
        this.Ga = b;
        this.s = c;
        var g = G("div");
        K(g, {
            position: "absolute"
        });
        e = e.width - 2;
        jh(g, d.x + (Ul() ? e : 0), d.y);
        b.O.j.appendChild(g);
        this.j = g;
        b = Math.floor(e / Tl(c));
        g = new Ae(e, b);
        this.o = G("div");
        this.j.appendChild(this.o);
        K(this.o, {
            padding: "1px",
            position: "absolute"
        });
        this.N();
        b = G("div");
        this.o.appendChild(b);
        K(b, {
            overflow: "hidden",
            backgroundColor: "#fcfcfc"
        });
        L(b, g);
        this.o.appendChild(b);
        d = G("IMG");
        d.title = c.Td();
        this.ka = d;
        e = S;
        var h = new S(c.O.hp);
        T(h, "pg", c.Sa());
        c.vb.sig &&
            T(h, "sig", c.vb.sig);
        e = new e(h.toString());
        T(e, "zoom", "1");
        T(e, "img", "1");
        T(e, "w", g.width);
        if (g = this.V.Za().Ge) T(e, "imgtk", g), T(e, "jtp", eo(c));
        d.src = e.toString();
        b.appendChild(d);
        K(this.o, "cursor", "pointer");
        this.i.na(this.o, "click", this.O);
        this.i.na(a, "pagechange", this.N)
    }
    n(ct, lm);
    ct.prototype.N = function() {
        var a = !1,
            b = this.V.Ha();
        b && b == this.s && (a = !0);
        K(this.o, "backgroundColor", a ? "#6B90DA" : "#ccc")
    };
    ct.prototype.O = function() {
        this.V.ac(Zs);
        this.V.tb(this.s);
        dt.dispatchEvent("click")
    };
    ct.prototype.Qa = function() {
        lp(this.ka);
        I(this.j)
    };
    var dt = new R;

    function et(a, b) {
        this.V = a;
        this.Ga = b
    }
    n(et, op);
    et.prototype.render = function(a) {
        return new ct(this.V, this.Ga, a.Ha(), a.rd(), a.Fa())
    };

    function ft(a) {
        var b = a.Eb();
        K(b, {
            overflow: "hidden"
        });
        var c = new Ys(this, b);
        Os.call(this, a, c);
        this.i.na(this, "move", this.mc);
        K(b, {
            overflow: "auto"
        });
        Dr(this, gt(this));
        this.ad(ht(this));
        Er(this, new Ss(this));
        V(r(this.mc, this), 0);
        this.i.na(this, "resize", this.N);
        var d = C("subscription-bar");
        d && (this.rl(d), V(function() {
            N(d, !1)
        }, 600))
    }
    u(ft, Os);
    ft.prototype.Wd = function(a) {
        a = this.Jb().Gc(a).rd();
        this.Md(new B(void 0, a.y - 40))
    };

    function ht(a) {
        var b = a.yb.Za().Lc;
        return new Ns(a.yb.mb(), tp() ? Math.min(a.Fa().width, 1120) : a.Fa().width, b, b)
    }
    ft.prototype.N = function() {
        this.ad(ht(this));
        this.Wd(this.yb.Ha())
    };

    function gt(a) {
        var b = new Mp;
        Np(b, Sl, new et(a.yb, a));
        return b
    };

    function it(a) {
        this.Ec = a.Title;
        this.j = a.Pid;
        this.i = a.PgNum
    }
    it.prototype.ob = function() {
        return this.Ec
    };
    it.prototype.getId = function() {
        return this.j
    };

    function jt(a, b, c, d) {
        si.call(this, d);
        this.type = "key";
        this.keyCode = a;
        this.charCode = b;
        this.repeat = c
    }
    u(jt, si);

    function kt(a, b) {
        R.call(this);
        a && this.attach(a, b)
    }
    u(kt, R);
    f = kt.prototype;
    f.Aa = null;
    f.Ij = null;
    f.Ol = null;
    f.Jj = null;
    f.Xc = -1;
    f.De = -1;
    f.uk = !1;
    var lt = {
            3: 13,
            12: 144,
            63232: 38,
            63233: 40,
            63234: 37,
            63235: 39,
            63236: 112,
            63237: 113,
            63238: 114,
            63239: 115,
            63240: 116,
            63241: 117,
            63242: 118,
            63243: 119,
            63244: 120,
            63245: 121,
            63246: 122,
            63247: 123,
            63248: 44,
            63272: 46,
            63273: 36,
            63275: 35,
            63276: 33,
            63277: 34,
            63289: 144,
            63302: 45
        },
        mt = {
            Up: 38,
            Down: 40,
            Left: 37,
            Right: 39,
            Enter: 13,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            "U+007F": 46,
            Home: 36,
            End: 35,
            PageUp: 33,
            PageDown: 34,
            Insert: 45
        },
        nt = rc && oc;
    f = kt.prototype;
    f.cr = function(a) {
        if (pc || mc)
            if (17 == this.Xc && !a.ctrlKey || 18 == this.Xc && !a.altKey || rc && 91 == this.Xc && !a.metaKey) this.De = this.Xc = -1; - 1 == this.Xc && (a.ctrlKey && 17 != a.keyCode ? this.Xc = 17 : a.altKey && 18 != a.keyCode ? this.Xc = 18 : a.metaKey && 91 != a.keyCode && (this.Xc = 91));
        rj(a.keyCode, this.Xc, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? (this.De = sj(a.keyCode), nt && (this.uk = a.altKey)) : this.handleEvent(a)
    };
    f.dr = function(a) {
        this.De = this.Xc = -1;
        this.uk = a.altKey
    };
    f.handleEvent = function(a) {
        var b = a.Rb,
            c = b.altKey;
        if (A && "keypress" == a.type) {
            var d = this.De;
            var e = 13 != d && 27 != d ? b.keyCode : 0
        } else(pc || mc) && "keypress" == a.type ? (d = this.De, e = 0 <= b.charCode && 63232 > b.charCode && qj(d) ? b.charCode : 0) : ("keypress" == a.type ? (nt && (c = this.uk), b.keyCode == b.charCode ? 32 > b.keyCode ? (d = b.keyCode, e = 0) : (d = this.De, e = b.charCode) : (d = b.keyCode || this.De, e = b.charCode || 0)) : (d = b.keyCode || this.De, e = b.charCode || 0), rc && 63 == e && 224 == d && (d = 191));
        var g = d = sj(d);
        d ? 63232 <= d && d in lt ? g = lt[d] : 25 == d && a.shiftKey &&
            (g = 9) : b.keyIdentifier && b.keyIdentifier in mt && (g = mt[b.keyIdentifier]);
        if (!oc || "keypress" != a.type || rj(g, this.Xc, a.shiftKey, a.ctrlKey, c, a.metaKey)) a = g == this.Xc, this.Xc = g, b = new jt(g, e, a, b), b.altKey = c, this.dispatchEvent(b)
    };
    f.ma = function() {
        return this.Aa
    };
    f.attach = function(a, b) {
        this.Jj && ot(this);
        this.Aa = a;
        this.Ij = P(this.Aa, "keypress", this, b);
        this.Ol = P(this.Aa, "keydown", this.cr, b, this);
        this.Jj = P(this.Aa, "keyup", this.dr, b, this)
    };

    function ot(a) {
        a.Ij && (Oi(a.Ij), Oi(a.Ol), Oi(a.Jj), a.Ij = null, a.Ol = null, a.Jj = null);
        a.Aa = null;
        a.Xc = -1;
        a.De = -1
    }
    f.ya = function() {
        kt.ua.ya.call(this);
        ot(this)
    };

    function pt() {}
    var qt;
    Ra(pt);
    var rt = {
        button: "pressed",
        checkbox: "checked",
        menuitem: "selected",
        menuitemcheckbox: "checked",
        menuitemradio: "checked",
        radio: "checked",
        tab: "selected",
        treeitem: "selected"
    };
    f = pt.prototype;
    f.Fg = function() {};
    f.Uc = function(a) {
        return a.i.Ua("DIV", st(this, a).join(" "), a.Mc())
    };
    f.Oc = function(a) {
        return a
    };

    function tt(a, b, c) {
        (a = a.ma ? a.ma() : a) && (c ? Jb : Lb)(a, [b])
    }
    f.Ti = function() {
        return !0
    };
    f.Wb = function(a, b) {
        b.id && a.nh(b.id);
        var c = this.Oc(b);
        c && c.firstChild ? ut(a, c.firstChild.nextSibling ? vb(c.childNodes) : c.firstChild) : a.Hg = null;
        var d = 0,
            e = this.Xa(),
            g = this.Xa(),
            h = !1,
            k = !1,
            l = vb(Gb(b));
        l.forEach(function(m) {
            h || m != e ? k || m != g ? d |= this.xj(m) : k = !0 : (h = !0, g == e && (k = !0));
            1 == this.xj(m) && Ff(c) && Hf(c, !1)
        }, this);
        a.Ee = d;
        h || (l.push(e), g == e && (k = !0));
        k || l.push(g);
        (a = a.Rd) && l.push.apply(l, a);
        h && k && !a || Hb(b, l.join(" "));
        return b
    };
    f.Ui = function(a) {
        dn(a) && this.Vm(a.ma(), !0);
        a.isEnabled() && this.Ch(a, a.isVisible())
    };

    function vt(a, b, c) {
        if (a = c || a.Fg()) c = b.getAttribute("role") || null, a != c && um(b, a)
    }

    function wt(a, b, c) {
        var d = b.La;
        null != d && a.Ai(c, d);
        b.isVisible() || Y(c, "hidden", !b.isVisible());
        b.isEnabled() || a.ye(c, 1, !b.isEnabled());
        xt(b, 8) && a.ye(c, 8, yt(b, 8));
        xt(b, 16) && a.ye(c, 16, yt(b, 16));
        xt(b, 64) && a.ye(c, 64, b.wd())
    }
    f.Ai = function(a, b) {
        ym(a, b)
    };
    f.vk = function(a, b) {
        Eh(a, !b, !A)
    };
    f.Vm = function(a, b) {
        tt(a, this.Xa() + "-rtl", b)
    };
    f.Um = function(a) {
        var b;
        return xt(a, 32) && (b = a.ma()) ? Ff(b) : !1
    };
    f.Ch = function(a, b) {
        var c;
        if (xt(a, 32) && (c = a.ma())) {
            if (!b && yt(a, 32)) {
                try {
                    c.blur()
                } catch (d) {}
                yt(a, 32) && a.Vi(null)
            }
            Ff(c) != b && Hf(c, b)
        }
    };
    f.Ea = function(a, b) {
        N(a, b);
        a && Y(a, "hidden", !b)
    };
    f.jd = function(a, b, c) {
        var d = a.ma();
        if (d) {
            var e = this.Xh(b);
            e && tt(a, e, c);
            this.ye(d, b, c)
        }
    };
    f.ye = function(a, b, c) {
        qt || (qt = {
            1: "disabled",
            8: "selected",
            16: "checked",
            64: "expanded"
        });
        b = qt[b];
        var d = a.getAttribute("role") || null;
        d && (d = rt[d] || b, b = "checked" == b || "selected" == b ? d : b);
        b && Y(a, b, c)
    };
    f.Gg = function(a, b) {
        var c = this.Oc(a);
        c && (rf(c), b && ("string" === typeof b ? J(c, b) : (a = function(d) {
            if (d) {
                var e = Ve(c);
                c.appendChild("string" === typeof d ? e.createTextNode(d) : d)
            }
        }, Array.isArray(b) ? b.forEach(a) : !Ta(b) || "nodeType" in b ? a(b) : vb(b).forEach(a))))
    };
    f.Xa = function() {
        return "goog-control"
    };

    function st(a, b) {
        var c = a.Xa(),
            d = [c],
            e = a.Xa();
        e != c && d.push(e);
        c = b.Ee;
        for (e = []; c;) {
            var g = c & -c;
            e.push(a.Xh(g));
            c &= ~g
        }
        d.push.apply(d, e);
        (a = b.Rd) && d.push.apply(d, a);
        return d
    }
    f.Xh = function(a) {
        this.j || zt(this);
        return this.j[a]
    };
    f.xj = function(a) {
        if (!this.va) {
            this.j || zt(this);
            var b = this.j,
                c = {},
                d;
            for (d in b) c[b[d]] = d;
            this.va = c
        }
        a = parseInt(this.va[a], 10);
        return isNaN(a) ? 0 : a
    };

    function zt(a) {
        var b = a.Xa();
        a.j = {
            1: b + "-disabled",
            2: b + "-hover",
            4: b + "-active",
            8: b + "-selected",
            16: b + "-checked",
            32: b + "-focused",
            64: b + "-open"
        }
    };

    function At() {}
    u(At, pt);
    Ra(At);
    f = At.prototype;
    f.Fg = function() {
        return "button"
    };
    f.ye = function(a, b, c) {
        switch (b) {
            case 8:
            case 16:
                Y(a, "pressed", c);
                break;
            default:
            case 64:
            case 1:
                At.ua.ye.call(this, a, b, c)
        }
    };
    f.Uc = function(a) {
        var b = At.ua.Uc.call(this, a);
        this.wc(b, a.Cf());
        var c = a.Db();
        c && this.Dc(b, c);
        xt(a, 16) && this.ye(b, 16, yt(a, 16));
        return b
    };
    f.Wb = function(a, b) {
        b = At.ua.Wb.call(this, a, b);
        var c = this.Db(b);
        a.yg = c;
        a.ha = this.Cf(b);
        xt(a, 16) && this.ye(b, 16, yt(a, 16));
        return b
    };
    f.Db = function() {};
    f.Dc = function() {};
    f.Cf = function(a) {
        return a.title
    };
    f.wc = function(a, b) {
        a && (b ? a.title = b : a.removeAttribute("title"))
    };
    f.vc = function(a, b) {
        var c = dn(a),
            d = this.Xa() + "-collapse-left",
            e = this.Xa() + "-collapse-right",
            g = c ? e : d;
        b & 1 ? Bt(a, g) : Ct(a, g);
        c = c ? d : e;
        b & 2 ? Bt(a, c) : Ct(a, c)
    };
    f.Xa = function() {
        return "goog-button"
    };
    var Dt = {
        Mg: "mousedown",
        Ng: "mouseup",
        Mh: "mousecancel",
        Ow: "mousemove",
        Qw: "mouseover",
        Pw: "mouseout",
        Mw: "mouseenter",
        Nw: "mouseleave"
    };

    function Et(a, b) {
        if (!a) throw Error("Invalid class name " + a);
        if ("function" !== typeof b) throw Error("Invalid decorator function " + b);
        Ft[a] = b
    }
    var Gt = {},
        Ft = {};

    function Ht(a, b, c) {
        Vm.call(this, c);
        if (!b) {
            for (b = this.constructor; b;) {
                var d = Va(b);
                if (d = Gt[d]) break;
                b = (b = Object.getPrototypeOf(b.prototype)) && b.constructor
            }
            b = d ? "function" === typeof d.Ib ? d.Ib() : new d : null
        }
        this.o = b;
        this.Hg = void 0 !== a ? a : null;
        this.La = null
    }
    u(Ht, Vm);
    f = Ht.prototype;
    f.Hg = null;
    f.Ee = 0;
    f.Hi = 39;
    f.Xf = 255;
    f.Gi = 0;
    f.Wi = !0;
    f.Rd = null;
    f.wk = !0;
    f.Wm = null;

    function It(a, b) {
        a.kb && b != a.wk && Jt(a, b);
        a.wk = b
    }
    f.Dd = function() {
        return this.o
    };

    function Bt(a, b) {
        b && (a.Rd ? pb(a.Rd, b) || a.Rd.push(b) : a.Rd = [b], tt(a, b, !0))
    }

    function Ct(a, b) {
        b && a.Rd && rb(a.Rd, b) && (0 == a.Rd.length && (a.Rd = null), tt(a, b, !1))
    }
    f.Wa = function() {
        var a = this.o.Uc(this);
        this.Aa = a;
        vt(this.o, a, this.Bf());
        this.o.vk(a, !1);
        this.isVisible() || this.o.Ea(a, !1)
    };
    f.Bf = function() {
        return this.Wm
    };
    f.ug = function(a) {
        this.Wm = a
    };
    f.Ai = function(a) {
        this.La = a;
        var b = this.ma();
        b && this.o.Ai(b, a)
    };
    f.Mb = function() {
        return this.o.Oc(this.ma())
    };
    f.Oi = function(a) {
        return this.o.Ti(a)
    };
    f.Qb = function(a) {
        this.Aa = a = this.o.Wb(this, a);
        vt(this.o, a, this.Bf());
        this.o.vk(a, !1);
        this.Wi = "none" != a.style.display
    };
    f.Oa = function() {
        Ht.ua.Oa.call(this);
        wt(this.o, this, this.Aa);
        this.o.Ui(this);
        if (this.Hi & -2 && (this.wk && Jt(this, !0), xt(this, 32))) {
            var a = this.ma();
            if (a) {
                var b = this.s || (this.s = new kt);
                b.attach(a);
                Z(this).na(b, "key", this.Wc).na(a, "focus", this.er).na(a, "blur", this.Vi)
            }
        }
    };

    function Jt(a, b) {
        var c = Z(a),
            d = a.ma();
        b ? (c.na(d, Dt.Mg, a.qf).na(d, [Dt.Ng, Dt.Mh], a.re).na(d, "mouseover", a.Ve).na(d, "mouseout", a.Dl), a.ii != Oc && c.na(d, "contextmenu", a.ii), A && !a.va && (a.va = new Kt(a), ni(a, a.va))) : (c.hb(d, Dt.Mg, a.qf).hb(d, [Dt.Ng, Dt.Mh], a.re).hb(d, "mouseover", a.Ve).hb(d, "mouseout", a.Dl), a.ii != Oc && c.hb(d, "contextmenu", a.ii), A && (li(a.va), a.va = null))
    }
    f.oc = function() {
        Ht.ua.oc.call(this);
        this.s && ot(this.s);
        this.isVisible() && this.isEnabled() && this.o.Ch(this, !1)
    };
    f.ya = function() {
        Ht.ua.ya.call(this);
        this.s && (this.s.Ia(), delete this.s);
        delete this.o;
        this.va = this.Rd = this.Hg = null
    };
    f.Mc = function() {
        return this.Hg
    };

    function Lt(a, b) {
        a.o.Gg(a.ma(), b);
        a.Hg = b
    }

    function ut(a, b) {
        a.Hg = b
    }
    f.Yg = function() {
        var a = this.Mc();
        if (!a) return "";
        a = "string" === typeof a ? a : Array.isArray(a) ? a.map(Kf).join("") : If(a);
        return Fe(a)
    };
    f.isVisible = function() {
        return this.Wi
    };
    f.Ea = function(a, b) {
        return b || this.Wi != a && this.dispatchEvent(a ? "show" : "hide") ? ((b = this.ma()) && this.o.Ea(b, a), this.isEnabled() && this.o.Ch(this, a), this.Wi = a, !0) : !1
    };
    f.isEnabled = function() {
        return !yt(this, 1)
    };
    f.Ta = function(a) {
        var b = this.getParent();
        b && "function" == typeof b.isEnabled && !b.isEnabled() || !Mt(this, 1, !a) || (a || (Nt(this, !1), this.Zc(!1)), this.isVisible() && this.o.Ch(this, a), this.jd(1, !a, !0))
    };
    f.Zc = function(a) {
        Mt(this, 2, a) && this.jd(2, a)
    };
    f.isActive = function() {
        return yt(this, 4)
    };

    function Nt(a, b) {
        Mt(a, 4, b) && a.jd(4, b)
    }
    f.om = function(a) {
        Mt(this, 8, a) && this.jd(8, a)
    };
    f.sg = function(a) {
        Mt(this, 16, a) && this.jd(16, a)
    };
    f.Wj = function(a) {
        Mt(this, 32, a) && this.jd(32, a)
    };
    f.wd = function() {
        return yt(this, 64)
    };
    f.Vb = function(a) {
        Mt(this, 64, a) && this.jd(64, a)
    };

    function yt(a, b) {
        return !!(a.Ee & b)
    }
    f.jd = function(a, b, c) {
        c || 1 != a ? xt(this, a) && b != yt(this, a) && (this.o.jd(this, a, b), this.Ee = b ? this.Ee | a : this.Ee & ~a) : this.Ta(!b)
    };

    function xt(a, b) {
        return !!(a.Hi & b)
    }
    f.hc = function(a, b) {
        if (this.kb && yt(this, a) && !b) throw Error("Component already rendered");
        !b && yt(this, a) && this.jd(a, !1);
        this.Hi = b ? this.Hi | a : this.Hi & ~a
    };

    function Ot(a, b) {
        return !!(a.Xf & b) && xt(a, b)
    }

    function Mt(a, b, c) {
        return xt(a, b) && yt(a, b) != c && (!(a.Gi & b) || a.dispatchEvent(Xm(b, c))) && !a.Pd
    }
    f.Ve = function(a) {
        !Pt(a, this.ma()) && this.dispatchEvent("enter") && this.isEnabled() && Ot(this, 2) && this.Zc(!0)
    };
    f.Dl = function(a) {
        !Pt(a, this.ma()) && this.dispatchEvent("leave") && (Ot(this, 4) && Nt(this, !1), Ot(this, 2) && this.Zc(!1))
    };
    f.ii = Oc;

    function Pt(a, b) {
        return !!a.relatedTarget && Bf(b, a.relatedTarget)
    }
    f.qf = function(a) {
        this.isEnabled() && (Ot(this, 2) && this.Zc(!0), ui(a) && (Ot(this, 4) && Nt(this, !0), this.o && this.o.Um(this) && this.ma().focus()));
        ui(a) && a.preventDefault()
    };
    f.re = function(a) {
        this.isEnabled() && (Ot(this, 2) && this.Zc(!0), this.isActive() && this.Mf(a) && Ot(this, 4) && Nt(this, !1))
    };
    f.Mf = function(a) {
        Ot(this, 16) && this.sg(!yt(this, 16));
        Ot(this, 8) && this.om(!0);
        Ot(this, 64) && this.Vb(!this.wd());
        var b = new pi("action", this);
        a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.fm = a.fm);
        return this.dispatchEvent(b)
    };
    f.er = function() {
        Ot(this, 32) && this.Wj(!0)
    };
    f.Vi = function() {
        Ot(this, 4) && Nt(this, !1);
        Ot(this, 32) && this.Wj(!1)
    };
    f.Wc = function(a) {
        return this.isVisible() && this.isEnabled() && this.qe(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
    };
    f.qe = function(a) {
        return 13 == a.keyCode && this.Mf(a)
    };
    if ("function" !== typeof Ht) throw Error("Invalid component class " + Ht);
    if ("function" !== typeof pt) throw Error("Invalid renderer class " + pt);
    var Qt = Va(Ht);
    Gt[Qt] = pt;
    Et("goog-control", function() {
        return new Ht(null)
    });

    function Kt(a) {
        mi.call(this);
        this.i = a;
        this.j = !1;
        this.o = new Ri(this);
        ni(this, this.o);
        a = this.i.Aa;
        this.o.na(a, Dt.Mg, this.N).na(a, Dt.Ng, this.O).na(a, "click", this.s)
    }
    u(Kt, mi);
    var Rt = !A || Hc(9);
    Kt.prototype.N = function() {
        this.j = !1
    };
    Kt.prototype.O = function() {
        this.j = !0
    };

    function St(a, b) {
        if (!Rt) return a.button = 0, a.type = b, a;
        var c = document.createEvent("MouseEvents");
        c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
        return c
    }
    Kt.prototype.s = function(a) {
        if (this.j) this.j = !1;
        else {
            var b = a.Rb,
                c = b.button,
                d = b.type,
                e = St(b, "mousedown");
            this.i.qf(new si(e, a.currentTarget));
            e = St(b, "mouseup");
            this.i.re(new si(e, a.currentTarget));
            Rt || (b.button = c, b.type = d)
        }
    };
    Kt.prototype.ya = function() {
        this.i = null;
        Kt.ua.ya.call(this)
    };

    function Tt() {}
    u(Tt, At);
    Ra(Tt);
    f = Tt.prototype;
    f.Fg = function() {};
    f.Uc = function(a) {
        It(a, !1);
        a.Xf &= -256;
        a.hc(32, !1);
        return a.i.Ua("BUTTON", {
            "class": st(this, a).join(" "),
            disabled: !a.isEnabled(),
            title: a.Cf() || "",
            value: a.Db() || ""
        }, a.Yg() || "")
    };
    f.Ti = function(a) {
        return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
    };
    f.Wb = function(a, b) {
        It(a, !1);
        a.Xf &= -256;
        a.hc(32, !1);
        if (b.disabled) {
            var c = this.Xh(1);
            x(b, c)
        }
        return Tt.ua.Wb.call(this, a, b)
    };
    f.Ui = function(a) {
        Z(a).na(a.ma(), "click", a.Mf)
    };
    f.vk = function() {};
    f.Vm = function() {};
    f.Um = function(a) {
        return a.isEnabled()
    };
    f.Ch = function() {};
    f.jd = function(a, b, c) {
        Tt.ua.jd.call(this, a, b, c);
        (a = a.ma()) && 1 == b && (a.disabled = c)
    };
    f.Db = function(a) {
        return a.value
    };
    f.Dc = function(a, b) {
        a && (a.value = b)
    };
    f.ye = function() {};

    function Ut(a, b, c) {
        Ht.call(this, a, b || Tt.Ib(), c)
    }
    u(Ut, Ht);
    f = Ut.prototype;
    f.Db = function() {
        return this.yg
    };
    f.Dc = function(a) {
        this.yg = a;
        this.Dd().Dc(this.ma(), a)
    };
    f.Cf = function() {
        return this.ha
    };
    f.wc = function(a) {
        this.ha = a;
        this.Dd().wc(this.ma(), a)
    };
    f.vc = function(a) {
        this.Dd().vc(this, a)
    };
    f.ya = function() {
        Ut.ua.ya.call(this);
        delete this.yg;
        delete this.ha
    };
    f.Oa = function() {
        Ut.ua.Oa.call(this);
        if (xt(this, 32)) {
            var a = this.ma();
            a && Z(this).na(a, "keyup", this.qe)
        }
    };
    f.qe = function(a) {
        return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.Mf(a) : 32 == a.keyCode
    };
    Et("goog-button", function() {
        return new Ut(null)
    });

    function Vt(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        X.call(this);
        this.V = a;
        this.N = b;
        this.o = this.V.Za().Dh;
        this.oa = !!this.V.Za().Dh;
        this.va = !!this.V.Za().uh;
        this.s = sp(c);
        this.ha = tp(c);
        this.O = d;
        if (this.oa) {
            a: {
                a = this.V.mb();
                for (b = 0; b < this.o.length; b++)
                    if (c = ho(a, this.o[b].getId())) {
                        b: {
                            for (d = b + 1; d < this.o.length; d++) {
                                var e = ho(this.V.mb(), this.o[d].getId());
                                if (e) {
                                    d = e;
                                    break b
                                }
                            }
                            d = null
                        }
                        d = d ? eo(d) - 1 : eo(hb(fo(a)));e = eo(this.V.Ha());
                        if (e >= eo(c) && e <= d) {
                            a = b;
                            break a
                        }
                    } a = -1
            }
            this.ta = a
        }
    }
    n(Vt, X);
    f = Vt.prototype;
    f.render = function(a, b) {
        b = void 0 === b ? 2 : b;
        this.j = G("div");
        document.body.appendChild(this.j);
        V(r(this.fr, this));
        this.wa = a;
        this.oa ? (this.O && (this.ka = b), Wt(this)) : this.va ? (x(this.j, "base-image-toc-div"), a = this.V.Za().uh, (b = ho(this.V.mb(), a)) && Xt(this, b), 1 < this.V.Za().Tb && (a = go(this.V.mb(), a, 1)) && Xt(this, a), this.Xi()) : this.Ia()
    };
    f.fr = function() {
        var a = this;
        this.i.na(document, "click", this.Ia);
        this.i.na(document, "keydown", function(b) {
            13 != b.keyCode && 27 != b.keyCode || a.Ia()
        });
        this.i.na(this.V, "resize", this.Xi)
    };

    function Xt(a, b) {
        var c = new Ae(128, 0),
            d = F("IMG", {
                width: 128
            });
        x(d, "toc-page-image");
        a.i.na(d, "click", function() {
            a.V.tb(b)
        });
        oc && Ul() && a.i.na(d, "load", a.Xi);
        b.Ed(c) ? a.eq(d, b, c) : Uo(b, t(a.eq, d, b, c));
        a.j.appendChild(d)
    }
    f.eq = function(a, b, c) {
        cf(a, {
            src: b.Ed(c)
        })
    };

    function Wt(a) {
        var b = F("DIV", {
                "class": "toc-div"
            }),
            c;
        v(a.o, function(d, e) {
            d = Yt(a, d, e);
            b.appendChild(d);
            e == a.ta && (c = d)
        });
        c && V(function() {
            var d = c;
            300 < d.offsetTop + M(d).height && (d = void 0 !== d.previousElementSibling ? d.previousElementSibling : yf(d.previousSibling, !1)) && (a.j.scrollTop = d.offsetTop);
            c.focus()
        });
        a.j.appendChild(b);
        300 < M(a.j).height && (K(a.j, "height", "300px"), x(a.j, "scroll-toc-div-wide"));
        x(a.j, "scroll-toc-div");
        a.Xi();
        a.j.tabIndex = -1;
        um(a.j, "dialog");
        a.j.focus()
    }
    f.Xi = function() {
        var a = this.s ? this.ha ? 8 : 9 : 13,
            b = this.s ? this.ha ? 9 : 8 : 12,
            c;
        this.N instanceof Ut ? c = this.N.ma() : c = this.N;
        Yr(c, a, this.j, b, new B(0, -this.wa))
    };

    function Yt(a, b, c) {
        var d = b.getId(),
            e = ho(a.V.mb(), d);
        d = b.i;
        var g = a.o[c + 1] ? "" : "-last",
            h = "toc-middle-cell" + g,
            k = "toc-right-cell" + g;
        a.O ? g = F("A", {
            "class": e ? "toc-row" : "toc-disabled-row"
        }) : (g = F("DIV", {
            "class": e ? "toc-row" : "toc-disabled-row"
        }), um(g, "button"), Hf(g, !0));
        var l = G("div");
        x(l, "goog-inline-block");
        x(l, "toc-left-cell");
        c == a.ta && (x(l, Ul() ? "SPRITE_toc_selected_item_arrow_right" : "SPRITE_toc_selected_item_arrow_left"), x(g, "toc-row-selected"));
        c = G("div");
        x(c, "goog-inline-block");
        x(c, h);
        oc && !Gc("1.9") &&
            K(c, "overflow", "hidden");
        var m = b.ob(),
            p = a.s ? m : Me(m, 35);
        Q(c, ki(p));
        a.s && (c.title = m);
        m = G("div");
        x(m, "goog-inline-block");
        x(m, k);
        Q(m, ki(Pb(Pe(d)) ? "&nbsp;" : d));
        g.appendChild(l);
        g.appendChild(c);
        g.appendChild(m);
        e ? a.O ? (d = new S(window.location.href), T(Rj(Rj(d, "pg"), "printsec"), "jtp", b.i), a.ka && T(Rj(d, "zoom"), "zoom", a.ka), bj(g, mj(d.toString()))) : (a.i.na(g, "click", function() {
            a.V.tb(e)
        }), a.i.na(g, "keydown", function(w) {
            13 == w.keyCode && a.V.tb(e)
        })) : (Mb(c, h, "toc-middle-disabled-cell"), Mb(m, k, "toc-right-disabled-cell"),
            Y(g, "disabled", !0));
        return g
    }
    f.ya = function() {
        X.prototype.ya.call(this);
        I(this.j);
        this.N.focus()
    };

    function Zt(a) {
        Xq.call(this, 1);
        var b = new cr;
        b.ub(a);
        this.Va(b);
        Ol(this)
    }
    n(Zt, Xq);
    Zt.prototype.Yh = function() {
        return this.i[0]
    };
    Zt.prototype.O = function() {
        return this.Bb() || 0
    };
    Zt.prototype.ig = function() {
        return "fixed_width"
    };

    function $t(a) {
        var b = a.Eb(),
            c = new Ys(this, b);
        K(b, {
            overflow: "hidden"
        });
        Os.call(this, a, c);
        this.N = new rs(a);
        b = new Mp;
        Np(b, cr, this.N);
        this.ka = b;
        b = a.mb().i.aspectRatio();
        c = this.Fa();
        b = this.Ug(Math.min(2 * Math.floor(c.height * b), c.width));
        this.ad(b);
        this.Ca = new Ds(a, this);
        this.i.na(this.yb, "pagemodechange", this.gr);
        V(this.mc, 0, this)
    }
    u($t, Os);
    f = $t.prototype;
    f.oe = function() {
        var a = ub(au, this.yb.Za().oe());
        return new Pp(lb(a, qs))
    };
    f.kf = function(a) {
        $t.ua.kf.call(this, a);
        this.ka.Qa();
        this.mc()
    };
    f.Sc = function() {
        this.jf(1)
    };
    f.nd = function() {
        this.jf(-1)
    };
    f.gr = function() {
        this.ka.Qa();
        this.mc()
    };
    f.Sm = 2;
    f.Ug = function(a) {
        this.Fa();
        var b = this.yb.mb().i.aspectRatio();
        return new Zt(new Ae(a, Math.floor(Math.floor(a / 2) / b)))
    };
    var au = [180, 220, 280];
    $t.prototype.Xd = function() {
        var a = bu(this, this.yb.Ha()),
            b = this.N.i;
        if (b) {
            var c = this.Ca,
                d = b.Ud();
            c.N = d[0];
            c.ka = d[1];
            c = a[0];
            d = a[1];
            var e = !0;
            a = !0;
            b.va = c;
            b.Ca = d;
            ps(b);
            if (c) {
                if (c.s(64) || void 0 == d) a = !1
            } else b.N.sm();
            if (d) {
                if (d.s(32) || void 0 == c) e = !1
            } else b.ka.sm();
            c = e;
            d = a ? "" : "hidden";
            K(b.s, "visibility", c ? "" : "hidden");
            K(b.O, "visibility", d);
            c = c && a;
            b.wa.Ea(c);
            b.Da.Ea(c)
        }
        this.dispatchEvent("pagechange")
    };
    $t.prototype.Ud = function() {
        return this.N.i.Ud()
    };

    function bu(a, b) {
        return nb(a.yb.mb().ha, function(c) {
            return pb(c, b)
        })
    }
    $t.prototype.mc = function() {
        $t.ua.mc.call(this);
        this.Xd()
    };
    $t.prototype.va = function(a, b) {
        var c = this.yb.mb().ha;
        a = eo(a);
        for (var d, e, g = 0; g < c.length; ++g) {
            var h = c[g];
            if (h[0] && a == eo(h[0]) || h[1] && a == eo(h[1])) {
                d = g;
                break
            } else if (e) {
                var k = h[0] || h[1];
                if (a >= eo(e[0] || e[1]) && a < eo(k)) {
                    d = 0 < b ? g - b : g;
                    break
                }
            }
            e = h
        }
        return (b = c["number" === typeof d ? d + b : 0]) ? b[0] || b[1] : null
    };

    function cu(a) {
        this.Ec = a.title || "";
        this.ka = !!a.fullview;
        this.uh = a.table_of_contents_page_id || "";
        this.Tb = a.num_toc_pages || "";
        this.ha = a.initial_zoom_width_override;
        this.Na = a.max_resolution_image_width;
        this.Lc = !!a.paired_thumbnails;
        this.Ge = a.thumbnail_token || "";
        this.Pa = a.containing_bookshelves || [];
        this.Ca = a.volume_id || "";
        this.yc = a.other_issues_query || "";
        this.nb = !!a.is_browsable;
        this.Ob = !!a.is_public_domain;
        a.last_page && (this.ta = new vp(a.last_page));
        this.i = new Ae(a.page_width, a.page_height);
        this.oa = a.is_ebook ||
            !1;
        var b = a.additional_info,
            c = {};
        b && (c = b["[JsonBookInfo]"]);
        c.BuyLinks && (this.O = lb(c.BuyLinks, function(d) {
            return new Hs(d)
        }, this));
        this.Ka = c.AboutUrl;
        c.allowed_syndication_flags && (this.N = c.allowed_syndication_flags.allow_disabling_chrome);
        c.TocLine && (this.Dh = lb(c.TocLine, function(d) {
            return new it(d)
        }));
        c.SubscribeLink && (this.va = new Hs(c.SubscribeLink));
        c = null;
        b && (c = b["[NewspaperJSONVolumeInfo]"]);
        this.o = c;
        this.s = null == c ? null : new Hp(c.tile_h, c.tile_w, c.x_win, c.y_win);
        this.Od = a.sample_url || "";
        this.Nb =
            a.is_newspaper || !1;
        (this.wa = a.newspaper_tile_base_url) && this.s && Ip(this.s, r(this.Xv, this));
        this.Rf = c ? c.res_h : du;
        this.Da = this.Nb ? "fixed_height" : "fixed_width";
        this.ng = a.is_pre_order || !1;
        this.Jp = a.on_sale_date || "";
        this.Cj = a.volumeresult && a.volumeresult.has_flowing_text;
        this.Dj = a.volumeresult && a.volumeresult.has_scanned_text;
        this.La = a.volumeresult && a.volumeresult.can_download_pdf;
        this.Ma = a.volumeresult && a.volumeresult.can_download_epub;
        this.lb = a.volumeresult ? a.volumeresult.download_pdf_url : "";
        this.Sb =
            a.volumeresult ? a.volumeresult.download_epub_url : ""
    }
    n(cu, Jp);
    f = cu.prototype;
    f.ei = ba(16);
    f.wj = function() {
        "number" !== typeof this.j && (this.j = this.o.read_zm, this.j = "number" === typeof this.j ? this.o.read_zm : 4, this.j = we(this.j, -1, this.oe().length - 1));
        return this.j
    };

    function bt(a) {
        return a.ha ? a.ha : a.i && a.i.width ? a.i.width : 575
    }
    f.bc = function() {
        return this.Ca
    };
    f.yj = function() {
        return this.s
    };
    f.oe = function() {
        return this.Rf
    };
    f.ig = function() {
        return this.Da
    };
    f.Xv = function(a) {
        a = a.toString();
        var b = a.indexOf("?");
        0 <= b && (a = this.wa + a.substring(b));
        return new S(a)
    };
    f.ai = function() {
        return this.o ? this.o.focus_aid : null
    };
    f.ah = function() {
        var a = this.o.focus_x,
            b = this.o.focus_y;
        return void 0 !== a && void 0 !== b ? new B(a, b) : null
    };
    var du = [350, 410, 495, 575, 685, 800, 910, 1025];

    function eu(a) {
        X.call(this);
        this.N = a;
        this.j = null
    }
    n(eu, X);
    f = eu.prototype;
    f.render = function(a, b) {
        this.o = a;
        a = a.ma();
        var c = qh(a).y,
            d = M(a);
        c = c + d.height + 3;
        d = "";
        b && (d = qh(a).x);
        this.j = F("DIV", {
            "class": "linkbar-panel-div"
        });
        jh(this.j, d, c);
        this.ha = F("DIV", {
            "class": "SPRITE_close_v2 linkbar-panel-close"
        });
        this.j.appendChild(this.ha);
        oc && rc && !Gc("1.9") && (this.O = F("IFRAME", {
            style: "position: absolute;",
            ix: "0"
        }), this.N.appendChild(this.O));
        this.N.appendChild(this.j);
        this.O && (L(this.O, M(this.j)), jh(this.O, lh(this.j)));
        V(r(this.rm, this))
    };
    f.rm = function() {
        this.i.na(this.ha, "click", this.Ia);
        this.i.na(this.o, "action", this.ir);
        this.i.na(document, "mousedown", this.it)
    };
    f.ir = function() {
        yt(this.o, 16) || this.Ia()
    };
    f.it = function(a) {
        Bf(this.j, a.target) || Bf(this.o.ma(), a.target) || this.Ia()
    };
    f.ya = function() {
        X.prototype.ya.call(this);
        I(this.j);
        I(this.O)
    };
    f.ma = function() {
        return this.j
    };

    function fu(a, b, c) {
        eu.call(this, a);
        this.V = b;
        this.ka = c
    }
    n(fu, eu);
    fu.prototype.render = function(a, b) {
        eu.prototype.render.call(this, a, b);
        a = F("DIV", {
            style: "padding-top:5px; font-size: 13px;"
        });
        Q(a, ki("Paste link in <b>email</b> or <b>IM</b>"));
        this.ma().appendChild(a);
        this.s = G("input");
        L(this.s, "100%", "auto");
        this.ma().appendChild(this.s);
        this.ka && (a = F("DIV", {
            style: "font-size: 13px; padding-top: 7px;"
        }, "Embed"), this.ma().appendChild(a), this.Re = G("input"), L(this.Re, "100%", "auto"), this.ma().appendChild(this.Re));
        a = this.V.Ha();
        b = (new S(window.location)).i;
        var c = new S(a.qc());
        c.i = b;
        this.s.value = c.toString();
        V(t(gu, this.s));
        this.ka && (a = new S(a.qc()), T(a, "output", "embed"), this.Re.value = hu(a.toString()))
    };
    fu.prototype.rm = function() {
        eu.prototype.rm.call(this);
        this.i.na(this.s, "click", t(gu, this.s));
        this.ka && this.i.na(this.Re, "click", t(gu, this.Re))
    };

    function gu(a) {
        a.select()
    }

    function hu(a) {
        return Ce('<iframe frameborder="0" scrolling="no" style="border:0px" src="%s" width=500 height=500></iframe>', a)
    };

    function iu(a, b, c) {
        bs.call(this);
        this.Ec = a;
        this.j = b;
        this.i = c ? c : null;
        this.Bg(ju(this))
    }
    n(iu, bs);

    function ju(a) {
        var b = F("DIV");
        Jb(b, ["popup-menu", "goog-menu", "goog-menu-vertical"]);
        um(b, "dialog");
        b.setAttribute("tabindex", "-1");
        document.body.appendChild(b);
        if ("" != a.Ec) {
            var c = F("DIV", {
                "class": "popup-menu-header"
            });
            b.appendChild(c);
            var d = F("SPAN", {
                "class": "popup-menu-title"
            });
            J(d, a.Ec);
            c.appendChild(d);
            d = F("DIV", {
                "class": "popup-menu-close"
            });
            ym(d, "Close popup");
            var e = F("IMG");
            e.src = "/googlebooks/images/material/close_black_24dp.png";
            L(e, 24, 24);
            Y(e, "hidden", !0);
            d.appendChild(e);
            P(d, "click", function() {
                a.Ea(!1);
                a.i && a.i()
            });
            P(d, "keydown", function(g) {
                if (32 == g.keyCode || 13 == g.keyCode) a.Ea(!1), a.i && a.i()
            });
            um(d, "button");
            Hf(d, !0);
            c.appendChild(d)
        }
        b.appendChild(a.j);
        return b
    };

    function ku(a, b) {
        X.call(this);
        this.Ga = a;
        this.o = b;
        this.j = G("div");
        a.O.j.appendChild(this.j);
        x(this.j, "sitb_result");
        qc ? (K(this.j, "width", b.Fa().width + "px"), K(this.j, "min-height", b.Fa().height + "px")) : (jh(this.j, b.rd()), L(this.j, b.Fa()));
        a = G("div");
        x(a, "sitb-result-header");
        this.j.appendChild(a);
        this.N = G("div");
        x(this.N, "sitb-result-page-link");
        b = b.i.i;
        this.N.textContent = b ? "Page " + b : "Page";
        a.appendChild(this.N);
        this.s = G("div");
        x(this.s, "sitb-result-content");
        this.j.appendChild(this.s);
        if (b = ho(this.Ga.V.mb(),
                this.o.i.Sa())) {
            a = this.Ga.V.Ya().getQuery();
            var c = b.vb.snippetSrc;
            c && a == Ko(c) ? lu(this, c) : (a = b.zf(), "entity_page" == U(a, "source") ? T(a, "source", "entity_page_gbs_snippet") : T(a, "source", "gbs_snippet"), xp(b, a, r(this.ka, this)))
        } else mu(this)
    }
    n(ku, lm);
    ku.prototype.O = function(a) {
        this.Ga.wa(a.i, void 0)
    };
    ku.prototype.ka = function(a) {
        (a = a.vb.snippetSrc) ? lu(this, a): mu(this)
    };

    function lu(a, b) {
        rf(a.s);
        var c = G("IMG");
        c.src = b;
        nu(a);
        b = a.o.Fa().width - 25;
        K(c, {
            width: b + "px"
        });
        a.s.appendChild(c)
    }

    function nu(a) {
        x(a.j, "sitb-result-clickable");
        x(a.N, "sitb-result-link");
        var b = If(a.N);
        Q(a.N, ul(b + "&nbsp;&raquo;"));
        um(a.j, "link");
        Hf(a.j, !0);
        a.i.na(a.j, "click", r(a.O, a, a.o));
        a.i.na(a.j, "keydown", function(c) {
            32 != c.keyCode && 13 != c.keyCode || a.O(a.o)
        })
    }

    function mu(a) {
        rf(a.s);
        var b = G("div");
        x(b, "sitb-result-snippet");
        a.s.appendChild(b);
        qc || K(b, {
            width: Math.floor(.75 * a.o.Fa().width) + "px"
        });
        Q(b, sl.xd(a.o.i.j));
        b = G("div");
        x(b, "sitb-result-explanatory-link");
        a.s.appendChild(b);
        var c = ho(a.Ga.V.mb(), a.o.i.Sa());
        c && c.Ed() && !Cp(c, [4, 8, 16]) && c.s(2) ? (nu(a), Q(b, ul((qc ? "No image for result." : "We couldn't make an image for this result.") + "&nbsp;&nbsp;")), a = G("span"), c = qc || sp() ? "Click to view" : "Click to view the whole page.", Q(a, ul(c)), b.appendChild(a), x(a, "sitb-result-link")) :
            (Q(b, ul("No preview available for this page.&nbsp;&nbsp;")), qc || (a = G("a"), x(a, "sitb-result-buy-link"), Q(a, ul("Buy this book.")), b.appendChild(a), b = new S(window.location.href), T(b, "sitesec", "buy"), T(b, "source", "gbs_snippet"), Rj(b, "printsec"), a.href = b.toString()))
    }
    ku.prototype.Qa = function() {
        I(this.j);
        this.Ia()
    };

    function ou(a) {
        this.Ga = a
    }
    n(ou, op);
    ou.prototype.render = function(a) {
        return new ku(this.Ga, a)
    };

    function pu(a) {
        this.i = a
    }
    n(pu, Hl);

    function qu(a, b) {
        Xq.call(this, 1);
        this.N = a;
        this.ha = b;
        this.ik = this.Mi = this.Ni = 20;
        a.Gb && (a.Gb.forEach(r(this.s, this)), Ol(this))
    }
    n(qu, Xq);
    qu.prototype.s = function(a) {
        a = new pu(a);
        var b = Math.min(this.ha - 16, 600);
        a.ub(new Ae(b, Math.round(124 / 600 * b + 42)));
        this.Va(a)
    };

    function ru(a) {
        var b = a.Eb();
        K(b, "overflow", "hidden");
        var c = new Ys(this, b);
        Br.call(this, c);
        this.V = a;
        qc || Er(this, new Ss(this));
        this.i.na(this, "move", this.mc);
        var d = C("subscription-bar");
        d && (this.rl(d), V(function() {
            N(d, !1)
        }, 600));
        Dr(this, su(this));
        tu(b)
    }
    u(ru, Br);

    function uu(a, b) {
        b != a.N && (a.N = b, vu(a))
    }

    function tu(a) {
        K(a, "overflow", "auto");
        K(a, {
            overflowX: "auto",
            overflowY: "scroll"
        });
        cf(a, {
            dir: "ltr"
        })
    }

    function su(a) {
        var b = new Mp;
        Np(b, pu, new ou(a));
        return b
    }
    ru.prototype.resize = function() {
        vu(this)
    };

    function vu(a) {
        var b = new qu(a.N, a.Fa().width);
        a.ad(b);
        a.mc()
    }

    function wu(a, b) {
        a.wa = b
    };

    function xu(a) {
        this.i = a || {}
    }
    xu.prototype.tc = function() {
        return this.i
    };
    xu.prototype.ac = function(a) {
        var b = Wc(yu, function(c) {
            return c == a
        });
        this.i.v = b
    };
    xu.prototype.getQuery = function() {
        return this.i.q
    };
    var yu = {
        onepage: Zs,
        twopage: $t,
        thumbnail: ft,
        snippet: ru
    };

    function zu(a) {
        pi.call(this, "navigate");
        this.N = a
    }
    u(zu, pi);

    function Au() {
        return !(z("iPad") || z("Android") && !z("Mobile") || z("Silk")) && (z("iPod") || z("iPhone") || z("Android") || z("IEMobile"))
    };
    var Bu = new WeakMap;

    function Cu(a, b) {
        a = [a];
        for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
        return a.join("\v")
    };

    function Du(a, b, c, d) {
        R.call(this);
        if (a && !b) throw Error("Can't use invisible history without providing a blank page.");
        if (c) var e = c;
        else {
            e = "history_state" + Eu;
            var g = ae("input", {
                type: "text",
                name: e,
                id: e,
                style: kd("display:none")
            });
            document.write(Xd(g));
            e = C(e)
        }
        this.O = e;
        this.i = c ? jf(Ve(c)) : window;
        this.oa = b;
        A && !b && (this.oa = "https" == window.location.protocol ? rd(jd(kd("https:///"))) : rd(jd(kd('javascript:""'))));
        this.ab = new Ok(150);
        ni(this, this.ab);
        this.j = !a;
        this.o = new Ri(this);
        if (a || Fu) {
            if (d) var h = d;
            else {
                a = "history_iframe" +
                    Eu;
                b = {
                    id: a,
                    style: kd("display:none"),
                    sandbox: void 0
                };
                c = {};
                c.src = this.oa || null;
                c.srcdoc = null;
                d = {
                    sandbox: ""
                };
                e = {};
                for (var k in c) Object.prototype.hasOwnProperty.call(c, k) && (e[k] = c[k]);
                for (var l in d) Object.prototype.hasOwnProperty.call(d, l) && (e[l] = d[l]);
                if (b)
                    for (h in b)
                        if (Object.prototype.hasOwnProperty.call(b, h)) {
                            k = h.toLowerCase();
                            if (k in c) throw Error("");
                            k in d && delete e[k];
                            e[h] = b[h]
                        } h = ce("iframe", e);
                document.write(Xd(h));
                h = C(a)
            }
            this.ka = h;
            this.va = !0
        }
        Fu && (this.o.na(this.i, "load", this.vv), this.ta = this.ha = !1);
        this.j ? Gu(this, Hu(this), !0) : Iu(this, this.O.value);
        Eu++
    }
    u(Du, R);
    Du.prototype.Ub = !1;
    Du.prototype.N = !1;
    Du.prototype.s = null;
    var Ju = function(a, b) {
            function c(g) {
                var h = na(g);
                g = h.next().value;
                h = oa(h);
                return a.apply(g, h)
            }

            function d(g) {
                g = na(g);
                g.next();
                g = oa(g);
                return b(e, g)
            }
            b = void 0 === b ? Cu : b;
            var e = Va(a);
            return function() {
                var g = Ia.apply(0, arguments),
                    h = this || q,
                    k = Bu.get(h);
                k || (k = {}, Bu.set(h, k));
                return kc(k, [this].concat(g instanceof Array ? g : oa(na(g))), c, d)
            }
        }(function() {
            return A ? Hc(8) : "onhashchange" in q
        }),
        Fu = A && !Hc(8);
    f = Du.prototype;
    f.kh = null;
    f.ya = function() {
        Du.ua.ya.call(this);
        this.o.Ia();
        this.Ta(!1)
    };
    f.Ta = function(a) {
        if (a != this.Ub)
            if (Fu && !this.ha) this.ta = a;
            else if (a)
            if (oc && this.o.na(this.i, "pageshow", this.Cv), Ju() && this.j) this.o.na(this.i, "hashchange", this.xv), this.Ub = !0, this.dispatchEvent(new zu(Hu(this), !1));
            else {
                if (!A || Au() || this.ha) this.o.na(this.ab, "tick", r(this.Xm, this, !0)), this.Ub = !0, Fu || (this.s = Hu(this), this.dispatchEvent(new zu(Hu(this), !1))), this.ab.start()
            }
        else this.Ub = !1, Wi(this.o), this.ab.stop()
    };
    f.vv = function() {
        this.ha = !0;
        this.O.value && Iu(this, this.O.value, !0);
        this.Ta(this.ta)
    };
    f.Cv = function(a) {
        a.Rb.persisted && (this.Ta(!1), this.Ta(!0))
    };
    f.xv = function() {
        var a = Ku(this.i);
        a != this.s && Lu(this, a, !0)
    };

    function Hu(a) {
        return null != a.kh ? a.kh : a.j ? Ku(a.i) : Mu(a) || ""
    }

    function Nu(a, b) {
        Hu(a) != b && (a.j ? (Gu(a, b, !1), Ju() || A && !Au() && Iu(a, b, !1), a.Ub && a.Xm(!1)) : (Iu(a, b, !1), a.kh = a.s = a.O.value = b, a.dispatchEvent(new zu(b, !1))))
    }

    function Ku(a) {
        a = a.location.href;
        var b = a.indexOf("#");
        return 0 > b ? "" : a.substring(b + 1)
    }

    function Gu(a, b, c) {
        a = a.i.location;
        var d = a.href.split("#")[0],
            e = Zb(a.href, "#");
        if (Fu || e || b) d += "#" + b;
        d != a.href && (b = zd(d), c ? te(a, b) : se(a, b))
    }

    function Iu(a, b, c) {
        if (a.va || b != Mu(a))
            if (a.va = !1, b = encodeURIComponent(String(b)), A) {
                var d = Cf(a.ka);
                d.open("text/html", c ? "replace" : void 0);
                c = he(ae("title", {}, a.i.document.title), ae("body", {}, b));
                d.write(Xd(c));
                d.close()
            } else d = pd(a.oa).toString() + "#" + b, (a = a.ka.contentWindow) && (c ? te(a.location, d) : se(a.location, d))
    }

    function Mu(a) {
        if (A) return a = Cf(a.ka), a.body ? Ge(a.body.innerHTML) : null;
        var b = a.ka.contentWindow;
        if (b) {
            try {
                var c = Ge(Ku(b))
            } catch (d) {
                return a.N || (1 != a.N && Pk(a.ab, 1E4), a.N = !0), null
            }
            a.N && (0 != a.N && Pk(a.ab, 150), a.N = !1);
            return c || null
        }
        return null
    }
    f.Xm = function(a) {
        if (this.j) {
            var b = Ku(this.i);
            b != this.s && Lu(this, b, a)
        }
        if (!this.j || Fu)
            if (b = Mu(this) || "", null == this.kh || b == this.kh) this.kh = null, b != this.s && Lu(this, b, a)
    };

    function Lu(a, b, c) {
        a.s = a.O.value = b;
        a.j ? (Fu && Iu(a, b), Gu(a, b)) : Iu(a, b);
        a.dispatchEvent(new zu(Hu(a), c))
    }
    var Eu = 0;

    function Ou(a, b) {
        this.i = new Du;
        P(this.i, "navigate", r(this.N, this));
        this.V = a;
        this.j = b
    }
    Ou.prototype.N = function(a) {
        Pu(this, a.N)
    };

    function Pu(a, b) {
        if (!(a.s && "" == b || a.o))
            if ((A || pc) && "" == b) window.history.go(-2);
            else if (b) {
            var c = {},
                d = new Jj(b);
            v(d.ke(), function(e) {
                var g = d.get(e);
                g in Qu && (g = Qu[g]);
                c[e] = g
            });
            b = new xu(c);
            a.V.ac(yu[b.i.v] || Zs);
            As(a.j, !!b.i.f);
            void 0 !== b.getQuery() && Jo(a.V.Ya(), b.getQuery())
        }
    }
    Ou.prototype.Ta = function(a) {
        this.s = !0;
        this.i.Ta(a);
        A && (a = (new S(window.location)).i, Pu(this, a));
        this.s = !1
    };
    Ou.prototype.update = function() {
        var a = new xu;
        a.ac(this.V.ka);
        a.i.q = this.V.Ya().getQuery();
        a.i.f = this.j.Gf();
        a = Uj(a.tc()).toString();
        this.o = !0;
        Nu(this.i, a);
        this.o = !1
    };
    var Qu = {
        "true": !0,
        "false": !1
    };

    function Ru(a, b, c) {
        this.i = a;
        this.j = b;
        this.ka = c
    }
    u(Ru, Xr);
    Ru.prototype.Tc = function(a, b, c) {
        Yr(this.i, this.j, a, b, void 0, c, this.ka)
    };

    function Su(a, b, c, d) {
        Ru.call(this, a, b);
        this.o = c ? 5 : 0;
        this.N = d || void 0
    }
    u(Su, Ru);
    Su.prototype.O = function() {
        return this.o
    };
    Su.prototype.s = function(a) {
        this.o = a
    };
    Su.prototype.Tc = function(a, b, c, d) {
        var e = Yr(this.i, this.j, a, b, null, c, 10, d, this.N);
        if (e & 496) {
            var g = Tu(e, this.j);
            b = Tu(e, b);
            e = Yr(this.i, g, a, b, null, c, 10, d, this.N);
            e & 496 && (g = Tu(e, g), b = Tu(e, b), Yr(this.i, g, a, b, null, c, this.o, d, this.N))
        }
    };

    function Tu(a, b) {
        a & 48 && (b ^= 4);
        a & 192 && (b ^= 1);
        return b
    };

    function Uu(a, b, c, d, e, g) {
        a && (this.V = a, this.Ka = b);
        if (this.va = c) this.Nb = !1;
        this.lb = !!d;
        this.Sb = !!e;
        this.Tb = g;
        this.o = C("entity-page-toc");
        this.ka = C("entity-page-toc-label");
        this.nb = !1;
        if (this.Na = C("entity-page-pagination")) this.ta = C("entity-page-prev"), this.oa = C("entity-page-next");
        this.wa = C("entity-page-zoom-in");
        this.Ca = C("entity-page-zoom-out");
        this.Ma = C("entity-page-one-page");
        this.O = C("entity-page-two-page");
        this.N = C("entity-page-thumbnail");
        this.ha = C("entity-page-link");
        this.yc = C("entity-page-link-menu-content");
        this.La = C("entity-page-share-input");
        this.Ob = C("entity-page-embed-input");
        this.s = C("entity-page-clip");
        this.Da = C("entity-page-more");
        this.Lc = C("entity-page-more-menu-content");
        this.Pa = C("entity-page-volume-info");
        C("flow-top-div") && (this.j = C("flow-top-div"), this.i = (a = U(new S(window.location.href), "zoom")) ? Number(a) : 2, Vu(this, this.i));
        Wu(this);
        Xu(this);
        Yu(this);
        Zu(this);
        $u(this);
        av(this);
        bv(this);
        cv();
        dv(this);
        Ao(document, window, ev(this))
    }

    function Wu(a) {
        if (a.V) {
            var b = a.V.Za(),
                c = !!b.Dh;
            b = (b = b.uh) && a.V.mb() && !!ho(a.V.mb(), b);
            c || b ? (a.nb = !0, a.j ? (c = C("jtp").value || "Contents", J(a.ka, c)) : J(a.ka, a.V.Ha().Td() || "Contents"), fv(a.o, function() {
                var d = af("base-image-toc-div");
                af("scroll-toc-div") || d || (new Vt(a.V, a.o, a.Tb, !!a.j)).render(8, a.i)
            }), P(a.V, "pagechange", function() {
                var d = a.V.Ha().Td() || "Contents";
                a.ka && Q(a.ka, ul(d))
            })) : (J(a.ka, "Contents unavailable"), Jb(a.o, ["toolbar-button-disabled", "toc-button-unavailable"]), Y(a.o, "disabled", !0))
        } else J(a.ka,
            "Contents unavailable"), Jb(a.o, ["toolbar-button-disabled", "toc-button-unavailable"]), Y(a.o, "disabled", !0)
    }

    function Xu(a) {
        a.Na && (a.V && (fv(a.ta, function() {
            a.ta.hasAttribute("href") || a.V.wb("previous")
        }), fv(a.oa, function() {
            a.oa.hasAttribute("href") || a.V.wb("next")
        })), a.ta.setAttribute("title", "Previous Page"), a.oa.setAttribute("title", "Next Page"))
    }

    function Yu(a) {
        fv(a.wa, function() {
            a.j ? 5 > a.i && (a.i += 1, Vu(a, a.i)) : a.V && a.V.wb("zoomin")
        });
        fv(a.Ca, function() {
            a.j ? 1 < a.i && (--a.i, Vu(a, a.i)) : a.V && a.V.wb("zoomout")
        });
        a.wa.setAttribute("title", "Zoom in");
        a.Ca.setAttribute("title", "Zoom out")
    }

    function Zu(a) {
        fv(a.Ma, function() {
            gv(a, Zs)
        });
        a.Ma.setAttribute("title", "Single page view");
        a.lb ? (fv(a.O, function() {
            gv(a, $t)
        }), a.O.setAttribute("title", "Two page view")) : (y(a.O, "toolbar-button-disabled", !0), a.O.setAttribute("title", "Two page view unavailable"), Y(a.O, "disabled", !0));
        a.Sb ? (fv(a.N, function() {
            gv(a, ft)
        }), a.N.setAttribute("title", "Thumbnail view")) : (y(a.N, "toolbar-button-disabled", !0), a.N.setAttribute("title", "Thumbnail view unavailable"), Y(a.N, "disabled", !0));
        a.V && (P(a.V, "viewportmodechange",
            function() {
                hv(a)
            }), hv(a))
    }

    function $u(a) {
        var b = (new Vr(a.La)).ma();
        C("entity-page-share-copy-container").appendChild(b);
        b = (new Vr(a.Ob)).ma();
        C("entity-page-embed-copy-container").appendChild(b);
        var c = new iu("Link to this result", a.yc, function() {
            a.ha.focus()
        });
        cs(c, 5);
        c.setPosition(new Su(a.ha, 4, !0));
        c.Ea(!1);
        var d = new S(a.La.value);
        fv(a.ha, function() {
            if (c.mf || 150 > Date.now() - c.Kj) c.Ea(!1);
            else if (c.Ea(!0), c.ma().focus(), iv(a, d), a.La.value = d.toString(), a.V) {
                var e = new S(a.V.Ha().qc());
                Rj(e, "source");
                T(e, "output", "embed");
                a.Ob.value =
                    hu(e.toString())
            }
        });
        a.ha.setAttribute("title", "Link to this result")
    }

    function av(a) {
        if (a.va) {
            var b = C("entity-page-selection-bar"),
                c = C("entity-page-exit-selection"),
                d = C("entity-page-toolbar");
            fv(a.s, function() {
                a.Nb = !a.Nb;
                a.va(!0);
                y(b, "menu-hidden", !1);
                c.focus();
                Y(d, "hidden", !0)
            });
            fv(c, function() {
                a.va(!1);
                y(b, "menu-hidden", !0);
                a.s.focus();
                Y(d, "hidden", !1)
            });
            a.s.setAttribute("title", "Select a clip")
        } else y(a.s, "toolbar-button-disabled", !0), Y(a.s, "disabled", !0), a.s.setAttribute("title", "Select a clip unavailable")
    }

    function bv(a) {
        jv(a);
        var b = new iu("", a.Lc, function() {
            a.Da.focus()
        });
        cs(b, 4);
        b.setPosition(new Su(a.Da, 5, !0));
        x(b.ma(), "more-actions-popup");
        b.Ea(!1);
        fv(a.Da, function() {
            if (b.mf || 150 > Date.now() - b.Kj) b.Ea(!1), a.Da.focus();
            else {
                b.Ea(!0);
                b.ma().focus();
                var c = C("entity-page-toggle-viewport-mode-link");
                if (c && !a.j) {
                    var d = new S(c.href);
                    iv(a, d);
                    bj(c, mj(d.toString()))
                }
            }
        });
        a.Da.setAttribute("title", "More actions menu")
    }

    function cv() {
        var a = C("entity-page-play-redirect-popup-content");
        a && (a = new iu("You own this book", a, function() {}), x(a.ma(), "play-redirect-popup"), hn(a), a.Wk = !1, a.Ea(!0))
    }

    function jv(a) {
        var b = document.getElementById("entity-page-copyright-page-id");
        if (b && a.V) {
            var c = C("entity-page-copyright");
            b = If(b);
            var d = ho(a.V.mb(), b);
            fv(c, function() {
                a.V.tb(d)
            })
        }
    }

    function hv(a) {
        a.V.ka == Zs ? (kv(a, !0), lv(a, !0), mv(a, !0), nv(a, !0), ov(a, !0)) : a.V.ka == $t ? (kv(a, !0), lv(a, !0), mv(a, !0), nv(a, !0), ov(a, !0)) : (a.V.ka == ft ? (kv(a, !0), lv(a, !1), mv(a, !0), nv(a, !0)) : (kv(a, !1), lv(a, !1), mv(a, !1), nv(a, !1)), ov(a, !1));
        var b = a.V.ka;
        a.Na && b != ru && (y(a.Na, "one-page-view", b == Zs), y(a.Pa, "one-page-view", b == Zs), y(a.Na, "two-page-view", b == $t), y(a.Pa, "two-page-view", b == $t), y(a.Na, "thumbnail-view", b == ft), y(a.Pa, "thumbnail-view", b == ft))
    }

    function gv(a, b) {
        a.V && a.V.ka != b && (a.V.ac(b), !a.V.Ya().getQuery() && a.Ka && a.Ka.update())
    }

    function kv(a, b) {
        y(a.Ma, "toolbar-button-disabled", !b);
        Y(a.Ma, "disabled", !b);
        a.lb && (y(a.O, "toolbar-button-disabled", !b), Y(a.O, "disabled", !b));
        a.Sb && (y(a.N, "toolbar-button-disabled", !b), Y(a.N, "disabled", !b))
    }

    function lv(a, b) {
        y(a.Ca, "toolbar-button-disabled", !b);
        Y(a.Ca, "disabled", !b);
        y(a.wa, "toolbar-button-disabled", !b);
        Y(a.wa, "disabled", !b)
    }

    function mv(a, b) {
        y(a.ta, "toolbar-button-disabled", !b);
        Y(a.ta, "disabled", !b);
        y(a.oa, "toolbar-button-disabled", !b);
        Y(a.oa, "disabled", !b)
    }

    function nv(a, b) {
        a.nb && (y(a.o, "toolbar-button-disabled", !b), Y(a.o, "disabled", !b))
    }

    function ov(a, b) {
        a.va && (y(a.s, "toolbar-button-disabled", !b), Y(a.s, "disabled", !b))
    }

    function iv(a, b) {
        if (a.V) {
            var c = new S(a.V.Ha().qc());
            T(b, "pg", U(c, "pg"));
            a.j && T(b, "bksoutput", "text");
            a.V.Ya().getQuery() ? a.V.ka == ru ? (Rj(b, "dq"), Rj(b, "pg"), T(b, "bsq", a.V.Ya().getQuery())) : (Rj(b, "bsq"), T(b, "dq", a.V.Ya().getQuery())) : (Rj(b, "bsq"), Rj(b, "dq"))
        } else(a = (new S(window.location.href)).i) && T(b, "bsq", a)
    }

    function Vu(a, b) {
        y(a.j, "zoomstop1", 1 == b);
        y(a.j, "zoomstop2", 2 == b);
        y(a.j, "zoomstop3", 3 == b);
        y(a.j, "zoomstop4", 4 == b);
        y(a.j, "zoomstop5", 5 == b);
        y(a.Ca, "toolbar-button-disabled", 1 == b);
        y(a.wa, "toolbar-button-disabled", 5 == b);
        b = a.ta;
        var c = new S(b.href);
        T(c, "zoom", a.i);
        bj(b, mj(c.toString()));
        b = a.oa;
        c = new S(b.href);
        T(c, "zoom", a.i);
        bj(b, mj(c.toString()));
        if (b = C("entity-page-copyright")) c = new S(b.href), T(c, "zoom", a.i), bj(b, mj(c.toString()))
    }

    function fv(a, b) {
        P(a, "click", function() {
            b()
        });
        P(a, "keydown", function(c) {
            32 != c.keyCode && 13 != c.keyCode || b()
        })
    }

    function dv(a) {
        a.V && (Gi(a.V.Ja(), "move", function() {
            y(document.body, "opaque-background", !0)
        }), Gi(a.V.Eb(), "click", function() {
            y(document.body, "opaque-background", !0)
        }));
        Gi(document.body, "click", function() {
            y(document.body, "opaque-background", !0)
        })
    }

    function ev(a) {
        return {
            focusSearch: function() {
                C("search_form_input").focus()
            },
            updateSearch: function(b) {
                Jo(a.V.Ya(), b);
                a.Ka && a.Ka.update()
            },
            goToPage: function(b) {
                b && a.V.yd(b)
            }
        }
    };

    function pv(a) {
        this.i = a
    }
    Ra(pv);

    function qv(a, b) {
        a && (a.tabIndex = b ? 0 : -1)
    }
    f = pv.prototype;
    f.xk = function(a) {
        return "DIV" == a.tagName
    };

    function rv(a, b, c) {
        c.id && b.nh(c.id);
        var d = a.Ig(),
            e = !1,
            g = Gb(c);
        g && Array.prototype.forEach.call(g, function(h) {
            h == d ? e = !0 : h && (h == d + "-disabled" ? b.Ta(!1) : h == d + "-horizontal" ? sv(b, "horizontal") : h == d + "-vertical" && sv(b, "vertical"))
        }, a);
        e || x(c, d);
        tv(a, b, c);
        return c
    }

    function tv(a, b, c) {
        if (c)
            for (var d = c.firstChild, e; d && d.parentNode == c;) {
                e = d.nextSibling;
                if (1 == d.nodeType) {
                    var g = a.Zh(d);
                    g && (g.Aa = d, b.isEnabled() || g.Ta(!1), b.Ra(g), $m(g, d))
                } else d.nodeValue && "" != Qb(d.nodeValue) || c.removeChild(d);
                d = e
            }
    }
    f.Zh = function(a) {
        a: {
            a = Gb(a);
            for (var b = 0, c = a.length; b < c; b++) {
                var d = a[b];
                if (d = d in Ft ? Ft[d]() : null) {
                    a = d;
                    break a
                }
            }
            a = null
        }
        return a
    };
    f.yk = function(a) {
        a = a.ma();
        Eh(a, !0, oc);
        A && (a.hideFocus = !0);
        var b = this.i;
        b && um(a, b)
    };
    f.Ig = function() {
        return "goog-container"
    };
    f.Eo = function() {
        return "vertical"
    };

    function uv(a, b, c) {
        Vm.call(this, c);
        this.rf = b || pv.Ib();
        this.mg = a || this.rf.Eo()
    }
    u(uv, Vm);
    f = uv.prototype;
    f.Pl = null;
    f.Tf = null;
    f.rf = null;
    f.mg = null;
    f.Fe = !0;
    f.Ub = !0;
    f.Wg = !0;
    f.kc = -1;
    f.lc = null;
    f.ue = !1;
    f.Oe = null;

    function vv(a) {
        return a.Pl || a.ma()
    }
    f.Dd = function() {
        return this.rf
    };
    f.Wa = function() {
        var a = this.i,
            b = a.Ua,
            c = this.rf.Ig(),
            d = [c, "horizontal" == this.mg ? c + "-horizontal" : c + "-vertical"];
        this.isEnabled() || d.push(c + "-disabled");
        this.Aa = b.call(a, "DIV", d.join(" "))
    };
    f.Mb = function() {
        return this.ma()
    };
    f.Oi = function(a) {
        return this.rf.xk(a)
    };
    f.Qb = function(a) {
        this.Aa = rv(this.rf, this, a);
        "none" == a.style.display && (this.Fe = !1)
    };
    f.Oa = function() {
        uv.ua.Oa.call(this);
        an(this, function(b) {
            b.kb && wv(this, b)
        }, this);
        var a = this.ma();
        this.rf.yk(this);
        this.Ea(this.Fe, !0);
        Z(this).na(this, "enter", this.Bl).na(this, "highlight", this.kr).na(this, "unhighlight", this.mr).na(this, "open", this.mu).na(this, "close", this.jr).na(a, Dt.Mg, this.lr).na(Ve(a), [Dt.Ng, Dt.Mh], this.Mt).na(a, [Dt.Mg, Dt.Ng, Dt.Mh, "mouseover", "mouseout", "contextmenu"], this.Ht);
        this.Wg && xv(this, !0)
    };

    function xv(a, b) {
        var c = Z(a),
            d = vv(a);
        b ? c.na(d, "focus", a.Zi).na(d, "blur", a.Yi).na(a.Tf || (a.Tf = new kt(vv(a))), "key", a.Wc) : c.hb(d, "focus", a.Zi).hb(d, "blur", a.Yi).hb(a.Tf || (a.Tf = new kt(vv(a))), "key", a.Wc)
    }
    f.oc = function() {
        this.be(-1);
        this.lc && this.lc.Vb(!1);
        this.ue = !1;
        uv.ua.oc.call(this)
    };
    f.ya = function() {
        uv.ua.ya.call(this);
        this.Tf && (this.Tf.Ia(), this.Tf = null);
        this.rf = this.lc = this.Oe = this.Pl = null
    };
    f.Bl = function() {
        return !0
    };
    f.kr = function(a) {
        var b = en(this, a.target);
        if (-1 < b && b != this.kc) {
            var c = yv(this);
            c && c.Zc(!1);
            this.kc = b;
            c = yv(this);
            this.ue && Nt(c, !0);
            this.lc && c != this.lc && (xt(c, 64) ? c.Vb(!0) : this.lc.Vb(!1))
        }
        b = this.ma();
        null != a.target.ma() && Y(b, "activedescendant", a.target.ma().id)
    };
    f.mr = function(a) {
        a.target == yv(this) && (this.kc = -1);
        this.ma().removeAttribute("aria-activedescendant")
    };
    f.mu = function(a) {
        (a = a.target) && a != this.lc && a.getParent() == this && (this.lc && this.lc.Vb(!1), this.lc = a)
    };
    f.jr = function(a) {
        a.target == this.lc && (this.lc = null);
        var b = this.ma(),
            c = a.target.ma();
        b && yt(a.target, 2) && c && xm(b, c)
    };
    f.lr = function(a) {
        this.Ub && (this.ue = !0);
        var b = vv(this);
        b && Ff(b) ? b.focus() : a.preventDefault()
    };
    f.Mt = function() {
        this.ue = !1
    };
    f.Ht = function(a) {
        a: {
            var b = a.target;
            if (this.Oe)
                for (var c = this.ma(); b && b !== c;) {
                    var d = b.id;
                    if (d in this.Oe) {
                        b = this.Oe[d];
                        break a
                    }
                    b = b.parentNode
                }
            b = null
        }
        if (b) switch (a.type) {
            case Dt.Mg:
                b.qf(a);
                break;
            case Dt.Ng:
            case Dt.Mh:
                b.re(a);
                break;
            case "mouseover":
                b.Ve(a);
                break;
            case "mouseout":
                b.Dl(a);
                break;
            case "contextmenu":
                b.ii(a)
        }
    };
    f.Zi = function() {};
    f.Yi = function() {
        this.be(-1);
        this.ue = !1;
        this.lc && this.lc.Vb(!1)
    };
    f.Wc = function(a) {
        return this.isEnabled() && this.isVisible() && (0 != bn(this) || this.Pl) && this.qe(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
    };
    f.qe = function(a) {
        var b = yv(this);
        if (b && "function" == typeof b.Wc && b.Wc(a) || this.lc && this.lc != b && "function" == typeof this.lc.Wc && this.lc.Wc(a)) return !0;
        if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
        switch (a.keyCode) {
            case 27:
                if (this.Wg) vv(this).blur();
                else return !1;
                break;
            case 36:
                zv(this);
                break;
            case 35:
                Av(this);
                break;
            case 38:
                if ("vertical" == this.mg) Bv(this);
                else return !1;
                break;
            case 37:
                if ("horizontal" == this.mg) dn(this) ? Cv(this) : Bv(this);
                else return !1;
                break;
            case 40:
                if ("vertical" == this.mg) Cv(this);
                else return !1;
                break;
            case 39:
                if ("horizontal" == this.mg) dn(this) ? Bv(this) : Cv(this);
                else return !1;
                break;
            default:
                return !1
        }
        return !0
    };

    function wv(a, b) {
        var c = b.ma();
        c = c.id || (c.id = b.getId());
        a.Oe || (a.Oe = {});
        a.Oe[c] = b
    }
    f.Ra = function(a, b) {
        uv.ua.Ra.call(this, a, b)
    };
    f.Pg = function(a, b, c) {
        a.Gi |= 2;
        a.Gi |= 64;
        a.hc(32, !1);
        It(a, !1);
        var d = a.getParent() == this ? en(this, a) : -1;
        uv.ua.Pg.call(this, a, b, c);
        a.kb && this.kb && wv(this, a);
        a = d; - 1 == a && (a = bn(this));
        a == this.kc ? this.kc = Math.min(bn(this) - 1, b) : a > this.kc && b <= this.kc ? this.kc++ : a < this.kc && b > this.kc && this.kc--
    };
    f.removeChild = function(a, b) {
        if (a = "string" === typeof a ? Ym(this, a) : a) {
            var c = en(this, a); - 1 != c && (c == this.kc ? (a.Zc(!1), this.kc = -1) : c < this.kc && this.kc--);
            var d = a.ma();
            d && d.id && this.Oe && (c = this.Oe, d = d.id, d in c && delete c[d])
        }
        a = uv.ua.removeChild.call(this, a, b);
        It(a, !0);
        return a
    };

    function sv(a, b) {
        if (a.ma()) throw Error("Component already rendered");
        a.mg = b
    }
    f.isVisible = function() {
        return this.Fe
    };
    f.Ea = function(a, b) {
        if (b || this.Fe != a && this.dispatchEvent(a ? "show" : "hide")) {
            this.Fe = a;
            var c = this.ma();
            c && (N(c, a), this.Wg && qv(vv(this), this.Ub && this.Fe), b || this.dispatchEvent(this.Fe ? "aftershow" : "afterhide"));
            return !0
        }
        return !1
    };
    f.isEnabled = function() {
        return this.Ub
    };
    f.Ta = function(a) {
        this.Ub != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.Ub = !0, an(this, function(b) {
            b.yq ? delete b.yq : b.Ta(!0)
        })) : (an(this, function(b) {
            b.isEnabled() ? b.Ta(!1) : b.yq = !0
        }), this.ue = this.Ub = !1), this.Wg && qv(vv(this), a && this.Fe))
    };

    function Dv(a, b) {
        b != a.Wg && a.kb && xv(a, b);
        a.Wg = b;
        a.Ub && a.Fe && qv(vv(a), b)
    }
    f.be = function(a) {
        (a = cn(this, a)) ? a.Zc(!0): -1 < this.kc && yv(this).Zc(!1)
    };
    f.Zc = function(a) {
        this.be(en(this, a))
    };

    function yv(a) {
        return cn(a, a.kc)
    }

    function zv(a) {
        Ev(a, function(b, c) {
            return (b + 1) % c
        }, bn(a) - 1)
    }

    function Av(a) {
        Ev(a, function(b, c) {
            b--;
            return 0 > b ? c - 1 : b
        }, 0)
    }

    function Cv(a) {
        Ev(a, function(b, c) {
            return (b + 1) % c
        }, a.kc)
    }

    function Bv(a) {
        Ev(a, function(b, c) {
            b--;
            return 0 > b ? c - 1 : b
        }, a.kc)
    }

    function Ev(a, b, c) {
        c = 0 > c ? en(a, a.lc) : c;
        var d = bn(a);
        c = b.call(a, c, d);
        for (var e = 0; e <= d;) {
            var g = cn(a, c);
            if (g && a.ho(g)) {
                a.be(c);
                break
            }
            e++;
            c = b.call(a, c, d)
        }
    }
    f.ho = function(a) {
        return a.isVisible() && a.isEnabled() && xt(a, 2)
    };

    function Fv(a) {
        Vm.call(this);
        this.o = a ? a : null;
        var b = this.i;
        a = b.ma("gb-mobile-buy-panel");
        var c = b.ma("gb-mobile-buy-button"),
            d = b.ma("gb-mobile-buy-close-button");
        b = b.ma("volume-left");
        a && c && d && b && (this.j = new uv, $m(this.j, a), this.N = c, this.ha = d, $m(this, b), this.j.Ea(!1))
    }
    n(Fv, Vm);
    Fv.prototype.Oa = function() {
        var a = this;
        Z(this).na(this.N, "click", this.s).na(this.N, "keydown", function(b) {
            32 != b.keyCode && 13 != b.keyCode || a.s()
        }).na(this.ha, "click", this.s).na(this.ha, "keydown", function(b) {
            32 != b.keyCode && 13 != b.keyCode || a.s()
        })
    };
    Fv.prototype.s = function() {
        if (this.j.isVisible()) {
            this.j.Ea(!1);
            Kb(this.j.Mb(), "gb-mobile-buy-panel-visible");
            this.o && (this.o.style.overflowX = "auto", this.o.style.overflowY = "scroll");
            this.N.focus();
            for (var a = na(document.querySelectorAll('[role="alert"],#volume-center,.aria-hide-on-menu-open')), b = a.next(); !b.done; b = a.next()) b.value.removeAttribute("aria-hidden")
        } else this.j.Ea(!0), x(this.j.Mb(), "gb-mobile-buy-panel-visible"), this.o && (this.o.style.overflowX = "hidden", this.o.style.overflowY = "hidden"), this.j.Mb().focus(),
            Gv(this)
    };

    function Gv(a) {
        var b = a.j.Mb().querySelectorAll('[role="button"],[href]'),
            c = b[0],
            d = b[b.length - 1];
        Z(a).na(a.j.Mb(), "keydown", function(e) {
            9 == e.keyCode && (e.shiftKey ? document.activeElement === c && (e.preventDefault(), d.focus()) : document.activeElement === d && (e.preventDefault(), c.focus()))
        });
        a = na(document.querySelectorAll('[role="alert"],#volume-center,.aria-hide-on-menu-open'));
        for (b = a.next(); !b.done; b = a.next()) Y(b.value, "hidden", !0)
    };

    function Hv(a) {
        Jq.call(this, a)
    }
    n(Hv, Jq);
    f = Hv.prototype;
    f.getEnableSsEngine = function() {
        return Eq(this, 2)
    };
    f.getEnableAwr = function() {
        return Eq(this, 3)
    };
    f.getEnableHelpSuggestions = function() {
        return Eq(this, 4)
    };
    f.getAlohaAutoGaRollout = function() {
        return Eq(this, 5)
    };
    f.getEnableConfigurator = function() {
        return Eq(this, 6)
    };
    f.getEnableMweb = function() {
        return Eq(this, 7)
    };
    f.getEnableCtlConsentCheckbox = function() {
        return Eq(this, 8)
    };
    f.getEnableIframe = function() {
        return Eq(this, 9)
    };
    f.getEnableScreenshotNudge = function() {
        return Eq(this, 10)
    };
    f.getEnableWebStartupConfigEndpoint = function() {
        return Eq(this, 11)
    };
    f.getEnableJunkNudge = function() {
        return Eq(this, 12)
    };
    f.getEnableConfiguratorLocale = function() {
        return Eq(this, 13)
    };
    f.getEnableTinyNoPointer = function() {
        return Eq(this, 14)
    };
    f.getEnableSupportSessionLogging = function() {
        return Eq(this, 15)
    };

    function Iv(a) {
        Jq.call(this, a)
    }
    n(Iv, Jq);

    function Jv(a) {
        return Kv.some(function(b) {
            return b.test(a)
        })
    }
    var Kv = [/https:\/\/sandbox\.google\.com\/tools\/feedback/, /https:\/\/.*\.googleusercontent\.com\/inapp/];
    var Lv = "af am ar-EG ar-JO ar-MA ar-SA ar-XB ar az be bg bn bs ca cs cy da de-AT de-CH de el en en-GB en-AU en-CA en-IE en-IN en-NZ en-SG en-XA en-XC en-ZA es es-419 es-AR es-BO es-CL es-CO es-CR es-DO es-EC es-GT es-HN es-MX es-NI es-PA es-PE es-PR es-PY es-SV es-US es-UY es-VE et eu fa fi fil fr-CA fr-CH fr gl gsw gu he hi hr hu hy id in is it iw ja ka kk km kn ko ky ln lo lt lv mk ml mn mo mr ms my nb ne nl no pa pl pt pt-BR pt-PT ro ru si sk sl sq sr-Latn sr sv sw ta te th tl tr uk ur uz vi zh zh-CN zh-HK zh-TW zu".split(" ");

    function Mv(a) {
        var b;
        return null == (b = a.formContent) ? void 0 : b.locale
    };
    var Nv = ma(["https://www.gstatic.com/uservoice/feedback/client/web/", "/main_binary__", ".js"]);

    function Ov(a) {
        var b = Mv(a);
        b = (b && Lv.includes(b) ? Mv(a) : "en").replaceAll("-", "_").toLowerCase();
        var c;
        a = (null == (c = a.initializationData) ? 0 : c.useNightlyRelease) ? "nightly" : "live";
        return $o(Nv, a, b)
    };
    var Pv;

    function Qv(a, b, c) {
        if (Pv) return Pv;
        var d = Ov(a);
        return Pv = b.feedbackV2GlobalObject ? Promise.resolve(b.feedbackV2GlobalObject) : new Promise(function(e, g) {
            var h = G("SCRIPT");
            h.src = pd(d);
            hj(h);
            h.onload = function() {
                b.feedbackV2GlobalObject ? e(b.feedbackV2GlobalObject) : g("feedbackV2GlobalObject not found on window.")
            };
            h.onerror = function() {
                g("Feedback binary script tag failed to load: " + d.toString())
            };
            c.body.appendChild(h)
        })
    }

    function Rv(a, b, c, d, e) {
        e = void 0 === e ? !0 : e;
        var g, h, k, l, m;
        return Ha(function(p) {
            switch (p.j) {
                case 1:
                    g = Date.now();
                    var w = Qv(a, c, d);
                    p.j = 2;
                    return {
                        value: w
                    };
                case 2:
                    h = p.N;
                    if (!(e || (null == (l = a.initializationData) ? 0 : l.useNightlyRelease) || (null == (m = a.initializationData) ? 0 : m.isLocalServer))) {
                        k = h.initializeFeedbackClient(a, g, b);
                        p.j = 3;
                        break
                    }
                    w = h.initializeFeedbackClientAsync(a, g, b);
                    p.j = 4;
                    return {
                        value: w
                    };
                case 4:
                    k = p.N;
                case 3:
                    return k.initiateAloha(), p.return(k)
            }
        })
    }

    function Sv(a, b, c) {
        var d = !0;
        d = void 0 === d ? !0 : d;
        var e, g, h, k;
        Ha(function(l) {
            g = e = c || q;
            if (g.isFormOpened) throw h = Error("Form is either loading or already opened"), h.name = "DuplicateFormError", h;
            g.isFormOpened = !0;
            a.callbacks = a.callbacks || {};
            k = a.callbacks.onClose || function() {};
            a.callbacks.onClose = function(m) {
                g.isFormOpened = !1;
                k(m)
            };
            try {
                return l.return(Rv(a, b, g, e.document, d))
            } catch (m) {
                throw g.isFormOpened = !1, m;
            }
        })
    };

    function Tv(a, b) {
        return Ha(function(c) {
            return c.return(new Promise(function(d) {
                var e = Uv(null != b ? b : "") + "/aloha_form_properties?productId=" + a;
                Vk(e, function(g) {
                    g = g.target;
                    var h = null;
                    try {
                        h = Lq(Iv, JSON.stringify(el(g, ")]}'\n")))
                    } catch (k) {
                        g = new Iv, h = new Hv, h = Cq(h, 5), h = Cq(h, 2), h = Cq(h, 4), h = Cq(h, 8), h = Cq(h, 9), h = Cq(h, 7), h = Cq(h, 10), h = Cq(h, 12), h = Cq(h, 13), h = Cq(h, 14), h = Cq(h, 15), oq(g), null == h && (h = void 0), h = Aq(g, 1, h)
                    }
                    d(h)
                }, "GET", "", {}, 2E3, !0)
            }))
        })
    }

    function Uv(a) {
        return Jv(a) ? a : "https://www.google.com/tools/feedback"
    };

    function Vv(a, b, c) {
        a.timeOfStartCall = (new Date).getTime();
        var d = c || q,
            e = d.document,
            g = a.nonce || re(d);
        g && !a.nonce && (a.nonce = g);
        if ("help" == a.flow) {
            var h = Qa("document.location.href", d);
            !a.helpCenterContext && h && (a.helpCenterContext = h.substring(0, 1200));
            h = !0;
            if (b && JSON && JSON.stringify) {
                var k = JSON.stringify(b);
                (h = 1200 >= k.length) && (a.psdJson = k)
            }
            h || (b = {
                invalidPsd: !0
            })
        }
        b = [a, b, c];
        d.GOOGLE_FEEDBACK_START_ARGUMENTS = b;
        c = a.feedbackServerUri || "//www.google.com/tools/feedback";
        if (h = d.GOOGLE_FEEDBACK_START) h.apply(d,
            b);
        else {
            d = c + "/load.js?";
            for (var l in a) b = a[l], null == b || Ua(b) || (d += encodeURIComponent(l) + "=" + encodeURIComponent(b) + "&");
            a = Of(Te(e), "SCRIPT");
            g && a.setAttribute("nonce", g);
            g = rd(d);
            a.src = pd(g);
            hj(a);
            e.body.appendChild(a)
        }
    }

    function Wv(a, b, c) {
        try {
            "submit" === a.flow || "help" === a.flow ? Vv(a, b, c) : Tv(a.productId, a.feedbackServerUri).then(function(d) {
                var e = void 0 === e ? !1 : e;
                var g = zq(d, 1, e);
                var h = !1;
                var k = null == g || "object" !== typeof g || (h = Array.isArray(g)) || g.Mj !== kq ? h ? new Hv(g) : void 0 : g;
                k !== g && null != k && (Aq(d, 1, k, e), cq(k.Zb, dq(d.Zb) & 18));
                g = k;
                null == g || gq(d.Zb) || (k = Nq(g), k !== g && (g = k, Aq(d, 1, g, e)));
                d = g;
                null != d && d.getAlohaAutoGaRollout() && (!qc || d.getEnableMweb() || d.getEnableTinyNoPointer() && a.tinyNoPointer) ? (e = c || q, g = "DEV" === a.serverEnvironment,
                    k = c || q, k = a.nonce || re(k), g = {
                        integrationKeys: {
                            productId: a.productId,
                            feedbackBucket: a.bucket
                        },
                        callbacks: {
                            onClose: a.callback,
                            onLoad: a.onLoadCallback
                        },
                        formContent: {
                            locale: a.locale,
                            disableScreenshot: a.disableScreenshotting,
                            productDisplayName: void 0,
                            announcement: void 0,
                            issueCategories: void 0,
                            includeSeveritySelection: void 0,
                            customImageSrc: void 0,
                            thankYouMessage: void 0,
                            zx: void 0,
                            defaultFormInputValues: void 0,
                            defaultFormInputValuesString: void 0,
                            abuseLink: a.abuseLink
                        },
                        initializationData: {
                            isLocalServer: g,
                            nonce: k,
                            useNightlyRelease: g,
                            feedbackJsUrl: void 0,
                            feedbackCssUrl: void 0,
                            feedbackJsUrlSerialized: void 0,
                            feedbackCssUrlSerialized: void 0,
                            submissionServerUri: a.feedbackServerUri,
                            colorScheme: a.colorScheme
                        },
                        extraData: {
                            productVersion: a.productVersion,
                            authUser: a.authuser,
                            configuratorId: a.configuratorId,
                            customZIndex: a.customZIndex,
                            tinyNoPointer: a.tinyNoPointer,
                            allowNonLoggedInFeedback: a.allowNonLoggedInFeedback,
                            enableAnonymousFeedback: a.enableAnonymousFeedback
                        }
                    }, b && (k = new Map(Object.entries(b)), g.extraData.productSpecificData =
                        k), Sv(g, d, e)) : Vv(a, b, c)
            }, function(d) {
                d && "DuplicateFormError" !== d.name && Vv(a, b, c)
            })
        } catch (d) {
            Vv(a, b, c)
        }
    }
    bb("userfeedback.api.startFeedback", Wv);

    function Xv(a) {
        Vm.call(this);
        if (this.o = C("gb-mobile-appbar-back-button"))
            if (Z(this).na(this.o, "click", this.s), yc && Zb(bc(), "GSA")) {
                x(this.o, "igsa-hide");
                var b = this.i.ma("gb-mobile-appbar-logo");
                x(b, "igsa-shift")
            }(this.j = C("gb-mobile-appbar-more")) && Yv(this);
        new Fv(a)
    }
    n(Xv, Vm);

    function Yv(a) {
        var b = C("gb-mobile-more-menu");
        if (b) {
            var c = new bs(b);
            cs(c, 4);
            c.setPosition(new Su(a.j, 4));
            c.Ea(!1);
            P(a.j, "click", function() {
                Zv(b, c)
            });
            P(a.j, "keydown", function(d) {
                32 != d.keyCode && 13 != d.keyCode || Zv(b, c)
            })
        } else I(a.j)
    }

    function Zv(a, b) {
        Kb(a, "more-menu-hidden");
        b.Ea(!0);
        b.ma().focus();
        a = $e("more-menu-link");
        for (var c = 0; c < a.length; c++) P(a[c], "click", function() {
            b.Ea(!1)
        }), P(a[c], "keydown", function(d) {
            32 != d.keyCode && 13 != d.keyCode || b.Ea(!1)
        })
    }
    Xv.prototype.s = function() {
        window.history.back();
        uc && eg && 1 == window.history.length && window.close()
    };
    bb("_OC_startFeedback", Wv);

    function $v(a) {
        R.call(this);
        a = a || Te();
        this.i = a.Ua(A ? "DIV" : "IFRAME", {
            style: "position:absolute;width:9em;height:9em;top:-99em",
            tabIndex: -1,
            "aria-hidden": "true"
        });
        a = a.i.body;
        a.insertBefore(this.i, a.firstChild);
        if (A) var b = this.i;
        else a: {
            a = this.i;
            try {
                b = a.contentWindow || (a.contentDocument ? jf(a.contentDocument) : null);
                break a
            } catch (c) {}
            b = null
        }
        b = this.s = b;
        oc && (a = b.document, a.open(), a.close());
        P(b, "resize", this.j, !1, this);
        this.o = this.i.offsetWidth
    }
    u($v, R);
    $v.prototype.ya = function() {
        $v.ua.ya.call(this);
        Ni(this.s, "resize", this.j, !1, this);
        this.s = null;
        I(this.i);
        delete this.i
    };
    $v.prototype.j = function() {
        var a = this.i.offsetWidth;
        this.o != a && (this.o = a, this.dispatchEvent("fontsizechange"))
    };

    function aw(a) {
        this.j = a;
        a = r(this.o, this);
        this.i = new oj;
        P(this.i, "resize", a);
        var b = new $v;
        P(b, "fontsizechange", a);
        P(window, "DOMContentLoaded", r(this.resize, this))
    }
    aw.prototype.o = function() {
        this.resize();
        V(r(this.resize, this), 100)
    };
    aw.prototype.resize = function() {
        var a = this.i.Fa(),
            b = Math.round(qh(this.j).y);
        this.j.style.height = a.height - b + "px"
    };

    function bw(a) {
        var b = null;
        if (a = C(a)) b = new aw(a), b.resize();
        return b
    };
    var cw = RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"),
        dw = RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]"),
        ew = /^http:\/\/.*/,
        fw = /\s+/,
        gw = /[\d\u06f0-\u06f9]/;
    var hw = {},
        iw = {};

    function jw() {
        throw Error("Do not instantiate directly");
    }
    jw.prototype.ko = null;
    jw.prototype.Mc = function() {
        return this.content
    };
    jw.prototype.toString = function() {
        return this.content
    };

    function kw() {
        jw.call(this)
    }
    u(kw, jw);
    kw.prototype.Zf = hw;

    function lw(a) {
        if (null != a) switch (a.ko) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function mw(a) {
        return null != a && a.Zf === hw ? a : a instanceof Vd ? nw(Wd(a)) : a instanceof Vd ? nw(Xd(a).toString()) : nw(String(String(a)).replace(ow, pw), lw(a))
    }
    var nw = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            void 0 !== d && (c.ko = d);
            return c
        }
    }(kw);

    function qw(a) {
        if (null != a && a.Zf === hw) {
            var b = String;
            a = String(a.Mc()).replace(rw, "").replace(sw, "&lt;");
            b = b(a).replace(tw, pw)
        } else b = String(a).replace(ow, pw);
        return b
    }
    var uw = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\v": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function pw(a) {
        return uw[a]
    }
    var ow = /[\x00\x22\x26\x27\x3c\x3e]/g,
        tw = /[\x00\x22\x27\x3c\x3e]/g,
        vw = /^(?!on|src|(?:action|archive|background|cite|classid|codebase|content|data|dsync|href|http-equiv|longdesc|style|usemap)\s*$)(?:[a-z0-9_$:-]*)$/i,
        rw = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        sw = /</g;
    /*
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    function ww(a, b, c, d) {
        a = a(b || xw, c);
        d = Of(d || Te(), "DIV");
        if (Ua(a))
            if (a instanceof jw) {
                if (a.Zf !== hw) throw Error("Sanitized content was not of kind HTML.");
                a = Zd(a.toString())
            } else a = Yd("zSoyz");
        else a = Yd(String(a));
        oe(d, a);
        1 == d.childNodes.length && (a = d.firstChild, 1 == a.nodeType && (d = a));
        return d
    }
    var xw = {};

    function yw(a) {
        a = a || {};
        var b = a.attributes,
            c = a.content,
            d = a.disabled,
            e = a.id,
            g = a.xx,
            h = a.title,
            k = a.Bw,
            l = a.value,
            m = nw;
        e = '<div role="button"' + (e ? ' id="' + qw(e) + '"' : "") + ' class="';
        a = a || {};
        var p = a.bx,
            w = a.style,
            D = a.width,
            E = "goog-inline-block jfk-button ";
        switch (Ua(w) ? w.toString() : w) {
            case 0:
                E += "jfk-button-standard";
                break;
            case 2:
                E += "jfk-button-action";
                break;
            case 3:
                E += "jfk-button-primary";
                break;
            case 1:
                E += "jfk-button-default";
                break;
            case 4:
                E += "jfk-button-flat";
                break;
            case 5:
                E += "jfk-button-mini";
                break;
            case 6:
                E += "jfk-button-contrast";
                break;
            default:
                E += "jfk-button-standard"
        }
        E += ((D && D.Xu && (1).Xu ? D.Zf !== (1).Zf ? 0 : D.toString() === (1).toString() : 1 == D) ? " jfk-button-narrow" : "") + (a.checked ? " jfk-button-checked" : "") + (p ? " " + p : "") + (a.disabled ? " jfk-button-disabled" : "");
        d = e + qw(E) + '"' + (d ? ' aria-disabled="true"' : ' tabindex="' + (g ? qw(g) : "0") + '"') + (h ? k ? ' data-tooltip="' + qw(h) + '"' : ' title="' + qw(h) + '"' : "") + (l ? ' value="' + qw(l) + '"' : "");
        b ? (null != b && b.Zf === iw ? b = b.Mc() : (b = String(b), b = vw.test(b) ? b : "zSoyz"), null != b && b.Zf === iw && (b = b.Mc()), b = (b && !b.startsWith(" ") ?
            " " : "") + b) : b = "";
        return m(d + b + ">" + mw(null != c ? c : "") + "</div>")
    };

    function zw(a, b) {
        this.o = a;
        this.O = !!b;
        this.s = {
            0: this.o + "-arrowright",
            1: this.o + "-arrowup",
            2: this.o + "-arrowdown",
            3: this.o + "-arrowleft"
        }
    }
    n(zw, Xr);
    f = zw.prototype;
    f.Vj = function(a) {
        this.j = a
    };
    f.setPosition = function(a, b, c, d) {
        null != a && (this.Zk = a);
        null != b && (this.Uk = b);
        "number" === typeof c && (this.co = Math.max(c, 15));
        "number" === typeof d && (this.Zl = d)
    };
    f.Tc = function(a, b, c) {
        a = this.Uk;
        2 == a && (a = 0);
        Aw(this, this.Zk, a, 2 == this.Uk ? Bw(this.Zk) ? this.i.offsetHeight / 2 : this.i.offsetWidth / 2 : this.co, 0, c)
    };

    function Aw(a, b, c, d, e, g) {
        if (a.j) {
            var h = Cw(b, c);
            var k = a.j;
            var l = a.i,
                m = a.Ga,
                p = M(k);
            a: {
                p = (Bw(b) ? p.height / 2 : p.width / 2) - d;
                var w = $r(k, h);
                if (m) m = m.clone(),
                l && (l = Zr(l), m.left += l.x, m.right += l.x, m.top += l.y, m.bottom += l.y);
                else if (m = ph(k), !m) {
                    k = p;
                    break a
                }
                k = Yg(zh(k));Bw(b) ? k.top < m.top && !(w & 1) ? p -= m.top - k.top : k.bottom > m.bottom && w & 1 && (p -= k.bottom - m.bottom) : k.left < m.left && !(w & 4) ? p -= m.left - k.left : k.right > m.right && w & 4 && (p -= k.right - m.right);k = p
            }
            k = Bw(b) ? new B(a.Zl, k) : new B(k, a.Zl);
            p = Bw(b) ? 6 : 9;
            a.Sk && 2 == e && (p = Bw(b) ? 4 : 1);
            w = b ^ 3;
            Bw(b) && "rtl" == a.j.dir && (w = b);
            h = Yr(a.j, Cw(w, c), a.i, h, k, g, a.Jl ? p : 0, void 0, a.Ga);
            if (2 != e && h & 496) {
                Aw(a, b ^ 3, c, d, a.Sk && 0 == e ? 1 : 2, g);
                return
            }!a.O || h & 496 || (e = parseFloat(a.i.style.left), g = parseFloat(a.i.style.top), isFinite(e) && 0 == e % 1 && isFinite(g) && 0 == g % 1 || jh(a.i, Math.round(e), Math.round(g)))
        }
        Dw(a, b, c, d)
    }

    function Dw(a, b, c, d) {
        var e = a.N;
        Sc(a.s, function(g) {
            y(e, g, !1)
        }, a);
        x(e, a.s[b]);
        e.style.top = e.style.left = e.style.right = e.style.bottom = "";
        a.j ? (c = uh(a.j, a.i), d = Ew(a.j, b), Bw(b) ? e.style.top = Fw(c.y + d.y, a.i.offsetHeight - 15) + "px" : e.style.left = Fw(c.x + d.x, a.i.offsetWidth - 15) + "px") : e.style[0 == c ? Bw(b) ? "top" : "left" : Bw(b) ? "bottom" : "right"] = d + "px"
    }

    function Fw(a, b) {
        return 15 > b ? 15 : we(a, 15, b)
    }

    function Cw(a, b) {
        switch (a) {
            case 2:
                return 0 == b ? 1 : 5;
            case 1:
                return 0 == b ? 0 : 4;
            case 0:
                return 0 == b ? 12 : 13;
            default:
                return 0 == b ? 8 : 9
        }
    }

    function Ew(a, b) {
        var c = 0,
            d = 0;
        a = M(a);
        switch (b) {
            case 2:
                c = a.width / 2;
                break;
            case 1:
                c = a.width / 2;
                d = a.height;
                break;
            case 0:
                d = a.height / 2;
                break;
            case 3:
                c = a.width, d = a.height / 2
        }
        return new B(c, d)
    }

    function Bw(a) {
        return 0 == a || 3 == a
    }
    f.Jl = !1;
    f.Uk = 2;
    f.co = 20;
    f.Zk = 3;
    f.Ga = null;
    f.Zl = -5;
    f.Sk = !1;

    function Gw(a) {
        mi.call(this);
        this.j = a || Te()
    }
    n(Gw, mi);
    Gw.prototype.N = function() {
        um(this.ma(), "tooltip");
        Y(this.ma(), "live", "polite")
    };

    function Hw(a) {
        Gw.call(this, a);
        this.i = this.j.Ua("DIV", Iw() + "-contentId");
        this.o = this.j.Ua("DIV", Iw() + "-arrow", this.j.Ua("DIV", Iw() + "-arrowimplbefore"), this.j.Ua("DIV", Iw() + "-arrowimplafter"));
        this.s = this.j.Ua("DIV", {
            "class": Iw(),
            role: "tooltip"
        }, this.i, this.o);
        this.N()
    }
    n(Hw, Gw);

    function Iw() {
        return "jfk-tooltip"
    }
    Hw.prototype.ma = function() {
        return this.s
    };
    Hw.prototype.ya = function() {
        Gw.prototype.ya.call(this);
        this.s && I(this.s)
    };

    function Jw(a) {
        Hw.call(this, a)
    }
    n(Jw, Hw);
    Jw.prototype.N = function() {
        um(this.ma(), "tooltip")
    };

    function Kw(a) {
        return Ie(Qb(a.replace(Lw, function(b, c) {
            return Mw.test(c) ? "" : " "
        }).replace(/[\t\n ]+/g, " ")))
    }
    var Mw = /^(?:abbr|acronym|address|b|em|i|small|strong|su[bp]|u)$/i,
        Lw = /<[!\/]?([a-z0-9]+)([\/ ][^>]*)?>/gi;

    function Nw(a) {
        a = a || Te();
        var b = Va(a.i);
        Ow[b] || (Ow[b] = new Pw(a))
    }

    function Qw(a, b) {
        var c = b instanceof Vd ? Kw(Wd(b)) : b;
        a.removeAttribute("title");
        a.removeAttribute("data-tooltip-contained");
        a.removeAttribute("data-tooltip");
        b ? (b instanceof Vd ? a.o = b : (a.setAttribute("data-tooltip", b), a.o = null), a.setAttribute("aria-label", c)) : (a.o = null, a.removeAttribute("aria-label"));
        Nw(Te(a))
    }
    var Ow = {};

    function Pw(a) {
        Ri.call(this);
        this.wa = a;
        this.va = new am(this.tw, 0, this);
        ni(this, this.va);
        var b = jf();
        this.ha = "function" === typeof b.MutationObserver ? new b.MutationObserver(r(this.Et, this)) : null;
        a = a.i;
        this.na(a, "mouseout mousedown click blur focusout keydown".split(" "), this.Ys, !0);
        this.na(a, ["mouseover", "focus", "focusin"], this.cw, !0)
    }
    n(Pw, Ri);
    f = Pw.prototype;
    f.ya = function() {
        Rw(this);
        Ri.prototype.ya.call(this)
    };

    function Sw(a, b) {
        switch (b.type) {
            case "mousedown":
            case "mouseover":
            case "mouseout":
            case "click":
                a.Ca = !1;
                break;
            case "keydown":
                a.Ca = !0
        }
    }
    f.cw = function(a) {
        this.ha && this.ha.disconnect();
        Sw(this, a);
        var b = a.target;
        a = "focus" == a.type || "focusin" == a.type;
        var c = this.i && Bf(this.i.i, b);
        if (this.Ca || !a || c) {
            this.Da = a;
            if (a = b && b.getAttribute && this.ha) a = b.getAttribute("role") || null, a = pb(tm, a);
            a && (this.ha.observe(b, {
                attributes: !0
            }), (a = wm(b)) && (b = a));
            this.s = b
        } else this.s = null;
        Tw(this)
    };
    f.Ys = function(a) {
        Sw(this, a);
        var b = a.target;
        b = this.i && Bf(this.i.i, b);
        if ("mousedown" != a.type && "click" != a.type || !b) this.s = null, Tw(this)
    };
    f.Et = function(a) {
        v(a, r(function(b) {
            var c = wm(b.target);
            c && "aria-activedescendant" == b.attributeName && (this.s = c, Tw(this))
        }, this))
    };

    function Tw(a) {
        if (!(a.va.isActive() && a.j && a.ka)) {
            Rw(a);
            var b = null != a.ka ? a.ka : 50;
            a.va.start(a.j ? b : 300)
        }
    }

    function Rw(a) {
        a.oa && (Qk(a.oa), a.oa = 0, a.j = null)
    }
    f.tw = function() {
        if (!this.s) Uw(this), this.ka = this.j = null;
        else if (!(this.j && this.i && Bf(this.i.ma(), this.s)) || this.j.getAttribute("data-tooltip-unhoverable")) {
            var a = Mf(this.s, function(k) {
                    return k.getAttribute && (k.getAttribute("data-tooltip-contained") || k.getAttribute("data-tooltip") || k.o) && !k.getAttribute("data-tooltip-suspended")
                }),
                b = !1;
            this.j && this.j != a && (Uw(this), this.ka = this.j = null, b = !0);
            if (!this.j && a && (this.j = a, !(a.getAttribute("data-tooltip-only-on-overflow") && a.offsetWidth >= a.scrollWidth && a.offsetHeight >=
                    a.scrollHeight || this.Da && "mouse" == a.getAttribute("data-tooltip-trigger")))) {
                var c = ge;
                if (a.getAttribute("data-tooltip-contained"))
                    for (var d = $e("jfk-tooltip-data", a), e = 0; e < d.length; e++) {
                        if (d[e].parentNode == a) {
                            c = d[e].cloneNode(!0);
                            break
                        }
                    } else c = a.o ? a.o : $d(a.getAttribute("data-tooltip"));
                d = a.getAttribute("data-tooltip-align");
                e = a.getAttribute("data-tooltip-class");
                var g = a.getAttribute("data-tooltip-offset");
                g = Pb(Pe(g)) ? -1 : Number(g);
                var h = a.getAttribute("data-tooltip-hide-delay");
                h = Pb(Pe(h)) ? null : Number(h);
                if (!b && (a = a.getAttribute("data-tooltip-delay"), a = Math.max(0, a - 300))) {
                    this.oa = V(t(this.iq, this.j, c, d, g, e, h), a, this);
                    return
                }
                this.iq(this.j, c, d, g, e, h)
            }
        }
    };

    function Vw(a) {
        if (a) switch (a.toLowerCase().split(",")[0]) {
            case "l":
                return 0;
            case "t":
                return 2;
            case "r":
                return 3
        }
        return 1
    }
    f.iq = function(a, b, c, d, e, g) {
        this.oa = 0;
        this.ka = g;
        if (!this.i) {
            this.i = new Jw(this.wa);
            Uw(this);
            g = this.i.ma();
            this.wa.i.body.appendChild(g);
            ni(this, this.i);
            this.N = new zw(Iw(), !0);
            this.N.Jl = !0;
            this.N.Sk = !0;
            g = this.N;
            var h = this.i.ma(),
                k = this.i.o;
            g.i = h;
            g.N = k
        }
        a: {
            if (c) switch (c.toLowerCase().split(",")[1]) {
                case "l":
                    g = 0;
                    break a;
                case "r":
                    g = 1;
                    break a
            }
            g = 2
        }
        this.N.setPosition(Vw(c), g, void 0, d);
        Kb(this.i.ma(), "jfk-tooltip-hide");
        this.ta != e && (this.ta && !Pb(Pe(this.ta)) && Kb(this.i.ma(), this.ta), Pb(Pe(e)) || x(this.i.ma(),
            e), this.ta = e);
        jh(this.i.ma(), 0, 0);
        if (b instanceof Vd) Q(this.i.i, b);
        else
            for (rf(this.i.i); c = b.firstChild;) this.i.i.appendChild(c);
        this.N.Vj(a);
        this.N.Tc(null, 0)
    };

    function Uw(a) {
        a.i && x(a.i.ma(), "jfk-tooltip-hide")
    };

    function Ww(a) {
        var b = "kg";
        if (a.kg && a.hasOwnProperty(b)) return a.kg;
        b = new a;
        return a.kg = b
    };
    var Xw = ma(["value"]);

    function Yw(a, b, c, d) {
        Ut.call(this, a, Zw.Ib(), b);
        this.wa = c || 0;
        this.Ab = d || 0;
        this.Ma = !1
    }
    u(Yw, Ut);
    f = Yw.prototype;
    f.Bb = function() {
        return this.Ab
    };
    f.wc = function(a) {
        this.ha = a;
        var b = this.ma();
        b && (this.Ma ? Qw(b, a) : a ? b.title = a : b.removeAttribute("title"))
    };
    f.Ta = function(a) {
        this.isEnabled() != a && (Yw.ua.Ta.call(this, a), $w(this))
    };
    f.focus = function() {
        var a = this.Aa;
        try {
            a.focus()
        } catch (b) {}
    };
    f.Wj = function(a) {
        Yw.ua.Wj.call(this, a);
        ax(this, !1)
    };
    f.qf = function(a) {
        Yw.ua.qf.call(this, a);
        this.isEnabled() && ax(this, !0)
    };
    f.re = function(a) {
        Yw.ua.re.call(this, a);
        this.isEnabled() && ax(this, !0)
    };

    function ax(a, b) {
        a.ma() && y(a.ma(), "jfk-button-clear-outline", b)
    }

    function $w(a) {
        a.ma() && bx(a.Dd(), a)
    }

    function cx(a, b) {
        if ("string" === typeof a) {
            var c = a;
            a = F("IMG");
            a.src = c;
            L(a, 21, 21)
        }
        x(a, "jfk-button-img");
        c = [];
        c.push(a);
        b && (a = F("SPAN", "jfk-button-label", b), c.push(a));
        return c
    }

    function Zw() {
        this.Na = this.Xa() + "-standard";
        this.o = this.Xa() + "-action";
        this.ta = this.Xa() + "-primary";
        this.O = this.Xa() + "-default";
        this.ka = this.Xa() + "-flat";
        this.oa = this.Xa() + "-narrow";
        this.ha = this.Xa() + "-mini";
        this.N = this.Xa() + "-contrast"
    }
    u(Zw, At);
    Zw.Ib = function() {
        return Ww(Zw)
    };
    Zw.prototype.i = function(a, b, c) {
        a && c.wa != a && (c.wa = a, $w(c));
        b && c.Ab != b && (c.Ab = b, $w(c))
    };
    Zw.prototype.Xa = function() {
        return "jfk-button"
    };
    Zw.prototype.Uc = function(a) {
        var b = a.i,
            c = ww(yw, {
                disabled: !a.isEnabled(),
                checked: yt(a, 16),
                style: a.wa,
                title: a.Cf(),
                Bw: a.Ma,
                value: a.Db(),
                width: a.Bb()
            }, void 0, b);
        b.Km(c, a.Mc());
        this.Wb(a, c);
        return c
    };
    Zw.prototype.Wb = function(a, b) {
        Zw.ua.Wb.call(this, a, b);
        this.s || (this.s = cd(this.Na, t(this.i, 0, null), this.o, t(this.i, 2, null), this.ta, t(this.i, 3, null), this.O, t(this.i, 1, null), this.ka, t(this.i, 4, null), this.ha, t(this.i, 5, null), this.N, t(this.i, 6, null), this.oa, t(this.i, null, 1)));
        for (var c = Gb(b), d = 0; d < c.length; ++d) {
            var e = this.s[c[d]];
            e && e(a)
        }
        if (c = b.getAttribute("data-tooltip")) a.ha = c, a.Ma = !0;
        return b
    };
    var gj = [new ej(Xw[0].toLowerCase(), cj)];
    Zw.prototype.Db = function(a) {
        return a.getAttribute("value") || ""
    };
    Zw.prototype.Dc = function(a, b) {
        a && fj(a, b)
    };

    function bx(a, b) {
        function c(h, k) {
            (h ? d : e).push(k)
        }
        var d = [],
            e = [],
            g = b.wa;
        c(0 == g, a.Na);
        c(2 == g, a.o);
        c(3 == g, a.ta);
        c(4 == g, a.ka);
        c(5 == g, a.ha);
        c(1 == g, a.O);
        c(6 == g, a.N);
        c(1 == b.Bb(), a.oa);
        c(!b.isEnabled(), a.Xa() + "-disabled");
        Lb(b.ma(), e);
        Jb(b.ma(), d)
    };

    function dx(a, b) {
        Vm.call(this, b);
        this.j = a || ""
    }
    var ex;
    u(dx, Vm);
    f = dx.prototype;
    f.je = null;

    function fx() {
        null == ex && (ex = "placeholder" in G("INPUT"));
        return ex
    }
    f.ji = !1;
    f.Wa = function() {
        this.Aa = this.i.Ua("INPUT", {
            type: "text"
        })
    };
    f.Qb = function(a) {
        dx.ua.Qb.call(this, a);
        this.j || (this.j = a.getAttribute("label") || "");
        Nf(Ve(a)) == a && (this.ji = !0, a = this.ma(), Kb(a, "label-input-label"));
        fx() && (this.ma().placeholder = this.j);
        a = this.ma();
        Y(a, "label", this.j)
    };
    f.Oa = function() {
        dx.ua.Oa.call(this);
        var a = new Ri(this);
        a.na(this.ma(), "focus", this.Oo);
        a.na(this.ma(), "blur", this.Ft);
        if (fx()) this.o = a;
        else {
            oc && a.na(this.ma(), ["keypress", "keydown", "keyup"], this.Tt);
            var b = Ve(this.ma());
            a.na(jf(b), "load", this.Eu);
            this.o = a;
            gx(this)
        }
        hx(this);
        this.ma().oa = this
    };
    f.oc = function() {
        dx.ua.oc.call(this);
        this.o && (this.o.Ia(), this.o = null);
        this.ma().oa = null
    };

    function gx(a) {
        !a.s && a.o && a.ma().form && (a.o.na(a.ma().form, "submit", a.Xt), a.s = !0)
    }
    f.ya = function() {
        dx.ua.ya.call(this);
        this.o && (this.o.Ia(), this.o = null)
    };
    f.Oo = function() {
        this.ji = !0;
        var a = this.ma();
        Kb(a, "label-input-label");
        if (!fx() && !ix(this) && !this.N) {
            var b = this;
            a = function() {
                b.ma() && (b.ma().value = "")
            };
            A ? V(a, 10) : a()
        }
    };
    f.Ft = function() {
        fx() || (this.o.hb(this.ma(), "click", this.Oo), this.je = null);
        this.ji = !1;
        hx(this)
    };
    f.Tt = function(a) {
        27 == a.keyCode && ("keydown" == a.type ? this.je = this.ma().value : "keypress" == a.type ? this.ma().value = this.je : "keyup" == a.type && (this.je = null), a.preventDefault())
    };
    f.Xt = function() {
        ix(this) || (this.ma().value = "", V(this.Ct, 10, this))
    };
    f.Ct = function() {
        ix(this) || (this.ma().value = this.j)
    };
    f.Eu = function() {
        hx(this)
    };

    function ix(a) {
        return !!a.ma() && "" != a.ma().value && a.ma().value != a.j
    }
    f.reset = function() {
        ix(this) && (this.ma().value = "", null != this.je && (this.je = ""), hx(this))
    };
    f.Dc = function(a) {
        null != this.je && (this.je = a);
        this.ma().value = a;
        hx(this)
    };
    f.Db = function() {
        return null != this.je ? this.je : ix(this) ? this.ma().value : ""
    };
    f.Td = function() {
        return this.j
    };

    function hx(a) {
        var b = a.ma();
        fx() ? a.ma().placeholder != a.j && (a.ma().placeholder = a.j) : gx(a);
        Y(b, "label", a.j);
        ix(a) ? (b = a.ma(), Kb(b, "label-input-label")) : (a.N || a.ji || (b = a.ma(), x(b, "label-input-label")), fx() || V(a.Vv, 10, a))
    }
    f.Ta = function(a) {
        this.ma().disabled = !a;
        var b = this.ma();
        y(b, "label-input-label-disabled", !a)
    };
    f.isEnabled = function() {
        return !this.ma().disabled
    };
    f.Vv = function() {
        !this.ma() || ix(this) || this.ji || (this.ma().value = this.j)
    };

    function jx(a, b, c) {
        dx.call(this, null != c ? c : "Search in this book");
        this.Qb(a);
        this.Oa();
        b && this.Dc(b)
    }
    n(jx, dx);

    function kx(a, b) {
        this.i = a instanceof B ? a : new B(a, b)
    }
    u(kx, Xr);
    kx.prototype.Tc = function(a, b, c, d) {
        as(this.i, a, b, c, null, null, d)
    };

    function lx(a, b) {
        this.i = a instanceof B ? a : new B(a, b)
    }
    u(lx, Xr);
    lx.prototype.Tc = function(a, b, c, d) {
        Yr(mh(a), 0, a, b, this.i, c, null, d)
    };

    function mx(a) {
        this.i = new Un;
        this.size = 0;
        if (a) {
            a = uj(a);
            for (var b = a.length, c = 0; c < b; c++) this.add(a[c]);
            this.size = this.i.size
        }
    }

    function nx(a) {
        var b = typeof a;
        return "object" == b && a || "function" == b ? "o" + Va(a) : b.charAt(0) + a
    }
    f = mx.prototype;
    f.add = function(a) {
        this.i.set(nx(a), a);
        this.size = this.i.size
    };
    f.remove = function(a) {
        a = this.i.remove(nx(a));
        this.size = this.i.size;
        return a
    };
    f.Hc = ba(0);
    f.has = function(a) {
        return Wn(this.i, nx(a))
    };
    f.tc = function() {
        return this.i.tc()
    };
    f.values = function() {
        return this.i.values()
    };
    f.clone = function() {
        return new mx(this)
    };
    f.vf = function() {
        return this.i.vf(!1)
    };
    mx.prototype[Symbol.iterator] = function() {
        return this.values()
    };

    function ox(a, b, c) {
        this.O = c || (a ? Te(C(a)) : Te());
        bs.call(this, this.O.Ua("DIV", {
            style: "position:absolute;display:none;"
        }));
        this.ka = new B(1, 1);
        this.jc = new mx;
        this.ha = null;
        a && this.attach(a);
        null != b && this.gq(b)
    }
    u(ox, bs);
    var px = [];
    f = ox.prototype;
    f.Yb = null;
    f.className = "goog-tooltip";
    f.qh = 500;
    f.li = 0;
    f.attach = function(a) {
        a = C(a);
        this.jc.add(a);
        P(a, "mouseover", this.Ve, !1, this);
        P(a, "mouseout", this.Aj, !1, this);
        P(a, "mousemove", this.hh, !1, this);
        P(a, "focus", this.Ym, !1, this);
        P(a, "blur", this.Aj, !1, this)
    };
    f.zl = function() {
        return this.li
    };
    f.gq = function(a) {
        J(this.ma(), a)
    };
    f.nm = function(a) {
        var b = this.ma();
        b && oe(b, a)
    };
    f.Bg = function(a) {
        var b = this.ma();
        b && I(b);
        ox.ua.Bg.call(this, a);
        a ? (b = this.O.i.body, b.insertBefore(a, b.lastChild), li(this.ha), this.ha = new Sm(this.ma()), ni(this, this.ha), P(this.ha, "focusin", this.Rg, void 0, this), P(this.ha, "focusout", this.Di, void 0, this)) : (li(this.ha), this.ha = null)
    };

    function qx(a) {
        return a.Da ? a.isVisible() ? 4 : 1 : a.ta ? 3 : a.isVisible() ? 2 : 0
    }
    f.Fj = function(a) {
        if (!this.isVisible()) return !1;
        var b = qh(this.ma()),
            c = M(this.ma());
        return b.x <= a.x && a.x <= b.x + c.width && b.y <= a.y && a.y <= b.y + c.height
    };
    f.bm = function() {
        if (!gn.prototype.bm.call(this)) return !1;
        if (this.i)
            for (var a, b = 0; a = px[b]; b++) Bf(a.ma(), this.i) || a.Ea(!1);
        qb(px, this);
        a = this.ma();
        a.className = this.className;
        this.Rg();
        P(a, "mouseover", this.Fl, !1, this);
        P(a, "mouseout", this.To, !1, this);
        rx(this);
        return !0
    };
    f.xh = function() {
        rb(px, this);
        for (var a = this.ma(), b, c = 0; b = px[c]; c++) b.i && Bf(a, b.i) && b.Ea(!1);
        this.nb && this.nb.Di();
        Ni(a, "mouseover", this.Fl, !1, this);
        Ni(a, "mouseout", this.To, !1, this);
        this.i = void 0;
        0 == qx(this) && (this.Pa = !1);
        gn.prototype.xh.call(this)
    };
    f.ui = function(a, b) {
        this.i == a && Wn(this.jc.i, nx(this.i)) && (this.Pa || !this.Lc ? (this.Ea(!1), this.isVisible() || (this.i = a, this.setPosition(b || this.vj(0)), this.Ea(!0))) : this.i = void 0);
        this.Da = void 0
    };
    f.rp = function(a) {
        this.ta = void 0;
        if (a == this.i) {
            a = this.O;
            var b;
            a = (b = Nf(a.i)) && this.ma() && a.Lm(this.ma(), b);
            null != this.Yb && (this.Yb == this.ma() || Wn(this.jc.i, nx(this.Yb))) || a || this.oa && this.oa.Yb || this.Ea(!1)
        }
    };

    function sx(a, b) {
        var c = gf(a.O.i);
        a.ka.x = b.clientX + c.x;
        a.ka.y = b.clientY + c.y
    }
    f.Ve = function(a) {
        var b = tx(this, a.target);
        this.Yb = b;
        this.Rg();
        b != this.i && (this.i = b, this.ak(b), ux(this), sx(this, a))
    };

    function tx(a, b) {
        try {
            for (; b && !Wn(a.jc.i, nx(b));) b = b.parentNode;
            return b
        } catch (c) {
            return null
        }
    }
    f.hh = function(a) {
        sx(this, a);
        this.Pa = !0
    };
    f.Ym = function(a) {
        this.Yb = a = tx(this, a.target);
        this.Pa = !0;
        if (this.i != a) {
            this.i = a;
            var b = this.vj(1);
            this.Rg();
            this.ak(a, b);
            ux(this)
        }
    };
    f.vj = function(a) {
        return 0 == a ? (a = this.ka.clone(), new vx(a)) : new wx(this.Yb)
    };

    function ux(a) {
        if (a.i)
            for (var b, c = 0; b = px[c]; c++) Bf(b.ma(), a.i) && (b.oa = a, a.nb = b)
    }
    f.Aj = function(a) {
        var b = tx(this, a.target),
            c = tx(this, a.relatedTarget);
        b != c && (b == this.Yb && (this.Yb = null), rx(this), this.Pa = !1, !this.isVisible() || a.relatedTarget && Bf(this.ma(), a.relatedTarget) ? this.i = void 0 : this.Di())
    };
    f.Fl = function() {
        var a = this.ma();
        this.Yb != a && (this.Rg(), this.Yb = a)
    };
    f.To = function(a) {
        var b = this.ma();
        this.Yb != b || a.relatedTarget && Bf(b, a.relatedTarget) || (this.Yb = null, this.Di())
    };
    f.ak = function(a, b) {
        this.Da || (this.Da = V(r(this.ui, this, a, b), this.qh))
    };

    function rx(a) {
        a.Da && (Qk(a.Da), a.Da = void 0)
    }
    f.Di = function() {
        2 == qx(this) && (this.ta = V(r(this.rp, this, this.i), this.zl()))
    };
    f.Rg = function() {
        this.ta && (Qk(this.ta), this.ta = void 0)
    };
    f.ya = function() {
        var a;
        this.Ea(!1);
        rx(this);
        for (var b = this.jc.tc(), c = 0; a = b[c]; c++) Ni(a, "mouseover", this.Ve, !1, this), Ni(a, "mouseout", this.Aj, !1, this), Ni(a, "mousemove", this.hh, !1, this), Ni(a, "focus", this.Ym, !1, this), Ni(a, "blur", this.Aj, !1, this);
        b = this.jc;
        Yn(b.i);
        b.size = 0;
        this.ma() && I(this.ma());
        this.Yb = null;
        delete this.O;
        ox.ua.ya.call(this)
    };

    function vx(a, b) {
        lx.call(this, a, b)
    }
    u(vx, lx);
    vx.prototype.Tc = function(a, b, c) {
        b = mh(a);
        b = ph(b);
        c = c ? new Tg(c.top + 10, c.right, c.bottom, c.left + 10) : new Tg(10, 0, 0, 10);
        as(this.i, a, 8, c, b, 9) & 496 && as(this.i, a, 8, c, b, 5)
    };

    function wx(a) {
        Ru.call(this, a, 5)
    }
    u(wx, Ru);
    wx.prototype.Tc = function(a, b, c) {
        var d = new B(10, 0);
        Yr(this.i, this.j, a, b, d, c, 9) & 496 && Yr(this.i, 4, a, 1, d, c, 5)
    };

    function xx(a, b) {
        R.call(this);
        this.Me = G("div");
        a.appendChild(this.Me);
        K(this.Me, {
            position: "absolute",
            backgroundColor: "#b2c4e9",
            width: "100%",
            height: "5px",
            cursor: "pointer"
        });
        this.i = new yx(this.Me, b);
        P(this.Me, "click", r(this.dispatchEvent, this, "click"));
        P(this.i.ma(), "click", r(this.dispatchEvent, this, "click"));
        P(this.Me, "mouseover", r(this.j, this, !0));
        P(this.Me, "mouseout", r(this.j, this, !1))
    }
    n(xx, R);

    function zx(a, b) {
        K(a.Me, {
            backgroundColor: b ? "#ffcc00" : "#b2c4e9"
        });
        a.o = b
    }
    xx.prototype.j = function(a) {
        this.o || K(this.Me, {
            backgroundColor: a ? "#ffffcc" : "#b2c4e9"
        })
    };
    xx.prototype.ya = function() {
        this.i.Ia();
        R.prototype.ya.call(this)
    };

    function yx(a, b) {
        ox.call(this, a);
        this.j = a;
        this.qh = 200;
        this.li = 500;
        a = this.ma();
        K(a, {
            backgroundColor: "#FFF",
            color: "#333",
            border: "1px solid #6b90da",
            padding: "6px",
            fontSize: "83%",
            width: "350px",
            cursor: "pointer"
        });
        var c = G("div");
        K(c, {
            fontWeight: "bold"
        });
        c.appendChild(of("Page " + b.i));
        a.appendChild(c);
        c = G("div");
        Q(c, ul(b.j));
        a.appendChild(c)
    }
    n(yx, ox);
    yx.prototype.ui = function(a) {
        var b = qh(this.j),
            c = M(this.ma());
        ox.prototype.ui.call(this, a, new kx(b.x - c.width, Math.min(b.y, ef().height - c.height)))
    };

    function Ax(a, b, c) {
        X.call(this);
        var d = this;
        this.V = a;
        this.N = b;
        this.ta = c;
        this.o = {};
        this.ka = new Ri;
        this.j = G("div");
        K(this.j, {
            backgroundColor: "#fcfcff",
            position: "absolute"
        });
        this.V.Cd().appendChild(this.j);
        this.N.Gb.forEach(function(e) {
            Bx(d, e)
        });
        this.i.na(this.V, "pagechange", this.oa);
        this.oa();
        this.i.na(this.V, "resize", this.s);
        this.i.na(this.V, "viewportmodechange", this.ha);
        this.V.Ja() && this.ha()
    }
    n(Ax, X);
    Ax.prototype.oa = function() {
        this.O && (zx(this.O, !1), this.O = null);
        var a = this.o[this.V.Ha().Sa()];
        a && (this.O = a, zx(a, !0))
    };
    Ax.prototype.ha = function() {
        var a = this,
            b = this.V.Ja(),
            c = b instanceof Zs;
        c && this.s();
        Wi(this.ka);
        this.ka.na(b, "layoutchange", function() {
            a.s()
        });
        N(this.j, c)
    };
    Ax.prototype.s = function() {
        var a = this;
        V(function() {
            var b = a.V.Ja();
            b && b instanceof Zs && (b = b.O.s, L(a.j, 15, b.clientHeight), jh(a.j, b.clientWidth - 15, 0), Cx(a))
        }, 10)
    };

    function Cx(a) {
        var b = {};
        a.V.Ja().Jb().Sd(function(c) {
            return c instanceof Sl
        }).forEach(function(c) {
            b[c.Ha().Sa()] = c
        });
        a.N.Gb.forEach(function(c) {
            var d = a.V.Ja().O.j.clientHeight,
                e = b[c.Sa()];
            if (e) {
                var g = rc ? 5 : 15;
                jh(a.o[c.Sa()].Me, 0, Math.floor(e.ud() / d * (a.j.clientHeight - g - (rc ? 30 : 15))) + g)
            }
        })
    }

    function Bx(a, b) {
        var c = new xx(a.j, b);
        a.o[b.Sa()] = c;
        a.i.na(c, "click", function() {
            a.ta(b)
        })
    }
    Ax.prototype.ya = function() {
        I(this.j);
        Sc(this.o, function(a) {
            a.ya.call(a)
        });
        X.prototype.ya.call(this)
    };

    function Dx(a) {
        X.call(this);
        this.j = a;
        this.o = "n"
    }
    n(Dx, X);

    function Ex(a, b, c) {
        Fx(a.j.o);
        var d = new S(window.location.href);
        T(d, "jscmd", "SearchWithinVolume");
        T(d, "q", b);
        T(d, "scoring", c);
        (new Kr(d)).nf(function(e) {
            Gx(a, !1, e)
        });
        a.o = c
    }

    function Gx(a, b, c, d) {
        c.search_results && (c.search_results = kb(c.search_results, function(g) {
            return void 0 !== g.snippet_text && g.snippet_text
        }), c.number_of_results = c.search_results.length);
        a.N = new Js(c);
        c = a.j.V;
        c.ka || c.ac(Zs);
        var e = a.N.Gb;
        0 == e.length ? Hx(a.j.o) : b ? d ? (b = e.find(function(g) {
            return d == g.Sa()
        })) ? Ix(a, b) : Ix(a, e[0], d) : Ix(a, e[0]) : Jx(a);
        a.s = new Ax(c, a.N, function(g) {
            Ix(a, g)
        })
    }

    function Jx(a) {
        var b = a.j.V,
            c = b.ka;
        if (c == Zs || c == $t) a.j.s = c;
        b.ac(ru);
        b = b.Ja();
        Kx(a.j.o);
        uu(b, a.N);
        wu(b, function(d, e) {
            return Ix(a, d, e)
        });
        b.hd(new B(0, 0))
    }

    function Ix(a, b, c) {
        Ps = !0;
        var d = a.j.o;
        Lx(d, !1);
        d.N = ib(d.j.N.Gb, b);
        d.s ? (Mx(d, !0), Q(d.o, ul(d.N + 1 + " of " + d.j.N.Gb.length)), ym(d.o, "Result " + (d.N + 1) + " of " + d.j.N.Gb.length)) : Q(d.o, ul("Result <b>" + (d.N + 1 + "</b> of <b>") + (d.j.N.Gb.length + "</b> in this book for <b>") + (Ks(d.j.N) + "</b>")));
        d = a.j.V;
        b = ho(d.mb(), b.Sa());
        if (!b) return null;
        var e = d.Ja();
        e instanceof Zs || e instanceof $t || (a.j.s == $t ? d.ac($t) : d.ac(Zs));
        if (c) return d.yd(c), null;
        d.hi(b);
        return b
    }
    Dx.prototype.ya = function() {
        li(this.s);
        X.prototype.ya.call(this)
    };
    var Nx = "ganpub ganclk dapp source_ip source_country source_domain authuser".split(" ");

    function Ox(a) {
        var b = void 0 === b ? window.location.href : b;
        var c = new S(b);
        T(a, "hl", "en");
        (b = U(c, "output")) && T(a, "output", b);
        b = U(c, "source");
        "ge-ipad-app" == b ? (T(a, "dapp", "2"), Rj(a, "output")) : "ge-tablet-app" == b ? (T(a, "dapp", "4"), Rj(a, "output")) : "ge-ip-app" == b ? T(a, "dapp", "1") : "ge-android-app" == b && T(a, "dapp", "3");
        U(c, "authuser") || Rj(a, "authuser");
        Nx.forEach(function(d) {
            var e = U(c, d);
            e && T(a, d, e)
        })
    };

    function Px() {
        this.i = []
    }
    u(Px, pt);
    Ra(Px);

    function Qx(a, b) {
        var c = a.i[b];
        if (!c) {
            switch (b) {
                case 0:
                    c = a.Xa() + "-highlight";
                    break;
                case 1:
                    c = a.Xa() + "-checkbox";
                    break;
                case 2:
                    c = a.Xa() + "-content"
            }
            a.i[b] = c
        }
        return c
    }
    f = Px.prototype;
    f.Fg = function() {
        return "menuitem"
    };
    f.Uc = function(a) {
        var b = a.i.Ua("DIV", st(this, a).join(" "), Rx(this, a.Mc(), a.i));
        Sx(this, a, b, xt(a, 8) || xt(a, 16));
        return b
    };
    f.Oc = function(a) {
        return a && a.firstChild
    };
    f.Wb = function(a, b) {
        var c = xf(b),
            d = Qx(this, 2);
        c && Ib(c, d) || b.appendChild(Rx(this, b.childNodes, a.i));
        Ib(b, "goog-option") && (a.Bi(!0), this.Bi(a, b, !0));
        return Px.ua.Wb.call(this, a, b)
    };
    f.Gg = function(a, b) {
        var c = this.Oc(a),
            d = Tx(this, a) ? c.firstChild : null;
        Px.ua.Gg.call(this, a, b);
        d && !Tx(this, a) && c.insertBefore(d, c.firstChild || null)
    };

    function Rx(a, b, c) {
        a = Qx(a, 2);
        return c.Ua("DIV", a, b)
    }
    f.fq = function(a, b, c) {
        a && b && Sx(this, a, b, c)
    };
    f.Bi = function(a, b, c) {
        a && b && Sx(this, a, b, c)
    };

    function Tx(a, b) {
        return (b = a.Oc(b)) ? (b = b.firstChild, a = Qx(a, 1), !!b && zf(b) && Ib(b, a)) : !1
    }

    function Sx(a, b, c, d) {
        vt(a, c, b.Bf());
        wt(a, b, c);
        d != Tx(a, c) && (y(c, "goog-option", d), c = a.Oc(c), d ? (a = Qx(a, 1), c.insertBefore(b.i.Ua("DIV", a), c.firstChild || null)) : c.removeChild(c.firstChild))
    }
    f.Xh = function(a) {
        switch (a) {
            case 2:
                return Qx(this, 0);
            case 16:
            case 8:
                return "goog-option-selected";
            default:
                return Px.ua.Xh.call(this, a)
        }
    };
    f.xj = function(a) {
        var b = Qx(this, 0);
        switch (a) {
            case "goog-option-selected":
                return 16;
            case b:
                return 2;
            default:
                return Px.ua.xj.call(this, a)
        }
    };
    f.Xa = function() {
        return "goog-menuitem"
    };

    function Ux(a, b, c, d) {
        Ht.call(this, a, d || Px.Ib(), c);
        this.Dc(b)
    }
    u(Ux, Ht);
    f = Ux.prototype;
    f.Db = function() {
        var a = this.Xl;
        return null != a ? a : this.Yg()
    };
    f.Dc = function(a) {
        this.Xl = a
    };
    f.hc = function(a, b) {
        Ux.ua.hc.call(this, a, b);
        switch (a) {
            case 8:
                yt(this, 16) && !b && this.sg(!1);
                (a = this.ma()) && this.Dd().fq(this, a, b);
                break;
            case 16:
                (a = this.ma()) && this.Dd().Bi(this, a, b)
        }
    };
    f.fq = function(a) {
        this.hc(8, a)
    };
    f.Bi = function(a) {
        this.hc(16, a)
    };
    f.Yg = function() {
        var a = this.Mc();
        return Array.isArray(a) ? (a = lb(a, function(b) {
            return zf(b) && (Ib(b, "goog-menuitem-accel") || Ib(b, "goog-menuitem-mnemonic-separator")) ? "" : Kf(b)
        }).join(""), Fe(a)) : Ux.ua.Yg.call(this)
    };
    f.re = function(a) {
        var b = this.getParent();
        if (b) {
            var c = b.s;
            b.s = null;
            if (c && "number" === typeof a.clientX && xe(c, new B(a.clientX, a.clientY))) return
        }
        Ux.ua.re.call(this, a)
    };
    f.qe = function(a) {
        return a.keyCode == this.Wl && this.Mf(a) ? !0 : Ux.ua.qe.call(this, a)
    };
    f.xt = function() {
        return this.Wl
    };
    Et("goog-menuitem", function() {
        return new Ux(null)
    });
    Ux.prototype.Bf = function() {
        return xt(this, 16) ? "menuitemcheckbox" : xt(this, 8) ? "menuitemradio" : Ux.ua.Bf.call(this)
    };
    Ux.prototype.getParent = function() {
        return Ht.prototype.getParent.call(this)
    };
    Ux.prototype.fh = function() {
        return Ht.prototype.fh.call(this)
    };

    function Vx(a, b, c, d) {
        Su.call(this, a, b, c || d);
        (c || d) && this.s(65 | (d ? 32 : 132))
    }
    u(Vx, Su);

    function Wx() {}
    u(Wx, pt);
    Ra(Wx);
    Wx.prototype.Xa = function() {
        return "goog-menuheader"
    };

    function Xx(a, b, c) {
        Ht.call(this, a, c || Wx.Ib(), b);
        this.hc(1, !1);
        this.hc(2, !1);
        this.hc(4, !1);
        this.hc(32, !1);
        this.Ee = 1
    }
    u(Xx, Ht);
    Et("goog-menuheader", function() {
        return new Xx(null)
    });

    function Yx() {}
    u(Yx, pt);
    Ra(Yx);
    Yx.prototype.Uc = function(a) {
        return a.i.Ua("DIV", this.Xa())
    };
    Yx.prototype.Wb = function(a, b) {
        b.id && a.nh(b.id);
        if ("HR" == b.tagName) {
            var c = b;
            b = this.Uc(a);
            sf(b, c);
            I(c)
        } else x(b, this.Xa());
        return b
    };
    Yx.prototype.Gg = function() {};
    Yx.prototype.Xa = function() {
        return "goog-menuseparator"
    };

    function Zx(a, b) {
        Ht.call(this, null, a || Yx.Ib(), b);
        this.hc(1, !1);
        this.hc(2, !1);
        this.hc(4, !1);
        this.hc(32, !1);
        this.Ee = 1
    }
    u(Zx, Ht);
    Zx.prototype.Oa = function() {
        Zx.ua.Oa.call(this);
        var a = this.ma();
        um(a, "separator")
    };
    Et("goog-menuseparator", function() {
        return new Zx
    });

    function $x(a) {
        this.i = a || "menu"
    }
    u($x, pv);
    Ra($x);
    f = $x.prototype;
    f.xk = function(a) {
        return "UL" == a.tagName || $x.ua.xk.call(this, a)
    };
    f.Zh = function(a) {
        return "HR" == a.tagName ? new Zx : $x.ua.Zh.call(this, a)
    };
    f.ie = function(a, b) {
        return Bf(a.ma(), b)
    };
    f.Ig = function() {
        return "goog-menu"
    };
    f.yk = function(a) {
        $x.ua.yk.call(this, a);
        a = a.ma();
        Y(a, "haspopup", "true")
    };

    function ay(a) {
        Zx.call(this, Yx.Ib(), a)
    }
    u(ay, Zx);
    Et("goog-menuseparator", function() {
        return new Zx
    });

    function by(a, b) {
        uv.call(this, "vertical", b || $x.Ib(), a);
        Dv(this, !1)
    }
    u(by, uv);
    f = by.prototype;
    f.Rk = !0;
    f.ie = function(a) {
        if (this.Dd().ie(this, a)) return !0;
        for (var b = 0, c = bn(this); b < c; b++) {
            var d = cn(this, b);
            if ("function" == typeof d.ie && d.ie(a)) return !0
        }
        return !1
    };
    f.Va = function(a) {
        this.Ra(a, !0)
    };
    f.wf = function(a, b) {
        this.Pg(a, b, !0)
    };
    f.Sd = function() {
        var a = [];
        an(this, function(b) {
            a.push(b)
        });
        return a
    };
    f.setPosition = function(a, b) {
        var c = this.isVisible();
        c || N(this.ma(), !0);
        xh(this.ma(), a, b);
        c || N(this.ma(), !1)
    };
    f.rd = function() {
        return this.isVisible() ? qh(this.ma()) : null
    };

    function cy(a, b) {
        (a.Rk = b) && Dv(a, !0)
    }
    f.Ea = function(a, b, c) {
        (b = by.ua.Ea.call(this, a, b)) && a && this.kb && this.Rk && vv(this).focus();
        a && c && "number" === typeof c.clientX ? this.s = new B(c.clientX, c.clientY) : this.s = null;
        return b
    };
    f.Bl = function(a) {
        this.Rk && vv(this).focus();
        return by.ua.Bl.call(this, a)
    };
    f.ho = function(a) {
        return a.isEnabled() && a.isVisible() && xt(a, 2)
    };
    f.Qb = function(a) {
        for (var b = this.Dd(), c = Ze(this.i.i, "DIV", b.Ig() + "-content", a), d = c.length, e = 0; e < d; e++) tv(b, this, c[e]);
        by.ua.Qb.call(this, a)
    };
    f.qe = function(a) {
        var b = by.ua.qe.call(this, a);
        b || an(this, function(c) {
            !b && c.xt && c.Wl == a.keyCode && (this.isEnabled() && this.Zc(c), b = c.Wc(a))
        }, this);
        return b
    };
    f.be = function(a) {
        by.ua.be.call(this, a);
        (a = cn(this, a)) && rh(a.ma(), this.ma())
    };

    function dy(a, b) {
        by.call(this, a, b);
        cy(this, !0);
        this.Ea(!1, !0);
        this.j = new Un
    }
    u(dy, by);
    f = dy.prototype;
    f.Bm = !1;
    f.np = 0;
    f.Qb = function(a) {
        dy.ua.Qb.call(this, a);
        (a = a.getAttribute("for") || a.htmlFor) && this.attach(this.i.ma(a), 1)
    };
    f.Oa = function() {
        dy.ua.Oa.call(this);
        this.j.forEach(this.eo, this);
        var a = Z(this);
        a.na(this, "action", this.qv);
        a.na(this.i.i, "mousedown", this.tv, !0)
    };
    f.attach = function(a, b, c, d, e) {
        a && Wn(this.j, Va(a)) || (a ? (b = {
            Aa: a,
            oq: b,
            hv: c,
            zo: d ? "contextmenu" : "mousedown",
            Ul: e
        }, this.j.set(Va(a), b)) : b = null, this.kb && this.eo(b), a = t(this.zv, a), this.ma() && Z(this).na(this.ma(), "keydown", a))
    };
    f.zv = function(a, b) {
        if (27 == b.keyCode) a.focus();
        else if (a = cn(this, this.kc)) {
            var c = a.ma();
            a = new si(b.Rb, c);
            a.target = c;
            if (32 == b.keyCode || 13 == b.keyCode)
                if (wi(c)) nj(c, "keydown", !1, a);
                else if (c = Ji(c))
                if (c = c.i["keydown".toString()]) {
                    c = c.concat();
                    for (var d = 0; d < c.length; d++) {
                        var e = c[d];
                        e && 0 == e.capture && !e.mh && Pi(e, a)
                    }
                } 32 == b.keyCode && this.rb()
        }
    };
    f.eo = function(a) {
        Z(this).na(a.Aa, a.zo, this.Dv);
        "contextmenu" != a.zo && Z(this).na(a.Aa, "keydown", this.Ev)
    };

    function ey(a, b, c, d) {
        var e = a.isVisible(),
            g;
        (g = a.isVisible()) || (g = 150 > Date.now() - a.np);
        g && a.Bm ? a.rb() : a.dispatchEvent("beforeshow") && (c = "undefined" != typeof c ? c : 8, e || (a.ma().style.visibility = "hidden"), N(a.ma(), !0), b.Tc(a.ma(), c, d), e || (a.ma().style.visibility = "visible"), a.be(-1), a.Ea(!0))
    }
    f.rb = function() {
        this.isVisible() && (this.Ea(!1), this.isVisible() || (this.np = Date.now()))
    };
    f.qv = function() {
        this.rb()
    };
    f.Dv = function(a) {
        fy(this, a)
    };
    f.Ev = function(a) {
        32 != a.keyCode && 13 != a.keyCode && 40 != a.keyCode || fy(this, a);
        40 == a.keyCode && zv(this)
    };

    function fy(a, b) {
        for (var c = a.j.ke(), d = 0; d < c.length; d++) {
            var e = a.j.get(c[d]);
            if (e.Aa == b.currentTarget) {
                c = void 0 !== e.oq ? new Su(e.Aa, e.oq, !0) : new is(b.clientX, b.clientY);
                c.s && c.s(5);
                ey(a, c, e.hv, e.Ul);
                b.preventDefault();
                b.stopPropagation();
                break
            }
        }
    }
    f.tv = function(a) {
        this.isVisible() && !this.ie(a.target) && this.rb()
    };
    f.Yi = function(a) {
        dy.ua.Yi.call(this, a);
        this.rb()
    };
    f.ya = function() {
        dy.ua.ya.call(this);
        this.j && (Yn(this.j), delete this.j)
    };

    function gy(a) {
        X.call(this);
        this.Ma = sp(a);
        this.Pa = tp(a);
        this.va = qc && a && a.isOgenEligibleMobileViewport;
        this.s = this.Pa || this.va;
        this.ta = this.O = null;
        this.s ? Mx(this, !0) : (this.oa = G("DIV"), this.wa = new Oq(this.oa), this.wa.render(hy), this.wa.Ea(!0), a = this.wa.ma(), x(a, "search-results-bar"), x(this.oa, "search-results-bar-contents"));
        this.o = this.s ? C("search-results-summ") : G("SPAN");
        this.s || this.oa.appendChild(this.o);
        this.ka = this.s ? C("search-result-links") : G("SPAN");
        this.s ? iy(this) : (x(this.ka, "search-bar-result-links"),
            this.oa.appendChild(this.ka), jy(this));
        this.ha = this.s ? C("search-snippet-links") : G("SPAN");
        this.s ? ky(this) : (this.Ma ? (this.Ca = G("DIV"), x(this.Ca, "search-bar-result-buttons"), this.oa.appendChild(this.Ca), this.Ca.appendChild(this.ha), Jb(this.ha, ["search-bar-sort-dropdown-button-container", "search-bar-close-link"]), ky(this)) : (this.Da = G("SPAN"), this.Ka = G("SPAN"), ly(this)), x(this.ha, "search-bar-snippet-links"));
        this.s || (my(this), Eh(this.oa, !0))
    }
    n(gy, X);

    function ny() {
        hy = C("search_bar")
    }

    function oy() {
        py = C("toolbar_container")
    }

    function Kx(a) {
        if (a.O) qy(a, !0);
        else {
            var b = "n" == a.j.o;
            N(a.Da, b);
            N(a.Ka, !b)
        }
        a.s ? (Mx(a, !0), Q(a.o, ul(a.j.N.Gb.length + " results")), a.o.removeAttribute("aria-label")) : Q(a.o, ul("Showing <b>" + (a.j.N.Gb.length + "</b> results in this book for <b>") + (Ks(a.j.N) + "</b>")));
        Lx(a, !0)
    }

    function iy(a) {
        up() || (ry(a, C("search-result-prev"), function() {
            sy(a, a.N, -1)
        }, "Previous result"), ry(a, C("search-result-next"), function() {
            sy(a, a.N, 1)
        }, "Next result"));
        ry(a, C("search-result-viewall"), function() {
            Jx(a.j)
        }, "View all");
        ry(a, C("search-close"), function() {
            a.La()
        }, "Close search")
    }

    function jy(a) {
        var b = G("SPAN");
        Q(b, ul("-&nbsp;&nbsp;"));
        x(b, "search-bar-link-spacer");
        a.ka.appendChild(b);
        ty(a, a.ka, "\u2039 Previous", function() {
            sy(a, a.N, -1)
        }, "Previous");
        b = G("SPAN");
        Q(b, ul("&nbsp;&nbsp;"));
        x(b, "search-bar-link-spacer");
        a.ka.appendChild(b);
        ty(a, a.ka, "Next \u203a", function() {
            sy(a, a.N, 1)
        }, "Next");
        b = G("SPAN");
        Q(b, ul("&nbsp;&nbsp;-&nbsp;&nbsp;"));
        x(b, "search-bar-link-spacer");
        a.ka.appendChild(b);
        ty(a, a.ka, "View all", function() {
            Jx(a.j)
        })
    }

    function ly(a) {
        a.oa.appendChild(a.ha);
        var b = G("SPAN");
        Q(b, ul("-&nbsp;&nbsp;"));
        x(b, "search-bar-link-spacer");
        a.ha.appendChild(b);
        a.ha.appendChild(of("Order by: "));
        a.ha.appendChild(a.Da);
        ty(a, a.Da, "relevance", function() {
            uy(a, "r")
        }, "Order by relevance");
        b = G("SPAN");
        Q(b, ul("&nbsp;|&nbsp;<b>pages</b>"));
        a.Da.appendChild(b);
        a.ha.appendChild(a.Ka);
        b = G("SPAN");
        Q(b, ul("<b>relevance</b>&nbsp;|&nbsp;"));
        a.Ka.appendChild(b);
        ty(a, a.Ka, "pages", function() {
            uy(a, "n")
        }, "Order by pages")
    }

    function ky(a) {
        a.O = a.s ? C("sort-dropdown-button") : F("A", {
            "class": "search-bar-sort-dropdown-link"
        });
        var b = a.s ? C("sort-dropdown-label") : F("SPAN", {
            "class": "search-bar-sort-dropdown-text"
        });
        J(b, "Order by");
        a.ta = F("SPAN", {
            "class": "search-bar-sort-dropdown-selected"
        });
        J(a.ta, "relevance");
        ym(a.O, "Order by relevance");
        b.appendChild(a.ta);
        a.s || (um(a.O, "button"), Hf(a.O, !0), Y(a.O, "haspopup", !0), a.ha.appendChild(a.O), a.O.appendChild(b), b = cx("/googlebooks/images/material/arrow_drop_down_black_20dp.png"), x(b[0],
            "search-bar-sort-dropdown-icon"), Y(b[0], "hidden", !0), a.O.appendChild(b[0]));
        b = new dy;
        var c = new Ux("relevance");
        c.Ai("Order by relevance");
        b.Ra(c, !0);
        Jb(c.ma(), ["search-bar-sort-dropdown-item", "search-bar-sort-dropdown-item-selected"]);
        var d = new Ux("pages");
        d.Ai("Order by pages");
        b.Ra(d, !0);
        x(d.ma(), "search-bar-sort-dropdown-item");
        b.Bm = !0;
        a.va ? b.render(a.ha) : b.render(document.body);
        x(b.ma(), "sort-dropdown-menu");
        a.Pa ? (b.attach(a.O, 12, 13), x(b.ma(), "popup-menu")) : b.attach(a.O, 13, 12);
        a.i.na(b, "action",
            function(e) {
                vy(a, e, c.ma(), d.ma())
            });
        a.i.na(b, "keydown", function(e) {
            32 != e.keyCode && 13 != e.keyCode || vy(a, e, c.ma(), d.ma())
        });
        a.va && a.i.na(b, "beforeshow", function() {
            var e = a.O.offsetWidth - 32;
            yh(c.ma(), e);
            yh(d.ma(), e)
        })
    }

    function my(a) {
        var b = G("SPAN");
        x(b, "search-bar-close-link-container");
        a.Ma ? a.Ca.appendChild(b) : a.oa.appendChild(b);
        a.i.na(b, "click", a.La);
        var c = ty(a, b, "Clear search", function() {
            a.La()
        });
        x(c, "search-bar-close-link");
        c = G("IMG");
        c.src = "/googlebooks/images/close_x.gif";
        x(c, "search-bar-close-img");
        b.appendChild(c)
    }

    function Lx(a, b) {
        N(py, !b);
        N(a.ha, b);
        a.s ? (N(a.ka, !b), b = !b && 1 == a.j.N.Gb.length, y(a.ka, "mobile-search-button-disabled", b), Y(a.ka, "disabled", b)) : N(a.ka, !b && 1 < a.j.N.Gb.length);
        a.oa && N(a.oa, !0);
        null != wy && wy.resize()
    }

    function xy(a) {
        a.O ? qy(a, !1) : N(a.ha, !1);
        a.va && N(a.ha, !0);
        N(a.ka, !1);
        rf(a.o)
    }

    function Fx(a) {
        xy(a);
        Q(a.o, ul("Loading..."));
        a.s && a.o.removeAttribute("aria-label")
    }

    function Hx(a) {
        xy(a);
        var b = a.j.N,
            c = Ls(b),
            d = null;
        c && !a.s && (d = G("SPAN"), Q(d, ul("Did you mean: ")), ty(a, d, c, function() {
            var h = a.j.j;
            if (h) {
                var k = Ie(c);
                Jo(h.V.Ya(), k);
                h.O.Dc(k);
                h.N && h.N.update()
            }
        }));
        var e = G("SPAN");
        a.s ? Q(e, ul("No results")) : Q(e, ul(Qb("No results found in this book for " + Ks(b))));
        b = G("A");
        a.s || (Q(b, ul("Search all books")), b.setAttribute("target", "_top"), x(b, "sitb-action-link"));
        var g = "patents" == fp() ? new S("https://www.google.com/search?tbm=pts&tbo=p&hl=en") : new S("https://www.google.com/search?tbm=bks&tbo=p");
        Ox(g);
        "embed" == U(g, "output") && Rj(g, "output");
        T(g, "q", Ie(Ks(a.j.N)));
        bj(b, mj(g.toString()));
        a.s ? (a.o.appendChild(e), a.o.removeAttribute("aria-label")) : a.Ma ? (a.o.appendChild(e), a.o.appendChild(b), d && (me(d, "afterbegin", ul("&nbsp;&nbsp;&middot;&nbsp;&nbsp;")), a.o.appendChild(d))) : (d && (a.o.appendChild(d), a.o.appendChild(G("BR"))), me(e, "beforeend", ul("&nbsp;&nbsp;-&nbsp;&nbsp;")), a.o.appendChild(e), me(b, "beforeend", ul(" &raquo;")), a.o.appendChild(b));
        null != wy && wy.resize()
    }
    gy.prototype.ya = function() {
        X.prototype.ya.call(this);
        li(this.wa);
        N(py, !0);
        I(this.oa);
        null != wy && wy.resize();
        this.s && (Mx(this, !1), I(af("sort-dropdown-menu")), rf(this.o))
    };

    function ty(a, b, c, d, e) {
        var g = G("SPAN");
        x(g, "search-bar-link");
        um(g, "link");
        ym(g, e ? e : c);
        Hf(g, !0);
        b.appendChild(g);
        g.innerText = c;
        a.i.na(g, "click", d);
        a.i.na(g, "keydown", function(h) {
            32 != h.keyCode && 13 != h.keyCode || d()
        });
        return g
    }

    function ry(a, b, c, d) {
        ym(b, d);
        b.setAttribute("title", d);
        a.i.na(b, "click", c);
        a.i.na(b, "keydown", function(e) {
            32 != e.keyCode && 13 != e.keyCode || c()
        })
    }
    gy.prototype.La = function() {
        Jo(this.j.j.V.Ya(), "");
        var a = this.j.j;
        a && a.N && a.N.update()
    };

    function sy(a, b, c) {
        var d = a.j.N.Gb.length;
        a.N += c;
        a.N >= d && (a.N = 0);
        0 > a.N && (a.N = d - 1);
        a.N != b && (Ix(a.j, a.j.N.Gb[a.N]) || sy(a, b, c))
    }

    function uy(a, b) {
        (a = a.j.j) && a.update(b)
    }

    function vy(a, b, c, d) {
        if ((b = b.target.Mc()) && a.ta) switch (b) {
            case "pages":
                uy(a, "n");
                J(a.ta, "pages");
                ym(a.O, "Order by pages");
                y(d, "search-bar-sort-dropdown-item-selected", !0);
                y(c, "search-bar-sort-dropdown-item-selected", !1);
                break;
            case "relevance":
                uy(a, "r"), J(a.ta, "relevance"), ym(a.O, "Order by relevance"), y(c, "search-bar-sort-dropdown-item-selected", !0), y(d, "search-bar-sort-dropdown-item-selected", !1)
        }
    }

    function qy(a, b) {
        a.O && (y(a.O, "search-bar-sort-dropdown-disabled", !b), Y(a.O, "disabled", !b));
        var c = "n" == a.j.o;
        b && !c && J(a.ta, "relevance")
    }

    function Mx(a, b) {
        a.va ? (N(C("gb-mobile-search"), b), N(C("gb-mobile-search-buttons"), b)) : (y(C("entity-page-search-nav"), "hide-search-nav", !b), y(C("search-results-summ"), "hide-search-nav", !b), y(C("search-close"), "hide-search-nav", !b))
    }
    var hy, py, wy;

    function yy(a, b, c, d) {
        X.call(this);
        var e = this;
        this.V = a;
        this.O = b;
        this.N = c;
        this.ka = d;
        this.ha = qc && d && d.isOgenEligibleMobileViewport;
        this.i.na(a.Ya(), "change", function() {
            e.update("r")
        })
    }
    n(yy, X);
    yy.prototype.update = function(a, b, c) {
        this.j ? (this.j.Ia(), this.j = null) : (this.V.ka && (this.s = this.V.ka), this.o = new gy(this.ka));
        var d = this.V.Ya().getQuery();
        b && !b.search_query_escaped && 0 < b.number_of_results && d && (b.search_query_escaped = d);
        if (b && b.search_query_escaped) {
            if (this.j = new Dx(this), this.o.j = this.j, a = !Lo(), Gx(this.j, a, b, c), c = this.o, up()) {
                b = c.j.N.Gb;
                a = b.length;
                (d = U(new S(window.location.href), "num")) && 0 < a && Ix(c.j, b[Number(d)]);
                d = C("search-result-prev");
                var e = 0 > c.N - 1 ? a - 1 : c.N - 1,
                    g = b[e];
                e = T(T(new S(d.href),
                    "pg", g.Sa()), "num", e);
                bj(d, mj(e.toString()));
                ym(d, "Previous result");
                d.setAttribute("title", "Previous result");
                d = C("search-result-next");
                c = c.N + 1 >= a ? 0 : c.N + 1;
                b = b[c];
                b = T(T(new S(d.href), "pg", b.Sa()), "num", c);
                bj(d, mj(b.toString()));
                ym(d, "Next result");
                d.setAttribute("title", "Next result")
            }
        } else d ? (this.j = new Dx(this), this.o.j = this.j, Ex(this.j, d, a), this.O.Dc(d)) : (this.j && (this.j.Ia(), this.j = null), this.V.Ja() instanceof ru && (this.V.ac(this.s), this.ha && this.V.Ja().zg(this.V.Ja().Fa().width)), this.o && (this.o.Ia(),
            this.o = null), this.O.Dc(""))
    };

    function zy(a) {
        Jq.call(this, a)
    }
    n(zy, Jq);

    function Ay() {
        var a = Lq(zy, '[null,null,null,null,null,"(function(){/*\\n\\n Copyright The Closure Library Authors.\\n SPDX-License-Identifier: Apache-2.0\\n*/\\n\'use strict\';var e\\u003dthis||self;function f(a){return a};var h;function k(a,c){this.g\\u003dc\\u003d\\u003d\\u003dl?a:\\"\\"}k.prototype.toString\\u003dfunction(){return this.g+\\"\\"};var l\\u003d{};function m(a){if(void 0\\u003d\\u003d\\u003dh){var c\\u003dnull;var b\\u003de.trustedTypes;if(b\\u0026\\u0026b.createPolicy){try{c\\u003db.createPolicy(\\"goog#html\\",{createHTML:f,createScript:f,createScriptURL:f})}catch(d){e.console\\u0026\\u0026e.console.error(d.message)}h\\u003dc}else h\\u003dc}a\\u003d(c\\u003dh)?c.createScriptURL(a):a;return new k(a,l)};/*\\n\\n SPDX-License-Identifier: Apache-2.0\\n*/\\nif(!function(){if(self.origin)return\\"null\\"\\u003d\\u003d\\u003dself.origin;if(\\"\\"!\\u003d\\u003dlocation.host)return!1;try{return window.parent.escape(\\"\\"),!1}catch(a){return!0}}())throw Error(\\"sandboxing error\\");\\nwindow.addEventListener(\\"message\\",function(a){var c\\u003da.ports[0];a\\u003da.data;var b\\u003da.callbackName.split(\\".\\"),d\\u003dwindow;\\"window\\"\\u003d\\u003d\\u003db[0]\\u0026\\u0026b.shift();for(var g\\u003d0;g\\u003cb.length-1;g++)d[b[g]]\\u003d{},d\\u003dd[b[g]];d[b[b.length-1]]\\u003dfunction(n){c.postMessage(JSON.stringify(n))};b\\u003ddocument.createElement(\\"script\\");a\\u003dm(a.url);b.src\\u003da instanceof k\\u0026\\u0026a.constructor\\u003d\\u003d\\u003dk?a.g:\\"type_error:TrustedResourceUrl\\";document.body.appendChild(b)},!0);}).call(this);\\n"]');
        if (!a) return null;
        a = zq(a, 6);
        if (null === a || void 0 === a) a = null;
        else {
            var b = fd();
            a = b ? b.createScript(a) : a;
            a = new md(a, ld)
        }
        return a
    };

    function By(a) {
        this.url = a;
        this.timeout = 5E3;
        this.s = "callback";
        this.i = this.j = null
    }

    function Cy(a) {
        var b = void 0 === b ? {} : b;
        a.i = Bk();
        var c = new S(a.url),
            d = new Map;
        d.set("callback", a.s);
        c.o.Gq(Uj(b), d);
        Dy(a).then(function() {
            Ey(a, c.toString())
        }).then(function() {
            return a.i.promise
        }).then(function() {
            Fy(a)
        }, function() {
            Fy(a)
        });
        0 < a.timeout && (a.o = setTimeout(function() {
            a.i.reject("Timeout!")
        }, a.timeout));
        return a.i.promise
    }

    function Ey(a, b) {
        var c = new MessageChannel;
        a.j.contentWindow.postMessage({
            url: b,
            callbackName: a.s
        }, "*", [c.port2]);
        c.port1.onmessage = function(d) {
            var e = {};
            void 0 !== a.o && (clearTimeout(a.o), a.o = void 0);
            void 0 === d.data && a.i.reject("Callback called, but no data received");
            "string" !== typeof d.data && a.i.reject("Exploitation attempt! Data is not a string!");
            try {
                e = JSON.parse(d.data)
            } catch (g) {
                a.i.reject("Invalid Data received: " + g.message)
            }
            a.i.resolve(e)
        }
    }

    function Dy(a) {
        var b = Bk(),
            c = G("IFRAME");
        if (!c.sandbox) throw Error("iframe sandboxes not supported");
        c.sandbox.value = "allow-scripts";
        c.style.display = "none";
        a.j = c;
        a = Ay();
        a = he(ke, ae("body", {}, fl(a)));
        c.srcdoc = Xd(a);
        a = rd("data:text/html;charset=UTF-8;base64," + btoa(Wd(a)));
        c.src = pd(a).toString();
        c.addEventListener("load", function() {
            return b.resolve(c)
        }, !1);
        c.addEventListener("error", function(d) {
            b.reject(d)
        }, !1);
        document.documentElement.appendChild(c);
        return b.promise
    }

    function Fy(a) {
        null !== a.j && (document.documentElement.removeChild(a.j), a.j = null)
    };

    function Gy(a) {
        Jr.call(this, a);
        this.j = new By(a);
        this.i = !0
    }
    n(Gy, Jr);
    Gy.prototype.nf = function(a, b) {
        Jr.prototype.nf.call(this, a, b);
        this.i = !1;
        Cy(this.j).then(r(this.N, this, a), r(this.s, this, b))
    };
    Gy.prototype.N = function(a, b) {
        this.i || (this.o = b, this.dispatchEvent("success"), a && a(this.o), this.i = !0)
    };
    Gy.prototype.s = function(a) {
        this.i || (this.dispatchEvent("error"), a && a(), this.i = !0)
    };
    Gy.prototype.abort = function() {
        return this.i = !0
    };

    function Hy(a, b, c, d, e) {
        Array.isArray(a) || (a = [a]);
        this.i = a;
        this.o = b;
        this.j = c;
        b = new S((GBS_HOST || "https://books.google.com/") + "books?jscmd=viewapi");
        T(b, "bibkeys", a.join(","));
        T(b, "hl", e || "en");
        T(b, "source", d || "previewlib");
        (new Gy(b)).nf(r(this.s, this))
    }
    Hy.prototype.s = function(a) {
        for (var b = 0; b < this.i.length; b++) {
            var c = a[this.i[b]];
            if (c) {
                var d = c.preview_url,
                    e;
                if (e = d) e = c.preview, c = c.embeddable, void 0 === c && (c = !0), e = ("full" == e || "partial" == e) && c;
                if (e) {
                    this.o && this.o(d);
                    return
                }
            }
        }
        this.j && this.j()
    };

    function Iy(a, b, c) {
        ox.call(this, a, b, c)
    }
    u(Iy, ox);
    f = Iy.prototype;
    f.mj = !1;
    f.Ji = !1;
    f.Pi = function() {
        Iy.ua.Pi.call(this);
        this.La = Yg(zh(this.ma()));
        this.i && (this.lb = Yg(zh(this.i)));
        this.Ji = this.mj;
        P(this.O.i, "mousemove", this.hh, !1, this)
    };
    f.xh = function() {
        Ni(this.O.i, "mousemove", this.hh, !1, this);
        this.lb = this.La = null;
        this.Ji = !1;
        Iy.ua.xh.call(this)
    };
    f.Fj = function(a) {
        if (this.wa) {
            var b = qh(this.ma()),
                c = M(this.ma());
            return b.x - this.wa.left <= a.x && a.x <= b.x + c.width + this.wa.right && b.y - this.wa.top <= a.y && a.y <= b.y + c.height + this.wa.bottom
        }
        return Iy.ua.Fj.call(this, a)
    };

    function Jy(a, b) {
        if (a.lb && Vg(a.lb, b) || a.Fj(b)) return !0;
        a = a.oa;
        return !!a && a.Fj(b)
    }
    f.rp = function(a) {
        this.ta = void 0;
        a != this.i || Jy(this, this.ka) || this.Yb || this.oa && this.oa.Yb || oc && 0 == this.ka.x && 0 == this.ka.y || this.Ea(!1)
    };
    f.hh = function(a) {
        var b = this.isVisible();
        if (this.La) {
            var c = gf(this.O.i);
            c = new B(a.clientX + c.x, a.clientY + c.y);
            Jy(this, c) ? b = !1 : this.Ji && (b = Wg(this.La, c) >= Wg(this.La, this.ka))
        }
        if (b) {
            if (this.Di(), this.Yb = null, b = this.oa) b.Yb = null
        } else 3 == qx(this) && this.Rg();
        Iy.ua.hh.call(this, a)
    };
    f.Fl = function() {
        this.Yb != this.ma() && (this.Ji = !1, this.Yb = this.ma())
    };
    f.zl = function() {
        return this.Ji ? 100 : Iy.ua.zl.call(this)
    };

    function Ky(a, b) {
        a = new Iy(a);
        a.nm(Fl(b.innerHTML, {
            yi: "0954fe00-75b6-49fb-8f60-c8631eadc3e0"
        }));
        a.className = "buy-tip-card";
        a.wa = new Tg(5, 5, 5, 5);
        a.mj = !0;
        a.qh = 500;
        a.li = 250
    };

    function Ly(a, b) {
        this.Fb = a || 200;
        this.Ab = b || 108;
        X.call(this)
    }
    u(Ly, X);
    Ly.prototype.Hb = function() {
        return this.Fb
    };
    Ly.prototype.Bb = function() {
        return this.Ab
    };

    function My(a) {
        ox.call(this, a, void 0, void 0);
        this.yo = !1;
        this.mj = !0;
        this.qh = 500
    }
    n(My, Iy);
    My.prototype.ak = function(a, b) {
        b || (b = new Su(a, 9, !0));
        Iy.prototype.ak.call(this, a, b)
    };
    My.prototype.className = "unified-hovercard";

    function Ny(a, b, c) {
        mi.call(this);
        this.j = null;
        this.data = a;
        this.i = b;
        this.maxWidth = c || 500
    }
    n(Ny, mi);
    Ny.prototype.ya = function() {
        this.j && this.j.Ia()
    };

    function Oy(a) {
        return a.j || (a.j = new Ri(a))
    }
    Ny.prototype.o = function(a) {
        var b = F("DIV"),
            c = new S(this.data.Ba.ih || this.data.Ba.Op);
        this.data.Ba.source && T(c, "source", this.data.Ba.source);
        var d = this.data.ob();
        this.data.Ba.mq && (d += ": " + this.data.Ba.mq);
        d = F("A", {}, d);
        d.classList.add(this.i + "-title");
        pe(d, c.toString());
        b.appendChild(d);
        a.appendChild(b);
        Py(this, a);
        b = F("DIV");
        if ("number" === typeof(this.data.Ba.Rp || 0)) {
            d = this.data.Ba.Rp || 0;
            c = Math.floor(d);
            d = 0 < d - c ? 1 : 0;
            for (var e = 5 - c - d, g = F("SPAN", this.i + "-stars goog-inline-block"); 0 < c;) {
                c--;
                var h = F("SPAN",
                    "card-star-on goog-inline-block");
                g.appendChild(h)
            }
            for (; 0 < d;) d--, h = F("SPAN", "card-star-half goog-inline-block"), g.appendChild(h);
            for (; 0 < e;) e--, h = F("SPAN", "card-star-off goog-inline-block"), g.appendChild(h);
            b.appendChild(g)
        }
        c = this.data.Ba.Wv;
        d = F("A", {}, this.data.Ba.nv + " reviews");
        d.classList.add(this.i + "-reviews-link");
        d.classList.add("goog-inline-block");
        pe(d, c);
        b.appendChild(d);
        a.appendChild(b);
        this.data.Ba.ym && (c = new Xh, b = F("DIV", this.i + "-snippet"), Q(b, c.xd(this.data.Ba.ym + " ")), c = F("A", {}, "more \u00bb"),
            c.classList.add(this.i + "-more-link"), pe(c, this.data.Ba.ih), b.appendChild(c), a.appendChild(b))
    };

    function Py(a, b) {
        var c = "",
            d = F("DIV"),
            e = a.data.Ba.Vk;
        if (!Pb(Pe(e))) {
            c = e.split(/\s*,\s*/g);
            e = c.length;
            if (!e) return;
            var g = F("SPAN", "author"),
                h = e - 1,
                k = of(", ");
            v(c, function(l, m) {
                var p = l ? l.replace(Qy, "") : "";
                p = De(p);
                l = new S(Ce('/ebooks?output=ws2&as_brr=5&q=inauthor:"%s"', p));
                Ox(l);
                p = F("A", {}, p);
                pe(p, l.toString());
                g.appendChild(p);
                m < h && g.appendChild(k.cloneNode(!0))
            }, a);
            d.appendChild(g);
            c = "\u00a0-\u00a0"
        }
        a.data.Ba.Qj && (pf(d, F("SPAN", a.i + "-pubdate", c + a.data.Ba.Qj)), c = "\u00a0-\u00a0");
        a.data.Ba.Ap && (d.appendChild(of(c)),
            pf(d, F("SPAN", a.i + "-pagesnum", a.data.Ba.Ap + " pages")));
        b.appendChild(d)
    }

    function Ry(a, b, c, d, e, g, h) {
        c = F("A", {
            id: h || ""
        }, c);
        pe(c, e ? "#" : d);
        c.classList.add(a.i + "-button");
        c.classList.add(a.i + "-button-hilite");
        g && c.classList.add("disabled");
        e && (e = cg || dg ? "touchstart" : "click", Oy(a).Hf(c, e, function(k) {
            k.preventDefault();
            k = F("FORM", {
                method: "POST"
            });
            var l = d instanceof td ? d : Bd(d);
            k.action = vd(l);
            K(k, {
                position: "absolute",
                overflow: "hidden",
                width: "1px",
                height: "1px",
                visibility: "hidden"
            });
            b.appendChild(k);
            k.submit()
        }, !1));
        b.appendChild(c)
    }
    var Qy = /(<b\s*>)|(<\/b>)/ig,
        Sy = {
            VIEW_PAGES_PARTIAL: 2,
            VIEW_PAGES_ALL: 5,
            VIEW_PAGES_PARTIAL_FIXED: 6,
            VIEW_PURCHASED: 7,
            VIEW_GOOGLE_EDITIONS_PREVIEW: 8
        };

    function Ty() {
        this.Ba = {}
    }
    f = Ty.prototype;
    f.ob = function() {
        return this.Ba.title
    };
    f.bc = function() {
        return this.Ba.Dm
    };
    f.ae = function() {
        return this.Ba.ae
    };
    f.Kl = function() {
        return this.Ba.Kl
    };
    f.lg = function() {
        return this.Ba.lg
    };
    f.ri = function() {
        return this.Ba.ri
    };

    function Uy() {
        this.i = []
    }
    f = Uy.prototype;
    f.getId = function() {
        return this.Cb
    };
    f.nh = function(a) {
        this.Cb = a
    };
    f.ob = function() {
        return this.Ec
    };
    f.Zg = function() {
        return this.s
    };

    function Vy(a, b, c) {
        Wy(a, b) || null == a.ha || !a.o ? c && c(null) : Xy(b, a.ha.clone(), r(a.Ss, a, b, c || function() {}))
    }

    function Yy(a, b, c) {
        Wy(a, b) && null != a.oa && a.ta ? Xy(b, a.oa.clone(), r(a.ht, a, b, c || function() {})) : c && c(null)
    }

    function Xy(a, b, c) {
        T(b, "id", a);
        Vk(b, c, "POST")
    }
    f.Ss = function(a, b, c) {
        var d = null;
        cl(c.target) && (d = new Ty, d.Ba.Dm = a, this.i.push(d));
        b(d)
    };
    f.ht = function(a, b, c) {
        var d = null;
        cl(c.target) && (d = Wy(this, a), Zy(this, d));
        b(d)
    };

    function Zy(a, b) {
        tb(a.i, function(c) {
            return c.bc() == b.bc()
        })
    }

    function Wy(a, b) {
        return nb(a.i, function(c) {
            return c && c.bc() == b
        })
    };

    function $y(a) {
        this.Ba = {};
        this.Ba.title = a.title;
        this.Ba.mq = a.subtitle;
        this.Ba.Vk = a.authors;
        this.Ba.Op = a.preview_url;
        this.Ba.ih = a.info_url;
        this.Ba.Qj = a.pub_date;
        this.Ba.Ap = a.num_pages;
        this.Ba.xq = a.viewability;
        this.Ba.wx = a.subject;
        this.Ba.pq = a.thumbnail_url;
        this.Ba.ym = a.snippet;
        this.Ba.lx = a.list_price;
        this.Ba.bq = a.sale_price;
        this.Ba.tx = a.sale_price_better;
        this.Ba.pv = a.offer_price;
        this.Ba.bl = a.buy_url;
        this.Ba.Sp = a.read_url;
        this.Ba.Gj = a.is_free_ebook || !1;
        this.Ba.Ej = a.in_my_ebooks || !1;
        this.Ba.mx = a.my_ebooks_url ||
            "";
        this.Ba.Rp = a.rating_score || 0;
        this.Ba.nv = a.num_reviews || 0;
        this.Ba.ae = a.is_purchased || !1;
        this.Ba.oi = a.is_ebook || !1;
        this.Ba.Ax = a.write_review_url || "";
        this.Ba.wt = a.add_to_my_ebooks_url || "";
        this.Ba.Iv = a.preview_ebook_url || "";
        this.Ba.Wv = a.reviews_url || "";
        this.Ba.jk = a.view_order_url || "";
        this.Ba.Yw = a.add_to_my_ebooks_url;
        this.Ba.Rs = a.add_to_my_ebooks_url_is_on_play || !1;
        this.Ba.Cj = a.has_flowing_text || !1;
        this.Ba.Dj = a.has_scanned_text || !1;
        var b = ep(a.info_url);
        this.Ba.Dm = b;
        this.Ba.ax = a.canonical_atb_url ||
            "";
        this.Ba.Kl = a.is_rentable || !1;
        this.Ba.ng = a.is_pre_order || !1;
        this.Ba.Jp = a.on_sale_date || "";
        this.Ba.lg = a.is_pre_ordered || !1;
        this.Ba.kx = a.issue_volume_count || 0;
        this.Ba.ri = a.is_volume_cancelled || !1;
        this.Ba.Us = a.cancelled_reason || "0";
        switch (a.rental_state) {
            case 1:
                this.Ba.Sj = 1;
                break;
            case 2:
                this.Ba.Sj = 2
        }
        this.Ba.Sv = a.rental_end_utc || 0
    }
    n($y, Ty);

    function az(a) {
        this.i = [];
        this.nh(a.id);
        this.N = a.owner_uid;
        this.Ec = a.title;
        this.s = a.description;
        this.wa = a.num_volumes;
        this.Ke = a.access || "0";
        this.Na = a.can_modify_metadata;
        this.ka = a.predefined;
        this.ta = a.can_remove_volumes;
        this.o = a.can_add_volumes;
        this.va = a.can_only_add_ebooks || !1;
        this.ha = new S(a.add_vol_base_url);
        this.oa = new S(a.del_vol_base_url);
        void 0 !== a.paused && (this.j = a.paused, this.O = a.pause_bookshelf_url);
        a.volumes && (this.i = lb(a.volumes, function(b) {
            return new $y(b)
        }))
    }
    n(az, Uy);

    function bz() {
        X.call(this);
        this.o = [];
        this.j = []
    }
    u(bz, X);

    function cz(a) {
        var b = new S(jf().location);
        b = new S(b);
        return a === parseInt(U(b, "as_coll"), 10)
    }

    function dz(a, b, c) {
        ez(a, b.getId()) || (a = b.ka ? a.o : a.j, c ? xb(a, void 0, 0, b) : a.push(b))
    }

    function fz(a, b, c) {
        var d = 1 == b.Ke;
        a = new S(a);
        T(a, "cl_title", b.ob());
        T(a, "cl_mode", d ? "public" : "private");
        b = "cl_des=" + encodeURIComponent(String(b.Zg()));
        Vk(a, c, "POST", b)
    }
    bz.prototype.O = function(a) {
        a = a.target;
        if (cl(a)) {
            a = new az(el(a));
            var b = ez(this, a.getId());
            b.Ec = a.ob();
            b.s = a.Zg();
            b.Ke = a.Ke;
            b = new pi("update", this);
            b.shelf = a;
            this.dispatchEvent(b)
        }
    };
    bz.prototype.N = function(a, b) {
        b = b.target;
        cl(b) && (b = new az(el(b)), dz(this, b, a), a = new pi("add", this), a.shelf = b, this.dispatchEvent(a))
    };

    function gz(a, b) {
        a.s = new S(b);
        T(a.s, "jscmd", "ClCreate")
    }

    function ez(a, b) {
        return nb(hz(a), function(c) {
            return c.getId() == b
        })
    }

    function hz(a) {
        return Cb(a.o, a.j)
    };

    function iz(a, b) {
        var c = F("A", {}, "View order");
        pe(c, a);
        c.classList.add(b);
        return c
    };

    function jz(a, b, c) {
        Ny.call(this, a, b, c);
        U(new S(this.data.Ba.ih), "dapp")
    }
    n(jz, Ny);
    jz.prototype.render = function(a) {
        rf(a);
        var b = F("DIV", this.i),
            c = F("DIV", this.i + "-meta");
        this.o(c);
        var d = F("DIV", this.data.Ba.oi ? this.i + "-footer" : this.i + "-footer-nonebook"),
            e = F("DIV", this.i + "-footer-inner");
        if (this.data.Ba.oi)
            if (this.data.ri() && cz(1)) kz(this, e);
            else if (this.data.Ba.ng && !this.data.ae() || this.data.lg()) {
            var g = F("DIV", this.i + "-pre-order-date");
            g.textContent = "Available on: " + this.data.Ba.Jp;
            e.appendChild(g);
            this.data.lg() && cz(1) && kz(this, e)
        } else if (this.data.ae() && cz(1)) lz(this, e), kz(this,
            e);
        else {
            lz(this, e);
            g = !this.data.ae() && !this.data.Ba.Gj;
            var h = this.data.Ba.Gj && !this.data.Ba.Ej;
            if (g || h) {
                g = F("SPAN", {
                    "class": this.i + "-footer-inner-right"
                });
                if (h = this.data.Ba.Iv || this.data.Ba.Sp) {
                    for (var k = h.search(Bj), l = 0, m, p = []; 0 <= (m = Aj(h, l, "source", k));) p.push(h.substring(l, m)), l = Math.min(h.indexOf("&", m) + 1 || k, k);
                    p.push(h.slice(l));
                    h = p.join("").replace(Dj, "$1");
                    h = zj(h, "source", "ebookstore")
                }
                h && (k = F("A", {
                    id: "unified-hovercard-preview-link"
                }, "preview it"), pe(k, h), g.appendChild(k));
                e.appendChild(g)
            }
        }
        d.appendChild(e);
        b.appendChild(c);
        b.appendChild(d);
        a.appendChild(b);
        M(a).width > this.maxWidth && L(a, this.maxWidth, "")
    };
    jz.prototype.o = function(a) {
        if (!(this.data.ae() || this.data.lg() || this.data.ri()) && this.data.Ba.jk && cz(1)) {
            var b = F("IMG", {
                src: "/googlebooks/images/purchase_error.gif",
                "class": this.i + "-error-icon"
            });
            b = F("DIV", this.i + "-card-error", b, "Credit card declined:");
            if (this.data.Ba.jk) {
                var c = iz(this.data.Ba.jk, "primary"),
                    d = F("SPAN");
                d.innerText = "&nbsp;";
                b.appendChild(d);
                b.appendChild(c)
            }
            a.appendChild(b)
        }
        Ny.prototype.o.call(this, a);
        b = F("DIV", this.i + "-book-options");
        this.data.Ba.oi ? (this.data.Ba.Gj ? this.data.Ba.Ej ?
            mz(this, b) : Ry(this, b, "Read eBook", this.data.Ba.wt, !this.data.Ba.Rs, void 0, "unified-hovercard-free-btn") : this.data.lg() ? (c = F("SPAN", this.i + "-pre-ordered", "Pre-ordered"), b.appendChild(c)) : this.data.ri() && cz(1) ? (c = F("DIV", this.i + "-cancelled"), d = this.data.Ba.Us, 0 == d ? J(c, "Cancelled - by customer request") : 1 == d ? J(c, "Cancelled - problem with eBook") : 2 == d ? J(c, "Cancelled - price change") : 3 == d ? J(c, "Cancelled - publisher cancellation") : J(c, "Cancelled"), b.appendChild(c)) : this.data.ae() || this.data.Ba.Ej ? !this.data.ae() &&
            this.data.Ba.Ej ? nz(this, b) : this.data.ae() && mz(this, b) : nz(this, b), cz(7) && (c = F("SPAN", this.i + "-offline-remove-options"), d = F("SPAN", {
                id: "unified-hovercard-remove-from-ebooks",
                "class": this.i + "-fake-link"
            }, "Remove from My eBooks"), d.id = "hovercard-remove-from-my-ebooks", c.appendChild(d), b.appendChild(c))) : (c = this.data.Ba.Op, Vc(Sy, this.data.Ba.xq) && !Pb(c) ? Ry(this, b, "Preview", c, void 0, void 0, "unified-hovercard-preview-sample") : Ry(this, b, "Preview", c, !1, !0, "unified-hovercard-preview-sample"));
        a.appendChild(b)
    };

    function kz(a, b) {
        var c = F("DIV", {
                id: "unified-hovercard-purchased-shelf-links",
                "class": a.i + "-order-links-container"
            }),
            d = a.data.Ba.jk;
        d && (d = iz(d, ""), c.appendChild(d));
        a.data.lg() || (d = F("DIV", {
            id: "unified-hovercard-delete-forever",
            "class": a.i + "-footer-fake-link"
        }, "Delete forever"), x(d, a.i + "-footer-action-link"), d.id = "hovercard-delete-forever", c.appendChild(d));
        b.appendChild(c)
    }

    function nz(a, b) {
        a.data.Ba.ng && !a.data.ae() ? Ry(a, b, "Pre-order eBook - " + a.data.Ba.bq, a.data.Ba.bl, void 0, void 0, "unified-hovercard-buy-btn") : a.data.Kl() ? Ry(a, b, "EBOOK FROM " + a.data.Ba.pv, a.data.Ba.bl, void 0, void 0, "unified-hovercard-buy-btn") : Ry(a, b, "Buy eBook - " + a.data.Ba.bq, a.data.Ba.bl, void 0, void 0, "unified-hovercard-buy-btn")
    }

    function mz(a, b) {
        Ry(a, b, "Read now", a.data.Ba.Sp, void 0, void 0, "unified-hovercard-read-now")
    }

    function lz(a, b) {
        var c = F("DIV", a.i + "-supported-devices"),
            d = a.i + "-device-type",
            e = a.i + "-device-supported",
            g = a.i + "-device-not-supported",
            h = F("SPAN", d, "Web"),
            k = F("SPAN", d, "Tablet / iPad"),
            l = F("SPAN", d, "eReader");
        d = F("SPAN", d, "Smartphone");
        var m = F("SPAN", "goog-inline-block"),
            p = F("SPAN", "goog-inline-block"),
            w = F("SPAN", "goog-inline-block"),
            D = F("SPAN", "goog-inline-block");
        a.data.Ba.Cj ? (x(m, e), x(p, e), x(w, e), x(D, e)) : (a.data.Ba.Dj ? (x(m, e), x(p, e)) : (x(m, g), x(p, g)), x(w, g), x(D, g));
        c.appendChild(m);
        c.appendChild(h);
        c.appendChild(p);
        c.appendChild(k);
        c.appendChild(w);
        c.appendChild(l);
        c.appendChild(D);
        c.appendChild(d);
        b.appendChild(c)
    };

    function oz(a, b, c) {
        My.call(this, a);
        this.Sb = Ul();
        this.o = this.Ca = this.N = null;
        this.Ob = b;
        this.j = null;
        this.Tb = !!c;
        this.render(b);
        pz(this)
    }
    n(oz, My);
    oz.prototype.ya = function() {
        Oy(this.j).Ia();
        I(this.ma())
    };
    oz.prototype.ui = function(a, b) {
        My.prototype.ui.call(this, a, b);
        this.isVisible() && (this.Ul = this.Sb ? new Tg(0, -2, 0, 0) : new Tg(0, 0, 0, -2), this.isVisible() && this.Ag(), this.N = this.i, qz(this))
    };
    oz.prototype.render = function(a) {
        this.j && (this.j.Ia(), this.o = this.Ca = null);
        this.j = new jz(a, this.className, 435, this.Tb);
        this.j.render(this.ma());
        pz(this);
        this.isVisible() && qz(this)
    };

    function qz(a) {
        var b = F("DIV"),
            c = F("DIV");
        var d = zh(a.N || null);
        var e = zh(a.ma());
        if (d) {
            d.top = Math.ceil(d.top);
            e.top = Math.ceil(e.top);
            d.left = Math.ceil(d.left);
            e.left = Math.ceil(e.left);
            var g = e.top >= d.top,
                h = ah(e, d);
            h || (h = new Xg(d.left, 0, d.width, 0));
            d = a.Sb ? e.left + e.width - h.left - (h.width / 2 + 12) : h.left - e.left + (h.width / 2 - 12);
            e = {
                x: 0 < d ? d : 0,
                y: e.height - 2,
                Zu: g
            }
        } else e = null;
        g = a.Sb ? "marginRight" : "marginLeft";
        K(c, g, e.x + "px");
        K(b, g, e.x - 1 + "px");
        x(a.ma(), a.className + "-tooltip");
        e.Zu ? (K(c, "bottom", e.y + "px"), K(b, "bottom",
            e.y + 1 + "px"), x(c, a.className + "-arrow-up"), x(b, a.className + "-arrow-up-border")) : (K(c, "top", e.y + "px"), K(b, "top", e.y + 1 + "px"), a.Ob.Ba.oi || x(c, a.className + "-nofooter"), x(c, a.className + "-arrow-down"), x(b, a.className + "-arrow-down-border"));
        a.o ? vf(b, a.o) : a.ma().appendChild(b);
        a.Ca ? vf(c, a.Ca) : a.ma().appendChild(c);
        a.Ca = c;
        a.o = b
    }
    oz.prototype.yc = function(a) {
        var b = a.target || null;
        if (b) {
            3 == b.nodeType && (b = b.parentNode);
            switch (b.id) {
                case "hovercard-remove-from-my-ebooks":
                    a.preventDefault();
                    var c = "c";
                    break;
                case "hovercard-save-sample-for-later":
                case "hovercard-add-to-my-ebooks":
                    a.preventDefault();
                    c = "a";
                    break;
                case "hovercard-delete-forever":
                    a.preventDefault();
                    c = "b";
                    break;
                default:
                    b.href && (c = "f", "touchstart" == a.type && (a = window.location, b = mj(b.href), b = aj(b), void 0 !== b && a.replace(b)))
            }
            c && this.dispatchEvent(new pi(c, this))
        }
    };

    function pz(a) {
        var b = cg || dg ? "touchstart" : "click";
        Ui(Oy(a.j), a.ma(), b, a.yc, a)
    };

    function rz(a, b, c) {
        Ly.call(this, b);
        this.j = a;
        this.o = null;
        this.N = !1;
        if (c == (1).toString() || c == (7).toString()) this.N = !0
    }
    u(rz, Ly);
    var sz = new R;
    rz.prototype.Vc = function(a) {
        var b = F("A", {
            className: "slider-link goog-inline-block"
        });
        L(b, "", this.Hb());
        var c = new S(this.j.Ba.ih);
        this.j.Ba.source ? T(c, "source", this.j.Ba.source) : T(c, "source", "gbs_slider_thumb");
        Rj(c, "num");
        pe(b, c.toString());
        a.appendChild(b);
        this.o = G("IMG");
        this.o.alt = "";
        this.i.Hf(this.o, "load", r(this.oa, this));
        sz.dispatchEvent("start");
        (a = this.j.Ba.pq) ? (a = new S(a), T(a, "h", this.Hb()), T(a, "stbn", 1), Rj(a, "edge"), this.o.src = a.toString()) : this.o.src = "/googlebooks/images/no_cover_thumb.gif";
        L(this.o, "", this.Hb());
        b.appendChild(this.o);
        this.N && 2 == this.j.Ba.Sj ? (this.s = F("SPAN", ["bookcard-badge", "bookcard-sample-label"], "Expired"), b.appendChild(this.s)) : this.N && 1 == this.j.Ba.Sj ? (a = this.j, 1 == a.Ba.Sj ? (a = a.Ba.Sv - $a() / 1E3, a = Math.round(a / 3600), c = Math.round(a / 24), a = 1 >= a ? "Expiring soon" : 48 >= a ? a + " hours" : c + " days") : a = "", this.s = F("SPAN", ["bookcard-badge", "bookcard-sample-label"], a), b.appendChild(this.s)) : !this.N || this.j.ae() || this.j.Ba.Gj || (this.s = F("SPAN", ["bookcard-badge", "bookcard-sample-label"],
            "Sample"), b.appendChild(this.s));
        Gi(b, "mouseover", this.ta.bind(this, b))
    };
    rz.prototype.oa = function() {
        this.dispatchEvent("render");
        sz.dispatchEvent("complete");
        this.s && yh(this.s, M(this.o).width)
    };
    rz.prototype.ta = function(a, b) {
        (new oz(a, this.j)).Ve(b)
    };

    function tz(a, b, c) {
        rz.call(this, a, b - 40, c);
        this.O = F("DIV", "slider-annotation");
        this.ka = !1
    }
    n(tz, rz);
    tz.prototype.Vc = function(a) {
        Gi(this, "render", r(this.va, this));
        rz.prototype.Vc.call(this, a);
        a.appendChild(this.O)
    };
    tz.prototype.va = function(a) {
        this.ka || (a.stopPropagation(), a = this.ha(), this.O.appendChild(a), this.ka = !0, this.dispatchEvent("render"))
    };

    function uz(a, b, c) {
        tz.call(this, a, b, c)
    }
    n(uz, tz);
    uz.prototype.Vc = function(a) {
        tz.prototype.Vc.call(this, a)
    };
    uz.prototype.ha = function() {
        var a = this.j,
            b = G("DIV"),
            c = F("A", {
                className: "slider-annotation-title"
            }, of(a.ob()));
        pe(c, a.Ba.ih);
        b.appendChild(c);
        if (a = a.Ba.Vk) a = F("DIV", "slider-annotation-author", of(a)), b.appendChild(a);
        L(b, M(this.o).width + 5, "");
        return b
    };

    function vz() {
        this.i = wz;
        this.wg = 5E3
    }
    var xz = 0;
    vz.prototype.send = function(a, b, c, d) {
        a = a ? $c(a) : {};
        d = d || "_" + (xz++).toString(36) + Date.now().toString(36);
        var e = "_callbacks___" + d;
        b && (q[e] = yz(d, b), a.callback = e);
        b = {
            timeout: this.wg,
            Xs: !0
        };
        e = qd.exec(pd(this.i).toString());
        var g = e[3] || "";
        e = rd(e[1] + sd("?", e[2] || "", a) + sd("#", g));
        b = vo(e, b);
        qo(b, null, zz(d, a, c));
        return {
            Cb: d,
            no: b
        }
    };
    vz.prototype.cancel = function(a) {
        a && (a.no && a.no.cancel(), a.Cb && Az(a.Cb, !1))
    };

    function zz(a, b, c) {
        return function() {
            Az(a, !1);
            c && c(b)
        }
    }

    function yz(a, b) {
        return function(c) {
            Az(a, !0);
            b.apply(void 0, arguments)
        }
    }

    function Az(a, b) {
        a = "_callbacks___" + a;
        if (q[a])
            if (b) try {
                delete q[a]
            } catch (c) {
                q[a] = void 0
            } else q[a] = Oc
    };

    function Bz(a, b, c) {
        R.call(this);
        this.ha = a;
        this.ta = c;
        this.o = b;
        P(b, ["hilite", "select", "canceldismiss", "dismiss"], this.handleEvent, !1, this);
        this.O = null;
        this.j = [];
        this.s = -1;
        this.i = 0;
        this.N = this.ka = null;
        this.wa = {}
    }
    u(Bz, R);
    f = Bz.prototype;
    f.zk = !0;
    f.Tk = !1;
    f.Dd = function() {
        return this.o
    };
    f.handleEvent = function(a) {
        var b = this.ha;
        if (a.target == this.o) switch (a.type) {
            case "hilite":
                this.We(a.Of);
                break;
            case "select":
                var c = !1;
                if ("number" === typeof a.Of) {
                    a = a.Of;
                    var d = this.j[Cz(this, a)];
                    c = !!d && b.Ll && b.Ll(d);
                    d && !c && this.s != a && this.We(a)
                }
                c || this.qg();
                break;
            case "canceldismiss":
                Dz(this);
                break;
            case "dismiss":
                Ez(this)
        }
    };
    f.wd = function() {
        return this.o.isVisible()
    };

    function Fz(a) {
        for (var b = a.i + a.j.length - 1, c = a.s, d = 0; d < a.j.length; d++) {
            if (c >= a.i && c < b) c++;
            else if (-1 == c) c = a.i;
            else {
                a.Tk && c == b && a.We(-1);
                break
            }
            if (a.We(c)) break
        }
    }
    f.We = function(a) {
        var b = Cz(this, a),
            c = this.j[b];
        return c && this.ha.Ll && this.ha.Ll(c) ? !1 : (this.s = a, this.o.We(a), -1 != b)
    };
    f.qg = function() {
        var a = Cz(this, this.s);
        if (-1 != a) {
            var b = this.j[a],
                c = this.ta;
            if (c.Pb) {
                var d = b.toString();
                if (c.o) {
                    var e = Gz(c, c.Db(), Hz(c.Pb)[0]),
                        g = Iz(c, c.Db());
                    c.oa && !c.oa.test(d) && (d = d.replace(/[\s\xa0]+$/, "") + c.va);
                    0 == e || Pb(g[e - 1]) || (d = " " + d);
                    e == g.length - 1 && (d += " ");
                    if (d != g[e]) {
                        g[e] = d;
                        d = c.Pb;
                        (oc || A) && d.blur();
                        d.value = g.join("");
                        for (var h = 0, k = 0; k <= e; k++) h += g[k].length;
                        d.focus();
                        e = h;
                        g = c.Pb;
                        Jz(g) && (g.selectionStart = e);
                        g = c.Pb;
                        Jz(g) && (g.selectionEnd = e)
                    }
                } else c.Dc(d);
                c.im = !0
            }
            this.Pe();
            this.dispatchEvent({
                type: "update",
                Of: b,
                index: a
            });
            return !0
        }
        this.Pe();
        this.dispatchEvent({
            type: "update",
            Of: null,
            index: null
        });
        return !1
    };
    f.Pe = function() {
        this.s = -1;
        this.O = null;
        this.i += this.j.length;
        this.j = [];
        window.clearTimeout(this.N);
        this.N = null;
        this.o.Pe();
        this.dispatchEvent("suggestionsupdate");
        this.dispatchEvent("dismiss")
    };

    function Ez(a) {
        a.N || (a.N = window.setTimeout(r(a.Pe, a), 100))
    }
    f.ip = function() {
        return this.N ? (window.clearTimeout(this.N), this.N = null, !0) : !1
    };

    function Dz(a) {
        a.ip() || window.setTimeout(r(a.ip, a), 10)
    }
    f.ya = function() {
        Bz.ua.ya.call(this);
        delete this.wa;
        this.o.Ia();
        this.ta.Ia();
        this.ha = null
    };
    f.dv = function(a, b, c) {
        this.O == a && this.hm(b, c)
    };
    f.hm = function(a, b) {
        var c = "object" == Sa(b) && b;
        b = (c ? c.j() : b) ? Cz(this, this.s) : -1;
        this.i += this.j.length;
        this.j = a;
        for (var d = [], e = 0; e < a.length; ++e) d.push({
            id: this.i + e,
            data: a[e]
        });
        a = null;
        this.ka && (a = this.wa[Va(this.ka)] || this.ka);
        this.o.Vj(a);
        this.o.hm(d, this.O, this.ka);
        a = this.zk;
        c && void 0 !== c.i() && (a = c.i());
        this.s = -1;
        (a || 0 <= b) && 0 != d.length && this.O && (0 <= b ? this.We(this.i + b) : Fz(this));
        this.dispatchEvent("suggestionsupdate")
    };

    function Cz(a, b) {
        b -= a.i;
        return 0 > b || b >= a.j.length ? -1 : b
    }
    f.update = function(a) {
        this.ta.update(a)
    };

    function Hz(a) {
        var b = 0,
            c = 0;
        Jz(a) && (b = a.selectionStart, c = -1);
        return [b, c]
    }

    function Jz(a) {
        try {
            return "number" == typeof a.selectionStart
        } catch (b) {
            return !1
        }
    };

    function Kz(a, b, c, d) {
        mi.call(this);
        d = d || 150;
        this.o = null != c ? c : !0;
        this.N = a || ",;";
        this.va = this.N.charAt(0);
        a = this.o ? "[\\s" + this.N + "]+" : "[\\s]+";
        this.ta = new RegExp("^" + a + "|" + a + "$", "g");
        this.oa = new RegExp("\\s*[" + this.N + "]$");
        this.ka = b || "";
        this.wa = this.o;
        this.ab = 0 < d ? new Ok(d) : null;
        this.j = new Ri(this);
        this.O = new Ri(this);
        this.s = new kt;
        this.ha = -1
    }
    u(Kz, mi);
    f = Kz.prototype;
    f.Pb = null;
    f.Rl = "";
    f.Qf = !1;
    f.im = !1;
    f.Db = function() {
        return this.Pb.value
    };
    f.Dc = function(a) {
        this.Pb.value = a
    };

    function Lz(a, b) {
        zf(b) && (um(b, "combobox"), Y(b, "autocomplete", "list"));
        a.j.na(b, "focus", a.Zm);
        a.j.na(b, "blur", a.pr);
        a.Pb || (a.O.na(b, "keydown", a.yv), zf(b) && Nf(Ve(b)) == b && Mz(a, b))
    }
    f.nr = function(a) {
        for (var b = 0; b < arguments.length; b++) Lz(this, arguments[b])
    };
    f.ya = function() {
        Kz.ua.ya.call(this);
        this.j.Ia();
        delete this.j;
        this.O.Ia();
        this.s.Ia();
        li(this.ab)
    };
    f.Wc = function(a) {
        switch (a.keyCode) {
            case 40:
                if (this.i.wd()) return Fz(this.i), a.preventDefault(), !0;
                if (!this.o) return this.update(!0), a.preventDefault(), !0;
                break;
            case 38:
                if (this.i.wd()) {
                    a: for (var b = this.i, c = b.s, d = 0; d < b.j.length; d++) {
                        if (c > b.i) c--;
                        else {
                            b.Tk && c == b.i && b.We(-1);
                            break
                        }
                        if (b.We(c)) break a
                    }
                    a.preventDefault();
                    return !0
                }
                break;
            case 9:
                if (!this.i.wd() || a.shiftKey) this.i.Pe();
                else if (this.update(), this.i.qg() && this.wa) return a.preventDefault(), !0;
                break;
            case 13:
                if (this.i.wd()) {
                    if (this.update(), this.i.qg()) return a.preventDefault(),
                        a.stopPropagation(), !0
                } else this.i.Pe();
                break;
            case 27:
                if (this.i.wd()) return this.i.Pe(), a.preventDefault(), a.stopPropagation(), !0;
                break;
            case 229:
                if (!this.Qf) return this.Qf || (this.j.na(this.Pb, "keyup", this.Fp), this.j.na(this.Pb, "keypress", this.Ep), this.Qf = !0), !0
        }
        return Nz(this, a)
    };

    function Nz(a, b) {
        var c = a.o && b.charCode && -1 != a.N.indexOf(String.fromCharCode(b.charCode));
        c && a.update();
        return c && a.i.qg() ? (b.preventDefault(), !0) : !1
    }
    f.du = function() {
        return !1
    };
    f.Zm = function(a) {
        Mz(this, a.target || null)
    };

    function Mz(a, b) {
        Wi(a.O);
        a.i && Dz(a.i);
        b != a.Pb && (a.Pb = b, a.ab && (a.ab.start(), a.j.na(a.ab, "tick", a.bn)), a.Rl = a.Db(), a.s.attach(a.Pb), a.j.na(a.s, "key", a.an), a.j.na(a.Pb, "mousedown", a.Gp), A && a.j.na(a.Pb, "keypress", a.Dp))
    }
    f.pr = function() {
        this.Pb && (this.j.hb(this.s, "key", this.an), ot(this.s), this.j.hb(this.Pb, "keyup", this.du), this.j.hb(this.Pb, "mousedown", this.Gp), A && this.j.hb(this.Pb, "keypress", this.Dp), this.Qf && Oz(this), this.Pb = null, this.ab && (this.ab.stop(), this.j.hb(this.ab, "tick", this.bn)), this.i && Ez(this.i))
    };
    f.bn = function() {
        this.update()
    };
    f.yv = function(a) {
        this.Zm(a)
    };
    f.an = function(a) {
        this.ha = a.keyCode;
        this.i && this.Wc(a)
    };
    f.Ep = function() {
        this.Qf && 229 != this.ha && Oz(this)
    };
    f.Fp = function(a) {
        this.Qf && (13 == a.keyCode || 77 == a.keyCode && a.ctrlKey) && Oz(this)
    };
    f.Gp = function() {};

    function Oz(a) {
        a.Qf && (a.Qf = !1, a.j.hb(a.Pb, "keypress", a.Ep), a.j.hb(a.Pb, "keyup", a.Fp))
    }
    f.Dp = function(a) {
        Nz(this, a)
    };
    f.update = function(a) {
        if (this.Pb && (a || this.Db() != this.Rl)) {
            if (a || !this.im) {
                a = Hz(this.Pb)[0];
                var b = this.Db();
                a = Iz(this, b)[Gz(this, b, a)];
                a = this.ta ? String(a).replace(this.ta, "") : a;
                this.i && (this.i.ka = this.Pb, b = this.i, this.Db(), b.O != a && (b.O = a, b.ha.Xp(b.O, 10, r(b.dv, b)), Dz(b)))
            }
            this.Rl = this.Db()
        }
        this.im = !1
    };

    function Gz(a, b, c) {
        a = Iz(a, b);
        if (c == b.length) return a.length - 1;
        for (var d = b = 0, e = 0; d < a.length && e <= c; d++) e += a[d].length, b = d;
        return b
    }

    function Iz(a, b) {
        if (!a.o) return [b];
        b = String(b).split("");
        for (var c = [], d = [], e = 0, g = !1; e < b.length; e++) a.ka && -1 != a.ka.indexOf(b[e]) ? (g || (c.push(d.join("")), d.length = 0), d.push(b[e]), g = !g) : g || -1 == a.N.indexOf(b[e]) ? d.push(b[e]) : (d.push(b[e]), c.push(d.join("")), d.length = 0);
        c.push(d.join(""));
        return c
    };

    function Pz(a, b, c, d) {
        R.call(this);
        this.oa = a || document.body;
        this.i = Te(this.oa);
        this.va = !a;
        this.Aa = null;
        this.ta = "";
        this.j = [];
        this.N = [];
        this.wa = this.ha = -1;
        this.O = !1;
        this.className = "ac-renderer";
        this.La = "ac-highlighted";
        this.ka = b || null;
        this.lb = null != d ? d : !0;
        this.Sb = !!c
    }
    u(Pz, R);
    f = Pz.prototype;
    f.ma = function() {
        return this.Aa
    };
    f.Vj = function(a) {
        this.Da = a
    };
    f.hm = function(a, b, c) {
        this.ta = b;
        this.j = a;
        this.ha = -1;
        this.wa = $a();
        this.o = c;
        this.N = [];
        Qz(this)
    };
    f.Pe = function() {
        this.O && (this.O = !1, Rz(this, !1), N(this.Aa, !1))
    };
    f.show = function() {
        this.O || (this.O = !0, Rz(this, !0), N(this.Aa, !0))
    };

    function Rz(a, b) {
        a.o && (Y(a.o, "haspopup", b), Y(a.Aa, "expanded", b), Y(a.o, "expanded", b), b ? Y(a.o, "owns", a.Aa.id) : (a.o.removeAttribute("aria-owns"), xm(a.o, null)))
    }
    f.isVisible = function() {
        return this.O
    };

    function Sz(a, b) {
        var c = 0 <= b && b < a.j.length ? a.j[b] : void 0,
            d = 0 <= b && b < a.N.length ? a.N[b] : void 0;
        a.dispatchEvent({
            type: "rowhilite",
            O: d,
            Of: c ? c.data : null
        }) && (0 <= a.ha && Lb(a.N[a.ha], ["ac-active", "active"]), a.ha = b, d && (Jb(d, ["ac-active", "active"]), a.o && xm(a.o, d), rh(d, a.Aa)))
    }
    f.We = function(a) {
        if (-1 == a) Sz(this, -1);
        else
            for (var b = 0; b < this.j.length; b++)
                if (this.j[b].id == a) {
                    Sz(this, b);
                    break
                }
    };

    function Tz(a) {
        if (!a.Aa) {
            var b = a.i.Ua("DIV", {
                style: "display:none"
            });
            a.Aa = b;
            Jb(b, Qb(a.className).split(" "));
            um(b, "listbox");
            b.id = Um(Tm.Ib());
            a.i.appendChild(a.oa, b);
            P(b, "click", a.en, !1, a);
            P(b, "mousedown", a.fn, !1, a);
            P(b, "mouseover", a.hn, !1, a)
        }
    }

    function Qz(a) {
        Tz(a);
        a.nb && (a.Aa.style.minWidth = a.nb.clientWidth - 0 + "px");
        a.Pa && (a.Aa.style.maxWidth = a.Pa.clientWidth - 0 + "px");
        a.N.length = 0;
        a.i.Mm(a.Aa);
        a.ka && a.ka.render ? a.ka.render(a, a.Aa, a.j, a.ta) : a.j.forEach(function(b) {
            var c = this.ta,
                d = this.i.Ua("DIV", {
                    className: "ac-row",
                    id: Um(Tm.Ib())
                });
            um(d, "option");
            this.ka && this.ka.Rv ? this.ka.Rv(b, c, d) : J(d, b.data.toString());
            c && this.lb && (this.Ca = !1, Uz(this, d, c));
            x(d, "ac-row");
            this.N.push(d);
            b = d;
            this.i.appendChild(this.Aa, b)
        }, a);
        0 == a.j.length ? a.Pe() : (a.show(),
            a.Ak(), Eh(a.Aa, !0))
    }
    f.Ak = function() {
        if (this.o && this.va) {
            var a = this.Da || this.o;
            var b = this.Sb ? 5 : 1;
            Yr(a, b, this.Aa, b ^ 1, null, null, 65)
        }
    };
    f.ya = function() {
        this.Aa && (Ni(this.Aa, "click", this.en, !1, this), Ni(this.Aa, "mousedown", this.fn, !1, this), Ni(this.Aa, "mouseover", this.hn, !1, this), this.i.Li(this.Aa), this.Aa = null, this.O = !1);
        li(this.s);
        this.oa = null;
        Pz.ua.ya.call(this)
    };

    function Uz(a, b, c) {
        if (!a.Ca)
            if (3 == b.nodeType) {
                var d = null;
                Array.isArray(c) && 1 < c.length && (d = c.slice(1));
                c = Vz(c);
                if (0 != c.length) {
                    var e = b.nodeValue,
                        g = new RegExp("\\b(?:" + c + ")", "gi");
                    c = [];
                    for (var h = 0, k = g.exec(e), l = 0; k;) l++, c.push(e.substring(h, k.index)), c.push(e.substring(k.index, g.lastIndex)), h = g.lastIndex, k = g.exec(e);
                    c.push(e.substring(h));
                    if (1 < c.length) {
                        for (d = 0; 1 > d; d++) e = 2 * d, b.nodeValue = c[e], g = Of(a.i, "B"), g.className = a.La, a.i.appendChild(g, a.i.i.createTextNode(String(c[e + 1]))), g = b.parentNode.insertBefore(g,
                            b.nextSibling), b.parentNode.insertBefore(a.i.i.createTextNode(""), g.nextSibling), b = g.nextSibling;
                        b.nodeValue = c.slice(2).join("");
                        a.Ca = !0
                    } else d && Uz(a, b, d)
                }
            } else
                for (b = b.firstChild; b;) d = b.nextSibling, Uz(a, b, c), b = d
    }

    function Vz(a) {
        var b = "";
        if (!a) return b;
        Array.isArray(a) && (a = a.filter(function(c) {
            return !Pb(Pe(c))
        }));
        Array.isArray(a) ? b = 0 < a.length ? Ne(a[0]) : "" : /^\W/.test(a) || (b = Ne(a));
        return b
    }

    function Wz(a, b) {
        for (; b && b != a.Aa && !Ib(b, "ac-row");) b = b.parentNode;
        return b ? a.N.indexOf(b) : -1
    }
    f.en = function(a) {
        var b = Wz(this, a.target);
        0 <= b && this.dispatchEvent({
            type: "select",
            Of: this.j[b].id
        });
        a.stopPropagation()
    };
    f.fn = function(a) {
        a.stopPropagation();
        a.preventDefault()
    };
    f.hn = function(a) {
        a = Wz(this, a.target);
        0 <= a && !(300 > $a() - this.wa) && this.dispatchEvent({
            type: "hilite",
            Of: this.j[a].id
        })
    };

    function Xz(a, b, c, d) {
        this.va = a;
        this.oa = null;
        this.La = c || null;
        this.Da = "boolean" === typeof b ? b : !0;
        this.Ca = d || 0;
        b = new Yz;
        c = new Zz(this.La || a, this.Ca);
        c.va = !0;
        d = new Kz(null, null, !1);
        Bz.call(this, b, c, d);
        d.i = this;
        d.nr(a);
        this.ka = a;
        this.zk = !1;
        this.Tk = !0;
        P(this, "update", r(this.Ka, this))
    }
    u(Xz, Bz);
    Xz.prototype.qg = function() {
        this.Ma = this.va.value;
        Xz.ua.qg.call(this);
        return !1
    };
    Xz.prototype.Ka = function(a) {
        a.Of && (a = this.va.form, this.oa || (this.oa = F("INPUT", {
            type: "hidden",
            name: "oq"
        }), a.appendChild(this.oa)), this.oa.value = this.Ma, this.Da && a.submit())
    };

    function Yz() {}
    var wz = rd(jd(kd("//suggestqueries.google.com/complete/search")));
    Yz.prototype.Xp = function(a, b, c) {
        a = {
            client: "books",
            ds: "bo",
            q: a
        };
        c = r(this.i, this, c);
        this.j && this.j.cancel();
        this.j = new vz;
        this.j.send(a, c)
    };
    Yz.prototype.i = function(a, b) {
        var c = Array.prototype.map.call(b[1], function(d) {
            return d[0]
        });
        a(b[0], c)
    };

    function Zz(a, b) {
        Pz.call(this);
        this.Ka = a;
        this.Ma = b || 0
    }
    u(Zz, Pz);
    Zz.prototype.Ak = function() {
        Zz.ua.Ak.call(this);
        var a = 0,
            b = C("gbfwa");
        b || (b = af("gbqfwa"));
        b && (a = b.offsetTop + b.offsetHeight - 1);
        Array.prototype.forEach.call(Ye("div", "ac-renderer"), function(c) {
            a && K(c, "top", a + "px");
            K(c, "width", M(this.Ka).width - 2 + "px");
            K(c, "left", parseInt(c.style.left, 10) + this.Ma + "px")
        }, this)
    };

    function $z(a, b, c, d, e) {
        X.call(this);
        this.ka = a;
        this.O = b;
        this.va = e;
        this.Fb = "number" === typeof d ? d : this.O ? 200 : 80;
        this.O || x(this.ka, "slider-small");
        this.ha = [];
        this.o = G("A");
        this.o.textContent = Ul() ? "\u203a" : "\u2039";
        this.o.setAttribute("title", "Scroll left");
        Eh(this.o, !0);
        this.ka.appendChild(this.o);
        this.j = G("div");
        x(this.j, "slider-drawables");
        this.ka.appendChild(this.j);
        this.N = G("A");
        this.N.textContent = Ul() ? "\u2039" : "\u203a";
        this.N.setAttribute("title", "Scroll right");
        Eh(this.N, !0);
        this.ka.appendChild(this.N);
        this.i.na(this.o, "click", this.Yl.bind(this, -.75));
        this.i.na(this.N, "click", this.Yl.bind(this, .75));
        this.Ki();
        this.i.na(this.o, "click", this.Yl.bind(this, -.75));
        this.resize();
        this.oa = 0;
        this.ta = 8 <= fc() && !Gc("9") && Ul();
        c && aA(this, c)
    }
    u($z, X);

    function bA(a) {
        var b = Math.ceil(1.25 * cA(a));
        b = Math.min(a.ha.length, a.oa + b);
        v(a.ha.slice(a.oa, b), r(a.mt, a));
        a.Ki();
        a.oa = b;
        b >= a.ha.length && a.dispatchEvent("render")
    }
    f = $z.prototype;
    f.mt = function(a) {
        var b = F("DIV", {
            "class": "goog-inline-block slider-loading"
        });
        this.j.appendChild(b);
        var c = F("DIV", {
            "class": "goog-inline-block slider-drawable"
        });
        N(c, !1);
        this.j.appendChild(c);
        this.i.Hf(a, "render", this.ot.bind(this, b, c));
        a.Vc(c)
    };
    f.ot = function(a, b) {
        I(a);
        this.Ki();
        N(b, !0)
    };

    function aA(a, b) {
        b = b.map(function(c) {
            return this.O ? new uz(c, this.Fb) : new rz(c, this.Fb, this.va)
        }, a);
        dA(a, b)
    }

    function dA(a, b) {
        wb(a.ha, b);
        bA(a)
    }
    f.Yl = function(a) {
        (Ul() ? 0 > a : 0 < a) && bA(this);
        a *= this.ta ? -1 : 1;
        a *= M(this.j).width + 20;
        this.s && (this.s.Ia(), this.s = null);
        this.s = new hm([this.j.scrollLeft, 0], [this.j.scrollLeft + a, 0], 500, km);
        P(this.s, "animate", this.qr.bind(this));
        P(this.s, "end", this.Ki.bind(this));
        this.s.play()
    };
    f.qr = function(a) {
        a = a.coords.map(Math.round);
        this.j.scrollLeft = a[0]
    };
    f.Ki = function() {
        if (oc && Ul() || this.ta) {
            var a = this.j.scrollLeft <= -1 * (this.j.scrollWidth - M(this.j).width);
            var b = 0 == this.j.scrollLeft
        } else a = 0 == this.j.scrollLeft, b = this.j.scrollLeft >= this.j.scrollWidth - M(this.j).width;
        this.o.className = a ? "slider-button slider-button-left slider-button-disabled" : "slider-button slider-button-left";
        this.N.className = b ? "slider-button slider-button-right slider-button-disabled" : "slider-button slider-button-right"
    };
    f.resize = function() {
        this.Ki()
    };

    function cA(a) {
        var b = a.O ? 110 : 50;
        return Math.ceil(M(a.j).width / b)
    };

    function eA(a, b, c) {
        X.call(this);
        this.j = a;
        this.source = b ? b : "gbs_bookshelf_slider";
        this.ha = 0;
        this.N = new oj;
        this.va = this.N.Fa();
        this.oa = "";
        this.wa = "boolean" === typeof c ? !c : !1;
        Gi(this.N, "resize", r(this.jn, this))
    }
    n(eA, X);
    f = eA.prototype;
    f.jn = function() {
        this.N.Fa().width > this.va.width ? this.Th() : Gi(this.N, "resize", r(this.jn, this))
    };
    f.render = function(a) {
        this.O = a;
        this.o = this.Al(a);
        this.i.na(this.o, "render", r(this.Th, this))
    };
    f.Al = function() {
        return new $z(this.O, !0, void 0, void 0, this.j.getId())
    };
    f.Th = function() {
        this.o.resize();
        var a = Math.ceil(1.25 * cA(this.o)) + 1,
            b = this.zf(this.ha, a);
        b && (this.ha += a, Vk(b, r(this.Du, this)))
    };
    f.Xg = ba(17);
    f.Du = function(a) {
        a = a.target;
        if (cl(a)) {
            if ((a = (new az(el(a))).i) && a.length) {
                var b = ep(a[a.length - 1].Ba.ih);
                this.oa != b && (this.oa = b, dA(this.o, fA(this, a)));
                (a = Lf(this.ma())) && Ah(a, 1)
            } else 0 == this.o.oa && this.Wp();
            this.dispatchEvent("success")
        }
    };

    function fA(a, b) {
        return a.il(b).map(function(c) {
            return this.o.O ? new uz(c, 200, this.j.getId()) : new rz(c, 80, this.j.getId())
        }, a)
    }
    f.Wp = function() {};
    f.ma = function() {
        return this.O
    };
    f.il = function(a) {
        return this.source ? a.map(function(b) {
            b.Ba.source = this.source;
            return b
        }, this) : a
    };

    function gA(a, b, c) {
        Ux.call(this, a, b, c);
        this.Bi(!0)
    }
    u(gA, Ux);
    Et("goog-checkbox-menuitem", function() {
        return new gA(null)
    });

    function hA(a) {
        gA.call(this, Ie(a.ob()), a.getId());
        this.j = a
    }
    n(hA, gA);
    hA.prototype.Qb = function(a) {
        gA.prototype.Qb.call(this, a);
        if (this.j.Ke) {
            var b = (a = 1 == this.j.Ke) ? "Public bookshelf" : "Private bookshelf";
            a = F("IMG", {
                src: "/googlebooks/images/sharing_" + (a ? "public" : "private") + ".gif",
                alt: b,
                title: b,
                style: "padding-top:2px;padding-left:8px;float:" + (Ul() ? "left" : "right")
            });
            a = F("DIV", "goog-menuitem-accel", a, of(String(this.j.wa)));
            uf(this.Mb(), a, 1)
        }
    };

    function iA(a, b, c) {
        c = void 0 === c ? !1 : c;
        dy.call(this);
        this.o = a;
        this.N = b;
        this.ha = c
    }
    n(iA, dy);
    f = iA.prototype;
    f.Wa = function() {
        dy.prototype.Wa.call(this);
        hz(this.N).forEach(this.Ps, this)
    };
    f.Oa = function() {
        dy.prototype.Oa.call(this);
        this.ma().style.maxHeight = "200px";
        this.ma().style.overflowY = "scroll";
        var a = Z(this);
        a.na(this.ma(), "mouseout", this.rr);
        a.na(this.ma(), "scroll", this.sr)
    };
    f.rr = function(a) {
        Bf(this.ma(), a.relatedTarget) || this.Ea(!1)
    };
    f.au = function(a) {
        var b = a.target,
            c = b.j,
            d = this.o.bc();
        yt(b, 16) ? Vy(c, d) : Yy(c, d);
        this.dispatchEvent("g");
        a.stopPropagation()
    };
    f.sr = function(a) {
        a.stopPropagation()
    };
    f.Ps = function(a) {
        var b = !Pb(Pe(a.ob())),
            c = a.o && (!a.va || this.o.oa),
            d = !!Wy(a, this.o.bc());
        b && (c || d) && (b = new hA(a), b.sg(d), b.Ta(this.N.Sl != a.getId() || this.ha), this.Ra(b, !0), Z(this).na(b, "action", this.au))
    };

    function jA(a) {
        var b = [];
        an(a, function(c) {
            c instanceof hA && yt(c, 16) && b.push(c.j)
        });
        return b
    };

    function kA(a, b, c) {
        Yw.call(this, null, null, c ? 5 : 0);
        this.j = new iA(a, b);
        this.j.we(this);
        ni(this, this.j);
        this.N = new Image(16, 16);
        this.N.src = "/googlebooks/images/my_library_logo.png";
        this.hc(64, !0)
    }
    n(kA, Yw);
    f = kA.prototype;
    f.Wa = function() {
        Yw.prototype.Wa.call(this);
        x(this.ma(), "add-to-library")
    };

    function lA(a) {
        a.j.kb || a.j.render();
        var b = jA(a.j);
        switch (b.length) {
            case 0:
                var c = "Add to my library";
                break;
            case 1:
                c = "Added to " + b[0].ob();
                break;
            default:
                c = "Added to " + b.length + " shelves"
        }
        0 < b.length && (c = cx(a.N, c));
        Lt(a, c)
    }
    f.Vb = function(a) {
        this.dl();
        Yw.prototype.Vb.call(this, a);
        this.j.kb || this.j.render();
        a ? (a = this.ma(), ey(this.j, new Vx(a, 8, !0), void 0, null)) : this.j.rb()
    };
    f.Oa = function() {
        Yw.prototype.Oa.call(this);
        var a = Z(this);
        a.na(this, "enter", this.nw);
        a.na(this, "leave", this.dl);
        a.na(this, "action", this.tr);
        a.na(this.j, "g", this.iu);
        lA(this)
    };
    f.iu = function() {
        lA(this)
    };
    f.tr = function() {
        this.Vb(!0)
    };
    f.nw = function() {
        this.dl();
        this.Kp = V(r(this.Vb, this, !0), 200)
    };
    f.dl = function() {
        Qk(this.Kp)
    };
    f.Kp = null;

    function mA(a) {
        bz.call(this);
        null != a && a.bookshelf && v(a.bookshelf, function(b) {
            dz(this, new az(b))
        }, this)
    }
    n(mA, bz);

    function nA(a, b, c) {
        var d = new S("/books");
        Ox(d);
        T(d, "op", "cls_metadata");
        T(d, "jscmd", "ClsMetadata");
        var e = U(new S(window.location), "uid");
        e && T(d, "uid", e);
        b && T(d, "uid", b);
        Tp(d.toString(), t(oA, a, c))
    }

    function pA(a, b) {
        var c = new mA(b);
        a && a.forEach(function(d) {
            qA(d.bc(), d.Pa, c)
        });
        return c
    }

    function qA(a, b, c) {
        b.forEach(function(d) {
            var e = new Ty;
            e.Ba.Dm = a;
            (d = ez(c, String(d))) && d.i.push(e)
        })
    }

    function oA(a, b, c) {
        a(pA(b, c))
    };

    function rA(a) {
        return a.split(sA).filter(function(b) {
            return 0 < b.length
        })
    }
    var tA = /\s/,
        uA = /[ -]/,
        sA = /[+,;]/,
        vA = /-?"[^"]+"|[^\s"]+/g,
        wA = RegExp('["\\u201C\\u201D\\u201E\\u201F\\u275D\\u275E\\u301D-\\u301F\\uFF02]', "g"),
        xA = RegExp("[,!-%'-/:-@\\[-^`{-~\\xA1\\xAB\\xBB\\xB7\\xBF\\u05F3\\u05F4\\u200B\\u2010-\\u2014\\u2018-\\u201A\\u2026\\u2039\\u203A\\u2060\\u3001\\u3002\\u3008-\\u3011\\u30FB\\uFF01-\\uFF05\\uFF07-\\uFF0F\\uFF1A-\\uFF20\\uFF3B-\\uFF3E\\uFF40\\uFF5B-\\uFF65,\"\\u201C\\u201D\\u201E\\u201F\\u275D\\u275E\\u301D-\\u301F\\uFF02,]"),
        yA = RegExp("^[\\s\\xA0!-%'-/:-@\\[-^`{-~\\xA1\\xAB\\xBB\\xB7\\xBF\\u05F3\\u05F4\\u200B\\u2010-\\u2014\\u2018-\\u201A\\u2026\\u2039\\u203A\\u2060\\u3001\\u3002\\u3008-\\u3011\\u30FB\\uFF01-\\uFF05\\uFF07-\\uFF0F\\uFF1A-\\uFF20\\uFF3B-\\uFF3E\\uFF40\\uFF5B-\\uFF65]+|[\\s\\xA0!-%'-/:-@\\[-^`{-~\\xA1\\xAB\\xBB\\xB7\\xBF\\u05F3\\u05F4\\u200B\\u2010-\\u2014\\u2018-\\u201A\\u2026\\u2039\\u203A\\u2060\\u3001\\u3002\\u3008-\\u3011\\u30FB\\uFF01-\\uFF05\\uFF07-\\uFF0F\\uFF1A-\\uFF20\\uFF3B-\\uFF3E\\uFF40\\uFF5B-\\uFF65]+$",
            "g");

    function zA(a) {
        return A ? a.toLowerCase() : a.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").normalize("NFC")
    };

    function AA(a) {
        var b = {};
        BA(a).forEach(function(c) {
            for (var d = b, e = 0; e < c.length; e++) {
                var g = c.charAt(e);
                g = xA.test(g) ? "-" : g;
                d[g] || (d[g] = {});
                d = d[g]
            }
            d != b && (d.$ = CA)
        });
        return b
    }

    function BA(a) {
        a = De(zA(a));
        var b = a.match(wA);
        b && (a = a.replace(wA, '"'), b.length & 1 && (a += '"'));
        b = a.match(vA);
        if (!b) return [];
        a = new Set;
        b = na(b);
        for (var c = b.next(); !c.done; c = b.next())
            if (c = c.value, c.startsWith('"')) a.add(c.replace(yA, ""));
            else if (!c.startsWith("-")) {
            c = rA(c.replace(yA, ""));
            c = na(c);
            for (var d = c.next(); !d.done; d = c.next()) a.add(d.value)
        }
        a.delete("");
        return Array.from(a)
    }
    var CA = {};

    function DA(a) {
        var b = !0;
        b = void 0 === b ? !1 : b;
        this.i = "string" === typeof a ? AA(a) : a;
        this.o = b;
        this.j = []
    }

    function EA(a, b, c, d) {
        for (var e = hb(d), g = a.j, h = g.length - 1, k; k = g[h]; h--) {
            var l = k;
            var m = b;
            var p = c,
                w = !1;
            if (l.i)
                if (w = !!l.i.$, uA.test(m)) {
                    if (l.i = l.i[" "] || l.i["-"], l.i)
                        for (; m = l.i[" "] || l.i["-"];) l.i = m
                } else l.endOffset = p + 1, l.Rh = void 0, l.i = l.i[m] || null;
            l.j = !l.i;
            if (w) {
                l = {
                    startOffset: k.startOffset,
                    th: k.th,
                    endOffset: k.endOffset,
                    Rh: k.Rh
                };
                if (a.o)
                    for (; e && e.startOffset <= l.endOffset && l.startOffset <= e.endOffset && e.th === l.th;) {
                        d.pop();
                        if (e.startOffset < l.startOffset || e.endOffset > l.endOffset) l = {
                            startOffset: e.startOffset,
                            th: e.th,
                            endOffset: l.endOffset,
                            Rh: l.Rh
                        };
                        e = hb(d)
                    }
                d.push(l);
                e = l
            }
            k.j && sb(g, h)
        }
    }

    function FA(a, b) {
        this.startOffset = a;
        this.th = void 0;
        this.endOffset = a;
        this.Rh = void 0;
        this.j = !1;
        this.i = b
    };

    function GA(a, b) {
        var c = void 0;
        c = void 0 === c ? Infinity : c;
        b = new DA(b);
        c = void 0 === c ? Infinity : c;
        var d = void 0 === d ? [] : d;
        var e = " ",
            g, h = zA(a);
        for (g = 0; g < h.length && d.length < c; g++) {
            var k = h.charAt(g);
            a = uA.test(e);
            if (tA.test(k)) {
                if (k = " ", a) continue
            } else if (xA.test(k)) {
                if (k = "-", a) continue
            } else a && b.i[k] && b.j.push(new FA(g, b.i));
            EA(b, k, g, d);
            e = k
        }
        uA.test(e) || EA(b, " ", g, d);
        d.length >= c && (d.length = c);
        return d
    };

    function HA(a) {
        var b = AA(a);
        a = IA();
        Array.prototype.forEach.call(a, function(c) {
            JA(b, c)
        })
    }

    function IA() {
        var a = [],
            b = vb($e("patent-text")),
            c = af("patent-title");
        for (c && b.push(c); c = b.pop();) 3 == c.nodeType ? a.push(c) : wb(b, c.childNodes);
        return a
    }

    function JA(a, b) {
        var c = Kf(b);
        a = GA(c, a);
        if (a.length) {
            var d = [],
                e = 0;
            a.forEach(function(g) {
                d.push(c.substring(e, g.startOffset), ae("span", {
                    "class": "patent-text-highlight"
                }, c.substring(g.startOffset, g.endOffset)));
                e = g.endOffset
            });
            d.push(c.substring(e));
            a = G("span");
            Q(a, he(d));
            vf(a, b)
        }
    };

    function KA() {
        Ux.call(this, "Turn off highlighting");
        var a = Cj("dq") || Cj("q");
        a && HA(a);
        this.Ub = !0
    }
    n(KA, Ux);
    KA.prototype.Oa = function() {
        Ux.prototype.Oa.call(this);
        Z(this).na(this, "action", this.j)
    };
    KA.prototype.j = function() {
        this.Ub = !this.Ub;
        y(window.document.body, "patent-highlight-disabled", !this.Ub);
        Lt(this, this.Ub ? "Turn off highlighting" : "Turn on highlighting")
    };

    function LA() {}
    u(LA, Yx);
    Ra(LA);
    LA.prototype.Uc = function(a) {
        return a.i.Ua("DIV", st(this, a).join(" ") + " goog-inline-block", "\u00a0")
    };
    LA.prototype.Wb = function(a, b) {
        b = LA.ua.Wb.call(this, a, b);
        x(b, "goog-inline-block");
        return b
    };
    LA.prototype.Xa = function() {
        return "goog-toolbar-separator"
    };

    function MA() {}
    u(MA, At);
    Ra(MA);
    f = MA.prototype;
    f.Uc = function(a) {
        var b = st(this, a);
        b = a.i.Ua("DIV", "goog-inline-block " + b.join(" "), this.lj(a.Mc(), a.i));
        this.wc(b, a.Cf());
        return b
    };
    f.Fg = function() {
        return "button"
    };
    f.Oc = function(a) {
        return a && a.firstChild && a.firstChild.firstChild
    };
    f.lj = function(a, b) {
        return b.Ua("DIV", "goog-inline-block " + (this.Xa() + "-outer-box"), b.Ua("DIV", "goog-inline-block " + (this.Xa() + "-inner-box"), a))
    };
    f.Ti = function(a) {
        return "DIV" == a.tagName
    };
    f.Wb = function(a, b) {
        NA(b, !0);
        NA(b, !1);
        a: {
            var c = a.i.Fo(b);
            var d = this.Xa() + "-outer-box";
            if (c && Ib(c, d) && (c = a.i.Fo(c), d = this.Xa() + "-inner-box", c && Ib(c, d))) {
                c = !0;
                break a
            }
            c = !1
        }
        c || b.appendChild(this.lj(b.childNodes, a.i));
        Jb(b, ["goog-inline-block", this.Xa()]);
        return MA.ua.Wb.call(this, a, b)
    };
    f.Xa = function() {
        return "goog-custom-button"
    };

    function NA(a, b) {
        if (a)
            for (var c = b ? a.firstChild : a.lastChild, d; c && c.parentNode == a;) {
                d = b ? c.nextSibling : c.previousSibling;
                if (3 == c.nodeType) {
                    var e = c.nodeValue;
                    if ("" == Qb(e)) a.removeChild(c);
                    else {
                        c.nodeValue = b ? e.replace(/^[\s\xa0]+/, "") : e.replace(/[\s\xa0]+$/, "");
                        break
                    }
                } else break;
                c = d
            }
    };

    function OA() {}
    u(OA, MA);
    Ra(OA);
    OA.prototype.Xa = function() {
        return "goog-toolbar-button"
    };

    function PA() {
        this.i = "toolbar"
    }
    u(PA, pv);
    Ra(PA);
    PA.prototype.Zh = function(a) {
        return "HR" == a.tagName ? new Zx(LA.Ib()) : PA.ua.Zh.call(this, a)
    };
    PA.prototype.Ig = function() {
        return "goog-toolbar"
    };
    PA.prototype.Eo = function() {
        return "horizontal"
    };

    function QA(a) {
        PA.call(this);
        this.j = a
    }
    u(QA, PA);
    var RA = {};
    QA.prototype.Ig = function() {
        return this.j || "ocean-chrome-toolbar"
    };

    function SA(a) {
        R.call(this);
        this.i = [];
        TA(this, a)
    }
    u(SA, R);
    f = SA.prototype;
    f.rg = null;
    f.Bk = null;

    function UA(a, b) {
        a.Bk = b
    }

    function TA(a, b) {
        b && (b.forEach(function(c) {
            VA(this, c, !1)
        }, a), wb(a.i, b))
    }
    f.Va = function(a) {
        this.wf(a, this.i.length)
    };
    f.wf = function(a, b) {
        a && (VA(this, a, !1), xb(this.i, b, 0, a))
    };
    f.Sd = function() {
        return vb(this.i)
    };
    f.hf = function(a) {
        a != this.rg && (VA(this, this.rg, !1), this.rg = a, VA(this, a, !0));
        this.dispatchEvent("select")
    };
    f.ya = function() {
        SA.ua.ya.call(this);
        delete this.i;
        this.rg = null
    };

    function VA(a, b, c) {
        b && ("function" == typeof a.Bk ? a.Bk(b, c) : "function" == typeof b.om && b.om(c))
    };

    function WA(a, b, c) {
        uv.call(this, b, a || PA.Ib(), c)
    }
    u(WA, uv);
    WA.prototype.Zi = function(a) {
        WA.ua.Zi.call(this, a);
        this.ue || zv(this)
    };

    function XA(a, b, c) {
        Ut.call(this, a, b || OA.Ib(), c)
    }
    u(XA, Ut);
    Et("goog-toolbar-button", function() {
        return new XA(null)
    });

    function YA(a, b) {
        Zx.call(this, a || LA.Ib(), b)
    }
    u(YA, Zx);
    Et("goog-toolbar-separator", function() {
        return new YA
    });

    function ZA(a) {
        a = a || "viewport-chrome-toolbar";
        a = RA[a] || (RA[a] = new QA(a));
        WA.call(this, a);
        this.Ca = {};
        this.o = new Ri(this)
    }
    n(ZA, WA);

    function $A(a, b, c, d) {
        b.hc(16, !0);
        if (c) {
            var e = a.Ca[c];
            e || (e = new SA, UA(e, function(g, h) {
                g && g.sg(h)
            }), a.Ca[c] = e);
            e.Va(b);
            b.Xf &= -17;
            P(b, "action", function(g) {
                e.hf(g.target)
            });
            d && e.hf(b)
        } else b.jd(16, !!d)
    }

    function aB(a, b) {
        a.Ca.viewport && a.Ca.viewport.hf(b)
    }
    ZA.prototype.ya = function() {
        WA.prototype.ya.call(this);
        this.o.Ia();
        Sc(this.Ca, function(a) {
            a.Ia()
        })
    };

    function bB() {}
    u(bB, At);
    Ra(bB);
    f = bB.prototype;
    f.Uc = function(a) {
        var b = st(this, a);
        b = a.i.Ua("DIV", "goog-inline-block " + b.join(" "), a.Mc());
        this.wc(b, a.Cf());
        return b
    };
    f.Fg = function() {
        return "button"
    };
    f.Ti = function(a) {
        return "DIV" == a.tagName
    };
    f.Wb = function(a, b) {
        x(b, "goog-inline-block");
        return bB.ua.Wb.call(this, a, b)
    };
    f.Db = function() {
        return ""
    };
    f.Xa = function() {
        return "goog-flat-button"
    };
    Et("goog-flat-button", function() {
        return new Ut(null, bB.Ib())
    });

    function cB() {}
    u(cB, MA);
    Ra(cB);
    cB.prototype.Oc = function(a) {
        return cB.ua.Oc.call(this, a && a.firstChild)
    };
    cB.prototype.Wb = function(a, b) {
        var c = Ye("*", "goog-menu", b)[0];
        if (c) {
            N(c, !1);
            Ve(c).body.appendChild(c);
            var d = new by;
            $m(d, c);
            a.ff(d)
        }
        return cB.ua.Wb.call(this, a, b)
    };
    cB.prototype.lj = function(a, b) {
        return cB.ua.lj.call(this, [b.Ua("DIV", "goog-inline-block " + (this.Xa() + "-caption"), a), b.Ua("DIV", "goog-inline-block " + (this.Xa() + "-dropdown"), "\u00a0")], b)
    };
    cB.prototype.Xa = function() {
        return "goog-menu-button"
    };

    function dB() {
        this.i = []
    }
    u(dB, Px);
    Ra(dB);
    dB.prototype.Uc = function(a) {
        var b = dB.ua.Uc.call(this, a);
        x(b, "goog-submenu");
        eB(this, a, b);
        return b
    };
    dB.prototype.Wb = function(a, b) {
        b = dB.ua.Wb.call(this, a, b);
        x(b, "goog-submenu");
        eB(this, a, b);
        var c = Ye("DIV", "goog-menu", b);
        if (c.length) {
            var d = new by(a.i);
            c = c[0];
            N(c, !1);
            a.i.i.body.appendChild(c);
            $m(d, c);
            a.ff(d, !0)
        }
        return b
    };
    dB.prototype.Gg = function(a, b) {
        var c = this.Oc(a),
            d = c && c.lastChild;
        dB.ua.Gg.call(this, a, b);
        d && c.lastChild != d && Ib(d, "goog-submenu-arrow") && c.appendChild(d)
    };
    dB.prototype.Ui = function(a) {
        dB.ua.Ui.call(this, a);
        var b = a.Mb(),
            c = Ze(a.i.i, "SPAN", "goog-submenu-arrow", b)[0];
        fB(a, c);
        c != b.lastChild && b.appendChild(c);
        a = a.ma();
        Y(a, "haspopup", "true")
    };

    function eB(a, b, c) {
        var d = b.i.Ua("SPAN");
        d.className = "goog-submenu-arrow";
        fB(b, d);
        a.Oc(c).appendChild(d)
    }

    function fB(a, b) {
        dn(a) ? (x(b, "goog-submenu-arrow-rtl"), J(b, "\u25c4")) : (Kb(b, "goog-submenu-arrow-rtl"), J(b, "\u25ba"))
    };

    function gB(a, b, c, d) {
        Ux.call(this, a, b, c, d || dB.Ib())
    }
    u(gB, Ux);
    f = gB.prototype;
    f.Eh = null;
    f.xm = null;
    f.Vl = !1;
    f.xc = null;
    f.oj = !1;
    f.Oa = function() {
        gB.ua.Oa.call(this);
        Z(this).na(this.getParent(), "hide", this.Hp);
        this.xc && hB(this, this.xc, !0)
    };
    f.oc = function() {
        Z(this).hb(this.getParent(), "hide", this.Hp);
        this.xc && (hB(this, this.xc, !1), this.oj || (this.xc.oc(), I(this.xc.ma())));
        gB.ua.oc.call(this)
    };
    f.ya = function() {
        this.xc && !this.oj && this.xc.Ia();
        this.xc = null;
        gB.ua.ya.call(this)
    };
    f.Zc = function(a) {
        gB.ua.Zc.call(this, a);
        a || (this.Eh && Qk(this.Eh), this.Eh = V(this.Qe, 218, this))
    };
    f.wm = function() {
        var a = this.getParent();
        a && yv(a) == this && (iB(this, !0), jB(this))
    };
    f.Qe = function() {
        var a = this.xc;
        a && a.getParent() == this && (iB(this, !1), an(a, function(b) {
            "function" == typeof b.Qe && b.Qe()
        }))
    };

    function kB(a) {
        a.Eh && Qk(a.Eh);
        a.xm && Qk(a.xm)
    }
    f.Ea = function(a, b) {
        (a = gB.ua.Ea.call(this, a, b)) && !this.isVisible() && this.Qe();
        return a
    };

    function jB(a) {
        an(a.getParent(), function(b) {
            b != this && "function" == typeof b.Qe && (b.Qe(), kB(b))
        }, a)
    }
    f.Wc = function(a) {
        var b = a.keyCode,
            c = dn(this) ? 37 : 39,
            d = dn(this) ? 39 : 37;
        if (!this.Vl) {
            if (!this.isEnabled() || b != c && 13 != b && b != this.Wl) return !1;
            this.wm();
            zv(lB(this));
            kB(this)
        } else if (!lB(this).Wc(a))
            if (b == d) this.Qe();
            else return !1;
        a.preventDefault();
        return !0
    };
    f.sv = function() {
        this.xc.getParent() == this && (kB(this), this.fh().Zc(this), jB(this))
    };
    f.Hp = function(a) {
        a.target == this.fh() && (this.Qe(), kB(this))
    };
    f.Ve = function(a) {
        this.isEnabled() && (kB(this), this.xm = V(this.wm, 218, this));
        gB.ua.Ve.call(this, a)
    };
    f.Mf = function(a) {
        kB(this);
        if (xt(this, 8) || xt(this, 16)) return gB.ua.Mf.call(this, a);
        this.wm();
        return !0
    };

    function iB(a, b) {
        !b && lB(a) && lB(a).be(-1);
        a.dispatchEvent(Xm(64, b));
        var c = lB(a);
        b != a.Vl && y(a.ma(), "goog-submenu-open", b);
        if (b != c.isVisible() && (b && (c.kb || c.render(), c.be(-1)), c.Ea(b), b)) {
            c = new Su(a.ma(), 12, !1);
            var d = lB(a),
                e = d.ma();
            d.isVisible() || (e.style.visibility = "hidden", N(e, !0));
            c.Tc(e, 8);
            d.isVisible() || (N(e, !1), e.style.visibility = "visible")
        }
        a.Vl = b
    }

    function hB(a, b, c) {
        var d = Z(a);
        (c ? d.na : d.hb).call(d, b, "enter", a.sv)
    }
    f.Va = function(a) {
        lB(this).Ra(a, !0)
    };
    f.wf = function(a, b) {
        lB(this).Pg(a, b, !0)
    };
    f.Sd = function() {
        return lB(this).Sd()
    };

    function lB(a) {
        a.xc ? a.oj && a.xc.getParent() != a && a.xc.we(a) : a.ff(new by(a.i), !0);
        a.xc.ma() || a.xc.Wa();
        return a.xc
    }
    f.ff = function(a, b) {
        var c = this.xc;
        a != c && (c && (this.Qe(), this.kb && hB(this, c, !1)), this.xc = a, this.oj = !b, a && (a.we(this), a.Ea(!1, !0), cy(a, !1), Dv(a, !1), this.kb && hB(this, a, !0)))
    };
    f.ie = function(a) {
        return lB(this).ie(a)
    };
    Et("goog-submenu", function() {
        return new gB(null)
    });

    function mB(a, b, c, d, e) {
        Ut.call(this, a, c || cB.Ib(), d);
        this.hc(64, !0);
        this.N = new Vx(null, 9);
        b && this.ff(b);
        this.ab = new Ok(500);
        this.nb = e || $x.Ib()
    }
    u(mB, Ut);
    f = mB.prototype;
    f.Oa = function() {
        mB.ua.Oa.call(this);
        nB(this, !0);
        this.j && oB(this, this.j, !0);
        Y(this.Aa, "haspopup", !!this.j)
    };
    f.oc = function() {
        mB.ua.oc.call(this);
        nB(this, !1);
        if (this.j) {
            this.Vb(!1);
            this.j.oc();
            oB(this, this.j, !1);
            var a = this.j.ma();
            a && I(a)
        }
    };
    f.ya = function() {
        mB.ua.ya.call(this);
        this.j && (this.j.Ia(), delete this.j);
        delete this.lb;
        this.ab.Ia()
    };
    f.qf = function(a) {
        mB.ua.qf.call(this, a);
        this.isActive() && (this.Vb(!this.wd(), a), this.j && (a = this.wd(), this.j.ue = a))
    };
    f.re = function(a) {
        mB.ua.re.call(this, a);
        this.j && !this.isActive() && (this.j.ue = !1)
    };
    f.Mf = function() {
        Nt(this, !1);
        return !0
    };
    f.Lt = function(a) {
        this.j && this.j.isVisible() && !this.ie(a.target) && this.Vb(!1)
    };
    f.ie = function(a) {
        return a && Bf(this.ma(), a) || this.j && this.j.ie(a) || !1
    };
    f.qe = function(a) {
        if (32 == a.keyCode) {
            if (a.preventDefault(), "keyup" != a.type) return !0
        } else if ("key" != a.type) return !1;
        if (this.j && this.j.isVisible()) {
            var b = 13 == a.keyCode || 32 == a.keyCode,
                c = this.j.Wc(a);
            return c && this.j && this.j.lc instanceof gB || 27 != a.keyCode && !b ? c : (this.Vb(!1), !0)
        }
        return 40 == a.keyCode || 38 == a.keyCode || 32 == a.keyCode || 13 == a.keyCode ? (this.Vb(!0, a), !0) : !1
    };
    f.Cl = function() {
        this.Vb(!1)
    };
    f.Vi = function(a) {
        this.Vb(!1);
        mB.ua.Vi.call(this, a)
    };

    function pB(a) {
        a.j || a.ff(new by(a.i, a.nb));
        return a.j || null
    }
    f.ff = function(a) {
        var b = this.j;
        a != b && (b && (this.Vb(!1), this.kb && oB(this, b, !1), delete this.j), this.kb && Y(this.Aa, "haspopup", !!a), a && (this.j = a, a.we(this), a.Ea(!1), cy(a, !1), this.kb && oB(this, a, !0)));
        return b
    };
    f.Va = function(a) {
        pB(this).Ra(a, !0)
    };
    f.wf = function(a, b) {
        pB(this).Pg(a, b, !0)
    };
    f.Ea = function(a, b) {
        (a = mB.ua.Ea.call(this, a, b)) && !this.isVisible() && this.Vb(!1);
        return a
    };
    f.Ta = function(a) {
        mB.ua.Ta.call(this, a);
        this.isEnabled() || this.Vb(!1)
    };
    f.Vb = function(a, b) {
        mB.ua.Vb.call(this, a);
        if (this.j && yt(this, 64) == a) {
            if (a) this.j.kb || this.j.render(), this.Ca = ph(this.ma()), this.Pa = zh(this.ma()), qB(this), !b || 40 != b.keyCode && 38 != b.keyCode ? this.j.be(-1) : zv(this.j);
            else {
                Nt(this, !1);
                this.j.ue = !1;
                var c = this.ma();
                c && (Y(c, "activedescendant", ""), Y(c, "owns", ""));
                null != this.wa && (this.wa = void 0, (c = this.j.ma()) && L(c, "", ""))
            }
            this.j.Ea(a, !1, b);
            this.Pd || (b = Z(this), c = a ? b.na : b.hb, c.call(b, this.i.i, "mousedown", this.Lt, !0), c.call(b, this.ab, "tick", this.xr), a ? this.ab.start() :
                this.ab.stop())
        }
        this.j && this.j.ma() && this.j.Aa.removeAttribute("aria-hidden")
    };

    function qB(a) {
        if (a.j.kb) {
            var b = a.lb || a.ma(),
                c = a.N;
            a.N.i = b;
            b = a.j.ma();
            a.j.isVisible() || (b.style.visibility = "hidden", N(b, !0));
            !a.wa && a.N.O && a.N.o & 32 && (a.wa = M(b));
            c.Tc(b, c.j ^ 1, null, a.wa);
            a.j.isVisible() || (N(b, !1), b.style.visibility = "visible")
        }
    }
    f.xr = function() {
        var a = zh(this.ma()),
            b = ph(this.ma());
        var c = this.Pa;
        (c = !(c == a || c && a && c.left == a.left && c.width == a.width && c.top == a.top && c.height == a.height)) || (c = this.Ca, c = !(c == b || c && b && c.top == b.top && c.right == b.right && c.bottom == b.bottom && c.left == b.left));
        c && (this.j.kb && b && this.Ca && b.Bb() < this.Ca.Bb() && (c = this.j.ma(), this.j.isVisible() || (c.style.visibility = "hidden", N(c, !0)), jh(c, new B(0, 0))), this.Pa = a, this.Ca = b, qB(this))
    };

    function oB(a, b, c) {
        var d = Z(a);
        c = c ? d.na : d.hb;
        c.call(d, b, "action", a.Cl);
        c.call(d, b, "close", a.ur);
        c.call(d, b, "highlight", a.vr);
        c.call(d, b, "unhighlight", a.wr)
    }

    function nB(a, b) {
        var c = Z(a);
        (b ? c.na : c.hb).call(c, a.ma(), "keydown", a.bu)
    }
    f.vr = function(a) {
        (a = a.target.ma()) && rB(this, a)
    };
    f.bu = function(a) {
        xt(this, 32) && this.ma() && this.j && this.j.isVisible() && a.stopPropagation()
    };
    f.wr = function() {
        if (!yv(this.j)) {
            var a = this.ma();
            Y(a, "activedescendant", "");
            Y(a, "owns", "")
        }
    };
    f.ur = function(a) {
        if (this.wd() && a.target instanceof Ux) {
            a = a.target;
            var b = a.ma();
            a.isVisible() && yt(a, 2) && null != b && rB(this, b)
        }
    };

    function rB(a, b) {
        a = a.ma();
        b = wm(b) || b;
        if (!b.id) {
            var c = Tm.Ib();
            b.id = Um(c)
        }
        xm(a, b);
        Y(a, "owns", b.id)
    }
    Et("goog-menu-button", function() {
        return new mB(null)
    });

    function sB() {}
    u(sB, bB);
    Ra(sB);
    sB.prototype.Uc = function(a) {
        var b = st(this, a);
        b = a.i.Ua("DIV", "goog-inline-block " + b.join(" "), [tB(this, a.Mc(), a.i), uB(this, a.i)]);
        this.wc(b, a.Cf());
        return b
    };
    sB.prototype.Oc = function(a) {
        return a && a.firstChild
    };
    sB.prototype.Wb = function(a, b) {
        var c = Ye("*", "goog-menu", b)[0];
        if (c) {
            N(c, !1);
            a.i.i.body.appendChild(c);
            var d = new by;
            $m(d, c);
            a.ff(d)
        }
        Ye("*", this.Xa() + "-caption", b)[0] || b.appendChild(tB(this, b.childNodes, a.i));
        Ye("*", this.Xa() + "-dropdown", b)[0] || b.appendChild(uB(this, a.i));
        return sB.ua.Wb.call(this, a, b)
    };

    function tB(a, b, c) {
        return c.Ua("DIV", "goog-inline-block " + (a.Xa() + "-caption"), b)
    }

    function uB(a, b) {
        return b.Ua("DIV", {
            "class": "goog-inline-block " + (a.Xa() + "-dropdown"),
            "aria-hidden": !0
        }, "\u00a0")
    }
    sB.prototype.Xa = function() {
        return "goog-flat-menu-button"
    };
    Et("goog-flat-menu-button", function() {
        return new mB(null, null, sB.Ib())
    });

    function vB(a) {
        ZA.call(this);
        this.V = a.yb;
        this.j = a.Vh;
        this.Ma = a.history;
        this.N = a.kk;
        this.Da = a.hk;
        this.wa = a.flags;
        this.Ka = a.Qh;
        this.Pa = "patents" == fp();
        if (!a.jh) {
            var b = C("appbar-patents-prior-art-finder-link");
            if (b && (b = b.getAttribute("href"))) {
                var c = new Yw("Find prior art", void 0, 2);
                this.Ra(c, !0);
                this.o.na(c, "action", r(this.ve, this, b))
            }
            if (c = C("appbar-patents-discuss-this-link"))
                if (b = c.getAttribute("href")) {
                    if ("true" == c.getAttribute("data-is-grant")) {
                        var d = "Discuss this patent";
                        c = "Discuss this patent on Stack Exchange"
                    } else d =
                        "Discuss this application", c = "Discuss this application on Stack Exchange";
                    d = new Yw(d, void 0, 2);
                    d.wc(c);
                    this.Ra(d, !0);
                    this.o.na(d, "action", r(this.ve, this, b))
                }! this.V && (b = C("appbar-read-patent-link")) && (b = b.getAttribute("href")) && (c = new Yw("View PDF"), this.Ra(c, !0), this.o.na(c, "action", r(this.ve, this, b)))
        }
        if (this.V) {
            this.nb = !!a.sh || !!a.rh;
            a.jh && (b = cx("/googlebooks/images/kennedy/zoom_tool.png"), this.Gh = new Yw(b, void 0, void 0, 1), this.Gh.vc(2), this.Ra(this.Gh, !0), P(this.Gh, "action", r(this.mn, this, "zoomin")),
                b = cx("/googlebooks/images/kennedy/zoom_out.png"), this.Hh = new Yw(b, void 0, void 0, 1), this.Hh.vc(1), this.Ra(this.Hh, !0), P(this.Hh, "action", r(this.mn, this, "zoomout")));
            c = !!a.sh;
            b = !!a.rh;
            if (c || b) {
                d = cx("/googlebooks/images/kennedy/one_up_page_view.png");
                this.Jg = new Yw(d, void 0, void 0, 1);
                this.Jg.vc(2);
                P(this.Jg, "action", r(this.Ck, this, Zs));
                this.Ra(this.Jg, !0);
                $A(this, this.Jg, "viewport", !0);
                if (c) {
                    d = cx("/googlebooks/images/kennedy/two_up_page_view.png");
                    this.Lg = new Yw(d, void 0, void 0, 1);
                    c = 1;
                    if (this.j || b) c =
                        3;
                    this.Lg.vc(c);
                    P(this.Lg, "action", r(this.Ck, this, $t));
                    this.Ra(this.Lg, !0);
                    $A(this, this.Lg, "viewport")
                }
                b && (d = cx("/googlebooks/images/kennedy/thumbnail.png"), this.Kg = new Yw(d, void 0, void 0, 1), c = 1, this.j && (c = 3), this.Kg.vc(c), P(this.Kg, "action", r(this.Ck, this, ft)), this.Ra(this.Kg, !0), $A(this, this.Kg, "viewport"));
                this.o.na(this.V, "viewportmodechange", this.ln);
                this.ln()
            }
            this.j && (b = cx("/googlebooks/images/kennedy/maximize.png"), this.va = new Yw(b, void 0, void 0, 1), this.va.hc(16, !0), this.va.sg(!1), this.nb &&
                this.va.vc(1), this.Ra(this.va, !0), this.o.na(this.va, "action", this.xw), this.o.na(this.j, "change", this.Yt));
            this.Ka && (b = cx("/googlebooks/images/kennedy/clip.png"), this.s = new Yw(b, void 0, void 0, 1), this.s.hc(16, !0), this.s.vc(2), this.s.sg(!1), this.Ra(this.s, !0), P(this.s, "action", r(this.wu, this)));
            a.tm && (b = cx("/googlebooks/images/kennedy/insert_link.png"), this.ha = new Yw(b, void 0, void 0, 1), this.ha.hc(16, !0), this.s && this.ha.vc(1), this.Ra(this.ha, !0), P(this.ha, "action", r(this.bt, this)));
            a.um && (b = !!this.V.Za().Dh,
                c = !!ho(this.V.mb(), this.V.Za().uh), d = this.V.Ha().Td() || "Contents", b || c ? (b = cx("/googlebooks/images/kennedy/menu_down_arrow.png", d), b = Db(b), this.Fh = b[0], this.Nd = new Yw(b), this.Nd.vc(2), this.Ra(this.Nd, !0), this.o.na(this.Nd, "action", this.zr), $A(this, this.Nd)) : (this.Fh = F("SPAN", "jfk-button-label", d), this.Nd = new Yw(this.Fh), this.Nd.Ta(!1), this.Nd.vc(2), this.Ra(this.Nd, !0)), b = cx("/googlebooks/images/kennedy/page_left.png"), this.aj = new Yw(b, void 0, void 0, 1), this.aj.vc(3), this.Ra(this.aj, !0), P(this.aj, "action",
                    r(this.V.wb, this.V, "previous")), b = cx("/googlebooks/images/kennedy/page_right.png"), this.cj = new Yw(b, void 0, void 0, 1), this.cj.vc(1), this.Ra(this.cj, !0), P(this.cj, "action", r(this.V.wb, this.V, "next")), this.o.na(this.V, "pagechange", this.yr))
        }
        if (a.vm && (b = C("appbar-view-print-sample-link")) && (b = b.getAttribute("href"))) {
            c = C("appbar-view-ebook-sample-link");
            var e;
            c && (e = c.getAttribute("href"));
            c = new Yw("View sample");
            Bt(c, "gb-view-sample-button");
            this.Ra(c, !0);
            this.o.na(c, "action", r(this.ve, this, b));
            e && (c.vc(2),
                c = new by, d = new Ux("Sample print book"), this.o.na(d, "action", r(this.ve, this, b)), c.Ra(d, !0), Bt(d, "gb-sample-print-book-menuitem"), b = new Ux("Sample eBook"), this.o.na(b, "action", r(this.ve, this, e)), c.Ra(b, !0), Bt(b, "gb-sample-ebook-menuitem"), e = new mB("", c, sB.Ib()), Bt(e, "gb-jfk-margin-fix"), Bt(e, "gb-view-sample-dropdown"), e.vc(1), this.Ra(e, !0))
        }
        this.wa && !this.wa.is_cobrand && this.N && !this.Pa && (e = this.Da && this.Da.uid, b = pA([this.N], this.Da), e ? (this.xi = new kA(this.N, b), this.Ra(this.xi, !0)) : (e = cx("/googlebooks/images/kennedy/menu_down_arrow.png",
            "Add to my library"), e = Db(e), this.xi = new Yw(e), this.Ra(this.xi, !0), e = r(this.ve, this, this.wa.sign_in_url || this.wa.signInUrl), Gi(this.xi, "action", e)));
        if (a.jh) {
            if (e = C("appbar-write-review-link"))
                if (e = e.getAttribute("href")) this.lb = new Yw("Write review"), this.Ra(this.lb, !0), this.o.na(this.lb, "action", r(this.ve, this, e));
            wB(this, "appbar-application-grant-link", "application-grant");
            wB(this, "appbar-content-language-link", "content-language")
        } else if (e = C("appbar-download-pdf-link"))
            if (e = e.getAttribute("href")) b =
                new Yw("Download PDF"), this.Ra(b, !0), this.o.na(b, "action", r(this.ve, this, e));
        a.kw && (a = cx("/googlebooks/images/kennedy/settings.png"), x(a[0], "goog-flat-menu-button-img"), e = F("DIV", {
            "class": "toc-div"
        }), b = new by, b.Ra(new Ht(e), !0), (c = document.getElementById("ofe-gear-menu-contents")) && e.appendChild(c.cloneNode(!0)), this.La = new mB(a, b, sB.Ib()), this.Ra(this.La, !0), this.Pa && !this.V && (a = new KA, this.La.wf(a, 0)))
    }
    n(vB, ZA);

    function xB(a) {
        var b = C("left-toolbar-buttons"),
            c = C("right-toolbar-buttons");
        (new vB({
            yb: a.yb,
            Vh: a.Vh,
            history: a.history,
            sh: a.sh,
            rh: a.rh,
            kk: a.kk,
            hk: a.hk,
            flags: a.flags,
            Qh: a.Qh,
            tm: a.tm,
            jh: !0,
            vm: a.vm
        })).render(b);
        (new vB({
            yb: a.yb,
            um: a.um,
            kw: !0
        })).render(c)
    }
    f = vB.prototype;
    f.xw = function() {
        var a = this.j;
        As(a, !a.Gf());
        this.Ma.update()
    };
    f.Yt = function() {
        this.va.jd(16, this.j.Gf())
    };
    f.wu = function() {
        this.Ka(yt(this.s, 16))
    };
    f.bt = function() {
        if (yt(this.ha, 16)) {
            var a = new fu(document.body, this.V, !0);
            a.render(this.ha, !0);
            Gi(a, "dispose", r(this.ha.sg, this.ha, !1))
        }
    };
    f.Ck = function(a) {
        this.V.ac(a);
        this.V.Ya().getQuery() || this.Ma.update()
    };
    f.ln = function() {
        var a = this.V.Ja();
        a instanceof Zs && aB(this, this.Jg);
        a instanceof $t && aB(this, this.Lg);
        a instanceof ft && aB(this, this.Kg);
        a = a.Sc;
        this.Hh.Ta(a);
        this.Gh.Ta(a)
    };
    f.mn = function(a) {
        this.V.wb(a)
    };

    function wB(a, b, c) {
        if (b = $e(b)) {
            var d = b.length;
            if (1 < d)
                for (var e = 0; e < d; ++e) {
                    var g = b[e],
                        h = g.getAttribute("href"),
                        k = g.getAttribute("data-label");
                    g = g.getAttribute("data-selected");
                    k = new Yw(k);
                    0 == e && e != d - 1 ? k.vc(2) : e == d - 1 && 0 != e ? k.vc(1) : 0 != e && e != d - 1 && k.vc(3);
                    a.Ra(k, !0);
                    $A(a, k, c, !!g);
                    g || a.o.na(k, "action", r(a.ve, a, h))
                }
        }
    }
    f.yr = function() {
        var a = this.V.Ha().Td() || "Contents";
        this.Fh && Q(this.Fh, Fl(a, {
            yi: "009928d1-72d6-47df-9510-9ba0bced7071"
        }))
    };
    f.zr = function() {
        this.Nd.Ee & 16 && (new Vt(this.V, this.Nd, this.wa)).render(3)
    };
    f.ve = function(a) {
        ij(window.location, mj(a))
    };
    f.Jg = null;
    f.Lg = null;
    f.Kg = null;
    f.Gh = null;
    f.Hh = null;
    f.cj = null;
    f.aj = null;
    f.Nd = null;
    f.Fh = null;
    f.xi = null;

    function yB(a, b) {
        My.call(this, a);
        this.N = b
    }
    n(yB, My);
    yB.prototype.render = function() {
        var a = this.ma();
        x(a, this.className + "-tooltip");
        x(a, this.className + "-device-and-format");
        K(a, "z-index", 1E4);
        if (this.N.oa) {
            for (var b = this.className, c = F("DIV", this.className + "-meta"), d = document, e = lf(d, "TABLE"), g = e.appendChild(lf(d, "TBODY")), h = 0; 1 > h; h++) {
                for (var k = lf(d, "TR"), l = 0; 2 > l; l++) k.appendChild(lf(d, "TD"));
                g.appendChild(k)
            }
            x(e, this.className + "-table-layout");
            d = e.rows[0].cells;
            g = zB(this);
            d[0].appendChild(g);
            g = AB(this);
            d[1].appendChild(g);
            g = F("DIV", this.className + "-link");
            h = F("A", {
                target: "_blank"
            }, "Help with devices & formats");
            k = new S(window.location.href);
            l = new S("/support/bin/answer.py?answer=1062949");
            k = U(k, "hl") ? T(l, "hl", U(k, "hl")).toString() : "/support/bin/answer.py?answer=1062949";
            pe(h, k);
            g.appendChild(h);
            d[1].appendChild(g);
            c.appendChild(e);
            e = this.N;
            if ((d = e.Od) && !e.ng && e.nb) {
                var m;
                e.Ob && rm.Rw && (m = "Read the book");
                m = F("P", this.className + "-additional", F("A", {
                    href: d
                }, m));
                c.appendChild(m)
            }
            if (e.La || e.Ma)
                if (d = e.Sb, g = e.lb, d || g) m = F("P", this.className + "-additional",
                    of("Download ")), d && (h = F("A", {
                    href: d
                }, "EPUB"), m.appendChild(h)), g && (d && m.appendChild(of(", ")), d = F("A", {
                    href: g
                }, "PDF"), m.appendChild(d)), m.appendChild(of(" - ")), e = e.bc(), d = (new S(window.location.href)).s.split("/"), d = new S("/" + d[1]), Ox(d), T(d, "output", "acs_help"), T(d, "id", e), e = F("A", {
                    href: d.toString()
                }, "read eReader instructions"), m.appendChild(e), c.appendChild(m);
            m = F("A", {
                target: "_blank"
            }, "Learn more about books on Google Play");
            pe(m, "https://books.google.com/support/bin/topic.py?topic=28528");
            this.o = F("DIV", this.className + "-footer", m);
            b = F("DIV", b, c, this.o);
            x(b, this.className + "-device-content");
            a.appendChild(b)
        }
    };

    function zB(a) {
        var b = F("UL", a.className + "-list"),
            c = F("H4", null, "Good for:");
        b.appendChild(c);
        var d = a.className + "-device-type";
        c = a.className + "-device-supported";
        var e = a.className + "-device-not-supported",
            g = a.className + "-device-unknown-supported",
            h = F("A", {
                "class": d,
                href: "/help/ebooks/webreader.html"
            }, "Web"),
            k = F("A", {
                "class": d,
                href: "/help/ebooks/devices.html"
            }, "Tablet / iPad"),
            l = F("A", {
                "class": d,
                href: "/help/ebooks/ereader.html"
            }, "eReader"),
            m = F("A", {
                "class": d,
                href: "/help/ebooks/devices.html"
            }, "Smartphone"),
            p = a.N.Cj,
            w = a.N.Dj,
            D = a.N.ng;
        d = new Ri(a);
        h = F("LI", null, h);
        D ? d.na(h, "mouseover", t(a.j, "The format of this book is currently unknown. We will update this when we receive the information from the publisher.")) : (p || w) && d.na(h, "mouseover", t(a.j, "This eBook, like all Google eBooks, is formatted to be readable on the web."));
        d.na(h, "mouseout", a.Ca);
        b.appendChild(h);
        k = F("LI", null, k);
        D ? d.na(k, "mouseover", t(a.j, "The format of this book is currently unknown. We will update this when we receive the information from the publisher.")) :
            (p || w) && d.na(k, "mouseover", t(a.j, "This eBook, like all Google eBooks, is formatted to be readable on tablet devices like Android tablets and the iPad."));
        d.na(k, "mouseout", a.Ca);
        b.appendChild(k);
        l = F("LI", null, l);
        d.na(l, "mouseover", function() {
            D ? this.j("The format of this book is currently unknown. We will update this when we receive the information from the publisher.") : p ? this.j("This Google eBook includes flowing text, so you can adjust the font to read comfortably on an eReader.") : this.j("This Google eBook does not include flowing text, so you cannot adjust the font on an eReader.")
        });
        d.na(l, "mouseout", a.Ca);
        b.appendChild(l);
        m = F("LI", null, m);
        d.na(m, "mouseover", function() {
            D ? this.j("The format of this book is currently unknown. We will update this when we receive the information from the publisher.") : p && w ? this.j("This eBook is good for smartphones like Android and iPhone / iPod touch.") : p ? this.j("This Google eBook includes flowing text  so you can adjust the font to read comfortably on the small screen of a smartphone.") : this.j("This eBook may be hard to read on smartphones like Android and iPhone / iPod touch.")
        });
        d.na(m, "mouseout", a.Ca);
        b.appendChild(m);
        D ? (x(h, g), x(k, g), x(l, g), x(m, g)) : p ? (x(h, c), x(k, c), x(l, c), x(m, c)) : (w ? (x(h, c), x(k, c)) : (x(h, e), x(k, e)), x(l, e), x(m, e));
        return b
    }

    function AB(a) {
        var b = F("UL", a.className + "-list"),
            c = F("H4", null, "Features:");
        b.appendChild(c);
        var d = a.className + "-device-supported",
            e = a.className + "-device-not-supported",
            g = a.className + "-device-unknown-supported";
        c = F("A", {}, "Flowing text");
        pe(c, "/support/bin/answer.py?answer=1062949");
        var h = F("A", {}, "Scanned pages");
        pe(h, "/support/bin/answer.py?answer=1062949");
        var k = a.N.Cj,
            l = a.N.Dj,
            m = a.N.ng;
        m ? (c = F("LI", g, c), d = F("LI", g, h)) : (c = F("LI", k ? d : e, c), d = F("LI", l ? d : e, h));
        e = new Ri(a);
        e.na(c, "mouseover", function() {
            m ?
                this.j("The format of this book is currently unknown. We will update this when we receive the information from the publisher.") : k ? this.j("This eBook includes flowing text, so you can adjust the font size and style to read comfortably on any device.") : this.j("This book does not include flowing text, so you cannot adjust the font. Instead, you see images of pages, with a fixed layout. This is good for larger screens,  but not always ideal for eReaders and smartphones.")
        });
        e.na(c, "mouseout", a.Ca);
        e.na(d,
            "mouseover",
            function() {
                m ? this.j("The format of this book is currently unknown. We will update this when we receive the information from the publisher.") : l ? this.j("This eBook includes scanned pages, so pages appear as they would in a printed book.") : this.j("This eBook does not include scanned pages, which retain the format of a printed book. Instead, the text can be  adjusted and it flows to fit any screen.")
            });
        e.na(d, "mouseout", a.Ca);
        b.appendChild(c);
        b.appendChild(d);
        return b
    }
    yB.prototype.Ca = function() {
        rf(this.o);
        var a = F("A", {
            target: "_blank"
        }, "Learn more about books on Google Play");
        pe(a, "https://books.google.com/support/bin/topic.py?topic=28528");
        this.o.appendChild(a)
    };
    yB.prototype.j = function(a) {
        rf(this.o);
        "string" === typeof a ? this.o.appendChild(of(a)) : this.o.appendChild(a)
    };

    function BB(a, b) {
        Yw.call(this, b, void 0, 3);
        this.N = a
    }
    n(BB, Yw);
    BB.prototype.render = function(a) {
        Yw.prototype.render.call(this, a);
        x(this.ma(), "gb-get-book")
    };
    BB.prototype.Oa = function() {
        Yw.prototype.Oa.call(this);
        var a = this.ma();
        this.j = new yB(a, this.N);
        this.j.render();
        a = C("menu_container");
        (a = af("about_title", a)) && I(a)
    };

    function CB() {
        var a = C("gb-buy-options-trigger");
        if (a && a.parentNode && a.parentNode.parentNode ? !Ib(a.parentNode.parentNode, "jfk-button") : 1) {
            a = C("gb-buy-options-trigger");
            var b = C("buy");
            if (a && b) {
                Kb(b, "about_content");
                var c = F("SPAN", "gb-buy-options-arrow", "\u25bc");
                a.appendChild(c);
                x(b, "gb-buy-options-list");
                x(b, "unified-hovercard");
                Yr(a, 9, b, 8);
                N(b, !1);
                P(document, "mousedown", t(DB, a, b))
            }
        }
    }

    function DB(a, b, c) {
        a = Bf(a, c.target);
        c = Bf(b, c.target);
        var d = Bh(b);
        a || c || !d ? a && (N(b, !d), d || Ah(b, 1)) : N(b, !1)
    };

    function EB(a, b, c, d, e, g) {
        function h(l) {
            if (l) {
                l.tabIndex = 0;
                um(l, k.wa);
                x(l, "goog-zippy-header");
                l && k.oa.na(l, "click", k.ta);
                var m = k;
                l && (m.ka.attach(l), m.ha.na(m.ka, "key", m.va))
            }
        }
        R.call(this);
        this.O = e || Te();
        this.j = this.O.ma(a) || null;
        this.s = this.O.ma(d || null);
        this.N = "function" === typeof b ? b : null;
        this.wa = g || "tab";
        this.o = this.N || !b ? null : this.O.ma(b);
        this.i = 1 == c;
        void 0 !== c || this.N || (this.s ? this.i = Bh(this.s) : this.j && (this.i = Ib(this.j, "goog-zippy-expanded")));
        this.ha = new Ri(this);
        this.ka = new kt;
        this.oa = new Ri(this);
        var k = this;
        h(this.j);
        h(this.s);
        this.ef(this.i)
    }
    u(EB, R);
    EB.prototype.ya = function() {
        EB.ua.ya.call(this);
        li(this.ha);
        li(this.ka);
        li(this.oa)
    };
    EB.prototype.ef = function(a) {
        this.o ? N(this.o, a) : a && this.N && (this.o = this.N());
        this.o && x(this.o, "goog-zippy-content");
        this.s ? (N(this.j, !a), N(this.s, a)) : this.j && (y(this.j, "goog-zippy-expanded", a), y(this.j, "goog-zippy-collapsed", !a), Y(this.j, "expanded", a));
        this.i = a;
        this.dispatchEvent(new FB("toggle", this, this.i))
    };
    EB.prototype.va = function(a) {
        if (13 == a.keyCode || 32 == a.keyCode) this.ef(!this.i), this.dispatchEvent(new FB("action", this, this.i, a)), a.preventDefault(), a.stopPropagation()
    };
    EB.prototype.ta = function(a) {
        this.ef(!this.i);
        this.dispatchEvent(new FB("action", this, this.i, a))
    };

    function FB(a, b) {
        pi.call(this, a, b)
    }
    u(FB, pi);

    function GB(a, b, c, d) {
        if (b.child_node && 0 < b.child_node.length) {
            var e = HB(b, !0, c, d),
                g = F("UL", c + "-list");
            a.appendChild(e);
            a.appendChild(g);
            (new EB(e, g)).ef(!b.collapsed);
            v(b.child_node, function(h) {
                GB(g, h, c, d)
            })
        } else a.appendChild(HB(b, !1, c, d))
    }

    function HB(a, b, c, d) {
        var e;
        if (b) {
            b = c + "-heading";
            var g = c + "-header"
        } else b = c + "-link", g = c + "-item";
        "" != a.url ? e = F("A", {
            "class": b,
            href: a.url
        }, Ie(a.title)) : e = F("DIV", b, a.title);
        e = F("DIV", g, e);
        d == a.id && x(e, c + "-selected");
        return e
    }
    bb("_OC_InitNavbar", function(a) {
        var b = C("navbarContainer");
        if (b && a.child_node) {
            var c = F("UL", "gb-left-nav-list");
            v(a.child_node, function(d) {
                GB(c, d, "gb-left-nav", a.highlighted_node_id)
            });
            b.appendChild(c)
        }
    });

    function IB(a, b) {
        R.call(this);
        this.Aa = a;
        this.i = b || null;
        x(a, "with-auto-dir-text");
        P(this.Aa, "keyup", r(this.j, this));
        P(this.Aa, "paste", r(this.o, this))
    }
    n(IB, R);
    IB.prototype.j = function() {
        JB(this.Aa, this.i)
    };
    IB.prototype.o = function() {
        KB(this.Aa, this.i)
    };

    function KB(a, b) {
        V(t(function() {
            JB(a, b)
        }))
    }

    function JB(a, b) {
        var c = !1,
            d;
        if (a.value) {
            for (var e = d = 0, g = !1, h = a.value.split(fw), k = 0; k < h.length; k++) {
                var l = h[k];
                dw.test(l) ? (d++, e++) : ew.test(l) ? g = !0 : cw.test(l) ? e++ : gw.test(l) && (g = !0)
            }
            d = -1 == (0 == e ? g ? 1 : 0 : .4 < d / e ? -1 : 1)
        } else d = Ul();
        d ? (c = !0, K(a, "textAlign", "right"), cf(a, {
            dir: "rtl"
        })) : (K(a, "textAlign", "left"), cf(a, {
            dir: "ltr"
        }));
        b && (c ? (Kb(b, "input-direction-ltr"), x(b, "input-direction-rtl")) : (x(b, "input-direction-ltr"), Kb(b, "input-direction-rtl")))
    }

    function LB(a, b) {
        if (a = C(a)) b = b ? C(b) : null, JB(a, b), new IB(a, b)
    }
    bb("_OC_autoDir", LB);

    function MB(a) {
        this.i = C("gb-ogen-opt-in-banner");
        this.o = C("gb-ogen-opt-in-banner-dismiss");
        this.j = C("gb-ogen-opt-in-header-link");
        this.s = a;
        a = C("gbq");
        this.j && a && (a = Af(a)) && (x(a, "searchbar-with-opt-in"), tf(this.j, a), K(this.j, "display", "block"));
        NB(this)
    }

    function NB(a) {
        a.i && a.o && (window.localStorage.getItem("obclose") ? N(a.i, !1) : (x(a.i, "opt-in-banner-expanded"), P(a.o, "click", function() {
            Kb(a.i, "opt-in-banner-expanded");
            window.localStorage.setItem("obclose", "true");
            V(function() {
                N(a.i, !1);
                a.s.resize()
            }, 600)
        })))
    };

    function OB(a, b) {
        a = C(a);
        b = C(b);
        a && b && P(a, "submit", t(PB, b))
    }

    function PB(a, b) {
        "" == a.value && b.preventDefault()
    };

    function QB(a, b, c) {
        if (oc && !sc) return a;
        a = 'url("' + b + '")';
        pc && (a += " 7 5");
        return a + (", " + c)
    };

    function RB(a) {
        X.call(this);
        this.V = a;
        this.j = new Ri;
        this.i.na(a, "viewportmodechange", this.nn);
        this.V.Ja() && this.nn()
    }
    n(RB, X);
    f = RB.prototype;
    f.nn = function() {
        Wi(this.j);
        this.o && this.o.Ia();
        this.s = this.V.Ja().O.o;
        var a = new Cm(this.s);
        a.jl = function() {};
        this.o = a;
        this.j.na(this.s, "dblclick", r(this.Kt, this));
        this.j.na(a, "start", r(this.Br, this));
        this.j.na(a, "drag", r(this.Cr, this));
        this.j.na(a, "end", r(this.Ar, this));
        SB(this, !1)
    };
    f.Kt = function() {
        this.V.wb("next")
    };

    function SB(a, b) {
        a = a.s;
        if (oc) b = b ? "-moz-grabbing" : "-moz-grab";
        else {
            var c = cp("/googlebooks/images/");
            b = b ? QB("-moz-grabbing", c + "closedhand.cur", "move") : QB("-moz-grab", c + "openhand.cur", "default")
        }
        K(a, "cursor", b)
    }
    f.Br = function() {
        this.N = this.V.Ja().Kb;
        SB(this, !0)
    };
    f.Cr = function() {
        var a = this.o,
            b = this.N;
        this.V.Ja().hd(new B(b.x - a.deltaX, b.y - a.deltaY))
    };
    f.Ar = function() {
        this.N = null;
        SB(this, !1)
    };
    f.ya = function() {
        X.prototype.ya.call(this)
    };

    function TB(a, b, c) {
        c && c.preventDefault();
        c = C(b.concat("-icon-right"));
        N(c, !a);
        c = C(b.concat("-icon-down"));
        N(c, a);
        b = C(b.concat("-expanded"));
        N(b, a)
    };

    function UB(a, b, c, d) {
        qn.call(this, Zo.IsZipitFolderCollectionEnabled ? void 0 : "p13nd", !0);
        vn(this, a);
        this.uo = !0;
        zn(this, .5);
        this.Qg = c;
        a = new sn;
        a.set("ok", b, !0);
        (void 0 !== d ? d : 1) && a.set("cancel", "Cancel", !1, !0);
        Dn(this, a);
        P(this, "dialogselect", this.Pa, !1, this)
    }
    u(UB, qn);
    UB.prototype.Wa = function() {
        UB.ua.Wa.call(this);
        K(En(this.o, "ok"), "fontWeight", "bold");
        K(this.ma(), "width", "500px")
    };
    UB.prototype.Pa = function(a) {
        "ok" == a.key && this.Nb(a);
        return !0
    };
    UB.prototype.ya = function() {
        Ni(this, "dialogselect", this.Pa, !0, this);
        UB.ua.ya.call(this)
    };
    UB.prototype.Nb = function(a) {
        this.Qg(a)
    };

    function VB(a) {
        R.call(this);
        this.ab = null;
        this.Aa = a;
        a = A || mc;
        this.i = new Ri(this);
        this.i.na(this.Aa, a ? ["keydown", "paste", "cut", "drop", "input"] : "input", this)
    }
    u(VB, R);
    VB.prototype.handleEvent = function(a) {
        if ("input" == a.type) A && 0 == a.keyCode && 0 == a.charCode || (WB(this), this.dispatchEvent(XB(a)));
        else if ("keydown" != a.type || pj(a)) {
            var b = "keydown" == a.type ? this.Aa.value : null;
            A && 229 == a.keyCode && (b = null);
            var c = XB(a);
            WB(this);
            this.ab = V(function() {
                this.ab = null;
                this.Aa.value != b && this.dispatchEvent(c)
            }, 0, this)
        }
    };

    function WB(a) {
        null != a.ab && (Qk(a.ab), a.ab = null)
    }

    function XB(a) {
        a = new si(a.Rb);
        a.type = "input";
        return a
    }
    VB.prototype.ya = function() {
        VB.ua.ya.call(this);
        this.i.Ia();
        WB(this);
        delete this.Aa
    };

    function YB(a, b, c, d) {
        R.call(this);
        this.i = a;
        this.s = b;
        this.j = c;
        this.N = d || 0;
        a.removeAttribute("maxlength");
        this.o = new VB(a);
        P(this.o, "input", this.O, !1, this);
        ZB(this)
    }
    u(YB, R);
    YB.prototype.O = function() {
        ZB(this)
    };

    function ZB(a) {
        var b = a.i.value.length;
        if (b > a.j) {
            var c = a.i.scrollTop,
                d = a.i.scrollLeft;
            a.i.value = a.i.value.substring(0, a.j);
            b = a.j;
            a.i.scrollTop = c;
            a.i.scrollLeft = d
        }
        a.s && J(a.s, String(1 == a.N ? b : a.j - b))
    }
    YB.prototype.ya = function() {
        YB.ua.ya.call(this);
        delete this.i;
        this.o.Ia();
        this.o = null
    };

    function $B(a, b, c, d, e) {
        UB.call(this, a, b, null, !0);
        this.lb = c;
        this.Ob = d;
        this.Da = e
    }
    n($B, UB);
    $B.prototype.Wa = function() {
        UB.prototype.Wa.call(this);
        this.N = aC(this, "Name", "input");
        this.nb = aC(this, "Description <span class=cl-desc>(optional)</span>", "textarea");
        var a = this.Mb(),
            b = F("DIV", {
                "class": "ccd-label"
            }),
            c = G("span");
        c.textContent = "Visibility";
        b.appendChild(c);
        a.appendChild(b);
        a = F("SPAN", {
            className: "ccd-mode-indicator"
        });
        c = F("IMG", {
            src: "/googlebooks/images/sharing_public.gif",
            style: "vertical-align:-2px;padding:0 2px"
        });
        var d = G("span");
        d.textContent = "Public";
        a.appendChild(c);
        a.appendChild(d);
        b.appendChild(a);
        c = F("SPAN", {
            className: "ccd-mode-indicator"
        });
        d = F("IMG", {
            src: "/googlebooks/images/sharing_private.gif",
            style: "vertical-align:-2px;"
        });
        var e = G("span");
        e.textContent = "Private";
        c.appendChild(d);
        c.appendChild(e);
        b.appendChild(c);
        d = F("SPAN", {
            "class": "ccd-mode-link"
        });
        d.textContent = "Make public";
        b.appendChild(d);
        P(d, "click", r(this.La, this, !0));
        e = F("SPAN", {
            "class": "ccd-mode-link"
        });
        e.textContent = "Make private";
        b.appendChild(e);
        P(e, "click", r(this.La, this, !1));
        this.Je = [a, e];
        this.Ie = [c, d];
        null !=
            this.Da && (cf(this.Da, {
                "class": "ccd-mode-link"
            }), b.appendChild(this.Da));
        this.La(!0);
        this.ha = F("DIV", {
            "class": "ccd-error"
        });
        this.Mb().appendChild(this.ha);
        this.Tb = F("P", "ccd-footnote", "Please note that the contents and title of Public bookshelves can be viewed and shared by others.");
        this.Mb().appendChild(this.Tb);
        this.j && bC(this);
        Zo.IsZipitFolderCollectionEnabled || (b = this.o, a = En(b, "ok"), K(a, "fontWeight", "bold"), x(a, "gb-button"), x(En(b, "cancel"), "gb-button"))
    };

    function bC(a) {
        a.N.value = Ie(a.j.ob());
        a.N.disabled = a.j.ka;
        a.nb.value = Ie(a.j.Zg());
        a.La(1 == a.j.Ke);
        a.N.disabled && K(a.N, "background", "#f2f2f2")
    }

    function aC(a, b, c) {
        var d = a.Mb();
        a = F("DIV", {
            "class": "gb-bookshelf-dialog-container"
        });
        d.appendChild(a);
        d = F("DIV", {
            "class": "ccd-label"
        });
        Q(d, ki(b));
        a.appendChild(d);
        b = F(c, {
            "class": "ccd-input"
        });
        "input" == c ? (cf(b, {
            type: "text"
        }), b.setAttribute("maxlength", 100)) : "textarea" == c && (cf(b, {
            rows: 6,
            cols: 50
        }), new YB(b, G("span"), 500));
        a.appendChild(b);
        return b
    }
    $B.prototype.La = function(a) {
        this.He = a;
        v(this.Je, function(b) {
            N(b, a)
        });
        v(this.Ie, function(b) {
            N(b, !a)
        })
    };
    $B.prototype.Pa = function(a) {
        var b = this.N.value;
        if ("cancel" == a.key) return !0;
        if (Pb(b)) return this.ha.textContent = "Please enter a title for this bookshelf.", !1;
        if (this.Ob && !this.Ob(b)) return this.ha.textContent = "Another bookshelf already has that title. Please enter a different title.", !1;
        a = this.j || new Uy;
        a.Ec = b;
        a.s = this.nb.value;
        a.Ke = this.He ? 1 : 2;
        if (this.j) {
            b = this.lb;
            var c = new S(b.sq);
            T(c, "as_coll", a.getId());
            fz(c, a, r(b.O, b))
        } else b = this.lb, fz(b.s, a, r(b.N, b, !0));
        return !0
    };
    $B.prototype.ya = function() {
        delete this.lb;
        delete this.Da;
        delete this.j;
        delete this.ha;
        delete this.Tb;
        delete this.N;
        delete this.nb;
        delete this.Ob;
        UB.prototype.ya.call(this)
    };

    function cC(a, b, c, d, e) {
        X.call(this);
        this.ka = a;
        this.o = b;
        this.O = c;
        this.j = d;
        this.ka && (this.s = lb(this.ka.childNodes, dC), this.j && wb(this.s, lb(this.j.childNodes, dC)));
        this.N = e;
        V(r(this.Dr, this))
    }
    u(cC, X);
    f = cC.prototype;
    f.Dr = function() {
        this.o && this.j && this.i.na(this.o, "click", this.rq);
        this.O && this.i.na(this.O, "click", this.Jt);
        this.i.na(this.N, "add", this.Qs)
    };

    function dC(a) {
        var b = Ye("SPAN", "sidebar-collection-title", a)[0];
        b || (b = Ye("SPAN", "hp-collection-title", a)[0]);
        if (!b) return "";
        a = Qb(Ee(If(b)));
        return Qb(a.split("(")[0])
    }
    f.Jt = function() {
        var a = new $B("Create new bookshelf", "Create bookshelf", this.N, r(this.Yu, this));
        a.render();
        a.Ea(!0)
    };
    f.Yu = function(a) {
        var b = Qb(Ee(a)).toLowerCase();
        return !mb(this.s, function(c) {
            return c.toLowerCase() == b
        })
    };
    f.Qs = function(a) {
        a = a.shelf;
        var b = Qb(Ee(a.ob())),
            c = 1 == a.Ke;
        this.s.push(b);
        var d = new S("/books");
        Ox(d);
        T(d, "as_coll", a.getId());
        T(d, "source", "gbs_lp_bookshelf_list");
        if (Zo.IsBooksUnifiedLeftNavEnabled) {
            a = F("LI", {
                "class": "left-nav-shelf-item"
            });
            var e = F("A", {
                "class": "sidebar-link"
            });
            pe(e, d.toString());
            d = F("SPAN");
            x(d, "sidebar-collection-title");
            Q(d, sl.xd(b + " (0)"));
            e.appendChild(d);
            a.appendChild(e);
            c = C("hidden-my-library-expanded");
            sf(a, c);
            TB(!0, "my-library")
        } else a = G("DIV"), e = F("A", {
            "class": "hp-bookshelf-link",
            style: "line-height:19px"
        }), pe(e, d.toString()), d = F("SPAN", {
            "class": "hp-collection-title"
        }), Q(d, sl.xd(b)), e.appendChild(d), a.appendChild(e), b = c ? "Public bookshelf" : "Private bookshelf", c = F("IMG", {
            "class": "hp-bookshelf-access",
            src: "/googlebooks/images/sharing_" + (c ? "public" : "private") + ".gif",
            title: b,
            alt: b,
            width: 14,
            height: 14
        }), a.appendChild(c), c = F("DIV", {
            style: "clear:both"
        }), a.appendChild(c), tf(a, C("csStart"))
    };
    f.rq = function(a) {
        a.preventDefault();
        a = !Bh(this.j);
        N(this.j, a);
        a ? (Yr(this.o, 9, this.j, 8), 200 < M(this.j).height && (a = M(this.j).width, L(this.j, a, 200), K(this.j, "overflow", "auto"), K(this.j, "overflowX", "hidden")), this.ha = P(document, "mousedown", r(this.ev, this))) : Oi(this.ha)
    };
    f.ev = function(a) {
        Bf(this.j, a.target) || Bf(this.o, a.target) || this.rq(a)
    };

    function TH(a, b) {
        this.i = b || "en"
    }
    TH.prototype.dh = function() {
        var a = G("IMG");
        a.src = Ce("https://books.google.com/intl/%s/googlebooks/images/gbs_preview_button1.gif", this.i);
        a.border = "0";
        K(a, "cursor", "pointer");
        return a
    };

    function UH(a, b, c) {
        this.i = c || "en";
        c = G("a");
        c.href = b;
        a.appendChild(c);
        a = this.dh();
        c.appendChild(a)
    }
    n(UH, TH);

    function VH(a, b, c) {
        this.i = c || "en";
        c = this.dh();
        a.appendChild(c);
        K(a, "cursor", "pointer");
        P(a, "click", b)
    }
    n(VH, TH);

    function WH(a) {
        var b = XH,
            c = document.getElementsByTagName("body")[0],
            d = G("div");
        Ah(d, .5);
        K(d, {
            backgroundColor: "#333",
            position: "absolute",
            zIndex: 200
        });
        this.s = d;
        L(d, c.scrollWidth, Math.max(c.scrollHeight, ef().height));
        jh(d, 0, 0);
        c.appendChild(d);
        this.j = G("div");
        K(this.j, {
            position: "absolute",
            zIndex: 201
        });
        c.appendChild(this.j);
        this.N = G("div");
        L(this.N, YH, ZH);
        K(this.N, {
            backgroundColor: "#333",
            position: "absolute",
            zIndex: 202
        });
        jh(this.N, 3, 3);
        Ah(this.N, .3);
        this.j.appendChild(this.N);
        this.i = G("div");
        jh(this.i,
            0, 0);
        K(this.i, {
            position: "absolute",
            padding: "8px",
            border: "1px solid #2c4462",
            backgroundColor: "#b4cffe",
            zIndex: 203
        });
        c = G("div");
        K(c, {
            backgroundColor: "#d8e8fd",
            fontSize: "16px",
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
            padding: "2px 2px 2px 5px"
        });
        this.i.appendChild(c);
        d = G("IMG");
        d.src = "https://books.google.com/googlebooks/images/dialog_close_x.gif";
        d.width = 15;
        d.height = 15;
        K(d, {
            cursor: "pointer",
            position: "absolute",
            right: "11px",
            top: "11px"
        });
        Gi(d, "click", r(this.close, this));
        c.appendChild(d);
        d = G("div");
        d.textContent = "\u00a0";
        c.appendChild(d);
        this.o = G("div");
        this.i.appendChild(this.o);
        L(this.o, YH - 18, ZH - 44);
        this.j.appendChild(this.i);
        b(this.o, a);
        b = ef();
        a = Math.max(0, (b.height - ZH) / 2);
        a = Math.floor(a + gf(document).y);
        b = Math.max(0, (b.width - YH) / 2);
        b = Math.floor(b);
        jh(this.j, b, a)
    }
    WH.prototype.close = function() {
        [this.i, this.s, this.N].forEach(I)
    };
    var YH = 618,
        ZH = 500;
    bb("GBS_insertPreviewButtonLink", function(a, b) {
        $H(a, t(aI, (b || {}).alternativeUrl), "GBS_insertPreviewButtonLink")
    });
    bb("GBS_insertPreviewButtonPopup", function(a) {
        $H(a, bI, "GBS_insertPreviewButtonPopup")
    });
    bb("GBS_insertEmbeddedViewer", function(a, b, c) {
        $H(a, t(cI, b, c), "GBS_insertEmbeddedViewer")
    });

    function $H(a, b, c) {
        var d = dI();
        new Hy(a, function(e) {
            b(d, e)
        }, null, c, eI)
    }

    function aI(a, b, c) {
        a || (a = new S(c), fI && (c = new S(GBS_HOST), Ej(a, c.N), a.j = c.j, Fj(a, c.ha), Gj(a, "/books/p/" + fI)), a = dp(a.toString()));
        new UH(b, a, eI)
    }

    function bI(a, b) {
        new VH(a, t(gI, b), eI)
    }

    function cI(a, b, c, d) {
        var e = G("div");
        c.appendChild(e);
        L(e, a, b);
        XH(e, d)
    }

    function XH(a, b) {
        var c = F("IFRAME", {
            frameBorder: "0",
            width: "100%",
            height: "100%"
        });
        a.appendChild(c);
        a = new S(b);
        T(a, "output", "embed");
        hI && (b = encodeURIComponent(String(JSON.stringify(hI))), a.i = b);
        c.src = a.toString()
    }

    function gI(a) {
        new WH(a)
    }
    var eI = "en";
    bb("GBS_setLanguage", function(a) {
        eI = a
    });
    bb("GBS_setViewerOptions", function(a) {
        hI = a
    });
    var fI = null;
    bb("GBS_setCobrandName", function(a) {
        fI = a
    });
    var hI = {};

    function dI() {
        var a = "__GBS_Button" + iI++,
            b = ae("span", {
                id: a
            });
        document.write(Xd(b));
        return C(a)
    }
    var iI = 0;
})();