! function() {
    "use strict";
    var e = "undefined" == typeof window ? global : window;
    if ("function" != typeof e.require) {
        var t = {},
            n = {},
            o = {},
            r = {}.hasOwnProperty,
            i = /^\.\.?(\/|$)/,
            a = function(e, t) {
                for (var n, o = [], r = (i.test(t) ? e + "/" + t : t).split("/"), a = 0, d = r.length; a < d; a++) n = r[a], ".." === n ? o.pop() : "." !== n && "" !== n && o.push(n);
                return o.join("/")
            },
            d = function(e) {
                return e.split("/").slice(0, -1).join("/")
            },
            s = function(t) {
                return function(n) {
                    var o = a(d(t), n);
                    return e.require(o, t)
                }
            },
            u = function(e, t) {
                var o = null;
                o = f && f.createHot(e);
                var r = {
                    id: e,
                    exports: {},
                    hot: o
                };
                return n[e] = r, t(r.exports, s(e), r), r.exports
            },
            l = function(e) {
                return o[e] ? l(o[e]) : e
            },
            h = function(e, t) {
                return l(a(d(e), t))
            },
            c = function(e, o) {
                null == o && (o = "/");
                var i = l(e);
                if (r.call(n, i)) return n[i].exports;
                if (r.call(t, i)) return u(i, t[i]);
                throw new Error("Cannot find module '" + e + "' from '" + o + "'")
            };
        c.alias = function(e, t) {
            o[t] = e
        };
        var p = /\.[^.\/]+$/,
            g = /\/index(\.[^\/]+)?$/,
            N = function(e) {
                if (p.test(e)) {
                    var t = e.replace(p, "");
                    r.call(o, t) && o[t].replace(p, "") !== t + "/index" || (o[t] = e)
                }
                if (g.test(e)) {
                    var n = e.replace(g, "");
                    r.call(o, n) || (o[n] = e)
                }
            };
        c.register = c.define = function(e, o) {
            if ("object" == typeof e)
                for (var i in e) r.call(e, i) && c.register(i, e[i]);
            else t[e] = o, delete n[e], N(e)
        }, c.list = function() {
            var e = [];
            for (var n in t) r.call(t, n) && e.push(n);
            return e
        };
        var f = e._hmr && new e._hmr(h, c, t, n);
        c._cache = n, c.hmr = f && f.wrap, c.brunch = !0, e.require = c
    }
}(),
function() {
    var global = window,
        __makeRelativeRequire = function(e, t, n) {
            var o = {},
                r = function(t, n) {
                    var i;
                    try {
                        return i = e(n + "/node_modules/" + t)
                    } catch (a) {
                        if (a.toString().indexOf("Cannot find module") === -1) throw a;
                        if (n.indexOf("node_modules") !== -1) {
                            var d = n.split("/"),
                                s = d.lastIndexOf("node_modules"),
                                u = d.slice(0, s).join("/");
                            return r(t, u)
                        }
                    }
                    return o
                };
            return function(i) {
                if (i in t && (i = t[i]), i) {
                    if ("." !== i[0] && n) {
                        var a = r(i, n);
                        if (a !== o) return a
                    }
                    return e(i)
                }
            }
        };
    require.register("google-libphonenumber/dist/browser/libphonenumber.js", function(exports, require, module) {
        require = __makeRelativeRequire(require, {}, "google-libphonenumber"),
            function() {
                ! function(e) {
                    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
                    else if ("function" == typeof define && define.amd) define([], e);
                    else {
                        var t;
                        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.libphonenumber = e()
                    }
                }(function() {
                    var define, module, exports;
                    return function e(t, n, o) {
                        function r(a, d) {
                            if (!n[a]) {
                                if (!t[a]) {
                                    var s = "function" == typeof require && require;
                                    if (!d && s) return s(a, !0);
                                    if (i) return i(a, !0);
                                    var u = new Error("Cannot find module '" + a + "'");
                                    throw u.code = "MODULE_NOT_FOUND", u
                                }
                                var l = n[a] = {
                                    exports: {}
                                };
                                t[a][0].call(l.exports, function(e) {
                                    var n = t[a][1][e];
                                    return r(n ? n : e)
                                }, l, l.exports, e, t, n, o)
                            }
                            return n[a].exports
                        }
                        for (var i = "function" == typeof require && require, a = 0; a < o.length; a++) r(o[a]);
                        return r
                    }({
                        1: [function(require, module, exports) {
                            var COMPILED = !0,
                                goog = goog || {};
                            goog.global = this, goog.isDef = function(e) {
                                return void 0 !== e
                            }, goog.exportPath_ = function(e, t, n) {
                                e = e.split("."), n = n || goog.global, e[0] in n || !n.execScript || n.execScript("var " + e[0]);
                                for (var o; e.length && (o = e.shift());) !e.length && goog.isDef(t) ? n[o] = t : n = n[o] ? n[o] : n[o] = {}
                            }, goog.define = function(e, t) {
                                var n = t;
                                COMPILED || (goog.global.CLOSURE_UNCOMPILED_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_UNCOMPILED_DEFINES, e) ? n = goog.global.CLOSURE_UNCOMPILED_DEFINES[e] : goog.global.CLOSURE_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_DEFINES, e) && (n = goog.global.CLOSURE_DEFINES[e])), goog.exportPath_(e, n)
                            }, goog.DEBUG = !0, goog.LOCALE = "en", goog.TRUSTED_SITE = !0, goog.STRICT_MODE_COMPATIBLE = !1, goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG, goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1, goog.provide = function(e) {
                                if (goog.isInModuleLoader_()) throw Error("goog.provide can not be used within a goog.module.");
                                if (!COMPILED && goog.isProvided_(e)) throw Error('Namespace "' + e + '" already declared.');
                                goog.constructNamespace_(e)
                            }, goog.constructNamespace_ = function(e, t) {
                                if (!COMPILED) {
                                    delete goog.implicitNamespaces_[e];
                                    for (var n = e;
                                        (n = n.substring(0, n.lastIndexOf("."))) && !goog.getObjectByName(n);) goog.implicitNamespaces_[n] = !0
                                }
                                goog.exportPath_(e, t)
                            }, goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/, goog.module = function(e) {
                                if (!goog.isString(e) || !e || -1 == e.search(goog.VALID_MODULE_RE_)) throw Error("Invalid module identifier");
                                if (!goog.isInModuleLoader_()) throw Error("Module " + e + " has been loaded incorrectly.");
                                if (goog.moduleLoaderState_.moduleName) throw Error("goog.module may only be called once per module.");
                                if (goog.moduleLoaderState_.moduleName = e, !COMPILED) {
                                    if (goog.isProvided_(e)) throw Error('Namespace "' + e + '" already declared.');
                                    delete goog.implicitNamespaces_[e]
                                }
                            }, goog.module.get = function(e) {
                                return goog.module.getInternal_(e)
                            }, goog.module.getInternal_ = function(e) {
                                if (!COMPILED) return goog.isProvided_(e) ? e in goog.loadedModules_ ? goog.loadedModules_[e] : goog.getObjectByName(e) : null
                            }, goog.moduleLoaderState_ = null, goog.isInModuleLoader_ = function() {
                                return null != goog.moduleLoaderState_
                            }, goog.module.declareLegacyNamespace = function() {
                                if (!COMPILED && !goog.isInModuleLoader_()) throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");
                                if (!COMPILED && !goog.moduleLoaderState_.moduleName) throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");
                                goog.moduleLoaderState_.declareLegacyNamespace = !0
                            }, goog.setTestOnly = function(e) {
                                if (goog.DISALLOW_TEST_ONLY_CODE) throw e = e || "", Error("Importing test-only code into non-debug environment" + (e ? ": " + e : "."))
                            }, goog.forwardDeclare = function(e) {}, COMPILED || (goog.isProvided_ = function(e) {
                                return e in goog.loadedModules_ || !goog.implicitNamespaces_[e] && goog.isDefAndNotNull(goog.getObjectByName(e))
                            }, goog.implicitNamespaces_ = {
                                "goog.module": !0
                            }), goog.getObjectByName = function(e, t) {
                                for (var n, o = e.split("."), r = t || goog.global; n = o.shift();) {
                                    if (!goog.isDefAndNotNull(r[n])) return null;
                                    r = r[n]
                                }
                                return r
                            }, goog.globalize = function(e, t) {
                                var n, o = t || goog.global;
                                for (n in e) o[n] = e[n]
                            }, goog.addDependency = function(e, t, n, o) {
                                if (goog.DEPENDENCIES_ENABLED) {
                                    var r;
                                    e = e.replace(/\\/g, "/");
                                    var i = goog.dependencies_;
                                    o && "boolean" != typeof o || (o = o ? {
                                        module: "goog"
                                    } : {});
                                    for (var a = 0; r = t[a]; a++) i.nameToPath[r] = e, i.loadFlags[e] = o;
                                    for (o = 0; t = n[o]; o++) e in i.requires || (i.requires[e] = {}), i.requires[e][t] = !0
                                }
                            }, goog.ENABLE_DEBUG_LOADER = !0, goog.logToConsole_ = function(e) {
                                goog.global.console && goog.global.console.error(e)
                            }, goog.require = function(e) {
                                if (!COMPILED) {
                                    if (goog.ENABLE_DEBUG_LOADER && goog.IS_OLD_IE_ && goog.maybeProcessDeferredDep_(e), goog.isProvided_(e)) {
                                        if (goog.isInModuleLoader_()) return goog.module.getInternal_(e)
                                    } else if (goog.ENABLE_DEBUG_LOADER) {
                                        var t = goog.getPathFromDeps_(e);
                                        if (!t) throw e = "goog.require could not find: " + e, goog.logToConsole_(e), Error(e);
                                        goog.writeScripts_(t)
                                    }
                                    return null
                                }
                            }, goog.basePath = "", goog.nullFunction = function() {}, goog.abstractMethod = function() {
                                throw Error("unimplemented abstract method")
                            }, goog.addSingletonGetter = function(e) {
                                e.getInstance = function() {
                                    return e.instance_ ? e.instance_ : (goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = e), e.instance_ = new e)
                                }
                            }, goog.instantiatedSingletons_ = [], goog.LOAD_MODULE_USING_EVAL = !0, goog.SEAL_MODULE_EXPORTS = goog.DEBUG, goog.loadedModules_ = {}, goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER, goog.TRANSPILE = "detect", goog.TRANSPILER = "transpile.js", goog.DEPENDENCIES_ENABLED && (goog.dependencies_ = {
                                loadFlags: {},
                                nameToPath: {},
                                requires: {},
                                visited: {},
                                written: {},
                                deferred: {}
                            }, goog.inHtmlDocument_ = function() {
                                var e = goog.global.document;
                                return null != e && "write" in e
                            }, goog.findBasePath_ = function() {
                                if (goog.isDef(goog.global.CLOSURE_BASE_PATH)) goog.basePath = goog.global.CLOSURE_BASE_PATH;
                                else if (goog.inHtmlDocument_())
                                    for (var e = goog.global.document.getElementsByTagName("SCRIPT"), t = e.length - 1; 0 <= t; --t) {
                                        var n = e[t].src,
                                            o = n.lastIndexOf("?"),
                                            o = -1 == o ? n.length : o;
                                        if ("base.js" == n.substr(o - 7, 7)) {
                                            goog.basePath = n.substr(0, o - 7);
                                            break
                                        }
                                    }
                            }, goog.importScript_ = function(e, t) {
                                (goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_)(e, t) && (goog.dependencies_.written[e] = !0)
                            }, goog.IS_OLD_IE_ = !(goog.global.atob || !goog.global.document || !goog.global.document.all), goog.importProcessedScript_ = function(e, t, n) {
                                goog.importScript_("", 'goog.retrieveAndExec_("' + e + '", ' + t + ", " + n + ");")
                            }, goog.queuedModules_ = [], goog.wrapModule_ = function(e, t) {
                                return goog.LOAD_MODULE_USING_EVAL && goog.isDef(goog.global.JSON) ? "goog.loadModule(" + goog.global.JSON.stringify(t + "\n//# sourceURL=" + e + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + t + "\n;return exports});\n//# sourceURL=" + e + "\n"
                            }, goog.loadQueuedModules_ = function() {
                                var e = goog.queuedModules_.length;
                                if (0 < e) {
                                    var t = goog.queuedModules_;
                                    goog.queuedModules_ = [];
                                    for (var n = 0; n < e; n++) goog.maybeProcessDeferredPath_(t[n])
                                }
                            }, goog.maybeProcessDeferredDep_ = function(e) {
                                goog.isDeferredModule_(e) && goog.allDepsAreAvailable_(e) && (e = goog.getPathFromDeps_(e), goog.maybeProcessDeferredPath_(goog.basePath + e))
                            }, goog.isDeferredModule_ = function(e) {
                                var t = (e = goog.getPathFromDeps_(e)) && goog.dependencies_.loadFlags[e] || {};
                                return !(!e || "goog" != t.module && !goog.needsTranspile_(t.lang)) && goog.basePath + e in goog.dependencies_.deferred
                            }, goog.allDepsAreAvailable_ = function(e) {
                                if ((e = goog.getPathFromDeps_(e)) && e in goog.dependencies_.requires)
                                    for (var t in goog.dependencies_.requires[e])
                                        if (!goog.isProvided_(t) && !goog.isDeferredModule_(t)) return !1;
                                return !0
                            }, goog.maybeProcessDeferredPath_ = function(e) {
                                if (e in goog.dependencies_.deferred) {
                                    var t = goog.dependencies_.deferred[e];
                                    delete goog.dependencies_.deferred[e], goog.globalEval(t)
                                }
                            }, goog.loadModuleFromUrl = function(e) {
                                goog.retrieveAndExec_(e, !0, !1)
                            }, goog.writeScriptSrcNode_ = function(e) {
                                goog.global.document.write('<script type="text/javascript" src="' + e + '"></script>')
                            }, goog.appendScriptSrcNode_ = function(e) {
                                var t = goog.global.document,
                                    n = t.createElement("script");
                                n.type = "text/javascript", n.src = e, n.defer = !1, n.async = !1, t.head.appendChild(n)
                            }, goog.writeScriptTag_ = function(e, t) {
                                if (goog.inHtmlDocument_()) {
                                    var n = goog.global.document;
                                    if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && "complete" == n.readyState) {
                                        if (/\bdeps.js$/.test(e)) return !1;
                                        throw Error('Cannot write "' + e + '" after document load')
                                    }
                                    if (void 0 === t)
                                        if (goog.IS_OLD_IE_) {
                                            var o = " onreadystatechange='goog.onScriptLoad_(this, " + ++goog.lastNonModuleScriptIndex_ + ")' ";
                                            n.write('<script type="text/javascript" src="' + e + '"' + o + "></script>")
                                        } else goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING ? goog.appendScriptSrcNode_(e) : goog.writeScriptSrcNode_(e);
                                    else n.write('<script type="text/javascript">' + t + "</script>");
                                    return !0
                                }
                                return !1
                            }, goog.needsTranspile_ = function(a) {
                                if ("always" == goog.TRANSPILE) return !0;
                                if ("never" == goog.TRANSPILE) return !1;
                                if (!goog.transpiledLanguages_) {
                                    goog.transpiledLanguages_ = {
                                        es5: !0,
                                        es6: !0,
                                        "es6-impl": !0
                                    };
                                    try {
                                        goog.transpiledLanguages_.es5 = eval("[1,].length!=1"), eval('(()=>{"use strict";let a={};const X=class{constructor(){}x(z){return new Map([...arguments]).get(z[0])==3}};return new X().x([a,3])})()') && (goog.transpiledLanguages_["es6-impl"] = !1), eval('(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()') && (goog.transpiledLanguages_.es6 = !1)
                                    } catch (b) {}
                                }
                                return !!goog.transpiledLanguages_[a]
                            }, goog.transpiledLanguages_ = null, goog.lastNonModuleScriptIndex_ = 0, goog.onScriptLoad_ = function(e, t) {
                                return "complete" == e.readyState && goog.lastNonModuleScriptIndex_ == t && goog.loadQueuedModules_(), !0
                            }, goog.writeScripts_ = function(e) {
                                function t(e) {
                                    if (!(e in r.written || e in r.visited)) {
                                        if (r.visited[e] = !0, e in r.requires)
                                            for (var i in r.requires[e])
                                                if (!goog.isProvided_(i)) {
                                                    if (!(i in r.nameToPath)) throw Error("Undefined nameToPath for " + i);
                                                    t(r.nameToPath[i])
                                                }
                                        e in o || (o[e] = !0, n.push(e))
                                    }
                                }
                                var n = [],
                                    o = {},
                                    r = goog.dependencies_;
                                for (t(e), e = 0; e < n.length; e++) {
                                    var i = n[e];
                                    goog.dependencies_.written[i] = !0
                                }
                                var a = goog.moduleLoaderState_;
                                for (goog.moduleLoaderState_ = null, e = 0; e < n.length; e++) {
                                    if (!(i = n[e])) throw goog.moduleLoaderState_ = a, Error("Undefined script input");
                                    var d = r.loadFlags[i] || {},
                                        s = goog.needsTranspile_(d.lang);
                                    "goog" == d.module || s ? goog.importProcessedScript_(goog.basePath + i, "goog" == d.module, s) : goog.importScript_(goog.basePath + i)
                                }
                                goog.moduleLoaderState_ = a
                            }, goog.getPathFromDeps_ = function(e) {
                                return e in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[e] : null
                            }, goog.findBasePath_(), goog.global.CLOSURE_NO_DEPS || goog.importScript_(goog.basePath + "deps.js")), goog.loadModule = function(e) {
                                var t = goog.moduleLoaderState_;
                                try {
                                    goog.moduleLoaderState_ = {
                                        moduleName: void 0,
                                        declareLegacyNamespace: !1
                                    };
                                    var n;
                                    if (goog.isFunction(e)) n = e.call(void 0, {});
                                    else {
                                        if (!goog.isString(e)) throw Error("Invalid module definition");
                                        n = goog.loadModuleFromSource_.call(void 0, e)
                                    }
                                    var o = goog.moduleLoaderState_.moduleName;
                                    if (!goog.isString(o) || !o) throw Error('Invalid module name "' + o + '"');
                                    goog.moduleLoaderState_.declareLegacyNamespace ? goog.constructNamespace_(o, n) : goog.SEAL_MODULE_EXPORTS && Object.seal && goog.isObject(n) && Object.seal(n), goog.loadedModules_[o] = n
                                } finally {
                                    goog.moduleLoaderState_ = t
                                }
                            }, goog.loadModuleFromSource_ = function(a) {
                                return eval(a), {}
                            }, goog.normalizePath_ = function(e) {
                                e = e.split("/");
                                for (var t = 0; t < e.length;) "." == e[t] ? e.splice(t, 1) : t && ".." == e[t] && e[t - 1] && ".." != e[t - 1] ? e.splice(--t, 2) : t++;
                                return e.join("/")
                            }, goog.loadFileSync_ = function(e) {
                                if (goog.global.CLOSURE_LOAD_FILE_SYNC) return goog.global.CLOSURE_LOAD_FILE_SYNC(e);
                                try {
                                    var t = new goog.global.XMLHttpRequest;
                                    return t.open("get", e, !1), t.send(), 0 == t.status || 200 == t.status ? t.responseText : null
                                } catch (n) {
                                    return null
                                }
                            }, goog.retrieveAndExec_ = function(e, t, n) {
                                if (!COMPILED) {
                                    var o = e;
                                    e = goog.normalizePath_(e);
                                    var r = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_,
                                        i = goog.loadFileSync_(e);
                                    if (null == i) throw Error('Load of "' + e + '" failed');
                                    n && (i = goog.transpile_.call(goog.global, i, e)), i = t ? goog.wrapModule_(e, i) : i + ("\n//# sourceURL=" + e), goog.IS_OLD_IE_ ? (goog.dependencies_.deferred[o] = i, goog.queuedModules_.push(o)) : r(e, i)
                                }
                            }, goog.transpile_ = function(a, b) {
                                var c = goog.global.$jscomp;
                                c || (goog.global.$jscomp = c = {});
                                var d = c.transpile;
                                if (!d) {
                                    var e = goog.basePath + goog.TRANSPILER,
                                        f = goog.loadFileSync_(e);
                                    f && (eval(f + "\n//# sourceURL=" + e), c = goog.global.$jscomp, d = c.transpile)
                                }
                                return d || (d = c.transpile = function(e, t) {
                                    return goog.logToConsole_(t + " requires transpilation but no transpiler was found."), e
                                }), d(a, b)
                            }, goog.typeOf = function(e) {
                                var t = typeof e;
                                if ("object" == t) {
                                    if (!e) return "null";
                                    if (e instanceof Array) return "array";
                                    if (e instanceof Object) return t;
                                    var n = Object.prototype.toString.call(e);
                                    if ("[object Window]" == n) return "object";
                                    if ("[object Array]" == n || "number" == typeof e.length && "undefined" != typeof e.splice && "undefined" != typeof e.propertyIsEnumerable && !e.propertyIsEnumerable("splice")) return "array";
                                    if ("[object Function]" == n || "undefined" != typeof e.call && "undefined" != typeof e.propertyIsEnumerable && !e.propertyIsEnumerable("call")) return "function"
                                } else if ("function" == t && "undefined" == typeof e.call) return "object";
                                return t
                            }, goog.isNull = function(e) {
                                return null === e
                            }, goog.isDefAndNotNull = function(e) {
                                return null != e
                            }, goog.isArray = function(e) {
                                return "array" == goog.typeOf(e)
                            }, goog.isArrayLike = function(e) {
                                var t = goog.typeOf(e);
                                return "array" == t || "object" == t && "number" == typeof e.length
                            }, goog.isDateLike = function(e) {
                                return goog.isObject(e) && "function" == typeof e.getFullYear
                            }, goog.isString = function(e) {
                                return "string" == typeof e
                            }, goog.isBoolean = function(e) {
                                return "boolean" == typeof e
                            }, goog.isNumber = function(e) {
                                return "number" == typeof e
                            }, goog.isFunction = function(e) {
                                return "function" == goog.typeOf(e)
                            }, goog.isObject = function(e) {
                                var t = typeof e;
                                return "object" == t && null != e || "function" == t
                            }, goog.getUid = function(e) {
                                return e[goog.UID_PROPERTY_] || (e[goog.UID_PROPERTY_] = ++goog.uidCounter_)
                            }, goog.hasUid = function(e) {
                                return !!e[goog.UID_PROPERTY_]
                            }, goog.removeUid = function(e) {
                                null !== e && "removeAttribute" in e && e.removeAttribute(goog.UID_PROPERTY_);
                                try {
                                    delete e[goog.UID_PROPERTY_]
                                } catch (t) {}
                            }, goog.UID_PROPERTY_ = "closure_uid_" + (1e9 * Math.random() >>> 0), goog.uidCounter_ = 0, goog.getHashCode = goog.getUid, goog.removeHashCode = goog.removeUid, goog.cloneObject = function(e) {
                                var t = goog.typeOf(e);
                                if ("object" == t || "array" == t) {
                                    if (e.clone) return e.clone();
                                    var n, t = "array" == t ? [] : {};
                                    for (n in e) t[n] = goog.cloneObject(e[n]);
                                    return t
                                }
                                return e
                            }, goog.bindNative_ = function(e, t, n) {
                                return e.call.apply(e.bind, arguments)
                            }, goog.bindJs_ = function(e, t, n) {
                                if (!e) throw Error();
                                if (2 < arguments.length) {
                                    var o = Array.prototype.slice.call(arguments, 2);
                                    return function() {
                                        var n = Array.prototype.slice.call(arguments);
                                        return Array.prototype.unshift.apply(n, o), e.apply(t, n)
                                    }
                                }
                                return function() {
                                    return e.apply(t, arguments)
                                }
                            }, goog.bind = function(e, t, n) {
                                return Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_, goog.bind.apply(null, arguments)
                            }, goog.partial = function(e, t) {
                                var n = Array.prototype.slice.call(arguments, 1);
                                return function() {
                                    var t = n.slice();
                                    return t.push.apply(t, arguments), e.apply(this, t)
                                }
                            }, goog.mixin = function(e, t) {
                                for (var n in t) e[n] = t[n]
                            }, goog.now = goog.TRUSTED_SITE && Date.now || function() {
                                return +new Date
                            }, goog.globalEval = function(e) {
                                if (goog.global.execScript) goog.global.execScript(e, "JavaScript");
                                else {
                                    if (!goog.global.eval) throw Error("goog.globalEval not available");
                                    if (null == goog.evalWorksForGlobals_)
                                        if (goog.global.eval("var _evalTest_ = 1;"), "undefined" != typeof goog.global._evalTest_) {
                                            try {
                                                delete goog.global._evalTest_
                                            } catch (t) {}
                                            goog.evalWorksForGlobals_ = !0
                                        } else goog.evalWorksForGlobals_ = !1;
                                    if (goog.evalWorksForGlobals_) goog.global.eval(e);
                                    else {
                                        var n = goog.global.document,
                                            o = n.createElement("SCRIPT");
                                        o.type = "text/javascript", o.defer = !1, o.appendChild(n.createTextNode(e)), n.body.appendChild(o), n.body.removeChild(o)
                                    }
                                }
                            }, goog.evalWorksForGlobals_ = null, goog.getCssName = function(e, t) {
                                if ("." == String(e).charAt(0)) throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + e);
                                var n = function(e) {
                                        return goog.cssNameMapping_[e] || e
                                    },
                                    o = function(e) {
                                        e = e.split("-");
                                        for (var t = [], o = 0; o < e.length; o++) t.push(n(e[o]));
                                        return t.join("-")
                                    },
                                    o = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? n : o : function(e) {
                                        return e
                                    },
                                    o = t ? e + "-" + o(t) : o(e);
                                return goog.global.CLOSURE_CSS_NAME_MAP_FN ? goog.global.CLOSURE_CSS_NAME_MAP_FN(o) : o
                            }, goog.setCssNameMapping = function(e, t) {
                                goog.cssNameMapping_ = e, goog.cssNameMappingStyle_ = t
                            }, !COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING), goog.getMsg = function(e, t) {
                                return t && (e = e.replace(/\{\$([^}]+)}/g, function(e, n) {
                                    return null != t && n in t ? t[n] : e
                                })), e
                            }, goog.getMsgWithFallback = function(e, t) {
                                return e
                            }, goog.exportSymbol = function(e, t, n) {
                                goog.exportPath_(e, t, n)
                            }, goog.exportProperty = function(e, t, n) {
                                e[t] = n
                            }, goog.inherits = function(e, t) {
                                function n() {}
                                n.prototype = t.prototype, e.superClass_ = t.prototype, e.prototype = new n, e.prototype.constructor = e, e.base = function(e, n, o) {
                                    for (var r = Array(arguments.length - 2), i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                                    return t.prototype[n].apply(e, r)
                                }
                            }, goog.base = function(e, t, n) {
                                var o = arguments.callee.caller;
                                if (goog.STRICT_MODE_COMPATIBLE || goog.DEBUG && !o) throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
                                if (o.superClass_) {
                                    for (var r = Array(arguments.length - 1), i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
                                    return o.superClass_.constructor.apply(e, r)
                                }
                                for (r = Array(arguments.length - 2), i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                                for (var i = !1, a = e.constructor; a; a = a.superClass_ && a.superClass_.constructor)
                                    if (a.prototype[t] === o) i = !0;
                                    else if (i) return a.prototype[t].apply(e, r);
                                if (e[t] === o) return e.constructor.prototype[t].apply(e, r);
                                throw Error("goog.base called from a method of one name to a method of a different name")
                            }, goog.scope = function(e) {
                                if (goog.isInModuleLoader_()) throw Error("goog.scope is not supported within a goog.module.");
                                e.call(goog.global)
                            }, COMPILED || (goog.global.COMPILED = COMPILED), goog.defineClass = function(e, t) {
                                var n = t.constructor,
                                    o = t.statics;
                                return n && n != Object.prototype.constructor || (n = function() {
                                    throw Error("cannot instantiate an interface (no constructor defined).")
                                }), n = goog.defineClass.createSealingConstructor_(n, e), e && goog.inherits(n, e), delete t.constructor, delete t.statics, goog.defineClass.applyProperties_(n.prototype, t), null != o && (o instanceof Function ? o(n) : goog.defineClass.applyProperties_(n, o)), n
                            }, goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG, goog.defineClass.createSealingConstructor_ = function(e, t) {
                                if (!goog.defineClass.SEAL_CLASS_INSTANCES) return e;
                                var n = !goog.defineClass.isUnsealable_(t),
                                    o = function() {
                                        var t = e.apply(this, arguments) || this;
                                        return t[goog.UID_PROPERTY_] = t[goog.UID_PROPERTY_], this.constructor === o && n && Object.seal instanceof Function && Object.seal(t), t
                                    };
                                return o
                            }, goog.defineClass.isUnsealable_ = function(e) {
                                return e && e.prototype && e.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]
                            }, goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), goog.defineClass.applyProperties_ = function(e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                for (var o = 0; o < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; o++) n = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[o], Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                            }, goog.tagUnsealableClass = function(e) {
                                !COMPILED && goog.defineClass.SEAL_CLASS_INSTANCES && (e.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = !0)
                            }, goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable", goog.string = {}, goog.string.StringBuffer = function(e, t) {
                                null != e && this.append.apply(this, arguments)
                            }, goog.string.StringBuffer.prototype.buffer_ = "", goog.string.StringBuffer.prototype.set = function(e) {
                                this.buffer_ = "" + e
                            }, goog.string.StringBuffer.prototype.append = function(e, t, n) {
                                if (this.buffer_ += String(e), null != t)
                                    for (var o = 1; o < arguments.length; o++) this.buffer_ += arguments[o];
                                return this
                            }, goog.string.StringBuffer.prototype.clear = function() {
                                this.buffer_ = ""
                            }, goog.string.StringBuffer.prototype.getLength = function() {
                                return this.buffer_.length
                            }, goog.string.StringBuffer.prototype.toString = function() {
                                return this.buffer_
                            }, goog.debug = {}, goog.debug.Error = function(e) {
                                if (Error.captureStackTrace) Error.captureStackTrace(this, goog.debug.Error);
                                else {
                                    var t = Error().stack;
                                    t && (this.stack = t)
                                }
                                e && (this.message = String(e)), this.reportErrorToServer = !0
                            }, goog.inherits(goog.debug.Error, Error), goog.debug.Error.prototype.name = "CustomError", goog.dom = {}, goog.dom.NodeType = {
                                ELEMENT: 1,
                                ATTRIBUTE: 2,
                                TEXT: 3,
                                CDATA_SECTION: 4,
                                ENTITY_REFERENCE: 5,
                                ENTITY: 6,
                                PROCESSING_INSTRUCTION: 7,
                                COMMENT: 8,
                                DOCUMENT: 9,
                                DOCUMENT_TYPE: 10,
                                DOCUMENT_FRAGMENT: 11,
                                NOTATION: 12
                            }, goog.string.DETECT_DOUBLE_ESCAPING = !1, goog.string.FORCE_NON_DOM_HTML_UNESCAPING = !1, goog.string.Unicode = {
                                NBSP: " "
                            }, goog.string.startsWith = function(e, t) {
                                return 0 == e.lastIndexOf(t, 0)
                            }, goog.string.endsWith = function(e, t) {
                                var n = e.length - t.length;
                                return 0 <= n && e.indexOf(t, n) == n
                            }, goog.string.caseInsensitiveStartsWith = function(e, t) {
                                return 0 == goog.string.caseInsensitiveCompare(t, e.substr(0, t.length))
                            }, goog.string.caseInsensitiveEndsWith = function(e, t) {
                                return 0 == goog.string.caseInsensitiveCompare(t, e.substr(e.length - t.length, t.length))
                            }, goog.string.caseInsensitiveEquals = function(e, t) {
                                return e.toLowerCase() == t.toLowerCase()
                            }, goog.string.subs = function(e, t) {
                                for (var n = e.split("%s"), o = "", r = Array.prototype.slice.call(arguments, 1); r.length && 1 < n.length;) o += n.shift() + r.shift();
                                return o + n.join("%s")
                            }, goog.string.collapseWhitespace = function(e) {
                                return e.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
                            }, goog.string.isEmptyOrWhitespace = function(e) {
                                return /^[\s\xa0]*$/.test(e)
                            }, goog.string.isEmptyString = function(e) {
                                return 0 == e.length
                            }, goog.string.isEmpty = goog.string.isEmptyOrWhitespace, goog.string.isEmptyOrWhitespaceSafe = function(e) {
                                return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(e))
                            }, goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe, goog.string.isBreakingWhitespace = function(e) {
                                return !/[^\t\n\r ]/.test(e)
                            }, goog.string.isAlpha = function(e) {
                                return !/[^a-zA-Z]/.test(e)
                            }, goog.string.isNumeric = function(e) {
                                return !/[^0-9]/.test(e)
                            }, goog.string.isAlphaNumeric = function(e) {
                                return !/[^a-zA-Z0-9]/.test(e)
                            }, goog.string.isSpace = function(e) {
                                return " " == e
                            }, goog.string.isUnicodeChar = function(e) {
                                return 1 == e.length && " " <= e && "~" >= e || "" <= e && "�" >= e
                            }, goog.string.stripNewlines = function(e) {
                                return e.replace(/(\r\n|\r|\n)+/g, " ")
                            }, goog.string.canonicalizeNewlines = function(e) {
                                return e.replace(/(\r\n|\r|\n)/g, "\n")
                            }, goog.string.normalizeWhitespace = function(e) {
                                return e.replace(/\xa0|\s/g, " ")
                            }, goog.string.normalizeSpaces = function(e) {
                                return e.replace(/\xa0|[ \t]+/g, " ")
                            }, goog.string.collapseBreakingSpaces = function(e) {
                                return e.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
                            }, goog.string.trim = goog.TRUSTED_SITE && String.prototype.trim ? function(e) {
                                return e.trim()
                            } : function(e) {
                                return e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                            }, goog.string.trimLeft = function(e) {
                                return e.replace(/^[\s\xa0]+/, "")
                            }, goog.string.trimRight = function(e) {
                                return e.replace(/[\s\xa0]+$/, "")
                            }, goog.string.caseInsensitiveCompare = function(e, t) {
                                var n = String(e).toLowerCase(),
                                    o = String(t).toLowerCase();
                                return n < o ? -1 : n == o ? 0 : 1
                            }, goog.string.numberAwareCompare_ = function(e, t, n) {
                                if (e == t) return 0;
                                if (!e) return -1;
                                if (!t) return 1;
                                for (var o = e.toLowerCase().match(n), r = t.toLowerCase().match(n), i = Math.min(o.length, r.length), a = 0; a < i; a++) {
                                    n = o[a];
                                    var d = r[a];
                                    if (n != d) return e = parseInt(n, 10), !isNaN(e) && (t = parseInt(d, 10), !isNaN(t) && e - t) ? e - t : n < d ? -1 : 1
                                }
                                return o.length != r.length ? o.length - r.length : e < t ? -1 : 1
                            }, goog.string.intAwareCompare = function(e, t) {
                                return goog.string.numberAwareCompare_(e, t, /\d+|\D+/g)
                            }, goog.string.floatAwareCompare = function(e, t) {
                                return goog.string.numberAwareCompare_(e, t, /\d+|\.\d+|\D+/g)
                            }, goog.string.numerateCompare = goog.string.floatAwareCompare, goog.string.urlEncode = function(e) {
                                return encodeURIComponent(String(e))
                            }, goog.string.urlDecode = function(e) {
                                return decodeURIComponent(e.replace(/\+/g, " "))
                            }, goog.string.newLineToBr = function(e, t) {
                                return e.replace(/(\r\n|\r|\n)/g, t ? "<br />" : "<br>")
                            }, goog.string.htmlEscape = function(e, t) {
                                if (t) e = e.replace(goog.string.AMP_RE_, "&amp;").replace(goog.string.LT_RE_, "&lt;").replace(goog.string.GT_RE_, "&gt;").replace(goog.string.QUOT_RE_, "&quot;").replace(goog.string.SINGLE_QUOTE_RE_, "&#39;").replace(goog.string.NULL_RE_, "&#0;"), goog.string.DETECT_DOUBLE_ESCAPING && (e = e.replace(goog.string.E_RE_, "&#101;"));
                                else {
                                    if (!goog.string.ALL_RE_.test(e)) return e; - 1 != e.indexOf("&") && (e = e.replace(goog.string.AMP_RE_, "&amp;")), -1 != e.indexOf("<") && (e = e.replace(goog.string.LT_RE_, "&lt;")), -1 != e.indexOf(">") && (e = e.replace(goog.string.GT_RE_, "&gt;")), -1 != e.indexOf('"') && (e = e.replace(goog.string.QUOT_RE_, "&quot;")), -1 != e.indexOf("'") && (e = e.replace(goog.string.SINGLE_QUOTE_RE_, "&#39;")), -1 != e.indexOf("\0") && (e = e.replace(goog.string.NULL_RE_, "&#0;")), goog.string.DETECT_DOUBLE_ESCAPING && -1 != e.indexOf("e") && (e = e.replace(goog.string.E_RE_, "&#101;"))
                                }
                                return e
                            }, goog.string.AMP_RE_ = /&/g, goog.string.LT_RE_ = /</g, goog.string.GT_RE_ = />/g, goog.string.QUOT_RE_ = /"/g, goog.string.SINGLE_QUOTE_RE_ = /'/g, goog.string.NULL_RE_ = /\x00/g, goog.string.E_RE_ = /e/g, goog.string.ALL_RE_ = goog.string.DETECT_DOUBLE_ESCAPING ? /[\x00&<>"'e]/ : /[\x00&<>"']/, goog.string.unescapeEntities = function(e) {
                                return goog.string.contains(e, "&") ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING && "document" in goog.global ? goog.string.unescapeEntitiesUsingDom_(e) : goog.string.unescapePureXmlEntities_(e) : e
                            }, goog.string.unescapeEntitiesWithDocument = function(e, t) {
                                return goog.string.contains(e, "&") ? goog.string.unescapeEntitiesUsingDom_(e, t) : e
                            }, goog.string.unescapeEntitiesUsingDom_ = function(e, t) {
                                var n, o = {
                                    "&amp;": "&",
                                    "&lt;": "<",
                                    "&gt;": ">",
                                    "&quot;": '"'
                                };
                                return n = t ? t.createElement("div") : goog.global.document.createElement("div"), e.replace(goog.string.HTML_ENTITY_PATTERN_, function(e, t) {
                                    var r = o[e];
                                    if (r) return r;
                                    if ("#" == t.charAt(0)) {
                                        var i = Number("0" + t.substr(1));
                                        isNaN(i) || (r = String.fromCharCode(i))
                                    }
                                    return r || (n.innerHTML = e + " ", r = n.firstChild.nodeValue.slice(0, -1)), o[e] = r
                                })
                            }, goog.string.unescapePureXmlEntities_ = function(e) {
                                return e.replace(/&([^;]+);/g, function(e, t) {
                                    switch (t) {
                                        case "amp":
                                            return "&";
                                        case "lt":
                                            return "<";
                                        case "gt":
                                            return ">";
                                        case "quot":
                                            return '"';
                                        default:
                                            if ("#" == t.charAt(0)) {
                                                var n = Number("0" + t.substr(1));
                                                if (!isNaN(n)) return String.fromCharCode(n)
                                            }
                                            return e
                                    }
                                })
                            }, goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g, goog.string.whitespaceEscape = function(e, t) {
                                return goog.string.newLineToBr(e.replace(/  /g, " &#160;"), t)
                            }, goog.string.preserveSpaces = function(e) {
                                return e.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP)
                            }, goog.string.stripQuotes = function(e, t) {
                                for (var n = t.length, o = 0; o < n; o++) {
                                    var r = 1 == n ? t : t.charAt(o);
                                    if (e.charAt(0) == r && e.charAt(e.length - 1) == r) return e.substring(1, e.length - 1)
                                }
                                return e
                            }, goog.string.truncate = function(e, t, n) {
                                return n && (e = goog.string.unescapeEntities(e)), e.length > t && (e = e.substring(0, t - 3) + "..."), n && (e = goog.string.htmlEscape(e)), e
                            }, goog.string.truncateMiddle = function(e, t, n, o) {
                                if (n && (e = goog.string.unescapeEntities(e)), o && e.length > t) {
                                    o > t && (o = t);
                                    var r = e.length - o;
                                    e = e.substring(0, t - o) + "..." + e.substring(r)
                                } else e.length > t && (o = Math.floor(t / 2), r = e.length - o, e = e.substring(0, o + t % 2) + "..." + e.substring(r));
                                return n && (e = goog.string.htmlEscape(e)), e
                            }, goog.string.specialEscapeChars_ = {
                                "\0": "\\0",
                                "\b": "\\b",
                                "\f": "\\f",
                                "\n": "\\n",
                                "\r": "\\r",
                                "\t": "\\t",
                                "\x0B": "\\x0B",
                                '"': '\\"',
                                "\\": "\\\\",
                                "<": "<"
                            }, goog.string.jsEscapeCache_ = {
                                "'": "\\'"
                            }, goog.string.quote = function(e) {
                                e = String(e);
                                for (var t = ['"'], n = 0; n < e.length; n++) {
                                    var o = e.charAt(n),
                                        r = o.charCodeAt(0);
                                    t[n + 1] = goog.string.specialEscapeChars_[o] || (31 < r && 127 > r ? o : goog.string.escapeChar(o))
                                }
                                return t.push('"'), t.join("")
                            }, goog.string.escapeString = function(e) {
                                for (var t = [], n = 0; n < e.length; n++) t[n] = goog.string.escapeChar(e.charAt(n));
                                return t.join("")
                            }, goog.string.escapeChar = function(e) {
                                if (e in goog.string.jsEscapeCache_) return goog.string.jsEscapeCache_[e];
                                if (e in goog.string.specialEscapeChars_) return goog.string.jsEscapeCache_[e] = goog.string.specialEscapeChars_[e];
                                var t, n = e.charCodeAt(0);
                                return 31 < n && 127 > n ? t = e : (256 > n ? (t = "\\x", (16 > n || 256 < n) && (t += "0")) : (t = "\\u", 4096 > n && (t += "0")), t += n.toString(16).toUpperCase()), goog.string.jsEscapeCache_[e] = t
                            }, goog.string.contains = function(e, t) {
                                return -1 != e.indexOf(t)
                            }, goog.string.caseInsensitiveContains = function(e, t) {
                                return goog.string.contains(e.toLowerCase(), t.toLowerCase())
                            }, goog.string.countOf = function(e, t) {
                                return e && t ? e.split(t).length - 1 : 0
                            }, goog.string.removeAt = function(e, t, n) {
                                var o = e;
                                return 0 <= t && t < e.length && 0 < n && (o = e.substr(0, t) + e.substr(t + n, e.length - t - n)), o
                            }, goog.string.remove = function(e, t) {
                                var n = new RegExp(goog.string.regExpEscape(t), "");
                                return e.replace(n, "")
                            }, goog.string.removeAll = function(e, t) {
                                var n = new RegExp(goog.string.regExpEscape(t), "g");
                                return e.replace(n, "")
                            }, goog.string.regExpEscape = function(e) {
                                return String(e).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
                            }, goog.string.repeat = String.prototype.repeat ? function(e, t) {
                                return e.repeat(t)
                            } : function(e, t) {
                                return Array(t + 1).join(e)
                            }, goog.string.padNumber = function(e, t, n) {
                                return e = goog.isDef(n) ? e.toFixed(n) : String(e), n = e.indexOf("."), -1 == n && (n = e.length), goog.string.repeat("0", Math.max(0, t - n)) + e
                            }, goog.string.makeSafe = function(e) {
                                return null == e ? "" : String(e)
                            }, goog.string.buildString = function(e) {
                                return Array.prototype.join.call(arguments, "")
                            }, goog.string.getRandomString = function() {
                                return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36)
                            }, goog.string.compareVersions = function(e, t) {
                                for (var n = 0, o = goog.string.trim(String(e)).split("."), r = goog.string.trim(String(t)).split("."), i = Math.max(o.length, r.length), a = 0; 0 == n && a < i; a++) {
                                    var d = o[a] || "",
                                        s = r[a] || "";
                                    do {
                                        if (d = /(\d*)(\D*)(.*)/.exec(d) || ["", "", "", ""], s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""], 0 == d[0].length && 0 == s[0].length) break;
                                        var n = 0 == d[1].length ? 0 : parseInt(d[1], 10),
                                            u = 0 == s[1].length ? 0 : parseInt(s[1], 10),
                                            n = goog.string.compareElements_(n, u) || goog.string.compareElements_(0 == d[2].length, 0 == s[2].length) || goog.string.compareElements_(d[2], s[2]),
                                            d = d[3],
                                            s = s[3]
                                    } while (0 == n)
                                }
                                return n
                            }, goog.string.compareElements_ = function(e, t) {
                                return e < t ? -1 : e > t ? 1 : 0
                            }, goog.string.hashCode = function(e) {
                                for (var t = 0, n = 0; n < e.length; ++n) t = 31 * t + e.charCodeAt(n) >>> 0;
                                return t
                            }, goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0, goog.string.createUniqueString = function() {
                                return "goog_" + goog.string.uniqueStringCounter_++
                            }, goog.string.toNumber = function(e) {
                                var t = Number(e);
                                return 0 == t && goog.string.isEmptyOrWhitespace(e) ? NaN : t
                            }, goog.string.isLowerCamelCase = function(e) {
                                return /^[a-z]+([A-Z][a-z]*)*$/.test(e)
                            }, goog.string.isUpperCamelCase = function(e) {
                                return /^([A-Z][a-z]*)+$/.test(e)
                            }, goog.string.toCamelCase = function(e) {
                                return String(e).replace(/\-([a-z])/g, function(e, t) {
                                    return t.toUpperCase()
                                })
                            }, goog.string.toSelectorCase = function(e) {
                                return String(e).replace(/([A-Z])/g, "-$1").toLowerCase()
                            }, goog.string.toTitleCase = function(e, t) {
                                var n = goog.isString(t) ? goog.string.regExpEscape(t) : "\\s";
                                return e.replace(new RegExp("(^" + (n ? "|[" + n + "]+" : "") + ")([a-z])", "g"), function(e, t, n) {
                                    return t + n.toUpperCase()
                                })
                            }, goog.string.capitalize = function(e) {
                                return String(e.charAt(0)).toUpperCase() + String(e.substr(1)).toLowerCase()
                            }, goog.string.parseInt = function(e) {
                                return isFinite(e) && (e = String(e)), goog.isString(e) ? /^\s*-?0x/i.test(e) ? parseInt(e, 16) : parseInt(e, 10) : NaN
                            }, goog.string.splitLimit = function(e, t, n) {
                                e = e.split(t);
                                for (var o = []; 0 < n && e.length;) o.push(e.shift()), n--;
                                return e.length && o.push(e.join(t)), o
                            }, goog.string.lastComponent = function(e, t) {
                                if (!t) return e;
                                "string" == typeof t && (t = [t]);
                                for (var n = -1, o = 0; o < t.length; o++)
                                    if ("" != t[o]) {
                                        var r = e.lastIndexOf(t[o]);
                                        r > n && (n = r)
                                    }
                                return -1 == n ? e : e.slice(n + 1)
                            }, goog.string.editDistance = function(e, t) {
                                var n = [],
                                    o = [];
                                if (e == t) return 0;
                                if (!e.length || !t.length) return Math.max(e.length, t.length);
                                for (var r = 0; r < t.length + 1; r++) n[r] = r;
                                for (r = 0; r < e.length; r++) {
                                    o[0] = r + 1;
                                    for (var i = 0; i < t.length; i++) o[i + 1] = Math.min(o[i] + 1, n[i + 1] + 1, n[i] + Number(e[r] != t[i]));
                                    for (i = 0; i < n.length; i++) n[i] = o[i]
                                }
                                return o[t.length]
                            }, goog.asserts = {}, goog.asserts.ENABLE_ASSERTS = goog.DEBUG, goog.asserts.AssertionError = function(e, t) {
                                t.unshift(e), goog.debug.Error.call(this, goog.string.subs.apply(null, t)), t.shift(), this.messagePattern = e
                            }, goog.inherits(goog.asserts.AssertionError, goog.debug.Error), goog.asserts.AssertionError.prototype.name = "AssertionError", goog.asserts.DEFAULT_ERROR_HANDLER = function(e) {
                                throw e
                            }, goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER, goog.asserts.doAssertFailure_ = function(e, t, n, o) {
                                var r = "Assertion failed";
                                if (n) var r = r + (": " + n),
                                    i = o;
                                else e && (r += ": " + e, i = t);
                                e = new goog.asserts.AssertionError("" + r, i || []), goog.asserts.errorHandler_(e)
                            }, goog.asserts.setErrorHandler = function(e) {
                                goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = e)
                            }, goog.asserts.assert = function(e, t, n) {
                                return goog.asserts.ENABLE_ASSERTS && !e && goog.asserts.doAssertFailure_("", null, t, Array.prototype.slice.call(arguments, 2)), e
                            }, goog.asserts.fail = function(e, t) {
                                goog.asserts.ENABLE_ASSERTS && goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure" + (e ? ": " + e : ""), Array.prototype.slice.call(arguments, 1)))
                            }, goog.asserts.assertNumber = function(e, t, n) {
                                return goog.asserts.ENABLE_ASSERTS && !goog.isNumber(e) && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
                            }, goog.asserts.assertString = function(e, t, n) {
                                return goog.asserts.ENABLE_ASSERTS && !goog.isString(e) && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
                            }, goog.asserts.assertFunction = function(e, t, n) {
                                return goog.asserts.ENABLE_ASSERTS && !goog.isFunction(e) && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
                            }, goog.asserts.assertObject = function(e, t, n) {
                                return goog.asserts.ENABLE_ASSERTS && !goog.isObject(e) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
                            }, goog.asserts.assertArray = function(e, t, n) {
                                return goog.asserts.ENABLE_ASSERTS && !goog.isArray(e) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
                            }, goog.asserts.assertBoolean = function(e, t, n) {
                                return goog.asserts.ENABLE_ASSERTS && !goog.isBoolean(e) && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
                            }, goog.asserts.assertElement = function(e, t, n) {
                                return !goog.asserts.ENABLE_ASSERTS || goog.isObject(e) && e.nodeType == goog.dom.NodeType.ELEMENT || goog.asserts.doAssertFailure_("Expected Element but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
                            }, goog.asserts.assertInstanceof = function(e, t, n, o) {
                                return !goog.asserts.ENABLE_ASSERTS || e instanceof t || goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.", [goog.asserts.getType_(t), goog.asserts.getType_(e)], n, Array.prototype.slice.call(arguments, 3)), e
                            }, goog.asserts.assertObjectPrototypeIsIntact = function() {
                                for (var e in Object.prototype) goog.asserts.fail(e + " should not be enumerable in Object.prototype.")
                            }, goog.asserts.getType_ = function(e) {
                                return e instanceof Function ? e.displayName || e.name || "unknown type name" : e instanceof Object ? e.constructor.displayName || e.constructor.name || Object.prototype.toString.call(e) : null === e ? "null" : typeof e
                            }, goog.array = {}, goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE, goog.array.ASSUME_NATIVE_FUNCTIONS = !1, goog.array.peek = function(e) {
                                return e[e.length - 1]
                            }, goog.array.last = goog.array.peek, goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf) ? function(e, t, n) {
                                return goog.asserts.assert(null != e.length), Array.prototype.indexOf.call(e, t, n)
                            } : function(e, t, n) {
                                if (n = null == n ? 0 : 0 > n ? Math.max(0, e.length + n) : n, goog.isString(e)) return goog.isString(t) && 1 == t.length ? e.indexOf(t, n) : -1;
                                for (; n < e.length; n++)
                                    if (n in e && e[n] === t) return n;
                                return -1
                            }, goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf) ? function(e, t, n) {
                                return goog.asserts.assert(null != e.length), Array.prototype.lastIndexOf.call(e, t, null == n ? e.length - 1 : n)
                            } : function(e, t, n) {
                                if (n = null == n ? e.length - 1 : n, 0 > n && (n = Math.max(0, e.length + n)), goog.isString(e)) return goog.isString(t) && 1 == t.length ? e.lastIndexOf(t, n) : -1;
                                for (; 0 <= n; n--)
                                    if (n in e && e[n] === t) return n;
                                return -1
                            }, goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach) ? function(e, t, n) {
                                goog.asserts.assert(null != e.length), Array.prototype.forEach.call(e, t, n)
                            } : function(e, t, n) {
                                for (var o = e.length, r = goog.isString(e) ? e.split("") : e, i = 0; i < o; i++) i in r && t.call(n, r[i], i, e)
                            }, goog.array.forEachRight = function(e, t, n) {
                                for (var o = e.length, r = goog.isString(e) ? e.split("") : e, o = o - 1; 0 <= o; --o) o in r && t.call(n, r[o], o, e)
                            }, goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter) ? function(e, t, n) {
                                return goog.asserts.assert(null != e.length), Array.prototype.filter.call(e, t, n)
                            } : function(e, t, n) {
                                for (var o = e.length, r = [], i = 0, a = goog.isString(e) ? e.split("") : e, d = 0; d < o; d++)
                                    if (d in a) {
                                        var s = a[d];
                                        t.call(n, s, d, e) && (r[i++] = s)
                                    }
                                return r
                            }, goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.map) ? function(e, t, n) {
                                return goog.asserts.assert(null != e.length), Array.prototype.map.call(e, t, n)
                            } : function(e, t, n) {
                                for (var o = e.length, r = Array(o), i = goog.isString(e) ? e.split("") : e, a = 0; a < o; a++) a in i && (r[a] = t.call(n, i[a], a, e));
                                return r
                            }, goog.array.reduce = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce) ? function(e, t, n, o) {
                                return goog.asserts.assert(null != e.length), o && (t = goog.bind(t, o)), Array.prototype.reduce.call(e, t, n)
                            } : function(e, t, n, o) {
                                var r = n;
                                return goog.array.forEach(e, function(n, i) {
                                    r = t.call(o, r, n, i, e)
                                }), r
                            }, goog.array.reduceRight = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight) ? function(e, t, n, o) {
                                return goog.asserts.assert(null != e.length), goog.asserts.assert(null != t), o && (t = goog.bind(t, o)), Array.prototype.reduceRight.call(e, t, n)
                            } : function(e, t, n, o) {
                                var r = n;
                                return goog.array.forEachRight(e, function(n, i) {
                                    r = t.call(o, r, n, i, e)
                                }), r
                            }, goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.some) ? function(e, t, n) {
                                return goog.asserts.assert(null != e.length), Array.prototype.some.call(e, t, n)
                            } : function(e, t, n) {
                                for (var o = e.length, r = goog.isString(e) ? e.split("") : e, i = 0; i < o; i++)
                                    if (i in r && t.call(n, r[i], i, e)) return !0;
                                return !1
                            }, goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.every) ? function(e, t, n) {
                                return goog.asserts.assert(null != e.length), Array.prototype.every.call(e, t, n)
                            } : function(e, t, n) {
                                for (var o = e.length, r = goog.isString(e) ? e.split("") : e, i = 0; i < o; i++)
                                    if (i in r && !t.call(n, r[i], i, e)) return !1;
                                return !0
                            }, goog.array.count = function(e, t, n) {
                                var o = 0;
                                return goog.array.forEach(e, function(e, r, i) {
                                    t.call(n, e, r, i) && ++o
                                }, n), o
                            }, goog.array.find = function(e, t, n) {
                                return t = goog.array.findIndex(e, t, n), 0 > t ? null : goog.isString(e) ? e.charAt(t) : e[t]
                            }, goog.array.findIndex = function(e, t, n) {
                                for (var o = e.length, r = goog.isString(e) ? e.split("") : e, i = 0; i < o; i++)
                                    if (i in r && t.call(n, r[i], i, e)) return i;
                                return -1
                            }, goog.array.findRight = function(e, t, n) {
                                return t = goog.array.findIndexRight(e, t, n), 0 > t ? null : goog.isString(e) ? e.charAt(t) : e[t]
                            }, goog.array.findIndexRight = function(e, t, n) {
                                for (var o = e.length, r = goog.isString(e) ? e.split("") : e, o = o - 1; 0 <= o; o--)
                                    if (o in r && t.call(n, r[o], o, e)) return o;
                                return -1
                            }, goog.array.contains = function(e, t) {
                                return 0 <= goog.array.indexOf(e, t)
                            }, goog.array.isEmpty = function(e) {
                                return 0 == e.length
                            }, goog.array.clear = function(e) {
                                if (!goog.isArray(e))
                                    for (var t = e.length - 1; 0 <= t; t--) delete e[t];
                                e.length = 0
                            }, goog.array.insert = function(e, t) {
                                goog.array.contains(e, t) || e.push(t)
                            }, goog.array.insertAt = function(e, t, n) {
                                goog.array.splice(e, n, 0, t)
                            }, goog.array.insertArrayAt = function(e, t, n) {
                                goog.partial(goog.array.splice, e, n, 0).apply(null, t)
                            }, goog.array.insertBefore = function(e, t, n) {
                                var o;
                                2 == arguments.length || 0 > (o = goog.array.indexOf(e, n)) ? e.push(t) : goog.array.insertAt(e, t, o)
                            }, goog.array.remove = function(e, t) {
                                var n, o = goog.array.indexOf(e, t);
                                return (n = 0 <= o) && goog.array.removeAt(e, o), n
                            }, goog.array.removeLast = function(e, t) {
                                var n = goog.array.lastIndexOf(e, t);
                                return 0 <= n && (goog.array.removeAt(e, n), !0)
                            }, goog.array.removeAt = function(e, t) {
                                return goog.asserts.assert(null != e.length), 1 == Array.prototype.splice.call(e, t, 1).length
                            }, goog.array.removeIf = function(e, t, n) {
                                return t = goog.array.findIndex(e, t, n), 0 <= t && (goog.array.removeAt(e, t), !0)
                            }, goog.array.removeAllIf = function(e, t, n) {
                                var o = 0;
                                return goog.array.forEachRight(e, function(r, i) {
                                    t.call(n, r, i, e) && goog.array.removeAt(e, i) && o++
                                }), o
                            }, goog.array.concat = function(e) {
                                return Array.prototype.concat.apply(Array.prototype, arguments)
                            }, goog.array.join = function(e) {
                                return Array.prototype.concat.apply(Array.prototype, arguments)
                            }, goog.array.toArray = function(e) {
                                var t = e.length;
                                if (0 < t) {
                                    for (var n = Array(t), o = 0; o < t; o++) n[o] = e[o];
                                    return n
                                }
                                return []
                            }, goog.array.clone = goog.array.toArray, goog.array.extend = function(e, t) {
                                for (var n = 1; n < arguments.length; n++) {
                                    var o = arguments[n];
                                    if (goog.isArrayLike(o)) {
                                        var r = e.length || 0,
                                            i = o.length || 0;
                                        e.length = r + i;
                                        for (var a = 0; a < i; a++) e[r + a] = o[a]
                                    } else e.push(o)
                                }
                            }, goog.array.splice = function(e, t, n, o) {
                                return goog.asserts.assert(null != e.length), Array.prototype.splice.apply(e, goog.array.slice(arguments, 1))
                            }, goog.array.slice = function(e, t, n) {
                                return goog.asserts.assert(null != e.length), 2 >= arguments.length ? Array.prototype.slice.call(e, t) : Array.prototype.slice.call(e, t, n)
                            }, goog.array.removeDuplicates = function(e, t, n) {
                                t = t || e;
                                var o = function(e) {
                                    return goog.isObject(e) ? "o" + goog.getUid(e) : (typeof e).charAt(0) + e
                                };
                                n = n || o;
                                for (var o = {}, r = 0, i = 0; i < e.length;) {
                                    var a = e[i++],
                                        d = n(a);
                                    Object.prototype.hasOwnProperty.call(o, d) || (o[d] = !0, t[r++] = a)
                                }
                                t.length = r
                            }, goog.array.binarySearch = function(e, t, n) {
                                return goog.array.binarySearch_(e, n || goog.array.defaultCompare, !1, t)
                            }, goog.array.binarySelect = function(e, t, n) {
                                return goog.array.binarySearch_(e, t, !0, void 0, n)
                            }, goog.array.binarySearch_ = function(e, t, n, o, r) {
                                for (var i, a = 0, d = e.length; a < d;) {
                                    var s, u = a + d >> 1;
                                    s = n ? t.call(r, e[u], u, e) : t(o, e[u]), 0 < s ? a = u + 1 : (d = u, i = !s)
                                }
                                return i ? a : ~a
                            }, goog.array.sort = function(e, t) {
                                e.sort(t || goog.array.defaultCompare)
                            }, goog.array.stableSort = function(e, t) {
                                for (var n = Array(e.length), o = 0; o < e.length; o++) n[o] = {
                                    index: o,
                                    value: e[o]
                                };
                                var r = t || goog.array.defaultCompare;
                                for (goog.array.sort(n, function(e, t) {
                                        return r(e.value, t.value) || e.index - t.index
                                    }), o = 0; o < e.length; o++) e[o] = n[o].value
                            }, goog.array.sortByKey = function(e, t, n) {
                                var o = n || goog.array.defaultCompare;
                                goog.array.sort(e, function(e, n) {
                                    return o(t(e), t(n))
                                })
                            }, goog.array.sortObjectsByKey = function(e, t, n) {
                                goog.array.sortByKey(e, function(e) {
                                    return e[t]
                                }, n)
                            }, goog.array.isSorted = function(e, t, n) {
                                t = t || goog.array.defaultCompare;
                                for (var o = 1; o < e.length; o++) {
                                    var r = t(e[o - 1], e[o]);
                                    if (0 < r || 0 == r && n) return !1
                                }
                                return !0
                            }, goog.array.equals = function(e, t, n) {
                                if (!goog.isArrayLike(e) || !goog.isArrayLike(t) || e.length != t.length) return !1;
                                var o = e.length;
                                n = n || goog.array.defaultCompareEquality;
                                for (var r = 0; r < o; r++)
                                    if (!n(e[r], t[r])) return !1;
                                return !0
                            }, goog.array.compare3 = function(e, t, n) {
                                n = n || goog.array.defaultCompare;
                                for (var o = Math.min(e.length, t.length), r = 0; r < o; r++) {
                                    var i = n(e[r], t[r]);
                                    if (0 != i) return i
                                }
                                return goog.array.defaultCompare(e.length, t.length)
                            }, goog.array.defaultCompare = function(e, t) {
                                return e > t ? 1 : e < t ? -1 : 0
                            }, goog.array.inverseDefaultCompare = function(e, t) {
                                return -goog.array.defaultCompare(e, t)
                            }, goog.array.defaultCompareEquality = function(e, t) {
                                return e === t
                            }, goog.array.binaryInsert = function(e, t, n) {
                                return n = goog.array.binarySearch(e, t, n), 0 > n && (goog.array.insertAt(e, t, -(n + 1)), !0)
                            }, goog.array.binaryRemove = function(e, t, n) {
                                return t = goog.array.binarySearch(e, t, n), 0 <= t && goog.array.removeAt(e, t)
                            }, goog.array.bucket = function(e, t, n) {
                                for (var o = {}, r = 0; r < e.length; r++) {
                                    var i = e[r],
                                        a = t.call(n, i, r, e);
                                    goog.isDef(a) && (o[a] || (o[a] = [])).push(i)
                                }
                                return o
                            }, goog.array.toObject = function(e, t, n) {
                                var o = {};
                                return goog.array.forEach(e, function(r, i) {
                                    o[t.call(n, r, i, e)] = r
                                }), o
                            }, goog.array.range = function(e, t, n) {
                                var o = [],
                                    r = 0,
                                    i = e;
                                if (n = n || 1, void 0 !== t && (r = e, i = t), 0 > n * (i - r)) return [];
                                if (0 < n)
                                    for (e = r; e < i; e += n) o.push(e);
                                else
                                    for (e = r; e > i; e += n) o.push(e);
                                return o
                            }, goog.array.repeat = function(e, t) {
                                for (var n = [], o = 0; o < t; o++) n[o] = e;
                                return n
                            }, goog.array.flatten = function(e) {
                                for (var t = [], n = 0; n < arguments.length; n++) {
                                    var o = arguments[n];
                                    if (goog.isArray(o))
                                        for (var r = 0; r < o.length; r += 8192)
                                            for (var i = goog.array.slice(o, r, r + 8192), i = goog.array.flatten.apply(null, i), a = 0; a < i.length; a++) t.push(i[a]);
                                    else t.push(o)
                                }
                                return t
                            }, goog.array.rotate = function(e, t) {
                                return goog.asserts.assert(null != e.length), e.length && (t %= e.length, 0 < t ? Array.prototype.unshift.apply(e, e.splice(-t, t)) : 0 > t && Array.prototype.push.apply(e, e.splice(0, -t))), e
                            }, goog.array.moveItem = function(e, t, n) {
                                goog.asserts.assert(0 <= t && t < e.length), goog.asserts.assert(0 <= n && n < e.length), t = Array.prototype.splice.call(e, t, 1), Array.prototype.splice.call(e, n, 0, t[0])
                            }, goog.array.zip = function(e) {
                                if (!arguments.length) return [];
                                for (var t = [], n = arguments[0].length, o = 1; o < arguments.length; o++) arguments[o].length < n && (n = arguments[o].length);
                                for (o = 0; o < n; o++) {
                                    for (var r = [], i = 0; i < arguments.length; i++) r.push(arguments[i][o]);
                                    t.push(r)
                                }
                                return t
                            }, goog.array.shuffle = function(e, t) {
                                for (var n = t || Math.random, o = e.length - 1; 0 < o; o--) {
                                    var r = Math.floor(n() * (o + 1)),
                                        i = e[o];
                                    e[o] = e[r], e[r] = i
                                }
                            }, goog.array.copyByIndex = function(e, t) {
                                var n = [];
                                return goog.array.forEach(t, function(t) {
                                    n.push(e[t])
                                }), n
                            }, goog.array.concatMap = function(e, t, n) {
                                return goog.array.concat.apply([], goog.array.map(e, t, n))
                            }, goog.proto2 = {}, goog.proto2.FieldDescriptor = function(e, t, n) {
                                switch (this.parent_ = e, goog.asserts.assert(goog.string.isNumeric(t)), this.tag_ = t, this.name_ = n.name, this.isPacked_ = !!n.packed, this.isRepeated_ = !!n.repeated, this.isRequired_ = !!n.required, this.fieldType_ = n.fieldType, this.nativeType_ = n.type, this.deserializationConversionPermitted_ = !1, this.fieldType_) {
                                    case goog.proto2.FieldDescriptor.FieldType.INT64:
                                    case goog.proto2.FieldDescriptor.FieldType.UINT64:
                                    case goog.proto2.FieldDescriptor.FieldType.FIXED64:
                                    case goog.proto2.FieldDescriptor.FieldType.SFIXED64:
                                    case goog.proto2.FieldDescriptor.FieldType.SINT64:
                                    case goog.proto2.FieldDescriptor.FieldType.FLOAT:
                                    case goog.proto2.FieldDescriptor.FieldType.DOUBLE:
                                        this.deserializationConversionPermitted_ = !0
                                }
                                this.defaultValue_ = n.defaultValue
                            }, goog.proto2.FieldDescriptor.FieldType = {
                                DOUBLE: 1,
                                FLOAT: 2,
                                INT64: 3,
                                UINT64: 4,
                                INT32: 5,
                                FIXED64: 6,
                                FIXED32: 7,
                                BOOL: 8,
                                STRING: 9,
                                GROUP: 10,
                                MESSAGE: 11,
                                BYTES: 12,
                                UINT32: 13,
                                ENUM: 14,
                                SFIXED32: 15,
                                SFIXED64: 16,
                                SINT32: 17,
                                SINT64: 18
                            }, goog.proto2.FieldDescriptor.prototype.getTag = function() {
                                return this.tag_
                            }, goog.proto2.FieldDescriptor.prototype.getContainingType = function() {
                                return this.parent_.prototype.getDescriptor()
                            }, goog.proto2.FieldDescriptor.prototype.getName = function() {
                                return this.name_
                            }, goog.proto2.FieldDescriptor.prototype.getDefaultValue = function() {
                                if (void 0 === this.defaultValue_) {
                                    var e = this.nativeType_;
                                    if (e === Boolean) this.defaultValue_ = !1;
                                    else if (e === Number) this.defaultValue_ = 0;
                                    else {
                                        if (e !== String) return new e;
                                        this.defaultValue_ = this.deserializationConversionPermitted_ ? "0" : ""
                                    }
                                }
                                return this.defaultValue_
                            }, goog.proto2.FieldDescriptor.prototype.getFieldType = function() {
                                return this.fieldType_
                            }, goog.proto2.FieldDescriptor.prototype.getNativeType = function() {
                                return this.nativeType_
                            }, goog.proto2.FieldDescriptor.prototype.deserializationConversionPermitted = function() {
                                return this.deserializationConversionPermitted_
                            }, goog.proto2.FieldDescriptor.prototype.getFieldMessageType = function() {
                                return this.nativeType_.prototype.getDescriptor()
                            }, goog.proto2.FieldDescriptor.prototype.isCompositeType = function() {
                                return this.fieldType_ == goog.proto2.FieldDescriptor.FieldType.MESSAGE || this.fieldType_ == goog.proto2.FieldDescriptor.FieldType.GROUP
                            }, goog.proto2.FieldDescriptor.prototype.isPacked = function() {
                                return this.isPacked_
                            }, goog.proto2.FieldDescriptor.prototype.isRepeated = function() {
                                return this.isRepeated_
                            }, goog.proto2.FieldDescriptor.prototype.isRequired = function() {
                                return this.isRequired_
                            }, goog.proto2.FieldDescriptor.prototype.isOptional = function() {
                                return !this.isRepeated_ && !this.isRequired_
                            }, goog.object = {}, goog.object.is = function(e, t) {
                                return e === t ? 0 !== e || 1 / e === 1 / t : e !== e && t !== t
                            }, goog.object.forEach = function(e, t, n) {
                                for (var o in e) t.call(n, e[o], o, e)
                            }, goog.object.filter = function(e, t, n) {
                                var o, r = {};
                                for (o in e) t.call(n, e[o], o, e) && (r[o] = e[o]);
                                return r
                            }, goog.object.map = function(e, t, n) {
                                var o, r = {};
                                for (o in e) r[o] = t.call(n, e[o], o, e);
                                return r
                            }, goog.object.some = function(e, t, n) {
                                for (var o in e)
                                    if (t.call(n, e[o], o, e)) return !0;
                                return !1
                            }, goog.object.every = function(e, t, n) {
                                for (var o in e)
                                    if (!t.call(n, e[o], o, e)) return !1;
                                return !0
                            }, goog.object.getCount = function(e) {
                                var t, n = 0;
                                for (t in e) n++;
                                return n
                            }, goog.object.getAnyKey = function(e) {
                                for (var t in e) return t
                            }, goog.object.getAnyValue = function(e) {
                                for (var t in e) return e[t]
                            }, goog.object.contains = function(e, t) {
                                return goog.object.containsValue(e, t)
                            }, goog.object.getValues = function(e) {
                                var t, n = [],
                                    o = 0;
                                for (t in e) n[o++] = e[t];
                                return n
                            }, goog.object.getKeys = function(e) {
                                var t, n = [],
                                    o = 0;
                                for (t in e) n[o++] = t;
                                return n
                            }, goog.object.getValueByKeys = function(e, t) {
                                for (var n = goog.isArrayLike(t), o = n ? t : arguments, n = n ? 0 : 1; n < o.length && (e = e[o[n]], goog.isDef(e)); n++);
                                return e
                            }, goog.object.containsKey = function(e, t) {
                                return null !== e && t in e
                            }, goog.object.containsValue = function(e, t) {
                                for (var n in e)
                                    if (e[n] == t) return !0;
                                return !1
                            }, goog.object.findKey = function(e, t, n) {
                                for (var o in e)
                                    if (t.call(n, e[o], o, e)) return o
                            }, goog.object.findValue = function(e, t, n) {
                                return (t = goog.object.findKey(e, t, n)) && e[t]
                            }, goog.object.isEmpty = function(e) {
                                for (var t in e) return !1;
                                return !0
                            }, goog.object.clear = function(e) {
                                for (var t in e) delete e[t]
                            }, goog.object.remove = function(e, t) {
                                var n;
                                return (n = t in e) && delete e[t], n
                            }, goog.object.add = function(e, t, n) {
                                if (null !== e && t in e) throw Error('The object already contains the key "' + t + '"');
                                goog.object.set(e, t, n)
                            }, goog.object.get = function(e, t, n) {
                                return null !== e && t in e ? e[t] : n
                            }, goog.object.set = function(e, t, n) {
                                e[t] = n
                            }, goog.object.setIfUndefined = function(e, t, n) {
                                return t in e ? e[t] : e[t] = n
                            }, goog.object.setWithReturnValueIfNotSet = function(e, t, n) {
                                return t in e ? e[t] : (n = n(), e[t] = n)
                            }, goog.object.equals = function(e, t) {
                                for (var n in e)
                                    if (!(n in t) || e[n] !== t[n]) return !1;
                                for (n in t)
                                    if (!(n in e)) return !1;
                                return !0
                            }, goog.object.clone = function(e) {
                                var t, n = {};
                                for (t in e) n[t] = e[t];
                                return n
                            }, goog.object.unsafeClone = function(e) {
                                var t = goog.typeOf(e);
                                if ("object" == t || "array" == t) {
                                    if (goog.isFunction(e.clone)) return e.clone();
                                    var n, t = "array" == t ? [] : {};
                                    for (n in e) t[n] = goog.object.unsafeClone(e[n]);
                                    return t
                                }
                                return e
                            }, goog.object.transpose = function(e) {
                                var t, n = {};
                                for (t in e) n[e[t]] = t;
                                return n
                            }, goog.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), goog.object.extend = function(e, t) {
                                for (var n, o, r = 1; r < arguments.length; r++) {
                                    o = arguments[r];
                                    for (n in o) e[n] = o[n];
                                    for (var i = 0; i < goog.object.PROTOTYPE_FIELDS_.length; i++) n = goog.object.PROTOTYPE_FIELDS_[i], Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
                                }
                            }, goog.object.create = function(e) {
                                var t = arguments.length;
                                if (1 == t && goog.isArray(arguments[0])) return goog.object.create.apply(null, arguments[0]);
                                if (t % 2) throw Error("Uneven number of arguments");
                                for (var n = {}, o = 0; o < t; o += 2) n[arguments[o]] = arguments[o + 1];
                                return n
                            }, goog.object.createSet = function(e) {
                                var t = arguments.length;
                                if (1 == t && goog.isArray(arguments[0])) return goog.object.createSet.apply(null, arguments[0]);
                                for (var n = {}, o = 0; o < t; o++) n[arguments[o]] = !0;
                                return n
                            }, goog.object.createImmutableView = function(e) {
                                var t = e;
                                return Object.isFrozen && !Object.isFrozen(e) && (t = Object.create(e), Object.freeze(t)), t
                            }, goog.object.isImmutableView = function(e) {
                                return !!Object.isFrozen && Object.isFrozen(e)
                            }, goog.proto2.Descriptor = function(e, t, n) {
                                for (this.messageType_ = e, this.name_ = t.name || null, this.fullName_ = t.fullName || null, this.containingType_ = t.containingType, this.fields_ = {}, e = 0; e < n.length; e++) t = n[e], this.fields_[t.getTag()] = t
                            }, goog.proto2.Descriptor.prototype.getName = function() {
                                return this.name_
                            }, goog.proto2.Descriptor.prototype.getFullName = function() {
                                return this.fullName_
                            }, goog.proto2.Descriptor.prototype.getContainingType = function() {
                                return this.containingType_ ? this.containingType_.getDescriptor() : null
                            }, goog.proto2.Descriptor.prototype.getFields = function() {
                                var e = goog.object.getValues(this.fields_);
                                return goog.array.sort(e, function(e, t) {
                                    return e.getTag() - t.getTag()
                                }), e
                            }, goog.proto2.Descriptor.prototype.getFieldsMap = function() {
                                return this.fields_
                            }, goog.proto2.Descriptor.prototype.findFieldByName = function(e) {
                                return goog.object.findValue(this.fields_, function(t, n, o) {
                                    return t.getName() == e
                                }) || null
                            }, goog.proto2.Descriptor.prototype.findFieldByTag = function(e) {
                                return goog.asserts.assert(goog.string.isNumeric(e)), this.fields_[parseInt(e, 10)] || null
                            }, goog.proto2.Descriptor.prototype.createMessageInstance = function() {
                                return new this.messageType_
                            }, goog.proto2.Message = function() {
                                this.values_ = {}, this.fields_ = this.getDescriptor().getFieldsMap(), this.deserializedFields_ = this.lazyDeserializer_ = null
                            }, goog.proto2.Message.FieldType = {
                                DOUBLE: 1,
                                FLOAT: 2,
                                INT64: 3,
                                UINT64: 4,
                                INT32: 5,
                                FIXED64: 6,
                                FIXED32: 7,
                                BOOL: 8,
                                STRING: 9,
                                GROUP: 10,
                                MESSAGE: 11,
                                BYTES: 12,
                                UINT32: 13,
                                ENUM: 14,
                                SFIXED32: 15,
                                SFIXED64: 16,
                                SINT32: 17,
                                SINT64: 18
                            }, goog.proto2.Message.prototype.initializeForLazyDeserializer = function(e, t) {
                                this.lazyDeserializer_ = e, this.values_ = t, this.deserializedFields_ = {}
                            }, goog.proto2.Message.prototype.setUnknown = function(e, t) {
                                goog.asserts.assert(!this.fields_[e], "Field is not unknown in this message"), goog.asserts.assert(1 <= e, "Tag " + e + ' has value "' + t + '" in descriptor ' + this.getDescriptor().getName()), goog.asserts.assert(null !== t, "Value cannot be null"), this.values_[e] = t, this.deserializedFields_ && delete this.deserializedFields_[e]
                            }, goog.proto2.Message.prototype.forEachUnknown = function(e, t) {
                                var n, o = t || this;
                                for (n in this.values_) {
                                    var r = Number(n);
                                    this.fields_[r] || e.call(o, r, this.values_[n])
                                }
                            }, goog.proto2.Message.prototype.getDescriptor = goog.abstractMethod, goog.proto2.Message.prototype.has = function(e) {
                                return goog.asserts.assert(e.getContainingType() == this.getDescriptor(), "The current message does not contain the given field"), this.has$Value(e.getTag())
                            }, goog.proto2.Message.prototype.arrayOf = function(e) {
                                return goog.asserts.assert(e.getContainingType() == this.getDescriptor(), "The current message does not contain the given field"), this.array$Values(e.getTag())
                            }, goog.proto2.Message.prototype.countOf = function(e) {
                                return goog.asserts.assert(e.getContainingType() == this.getDescriptor(), "The current message does not contain the given field"), this.count$Values(e.getTag())
                            }, goog.proto2.Message.prototype.get = function(e, t) {
                                return goog.asserts.assert(e.getContainingType() == this.getDescriptor(), "The current message does not contain the given field"), this.get$Value(e.getTag(), t)
                            }, goog.proto2.Message.prototype.getOrDefault = function(e, t) {
                                return goog.asserts.assert(e.getContainingType() == this.getDescriptor(), "The current message does not contain the given field"), this.get$ValueOrDefault(e.getTag(), t)
                            }, goog.proto2.Message.prototype.set = function(e, t) {
                                goog.asserts.assert(e.getContainingType() == this.getDescriptor(), "The current message does not contain the given field"), this.set$Value(e.getTag(), t)
                            }, goog.proto2.Message.prototype.add = function(e, t) {
                                goog.asserts.assert(e.getContainingType() == this.getDescriptor(), "The current message does not contain the given field"), this.add$Value(e.getTag(), t)
                            }, goog.proto2.Message.prototype.clear = function(e) {
                                goog.asserts.assert(e.getContainingType() == this.getDescriptor(), "The current message does not contain the given field"), this.clear$Field(e.getTag())
                            }, goog.proto2.Message.prototype.equals = function(e) {
                                if (!e || this.constructor != e.constructor) return !1;
                                for (var t = this.getDescriptor().getFields(), n = 0; n < t.length; n++) {
                                    var o = t[n],
                                        r = o.getTag();
                                    if (this.has$Value(r) != e.has$Value(r)) return !1;
                                    if (this.has$Value(r)) {
                                        var i = o.isCompositeType(),
                                            a = this.getValueForTag_(r),
                                            r = e.getValueForTag_(r);
                                        if (o.isRepeated()) {
                                            if (a.length != r.length) return !1;
                                            for (o = 0; o < a.length; o++) {
                                                var d = a[o],
                                                    s = r[o];
                                                if (i ? !d.equals(s) : d != s) return !1
                                            }
                                        } else if (i ? !a.equals(r) : a != r) return !1
                                    }
                                }
                                return !0
                            }, goog.proto2.Message.prototype.copyFrom = function(e) {
                                goog.asserts.assert(this.constructor == e.constructor, "The source message must have the same type."), this != e && (this.values_ = {}, this.deserializedFields_ && (this.deserializedFields_ = {}), this.mergeFrom(e))
                            }, goog.proto2.Message.prototype.mergeFrom = function(e) {
                                goog.asserts.assert(this.constructor == e.constructor, "The source message must have the same type.");
                                for (var t = this.getDescriptor().getFields(), n = 0; n < t.length; n++) {
                                    var o = t[n],
                                        r = o.getTag();
                                    if (e.has$Value(r)) {
                                        this.deserializedFields_ && delete this.deserializedFields_[o.getTag()];
                                        var i = o.isCompositeType();
                                        if (o.isRepeated())
                                            for (var o = e.array$Values(r), a = 0; a < o.length; a++) this.add$Value(r, i ? o[a].clone() : o[a]);
                                        else o = e.getValueForTag_(r), i ? (i = this.getValueForTag_(r)) ? i.mergeFrom(o) : this.set$Value(r, o.clone()) : this.set$Value(r, o)
                                    }
                                }
                            }, goog.proto2.Message.prototype.clone = function() {
                                var e = new this.constructor;
                                return e.copyFrom(this), e
                            }, goog.proto2.Message.prototype.initDefaults = function(e) {
                                for (var t = this.getDescriptor().getFields(), n = 0; n < t.length; n++) {
                                    var o = t[n],
                                        r = o.getTag(),
                                        i = o.isCompositeType();
                                    if (this.has$Value(r) || o.isRepeated() || (i ? this.values_[r] = new(o.getNativeType()) : e && (this.values_[r] = o.getDefaultValue())), i)
                                        if (o.isRepeated())
                                            for (o = this.array$Values(r), r = 0; r < o.length; r++) o[r].initDefaults(e);
                                        else this.get$Value(r).initDefaults(e)
                                }
                            }, goog.proto2.Message.prototype.has$Value = function(e) {
                                return null != this.values_[e]
                            }, goog.proto2.Message.prototype.getValueForTag_ = function(e) {
                                var t = this.values_[e];
                                return goog.isDefAndNotNull(t) ? this.lazyDeserializer_ ? e in this.deserializedFields_ ? this.deserializedFields_[e] : (t = this.lazyDeserializer_.deserializeField(this, this.fields_[e], t), this.deserializedFields_[e] = t) : t : null
                            }, goog.proto2.Message.prototype.get$Value = function(e, t) {
                                var n = this.getValueForTag_(e);
                                if (this.fields_[e].isRepeated()) {
                                    var o = t || 0;
                                    return goog.asserts.assert(0 <= o && o < n.length, "Given index %s is out of bounds.  Repeated field length: %s", o, n.length), n[o]
                                }
                                return n
                            }, goog.proto2.Message.prototype.get$ValueOrDefault = function(e, t) {
                                return this.has$Value(e) ? this.get$Value(e, t) : this.fields_[e].getDefaultValue()
                            }, goog.proto2.Message.prototype.array$Values = function(e) {
                                return this.getValueForTag_(e) || []
                            }, goog.proto2.Message.prototype.count$Values = function(e) {
                                return this.fields_[e].isRepeated() ? this.has$Value(e) ? this.values_[e].length : 0 : this.has$Value(e) ? 1 : 0
                            }, goog.proto2.Message.prototype.set$Value = function(e, t) {
                                goog.asserts.ENABLE_ASSERTS && this.checkFieldType_(this.fields_[e], t), this.values_[e] = t, this.deserializedFields_ && (this.deserializedFields_[e] = t)
                            }, goog.proto2.Message.prototype.add$Value = function(e, t) {
                                goog.asserts.ENABLE_ASSERTS && this.checkFieldType_(this.fields_[e], t), this.values_[e] || (this.values_[e] = []), this.values_[e].push(t), this.deserializedFields_ && delete this.deserializedFields_[e]
                            }, goog.proto2.Message.prototype.checkFieldType_ = function(e, t) {
                                e.getFieldType() == goog.proto2.FieldDescriptor.FieldType.ENUM ? goog.asserts.assertNumber(t) : goog.asserts.assert(Object(t).constructor == e.getNativeType())
                            }, goog.proto2.Message.prototype.clear$Field = function(e) {
                                delete this.values_[e], this.deserializedFields_ && delete this.deserializedFields_[e]
                            }, goog.proto2.Message.createDescriptor = function(e, t) {
                                var n, o = [],
                                    r = t[0];
                                for (n in t) 0 != n && o.push(new goog.proto2.FieldDescriptor(e, n, t[n]));
                                return new goog.proto2.Descriptor(e, r, o)
                            }, goog.proto2.Serializer = function() {}, goog.proto2.Serializer.DECODE_SYMBOLIC_ENUMS = !1, goog.proto2.Serializer.prototype.serialize = goog.abstractMethod, goog.proto2.Serializer.prototype.getSerializedValue = function(e, t) {
                                return e.isCompositeType() ? this.serialize(t) : goog.isNumber(t) && !isFinite(t) ? t.toString() : t
                            }, goog.proto2.Serializer.prototype.deserialize = function(e, t) {
                                var n = e.createMessageInstance();
                                return this.deserializeTo(n, t), goog.asserts.assert(n instanceof goog.proto2.Message), n
                            }, goog.proto2.Serializer.prototype.deserializeTo = goog.abstractMethod, goog.proto2.Serializer.prototype.getDeserializedValue = function(e, t) {
                                if (e.isCompositeType()) return t instanceof goog.proto2.Message ? t : this.deserialize(e.getFieldMessageType(), t);
                                if (e.getFieldType() == goog.proto2.FieldDescriptor.FieldType.ENUM) {
                                    if (goog.proto2.Serializer.DECODE_SYMBOLIC_ENUMS && goog.isString(t)) {
                                        var n = e.getNativeType();
                                        if (n.hasOwnProperty(t)) return n[t]
                                    }
                                    return goog.isString(t) && goog.proto2.Serializer.INTEGER_REGEX.test(t) && (n = Number(t), 0 < n) ? n : t
                                }
                                if (!e.deserializationConversionPermitted()) return t;
                                if (n = e.getNativeType(), n === String) {
                                    if (goog.isNumber(t)) return String(t)
                                } else if (n === Number && goog.isString(t) && ("Infinity" === t || "-Infinity" === t || "NaN" === t || goog.proto2.Serializer.INTEGER_REGEX.test(t))) return Number(t);
                                return t
                            }, goog.proto2.Serializer.INTEGER_REGEX = /^-?[0-9]+$/, goog.proto2.LazyDeserializer = function() {}, goog.inherits(goog.proto2.LazyDeserializer, goog.proto2.Serializer), goog.proto2.LazyDeserializer.prototype.deserialize = function(e, t) {
                                var n = e.createMessageInstance();
                                return n.initializeForLazyDeserializer(this, t), goog.asserts.assert(n instanceof goog.proto2.Message), n
                            }, goog.proto2.LazyDeserializer.prototype.deserializeTo = function(e, t) {
                                throw Error("Unimplemented")
                            }, goog.proto2.LazyDeserializer.prototype.deserializeField = goog.abstractMethod, goog.proto2.PbLiteSerializer = function() {}, goog.inherits(goog.proto2.PbLiteSerializer, goog.proto2.LazyDeserializer), goog.proto2.PbLiteSerializer.prototype.zeroIndexing_ = !1, goog.proto2.PbLiteSerializer.prototype.setZeroIndexed = function(e) {
                                this.zeroIndexing_ = e
                            }, goog.proto2.PbLiteSerializer.prototype.serialize = function(e) {
                                for (var t = e.getDescriptor().getFields(), n = [], o = this.zeroIndexing_, r = 0; r < t.length; r++) {
                                    var i = t[r];
                                    if (e.has(i)) {
                                        var a = i.getTag(),
                                            a = o ? a - 1 : a;
                                        if (i.isRepeated()) {
                                            n[a] = [];
                                            for (var d = 0; d < e.countOf(i); d++) n[a][d] = this.getSerializedValue(i, e.get(i, d))
                                        } else n[a] = this.getSerializedValue(i, e.get(i))
                                    }
                                }
                                return e.forEachUnknown(function(e, t) {
                                    n[o ? e - 1 : e] = t
                                }), n
                            }, goog.proto2.PbLiteSerializer.prototype.deserializeField = function(e, t, n) {
                                if (null == n) return n;
                                if (t.isRepeated()) {
                                    e = [], goog.asserts.assert(goog.isArray(n), "Value must be array: %s", n);
                                    for (var o = 0; o < n.length; o++) e[o] = this.getDeserializedValue(t, n[o]);
                                    return e
                                }
                                return this.getDeserializedValue(t, n);
                            }, goog.proto2.PbLiteSerializer.prototype.getSerializedValue = function(e, t) {
                                return e.getFieldType() == goog.proto2.FieldDescriptor.FieldType.BOOL ? t ? 1 : 0 : goog.proto2.Serializer.prototype.getSerializedValue.apply(this, arguments)
                            }, goog.proto2.PbLiteSerializer.prototype.getDeserializedValue = function(e, t) {
                                return e.getFieldType() == goog.proto2.FieldDescriptor.FieldType.BOOL ? (goog.asserts.assert(goog.isNumber(t) || goog.isBoolean(t), "Value is expected to be a number or boolean"), !!t) : goog.proto2.Serializer.prototype.getDeserializedValue.apply(this, arguments)
                            }, goog.proto2.PbLiteSerializer.prototype.deserialize = function(e, t) {
                                var n = t;
                                if (this.zeroIndexing_) {
                                    var o, n = [];
                                    for (o in t) n[parseInt(o, 10) + 1] = t[o]
                                }
                                return goog.proto2.PbLiteSerializer.superClass_.deserialize.call(this, e, n)
                            };
                            var i18n = {
                                phonenumbers: {}
                            };
                            i18n.phonenumbers.NumberFormat = function() {
                                    goog.proto2.Message.call(this)
                                }, goog.inherits(i18n.phonenumbers.NumberFormat, goog.proto2.Message), i18n.phonenumbers.NumberFormat.prototype.getPattern = function() {
                                    return this.get$Value(1)
                                }, i18n.phonenumbers.NumberFormat.prototype.getPatternOrDefault = function() {
                                    return this.get$ValueOrDefault(1)
                                }, i18n.phonenumbers.NumberFormat.prototype.setPattern = function(e) {
                                    this.set$Value(1, e)
                                }, i18n.phonenumbers.NumberFormat.prototype.hasPattern = function() {
                                    return this.has$Value(1)
                                }, i18n.phonenumbers.NumberFormat.prototype.patternCount = function() {
                                    return this.count$Values(1)
                                }, i18n.phonenumbers.NumberFormat.prototype.clearPattern = function() {
                                    this.clear$Field(1)
                                }, i18n.phonenumbers.NumberFormat.prototype.getFormat = function() {
                                    return this.get$Value(2)
                                }, i18n.phonenumbers.NumberFormat.prototype.getFormatOrDefault = function() {
                                    return this.get$ValueOrDefault(2)
                                }, i18n.phonenumbers.NumberFormat.prototype.setFormat = function(e) {
                                    this.set$Value(2, e)
                                }, i18n.phonenumbers.NumberFormat.prototype.hasFormat = function() {
                                    return this.has$Value(2)
                                }, i18n.phonenumbers.NumberFormat.prototype.formatCount = function() {
                                    return this.count$Values(2)
                                }, i18n.phonenumbers.NumberFormat.prototype.clearFormat = function() {
                                    this.clear$Field(2)
                                }, i18n.phonenumbers.NumberFormat.prototype.getLeadingDigitsPattern = function(e) {
                                    return this.get$Value(3, e)
                                }, i18n.phonenumbers.NumberFormat.prototype.getLeadingDigitsPatternOrDefault = function(e) {
                                    return this.get$ValueOrDefault(3, e)
                                }, i18n.phonenumbers.NumberFormat.prototype.addLeadingDigitsPattern = function(e) {
                                    this.add$Value(3, e)
                                }, i18n.phonenumbers.NumberFormat.prototype.leadingDigitsPatternArray = function() {
                                    return this.array$Values(3)
                                }, i18n.phonenumbers.NumberFormat.prototype.hasLeadingDigitsPattern = function() {
                                    return this.has$Value(3)
                                }, i18n.phonenumbers.NumberFormat.prototype.leadingDigitsPatternCount = function() {
                                    return this.count$Values(3)
                                }, i18n.phonenumbers.NumberFormat.prototype.clearLeadingDigitsPattern = function() {
                                    this.clear$Field(3)
                                }, i18n.phonenumbers.NumberFormat.prototype.getNationalPrefixFormattingRule = function() {
                                    return this.get$Value(4)
                                }, i18n.phonenumbers.NumberFormat.prototype.getNationalPrefixFormattingRuleOrDefault = function() {
                                    return this.get$ValueOrDefault(4)
                                }, i18n.phonenumbers.NumberFormat.prototype.setNationalPrefixFormattingRule = function(e) {
                                    this.set$Value(4, e)
                                }, i18n.phonenumbers.NumberFormat.prototype.hasNationalPrefixFormattingRule = function() {
                                    return this.has$Value(4)
                                }, i18n.phonenumbers.NumberFormat.prototype.nationalPrefixFormattingRuleCount = function() {
                                    return this.count$Values(4)
                                }, i18n.phonenumbers.NumberFormat.prototype.clearNationalPrefixFormattingRule = function() {
                                    this.clear$Field(4)
                                }, i18n.phonenumbers.NumberFormat.prototype.getNationalPrefixOptionalWhenFormatting = function() {
                                    return this.get$Value(6)
                                }, i18n.phonenumbers.NumberFormat.prototype.getNationalPrefixOptionalWhenFormattingOrDefault = function() {
                                    return this.get$ValueOrDefault(6)
                                }, i18n.phonenumbers.NumberFormat.prototype.setNationalPrefixOptionalWhenFormatting = function(e) {
                                    this.set$Value(6, e)
                                }, i18n.phonenumbers.NumberFormat.prototype.hasNationalPrefixOptionalWhenFormatting = function() {
                                    return this.has$Value(6)
                                }, i18n.phonenumbers.NumberFormat.prototype.nationalPrefixOptionalWhenFormattingCount = function() {
                                    return this.count$Values(6)
                                }, i18n.phonenumbers.NumberFormat.prototype.clearNationalPrefixOptionalWhenFormatting = function() {
                                    this.clear$Field(6)
                                }, i18n.phonenumbers.NumberFormat.prototype.getDomesticCarrierCodeFormattingRule = function() {
                                    return this.get$Value(5)
                                }, i18n.phonenumbers.NumberFormat.prototype.getDomesticCarrierCodeFormattingRuleOrDefault = function() {
                                    return this.get$ValueOrDefault(5)
                                }, i18n.phonenumbers.NumberFormat.prototype.setDomesticCarrierCodeFormattingRule = function(e) {
                                    this.set$Value(5, e)
                                }, i18n.phonenumbers.NumberFormat.prototype.hasDomesticCarrierCodeFormattingRule = function() {
                                    return this.has$Value(5)
                                }, i18n.phonenumbers.NumberFormat.prototype.domesticCarrierCodeFormattingRuleCount = function() {
                                    return this.count$Values(5)
                                }, i18n.phonenumbers.NumberFormat.prototype.clearDomesticCarrierCodeFormattingRule = function() {
                                    this.clear$Field(5)
                                }, i18n.phonenumbers.PhoneNumberDesc = function() {
                                    goog.proto2.Message.call(this)
                                }, goog.inherits(i18n.phonenumbers.PhoneNumberDesc, goog.proto2.Message), i18n.phonenumbers.PhoneNumberDesc.prototype.getNationalNumberPattern = function() {
                                    return this.get$Value(2)
                                }, i18n.phonenumbers.PhoneNumberDesc.prototype.getNationalNumberPatternOrDefault = function() {
                                    return this.get$ValueOrDefault(2)
                                }, i18n.phonenumbers.PhoneNumberDesc.prototype.setNationalNumberPattern = function(e) {
                                    this.set$Value(2, e)
                                }, i18n.phonenumbers.PhoneNumberDesc.prototype.hasNationalNumberPattern = function() {
                                    return this.has$Value(2)
                                }, i18n.phonenumbers.PhoneNumberDesc.prototype.nationalNumberPatternCount = function() {
                                    return this.count$Values(2)
                                }, i18n.phonenumbers.PhoneNumberDesc.prototype.clearNationalNumberPattern = function() {
                                    this.clear$Field(2)
                                }, i18n.phonenumbers.PhoneNumberDesc.prototype.getPossibleNumberPattern = function() {
                                    return this.get$Value(3)
                                }, i18n.phonenumbers.PhoneNumberDesc.prototype.getPossibleNumberPatternOrDefault = function() {
                                    return this.get$ValueOrDefault(3)
                                }, i18n.phonenumbers.PhoneNumberDesc.prototype.setPossibleNumberPattern = function(e) {
                                    this.set$Value(3, e)
                                }, i18n.phonenumbers.PhoneNumberDesc.prototype.hasPossibleNumberPattern = function() {
                                    return this.has$Value(3)
                                }, i18n.phonenumbers.PhoneNumberDesc.prototype.possibleNumberPatternCount = function() {
                                    return this.count$Values(3)
                                }, i18n.phonenumbers.PhoneNumberDesc.prototype.clearPossibleNumberPattern = function() {
                                    this.clear$Field(3)
                                }, i18n.phonenumbers.PhoneNumberDesc.prototype.getExampleNumber = function() {
                                    return this.get$Value(6)
                                }, i18n.phonenumbers.PhoneNumberDesc.prototype.getExampleNumberOrDefault = function() {
                                    return this.get$ValueOrDefault(6)
                                }, i18n.phonenumbers.PhoneNumberDesc.prototype.setExampleNumber = function(e) {
                                    this.set$Value(6, e)
                                }, i18n.phonenumbers.PhoneNumberDesc.prototype.hasExampleNumber = function() {
                                    return this.has$Value(6)
                                }, i18n.phonenumbers.PhoneNumberDesc.prototype.exampleNumberCount = function() {
                                    return this.count$Values(6)
                                }, i18n.phonenumbers.PhoneNumberDesc.prototype.clearExampleNumber = function() {
                                    this.clear$Field(6)
                                }, i18n.phonenumbers.PhoneNumberDesc.prototype.getNationalNumberMatcherData = function() {
                                    return this.get$Value(7)
                                }, i18n.phonenumbers.PhoneNumberDesc.prototype.getNationalNumberMatcherDataOrDefault = function() {
                                    return this.get$ValueOrDefault(7)
                                }, i18n.phonenumbers.PhoneNumberDesc.prototype.setNationalNumberMatcherData = function(e) {
                                    this.set$Value(7, e)
                                }, i18n.phonenumbers.PhoneNumberDesc.prototype.hasNationalNumberMatcherData = function() {
                                    return this.has$Value(7)
                                }, i18n.phonenumbers.PhoneNumberDesc.prototype.nationalNumberMatcherDataCount = function() {
                                    return this.count$Values(7)
                                }, i18n.phonenumbers.PhoneNumberDesc.prototype.clearNationalNumberMatcherData = function() {
                                    this.clear$Field(7)
                                }, i18n.phonenumbers.PhoneNumberDesc.prototype.getPossibleNumberMatcherData = function() {
                                    return this.get$Value(8)
                                }, i18n.phonenumbers.PhoneNumberDesc.prototype.getPossibleNumberMatcherDataOrDefault = function() {
                                    return this.get$ValueOrDefault(8)
                                }, i18n.phonenumbers.PhoneNumberDesc.prototype.setPossibleNumberMatcherData = function(e) {
                                    this.set$Value(8, e)
                                }, i18n.phonenumbers.PhoneNumberDesc.prototype.hasPossibleNumberMatcherData = function() {
                                    return this.has$Value(8)
                                }, i18n.phonenumbers.PhoneNumberDesc.prototype.possibleNumberMatcherDataCount = function() {
                                    return this.count$Values(8)
                                }, i18n.phonenumbers.PhoneNumberDesc.prototype.clearPossibleNumberMatcherData = function() {
                                    this.clear$Field(8)
                                }, i18n.phonenumbers.PhoneMetadata = function() {
                                    goog.proto2.Message.call(this)
                                }, goog.inherits(i18n.phonenumbers.PhoneMetadata, goog.proto2.Message), i18n.phonenumbers.PhoneMetadata.prototype.getGeneralDesc = function() {
                                    return this.get$Value(1)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getGeneralDescOrDefault = function() {
                                    return this.get$ValueOrDefault(1)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.setGeneralDesc = function(e) {
                                    this.set$Value(1, e)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.hasGeneralDesc = function() {
                                    return this.has$Value(1)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.generalDescCount = function() {
                                    return this.count$Values(1)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.clearGeneralDesc = function() {
                                    this.clear$Field(1)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getFixedLine = function() {
                                    return this.get$Value(2)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getFixedLineOrDefault = function() {
                                    return this.get$ValueOrDefault(2)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.setFixedLine = function(e) {
                                    this.set$Value(2, e)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.hasFixedLine = function() {
                                    return this.has$Value(2)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.fixedLineCount = function() {
                                    return this.count$Values(2)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.clearFixedLine = function() {
                                    this.clear$Field(2)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getMobile = function() {
                                    return this.get$Value(3)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getMobileOrDefault = function() {
                                    return this.get$ValueOrDefault(3)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.setMobile = function(e) {
                                    this.set$Value(3, e)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.hasMobile = function() {
                                    return this.has$Value(3)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.mobileCount = function() {
                                    return this.count$Values(3)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.clearMobile = function() {
                                    this.clear$Field(3)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getTollFree = function() {
                                    return this.get$Value(4)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getTollFreeOrDefault = function() {
                                    return this.get$ValueOrDefault(4)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.setTollFree = function(e) {
                                    this.set$Value(4, e)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.hasTollFree = function() {
                                    return this.has$Value(4)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.tollFreeCount = function() {
                                    return this.count$Values(4)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.clearTollFree = function() {
                                    this.clear$Field(4)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getPremiumRate = function() {
                                    return this.get$Value(5)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getPremiumRateOrDefault = function() {
                                    return this.get$ValueOrDefault(5)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.setPremiumRate = function(e) {
                                    this.set$Value(5, e)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.hasPremiumRate = function() {
                                    return this.has$Value(5)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.premiumRateCount = function() {
                                    return this.count$Values(5)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.clearPremiumRate = function() {
                                    this.clear$Field(5)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getSharedCost = function() {
                                    return this.get$Value(6)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getSharedCostOrDefault = function() {
                                    return this.get$ValueOrDefault(6)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.setSharedCost = function(e) {
                                    this.set$Value(6, e)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.hasSharedCost = function() {
                                    return this.has$Value(6)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.sharedCostCount = function() {
                                    return this.count$Values(6)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.clearSharedCost = function() {
                                    this.clear$Field(6)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getPersonalNumber = function() {
                                    return this.get$Value(7)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getPersonalNumberOrDefault = function() {
                                    return this.get$ValueOrDefault(7)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.setPersonalNumber = function(e) {
                                    this.set$Value(7, e)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.hasPersonalNumber = function() {
                                    return this.has$Value(7)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.personalNumberCount = function() {
                                    return this.count$Values(7)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.clearPersonalNumber = function() {
                                    this.clear$Field(7)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getVoip = function() {
                                    return this.get$Value(8)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getVoipOrDefault = function() {
                                    return this.get$ValueOrDefault(8)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.setVoip = function(e) {
                                    this.set$Value(8, e)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.hasVoip = function() {
                                    return this.has$Value(8)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.voipCount = function() {
                                    return this.count$Values(8)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.clearVoip = function() {
                                    this.clear$Field(8)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getPager = function() {
                                    return this.get$Value(21)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getPagerOrDefault = function() {
                                    return this.get$ValueOrDefault(21)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.setPager = function(e) {
                                    this.set$Value(21, e)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.hasPager = function() {
                                    return this.has$Value(21)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.pagerCount = function() {
                                    return this.count$Values(21)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.clearPager = function() {
                                    this.clear$Field(21)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getUan = function() {
                                    return this.get$Value(25)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getUanOrDefault = function() {
                                    return this.get$ValueOrDefault(25)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.setUan = function(e) {
                                    this.set$Value(25, e)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.hasUan = function() {
                                    return this.has$Value(25)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.uanCount = function() {
                                    return this.count$Values(25)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.clearUan = function() {
                                    this.clear$Field(25)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getEmergency = function() {
                                    return this.get$Value(27)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getEmergencyOrDefault = function() {
                                    return this.get$ValueOrDefault(27)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.setEmergency = function(e) {
                                    this.set$Value(27, e)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.hasEmergency = function() {
                                    return this.has$Value(27)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.emergencyCount = function() {
                                    return this.count$Values(27)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.clearEmergency = function() {
                                    this.clear$Field(27)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getVoicemail = function() {
                                    return this.get$Value(28)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getVoicemailOrDefault = function() {
                                    return this.get$ValueOrDefault(28)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.setVoicemail = function(e) {
                                    this.set$Value(28, e)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.hasVoicemail = function() {
                                    return this.has$Value(28)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.voicemailCount = function() {
                                    return this.count$Values(28)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.clearVoicemail = function() {
                                    this.clear$Field(28)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getNoInternationalDialling = function() {
                                    return this.get$Value(24)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getNoInternationalDiallingOrDefault = function() {
                                    return this.get$ValueOrDefault(24)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.setNoInternationalDialling = function(e) {
                                    this.set$Value(24, e)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.hasNoInternationalDialling = function() {
                                    return this.has$Value(24)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.noInternationalDiallingCount = function() {
                                    return this.count$Values(24)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.clearNoInternationalDialling = function() {
                                    this.clear$Field(24)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getId = function() {
                                    return this.get$Value(9)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getIdOrDefault = function() {
                                    return this.get$ValueOrDefault(9)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.setId = function(e) {
                                    this.set$Value(9, e)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.hasId = function() {
                                    return this.has$Value(9)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.idCount = function() {
                                    return this.count$Values(9)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.clearId = function() {
                                    this.clear$Field(9)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getCountryCode = function() {
                                    return this.get$Value(10)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getCountryCodeOrDefault = function() {
                                    return this.get$ValueOrDefault(10)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.setCountryCode = function(e) {
                                    this.set$Value(10, e)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.hasCountryCode = function() {
                                    return this.has$Value(10)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.countryCodeCount = function() {
                                    return this.count$Values(10)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.clearCountryCode = function() {
                                    this.clear$Field(10)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getInternationalPrefix = function() {
                                    return this.get$Value(11)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getInternationalPrefixOrDefault = function() {
                                    return this.get$ValueOrDefault(11)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.setInternationalPrefix = function(e) {
                                    this.set$Value(11, e)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.hasInternationalPrefix = function() {
                                    return this.has$Value(11)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.internationalPrefixCount = function() {
                                    return this.count$Values(11)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.clearInternationalPrefix = function() {
                                    this.clear$Field(11)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getPreferredInternationalPrefix = function() {
                                    return this.get$Value(17)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getPreferredInternationalPrefixOrDefault = function() {
                                    return this.get$ValueOrDefault(17)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.setPreferredInternationalPrefix = function(e) {
                                    this.set$Value(17, e)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.hasPreferredInternationalPrefix = function() {
                                    return this.has$Value(17)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.preferredInternationalPrefixCount = function() {
                                    return this.count$Values(17)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.clearPreferredInternationalPrefix = function() {
                                    this.clear$Field(17)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getNationalPrefix = function() {
                                    return this.get$Value(12)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getNationalPrefixOrDefault = function() {
                                    return this.get$ValueOrDefault(12)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.setNationalPrefix = function(e) {
                                    this.set$Value(12, e)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.hasNationalPrefix = function() {
                                    return this.has$Value(12)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.nationalPrefixCount = function() {
                                    return this.count$Values(12)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.clearNationalPrefix = function() {
                                    this.clear$Field(12)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getPreferredExtnPrefix = function() {
                                    return this.get$Value(13)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getPreferredExtnPrefixOrDefault = function() {
                                    return this.get$ValueOrDefault(13)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.setPreferredExtnPrefix = function(e) {
                                    this.set$Value(13, e)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.hasPreferredExtnPrefix = function() {
                                    return this.has$Value(13)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.preferredExtnPrefixCount = function() {
                                    return this.count$Values(13)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.clearPreferredExtnPrefix = function() {
                                    this.clear$Field(13)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getNationalPrefixForParsing = function() {
                                    return this.get$Value(15)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getNationalPrefixForParsingOrDefault = function() {
                                    return this.get$ValueOrDefault(15)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.setNationalPrefixForParsing = function(e) {
                                    this.set$Value(15, e)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.hasNationalPrefixForParsing = function() {
                                    return this.has$Value(15)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.nationalPrefixForParsingCount = function() {
                                    return this.count$Values(15)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.clearNationalPrefixForParsing = function() {
                                    this.clear$Field(15)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getNationalPrefixTransformRule = function() {
                                    return this.get$Value(16)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getNationalPrefixTransformRuleOrDefault = function() {
                                    return this.get$ValueOrDefault(16)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.setNationalPrefixTransformRule = function(e) {
                                    this.set$Value(16, e)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.hasNationalPrefixTransformRule = function() {
                                    return this.has$Value(16)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.nationalPrefixTransformRuleCount = function() {
                                    return this.count$Values(16)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.clearNationalPrefixTransformRule = function() {
                                    this.clear$Field(16)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getSameMobileAndFixedLinePattern = function() {
                                    return this.get$Value(18)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getSameMobileAndFixedLinePatternOrDefault = function() {
                                    return this.get$ValueOrDefault(18)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.setSameMobileAndFixedLinePattern = function(e) {
                                    this.set$Value(18, e)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.hasSameMobileAndFixedLinePattern = function() {
                                    return this.has$Value(18)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.sameMobileAndFixedLinePatternCount = function() {
                                    return this.count$Values(18)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.clearSameMobileAndFixedLinePattern = function() {
                                    this.clear$Field(18)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getNumberFormat = function(e) {
                                    return this.get$Value(19, e)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getNumberFormatOrDefault = function(e) {
                                    return this.get$ValueOrDefault(19, e)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.addNumberFormat = function(e) {
                                    this.add$Value(19, e)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.numberFormatArray = function() {
                                    return this.array$Values(19)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.hasNumberFormat = function() {
                                    return this.has$Value(19)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.numberFormatCount = function() {
                                    return this.count$Values(19)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.clearNumberFormat = function() {
                                    this.clear$Field(19)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getIntlNumberFormat = function(e) {
                                    return this.get$Value(20, e)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getIntlNumberFormatOrDefault = function(e) {
                                    return this.get$ValueOrDefault(20, e)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.addIntlNumberFormat = function(e) {
                                    this.add$Value(20, e)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.intlNumberFormatArray = function() {
                                    return this.array$Values(20)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.hasIntlNumberFormat = function() {
                                    return this.has$Value(20)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.intlNumberFormatCount = function() {
                                    return this.count$Values(20)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.clearIntlNumberFormat = function() {
                                    this.clear$Field(20)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getMainCountryForCode = function() {
                                    return this.get$Value(22)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getMainCountryForCodeOrDefault = function() {
                                    return this.get$ValueOrDefault(22)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.setMainCountryForCode = function(e) {
                                    this.set$Value(22, e)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.hasMainCountryForCode = function() {
                                    return this.has$Value(22)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.mainCountryForCodeCount = function() {
                                    return this.count$Values(22)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.clearMainCountryForCode = function() {
                                    this.clear$Field(22)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getLeadingDigits = function() {
                                    return this.get$Value(23)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getLeadingDigitsOrDefault = function() {
                                    return this.get$ValueOrDefault(23)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.setLeadingDigits = function(e) {
                                    this.set$Value(23, e)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.hasLeadingDigits = function() {
                                    return this.has$Value(23)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.leadingDigitsCount = function() {
                                    return this.count$Values(23)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.clearLeadingDigits = function() {
                                    this.clear$Field(23)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getLeadingZeroPossible = function() {
                                    return this.get$Value(26)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.getLeadingZeroPossibleOrDefault = function() {
                                    return this.get$ValueOrDefault(26)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.setLeadingZeroPossible = function(e) {
                                    this.set$Value(26, e)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.hasLeadingZeroPossible = function() {
                                    return this.has$Value(26)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.leadingZeroPossibleCount = function() {
                                    return this.count$Values(26)
                                }, i18n.phonenumbers.PhoneMetadata.prototype.clearLeadingZeroPossible = function() {
                                    this.clear$Field(26)
                                }, i18n.phonenumbers.PhoneMetadataCollection = function() {
                                    goog.proto2.Message.call(this)
                                }, goog.inherits(i18n.phonenumbers.PhoneMetadataCollection, goog.proto2.Message), i18n.phonenumbers.PhoneMetadataCollection.prototype.getMetadata = function(e) {
                                    return this.get$Value(1, e)
                                }, i18n.phonenumbers.PhoneMetadataCollection.prototype.getMetadataOrDefault = function(e) {
                                    return this.get$ValueOrDefault(1, e)
                                }, i18n.phonenumbers.PhoneMetadataCollection.prototype.addMetadata = function(e) {
                                    this.add$Value(1, e)
                                }, i18n.phonenumbers.PhoneMetadataCollection.prototype.metadataArray = function() {
                                    return this.array$Values(1)
                                }, i18n.phonenumbers.PhoneMetadataCollection.prototype.hasMetadata = function() {
                                    return this.has$Value(1)
                                }, i18n.phonenumbers.PhoneMetadataCollection.prototype.metadataCount = function() {
                                    return this.count$Values(1)
                                }, i18n.phonenumbers.PhoneMetadataCollection.prototype.clearMetadata = function() {
                                    this.clear$Field(1)
                                }, i18n.phonenumbers.NumberFormat.prototype.getDescriptor = function() {
                                    return i18n.phonenumbers.NumberFormat.descriptor_ || (i18n.phonenumbers.NumberFormat.descriptor_ = goog.proto2.Message.createDescriptor(i18n.phonenumbers.NumberFormat, {
                                        0: {
                                            name: "NumberFormat",
                                            fullName: "i18n.phonenumbers.NumberFormat"
                                        },
                                        1: {
                                            name: "pattern",
                                            required: !0,
                                            fieldType: goog.proto2.Message.FieldType.STRING,
                                            type: String
                                        },
                                        2: {
                                            name: "format",
                                            required: !0,
                                            fieldType: goog.proto2.Message.FieldType.STRING,
                                            type: String
                                        },
                                        3: {
                                            name: "leading_digits_pattern",
                                            repeated: !0,
                                            fieldType: goog.proto2.Message.FieldType.STRING,
                                            type: String
                                        },
                                        4: {
                                            name: "national_prefix_formatting_rule",
                                            fieldType: goog.proto2.Message.FieldType.STRING,
                                            type: String
                                        },
                                        6: {
                                            name: "national_prefix_optional_when_formatting",
                                            fieldType: goog.proto2.Message.FieldType.BOOL,
                                            type: Boolean
                                        },
                                        5: {
                                            name: "domestic_carrier_code_formatting_rule",
                                            fieldType: goog.proto2.Message.FieldType.STRING,
                                            type: String
                                        }
                                    })), i18n.phonenumbers.NumberFormat.descriptor_
                                }, i18n.phonenumbers.NumberFormat.ctor = i18n.phonenumbers.NumberFormat, i18n.phonenumbers.NumberFormat.ctor.getDescriptor = i18n.phonenumbers.NumberFormat.prototype.getDescriptor, i18n.phonenumbers.PhoneNumberDesc.prototype.getDescriptor = function() {
                                    return i18n.phonenumbers.PhoneNumberDesc.descriptor_ || (i18n.phonenumbers.PhoneNumberDesc.descriptor_ = goog.proto2.Message.createDescriptor(i18n.phonenumbers.PhoneNumberDesc, {
                                        0: {
                                            name: "PhoneNumberDesc",
                                            fullName: "i18n.phonenumbers.PhoneNumberDesc"
                                        },
                                        2: {
                                            name: "national_number_pattern",
                                            fieldType: goog.proto2.Message.FieldType.STRING,
                                            type: String
                                        },
                                        3: {
                                            name: "possible_number_pattern",
                                            fieldType: goog.proto2.Message.FieldType.STRING,
                                            type: String
                                        },
                                        6: {
                                            name: "example_number",
                                            fieldType: goog.proto2.Message.FieldType.STRING,
                                            type: String
                                        },
                                        7: {
                                            name: "national_number_matcher_data",
                                            fieldType: goog.proto2.Message.FieldType.BYTES,
                                            type: String
                                        },
                                        8: {
                                            name: "possible_number_matcher_data",
                                            fieldType: goog.proto2.Message.FieldType.BYTES,
                                            type: String
                                        }
                                    })), i18n.phonenumbers.PhoneNumberDesc.descriptor_
                                }, i18n.phonenumbers.PhoneNumberDesc.ctor = i18n.phonenumbers.PhoneNumberDesc, i18n.phonenumbers.PhoneNumberDesc.ctor.getDescriptor = i18n.phonenumbers.PhoneNumberDesc.prototype.getDescriptor, i18n.phonenumbers.PhoneMetadata.prototype.getDescriptor = function() {
                                    return i18n.phonenumbers.PhoneMetadata.descriptor_ || (i18n.phonenumbers.PhoneMetadata.descriptor_ = goog.proto2.Message.createDescriptor(i18n.phonenumbers.PhoneMetadata, {
                                        0: {
                                            name: "PhoneMetadata",
                                            fullName: "i18n.phonenumbers.PhoneMetadata"
                                        },
                                        1: {
                                            name: "general_desc",
                                            fieldType: goog.proto2.Message.FieldType.MESSAGE,
                                            type: i18n.phonenumbers.PhoneNumberDesc
                                        },
                                        2: {
                                            name: "fixed_line",
                                            fieldType: goog.proto2.Message.FieldType.MESSAGE,
                                            type: i18n.phonenumbers.PhoneNumberDesc
                                        },
                                        3: {
                                            name: "mobile",
                                            fieldType: goog.proto2.Message.FieldType.MESSAGE,
                                            type: i18n.phonenumbers.PhoneNumberDesc
                                        },
                                        4: {
                                            name: "toll_free",
                                            fieldType: goog.proto2.Message.FieldType.MESSAGE,
                                            type: i18n.phonenumbers.PhoneNumberDesc
                                        },
                                        5: {
                                            name: "premium_rate",
                                            fieldType: goog.proto2.Message.FieldType.MESSAGE,
                                            type: i18n.phonenumbers.PhoneNumberDesc
                                        },
                                        6: {
                                            name: "shared_cost",
                                            fieldType: goog.proto2.Message.FieldType.MESSAGE,
                                            type: i18n.phonenumbers.PhoneNumberDesc
                                        },
                                        7: {
                                            name: "personal_number",
                                            fieldType: goog.proto2.Message.FieldType.MESSAGE,
                                            type: i18n.phonenumbers.PhoneNumberDesc
                                        },
                                        8: {
                                            name: "voip",
                                            fieldType: goog.proto2.Message.FieldType.MESSAGE,
                                            type: i18n.phonenumbers.PhoneNumberDesc
                                        },
                                        21: {
                                            name: "pager",
                                            fieldType: goog.proto2.Message.FieldType.MESSAGE,
                                            type: i18n.phonenumbers.PhoneNumberDesc
                                        },
                                        25: {
                                            name: "uan",
                                            fieldType: goog.proto2.Message.FieldType.MESSAGE,
                                            type: i18n.phonenumbers.PhoneNumberDesc
                                        },
                                        27: {
                                            name: "emergency",
                                            fieldType: goog.proto2.Message.FieldType.MESSAGE,
                                            type: i18n.phonenumbers.PhoneNumberDesc
                                        },
                                        28: {
                                            name: "voicemail",
                                            fieldType: goog.proto2.Message.FieldType.MESSAGE,
                                            type: i18n.phonenumbers.PhoneNumberDesc
                                        },
                                        24: {
                                            name: "no_international_dialling",
                                            fieldType: goog.proto2.Message.FieldType.MESSAGE,
                                            type: i18n.phonenumbers.PhoneNumberDesc
                                        },
                                        9: {
                                            name: "id",
                                            required: !0,
                                            fieldType: goog.proto2.Message.FieldType.STRING,
                                            type: String
                                        },
                                        10: {
                                            name: "country_code",
                                            fieldType: goog.proto2.Message.FieldType.INT32,
                                            type: Number
                                        },
                                        11: {
                                            name: "international_prefix",
                                            fieldType: goog.proto2.Message.FieldType.STRING,
                                            type: String
                                        },
                                        17: {
                                            name: "preferred_international_prefix",
                                            fieldType: goog.proto2.Message.FieldType.STRING,
                                            type: String
                                        },
                                        12: {
                                            name: "national_prefix",
                                            fieldType: goog.proto2.Message.FieldType.STRING,
                                            type: String
                                        },
                                        13: {
                                            name: "preferred_extn_prefix",
                                            fieldType: goog.proto2.Message.FieldType.STRING,
                                            type: String
                                        },
                                        15: {
                                            name: "national_prefix_for_parsing",
                                            fieldType: goog.proto2.Message.FieldType.STRING,
                                            type: String
                                        },
                                        16: {
                                            name: "national_prefix_transform_rule",
                                            fieldType: goog.proto2.Message.FieldType.STRING,
                                            type: String
                                        },
                                        18: {
                                            name: "same_mobile_and_fixed_line_pattern",
                                            fieldType: goog.proto2.Message.FieldType.BOOL,
                                            defaultValue: !1,
                                            type: Boolean
                                        },
                                        19: {
                                            name: "number_format",
                                            repeated: !0,
                                            fieldType: goog.proto2.Message.FieldType.MESSAGE,
                                            type: i18n.phonenumbers.NumberFormat
                                        },
                                        20: {
                                            name: "intl_number_format",
                                            repeated: !0,
                                            fieldType: goog.proto2.Message.FieldType.MESSAGE,
                                            type: i18n.phonenumbers.NumberFormat
                                        },
                                        22: {
                                            name: "main_country_for_code",
                                            fieldType: goog.proto2.Message.FieldType.BOOL,
                                            defaultValue: !1,
                                            type: Boolean
                                        },
                                        23: {
                                            name: "leading_digits",
                                            fieldType: goog.proto2.Message.FieldType.STRING,
                                            type: String
                                        },
                                        26: {
                                            name: "leading_zero_possible",
                                            fieldType: goog.proto2.Message.FieldType.BOOL,
                                            defaultValue: !1,
                                            type: Boolean
                                        }
                                    })), i18n.phonenumbers.PhoneMetadata.descriptor_
                                }, i18n.phonenumbers.PhoneMetadata.ctor = i18n.phonenumbers.PhoneMetadata, i18n.phonenumbers.PhoneMetadata.ctor.getDescriptor = i18n.phonenumbers.PhoneMetadata.prototype.getDescriptor, i18n.phonenumbers.PhoneMetadataCollection.prototype.getDescriptor = function() {
                                    return i18n.phonenumbers.PhoneMetadataCollection.descriptor_ || (i18n.phonenumbers.PhoneMetadataCollection.descriptor_ = goog.proto2.Message.createDescriptor(i18n.phonenumbers.PhoneMetadataCollection, {
                                        0: {
                                            name: "PhoneMetadataCollection",
                                            fullName: "i18n.phonenumbers.PhoneMetadataCollection"
                                        },
                                        1: {
                                            name: "metadata",
                                            repeated: !0,
                                            fieldType: goog.proto2.Message.FieldType.MESSAGE,
                                            type: i18n.phonenumbers.PhoneMetadata
                                        }
                                    })), i18n.phonenumbers.PhoneMetadataCollection.descriptor_
                                }, i18n.phonenumbers.PhoneMetadataCollection.ctor = i18n.phonenumbers.PhoneMetadataCollection, i18n.phonenumbers.PhoneMetadataCollection.ctor.getDescriptor = i18n.phonenumbers.PhoneMetadataCollection.prototype.getDescriptor,
                                i18n.phonenumbers.PhoneNumber = function() {
                                    goog.proto2.Message.call(this)
                                }, goog.inherits(i18n.phonenumbers.PhoneNumber, goog.proto2.Message), i18n.phonenumbers.PhoneNumber.prototype.getCountryCode = function() {
                                    return this.get$Value(1)
                                }, i18n.phonenumbers.PhoneNumber.prototype.getCountryCodeOrDefault = function() {
                                    return this.get$ValueOrDefault(1)
                                }, i18n.phonenumbers.PhoneNumber.prototype.setCountryCode = function(e) {
                                    this.set$Value(1, e)
                                }, i18n.phonenumbers.PhoneNumber.prototype.hasCountryCode = function() {
                                    return this.has$Value(1)
                                }, i18n.phonenumbers.PhoneNumber.prototype.countryCodeCount = function() {
                                    return this.count$Values(1)
                                }, i18n.phonenumbers.PhoneNumber.prototype.clearCountryCode = function() {
                                    this.clear$Field(1)
                                }, i18n.phonenumbers.PhoneNumber.prototype.getNationalNumber = function() {
                                    return this.get$Value(2)
                                }, i18n.phonenumbers.PhoneNumber.prototype.getNationalNumberOrDefault = function() {
                                    return this.get$ValueOrDefault(2)
                                }, i18n.phonenumbers.PhoneNumber.prototype.setNationalNumber = function(e) {
                                    this.set$Value(2, e)
                                }, i18n.phonenumbers.PhoneNumber.prototype.hasNationalNumber = function() {
                                    return this.has$Value(2)
                                }, i18n.phonenumbers.PhoneNumber.prototype.nationalNumberCount = function() {
                                    return this.count$Values(2)
                                }, i18n.phonenumbers.PhoneNumber.prototype.clearNationalNumber = function() {
                                    this.clear$Field(2)
                                }, i18n.phonenumbers.PhoneNumber.prototype.getExtension = function() {
                                    return this.get$Value(3)
                                }, i18n.phonenumbers.PhoneNumber.prototype.getExtensionOrDefault = function() {
                                    return this.get$ValueOrDefault(3)
                                }, i18n.phonenumbers.PhoneNumber.prototype.setExtension = function(e) {
                                    this.set$Value(3, e)
                                }, i18n.phonenumbers.PhoneNumber.prototype.hasExtension = function() {
                                    return this.has$Value(3)
                                }, i18n.phonenumbers.PhoneNumber.prototype.extensionCount = function() {
                                    return this.count$Values(3)
                                }, i18n.phonenumbers.PhoneNumber.prototype.clearExtension = function() {
                                    this.clear$Field(3)
                                }, i18n.phonenumbers.PhoneNumber.prototype.getItalianLeadingZero = function() {
                                    return this.get$Value(4)
                                }, i18n.phonenumbers.PhoneNumber.prototype.getItalianLeadingZeroOrDefault = function() {
                                    return this.get$ValueOrDefault(4)
                                }, i18n.phonenumbers.PhoneNumber.prototype.setItalianLeadingZero = function(e) {
                                    this.set$Value(4, e)
                                }, i18n.phonenumbers.PhoneNumber.prototype.hasItalianLeadingZero = function() {
                                    return this.has$Value(4)
                                }, i18n.phonenumbers.PhoneNumber.prototype.italianLeadingZeroCount = function() {
                                    return this.count$Values(4)
                                }, i18n.phonenumbers.PhoneNumber.prototype.clearItalianLeadingZero = function() {
                                    this.clear$Field(4)
                                }, i18n.phonenumbers.PhoneNumber.prototype.getNumberOfLeadingZeros = function() {
                                    return this.get$Value(8)
                                }, i18n.phonenumbers.PhoneNumber.prototype.getNumberOfLeadingZerosOrDefault = function() {
                                    return this.get$ValueOrDefault(8)
                                }, i18n.phonenumbers.PhoneNumber.prototype.setNumberOfLeadingZeros = function(e) {
                                    this.set$Value(8, e)
                                }, i18n.phonenumbers.PhoneNumber.prototype.hasNumberOfLeadingZeros = function() {
                                    return this.has$Value(8)
                                }, i18n.phonenumbers.PhoneNumber.prototype.numberOfLeadingZerosCount = function() {
                                    return this.count$Values(8)
                                }, i18n.phonenumbers.PhoneNumber.prototype.clearNumberOfLeadingZeros = function() {
                                    this.clear$Field(8)
                                }, i18n.phonenumbers.PhoneNumber.prototype.getRawInput = function() {
                                    return this.get$Value(5)
                                }, i18n.phonenumbers.PhoneNumber.prototype.getRawInputOrDefault = function() {
                                    return this.get$ValueOrDefault(5)
                                }, i18n.phonenumbers.PhoneNumber.prototype.setRawInput = function(e) {
                                    this.set$Value(5, e)
                                }, i18n.phonenumbers.PhoneNumber.prototype.hasRawInput = function() {
                                    return this.has$Value(5)
                                }, i18n.phonenumbers.PhoneNumber.prototype.rawInputCount = function() {
                                    return this.count$Values(5)
                                }, i18n.phonenumbers.PhoneNumber.prototype.clearRawInput = function() {
                                    this.clear$Field(5)
                                }, i18n.phonenumbers.PhoneNumber.prototype.getCountryCodeSource = function() {
                                    return this.get$Value(6)
                                }, i18n.phonenumbers.PhoneNumber.prototype.getCountryCodeSourceOrDefault = function() {
                                    return this.get$ValueOrDefault(6)
                                }, i18n.phonenumbers.PhoneNumber.prototype.setCountryCodeSource = function(e) {
                                    this.set$Value(6, e)
                                }, i18n.phonenumbers.PhoneNumber.prototype.hasCountryCodeSource = function() {
                                    return this.has$Value(6)
                                }, i18n.phonenumbers.PhoneNumber.prototype.countryCodeSourceCount = function() {
                                    return this.count$Values(6)
                                }, i18n.phonenumbers.PhoneNumber.prototype.clearCountryCodeSource = function() {
                                    this.clear$Field(6)
                                }, i18n.phonenumbers.PhoneNumber.prototype.getPreferredDomesticCarrierCode = function() {
                                    return this.get$Value(7)
                                }, i18n.phonenumbers.PhoneNumber.prototype.getPreferredDomesticCarrierCodeOrDefault = function() {
                                    return this.get$ValueOrDefault(7)
                                }, i18n.phonenumbers.PhoneNumber.prototype.setPreferredDomesticCarrierCode = function(e) {
                                    this.set$Value(7, e)
                                }, i18n.phonenumbers.PhoneNumber.prototype.hasPreferredDomesticCarrierCode = function() {
                                    return this.has$Value(7)
                                }, i18n.phonenumbers.PhoneNumber.prototype.preferredDomesticCarrierCodeCount = function() {
                                    return this.count$Values(7)
                                }, i18n.phonenumbers.PhoneNumber.prototype.clearPreferredDomesticCarrierCode = function() {
                                    this.clear$Field(7)
                                }, i18n.phonenumbers.PhoneNumber.CountryCodeSource = {
                                    FROM_NUMBER_WITH_PLUS_SIGN: 1,
                                    FROM_NUMBER_WITH_IDD: 5,
                                    FROM_NUMBER_WITHOUT_PLUS_SIGN: 10,
                                    FROM_DEFAULT_COUNTRY: 20
                                }, i18n.phonenumbers.PhoneNumber.prototype.getDescriptor = function() {
                                    return i18n.phonenumbers.PhoneNumber.descriptor_ || (i18n.phonenumbers.PhoneNumber.descriptor_ = goog.proto2.Message.createDescriptor(i18n.phonenumbers.PhoneNumber, {
                                        0: {
                                            name: "PhoneNumber",
                                            fullName: "i18n.phonenumbers.PhoneNumber"
                                        },
                                        1: {
                                            name: "country_code",
                                            required: !0,
                                            fieldType: goog.proto2.Message.FieldType.INT32,
                                            type: Number
                                        },
                                        2: {
                                            name: "national_number",
                                            required: !0,
                                            fieldType: goog.proto2.Message.FieldType.UINT64,
                                            type: Number
                                        },
                                        3: {
                                            name: "extension",
                                            fieldType: goog.proto2.Message.FieldType.STRING,
                                            type: String
                                        },
                                        4: {
                                            name: "italian_leading_zero",
                                            fieldType: goog.proto2.Message.FieldType.BOOL,
                                            type: Boolean
                                        },
                                        8: {
                                            name: "number_of_leading_zeros",
                                            fieldType: goog.proto2.Message.FieldType.INT32,
                                            defaultValue: 1,
                                            type: Number
                                        },
                                        5: {
                                            name: "raw_input",
                                            fieldType: goog.proto2.Message.FieldType.STRING,
                                            type: String
                                        },
                                        6: {
                                            name: "country_code_source",
                                            fieldType: goog.proto2.Message.FieldType.ENUM,
                                            defaultValue: i18n.phonenumbers.PhoneNumber.CountryCodeSource.FROM_NUMBER_WITH_PLUS_SIGN,
                                            type: i18n.phonenumbers.PhoneNumber.CountryCodeSource
                                        },
                                        7: {
                                            name: "preferred_domestic_carrier_code",
                                            fieldType: goog.proto2.Message.FieldType.STRING,
                                            type: String
                                        }
                                    })), i18n.phonenumbers.PhoneNumber.descriptor_
                                }, i18n.phonenumbers.PhoneNumber.ctor = i18n.phonenumbers.PhoneNumber, i18n.phonenumbers.PhoneNumber.ctor.getDescriptor = i18n.phonenumbers.PhoneNumber.prototype.getDescriptor, i18n.phonenumbers.metadata = {}, i18n.phonenumbers.metadata.countryCodeToRegionCodeMap = {
                                    1: "US AG AI AS BB BM BS CA DM DO GD GU JM KN KY LC MP MS PR SX TC TT VC VG VI".split(" "),
                                    7: ["RU", "KZ"],
                                    20: ["EG"],
                                    27: ["ZA"],
                                    30: ["GR"],
                                    31: ["NL"],
                                    32: ["BE"],
                                    33: ["FR"],
                                    34: ["ES"],
                                    36: ["HU"],
                                    39: ["IT", "VA"],
                                    40: ["RO"],
                                    41: ["CH"],
                                    43: ["AT"],
                                    44: ["GB", "GG", "IM", "JE"],
                                    45: ["DK"],
                                    46: ["SE"],
                                    47: ["NO", "SJ"],
                                    48: ["PL"],
                                    49: ["DE"],
                                    51: ["PE"],
                                    52: ["MX"],
                                    53: ["CU"],
                                    54: ["AR"],
                                    55: ["BR"],
                                    56: ["CL"],
                                    57: ["CO"],
                                    58: ["VE"],
                                    60: ["MY"],
                                    61: ["AU", "CC", "CX"],
                                    62: ["ID"],
                                    63: ["PH"],
                                    64: ["NZ"],
                                    65: ["SG"],
                                    66: ["TH"],
                                    81: ["JP"],
                                    82: ["KR"],
                                    84: ["VN"],
                                    86: ["CN"],
                                    90: ["TR"],
                                    91: ["IN"],
                                    92: ["PK"],
                                    93: ["AF"],
                                    94: ["LK"],
                                    95: ["MM"],
                                    98: ["IR"],
                                    211: ["SS"],
                                    212: ["MA", "EH"],
                                    213: ["DZ"],
                                    216: ["TN"],
                                    218: ["LY"],
                                    220: ["GM"],
                                    221: ["SN"],
                                    222: ["MR"],
                                    223: ["ML"],
                                    224: ["GN"],
                                    225: ["CI"],
                                    226: ["BF"],
                                    227: ["NE"],
                                    228: ["TG"],
                                    229: ["BJ"],
                                    230: ["MU"],
                                    231: ["LR"],
                                    232: ["SL"],
                                    233: ["GH"],
                                    234: ["NG"],
                                    235: ["TD"],
                                    236: ["CF"],
                                    237: ["CM"],
                                    238: ["CV"],
                                    239: ["ST"],
                                    240: ["GQ"],
                                    241: ["GA"],
                                    242: ["CG"],
                                    243: ["CD"],
                                    244: ["AO"],
                                    245: ["GW"],
                                    246: ["IO"],
                                    247: ["AC"],
                                    248: ["SC"],
                                    249: ["SD"],
                                    250: ["RW"],
                                    251: ["ET"],
                                    252: ["SO"],
                                    253: ["DJ"],
                                    254: ["KE"],
                                    255: ["TZ"],
                                    256: ["UG"],
                                    257: ["BI"],
                                    258: ["MZ"],
                                    260: ["ZM"],
                                    261: ["MG"],
                                    262: ["RE", "YT"],
                                    263: ["ZW"],
                                    264: ["NA"],
                                    265: ["MW"],
                                    266: ["LS"],
                                    267: ["BW"],
                                    268: ["SZ"],
                                    269: ["KM"],
                                    290: ["SH", "TA"],
                                    291: ["ER"],
                                    297: ["AW"],
                                    298: ["FO"],
                                    299: ["GL"],
                                    350: ["GI"],
                                    351: ["PT"],
                                    352: ["LU"],
                                    353: ["IE"],
                                    354: ["IS"],
                                    355: ["AL"],
                                    356: ["MT"],
                                    357: ["CY"],
                                    358: ["FI", "AX"],
                                    359: ["BG"],
                                    370: ["LT"],
                                    371: ["LV"],
                                    372: ["EE"],
                                    373: ["MD"],
                                    374: ["AM"],
                                    375: ["BY"],
                                    376: ["AD"],
                                    377: ["MC"],
                                    378: ["SM"],
                                    380: ["UA"],
                                    381: ["RS"],
                                    382: ["ME"],
                                    385: ["HR"],
                                    386: ["SI"],
                                    387: ["BA"],
                                    389: ["MK"],
                                    420: ["CZ"],
                                    421: ["SK"],
                                    423: ["LI"],
                                    500: ["FK"],
                                    501: ["BZ"],
                                    502: ["GT"],
                                    503: ["SV"],
                                    504: ["HN"],
                                    505: ["NI"],
                                    506: ["CR"],
                                    507: ["PA"],
                                    508: ["PM"],
                                    509: ["HT"],
                                    590: ["GP", "BL", "MF"],
                                    591: ["BO"],
                                    592: ["GY"],
                                    593: ["EC"],
                                    594: ["GF"],
                                    595: ["PY"],
                                    596: ["MQ"],
                                    597: ["SR"],
                                    598: ["UY"],
                                    599: ["CW", "BQ"],
                                    670: ["TL"],
                                    672: ["NF"],
                                    673: ["BN"],
                                    674: ["NR"],
                                    675: ["PG"],
                                    676: ["TO"],
                                    677: ["SB"],
                                    678: ["VU"],
                                    679: ["FJ"],
                                    680: ["PW"],
                                    681: ["WF"],
                                    682: ["CK"],
                                    683: ["NU"],
                                    685: ["WS"],
                                    686: ["KI"],
                                    687: ["NC"],
                                    688: ["TV"],
                                    689: ["PF"],
                                    690: ["TK"],
                                    691: ["FM"],
                                    692: ["MH"],
                                    800: ["001"],
                                    808: ["001"],
                                    850: ["KP"],
                                    852: ["HK"],
                                    853: ["MO"],
                                    855: ["KH"],
                                    856: ["LA"],
                                    870: ["001"],
                                    878: ["001"],
                                    880: ["BD"],
                                    881: ["001"],
                                    882: ["001"],
                                    883: ["001"],
                                    886: ["TW"],
                                    888: ["001"],
                                    960: ["MV"],
                                    961: ["LB"],
                                    962: ["JO"],
                                    963: ["SY"],
                                    964: ["IQ"],
                                    965: ["KW"],
                                    966: ["SA"],
                                    967: ["YE"],
                                    968: ["OM"],
                                    970: ["PS"],
                                    971: ["AE"],
                                    972: ["IL"],
                                    973: ["BH"],
                                    974: ["QA"],
                                    975: ["BT"],
                                    976: ["MN"],
                                    977: ["NP"],
                                    979: ["001"],
                                    992: ["TJ"],
                                    993: ["TM"],
                                    994: ["AZ"],
                                    995: ["GE"],
                                    996: ["KG"],
                                    998: ["UZ"]
                                }, i18n.phonenumbers.metadata.countryToMetadata = {
                                    AC: [, [, , "[46]\\d{4}|[01589]\\d{5}", "\\d{5,6}"],
                                        [, , "6[2-467]\\d{3}", "\\d{5}", , , "62889"],
                                        [, , "4\\d{4}", "\\d{5}", , , "40123"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "AC", 247, "00", , , , , , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "[01589]\\d{5}", "\\d{6}", , , "542011"], , , [, , "NA", "NA"]
                                    ],
                                    AD: [, [, , "(?:[346-9]|180)\\d{5}", "\\d{6,8}"],
                                        [, , "[78]\\d{5}", "\\d{6}", , , "712345"],
                                        [, , "[346]\\d{5}", "\\d{6}", , , "312345"],
                                        [, , "180[02]\\d{4}", "\\d{8}", , , "18001234"],
                                        [, , "9\\d{5}", "\\d{6}", , , "912345"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "AD", 376, "00", , , , , , , , [
                                            [, "(\\d{3})(\\d{3})", "$1 $2", ["[346-9]"]],
                                            [, "(180[02])(\\d{4})", "$1 $2", ["1"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    AE: [, [, , "[2-79]\\d{7,8}|800\\d{2,9}", "\\d{5,12}"],
                                        [, , "[2-4679][2-8]\\d{6}", "\\d{7,8}", , , "22345678"],
                                        [, , "5[024-6]\\d{7}", "\\d{9}", , , "501234567"],
                                        [, , "400\\d{6}|800\\d{2,9}", "\\d{5,12}", , , "800123456"],
                                        [, , "900[02]\\d{5}", "\\d{9}", , , "900234567"],
                                        [, , "700[05]\\d{5}", "\\d{9}", , , "700012345"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "AE", 971, "00", "0", , , "0", , , , [
                                            [, "([2-4679])(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-4679][2-8]"], "0$1"],
                                            [, "(5\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
                                            [, "([479]00)(\\d)(\\d{5})", "$1 $2 $3", ["[479]0"], "$1"],
                                            [, "([68]00)(\\d{2,9})", "$1 $2", ["60|8"], "$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "600[25]\\d{5}", "\\d{9}", , , "600212345"], , , [, , "NA", "NA"]
                                    ],
                                    AF: [, [, , "[2-7]\\d{8}", "\\d{7,9}"],
                                        [, , "(?:[25][0-8]|[34][0-4]|6[0-5])[2-9]\\d{6}", "\\d{7,9}", , , "234567890"],
                                        [, , "7(?:[014-9]\\d{7}|2[89]\\d{6})", "\\d{9}", , , "701234567"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "AF", 93, "00", "0", , , "0", , , , [
                                            [, "([2-7]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    AG: [, [, , "[2589]\\d{9}", "\\d{7}(?:\\d{3})?"],
                                        [, , "268(?:4(?:6[0-38]|84)|56[0-2])\\d{4}", "\\d{7}(?:\\d{3})?", , , "2684601234"],
                                        [, , "268(?:464|7(?:2\\d|36|64|7[0-689]|8[02-68]))\\d{4}", "\\d{7}(?:\\d{3})?", , , "2684641234"],
                                        [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"],
                                        [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"],
                                        [, , "NA", "NA"],
                                        [, , "5(?:00|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
                                        [, , "26848[01]\\d{4}", "\\d{7}(?:\\d{3})?", , , "2684801234"], "AG", 1, "011", "1", , , "1", , , , , , [, , "26840[69]\\d{4}", "\\d{7}(?:\\d{3})?", , , "2684061234"], , "268", [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    AI: [, [, , "[2589]\\d{9}", "\\d{7}(?:\\d{3})?"],
                                        [, , "2644(?:6[12]|9[78])\\d{4}", "\\d{7}(?:\\d{3})?", , , "2644612345"],
                                        [, , "264(?:235|476|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}", "\\d{7}(?:\\d{3})?", , , "2642351234"],
                                        [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"],
                                        [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"],
                                        [, , "NA", "NA"],
                                        [, , "5(?:00|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
                                        [, , "NA", "NA"], "AI", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "264", [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    AL: [, [, , "[2-57]\\d{7}|6\\d{8}|8\\d{5,7}|9\\d{5}", "\\d{5,9}"],
                                        [, , "(?:2(?:[168][1-9]|[247]\\d|9[1-7])|3(?:1[1-3]|[2-6]\\d|[79][1-8]|8[1-9])|4\\d{2}|5(?:1[1-4]|[2-578]\\d|6[1-5]|9[1-7])|8(?:[19][1-5]|[2-6]\\d|[78][1-7]))\\d{5}", "\\d{5,8}", , , "22345678"],
                                        [, , "6[6-9]\\d{7}", "\\d{9}", , , "661234567"],
                                        [, , "800\\d{4}", "\\d{7}", , , "8001234"],
                                        [, , "900\\d{3}", "\\d{6}", , , "900123"],
                                        [, , "808\\d{3}", "\\d{6}", , , "808123"],
                                        [, , "700\\d{5}", "\\d{8}", , , "70012345"],
                                        [, , "NA", "NA"], "AL", 355, "00", "0", , , "0", , , , [
                                            [, "(4)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[0-6]"], "0$1"],
                                            [, "(6[6-9])(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"],
                                            [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4[7-9]"], "0$1"],
                                            [, "(\\d{3})(\\d{3,5})", "$1 $2", ["[235][16-9]|8[016-9]|[79]"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    AM: [, [, , "[1-9]\\d{7}", "\\d{5,8}"],
                                        [, , "(?:1[01]\\d|2(?:2[2-46]|3[1-8]|4[2-69]|5[2-7]|6[1-9]|8[1-7])|3[12]2|47\\d)\\d{5}", "\\d{5,8}", , , "10123456"],
                                        [, , "(?:4[139]|55|77|9[1-9])\\d{6}", "\\d{8}", , , "77123456"],
                                        [, , "800\\d{5}", "\\d{8}", , , "80012345"],
                                        [, , "90[016]\\d{5}", "\\d{8}", , , "90012345"],
                                        [, , "80[1-4]\\d{5}", "\\d{8}", , , "80112345"],
                                        [, , "NA", "NA"],
                                        [, , "60[2-7]\\d{5}", "\\d{8}", , , "60271234"], "AM", 374, "00", "0", , , "0", , , , [
                                            [, "(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"],
                                            [, "(\\d{2})(\\d{6})", "$1 $2", ["4[139]|[5-7]|9[1-9]"], "0$1"],
                                            [, "(\\d{3})(\\d{5})", "$1 $2", ["[23]"], "(0$1)"],
                                            [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8|90"], "0 $1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    AO: [, [, , "[29]\\d{8}", "\\d{9}"],
                                        [, , "2\\d(?:[26-9]\\d|\\d[26-9])\\d{5}", "\\d{9}", , , "222123456"],
                                        [, , "9[1-49]\\d{7}", "\\d{9}", , , "923123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "AO", 244, "00", , , , , , , , [
                                            [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    AR: [, [, , "11\\d{8}|[2368]\\d{9}|9\\d{10}", "\\d{6,11}"],
                                        [, , "11\\d{8}|(?:2(?:2(?:[013]\\d|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[067]\\d)|4(?:7[3-8]|9\\d)|6(?:[01346]\\d|2[24-6]|5[15-8])|80\\d|9(?:[0124789]\\d|3[1-6]|5[234]|6[2-46]))|3(?:3(?:2[79]|6\\d|8[2578])|4(?:[78]\\d|0[0124-9]|[1-35]\\d|4[24-7]|6[02-9]|9[123678])|5(?:[138]\\d|2[1245]|4[1-9]|6[2-4]|7[1-6])|6[24]\\d|7(?:[0469]\\d|1[1568]|2[013-9]|3[145]|5[14-8]|7[2-57]|8[0-24-9])|8(?:[013578]\\d|2[15-7]|4[13-6]|6[1-357-9]|9[124]))|670\\d)\\d{6}", "\\d{6,10}", , , "1123456789"],
                                        [, , "675\\d{7}|9(?:11[2-9]\\d{7}|(?:2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[12358]|5[138]|6[24]|7[069]|8[013578]))[2-9]\\d{6}|\\d{4}[2-9]\\d{5})", "\\d{6,11}", , , "91123456789"],
                                        [, , "800\\d{7}", "\\d{10}", , , "8001234567"],
                                        [, , "60[04579]\\d{7}", "\\d{10}", , , "6001234567"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "AR", 54, "00", "0", , , "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))?15)?", "9$1", , , [
                                            [, "([68]\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"],
                                            [, "(\\d{2})(\\d{4})", "$1-$2", ["[2-9]"], "$1"],
                                            [, "(\\d{3})(\\d{4})", "$1-$2", ["[2-9]"], "$1"],
                                            [, "(\\d{4})(\\d{4})", "$1-$2", ["[2-9]"], "$1"],
                                            [, "(9)(11)(\\d{4})(\\d{4})", "$2 15-$3-$4", ["911"], "0$1"],
                                            [, "(9)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9(?:2[234689]|3[3-8])", "9(?:2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[1-358]|5[138]|6[24]|7[069]|8[013578]))", "9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[456]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))", "9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1239])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))"], "0$1"],
                                            [, "(9)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9[23]"], "0$1"],
                                            [, "(11)(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", , 1],
                                            [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[1-358]|5[138]|6[24]|7[069]|8[013578])", "2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[456]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))", "2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1239])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))"], "0$1", , 1],
                                            [, "(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", , 1],
                                            [, "(\\d{3})", "$1", ["1[012]|911"], "$1"]
                                        ],
                                        [
                                            [, "([68]\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"],
                                            [, "(9)(11)(\\d{4})(\\d{4})", "$1 $2 $3-$4", ["911"]],
                                            [, "(9)(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3-$4", ["9(?:2[234689]|3[3-8])", "9(?:2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[1-358]|5[138]|6[24]|7[069]|8[013578]))", "9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[456]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))", "9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1239])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))"]],
                                            [, "(9)(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3-$4", ["9[23]"]],
                                            [, "(11)(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", , 1],
                                            [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["2(?:2[013]|3[067]|49|6[01346]|80|9[147-9])|3(?:36|4[1-358]|5[138]|6[24]|7[069]|8[013578])", "2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[456]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))", "2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1239])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))"], "0$1", , 1],
                                            [, "(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", , 1]
                                        ],
                                        [, , "NA", "NA"], , , [, , "810\\d{7}", "\\d{10}", , , "8101234567"],
                                        [, , "810\\d{7}", "\\d{10}", , , "8101234567"], , , [, , "NA", "NA"]
                                    ],
                                    AS: [, [, , "[5689]\\d{9}", "\\d{7}(?:\\d{3})?"],
                                        [, , "6846(?:22|33|44|55|77|88|9[19])\\d{4}", "\\d{7}(?:\\d{3})?", , , "6846221234"],
                                        [, , "684(?:2(?:5[2468]|72)|7(?:3[13]|70))\\d{4}", "\\d{7}(?:\\d{3})?", , , "6847331234"],
                                        [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"],
                                        [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"],
                                        [, , "NA", "NA"],
                                        [, , "5(?:00|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
                                        [, , "NA", "NA"], "AS", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "684", [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    AT: [, [, , "[1-9]\\d{3,12}", "\\d{3,13}"],
                                        [, , "1\\d{3,12}|(?:2(?:1[467]|2[13-8]|5[2357]|6[1-46-8]|7[1-8]|8[124-7]|9[1458])|3(?:1[1-8]|3[23568]|4[5-7]|5[1378]|6[1-38]|8[3-68])|4(?:2[1-8]|35|63|7[1368]|8[2457])|5(?:12|2[1-8]|3[357]|4[147]|5[12578]|6[37])|6(?:13|2[1-47]|4[1-35-8]|5[468]|62)|7(?:2[1-8]|3[25]|4[13478]|5[68]|6[16-8]|7[1-6]|9[45]))\\d{3,10}", "\\d{3,13}", , , "1234567890"],
                                        [, , "6(?:5[0-3579]|6[013-9]|[7-9]\\d)\\d{4,10}", "\\d{7,13}", , , "664123456"],
                                        [, , "800\\d{6,10}", "\\d{9,13}", , , "800123456"],
                                        [, , "9(?:0[01]|3[019])\\d{6,10}", "\\d{9,13}", , , "900123456"],
                                        [, , "8(?:10\\d|2(?:[01]\\d|8\\d?))\\d{5,9}", "\\d{8,13}", , , "810123456"],
                                        [, , "NA", "NA"],
                                        [, , "780\\d{6,10}", "\\d{9,13}", , , "780123456"], "AT", 43, "00", "0", , , "0", , , , [
                                            [, "(116\\d{3})", "$1", ["116"], "$1"],
                                            [, "(1)(\\d{3,12})", "$1 $2", ["1"], "0$1"],
                                            [, "(5\\d)(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"],
                                            [, "(5\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5[079]"], "0$1"],
                                            [, "(5\\d)(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5[079]"], "0$1"],
                                            [, "(\\d{3})(\\d{3,10})", "$1 $2", ["316|46|51|732|6(?:5[0-3579]|[6-9])|7(?:[28]0)|[89]"], "0$1"],
                                            [, "(\\d{4})(\\d{3,9})", "$1 $2", ["2|3(?:1[1-578]|[3-8])|4[2378]|5[2-6]|6(?:[12]|4[1-9]|5[468])|7(?:2[1-8]|35|4[1-8]|[5-79])"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "5(?:(?:0[1-9]|17)\\d{2,10}|[79]\\d{3,11})|720\\d{6,10}", "\\d{5,13}", , , "50123"], , , [, , "NA", "NA"]
                                    ],
                                    AU: [, [, , "[1-578]\\d{5,9}", "\\d{6,10}"],
                                        [, , "[237]\\d{8}|8(?:[6-8]\\d{3}|9(?:[02-9]\\d{2}|1(?:[0-57-9]\\d|6[0135-9])))\\d{4}", "\\d{8,9}", , , "212345678"],
                                        [, , "14(?:5\\d|71)\\d{5}|4(?:[0-3]\\d|4[47-9]|5[0-25-9]|6[6-9]|7[02-9]|8[147-9]|9[017-9])\\d{6}", "\\d{9}", , , "412345678"],
                                        [, , "180(?:0\\d{3}|2)\\d{3}", "\\d{7,10}", , , "1800123456"],
                                        [, , "19(?:0[0126]\\d|[679])\\d{5}", "\\d{8,10}", , , "1900123456"],
                                        [, , "13(?:00\\d{3}|45[0-4]|\\d)\\d{3}", "\\d{6,10}", , , "1300123456"],
                                        [, , "500\\d{6}", "\\d{9}", , , "500123456"],
                                        [, , "550\\d{6}", "\\d{9}", , , "550123456"], "AU", 61, "(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88))?001[14-689]", "0", , , "0", , "0011", , [
                                            [, "([2378])(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"],
                                            [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[45]|14"], "0$1"],
                                            [, "(16)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"],
                                            [, "(1[389]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[38]0|90)", "1(?:[38]00|90)"], "$1"],
                                            [, "(180)(2\\d{3})", "$1 $2", ["180", "1802"], "$1"],
                                            [, "(19\\d)(\\d{3})", "$1 $2", ["19[13]"], "$1"],
                                            [, "(19\\d{2})(\\d{4})", "$1 $2", ["19[679]"], "$1"],
                                            [, "(13)(\\d{2})(\\d{2})", "$1 $2 $3", ["13[1-9]"], "$1"]
                                        ], , [, , "16\\d{3,7}", "\\d{5,9}", , , "1612345"], 1, , [, , "1(?:3(?:00\\d{3}|45[0-4]|\\d)\\d{3}|80(?:0\\d{6}|2\\d{3}))", "\\d{6,10}", , , "1300123456"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    AW: [, [, , "[25-9]\\d{6}", "\\d{7}"],
                                        [, , "5(?:2\\d|8[1-9])\\d{4}", "\\d{7}", , , "5212345"],
                                        [, , "(?:5(?:6\\d|9[2-478])|6(?:[039]0|22|4[01]|6[0-2])|7[34]\\d|9(?:6[45]|9[4-8]))\\d{4}", "\\d{7}", , , "5601234"],
                                        [, , "800\\d{4}", "\\d{7}", , , "8001234"],
                                        [, , "900\\d{4}", "\\d{7}", , , "9001234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "28\\d{5}|501\\d{4}", "\\d{7}", , , "5011234"], "AW", 297, "00", , , , , , , , [
                                            [, "(\\d{3})(\\d{4})", "$1 $2"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    AX: [, [, , "[135]\\d{5,9}|[27]\\d{4,9}|4\\d{5,10}|6\\d{7,8}|8\\d{6,9}", "\\d{5,12}"],
                                        [, , "18[1-8]\\d{3,9}", "\\d{6,12}", , , "1812345678"],
                                        [, , "4\\d{5,10}|50\\d{4,8}", "\\d{6,11}", , , "412345678"],
                                        [, , "800\\d{4,7}", "\\d{7,10}", , , "8001234567"],
                                        [, , "[67]00\\d{5,6}", "\\d{8,9}", , , "600123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "AX", 358, "00|99(?:[02469]|5(?:11|33|5[59]|88|9[09]))", "0", , , "0", , "00", , , , [, , "NA", "NA"], , , [, , "[13]00\\d{3,7}|2(?:0(?:0\\d{3,7}|2[023]\\d{1,6}|9[89]\\d{1,6}))|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})", "\\d{5,10}", , , "100123"],
                                        [, , "[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})", "\\d{5,10}", , , "10112345"], , , [, , "NA", "NA"]
                                    ],
                                    AZ: [, [, , "[1-9]\\d{8}", "\\d{7,9}"],
                                        [, , "(?:1[28]\\d{3}|2(?:02|1[24]|2[2-4]|33|[45]2|6[23])\\d{2}|365(?:[0-46-9]\\d|5[0-35-9]))\\d{4}", "\\d{7,9}", , , "123123456"],
                                        [, , "(?:36554|(?:4[04]|5[015]|60|7[07])\\d{3})\\d{4}", "\\d{9}", , , "401234567"],
                                        [, , "88\\d{7}", "\\d{9}", , , "881234567"],
                                        [, , "900200\\d{3}", "\\d{9}", , , "900200123"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "AZ", 994, "00", "0", , , "0", , , , [
                                            [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["(?:1[28]|2(?:[45]2|[0-36])|365)"], "(0$1)"],
                                            [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[4-8]"], "0$1"],
                                            [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    BA: [, [, , "[3-9]\\d{7,8}", "\\d{6,9}"],
                                        [, , "(?:[35]\\d|49)\\d{6}", "\\d{6,8}", , , "30123456"],
                                        [, , "6(?:03|44|71|[1-356])\\d{6}", "\\d{8,9}", , , "61123456"],
                                        [, , "8[08]\\d{6}", "\\d{8}", , , "80123456"],
                                        [, , "9[0246]\\d{6}", "\\d{8}", , , "90123456"],
                                        [, , "8[12]\\d{6}", "\\d{8}", , , "82123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "BA", 387, "00", "0", , , "0", , , , [
                                            [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]"], "0$1"],
                                            [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-356]|[7-9]"], "0$1"],
                                            [, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6[047]"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "70[23]\\d{5}", "\\d{8}", , , "70223456"], , , [, , "NA", "NA"]
                                    ],
                                    BB: [, [, , "[2589]\\d{9}", "\\d{7}(?:\\d{3})?"],
                                        [, , "246(?:2(?:2[78]|7[0-4])|4(?:1[024-6]|2\\d|3[2-9])|5(?:20|[34]\\d|54|7[1-3])|6(?:2\\d|38)|7(?:37|57)|9(?:1[89]|63))\\d{4}", "\\d{7}(?:\\d{3})?", , , "2464123456"],
                                        [, , "246(?:2(?:[356]\\d|4[0-57-9]|8[0-79])|45\\d|8(?:[2-5]\\d|83))\\d{4}", "\\d{7}(?:\\d{3})?", , , "2462501234"],
                                        [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"],
                                        [, , "900\\d{7}|246976\\d{4}", "\\d{7}(?:\\d{3})?", , , "9002123456"],
                                        [, , "NA", "NA"],
                                        [, , "5(?:00|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
                                        [, , "24631\\d{5}", "\\d{7}(?:\\d{3})?", , , "2463101234"], "BB", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "246", [, , "NA", "NA"],
                                        [, , "246(?:292|41[7-9]|43[01])\\d{4}", "\\d{7}(?:\\d{3})?", , , "2464301234"], , , [, , "NA", "NA"]
                                    ],
                                    BD: [, [, , "[2-79]\\d{5,9}|1\\d{9}|8[0-7]\\d{4,8}", "\\d{6,10}"],
                                        [, , "2(?:550\\d|7(?:1[0-267]|2[0-289]|3[0-29]|[46][01]|5[1-3]|7[017]|91)|8(?:0[125]|[139][1-6]|2[0157-9]|6[1-35]|7[1-5]|8[1-8]|90)|9(?:0[0-2]|1[0-4]|2[568]|3[3-6]|5[5-7]|6[0167]|7[15]|8[0146-8]))\\d{4}|3(?:12?[5-7]\\d{2}|0(?:2(?:[025-79]\\d|[348]\\d{1,2})|3(?:[2-4]\\d|[56]\\d?))|2(?:1\\d{2}|2(?:[12]\\d|[35]\\d{1,2}|4\\d?))|3(?:1\\d{2}|2(?:[2356]\\d|4\\d{1,2}))|4(?:1\\d{2}|2(?:2\\d{1,2}|[47]|5\\d{2}))|5(?:1\\d{2}|29)|[67]1\\d{2}|8(?:1\\d{2}|2(?:2\\d{2}|3|4\\d)))\\d{3}|4(?:0(?:2(?:[09]\\d|7)|33\\d{2})|1\\d{3}|2(?:1\\d{2}|2(?:[25]\\d?|[348]\\d|[67]\\d{1,2}))|3(?:1\\d{2}(?:\\d{2})?|2(?:[045]\\d|[236-9]\\d{1,2})|32\\d{2})|4(?:[18]\\d{2}|2(?:[2-46]\\d{2}|3)|5[25]\\d{2})|5(?:1\\d{2}|2(?:3\\d|5))|6(?:[18]\\d{2}|2(?:3(?:\\d{2})?|[46]\\d{1,2}|5\\d{2}|7\\d)|5(?:3\\d?|4\\d|[57]\\d{1,2}|6\\d{2}|8))|71\\d{2}|8(?:[18]\\d{2}|23\\d{2}|54\\d{2})|9(?:[18]\\d{2}|2[2-5]\\d{2}|53\\d{1,2}))\\d{3}|5(?:02[03489]\\d{2}|1\\d{2}|2(?:1\\d{2}|2(?:2(?:\\d{2})?|[457]\\d{2}))|3(?:1\\d{2}|2(?:[37](?:\\d{2})?|[569]\\d{2}))|4(?:1\\d{2}|2[46]\\d{2})|5(?:1\\d{2}|26\\d{1,2})|6(?:[18]\\d{2}|2|53\\d{2})|7(?:1|24)\\d{2}|8(?:1|26)\\d{2}|91\\d{2})\\d{3}|6(?:0(?:1\\d{2}|2(?:3\\d{2}|4\\d{1,2}))|2(?:2[2-5]\\d{2}|5(?:[3-5]\\d{2}|7)|8\\d{2})|3(?:1|2[3478])\\d{2}|4(?:1|2[34])\\d{2}|5(?:1|2[47])\\d{2}|6(?:[18]\\d{2}|6(?:2(?:2\\d|[34]\\d{2})|5(?:[24]\\d{2}|3\\d|5\\d{1,2})))|72[2-5]\\d{2}|8(?:1\\d{2}|2[2-5]\\d{2})|9(?:1\\d{2}|2[2-6]\\d{2}))\\d{3}|7(?:(?:02|[3-589]1|6[12]|72[24])\\d{2}|21\\d{3}|32)\\d{3}|8(?:(?:4[12]|[5-7]2|1\\d?)|(?:0|3[12]|[5-7]1|217)\\d)\\d{4}|9(?:[35]1|(?:[024]2|81)\\d|(?:1|[24]1)\\d{2})\\d{3}", "\\d{6,9}", , , "27111234"],
                                        [, , "(?:1[13-9]\\d|(?:3[78]|44)[02-9]|6(?:44|6[02-9]))\\d{7}", "\\d{10}", , , "1812345678"],
                                        [, , "80[03]\\d{7}", "\\d{10}", , , "8001234567"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "96(?:0[49]|1[0-4]|6[69])\\d{6}", "\\d{10}", , , "9604123456"], "BD", 880, "00", "0", , , "0", , , , [
                                            [, "(2)(\\d{7,8})", "$1-$2", ["2"], "0$1"],
                                            [, "(\\d{2})(\\d{4,6})", "$1-$2", ["[3-79]1"], "0$1"],
                                            [, "(\\d{4})(\\d{3,6})", "$1-$2", ["1|3(?:0|[2-58]2)|4(?:0|[25]2|3[23]|[4689][25])|5(?:[02-578]2|6[25])|6(?:[0347-9]2|[26][25])|7[02-9]2|8(?:[023][23]|[4-7]2)|9(?:[02][23]|[458]2|6[016])"], "0$1"],
                                            [, "(\\d{3})(\\d{3,7})", "$1-$2", ["[3-79][2-9]|8"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    BE: [, [, , "[1-9]\\d{7,8}", "\\d{8,9}"],
                                        [, , "(?:1[0-69]|[23][2-8]|4[23]|5\\d|6[013-57-9]|71|8[1-79]|9[2-4])\\d{6}|80[2-8]\\d{5}", "\\d{8}", , , "12345678"],
                                        [, , "4(?:6[0135-8]|[79]\\d|8[3-9])\\d{6}", "\\d{9}", , , "470123456"],
                                        [, , "800\\d{5}", "\\d{8}", , , "80012345"],
                                        [, , "(?:70[2-467]|90[0-79])\\d{5}", "\\d{8}", , , "90123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "BE", 32, "00", "0", , , "0", , , , [
                                            [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4[6-9]"], "0$1"],
                                            [, "(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[23]|4[23]|9[2-4]"], "0$1"],
                                            [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[156]|7[018]|8(?:0[1-9]|[1-79])"], "0$1"],
                                            [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "78\\d{6}", "\\d{8}", , , "78123456"], , , [, , "NA", "NA"]
                                    ],
                                    BF: [, [, , "[267]\\d{7}", "\\d{8}"],
                                        [, , "2(?:0(?:49|5[23]|9[016-9])|4(?:4[569]|5[4-6]|7[0179])|5(?:[34]\\d|50))\\d{4}", "\\d{8}", , , "20491234"],
                                        [, , "6(?:[0-689]\\d|7[0-5])\\d{5}|7\\d{7}", "\\d{8}", , , "70123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "BF", 226, "00", , , , , , , , [
                                            [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    BG: [, [, , "[23567]\\d{5,7}|[489]\\d{6,8}", "\\d{5,9}"],
                                        [, , "2\\d{5,7}|(?:[36]\\d|5[1-9]|8[1-6]|9[1-7])\\d{5,6}|(?:4(?:[124-7]\\d|3[1-6])|7(?:0[1-9]|[1-9]\\d))\\d{4,5}", "\\d{5,8}", , , "2123456"],
                                        [, , "(?:8[7-9]\\d|9(?:8\\d|99))\\d{6}|4(?:3[0789]|8\\d)\\d{5}", "\\d{8,9}", , , "48123456"],
                                        [, , "800\\d{5}", "\\d{8}", , , "80012345"],
                                        [, , "90\\d{6}", "\\d{8}", , , "90123456"],
                                        [, , "NA", "NA"],
                                        [, , "700\\d{5}", "\\d{5,9}", , , "70012345"],
                                        [, , "NA", "NA"], "BG", 359, "00", "0", , , "0", , , , [
                                            [, "(2)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"],
                                            [, "(2)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"],
                                            [, "(\\d{3})(\\d{4})", "$1 $2", ["43[124-7]|70[1-9]"], "0$1"],
                                            [, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[124-7]|70[1-9]"], "0$1"],
                                            [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[78]00"], "0$1"],
                                            [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["999"], "0$1"],
                                            [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"],
                                            [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["48|8[7-9]|9[08]"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    BH: [, [, , "[136-9]\\d{7}", "\\d{8}"],
                                        [, , "(?:1(?:3[1356]|6[0156]|7\\d)\\d|6(?:1[16]\\d|500|6(?:0\\d|3[12]|44|7[7-9])|9[69][69])|7(?:1(?:11|78)|7\\d{2}))\\d{4}", "\\d{8}", , , "17001234"],
                                        [, , "(?:3(?:[1-4679]\\d|5[013-69]|8[0-47-9])\\d|6(?:3(?:00|33|6[16])|6(?:[69]\\d|3[03-9]|7[0-6])))\\d{4}", "\\d{8}", , , "36001234"],
                                        [, , "80\\d{6}", "\\d{8}", , , "80123456"],
                                        [, , "(?:87|9[014578])\\d{6}", "\\d{8}", , , "90123456"],
                                        [, , "84\\d{6}", "\\d{8}", , , "84123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "BH", 973, "00", , , , , , , , [
                                            [, "(\\d{4})(\\d{4})", "$1 $2"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    BI: [, [, , "[267]\\d{7}", "\\d{8}"],
                                        [, , "22\\d{6}", "\\d{8}", , , "22201234"],
                                        [, , "(?:29|6[189]|7[124-9])\\d{6}", "\\d{8}", , , "79561234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "BI", 257, "00", , , , , , , , [
                                            [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    BJ: [, [, , "[2689]\\d{7}|7\\d{3}", "\\d{4,8}"],
                                        [, , "2(?:02|1[037]|2[45]|3[68])\\d{5}", "\\d{8}", , , "20211234"],
                                        [, , "(?:6[1-8]|9[03-9])\\d{6}", "\\d{8}", , , "90011234"],
                                        [, , "7[3-5]\\d{2}", "\\d{4}", , , "7312"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "857[58]\\d{4}", "\\d{8}", , , "85751234"], "BJ", 229, "00", , , , , , , , [
                                            [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "81\\d{6}", "\\d{8}", , , "81123456"], , , [, , "NA", "NA"]
                                    ],
                                    BL: [, [, , "[56]\\d{8}", "\\d{9}"],
                                        [, , "590(?:2[7-9]|5[12]|87)\\d{4}", "\\d{9}", , , "590271234"],
                                        [, , "690(?:0[0-7]|[1-9]\\d)\\d{4}", "\\d{9}", , , "690301234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "BL", 590, "00", "0", , , "0", , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    BM: [, [, , "[4589]\\d{9}", "\\d{7}(?:\\d{3})?"],
                                        [, , "441(?:2(?:02|23|61|[3479]\\d)|[46]\\d{2}|5(?:4\\d|60|89)|824)\\d{4}", "\\d{7}(?:\\d{3})?", , , "4412345678"],
                                        [, , "441(?:[37]\\d|5[0-39])\\d{5}", "\\d{7}(?:\\d{3})?", , , "4413701234"],
                                        [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"],
                                        [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"],
                                        [, , "NA", "NA"],
                                        [, , "5(?:00|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
                                        [, , "NA", "NA"], "BM", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "441", [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    BN: [, [, , "[2-578]\\d{6}", "\\d{7}"],
                                        [, , "2(?:[013-9]\\d|2[0-7])\\d{4}|[3-5]\\d{6}", "\\d{7}", , , "2345678"],
                                        [, , "22[89]\\d{4}|[78]\\d{6}", "\\d{7}", , , "7123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "BN", 673, "00", , , , , , , , [
                                            [, "([2-578]\\d{2})(\\d{4})", "$1 $2"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    BO: [, [, , "[23467]\\d{7}", "\\d{7,8}"],
                                        [, , "(?:2(?:2\\d{2}|5(?:11|[258]\\d|9[67])|6(?:12|2\\d|9[34])|8(?:2[34]|39|62))|3(?:3\\d{2}|4(?:6\\d|8[24])|8(?:25|42|5[257]|86|9[25])|9(?:2\\d|3[234]|4[248]|5[24]|6[2-6]|7\\d))|4(?:4\\d{2}|6(?:11|[24689]\\d|72)))\\d{4}", "\\d{7,8}", , , "22123456"],
                                        [, , "[67]\\d{7}", "\\d{8}", , , "71234567"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "BO", 591, "00(1\\d)?", "0", , , "0(1\\d)?", , , , [
                                            [, "([234])(\\d{7})", "$1 $2", ["[234]"], , "0$CC $1"],
                                            [, "([67]\\d{7})", "$1", ["[67]"], , "0$CC $1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    BQ: [, [, , "[347]\\d{6}", "\\d{7}"],
                                        [, , "(?:318[023]|416[023]|7(?:1[578]|50)\\d)\\d{3}", "\\d{7}", , , "7151234"],
                                        [, , "(?:318[14-68]|416[15-9]|7(?:0[01]|7[07]|[89]\\d)\\d)\\d{3}", "\\d{7}", , , "3181234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "BQ", 599, "00", , , , , , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    BR: [, [, , "[1-46-9]\\d{7,10}|5\\d{8,9}", "\\d{8,11}"],
                                        [, , "(?:[14689][1-9]|2[12478]|3[1-578]|5[1-5]|7[13-579])[2-5]\\d{7}", "\\d{8,11}", , , "1123456789"],
                                        [, , "1[1-9](?:7|9\\d)\\d{7}|(?:2[12478]|3[1-578]|[689][1-9]|7[13-579])(?:[6-8]|9\\d?)\\d{7}|(?:4[1-9]|5[1-5])[6-9]\\d{7}", "\\d{8,11}", , , "11961234567"],
                                        [, , "800\\d{6,7}", "\\d{8,11}", , , "800123456"],
                                        [, , "(?:300|[59]00\\d?)\\d{6}", "\\d{8,11}", , , "300123456"],
                                        [, , "(?:300\\d(?:\\d{2})?|40(?:0\\d|20))\\d{4}", "\\d{8,10}", , , "40041234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "BR", 55, "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "0", , , "0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2", , , [
                                            [, "(\\d{4})(\\d{4})", "$1-$2", ["[2-9](?:[1-9]|0[1-9])"], "$1"],
                                            [, "(\\d{5})(\\d{4})", "$1-$2", ["9(?:[1-9]|0[1-9])"], "$1"],
                                            [, "(\\d{3,5})", "$1", ["1[125689]"], "$1"],
                                            [, "(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["(?:[1689][1-9]|2[12478]|3[1-578]|7[13-579])9"], "($1)", "0 $CC ($1)"],
                                            [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["[1-9][1-9]"], "($1)", "0 $CC ($1)"],
                                            [, "(\\d{4})(\\d{4})", "$1-$2", ["(?:300|40(?:0|20))"]],
                                            [, "([3589]00)(\\d{2,3})(\\d{4})", "$1 $2 $3", ["[3589]00"], "0$1"]
                                        ],
                                        [
                                            [, "(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["(?:[1689][1-9]|2[12478]|3[1-578]|7[13-579])9"], "($1)", "0 $CC ($1)"],
                                            [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["[1-9][1-9]"], "($1)", "0 $CC ($1)"],
                                            [, "(\\d{4})(\\d{4})", "$1-$2", ["(?:300|40(?:0|20))"]],
                                            [, "([3589]00)(\\d{2,3})(\\d{4})", "$1 $2 $3", ["[3589]00"], "0$1"]
                                        ],
                                        [, , "NA", "NA"], , , [, , "(?:300\\d|40(?:0\\d|20))\\d{4}", "\\d{8}", , , "40041234"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    BS: [, [, , "[2589]\\d{9}", "\\d{7}(?:\\d{3})?"],
                                        [, , "242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[3467]|8[0-4]|9[2-467])|461|502|6(?:0[1-3]|12|7[67]|8[78]|9[89])|7(?:02|88))\\d{4}", "\\d{7}(?:\\d{3})?", , , "2423456789"],
                                        [, , "242(?:3(?:5[79]|[79]5)|4(?:[2-4][1-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-9]|65|77)|6[34]6|727)\\d{4}", "\\d{7}(?:\\d{3})?", , , "2423591234"],
                                        [, , "242300\\d{4}|8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{7}(?:\\d{3})?", , , "8002123456"],
                                        [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"],
                                        [, , "NA", "NA"],
                                        [, , "5(?:00|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
                                        [, , "NA", "NA"], "BS", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "242", [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    BT: [, [, , "[1-8]\\d{6,7}", "\\d{6,8}"],
                                        [, , "(?:2[3-6]|[34][5-7]|5[236]|6[2-46]|7[246]|8[2-4])\\d{5}", "\\d{6,7}", , , "2345678"],
                                        [, , "(?:1[67]|77)\\d{6}", "\\d{8}", , , "17123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "BT", 975, "00", , , , , , , , [
                                            [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1|77"]],
                                            [, "([2-8])(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    BW: [, [, , "[2-79]\\d{6,7}", "\\d{7,8}"],
                                        [, , "(?:2(?:4[0-48]|6[0-24]|9[0578])|3(?:1[0235-9]|55|[69]\\d|7[01])|4(?:6[03]|7[1267]|9[0-5])|5(?:3[0389]|4[0489]|7[1-47]|88|9[0-49])|6(?:2[1-35]|5[149]|8[067]))\\d{4}", "\\d{7}", , , "2401234"],
                                        [, , "7(?:[1-6]\\d|7[014-8])\\d{5}", "\\d{8}", , , "71123456"],
                                        [, , "NA", "NA"],
                                        [, , "90\\d{5}", "\\d{7}", , , "9012345"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "79[12][01]\\d{4}", "\\d{8}", , , "79101234"], "BW", 267, "00", , , , , , , , [
                                            [, "(\\d{3})(\\d{4})", "$1 $2", ["[2-6]"]],
                                            [, "(7\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]],
                                            [, "(90)(\\d{5})", "$1 $2", ["9"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    BY: [, [, , "[1-4]\\d{8}|800\\d{3,7}|[89]\\d{9,10}", "\\d{5,11}"],
                                        [, , "(?:1(?:5(?:1[1-5]|[24]\\d|6[2-4]|9[1-7])|6(?:[235]\\d|4[1-7])|7\\d{2})|2(?:1(?:[246]\\d|3[0-35-9]|5[1-9])|2(?:[235]\\d|4[0-8])|3(?:[26]\\d|3[02-79]|4[024-7]|5[03-7])))\\d{5}", "\\d{5,9}", , , "152450911"],
                                        [, , "(?:2(?:5[5679]|9[1-9])|33\\d|44\\d)\\d{6}", "\\d{9}", , , "294911911"],
                                        [, , "8(?:0[13]|20\\d)\\d{7}|800\\d{3,7}", "\\d{5,11}", , , "8011234567"],
                                        [, , "(?:810|902)\\d{7}", "\\d{10}", , , "9021234567"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "249\\d{6}", "\\d{9}", , , "249123456"], "BY", 375, "810", "8", , , "8?0?", , "8~10", , [
                                            [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["17[0-3589]|2[4-9]|[34]", "17(?:[02358]|1[0-2]|9[0189])|2[4-9]|[34]"], "8 0$1"],
                                            [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:5[24]|6[235]|7[467])|2(?:1[246]|2[25]|3[26])", "1(?:5[24]|6(?:2|3[04-9]|5[0346-9])|7(?:[46]|7[37-9]))|2(?:1[246]|2[25]|3[26])"], "8 0$1"],
                                            [, "(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"],
                                            [, "([89]\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8[01]|9"], "8 $1"],
                                            [, "(82\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["82"], "8 $1"],
                                            [, "(800)(\\d{3})", "$1 $2", ["800"], "8 $1"],
                                            [, "(800)(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"]
                                        ], , [, , "NA", "NA"], , , [, , "8(?:[013]|[12]0)\\d{8}|800\\d{3,7}|902\\d{7}", "\\d{5,11}", , , "82012345678"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    BZ: [, [, , "[2-8]\\d{6}|0\\d{10}", "\\d{7}(?:\\d{4})?"],
                                        [, , "(?:[23458][02]\\d|7(?:[02]\\d|32))\\d{4}", "\\d{7}", , , "2221234"],
                                        [, , "6[0-35-7]\\d{5}", "\\d{7}", , , "6221234"],
                                        [, , "0800\\d{7}", "\\d{11}", , , "08001234123"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "BZ", 501, "00", , , , , , , , [
                                            [, "(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]],
                                            [, "(0)(800)(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], 1, , [, , "NA", "NA"]
                                    ],
                                    CA: [, [, , "[2-9]\\d{9}|3\\d{6}", "\\d{7}(?:\\d{3})?"],
                                        [, , "(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:0[04]|13|22|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}|310\\d{4}", "\\d{7}(?:\\d{3})?", , , "2042345678"],
                                        [, , "(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:0[04]|13|22|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", "\\d{7}(?:\\d{3})?", , , "2042345678"],
                                        [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}|310\\d{4}", "\\d{7}(?:\\d{3})?", , , "8002123456"],
                                        [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"],
                                        [, , "NA", "NA"],
                                        [, , "5(?:00|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
                                        [, , "NA", "NA"], "CA", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    CC: [, [, , "[1458]\\d{5,9}", "\\d{6,10}"],
                                        [, , "89162\\d{4}", "\\d{8,9}", , , "891621234"],
                                        [, , "14(?:5\\d|71)\\d{5}|4(?:[0-2]\\d|3[0-57-9]|4[47-9]|5[0-25-9]|6[6-9]|7[02-9]|8[147-9]|9[017-9])\\d{6}", "\\d{9}", , , "412345678"],
                                        [, , "180(?:0\\d{3}|2)\\d{3}", "\\d{7,10}", , , "1800123456"],
                                        [, , "190[0126]\\d{6}", "\\d{10}", , , "1900123456"],
                                        [, , "13(?:00\\d{2})?\\d{4}", "\\d{6,10}", , , "1300123456"],
                                        [, , "500\\d{6}", "\\d{9}", , , "500123456"],
                                        [, , "550\\d{6}", "\\d{9}", , , "550123456"], "CC", 61, "(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88))?001[14-689]", "0", , , "0", , "0011", , , , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    CD: [, [, , "[2-6]\\d{6}|[18]\\d{6,8}|9\\d{8}", "\\d{7,9}"],
                                        [, , "1(?:2\\d{7}|\\d{6})|[2-6]\\d{6}", "\\d{7,9}", , , "1234567"],
                                        [, , "8(?:[0-2459]\\d{2}|8)\\d{5}|9[017-9]\\d{7}", "\\d{7,9}", , , "991234567"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "CD", 243, "00", "0", , , "0", , , , [
                                            [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["12"], "0$1"],
                                            [, "([89]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[0-2459]|9"], "0$1"],
                                            [, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                                            [, "(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    CF: [, [, , "[278]\\d{7}", "\\d{8}"],
                                        [, , "2[12]\\d{6}", "\\d{8}", , , "21612345"],
                                        [, , "7[0257]\\d{6}", "\\d{8}", , , "70012345"],
                                        [, , "NA", "NA"],
                                        [, , "8776\\d{4}", "\\d{8}", , , "87761234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "CF", 236, "00", , , , , , , , [
                                            [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    CG: [, [, , "[028]\\d{8}", "\\d{9}"],
                                        [, , "222[1-589]\\d{5}", "\\d{9}", , , "222123456"],
                                        [, , "0[14-6]\\d{7}", "\\d{9}", , , "061234567"],
                                        [, , "NA", "NA"],
                                        [, , "800\\d{6}", "\\d{9}", , , "800123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "CG", 242, "00", , , , , , , , [
                                            [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]],
                                            [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], 1, , [, , "NA", "NA"]
                                    ],
                                    CH: [, [, , "[2-9]\\d{8}|860\\d{9}", "\\d{9}(?:\\d{3})?"],
                                        [, , "(?:2[12467]|3[1-4]|4[134]|5[256]|6[12]|[7-9]1)\\d{7}", "\\d{9}", , , "212345678"],
                                        [, , "7[5-9]\\d{7}", "\\d{9}", , , "781234567"],
                                        [, , "800\\d{6}", "\\d{9}", , , "800123456"],
                                        [, , "90[016]\\d{6}", "\\d{9}", , , "900123456"],
                                        [, , "84[0248]\\d{6}", "\\d{9}", , , "840123456"],
                                        [, , "878\\d{6}", "\\d{9}", , , "878123456"],
                                        [, , "NA", "NA"], "CH", 41, "00", "0", , , "0", , , , [
                                            [, "([2-9]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]|[89]1"], "0$1"],
                                            [, "([89]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"],
                                            [, "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["860"], "0$1"]
                                        ], , [, , "74[0248]\\d{6}", "\\d{9}", , , "740123456"], , , [, , "NA", "NA"],
                                        [, , "5[18]\\d{7}", "\\d{9}", , , "581234567"], , , [, , "860\\d{9}", "\\d{12}", , , "860123456789"]
                                    ],
                                    CI: [, [, , "[02-8]\\d{7}", "\\d{8}"],
                                        [, , "(?:2(?:0[023]|1[02357]|[23][045]|4[03-5])|3(?:0[06]|1[069]|[2-4][07]|5[09]|6[08]))\\d{5}", "\\d{8}", , , "21234567"],
                                        [, , "(?:0[1-9]|4\\d|5[14-9]|6[015-79]|7[578]|8[79])\\d{6}", "\\d{8}", , , "01234567"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "CI", 225, "00", , , , , , , , [
                                            [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], 1, , [, , "NA", "NA"]
                                    ],
                                    CK: [, [, , "[2-8]\\d{4}", "\\d{5}"],
                                        [, , "(?:2\\d|3[13-7]|4[1-5])\\d{3}", "\\d{5}", , , "21234"],
                                        [, , "[5-8]\\d{4}", "\\d{5}", , , "71234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "CK", 682, "00", , , , , , , , [
                                            [, "(\\d{2})(\\d{3})", "$1 $2"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    CL: [, [, , "(?:[2-9]|600|123)\\d{7,8}", "\\d{7,11}"],
                                        [, , "2(?:1962\\d{4}|2\\d{7}|32[0-2]\\d{5})|(?:3[2-5]|[47][1-35]|5[1-3578]|6[13-57])\\d{7}", "\\d{7,9}", , , "221234567"],
                                        [, , "9[4-9]\\d{7}", "\\d{8,9}", , , "961234567"],
                                        [, , "800\\d{6}|1230\\d{7}", "\\d{9,11}", , , "800123456"],
                                        [, , "NA", "NA"],
                                        [, , "600\\d{7,8}", "\\d{10,11}", , , "6001234567"],
                                        [, , "NA", "NA"],
                                        [, , "44\\d{7}", "\\d{9}", , , "441234567"], "CL", 56, "(?:0|1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))0", "0", , , "0|(1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))", , , , [
                                            [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[23]"], "($1)", "$CC ($1)"],
                                            [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[357]|4[1-35]|6[13-57]"], "($1)", "$CC ($1)"],
                                            [, "(9)(\\d{4})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
                                            [, "(44)(\\d{3})(\\d{4})", "$1 $2 $3", ["44"], "0$1"],
                                            [, "([68]00)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"], "$1"],
                                            [, "(600)(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"], "$1"],
                                            [, "(1230)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "$1"],
                                            [, "(\\d{5})(\\d{4})", "$1 $2", ["219"], "($1)", "$CC ($1)"],
                                            [, "(\\d{4,5})", "$1", ["[1-9]"], "$1"]
                                        ],
                                        [
                                            [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[23]"], "($1)", "$CC ($1)"],
                                            [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[357]|4[1-35]|6[13-57]"], "($1)", "$CC ($1)"],
                                            [, "(9)(\\d{4})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
                                            [, "(44)(\\d{3})(\\d{4})", "$1 $2 $3", ["44"], "0$1"],
                                            [, "([68]00)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"], "$1"],
                                            [, "(600)(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"], "$1"],
                                            [, "(1230)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "$1"],
                                            [, "(\\d{5})(\\d{4})", "$1 $2", ["219"], "($1)", "$CC ($1)"]
                                        ],
                                        [, , "NA", "NA"], , , [, , "600\\d{7,8}", "\\d{10,11}", , , "6001234567"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    CM: [, [, , "[2368]\\d{7,8}", "\\d{8,9}"],
                                        [, , "2(?:22|33|4[23])\\d{6}", "\\d{9}", , , "222123456"],
                                        [, , "6[5-9]\\d{7}", "\\d{9}", , , "671234567"],
                                        [, , "800\\d{5}", "\\d{8}", , , "80012345"],
                                        [, , "88\\d{6}", "\\d{8}", , , "88012345"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "CM", 237, "00", , , , , , , , [
                                            [, "([26])(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]"]],
                                            [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[23]|88"]],
                                            [, "(800)(\\d{2})(\\d{3})", "$1 $2 $3", ["80"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    CN: [, [, , "[1-7]\\d{6,11}|8[0-357-9]\\d{6,9}|9\\d{7,10}", "\\d{4,12}"],
                                        [, , "21(?:100\\d{2}|95\\d{3,4}|\\d{8,10})|(?:10|2[02-57-9]|3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1\\d|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:[57]1|98))(?:100\\d{2}|95\\d{3,4}|\\d{8})|(?:3(?:1[02-9]|35|49|5\\d|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|3[3-9]|5[2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[17]\\d|2[248]|3[04-9]|4[3-6]|5[0-4689]|6[2368]|9[02-9])|8(?:078|1[236-8]|2[5-7]|3\\d|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100\\d{2}|95\\d{3,4}|\\d{7})|80(?:29|6[03578]|7[018]|81)\\d{4}", "\\d{4,12}", , , "1012345678"],
                                        [, , "1(?:[38]\\d|4[57]|5[0-35-9]|7[0136-8])\\d{8}", "\\d{11}", , , "13123456789"],
                                        [, , "(?:10)?800\\d{7}", "\\d{10,12}", , , "8001234567"],
                                        [, , "16[08]\\d{5}", "\\d{8}", , , "16812345"],
                                        [, , "400\\d{7}|950\\d{7,8}|(?:10|2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[4789]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[3678]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))96\\d{3,4}", "\\d{7,11}", , , "4001234567"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "CN", 86, "(1(?:[129]\\d{3}|79\\d{2}))?00", "0", , , "(1(?:[129]\\d{3}|79\\d{2}))|0", , "00", , [
                                            [, "(80\\d{2})(\\d{4})", "$1 $2", ["80[2678]"], "0$1", "$CC $1", 1],
                                            [, "([48]00)(\\d{3})(\\d{4})", "$1 $2 $3", ["[48]00"]],
                                            [, "(\\d{5,6})", "$1", ["100|95"]],
                                            [, "(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2\\d)[19]", "(?:10|2\\d)(?:10|9[56])", "(?:10|2\\d)(?:100|9[56])"], "0$1", "$CC $1"],
                                            [, "(\\d{3})(\\d{5,6})", "$1 $2", ["[3-9]", "[3-9]\\d{2}[19]", "[3-9]\\d{2}(?:10|9[56])"], "0$1", "$CC $1"],
                                            [, "(\\d{3,4})(\\d{4})", "$1 $2", ["[2-9]"]],
                                            [, "(21)(\\d{4})(\\d{4,6})", "$1 $2 $3", ["21"], "0$1", "$CC $1", 1],
                                            [, "([12]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["10[1-9]|2[02-9]", "10[1-9]|2[02-9]", "10(?:[1-79]|8(?:[1-9]|0[1-9]))|2[02-9]"], "0$1", "$CC $1", 1],
                                            [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"], "0$1", "$CC $1", 1],
                                            [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:[57]1|98)"], "0$1", "$CC $1", 1],
                                            [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["807", "8078"], "0$1", "$CC $1", 1],
                                            [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-578]"], , "$CC $1"],
                                            [, "(10800)(\\d{3})(\\d{4})", "$1 $2 $3", ["108", "1080", "10800"]],
                                            [, "(\\d{3})(\\d{7,8})", "$1 $2", ["950"]]
                                        ],
                                        [
                                            [, "(80\\d{2})(\\d{4})", "$1 $2", ["80[2678]"], "0$1", "$CC $1", 1],
                                            [, "([48]00)(\\d{3})(\\d{4})", "$1 $2 $3", ["[48]00"]],
                                            [, "(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2\\d)[19]", "(?:10|2\\d)(?:10|9[56])", "(?:10|2\\d)(?:100|9[56])"], "0$1", "$CC $1"],
                                            [, "(\\d{3})(\\d{5,6})", "$1 $2", ["[3-9]", "[3-9]\\d{2}[19]", "[3-9]\\d{2}(?:10|9[56])"], "0$1", "$CC $1"],
                                            [, "(21)(\\d{4})(\\d{4,6})", "$1 $2 $3", ["21"], "0$1", "$CC $1", 1],
                                            [, "([12]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["10[1-9]|2[02-9]", "10[1-9]|2[02-9]", "10(?:[1-79]|8(?:[1-9]|0[1-9]))|2[02-9]"], "0$1", "$CC $1", 1],
                                            [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"], "0$1", "$CC $1", 1],
                                            [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:[57]1|98)"], "0$1", "$CC $1", 1],
                                            [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["807", "8078"], "0$1", "$CC $1", 1],
                                            [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-578]"], , "$CC $1"],
                                            [, "(10800)(\\d{3})(\\d{4})", "$1 $2 $3", ["108", "1080", "10800"]],
                                            [, "(\\d{3})(\\d{7,8})", "$1 $2", ["950"]]
                                        ],
                                        [, , "NA", "NA"], , , [, , "(?:4|(?:10)?8)00\\d{7}|950\\d{7,8}", "\\d{10,12}", , , "4001234567"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    CO: [, [, , "(?:[13]\\d{0,3}|[24-8])\\d{7}", "\\d{7,11}"],
                                        [, , "[124-8][2-9]\\d{6}", "\\d{8}", , , "12345678"],
                                        [, , "3(?:0[0-5]|1\\d|2[0-3]|5[01])\\d{7}", "\\d{10}", , , "3211234567"],
                                        [, , "1800\\d{7}", "\\d{11}", , , "18001234567"],
                                        [, , "19(?:0[01]|4[78])\\d{7}", "\\d{11}", , , "19001234567"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "CO", 57, "00(?:4(?:[14]4|56)|[579])", "0", , , "0([3579]|4(?:44|56))?", , , , [
                                            [, "(\\d)(\\d{7})", "$1 $2", ["1(?:8[2-9]|9[0-3]|[2-7])|[24-8]", "1(?:8[2-9]|9(?:09|[1-3])|[2-7])|[24-8]"], "($1)", "0$CC $1"],
                                            [, "(\\d{3})(\\d{7})", "$1 $2", ["3"], , "0$CC $1"],
                                            [, "(1)(\\d{3})(\\d{7})", "$1-$2-$3", ["1(?:80|9[04])", "1(?:800|9(?:0[01]|4[78]))"], "0$1"]
                                        ],
                                        [
                                            [, "(\\d)(\\d{7})", "$1 $2", ["1(?:8[2-9]|9[0-3]|[2-7])|[24-8]", "1(?:8[2-9]|9(?:09|[1-3])|[2-7])|[24-8]"], "($1)", "0$CC $1"],
                                            [, "(\\d{3})(\\d{7})", "$1 $2", ["3"], , "0$CC $1"],
                                            [, "(1)(\\d{3})(\\d{7})", "$1 $2 $3", ["1(?:80|9[04])", "1(?:800|9(?:0[01]|4[78]))"]]
                                        ],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    CR: [, [, , "[24-9]\\d{7,9}", "\\d{8,10}"],
                                        [, , "2[0-24-7]\\d{6}", "\\d{8}", , , "22123456"],
                                        [, , "5(?:0[01]|7[0-3])\\d{5}|(?:[67][0-3]|8[3-9])\\d{6}", "\\d{8}", , , "83123456"],
                                        [, , "800\\d{7}", "\\d{10}", , , "8001234567"],
                                        [, , "90[059]\\d{7}", "\\d{10}", , , "9001234567"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "210[0-6]\\d{4}|4\\d{7}|5100\\d{4}", "\\d{8}", , , "40001234"], "CR", 506, "00", , , , "(19(?:0[012468]|1[09]|20|66|77|99))", , , , [
                                            [, "(\\d{4})(\\d{4})", "$1 $2", ["[24-7]|8[3-9]"], , "$CC $1"],
                                            [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]0"], , "$CC $1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    CU: [, [, , "[2-57]\\d{5,7}", "\\d{4,8}"],
                                        [, , "2[1-4]\\d{5,6}|3(?:1\\d{6}|[23]\\d{4,6})|4(?:[125]\\d{5,6}|[36]\\d{6}|[78]\\d{4,6})|7\\d{6,7}", "\\d{4,8}", , , "71234567"],
                                        [, , "5\\d{7}", "\\d{8}", , , "51234567"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "CU", 53, "119", "0", , , "0", , , , [
                                            [, "(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"],
                                            [, "(\\d{2})(\\d{4,6})", "$1 $2", ["[2-4]"], "(0$1)"],
                                            [, "(\\d)(\\d{7})", "$1 $2", ["5"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    CV: [, [, , "[259]\\d{6}", "\\d{7}"],
                                        [, , "2(?:2[1-7]|3[0-8]|4[12]|5[1256]|6\\d|7[1-3]|8[1-5])\\d{4}", "\\d{7}", , , "2211234"],
                                        [, , "(?:9\\d|59)\\d{5}", "\\d{7}", , , "9911234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "CV", 238, "0", , , , , , , , [
                                            [, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    CW: [, [, , "[169]\\d{6,7}", "\\d{7,8}"],
                                        [, , "9(?:[48]\\d{2}|50\\d|7(?:2[0-24]|[34]\\d|6[35-7]|77|8[7-9]))\\d{4}", "\\d{7,8}", , , "94151234"],
                                        [, , "9(?:5(?:[12467]\\d|3[01])|6(?:[15-9]\\d|3[01]))\\d{4}", "\\d{7,8}", , , "95181234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "60[0-2]\\d{4}", "\\d{7}", , , "6001234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "CW", 599, "00", , , , , , , , [
                                            [, "(\\d{3})(\\d{4})", "$1 $2", ["[13-7]"]],
                                            [, "(9)(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]
                                        ], , [, , "955\\d{5}", "\\d{7,8}", , , "95581234"], 1, , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    CX: [, [, , "[1458]\\d{5,9}", "\\d{6,10}"],
                                        [, , "89164\\d{4}", "\\d{8,9}", , , "891641234"],
                                        [, , "14(?:5\\d|71)\\d{5}|4(?:[0-2]\\d|3[0-57-9]|4[47-9]|5[0-25-9]|6[6-9]|7[02-9]|8[147-9]|9[017-9])\\d{6}", "\\d{9}", , , "412345678"],
                                        [, , "180(?:0\\d{3}|2)\\d{3}", "\\d{7,10}", , , "1800123456"],
                                        [, , "190[0126]\\d{6}", "\\d{10}", , , "1900123456"],
                                        [, , "13(?:00\\d{2})?\\d{4}", "\\d{6,10}", , , "1300123456"],
                                        [, , "500\\d{6}", "\\d{9}", , , "500123456"],
                                        [, , "550\\d{6}", "\\d{9}", , , "550123456"], "CX", 61, "(?:14(?:1[14]|34|4[17]|[56]6|7[47]|88))?001[14-689]", "0", , , "0", , "0011", , , , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    CY: [, [, , "[257-9]\\d{7}", "\\d{8}"],
                                        [, , "2[2-6]\\d{6}", "\\d{8}", , , "22345678"],
                                        [, , "9[4-79]\\d{6}", "\\d{8}", , , "96123456"],
                                        [, , "800\\d{5}", "\\d{8}", , , "80001234"],
                                        [, , "90[09]\\d{5}", "\\d{8}", , , "90012345"],
                                        [, , "80[1-9]\\d{5}", "\\d{8}", , , "80112345"],
                                        [, , "700\\d{5}", "\\d{8}", , , "70012345"],
                                        [, , "NA", "NA"], "CY", 357, "00", , , , , , , , [
                                            [, "(\\d{2})(\\d{6})", "$1 $2"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "(?:50|77)\\d{6}", "\\d{8}", , , "77123456"], , , [, , "NA", "NA"]
                                    ],
                                    CZ: [, [, , "[2-8]\\d{8}|9\\d{8,11}", "\\d{9,12}"],
                                        [, , "2\\d{8}|(?:3[1257-9]|4[16-9]|5[13-9])\\d{7}", "\\d{9,12}", , , "212345678"],
                                        [, , "(?:60[1-8]|7(?:0[2-5]|[2379]\\d))\\d{6}", "\\d{9,12}", , , "601123456"],
                                        [, , "800\\d{6}", "\\d{9,12}", , , "800123456"],
                                        [, , "9(?:0[05689]|76)\\d{6}", "\\d{9,12}", , , "900123456"],
                                        [, , "8[134]\\d{7}", "\\d{9,12}", , , "811234567"],
                                        [, , "70[01]\\d{6}", "\\d{9,12}", , , "700123456"],
                                        [, , "9[17]0\\d{6}", "\\d{9,12}", , , "910123456"], "CZ", 420, "00", , , , , , , , [
                                            [, "([2-9]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]],
                                            [, "(96\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["96"]],
                                            [, "(9\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9[36]"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "9(?:5\\d|7[234])\\d{6}", "\\d{9,12}", , , "972123456"], , , [, , "9(?:3\\d{9}|6\\d{7,10})", "\\d{9,12}", , , "93123456789"]
                                    ],
                                    DE: [, [, , "[1-35-9]\\d{3,14}|4(?:[0-8]\\d{4,12}|9(?:[0-37]\\d|4(?:[1-35-8]|4\\d?)|5\\d{1,2}|6[1-8]\\d?)\\d{2,8})", "\\d{2,15}"],
                                        [, , "[246]\\d{5,13}|3(?:0\\d{3,13}|2\\d{9}|[3-9]\\d{4,13})|5(?:0[2-8]|[1256]\\d|[38][0-8]|4\\d{0,2}|[79][0-7])\\d{3,11}|7(?:0[2-8]|[1-9]\\d)\\d{3,10}|8(?:0[2-9]|[1-9]\\d)\\d{3,10}|9(?:0[6-9]\\d{3,10}|1\\d{4,12}|[2-9]\\d{4,11})", "\\d{2,15}", , , "30123456"],
                                        [, , "1(?:5[0-25-9]\\d{8}|6[023]\\d{7,8}|7(?:[0-57-9]\\d?|6\\d)\\d{7})", "\\d{10,11}", , , "15123456789"],
                                        [, , "800\\d{7,12}", "\\d{10,15}", , , "8001234567890"],
                                        [, , "137[7-9]\\d{6}|900(?:[135]\\d{6}|9\\d{7})", "\\d{10,11}", , , "9001234567"],
                                        [, , "1(?:3(?:7[1-6]\\d{6}|8\\d{4})|80\\d{5,11})", "\\d{7,14}", , , "18012345"],
                                        [, , "700\\d{8}", "\\d{11}", , , "70012345678"],
                                        [, , "NA", "NA"], "DE", 49, "00", "0", , , "0", , , , [
                                            [, "(1\\d{2})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"],
                                            [, "(15\\d{3})(\\d{6})", "$1 $2", ["15[0568]"], "0$1"],
                                            [, "(1\\d{3})(\\d{7})", "$1 $2", ["15"], "0$1"],
                                            [, "(\\d{2})(\\d{3,11})", "$1 $2", ["3[02]|40|[68]9"], "0$1"],
                                            [, "(\\d{3})(\\d{3,11})", "$1 $2", ["2(?:\\d1|0[2389]|1[24]|28|34)|3(?:[3-9][15]|40)|[4-8][1-9]1|9(?:06|[1-9]1)"], "0$1"],
                                            [, "(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|[7-9](?:\\d[1-9]|[1-9]\\d)|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])", "[24-6]|[7-9](?:\\d[1-9]|[1-9]\\d)|3(?:3(?:0[1-467]|2[127-9]|3[124578]|[46][1246]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|3[1357]|4[13578]|6[1246]|7[1356]|9[1346])|5(?:0[14]|2[1-3589]|3[1357]|4[1246]|6[1-4]|7[1346]|8[13568]|9[1246])|6(?:0[356]|2[1-489]|3[124-6]|4[1347]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|3[1357]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|4[1347]|6[0135-9]|7[1467]|8[136])|9(?:0[12479]|2[1358]|3[1357]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))"], "0$1"],
                                            [, "(3\\d{4})(\\d{1,10})", "$1 $2", ["3"], "0$1"],
                                            [, "(800)(\\d{7,12})", "$1 $2", ["800"], "0$1"],
                                            [, "(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["(?:18|90)0|137", "1(?:37|80)|900[1359]"], "0$1"],
                                            [, "(1\\d{2})(\\d{5,11})", "$1 $2", ["181"], "0$1"],
                                            [, "(18\\d{3})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"],
                                            [, "(18\\d{2})(\\d{7})", "$1 $2", ["18[68]"], "0$1"],
                                            [, "(18\\d)(\\d{8})", "$1 $2", ["18[2-579]"], "0$1"],
                                            [, "(700)(\\d{4})(\\d{4})", "$1 $2 $3", ["700"], "0$1"],
                                            [, "(138)(\\d{4})", "$1 $2", ["138"], "0$1"],
                                            [, "(15[013-68])(\\d{2})(\\d{8})", "$1 $2 $3", ["15[013-68]"], "0$1"],
                                            [, "(15[279]\\d)(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"],
                                            [, "(1[67]\\d)(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"]
                                        ], , [, , "16(?:4\\d{1,10}|[89]\\d{1,11})", "\\d{4,14}", , , "16412345"], , , [, , "NA", "NA"],
                                        [, , "18(?:1\\d{5,11}|[2-9]\\d{8})", "\\d{8,14}", , , "18500123456"], , , [, , "1(?:5(?:(?:2\\d55|7\\d99|9\\d33)\\d{7}|(?:[034568]00|113)\\d{8})|6(?:013|255|399)\\d{7,8}|7(?:[015]13|[234]55|[69]33|[78]99)\\d{7,8})", "\\d{12,13}", , , "177991234567"]
                                    ],
                                    DJ: [, [, , "[27]\\d{7}", "\\d{8}"],
                                        [, , "2(?:1[2-5]|7[45])\\d{5}", "\\d{8}", , , "21360003"],
                                        [, , "77[0-26-8]\\d{5}", "\\d{8}", , , "77831001"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "DJ", 253, "00", , , , , , , , [
                                            [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    DK: [, [, , "[2-9]\\d{7}", "\\d{8}"],
                                        [, , "(?:[2-7]\\d|8[126-9]|9[1-36-9])\\d{6}", "\\d{8}", , , "32123456"],
                                        [, , "(?:[2-7]\\d|8[126-9]|9[1-36-9])\\d{6}", "\\d{8}", , , "20123456"],
                                        [, , "80\\d{6}", "\\d{8}", , , "80123456"],
                                        [, , "90\\d{6}", "\\d{8}", , , "90123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "DK", 45, "00", , , , , , , 1, [
                                            [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    DM: [, [, , "[57-9]\\d{9}", "\\d{7}(?:\\d{3})?"],
                                        [, , "767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4]|70[1-3])\\d{4}", "\\d{7}(?:\\d{3})?", , , "7674201234"],
                                        [, , "767(?:2(?:[234689]5|7[5-7])|31[5-7]|61[2-7])\\d{4}", "\\d{7}(?:\\d{3})?", , , "7672251234"],
                                        [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"],
                                        [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"],
                                        [, , "NA", "NA"],
                                        [, , "5(?:00|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
                                        [, , "NA", "NA"], "DM", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "767", [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    DO: [, [, , "[589]\\d{9}", "\\d{7}(?:\\d{3})?"],
                                        [, , "8(?:[04]9[2-9]\\d{6}|29(?:2(?:[0-59]\\d|6[04-9]|7[0-27]|8[0237-9])|3(?:[0-35-9]\\d|4[7-9])|[45]\\d{2}|6(?:[0-27-9]\\d|[3-5][1-9]|6[0135-8])|7(?:0[013-9]|[1-37]\\d|4[1-35689]|5[1-4689]|6[1-57-9]|8[1-79]|9[1-8])|8(?:0[146-9]|1[0-48]|[248]\\d|3[1-79]|5[01589]|6[013-68]|7[124-8]|9[0-8])|9(?:[0-24]\\d|3[02-46-9]|5[0-79]|60|7[0169]|8[57-9]|9[02-9]))\\d{4})", "\\d{7}(?:\\d{3})?", , , "8092345678"],
                                        [, , "8[024]9[2-9]\\d{6}", "\\d{7}(?:\\d{3})?", , , "8092345678"],
                                        [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"],
                                        [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"],
                                        [, , "NA", "NA"],
                                        [, , "5(?:00|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
                                        [, , "NA", "NA"], "DO", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "8[024]9", [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    DZ: [, [, , "(?:[1-4]|[5-9]\\d)\\d{7}", "\\d{8,9}"],
                                        [, , "(?:1\\d|2[013-79]|3[0-8]|4[0135689])\\d{6}|9619\\d{5}", "\\d{8,9}", , , "12345678"],
                                        [, , "(?:5[4-6]|7[7-9])\\d{7}|6(?:[569]\\d|7[0-6])\\d{6}", "\\d{9}", , , "551234567"],
                                        [, , "800\\d{6}", "\\d{9}", , , "800123456"],
                                        [, , "80[3-689]1\\d{5}", "\\d{9}", , , "808123456"],
                                        [, , "80[12]1\\d{5}", "\\d{9}", , , "801123456"],
                                        [, , "NA", "NA"],
                                        [, , "98[23]\\d{6}", "\\d{9}", , , "983123456"], "DZ", 213, "00", "0", , , "0", , , , [
                                            [, "([1-4]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"],
                                            [, "([5-8]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"],
                                            [, "(9\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    EC: [, [, , "1\\d{9,10}|[2-8]\\d{7}|9\\d{8}", "\\d{7,11}"],
                                        [, , "[2-7][2-7]\\d{6}", "\\d{7,8}", , , "22123456"],
                                        [, , "9(?:39|[45][89]|[67][7-9]|[89]\\d)\\d{6}", "\\d{9}", , , "991234567"],
                                        [, , "1800\\d{6,7}", "\\d{10,11}", , , "18001234567"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "[2-7]890\\d{4}", "\\d{8}", , , "28901234"], "EC", 593, "00", "0", , , "0", , , , [
                                            [, "(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[247]|[356][2-8]"], "(0$1)"],
                                            [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
                                            [, "(1800)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"], "$1"]
                                        ],
                                        [
                                            [, "(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[247]|[356][2-8]"]],
                                            [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
                                            [, "(1800)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"], "$1"]
                                        ],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    EE: [, [, , "1\\d{3,4}|[3-9]\\d{6,7}|800\\d{6,7}", "\\d{4,10}"],
                                        [, , "(?:3[23589]|4[3-8]|6\\d|7[1-9]|88)\\d{5}", "\\d{7}", , , "3212345"],
                                        [, , "(?:5\\d|8[1-5])\\d{6}|5(?:[02]\\d{2}|1(?:[0-8]\\d|95)|5[0-478]\\d|64[0-4]|65[1-589])\\d{3}", "\\d{7,8}", , , "51234567"],
                                        [, , "800(?:0\\d{3}|1\\d|[2-9])\\d{3}", "\\d{7,10}", , , "80012345"],
                                        [, , "(?:40\\d{2}|900)\\d{4}", "\\d{7,8}", , , "9001234"],
                                        [, , "NA", "NA"],
                                        [, , "70[0-2]\\d{5}", "\\d{8}", , , "70012345"],
                                        [, , "NA", "NA"], "EE", 372, "00", , , , , , , , [
                                            [, "([3-79]\\d{2})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]"]],
                                            [, "(70)(\\d{2})(\\d{4})", "$1 $2 $3", ["70"]],
                                            [, "(8000)(\\d{3})(\\d{3})", "$1 $2 $3", ["800", "8000"]],
                                            [, "([458]\\d{3})(\\d{3,4})", "$1 $2", ["40|5|8(?:00|[1-5])", "40|5|8(?:00[1-9]|[1-5])"]]
                                        ], , [, , "NA", "NA"], , , [, , "1\\d{3,4}|800[2-9]\\d{3}", "\\d{4,7}", , , "8002123"],
                                        [, , "1(?:2[01245]|3[0-6]|4[1-489]|5[0-59]|6[1-46-9]|7[0-27-9]|8[189]|9[012])\\d{1,2}", "\\d{4,5}", , , "12123"], , , [, , "NA", "NA"]
                                    ],
                                    EG: [, [, , "1\\d{4,9}|[2456]\\d{8}|3\\d{7}|[89]\\d{8,9}", "\\d{5,10}"],
                                        [, , "(?:1(?:3[23]\\d|5(?:[23]|9\\d))|2[2-4]\\d{2}|3\\d{2}|4(?:0[2-5]|[578][23]|64)\\d|5(?:0[2-7]|[57][23])\\d|6[24-689]3\\d|8(?:2[2-57]|4[26]|6[237]|8[2-4])\\d|9(?:2[27]|3[24]|52|6[2356]|7[2-4])\\d)\\d{5}|1[69]\\d{3}", "\\d{5,9}", , , "234567890"],
                                        [, , "1(?:0[0-269]|1[0-245]|2[0-278])\\d{7}", "\\d{10}", , , "1001234567"],
                                        [, , "800\\d{7}", "\\d{10}", , , "8001234567"],
                                        [, , "900\\d{7}", "\\d{10}", , , "9001234567"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "EG", 20, "00", "0", , , "0", , , , [
                                            [, "(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"],
                                            [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1[012]|[89]00"], "0$1"],
                                            [, "(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|[89][2-9]"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    EH: [, [, , "[5-9]\\d{8}", "\\d{9}"],
                                        [, , "528[89]\\d{5}", "\\d{9}", , , "528812345"],
                                        [, , "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[07][07]|6[12]))\\d{6}", "\\d{9}", , , "650123456"],
                                        [, , "80\\d{7}", "\\d{9}", , , "801234567"],
                                        [, , "89\\d{7}", "\\d{9}", , , "891234567"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "5924[01]\\d{4}", "\\d{9}", , , "592401234"], "EH", 212, "00", "0", , , "0", , , , , , [, , "NA", "NA"], , "528[89]", [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    ER: [, [, , "[178]\\d{6}", "\\d{6,7}"],
                                        [, , "1(?:1[12568]|20|40|55|6[146])\\d{4}|8\\d{6}", "\\d{6,7}", , , "8370362"],
                                        [, , "17[1-3]\\d{4}|7\\d{6}", "\\d{7}", , , "7123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "ER", 291, "00", "0", , , "0", , , , [
                                            [, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", , "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    ES: [, [, , "[5-9]\\d{8}", "\\d{9}"],
                                        [, , "8(?:[13]0|[28][0-8]|[47][1-9]|5[01346-9]|6[0457-9])\\d{6}|9(?:[1238][0-8]\\d{6}|4[1-9]\\d{6}|5\\d{7}|6(?:[0-8]\\d{6}|9(?:0(?:[0-57-9]\\d{4}|6(?:0[0-8]|1[1-9]|[2-9]\\d)\\d{2})|[1-9]\\d{5}))|7(?:[124-9]\\d{2}|3(?:[0-8]\\d|9[1-9]))\\d{4})", "\\d{9}", , , "810123456"],
                                        [, , "(?:6\\d{6}|7[1-4]\\d{5}|9(?:6906(?:09|10)|7390\\d{2}))\\d{2}", "\\d{9}", , , "612345678"],
                                        [, , "[89]00\\d{6}", "\\d{9}", , , "800123456"],
                                        [, , "80[367]\\d{6}", "\\d{9}", , , "803123456"],
                                        [, , "90[12]\\d{6}", "\\d{9}", , , "901123456"],
                                        [, , "70\\d{7}", "\\d{9}", , , "701234567"],
                                        [, , "NA", "NA"], "ES", 34, "00", , , , , , , , [
                                            [, "([89]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]],
                                            [, "([5-9]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[568]|[79][0-8]"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "51\\d{7}", "\\d{9}", , , "511234567"], , , [, , "NA", "NA"]
                                    ],
                                    ET: [, [, , "[1-59]\\d{8}", "\\d{7,9}"],
                                        [, , "(?:11(?:1(?:1[124]|2[2-57]|3[1-5]|5[5-8]|8[6-8])|2(?:13|3[6-8]|5[89]|7[05-9]|8[2-6])|3(?:2[01]|3[0-289]|4[1289]|7[1-4]|87)|4(?:1[69]|3[2-49]|4[0-3]|6[5-8])|5(?:1[578]|44|5[0-4])|6(?:18|2[69]|4[5-7]|5[1-5]|6[0-59]|8[015-8]))|2(?:2(?:11[1-9]|22[0-7]|33\\d|44[1467]|66[1-68])|5(?:11[124-6]|33[2-8]|44[1467]|55[14]|66[1-3679]|77[124-79]|880))|3(?:3(?:11[0-46-8]|22[0-6]|33[0134689]|44[04]|55[0-6]|66[01467])|4(?:44[0-8]|55[0-69]|66[0-3]|77[1-5]))|4(?:6(?:22[0-24-7]|33[1-5]|44[13-69]|55[14-689]|660|88[1-4])|7(?:11[1-9]|22[1-9]|33[13-7]|44[13-6]|55[1-689]))|5(?:7(?:227|55[05]|(?:66|77)[14-8])|8(?:11[149]|22[013-79]|33[0-68]|44[013-8]|550|66[1-5]|77\\d)))\\d{4}", "\\d{7,9}", , , "111112345"],
                                        [, , "9(?:[1-468]\\d|5[89])\\d{6}", "\\d{9}", , , "911234567"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "ET", 251, "00", "0", , , "0", , , , [
                                            [, "([1-59]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", , "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    FI: [, [, , "1\\d{4,11}|[2-9]\\d{4,10}", "\\d{5,12}"],
                                        [, , "1(?:[3569][1-8]\\d{3,9}|[47]\\d{5,10})|2[1-8]\\d{3,9}|3(?:[1-8]\\d{3,9}|9\\d{4,8})|[5689][1-8]\\d{3,9}", "\\d{5,12}", , , "1312345678"],
                                        [, , "4\\d{5,10}|50\\d{4,8}", "\\d{6,11}", , , "412345678"],
                                        [, , "800\\d{4,7}", "\\d{7,10}", , , "8001234567"],
                                        [, , "[67]00\\d{5,6}", "\\d{8,9}", , , "600123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "FI", 358, "00|99(?:[02469]|5(?:11|33|5[59]|88|9[09]))", "0", , , "0", , "00", , [
                                            [, "(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]00|[6-8]0)"], "0$1"],
                                            [, "(116\\d{3})", "$1", ["116"], "$1"],
                                            [, "(\\d{2})(\\d{4,10})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"],
                                            [, "(\\d)(\\d{4,11})", "$1 $2", ["[25689][1-8]|3"], "0$1"]
                                        ], , [, , "NA", "NA"], 1, , [, , "[13]00\\d{3,7}|2(?:0(?:0\\d{3,7}|2[023]\\d{1,6}|9[89]\\d{1,6}))|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})", "\\d{5,10}", , , "100123"],
                                        [, , "[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})", "\\d{5,10}", , , "10112345"], , , [, , "NA", "NA"]
                                    ],
                                    FJ: [, [, , "[36-9]\\d{6}|0\\d{10}", "\\d{7}(?:\\d{4})?"],
                                        [, , "(?:3[0-5]|6[25-7]|8[58])\\d{5}", "\\d{7}", , , "3212345"],
                                        [, , "(?:7[0-8]|8[034679]|9\\d)\\d{5}", "\\d{7}", , , "7012345"],
                                        [, , "0800\\d{7}", "\\d{11}", , , "08001234567"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "FJ", 679, "0(?:0|52)", , , , , , "00", , [
                                            [, "(\\d{3})(\\d{4})", "$1 $2", ["[36-9]"]],
                                            [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], 1, , [, , "NA", "NA"]
                                    ],
                                    FK: [, [, , "[2-7]\\d{4}", "\\d{5}"],
                                        [, , "[2-47]\\d{4}", "\\d{5}", , , "31234"],
                                        [, , "[56]\\d{4}", "\\d{5}", , , "51234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "FK", 500, "00", , , , , , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    FM: [, [, , "[39]\\d{6}", "\\d{7}"],
                                        [, , "3[2357]0[1-9]\\d{3}|9[2-6]\\d{5}", "\\d{7}", , , "3201234"],
                                        [, , "3[2357]0[1-9]\\d{3}|9[2-7]\\d{5}", "\\d{7}", , , "3501234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "FM", 691, "00", , , , , , , , [
                                            [, "(\\d{3})(\\d{4})", "$1 $2"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    FO: [, [, , "[2-9]\\d{5}", "\\d{6}"],
                                        [, , "(?:20|[3-4]\\d|8[19])\\d{4}", "\\d{6}", , , "201234"],
                                        [, , "(?:[27][1-9]|5\\d)\\d{4}", "\\d{6}", , , "211234"],
                                        [, , "80[257-9]\\d{3}", "\\d{6}", , , "802123"],
                                        [, , "90(?:[1345][15-7]|2[125-7]|99)\\d{2}", "\\d{6}", , , "901123"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "(?:6[0-36]|88)\\d{4}", "\\d{6}", , , "601234"], "FO", 298, "00", , , , "(10(?:01|[12]0|88))", , , , [
                                            [, "(\\d{6})", "$1", , , "$CC $1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    FR: [, [, , "[1-9]\\d{8}", "\\d{9}"],
                                        [, , "[1-5]\\d{8}", "\\d{9}", , , "123456789"],
                                        [, , "6\\d{8}|7(?:00\\d{6}|[3-9]\\d{7})", "\\d{9}", , , "612345678"],
                                        [, , "80[0-5]\\d{6}", "\\d{9}", , , "801234567"],
                                        [, , "89[1-37-9]\\d{6}", "\\d{9}", , , "891123456"],
                                        [, , "8(?:1[019]|2[0156]|84|90)\\d{6}", "\\d{9}", , , "810123456"],
                                        [, , "NA", "NA"],
                                        [, , "9\\d{8}", "\\d{9}", , , "912345678"], "FR", 33, "00", "0", , , "0", , , , [
                                            [, "([1-79])(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"],
                                            [, "(1\\d{2})(\\d{3})", "$1 $2", ["11"], "$1"],
                                            [, "(8\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"]
                                        ],
                                        [
                                            [, "([1-79])(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"],
                                            [, "(8\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"]
                                        ],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "80[6-9]\\d{6}", "\\d{9}", , , "806123456"], , , [, , "NA", "NA"]
                                    ],
                                    GA: [, [, , "0?\\d{7}", "\\d{7,8}"],
                                        [, , "01\\d{6}", "\\d{8}", , , "01441234"],
                                        [, , "0?[2-7]\\d{6}", "\\d{7,8}", , , "06031234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "GA", 241, "00", , , , , , , , [
                                            [, "(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"],
                                            [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], 1, , [, , "NA", "NA"]
                                    ],
                                    GB: [, [, , "\\d{7,10}", "\\d{4,10}"],
                                        [, , "2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[012])\\d{7}|1(?:(?:1(?:3[0-48]|[46][0-4]|5[012789]|7[0-49]|8[01349])|21[0-7]|31[0-8]|[459]1\\d|61[0-46-9]))\\d{6}|1(?:2(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-4789]|7[013-9]|9\\d)|3(?:0\\d|[25][02-9]|3[02-579]|[468][0-46-9]|7[1235679]|9[24578])|4(?:0[03-9]|[28][02-5789]|[37]\\d|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1235-9]|2[024-9]|3[015689]|4[02-9]|5[03-9]|6\\d|7[0-35-9]|8[0-468]|9[0-5789])|6(?:0[034689]|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0124578])|7(?:0[0246-9]|2\\d|3[023678]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-5789]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|2[02-689]|3[1-5789]|4[2-9]|5[0-579]|6[234789]|7[0124578]|8\\d|9[2-57]))\\d{6}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-4789]|8[345])))|3(?:638[2-5]|647[23]|8(?:47[04-9]|64[015789]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[123]))|5(?:24(?:3[2-79]|6\\d)|276\\d|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[567]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|955[0-4])|7(?:26(?:6[13-9]|7[0-7])|442\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|84(?:3[2-58]))|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}|176888[234678]\\d{2}|16977[23]\\d{3}", "\\d{4,10}", , , "1212345678"],
                                        [, , "7(?:[1-4]\\d\\d|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[04-9]\\d|1[02-9]|2[0-35-9]|3[0-689]))\\d{6}", "\\d{10}", , , "7400123456"],
                                        [, , "80(?:0(?:1111|\\d{6,7})|8\\d{7})|500\\d{6}", "\\d{7}(?:\\d{2,3})?", , , "8001234567"],
                                        [, , "(?:87[123]|9(?:[01]\\d|8[2349]))\\d{7}", "\\d{10}", , , "9012345678"],
                                        [, , "8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})", "\\d{7}(?:\\d{3})?", , , "8431234567"],
                                        [, , "70\\d{8}", "\\d{10}", , , "7012345678"],
                                        [, , "56\\d{8}", "\\d{10}", , , "5612345678"], "GB", 44, "00", "0", " x", , "0", , , , [
                                            [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2|5[56]|7(?:0|6[013-9])", "2|5[56]|7(?:0|6(?:[013-9]|2[0-35-9]))"], "0$1"],
                                            [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:1|\\d1)|3|9[018]"], "0$1"],
                                            [, "(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:387|5(?:24|39)|697|768|946)", "1(?:3873|5(?:242|39[456])|697[347]|768[347]|9467)"], "0$1"],
                                            [, "(1\\d{3})(\\d{5,6})", "$1 $2", ["1"], "0$1"],
                                            [, "(7\\d{3})(\\d{6})", "$1 $2", ["7(?:[1-5789]|62)", "7(?:[1-5789]|624)"], "0$1"],
                                            [, "(800)(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"],
                                            [, "(845)(46)(4\\d)", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"],
                                            [, "(8\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8(?:4[2-5]|7[0-3])"], "0$1"],
                                            [, "(80\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1"],
                                            [, "([58]00)(\\d{6})", "$1 $2", ["[58]00"], "0$1"]
                                        ], , [, , "76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", "\\d{10}", , , "7640123456"], 1, , [, , "NA", "NA"],
                                        [, , "(?:3[0347]|55)\\d{8}", "\\d{10}", , , "5512345678"], , , [, , "NA", "NA"]
                                    ],
                                    GD: [, [, , "[4589]\\d{9}", "\\d{7}(?:\\d{3})?"],
                                        [, , "473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-49]|5[5-79]|68|73|90)|63[68]|7(?:58|84)|800|938)\\d{4}", "\\d{7}(?:\\d{3})?", , , "4732691234"],
                                        [, , "473(?:4(?:0[2-79]|1[04-9]|20|58)|5(?:2[01]|3[3-8])|901)\\d{4}", "\\d{7}(?:\\d{3})?", , , "4734031234"],
                                        [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"],
                                        [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"],
                                        [, , "NA", "NA"],
                                        [, , "5(?:00|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
                                        [, , "NA", "NA"], "GD", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "473", [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    GE: [, [, , "[34578]\\d{8}", "\\d{6,9}"],
                                        [, , "(?:3(?:[256]\\d|4[124-9]|7[0-4])|4(?:1\\d|2[2-7]|3[1-79]|4[2-8]|7[239]|9[1-7]))\\d{6}", "\\d{6,9}", , , "322123456"],
                                        [, , "5(?:14|5[01578]|68|7[0147-9]|9[0-35-9])\\d{6}", "\\d{9}", , , "555123456"],
                                        [, , "800\\d{6}", "\\d{9}", , , "800123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "706\\d{6}", "\\d{9}", , , "706123456"], "GE", 995, "00", "0", , , "0", , , , [
                                            [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"],
                                            [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"],
                                            [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5"], "$1"]
                                        ], , [, , "NA", "NA"], , , [, , "706\\d{6}", "\\d{9}", , , "706123456"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    GF: [, [, , "[56]\\d{8}", "\\d{9}"],
                                        [, , "594(?:10|2[012457-9]|3[0-57-9]|4[3-9]|5[7-9]|6[0-3]|9[014])\\d{4}", "\\d{9}", , , "594101234"],
                                        [, , "694(?:[04][0-7]|1[0-5]|3[018]|[29]\\d)\\d{4}", "\\d{9}", , , "694201234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "GF", 594, "00", "0", , , "0", , , , [
                                            [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    GG: [, [, , "[135789]\\d{6,9}", "\\d{6,10}"],
                                        [, , "1481\\d{6}", "\\d{6,10}", , , "1481456789"],
                                        [, , "7(?:781|839|911)\\d{6}", "\\d{10}", , , "7781123456"],
                                        [, , "80(?:0(?:1111|\\d{6,7})|8\\d{7})|500\\d{6}", "\\d{7}(?:\\d{2,3})?", , , "8001234567"],
                                        [, , "(?:87[123]|9(?:[01]\\d|8[0-3]))\\d{7}", "\\d{10}", , , "9012345678"],
                                        [, , "8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})", "\\d{7}(?:\\d{3})?", , , "8431234567"],
                                        [, , "70\\d{8}", "\\d{10}", , , "7012345678"],
                                        [, , "56\\d{8}", "\\d{10}", , , "5612345678"], "GG", 44, "00", "0", " x", , "0", , , , , , [, , "76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", "\\d{10}", , , "7640123456"], , , [, , "NA", "NA"],
                                        [, , "(?:3[0347]|55)\\d{8}", "\\d{10}", , , "5512345678"], , , [, , "NA", "NA"]
                                    ],
                                    GH: [, [, , "[235]\\d{8}|8\\d{7}", "\\d{7,9}"],
                                        [, , "3(?:0[237]\\d|[167](?:2[0-6]|7\\d)|2(?:2[0-5]|7\\d)|3(?:2[0-3]|7\\d)|4(?:2[013-9]|3[01]|7\\d)|5(?:2[0-7]|7\\d)|8(?:2[0-2]|7\\d)|9(?:20|7\\d))\\d{5}", "\\d{7,9}", , , "302345678"],
                                        [, , "(?:2[034678]\\d|5(?:[047]\\d|5[3-6]|6[01]))\\d{6}", "\\d{9}", , , "231234567"],
                                        [, , "800\\d{5}", "\\d{8}", , , "80012345"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "GH", 233, "00", "0", , , "0", , , , [
                                            [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"],
                                            [, "(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "800\\d{5}", "\\d{8}", , , "80012345"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    GI: [, [, , "[2568]\\d{7}", "\\d{8}"],
                                        [, , "2(?:00\\d|1(?:6[24-7]|9\\d)|2(?:00|2[2457]))\\d{4}", "\\d{8}", , , "20012345"],
                                        [, , "(?:5[46-8]|62)\\d{6}", "\\d{8}", , , "57123456"],
                                        [, , "80\\d{6}", "\\d{8}", , , "80123456"],
                                        [, , "8[1-689]\\d{6}", "\\d{8}", , , "88123456"],
                                        [, , "87\\d{6}", "\\d{8}", , , "87123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "GI", 350, "00", , , , , , , , [
                                            [, "(\\d{3})(\\d{5})", "$1 $2", ["2"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    GL: [, [, , "[1-689]\\d{5}", "\\d{6}"],
                                        [, , "(?:19|3[1-6]|6[14689]|8[14-79]|9\\d)\\d{4}", "\\d{6}", , , "321000"],
                                        [, , "[245][2-9]\\d{4}", "\\d{6}", , , "221234"],
                                        [, , "80\\d{4}", "\\d{6}", , , "801234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "3[89]\\d{4}", "\\d{6}", , , "381234"], "GL", 299, "00", , , , , , , , [
                                            [, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    GM: [, [, , "[2-9]\\d{6}", "\\d{7}"],
                                        [, , "(?:4(?:[23]\\d{2}|4(?:1[024679]|[6-9]\\d))|5(?:54[0-7]|6(?:[67]\\d)|7(?:1[04]|2[035]|3[58]|48))|8\\d{3})\\d{3}", "\\d{7}", , , "5661234"],
                                        [, , "[23679]\\d{6}", "\\d{7}", , , "3012345"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "GM", 220, "00", , , , , , , , [
                                            [, "(\\d{3})(\\d{4})", "$1 $2"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    GN: [, [, , "[367]\\d{7,8}", "\\d{8,9}"],
                                        [, , "30(?:24|3[12]|4[1-35-7]|5[13]|6[189]|[78]1|9[1478])\\d{4}", "\\d{8}", , , "30241234"],
                                        [, , "6[02356]\\d{7}", "\\d{9}", , , "601123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "722\\d{6}", "\\d{9}", , , "722123456"], "GN", 224, "00", , , , , , , , [
                                            [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]],
                                            [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    GP: [, [, , "[56]\\d{8}", "\\d{9}"],
                                        [, , "590(?:0[13468]|1[012]|2[0-68]|3[28]|4[0-8]|5[579]|6[0189]|70|8[0-689]|9\\d)\\d{4}", "\\d{9}", , , "590201234"],
                                        [, , "690(?:0[0-7]|[1-9]\\d)\\d{4}", "\\d{9}", , , "690301234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "GP", 590, "00", "0", , , "0", , , , [
                                            [, "([56]90)(\\d{2})(\\d{4})", "$1 $2-$3", , "0$1"]
                                        ], , [, , "NA", "NA"], 1, , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    GQ: [, [, , "[23589]\\d{8}", "\\d{9}"],
                                        [, , "3(?:3(?:3\\d[7-9]|[0-24-9]\\d[46])|5\\d{2}[7-9])\\d{4}", "\\d{9}", , , "333091234"],
                                        [, , "(?:222|55[15])\\d{6}", "\\d{9}", , , "222123456"],
                                        [, , "80\\d[1-9]\\d{5}", "\\d{9}", , , "800123456"],
                                        [, , "90\\d[1-9]\\d{5}", "\\d{9}", , , "900123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "GQ", 240, "00", , , , , , , , [
                                            [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]],
                                            [, "(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    GR: [, [, , "[26-9]\\d{9}", "\\d{10}"],
                                        [, , "2(?:1\\d{2}|2(?:2[1-46-9]|3[1-8]|4[1-7]|5[1-4]|6[1-8]|7[1-5]|[89][1-9])|3(?:1\\d|2[1-57]|[35][1-3]|4[13]|7[1-7]|8[124-6]|9[1-79])|4(?:1\\d|2[1-8]|3[1-4]|4[13-5]|6[1-578]|9[1-5])|5(?:1\\d|[29][1-4]|3[1-5]|4[124]|5[1-6])|6(?:1\\d|3[1245]|4[1-7]|5[13-9]|[269][1-6]|7[14]|8[1-5])|7(?:1\\d|2[1-5]|3[1-6]|4[1-7]|5[1-57]|6[135]|9[125-7])|8(?:1\\d|2[1-5]|[34][1-4]|9[1-57]))\\d{6}", "\\d{10}", , , "2123456789"],
                                        [, , "69\\d{8}", "\\d{10}", , , "6912345678"],
                                        [, , "800\\d{7}", "\\d{10}", , , "8001234567"],
                                        [, , "90[19]\\d{7}", "\\d{10}", , , "9091234567"],
                                        [, , "8(?:0[16]|12|25)\\d{7}", "\\d{10}", , , "8011234567"],
                                        [, , "70\\d{8}", "\\d{10}", , , "7012345678"],
                                        [, , "NA", "NA"], "GR", 30, "00", , , , , , , , [
                                            [, "([27]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]],
                                            [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[2-9]1|[689]"]],
                                            [, "(2\\d{3})(\\d{6})", "$1 $2", ["2[2-9][02-9]"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    GT: [, [, , "[2-7]\\d{7}|1[89]\\d{9}", "\\d{8}(?:\\d{3})?"],
                                        [, , "[267][2-9]\\d{6}", "\\d{8}", , , "22456789"],
                                        [, , "[345]\\d{7}", "\\d{8}", , , "51234567"],
                                        [, , "18[01]\\d{8}", "\\d{11}", , , "18001112222"],
                                        [, , "19\\d{9}", "\\d{11}", , , "19001112222"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "GT", 502, "00", , , , , , , , [
                                            [, "(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]],
                                            [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    GU: [, [, , "[5689]\\d{9}", "\\d{7}(?:\\d{3})?"],
                                        [, , "671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:56|7[1-9]|8[236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[5-9])|7(?:[079]7|2[0167]|3[45]|47|8[789])|8(?:[2-5789]8|6[48])|9(?:2[29]|6[79]|7[179]|8[789]|9[78]))\\d{4}", "\\d{7}(?:\\d{3})?", , , "6713001234"],
                                        [, , "671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:56|7[1-9]|8[236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[5-9])|7(?:[079]7|2[0167]|3[45]|47|8[789])|8(?:[2-5789]8|6[48])|9(?:2[29]|6[79]|7[179]|8[789]|9[78]))\\d{4}", "\\d{7}(?:\\d{3})?", , , "6713001234"],
                                        [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"],
                                        [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"],
                                        [, , "NA", "NA"],
                                        [, , "5(?:00|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
                                        [, , "NA", "NA"], "GU", 1, "011", "1", , , "1", , , 1, , , [, , "NA", "NA"], , "671", [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    GW: [, [, , "(?:4(?:0\\d{5}|4\\d{7})|9\\d{8})", "\\d{7,9}"],
                                        [, , "443(?:2[0125]|3[1245]|4[12]|5[1-4]|70|9[1-467])\\d{4}", "\\d{9}", , , "443201234"],
                                        [, , "9(?:55\\d|6(?:6\\d|9[012])|77\\d)\\d{5}", "\\d{9}", , , "955012345"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "40\\d{5}", "\\d{7}", , , "4012345"], "GW", 245, "00", , , , , , , , [
                                            [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["44|9[567]"]],
                                            [, "(\\d{3})(\\d{4})", "$1 $2", ["40"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    GY: [, [, , "[2-4679]\\d{6}", "\\d{7}"],
                                        [, , "(?:2(?:1[6-9]|2[0-35-9]|3[1-4]|5[3-9]|6\\d|7[0-24-79])|3(?:2[25-9]|3\\d)|4(?:4[0-24]|5[56])|77[1-57])\\d{4}", "\\d{7}", , , "2201234"],
                                        [, , "6\\d{6}", "\\d{7}", , , "6091234"],
                                        [, , "(?:289|862)\\d{4}", "\\d{7}", , , "2891234"],
                                        [, , "9008\\d{3}", "\\d{7}", , , "9008123"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "GY", 592, "001", , , , , , , , [
                                            [, "(\\d{3})(\\d{4})", "$1 $2"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    HK: [, [, , "[235-7]\\d{7}|8\\d{7,8}|9\\d{4,10}", "\\d{5,11}"],
                                        [, , "(?:[23]\\d|58)\\d{6}", "\\d{8}", , , "21234567"],
                                        [, , "(?:5[1-79]\\d|6\\d{2}|8[4-79]\\d|9(?:0[1-9]|[1-8]\\d))\\d{5}", "\\d{8}", , , "51234567"],
                                        [, , "800\\d{6}", "\\d{9}", , , "800123456"],
                                        [, , "900(?:[0-24-9]\\d{7}|3\\d{1,4})", "\\d{5,11}", , , "90012345678"],
                                        [, , "NA", "NA"],
                                        [, , "8[1-3]\\d{6}", "\\d{8}", , , "81123456"],
                                        [, , "NA", "NA"], "HK", 852, "00(?:[126-9]|30|5[09])?", , , , , , "00", , [
                                            [, "(\\d{4})(\\d{4})", "$1 $2", ["[235-7]|[89](?:0[1-9]|[1-9])"]],
                                            [, "(800)(\\d{3})(\\d{3})", "$1 $2 $3", ["800"]],
                                            [, "(900)(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["900"]],
                                            [, "(900)(\\d{2,5})", "$1 $2", ["900"]]
                                        ], , [, , "7\\d{7}", "\\d{8}", , , "71234567"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    HN: [, [, , "[237-9]\\d{7}", "\\d{8}"],
                                        [, , "2(?:2(?:0[019]|1[1-36]|[23]\\d|4[056]|5[57]|7[01389]|8[0146-9]|9[012])|4(?:07|2[3-59]|3[13-689]|4[0-68]|5[1-35])|5(?:16|4[3-5]|5\\d|6[4-6]|74)|6(?:[056]\\d|17|3[04]|4[0-378]|[78][0-8]|9[01])|7(?:6[46-9]|7[02-9]|8[034])|8(?:79|8[0-35789]|9[1-57-9]))\\d{4}", "\\d{8}", , , "22123456"],
                                        [, , "[37-9]\\d{7}", "\\d{8}", , , "91234567"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "HN", 504, "00", , , , , , , , [
                                            [, "(\\d{4})(\\d{4})", "$1-$2"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    HR: [, [, , "[1-7]\\d{5,8}|[89]\\d{6,11}", "\\d{6,12}"],
                                        [, , "1\\d{7}|(?:2[0-3]|3[1-5]|4[02-47-9]|5[1-3])\\d{6,7}", "\\d{6,9}", , , "12345678"],
                                        [, , "9(?:[1-9]\\d{6,10}|01\\d{6,9})", "\\d{8,12}", , , "912345678"],
                                        [, , "80[01]\\d{4,7}", "\\d{7,10}", , , "8001234567"],
                                        [, , "6(?:[01459]\\d{4,7})", "\\d{6,9}", , , "611234"],
                                        [, , "NA", "NA"],
                                        [, , "7[45]\\d{4,7}", "\\d{6,9}", , , "741234567"],
                                        [, , "NA", "NA"], "HR", 385, "00", "0", , , "0", , , , [
                                            [, "(1)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"],
                                            [, "(6[09])(\\d{4})(\\d{3})", "$1 $2 $3", ["6[09]"], "0$1"],
                                            [, "([67]2)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]2"], "0$1"],
                                            [, "([2-5]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"],
                                            [, "(9\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                                            [, "(9\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
                                            [, "(9\\d)(\\d{3,4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"], "0$1"],
                                            [, "(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[0145]|7"], "0$1"],
                                            [, "(\\d{2})(\\d{3,4})(\\d{3})", "$1 $2 $3", ["6[0145]|7"], "0$1"],
                                            [, "(80[01])(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"],
                                            [, "(80[01])(\\d{3,4})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "[76]2\\d{6,7}", "\\d{8,9}", , , "62123456"], , , [, , "NA", "NA"]
                                    ],
                                    HT: [, [, , "[2-489]\\d{7}", "\\d{8}"],
                                        [, , "2(?:[248]\\d|5[1-5]|94)\\d{5}", "\\d{8}", , , "22453300"],
                                        [, , "(?:3[1-9]\\d|4\\d{2}|9(?:8[0-35]|9[5-9]))\\d{5}", "\\d{8}", , , "34101234"],
                                        [, , "8\\d{7}", "\\d{8}", , , "80012345"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "98[89]\\d{5}", "\\d{8}", , , "98901234"], "HT", 509, "00", , , , , , , , [
                                            [, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    HU: [, [, , "[1-9]\\d{7,8}", "\\d{6,9}"],
                                        [, , "(?:1\\d|2(?:1\\d|[2-9])|3(?:[2-7]|8\\d)|4[24-9]|5[2-79]|6[23689]|7(?:1\\d|[2-9])|8[2-57-9]|9[2-69])\\d{6}", "\\d{6,9}", , , "12345678"],
                                        [, , "(?:[257]0|3[01])\\d{7}", "\\d{9}", , , "201234567"],
                                        [, , "80\\d{6}", "\\d{8}", , , "80123456"],
                                        [, , "9[01]\\d{6}", "\\d{8}", , , "90123456"],
                                        [, , "40\\d{6}", "\\d{8}", , , "40123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "HU", 36, "00", "06", , , "06", , , , [
                                            [, "(1)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "($1)"],
                                            [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "($1)"]
                                        ], , [, , "NA", "NA"], , , [, , "[48]0\\d{6}", "\\d{8}", , , "80123456"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    ID: [, [, , "(?:[1-79]\\d{6,10}|8\\d{7,11})", "\\d{5,12}"],
                                        [, , "2(?:1(?:14\\d{3}|[0-8]\\d{6,7}|500\\d{3}|9\\d{6})|2\\d{6,8}|4\\d{7,8})|(?:2(?:[35][1-4]|6[0-8]|7[1-6]|8\\d|9[1-8])|3(?:1|[25][1-8]|3[1-68]|4[1-3]|6[1-3568]|7[0-469]|8\\d)|4(?:0[1-589]|1[01347-9]|2[0-36-8]|3[0-24-68]|43|5[1-378]|6[1-5]|7[134]|8[1245])|5(?:1[1-35-9]|2[25-8]|3[124-9]|4[1-3589]|5[1-46]|6[1-8])|6(?:19?|[25]\\d|3[1-69]|4[1-6])|7(?:02|[125][1-9]|[36]\\d|4[1-8]|7[0-36-9])|9(?:0[12]|1[013-8]|2[0-479]|5[125-8]|6[23679]|7[159]|8[01346]))\\d{5,8}", "\\d{5,11}", , , "612345678"],
                                        [, , "(?:2(?:1(?:3[145]|4[01]|5[1-469]|60|8[0359]|9\\d)|2(?:88|9[1256])|3[1-4]9|4(?:36|91)|5(?:1[349]|[2-4]9)|6[0-7]9|7(?:[1-36]9|4[39])|8[1-5]9|9[1-48]9)|3(?:19[1-3]|2[12]9|3[13]9|4(?:1[69]|39)|5[14]9|6(?:1[69]|2[89])|709)|4[13]19|5(?:1(?:19|8[39])|4[129]9|6[12]9)|6(?:19[12]|2(?:[23]9|77))|7(?:1[13]9|2[15]9|419|5(?:1[89]|29)|6[15]9|7[178]9))\\d{5,6}|8[1-35-9]\\d{7,10}", "\\d{9,12}", , , "812345678"],
                                        [, , "177\\d{6,8}|800\\d{5,7}", "\\d{8,11}", , , "8001234567"],
                                        [, , "809\\d{7}", "\\d{10}", , , "8091234567"],
                                        [, , "804\\d{7}", "\\d{10}", , , "8041234567"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "ID", 62, "0(?:0[1789]|10(?:00|1[67]))", "0", , , "0", , , , [
                                            [, "(\\d{2})(\\d{5,8})", "$1 $2", ["2[124]|[36]1"], "(0$1)"],
                                            [, "(\\d{3})(\\d{5,8})", "$1 $2", ["[4579]|2[035-9]|[36][02-9]"], "(0$1)"],
                                            [, "(8\\d{2})(\\d{3,4})(\\d{3,5})", "$1-$2-$3", ["8[1-35-9]"], "0$1"],
                                            [, "(1)(500)(\\d{3})", "$1 $2 $3", ["15"], "$1"],
                                            [, "(177)(\\d{6,8})", "$1 $2", ["17"], "0$1"],
                                            [, "(800)(\\d{5,7})", "$1 $2", ["800"], "0$1"],
                                            [, "(804)(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"],
                                            [, "(80\\d)(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80[79]"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "8071\\d{6}", "\\d{10}", , , "8071123456"],
                                        [, , "1500\\d{3}|8071\\d{6}", "\\d{7,10}", , , "8071123456"], , , [, , "NA", "NA"]
                                    ],
                                    IE: [, [, , "[124-9]\\d{6,9}", "\\d{5,10}"],
                                        [, , "1\\d{7,8}|2(?:1\\d{6,7}|3\\d{7}|[24-9]\\d{5})|4(?:0[24]\\d{5}|[1-469]\\d{7}|5\\d{6}|7\\d{5}|8[0-46-9]\\d{7})|5(?:0[45]\\d{5}|1\\d{6}|[23679]\\d{7}|8\\d{5})|6(?:1\\d{6}|[237-9]\\d{5}|[4-6]\\d{7})|7[14]\\d{7}|9(?:1\\d{6}|[04]\\d{7}|[35-9]\\d{5})", "\\d{5,10}", , , "2212345"],
                                        [, , "8(?:22\\d{6}|[35-9]\\d{7})", "\\d{9}", , , "850123456"],
                                        [, , "1800\\d{6}", "\\d{10}", , , "1800123456"],
                                        [, , "15(?:1[2-8]|[2-8]0|9[089])\\d{6}", "\\d{10}", , , "1520123456"],
                                        [, , "18[59]0\\d{6}", "\\d{10}", , , "1850123456"],
                                        [, , "700\\d{6}", "\\d{9}", , , "700123456"],
                                        [, , "76\\d{7}", "\\d{9}", , , "761234567"], "IE", 353, "00", "0", , , "0", , , , [
                                            [, "(1)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"],
                                            [, "(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"],
                                            [, "(\\d{3})(\\d{5})", "$1 $2", ["40[24]|50[45]"], "(0$1)"],
                                            [, "(48)(\\d{4})(\\d{4})", "$1 $2 $3", ["48"], "(0$1)"],
                                            [, "(818)(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"],
                                            [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[24-69]|7[14]"], "(0$1)"],
                                            [, "([78]\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["76|8[35-9]"], "0$1"],
                                            [, "(700)(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
                                            [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:8[059]|5)", "1(?:8[059]0|5)"], "$1"]
                                        ], , [, , "NA", "NA"], , , [, , "18[59]0\\d{6}", "\\d{10}", , , "1850123456"],
                                        [, , "818\\d{6}", "\\d{9}", , , "818123456"], , , [, , "8[35-9]\\d{8}", "\\d{10}", , , "8501234567"]
                                    ],
                                    IL: [, [, , "[17]\\d{6,9}|[2-589]\\d{3}(?:\\d{3,6})?|6\\d{3}", "\\d{4,10}"],
                                        [, , "[2-489]\\d{7}", "\\d{7,8}", , , "21234567"],
                                        [, , "5(?:[02-47-9]\\d{2}|5(?:01|2[23]|3[2-4]|4[45]|5[5689]|6[67]|7[0178]|8[6-9]|9[4-9])|6[2-9]\\d)\\d{5}", "\\d{9}", , , "501234567"],
                                        [, , "1(?:80[019]\\d{3}|255)\\d{3}", "\\d{7,10}", , , "1800123456"],
                                        [, , "1(?:212|(?:9(?:0[01]|19)|200)\\d{2})\\d{4}", "\\d{8,10}", , , "1919123456"],
                                        [, , "1700\\d{6}", "\\d{10}", , , "1700123456"],
                                        [, , "NA", "NA"],
                                        [, , "7(?:18\\d|2[23]\\d|3[237]\\d|47\\d|6(?:5\\d|8[0168])|7\\d{2}|8(?:2\\d|33|55|77|81)|9[29]\\d)\\d{5}", "\\d{9}", , , "771234567"], "IL", 972, "0(?:0|1[2-9])", "0", , , "0", , , , [
                                            [, "([2-489])(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"],
                                            [, "([57]\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
                                            [, "(1)([7-9]\\d{2})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"], "$1"],
                                            [, "(1255)(\\d{3})", "$1-$2", ["125"], "$1"],
                                            [, "(1200)(\\d{3})(\\d{3})", "$1-$2-$3", ["120"], "$1"],
                                            [, "(1212)(\\d{2})(\\d{2})", "$1-$2-$3", ["121"], "$1"],
                                            [, "(1599)(\\d{6})", "$1-$2", ["15"], "$1"],
                                            [, "(\\d{4})", "*$1", ["[2-689]"], "$1"]
                                        ], , [, , "NA", "NA"], , , [, , "1700\\d{6}|[2-689]\\d{3}", "\\d{4,10}", , , "1700123456"],
                                        [, , "[2-689]\\d{3}|1599\\d{6}", "\\d{4}(?:\\d{6})?", , , "1599123456"], , , [, , "NA", "NA"]
                                    ],
                                    IM: [, [, , "[135789]\\d{6,9}", "\\d{6,10}"],
                                        [, , "1624\\d{6}", "\\d{6,10}", , , "1624456789"],
                                        [, , "7[569]24\\d{6}", "\\d{10}", , , "7924123456"],
                                        [, , "808162\\d{4}", "\\d{10}", , , "8081624567"],
                                        [, , "(?:872299|90[0167]624)\\d{4}", "\\d{10}", , , "9016247890"],
                                        [, , "8(?:4(?:40[49]06|5624\\d)|70624\\d)\\d{3}", "\\d{10}", , , "8456247890"],
                                        [, , "70\\d{8}", "\\d{10}", , , "7012345678"],
                                        [, , "56\\d{8}", "\\d{10}", , , "5612345678"], "IM", 44, "00", "0", " x", , "0", , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "3(?:08162\\d|3\\d{5}|4(?:40[49]06|5624\\d)|7(?:0624\\d|2299\\d))\\d{3}|55\\d{8}", "\\d{10}", , , "5512345678"], , , [, , "NA", "NA"]
                                    ],
                                    IN: [, [, , "008\\d{9}|1\\d{7,12}|[2-9]\\d{9,10}", "\\d{6,13}"],
                                        [, , "(?:11|2[02]|33|4[04]|79)[2-7]\\d{7}|80[2-467]\\d{7}|(?:1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6[014]|7[1257]|8[01346])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|[36][25]|22|4[28]|5[12]|[78]1|9[15])|6(?:12|[2345]1|57|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91))[2-7]\\d{6}|(?:(?:1(?:2[35-8]|3[346-9]|4[236-9]|[59][0235-9]|6[235-9]|7[34689]|8[257-9])|2(?:1[134689]|3[24-8]|4[2-8]|5[25689]|6[2-4679]|7[13-79]|8[2-479]|9[235-9])|3(?:01|1[79]|2[1-5]|4[25-8]|5[125689]|6[235-7]|7[157-9]|8[2-467])|4(?:1[14578]|2[5689]|3[2-467]|5[4-7]|6[35]|73|8[2689]|9[2389])|5(?:[16][146-9]|2[14-8]|3[1346]|4[14-69]|5[46]|7[2-4]|8[2-8]|9[246])|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|[57][2-689]|6[24-578]|8[1-6])|8(?:1[1357-9]|2[235-8]|3[03-57-9]|4[0-24-9]|5\\d|6[2457-9]|7[1-6]|8[1256]|9[2-4]))\\d|7(?:(?:1[013-9]|2[0235-9]|3[2679]|4[1-35689]|5[2-46-9]|[67][02-9]|9\\d)\\d|8(?:2[0-6]|[013-8]\\d)))[2-7]\\d{5}", "\\d{6,10}", , , "1123456789"],
                                        [, , "(?:7(?:0\\d{3}|2(?:[0235679]\\d{2}|[14][017-9]\\d|8(?:[0-59]\\d|6[089]|78)|9[389]\\d)|3(?:[05-8]\\d{2}|1(?:[089]\\d|7[5-8])|2(?:[5-8]\\d|[01][089])|3(?:07|[17-9]\\d)|4(?:[07-9]\\d|11)|9(?:[01689]\\d|59))|4(?:0[1-9]\\d|1(?:[015-9]\\d|4[08])|2(?:09|[1-7][089]|[89]\\d)|3(?:[0-8][089]|9\\d)|4(?:[089]\\d|11|7[02-8])|5(?:0[089]|[59]9)|7(?:0[3-9]|11|7[02-8]|[89]\\d)|8(?:[0-24-7][089]|[389]\\d)|9(?:[0-6][089]|7[08]|[89]\\d))|5(?:[034678]\\d|2[03-9]|5[017-9]|9[7-9])\\d|6(?:0[0-47]|1[0-257-9]|2[0-4]|3[19]|5[4589]|[6-9]\\d)\\d|7(?:0[2-9]|[1-79]\\d|8[1-9])\\d|8(?:[0-79]\\d{2}|88[01])|99[4-9]\\d)|8(?:0(?:[01589]\\d|6[67])|1(?:[02-57-9]\\d|1[0135-9])|2(?:[236-9]\\d|5[1-9])|3(?:[0357-9]\\d|4[1-9])|[45]\\d{2}|6[02457-9]\\d|7(?:07|[1-69]\\d)|8(?:[0-26-9]\\d|44|5[2-9])|9(?:[035-9]\\d|2[2-9]|4[0-8]))\\d|9\\d{4})\\d{5}", "\\d{10}", , , "9987654321"],
                                        [, , "00800\\d{7}|1(?:600\\d{6}|80(?:0\\d{4,9}|3\\d{9}))", "\\d{8,13}", , , "1800123456"],
                                        [, , "186[12]\\d{9}", "\\d{13}", , , "1861123456789"],
                                        [, , "1860\\d{7}", "\\d{11}", , , "18603451234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "IN", 91, "00", "0", , , "0", , , , [
                                            [, "(\\d{5})(\\d{5})", "$1 $2", ["7(?:[023578]|4[0-57-9]|6[0-35-9]|99)|8(?:0[015689]|1[0-57-9]|2[2356-9]|3[0-57-9]|[45]|6[02457-9]|7[01-69]|8[0-24-9]|9[02-9])|9", "7(?:[08]|2(?:[0235679]|[14][017-9]|8[0-79]|9[389])|3(?:[05-8]|1[07-9]|2[015-8]|[34][017-9]|9[015689])|4(?:0[1-9]|1[014-9]|[2389]|[47][017-9]|5[059])|5(?:[034678]|2[03-9]|5[017-9]|9[7-9])|6(?:0[0-47]|1[0-257-9]|2[0-4]|3[19]|5[4589]|[6-9])|7(?:0[2-9]|[1-79]|8[1-9])|99[4-9])|8(?:0(?:[01589]|6[67])|1(?:[02-57-9]|1[0135-9])|2(?:[236-9]|5[1-9])|3(?:[0357-9]|4[1-9])|[45]|6[02457-9]|7(?:07|[1-69])|8(?:[0-26-9]|44|5[2-9])|9(?:[035-9]|2[2-9]|4[0-8]))|9", "7(?:0|2(?:[0235679]|[14][017-9]|8(?:[0-569]|78)|9[389])|3(?:[05-8]|1(?:[089]|7[5-9])|2(?:[5-8]|[01][089])|3[017-9]|4(?:[07-9]|11)|9(?:[01689]|59))|4(?:0[1-9]|1(?:[015-9]|4[08])|2(?:09|[1-7][089]|[89])|3(?:[0-8][089]|9)|4(?:[089]|11|7[02-8])|5(?:0[089]|[59]9)|7(?:0[3-9]|11|7[02-8]|[89])|8(?:[0-24-7][089]|[389])|9(?:[0-6][089]|7[08]|[89]))|5(?:[034678]|2[03-9]|5[017-9]|9[7-9])|6(?:0[0-47]|1[0-257-9]|2[0-4]|3[19]|5[4589]|[6-9])|7(?:0[2-9]|[1-79]|8[1-9])|8(?:[0-79]|88[01])|99[4-9])|8(?:0(?:[01589]|6[67])|1(?:[02-57-9]|1[0135-9])|2(?:[236-9]|5[1-9])|3(?:[0357-9]|4[1-9])|[45]|6[02457-9]|7(?:07|[1-69])|8(?:[0-26-9]|44|5[2-9])|9(?:[035-9]|2[2-9]|4[0-8]))|9"], "0$1", , 1],
                                            [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79|80[2-46]"], "0$1", , 1],
                                            [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[569][14]|7[1257]|8[1346]|[68][1-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|[36][25]|22|4[28]|5[12]|[78]1|9[15])|6(?:12|[2345]1|57|6[13]|7[14]|80)"], "0$1", , 1],
                                            [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1|88)", "7(?:12|2[14]|3[134]|4[47]|5(?:1|5[2-6])|[67]1|88)"], "0$1", , 1],
                                            [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)"], "0$1", , 1],
                                            [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[23579]|[468][1-9])|[2-8]"], "0$1", , 1],
                                            [, "(\\d{2})(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3 $4", ["008"], "0$1", , 1],
                                            [, "(1600)(\\d{2})(\\d{4})", "$1 $2 $3", ["160", "1600"], "$1", , 1],
                                            [, "(1800)(\\d{4,5})", "$1 $2", ["180", "1800"], "$1", , 1],
                                            [, "(18[06]0)(\\d{2,4})(\\d{4})", "$1 $2 $3", ["18[06]", "18[06]0"], "$1", , 1],
                                            [, "(140)(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], "$1", , 1],
                                            [, "(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18[06]", "18(?:0[03]|6[12])"], "$1", , 1]
                                        ], , [, , "NA", "NA"], , , [, , "00800\\d{7}|1(?:600\\d{6}|8(?:0(?:0\\d{4,9}|3\\d{9})|6(?:0\\d{7}|[12]\\d{9})))", "\\d{8,13}", , , "1800123456"],
                                        [, , "140\\d{7}", "\\d{10}", , , "1409305260"], 1, , [, , "NA", "NA"]
                                    ],
                                    IO: [, [, , "3\\d{6}", "\\d{7}"],
                                        [, , "37\\d{5}", "\\d{7}", , , "3709100"],
                                        [, , "38\\d{5}", "\\d{7}", , , "3801234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "IO", 246, "00", , , , , , , , [
                                            [, "(\\d{3})(\\d{4})", "$1 $2"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    IQ: [, [, , "[1-7]\\d{7,9}", "\\d{6,10}"],
                                        [, , "1\\d{7}|(?:2[13-5]|3[02367]|4[023]|5[03]|6[026])\\d{6,7}", "\\d{6,9}", , , "12345678"],
                                        [, , "7[3-9]\\d{8}", "\\d{10}", , , "7912345678"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "IQ", 964, "00", "0", , , "0", , , , [
                                            [, "(1)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                                            [, "([2-6]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"],
                                            [, "(7\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    IR: [, [, , "[1-8]\\d{9}|9(?:[0-4]\\d{8}|9\\d{2,8})", "\\d{4,10}"],
                                        [, , "(?:1[137]|2[13-68]|3[1458]|4[145]|5[146-8]|6[146]|7[1467]|8[13467])\\d{8}", "\\d{10}", , , "2123456789"],
                                        [, , "9(?:0[1-3]|[13]\\d|2[0-2]|90)\\d{7}", "\\d{10}", , , "9123456789"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "(?:[2-6]0\\d|993)\\d{7}", "\\d{10}", , , "9932123456"], "IR", 98, "00", "0", , , "0", , , , [
                                            [, "(21)(\\d{3,5})", "$1 $2", ["21"], "0$1"],
                                            [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"],
                                            [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
                                            [, "(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["9"], "0$1"],
                                            [, "(\\d{3})(\\d{3})", "$1 $2", ["9"], "0$1"]
                                        ], , [, , "943\\d{7}", "\\d{10}", , , "9432123456"], , , [, , "NA", "NA"],
                                        [, , "9990\\d{0,6}", "\\d{4,10}", , , "9990123456"], , , [, , "NA", "NA"]
                                    ],
                                    IS: [, [, , "[4-9]\\d{6}|38\\d{7}", "\\d{7,9}"],
                                        [, , "(?:4(?:1[0-24-6]|2[0-7]|[37][0-8]|4[0-245]|5[0-68]|6\\d|8[0-36-8])|5(?:05|[156]\\d|2[02578]|3[013-79]|4[03-7]|7[0-2578]|8[0-35-9]|9[013-689])|87[23])\\d{4}", "\\d{7}", , , "4101234"],
                                        [, , "38[589]\\d{6}|(?:6(?:1[1-8]|2[056]|3[089]|4[0167]|5[0159]|[67][0-69]|9\\d)|7(?:5[057]|6[0-2]|[78]\\d)|8(?:2[0-59]|3[0-4]|[469]\\d|5[1-9]))\\d{4}", "\\d{7,9}", , , "6111234"],
                                        [, , "800\\d{4}", "\\d{7}", , , "8001234"],
                                        [, , "90\\d{5}", "\\d{7}", , , "9011234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "49\\d{5}", "\\d{7}", , , "4921234"], "IS", 354, "1(?:0(?:01|10|20)|100)|00", , , , , , "00", , [
                                            [, "(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]],
                                            [, "(3\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "809\\d{4}", "\\d{7}", , , "8091234"], , , [, , "(?:6(?:2[1-478]|49|8\\d)|8(?:7[0189]|80)|95[48])\\d{4}", "\\d{7}", , , "6211234"]
                                    ],
                                    IT: [, [, , "[01589]\\d{5,10}|3(?:[12457-9]\\d{8}|[36]\\d{7,9})", "\\d{6,11}"],
                                        [, , "0(?:[26]\\d{4,9}|(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2346]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[34578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7})", "\\d{6,11}", , , "0212345678"],
                                        [, , "3(?:[12457-9]\\d{8}|6\\d{7,8}|3\\d{7,9})", "\\d{9,11}", , , "3123456789"],
                                        [, , "80(?:0\\d{6}|3\\d{3})", "\\d{6,9}", , , "800123456"],
                                        [, , "0878\\d{5}|1(?:44|6[346])\\d{6}|89(?:2\\d{3}|4(?:[0-4]\\d{2}|[5-9]\\d{4})|5(?:[0-4]\\d{2}|[5-9]\\d{6})|9\\d{6})", "\\d{6,10}", , , "899123456"],
                                        [, , "84(?:[08]\\d{6}|[17]\\d{3})", "\\d{6,9}", , , "848123456"],
                                        [, , "1(?:78\\d|99)\\d{6}", "\\d{9,10}", , , "1781234567"],
                                        [, , "55\\d{8}", "\\d{10}", , , "5512345678"], "IT", 39, "00", , , , , , , , [
                                            [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|55"]],
                                            [, "(0[26])(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]],
                                            [, "(0[26])(\\d{4,6})", "$1 $2", ["0[26]"]],
                                            [, "(0\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]"]],
                                            [, "(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[245])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]],
                                            [, "(0\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["0[13-57-9][2-46-8]"]],
                                            [, "(0\\d{3})(\\d{2,6})", "$1 $2", ["0[13-57-9][2-46-8]"]],
                                            [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13]|8(?:00|4[08]|9[59])", "[13]|8(?:00|4[08]|9(?:5[5-9]|9))"]],
                                            [, "(\\d{4})(\\d{4})", "$1 $2", ["894", "894[5-9]"]],
                                            [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3"]]
                                        ], , [, , "NA", "NA"], 1, , [, , "848\\d{6}", "\\d{9}", , , "848123456"],
                                        [, , "NA", "NA"], 1, , [, , "NA", "NA"]
                                    ],
                                    JE: [, [, , "[135789]\\d{6,9}", "\\d{6,10}"],
                                        [, , "1534\\d{6}", "\\d{6,10}", , , "1534456789"],
                                        [, , "7(?:509|7(?:00|97)|829|937)\\d{6}", "\\d{10}", , , "7797123456"],
                                        [, , "80(?:07(?:35|81)|8901)\\d{4}", "\\d{10}", , , "8007354567"],
                                        [, , "(?:871206|90(?:066[59]|1810|71(?:07|55)))\\d{4}", "\\d{10}", , , "9018105678"],
                                        [, , "8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|70002)\\d{4}", "\\d{10}", , , "8447034567"],
                                        [, , "701511\\d{4}", "\\d{10}", , , "7015115678"],
                                        [, , "56\\d{8}", "\\d{10}", , , "5612345678"], "JE", 44, "00", "0", " x", , "0", , , , , , [, , "76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", "\\d{10}", , , "7640123456"], , , [, , "NA", "NA"],
                                        [, , "3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))\\d{4}|55\\d{8}", "\\d{10}", , , "5512345678"], , , [, , "NA", "NA"]
                                    ],
                                    JM: [, [, , "[589]\\d{9}", "\\d{7}(?:\\d{3})?"],
                                        [, , "876(?:5(?:0[12]|1[0-468]|2[35]|63)|6(?:0[1-3579]|1[027-9]|[23]\\d|40|5[06]|6[2-589]|7[05]|8[04]|9[4-9])|7(?:0[2-689]|[1-6]\\d|8[056]|9[45])|9(?:0[1-8]|1[02378]|[2-8]\\d|9[2-468]))\\d{4}", "\\d{7}(?:\\d{3})?", , , "8765123456"],
                                        [, , "876(?:2(?:[16-9]\\d|58)|[348]\\d{2}|5(?:0[3-9]|27|6[0-24-9]|[3-578]\\d)|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579]))\\d{4}", "\\d{7}(?:\\d{3})?", , , "8762101234"],
                                        [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"],
                                        [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"],
                                        [, , "NA", "NA"],
                                        [, , "5(?:00|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
                                        [, , "NA", "NA"], "JM", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "876", [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    JO: [, [, , "[235-9]\\d{7,8}", "\\d{8,9}"],
                                        [, , "(?:2(?:6(?:2[0-35-9]|3[0-57-8]|4[24-7]|5[0-24-8]|[6-8][023]|9[0-3])|7(?:0[1-79]|10|2[014-7]|3[0-689]|4[019]|5[0-3578]))|32(?:0[1-69]|1[1-35-7]|2[024-7]|3\\d|4[0-3]|[57][023]|6[03])|53(?:0[0-3]|[13][023]|2[0-59]|49|5[0-35-9]|6[15]|7[45]|8[1-6]|9[0-36-9])|6(?:2[50]0|3(?:00|33)|4(?:0[0125]|1[2-7]|2[0569]|[38][07-9]|4[025689]|6[0-589]|7\\d|9[0-2])|5(?:[01][056]|2[034]|3[0-57-9]|4[17-8]|5[0-69]|6[0-35-9]|7[1-379]|8[0-68]|9[02-39]))|87(?:[02]0|7[08]|90))\\d{4}", "\\d{8}", , , "62001234"],
                                        [, , "7(?:55|7[025-9]|8[015-9]|9[0-25-9])\\d{6}", "\\d{9}", , , "790123456"],
                                        [, , "80\\d{6}", "\\d{8}", , , "80012345"],
                                        [, , "900\\d{5}", "\\d{8}", , , "90012345"],
                                        [, , "85\\d{6}", "\\d{8}", , , "85012345"],
                                        [, , "70\\d{7}", "\\d{9}", , , "700123456"],
                                        [, , "NA", "NA"], "JO", 962, "00", "0", , , "0", , , , [
                                            [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"],
                                            [, "(7)(\\d{4})(\\d{4})", "$1 $2 $3", ["7[457-9]"], "0$1"],
                                            [, "(\\d{3})(\\d{5,6})", "$1 $2", ["70|8[0158]|9"], "0$1"]
                                        ], , [, , "74(?:66|77)\\d{5}", "\\d{9}", , , "746612345"], , , [, , "NA", "NA"],
                                        [, , "8(?:10|8\\d)\\d{5}", "\\d{8}", , , "88101234"], , , [, , "NA", "NA"]
                                    ],
                                    JP: [, [, , "[1-9]\\d{8,9}|00(?:[36]\\d{7,14}|7\\d{5,7}|8\\d{7})", "\\d{8,17}"],
                                        [, , "(?:1(?:1[235-8]|2[3-6]|3[3-9]|4[2-6]|[58][2-8]|6[2-7]|7[2-9]|9[1-9])|2[2-9]\\d|[36][1-9]\\d|4(?:6[02-8]|[2-578]\\d|9[2-59])|5(?:6[1-9]|7[2-8]|[2-589]\\d)|7(?:3[4-9]|4[02-9]|[25-9]\\d)|8(?:3[2-9]|4[5-9]|5[1-9]|8[03-9]|[2679]\\d)|9(?:[679][1-9]|[2-58]\\d))\\d{6}", "\\d{9}", , , "312345678"],
                                        [, , "[7-9]0[1-9]\\d{7}", "\\d{10}", , , "9012345678"],
                                        [, , "120\\d{6}|800\\d{7}|00(?:37\\d{6,13}|66\\d{6,13}|777(?:[01]\\d{2}|5\\d{3}|8\\d{4})|882[1245]\\d{4})", "\\d{8,17}", , , "120123456"],
                                        [, , "990\\d{6}", "\\d{9}", , , "990123456"],
                                        [, , "NA", "NA"],
                                        [, , "60\\d{7}", "\\d{9}", , , "601234567"],
                                        [, , "50[1-9]\\d{7}", "\\d{10}", , , "5012345678"], "JP", 81, "010", "0", , , "0", , , , [
                                            [, "(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"],
                                            [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"],
                                            [, "(\\d{4})(\\d{4})", "$1-$2", ["0077"], "$1"],
                                            [, "(\\d{4})(\\d{2})(\\d{3,4})", "$1-$2-$3", ["0077"], "$1"],
                                            [, "(\\d{4})(\\d{2})(\\d{4})", "$1-$2-$3", ["0088"], "$1"],
                                            [, "(\\d{4})(\\d{3})(\\d{3,4})", "$1-$2-$3", ["00(?:37|66)"], "$1"],
                                            [, "(\\d{4})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["00(?:37|66)"], "$1"],
                                            [, "(\\d{4})(\\d{5})(\\d{5,6})", "$1-$2-$3", ["00(?:37|66)"], "$1"],
                                            [, "(\\d{4})(\\d{6})(\\d{6,7})", "$1-$2-$3", ["00(?:37|66)"], "$1"],
                                            [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[2579]0|80[1-9]"], "0$1"],
                                            [, "(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|5(?:76|97)|499|746|8(?:3[89]|63|47|51)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|5(?:76|97)9|499[2468]|7468|8(?:3(?:8[78]|96)|636|477|51[24])|9(?:496|802|9(?:1[23]|69))", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|5(?:769|979[2-69])|499[2468]|7468|8(?:3(?:8[78]|96[2457-9])|636[2-57-9]|477|51[24])|9(?:496|802|9(?:1[23]|69))"], "0$1"],
                                            [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["1(?:2[3-6]|3[3-9]|4[2-6]|5[2-8]|[68][2-7]|7[2-689]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:7[2-6]|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|[4-7]))", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:[3578]|20|4[04-9]|6[56]))|3(?:7(?:[2-5]|6[0-59])|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:[3578]|20|4[04-9]|6(?:5[25]|60)))|3(?:7(?:[2-5]|6[0-59])|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))"], "0$1"],
                                            [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5(?:[2-589]|39)|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93)", "1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:[68]|20|9[178])|64|7[347])|5(?:[2-589]|39[67])|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93[34])", "1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:[68]|20|9[178])|64|7[347])|5(?:[2-589]|39[67])|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93(?:31|4))"], "0$1"],
                                            [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["2(?:9[14-79]|74|[34]7|[56]9)|82|993"], "0$1"],
                                            [, "(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["3|4(?:2[09]|7[01])|6[1-9]"], "0$1"],
                                            [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[2479][1-9]"], "0$1"]
                                        ],
                                        [
                                            [, "(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"],
                                            [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"],
                                            [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[2579]0|80[1-9]"], "0$1"],
                                            [, "(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|5(?:76|97)|499|746|8(?:3[89]|63|47|51)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|5(?:76|97)9|499[2468]|7468|8(?:3(?:8[78]|96)|636|477|51[24])|9(?:496|802|9(?:1[23]|69))", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|5(?:769|979[2-69])|499[2468]|7468|8(?:3(?:8[78]|96[2457-9])|636[2-57-9]|477|51[24])|9(?:496|802|9(?:1[23]|69))"], "0$1"],
                                            [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["1(?:2[3-6]|3[3-9]|4[2-6]|5[2-8]|[68][2-7]|7[2-689]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:7[2-6]|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|[4-7]))", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:[3578]|20|4[04-9]|6[56]))|3(?:7(?:[2-5]|6[0-59])|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:5[78]|7[2-4]|[0468][2-9])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[89][2-8]|[4-7]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:[3578]|20|4[04-9]|6(?:5[25]|60)))|3(?:7(?:[2-5]|6[0-59])|[3-6][2-9]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))"], "0$1"],
                                            [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5(?:[2-589]|39)|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93)", "1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:[68]|20|9[178])|64|7[347])|5(?:[2-589]|39[67])|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93[34])", "1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:[68]|20|9[178])|64|7[347])|5(?:[2-589]|39[67])|60|8(?:[46-9]|3[279]|2[124589])|9(?:[235-8]|93(?:31|4))"], "0$1"],
                                            [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["2(?:9[14-79]|74|[34]7|[56]9)|82|993"], "0$1"],
                                            [, "(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["3|4(?:2[09]|7[01])|6[1-9]"], "0$1"],
                                            [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[2479][1-9]"], "0$1"]
                                        ],
                                        [, , "20\\d{8}", "\\d{10}", , , "2012345678"], , , [, , "00(?:37\\d{6,13}|66\\d{6,13}|777(?:[01]\\d{2}|5\\d{3}|8\\d{4})|882[1245]\\d{4})", "\\d{8,17}", , , "00777012"],
                                        [, , "570\\d{6}", "\\d{9}", , , "570123456"], 1, , [, , "NA", "NA"]
                                    ],
                                    KE: [, [, , "20\\d{6,7}|[4-9]\\d{6,9}", "\\d{7,10}"],
                                        [, , "20\\d{6,7}|4(?:[0136]\\d{7}|[245]\\d{5,7})|5(?:[08]\\d{7}|[1-79]\\d{5,7})|6(?:[01457-9]\\d{5,7}|[26]\\d{7})", "\\d{7,9}", , , "202012345"],
                                        [, , "7(?:[0-36]\\d|5[0-6]|[79][0-7]|8[0-25-9])\\d{6}", "\\d{9}", , , "712123456"],
                                        [, , "800[24-8]\\d{5,6}", "\\d{9,10}", , , "800223456"],
                                        [, , "900[02-9]\\d{5}", "\\d{9}", , , "900223456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "KE", 254, "000", "0", , , "005|0", , , , [
                                            [, "(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"],
                                            [, "(\\d{3})(\\d{6})", "$1 $2", ["7"], "0$1"],
                                            [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    KG: [, [, , "[235-8]\\d{8,9}", "\\d{5,10}"],
                                        [, , "(?:3(?:1(?:[256]\\d|3[1-9]|47)|2(?:22|3[0-479]|6[0-7])|4(?:22|5[6-9]|6\\d)|5(?:22|3[4-7]|59|6\\d)|6(?:22|5[35-7]|6\\d)|7(?:22|3[468]|4[1-9]|59|[67]\\d)|9(?:22|4[1-8]|6\\d))|6(?:09|12|2[2-4])\\d)\\d{5}", "\\d{5,10}", , , "312123456"],
                                        [, , "(?:20[0-35]|5[124-7]\\d|7[07]\\d)\\d{6}", "\\d{9}", , , "700123456"],
                                        [, , "800\\d{6,7}", "\\d{9,10}", , , "800123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "KG", 996, "00", "0", , , "0", , , , [
                                            [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[25-7]|31[25]"], "0$1"],
                                            [, "(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[36]|[2-9])"], "0$1"],
                                            [, "(\\d{3})(\\d{3})(\\d)(\\d{3})", "$1 $2 $3 $4", ["8"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    KH: [, [, , "[1-9]\\d{7,9}", "\\d{6,10}"],
                                        [, , "(?:2[3-6]|3[2-6]|4[2-4]|[5-7][2-5])(?:[237-9]|4[56]|5\\d|6\\d?)\\d{5}|23(?:4[234]|8\\d{2})\\d{4}", "\\d{6,9}", , , "23756789"],
                                        [, , "(?:1(?:[013-79]\\d|[28]\\d{1,2})|2[3-6]48|3(?:[18]\\d{2}|[2-6]48)|4[2-4]48|5[2-5]48|6(?:[016-9]\\d|[2-5]48)|7(?:[07-9]\\d|[16]\\d{2}|[2-5]48)|8(?:[013-79]\\d|8\\d{2})|9(?:6\\d{2}|7\\d{1,2}|[0-589]\\d))\\d{5}", "\\d{8,9}", , , "91234567"],
                                        [, , "1800(?:1\\d|2[019])\\d{4}", "\\d{10}", , , "1800123456"],
                                        [, , "1900(?:1\\d|2[09])\\d{4}", "\\d{10}", , , "1900123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "KH", 855, "00[14-9]", "0", , , "0", , , , [
                                            [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1\\d[1-9]|[2-9]"], "0$1"],
                                            [, "(1[89]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[89]0"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    KI: [, [, , "[2458]\\d{4}|3\\d{4,7}|7\\d{7}", "\\d{5,8}"],
                                        [, , "(?:[24]\\d|3[1-9]|50|8[0-5])\\d{3}", "\\d{5}", , , "31234"],
                                        [, , "7\\d{7}", "\\d{8}", , , "72012345"],
                                        [, , "NA", "NA"],
                                        [, , "3001\\d{4}", "\\d{5,8}", , , "30010000"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "KI", 686, "00", , , , "0", , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    KM: [, [, , "[379]\\d{6}", "\\d{7}"],
                                        [, , "7(?:6[0-37-9]|7[0-57-9])\\d{4}", "\\d{7}", , , "7712345"],
                                        [, , "3[234]\\d{5}", "\\d{7}", , , "3212345"],
                                        [, , "NA", "NA"],
                                        [, , "(?:39[01]|9[01]0)\\d{4}", "\\d{7}", , , "9001234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "KM", 269, "00", , , , , , , , [
                                            [, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    KN: [, [, , "[589]\\d{9}", "\\d{7}(?:\\d{3})?"],
                                        [, , "869(?:2(?:29|36)|302|4(?:6[015-9]|70))\\d{4}", "\\d{7}(?:\\d{3})?", , , "8692361234"],
                                        [, , "869(?:5(?:5[6-8]|6[5-7])|66\\d|76[02-7])\\d{4}", "\\d{7}(?:\\d{3})?", , , "8697652917"],
                                        [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"],
                                        [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"],
                                        [, , "NA", "NA"],
                                        [, , "5(?:00|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
                                        [, , "NA", "NA"], "KN", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "869", [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    KP: [, [, , "1\\d{9}|[28]\\d{7}", "\\d{6,8}|\\d{10}"],
                                        [, , "2\\d{7}|85\\d{6}", "\\d{6,8}", , , "21234567"],
                                        [, , "19[123]\\d{7}", "\\d{10}", , , "1921234567"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "KP", 850, "00|99", "0", , , "0", , , , [
                                            [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
                                            [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                                            [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "2(?:[0-24-9]\\d{2}|3(?:[0-79]\\d|8[02-9]))\\d{4}", "\\d{8}", , , "23821234"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    KR: [, [, , "007\\d{9,11}|[1-7]\\d{3,9}|8\\d{8}", "\\d{3,14}"],
                                        [, , "(?:2|3[1-3]|[46][1-4]|5[1-5])(?:1\\d{2,3}|[1-9]\\d{6,7})", "\\d{3,10}", , , "22123456"],
                                        [, , "1[0-26-9]\\d{7,8}", "\\d{9,10}", , , "1000000000"],
                                        [, , "(?:00798\\d{0,2}|80)\\d{7}", "\\d{9,14}", , , "801234567"],
                                        [, , "60[2-9]\\d{6}", "\\d{9}", , , "602345678"],
                                        [, , "NA", "NA"],
                                        [, , "50\\d{8}", "\\d{10}", , , "5012345678"],
                                        [, , "70\\d{8}", "\\d{10}", , , "7012345678"], "KR", 82, "00(?:[124-68]|3\\d{2}|7(?:[0-8]\\d|9[0-79]))", "0", , , "0(8[1-46-8]|85\\d{2})?", , , , [
                                            [, "(\\d{5})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["00798"], "$1", "0$CC-$1"],
                                            [, "(\\d{5})(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["00798"], "$1", "0$CC-$1"],
                                            [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["1(?:0|1[19]|[69]9|5[458])|[57]0", "1(?:0|1[19]|[69]9|5(?:44|59|8))|[57]0"], "0$1", "0$CC-$1"],
                                            [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["1(?:[01]|5[1-4]|6[2-8]|[7-9])|[68]0|[3-6][1-9][1-9]", "1(?:[01]|5(?:[1-3]|4[56])|6[2-8]|[7-9])|[68]0|[3-6][1-9][1-9]"], "0$1", "0$CC-$1"],
                                            [, "(\\d{3})(\\d)(\\d{4})", "$1-$2-$3", ["131", "1312"], "0$1", "0$CC-$1"],
                                            [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["131", "131[13-9]"], "0$1", "0$CC-$1"],
                                            [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["13[2-9]"], "0$1", "0$CC-$1"],
                                            [, "(\\d{2})(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3-$4", ["30"], "0$1", "0$CC-$1"],
                                            [, "(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2[1-9]"], "0$1", "0$CC-$1"],
                                            [, "(\\d)(\\d{3,4})", "$1-$2", ["21[0-46-9]"], "0$1", "0$CC-$1"],
                                            [, "(\\d{2})(\\d{3,4})", "$1-$2", ["[3-6][1-9]1", "[3-6][1-9]1(?:[0-46-9])"], "0$1", "0$CC-$1"],
                                            [, "(\\d{4})(\\d{4})", "$1-$2", ["1(?:5[46-9]|6[04678]|8[03579])", "1(?:5(?:44|66|77|88|99)|6(?:00|44|6[16]|70|88)|8(?:00|33|55|77|99))"], "$1", "0$CC-$1"]
                                        ],
                                        [
                                            [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["1(?:0|1[19]|[69]9|5[458])|[57]0", "1(?:0|1[19]|[69]9|5(?:44|59|8))|[57]0"], "0$1", "0$CC-$1"],
                                            [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["1(?:[01]|5[1-4]|6[2-8]|[7-9])|[68]0|[3-6][1-9][1-9]", "1(?:[01]|5(?:[1-3]|4[56])|6[2-8]|[7-9])|[68]0|[3-6][1-9][1-9]"], "0$1", "0$CC-$1"],
                                            [, "(\\d{3})(\\d)(\\d{4})", "$1-$2-$3", ["131", "1312"], "0$1", "0$CC-$1"],
                                            [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["131", "131[13-9]"], "0$1", "0$CC-$1"],
                                            [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["13[2-9]"], "0$1", "0$CC-$1"],
                                            [, "(\\d{2})(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3-$4", ["30"], "0$1", "0$CC-$1"],
                                            [, "(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2[1-9]"], "0$1", "0$CC-$1"],
                                            [, "(\\d)(\\d{3,4})", "$1-$2", ["21[0-46-9]"], "0$1", "0$CC-$1"],
                                            [, "(\\d{2})(\\d{3,4})", "$1-$2", ["[3-6][1-9]1", "[3-6][1-9]1(?:[0-46-9])"], "0$1", "0$CC-$1"],
                                            [, "(\\d{4})(\\d{4})", "$1-$2", ["1(?:5[46-9]|6[04678]|8[03579])", "1(?:5(?:44|66|77|88|99)|6(?:00|44|6[16]|70|88)|8(?:00|33|55|77|99))"], "$1", "0$CC-$1"]
                                        ],
                                        [, , "15\\d{7,8}", "\\d{9,10}", , , "1523456789"], , , [, , "00798\\d{7,9}", "\\d{12,14}", , , "007981234567"],
                                        [, , "1(?:5(?:44|66|77|88|99)|6(?:00|44|6[16]|70|88)|8(?:00|33|55|77|99))\\d{4}", "\\d{8}", , , "15441234"], , , [, , "NA", "NA"]
                                    ],
                                    KW: [, [, , "[12569]\\d{6,7}", "\\d{7,8}"],
                                        [, , "(?:18\\d|2(?:[23]\\d{2}|4(?:[1-35-9]\\d|44)|5(?:0[034]|[2-46]\\d|5[1-3]|7[1-7])))\\d{4}", "\\d{7,8}", , , "22345678"],
                                        [, , "(?:5(?:[05]\\d{2}|1[0-7]\\d|2(?:22|5[25])|66\\d)|6(?:0[034679]\\d|222|5[015-9]\\d|6\\d{2}|7[067]\\d|9[0369]\\d)|9(?:0[09]\\d|22\\d|4[01479]\\d|55\\d|6[0679]\\d|[79]\\d{2}|8[057-9]\\d))\\d{4}", "\\d{8}", , , "50012345"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "KW", 965, "00", , , , , , , , [
                                            [, "(\\d{4})(\\d{3,4})", "$1 $2", ["[16]|2(?:[0-35-9]|4[0-35-9])|9[024-9]|52[25]"]],
                                            [, "(\\d{3})(\\d{5})", "$1 $2", ["244|5(?:[015]|66)"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    KY: [, [, , "[3589]\\d{9}", "\\d{7}(?:\\d{3})?"],
                                        [, , "345(?:2(?:22|44)|444|6(?:23|38|40)|7(?:4[35-79]|6[6-9]|77)|8(?:00|1[45]|25|[48]8)|9(?:14|4[035-9]))\\d{4}", "\\d{7}(?:\\d{3})?", , , "3452221234"],
                                        [, , "345(?:32[1-9]|5(?:1[67]|2[5-7]|4[6-8]|76)|9(?:1[67]|2[2-9]|3[689]))\\d{4}", "\\d{7}(?:\\d{3})?", , , "3453231234"],
                                        [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002345678"],
                                        [, , "900[2-9]\\d{6}|345976\\d{4}", "\\d{10}", , , "9002345678"],
                                        [, , "NA", "NA"],
                                        [, , "5(?:00|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
                                        [, , "NA", "NA"], "KY", 1, "011", "1", , , "1", , , , , , [, , "345849\\d{4}", "\\d{10}", , , "3458491234"], , "345", [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    KZ: [, [, , "(?:33\\d|7\\d{2}|80[09])\\d{7}", "\\d{10}"],
                                        [, , "33622\\d{5}|7(?:1(?:0(?:[23]\\d|4[023]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[1-79]|4[0-35-9]|59)|4(?:2\\d|3[013-79]|4[0-8]|5[1-79])|5(?:2\\d|3[1-8]|4[1-7]|59)|6(?:[234]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[234]\\d|5[139])|4(?:2\\d|3[1235-9]|59)|5(?:[23]\\d|4[01246-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[237]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59)))\\d{5}", "\\d{10}", , , "7123456789"],
                                        [, , "7(?:0[012578]|47|6[02-4]|7[15-8]|85)\\d{7}", "\\d{10}", , , "7710009998"],
                                        [, , "800\\d{7}", "\\d{10}", , , "8001234567"],
                                        [, , "809\\d{7}", "\\d{10}", , , "8091234567"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "751\\d{7}", "\\d{10}", , , "7511234567"], "KZ", 7, "810", "8", , , "8", , "8~10", , , , [, , "NA", "NA"], , , [, , "751\\d{7}", "\\d{10}", , , "7511234567"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    LA: [, [, , "[2-8]\\d{7,9}", "\\d{6,10}"],
                                        [, , "(?:2[13]|3(?:0\\d|[14])|[5-7][14]|41|8[1468])\\d{6}", "\\d{6,9}", , , "21212862"],
                                        [, , "20(?:2[2389]|5[4-689]|7[6-8]|9[15-9])\\d{6}", "\\d{10}", , , "2023123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "LA", 856, "00", "0", , , "0", , , , [
                                            [, "(20)(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["20"], "0$1"],
                                            [, "([2-8]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"],
                                            [, "(30)(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    LB: [, [, , "[13-9]\\d{6,7}", "\\d{7,8}"],
                                        [, , "(?:[14-6]\\d{2}|7(?:[2-57]\\d|62|8[0-7]|9[04-9])|8[02-9]\\d|9\\d{2})\\d{4}", "\\d{7}", , , "1123456"],
                                        [, , "(?:3\\d|7(?:[01]\\d|6[013-9]|8[89]|9[1-3])|81\\d)\\d{5}", "\\d{7,8}", , , "71123456"],
                                        [, , "NA", "NA"],
                                        [, , "9[01]\\d{6}", "\\d{8}", , , "90123456"],
                                        [, , "80\\d{6}", "\\d{8}", , , "80123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "LB", 961, "00", "0", , , "0", , , , [
                                            [, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-6]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]|9"], "0$1"],
                                            [, "([7-9]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[89][01]|7(?:[01]|6[013-9]|8[89]|9[1-3])"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    LC: [, [, , "[5789]\\d{9}", "\\d{7}(?:\\d{3})?"],
                                        [, , "758(?:4(?:30|5[0-9]|6[2-9]|8[0-2])|57[0-2]|638)\\d{4}", "\\d{7}(?:\\d{3})?", , , "7584305678"],
                                        [, , "758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2[0-8]))\\d{4}", "\\d{7}(?:\\d{3})?", , , "7582845678"],
                                        [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"],
                                        [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"],
                                        [, , "NA", "NA"],
                                        [, , "5(?:00|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
                                        [, , "NA", "NA"], "LC", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "758", [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    LI: [, [, , "6\\d{8}|[23789]\\d{6}", "\\d{7,9}"],
                                        [, , "(?:2(?:01|1[27]|3\\d|6[02-578]|96)|3(?:7[0135-7]|8[048]|9[0269]))\\d{4}", "\\d{7}", , , "2345678"],
                                        [, , "6(?:51[01]|6(?:0[0-6]|2[016-9]|39))\\d{5}|7(?:[37-9]\\d|42|56)\\d{4}", "\\d{7,9}", , , "660234567"],
                                        [, , "80(?:02[28]|9\\d{2})\\d{2}", "\\d{7}", , , "8002222"],
                                        [, , "90(?:02[258]|1(?:23|3[14])|66[136])\\d{2}", "\\d{7}", , , "9002222"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "LI", 423, "00", "0", , , "0", , , , [
                                            [, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[23789]"]],
                                            [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[56]"]],
                                            [, "(69)(7\\d{2})(\\d{4})", "$1 $2 $3", ["697"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "870(?:28|87)\\d{2}", "\\d{7}", , , "8702812"], , , [, , "697(?:42|56|[7-9]\\d)\\d{4}", "\\d{9}", , , "697861234"]
                                    ],
                                    LK: [, [, , "[1-9]\\d{8}", "\\d{7,9}"],
                                        [, , "(?:[189]1|2[13-7]|3[1-8]|4[157]|5[12457]|6[35-7])[2-57]\\d{6}", "\\d{7,9}", , , "112345678"],
                                        [, , "7[0125-8]\\d{7}", "\\d{9}", , , "712345678"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "LK", 94, "00", "0", , , "0", , , , [
                                            [, "(\\d{2})(\\d{1})(\\d{6})", "$1 $2 $3", ["[1-689]"], "0$1"],
                                            [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    LR: [, [, , "2\\d{7,8}|[37-9]\\d{8}|4\\d{6}|5\\d{6,8}", "\\d{7,9}"],
                                        [, , "2\\d{7}", "\\d{8}", , , "21234567"],
                                        [, , "(?:330\\d|4[67]|5\\d|77\\d{2}|88\\d{2}|994\\d)\\d{5}|(?:20\\d{3}|33(?:0\\d{2}|2(?:02|5\\d))|555\\d{2}|77[0567]\\d{2}|88[068]\\d{2}|994\\d{2})\\d{4}", "\\d{7,9}", , , "770123456"],
                                        [, , "NA", "NA"],
                                        [, , "90[03]\\d{6}", "\\d{9}", , , "900123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "332(?:0[02]|5\\d)\\d{4}", "\\d{9}", , , "332001234"], "LR", 231, "00", "0", , , "0", , , , [
                                            [, "(2\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                                            [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2579]"], "0$1"],
                                            [, "([4-6])(\\d{3})(\\d{3})", "$1 $2 $3", ["[4-6]"], "0$1"],
                                            [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[38]"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    LS: [, [, , "[2568]\\d{7}", "\\d{8}"],
                                        [, , "2\\d{7}", "\\d{8}", , , "22123456"],
                                        [, , "[56]\\d{7}", "\\d{8}", , , "50123456"],
                                        [, , "800[256]\\d{4}", "\\d{8}", , , "80021234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "LS", 266, "00", , , , , , , , [
                                            [, "(\\d{4})(\\d{4})", "$1 $2"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    LT: [, [, , "[3-9]\\d{7}", "\\d{8}"],
                                        [, , "(?:3[1478]|4[124-6]|52)\\d{6}", "\\d{8}", , , "31234567"],
                                        [, , "6\\d{7}", "\\d{8}", , , "61234567"],
                                        [, , "800\\d{5}", "\\d{8}", , , "80012345"],
                                        [, , "9(?:0[0239]|10)\\d{5}", "\\d{8}", , , "90012345"],
                                        [, , "808\\d{5}", "\\d{8}", , , "80812345"],
                                        [, , "700\\d{5}", "\\d{8}", , , "70012345"],
                                        [, , "NA", "NA"], "LT", 370, "00", "8", , , "[08]", , , , [
                                            [, "([34]\\d)(\\d{6})", "$1 $2", ["37|4(?:1|5[45]|6[2-4])"], "(8-$1)", , 1],
                                            [, "([3-6]\\d{2})(\\d{5})", "$1 $2", ["3[148]|4(?:[24]|6[09])|528|6"], "(8-$1)", , 1],
                                            [, "([7-9]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", , 1],
                                            [, "(5)(2\\d{2})(\\d{4})", "$1 $2 $3", ["52[0-79]"], "(8-$1)", , 1]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "70[67]\\d{5}", "\\d{8}", , , "70712345"], , , [, , "NA", "NA"]
                                    ],
                                    LU: [, [, , "[24-9]\\d{3,10}|3(?:[0-46-9]\\d{2,9}|5[013-9]\\d{1,8})", "\\d{4,11}"],
                                        [, , "(?:2[2-9]\\d{2,9}|(?:[3457]\\d{2}|8(?:0[2-9]|[13-9]\\d)|9(?:0[89]|[2-579]\\d))\\d{1,8})", "\\d{4,11}", , , "27123456"],
                                        [, , "6[2679][18]\\d{6}", "\\d{9}", , , "628123456"],
                                        [, , "800\\d{5}", "\\d{8}", , , "80012345"],
                                        [, , "90[015]\\d{5}", "\\d{8}", , , "90012345"],
                                        [, , "801\\d{5}", "\\d{8}", , , "80112345"],
                                        [, , "70\\d{6}", "\\d{8}", , , "70123456"],
                                        [, , "20(?:1\\d{5}|[2-689]\\d{1,7})", "\\d{4,10}", , , "20201234"], "LU", 352, "00", , , , "(15(?:0[06]|1[12]|35|4[04]|55|6[26]|77|88|99)\\d)", , , , [
                                            [, "(\\d{2})(\\d{3})", "$1 $2", ["[2-5]|7[1-9]|[89](?:[1-9]|0[2-9])"], , "$CC $1"],
                                            [, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-5]|7[1-9]|[89](?:[1-9]|0[2-9])"], , "$CC $1"],
                                            [, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20"], , "$CC $1"],
                                            [, "(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"], , "$CC $1"],
                                            [, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"], , "$CC $1"],
                                            [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"], , "$CC $1"],
                                            [, "(\\d{2})(\\d{2})(\\d{2})(\\d{1,4})", "$1 $2 $3 $4", ["2(?:[12589]|4[12])|[3-5]|7[1-9]|8(?:[1-9]|0[2-9])|9(?:[1-9]|0[2-46-9])"], , "$CC $1"],
                                            [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["70|80[01]|90[015]"], , "$CC $1"],
                                            [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"], , "$CC $1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    LV: [, [, , "[2689]\\d{7}", "\\d{8}"],
                                        [, , "6\\d{7}", "\\d{8}", , , "63123456"],
                                        [, , "2\\d{7}", "\\d{8}", , , "21234567"],
                                        [, , "80\\d{6}", "\\d{8}", , , "80123456"],
                                        [, , "90\\d{6}", "\\d{8}", , , "90123456"],
                                        [, , "81\\d{6}", "\\d{8}", , , "81123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "LV", 371, "00", , , , , , , , [
                                            [, "([2689]\\d)(\\d{3})(\\d{3})", "$1 $2 $3"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    LY: [, [, , "[25679]\\d{8}", "\\d{7,9}"],
                                        [, , "(?:2[1345]|5[1347]|6[123479]|71)\\d{7}", "\\d{7,9}", , , "212345678"],
                                        [, , "9[1-6]\\d{7}", "\\d{9}", , , "912345678"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "LY", 218, "00", "0", , , "0", , , , [
                                            [, "([25679]\\d)(\\d{7})", "$1-$2", , "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    MA: [, [, , "[5-9]\\d{8}", "\\d{9}"],
                                        [, , "5(?:2(?:(?:[015-7]\\d|2[02-9]|3[2-57]|4[2-8]|8[235-7])\\d|9(?:0\\d|[89]0))|3(?:(?:[0-4]\\d|[57][2-9]|6[2-8]|9[3-9])\\d|8(?:0\\d|[89]0))|(?:4[067]|5[03])\\d{2})\\d{4}", "\\d{9}", , , "520123456"],
                                        [, , "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[07][07]|6[12]))\\d{6}", "\\d{9}", , , "650123456"],
                                        [, , "80\\d{7}", "\\d{9}", , , "801234567"],
                                        [, , "89\\d{7}", "\\d{9}", , , "891234567"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "5924[01]\\d{4}", "\\d{9}", , , "592401234"], "MA", 212, "00", "0", , , "0", , , , [
                                            [, "([5-7]\\d{2})(\\d{6})", "$1-$2", ["5(?:2[015-7]|3[0-4])|[67]"], "0$1"],
                                            [, "([58]\\d{3})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|92)|892", "5(?:2(?:[2-48]|90)|3(?:[5-79]|80)|924)|892"], "0$1"],
                                            [, "(5\\d{4})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29|38)[89]"], "0$1"],
                                            [, "([5]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:4[067]|5[03])"], "0$1"],
                                            [, "(8[09])(\\d{7})", "$1-$2", ["8(?:0|9[013-9])"], "0$1"]
                                        ], , [, , "NA", "NA"], 1, , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    MC: [, [, , "[4689]\\d{7,8}", "\\d{8,9}"],
                                        [, , "870\\d{5}|9[2-47-9]\\d{6}", "\\d{8}", , , "99123456"],
                                        [, , "6\\d{8}|4(?:4\\d|5[1-9])\\d{5}", "\\d{8,9}", , , "612345678"],
                                        [, , "90\\d{6}", "\\d{8}", , , "90123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "MC", 377, "00", "0", , , "0", , , , [
                                            [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "$1"],
                                            [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"],
                                            [, "(6)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"],
                                            [, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["8"], "$1"]
                                        ], , [, , "NA", "NA"], , , [, , "8\\d{7}", "\\d{8}"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    MD: [, [, , "[235-9]\\d{7}", "\\d{8}"],
                                        [, , "(?:2(?:1[0569]|2\\d|3[015-7]|4[1-46-9]|5[0-24689]|6[2-589]|7[1-37]|9[1347-9])|5(?:33|5[257]))\\d{5}", "\\d{8}", , , "22212345"],
                                        [, , "(?:562\\d|6(?:[089]\\d{2}|[12][01]\\d|7(?:[1-6]\\d|7[0-4]))|7(?:6[07]|7[457-9]|[89]\\d)\\d)\\d{4}", "\\d{8}", , , "62112345"],
                                        [, , "800\\d{5}", "\\d{8}", , , "80012345"],
                                        [, , "90[056]\\d{5}", "\\d{8}", , , "90012345"],
                                        [, , "808\\d{5}", "\\d{8}", , , "80812345"],
                                        [, , "NA", "NA"],
                                        [, , "3[08]\\d{6}", "\\d{8}", , , "30123456"], "MD", 373, "00", "0", , , "0", , , , [
                                            [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"],
                                            [, "([25-7]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["2[13-79]|[5-7]"], "0$1"],
                                            [, "([89]\\d{2})(\\d{5})", "$1 $2", ["[89]"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "8(?:03|14)\\d{5}", "\\d{8}", , , "80312345"], , , [, , "NA", "NA"]
                                    ],
                                    ME: [, [, , "[2-9]\\d{7,8}", "\\d{6,9}"],
                                        [, , "(?:20[2-8]|3(?:0[2-7]|[12][35-7]|3[4-7])|4(?:0[2367]|1[267])|5(?:0[467]|1[267]|2[367]))\\d{5}", "\\d{6,8}", , , "30234567"],
                                        [, , "6(?:00\\d|3[24]\\d|61\\d|7(?:[0-8]\\d|9(?:[3-9]|[0-2]\\d))|[89]\\d{2})\\d{4}", "\\d{8,9}", , , "67622901"],
                                        [, , "80\\d{6}", "\\d{8}", , , "80080002"],
                                        [, , "(?:9(?:4[1568]|5[178]))\\d{5}", "\\d{8}", , , "94515151"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "78[1-9]\\d{5}", "\\d{8}", , , "78108780"], "ME", 382, "00", "0", , , "0", , , , [
                                            [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]|6[036-9]", "[2-57-9]|6(?:[03689]|7(?:[0-8]|9[3-9]))"], "0$1"],
                                            [, "(67)(9)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["679", "679[0-2]"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "77\\d{6}", "\\d{8}", , , "77273012"], , , [, , "NA", "NA"]
                                    ],
                                    MF: [, [, , "[56]\\d{8}", "\\d{9}"],
                                        [, , "590(?:[02][79]|13|5[0-268]|[78]7)\\d{4}", "\\d{9}", , , "590271234"],
                                        [, , "690(?:0[0-7]|[1-9]\\d)\\d{4}", "\\d{9}", , , "690301234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "MF", 590, "00", "0", , , "0", , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    MG: [, [, , "[23]\\d{8}", "\\d{7,9}"],
                                        [, , "20(?:2\\d{2}|4[47]\\d|5[3467]\\d|6[279]\\d|7(?:2[29]|[35]\\d)|8[268]\\d|9[245]\\d)\\d{4}", "\\d{7,9}", , , "202123456"],
                                        [, , "3[2-49]\\d{7}", "\\d{9}", , , "321234567"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "22\\d{7}", "\\d{9}", , , "221234567"], "MG", 261, "00", "0", , , "0", , , , [
                                            [, "([23]\\d)(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", , "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    MH: [, [, , "[2-6]\\d{6}", "\\d{7}"],
                                        [, , "(?:247|528|625)\\d{4}", "\\d{7}", , , "2471234"],
                                        [, , "(?:235|329|45[56]|545)\\d{4}", "\\d{7}", , , "2351234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "635\\d{4}", "\\d{7}", , , "6351234"], "MH", 692, "011", "1", , , "1", , , , [
                                            [, "(\\d{3})(\\d{4})", "$1-$2"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    MK: [, [, , "[2-578]\\d{7}", "\\d{6,8}"],
                                        [, , "(?:2(?:[23]\\d|5[124578]|6[01])|3(?:1[3-6]|[23][2-6]|4[2356])|4(?:[23][2-6]|4[3-6]|5[256]|6[25-8]|7[24-6]|8[4-6]))\\d{5}", "\\d{6,8}", , , "22212345"],
                                        [, , "7(?:[0-25-8]\\d{2}|32\\d|421)\\d{4}", "\\d{6,8}", , , "72345678"],
                                        [, , "800\\d{5}", "\\d{6,8}", , , "80012345"],
                                        [, , "5[02-9]\\d{6}", "\\d{6,8}", , , "50012345"],
                                        [, , "8(?:0[1-9]|[1-9]\\d)\\d{5}", "\\d{6,8}", , , "80123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "MK", 389, "00", "0", , , "0", , , , [
                                            [, "(2)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                                            [, "([347]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"],
                                            [, "([58]\\d{2})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    ML: [, [, , "[246-9]\\d{7}", "\\d{8}"],
                                        [, , "(?:2(?:0(?:2\\d|7[0-8])|1(?:2[5-7]|[3-689]\\d))|44[1239]\\d)\\d{4}", "\\d{8}", , , "20212345"],
                                        [, , "(?:2(?:079|17\\d)|[679]\\d{3}|8[239]\\d{2})\\d{4}", "\\d{8}", , , "65012345"],
                                        [, , "80\\d{6}", "\\d{8}", , , "80012345"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "ML", 223, "00", , , , , , , , [
                                            [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[246-9]"]],
                                            [, "(\\d{4})", "$1", ["67|74"]]
                                        ],
                                        [
                                            [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[246-9]"]]
                                        ],
                                        [, , "NA", "NA"], , , [, , "80\\d{6}", "\\d{8}", , , "80012345"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    MM: [, [, , "[14578]\\d{5,7}|[26]\\d{5,8}|9(?:2\\d{0,2}|[58]|3\\d|4\\d{1,2}|6\\d?|[79]\\d{0,2})\\d{6}", "\\d{5,10}"],
                                        [, , "1(?:2\\d{1,2}|[3-5]\\d|6\\d?|[89][0-6]\\d)\\d{4}|2(?:2(?:000\\d{3}|\\d{4})|3\\d{4}|4(?:0\\d{5}|\\d{4})|5(?:1\\d{3,6}|[02-9]\\d{3,5})|[6-9]\\d{4})|4(?:2[245-8]|[346][2-6]|5[3-5])\\d{4}|5(?:2(?:20?|[3-8])|3[2-68]|4(?:21?|[4-8])|5[23]|6[2-4]|7[2-8]|8[24-7]|9[2-7])\\d{4}|6(?:0[23]|1[2356]|[24][2-6]|3[24-6]|5[2-4]|6[2-8]|7(?:[2367]|4\\d|5\\d?|8[145]\\d)|8[245]|9[24])\\d{4}|7(?:[04][24-8]|[15][2-7]|22|3[2-4])\\d{4}|8(?:1(?:2\\d{1,2}|[3-689]\\d)|2(?:2\\d|3(?:\\d|20)|[4-8]\\d)|3[24]\\d|4[24-7]\\d|5[245]\\d|6[23]\\d)\\d{3}", "\\d{5,9}", , , "1234567"],
                                        [, , "17[01]\\d{4}|9(?:2(?:[0-4]|5\\d{2}|6[0-5]\\d)|3[0-36]\\d|4(?:0[0-4]\\d|[1379]\\d|2\\d{2}|4[0-589]\\d|5\\d{2}|88)|5[0-6]|61?\\d|7(?:3\\d|[789]\\d{2})|8\\d|9(?:1\\d|[67]\\d{2}|[089]))\\d{5}", "\\d{7,10}", , , "92123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "1333\\d{4}", "\\d{8}", , , "13331234"], "MM", 95, "00", "0", , , "0", , , , [
                                            [, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1|2[245]"], "0$1"],
                                            [, "(2)(\\d{4})(\\d{4})", "$1 $2 $3", ["251"], "0$1"],
                                            [, "(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"],
                                            [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["67|81"], "0$1"],
                                            [, "(\\d{2})(\\d{2})(\\d{3,4})", "$1 $2 $3", ["[4-8]"], "0$1"],
                                            [, "(9)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"],
                                            [, "(9)([34]\\d{4})(\\d{4})", "$1 $2 $3", ["9(?:3[0-36]|4[0-57-9])"], "0$1"],
                                            [, "(9)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92[56]"], "0$1"],
                                            [, "(9)(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["93"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    MN: [, [, , "[12]\\d{7,9}|[57-9]\\d{7}", "\\d{6,10}"],
                                        [, , "[12](?:1\\d|2(?:[1-3]\\d?|7\\d)|3[2-8]\\d{1,2}|4[2-68]\\d{1,2}|5[1-4689]\\d{1,2})\\d{5}|5[0568]\\d{6}", "\\d{6,10}", , , "50123456"],
                                        [, , "(?:8(?:[05689]\\d|3[01])|9[013-9]\\d)\\d{5}", "\\d{8}", , , "88123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "7[05-8]\\d{6}", "\\d{8}", , , "75123456"], "MN", 976, "001", "0", , , "0", , , , [
                                            [, "([12]\\d)(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"],
                                            [, "([12]2\\d)(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"],
                                            [, "([12]\\d{3})(\\d{5})", "$1 $2", ["[12](?:27|[3-5])", "[12](?:27|[3-5]\\d)2"], "0$1"],
                                            [, "(\\d{4})(\\d{4})", "$1 $2", ["[57-9]"], "$1"],
                                            [, "([12]\\d{4})(\\d{4,5})", "$1 $2", ["[12](?:27|[3-5])", "[12](?:27|[3-5]\\d)[4-9]"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    MO: [, [, , "[268]\\d{7}", "\\d{8}"],
                                        [, , "(?:28[2-57-9]|8[2-57-9]\\d)\\d{5}", "\\d{8}", , , "28212345"],
                                        [, , "6(?:[2356]\\d|8[158])\\d{5}", "\\d{8}", , , "66123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "MO", 853, "00", , , , , , , , [
                                            [, "([268]\\d{3})(\\d{4})", "$1 $2"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    MP: [, [, , "[5689]\\d{9}", "\\d{7}(?:\\d{3})?"],
                                        [, , "670(?:2(?:3[3-7]|56|8[5-8])|32[1238]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[589]|8[3-9]8|989)\\d{4}", "\\d{7}(?:\\d{3})?", , , "6702345678"],
                                        [, , "670(?:2(?:3[3-7]|56|8[5-8])|32[1238]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[589]|8[3-9]8|989)\\d{4}", "\\d{7}(?:\\d{3})?", , , "6702345678"],
                                        [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"],
                                        [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"],
                                        [, , "NA", "NA"],
                                        [, , "5(?:00|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
                                        [, , "NA", "NA"], "MP", 1, "011", "1", , , "1", , , 1, , , [, , "NA", "NA"], , "670", [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    MQ: [, [, , "[56]\\d{8}", "\\d{9}"],
                                        [, , "596(?:0[2-5]|[12]0|3[05-9]|4[024-8]|[5-7]\\d|89|9[4-8])\\d{4}", "\\d{9}", , , "596301234"],
                                        [, , "696(?:[0-479]\\d|5[01]|8[0-689])\\d{4}", "\\d{9}", , , "696201234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "MQ", 596, "00", "0", , , "0", , , , [
                                            [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    MR: [, [, , "[2-48]\\d{7}", "\\d{8}"],
                                        [, , "25[08]\\d{5}|35\\d{6}|45[1-7]\\d{5}", "\\d{8}", , , "35123456"],
                                        [, , "[234][0-46-9]\\d{6}", "\\d{8}", , , "22123456"],
                                        [, , "800\\d{5}", "\\d{8}", , , "80012345"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "MR", 222, "00", , , , , , , , [
                                            [, "([2-48]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    MS: [, [, , "[5689]\\d{9}", "\\d{7}(?:\\d{3})?"],
                                        [, , "664491\\d{4}", "\\d{7}(?:\\d{3})?", , , "6644912345"],
                                        [, , "66449[2-6]\\d{4}", "\\d{10}", , , "6644923456"],
                                        [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"],
                                        [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"],
                                        [, , "NA", "NA"],
                                        [, , "5(?:00|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
                                        [, , "NA", "NA"], "MS", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "664", [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    MT: [, [, , "[2357-9]\\d{7}", "\\d{8}"],
                                        [, , "2(?:0(?:1[0-6]|3[1-4]|[69]\\d)|[1-357]\\d{2})\\d{4}", "\\d{8}", , , "21001234"],
                                        [, , "(?:7(?:210|[79]\\d{2})|9(?:2(?:1[01]|31)|696|8(?:1[1-3]|89|97)|9\\d{2}))\\d{4}", "\\d{8}", , , "96961234"],
                                        [, , "800[3467]\\d{4}", "\\d{8}", , , "80071234"],
                                        [, , "5(?:0(?:0(?:37|43)|6\\d{2}|70\\d|9[0168]\\d)|[12]\\d0[1-5])\\d{3}", "\\d{8}", , , "50037123"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "3550\\d{4}", "\\d{8}", , , "35501234"], "MT", 356, "00", , , , , , , , [
                                            [, "(\\d{4})(\\d{4})", "$1 $2"]
                                        ], , [, , "7117\\d{4}", "\\d{8}", , , "71171234"], , , [, , "NA", "NA"],
                                        [, , "501\\d{5}", "\\d{8}", , , "50112345"], , , [, , "NA", "NA"]
                                    ],
                                    MU: [, [, , "[2-9]\\d{6,7}", "\\d{7,8}"],
                                        [, , "(?:2(?:[03478]\\d|1[0-7]|6[1-69])|4(?:[013568]\\d|2[4-7])|5(?:44\\d|471)|6\\d{2}|8(?:14|3[129]))\\d{4}", "\\d{7,8}", , , "2012345"],
                                        [, , "5(?:2[59]\\d|4(?:2[1-389]|4\\d|7[1-9]|9\\d)|7\\d{2}|8(?:[0-2568]\\d|7[15-8])|9[0-8]\\d)\\d{4}", "\\d{8}", , , "52512345"],
                                        [, , "80[012]\\d{4}", "\\d{7}", , , "8001234"],
                                        [, , "30\\d{5}", "\\d{7}", , , "3012345"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "3(?:20|9\\d)\\d{4}", "\\d{7}", , , "3201234"], "MU", 230, "0(?:0|[2-7]0|33)", , , , , , "020", , [
                                            [, "([2-46-9]\\d{2})(\\d{4})", "$1 $2", ["[2-46-9]"]],
                                            [, "(5\\d{3})(\\d{4})", "$1 $2", ["5"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    MV: [, [, , "[3467]\\d{6}|9(?:00\\d{7}|\\d{6})", "\\d{7,10}"],
                                        [, , "(?:3(?:0[01]|3[0-59])|6(?:[567][02468]|8[024689]|90))\\d{4}", "\\d{7}", , , "6701234"],
                                        [, , "(?:46[46]|7[3-9]\\d|9[15-9]\\d)\\d{4}", "\\d{7}", , , "7712345"],
                                        [, , "NA", "NA"],
                                        [, , "900\\d{7}", "\\d{10}", , , "9001234567"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "MV", 960, "0(?:0|19)", , , , , , "00", , [
                                            [, "(\\d{3})(\\d{4})", "$1-$2", ["[3467]|9(?:[1-9]|0[1-9])"]],
                                            [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["900"]]
                                        ], , [, , "781\\d{4}", "\\d{7}", , , "7812345"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    MW: [, [, , "(?:1(?:\\d{2})?|[2789]\\d{2})\\d{6}", "\\d{7,9}"],
                                        [, , "(?:1[2-9]|21\\d{2})\\d{5}", "\\d{7,9}", , , "1234567"],
                                        [, , "(?:111|77\\d|88\\d|99\\d)\\d{6}", "\\d{9}", , , "991234567"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "MW", 265, "00", "0", , , "0", , , , [
                                            [, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1"], "0$1"],
                                            [, "(2\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
                                            [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1789]"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    MX: [, [, , "[1-9]\\d{9,10}", "\\d{7,11}"],
                                        [, , "(?:33|55|81)\\d{8}|(?:2(?:0[01]|2[2-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-6][1-9]|[37][1-8]|8[1-35-9]|9[2-689])|5(?:88|9[1-79])|6(?:1[2-68]|[234][1-9]|5[1-3689]|6[12457-9]|7[1-7]|8[67]|9[4-8])|7(?:[13467][1-9]|2[1-8]|5[13-9]|8[1-69]|9[17])|8(?:2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7}", "\\d{7,10}", , , "2221234567"],
                                        [, , "1(?:(?:33|55|81)\\d{8}|(?:2(?:2[2-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-6][1-9]|[37][1-8]|8[1-35-9]|9[2-689])|5(?:88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[12457-9]|7[1-7]|8[67]|9[4-8])|7(?:[13467][1-9]|2[1-8]|5[13-9]|8[1-69]|9[17])|8(?:2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7})", "\\d{11}", , , "12221234567"],
                                        [, , "8(?:00|88)\\d{7}", "\\d{10}", , , "8001234567"],
                                        [, , "900\\d{7}", "\\d{10}", , , "9001234567"],
                                        [, , "300\\d{7}", "\\d{10}", , , "3001234567"],
                                        [, , "500\\d{7}", "\\d{10}", , , "5001234567"],
                                        [, , "NA", "NA"], "MX", 52, "0[09]", "01", , , "0[12]|04[45](\\d{10})", "1$1", , , [
                                            [, "([358]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["33|55|81"], "01 $1", , 1],
                                            [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2467]|3[0-2457-9]|5[089]|8[02-9]|9[0-35-9]"], "01 $1", , 1],
                                            [, "(1)([358]\\d)(\\d{4})(\\d{4})", "044 $2 $3 $4", ["1(?:33|55|81)"], "$1", , 1],
                                            [, "(1)(\\d{3})(\\d{3})(\\d{4})", "044 $2 $3 $4", ["1(?:[2467]|3[0-2457-9]|5[089]|8[2-9]|9[1-35-9])"], "$1", , 1]
                                        ],
                                        [
                                            [, "([358]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["33|55|81"], "01 $1", , 1],
                                            [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2467]|3[0-2457-9]|5[089]|8[02-9]|9[0-35-9]"], "01 $1", , 1],
                                            [, "(1)([358]\\d)(\\d{4})(\\d{4})", "$1 $2 $3 $4", ["1(?:33|55|81)"]],
                                            [, "(1)(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1(?:[2467]|3[0-2457-9]|5[089]|8[2-9]|9[1-35-9])"]]
                                        ],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], 1, , [, , "NA", "NA"]
                                    ],
                                    MY: [, [, , "[13-9]\\d{7,9}", "\\d{6,10}"],
                                        [, , "(?:3[2-9]\\d|[4-9][2-9])\\d{6}", "\\d{6,9}", , , "323456789"],
                                        [, , "1(?:1[1-5]\\d{2}|[02-4679][2-9]\\d|59\\d{2}|8(?:1[23]|[2-9]\\d))\\d{5}", "\\d{9,10}", , , "123456789"],
                                        [, , "1[378]00\\d{6}", "\\d{10}", , , "1300123456"],
                                        [, , "1600\\d{6}", "\\d{10}", , , "1600123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "154\\d{7}", "\\d{10}", , , "1541234567"], "MY", 60, "00", "0", , , "0", , , , [
                                            [, "([4-79])(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"],
                                            [, "(3)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"],
                                            [, "([18]\\d)(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1[02-46-9][1-9]|8"], "0$1"],
                                            [, "(1)([36-8]00)(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1[36-8]0"]],
                                            [, "(11)(\\d{4})(\\d{4})", "$1-$2 $3", ["11"], "0$1"],
                                            [, "(15[49])(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    MZ: [, [, , "[28]\\d{7,8}", "\\d{8,9}"],
                                        [, , "2(?:[1346]\\d|5[0-2]|[78][12]|93)\\d{5}", "\\d{8}", , , "21123456"],
                                        [, , "8[23467]\\d{7}", "\\d{9}", , , "821234567"],
                                        [, , "800\\d{6}", "\\d{9}", , , "800123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "MZ", 258, "00", , , , , , , , [
                                            [, "([28]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-7]"]],
                                            [, "(80\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["80"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    NA: [, [, , "[68]\\d{7,8}", "\\d{8,9}"],
                                        [, , "6(?:1(?:17|2(?:[0189]\\d|[2-6]|7\\d?)|3(?:[01378]|2\\d)|4(?:[024]|10?|3[15]?)|69|7[014])|2(?:17|5(?:[0-36-8]|4\\d?)|69|70)|3(?:17|2(?:[0237]\\d?|[14-689])|34|6[289]|7[01]|81)|4(?:17|2(?:[012]|7\\d?)|4(?:[06]|1\\d?)|5(?:[01357]|[25]\\d?)|69|7[01])|5(?:17|2(?:[0459]|[23678]\\d?)|69|7[01])|6(?:17|2(?:5|6\\d?)|38|42|69|7[01])|7(?:17|2(?:[569]|[234]\\d?)|3(?:0\\d?|[13])|69|7[01]))\\d{4}", "\\d{8,9}", , , "61221234"],
                                        [, , "(?:60|8[125])\\d{7}", "\\d{9}", , , "811234567"],
                                        [, , "NA", "NA"],
                                        [, , "8701\\d{5}", "\\d{9}", , , "870123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "8(?:3\\d{2}|86)\\d{5}", "\\d{8,9}", , , "88612345"], "NA", 264, "00", "0", , , "0", , , , [
                                            [, "(8\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["8[1235]"], "0$1"],
                                            [, "(6\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"],
                                            [, "(88)(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
                                            [, "(870)(\\d{3})(\\d{3})", "$1 $2 $3", ["870"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    NC: [, [, , "[2-57-9]\\d{5}", "\\d{6}"],
                                        [, , "(?:2[03-9]|3[0-5]|4[1-7]|88)\\d{4}", "\\d{6}", , , "201234"],
                                        [, , "(?:5[0-4]|[79]\\d|8[0-79])\\d{4}", "\\d{6}", , , "751234"],
                                        [, , "NA", "NA"],
                                        [, , "36\\d{4}", "\\d{6}", , , "366711"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "NC", 687, "00", , , , , , , , [
                                            [, "(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[2-46-9]|5[0-4]"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    NE: [, [, , "[0289]\\d{7}", "\\d{8}"],
                                        [, , "2(?:0(?:20|3[1-7]|4[134]|5[14]|6[14578]|7[1-578])|1(?:4[145]|5[14]|6[14-68]|7[169]|88))\\d{4}", "\\d{8}", , , "20201234"],
                                        [, , "(?:8[089]|9\\d)\\d{6}", "\\d{8}", , , "93123456"],
                                        [, , "08\\d{6}", "\\d{8}", , , "08123456"],
                                        [, , "09\\d{6}", "\\d{8}", , , "09123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "NE", 227, "00", , , , , , , , [
                                            [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[289]|09"]],
                                            [, "(08)(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], 1, , [, , "NA", "NA"]
                                    ],
                                    NF: [, [, , "[13]\\d{5}", "\\d{5,6}"],
                                        [, , "(?:1(?:06|17|28|39)|3[012]\\d)\\d{3}", "\\d{5,6}", , , "106609"],
                                        [, , "3[58]\\d{4}", "\\d{5,6}", , , "381234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "NF", 672, "00", , , , , , , , [
                                            [, "(\\d{2})(\\d{4})", "$1 $2", ["1"]],
                                            [, "(\\d)(\\d{5})", "$1 $2", ["3"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    NG: [, [, , "[1-6]\\d{5,8}|9\\d{5,9}|[78]\\d{5,13}", "\\d{5,14}"],
                                        [, , "[12]\\d{6,7}|9(?:0[3-9]|[1-9]\\d)\\d{5}|(?:3\\d|4[023568]|5[02368]|6[02-469]|7[4-69]|8[2-9])\\d{6}|(?:4[47]|5[14579]|6[1578]|7[0-357])\\d{5,6}|(?:78|41)\\d{5}", "\\d{5,8}", , , "12345678"],
                                        [, , "(?:1(?:7[34]\\d|8(?:04|[124579]\\d|8[0-3])|95\\d)|287[0-7]|3(?:18[1-8]|88[0-7]|9(?:8[5-9]|6[1-5]))|4(?:28[0-2]|6(?:7[1-9]|8[02-47])|88[0-2])|5(?:2(?:7[7-9]|8\\d)|38[1-79]|48[0-7]|68[4-7])|6(?:2(?:7[7-9]|8\\d)|4(?:3[7-9]|[68][129]|7[04-69]|9[1-8])|58[0-2]|98[7-9])|7(?:38[0-7]|69[1-8]|78[2-4])|8(?:28[3-9]|38[0-2]|4(?:2[12]|3[147-9]|5[346]|7[4-9]|8[014-689]|90)|58[1-8]|78[2-9]|88[5-7])|98[07]\\d)\\d{4}|(?:70[1-689]\\d|8(?:0(?:1[01]|[2-9]\\d)|1(?:[0-8]\\d|9[01]))|90[23589]\\d)\\d{6}", "\\d{8,10}", , , "8021234567"],
                                        [, , "800\\d{7,11}", "\\d{10,14}", , , "80017591759"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "NG", 234, "009", "0", , , "0", , , , [
                                            [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["70|8[01]|90[23589]"], "0$1"],
                                            [, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"],
                                            [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-6]|7(?:[1-79]|0[1-9])|8[2-9]"], "0$1"],
                                            [, "([78]00)(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]00"], "0$1"],
                                            [, "([78]00)(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]00"], "0$1"],
                                            [, "(78)(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "700\\d{7,11}", "\\d{10,14}", , , "7001234567"], , , [, , "NA", "NA"]
                                    ],
                                    NI: [, [, , "[12578]\\d{7}", "\\d{8}"],
                                        [, , "2\\d{7}", "\\d{8}", , , "21234567"],
                                        [, , "5(?:5[0-7]\\d{5}|[78]\\d{6})|7[5-8]\\d{6}|8\\d{7}", "\\d{8}", , , "81234567"],
                                        [, , "1800\\d{4}", "\\d{8}", , , "18001234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "NI", 505, "00", , , , , , , , [
                                            [, "(\\d{4})(\\d{4})", "$1 $2"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    NL: [, [, , "1\\d{4,8}|[2-7]\\d{8}|[89]\\d{6,9}", "\\d{5,10}"],
                                        [, , "(?:1[0135-8]|2[02-69]|3[0-68]|4[0135-9]|[57]\\d|8[478])\\d{7}", "\\d{9}", , , "101234567"],
                                        [, , "6[1-58]\\d{7}", "\\d{9}", , , "612345678"],
                                        [, , "800\\d{4,7}", "\\d{7,10}", , , "8001234"],
                                        [, , "90[069]\\d{4,7}", "\\d{7,10}", , , "9061234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "(?:6760|85\\d{2})\\d{5}", "\\d{9}", , , "851234567"], "NL", 31, "00", "0", , , "0", , , , [
                                            [, "([1-578]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1[035]|2[0346]|3[03568]|4[0356]|5[0358]|7|8[4578]"], "0$1"],
                                            [, "([1-5]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"],
                                            [, "(6)(\\d{8})", "$1 $2", ["6[0-57-9]"], "0$1"],
                                            [, "(66)(\\d{7})", "$1 $2", ["66"], "0$1"],
                                            [, "(14)(\\d{3,4})", "$1 $2", ["14"], "$1"],
                                            [, "([89]0\\d)(\\d{4,7})", "$1 $2", ["80|9"], "0$1"]
                                        ], , [, , "66\\d{7}", "\\d{9}", , , "662345678"], , , [, , "14\\d{3,4}", "\\d{5,6}"],
                                        [, , "140(?:1(?:[035]|[16-8]\\d)|2(?:[0346]|[259]\\d)|3(?:[03568]|[124]\\d)|4(?:[0356]|[17-9]\\d)|5(?:[0358]|[124679]\\d)|7\\d|8[458])", "\\d{5,6}", , , "14020"], , , [, , "NA", "NA"]
                                    ],
                                    NO: [, [, , "0\\d{4}|[2-9]\\d{7}", "\\d{5}(?:\\d{3})?"],
                                        [, , "(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}", "\\d{8}", , , "21234567"],
                                        [, , "(?:4[015-8]|5[89]|87|9\\d)\\d{6}", "\\d{8}", , , "40612345"],
                                        [, , "80[01]\\d{5}", "\\d{8}", , , "80012345"],
                                        [, , "82[09]\\d{5}", "\\d{8}", , , "82012345"],
                                        [, , "810(?:0[0-6]|[2-8]\\d)\\d{3}", "\\d{8}", , , "81021234"],
                                        [, , "880\\d{5}", "\\d{8}", , , "88012345"],
                                        [, , "85[0-5]\\d{5}", "\\d{8}", , , "85012345"], "NO", 47, "00", , , , , , , , [
                                            [, "([489]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]"]],
                                            [, "([235-7]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-7]"]]
                                        ], , [, , "NA", "NA"], 1, , [, , "NA", "NA"],
                                        [, , "0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}", "\\d{5}(?:\\d{3})?", , , "01234"], 1, , [, , "81[23]\\d{5}", "\\d{8}", , , "81212345"]
                                    ],
                                    NP: [, [, , "[1-8]\\d{7}|9(?:[1-69]\\d{6,8}|7[2-6]\\d{5,7}|8\\d{8})", "\\d{6,10}"],
                                        [, , "(?:1[0-6]\\d|2[13-79][2-6]|3[135-8][2-6]|4[146-9][2-6]|5[135-7][2-6]|6[13-9][2-6]|7[15-9][2-6]|8[1-46-9][2-6]|9[1-79][2-6])\\d{5}", "\\d{6,8}", , , "14567890"],
                                        [, , "9(?:6[013]|7[245]|8[0-24-6])\\d{7}", "\\d{10}", , , "9841234567"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "NP", 977, "00", "0", , , "0", , , , [
                                            [, "(1)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"],
                                            [, "(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-69]|7[15-9])"], "0$1"],
                                            [, "(9\\d{2})(\\d{7})", "$1-$2", ["9(?:6[013]|7[245]|8)"], "$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    NR: [, [, , "[458]\\d{6}", "\\d{7}"],
                                        [, , "(?:444|888)\\d{4}", "\\d{7}", , , "4441234"],
                                        [, , "55[5-9]\\d{4}", "\\d{7}", , , "5551234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "NR", 674, "00", , , , , , , , [
                                            [, "(\\d{3})(\\d{4})", "$1 $2"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    NU: [, [, , "[1-5]\\d{3}", "\\d{4}"],
                                        [, , "[34]\\d{3}", "\\d{4}", , , "4002"],
                                        [, , "[125]\\d{3}", "\\d{4}", , , "1234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "NU", 683, "00", , , , , , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    NZ: [, [, , "6[235-9]\\d{6}|[2-57-9]\\d{7,10}", "\\d{7,11}"],
                                        [, , "(?:3[2-79]|[49][2-9]|6[235-9]|7[2-57-9])\\d{6}|24099\\d{3}", "\\d{7,8}", , , "32345678"],
                                        [, , "2(?:[028]\\d{7,8}|1(?:[03]\\d{5,7}|[12457]\\d{5,6}|[689]\\d{5})|[79]\\d{7})", "\\d{8,10}", , , "211234567"],
                                        [, , "508\\d{6,7}|80\\d{6,8}", "\\d{8,10}", , , "800123456"],
                                        [, , "90\\d{7,9}", "\\d{9,11}", , , "900123456"],
                                        [, , "NA", "NA"],
                                        [, , "70\\d{7}", "\\d{9}", , , "701234567"],
                                        [, , "NA", "NA"], "NZ", 64, "0(?:0|161)", "0", , , "0", , "00", , [
                                            [, "([34679])(\\d{3})(\\d{4})", "$1-$2 $3", ["[346]|7[2-57-9]|9[1-9]"], "0$1"],
                                            [, "(24099)(\\d{3})", "$1 $2", ["240", "2409", "24099"], "0$1"],
                                            [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["21"], "0$1"],
                                            [, "(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:1[1-9]|[69]|7[0-35-9])|70|86"], "0$1"],
                                            [, "(2\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["2[028]"], "0$1"],
                                            [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|5|[89]0"], "0$1"]
                                        ], , [, , "[28]6\\d{6,7}", "\\d{8,9}", , , "26123456"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    OM: [, [, , "(?:5|[279]\\d)\\d{6}|800\\d{5,6}", "\\d{7,9}"],
                                        [, , "2[2-6]\\d{6}", "\\d{8}", , , "23123456"],
                                        [, , "7[19]\\d{6}|9(?:0[1-9]|[1-9]\\d)\\d{5}", "\\d{8}", , , "92123456"],
                                        [, , "8007\\d{4,5}|500\\d{4}", "\\d{7,9}", , , "80071234"],
                                        [, , "900\\d{5}", "\\d{8}", , , "90012345"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "OM", 968, "00", , , , , , , , [
                                            [, "(2\\d)(\\d{6})", "$1 $2", ["2"]],
                                            [, "([79]\\d{3})(\\d{4})", "$1 $2", ["[79]"]],
                                            [, "([58]00)(\\d{4,6})", "$1 $2", ["[58]"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    PA: [, [, , "[1-9]\\d{6,7}", "\\d{7,8}"],
                                        [, , "(?:1(?:0[0-8]|1[49]|2[37]|3[0137]|4[147]|5[05]|6[58]|7[0167]|8[58]|9[139])|2(?:[0235679]\\d|1[0-7]|4[04-9]|8[028])|3(?:[09]\\d|1[014-7]|2[0-3]|3[03]|4[03-57]|55|6[068]|7[06-8]|8[06-9])|4(?:3[013-69]|4\\d|7[0-589])|5(?:[01]\\d|2[0-7]|[56]0|79)|7(?:0[09]|2[0-267]|3[06]|[469]0|5[06-9]|7[0-24-79]|8[7-9])|8(?:09|[34]\\d|5[0134]|8[02])|9(?:0[6-9]|1[016-8]|2[036-8]|3[3679]|40|5[0489]|6[06-9]|7[046-9]|8[36-8]|9[1-9]))\\d{4}", "\\d{7}", , , "2001234"],
                                        [, , "(?:1[16]1|21[89]|8(?:1[01]|7[23]))\\d{4}|6(?:[024-9]\\d|1[0-5]|3[0-24-9])\\d{5}", "\\d{7,8}", , , "60012345"],
                                        [, , "80[09]\\d{4}", "\\d{7}", , , "8001234"],
                                        [, , "(?:779|8(?:55|60|7[78])|9(?:00|81))\\d{4}", "\\d{7}", , , "8601234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "PA", 507, "00", , , , , , , , [
                                            [, "(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]],
                                            [, "(\\d{4})(\\d{4})", "$1-$2", ["6"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    PE: [, [, , "[14-9]\\d{7,8}", "\\d{6,9}"],
                                        [, , "(?:1\\d|4[1-4]|5[1-46]|6[1-7]|7[2-46]|8[2-4])\\d{6}", "\\d{6,8}", , , "11234567"],
                                        [, , "9\\d{8}", "\\d{9}", , , "912345678"],
                                        [, , "800\\d{5}", "\\d{8}", , , "80012345"],
                                        [, , "805\\d{5}", "\\d{8}", , , "80512345"],
                                        [, , "801\\d{5}", "\\d{8}", , , "80112345"],
                                        [, , "80[24]\\d{5}", "\\d{8}", , , "80212345"],
                                        [, , "NA", "NA"], "PE", 51, "19(?:1[124]|77|90)00", "0", " Anexo ", , "0", , , , [
                                            [, "(1)(\\d{7})", "$1 $2", ["1"], "(0$1)"],
                                            [, "([4-8]\\d)(\\d{6})", "$1 $2", ["[4-7]|8[2-4]"], "(0$1)"],
                                            [, "(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"],
                                            [, "(9\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    PF: [, [, , "4\\d{5,7}|8\\d{7}", "\\d{6}(?:\\d{2})?"],
                                        [, , "4(?:[09][45689]\\d|4)\\d{4}", "\\d{6}(?:\\d{2})?", , , "40412345"],
                                        [, , "8[79]\\d{6}", "\\d{8}", , , "87123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "PF", 689, "00", , , , , , , , [
                                            [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4[09]|8[79]"]],
                                            [, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]]
                                        ], , [, , "NA", "NA"], , , [, , "44\\d{4}", "\\d{6}", , , "441234"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    PG: [, [, , "[1-9]\\d{6,7}", "\\d{7,8}"],
                                        [, , "(?:3[0-2]\\d|4[25]\\d|5[34]\\d|64[1-9]|77(?:[0-24]\\d|30)|85[02-46-9]|9[78]\\d)\\d{4}", "\\d{7}", , , "3123456"],
                                        [, , "(?:20150|68\\d{2}|7(?:[0-689]\\d|75)\\d{2})\\d{3}", "\\d{7,8}", , , "6812345"],
                                        [, , "180\\d{4}", "\\d{7}", , , "1801234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "275\\d{4}", "\\d{7}", , , "2751234"], "PG", 675, "00", , , , , , , , [
                                            [, "(\\d{3})(\\d{4})", "$1 $2", ["[13-689]|27"]],
                                            [, "(\\d{4})(\\d{4})", "$1 $2", ["20|7"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    PH: [, [, , "2\\d{5,7}|[3-9]\\d{7,9}|1800\\d{7,9}", "\\d{5,13}"],
                                        [, , "2\\d{5}(?:\\d{2})?|(?:3[2-68]|4[2-9]|5[2-6]|6[2-58]|7[24578]|8[2-8])\\d{7}|88(?:22\\d{6}|42\\d{4})", "\\d{5,10}", , , "21234567"],
                                        [, , "(?:81[37]|9(?:0[5-9]|1[024-9]|2[0-35-9]|3[02-9]|4[236-9]|50|7[34-79]|89|9[4-9]))\\d{7}", "\\d{10}", , , "9051234567"],
                                        [, , "1800\\d{7,9}", "\\d{11,13}", , , "180012345678"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "PH", 63, "00", "0", , , "0", , , , [
                                            [, "(2)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"],
                                            [, "(2)(\\d{5})", "$1 $2", ["2"], "(0$1)"],
                                            [, "(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|5(?:22|44)|642|8(?:62|8[245])", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"],
                                            [, "(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"],
                                            [, "([3-8]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-8]"], "(0$1)"],
                                            [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["81|9"], "0$1"],
                                            [, "(1800)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                                            [, "(1800)(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    PK: [, [, , "1\\d{8}|[2-8]\\d{5,11}|9(?:[013-9]\\d{4,9}|2\\d(?:111\\d{6}|\\d{3,7}))", "\\d{6,12}"],
                                        [, , "(?:21|42)[2-9]\\d{7}|(?:2[25]|4[0146-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]\\d{6}|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8]))[2-9]\\d{5,6}|58[126]\\d{7}", "\\d{6,10}", , , "2123456789"],
                                        [, , "3(?:0\\d|1[0-6]|2[0-5]|3[0-7]|4[0-8]|55|64)\\d{7}", "\\d{10}", , , "3012345678"],
                                        [, , "800\\d{5}", "\\d{8}", , , "80012345"],
                                        [, , "900\\d{5}", "\\d{8}", , , "90012345"],
                                        [, , "NA", "NA"],
                                        [, , "122\\d{6}", "\\d{9}", , , "122044444"],
                                        [, , "NA", "NA"], "PK", 92, "00", "0", , , "0", , , , [
                                            [, "(\\d{2})(111)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)1", "(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)11", "(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)111"], "(0$1)"],
                                            [, "(\\d{3})(111)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[349]|45|54|60|72|8[2-5]|9[2-9]", "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d1", "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d11", "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d111"], "(0$1)"],
                                            [, "(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"],
                                            [, "(\\d{3})(\\d{6,7})", "$1 $2", ["2[349]|45|54|60|72|8[2-5]|9[2-9]", "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d[2-9]"], "(0$1)"],
                                            [, "(3\\d{2})(\\d{7})", "$1 $2", ["3"], "0$1"],
                                            [, "([15]\\d{3})(\\d{5,6})", "$1 $2", ["58[12]|1"], "(0$1)"],
                                            [, "(586\\d{2})(\\d{5})", "$1 $2", ["586"], "(0$1)"],
                                            [, "([89]00)(\\d{3})(\\d{2})", "$1 $2 $3", ["[89]00"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "(?:2(?:[125]|3[2358]|4[2-4]|9[2-8])|4(?:[0-246-9]|5[3479])|5(?:[1-35-7]|4[2-467])|6(?:[1-8]|0[468])|7(?:[14]|2[236])|8(?:[16]|2[2-689]|3[23578]|4[3478]|5[2356])|9(?:1|22|3[27-9]|4[2-6]|6[3569]|9[2-7]))111\\d{6}", "\\d{11,12}", , , "21111825888"], , , [, , "NA", "NA"]
                                    ],
                                    PL: [, [, , "[12]\\d{6,8}|[3-57-9]\\d{8}|6\\d{5,8}", "\\d{6,9}"],
                                        [, , "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])\\d{7}|[12]2\\d{5}", "\\d{6,9}", , , "123456789"],
                                        [, , "(?:5[0137]|6[069]|7[2389]|88)\\d{7}", "\\d{9}", , , "512345678"],
                                        [, , "800\\d{6}", "\\d{9}", , , "800123456"],
                                        [, , "70\\d{7}", "\\d{9}", , , "701234567"],
                                        [, , "801\\d{6}", "\\d{9}", , , "801234567"],
                                        [, , "NA", "NA"],
                                        [, , "39\\d{7}", "\\d{9}", , , "391234567"], "PL", 48, "00", , , , , , , , [
                                            [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[14]|2[0-57-9]|3[2-4]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"]],
                                            [, "(\\d{2})(\\d{1})(\\d{4})", "$1 $2 $3", ["[12]2"]],
                                            [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["26|39|5[0137]|6[0469]|7[02389]|8[08]"]],
                                            [, "(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]],
                                            [, "(\\d{3})(\\d{3})", "$1 $2", ["64"]]
                                        ], , [, , "64\\d{4,7}", "\\d{6,9}", , , "641234567"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    PM: [, [, , "[45]\\d{5}", "\\d{6}"],
                                        [, , "41\\d{4}", "\\d{6}", , , "411234"],
                                        [, , "55\\d{4}", "\\d{6}", , , "551234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "PM", 508, "00", "0", , , "0", , , , [
                                            [, "([45]\\d)(\\d{2})(\\d{2})", "$1 $2 $3", , "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    PR: [, [, , "[5789]\\d{9}", "\\d{7}(?:\\d{3})?"],
                                        [, , "(?:787|939)[2-9]\\d{6}", "\\d{7}(?:\\d{3})?", , , "7872345678"],
                                        [, , "(?:787|939)[2-9]\\d{6}", "\\d{7}(?:\\d{3})?", , , "7872345678"],
                                        [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002345678"],
                                        [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002345678"],
                                        [, , "NA", "NA"],
                                        [, , "5(?:00|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
                                        [, , "NA", "NA"], "PR", 1, "011", "1", , , "1", , , 1, , , [, , "NA", "NA"], , "787|939", [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    PS: [, [, , "[24589]\\d{7,8}|1(?:[78]\\d{8}|[49]\\d{2,3})", "\\d{4,10}"],
                                        [, , "(?:22[234789]|42[45]|82[01458]|92[369])\\d{5}", "\\d{7,8}", , , "22234567"],
                                        [, , "5[69]\\d{7}", "\\d{9}", , , "599123456"],
                                        [, , "1800\\d{6}", "\\d{10}", , , "1800123456"],
                                        [, , "1(?:4|9\\d)\\d{2}", "\\d{4,5}", , , "19123"],
                                        [, , "1700\\d{6}", "\\d{10}", , , "1700123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "PS", 970, "00", "0", , , "0", , , , [
                                            [, "([2489])(2\\d{2})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"],
                                            [, "(5[69]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"],
                                            [, "(1[78]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[78]"], "$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    PT: [, [, , "[2-46-9]\\d{8}", "\\d{9}"],
                                        [, , "2(?:[12]\\d|[35][1-689]|4[1-59]|6[1-35689]|7[1-9]|8[1-69]|9[1256])\\d{6}", "\\d{9}", , , "212345678"],
                                        [, , "9(?:[1236]\\d{2}|480)\\d{5}", "\\d{9}", , , "912345678"],
                                        [, , "80[02]\\d{6}", "\\d{9}", , , "800123456"],
                                        [, , "6(?:0[178]|4[68])\\d{6}|76(?:0[1-57]|1[2-47]|2[237])\\d{5}", "\\d{9}", , , "760123456"],
                                        [, , "80(?:8\\d|9[1579])\\d{5}", "\\d{9}", , , "808123456"],
                                        [, , "884[0-4689]\\d{5}", "\\d{9}", , , "884123456"],
                                        [, , "30\\d{7}", "\\d{9}", , , "301234567"], "PT", 351, "00", , , , , , , , [
                                            [, "(2\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]],
                                            [, "([2-46-9]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[3-9]|[346-9]"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "7(?:0(?:7\\d|8[17]))\\d{5}", "\\d{9}", , , "707123456"], , , [, , "600\\d{6}", "\\d{9}", , , "600110000"]
                                    ],
                                    PW: [, [, , "[2-8]\\d{6}", "\\d{7}"],
                                        [, , "2552255|(?:277|345|488|5(?:35|44|87)|6(?:22|54|79)|7(?:33|47)|8(?:24|55|76))\\d{4}", "\\d{7}", , , "2771234"],
                                        [, , "(?:6[234689]0|77[45789])\\d{4}", "\\d{7}", , , "6201234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "PW", 680, "01[12]", , , , , , , , [
                                            [, "(\\d{3})(\\d{4})", "$1 $2"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    PY: [, [, , "5[0-5]\\d{4,7}|[2-46-9]\\d{5,8}", "\\d{5,9}"],
                                        [, , "(?:[26]1|3[289]|4[124678]|7[123]|8[1236])\\d{5,7}|(?:2(?:2[4568]|7[15]|9[1-5])|3(?:18|3[167]|4[2357]|51)|4(?:18|2[45]|3[12]|5[13]|64|71|9[1-47])|5(?:[1-4]\\d|5[0234])|6(?:3[1-3]|44|7[1-4678])|7(?:17|4[0-4]|6[1-578]|75|8[0-8])|858)\\d{5,6}", "\\d{5,9}", , , "212345678"],
                                        [, , "9(?:6[12]|[78][1-6]|9[1-5])\\d{6}", "\\d{9}", , , "961456789"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "8700[0-4]\\d{4}", "\\d{9}", , , "870012345"], "PY", 595, "00", "0", , , "0", , , , [
                                            [, "(\\d{2})(\\d{5})", "$1 $2", ["(?:[26]1|3[289]|4[124678]|7[123]|8[1236])"], "(0$1)"],
                                            [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["(?:[26]1|3[289]|4[124678]|7[123]|8[1236])"], "(0$1)"],
                                            [, "(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"],
                                            [, "(\\d{3})(\\d{6})", "$1 $2", ["9[1-9]"], "0$1"],
                                            [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8700"]],
                                            [, "(\\d{3})(\\d{4,5})", "$1 $2", ["[2-8][1-9]"], "(0$1)"],
                                            [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8][1-9]"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "[2-9]0\\d{4,7}", "\\d{6,9}", , , "201234567"], , , [, , "NA", "NA"]
                                    ],
                                    QA: [, [, , "[2-8]\\d{6,7}", "\\d{7,8}"],
                                        [, , "4[04]\\d{6}", "\\d{8}", , , "44123456"],
                                        [, , "[3567]\\d{7}", "\\d{8}", , , "33123456"],
                                        [, , "800\\d{4}", "\\d{7}", , , "8001234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "QA", 974, "00", , , , , , , , [
                                            [, "([28]\\d{2})(\\d{4})", "$1 $2", ["[28]"]],
                                            [, "([3-7]\\d{3})(\\d{4})", "$1 $2", ["[3-7]"]]
                                        ], , [, , "2(?:[12]\\d|61)\\d{4}", "\\d{7}", , , "2123456"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    RE: [, [, , "[268]\\d{8}", "\\d{9}"],
                                        [, , "262\\d{6}", "\\d{9}", , , "262161234"],
                                        [, , "6(?:9[23]|47)\\d{6}", "\\d{9}", , , "692123456"],
                                        [, , "80\\d{7}", "\\d{9}", , , "801234567"],
                                        [, , "89[1-37-9]\\d{6}", "\\d{9}", , , "891123456"],
                                        [, , "8(?:1[019]|2[0156]|84|90)\\d{6}", "\\d{9}", , , "810123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "RE", 262, "00", "0", , , "0", , , , [
                                            [, "([268]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "0$1"]
                                        ], , [, , "NA", "NA"], 1, "262|6[49]|8", [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    RO: [, [, , "2\\d{5,8}|[37-9]\\d{8}", "\\d{6,9}"],
                                        [, , "2(?:1(?:\\d{7}|9\\d{3})|[3-6](?:\\d{7}|\\d9\\d{2}))|3[13-6]\\d{7}", "\\d{6,9}", , , "211234567"],
                                        [, , "7(?:[0-8]\\d{2}|99\\d)\\d{5}", "\\d{9}", , , "712345678"],
                                        [, , "800\\d{6}", "\\d{9}", , , "800123456"],
                                        [, , "90[036]\\d{6}", "\\d{9}", , , "900123456"],
                                        [, , "801\\d{6}", "\\d{9}", , , "801123456"],
                                        [, , "802\\d{6}", "\\d{9}", , , "802123456"],
                                        [, , "NA", "NA"], "RO", 40, "00", "0", " int ", , "0", , , , [
                                            [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"],
                                            [, "(21)(\\d{4})", "$1 $2", ["21"], "0$1"],
                                            [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23][3-7]|[7-9]"], "0$1"],
                                            [, "(2\\d{2})(\\d{3})", "$1 $2", ["2[3-6]"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "37\\d{7}", "\\d{9}", , , "372123456"], , , [, , "NA", "NA"]
                                    ],
                                    RS: [, [, , "[126-9]\\d{4,11}|3(?:[0-79]\\d{3,10}|8[2-9]\\d{2,9})", "\\d{5,12}"],
                                        [, , "(?:1(?:[02-9][2-9]|1[1-9])\\d|2(?:[0-24-7][2-9]\\d|[389](?:0[2-9]|[2-9]\\d))|3(?:[0-8][2-9]\\d|9(?:[2-9]\\d|0[2-9])))\\d{3,8}", "\\d{5,12}", , , "10234567"],
                                        [, , "6(?:[0-689]|7\\d)\\d{6,7}", "\\d{8,10}", , , "601234567"],
                                        [, , "800\\d{3,9}", "\\d{6,12}", , , "80012345"],
                                        [, , "(?:90[0169]|78\\d)\\d{3,7}", "\\d{6,12}", , , "90012345"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "RS", 381, "00", "0", , , "0", , , , [
                                            [, "([23]\\d{2})(\\d{4,9})", "$1 $2", ["(?:2[389]|39)0"], "0$1"],
                                            [, "([1-3]\\d)(\\d{5,10})", "$1 $2", ["1|2(?:[0-24-7]|[389][1-9])|3(?:[0-8]|9[1-9])"], "0$1"],
                                            [, "(6\\d)(\\d{6,8})", "$1 $2", ["6"], "0$1"],
                                            [, "([89]\\d{2})(\\d{3,9})", "$1 $2", ["[89]"], "0$1"],
                                            [, "(7[26])(\\d{4,9})", "$1 $2", ["7[26]"], "0$1"],
                                            [, "(7[08]\\d)(\\d{4,9})", "$1 $2", ["7[08]"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "7[06]\\d{4,10}", "\\d{6,12}", , , "700123456"], , , [, , "NA", "NA"]
                                    ],
                                    RU: [, [, , "[3489]\\d{9}", "\\d{10}"],
                                        [, , "(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}", "\\d{10}", , , "3011234567"],
                                        [, , "9\\d{9}", "\\d{10}", , , "9123456789"],
                                        [, , "80[04]\\d{7}", "\\d{10}", , , "8001234567"],
                                        [, , "80[39]\\d{7}", "\\d{10}", , , "8091234567"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "RU", 7, "810", "8", , , "8", , "8~10", , [
                                            [, "(\\d{3})(\\d{2})(\\d{2})", "$1-$2-$3", ["[1-79]"], "$1", , 1],
                                            [, "([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[34689]"], "8 ($1)", , 1],
                                            [, "(7\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", , 1]
                                        ],
                                        [
                                            [, "([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[34689]"], "8 ($1)", , 1],
                                            [, "(7\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", , 1]
                                        ],
                                        [, , "NA", "NA"], 1, , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    RW: [, [, , "[027-9]\\d{7,8}", "\\d{8,9}"],
                                        [, , "2[258]\\d{7}|06\\d{6}", "\\d{8,9}", , , "250123456"],
                                        [, , "7[238]\\d{7}", "\\d{9}", , , "720123456"],
                                        [, , "800\\d{6}", "\\d{9}", , , "800123456"],
                                        [, , "900\\d{6}", "\\d{9}", , , "900123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "RW", 250, "00", "0", , , "0", , , , [
                                            [, "(2\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "$1"],
                                            [, "([7-9]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"],
                                            [, "(0\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], 1, , [, , "NA", "NA"]
                                    ],
                                    SA: [, [, , "1\\d{7,8}|(?:[2-467]|92)\\d{7}|5\\d{8}|8\\d{9}", "\\d{7,10}"],
                                        [, , "11\\d{7}|1?(?:2[24-8]|3[35-8]|4[3-68]|6[2-5]|7[235-7])\\d{6}", "\\d{7,9}", , , "112345678"],
                                        [, , "(?:5(?:[013-689]\\d|7[0-26-8])|811\\d)\\d{6}", "\\d{9,10}", , , "512345678"],
                                        [, , "800\\d{7}", "\\d{10}", , , "8001234567"],
                                        [, , "NA", "NA"],
                                        [, , "92[05]\\d{6}", "\\d{9}", , , "920012345"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "SA", 966, "00", "0", , , "0", , , , [
                                            [, "([1-467])(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-467]"], "0$1"],
                                            [, "(1\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1[1-467]"], "0$1"],
                                            [, "(5\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
                                            [, "(92\\d{2})(\\d{5})", "$1 $2", ["92"], "$1"],
                                            [, "(800)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "$1"],
                                            [, "(811)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    SB: [, [, , "[1-9]\\d{4,6}", "\\d{5,7}"],
                                        [, , "(?:1[4-79]|[23]\\d|4[0-2]|5[03]|6[0-37])\\d{3}", "\\d{5}", , , "40123"],
                                        [, , "48\\d{3}|7(?:30|[46-8]\\d|5[025-9]|9[0-5])\\d{4}|8[4-9]\\d{5}|9(?:1[2-9]|2[013-9]|3[0-2]|[46]\\d|5[0-46-9]|7[0-689]|8[0-79]|9[0-8])\\d{4}", "\\d{5,7}", , , "7421234"],
                                        [, , "1[38]\\d{3}", "\\d{5}", , , "18123"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "5[12]\\d{3}", "\\d{5}", , , "51123"], "SB", 677, "0[01]", , , , , , , , [
                                            [, "(\\d{2})(\\d{5})", "$1 $2", ["[7-9]"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    SC: [, [, , "[2468]\\d{5,6}", "\\d{6,7}"],
                                        [, , "4[2-46]\\d{5}", "\\d{7}", , , "4217123"],
                                        [, , "2[5-8]\\d{5}", "\\d{7}", , , "2510123"],
                                        [, , "8000\\d{2}", "\\d{6}", , , "800000"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "64\\d{5}", "\\d{7}", , , "6412345"], "SC", 248, "0[0-2]", , , , , , "00", , [
                                            [, "(\\d{3})(\\d{3})", "$1 $2", ["8"]],
                                            [, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    SD: [, [, , "[19]\\d{8}", "\\d{9}"],
                                        [, , "1(?:[125]\\d|8[3567])\\d{6}", "\\d{9}", , , "121231234"],
                                        [, , "9[0-3569]\\d{7}", "\\d{9}", , , "911231234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "SD", 249, "00", "0", , , "0", , , , [
                                            [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", , "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    SE: [, [, , "[1-35-9]\\d{5,11}|4\\d{6,8}", "\\d{6,12}"],
                                        [, , "1(?:0[1-8]\\d{6}|[136]\\d{5,7}|(?:2[0-35]|4[0-4]|5[0-25-9]|7[13-6]|[89]\\d)\\d{5,6})|2(?:[136]\\d{5,7}|(?:2[0-7]|4[0136-8]|5[0138]|7[018]|8[01]|9[0-57])\\d{5,6})|3(?:[356]\\d{5,7}|(?:0[0-4]|1\\d|2[0-25]|4[056]|7[0-2]|8[0-3]|9[023])\\d{5,6})|4(?:[0246]\\d{5,7}|(?:1[013-8]|3[0135]|5[14-79]|7[0-246-9]|8[0156]|9[0-689])\\d{5,6})|5(?:0[0-6]|[15][0-5]|2[0-68]|3[0-4]|4\\d|6[03-5]|7[013]|8[0-79]|9[01])\\d{5,6}|6(?:[03]\\d{5,7}|(?:1[1-3]|2[0-4]|4[02-57]|5[0-37]|6[0-3]|7[0-2]|8[0247]|9[0-356])\\d{5,6})|8\\d{6,8}|9(?:0[1-9]\\d{4,6}|(?:1[0-68]|2\\d|3[02-5]|4[0-3]|5[0-4]|[68][01]|7[0135-8])\\d{5,6})", "\\d{7,9}", , , "8123456"],
                                        [, , "7[02369]\\d{7}", "\\d{9}", , , "701234567"],
                                        [, , "20\\d{4,7}", "\\d{6,9}", , , "20123456"],
                                        [, , "649\\d{6}|9(?:00|39|44)[1-8]\\d{3,6}", "\\d{7,10}", , , "9001234567"],
                                        [, , "77(?:0\\d{3}(?:\\d{3})?|[1-7]\\d{6})", "\\d{6}(?:\\d{3})?", , , "771234567"],
                                        [, , "75[1-8]\\d{6}", "\\d{9}", , , "751234567"],
                                        [, , "NA", "NA"], "SE", 46, "00", "0", , , "0", , , , [
                                            [, "(8)(\\d{2,3})(\\d{2,3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1"],
                                            [, "([1-69]\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"], "0$1"],
                                            [, "([1-469]\\d)(\\d{3})(\\d{2})", "$1-$2 $3", ["1[136]|2[136]|3[356]|4[0246]|6[03]|90"], "0$1"],
                                            [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"], "0$1"],
                                            [, "(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"], "0$1"],
                                            [, "(7\\d)(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["7"], "0$1"],
                                            [, "(77)(\\d{2})(\\d{2})", "$1-$2$3", ["7"], "0$1"],
                                            [, "(20)(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1"],
                                            [, "(9[034]\\d)(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9[034]"], "0$1"],
                                            [, "(9[034]\\d)(\\d{4})", "$1-$2", ["9[034]"], "0$1"],
                                            [, "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["25[245]|67[3-6]"], "0$1"]
                                        ],
                                        [
                                            [, "(8)(\\d{2,3})(\\d{2,3})(\\d{2})", "$1 $2 $3 $4", ["8"]],
                                            [, "([1-69]\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"]],
                                            [, "([1-469]\\d)(\\d{3})(\\d{2})", "$1 $2 $3", ["1[136]|2[136]|3[356]|4[0246]|6[03]|90"]],
                                            [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"]],
                                            [, "(\\d{3})(\\d{2,3})(\\d{2})", "$1 $2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"]],
                                            [, "(7\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7"]],
                                            [, "(77)(\\d{2})(\\d{2})", "$1 $2 $3", ["7"]],
                                            [, "(20)(\\d{2,3})(\\d{2})", "$1 $2 $3", ["20"]],
                                            [, "(9[034]\\d)(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["9[034]"]],
                                            [, "(9[034]\\d)(\\d{4})", "$1 $2", ["9[034]"]],
                                            [, "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["25[245]|67[3-6]"]]
                                        ],
                                        [, , "74[02-9]\\d{6}", "\\d{9}", , , "740123456"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "(?:25[245]|67[3-6])\\d{9}", "\\d{12}", , , "254123456789"]
                                    ],
                                    SG: [, [, , "[36]\\d{7}|[17-9]\\d{7,10}", "\\d{8,11}"],
                                        [, , "6[1-9]\\d{6}", "\\d{8}", , , "61234567"],
                                        [, , "(?:8[1-8]|9[0-8])\\d{6}", "\\d{8}", , , "81234567"],
                                        [, , "1?800\\d{7}", "\\d{10,11}", , , "18001234567"],
                                        [, , "1900\\d{7}", "\\d{11}", , , "19001234567"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "3[12]\\d{6}", "\\d{8}", , , "31234567"], "SG", 65, "0[0-3]\\d", , , , , , , , [
                                            [, "([3689]\\d{3})(\\d{4})", "$1 $2", ["[369]|8[1-9]"]],
                                            [, "(1[89]00)(\\d{3})(\\d{4})", "$1 $2 $3", ["1[89]"]],
                                            [, "(7000)(\\d{4})(\\d{3})", "$1 $2 $3", ["70"]],
                                            [, "(800)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "7000\\d{7}", "\\d{11}", , , "70001234567"], , , [, , "NA", "NA"]
                                    ],
                                    SH: [, [, , "[256]\\d{4}", "\\d{4,5}"],
                                        [, , "2(?:[0-57-9]\\d|6[4-9])\\d{2}", "\\d{5}", , , "22158"],
                                        [, , "[56]\\d{4}", "\\d{5}"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "262\\d{2}", "\\d{5}"], "SH", 290, "00", , , , , , , , , , [, , "NA", "NA"], 1, , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    SI: [, [, , "[1-7]\\d{6,7}|[89]\\d{4,7}", "\\d{5,8}"],
                                        [, , "(?:1\\d|[25][2-8]|3[24-8]|4[24-8]|7[3-8])\\d{6}", "\\d{7,8}", , , "11234567"],
                                        [, , "(?:[37][01]|4[0139]|51|6[48])\\d{6}", "\\d{8}", , , "31234567"],
                                        [, , "80\\d{4,6}", "\\d{6,8}", , , "80123456"],
                                        [, , "90\\d{4,6}|89[1-3]\\d{2,5}", "\\d{5,8}", , , "90123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "(?:59|8[1-3])\\d{6}", "\\d{8}", , , "59012345"], "SI", 386, "00", "0", , , "0", , , , [
                                            [, "(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[12]|3[24-8]|4[24-8]|5[2-8]|7[3-8]"], "(0$1)"],
                                            [, "([3-7]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"],
                                            [, "([89][09])(\\d{3,6})", "$1 $2", ["[89][09]"], "0$1"],
                                            [, "([58]\\d{2})(\\d{5})", "$1 $2", ["59|8[1-3]"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    SJ: [, [, , "0\\d{4}|[4789]\\d{7}", "\\d{5}(?:\\d{3})?"],
                                        [, , "79\\d{6}", "\\d{8}", , , "79123456"],
                                        [, , "(?:4[015-8]|5[89]|9\\d)\\d{6}", "\\d{8}", , , "41234567"],
                                        [, , "80[01]\\d{5}", "\\d{8}", , , "80012345"],
                                        [, , "82[09]\\d{5}", "\\d{8}", , , "82012345"],
                                        [, , "810(?:0[0-6]|[2-8]\\d)\\d{3}", "\\d{8}", , , "81021234"],
                                        [, , "880\\d{5}", "\\d{8}", , , "88012345"],
                                        [, , "85[0-5]\\d{5}", "\\d{8}", , , "85012345"], "SJ", 47, "00", , , , , , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}", "\\d{5}(?:\\d{3})?", , , "01234"], 1, , [, , "81[23]\\d{5}", "\\d{8}", , , "81212345"]
                                    ],
                                    SK: [, [, , "(?:[2-68]\\d{5,8}|9\\d{6,8})", "\\d{6,9}"],
                                        [, , "2(?:16\\d{3,4}|\\d{8})|[3-5](?:[1-8]16\\d{2,3}|\\d{8})", "\\d{6,9}", , , "212345678"],
                                        [, , "9(?:0(?:[1-8]\\d|9[1-9])|(?:1[0-24-9]|4[04589]|50)\\d)\\d{5}", "\\d{9}", , , "912123456"],
                                        [, , "800\\d{6}", "\\d{9}", , , "800123456"],
                                        [, , "9(?:[78]\\d{7}|00\\d{6})", "\\d{9}", , , "900123456"],
                                        [, , "8[5-9]\\d{7}", "\\d{9}", , , "850123456"],
                                        [, , "NA", "NA"],
                                        [, , "6(?:02|5[0-4]|9[0-6])\\d{6}", "\\d{9}", , , "690123456"], "SK", 421, "00", "0", , , "0", , , , [
                                            [, "(2)(16)(\\d{3,4})", "$1 $2 $3", ["216"], "0$1"],
                                            [, "([3-5]\\d)(16)(\\d{2,3})", "$1 $2 $3", ["[3-5]"], "0$1"],
                                            [, "(2)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"],
                                            [, "([3-5]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"],
                                            [, "([689]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"],
                                            [, "(9090)(\\d{3})", "$1 $2", ["9090"], "0$1"]
                                        ], , [, , "9090\\d{3}", "\\d{7}", , , "9090123"], , , [, , "(?:602|8(?:00|[5-9]\\d)|9(?:00|[78]\\d))\\d{6}|9090\\d{3}", "\\d{7,9}", , , "800123456"],
                                        [, , "96\\d{7}", "\\d{9}", , , "961234567"], , , [, , "NA", "NA"]
                                    ],
                                    SL: [, [, , "[2-9]\\d{7}", "\\d{6,8}"],
                                        [, , "[235]2[2-4][2-9]\\d{4}", "\\d{6,8}", , , "22221234"],
                                        [, , "(?:2[15]|3[03-5]|4[04]|5[05]|66|7[6-9]|88|99)\\d{6}", "\\d{6,8}", , , "25123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "SL", 232, "00", "0", , , "0", , , , [
                                            [, "(\\d{2})(\\d{6})", "$1 $2", , "(0$1)"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    SM: [, [, , "[05-7]\\d{7,9}", "\\d{6,10}"],
                                        [, , "0549(?:8[0157-9]|9\\d)\\d{4}", "\\d{6,10}", , , "0549886377"],
                                        [, , "6[16]\\d{6}", "\\d{8}", , , "66661212"],
                                        [, , "NA", "NA"],
                                        [, , "7[178]\\d{6}", "\\d{8}", , , "71123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "5[158]\\d{6}", "\\d{8}", , , "58001110"], "SM", 378, "00", , , , "(?:0549)?([89]\\d{5})", "0549$1", , , [
                                            [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]],
                                            [, "(0549)(\\d{6})", "$1 $2", ["0"]],
                                            [, "(\\d{6})", "0549 $1", ["[89]"]]
                                        ],
                                        [
                                            [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]],
                                            [, "(0549)(\\d{6})", "($1) $2", ["0"]],
                                            [, "(\\d{6})", "(0549) $1", ["[89]"]]
                                        ],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], 1, , [, , "NA", "NA"]
                                    ],
                                    SN: [, [, , "[3789]\\d{8}", "\\d{9}"],
                                        [, , "3(?:0(?:1[0-2]|80)|282|3(?:8[1-9]|9[3-9])|611|90[1-5])\\d{5}", "\\d{9}", , , "301012345"],
                                        [, , "7(?:[06-8]\\d|21|90)\\d{6}", "\\d{9}", , , "701234567"],
                                        [, , "800\\d{6}", "\\d{9}", , , "800123456"],
                                        [, , "88[4689]\\d{6}", "\\d{9}", , , "884123456"],
                                        [, , "81[02468]\\d{6}", "\\d{9}", , , "810123456"],
                                        [, , "NA", "NA"],
                                        [, , "3392\\d{5}|93330\\d{4}", "\\d{9}", , , "933301234"], "SN", 221, "00", , , , , , , , [
                                            [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]],
                                            [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    SO: [, [, , "[1-79]\\d{6,8}", "\\d{7,9}"],
                                        [, , "(?:1\\d|2[0-79]|3[0-46-8]|4[0-7]|59)\\d{5}", "\\d{7}", , , "4012345"],
                                        [, , "(?:15\\d|2(?:4\\d|8)|6[1-35-9]?\\d{2}|7(?:[1-8]\\d|99?\\d)|9(?:0[67]|[2-9])\\d)\\d{5}", "\\d{7,9}", , , "71123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "SO", 252, "00", "0", , , "0", , , , [
                                            [, "(\\d)(\\d{6})", "$1 $2", ["2[0-79]|[13-5]"]],
                                            [, "(\\d)(\\d{7})", "$1 $2", ["24|[67]"]],
                                            [, "(\\d{2})(\\d{5,7})", "$1 $2", ["15|28|6[1-35-9]|799|9[2-9]"]],
                                            [, "(90\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["90"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    SR: [, [, , "[2-8]\\d{5,6}", "\\d{6,7}"],
                                        [, , "(?:2[1-3]|3[0-7]|4\\d|5[2-58]|68\\d)\\d{4}", "\\d{6,7}", , , "211234"],
                                        [, , "(?:7[124-7]|8[1-9])\\d{5}", "\\d{7}", , , "7412345"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "5(?:6\\d{4}|90[0-4]\\d{3})", "\\d{6,7}", , , "561234"], "SR", 597, "00", , , , , , , , [
                                            [, "(\\d{3})(\\d{3})", "$1-$2", ["[2-4]|5[2-58]"]],
                                            [, "(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]],
                                            [, "(\\d{3})(\\d{4})", "$1-$2", ["59|[6-8]"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    SS: [, [, , "[19]\\d{8}", "\\d{9}"],
                                        [, , "18\\d{7}", "\\d{9}", , , "181234567"],
                                        [, , "(?:12|9[1257])\\d{7}", "\\d{9}", , , "977123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "SS", 211, "00", "0", , , "0", , , , [
                                            [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", , "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    ST: [, [, , "[29]\\d{6}", "\\d{7}"],
                                        [, , "22\\d{5}", "\\d{7}", , , "2221234"],
                                        [, , "9(?:0(?:0[5-9]|[1-9]\\d)|[89]\\d{2})\\d{3}", "\\d{7}", , , "9812345"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "ST", 239, "00", , , , , , , , [
                                            [, "(\\d{3})(\\d{4})", "$1 $2"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    SV: [, [, , "[267]\\d{7}|[89]\\d{6}(?:\\d{4})?", "\\d{7,8}|\\d{11}"],
                                        [, , "2[1-6]\\d{6}", "\\d{8}", , , "21234567"],
                                        [, , "[67]\\d{7}", "\\d{8}", , , "70123456"],
                                        [, , "800\\d{4}(?:\\d{4})?", "\\d{7}(?:\\d{4})?", , , "8001234"],
                                        [, , "900\\d{4}(?:\\d{4})?", "\\d{7}(?:\\d{4})?", , , "9001234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "SV", 503, "00", , , , , , , , [
                                            [, "(\\d{4})(\\d{4})", "$1 $2", ["[267]"]],
                                            [, "(\\d{3})(\\d{4})", "$1 $2", ["[89]"]],
                                            [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    SX: [, [, , "[5789]\\d{9}", "\\d{7}(?:\\d{3})?"],
                                        [, , "7215(?:4[2-8]|8[239]|9[056])\\d{4}", "\\d{7}(?:\\d{3})?", , , "7215425678"],
                                        [, , "7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}", "\\d{7}(?:\\d{3})?", , , "7215205678"],
                                        [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002123456"],
                                        [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002123456"],
                                        [, , "NA", "NA"],
                                        [, , "5(?:00|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
                                        [, , "NA", "NA"], "SX", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "721", [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    SY: [, [, , "[1-59]\\d{7,8}", "\\d{6,9}"],
                                        [, , "(?:1(?:1\\d?|4\\d|[2356])|2(?:1\\d?|[235])|3(?:[13]\\d|4)|4[13]|5[1-3])\\d{6}", "\\d{6,9}", , , "112345678"],
                                        [, , "9(?:22|[3-589]\\d|6[024-9])\\d{6}", "\\d{9}", , , "944567890"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "SY", 963, "00", "0", , , "0", , , , [
                                            [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", , 1],
                                            [, "(9\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", , 1]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    SZ: [, [, , "[027]\\d{7}", "\\d{8}"],
                                        [, , "2[2-5]\\d{6}", "\\d{8}", , , "22171234"],
                                        [, , "7[6-8]\\d{6}", "\\d{8}", , , "76123456"],
                                        [, , "0800\\d{4}", "\\d{8}", , , "08001234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "SZ", 268, "00", , , , , , , , [
                                            [, "(\\d{4})(\\d{4})", "$1 $2", ["[027]"]]
                                        ], , [, , "NA", "NA"], , , [, , "0800\\d{4}", "\\d{8}", , , "08001234"],
                                        [, , "NA", "NA"], 1, , [, , "NA", "NA"]
                                    ],
                                    TA: [, [, , "8\\d{3}", "\\d{4}"],
                                        [, , "8\\d{3}", "\\d{4}", , , "8999"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "TA", 290, "00", , , , , , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    TC: [, [, , "[5689]\\d{9}", "\\d{7}(?:\\d{3})?"],
                                        [, , "649(?:712|9(?:4\\d|50))\\d{4}", "\\d{7}(?:\\d{3})?", , , "6497121234"],
                                        [, , "649(?:2(?:3[129]|4[1-7])|3(?:3[1-389]|4[1-8])|4[34][1-3])\\d{4}", "\\d{7}(?:\\d{3})?", , , "6492311234"],
                                        [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002345678"],
                                        [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002345678"],
                                        [, , "NA", "NA"],
                                        [, , "5(?:00|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
                                        [, , "64971[01]\\d{4}", "\\d{10}", , , "6497101234"], "TC", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "649", [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    TD: [, [, , "[2679]\\d{7}", "\\d{8}"],
                                        [, , "22(?:[3789]0|5[0-5]|6[89])\\d{4}", "\\d{8}", , , "22501234"],
                                        [, , "(?:6[023568]\\d|77\\d|9\\d{2})\\d{5}", "\\d{8}", , , "63012345"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "TD", 235, "00|16", , , , , , "00", , [
                                            [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    TG: [, [, , "[29]\\d{7}", "\\d{8}"],
                                        [, , "2(?:2[2-7]|3[23]|44|55|66|77)\\d{5}", "\\d{8}", , , "22212345"],
                                        [, , "9[0-389]\\d{6}", "\\d{8}", , , "90112345"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "TG", 228, "00", , , , , , , , [
                                            [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    TH: [, [, , "[2-9]\\d{7,8}|1\\d{3}(?:\\d{5,6})?", "\\d{4}|\\d{8,10}"],
                                        [, , "(?:2\\d|3[2-9]|4[2-5]|5[2-6]|7[3-7])\\d{6}", "\\d{8}", , , "21234567"],
                                        [, , "(?:14|6[1-4]|[89]\\d)\\d{7}", "\\d{9}", , , "812345678"],
                                        [, , "1800\\d{6}", "\\d{10}", , , "1800123456"],
                                        [, , "1900\\d{6}", "\\d{10}", , , "1900123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "6[08]\\d{7}", "\\d{9}", , , "601234567"], "TH", 66, "00", "0", , , "0", , , , [
                                            [, "(2)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
                                            [, "([13-9]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["14|[3-9]"], "0$1"],
                                            [, "(1[89]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["1"], "$1"]
                                        ], , [, , "NA", "NA"], , , [, , "1\\d{3}", "\\d{4}", , , "1100"],
                                        [, , "1\\d{3}", "\\d{4}", , , "1100"], , , [, , "NA", "NA"]
                                    ],
                                    TJ: [, [, , "[3-589]\\d{8}", "\\d{3,9}"],
                                        [, , "(?:3(?:1[3-5]|2[245]|3[12]|4[24-7]|5[25]|72)|4(?:46|74|87))\\d{6}", "\\d{3,9}", , , "372123456"],
                                        [, , "(?:41[18]|5(?:0[125]|5\\d)|88\\d|9[0-35-9]\\d)\\d{6}", "\\d{9}", , , "917123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "TJ", 992, "810", "8", , , "8", , "8~10", , [
                                            [, "([349]\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[34]7|91[78]"], "(8) $1", , 1],
                                            [, "([4589]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[148]|[58]|9(?:1[59]|[0235-9])"], "(8) $1", , 1],
                                            [, "(331700)(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317", "33170", "331700"], "(8) $1", , 1],
                                            [, "(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]", "3(?:[1245]|3(?:[02-9]|1[0-589]))"], "(8) $1", , 1]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    TK: [, [, , "[2-47]\\d{3,6}", "\\d{4,7}"],
                                        [, , "(?:2[2-4]|[34]\\d)\\d{2,5}", "\\d{4,7}", , , "3101"],
                                        [, , "7[2-4]\\d{2,5}", "\\d{4,7}", , , "7290"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "TK", 690, "00", , , , , , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    TL: [, [, , "[2-489]\\d{6}|7\\d{6,7}", "\\d{7,8}"],
                                        [, , "(?:2[1-5]|3[1-9]|4[1-4])\\d{5}", "\\d{7}", , , "2112345"],
                                        [, , "7[3-8]\\d{6}", "\\d{8}", , , "77212345"],
                                        [, , "80\\d{5}", "\\d{7}", , , "8012345"],
                                        [, , "90\\d{5}", "\\d{7}", , , "9012345"],
                                        [, , "NA", "NA"],
                                        [, , "70\\d{5}", "\\d{7}", , , "7012345"],
                                        [, , "NA", "NA"], "TL", 670, "00", , , , , , , , [
                                            [, "(\\d{3})(\\d{4})", "$1 $2", ["[2-489]"]],
                                            [, "(\\d{4})(\\d{4})", "$1 $2", ["7"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    TM: [, [, , "[1-6]\\d{7}", "\\d{8}"],
                                        [, , "(?:1(?:2\\d|3[1-9])|2(?:22|4[0-35-8])|3(?:22|4[03-9])|4(?:22|3[128]|4\\d|6[15])|5(?:22|5[7-9]|6[014-689]))\\d{5}", "\\d{8}", , , "12345678"],
                                        [, , "6[1-9]\\d{6}", "\\d{8}", , , "66123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "TM", 993, "810", "8", , , "8", , "8~10", , [
                                            [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"],
                                            [, "(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"],
                                            [, "(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["13|[2-5]"], "(8 $1)"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    TN: [, [, , "[2-57-9]\\d{7}", "\\d{8}"],
                                        [, , "3(?:[012]\\d|6[0-4]|91)\\d{5}|7\\d{7}|81200\\d{3}", "\\d{8}", , , "71234567"],
                                        [, , "(?:[259]\\d|4[0-6])\\d{6}", "\\d{8}", , , "20123456"],
                                        [, , "8010\\d{4}", "\\d{8}", , , "80101234"],
                                        [, , "88\\d{6}", "\\d{8}", , , "88123456"],
                                        [, , "8[12]10\\d{4}", "\\d{8}", , , "81101234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "TN", 216, "00", , , , , , , , [
                                            [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    TO: [, [, , "[02-8]\\d{4,6}", "\\d{5,7}"],
                                        [, , "(?:2\\d|3[1-8]|4[1-4]|[56]0|7[0149]|8[05])\\d{3}", "\\d{5}", , , "20123"],
                                        [, , "(?:7[578]|8[47-9])\\d{5}", "\\d{7}", , , "7715123"],
                                        [, , "0800\\d{3}", "\\d{7}", , , "0800222"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "TO", 676, "00", , , , , , , , [
                                            [, "(\\d{2})(\\d{3})", "$1-$2", ["[1-6]|7[0-4]|8[05]"]],
                                            [, "(\\d{3})(\\d{4})", "$1 $2", ["7[5-9]|8[47-9]"]],
                                            [, "(\\d{4})(\\d{3})", "$1 $2", ["0"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], 1, , [, , "NA", "NA"]
                                    ],
                                    TR: [, [, , "[2-589]\\d{9}|444\\d{4}", "\\d{7,10}"],
                                        [, , "(?:2(?:[13][26]|[28][2468]|[45][268]|[67][246])|3(?:[13][28]|[24-6][2468]|[78][02468]|92)|4(?:[16][246]|[23578][2468]|4[26]))\\d{7}", "\\d{10}", , , "2123456789"],
                                        [, , "5(?:0[1-7]|22|[34]\\d|5[1-59]|9[246])\\d{7}", "\\d{10}", , , "5012345678"],
                                        [, , "800\\d{7}", "\\d{10}", , , "8001234567"],
                                        [, , "900\\d{7}", "\\d{10}", , , "9001234567"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "TR", 90, "00", "0", , , "0", , , , [
                                            [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]|4(?:[0-35-9]|4[0-35-9])"], "(0$1)", , 1],
                                            [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[589]"], "0$1", , 1],
                                            [, "(444)(\\d{1})(\\d{3})", "$1 $2 $3", ["444"]]
                                        ], , [, , "512\\d{7}", "\\d{10}", , , "5123456789"], , , [, , "444\\d{4}", "\\d{7}", , , "4441444"],
                                        [, , "444\\d{4}|850\\d{7}", "\\d{7,10}", , , "4441444"], , , [, , "NA", "NA"]
                                    ],
                                    TT: [, [, , "[589]\\d{9}", "\\d{7}(?:\\d{3})?"],
                                        [, , "868(?:2(?:01|2[1-6]|3[1-5])|6(?:0[79]|1[02-8]|2[1-9]|[3-69]\\d|7[0-79])|82[124])\\d{4}", "\\d{7}(?:\\d{3})?", , , "8682211234"],
                                        [, , "868(?:2(?:[789]\\d)|3(?:0[1-9]|1[02-9]|[2-9]\\d)|4[6-9]\\d|6(?:20|78|8\\d)|7(?:0[1-9]|1[02-9]|[2-9]\\d))\\d{4}", "\\d{7}(?:\\d{3})?", , , "8682911234"],
                                        [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002345678"],
                                        [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002345678"],
                                        [, , "NA", "NA"],
                                        [, , "5(?:00|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
                                        [, , "NA", "NA"], "TT", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "868", [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "868619\\d{4}", "\\d{10}", , , "8686191234"]
                                    ],
                                    TV: [, [, , "[279]\\d{4,6}", "\\d{5,7}"],
                                        [, , "2[02-9]\\d{3}", "\\d{5}", , , "20123"],
                                        [, , "(?:70\\d|90)\\d{4}", "\\d{6,7}", , , "901234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "TV", 688, "00", , , , , , , , , , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    TW: [, [, , "[2-689]\\d{7,8}|7\\d{7,9}", "\\d{8,10}"],
                                        [, , "[2-8]\\d{7,8}", "\\d{8,9}", , , "21234567"],
                                        [, , "9\\d{8}", "\\d{9}", , , "912345678"],
                                        [, , "800\\d{6}", "\\d{9}", , , "800123456"],
                                        [, , "900\\d{6}", "\\d{9}", , , "900123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "70\\d{8}", "\\d{10}", , , "7012345678"], "TW", 886, "0(?:0[25679]|19)", "0", "#", , "0", , , , [
                                            [, "([2-8])(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[2-6]|[78][1-9]"], "0$1"],
                                            [, "([89]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["80|9"], "0$1"],
                                            [, "(70)(\\d{4})(\\d{4})", "$1 $2 $3", ["70"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    TZ: [, [, , "\\d{9}", "\\d{7,9}"],
                                        [, , "2[2-8]\\d{7}", "\\d{7,9}", , , "222345678"],
                                        [, , "(?:6[125-9]|7[1-9])\\d{7}", "\\d{9}", , , "621234567"],
                                        [, , "80[08]\\d{6}", "\\d{9}", , , "800123456"],
                                        [, , "90\\d{7}", "\\d{9}", , , "900123456"],
                                        [, , "8(?:40|6[01])\\d{6}", "\\d{9}", , , "840123456"],
                                        [, , "NA", "NA"],
                                        [, , "41\\d{7}", "\\d{9}", , , "412345678"], "TZ", 255, "00[056]", "0", , , "0", , , , [
                                            [, "([24]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"],
                                            [, "([67]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"],
                                            [, "([89]\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    UA: [, [, , "[3-9]\\d{8}", "\\d{5,9}"],
                                        [, , "(?:3[1-8]|4[13-8]|5[1-7]|6[12459])\\d{7}", "\\d{5,9}", , , "311234567"],
                                        [, , "(?:39|50|6[36-8]|73|9[1-9])\\d{7}", "\\d{9}", , , "391234567"],
                                        [, , "800\\d{6}", "\\d{9}", , , "800123456"],
                                        [, , "900\\d{6}", "\\d{9}", , , "900123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "89\\d{7}", "\\d{9}", , , "891234567"], "UA", 380, "00", "0", , , "0", , "0~0", , [
                                            [, "([3-9]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[38]9|4(?:[45][0-5]|87)|5(?:0|6[37]|7[37])|6[36-8]|73|9[1-9]", "[38]9|4(?:[45][0-5]|87)|5(?:0|6(?:3[14-7]|7)|7[37])|6[36-8]|73|9[1-9]"], "0$1"],
                                            [, "([3-689]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["3[1-8]2|4[13678]2|5(?:[12457]2|6[24])|6(?:[49]2|[12][29]|5[24])|8[0-8]|90", "3(?:[1-46-8]2[013-9]|52)|4(?:[1378]2|62[013-9])|5(?:[12457]2|6[24])|6(?:[49]2|[12][29]|5[24])|8[0-8]|90"], "0$1"],
                                            [, "([3-6]\\d{3})(\\d{5})", "$1 $2", ["3(?:5[013-9]|[1-46-8])|4(?:[137][013-9]|6|[45][6-9]|8[4-6])|5(?:[1245][013-9]|6[0135-9]|3|7[4-6])|6(?:[49][013-9]|5[0135-9]|[12][13-8])", "3(?:5[013-9]|[1-46-8](?:22|[013-9]))|4(?:[137][013-9]|6(?:[013-9]|22)|[45][6-9]|8[4-6])|5(?:[1245][013-9]|6(?:3[02389]|[015689])|3|7[4-6])|6(?:[49][013-9]|5[0135-9]|[12][13-8])"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    UG: [, [, , "\\d{9}", "\\d{5,9}"],
                                        [, , "20(?:[0147]\\d{2}|2(?:40|[5-9]\\d)|3[23]\\d|5[0-4]\\d|6[03]\\d|8[0-2]\\d)\\d{4}|[34]\\d{8}", "\\d{5,9}", , , "312345678"],
                                        [, , "2030\\d{5}|7(?:0[0-7]|[15789]\\d|2[03]|30|[46][0-4])\\d{6}", "\\d{9}", , , "712345678"],
                                        [, , "800[123]\\d{5}", "\\d{9}", , , "800123456"],
                                        [, , "90[123]\\d{6}", "\\d{9}", , , "901123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "UG", 256, "00[057]", "0", , , "0", , , , [
                                            [, "(\\d{3})(\\d{6})", "$1 $2", ["[7-9]|20(?:[013-8]|2[5-9])|4(?:6[45]|[7-9])"], "0$1"],
                                            [, "(\\d{2})(\\d{7})", "$1 $2", ["3|4(?:[1-5]|6[0-36-9])"], "0$1"],
                                            [, "(2024)(\\d{5})", "$1 $2", ["2024"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    US: [, [, , "[2-9]\\d{9}", "\\d{7}(?:\\d{3})?"],
                                        [, , "(?:2(?:0[1-35-9]|1[02-9]|2[04589]|3[149]|4[08]|5[1-46]|6[0279]|7[026]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[014679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|69|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-37]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[16]|5[017]|6[0-279]|78|8[12])|7(?:0[1-46-8]|1[02-9]|2[0457]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|28|3[0-25]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[014678]|4[0179]|5[12469]|7[0-3589]|8[0459]))[2-9]\\d{6}", "\\d{7}(?:\\d{3})?", , , "2015550123"],
                                        [, , "(?:2(?:0[1-35-9]|1[02-9]|2[04589]|3[149]|4[08]|5[1-46]|6[0279]|7[026]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[014679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|69|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-37]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[16]|5[017]|6[0-279]|78|8[12])|7(?:0[1-46-8]|1[02-9]|2[0457]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|28|3[0-25]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[014678]|4[0179]|5[12469]|7[0-3589]|8[0459]))[2-9]\\d{6}", "\\d{7}(?:\\d{3})?", , , "2015550123"],
                                        [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002345678"],
                                        [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002345678"],
                                        [, , "NA", "NA"],
                                        [, , "5(?:00|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
                                        [, , "NA", "NA"], "US", 1, "011", "1", , , "1", , , 1, [
                                            [, "(\\d{3})(\\d{4})", "$1-$2", , , , 1],
                                            [, "(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", , , , 1]
                                        ],
                                        [
                                            [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3"]
                                        ],
                                        [, , "NA", "NA"], 1, , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    UY: [, [, , "[2489]\\d{6,7}", "\\d{7,8}"],
                                        [, , "2\\d{7}|4[2-7]\\d{6}", "\\d{7,8}", , , "21231234"],
                                        [, , "9[1-9]\\d{6}", "\\d{8}", , , "94231234"],
                                        [, , "80[05]\\d{4}", "\\d{7}", , , "8001234"],
                                        [, , "90[0-8]\\d{4}", "\\d{7}", , , "9001234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "UY", 598, "0(?:1[3-9]\\d|0)", "0", " int. ", , "0", , "00", , [
                                            [, "(\\d{4})(\\d{4})", "$1 $2", ["[24]"]],
                                            [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9[1-9]"], "0$1"],
                                            [, "(\\d{3})(\\d{4})", "$1 $2", ["[89]0"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    UZ: [, [, , "[679]\\d{8}", "\\d{7,9}"],
                                        [, , "(?:6(?:1(?:22|3[124]|4[1-4]|5[123578]|64)|2(?:22|3[0-57-9]|41)|5(?:22|3[3-7]|5[024-8])|6\\d{2}|7(?:[23]\\d|7[69])|9(?:22|4[1-8]|6[135]))|7(?:0(?:5[4-9]|6[0146]|7[12456]|9[135-8])|1[12]\\d|2(?:22|3[1345789]|4[123579]|5[14])|3(?:2\\d|3[1578]|4[1-35-7]|5[1-57]|61)|4(?:2\\d|3[1-579]|7[1-79])|5(?:22|5[1-9]|6[1457])|6(?:22|3[12457]|4[13-8])|9(?:22|5[1-9])))\\d{5}", "\\d{7,9}", , , "662345678"],
                                        [, , "6(?:1(?:2(?:98|2[01])|35[0-4]|50\\d|61[23]|7(?:[01][017]|4\\d|55|9[5-9]))|2(?:11\\d|2(?:[12]1|9[01379])|5(?:[126]\\d|3[0-4])|7\\d{2})|5(?:19[01]|2(?:27|9[26])|30\\d|59\\d|7\\d{2})|6(?:2(?:1[5-9]|2[0367]|38|41|52|60)|3[79]\\d|4(?:56|83)|7(?:[07]\\d|1[017]|3[07]|4[047]|5[057]|67|8[0178]|9[79])|9[0-3]\\d)|7(?:2(?:24|3[237]|4[5-9]|7[15-8])|5(?:7[12]|8[0589])|7(?:0\\d|[39][07])|9(?:0\\d|7[079]))|9(?:2(?:1[1267]|5\\d|3[01]|7[0-4])|5[67]\\d|6(?:2[0-26]|8\\d)|7\\d{2}))\\d{4}|7(?:0\\d{3}|1(?:13[01]|6(?:0[47]|1[67]|66)|71[3-69]|98\\d)|2(?:2(?:2[79]|95)|3(?:2[5-9]|6[0-6])|57\\d|7(?:0\\d|1[17]|2[27]|3[37]|44|5[057]|66|88))|3(?:2(?:1[0-6]|21|3[469]|7[159])|33\\d|5(?:0[0-4]|5[579]|9\\d)|7(?:[0-3579]\\d|4[0467]|6[67]|8[078])|9[4-6]\\d)|4(?:2(?:29|5[0257]|6[0-7]|7[1-57])|5(?:1[0-4]|8\\d|9[5-9])|7(?:0\\d|1[024589]|2[0127]|3[0137]|[46][07]|5[01]|7[5-9]|9[079])|9(?:7[015-9]|[89]\\d))|5(?:112|2(?:0\\d|2[29]|[49]4)|3[1568]\\d|52[6-9]|7(?:0[01578]|1[017]|[23]7|4[047]|[5-7]\\d|8[78]|9[079]))|6(?:2(?:2[1245]|4[2-4])|39\\d|41[179]|5(?:[349]\\d|5[0-2])|7(?:0[017]|[13]\\d|22|44|55|67|88))|9(?:22[128]|3(?:2[0-4]|7\\d)|57[05629]|7(?:2[05-9]|3[37]|4\\d|60|7[2579]|87|9[07])))\\d{4}|9[0-57-9]\\d{7}", "\\d{9}", , , "912345678"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "UZ", 998, "810", "8", , , "8", , "8~10", , [
                                            [, "([679]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", , "8 $1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    VA: [, [, , "(?:0(?:878\\d{5}|6698\\d{5})|[1589]\\d{5,10}|3(?:[12457-9]\\d{8}|[36]\\d{7,9}))", "\\d{6,11}"],
                                        [, , "06698\\d{5}", "\\d{10}", , , "0669812345"],
                                        [, , "3(?:[12457-9]\\d{8}|6\\d{7,8}|3\\d{7,9})", "\\d{9,11}", , , "3123456789"],
                                        [, , "80(?:0\\d{6}|3\\d{3})", "\\d{6,9}", , , "800123456"],
                                        [, , "0878\\d{5}|1(?:44|6[346])\\d{6}|89(?:2\\d{3}|4(?:[0-4]\\d{2}|[5-9]\\d{4})|5(?:[0-4]\\d{2}|[5-9]\\d{6})|9\\d{6})", "\\d{6,10}", , , "899123456"],
                                        [, , "84(?:[08]\\d{6}|[17]\\d{3})", "\\d{6,9}", , , "848123456"],
                                        [, , "1(?:78\\d|99)\\d{6}", "\\d{9,10}", , , "1781234567"],
                                        [, , "55\\d{8}", "\\d{10}", , , "5512345678"], "VA", 39, "00", , , , , , , , , , [, , "NA", "NA"], , , [, , "848\\d{6}", "\\d{9}", , , "848123456"],
                                        [, , "NA", "NA"], 1, , [, , "NA", "NA"]
                                    ],
                                    VC: [, [, , "[5789]\\d{9}", "\\d{7}(?:\\d{3})?"],
                                        [, , "784(?:266|3(?:6[6-9]|7\\d|8[0-24-6])|4(?:38|5[0-36-8]|8[0-8])|5(?:55|7[0-2]|93)|638|784)\\d{4}", "\\d{7}(?:\\d{3})?", , , "7842661234"],
                                        [, , "784(?:4(?:3[0-4]|5[45]|89|9[0-58])|5(?:2[6-9]|3[0-4]))\\d{4}", "\\d{7}(?:\\d{3})?", , , "7844301234"],
                                        [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002345678"],
                                        [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002345678"],
                                        [, , "NA", "NA"],
                                        [, , "5(?:00|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
                                        [, , "NA", "NA"], "VC", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "784", [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    VE: [, [, , "[24589]\\d{9}", "\\d{7,10}"],
                                        [, , "(?:2(?:12|3[457-9]|[58][1-9]|[467]\\d|9[1-6])|50[01])\\d{7}", "\\d{7,10}", , , "2121234567"],
                                        [, , "4(?:1[24-8]|2[46])\\d{7}", "\\d{10}", , , "4121234567"],
                                        [, , "800\\d{7}", "\\d{10}", , , "8001234567"],
                                        [, , "900\\d{7}", "\\d{10}", , , "9001234567"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "VE", 58, "00", "0", , , "0", , , , [
                                            [, "(\\d{3})(\\d{7})", "$1-$2", , "0$1", "$CC $1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    VG: [, [, , "[2589]\\d{9}", "\\d{7}(?:\\d{3})?"],
                                        [, , "284(?:(?:229|4(?:22|9[45])|774|8(?:52|6[459]))\\d{4}|496[0-5]\\d{3})", "\\d{7}(?:\\d{3})?", , , "2842291234"],
                                        [, , "284(?:(?:3(?:0[0-3]|4[0-367]|94)|4(?:4[0-6]|68|99)|54[0-57])\\d{4}|496[6-9]\\d{3})", "\\d{7}(?:\\d{3})?", , , "2843001234"],
                                        [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002345678"],
                                        [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002345678"],
                                        [, , "NA", "NA"],
                                        [, , "5(?:00|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
                                        [, , "NA", "NA"], "VG", 1, "011", "1", , , "1", , , , , , [, , "NA", "NA"], , "284", [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    VI: [, [, , "[3589]\\d{9}", "\\d{7}(?:\\d{3})?"],
                                        [, , "340(?:2(?:01|2[0678]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-589]|27|7\\d)|884|998)\\d{4}", "\\d{7}(?:\\d{3})?", , , "3406421234"],
                                        [, , "340(?:2(?:01|2[0678]|44|77)|3(?:32|44)|4(?:22|7[34])|5(?:1[34]|55)|6(?:26|4[23]|77|9[023])|7(?:1[2-589]|27|7\\d)|884|998)\\d{4}", "\\d{7}(?:\\d{3})?", , , "3406421234"],
                                        [, , "8(?:00|44|55|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "8002345678"],
                                        [, , "900[2-9]\\d{6}", "\\d{10}", , , "9002345678"],
                                        [, , "NA", "NA"],
                                        [, , "5(?:00|33|44|66|77|88)[2-9]\\d{6}", "\\d{10}", , , "5002345678"],
                                        [, , "NA", "NA"], "VI", 1, "011", "1", , , "1", , , 1, , , [, , "NA", "NA"], , "340", [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    VN: [, [, , "[17]\\d{6,9}|[2-69]\\d{7,9}|8\\d{6,8}", "\\d{7,10}"],
                                        [, , "(?:2(?:[025-79]|1[0189]|[348][01])|3(?:[0136-9]|[25][01])|4\\d|5(?:[01][01]|[2-9])|6(?:[0-46-8]|5[01])|7(?:[02-79]|[18][01]))\\d{7}|8(?:[1-57]\\d|[689][0-79])\\d{6}", "\\d{9,10}", , , "2101234567"],
                                        [, , "(?:9\\d|1(?:2\\d|6[2-9]|8[68]|99))\\d{7}|8[689]8\\d{6}", "\\d{9,10}", , , "912345678"],
                                        [, , "1800\\d{4,6}", "\\d{8,10}", , , "1800123456"],
                                        [, , "1900\\d{4,6}", "\\d{8,10}", , , "1900123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "VN", 84, "00", "0", , , "0", , , , [
                                            [, "([17]99)(\\d{4})", "$1 $2", ["[17]99"], "0$1", , 1],
                                            [, "([48])(\\d{4})(\\d{4})", "$1 $2 $3", ["4|8(?:[1-57]|[689][0-79])"], "0$1", , 1],
                                            [, "([235-7]\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["2[025-79]|3[0136-9]|5[2-9]|6[0-46-8]|7[02-79]"], "0$1", , 1],
                                            [, "(80)(\\d{5})", "$1 $2", ["80"], "0$1", , 1],
                                            [, "(69\\d)(\\d{4,5})", "$1 $2", ["69"], "0$1", , 1],
                                            [, "([235-7]\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["2[1348]|3[25]|5[01]|65|7[18]"], "0$1", , 1],
                                            [, "([89]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8[689]8|9"], "0$1", , 1],
                                            [, "(1[2689]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:[26]|8[68]|99)"], "0$1", , 1],
                                            [, "(1[89]00)(\\d{4,6})", "$1 $2", ["1[89]0"], "$1", , 1]
                                        ], , [, , "NA", "NA"], , , [, , "[17]99\\d{4}|69\\d{5,6}", "\\d{7,8}", , , "1992000"],
                                        [, , "[17]99\\d{4}|69\\d{5,6}|80\\d{5}", "\\d{7,8}", , , "1992000"], , , [, , "NA", "NA"]
                                    ],
                                    VU: [, [, , "[2-57-9]\\d{4,6}", "\\d{5,7}"],
                                        [, , "(?:2[02-9]\\d|3(?:[5-7]\\d|8[0-8])|48[4-9]|88\\d)\\d{2}", "\\d{5}", , , "22123"],
                                        [, , "(?:5(?:7[2-5]|[0-689]\\d)|7[013-7]\\d)\\d{4}", "\\d{7}", , , "5912345"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "VU", 678, "00", , , , , , , , [
                                            [, "(\\d{3})(\\d{4})", "$1 $2", ["[579]"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "3[03]\\d{3}|900\\d{4}", "\\d{5,7}", , , "30123"], , , [, , "NA", "NA"]
                                    ],
                                    WF: [, [, , "[4-8]\\d{5}", "\\d{6}"],
                                        [, , "(?:50|68|72)\\d{4}", "\\d{6}", , , "501234"],
                                        [, , "(?:50|68|72|8[23])\\d{4}", "\\d{6}", , , "501234"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "WF", 681, "00", , , , , , , , [
                                            [, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "[48]0\\d{4}", "\\d{6}", , , "401234"]
                                    ],
                                    WS: [, [, , "[2-8]\\d{4,6}", "\\d{5,7}"],
                                        [, , "(?:[2-5]\\d|6[1-9]|84\\d{2})\\d{3}", "\\d{5,7}", , , "22123"],
                                        [, , "(?:60|7[25-7]\\d)\\d{4}", "\\d{6,7}", , , "601234"],
                                        [, , "800\\d{3}", "\\d{6}", , , "800123"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "WS", 685, "0", , , , , , , , [
                                            [, "(8\\d{2})(\\d{3,4})", "$1 $2", ["8"]],
                                            [, "(7\\d)(\\d{5})", "$1 $2", ["7"]],
                                            [, "(\\d{5})", "$1", ["[2-6]"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    YE: [, [, , "[1-7]\\d{6,8}", "\\d{6,9}"],
                                        [, , "(?:1(?:7\\d|[2-68])|2[2-68]|3[2358]|4[2-58]|5[2-6]|6[3-58]|7[24-68])\\d{5}", "\\d{6,8}", , , "1234567"],
                                        [, , "7[0137]\\d{7}", "\\d{9}", , , "712345678"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "YE", 967, "00", "0", , , "0", , , , [
                                            [, "([1-7])(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7[24-68]"], "0$1"],
                                            [, "(7\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["7[0137]"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    YT: [, [, , "[268]\\d{8}", "\\d{9}"],
                                        [, , "269(?:6[0-4]|50)\\d{4}", "\\d{9}", , , "269601234"],
                                        [, , "639\\d{6}", "\\d{9}", , , "639123456"],
                                        [, , "80\\d{7}", "\\d{9}", , , "801234567"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "YT", 262, "00", "0", , , "0", , , , , , [, , "NA", "NA"], , "269|63", [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    ZA: [, [, , "[1-79]\\d{8}|8(?:[067]\\d{7}|[1-4]\\d{3,7})", "\\d{5,9}"],
                                        [, , "(?:1[0-8]|2[0-378]|3[1-69]|4\\d|5[1346-8])\\d{7}", "\\d{9}", , , "101234567"],
                                        [, , "(?:6[0-5]|7[0-46-9])\\d{7}|8[1-4]\\d{3,7}", "\\d{5,9}", , , "711234567"],
                                        [, , "80\\d{7}", "\\d{9}", , , "801234567"],
                                        [, , "86[2-9]\\d{6}|90\\d{7}", "\\d{9}", , , "862345678"],
                                        [, , "860\\d{6}", "\\d{9}", , , "860123456"],
                                        [, , "NA", "NA"],
                                        [, , "87\\d{7}", "\\d{9}", , , "871234567"], "ZA", 27, "00", "0", , , "0", , , , [
                                            [, "(860)(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"],
                                            [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-79]|8(?:[0-47]|6[1-9])"], "0$1"],
                                            [, "(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"],
                                            [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "861\\d{6}", "\\d{9}", , , "861123456"], , , [, , "NA", "NA"]
                                    ],
                                    ZM: [, [, , "[289]\\d{8}", "\\d{9}"],
                                        [, , "21[1-8]\\d{6}", "\\d{9}", , , "211234567"],
                                        [, , "9(?:5[034589]|[67]\\d)\\d{6}", "\\d{9}", , , "955123456"],
                                        [, , "800\\d{6}", "\\d{9}", , , "800123456"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "ZM", 260, "00", "0", , , "0", , , , [
                                            [, "([29]\\d)(\\d{7})", "$1 $2", ["[29]"], "0$1"],
                                            [, "(800)(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    ZW: [, [, , "2(?:[012457-9]\\d{3,8}|6(?:[14]\\d{7}|\\d{4}))|[13-79]\\d{4,9}|8[06]\\d{8}", "\\d{3,10}"],
                                        [, , "(?:2(?:0(?:4\\d|5\\d{2})|2[278]\\d|48\\d|7(?:[1-7]\\d|[089]\\d{2})|8(?:[2-57-9]|[146]\\d{2})|98)|3(?:08|17|3[78]|7(?:[19]|[56]\\d)|8[37]|98)|5[15][78]|6(?:28\\d{2}|[36]7|75\\d|[69]8|8(?:7\\d|8)))\\d{3}|(?:2(?:1[39]|2[0157]|6[14]|7[35]|84)|329)\\d{7}|(?:1(?:3\\d{2}|9\\d|[4-8])|2(?:0\\d{2}|[569]\\d)|3(?:[26]|[013459]\\d)|5(?:0|5\\d{2}|[689]\\d)|6(?:[39]|[01246]\\d|[78]\\d{2}))\\d{3}|(?:29\\d|39|54)\\d{6}|(?:(?:25|54)83|2582\\d)\\d{3}|(?:4\\d{6,7}|9[2-9]\\d{4,5})", "\\d{3,10}", , , "1312345"],
                                        [, , "7[1378]\\d{7}", "\\d{9}", , , "711234567"],
                                        [, , "800\\d{7}", "\\d{10}", , , "8001234567"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "86(?:1[12]|30|44|55|77|8[367]|99)\\d{6}", "\\d{10}", , , "8686123456"], "ZW", 263, "00", "0", , , "0", , , , [
                                            [, "([49])(\\d{3})(\\d{2,4})", "$1 $2 $3", ["4|9[2-9]"], "0$1"],
                                            [, "(7\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["7"], "0$1"],
                                            [, "(86\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["86[24]"], "0$1"],
                                            [, "([2356]\\d{2})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8|[78])|3(?:08|17|3[78]|7[1569]|8[37]|98)|5[15][78]|6(?:[29]8|[38]7|6[78]|75|[89]8)"], "0$1"],
                                            [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|6[14]|7[35]|84)|329"], "0$1"],
                                            [, "([1-356]\\d)(\\d{3,5})", "$1 $2", ["1[3-9]|2[0569]|3[0-69]|5[05689]|6[0-46-9]"], "0$1"],
                                            [, "([235]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[23]9|54"], "0$1"],
                                            [, "([25]\\d{3})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258[23]|5483"], "0$1"],
                                            [, "(8\\d{3})(\\d{6})", "$1 $2", ["86"], "0$1"],
                                            [, "(80\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    800: [, [, , "\\d{8}", "\\d{8}", , , "12345678"],
                                        [, , "NA", "NA", , , "12345678"],
                                        [, , "NA", "NA", , , "12345678"],
                                        [, , "\\d{8}", "\\d{8}", , , "12345678"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "001", 800, , , , , , , , 1, [
                                            [, "(\\d{4})(\\d{4})", "$1 $2"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], 1, , [, , "NA", "NA"]
                                    ],
                                    808: [, [, , "\\d{8}", "\\d{8}", , , "12345678"],
                                        [, , "NA", "NA", , , "12345678"],
                                        [, , "NA", "NA", , , "12345678"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "\\d{8}", "\\d{8}", , , "12345678"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "001", 808, , , , , , , , 1, [
                                            [, "(\\d{4})(\\d{4})", "$1 $2"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], 1, , [, , "NA", "NA"]
                                    ],
                                    870: [, [, , "[35-7]\\d{8}", "\\d{9}", , , "301234567"],
                                        [, , "NA", "NA", , , "301234567"],
                                        [, , "(?:[356]\\d|7[6-8])\\d{7}", "\\d{9}", , , "301234567"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "001", 870, , , , , , , , , [
                                            [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    878: [, [, , "1\\d{11}", "\\d{12}", , , "101234567890"],
                                        [, , "NA", "NA", , , "101234567890"],
                                        [, , "NA", "NA", , , "101234567890"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "10\\d{10}", "\\d{12}", , , "101234567890"], "001", 878, , , , , , , , 1, [
                                            [, "(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    881: [, [, , "[67]\\d{8}", "\\d{9}", , , "612345678"],
                                        [, , "NA", "NA", , , "612345678"],
                                        [, , "[67]\\d{8}", "\\d{9}", , , "612345678"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "001", 881, , , , , , , , , [
                                            [, "(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[67]"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    882: [, [, , "[13]\\d{6,11}", "\\d{7,12}", , , "3451234567"],
                                        [, , "NA", "NA", , , "3451234567"],
                                        [, , "3(?:2\\d{3}|37\\d{2}|4(?:2|7\\d{3}))\\d{4}", "\\d{7,10}", , , "3451234567"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15678]|9[0689])\\d{4}|6\\d{5,10})|345\\d{7}", "\\d{7,12}", , , "3451234567"], "001", 882, , , , , , , , , [
                                            [, "(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]],
                                            [, "(\\d{2})(\\d{5})", "$1 $2", ["16|342"]],
                                            [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["34[57]"]],
                                            [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["348"]],
                                            [, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1"]],
                                            [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]],
                                            [, "(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["16"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "348[57]\\d{7}", "\\d{11}", , , "3451234567"]
                                    ],
                                    883: [, [, , "51\\d{7}(?:\\d{3})?", "\\d{9}(?:\\d{3})?", , , "510012345"],
                                        [, , "NA", "NA", , , "510012345"],
                                        [, , "NA", "NA", , , "510012345"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "51(?:00\\d{5}(?:\\d{3})?|[13]0\\d{8})", "\\d{9}(?:\\d{3})?", , , "510012345"], "001", 883, , , , , , , , 1, [
                                            [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]],
                                            [, "(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["510"]],
                                            [, "(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], , , [, , "NA", "NA"]
                                    ],
                                    888: [, [, , "\\d{11}", "\\d{11}", , , "12345678901"],
                                        [, , "NA", "NA", , , "12345678901"],
                                        [, , "NA", "NA", , , "12345678901"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "001", 888, , , , , , , , 1, [
                                            [, "(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "\\d{11}", "\\d{11}", , , "12345678901"], 1, , [, , "NA", "NA"]
                                    ],
                                    979: [, [, , "\\d{9}", "\\d{9}", , , "123456789"],
                                        [, , "NA", "NA", , , "123456789"],
                                        [, , "NA", "NA", , , "123456789"],
                                        [, , "NA", "NA"],
                                        [, , "\\d{9}", "\\d{9}", , , "123456789"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"],
                                        [, , "NA", "NA"], "001", 979, , , , , , , , 1, [
                                            [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3"]
                                        ], , [, , "NA", "NA"], , , [, , "NA", "NA"],
                                        [, , "NA", "NA"], 1, , [, , "NA", "NA"]
                                    ]
                                }, i18n.phonenumbers.PhoneNumberUtil = function() {
                                    this.regionToMetadataMap = {}
                                }, goog.addSingletonGetter(i18n.phonenumbers.PhoneNumberUtil), i18n.phonenumbers.Error = {
                                    INVALID_COUNTRY_CODE: "Invalid country calling code",
                                    NOT_A_NUMBER: "The string supplied did not seem to be a phone number",
                                    TOO_SHORT_AFTER_IDD: "Phone number too short after IDD",
                                    TOO_SHORT_NSN: "The string supplied is too short to be a phone number",
                                    TOO_LONG: "The string supplied is too long to be a phone number"
                                }, i18n.phonenumbers.PhoneNumberUtil.NANPA_COUNTRY_CODE_ = 1, i18n.phonenumbers.PhoneNumberUtil.MIN_LENGTH_FOR_NSN_ = 2, i18n.phonenumbers.PhoneNumberUtil.MAX_LENGTH_FOR_NSN_ = 17, i18n.phonenumbers.PhoneNumberUtil.MAX_LENGTH_COUNTRY_CODE_ = 3, i18n.phonenumbers.PhoneNumberUtil.MAX_INPUT_STRING_LENGTH_ = 250, i18n.phonenumbers.PhoneNumberUtil.UNKNOWN_REGION_ = "ZZ", i18n.phonenumbers.PhoneNumberUtil.COLOMBIA_MOBILE_TO_FIXED_LINE_PREFIX_ = "3", i18n.phonenumbers.PhoneNumberUtil.MOBILE_TOKEN_MAPPINGS_ = {
                                    52: "1",
                                    54: "9"
                                }, i18n.phonenumbers.PhoneNumberUtil.GEO_MOBILE_COUNTRIES_ = [52, 54, 55], i18n.phonenumbers.PhoneNumberUtil.PLUS_SIGN = "+", i18n.phonenumbers.PhoneNumberUtil.STAR_SIGN_ = "*", i18n.phonenumbers.PhoneNumberUtil.RFC3966_EXTN_PREFIX_ = ";ext=", i18n.phonenumbers.PhoneNumberUtil.RFC3966_PREFIX_ = "tel:", i18n.phonenumbers.PhoneNumberUtil.RFC3966_PHONE_CONTEXT_ = ";phone-context=", i18n.phonenumbers.PhoneNumberUtil.RFC3966_ISDN_SUBADDRESS_ = ";isub=", i18n.phonenumbers.PhoneNumberUtil.DIGIT_MAPPINGS = {
                                    0: "0",
                                    1: "1",
                                    2: "2",
                                    3: "3",
                                    4: "4",
                                    5: "5",
                                    6: "6",
                                    7: "7",
                                    8: "8",
                                    9: "9",
                                    "０": "0",
                                    "１": "1",
                                    "２": "2",
                                    "３": "3",
                                    "４": "4",
                                    "５": "5",
                                    "６": "6",
                                    "７": "7",
                                    "８": "8",
                                    "９": "9",
                                    "٠": "0",
                                    "١": "1",
                                    "٢": "2",
                                    "٣": "3",
                                    "٤": "4",
                                    "٥": "5",
                                    "٦": "6",
                                    "٧": "7",
                                    "٨": "8",
                                    "٩": "9",
                                    "۰": "0",
                                    "۱": "1",
                                    "۲": "2",
                                    "۳": "3",
                                    "۴": "4",
                                    "۵": "5",
                                    "۶": "6",
                                    "۷": "7",
                                    "۸": "8",
                                    "۹": "9"
                                }, i18n.phonenumbers.PhoneNumberUtil.DIALLABLE_CHAR_MAPPINGS_ = {
                                    0: "0",
                                    1: "1",
                                    2: "2",
                                    3: "3",
                                    4: "4",
                                    5: "5",
                                    6: "6",
                                    7: "7",
                                    8: "8",
                                    9: "9",
                                    "+": i18n.phonenumbers.PhoneNumberUtil.PLUS_SIGN,
                                    "*": "*"
                                }, i18n.phonenumbers.PhoneNumberUtil.ALPHA_MAPPINGS_ = {
                                    A: "2",
                                    B: "2",
                                    C: "2",
                                    D: "3",
                                    E: "3",
                                    F: "3",
                                    G: "4",
                                    H: "4",
                                    I: "4",
                                    J: "5",
                                    K: "5",
                                    L: "5",
                                    M: "6",
                                    N: "6",
                                    O: "6",
                                    P: "7",
                                    Q: "7",
                                    R: "7",
                                    S: "7",
                                    T: "8",
                                    U: "8",
                                    V: "8",
                                    W: "9",
                                    X: "9",
                                    Y: "9",
                                    Z: "9"
                                }, i18n.phonenumbers.PhoneNumberUtil.ALL_NORMALIZATION_MAPPINGS_ = {
                                    0: "0",
                                    1: "1",
                                    2: "2",
                                    3: "3",
                                    4: "4",
                                    5: "5",
                                    6: "6",
                                    7: "7",
                                    8: "8",
                                    9: "9",
                                    "０": "0",
                                    "１": "1",
                                    "２": "2",
                                    "３": "3",
                                    "４": "4",
                                    "５": "5",
                                    "６": "6",
                                    "７": "7",
                                    "８": "8",
                                    "９": "9",
                                    "٠": "0",
                                    "١": "1",
                                    "٢": "2",
                                    "٣": "3",
                                    "٤": "4",
                                    "٥": "5",
                                    "٦": "6",
                                    "٧": "7",
                                    "٨": "8",
                                    "٩": "9",
                                    "۰": "0",
                                    "۱": "1",
                                    "۲": "2",
                                    "۳": "3",
                                    "۴": "4",
                                    "۵": "5",
                                    "۶": "6",
                                    "۷": "7",
                                    "۸": "8",
                                    "۹": "9",
                                    A: "2",
                                    B: "2",
                                    C: "2",
                                    D: "3",
                                    E: "3",
                                    F: "3",
                                    G: "4",
                                    H: "4",
                                    I: "4",
                                    J: "5",
                                    K: "5",
                                    L: "5",
                                    M: "6",
                                    N: "6",
                                    O: "6",
                                    P: "7",
                                    Q: "7",
                                    R: "7",
                                    S: "7",
                                    T: "8",
                                    U: "8",
                                    V: "8",
                                    W: "9",
                                    X: "9",
                                    Y: "9",
                                    Z: "9"
                                }, i18n.phonenumbers.PhoneNumberUtil.ALL_PLUS_NUMBER_GROUPING_SYMBOLS_ = {
                                    0: "0",
                                    1: "1",
                                    2: "2",
                                    3: "3",
                                    4: "4",
                                    5: "5",
                                    6: "6",
                                    7: "7",
                                    8: "8",
                                    9: "9",
                                    A: "A",
                                    B: "B",
                                    C: "C",
                                    D: "D",
                                    E: "E",
                                    F: "F",
                                    G: "G",
                                    H: "H",
                                    I: "I",
                                    J: "J",
                                    K: "K",
                                    L: "L",
                                    M: "M",
                                    N: "N",
                                    O: "O",
                                    P: "P",
                                    Q: "Q",
                                    R: "R",
                                    S: "S",
                                    T: "T",
                                    U: "U",
                                    V: "V",
                                    W: "W",
                                    X: "X",
                                    Y: "Y",
                                    Z: "Z",
                                    a: "A",
                                    b: "B",
                                    c: "C",
                                    d: "D",
                                    e: "E",
                                    f: "F",
                                    g: "G",
                                    h: "H",
                                    i: "I",
                                    j: "J",
                                    k: "K",
                                    l: "L",
                                    m: "M",
                                    n: "N",
                                    o: "O",
                                    p: "P",
                                    q: "Q",
                                    r: "R",
                                    s: "S",
                                    t: "T",
                                    u: "U",
                                    v: "V",
                                    w: "W",
                                    x: "X",
                                    y: "Y",
                                    z: "Z",
                                    "-": "-",
                                    "－": "-",
                                    "‐": "-",
                                    "‑": "-",
                                    "‒": "-",
                                    "–": "-",
                                    "—": "-",
                                    "―": "-",
                                    "−": "-",
                                    "/": "/",
                                    "／": "/",
                                    " ": " ",
                                    "　": " ",
                                    "⁠": " ",
                                    ".": ".",
                                    "．": "."
                                }, i18n.phonenumbers.PhoneNumberUtil.UNIQUE_INTERNATIONAL_PREFIX_ = /[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?/, i18n.phonenumbers.PhoneNumberUtil.VALID_PUNCTUATION = "-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～", i18n.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ = "0-9０-９٠-٩۰-۹", i18n.phonenumbers.PhoneNumberUtil.VALID_ALPHA_ = "A-Za-z", i18n.phonenumbers.PhoneNumberUtil.PLUS_CHARS_ = "+＋", i18n.phonenumbers.PhoneNumberUtil.PLUS_CHARS_PATTERN = new RegExp("[" + i18n.phonenumbers.PhoneNumberUtil.PLUS_CHARS_ + "]+"), i18n.phonenumbers.PhoneNumberUtil.LEADING_PLUS_CHARS_PATTERN_ = new RegExp("^[" + i18n.phonenumbers.PhoneNumberUtil.PLUS_CHARS_ + "]+"), i18n.phonenumbers.PhoneNumberUtil.SEPARATOR_PATTERN_ = "[" + i18n.phonenumbers.PhoneNumberUtil.VALID_PUNCTUATION + "]+", i18n.phonenumbers.PhoneNumberUtil.CAPTURING_DIGIT_PATTERN = new RegExp("([" + i18n.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ + "])"), i18n.phonenumbers.PhoneNumberUtil.VALID_START_CHAR_PATTERN_ = new RegExp("[" + i18n.phonenumbers.PhoneNumberUtil.PLUS_CHARS_ + i18n.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ + "]"), i18n.phonenumbers.PhoneNumberUtil.SECOND_NUMBER_START_PATTERN_ = /[\\\/] *x/, i18n.phonenumbers.PhoneNumberUtil.UNWANTED_END_CHAR_PATTERN_ = new RegExp("[^" + i18n.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ + i18n.phonenumbers.PhoneNumberUtil.VALID_ALPHA_ + "#]+$"), i18n.phonenumbers.PhoneNumberUtil.VALID_ALPHA_PHONE_PATTERN_ = /(?:.*?[A-Za-z]){3}.*/, i18n.phonenumbers.PhoneNumberUtil.MIN_LENGTH_PHONE_NUMBER_PATTERN_ = "[" + i18n.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ + "]{" + i18n.phonenumbers.PhoneNumberUtil.MIN_LENGTH_FOR_NSN_ + "}", i18n.phonenumbers.PhoneNumberUtil.VALID_PHONE_NUMBER_ = "[" + i18n.phonenumbers.PhoneNumberUtil.PLUS_CHARS_ + "]*(?:[" + i18n.phonenumbers.PhoneNumberUtil.VALID_PUNCTUATION + i18n.phonenumbers.PhoneNumberUtil.STAR_SIGN_ + "]*[" + i18n.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ + "]){3,}[" + i18n.phonenumbers.PhoneNumberUtil.VALID_PUNCTUATION + i18n.phonenumbers.PhoneNumberUtil.STAR_SIGN_ + i18n.phonenumbers.PhoneNumberUtil.VALID_ALPHA_ + i18n.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ + "]*", i18n.phonenumbers.PhoneNumberUtil.DEFAULT_EXTN_PREFIX_ = " ext. ", i18n.phonenumbers.PhoneNumberUtil.CAPTURING_EXTN_DIGITS_ = "([" + i18n.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ + "]{1,7})", i18n.phonenumbers.PhoneNumberUtil.EXTN_PATTERNS_FOR_PARSING_ = i18n.phonenumbers.PhoneNumberUtil.RFC3966_EXTN_PREFIX_ + i18n.phonenumbers.PhoneNumberUtil.CAPTURING_EXTN_DIGITS_ + "|[  \\t,]*(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|[,xｘ#＃~～]|int|anexo|ｉｎｔ)[:\\.．]?[  \\t,-]*" + i18n.phonenumbers.PhoneNumberUtil.CAPTURING_EXTN_DIGITS_ + "#?|[- ]+([" + i18n.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ + "]{1,5})#", i18n.phonenumbers.PhoneNumberUtil.EXTN_PATTERN_ = new RegExp("(?:" + i18n.phonenumbers.PhoneNumberUtil.EXTN_PATTERNS_FOR_PARSING_ + ")$", "i"), i18n.phonenumbers.PhoneNumberUtil.VALID_PHONE_NUMBER_PATTERN_ = new RegExp("^" + i18n.phonenumbers.PhoneNumberUtil.MIN_LENGTH_PHONE_NUMBER_PATTERN_ + "$|^" + i18n.phonenumbers.PhoneNumberUtil.VALID_PHONE_NUMBER_ + "(?:" + i18n.phonenumbers.PhoneNumberUtil.EXTN_PATTERNS_FOR_PARSING_ + ")?$", "i"), i18n.phonenumbers.PhoneNumberUtil.NON_DIGITS_PATTERN_ = /\D+/, i18n.phonenumbers.PhoneNumberUtil.FIRST_GROUP_PATTERN_ = /(\$\d)/, i18n.phonenumbers.PhoneNumberUtil.NP_PATTERN_ = /\$NP/, i18n.phonenumbers.PhoneNumberUtil.FG_PATTERN_ = /\$FG/, i18n.phonenumbers.PhoneNumberUtil.CC_PATTERN_ = /\$CC/, i18n.phonenumbers.PhoneNumberUtil.FIRST_GROUP_ONLY_PREFIX_PATTERN_ = /^\(?\$1\)?$/, i18n.phonenumbers.PhoneNumberUtil.REGION_CODE_FOR_NON_GEO_ENTITY = "001", i18n.phonenumbers.PhoneNumberFormat = {
                                    E164: 0,
                                    INTERNATIONAL: 1,
                                    NATIONAL: 2,
                                    RFC3966: 3
                                }, i18n.phonenumbers.PhoneNumberType = {
                                    FIXED_LINE: 0,
                                    MOBILE: 1,
                                    FIXED_LINE_OR_MOBILE: 2,
                                    TOLL_FREE: 3,
                                    PREMIUM_RATE: 4,
                                    SHARED_COST: 5,
                                    VOIP: 6,
                                    PERSONAL_NUMBER: 7,
                                    PAGER: 8,
                                    UAN: 9,
                                    VOICEMAIL: 10,
                                    UNKNOWN: -1
                                }, i18n.phonenumbers.PhoneNumberUtil.MatchType = {
                                    NOT_A_NUMBER: 0,
                                    NO_MATCH: 1,
                                    SHORT_NSN_MATCH: 2,
                                    NSN_MATCH: 3,
                                    EXACT_MATCH: 4
                                }, i18n.phonenumbers.PhoneNumberUtil.ValidationResult = {
                                    IS_POSSIBLE: 0,
                                    INVALID_COUNTRY_CODE: 1,
                                    TOO_SHORT: 2,
                                    TOO_LONG: 3
                                }, i18n.phonenumbers.PhoneNumberUtil.extractPossibleNumber = function(e) {
                                    var t = e.search(i18n.phonenumbers.PhoneNumberUtil.VALID_START_CHAR_PATTERN_);
                                    return 0 <= t ? (e = e.substring(t), e = e.replace(i18n.phonenumbers.PhoneNumberUtil.UNWANTED_END_CHAR_PATTERN_, ""), t = e.search(i18n.phonenumbers.PhoneNumberUtil.SECOND_NUMBER_START_PATTERN_), 0 <= t && (e = e.substring(0, t))) : e = "", e
                                }, i18n.phonenumbers.PhoneNumberUtil.isViablePhoneNumber = function(e) {
                                    return !(e.length < i18n.phonenumbers.PhoneNumberUtil.MIN_LENGTH_FOR_NSN_) && i18n.phonenumbers.PhoneNumberUtil.matchesEntirely_(i18n.phonenumbers.PhoneNumberUtil.VALID_PHONE_NUMBER_PATTERN_, e)
                                }, i18n.phonenumbers.PhoneNumberUtil.normalize = function(e) {
                                    return i18n.phonenumbers.PhoneNumberUtil.matchesEntirely_(i18n.phonenumbers.PhoneNumberUtil.VALID_ALPHA_PHONE_PATTERN_, e) ? i18n.phonenumbers.PhoneNumberUtil.normalizeHelper_(e, i18n.phonenumbers.PhoneNumberUtil.ALL_NORMALIZATION_MAPPINGS_, !0) : i18n.phonenumbers.PhoneNumberUtil.normalizeDigitsOnly(e)
                                }, i18n.phonenumbers.PhoneNumberUtil.normalizeSB_ = function(e) {
                                    var t = i18n.phonenumbers.PhoneNumberUtil.normalize(e.toString());
                                    e.clear(), e.append(t)
                                }, i18n.phonenumbers.PhoneNumberUtil.normalizeDigitsOnly = function(e) {
                                    return i18n.phonenumbers.PhoneNumberUtil.normalizeHelper_(e, i18n.phonenumbers.PhoneNumberUtil.DIGIT_MAPPINGS, !0)
                                }, i18n.phonenumbers.PhoneNumberUtil.convertAlphaCharactersInNumber = function(e) {
                                    return i18n.phonenumbers.PhoneNumberUtil.normalizeHelper_(e, i18n.phonenumbers.PhoneNumberUtil.ALL_NORMALIZATION_MAPPINGS_, !1)
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.getLengthOfGeographicalAreaCode = function(e) {
                                    var t = this.getMetadataForRegion(this.getRegionCodeForNumber(e));
                                    return null != t && (t.hasNationalPrefix() || e.hasItalianLeadingZero()) && this.isNumberGeographical(e) ? this.getLengthOfNationalDestinationCode(e) : 0
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.getLengthOfNationalDestinationCode = function(e) {
                                    var t;
                                    return e.hasExtension() ? (t = e.clone(), t.clearExtension()) : t = e, t = this.format(t, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL).split(i18n.phonenumbers.PhoneNumberUtil.NON_DIGITS_PATTERN_), 0 == t[0].length && t.shift(), 2 >= t.length ? 0 : this.getNumberType(e) == i18n.phonenumbers.PhoneNumberType.MOBILE && (e = i18n.phonenumbers.PhoneNumberUtil.getCountryMobileToken(e.getCountryCodeOrDefault()), "" != e) ? t[2].length + e.length : t[1].length
                                }, i18n.phonenumbers.PhoneNumberUtil.getCountryMobileToken = function(e) {
                                    return i18n.phonenumbers.PhoneNumberUtil.MOBILE_TOKEN_MAPPINGS_[e] || ""
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.getSupportedRegions = function() {
                                    return goog.array.filter(Object.keys(i18n.phonenumbers.metadata.countryToMetadata), function(e) {
                                        return isNaN(e)
                                    })
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.getSupportedGlobalNetworkCallingCodes = function() {
                                    var e = goog.array.filter(Object.keys(i18n.phonenumbers.metadata.countryToMetadata), function(e) {
                                        return !isNaN(e)
                                    });
                                    return goog.array.map(e, function(e) {
                                        return parseInt(e, 10)
                                    })
                                }, i18n.phonenumbers.PhoneNumberUtil.normalizeHelper_ = function(e, t, n) {
                                    for (var o, r, i = new goog.string.StringBuffer, a = e.length, d = 0; d < a; ++d) o = e.charAt(d), r = t[o.toUpperCase()], null != r ? i.append(r) : n || i.append(o);
                                    return i.toString()
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.formattingRuleHasFirstGroupOnly = function(e) {
                                    return 0 == e.length || i18n.phonenumbers.PhoneNumberUtil.FIRST_GROUP_ONLY_PREFIX_PATTERN_.test(e)
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.isNumberGeographical = function(e) {
                                    var t = this.getNumberType(e);
                                    return t == i18n.phonenumbers.PhoneNumberType.FIXED_LINE || t == i18n.phonenumbers.PhoneNumberType.FIXED_LINE_OR_MOBILE || goog.array.contains(i18n.phonenumbers.PhoneNumberUtil.GEO_MOBILE_COUNTRIES_, e.getCountryCodeOrDefault()) && t == i18n.phonenumbers.PhoneNumberType.MOBILE
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.isValidRegionCode_ = function(e) {
                                    return null != e && isNaN(e) && e.toUpperCase() in i18n.phonenumbers.metadata.countryToMetadata
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.hasValidCountryCallingCode_ = function(e) {
                                    return e in i18n.phonenumbers.metadata.countryCodeToRegionCodeMap
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.format = function(e, t) {
                                    if (0 == e.getNationalNumber() && e.hasRawInput()) {
                                        var n = e.getRawInputOrDefault();
                                        if (0 < n.length) return n
                                    }
                                    var n = e.getCountryCodeOrDefault(),
                                        o = this.getNationalSignificantNumber(e);
                                    if (t == i18n.phonenumbers.PhoneNumberFormat.E164) return this.prefixNumberWithCountryCallingCode_(n, i18n.phonenumbers.PhoneNumberFormat.E164, o, "");
                                    if (!this.hasValidCountryCallingCode_(n)) return o;
                                    var r = this.getRegionCodeForCountryCode(n),
                                        i = this.getMetadataForRegionOrCallingCode_(n, r),
                                        r = this.maybeGetFormattedExtension_(e, i, t),
                                        o = this.formatNsn_(o, i, t);
                                    return this.prefixNumberWithCountryCallingCode_(n, t, o, r)
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.formatByPattern = function(e, t, n) {
                                    var o = e.getCountryCodeOrDefault(),
                                        r = this.getNationalSignificantNumber(e);
                                    if (!this.hasValidCountryCallingCode_(o)) return r;
                                    var i = this.getRegionCodeForCountryCode(o),
                                        i = this.getMetadataForRegionOrCallingCode_(o, i),
                                        a = this.chooseFormattingPatternForNumber_(n, r);
                                    if (null != a) {
                                        if (n = a.clone(), a = a.getNationalPrefixFormattingRuleOrDefault(), 0 < a.length) {
                                            var d = i.getNationalPrefixOrDefault();
                                            0 < d.length ? (a = a.replace(i18n.phonenumbers.PhoneNumberUtil.NP_PATTERN_, d).replace(i18n.phonenumbers.PhoneNumberUtil.FG_PATTERN_, "$1"), n.setNationalPrefixFormattingRule(a)) : n.clearNationalPrefixFormattingRule()
                                        }
                                        r = this.formatNsnUsingPattern_(r, n, t)
                                    }
                                    return e = this.maybeGetFormattedExtension_(e, i, t), this.prefixNumberWithCountryCallingCode_(o, t, r, e)
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.formatNationalNumberWithCarrierCode = function(e, t) {
                                    var n = e.getCountryCodeOrDefault(),
                                        o = this.getNationalSignificantNumber(e);
                                    if (!this.hasValidCountryCallingCode_(n)) return o;
                                    var r = this.getRegionCodeForCountryCode(n),
                                        i = this.getMetadataForRegionOrCallingCode_(n, r),
                                        r = this.maybeGetFormattedExtension_(e, i, i18n.phonenumbers.PhoneNumberFormat.NATIONAL),
                                        o = this.formatNsn_(o, i, i18n.phonenumbers.PhoneNumberFormat.NATIONAL, t);
                                    return this.prefixNumberWithCountryCallingCode_(n, i18n.phonenumbers.PhoneNumberFormat.NATIONAL, o, r)
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.getMetadataForRegionOrCallingCode_ = function(e, t) {
                                    return i18n.phonenumbers.PhoneNumberUtil.REGION_CODE_FOR_NON_GEO_ENTITY == t ? this.getMetadataForNonGeographicalRegion(e) : this.getMetadataForRegion(t)
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.formatNationalNumberWithPreferredCarrierCode = function(e, t) {
                                    return this.formatNationalNumberWithCarrierCode(e, e.hasPreferredDomesticCarrierCode() ? e.getPreferredDomesticCarrierCodeOrDefault() : t)
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.formatNumberForMobileDialing = function(e, t, n) {
                                    var o = e.getCountryCodeOrDefault();
                                    if (!this.hasValidCountryCallingCode_(o)) return e.hasRawInput() ? e.getRawInputOrDefault() : "";
                                    var r = "";
                                    e = e.clone(), e.clearExtension();
                                    var i = this.getRegionCodeForCountryCode(o),
                                        a = this.getNumberType(e),
                                        d = a != i18n.phonenumbers.PhoneNumberType.UNKNOWN;
                                    if (t == i) r = a == i18n.phonenumbers.PhoneNumberType.FIXED_LINE || a == i18n.phonenumbers.PhoneNumberType.MOBILE || a == i18n.phonenumbers.PhoneNumberType.FIXED_LINE_OR_MOBILE, "CO" == i && a == i18n.phonenumbers.PhoneNumberType.FIXED_LINE ? r = this.formatNationalNumberWithCarrierCode(e, i18n.phonenumbers.PhoneNumberUtil.COLOMBIA_MOBILE_TO_FIXED_LINE_PREFIX_) : "BR" == i && r ? r = e.hasPreferredDomesticCarrierCode() ? this.formatNationalNumberWithPreferredCarrierCode(e, "") : "" : d && "HU" == i ? r = this.getNddPrefixForRegion(i, !0) + " " + this.format(e, i18n.phonenumbers.PhoneNumberFormat.NATIONAL) : o == i18n.phonenumbers.PhoneNumberUtil.NANPA_COUNTRY_CODE_ ? (t = this.getMetadataForRegion(t), r = this.canBeInternationallyDialled(e) && !this.isShorterThanPossibleNormalNumber_(t, this.getNationalSignificantNumber(e)) ? this.format(e, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL) : this.format(e, i18n.phonenumbers.PhoneNumberFormat.NATIONAL)) : r = (i == i18n.phonenumbers.PhoneNumberUtil.REGION_CODE_FOR_NON_GEO_ENTITY || ("MX" == i || "CL" == i) && r) && this.canBeInternationallyDialled(e) ? this.format(e, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL) : this.format(e, i18n.phonenumbers.PhoneNumberFormat.NATIONAL);
                                    else if (d && this.canBeInternationallyDialled(e)) return n ? this.format(e, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL) : this.format(e, i18n.phonenumbers.PhoneNumberFormat.E164);
                                    return n ? r : i18n.phonenumbers.PhoneNumberUtil.normalizeHelper_(r, i18n.phonenumbers.PhoneNumberUtil.DIALLABLE_CHAR_MAPPINGS_, !0)
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.formatOutOfCountryCallingNumber = function(e, t) {
                                    if (!this.isValidRegionCode_(t)) return this.format(e, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL);
                                    var n = e.getCountryCodeOrDefault(),
                                        o = this.getNationalSignificantNumber(e);
                                    if (!this.hasValidCountryCallingCode_(n)) return o;
                                    if (n == i18n.phonenumbers.PhoneNumberUtil.NANPA_COUNTRY_CODE_) {
                                        if (this.isNANPACountry(t)) return n + " " + this.format(e, i18n.phonenumbers.PhoneNumberFormat.NATIONAL)
                                    } else if (n == this.getCountryCodeForValidRegion_(t)) return this.format(e, i18n.phonenumbers.PhoneNumberFormat.NATIONAL);
                                    var r = this.getMetadataForRegion(t),
                                        i = r.getInternationalPrefixOrDefault(),
                                        a = "";
                                    return i18n.phonenumbers.PhoneNumberUtil.matchesEntirely_(i18n.phonenumbers.PhoneNumberUtil.UNIQUE_INTERNATIONAL_PREFIX_, i) ? a = i : r.hasPreferredInternationalPrefix() && (a = r.getPreferredInternationalPrefixOrDefault()), r = this.getRegionCodeForCountryCode(n), r = this.getMetadataForRegionOrCallingCode_(n, r), o = this.formatNsn_(o, r, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL), r = this.maybeGetFormattedExtension_(e, r, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL), 0 < a.length ? a + " " + n + " " + o + r : this.prefixNumberWithCountryCallingCode_(n, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL, o, r)
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.formatInOriginalFormat = function(e, t) {
                                    if (e.hasRawInput() && (this.hasUnexpectedItalianLeadingZero_(e) || !this.hasFormattingPatternForNumber_(e))) return e.getRawInputOrDefault();
                                    if (!e.hasCountryCodeSource()) return this.format(e, i18n.phonenumbers.PhoneNumberFormat.NATIONAL);
                                    var n;
                                    switch (e.getCountryCodeSource()) {
                                        case i18n.phonenumbers.PhoneNumber.CountryCodeSource.FROM_NUMBER_WITH_PLUS_SIGN:
                                            n = this.format(e, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL);
                                            break;
                                        case i18n.phonenumbers.PhoneNumber.CountryCodeSource.FROM_NUMBER_WITH_IDD:
                                            n = this.formatOutOfCountryCallingNumber(e, t);
                                            break;
                                        case i18n.phonenumbers.PhoneNumber.CountryCodeSource.FROM_NUMBER_WITHOUT_PLUS_SIGN:
                                            n = this.format(e, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL).substring(1);
                                            break;
                                        default:
                                            var o = this.getRegionCodeForCountryCode(e.getCountryCodeOrDefault()),
                                                r = this.getNddPrefixForRegion(o, !0);
                                            if (n = this.format(e, i18n.phonenumbers.PhoneNumberFormat.NATIONAL), null != r && 0 != r.length && !this.rawInputContainsNationalPrefix_(e.getRawInputOrDefault(), r, o) && (o = this.getMetadataForRegion(o), r = this.getNationalSignificantNumber(e), o = this.chooseFormattingPatternForNumber_(o.numberFormatArray(), r), null != o)) {
                                                var r = o.getNationalPrefixFormattingRuleOrDefault(),
                                                    i = r.indexOf("$1");
                                                0 >= i || (r = r.substring(0, i), r = i18n.phonenumbers.PhoneNumberUtil.normalizeDigitsOnly(r), 0 != r.length && (n = o.clone(), n.clearNationalPrefixFormattingRule(), n = this.formatByPattern(e, i18n.phonenumbers.PhoneNumberFormat.NATIONAL, [n])))
                                            }
                                    }
                                    return o = e.getRawInputOrDefault(), null != n && 0 < o.length && (r = i18n.phonenumbers.PhoneNumberUtil.normalizeHelper_(n, i18n.phonenumbers.PhoneNumberUtil.DIALLABLE_CHAR_MAPPINGS_, !0), i = i18n.phonenumbers.PhoneNumberUtil.normalizeHelper_(o, i18n.phonenumbers.PhoneNumberUtil.DIALLABLE_CHAR_MAPPINGS_, !0), r != i && (n = o)), n
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.rawInputContainsNationalPrefix_ = function(e, t, n) {
                                    if (e = i18n.phonenumbers.PhoneNumberUtil.normalizeDigitsOnly(e), goog.string.startsWith(e, t)) try {
                                        return this.isValidNumber(this.parse(e.substring(t.length), n))
                                    } catch (o) {}
                                    return !1
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.hasUnexpectedItalianLeadingZero_ = function(e) {
                                    return e.hasItalianLeadingZero() && !this.isLeadingZeroPossible(e.getCountryCodeOrDefault())
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.hasFormattingPatternForNumber_ = function(e) {
                                    var t = e.getCountryCodeOrDefault(),
                                        n = this.getRegionCodeForCountryCode(t),
                                        t = this.getMetadataForRegionOrCallingCode_(t, n);
                                    return null != t && (e = this.getNationalSignificantNumber(e), null != this.chooseFormattingPatternForNumber_(t.numberFormatArray(), e))
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.formatOutOfCountryKeepingAlphaChars = function(e, t) {
                                    var n = e.getRawInputOrDefault();
                                    if (0 == n.length) return this.formatOutOfCountryCallingNumber(e, t);
                                    var o = e.getCountryCodeOrDefault();
                                    if (!this.hasValidCountryCallingCode_(o)) return n;
                                    var n = i18n.phonenumbers.PhoneNumberUtil.normalizeHelper_(n, i18n.phonenumbers.PhoneNumberUtil.ALL_PLUS_NUMBER_GROUPING_SYMBOLS_, !0),
                                        r = this.getNationalSignificantNumber(e);
                                    if (3 < r.length) {
                                        var i = n.indexOf(r.substring(0, 3)); - 1 != i && (n = n.substring(i))
                                    }
                                    if (i = this.getMetadataForRegion(t), o == i18n.phonenumbers.PhoneNumberUtil.NANPA_COUNTRY_CODE_) {
                                        if (this.isNANPACountry(t)) return o + " " + n
                                    } else if (null != i && o == this.getCountryCodeForValidRegion_(t)) return o = this.chooseFormattingPatternForNumber_(i.numberFormatArray(), r), null == o ? n : (o = o.clone(), o.setPattern("(\\d+)(.*)"), o.setFormat("$1$2"), this.formatNsnUsingPattern_(n, o, i18n.phonenumbers.PhoneNumberFormat.NATIONAL));
                                    return r = "", null != i && (r = i.getInternationalPrefixOrDefault(), r = i18n.phonenumbers.PhoneNumberUtil.matchesEntirely_(i18n.phonenumbers.PhoneNumberUtil.UNIQUE_INTERNATIONAL_PREFIX_, r) ? r : i.getPreferredInternationalPrefixOrDefault()), i = this.getRegionCodeForCountryCode(o), i = this.getMetadataForRegionOrCallingCode_(o, i), i = this.maybeGetFormattedExtension_(e, i, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL), 0 < r.length ? r + " " + o + " " + n + i : this.prefixNumberWithCountryCallingCode_(o, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL, n, i)
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.getNationalSignificantNumber = function(e) {
                                    var t = "" + e.getNationalNumber();
                                    return e.hasItalianLeadingZero() && e.getItalianLeadingZero() ? Array(e.getNumberOfLeadingZerosOrDefault() + 1).join("0") + t : t
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.prefixNumberWithCountryCallingCode_ = function(e, t, n, o) {
                                    switch (t) {
                                        case i18n.phonenumbers.PhoneNumberFormat.E164:
                                            return i18n.phonenumbers.PhoneNumberUtil.PLUS_SIGN + e + n + o;
                                        case i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL:
                                            return i18n.phonenumbers.PhoneNumberUtil.PLUS_SIGN + e + " " + n + o;
                                        case i18n.phonenumbers.PhoneNumberFormat.RFC3966:
                                            return i18n.phonenumbers.PhoneNumberUtil.RFC3966_PREFIX_ + i18n.phonenumbers.PhoneNumberUtil.PLUS_SIGN + e + "-" + n + o;
                                        default:
                                            return n + o
                                    }
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.formatNsn_ = function(e, t, n, o) {
                                    return t = 0 == t.intlNumberFormatArray().length || n == i18n.phonenumbers.PhoneNumberFormat.NATIONAL ? t.numberFormatArray() : t.intlNumberFormatArray(), t = this.chooseFormattingPatternForNumber_(t, e), null == t ? e : this.formatNsnUsingPattern_(e, t, n, o)
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.chooseFormattingPatternForNumber_ = function(e, t) {
                                    for (var n, o = e.length, r = 0; r < o; ++r) {
                                        n = e[r];
                                        var i = n.leadingDigitsPatternCount();
                                        if ((0 == i || 0 == t.search(n.getLeadingDigitsPattern(i - 1))) && (i = new RegExp(n.getPattern()), i18n.phonenumbers.PhoneNumberUtil.matchesEntirely_(i, t))) return n
                                    }
                                    return null
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.formatNsnUsingPattern_ = function(e, t, n, o) {
                                    var r = t.getFormatOrDefault(),
                                        i = new RegExp(t.getPattern()),
                                        a = t.getDomesticCarrierCodeFormattingRuleOrDefault();
                                    return n == i18n.phonenumbers.PhoneNumberFormat.NATIONAL && null != o && 0 < o.length && 0 < a.length ? (t = a.replace(i18n.phonenumbers.PhoneNumberUtil.CC_PATTERN_, o), r = r.replace(i18n.phonenumbers.PhoneNumberUtil.FIRST_GROUP_PATTERN_, t), e = e.replace(i, r)) : (t = t.getNationalPrefixFormattingRuleOrDefault(), e = n == i18n.phonenumbers.PhoneNumberFormat.NATIONAL && null != t && 0 < t.length ? e.replace(i, r.replace(i18n.phonenumbers.PhoneNumberUtil.FIRST_GROUP_PATTERN_, t)) : e.replace(i, r)), n == i18n.phonenumbers.PhoneNumberFormat.RFC3966 && (e = e.replace(new RegExp("^" + i18n.phonenumbers.PhoneNumberUtil.SEPARATOR_PATTERN_), ""), e = e.replace(new RegExp(i18n.phonenumbers.PhoneNumberUtil.SEPARATOR_PATTERN_, "g"), "-")), e
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.getExampleNumber = function(e) {
                                    return this.getExampleNumberForType(e, i18n.phonenumbers.PhoneNumberType.FIXED_LINE)
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.getExampleNumberForType = function(e, t) {
                                    if (!this.isValidRegionCode_(e)) return null;
                                    var n = this.getNumberDescByType_(this.getMetadataForRegion(e), t);
                                    try {
                                        if (n.hasExampleNumber()) return this.parse(n.getExampleNumberOrDefault(), e)
                                    } catch (o) {}
                                    return null
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.getExampleNumberForNonGeoEntity = function(e) {
                                    var t = this.getMetadataForNonGeographicalRegion(e);
                                    if (null != t) {
                                        t = t.getGeneralDesc();
                                        try {
                                            if (t.hasExampleNumber()) return this.parse("+" + e + t.getExampleNumber(), "ZZ")
                                        } catch (n) {}
                                    }
                                    return null
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.maybeGetFormattedExtension_ = function(e, t, n) {
                                    return e.hasExtension() && 0 != e.getExtension().length ? n == i18n.phonenumbers.PhoneNumberFormat.RFC3966 ? i18n.phonenumbers.PhoneNumberUtil.RFC3966_EXTN_PREFIX_ + e.getExtension() : t.hasPreferredExtnPrefix() ? t.getPreferredExtnPrefix() + e.getExtensionOrDefault() : i18n.phonenumbers.PhoneNumberUtil.DEFAULT_EXTN_PREFIX_ + e.getExtensionOrDefault() : ""
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.getNumberDescByType_ = function(e, t) {
                                    switch (t) {
                                        case i18n.phonenumbers.PhoneNumberType.PREMIUM_RATE:
                                            return e.getPremiumRate();
                                        case i18n.phonenumbers.PhoneNumberType.TOLL_FREE:
                                            return e.getTollFree();
                                        case i18n.phonenumbers.PhoneNumberType.MOBILE:
                                            return e.getMobile();
                                        case i18n.phonenumbers.PhoneNumberType.FIXED_LINE:
                                        case i18n.phonenumbers.PhoneNumberType.FIXED_LINE_OR_MOBILE:
                                            return e.getFixedLine();
                                        case i18n.phonenumbers.PhoneNumberType.SHARED_COST:
                                            return e.getSharedCost();
                                        case i18n.phonenumbers.PhoneNumberType.VOIP:
                                            return e.getVoip();
                                        case i18n.phonenumbers.PhoneNumberType.PERSONAL_NUMBER:
                                            return e.getPersonalNumber();
                                        case i18n.phonenumbers.PhoneNumberType.PAGER:
                                            return e.getPager();
                                        case i18n.phonenumbers.PhoneNumberType.UAN:
                                            return e.getUan();
                                        case i18n.phonenumbers.PhoneNumberType.VOICEMAIL:
                                            return e.getVoicemail();
                                        default:
                                            return e.getGeneralDesc()
                                    }
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.getNumberType = function(e) {
                                    var t = this.getRegionCodeForNumber(e),
                                        t = this.getMetadataForRegionOrCallingCode_(e.getCountryCodeOrDefault(), t);
                                    return null == t ? i18n.phonenumbers.PhoneNumberType.UNKNOWN : (e = this.getNationalSignificantNumber(e), this.getNumberTypeHelper_(e, t))
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.getNumberTypeHelper_ = function(e, t) {
                                    return this.isNumberMatchingDesc_(e, t.getGeneralDesc()) ? this.isNumberMatchingDesc_(e, t.getPremiumRate()) ? i18n.phonenumbers.PhoneNumberType.PREMIUM_RATE : this.isNumberMatchingDesc_(e, t.getTollFree()) ? i18n.phonenumbers.PhoneNumberType.TOLL_FREE : this.isNumberMatchingDesc_(e, t.getSharedCost()) ? i18n.phonenumbers.PhoneNumberType.SHARED_COST : this.isNumberMatchingDesc_(e, t.getVoip()) ? i18n.phonenumbers.PhoneNumberType.VOIP : this.isNumberMatchingDesc_(e, t.getPersonalNumber()) ? i18n.phonenumbers.PhoneNumberType.PERSONAL_NUMBER : this.isNumberMatchingDesc_(e, t.getPager()) ? i18n.phonenumbers.PhoneNumberType.PAGER : this.isNumberMatchingDesc_(e, t.getUan()) ? i18n.phonenumbers.PhoneNumberType.UAN : this.isNumberMatchingDesc_(e, t.getVoicemail()) ? i18n.phonenumbers.PhoneNumberType.VOICEMAIL : this.isNumberMatchingDesc_(e, t.getFixedLine()) ? t.getSameMobileAndFixedLinePattern() || this.isNumberMatchingDesc_(e, t.getMobile()) ? i18n.phonenumbers.PhoneNumberType.FIXED_LINE_OR_MOBILE : i18n.phonenumbers.PhoneNumberType.FIXED_LINE : !t.getSameMobileAndFixedLinePattern() && this.isNumberMatchingDesc_(e, t.getMobile()) ? i18n.phonenumbers.PhoneNumberType.MOBILE : i18n.phonenumbers.PhoneNumberType.UNKNOWN : i18n.phonenumbers.PhoneNumberType.UNKNOWN
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.getMetadataForRegion = function(e) {
                                    if (null == e) return null;
                                    e = e.toUpperCase();
                                    var t = this.regionToMetadataMap[e];
                                    if (null == t) {
                                        var t = new goog.proto2.PbLiteSerializer,
                                            n = i18n.phonenumbers.metadata.countryToMetadata[e];
                                        if (null == n) return null;
                                        t = t.deserialize(i18n.phonenumbers.PhoneMetadata.getDescriptor(), n), this.regionToMetadataMap[e] = t
                                    }
                                    return t
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.getMetadataForNonGeographicalRegion = function(e) {
                                    return this.getMetadataForRegion("" + e)
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.isNumberMatchingDesc_ = function(e, t) {
                                    return i18n.phonenumbers.PhoneNumberUtil.matchesEntirely_(t.getPossibleNumberPatternOrDefault(), e) && i18n.phonenumbers.PhoneNumberUtil.matchesEntirely_(t.getNationalNumberPatternOrDefault(), e)
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.isValidNumber = function(e) {
                                    var t = this.getRegionCodeForNumber(e);
                                    return this.isValidNumberForRegion(e, t)
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.isValidNumberForRegion = function(e, t) {
                                    var n = e.getCountryCodeOrDefault(),
                                        o = this.getMetadataForRegionOrCallingCode_(n, t);
                                    return null != o && (i18n.phonenumbers.PhoneNumberUtil.REGION_CODE_FOR_NON_GEO_ENTITY == t || n == this.getCountryCodeForValidRegion_(t)) && (n = this.getNationalSignificantNumber(e), this.getNumberTypeHelper_(n, o) != i18n.phonenumbers.PhoneNumberType.UNKNOWN)
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.getRegionCodeForNumber = function(e) {
                                    if (null == e) return null;
                                    var t = e.getCountryCodeOrDefault(),
                                        t = i18n.phonenumbers.metadata.countryCodeToRegionCodeMap[t];
                                    return null == t ? null : 1 == t.length ? t[0] : this.getRegionCodeForNumberFromRegionList_(e, t)
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.getRegionCodeForNumberFromRegionList_ = function(e, t) {
                                    for (var n, o = this.getNationalSignificantNumber(e), r = t.length, i = 0; i < r; i++) {
                                        n = t[i];
                                        var a = this.getMetadataForRegion(n);
                                        if (a.hasLeadingDigits()) {
                                            if (0 == o.search(a.getLeadingDigits())) return n
                                        } else if (this.getNumberTypeHelper_(o, a) != i18n.phonenumbers.PhoneNumberType.UNKNOWN) return n
                                    }
                                    return null
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.getRegionCodeForCountryCode = function(e) {
                                    return e = i18n.phonenumbers.metadata.countryCodeToRegionCodeMap[e], null == e ? i18n.phonenumbers.PhoneNumberUtil.UNKNOWN_REGION_ : e[0]
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.getRegionCodesForCountryCode = function(e) {
                                    return e = i18n.phonenumbers.metadata.countryCodeToRegionCodeMap[e], null == e ? [] : e
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.getCountryCodeForRegion = function(e) {
                                    return this.isValidRegionCode_(e) ? this.getCountryCodeForValidRegion_(e) : 0
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.getCountryCodeForValidRegion_ = function(e) {
                                    var t = this.getMetadataForRegion(e);
                                    if (null == t) throw Error("Invalid region code: " + e);
                                    return t.getCountryCodeOrDefault()
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.getNddPrefixForRegion = function(e, t) {
                                    var n = this.getMetadataForRegion(e);
                                    return null == n ? null : (n = n.getNationalPrefixOrDefault(), 0 == n.length ? null : (t && (n = n.replace("~", "")), n))
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.isNANPACountry = function(e) {
                                    return null != e && goog.array.contains(i18n.phonenumbers.metadata.countryCodeToRegionCodeMap[i18n.phonenumbers.PhoneNumberUtil.NANPA_COUNTRY_CODE_], e.toUpperCase())
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.isLeadingZeroPossible = function(e) {
                                    return e = this.getMetadataForRegionOrCallingCode_(e, this.getRegionCodeForCountryCode(e)), null != e && e.getLeadingZeroPossibleOrDefault()
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.isAlphaNumber = function(e) {
                                    return !!i18n.phonenumbers.PhoneNumberUtil.isViablePhoneNumber(e) && (e = new goog.string.StringBuffer(e), this.maybeStripExtension(e), i18n.phonenumbers.PhoneNumberUtil.matchesEntirely_(i18n.phonenumbers.PhoneNumberUtil.VALID_ALPHA_PHONE_PATTERN_, e.toString()))
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.isPossibleNumber = function(e) {
                                    return this.isPossibleNumberWithReason(e) == i18n.phonenumbers.PhoneNumberUtil.ValidationResult.IS_POSSIBLE
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.testNumberLengthAgainstPattern_ = function(e, t) {
                                    return i18n.phonenumbers.PhoneNumberUtil.matchesEntirely_(e, t) ? i18n.phonenumbers.PhoneNumberUtil.ValidationResult.IS_POSSIBLE : 0 == t.search(e) ? i18n.phonenumbers.PhoneNumberUtil.ValidationResult.TOO_LONG : i18n.phonenumbers.PhoneNumberUtil.ValidationResult.TOO_SHORT
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.isShorterThanPossibleNormalNumber_ = function(e, t) {
                                    var n = e.getGeneralDesc().getPossibleNumberPatternOrDefault();
                                    return this.testNumberLengthAgainstPattern_(n, t) == i18n.phonenumbers.PhoneNumberUtil.ValidationResult.TOO_SHORT
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.isPossibleNumberWithReason = function(e) {
                                    var t = this.getNationalSignificantNumber(e);
                                    if (e = e.getCountryCodeOrDefault(), !this.hasValidCountryCallingCode_(e)) return i18n.phonenumbers.PhoneNumberUtil.ValidationResult.INVALID_COUNTRY_CODE;
                                    var n = this.getRegionCodeForCountryCode(e);
                                    return e = this.getMetadataForRegionOrCallingCode_(e, n).getGeneralDesc().getPossibleNumberPatternOrDefault(), this.testNumberLengthAgainstPattern_(e, t)
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.isPossibleNumberString = function(e, t) {
                                    try {
                                        return this.isPossibleNumber(this.parse(e, t))
                                    } catch (n) {
                                        return !1
                                    }
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.truncateTooLongNumber = function(e) {
                                    if (this.isValidNumber(e)) return !0;
                                    var t = e.clone(),
                                        n = e.getNationalNumberOrDefault();
                                    do
                                        if (n = Math.floor(n / 10), t.setNationalNumber(n), 0 == n || this.isPossibleNumberWithReason(t) == i18n.phonenumbers.PhoneNumberUtil.ValidationResult.TOO_SHORT) return !1; while (!this.isValidNumber(t));
                                    return e.setNationalNumber(n), !0
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.extractCountryCode = function(e, t) {
                                    var n = e.toString();
                                    if (0 == n.length || "0" == n.charAt(0)) return 0;
                                    for (var o, r = n.length, i = 1; i <= i18n.phonenumbers.PhoneNumberUtil.MAX_LENGTH_COUNTRY_CODE_ && i <= r; ++i)
                                        if (o = parseInt(n.substring(0, i), 10), o in i18n.phonenumbers.metadata.countryCodeToRegionCodeMap) return t.append(n.substring(i)), o;
                                    return 0
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.maybeExtractCountryCode = function(e, t, n, o, r) {
                                    if (0 == e.length) return 0;
                                    e = new goog.string.StringBuffer(e);
                                    var i;
                                    if (null != t && (i = t.getInternationalPrefix()), null == i && (i = "NonMatch"), i = this.maybeStripInternationalPrefixAndNormalize(e, i), o && r.setCountryCodeSource(i), i != i18n.phonenumbers.PhoneNumber.CountryCodeSource.FROM_DEFAULT_COUNTRY) {
                                        if (e.getLength() <= i18n.phonenumbers.PhoneNumberUtil.MIN_LENGTH_FOR_NSN_) throw Error(i18n.phonenumbers.Error.TOO_SHORT_AFTER_IDD);
                                        if (n = this.extractCountryCode(e, n), 0 != n) return r.setCountryCode(n), n;
                                        throw Error(i18n.phonenumbers.Error.INVALID_COUNTRY_CODE)
                                    }
                                    if (null != t) {
                                        i = t.getCountryCodeOrDefault();
                                        var a = "" + i,
                                            d = e.toString();
                                        if (goog.string.startsWith(d, a)) {
                                            var s = new goog.string.StringBuffer(d.substring(a.length)),
                                                d = t.getGeneralDesc(),
                                                a = new RegExp(d.getNationalNumberPatternOrDefault());
                                            if (this.maybeStripNationalPrefixAndCarrierCode(s, t, null), t = s.toString(), d = d.getPossibleNumberPatternOrDefault(), !i18n.phonenumbers.PhoneNumberUtil.matchesEntirely_(a, e.toString()) && i18n.phonenumbers.PhoneNumberUtil.matchesEntirely_(a, t) || this.testNumberLengthAgainstPattern_(d, e.toString()) == i18n.phonenumbers.PhoneNumberUtil.ValidationResult.TOO_LONG) return n.append(t), o && r.setCountryCodeSource(i18n.phonenumbers.PhoneNumber.CountryCodeSource.FROM_NUMBER_WITHOUT_PLUS_SIGN), r.setCountryCode(i), i
                                        }
                                    }
                                    return r.setCountryCode(0), 0
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.parsePrefixAsIdd_ = function(e, t) {
                                    var n = t.toString();
                                    if (0 == n.search(e)) {
                                        var o = n.match(e)[0].length,
                                            r = n.substring(o).match(i18n.phonenumbers.PhoneNumberUtil.CAPTURING_DIGIT_PATTERN);
                                        return !(r && null != r[1] && 0 < r[1].length && "0" == i18n.phonenumbers.PhoneNumberUtil.normalizeDigitsOnly(r[1])) && (t.clear(), t.append(n.substring(o)), !0)
                                    }
                                    return !1
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.maybeStripInternationalPrefixAndNormalize = function(e, t) {
                                    var n = e.toString();
                                    return 0 == n.length ? i18n.phonenumbers.PhoneNumber.CountryCodeSource.FROM_DEFAULT_COUNTRY : i18n.phonenumbers.PhoneNumberUtil.LEADING_PLUS_CHARS_PATTERN_.test(n) ? (n = n.replace(i18n.phonenumbers.PhoneNumberUtil.LEADING_PLUS_CHARS_PATTERN_, ""), e.clear(), e.append(i18n.phonenumbers.PhoneNumberUtil.normalize(n)), i18n.phonenumbers.PhoneNumber.CountryCodeSource.FROM_NUMBER_WITH_PLUS_SIGN) : (n = new RegExp(t), i18n.phonenumbers.PhoneNumberUtil.normalizeSB_(e), this.parsePrefixAsIdd_(n, e) ? i18n.phonenumbers.PhoneNumber.CountryCodeSource.FROM_NUMBER_WITH_IDD : i18n.phonenumbers.PhoneNumber.CountryCodeSource.FROM_DEFAULT_COUNTRY)
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.maybeStripNationalPrefixAndCarrierCode = function(e, t, n) {
                                    var o = e.toString(),
                                        r = o.length,
                                        i = t.getNationalPrefixForParsing();
                                    if (0 == r || null == i || 0 == i.length) return !1;
                                    var a = new RegExp("^(?:" + i + ")");
                                    if (r = a.exec(o)) {
                                        var i = new RegExp(t.getGeneralDesc().getNationalNumberPatternOrDefault()),
                                            d = i18n.phonenumbers.PhoneNumberUtil.matchesEntirely_(i, o),
                                            s = r.length - 1;
                                        if (t = t.getNationalPrefixTransformRule(), null == t || 0 == t.length || null == r[s] || 0 == r[s].length) {
                                            if (d && !i18n.phonenumbers.PhoneNumberUtil.matchesEntirely_(i, o.substring(r[0].length))) return !1;
                                            null != n && 0 < s && null != r[s] && n.append(r[1]), e.set(o.substring(r[0].length))
                                        } else {
                                            if (o = o.replace(a, t), d && !i18n.phonenumbers.PhoneNumberUtil.matchesEntirely_(i, o)) return !1;
                                            null != n && 0 < s && n.append(r[1]), e.set(o)
                                        }
                                        return !0
                                    }
                                    return !1
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.maybeStripExtension = function(e) {
                                    var t = e.toString(),
                                        n = t.search(i18n.phonenumbers.PhoneNumberUtil.EXTN_PATTERN_);
                                    if (0 <= n && i18n.phonenumbers.PhoneNumberUtil.isViablePhoneNumber(t.substring(0, n)))
                                        for (var o = t.match(i18n.phonenumbers.PhoneNumberUtil.EXTN_PATTERN_), r = o.length, i = 1; i < r; ++i)
                                            if (null != o[i] && 0 < o[i].length) return e.clear(), e.append(t.substring(0, n)), o[i];
                                    return ""
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.checkRegionForParsing_ = function(e, t) {
                                    return this.isValidRegionCode_(t) || null != e && 0 < e.length && i18n.phonenumbers.PhoneNumberUtil.LEADING_PLUS_CHARS_PATTERN_.test(e)
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.parse = function(e, t) {
                                    return this.parseHelper_(e, t, !1, !0)
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.parseAndKeepRawInput = function(e, t) {
                                    if (!this.isValidRegionCode_(t) && 0 < e.length && e.charAt(0) != i18n.phonenumbers.PhoneNumberUtil.PLUS_SIGN) throw Error(i18n.phonenumbers.Error.INVALID_COUNTRY_CODE);
                                    return this.parseHelper_(e, t, !0, !0)
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.setItalianLeadingZerosForPhoneNumber_ = function(e, t) {
                                    if (1 < e.length && "0" == e.charAt(0)) {
                                        t.setItalianLeadingZero(!0);
                                        for (var n = 1; n < e.length - 1 && "0" == e.charAt(n);) n++;
                                        1 != n && t.setNumberOfLeadingZeros(n)
                                    }
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.parseHelper_ = function(e, t, n, o) {
                                    if (null == e) throw Error(i18n.phonenumbers.Error.NOT_A_NUMBER);
                                    if (e.length > i18n.phonenumbers.PhoneNumberUtil.MAX_INPUT_STRING_LENGTH_) throw Error(i18n.phonenumbers.Error.TOO_LONG);
                                    var r = new goog.string.StringBuffer;
                                    if (this.buildNationalNumberForParsing_(e, r), !i18n.phonenumbers.PhoneNumberUtil.isViablePhoneNumber(r.toString())) throw Error(i18n.phonenumbers.Error.NOT_A_NUMBER);
                                    if (o && !this.checkRegionForParsing_(r.toString(), t)) throw Error(i18n.phonenumbers.Error.INVALID_COUNTRY_CODE);
                                    o = new i18n.phonenumbers.PhoneNumber, n && o.setRawInput(e), e = this.maybeStripExtension(r), 0 < e.length && o.setExtension(e), e = this.getMetadataForRegion(t);
                                    var i = new goog.string.StringBuffer,
                                        a = 0,
                                        d = r.toString();
                                    try {
                                        a = this.maybeExtractCountryCode(d, e, i, n, o)
                                    } catch (s) {
                                        if (s.message != i18n.phonenumbers.Error.INVALID_COUNTRY_CODE || !i18n.phonenumbers.PhoneNumberUtil.LEADING_PLUS_CHARS_PATTERN_.test(d)) throw s;
                                        if (d = d.replace(i18n.phonenumbers.PhoneNumberUtil.LEADING_PLUS_CHARS_PATTERN_, ""), a = this.maybeExtractCountryCode(d, e, i, n, o), 0 == a) throw s
                                    }
                                    if (0 != a ? (r = this.getRegionCodeForCountryCode(a), r != t && (e = this.getMetadataForRegionOrCallingCode_(a, r))) : (i18n.phonenumbers.PhoneNumberUtil.normalizeSB_(r), i.append(r.toString()), null != t ? (a = e.getCountryCodeOrDefault(), o.setCountryCode(a)) : n && o.clearCountryCodeSource()), i.getLength() < i18n.phonenumbers.PhoneNumberUtil.MIN_LENGTH_FOR_NSN_) throw Error(i18n.phonenumbers.Error.TOO_SHORT_NSN);
                                    if (null != e && (t = new goog.string.StringBuffer, r = new goog.string.StringBuffer(i.toString()), this.maybeStripNationalPrefixAndCarrierCode(r, e, t), this.isShorterThanPossibleNormalNumber_(e, r.toString()) || (i = r, n && o.setPreferredDomesticCarrierCode(t.toString()))), n = i.toString(), t = n.length, t < i18n.phonenumbers.PhoneNumberUtil.MIN_LENGTH_FOR_NSN_) throw Error(i18n.phonenumbers.Error.TOO_SHORT_NSN);
                                    if (t > i18n.phonenumbers.PhoneNumberUtil.MAX_LENGTH_FOR_NSN_) throw Error(i18n.phonenumbers.Error.TOO_LONG);
                                    return this.setItalianLeadingZerosForPhoneNumber_(n, o), o.setNationalNumber(parseInt(n, 10)), o
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.buildNationalNumberForParsing_ = function(e, t) {
                                    var n = e.indexOf(i18n.phonenumbers.PhoneNumberUtil.RFC3966_PHONE_CONTEXT_);
                                    if (0 < n) {
                                        var o = n + i18n.phonenumbers.PhoneNumberUtil.RFC3966_PHONE_CONTEXT_.length;
                                        if (e.charAt(o) == i18n.phonenumbers.PhoneNumberUtil.PLUS_SIGN) {
                                            var r = e.indexOf(";", o);
                                            0 < r ? t.append(e.substring(o, r)) : t.append(e.substring(o))
                                        }
                                        o = e.indexOf(i18n.phonenumbers.PhoneNumberUtil.RFC3966_PREFIX_), t.append(e.substring(0 <= o ? o + i18n.phonenumbers.PhoneNumberUtil.RFC3966_PREFIX_.length : 0, n))
                                    } else t.append(i18n.phonenumbers.PhoneNumberUtil.extractPossibleNumber(e));
                                    n = t.toString(), o = n.indexOf(i18n.phonenumbers.PhoneNumberUtil.RFC3966_ISDN_SUBADDRESS_), 0 < o && (t.clear(), t.append(n.substring(0, o)))
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.isNumberMatch = function(e, t) {
                                    var n, o;
                                    if ("string" == typeof e) try {
                                        n = this.parse(e, i18n.phonenumbers.PhoneNumberUtil.UNKNOWN_REGION_)
                                    } catch (r) {
                                        if (r.message != i18n.phonenumbers.Error.INVALID_COUNTRY_CODE) return i18n.phonenumbers.PhoneNumberUtil.MatchType.NOT_A_NUMBER;
                                        if ("string" != typeof t) {
                                            var i = this.getRegionCodeForCountryCode(t.getCountryCodeOrDefault());
                                            if (i != i18n.phonenumbers.PhoneNumberUtil.UNKNOWN_REGION_) {
                                                try {
                                                    n = this.parse(e, i)
                                                } catch (a) {
                                                    return i18n.phonenumbers.PhoneNumberUtil.MatchType.NOT_A_NUMBER
                                                }
                                                return n = this.isNumberMatch(n, t), n == i18n.phonenumbers.PhoneNumberUtil.MatchType.EXACT_MATCH ? i18n.phonenumbers.PhoneNumberUtil.MatchType.NSN_MATCH : n
                                            }
                                        }
                                        try {
                                            n = this.parseHelper_(e, null, !1, !1)
                                        } catch (a) {
                                            return i18n.phonenumbers.PhoneNumberUtil.MatchType.NOT_A_NUMBER
                                        }
                                    } else n = e.clone();
                                    if ("string" == typeof t) try {
                                        return o = this.parse(t, i18n.phonenumbers.PhoneNumberUtil.UNKNOWN_REGION_), this.isNumberMatch(e, o)
                                    } catch (r) {
                                        return r.message != i18n.phonenumbers.Error.INVALID_COUNTRY_CODE ? i18n.phonenumbers.PhoneNumberUtil.MatchType.NOT_A_NUMBER : this.isNumberMatch(t, n)
                                    } else o = t.clone();
                                    if (n.clearRawInput(), n.clearCountryCodeSource(), n.clearPreferredDomesticCarrierCode(), o.clearRawInput(), o.clearCountryCodeSource(), o.clearPreferredDomesticCarrierCode(), n.hasExtension() && 0 == n.getExtension().length && n.clearExtension(), o.hasExtension() && 0 == o.getExtension().length && o.clearExtension(), n.hasExtension() && o.hasExtension() && n.getExtension() != o.getExtension()) return i18n.phonenumbers.PhoneNumberUtil.MatchType.NO_MATCH;
                                    var i = n.getCountryCodeOrDefault(),
                                        d = o.getCountryCodeOrDefault();
                                    return 0 != i && 0 != d ? n.equals(o) ? i18n.phonenumbers.PhoneNumberUtil.MatchType.EXACT_MATCH : i == d && this.isNationalNumberSuffixOfTheOther_(n, o) ? i18n.phonenumbers.PhoneNumberUtil.MatchType.SHORT_NSN_MATCH : i18n.phonenumbers.PhoneNumberUtil.MatchType.NO_MATCH : (n.setCountryCode(0), o.setCountryCode(0), n.equals(o) ? i18n.phonenumbers.PhoneNumberUtil.MatchType.NSN_MATCH : this.isNationalNumberSuffixOfTheOther_(n, o) ? i18n.phonenumbers.PhoneNumberUtil.MatchType.SHORT_NSN_MATCH : i18n.phonenumbers.PhoneNumberUtil.MatchType.NO_MATCH)
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.isNationalNumberSuffixOfTheOther_ = function(e, t) {
                                    var n = "" + e.getNationalNumber(),
                                        o = "" + t.getNationalNumber();
                                    return goog.string.endsWith(n, o) || goog.string.endsWith(o, n)
                                }, i18n.phonenumbers.PhoneNumberUtil.prototype.canBeInternationallyDialled = function(e) {
                                    var t = this.getMetadataForRegion(this.getRegionCodeForNumber(e));
                                    return null == t || (e = this.getNationalSignificantNumber(e), !this.isNumberMatchingDesc_(e, t.getNoInternationalDialling()))
                                }, i18n.phonenumbers.PhoneNumberUtil.matchesEntirely_ = function(e, t) {
                                    var n = "string" == typeof e ? t.match("^(?:" + e + ")$") : t.match(e);
                                    return !(!n || n[0].length != t.length)
                                }, i18n.phonenumbers.AsYouTypeFormatter = function(e) {
                                    this.DIGIT_PLACEHOLDER_ = " ", this.DIGIT_PATTERN_ = new RegExp(this.DIGIT_PLACEHOLDER_), this.currentOutput_ = "", this.formattingTemplate_ = new goog.string.StringBuffer, this.currentFormattingPattern_ = "", this.accruedInput_ = new goog.string.StringBuffer, this.accruedInputWithoutFormatting_ = new goog.string.StringBuffer, this.ableToFormat_ = !0, this.isExpectingCountryCallingCode_ = this.isCompleteNumber_ = this.inputHasFormatting_ = !1, this.phoneUtil_ = i18n.phonenumbers.PhoneNumberUtil.getInstance(), this.positionToRemember_ = this.originalPosition_ = this.lastMatchPosition_ = 0, this.prefixBeforeNationalNumber_ = new goog.string.StringBuffer, this.shouldAddSpaceAfterNationalPrefix_ = !1, this.extractedNationalPrefix_ = "", this.nationalNumber_ = new goog.string.StringBuffer, this.possibleFormats_ = [], this.defaultCountry_ = e, this.defaultMetadata_ = this.currentMetadata_ = this.getMetadataForRegion_(this.defaultCountry_)
                                }, i18n.phonenumbers.AsYouTypeFormatter.SEPARATOR_BEFORE_NATIONAL_NUMBER_ = " ", i18n.phonenumbers.AsYouTypeFormatter.EMPTY_METADATA_ = new i18n.phonenumbers.PhoneMetadata, i18n.phonenumbers.AsYouTypeFormatter.EMPTY_METADATA_.setInternationalPrefix("NA"), i18n.phonenumbers.AsYouTypeFormatter.CHARACTER_CLASS_PATTERN_ = /\[([^\[\]])*\]/g, i18n.phonenumbers.AsYouTypeFormatter.STANDALONE_DIGIT_PATTERN_ = /\d(?=[^,}][^,}])/g, i18n.phonenumbers.AsYouTypeFormatter.ELIGIBLE_FORMAT_PATTERN_ = new RegExp("^[" + i18n.phonenumbers.PhoneNumberUtil.VALID_PUNCTUATION + "]*(\\$\\d[" + i18n.phonenumbers.PhoneNumberUtil.VALID_PUNCTUATION + "]*)+$"), i18n.phonenumbers.AsYouTypeFormatter.NATIONAL_PREFIX_SEPARATORS_PATTERN_ = /[- ]/, i18n.phonenumbers.AsYouTypeFormatter.MIN_LEADING_DIGITS_LENGTH_ = 3, i18n.phonenumbers.AsYouTypeFormatter.prototype.getMetadataForRegion_ = function(e) {
                                    return e = this.phoneUtil_.getCountryCodeForRegion(e), e = this.phoneUtil_.getRegionCodeForCountryCode(e), e = this.phoneUtil_.getMetadataForRegion(e), null != e ? e : i18n.phonenumbers.AsYouTypeFormatter.EMPTY_METADATA_
                                }, i18n.phonenumbers.AsYouTypeFormatter.prototype.maybeCreateNewTemplate_ = function() {
                                    for (var e = this.possibleFormats_.length, t = 0; t < e; ++t) {
                                        var n = this.possibleFormats_[t],
                                            o = n.getPatternOrDefault();
                                        if (this.currentFormattingPattern_ == o) return !1;
                                        if (this.createFormattingTemplate_(n)) return this.currentFormattingPattern_ = o, this.shouldAddSpaceAfterNationalPrefix_ = i18n.phonenumbers.AsYouTypeFormatter.NATIONAL_PREFIX_SEPARATORS_PATTERN_.test(n.getNationalPrefixFormattingRule()), this.lastMatchPosition_ = 0, !0
                                    }
                                    return this.ableToFormat_ = !1
                                }, i18n.phonenumbers.AsYouTypeFormatter.prototype.getAvailableFormats_ = function(e) {
                                    for (var t = this.isCompleteNumber_ && 0 < this.currentMetadata_.intlNumberFormatCount() ? this.currentMetadata_.intlNumberFormatArray() : this.currentMetadata_.numberFormatArray(), n = t.length, o = 0; o < n; ++o) {
                                        var r = t[o];
                                        (!this.currentMetadata_.hasNationalPrefix() || this.isCompleteNumber_ || r.getNationalPrefixOptionalWhenFormatting() || this.phoneUtil_.formattingRuleHasFirstGroupOnly(r.getNationalPrefixFormattingRuleOrDefault())) && this.isFormatEligible_(r.getFormatOrDefault()) && this.possibleFormats_.push(r)
                                    }
                                    this.narrowDownPossibleFormats_(e)
                                }, i18n.phonenumbers.AsYouTypeFormatter.prototype.isFormatEligible_ = function(e) {
                                    return i18n.phonenumbers.AsYouTypeFormatter.ELIGIBLE_FORMAT_PATTERN_.test(e)
                                }, i18n.phonenumbers.AsYouTypeFormatter.prototype.narrowDownPossibleFormats_ = function(e) {
                                    for (var t = [], n = e.length - i18n.phonenumbers.AsYouTypeFormatter.MIN_LEADING_DIGITS_LENGTH_, o = this.possibleFormats_.length, r = 0; r < o; ++r) {
                                        var i = this.possibleFormats_[r];
                                        if (0 == i.leadingDigitsPatternCount()) t.push(this.possibleFormats_[r]);
                                        else {
                                            var a = Math.min(n, i.leadingDigitsPatternCount() - 1),
                                                i = i.getLeadingDigitsPattern(a);
                                            0 == e.search(i) && t.push(this.possibleFormats_[r])
                                        }
                                    }
                                    this.possibleFormats_ = t
                                }, i18n.phonenumbers.AsYouTypeFormatter.prototype.createFormattingTemplate_ = function(e) {
                                    var t = e.getPatternOrDefault();
                                    return -1 == t.indexOf("|") && (t = t.replace(i18n.phonenumbers.AsYouTypeFormatter.CHARACTER_CLASS_PATTERN_, "\\d"), t = t.replace(i18n.phonenumbers.AsYouTypeFormatter.STANDALONE_DIGIT_PATTERN_, "\\d"), this.formattingTemplate_.clear(), e = this.getFormattingTemplate_(t, e.getFormatOrDefault()), 0 < e.length && (this.formattingTemplate_.append(e), !0))
                                }, i18n.phonenumbers.AsYouTypeFormatter.prototype.getFormattingTemplate_ = function(e, t) {
                                    var n = "999999999999999".match(e)[0];
                                    return n.length < this.nationalNumber_.getLength() ? "" : (n = n.replace(new RegExp(e, "g"), t), n = n.replace(RegExp("9", "g"), this.DIGIT_PLACEHOLDER_))
                                }, i18n.phonenumbers.AsYouTypeFormatter.prototype.clear = function() {
                                    this.currentOutput_ = "", this.accruedInput_.clear(), this.accruedInputWithoutFormatting_.clear(), this.formattingTemplate_.clear(), this.lastMatchPosition_ = 0, this.currentFormattingPattern_ = "", this.prefixBeforeNationalNumber_.clear(), this.extractedNationalPrefix_ = "", this.nationalNumber_.clear(), this.ableToFormat_ = !0, this.inputHasFormatting_ = !1, this.originalPosition_ = this.positionToRemember_ = 0, this.isExpectingCountryCallingCode_ = this.isCompleteNumber_ = !1, this.possibleFormats_ = [], this.shouldAddSpaceAfterNationalPrefix_ = !1, this.currentMetadata_ != this.defaultMetadata_ && (this.currentMetadata_ = this.getMetadataForRegion_(this.defaultCountry_))
                                }, i18n.phonenumbers.AsYouTypeFormatter.prototype.inputDigit = function(e) {
                                    return this.currentOutput_ = this.inputDigitWithOptionToRememberPosition_(e, !1)
                                }, i18n.phonenumbers.AsYouTypeFormatter.prototype.inputDigitAndRememberPosition = function(e) {
                                    return this.currentOutput_ = this.inputDigitWithOptionToRememberPosition_(e, !0)
                                }, i18n.phonenumbers.AsYouTypeFormatter.prototype.inputDigitWithOptionToRememberPosition_ = function(e, t) {
                                    if (this.accruedInput_.append(e), t && (this.originalPosition_ = this.accruedInput_.getLength()), this.isDigitOrLeadingPlusSign_(e) ? e = this.normalizeAndAccrueDigitsAndPlusSign_(e, t) : (this.ableToFormat_ = !1, this.inputHasFormatting_ = !0), !this.ableToFormat_) {
                                        if (!this.inputHasFormatting_)
                                            if (this.attemptToExtractIdd_()) {
                                                if (this.attemptToExtractCountryCallingCode_()) return this.attemptToChoosePatternWithPrefixExtracted_()
                                            } else if (this.ableToExtractLongerNdd_()) return this.prefixBeforeNationalNumber_.append(i18n.phonenumbers.AsYouTypeFormatter.SEPARATOR_BEFORE_NATIONAL_NUMBER_), this.attemptToChoosePatternWithPrefixExtracted_();
                                        return this.accruedInput_.toString()
                                    }
                                    switch (this.accruedInputWithoutFormatting_.getLength()) {
                                        case 0:
                                        case 1:
                                        case 2:
                                            return this.accruedInput_.toString();
                                        case 3:
                                            if (!this.attemptToExtractIdd_()) return this.extractedNationalPrefix_ = this.removeNationalPrefixFromNationalNumber_(), this.attemptToChooseFormattingPattern_();
                                            this.isExpectingCountryCallingCode_ = !0;
                                        default:
                                            if (this.isExpectingCountryCallingCode_) return this.attemptToExtractCountryCallingCode_() && (this.isExpectingCountryCallingCode_ = !1), this.prefixBeforeNationalNumber_.toString() + this.nationalNumber_.toString();
                                            if (0 < this.possibleFormats_.length) {
                                                var n = this.inputDigitHelper_(e),
                                                    o = this.attemptToFormatAccruedDigits_();
                                                return 0 < o.length ? o : (this.narrowDownPossibleFormats_(this.nationalNumber_.toString()), this.maybeCreateNewTemplate_() ? this.inputAccruedNationalNumber_() : this.ableToFormat_ ? this.appendNationalNumber_(n) : this.accruedInput_.toString())
                                            }
                                            return this.attemptToChooseFormattingPattern_()
                                    }
                                }, i18n.phonenumbers.AsYouTypeFormatter.prototype.attemptToChoosePatternWithPrefixExtracted_ = function() {
                                    return this.ableToFormat_ = !0, this.isExpectingCountryCallingCode_ = !1, this.possibleFormats_ = [], this.lastMatchPosition_ = 0, this.formattingTemplate_.clear(), this.currentFormattingPattern_ = "", this.attemptToChooseFormattingPattern_()
                                }, i18n.phonenumbers.AsYouTypeFormatter.prototype.getExtractedNationalPrefix_ = function() {
                                    return this.extractedNationalPrefix_
                                }, i18n.phonenumbers.AsYouTypeFormatter.prototype.ableToExtractLongerNdd_ = function() {
                                    if (0 < this.extractedNationalPrefix_.length) {
                                        var e = this.nationalNumber_.toString();
                                        this.nationalNumber_.clear(), this.nationalNumber_.append(this.extractedNationalPrefix_), this.nationalNumber_.append(e);
                                        var e = this.prefixBeforeNationalNumber_.toString(),
                                            t = e.lastIndexOf(this.extractedNationalPrefix_);
                                        this.prefixBeforeNationalNumber_.clear(), this.prefixBeforeNationalNumber_.append(e.substring(0, t))
                                    }
                                    return this.extractedNationalPrefix_ != this.removeNationalPrefixFromNationalNumber_()
                                }, i18n.phonenumbers.AsYouTypeFormatter.prototype.isDigitOrLeadingPlusSign_ = function(e) {
                                    return i18n.phonenumbers.PhoneNumberUtil.CAPTURING_DIGIT_PATTERN.test(e) || 1 == this.accruedInput_.getLength() && i18n.phonenumbers.PhoneNumberUtil.PLUS_CHARS_PATTERN.test(e)
                                }, i18n.phonenumbers.AsYouTypeFormatter.prototype.attemptToFormatAccruedDigits_ = function() {
                                    for (var e = this.nationalNumber_.toString(), t = this.possibleFormats_.length, n = 0; n < t; ++n) {
                                        var o = this.possibleFormats_[n],
                                            r = o.getPatternOrDefault();
                                        if (new RegExp("^(?:" + r + ")$").test(e)) return this.shouldAddSpaceAfterNationalPrefix_ = i18n.phonenumbers.AsYouTypeFormatter.NATIONAL_PREFIX_SEPARATORS_PATTERN_.test(o.getNationalPrefixFormattingRule()), e = e.replace(new RegExp(r, "g"), o.getFormat()), this.appendNationalNumber_(e)
                                    }
                                    return ""
                                }, i18n.phonenumbers.AsYouTypeFormatter.prototype.appendNationalNumber_ = function(e) {
                                    var t = this.prefixBeforeNationalNumber_.getLength();
                                    return this.shouldAddSpaceAfterNationalPrefix_ && 0 < t && this.prefixBeforeNationalNumber_.toString().charAt(t - 1) != i18n.phonenumbers.AsYouTypeFormatter.SEPARATOR_BEFORE_NATIONAL_NUMBER_ ? this.prefixBeforeNationalNumber_ + i18n.phonenumbers.AsYouTypeFormatter.SEPARATOR_BEFORE_NATIONAL_NUMBER_ + e : this.prefixBeforeNationalNumber_ + e
                                }, i18n.phonenumbers.AsYouTypeFormatter.prototype.getRememberedPosition = function() {
                                    if (!this.ableToFormat_) return this.originalPosition_;
                                    for (var e = 0, t = 0, n = this.accruedInputWithoutFormatting_.toString(), o = this.currentOutput_.toString(); e < this.positionToRemember_ && t < o.length;) n.charAt(e) == o.charAt(t) && e++, t++;
                                    return t
                                }, i18n.phonenumbers.AsYouTypeFormatter.prototype.attemptToChooseFormattingPattern_ = function() {
                                    var e = this.nationalNumber_.toString();
                                    return e.length >= i18n.phonenumbers.AsYouTypeFormatter.MIN_LEADING_DIGITS_LENGTH_ ? (this.getAvailableFormats_(e), e = this.attemptToFormatAccruedDigits_(), 0 < e.length ? e : this.maybeCreateNewTemplate_() ? this.inputAccruedNationalNumber_() : this.accruedInput_.toString()) : this.appendNationalNumber_(e)
                                }, i18n.phonenumbers.AsYouTypeFormatter.prototype.inputAccruedNationalNumber_ = function() {
                                    var e = this.nationalNumber_.toString(),
                                        t = e.length;
                                    if (0 < t) {
                                        for (var n = "", o = 0; o < t; o++) n = this.inputDigitHelper_(e.charAt(o));
                                        return this.ableToFormat_ ? this.appendNationalNumber_(n) : this.accruedInput_.toString()
                                    }
                                    return this.prefixBeforeNationalNumber_.toString()
                                }, i18n.phonenumbers.AsYouTypeFormatter.prototype.isNanpaNumberWithNationalPrefix_ = function() {
                                    if (1 != this.currentMetadata_.getCountryCode()) return !1;
                                    var e = this.nationalNumber_.toString();
                                    return "1" == e.charAt(0) && "0" != e.charAt(1) && "1" != e.charAt(1)
                                }, i18n.phonenumbers.AsYouTypeFormatter.prototype.removeNationalPrefixFromNationalNumber_ = function() {
                                    var e = this.nationalNumber_.toString(),
                                        t = 0;
                                    if (this.isNanpaNumberWithNationalPrefix_()) t = 1, this.prefixBeforeNationalNumber_.append("1").append(i18n.phonenumbers.AsYouTypeFormatter.SEPARATOR_BEFORE_NATIONAL_NUMBER_), this.isCompleteNumber_ = !0;
                                    else if (this.currentMetadata_.hasNationalPrefixForParsing()) {
                                        var n = new RegExp("^(?:" + this.currentMetadata_.getNationalPrefixForParsing() + ")"),
                                            n = e.match(n);
                                        null != n && null != n[0] && 0 < n[0].length && (this.isCompleteNumber_ = !0, t = n[0].length, this.prefixBeforeNationalNumber_.append(e.substring(0, t)))
                                    }
                                    return this.nationalNumber_.clear(), this.nationalNumber_.append(e.substring(t)), e.substring(0, t)
                                }, i18n.phonenumbers.AsYouTypeFormatter.prototype.attemptToExtractIdd_ = function() {
                                    var e = this.accruedInputWithoutFormatting_.toString(),
                                        t = new RegExp("^(?:\\" + i18n.phonenumbers.PhoneNumberUtil.PLUS_SIGN + "|" + this.currentMetadata_.getInternationalPrefix() + ")"),
                                        t = e.match(t);
                                    return null != t && null != t[0] && 0 < t[0].length && (this.isCompleteNumber_ = !0, t = t[0].length, this.nationalNumber_.clear(), this.nationalNumber_.append(e.substring(t)), this.prefixBeforeNationalNumber_.clear(), this.prefixBeforeNationalNumber_.append(e.substring(0, t)), e.charAt(0) != i18n.phonenumbers.PhoneNumberUtil.PLUS_SIGN && this.prefixBeforeNationalNumber_.append(i18n.phonenumbers.AsYouTypeFormatter.SEPARATOR_BEFORE_NATIONAL_NUMBER_), !0)
                                }, i18n.phonenumbers.AsYouTypeFormatter.prototype.attemptToExtractCountryCallingCode_ = function() {
                                    if (0 == this.nationalNumber_.getLength()) return !1;
                                    var e = new goog.string.StringBuffer,
                                        t = this.phoneUtil_.extractCountryCode(this.nationalNumber_, e);
                                    return 0 != t && (this.nationalNumber_.clear(), this.nationalNumber_.append(e.toString()), e = this.phoneUtil_.getRegionCodeForCountryCode(t), i18n.phonenumbers.PhoneNumberUtil.REGION_CODE_FOR_NON_GEO_ENTITY == e ? this.currentMetadata_ = this.phoneUtil_.getMetadataForNonGeographicalRegion(t) : e != this.defaultCountry_ && (this.currentMetadata_ = this.getMetadataForRegion_(e)), this.prefixBeforeNationalNumber_.append("" + t).append(i18n.phonenumbers.AsYouTypeFormatter.SEPARATOR_BEFORE_NATIONAL_NUMBER_), this.extractedNationalPrefix_ = "", !0)
                                }, i18n.phonenumbers.AsYouTypeFormatter.prototype.normalizeAndAccrueDigitsAndPlusSign_ = function(e, t) {
                                    var n;
                                    return e == i18n.phonenumbers.PhoneNumberUtil.PLUS_SIGN ? (n = e, this.accruedInputWithoutFormatting_.append(e)) : (n = i18n.phonenumbers.PhoneNumberUtil.DIGIT_MAPPINGS[e], this.accruedInputWithoutFormatting_.append(n), this.nationalNumber_.append(n)), t && (this.positionToRemember_ = this.accruedInputWithoutFormatting_.getLength()), n
                                }, i18n.phonenumbers.AsYouTypeFormatter.prototype.inputDigitHelper_ = function(e) {
                                    var t = this.formattingTemplate_.toString();
                                    if (0 <= t.substring(this.lastMatchPosition_).search(this.DIGIT_PATTERN_)) {
                                        var n = t.search(this.DIGIT_PATTERN_);
                                        return e = t.replace(this.DIGIT_PATTERN_, e), this.formattingTemplate_.clear(), this.formattingTemplate_.append(e), this.lastMatchPosition_ = n, e.substring(0, this.lastMatchPosition_ + 1)
                                    }
                                    return 1 == this.possibleFormats_.length && (this.ableToFormat_ = !1),
                                        this.currentFormattingPattern_ = "", this.accruedInput_.toString()
                                }, module.exports = i18n.phonenumbers["default"] = i18n.phonenumbers.libphonenumber = i18n.phonenumbers
                        }, {}]
                    }, {}, [1])(1)
                })
            }()
    }), require.register("web/static/js/app.js", function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r() {
            $.ajaxSetup({
                beforeSend: function(e, t) {
                    /^(GET|HEAD|OPTIONS|TRACE)$/i.test(t.type) || this.crossDomain || e.setRequestHeader("x-csrf-token", $(document.body).data("csrf"))
                }
            })
        }

        function i() {
            window.userId = $(document.body).data("user")
        }

        function a() {
            window.ga = window.ga || function() {
                (ga.q = ga.q || []).push(arguments)
            }, ga.l = +new Date, ga("create", "UA-57174616-1", "auto", {
                userId: window.userId
            }), ga("set", "transport", "beacon"), ga("require", "ec"), ga("require", "linkid"), setTimeout(function() {
                ga("send", "pageview")
            }, 100)
        }

        function d() {
            return "undefined" == typeof Rollbar ? void(window.Rollbar = {
                error: function(e, t) {
                    console.error(e, t)
                }
            }) : void Rollbar.configure({
                payload: {
                    person: {
                        id: window.userId
                    }
                }
            })
        }

        function s() {
            var e = new Image;
            e.src = "//hello.myfonts.net/count/3078f0"
        }

        function u() {
            $("footer").on("click", "h4", function(e) {
                $(this).next("ul").slideToggle("fast")
            })
        }

        function l() {
            return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
        }

        function h() {
            l() && $(document.body).on("submit", "form", function(e) {
                this.checkValidity() || (e.preventDefault(), $(this).children().each(function() {
                    $(this).is(":invalid") && $(this).addClass("invalid")
                }))
            })
        }

        function c() {
            $.noty.defaults = {
                layout: "center",
                theme: "relax",
                type: "alert",
                text: "",
                dismissQueue: !0,
                template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
                animation: {
                    open: {
                        height: "toggle"
                    },
                    close: {
                        height: "toggle"
                    },
                    easing: "swing",
                    speed: 300
                },
                timeout: !1,
                force: !1,
                modal: !1,
                maxVisible: 5,
                killer: !1,
                closeWith: ["click"],
                callback: {
                    onShow: function() {},
                    afterShow: function() {},
                    onClose: function() {},
                    afterClose: function() {},
                    onCloseClick: function() {}
                },
                buttons: !1
            }
        }

        function p(e, t) {
            t = t || "init";
            var n = I[e] && I[e][t];
            "function" == typeof n && n()
        }
        var g = t("./components/api"),
            N = (o(g), t("./pages/box/new")),
            f = o(N),
            A = t("./pages/box/index"),
            m = o(A),
            b = t("./pages/box/show"),
            y = o(b),
            v = t("./pages/order/index"),
            _ = o(v),
            E = t("./pages/order/new"),
            P = o(E),
            T = t("./pages/order/show"),
            C = o(T),
            S = t("./pages/sample/new"),
            O = o(S),
            R = t("./pages/page/index"),
            M = o(R),
            x = t("./pages/page/dieline_request"),
            F = o(x),
            w = t("./pages/proof/edit"),
            D = o(w),
            I = {
                common: {
                    init: function() {
                        r(), i(), a(), d(), s(), u(), h(), c()
                    }
                },
                box: {
                    "new": function() {
                        new f["default"]($("main"))
                    },
                    index: function() {
                        new m["default"]($("main"))
                    },
                    show: function() {
                        new y["default"]($("main"))
                    }
                },
                order: {
                    index: function() {
                        new _["default"]($("main"))
                    },
                    "new": function() {
                        new P["default"]($("main"))
                    },
                    show: function() {
                        new C["default"]($("main"))
                    }
                },
                sample: {
                    "new": function() {
                        new O["default"]($("main"))
                    }
                },
                page: {
                    index: function() {
                        new M["default"]($("main"))
                    },
                    dieline_request: function() {
                        new F["default"]($("main"))
                    }
                },
                proof: {
                    edit: function() {
                        new D["default"]($("main"))
                    }
                }
            };
        ! function() {
            p("common"), document.body.className.split(/\s+/).forEach(function(e) {
                p(e), p(e, document.body.id)
            })
        }()
    }), require.register("web/static/js/components/address_autocomplete.js", function(e, t, n) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            i = {
                street_number: "short_name",
                route: "short_name",
                locality: "long_name",
                administrative_area_level_1: "short_name",
                country: "short_name",
                postal_code: "short_name"
            },
            a = function() {
                function e(t) {
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    o(this, e), this.container = $(t), this.setupAutocomplete()
                }
                return r(e, [{
                    key: "setupAutocomplete",
                    value: function() {
                        var e = this;
                        this.address = this.container.find("[autocomplete=street-address]"), this.address.val() || (this.unboundAddress = this.address.clone(), this.city = this.container.find("[autocomplete=address-level2]"), this.state = this.container.find("[autocomplete=address-level1]"), this.zip = this.container.find("[autocomplete=postal-code]"), this.country = this.container.find("[autocomplete=country]"), this.company = this.container.find("[autocomplete=organization]"), this.address.focus(function() {
                            e.address.val() || (e.autocomplete = new google.maps.places.Autocomplete(e.address[0]), e.autocomplete.addListener("place_changed", function() {
                                e.updateAddress()
                            }))
                        }))
                    }
                }, {
                    key: "updateAddress",
                    value: function() {
                        var e = this.autocomplete.getPlace();
                        if (e) {
                            for (var t = [], n = 0, o = e.address_components.length; n < o; n++) {
                                var r = e.address_components[n],
                                    a = r.types[0],
                                    d = i[a],
                                    s = r[d];
                                switch (a) {
                                    case "street_number":
                                    case "route":
                                        t.push(s);
                                        break;
                                    case "locality":
                                        this.city.val(s);
                                        break;
                                    case "administrative_area_level_1":
                                        this.state.val(s);
                                        break;
                                    case "country":
                                        this.country.val(s);
                                        break;
                                    case "postal_code":
                                        this.zip.val(s)
                                }
                            }
                            this.autocomplete.unbindAll(), this.unboundAddress.val(t.join(" ")), this.address.replaceWith(this.unboundAddress), this.company.focus(), this.container.trigger("change")
                        }
                    }
                }]), e
            }();
        e["default"] = a
    }), require.register("web/static/js/components/alert.js", function(e, t, n) {
        "use strict";

        function o(e) {
            return noty({
                text: e,
                type: "error"
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.notyAlert = o
    }), require.register("web/static/js/components/api.js", function(e, t, n) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
            return ["/api", e].concat(n).join("/")
        }

        function i(e, t) {
            return $.ajax({
                url: e,
                type: "POST",
                data: t,
                processData: !1,
                contentType: !1
            })
        }

        function a(e, t) {
            return $.ajax({
                url: e,
                type: "POST",
                data: t
            })
        }

        function d(e, t) {
            return {}
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = function() {
                function e(e, t) {
                    var n = [],
                        o = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var a, d = e[Symbol.iterator](); !(o = (a = d.next()).done) && (n.push(a.value), !t || n.length !== t); o = !0);
                    } catch (s) {
                        r = !0, i = s
                    } finally {
                        try {
                            !o && d["return"] && d["return"]()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return n
                }
                return function(t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            u = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            l = function() {
                function e() {
                    o(this, e)
                }
                return u(e, null, [{
                    key: "createFile",
                    value: function(e) {
                        var t = r("artwork"),
                            n = new FormData;
                        return n.append("file", e), i(t, n)
                    }
                }, {
                    key: "createSnapshot",
                    value: function(e) {
                        return 0;
                    }
                }, {
                    key: "createLayout",
                    value: function(e) {
                        var t = r("artwork/layouts");
                        return a(t, {
                            layout: e
                        })
                    }
                }, {
                    key: "getPrices",
                    value: function(e, t, n, o, i, a, s) {
                        var u = r("price"),
                            l = {
                                1: e,
                                2: t,
                                3: n,
                                4: o,
                                5: i,
                                6: a,
                                7: s.join(",")
                            };
                        return d(u, l)
                    }
                }, {
                    key: "getBraintreeToken",
                    value: function() {
                        var e = r("braintree/token");
                        return d(e)
                    }
                }, {
                    key: "cmyk2rgb",
                    value: function(e, t, n, o) {
                        var i = r("convert-color"),
                            a = {
                                c: e,
                                m: t,
                                y: n,
                                k: o
                            };
                        return d(i, a)
                    }
                }, {
                    key: "rgb2cmyk",
                    value: function(e, t, n) {
                        var o = r("convert-color"),
                            i = {
                                r: e,
                                g: t,
                                b: n
                            };
                        return d(o, i)
                    }
                }, {
                    key: "cssColor",
                    value: function(t) {
                        var n = $.Deferred();
                        if (this.requestCache = this.requestCache || {}, this.requestCache[t]) return this.requestCache[t];
                        if (t)
                            if (/^device-cmyk/.test(t)) {
                                this.requestCache[t] = n;
                                var o = /device-cmyk\(([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,\)]+)/.exec(t).slice(1).map(parseFloat),
                                    r = s(o, 4),
                                    i = r[0],
                                    a = r[1],
                                    d = r[2],
                                    u = r[3];
                                e.cmyk2rgb(i, a, d, u).done(function(e) {
                                    var t = s(e, 3),
                                        o = t[0],
                                        r = t[1],
                                        i = t[2],
                                        a = "rgb(" + Math.round(255 * o) + ", " + Math.round(255 * r) + ", " + Math.round(255 * i) + ")";
                                    n.resolve(a)
                                })
                            } else n.resolve(t);
                        else n.resolve("#fff");
                        return n.promise()
                    }
                }, {
                    key: "saveBox",
                    value: function(e, t) {
                        var n = "/box",
                            o = {
                                inventory: JSON.stringify(e),
                                faces: JSON.stringify(t)
                            };
                        return a(n, o)
                    }
                }]), e
            }();
        e["default"] = l
    }), require.register("web/static/js/components/box.js", function(e, t, n) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e) {
            switch (e) {
                case "top":
                case "bottom":
                    return {
                        width: "length",
                        height: "width"
                    };
                case "left":
                case "right":
                    return {
                        width: "width",
                        height: "depth"
                    };
                case "front":
                case "back":
                    return {
                        width: "length",
                        height: "depth"
                    }
            }
        }

        function i() {
            return {
                width: 0,
                height: 0,
                background: null,
                texture: null,
                layout: null,
                objects: []
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            d = function() {
                function e() {
                    var t = this,
                        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    o(this, e);
                    for (var r in n) this[r] = n[r];
                    e.sides.forEach(function(e) {
                        t.design[e] = t.design[e] || i();
                        var n = t.faceDimensions(e),
                            o = n.width,
                            r = n.height;
                        t.design[e].width = o, t.design[e].height = r
                    })
                }
                return a(e, [{
                    key: "faceDimensions",
                    value: function(e) {
                        var t = r(e);
                        return t.width = this[t.width], t.height = this[t.height], t
                    }
                }, {
                    key: "inkCoverage",
                    value: function() {
                        var t = this,
                            n = 0,
                            o = 0;
                        e.sides.forEach(function(e) {
                            var r = t.design[e];
                            if (r) {
                                var i = r.width * r.height;
                                n += i, o += (r.inkCoverage || 0) * i
                            }
                        });
                        var r = o / n;
                        return isNaN(r) ? 0 : r
                    }
                }, {
                    key: "toMeteor",
                    value: function(e) {
                        return {
                            _id: this.id,
                            length: this.length,
                            width: this.width,
                            depth: this.depth,
                            slug: ["mailer-box", "shipping-box", "classic-folding-carton", "tuck-top"][this.type.id - 1],
                            title: this.type.name,
                            selected_material: this.material.name,
                            caliper: ["B", "E", "18pt"][this.caliper.id - 1],
                            design: this.design,
                            snapshot: this.snapshot,
                            ink_coverage: this.inkCoverage(),
                            timestamp: Date.now(),
                            qty: e
                        }
                    }
                }, {
                    key: "loadFonts",
                    value: function() {
                        var t = this,
                            n = $.Deferred(),
                            o = {};
                        e.sides.forEach(function(e) {
                            var n = t.design[e];
                            n && n.objects.forEach(function(e) {
                                if (e.fontFamily && e.fontFamily.indexOf("Proxima Nova") === -1) {
                                    var t = e.fontFamily.replace(/['"]/g, "");
                                    o[t] = 1
                                }
                            })
                        });
                        var r = Object.keys(o);
                        return r.length > 0 ? WebFont.load({
                            google: {
                                families: r
                            },
                            active: function() {
                                n.resolve()
                            }
                        }) : n.resolve(), n.promise()
                    }
                }]), e
            }();
        e["default"] = d, d.sides = ["right", "left", "top", "bottom", "front", "back"], d.WhiteCorrugated = 1, d.KraftCorrugated = 2, d.Dreamcoat = 3, d.Paperboard = 4
    }), require.register("web/static/js/components/box_artwork_canvas.js", function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return e.state && e.state.objects ? e.state.objects.map(function(o) {
                return "image" === o.type ? a(o, t, e.files) : "i-text" === o.type ? d(o, t, n) : void 0
            }) : []
        }

        function a(e, t) {
            for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], o = null, r = 0, i = n.length; r < i; r++) {
                var a = n[r];
                if (a.image_url === e.src) {
                    o = a;
                    break
                }
            }
            var d = {
                type: "image",
                source: o && o.url,
                texture: e.src,
                width: e.width * t,
                height: e.height * t,
                scaleX: e.scaleX,
                scaleY: e.scaleY,
                offsetX: e.left * t,
                offsetY: e.top * t,
                rotation: e.angle
            };
            return "center" !== e.originX && (d.offsetX += d.width * d.scaleX / 2), "center" !== e.originY && (d.offsetY += d.height * d.scaleY / 2), d
        }

        function d(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                o = n[e.fill] || e.fill,
                r = {
                    type: "text",
                    text: e.text,
                    color: o,
                    fontFamily: e.fontFamily,
                    fontSize: e.fontSize * t,
                    width: e.width * t,
                    height: e.height * t,
                    scaleX: e.scaleX,
                    scaleY: e.scaleY,
                    offsetX: e.left * t,
                    offsetY: e.top * t,
                    rotation: e.angle,
                    lineHeight: e.lineHeight
                };
            return "center" !== e.originX && (r.offsetX += r.width * r.scaleX / 2), "center" !== e.originY && (r.offsetY += r.height * r.scaleY / 2), r
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            u = t("./api"),
            l = o(u),
            h = t("./color_picker"),
            c = (o(h), function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    r(this, e), this.canvas = t, this.opts = n, this["static"] = !!this.opts["static"], this.onChange = this.opts.onChange, this.setupCanvas(), this.setupEvents()
                }
                return s(e, [{
                    key: "setupCanvas",
                    value: function() {
                        this.canvas.style.textRendering = "optimizeLegibility", fabric.devicePixelRatio = Math.max(2, fabric.devicePixelRatio);
                        var e = this["static"] ? fabric.StaticCanvas : fabric.Canvas;
                        this.canvas = new e(this.canvas, {
                            stateful: !1,
                            renderOnAddRemove: !1,
                            hoverCursor: "pointer"
                        })
                    }
                }, {
                    key: "setupEvents",
                    value: function() {
                        var e = this;
                        if (!this["static"]) {
                            var t = this,
                                n = ["object:removed", "object:moving", "object:rotating", "object:scaling", "text:changed"];
                            n.forEach(function(n) {
                                e.canvas.on(n, function() {
                                    requestAnimationFrame(function() {
                                        t.onChange()
                                    })
                                })
                            })
                        }
                    }
                }, {
                    key: "addText",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        e.fontSize = 48;
                        var t = new fabric.IText("Your text here", e);
                        return t.setOriginX("center"), t.setOriginY("center"), this.addObject(t), t
                    }
                }, {
                    key: "addImage",
                    value: function(e) {
                        var t = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (/\.svg$/.test(e)) return this.addSVG(e);
                        var o = $.Deferred();
                        return fabric.Image.fromURL(e, function(e) {
                            e.setOriginX("center"), e.setOriginY("center"), n ? t.canvas.add(e) : t.addObject(e), o.resolve(e)
                        }, {
                            crossOrigin: "anonymous"
                        }), o.promise()
                    }
                }, {
                    key: "addSVG",
                    value: function(e) {
                        var t = this,
                            n = $.Deferred();
                        return fabric.loadSVGFromURL(e, function(e, o) {
                            var r = fabric.util.groupSVGElements(e, o);
                            t.addObject(r), n.resolve(r)
                        }), n.promise()
                    }
                }, {
                    key: "addObject",
                    value: function(e) {
                        this.canvas.add(e), this.setInitialScale(e), e.lockUniScaling = !0, e.center(), e.setCoords(), this["static"] || this.canvas.setActiveObject(e)
                    }
                }, {
                    key: "resize",
                    value: function(e, t) {
                        this.canvas.setWidth(e), this.canvas.setHeight(t)
                    }
                }, {
                    key: "setDimensions",
                    value: function(e, t) {
                        this.pixelRatio = e / this.canvas.getWidth()
                    }
                }, {
                    key: "setBackground",
                    value: function(e) {
                        var t = this;
                        return l["default"].cssColor(e).done(function(e) {
                            t.canvas.setBackgroundColor(e), requestAnimationFrame(function() {
                                t.render()
                            })
                        })
                    }
                }, {
                    key: "setObjects",
                    value: function(e) {
                        var t = this,
                            n = $.Deferred(),
                            o = e.map(function(n) {
                                var o = $.Deferred();
                                switch (n.type) {
                                    case "image":
                                        t.addImage(n.texture, !0).done(function(r) {
                                            t.setObjectTransform(n, r), r.moveTo(e.indexOf(n)), o.resolve(r)
                                        });
                                        break;
                                    case "text":
                                        l["default"].cssColor(n.color).done(function(r) {
                                            var i = new fabric.IText(n.text, {
                                                fontFamily: n.fontFamily,
                                                fontSize: n.fontSize / t.pixelRatio,
                                                lineHeight: n.lineHeight,
                                                fill: r
                                            });
                                            i.setOriginX("center"), i.setOriginY("center"), t.canvas.add(i), t.setObjectTransform(n, i), i.moveTo(e.indexOf(n)), o.resolve(i)
                                        })
                                }
                                return o.promise()
                            });
                        return $.when.apply($, o).done(function() {
                            requestAnimationFrame(function() {
                                t.render(), n.resolve()
                            })
                        }), n.promise()
                    }
                }, {
                    key: "setInitialScale",
                    value: function(e) {
                        this.fitObject(e), e.setScaleX(.8 * e.getScaleX()), e.setScaleY(.8 * e.getScaleY()), e.setCoords()
                    }
                }, {
                    key: "setObjectTransform",
                    value: function(e, t) {
                        e.width || (e.width = t.width * this.pixelRatio), e.height || (e.height = t.height * this.pixelRatio), t.setAngle(e.rotation), t.setWidth(e.width / this.pixelRatio), t.setHeight(e.height / this.pixelRatio), t.setScaleX(e.scaleX), t.setScaleY(e.scaleY), t.setLeft(e.offsetX / this.pixelRatio), t.setTop(e.offsetY / this.pixelRatio), t.setCoords()
                    }
                }, {
                    key: "currentObject",
                    value: function() {
                        var e = this.canvas.getObjects();
                        return 1 === e.length ? e[0] : this.canvas.getActiveObject()
                    }
                }, {
                    key: "fitObject",
                    value: function(e) {
                        if (e = e || this.currentObject()) {
                            e.scaleToWidth(this.canvas.width);
                            var t = e.getScaleX();
                            e.scaleToHeight(this.canvas.height);
                            var n = e.getScaleX();
                            t < n && e.scaleToWidth(this.canvas.width), this.centerObject(e)
                        }
                    }
                }, {
                    key: "coverObject",
                    value: function(e) {
                        if (e = e || this.currentObject()) {
                            e.scaleToWidth(this.canvas.width);
                            var t = e.getScaleX();
                            e.scaleToHeight(this.canvas.height);
                            var n = e.getScaleX();
                            t > n && e.scaleToWidth(this.canvas.width), this.centerObject(e)
                        }
                    }
                }, {
                    key: "centerObject",
                    value: function(e) {
                        var t = this;
                        e = e || this.currentObject(), e && (e.center(), e.setCoords(), requestAnimationFrame(function() {
                            t.render(), t.onChange()
                        }))
                    }
                }, {
                    key: "deleteObject",
                    value: function(e) {
                        e = e || this.currentObject(), e && (this.canvas.remove(e), this.render())
                    }
                }, {
                    key: "getElement",
                    value: function() {
                        return this.canvas.getElement()
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this.canvas.clear()
                    }
                }, {
                    key: "render",
                    value: function() {
                        this.canvas.renderAll()
                    }
                }, {
                    key: "toState",
                    value: function() {
                        return this.canvas.toDatalessObject()
                    }
                }, {
                    key: "toSVG",
                    value: function() {
                        return this.canvas.toSVG()
                    }
                }, {
                    key: "exportObjects",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = this.toState(),
                            o = [];
                        for (var r in e) o.push({
                            image_url: r,
                            url: e[r]
                        });
                        return i({
                            state: n,
                            files: o
                        }, this.pixelRatio, t)
                    }
                }, {
                    key: "inkCoverage",
                    value: function() {
                        if (!this["static"]) throw new Error("inkCoverage() should only be called on a static canvas.");
                        for (var e = this.getElement(), t = e.getContext("2d"), n = t.getImageData(0, 0, e.width, e.height), o = n.width, r = n.height, i = n.data, a = 0, d = 0, s = i.length; d < s; d += 4) {
                            var u = i[d],
                                l = i[d + 1],
                                h = i[d + 2],
                                c = i[d + 3],
                                p = 255 == u && 255 == l && 255 == h,
                                g = 0 == c;
                            p || g || (a += 1)
                        }
                        return a / (o * r)
                    }
                }]), e
            }());
        e["default"] = c
    }), require.register("web/static/js/components/box_artwork_editor.js", function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            a = t("./api"),
            d = o(a),
            s = t("./color_picker"),
            u = o(s),
            l = t("./box_artwork_canvas"),
            h = o(l),
            c = t("./alert"),
            p = function() {
                function e(t) {
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    r(this, e), this.container = $(t), this.loadAllFonts()
                }
                return i(e, [{
                    key: "loadAllFonts",
                    value: function() {
                        var e = [];
                        this.container.find("li").each(function() {
                            this.style.fontFamily.indexOf(",") === -1 && e.push($(this).text())
                        });
                        for (var t = 10, n = function(n, o) {
                                requestAnimationFrame(function() {
                                    WebFont.load({
                                        google: {
                                            families: e.slice(n, n + t)
                                        }
                                    })
                                })
                            }, o = 0, r = e.length; o < r; o += t) n(o, r)
                    }
                }]), e
            }(),
            g = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    r(this, e), this.container = $(t), this.loader = this.container.find(".loading-cube"), this.opts = n, this.box = this.opts.box, this.side = this.opts.side, this.sourceUrls = {}, this.sourceColors = {}, this.container.data("side", this.opts.side), this.setupCanvas()
                }
                return i(e, [{
                    key: "setupCanvas",
                    value: function() {
                        var e = this;
                        this.canvas = new h["default"](this.container.find(".artwork-canvas canvas")[0], {
                            onChange: function() {
                                e.container.trigger("editor:change")
                            }
                        });
                        var t = this.box.faceDimensions(this.side),
                            n = t.width,
                            o = t.height;
                        this.setDimensions(n, o);
                        var r = this.box.design[this.side].background;
                        this.setBackground(r, !1), this.setupEvents(), this.setupTextEditor(), this.initCanvas()
                    }
                }, {
                    key: "initCanvas",
                    value: function() {
                        var e = this,
                            t = this.box.design[this.side];
                        t.objects.forEach(function(t) {
                            "image" === t.type ? e.sourceUrls[t.texture] = t.source : "text" === t.type && d["default"].cssColor(t.color).done(function(n) {
                                e.sourceColors[n] = t.color
                            })
                        });
                        var n = this.box.faceDimensions(this.side),
                            o = n.width,
                            r = n.height;
                        this.setDimensions(o, r), this.canvas.setBackground(t.background), this.canvas.setObjects(t.objects).done(function() {
                            e.container.trigger("ready"), e.canvas.canvas.on("object:selected", function(t) {
                                e.container.find(".delete-btn").css("display", "inline-block");
                                var n = t.target;
                                if ("i-text" === n.type) {
                                    e.setFontFamily(n.fontFamily, null, !1);
                                    var o = e.sourceColors[n.fill] || n.fill;
                                    e.setTextColor(o, !1)
                                }
                            }), e.canvas.canvas.on("selection:cleared", function() {
                                e.container.find(".delete-btn").hide()
                            })
                        })
                    }
                }, {
                    key: "setupTextEditor",
                    value: function() {
                        this.setFontFamily("Proxima Nova"), this.setTextColor("#000")
                    }
                }, {
                    key: "setupEvents",
                    value: function() {
                        var e = this;
                        this.container.on("click", ".add-artwork-btn", function(t) {
                            t.preventDefault(), e.container.find("input[type=file]").click()
                        }), this.container.on("click", ".add-text-btn", function(t) {
                            d["default"].cssColor(e.textColor).done(function(t) {
                                e.sourceColors[t] = e.textColor, e.canvas.addText({
                                    fill: t,
                                    fontFamily: e.fontFamily,
                                    lineHeight: 1
                                })
                            })
                        }), this.container.on("change", "input[type=file]", function(t) {
                            //var n = this.files[0];
							//console.log(readURL(this));
							readURL(this);

                                //var n = t.texture,
                                //    o = t.source;
								function readURL(input) {

									if (input.files && input.files[0]) {
										var reader = new FileReader();

										reader.onload = function (b) {
											$('#blah').attr('src', b.target.result);
											e.sourceUrls[n] = b.target.result, e.canvas.addImage(b.target.result).done(function() {
												e.loader.fadeOut()

										}).fail(function() {
											(0, c.notyAlert)("There was an error uploading your artwork."), e.loader.fadeOut()
										});



										}

										reader.readAsDataURL(input.files[0]);
									}
								}


                        }), this.container.on("click", ".fit-btn", function(t) {
                            e.canvas.fitObject()
                        }), this.container.on("click", ".center-btn", function(t) {
                            e.canvas.centerObject()
                        }), this.container.on("click", ".cover-btn", function(t) {
                            e.canvas.coverObject()
                        }), this.container.on("click", ".delete-btn", function(t) {
                            e.canvas.deleteObject()
                        });

                        var t = new Drop({
                            target: this.container.find(".add-color-btn")[0],
                            content: this.container.find(".color-picker-content").html(),
                            position: "bottom right",
                            openOn: "click",
                            classes: "drop-theme-arrows-bounce"
                        });
                        t.once("open", function(e) {
                            new u["default"](t.content)
                        }), $(t.content).on("color:change", function(t, n) {
                            e.setBackground(n)
                        }), $(t.content).on("click", ".remove-btn", function(t) {
                            e.setBackground(null)
                        }), e.fontSelector = new Drop({
                            target: this.container.find(".font-btn")[0],
                            content: this.container.find(".font-picker-content").html(),
                            position: "bottom right",
                            openOn: "click",
                            classes: "drop-theme-arrows-bounce"
                        }), e.fontSelector.once("open", function(t) {
                            $(e.fontSelector.content).width(e.container.find(".font-btn").outerWidth() - 16), new p(e.fontSelector.content)
                        }), $(e.fontSelector.content).on("click", ".font-picker li", function(t) {
                            var n = $(this).css("font-family"),
                                o = $(this).text();
                            e.setFontFamily(n, o), e.fontSelector.close()
                        });
                        var n = new Drop({
                            target: this.container.find(".text-color-btn")[0],
                            content: this.container.find(".color-picker-content").html(),
                            position: "bottom right",
                            openOn: "click",
                            classes: "drop-theme-arrows-bounce"
                        });
                        n.once("open", function(e) {
                            new u["default"](n.content, {
                                noActions: !0
                            })
                        }), $(n.content).on("color:change", function(t, n) {
                            e.setTextColor(n)

                        }), $(window).resize(function() {
                            clearTimeout(e.resizeTimeout), e.resizeTimeout = setTimeout(function() {
                                var t = e.box.design[e.side],
                                    n = e.box.faceDimensions(e.side),
                                    o = n.width,
                                    r = n.height;
                                e.setDimensions(o, r), e.canvas.clear(), e.canvas.setBackground(t.background), e.canvas.setObjects(t.objects)
                            }, 50)
                        })
                    }
                }, {
                    key: "setBackground",
                    value: function(e) {
                        var t = this,
                            n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        this.box.design[this.side].background = e || null, d["default"].cssColor(e).done(function(e) {
                            t.container.find(".add-color-btn .color").css("background", e), t.canvas.setBackground(e), n && t.container.trigger("editor:change")
                        })
                    }
                }, {
                    key: "setDimensions",
                    value: function(e, t) {
                        var n = $(".artwork-editor.active .artwork-canvas").width(),
                            o = t / e * n;
                        this.canvas.resize(n, o), this.canvas.setDimensions(e, t)
                    }
                }, {
                    key: "setTextColor",
                    value: function(e) {
                        var t = this,
                            n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        this.textColor = e, d["default"].cssColor(e).done(function(o) {
                            t.sourceColors[o] = e, t.container.find(".text-color-btn .color").css("background", o), t.container.find(".font-btn .font").css("color", o), $(t.fontSelector.content).find(".font-picker").css("color", o);
                            var r = t.canvas.canvas.getActiveObject();
                            r && "i-text" === r.type && (r.setFill(o), n && (t.canvas.render(), t.container.trigger("editor:change")))
                        })
                    }
                }, {
                    key: "setFontFamily",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        t || (t = e.split(",")[0].replace(/['"]/g, "")), this.container.find(".font-btn").css("font-family", e), this.container.find(".font-btn .font").text(t), this.fontFamily = e;
                        var o = this.canvas.canvas.getActiveObject();
                        o && "i-text" === o.type && (o.setFontFamily(this.fontFamily), o.setCoords(), n && (this.canvas.render(), this.container.trigger("editor:change")))
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.container.removeClass("active")
                    }
                }, {
                    key: "show",
                    value: function() {
                        this.container.addClass("active")
                    }
                }, {
                    key: "exportObjects",
                    value: function() {
                        return this.canvas.exportObjects(this.sourceUrls, this.sourceColors)
                    }
                }]), e
            }();
        e["default"] = g
    }), require.register("web/static/js/components/box_viewer.js", function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            a = t("./box"),
            d = o(a),
            s = t("./box_artwork_canvas"),
            u = o(s),
            l = t("./color_picker"),
            h = (o(l), {
                x: "length",
                y: "depth",
                z: "width"
            }),
            c = {
                1: {
                    top: "/static/img/textures/mailer-box/top.png",
                    left: "/static/img/textures/mailer-box/left.png",
                    right: "/static/img/textures/mailer-box/right.png",
                    front: "/static/img/textures/mailer-box/front.png",
                    back: "/static/img/textures/mailer-box/front.png",
                    bottom: "/static/img/textures/mailer-box/bottom.png"
                },
                2: {
                    top: "/static/img/textures/shipping-box/top.png",
                    left: "/static/img/textures/shipping-box/side.png",
                    right: "/static/img/textures/shipping-box/side.png",
                    front: "/static/img/textures/shipping-box/front.png",
                    back: "/static/img/textures/shipping-box/front.png",
                    bottom: "/static/img/textures/shipping-box/top.png"
                },
                3: {
                    top: "/static/img/textures/classic-carton/top.png",
                    left: "/static/img/textures/classic-carton/side.png",
                    right: "/static/img/textures/classic-carton/side.png",
                    front: "/static/img/textures/classic-carton/front.png",
                    back: "/static/img/textures/classic-carton/front.png",
                    bottom: "/static/img/textures/classic-carton/top.png"
                }
            },
            p = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    r(this, e), this.container = $(t), this.opts = n, this.setupRenderer(), this.setupScene(), this.setupEvents(), this.resize(), this.animate()
                }
                return i(e, [{
                    key: "setupRenderer",
                    value: function() {
                        this.renderer = new(Detector.webgl ? THREE.WebGLRenderer : THREE.CanvasRenderer)({
                            antialias: !0,
                            alpha: !0,
                            preserveDrawingBuffer: !0
                        }), this.renderer.setClearColor(0x000000, 0), this.renderer.setPixelRatio(window.devicePixelRatio || 1), this.renderer.setSize(this.container.width(), this.container.height()), this.container.html(this.renderer.domElement)
                    }
                }, {
                    key: "setupScene",
                    value: function() {
                        var e = this;
                        this.scene = new THREE.Scene, this.textureLoader = new THREE.TextureLoader, this.textureLoader.crossOrigin = "anonymous";
                        var t = 28,
                            n = this.container.width() / this.container.height(),
                            o = .001,
                            r = 100;
                        this.camera = new THREE.PerspectiveCamera(t, n, o, r), this.camera.position.set(4, 5, 9), this.camera.lookAt(this.scene.position), this.scene.add(this.camera), this.lights = new THREE.Object3D;
                        var i = new THREE.AmbientLight(16448250);
                        this.lights.add(i);
                        var a = new THREE.PointLight(16777215, .075);
                        a.position.set(-.4, 1.2, -.4), this.lights.add(a);
                        var s = new THREE.PointLight(16777215, .075);
                        s.position.set(-.5, -1.05, 1.05), this.lights.add(s);
                        var u = new THREE.PointLight(16777215, .075);
                        u.position.set(1.8, -.5, .3), this.lights.add(u), this.scene.add(this.lights), this.boxObject = new THREE.Object3D, this.boxMaterial = new THREE.MultiMaterial, this.boxMaterial.materials = d["default"].sides.map(function(t) {
                            var n = document.createElement("canvas");
                            n.width = n.height = 512, e.drawColor(n, "#fff");
                            var o = new THREE.Texture(n);
                            o.anisotropy = e.renderer.getMaxAnisotropy(), o.needsUpdate = !0;
                            var r = new THREE.MeshPhongMaterial({
                                overdraw: Detector.webgl ? 0 : .5,
                                map: o
                            });
                            return r.canvas = n, r
                        });
                        var l = new THREE.BoxGeometry(1, 1, 1);
                        this.boxMesh = new THREE.Mesh(l, this.boxMaterial), this.boxMesh.position.set(0, 0, 0), this.boxObject.add(this.boxMesh), this.textureLoader.load("/static/img/textures/noise-512.jpg", function(t) {
                            e.boxMaterial.materials.forEach(function(e) {
                                e.normalMap = t, e.normalScale.set(.35, .35), e.needsUpdate = !0
                            })
                        }), this.textureLoader.load("/static/img/textures/shadow-512.png", function(t) {
                            var n = new THREE.PlaneBufferGeometry(1.25, 1.25),
                                o = new THREE.MeshBasicMaterial({
                                    map: t,
                                    transparent: !0
                                });
                            e.shadowMesh = new THREE.Mesh(n, o), e.shadowMesh.rotation.x = -Math.PI / 2, e.shadowMesh.position.set(0, -.51, 0), e.boxObject.add(e.shadowMesh)
                        }), this.scene.add(this.boxObject)
                    }
                }, {
                    key: "setupEvents",
                    value: function() {
                        var e = this;
                        $(window).resize(function() {
                            return e.resize()
                        })
                    }
                }, {
                    key: "setupCanvases",
                    value: function(e) {
                        var t = this;
                        this.canvases = {}, d["default"].sides.forEach(function(n) {
                            if (e.design[n]) {
                                var o = document.createElement("canvas");
                                o.width = 512, t.canvases[n] = new u["default"](o, {
                                    "static": !0,
                                    width: 512
                                })
                            }
                        })
                    }
                }, {
                    key: "setBox",
                    value: function(e) {
                        var t = this;
                        !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        this.setupCanvases(e), this.setDimensions(e), this.setMaterial(e), this.materialTextures = {}, d["default"].sides.forEach(function(n, o) {
                            var r = (t.boxMaterial.materials[o], c[e.type.id][n]);
                            t.textureLoader.load(r, function(o) {
                                t.materialTextures[n] = o, t.renderSide(e, n)
                            })
                        })
                    }
                }, {
                    key: "setMaterial",
                    value: function(e) {
                        var t = this;
                        d["default"].sides.forEach(function(n, o) {
                            var r = t.boxMaterial.materials[o];
                            e.material.id === d["default"].Dreamcoat ? r.shininess = 240 : e.material.id === d["default"].Paperboard ? r.shininess = 80 : r.shininess = 30, r.needsUpdate = !0
                        })
                    }
                }, {
                    key: "setDimensions",
                    value: function(e) {
                        var t = this,
                            n = 3 / Math.max(e.length, e.width, e.depth);
                        this.boxObject.scale.x = e[h.x] * n, this.boxObject.scale.y = e[h.y] * n, this.boxObject.scale.z = e[h.z] * n, this.lights.scale.copy(this.boxObject.scale), d["default"].sides.forEach(function(n) {
                            var o = t.canvases[n];
                            if (o) {
                                var r = e.faceDimensions(n),
                                    i = r.width,
                                    a = r.height,
                                    d = 512,
                                    s = a / i * d;
                                o.resize(d, s), o.setDimensions(i, a)
                            }
                        })
                    }
                }, {
                    key: "inkCoverage",
                    value: function(e) {
                        return this.canvases[e].inkCoverage()
                    }
                }, {
                    key: "renderSide",
                    value: function(e, t, n) {
                        var o = this,
                            r = e.design[t];
                        if (r && (this.rendering = this.rendering || {}, !this.rendering[t])) {
                            this.rendering[t] = !0;
                            var i = this.boxMaterial.materials[d["default"].sides.indexOf(t)],
                                a = this.canvases[t];
                            a.clear(), a.setBackground(r.background).done(function() {
                                a.setObjects(r.objects).done(function() {
                                    o.setBlendMode(i.canvas, "source-over");
                                    var r = o.materialColor(e.material);
                                    o.drawColor(i.canvas, r), o.setBlendMode(i.canvas, o.materialBlendMode(e.material)), o.drawImage(i.canvas, a.getElement()), o.materialTextures[t] && o.drawTexture(i.canvas, o.materialTextures[t]), i.map.needsUpdate = !0, o.rendering[t] = !1, n && setTimeout(function() {
                                        requestAnimationFrame(function() {
                                            n()
                                        })
                                    }, 20)
                                })
                            })
                        }
                    }
                }, {
                    key: "setSide",
                    value: function(e) {
                        var t = this,
                            n = {},
                            o = {
                                x: 4,
                                y: 5,
                                z: 9
                            };
                        switch (e) {
                            case "right":
                                n.y = -Math.PI / 2;
                                break;
                            case "left":
                                n.y = Math.PI / 2;
                                break;
                            case "top":
                                n.y = 0, o.x = 1, o.y = 9, o.z = 3;
                                break;
                            case "bottom":
                                n.y = 0, o.x = 1, o.y = -9, o.z = 3;
                                break;
                            case "front":
                                n.y = 0;
                                break;
                            case "back":
                                n.y = Math.PI
                        }
                        new TWEEN.Tween(this.boxObject.rotation).to(n, 1e3).easing(TWEEN.Easing.Exponential.Out).start(), new TWEEN.Tween(this.camera.position).to(o, 1e3).easing(TWEEN.Easing.Exponential.Out).onUpdate(function() {
                            t.camera.lookAt(t.boxObject.position)
                        }).start()
                    }
                }, {
                    key: "materialColor",
                    value: function(e) {
                        return e.id === d["default"].KraftCorrugated ? "#c08e65" : "#ffffff"
                    }
                }, {
                    key: "materialBlendMode",
                    value: function(e) {
                        return e.id === d["default"].KraftCorrugated ? "multiply" : "source-over"
                    }
                }, {
                    key: "drawImage",
                    value: function(e, t) {
                        var n = e.getContext("2d");
                        n.drawImage(t, 0, 0, e.width, e.height)
                    }
                }, {
                    key: "drawTexture",
                    value: function(e, t) {
                        this.drawImage(e, t.image)
                    }
                }, {
                    key: "drawColor",
                    value: function(e, t) {
                        var n = e.getContext("2d");
                        n.fillStyle = t, n.rect(0, 0, e.width, e.height), n.fill()
                    }
                }, {
                    key: "clearCanvas",
                    value: function(e) {
                        var t = e.getContext("2d");
                        t.clearRect(0, 0, e.width, e.height)
                    }
                }, {
                    key: "setBlendMode",
                    value: function(e, t) {
                        var n = e.getContext("2d");
                        n.globalCompositeOperation = t
                    }
                }, {
                    key: "resize",
                    value: function() {
                        var e = this.container.width(),
                            t = e,
                            n = e / t;
                        this.camera.aspect = n, this.camera.updateProjectionMatrix(), this.renderer.setSize(e, t)
                    }
                }, {
                    key: "animate",
                    value: function(e) {
                        var t = this;
                        requestAnimationFrame(function(e) {
                            return t.animate(e)
                        }), TWEEN.update(e), this.opts.rotate && (this.boxObject.rotation.y += .0025), this.renderer.render(this.scene, this.camera)
                    }
                }, {
                    key: "toBlob",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "image/png";
                        return this.renderer.domElement.toBlob(e, t)
                    }
                }]), e
            }();
        e["default"] = p
    }), require.register("web/static/js/components/color_picker.js", function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            return Math.min(n, Math.max(t, e))
        }

        function a(e, t, n) {
            return e + n * (t - e)
        }

        function d(e, t, n) {
            var o = i(Math.abs(6 * e % 6 - 3) - 1),
                r = i(Math.abs((6 * e + 4) % 6 - 3) - 1),
                d = i(Math.abs((6 * e + 2) % 6 - 3) - 1);
            return o = o * o * (3 - 2 * o), r = r * r * (3 - 2 * r), d = d * d * (3 - 2 * d), o = n * a(1, o, t), r = n * a(1, r, t), d = n * a(1, d, t), [o, r, d]
        }

        function s(e, t, n) {
            e *= 6;
            var o = Math.floor(e),
                r = e - o,
                i = n * (1 - t),
                a = n * (1 - r * t),
                d = n * (1 - (1 - r) * t),
                s = o % 6,
                u = [n, a, i, i, d, n][s],
                l = [d, n, n, a, i, i][s],
                h = [i, i, d, n, n, a][s];
            return [u, l, h]
        }

        function u(e, t, n) {
            var o = Math.max(e, t, n),
                r = Math.min(e, t, n),
                i = void 0,
                a = void 0,
                d = o,
                s = o - r;
            if (a = 0 === o ? 0 : s / o, o == r) i = 0;
            else {
                switch (o) {
                    case e:
                        i = (t - n) / s + (t < n ? 6 : 0);
                        break;
                    case t:
                        i = (n - e) / s + 2;
                        break;
                    case n:
                        i = (e - t) / s + 4
                }
                i /= 6
            }
            return [i, a, d]
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = function() {
                function e(e, t) {
                    var n = [],
                        o = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var a, d = e[Symbol.iterator](); !(o = (a = d.next()).done) && (n.push(a.value), !t || n.length !== t); o = !0);
                    } catch (s) {
                        r = !0, i = s
                    } finally {
                        try {
                            !o && d["return"] && d["return"]()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return n
                }
                return function(t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            h = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            c = t("./api"),
            p = o(c),
            g = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    r(this, e), this.container = $(t), n.noActions && this.container.find(".actions").remove(), this.hue = 0, this.saturation = 1, this.value = 0, this.setupCanvas(), this.setupEvents(), this.render()
                }
                return h(e, [{
                    key: "setupCanvas",
                    value: function() {
                        var e = this.container.find(".color-select");
                        this.canvas = this.container.find("canvas")[0], this.canvas.width = e.width(), this.canvas.height = e.height(), this.ctx = this.canvas.getContext("2d"), this.pointer = this.container.find(".pointer")
                    }
                }, {
                    key: "setupEvents",
                    value: function() {
                        var e = this;
                        this.container.on("change", ".saturation-select input", function(t) {
                            e.setHSV(e.hue, $(this).val(), e.value), requestAnimationFrame(function() {
                                return e.render()
                            })
                        }), this.container.on("change", ".inputs input", function(t) {
                            var n = parseFloat(e.container.find(".cyan").val()) / 100,
                                o = parseFloat(e.container.find(".yellow").val()) / 100,
                                r = parseFloat(e.container.find(".magenta").val()) / 100,
                                i = parseFloat(e.container.find(".black").val()) / 100;
                            e.setCMYK(n, r, o, i), requestAnimationFrame(function() {
                                return e.render()
                            })
                        });
                        var t = !1,
                            n = {
                                top: 0,
                                left: 0
                            },
                            o = {
                                x: 0,
                                y: 0
                            };
                        this.container.on("mousedown", ".color-select", function(r) {
                            t = !0, n = $(this).offset(), o.x = r.pageX - n.left, o.y = r.pageY - n.top, e.movePointer(o.x, o.y)
                        }), this.container.on("mousemove", function(r) {
                            t && (o.x = r.pageX - n.left, o.y = r.pageY - n.top, requestAnimationFrame(function() {
                                e.movePointer(o.x, o.y)
                            }))
                        }), this.container.on("mouseup mouseleave", function(n) {
                            t && e.movePointer(o.x, o.y), t = !1
                        })
                    }
                }, {
                    key: "movePointer",
                    value: function(e, t) {
                        var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                            o = this.pointer.width() / 2,
                            r = this.pointer.height() / 2;
                        if (e = i(e, -o, this.canvas.width - this.pointer.width()), t = i(t, -r, this.canvas.height - this.pointer.height()), this.pointer.css({
                                display: "block",
                                left: e,
                                top: t
                            }), n) {
                            e += r, t += o;
                            var a = i(e / (this.canvas.width - o)),
                                d = this.saturation,
                                s = i(1 - t / (this.canvas.height - r));
                            this.setHSV(a, d, s)
                        }
                    }
                }, {
                    key: "setHSV",
                    value: function(e, t, n) {
                        var o = this;
                        this.hue = e, this.saturation = t, this.value = n;
                        var r = s(e, t, n),
                            i = l(r, 3),
                            a = i[0],
                            d = i[1],
                            u = i[2];
                        p["default"].rgb2cmyk(a, d, u).done(function(e) {
                            var t = l(e, 4),
                                n = t[0],
                                r = t[1],
                                i = t[2],
                                a = t[3];
                            o.container.find(".cyan").val(Math.round(100 * n)), o.container.find(".magenta").val(Math.round(100 * r)), o.container.find(".yellow").val(Math.round(100 * i)), o.container.find(".black").val(Math.round(100 * a));
                            var d = "device-cmyk(" + n + ", " + r + ", " + i + ", " + a + ")";
                            o.container.trigger("color:change", d)
                        })
                    }
                }, {
                    key: "setCMYK",
                    value: function(e, t, n, o) {
                        var r = this;
                        p["default"].cmyk2rgb(e, t, n, o).done(function(i) {
                            var a = l(i, 3),
                                d = a[0],
                                s = a[1],
                                h = a[2],
                                c = u(d, s, h),
                                p = l(c, 3),
                                g = p[0],
                                N = p[1],
                                f = p[2];
                            r.hue = g, r.saturation = N, r.value = f, r.container.find(".saturation-select input").val(r.saturation), r.movePointer(g * (r.canvas.width - r.pointer.width() / 2), -(f - 1) * (r.canvas.height - r.pointer.height() / 2), !1);
                            var A = "device-cmyk(" + e + ", " + t + ", " + n + ", " + o + ")";
                            r.container.trigger("color:change", A)
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        for (var e = this.ctx.createImageData(this.canvas.width, this.canvas.height), t = e.data, n = this.saturation, o = this.canvas.width, r = this.canvas.height, i = void 0, a = 0, s = 0, u = t.length; s < u; s += 4) {
                            i = s / 4 % o / o, a = 1 - Math.floor(s / 4 / o) / r;
                            var l = d(i, n, a);
                            t[s] = 255 * l[0], t[s + 1] = 255 * l[1], t[s + 2] = 255 * l[2], t[s + 3] = 255
                        }
                        this.ctx.putImageData(e, 0, 0)
                    }
                }]), e
            }();
        e["default"] = g
    }), require.register("web/static/js/components/order.js", function(e, t, n) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            i = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    o(this, e), this.merge(t)
                }
                return r(e, [{
                    key: "merge",
                    value: function(e) {
                        for (var t in e) this[t] = e[t]
                    }
                }]), e
            }();
        e["default"] = i
    }), require.register("web/static/js/pages/box/index.js", function(e, t, n) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            i = function() {
                function e(t) {
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    o(this, e), this.container = $(t), this.setupEvents()
                }
                return r(e, [{
                    key: "setupEvents",
                    value: function() {
                        this.container.on("click", "a.delete", function(e) {
                            e.preventDefault(), $(this).parent().fadeOut(), $.ajax({
                                url: $(this).attr("href"),
                                type: "DELETE"
                            })
                        })
                    }
                }]), e
            }();
        e["default"] = i
    }), require.register("web/static/js/pages/box/new.js", function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            for (var n = 1, o = e.length; n < o; n++)
                if (e[n] > t) return n - 1;
            return n
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function() {
                function e(e, t) {
                    var n = [],
                        o = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var a, d = e[Symbol.iterator](); !(o = (a = d.next()).done) && (n.push(a.value), !t || n.length !== t); o = !0);
                    } catch (s) {
                        r = !0, i = s
                    } finally {
                        try {
                            !o && d["return"] && d["return"]()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return n
                }
                return function(t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            d = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            s = t("../../components/box"),
            u = o(s),
            l = t("../../components/box_viewer"),
            h = o(l),
            c = t("../../components/box_artwork_editor"),
            p = o(c),
            g = t("../../components/api"),
            N = o(g),
            f = t("../../components/alert"),
            A = function() {
                function e(t) {
                    var n = this,
                        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    r(this, e), this.container = $(t), this.opts = o, this.minFontSize = 10, this.setupQuantities(), this.setupBox(), this.restoreMeteorBox(), this.sendAnalytics(), this.setupUnsavedWarning(), this.box.loadFonts().done(function() {
                        n.setupCart(), n.setupArtworkEditors(), n.setupViewer(), n.setupEvents()
                    })
                }
                return d(e, [{
                    key: "setupQuantities",
                    value: function() {
						return 0;                    }
                }, {
                    key: "setupBox",
                    value: function(e) {
                        this.box = new u["default"](window.box)
                    }
                }, {
                    key: "restoreMeteorBox",
                    value: function() {
                        var e = this.box.toMeteor().slug,
                            t = localStorage["Meteor.userId"] || null,
                            n = "__amplify__box." + t + "." + e,
                            o = localStorage[n];
                        if (o) {
                            var r = JSON.parse(o),
                                i = r.data;
                            localStorage.removeItem(n), window.location = "/boxes/" + i + "/edit"
                        }
                    }
                }, {
                    key: "setupCart",
                    value: function() {
                        this.setQuantity(parseInt(localStorage.quantity || 25))
                    }
                }, {
                    key: "sendAnalytics",
                    value: function() {
                        ga("ec:addProduct", {
                            name: this.box.type.name,
                            variant: this.box.material.name
                        })
                    }
                }, {
                    key: "setupUnsavedWarning",
                    value: function() {
                        var e = this;
                        this.snapshotRequests = this.snapshotRequests || [], this.saveRequests = this.saveRequests || [], $(window).on("beforeunload", function() {
                            var t = $.grep(e.snapshotRequests.concat(e.saveRequests), function(e) {
                                return "resolved" != e.state()
                            });
                            if (t.length > 0) return "There is currently a request to the server pending. You may lose recent changes by navigating away."
                        })
                    }
                }, {
                    key: "setupViewer",
                    value: function() {
                        var e = this.container.find(".viewer");
                        this.viewer = new h["default"](e), this.viewer.setBox(this.box), this.activeSide = "front"
                    }
                }, {
                    key: "setupArtworkEditors",
                    value: function() {
                        var e = this;
                        this.artworkEditors = {}, u["default"].sides.forEach(function(t) {
                            if (e.box.design[t]) {
                                var n = e.container.find(".artwork-editor." + t);
                                e.artworkEditors[t] = new p["default"](n, {
                                    box: e.box,
                                    side: t,
                                    viewer: e.viewer
                                }), n.on("ready", function() {
                                    e.updateBoxSide(t)
                                })
                            }
                        })
                    }
                }, {
                    key: "setupEvents",
                    value: function() {
                        var e = this,
                            t = this.container.find(".material-btn");
                        t.length > 1 ? ! function() {
                            var n = [];
                            t.each(function(e) {
                                var o = $("<div>");
                                t.each(function(t) {
                                    e !== t && o.append($(this).clone())
                                }), n.push(new Drop({
                                    target: this,
                                    content: o.html(),
                                    position: "bottom center",
                                    openOn: "click",
                                    classes: "drop-theme-arrows-bounce"
                                }))
                            }), $(document.body).on("click", ".material-btn", function(t) {
                                if (!$(this).parent().is(".active")) {
                                    n.forEach(function(e) {
                                        return e.close()
                                    });
                                    var o = $(this).data("material");
                                    e.setMaterial(o)
                                }
                            })
                        }() : this.container.find(".material-btn .arrow").remove(), this.container.on("click", ".box-side", function(t) {
                            var n = $(this).find("h4").text();
                            e.setSide(n)
                        });
                         $(document.body).on("click", ".color-entire-box-btn", function(t) {
                            var n = e.box.design[e.activeSide].background;
                            u["default"].sides.forEach(function(t) {
                                var o = e.artworkEditors[t];
                                o && (o.setBackground(n), e.updateBoxSide(t))
                            })
                        }), this.container.on("editor:change", ".artwork-editor", function(t) {
                            var n = $(this).data("side");
                            e.updateBoxSide(n)
                        })
                    }
                }, {
                    key: "setSide",
                    value: function(e) {
                        this.activeSide = this.activeSide || "front", this.container.find(".box-side").removeClass("active"), this.container.find(".box-side." + e).addClass("active");
                        var t = this.artworkEditors[this.activeSide],
                            n = this.artworkEditors[e];
                        t && t.hide(), n.show(), this.activeSide = e, this.viewer.setSide(e)
                    }
                }, {
                    key: "setDimensions",
                    value: function(e) {

                    }
                }, {
                    key: "setMaterial",
                    value: function(e) {
                        var t = this;
                        this.container.find(".material").removeClass("active"), this.container.find('[data-material*="' + e.name + '"]').closest(".material").addClass("active"), this.box.material = e, e.name.indexOf("Corrugated") > -1 ? this.minFontSize = 10 : this.minFontSize = 8, this.viewer.setMaterial(this.box), u["default"].sides.forEach(function(e) {
                            t.box.design[e] && t.updateBoxSide(e)
                        }), this.saveBox(), this.updatePrices()
                    }
                }, {
                    key: "setQuantity",
                    value: function(e) {

                    }
                }, {
                    key: "updatePrices",
                    value: function() {
                        var e = this;
                        this.quantity && (clearTimeout(this.priceTimeout), this.priceTimeout = setTimeout(function() {
                            var t = e.box.type.id,
                                n = e.box,
                                o = n.length,
                                r = n.width,
                                i = n.depth,
                                d = e.box.material.id,
                                s = e.box.inkCoverage();
                            if (!(isNaN(o) || isNaN(r) || isNaN(i))) {
                                e.priceRequests = e.priceRequests || [], e.priceRequests.forEach(function(e) {
                                    e.abort()
                                }), e.priceRequests = [];
                                var u = N["default"].getPrices(t, o, r, i, d, s, [e.quantity]);
                                e.priceRequests.push(u), u.done(function(t) {
                                    var n = a(t, 1),
                                        o = n[0];
                                    e.container.find(".price-display .price").text("$" + o.toFixed(2))
                                });
                                var l = [],
                                    h = [];
                                e.container.find(".price-table tbody tr td:first-child").each(function(e, t) {
                                    l.push($(t).next("td")), h.push($(t).text())
                                }), 0 !== h.length && (u = N["default"].getPrices(t, o, r, i, d, s, h), e.priceRequests.push(u), u.done(function(e) {
                                    e.forEach(function(e, t) {
                                        var n = l[t];
                                        $(n).text("$" + e.toFixed(2))
                                    })
                                }))
                            }
                        }, 10))
                    }
                }, {
                    key: "inkCoverage",
                    value: function(e) {
                        return this.viewer.inkCoverage(e)
                    }
                }, {
                    key: "updateBoxSide",
                    value: function(e) {
                        var t = this,
                            n = this.artworkEditors[e],
                            o = n.canvas.pixelRatio,
                            r = !1;
                        this.box.design[e].objects = n.exportObjects(), this.box.design[e].objects.forEach(function(e) {
                            "text" == e.type && e.fontSize / o * e.scaleY < t.minFontSize && (r = !0)
                        }), r ? noty({
                            text: "Warning! The font size is too small and can lead to poor results when printing.",
                            type: "error",
                            maxVisible: 1
                        }) : $.noty.closeAll(), $.noty.clearQueue(), requestAnimationFrame(function() {
                            t.viewer.renderSide(t.box, e, function() {
                                t.saveSnapshot().done(function() {
                                    t.saveBox()
                                })
                            })
                        }), this.coverageTimeouts = this.coverageTimeouts || {}, clearTimeout(this.coverageTimeouts[e]), this.coverageTimeouts[e] = setTimeout(function() {
                            t.box.design[e].inkCoverage = t.inkCoverage(e), t.saveBox(), t.updatePrices()
                        }, 500), this.saveBox()
                    }
                }, {
                    key: "saveBox",
                    value: function() {
                        var e = this;
                        this.saveRequests = this.saveRequests || [], this.saveRequests.forEach(function(e) {
                            e.abort()
                        }), this.saveRequests = [];
                        var t = $.Deferred(),
                            n = JSON.stringify(this.box.toMeteor(this.quantity)),
                            o = $.post(location.pathname, {
                                inventory: n
                            }, function(n) {
                                var o = n.id;
                                e.box.id = o, e.container.find(".share-design-btn").attr("href", "/share/" + o).removeClass("share-design-btn"), t.resolve(e.box)
                            });
                        return this.saveRequests.push(o), t.promise()
                    }
                }, {
                    key: "saveSnapshot",
                    value: function() {
                        var e = this,
                            t = $.Deferred();
                        return clearTimeout(this.snapshotTimeout), this.snapshotTimeout = setTimeout(function() {
                            e.viewer.toBlob(function(n) {
                                e.snapshotRequests = e.snapshotRequests || [], e.snapshotRequests.forEach(function(e) {
                                    //e.abort()
                                }), e.snapshotRequests = [];
                                var o = N["default"].createSnapshot(n);
                                e.snapshotRequests.push(o), o.done(function(n) {
                                    var o = n.url;
                                    e.box.snapshot = o, t.resolve(o)
                                })
                            })
                        }, 500), t.promise()
                    }
                }]), e
            }();
        e["default"] = A
    }), require.register("web/static/js/pages/box/show.js", function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            a = t("../../components/box"),
            d = o(a),
            s = t("../../components/box_viewer"),
            u = o(s),
            l = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    r(this, e), this.container = $(t), this.opts = n, this.setupBox(), this.setupShareUrl()
                }
                return i(e, [{
                    key: "setupBox",
                    value: function() {
                        var e = this;
                        this.box = new d["default"](window.box), this.box.loadFonts().done(function() {
                            e.setupViewer()
                        })
                    }
                }, {
                    key: "setupViewer",
                    value: function() {
                        var e = this.container.find(".viewer");
                        this.viewer = new u["default"](e, {
                            rotate: !0
                        }), this.viewer.setBox(this.box)
                    }
                }, {
                    key: "setupShareUrl",
                    value: function() {
                        var e = this.container.find("#shorten-url"),
                            t = this.container.find("#share-url"),
                            n = t.val(),
                            o = "";
                        e.on("click", function(r) {
                            e.is(":checked") && "" === o ? $.get(window.location.href + "/short-url", function(e) {
                                o = e, t.val(e)
                            }) : e.is(":checked") && "" !== o ? t.val(o) : e.not(":checked") && t.val(n), t.focus(function() {
                                $(this).select()
                            })
                        })
                    }
                }]), e
            }();
        e["default"] = l
    }), require.register("web/static/js/pages/order/index.js", function(e, t, n) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            i = function() {
                function e(t) {
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    o(this, e), this._initOrders(t)
                }
                return r(e, [{
                    key: "_initOrders",
                    value: function(e) {
                        var t = e.find("#orders"),
                            n = t.find(".toggle-order-items");
                        $.each(n, function(e, n) {
                            var o = $(n),
                                r = o.attr("ref");
                            o.on("click", function(e) {
                                e.preventDefault(), o.toggleClass("active"), t.find(".order-item").filter("[data-order-id=" + r + "]").each(function(e, t) {
                                    $(t).toggleClass("show")
                                })
                            })
                        })
                    }
                }]), e
            }();
        e["default"] = i
    }), require.register("web/static/js/pages/order/new.js", function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            a = t("../../components/api"),
            d = o(a),
            s = t("../../components/box"),
            u = o(s),
            l = t("../../components/box_viewer"),
            h = o(l),
            c = t("../../components/order"),
            p = o(c),
            g = t("../../components/alert"),
            N = t("google-libphonenumber"),
            f = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    r(this, e), $(".checkout-form").length && (this.container = $(t), this.loadingCube = this.container.find(".loading-cube"), this.opts = n, this.cacheDomNodes(t), this.toggleRushFee(), this.setupOrder(), this.setupBraintree(), this.setupBox(), this.sendAnalytics(), this.setupEvents(), this.update())
                }
                return i(e, [{
                    key: "cacheDomNodes",
                    value: function(e) {
                        this.$node = {
                            container: $(e),
                            email: $("#order_email"),
                            country: $("#order_country"),
                            state: $("#order_state"),
                            shippingSelect: $("#shipping-rates"),
                            orderRushCheckbox: $("#order_rush"),
                            orderRushText: $(".cost-and-shipping .rush-fee", e)
                        }
                    }
                }, {
                    key: "toggleRushFee",
                    value: function() {
                        var e = this;
                        $(this.$node.orderRushCheckbox).attr("checked") && this.$node.orderRushText.show(), this.canSubmit() || ($(this.$node.shippingSelect).attr("disabled", !0), $(this.$node.orderRushCheckbox).attr("disabled", !0)), this.$node.orderRushCheckbox.on("change", function() {
                            e.$node.orderRushText.toggle()
                        })
                    }
                }, {
                    key: "setupOrder",
                    value: function() {
                        this.order = new p["default"](window.order)
                    }
                }, {
                    key: "setupBraintree",
                    value: function() {
                        var e = this;
                        d["default"].getBraintreeToken().done(function(t) {
                            braintree.setup(t, "dropin", {
                                container: $("#braintree"),
                                onReady: function(t) {
                                    e.checkout = t
                                },
                                onPaymentMethodReceived: function(t) {
                                    e.submitOrder(t)
                                }
                            })
                        })
                    }
                }, {
                    key: "setupBox",
                    value: function() {
                        var e = this;
                        this.container.find(".viewer").length > 0 && (this.box = new u["default"](this.order.items[0].box), this.box.loadFonts().done(function() {
                            var t = e.container.find(".viewer");
                            e.viewer = new h["default"](t, {
                                rotate: !0
                            }), e.viewer.setBox(e.box)
                        }))
                    }
                }, {
                    key: "sendAnalytics",
                    value: function() {
                        this.box ? ga("ec:addProduct", {
                            name: this.box.type.name,
                            variant: this.box.material.name,
                            quantity: parseInt(this.container.find(".quantity").text())
                        }) : ga("ec:addProduct", {
                            name: "Custom Order",
                            quantity: parseInt(this.container.find(".quantity").text())
                        }), this.order.adjustments.forEach(function(e) {
                            "promotional" == e.category && ga("ec:addPromo", {
                                id: e.code,
                                name: e.code
                            })
                        }), ga("ec:setAction", "checkout", {
                            step: 1
                        })
                    }
                }, {
                    key: "setupEvents",
                    value: function() {
                        var e = this;
                        this.$node.email.on("invalid", function(e) {}), this.container.on("change", function(t) {
                            "file" !== t.target.type && e.update()
                        }), this.container.on("change input[type=file]", function(t) {
                            var n = t.target.files && t.target.files[0];
                            if (n) {
                                e.loadingCube.css("display", "flex").hide().fadeIn();
                                var o = new FormData;
                                o.append("order[file]", n), $.ajax({
                                    type: "POST",
                                    data: o,
                                    processData: !1,
                                    contentType: !1
                                }).done(function(t) {
                                    var o = t.url;
                                    e.loadingCube.hide(), e.container.find(".custom-file").html('<a href="' + o + '">' + n.name + "</a>")
                                })
                            }
                        })
                    }
                }, {
                    key: "update",
                    value: function() {
                        var e = this,
                            t = this.container.find("form");
                        if (this.updateRegion(), !this.allRequired(t)) return !1;
                        var n = t.serialize(),
                            o = this.container.find(".checkout-btn"),
                            r = this.container.find(".shipping-rates"),
                            i = this.container.find(".shipping-cost > span"),
                            a = this.container.find("#confirm-blank-box");
                        if (!this.validPhone(t)) return (0, g.notyAlert)("Invalid phone number"), !1;
                        r.attr("disabled", !0).addClass("loading"), $(this.$node.orderRushCheckbox).attr("disabled", !0), o.attr("disabled", !0).addClass("disabled"), i.text(i.data("throbber-text")).addClass("highlight"), this.updateRequests = this.updateRequests || [], this.updateRequests.forEach(function(e) {
                            e.abort()
                        }), this.updateRequests = [];
                        var d = $.post(location.pathname, n, function(t) {
                            return t.error ? ((0, g.notyAlert)(t.error), !1) : (e.order.merge(t.order), e.updateDeliveryDate(t), r.attr("disabled", !1).removeClass("loading"), $(e.$node.orderRushCheckbox).removeAttr("disabled"), i.text(i.data("default-text")).removeClass("highlight"), t.rates && e.container.find(".shipping-rates").html(t.rates), e.updatePrices(t), e.container.find(".order-receipt").html(t.receipt), !(a.length > 0 && !a.is(":checked")) && void o.attr("disabled", !1).removeClass("disabled"))
                        });
                        this.updateRequests.push(d)
                    }
                }, {
                    key: "allRequired",
                    value: function t(e) {
                        var t = !0;
                        return $("input[required]", e).each(function(e, n) {
                            n.value || (t = !1)
                        }), t
                    }
                }, {
                    key: "canSubmit",
                    value: function() {
                        return this.allRequired(this.container)
                    }
                }, {
                    key: "validPhone",
                    value: function(e) {
                        var t = e.find("#order_phone"),
                            n = t.val();
                        if (/[a-z]/gi.test(n)) return !1;
                        if (n) {
                            var o = e.find("#order_country"),
                                r = N.PhoneNumberUtil.getInstance();
                            return r.isPossibleNumber(r.parse(n, o.val()))
                        }
                        return !0
                    }
                }, {
                    key: "updateDeliveryDate",
                    value: function(e) {
                        var t = e.estimated_ship_date,
                            n = e.estimated_delivery_date,
                            o = this.container.find(".ship-date"),
                            r = this.container.find(".date-type"),
                            i = $(".arrives-by", this.$node.container);
                        n ? (o.text(n), r.text("Delivery"), i.show()) : (o.text(t), r.text("Ship"), i.hide())
                    }
                }, {
                    key: "updateRegion",
                    value: function() {
                        var e = this.$node.country.val(),
                            t = ["US", "CA"];
                        t.indexOf(e) > -1 ? ($(".region", this.$node.container).show(), this.$node.state.attr("required", !0)) : ($(".region", this.$node.container).hide(), this.$node.state.removeAttr("required"))
                    }
                }, {
                    key: "updatePrices",
                    value: function(e) {
                        var t = e.subtotal_price,
                            n = e.total_discount,
                            o = e.total_price;
                        this.container.find(".subtotal").text("$" + t.toFixed(2)), this.container.find(".discount-price").text("$" + n.toFixed(2)), this.container.find(".total-price").text("$" + o.toFixed(2)), this.container.find(".total-price").toggle("" != this.container.find(".shipping-rates").val())
                    }
                }, {
                    key: "submitOrder",
                    value: function(e) {
                        var t = this,
                            n = this.container.find("form"),
                            o = n.find("#order_email");
                        return this.validPhone(n) ? "" === o.val().trim() ? (o[0].focus(), (0, g.notyAlert)("Email can't be blank"), !1) : ($("<input>").attr({
                            name: "nonce",
                            value: e.nonce,
                            type: "hidden"
                        }).appendTo(n), this.loadingCube.css("display", "flex").hide().fadeIn(), void $.post(n.attr("action"), n.serialize()).done(function(o) {
                            if (o.success) {
                                var r = o.redirect.split("/"),
                                    i = r[r.length - 1].split("?")[0],
                                    a = t.container.find(".total-price").text().slice(1);
                                ga("ec:setAction", "purchase", {
                                    id: i,
                                    revenue: a
                                }), ga("send", "event", "button", "click", "purchase"), window.location = o.redirect
                            } else {
                                t.loadingCube.hide(), n.find("[name=nonce]").remove(), Rollbar.error(o.error, {
                                    params: n.serializeArray(),
                                    paymentMethod: e
                                });
                                var d = o.reset_password ? o.error + '<br/>Forgot your password? <a href="/forgot">Request a new one.</a>' : o.error;
                                (0, g.notyAlert)(d), o.reload && t.checkout.teardown(function() {
                                    t.setupBraintree()
                                })
                            }
                        })) : ((0, g.notyAlert)("Invalid phone number"), !1)
                    }
                }]), e
            }();
        e["default"] = f
    }), require.register("web/static/js/pages/order/show.js", function(e, t, n) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            i = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    o(this, e), this.container = $(t), this.opts = n, this.sendAnalytics()
                }
                return r(e, [{
                    key: "sendAnalytics",
                    value: function() {
                        location.search.indexOf("receipt=1") >= 0 && ga("ec:setAction", "checkout", {
                            step: 2
                        })
                    }
                }]), e
            }();
        e["default"] = i
    }), require.register("web/static/js/pages/page/dieline_request.js", function(e, t, n) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            i = t("../../components/alert"),
            a = {
                RELF: {
                    length: {
                        min: 2,
                        max: 30
                    },
                    width: {
                        min: 2,
                        max: 30
                    },
                    depth: {
                        min: 1,
                        max: 10
                    }
                },
                F0211: {
                    length: {
                        min: 0,
                        max: 24
                    },
                    width: {
                        min: 0,
                        max: 24
                    },
                    depth: {
                        min: 0,
                        max: 24
                    }
                },
                RSC: {
                    length: {
                        min: 3,
                        max: 31
                    },
                    width: {
                        min: 3,
                        max: 28
                    },
                    depth: {
                        min: 2,
                        max: 31
                    }
                },
                "Classic Carton": {
                    length: {
                        min: .5,
                        max: 4
                    },
                    width: {
                        min: .5,
                        max: 4
                    },
                    depth: {
                        min: .5,
                        max: 8
                    }
                }
            },
            d = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    o(this, e), this.container = $(t), this.opts = n, this.setupEvents(), this.constraintError = !1
                }
                return r(e, [{
                    key: "setupEvents",
                    value: function() {
                        var e = this;
                        this.container.on("change", "[name=box_style]", function(t) {
                            var n = a[$(this).val()],
                                o = ["length", "width", "depth"];
                            o.forEach(function(t) {
                                e.container.find("[name=" + t + "]").attr("min", n[t].min), e.container.find("[name=" + t + "]").attr("max", n[t].max)
                            })
                        }), this.container.on("change", "input[type=number]", function(t) {
                            e.constraintError = !1;
                            var n = ["length", "width", "depth"],
                                o = $(this).closest(".row"),
                                r = {};
                            n.forEach(function(e) {
                                var t = $(o).find("[name=" + e + "]"),
                                    n = parseFloat(t.val()),
                                    a = parseFloat(t.attr("min"));
                                n < a && (t.val(a), (0, i.notyAlert)("Box " + e + " must be at least " + a + " inches."));
                                var d = parseFloat(t.attr("max"));
                                n > d && (t.val(d), (0, i.notyAlert)("Box " + e + " cannot be more than " + d + " inches.")), r[e] = parseFloat(t.val())
                            }), "RELF" === $("[name=box_style]").val() && (r.length < r.depth ? (0, i.notyAlert)("For optimal structural integrity, your box should be longer than it is deep.") : r.width < r.depth ? (0, i.notyAlert)("For optimal structural integrity, your box should be wider than it is deep.") : r.length > 8 * r.depth && (0,
                                i.notyAlert)("For optimal structural integrity, the length of your box should be no more than 8 times its depth."))
                        }), this.container.on("submit", "form", function(t) {
                            if (t.preventDefault(), e.container.find("#failure-message").hide(), !this.checkValidity()) return e.container.find("#failure-message").show();
                            e.container.find(".submit-btn").addClass("disabled");
                            var n = $(this).serialize(),
                                o = e.serializeFormJSON($(this).serializeArray());
                            $.post("/api/dieline-request", {
                                dieline_request: o
                            }, function(t) {
                                console.log(t), t.post_to_zapier && $.post("https://zapier.com/hooks/catch/3gj1nn/", n), e.container.find("form").remove(), e.container.find("#success-message").show()
                            })
                        })
                    }
                }, {
                    key: "serializeFormJSON",
                    value: function(e) {
                        var t = {};
                        return $.each(e, function() {
                            t[this.name] ? (t[this.name].push || (t[this.name] = [t[this.name]]), t[this.name].push(this.value || "")) : t[this.name] = this.value || ""
                        }), t
                    }
                }]), e
            }();
        e["default"] = d
    }), require.register("web/static/js/pages/page/index.js", function(e, t, n) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e) {
            var t = new Image;
            t.onload = e, t.src = "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
        }

        function i() {
            var e = $(this).data("hover"),
                t = $(this).attr("src");
            $(this).data("hover", t), $(this).attr("src", e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            d = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    o(this, e), this.container = $(t), this.opts = n, this.setupEvents()
                }
                return a(e, [{
                    key: "setupEvents",
                    value: function() {
                        var e = this;
                        r(function() {
                            e.container.on("mouseenter", ".package-image img", i), e.container.on("mouseleave", ".package-image img", i)
                        })
                    }
                }]), e
            }();
        e["default"] = d
    }), require.register("web/static/js/pages/proof/edit.js", function(e, t, n) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            i = t("./../../components/alert"),
            a = function() {
                function e(t) {
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    o(this, e), this._initMagnify(t), this._initConcerns(t)
                }
                return r(e, [{
                    key: "_initMagnify",
                    value: function(e) {
                        e.find(".proof-image").magnify()
                    }
                }, {
                    key: "_initConcerns",
                    value: function(e) {
                        var t = e.find(".concern");
                        $.each(t, function(t, n) {
                            var o = $(n);
                            o.find(".btn.resolve").on("click", function(t) {
                                $(this).fadeOut("fast", function() {
                                    e.find(".btn.resolve").is(":visible") || e.find("#resolve-concerns").removeAttr("disabled").removeClass("disabled")
                                }), o.find(".solution").slideDown()
                            })
                        }), e.on("click", ".add-artwork-btn", function(t) {
                            t.preventDefault(), e.find("input[type=file]").click()
                        }), e.on("change", "input[type=file]", function(e) {
                            var t = this.files[0];
                            $(this).after(t.name)
                        }), e.on("click", "#resolve-concerns", function(t) {
                            if (e.find("input[type=file]").length && !e.find("input[type=file]").val()) return t.preventDefault(), (0, i.notyAlert)("You have to select a new artwork file"), !1
                        })
                    }
                }]), e
            }();
        e["default"] = a
    }), require.register("web/static/js/pages/sample/new.js", function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            a = t("../../components/api"),
            d = o(a),
            s = t("../../components/alert"),
            u = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    r(this, e), this.container = $(t), this.opts = n, this.loader = this.container.find(".loading-cube"), this.setupBraintree(), this.setupEvents(), this.update()
                }
                return i(e, [{
                    key: "setupBraintree",
                    value: function() {
                        var e = this;
                        d["default"].getBraintreeToken().done(function(t) {
                            braintree.setup(t, "dropin", {
                                container: $("#braintree"),
                                onReady: function(t) {
                                    e.checkout = t
                                },
                                onPaymentMethodReceived: function(t) {
                                    e.submitOrder(t)
                                }
                            })
                        })
                    }
                }, {
                    key: "setupEvents",
                    value: function() {
                        var e = this;
                        this.container.on("change", "[autocomplete=street-address], [autocomplete=country], [autocomplete=address-level2], [autocomplete=address-level1], [autocomplete=postal-code]", function(t) {
                            e.update()
                        })
                    }
                }, {
                    key: "update",
                    value: function() {
                        var e = this.container.find("form"),
                            t = e.serialize(),
                            n = this.container.find(".submit-btn"),
                            o = this.container.find(".shipping-price");
                        this.updateRequests = this.updateRequests || [], this.updateRequests.forEach(function(e) {
                            e.abort()
                        }), this.updateRequests = [], n.attr("disabled", !0).addClass("disabled"), o.text("...");
                        var r = $.post(location.pathname + "/shipping", t, function(e) {
                            return e.error ? void(0, s.notyAlert)(e.error) : void(e.price && (o.text(e.price), n.attr("disabled", !1).removeClass("disabled")))
                        });
                        this.updateRequests.push(r)
                    }
                }, {
                    key: "submitOrder",
                    value: function(e) {
                        var t = this,
                            n = this.container.find("form");
                        $("<input>").attr({
                            name: "nonce",
                            value: e.nonce,
                            type: "hidden"
                        }).appendTo(n), this.loader.css("display", "flex").hide().fadeIn(), $.post(n.attr("action"), n.serialize()).done(function(o) {
                            t.loader.hide(), o.success ? n.html("<h4>Sample Request Submitted!</h4><p>We will do our best to accommodate any specific size requests, but in the event that we do not have the requested size on-hand, we will substitute with a different box size.</p>") : (Rollbar.error(o.error, {
                                params: n.serializeArray(),
                                paymentMethod: e
                            }), (0, s.notyAlert)(o.error), o.reload && t.checkout.teardown(function() {
                                t.setupBraintree()
                            }))
                        })
                    }
                }]), e
            }();
        e["default"] = u
    }), require.alias("google-libphonenumber/dist/browser/libphonenumber.js", "google-libphonenumber"), require.register("___globals___", function(e, t, n) {})
}(), require("___globals___"),
    function(e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t(require, exports, module) : e.Tether = t()
    }(this, function(e, t, n) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function r(e) {
            var t = getComputedStyle(e) || {},
                n = t.position;
            if ("fixed" === n) return e;
            for (var o = e; o = o.parentNode;) {
                var r = void 0;
                try {
                    r = getComputedStyle(o)
                } catch (i) {}
                if ("undefined" == typeof r || null === r) return o;
                var a = r,
                    d = a.overflow,
                    s = a.overflowX,
                    u = a.overflowY;
                if (/(auto|scroll)/.test(d + u + s) && ("absolute" !== n || ["relative", "absolute", "fixed"].indexOf(r.position) >= 0)) return o
            }
            return document.body
        }

        function i(e) {
            var t = void 0;
            e === document ? (t = document, e = document.documentElement) : t = e.ownerDocument;
            var n = t.documentElement,
                o = {},
                r = e.getBoundingClientRect();
            for (var i in r) o[i] = r[i];
            var a = E(t);
            return o.top -= a.top, o.left -= a.left, "undefined" == typeof o.width && (o.width = document.body.scrollWidth - o.left - o.right), "undefined" == typeof o.height && (o.height = document.body.scrollHeight - o.top - o.bottom), o.top = o.top - n.clientTop, o.left = o.left - n.clientLeft, o.right = t.body.clientWidth - o.width - o.left, o.bottom = t.body.clientHeight - o.height - o.top, o
        }

        function a(e) {
            return e.offsetParent || document.documentElement
        }

        function d() {
            var e = document.createElement("div");
            e.style.width = "100%", e.style.height = "200px";
            var t = document.createElement("div");
            s(t.style, {
                position: "absolute",
                top: 0,
                left: 0,
                pointerEvents: "none",
                visibility: "hidden",
                width: "200px",
                height: "150px",
                overflow: "hidden"
            }), t.appendChild(e), document.body.appendChild(t);
            var n = e.offsetWidth;
            t.style.overflow = "scroll";
            var o = e.offsetWidth;
            n === o && (o = t.clientWidth), document.body.removeChild(t);
            var r = n - o;
            return {
                width: r,
                height: r
            }
        }

        function s() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                t = [];
            return Array.prototype.push.apply(t, arguments), t.slice(1).forEach(function(t) {
                if (t)
                    for (var n in t)({}).hasOwnProperty.call(t, n) && (e[n] = t[n])
            }), e
        }

        function u(e, t) {
            if ("undefined" != typeof e.classList) t.split(" ").forEach(function(t) {
                t.trim() && e.classList.remove(t)
            });
            else {
                var n = new RegExp("(^| )" + t.split(" ").join("|") + "( |$)", "gi"),
                    o = c(e).replace(n, " ");
                p(e, o)
            }
        }

        function l(e, t) {
            if ("undefined" != typeof e.classList) t.split(" ").forEach(function(t) {
                t.trim() && e.classList.add(t)
            });
            else {
                u(e, t);
                var n = c(e) + (" " + t);
                p(e, n)
            }
        }

        function h(e, t) {
            if ("undefined" != typeof e.classList) return e.classList.contains(t);
            var n = c(e);
            return new RegExp("(^| )" + t + "( |$)", "gi").test(n)
        }

        function c(e) {
            return e.className instanceof SVGAnimatedString ? e.className.baseVal : e.className
        }

        function p(e, t) {
            e.setAttribute("class", t)
        }

        function g(e, t, n) {
            n.forEach(function(n) {
                t.indexOf(n) === -1 && h(e, n) && u(e, n)
            }), t.forEach(function(t) {
                h(e, t) || l(e, t)
            })
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function N(e, t) {
            var n = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
            return e + n >= t && t >= e - n
        }

        function f() {
            return "undefined" != typeof performance && "undefined" != typeof performance.now ? performance.now() : +new Date
        }

        function A() {
            for (var e = {
                    top: 0,
                    left: 0
                }, t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
            return n.forEach(function(t) {
                var n = t.top,
                    o = t.left;
                "string" == typeof n && (n = parseFloat(n, 10)), "string" == typeof o && (o = parseFloat(o, 10)), e.top += n, e.left += o
            }), e
        }

        function m(e, t) {
            return "string" == typeof e.left && e.left.indexOf("%") !== -1 && (e.left = parseFloat(e.left, 10) / 100 * t.width), "string" == typeof e.top && e.top.indexOf("%") !== -1 && (e.top = parseFloat(e.top, 10) / 100 * t.height), e
        }

        function $(e, t) {
            return "scrollParent" === t ? t = e.scrollParent : "window" === t && (t = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), t === document && (t = t.documentElement), "undefined" != typeof t.nodeType && ! function() {
                var e = i(t),
                    n = e,
                    o = getComputedStyle(t);
                t = [n.left, n.top, e.width + n.left, e.height + n.top], G.forEach(function(e, n) {
                    e = e[0].toUpperCase() + e.substr(1), "Top" === e || "Left" === e ? t[n] += parseFloat(o["border" + e + "Width"]) : t[n] -= parseFloat(o["border" + e + "Width"])
                })
            }(), t
        }
        var b = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            y = void 0;
        "undefined" == typeof y && (y = {
            modules: []
        });
        var v = function() {
                var e = 0;
                return function() {
                    return ++e
                }
            }(),
            _ = {},
            E = function(e) {
                var t = e._tetherZeroElement;
                "undefined" == typeof t && (t = e.createElement("div"), t.setAttribute("data-tether-id", v()), s(t.style, {
                    top: 0,
                    left: 0,
                    position: "absolute"
                }), e.body.appendChild(t), e._tetherZeroElement = t);
                var n = t.getAttribute("data-tether-id");
                if ("undefined" == typeof _[n]) {
                    _[n] = {};
                    var o = t.getBoundingClientRect();
                    for (var r in o) _[n][r] = o[r];
                    T(function() {
                        delete _[n]
                    })
                }
                return _[n]
            },
            P = [],
            T = function(e) {
                P.push(e)
            },
            C = function() {
                for (var e = void 0; e = P.pop();) e()
            },
            S = function() {
                function e() {
                    o(this, e)
                }
                return b(e, [{
                    key: "on",
                    value: function(e, t, n) {
                        var o = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3];
                        "undefined" == typeof this.bindings && (this.bindings = {}), "undefined" == typeof this.bindings[e] && (this.bindings[e] = []), this.bindings[e].push({
                            handler: t,
                            ctx: n,
                            once: o
                        })
                    }
                }, {
                    key: "once",
                    value: function(e, t, n) {
                        this.on(e, t, n, !0)
                    }
                }, {
                    key: "off",
                    value: function(e, t) {
                        if ("undefined" == typeof this.bindings || "undefined" == typeof this.bindings[e])
                            if ("undefined" == typeof t) delete this.bindings[e];
                            else
                                for (var n = 0; n < this.bindings[e].length;) this.bindings[e][n].handler === t ? this.bindings[e].splice(n, 1) : ++n
                    }
                }, {
                    key: "trigger",
                    value: function(e) {
                        if ("undefined" != typeof this.bindings && this.bindings[e]) {
                            for (var t = 0, n = arguments.length, o = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) o[r - 1] = arguments[r];
                            for (; t < this.bindings[e].length;) {
                                var i = this.bindings[e][t],
                                    a = i.handler,
                                    d = i.ctx,
                                    s = i.once,
                                    u = d;
                                "undefined" == typeof u && (u = this), a.apply(u, o), s ? this.bindings[e].splice(t, 1) : ++t
                            }
                        }
                    }
                }]), e
            }();
        y.Utils = {
            getScrollParent: r,
            getBounds: i,
            getOffsetParent: a,
            extend: s,
            addClass: l,
            removeClass: u,
            hasClass: h,
            updateClasses: g,
            defer: T,
            flush: C,
            uniqueId: v,
            Evented: S,
            getScrollBarSize: d
        };
        var O = function() {
                function e(e, t) {
                    var n = [],
                        o = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var a, d = e[Symbol.iterator](); !(o = (a = d.next()).done) && (n.push(a.value), !t || n.length !== t); o = !0);
                    } catch (s) {
                        r = !0, i = s
                    } finally {
                        try {
                            !o && d["return"] && d["return"]()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return n
                }
                return function(t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            b = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }();
        if ("undefined" == typeof y) throw new Error("You must include the utils.js file before tether.js");
        var R = y.Utils,
            r = R.getScrollParent,
            i = R.getBounds,
            a = R.getOffsetParent,
            s = R.extend,
            l = R.addClass,
            u = R.removeClass,
            g = R.updateClasses,
            T = R.defer,
            C = R.flush,
            d = R.getScrollBarSize,
            M = function() {
                if ("undefined" == typeof document) return "";
                for (var e = document.createElement("div"), t = ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"], n = 0; n < t.length; ++n) {
                    var o = t[n];
                    if (void 0 !== e.style[o]) return o
                }
            }(),
            x = [],
            F = function() {
                x.forEach(function(e) {
                    e.position(!1)
                }), C()
            };
        ! function() {
            var e = null,
                t = null,
                n = null,
                o = function r() {
                    return "undefined" != typeof t && t > 16 ? (t = Math.min(t - 16, 250), void(n = setTimeout(r, 250))) : void("undefined" != typeof e && f() - e < 10 || ("undefined" != typeof n && (clearTimeout(n), n = null), e = f(), F(), t = f() - e))
                };
            "undefined" != typeof window && ["resize", "scroll", "touchmove"].forEach(function(e) {
                window.addEventListener(e, o)
            })
        }();
        var w = {
                center: "center",
                left: "right",
                right: "left"
            },
            D = {
                middle: "middle",
                top: "bottom",
                bottom: "top"
            },
            I = {
                top: 0,
                left: 0,
                middle: "50%",
                center: "50%",
                bottom: "100%",
                right: "100%"
            },
            L = function(e, t) {
                var n = e.left,
                    o = e.top;
                return "auto" === n && (n = w[t.left]), "auto" === o && (o = D[t.top]), {
                    left: n,
                    top: o
                }
            },
            U = function(e) {
                var t = e.left,
                    n = e.top;
                return "undefined" != typeof I[e.left] && (t = I[e.left]), "undefined" != typeof I[e.top] && (n = I[e.top]), {
                    left: t,
                    top: n
                }
            },
            V = function(e) {
                var t = e.split(" "),
                    n = O(t, 2),
                    o = n[0],
                    r = n[1];
                return {
                    top: o,
                    left: r
                }
            },
            B = V,
            k = function() {
                function e(t) {
                    var n = this;
                    o(this, e), this.position = this.position.bind(this), x.push(this), this.history = [], this.setOptions(t, !1), y.modules.forEach(function(e) {
                        "undefined" != typeof e.initialize && e.initialize.call(n)
                    }), this.position()
                }
                return b(e, [{
                    key: "getClass",
                    value: function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
                            t = this.options.classes;
                        return "undefined" != typeof t && t[e] ? this.options.classes[e] : this.options.classPrefix ? this.options.classPrefix + "-" + e : e
                    }
                }, {
                    key: "setOptions",
                    value: function(e) {
                        var t = this,
                            n = arguments.length <= 1 || void 0 === arguments[1] || arguments[1],
                            o = {
                                offset: "0 0",
                                targetOffset: "0 0",
                                targetAttachment: "auto auto",
                                classPrefix: "tether"
                            };
                        this.options = s(o, e);
                        var i = this.options,
                            a = i.element,
                            d = i.target,
                            u = i.targetModifier;
                        if (this.element = a, this.target = d, this.targetModifier = u, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function(e) {
                                if ("undefined" == typeof t[e]) throw new Error("Tether Error: Both element and target must be defined");
                                "undefined" != typeof t[e].jquery ? t[e] = t[e][0] : "string" == typeof t[e] && (t[e] = document.querySelector(t[e]))
                            }), l(this.element, this.getClass("element")), this.options.addTargetClasses !== !1 && l(this.target, this.getClass("target")), !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");
                        this.targetAttachment = B(this.options.targetAttachment), this.attachment = B(this.options.attachment), this.offset = V(this.options.offset), this.targetOffset = V(this.options.targetOffset), "undefined" != typeof this.scrollParent && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParent = this.target : this.scrollParent = r(this.target), this.options.enabled !== !1 && this.enable(n)
                    }
                }, {
                    key: "getTargetBounds",
                    value: function() {
                        if ("undefined" == typeof this.targetModifier) return i(this.target);
                        if ("visible" === this.targetModifier) {
                            if (this.target === document.body) return {
                                top: pageYOffset,
                                left: pageXOffset,
                                height: innerHeight,
                                width: innerWidth
                            };
                            var e = i(this.target),
                                t = {
                                    height: e.height,
                                    width: e.width,
                                    top: e.top,
                                    left: e.left
                                };
                            return t.height = Math.min(t.height, e.height - (pageYOffset - e.top)), t.height = Math.min(t.height, e.height - (e.top + e.height - (pageYOffset + innerHeight))), t.height = Math.min(innerHeight, t.height), t.height -= 2, t.width = Math.min(t.width, e.width - (pageXOffset - e.left)), t.width = Math.min(t.width, e.width - (e.left + e.width - (pageXOffset + innerWidth))), t.width = Math.min(innerWidth, t.width), t.width -= 2, t.top < pageYOffset && (t.top = pageYOffset), t.left < pageXOffset && (t.left = pageXOffset), t
                        }
                        if ("scroll-handle" === this.targetModifier) {
                            var e = void 0,
                                n = this.target;
                            n === document.body ? (n = document.documentElement, e = {
                                left: pageXOffset,
                                top: pageYOffset,
                                height: innerHeight,
                                width: innerWidth
                            }) : e = i(n);
                            var o = getComputedStyle(n),
                                r = n.scrollWidth > n.clientWidth || [o.overflow, o.overflowX].indexOf("scroll") >= 0 || this.target !== document.body,
                                a = 0;
                            r && (a = 15);
                            var d = e.height - parseFloat(o.borderTopWidth) - parseFloat(o.borderBottomWidth) - a,
                                t = {
                                    width: 15,
                                    height: .975 * d * (d / n.scrollHeight),
                                    left: e.left + e.width - parseFloat(o.borderLeftWidth) - 15
                                },
                                s = 0;
                            d < 408 && this.target === document.body && (s = -11e-5 * Math.pow(d, 2) - .00727 * d + 22.58), this.target !== document.body && (t.height = Math.max(t.height, 24));
                            var u = this.target.scrollTop / (n.scrollHeight - d);
                            return t.top = u * (d - t.height - s) + e.top + parseFloat(o.borderTopWidth), this.target === document.body && (t.height = Math.max(t.height, 24)), t
                        }
                    }
                }, {
                    key: "clearCache",
                    value: function() {
                        this._cache = {}
                    }
                }, {
                    key: "cache",
                    value: function(e, t) {
                        return "undefined" == typeof this._cache && (this._cache = {}), "undefined" == typeof this._cache[e] && (this._cache[e] = t.call(this)), this._cache[e]
                    }
                }, {
                    key: "enable",
                    value: function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                        this.options.addTargetClasses !== !1 && l(this.target, this.getClass("enabled")), l(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParent !== document && this.scrollParent.addEventListener("scroll", this.position), e && this.position()
                    }
                }, {
                    key: "disable",
                    value: function() {
                        u(this.target, this.getClass("enabled")), u(this.element, this.getClass("enabled")), this.enabled = !1, "undefined" != typeof this.scrollParent && this.scrollParent.removeEventListener("scroll", this.position)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var e = this;
                        this.disable(), x.forEach(function(t, n) {
                            if (t === e) return void x.splice(n, 1)
                        })
                    }
                }, {
                    key: "updateAttachClasses",
                    value: function(e, t) {
                        var n = this;
                        e = e || this.attachment, t = t || this.targetAttachment;
                        var o = ["left", "top", "bottom", "right", "middle", "center"];
                        "undefined" != typeof this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), "undefined" == typeof this._addAttachClasses && (this._addAttachClasses = []);
                        var r = this._addAttachClasses;
                        e.top && r.push(this.getClass("element-attached") + "-" + e.top), e.left && r.push(this.getClass("element-attached") + "-" + e.left), t.top && r.push(this.getClass("target-attached") + "-" + t.top), t.left && r.push(this.getClass("target-attached") + "-" + t.left);
                        var i = [];
                        o.forEach(function(e) {
                            i.push(n.getClass("element-attached") + "-" + e), i.push(n.getClass("target-attached") + "-" + e)
                        }), T(function() {
                            "undefined" != typeof n._addAttachClasses && (g(n.element, n._addAttachClasses, i), n.options.addTargetClasses !== !1 && g(n.target, n._addAttachClasses, i), delete n._addAttachClasses)
                        })
                    }
                }, {
                    key: "position",
                    value: function() {
                        var e = this,
                            t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                        if (this.enabled) {
                            this.clearCache();
                            var n = L(this.targetAttachment, this.attachment);
                            this.updateAttachClasses(this.attachment, n);
                            var o = this.cache("element-bounds", function() {
                                    return i(e.element)
                                }),
                                r = o.width,
                                s = o.height;
                            if (0 === r && 0 === s && "undefined" != typeof this.lastSize) {
                                var u = this.lastSize;
                                r = u.width, s = u.height
                            } else this.lastSize = {
                                width: r,
                                height: s
                            };
                            var l = this.cache("target-bounds", function() {
                                    return e.getTargetBounds()
                                }),
                                h = l,
                                c = m(U(this.attachment), {
                                    width: r,
                                    height: s
                                }),
                                p = m(U(n), h),
                                g = m(this.offset, {
                                    width: r,
                                    height: s
                                }),
                                N = m(this.targetOffset, h);
                            c = A(c, g), p = A(p, N);
                            for (var f = l.left + p.left - c.left, $ = l.top + p.top - c.top, b = 0; b < y.modules.length; ++b) {
                                var v = y.modules[b],
                                    _ = v.position.call(this, {
                                        left: f,
                                        top: $,
                                        targetAttachment: n,
                                        targetPos: l,
                                        elementPos: o,
                                        offset: c,
                                        targetOffset: p,
                                        manualOffset: g,
                                        manualTargetOffset: N,
                                        scrollbarSize: P,
                                        attachment: this.attachment
                                    });
                                if (_ === !1) return !1;
                                "undefined" != typeof _ && "object" == typeof _ && ($ = _.top, f = _.left)
                            }
                            var E = {
                                    page: {
                                        top: $,
                                        left: f
                                    },
                                    viewport: {
                                        top: $ - pageYOffset,
                                        bottom: pageYOffset - $ - s + innerHeight,
                                        left: f - pageXOffset,
                                        right: pageXOffset - f - r + innerWidth
                                    }
                                },
                                P = void 0;
                            return document.body.scrollWidth > window.innerWidth && (P = this.cache("scrollbar-size", d), E.viewport.bottom -= P.height), document.body.scrollHeight > window.innerHeight && (P = this.cache("scrollbar-size", d), E.viewport.right -= P.width), ["", "static"].indexOf(document.body.style.position) !== -1 && ["", "static"].indexOf(document.body.parentElement.style.position) !== -1 || (E.page.bottom = document.body.scrollHeight - $ - s, E.page.right = document.body.scrollWidth - f - r), "undefined" != typeof this.options.optimizations && this.options.optimizations.moveElement !== !1 && "undefined" == typeof this.targetModifier && ! function() {
                                var t = e.cache("target-offsetparent", function() {
                                        return a(e.target)
                                    }),
                                    n = e.cache("target-offsetparent-bounds", function() {
                                        return i(t)
                                    }),
                                    o = getComputedStyle(t),
                                    r = n,
                                    d = {};
                                if (["Top", "Left", "Bottom", "Right"].forEach(function(e) {
                                        d[e.toLowerCase()] = parseFloat(o["border" + e + "Width"])
                                    }), n.right = document.body.scrollWidth - n.left - r.width + d.right, n.bottom = document.body.scrollHeight - n.top - r.height + d.bottom, E.page.top >= n.top + d.top && E.page.bottom >= n.bottom && E.page.left >= n.left + d.left && E.page.right >= n.right) {
                                    var s = t.scrollTop,
                                        u = t.scrollLeft;
                                    E.offset = {
                                        top: E.page.top - n.top + s - d.top,
                                        left: E.page.left - n.left + u - d.left
                                    }
                                }
                            }(), this.move(E), this.history.unshift(E), this.history.length > 3 && this.history.pop(), t && C(), !0
                        }
                    }
                }, {
                    key: "move",
                    value: function(e) {
                        var t = this;
                        if ("undefined" != typeof this.element.parentNode) {
                            var n = {};
                            for (var o in e) {
                                n[o] = {};
                                for (var r in e[o]) {
                                    for (var i = !1, d = 0; d < this.history.length; ++d) {
                                        var u = this.history[d];
                                        if ("undefined" != typeof u[o] && !N(u[o][r], e[o][r])) {
                                            i = !0;
                                            break
                                        }
                                    }
                                    i || (n[o][r] = !0)
                                }
                            }
                            var l = {
                                    top: "",
                                    left: "",
                                    right: "",
                                    bottom: ""
                                },
                                h = function(e, n) {
                                    var o = "undefined" != typeof t.options.optimizations,
                                        r = o ? t.options.optimizations.gpu : null;
                                    if (r !== !1) {
                                        var i = void 0,
                                            a = void 0;
                                        e.top ? (l.top = 0, i = n.top) : (l.bottom = 0, i = -n.bottom), e.left ? (l.left = 0, a = n.left) : (l.right = 0, a = -n.right), l[M] = "translateX(" + Math.round(a) + "px) translateY(" + Math.round(i) + "px)", "msTransform" !== M && (l[M] += " translateZ(0)")
                                    } else e.top ? l.top = n.top + "px" : l.bottom = n.bottom + "px", e.left ? l.left = n.left + "px" : l.right = n.right + "px"
                                },
                                c = !1;
                            if ((n.page.top || n.page.bottom) && (n.page.left || n.page.right) ? (l.position = "absolute", h(n.page, e.page)) : (n.viewport.top || n.viewport.bottom) && (n.viewport.left || n.viewport.right) ? (l.position = "fixed", h(n.viewport, e.viewport)) : "undefined" != typeof n.offset && n.offset.top && n.offset.left ? ! function() {
                                    l.position = "absolute";
                                    var o = t.cache("target-offsetparent", function() {
                                        return a(t.target)
                                    });
                                    a(t.element) !== o && T(function() {
                                        t.element.parentNode.removeChild(t.element), o.appendChild(t.element)
                                    }), h(n.offset, e.offset), c = !0
                                }() : (l.position = "absolute", h({
                                    top: !0,
                                    left: !0
                                }, e.page)), !c) {
                                for (var p = !0, g = this.element.parentNode; g && "BODY" !== g.tagName;) {
                                    if ("static" !== getComputedStyle(g).position) {
                                        p = !1;
                                        break
                                    }
                                    g = g.parentNode
                                }
                                p || (this.element.parentNode.removeChild(this.element), document.body.appendChild(this.element))
                            }
                            var f = {},
                                A = !1;
                            for (var r in l) {
                                var m = l[r],
                                    $ = this.element.style[r];
                                "" !== $ && "" !== m && ["top", "left", "bottom", "right"].indexOf(r) >= 0 && ($ = parseFloat($), m = parseFloat(m)), $ !== m && (A = !0, f[r] = m)
                            }
                            A && T(function() {
                                s(t.element.style, f)
                            })
                        }
                    }
                }]), e
            }();
        k.modules = [], y.position = F;
        var H = s(k, y),
            O = function() {
                function e(e, t) {
                    var n = [],
                        o = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var a, d = e[Symbol.iterator](); !(o = (a = d.next()).done) && (n.push(a.value), !t || n.length !== t); o = !0);
                    } catch (s) {
                        r = !0, i = s
                    } finally {
                        try {
                            !o && d["return"] && d["return"]()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return n
                }
                return function(t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            R = y.Utils,
            i = R.getBounds,
            s = R.extend,
            g = R.updateClasses,
            T = R.defer,
            G = ["left", "top", "right", "bottom"];
        y.modules.push({
            position: function(e) {
                var t = this,
                    n = e.top,
                    o = e.left,
                    r = e.targetAttachment;
                if (!this.options.constraints) return !0;
                var a = this.cache("element-bounds", function() {
                        return i(t.element)
                    }),
                    d = a.height,
                    u = a.width;
                if (0 === u && 0 === d && "undefined" != typeof this.lastSize) {
                    var l = this.lastSize;
                    u = l.width, d = l.height
                }
                var h = this.cache("target-bounds", function() {
                        return t.getTargetBounds()
                    }),
                    c = h.height,
                    p = h.width,
                    N = [this.getClass("pinned"), this.getClass("out-of-bounds")];
                this.options.constraints.forEach(function(e) {
                    var t = e.outOfBoundsClass,
                        n = e.pinnedClass;
                    t && N.push(t), n && N.push(n)
                }), N.forEach(function(e) {
                    ["left", "top", "right", "bottom"].forEach(function(t) {
                        N.push(e + "-" + t)
                    })
                });
                var f = [],
                    A = s({}, r),
                    m = s({}, this.attachment);
                return this.options.constraints.forEach(function(e) {
                    var i = e.to,
                        a = e.attachment,
                        s = e.pin;
                    "undefined" == typeof a && (a = "");
                    var l = void 0,
                        h = void 0;
                    if (a.indexOf(" ") >= 0) {
                        var g = a.split(" "),
                            N = O(g, 2);
                        h = N[0], l = N[1]
                    } else l = h = a;
                    var b = $(t, i);
                    "target" !== h && "both" !== h || (n < b[1] && "top" === A.top && (n += c, A.top = "bottom"), n + d > b[3] && "bottom" === A.top && (n -= c, A.top = "top")), "together" === h && (n < b[1] && "top" === A.top && ("bottom" === m.top ? (n += c, A.top = "bottom", n += d, m.top = "top") : "top" === m.top && (n += c, A.top = "bottom", n -= d, m.top = "bottom")), n + d > b[3] && "bottom" === A.top && ("top" === m.top ? (n -= c, A.top = "top", n -= d, m.top = "bottom") : "bottom" === m.top && (n -= c, A.top = "top", n += d, m.top = "top")), "middle" === A.top && (n + d > b[3] && "top" === m.top ? (n -= d, m.top = "bottom") : n < b[1] && "bottom" === m.top && (n += d, m.top = "top"))), "target" !== l && "both" !== l || (o < b[0] && "left" === A.left && (o += p, A.left = "right"), o + u > b[2] && "right" === A.left && (o -= p, A.left = "left")), "together" === l && (o < b[0] && "left" === A.left ? "right" === m.left ? (o += p, A.left = "right", o += u, m.left = "left") : "left" === m.left && (o += p, A.left = "right", o -= u, m.left = "right") : o + u > b[2] && "right" === A.left ? "left" === m.left ? (o -= p, A.left = "left", o -= u, m.left = "right") : "right" === m.left && (o -= p, A.left = "left", o += u, m.left = "left") : "center" === A.left && (o + u > b[2] && "left" === m.left ? (o -= u, m.left = "right") : o < b[0] && "right" === m.left && (o += u, m.left = "left"))), "element" !== h && "both" !== h || (n < b[1] && "bottom" === m.top && (n += d, m.top = "top"), n + d > b[3] && "top" === m.top && (n -= d, m.top = "bottom")), "element" !== l && "both" !== l || (o < b[0] && ("right" === m.left ? (o += u, m.left = "left") : "center" === m.left && (o += u / 2, m.left = "left")), o + u > b[2] && ("left" === m.left ? (o -= u, m.left = "right") : "center" === m.left && (o -= u / 2, m.left = "right"))), "string" == typeof s ? s = s.split(",").map(function(e) {
                        return e.trim()
                    }) : s === !0 && (s = ["top", "left", "right", "bottom"]), s = s || [];
                    var y = [],
                        v = [];
                    n < b[1] && (s.indexOf("top") >= 0 ? (n = b[1], y.push("top")) : v.push("top")), n + d > b[3] && (s.indexOf("bottom") >= 0 ? (n = b[3] - d, y.push("bottom")) : v.push("bottom")), o < b[0] && (s.indexOf("left") >= 0 ? (o = b[0], y.push("left")) : v.push("left")), o + u > b[2] && (s.indexOf("right") >= 0 ? (o = b[2] - u, y.push("right")) : v.push("right")), y.length && ! function() {
                        var e = void 0;
                        e = "undefined" != typeof t.options.pinnedClass ? t.options.pinnedClass : t.getClass("pinned"), f.push(e), y.forEach(function(t) {
                            f.push(e + "-" + t)
                        })
                    }(), v.length && ! function() {
                        var e = void 0;
                        e = "undefined" != typeof t.options.outOfBoundsClass ? t.options.outOfBoundsClass : t.getClass("out-of-bounds"), f.push(e), v.forEach(function(t) {
                            f.push(e + "-" + t)
                        })
                    }(), (y.indexOf("left") >= 0 || y.indexOf("right") >= 0) && (m.left = A.left = !1), (y.indexOf("top") >= 0 || y.indexOf("bottom") >= 0) && (m.top = A.top = !1), A.top === r.top && A.left === r.left && m.top === t.attachment.top && m.left === t.attachment.left || t.updateAttachClasses(m, A)
                }), T(function() {
                    t.options.addTargetClasses !== !1 && g(t.target, f, N), g(t.element, f, N)
                }), {
                    top: n,
                    left: o
                }
            }
        });
        var R = y.Utils,
            i = R.getBounds,
            g = R.updateClasses,
            T = R.defer;
        y.modules.push({
            position: function(e) {
                var t = this,
                    n = e.top,
                    o = e.left,
                    r = this.cache("element-bounds", function() {
                        return i(t.element)
                    }),
                    a = r.height,
                    d = r.width,
                    s = this.getTargetBounds(),
                    u = n + a,
                    l = o + d,
                    h = [];
                n <= s.bottom && u >= s.top && ["left", "right"].forEach(function(e) {
                    var t = s[e];
                    t !== o && t !== l || h.push(e)
                }), o <= s.right && l >= s.left && ["top", "bottom"].forEach(function(e) {
                    var t = s[e];
                    t !== n && t !== u || h.push(e)
                });
                var c = [],
                    p = [],
                    N = ["left", "top", "right", "bottom"];
                return c.push(this.getClass("abutted")), N.forEach(function(e) {
                    c.push(t.getClass("abutted") + "-" + e)
                }), h.length && p.push(this.getClass("abutted")), h.forEach(function(e) {
                    p.push(t.getClass("abutted") + "-" + e)
                }), T(function() {
                    t.options.addTargetClasses !== !1 && g(t.target, p, c), g(t.element, p, c)
                }), !0
            }
        });
        var O = function() {
            function e(e, t) {
                var n = [],
                    o = !0,
                    r = !1,
                    i = void 0;
                try {
                    for (var a, d = e[Symbol.iterator](); !(o = (a = d.next()).done) && (n.push(a.value), !t || n.length !== t); o = !0);
                } catch (s) {
                    r = !0, i = s
                } finally {
                    try {
                        !o && d["return"] && d["return"]()
                    } finally {
                        if (r) throw i
                    }
                }
                return n
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        return y.modules.push({
            position: function(e) {
                var t = e.top,
                    n = e.left;
                if (this.options.shift) {
                    var o = this.options.shift;
                    "function" == typeof this.options.shift && (o = this.options.shift.call(this, {
                        top: t,
                        left: n
                    }));
                    var r = void 0,
                        i = void 0;
                    if ("string" == typeof o) {
                        o = o.split(" "), o[1] = o[1] || o[0];
                        var a = o,
                            d = O(a, 2);
                        r = d[0], i = d[1], r = parseFloat(r, 10), i = parseFloat(i, 10)
                    } else r = o.top, i = o.left;
                    return t += r, n += i, {
                        top: t,
                        left: n
                    }
                }
            }
        }), H
    }),
    function() {
        if ("performance" in window == !1 && (window.performance = {}), Date.now = Date.now || function() {
                return (new Date).getTime()
            }, "now" in window.performance == !1) {
            var e = window.performance.timing && window.performance.timing.navigationStart ? window.performance.timing.navigationStart : Date.now();
            window.performance.now = function() {
                return Date.now() - e
            }
        }
    }();
var TWEEN = TWEEN || function() {
    var e = [];
    return {
        getAll: function() {
            return e
        },
        removeAll: function() {
            e = []
        },
        add: function(t) {
            e.push(t)
        },
        remove: function(t) {
            var n = e.indexOf(t);
            n !== -1 && e.splice(n, 1)
        },
        update: function(t) {
            if (0 === e.length) return !1;
            var n = 0;
            for (t = void 0 !== t ? t : window.performance.now(); n < e.length;) e[n].update(t) ? n++ : e.splice(n, 1);
            return !0
        }
    }
}();
if (TWEEN.Tween = function(e) {
        var t = e,
            n = {},
            o = {},
            r = {},
            i = 1e3,
            a = 0,
            d = !1,
            s = !1,
            u = !1,
            l = 0,
            h = null,
            c = TWEEN.Easing.Linear.None,
            p = TWEEN.Interpolation.Linear,
            g = [],
            N = null,
            f = !1,
            A = null,
            m = null,
            $ = null;
        for (var b in e) n[b] = parseFloat(e[b], 10);
        this.to = function(e, t) {
            return void 0 !== t && (i = t), o = e, this
        }, this.start = function(e) {
            TWEEN.add(this), s = !0, f = !1, h = void 0 !== e ? e : window.performance.now(), h += l;
            for (var i in o) {
                if (o[i] instanceof Array) {
                    if (0 === o[i].length) continue;
                    o[i] = [t[i]].concat(o[i])
                }
                void 0 !== n[i] && (n[i] = t[i], n[i] instanceof Array == !1 && (n[i] *= 1), r[i] = n[i] || 0)
            }
            return this
        }, this.stop = function() {
            return s ? (TWEEN.remove(this), s = !1, null !== $ && $.call(t), this.stopChainedTweens(), this) : this
        }, this.stopChainedTweens = function() {
            for (var e = 0, t = g.length; e < t; e++) g[e].stop()
        }, this.delay = function(e) {
            return l = e, this
        }, this.repeat = function(e) {
            return a = e, this
        }, this.yoyo = function(e) {
            return d = e, this
        }, this.easing = function(e) {
            return c = e, this
        }, this.interpolation = function(e) {
            return p = e, this
        }, this.chain = function() {
            return g = arguments, this
        }, this.onStart = function(e) {
            return N = e, this
        }, this.onUpdate = function(e) {
            return A = e, this
        }, this.onComplete = function(e) {
            return m = e, this
        }, this.onStop = function(e) {
            return $ = e, this
        }, this.update = function(e) {
            var s, $, b;
            if (e < h) return !0;
            f === !1 && (null !== N && N.call(t), f = !0), $ = (e - h) / i, $ = $ > 1 ? 1 : $, b = c($);
            for (s in o)
                if (void 0 !== n[s]) {
                    var y = n[s] || 0,
                        v = o[s];
                    v instanceof Array ? t[s] = p(v, b) : ("string" == typeof v && (v = v.startsWith("+") || v.startsWith("-") ? y + parseFloat(v, 10) : parseFloat(v, 10)), "number" == typeof v && (t[s] = y + (v - y) * b))
                }
            if (null !== A && A.call(t, b), 1 === $) {
                if (a > 0) {
                    isFinite(a) && a--;
                    for (s in r) {
                        if ("string" == typeof o[s] && (r[s] = r[s] + parseFloat(o[s], 10)), d) {
                            var _ = r[s];
                            r[s] = o[s], o[s] = _
                        }
                        n[s] = r[s]
                    }
                    return d && (u = !u), h = e + l, !0
                }
                null !== m && m.call(t);
                for (var E = 0, P = g.length; E < P; E++) g[E].start(h + i);
                return !1
            }
            return !0;
        }
    }, TWEEN.Easing = {
        Linear: {
            None: function(e) {
                return e
            }
        },
        Quadratic: {
            In: function(e) {
                return e * e
            },
            Out: function(e) {
                return e * (2 - e)
            },
            InOut: function(e) {
                return (e *= 2) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
            }
        },
        Cubic: {
            In: function(e) {
                return e * e * e
            },
            Out: function(e) {
                return --e * e * e + 1
            },
            InOut: function(e) {
                return (e *= 2) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
            }
        },
        Quartic: {
            In: function(e) {
                return e * e * e * e
            },
            Out: function(e) {
                return 1 - --e * e * e * e
            },
            InOut: function(e) {
                return (e *= 2) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
            }
        },
        Quintic: {
            In: function(e) {
                return e * e * e * e * e
            },
            Out: function(e) {
                return --e * e * e * e * e + 1
            },
            InOut: function(e) {
                return (e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
            }
        },
        Sinusoidal: {
            In: function(e) {
                return 1 - Math.cos(e * Math.PI / 2)
            },
            Out: function(e) {
                return Math.sin(e * Math.PI / 2)
            },
            InOut: function(e) {
                return .5 * (1 - Math.cos(Math.PI * e))
            }
        },
        Exponential: {
            In: function(e) {
                return 0 === e ? 0 : Math.pow(1024, e - 1)
            },
            Out: function(e) {
                return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
            },
            InOut: function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : (e *= 2) < 1 ? .5 * Math.pow(1024, e - 1) : .5 * (-Math.pow(2, -10 * (e - 1)) + 2)
            }
        },
        Circular: {
            In: function(e) {
                return 1 - Math.sqrt(1 - e * e)
            },
            Out: function(e) {
                return Math.sqrt(1 - --e * e)
            },
            InOut: function(e) {
                return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            }
        },
        Elastic: {
            In: function(e) {
                var t, n = .1,
                    o = .4;
                return 0 === e ? 0 : 1 === e ? 1 : (!n || n < 1 ? (n = 1, t = o / 4) : t = o * Math.asin(1 / n) / (2 * Math.PI), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / o)))
            },
            Out: function(e) {
                var t, n = .1,
                    o = .4;
                return 0 === e ? 0 : 1 === e ? 1 : (!n || n < 1 ? (n = 1, t = o / 4) : t = o * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / o) + 1)
            },
            InOut: function(e) {
                var t, n = .1,
                    o = .4;
                return 0 === e ? 0 : 1 === e ? 1 : (!n || n < 1 ? (n = 1, t = o / 4) : t = o * Math.asin(1 / n) / (2 * Math.PI), (e *= 2) < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / o)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / o) * .5 + 1)
            }
        },
        Back: {
            In: function(e) {
                var t = 1.70158;
                return e * e * ((t + 1) * e - t)
            },
            Out: function(e) {
                var t = 1.70158;
                return --e * e * ((t + 1) * e + t) + 1
            },
            InOut: function(e) {
                var t = 2.5949095;
                return (e *= 2) < 1 ? .5 * (e * e * ((t + 1) * e - t)) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
            }
        },
        Bounce: {
            In: function(e) {
                return 1 - TWEEN.Easing.Bounce.Out(1 - e)
            },
            Out: function(e) {
                return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            },
            InOut: function(e) {
                return e < .5 ? .5 * TWEEN.Easing.Bounce.In(2 * e) : .5 * TWEEN.Easing.Bounce.Out(2 * e - 1) + .5
            }
        }
    }, TWEEN.Interpolation = {
        Linear: function(e, t) {
            var n = e.length - 1,
                o = n * t,
                r = Math.floor(o),
                i = TWEEN.Interpolation.Utils.Linear;
            return t < 0 ? i(e[0], e[1], o) : t > 1 ? i(e[n], e[n - 1], n - o) : i(e[r], e[r + 1 > n ? n : r + 1], o - r)
        },
        Bezier: function(e, t) {
            for (var n = 0, o = e.length - 1, r = Math.pow, i = TWEEN.Interpolation.Utils.Bernstein, a = 0; a <= o; a++) n += r(1 - t, o - a) * r(t, a) * e[a] * i(o, a);
            return n
        },
        CatmullRom: function(e, t) {
            var n = e.length - 1,
                o = n * t,
                r = Math.floor(o),
                i = TWEEN.Interpolation.Utils.CatmullRom;
            return e[0] === e[n] ? (t < 0 && (r = Math.floor(o = n * (1 + t))), i(e[(r - 1 + n) % n], e[r], e[(r + 1) % n], e[(r + 2) % n], o - r)) : t < 0 ? e[0] - (i(e[0], e[0], e[1], e[1], -o) - e[0]) : t > 1 ? e[n] - (i(e[n], e[n], e[n - 1], e[n - 1], o - n) - e[n]) : i(e[r ? r - 1 : 0], e[r], e[n < r + 1 ? n : r + 1], e[n < r + 2 ? n : r + 2], o - r)
        },
        Utils: {
            Linear: function(e, t, n) {
                return (t - e) * n + e
            },
            Bernstein: function(e, t) {
                var n = TWEEN.Interpolation.Utils.Factorial;
                return n(e) / n(t) / n(e - t)
            },
            Factorial: function() {
                var e = [1];
                return function(t) {
                    var n = 1;
                    if (e[t]) return e[t];
                    for (var o = t; o > 1; o--) n *= o;
                    return e[t] = n, n
                }
            }(),
            CatmullRom: function(e, t, n, o, r) {
                var i = .5 * (n - e),
                    a = .5 * (o - t),
                    d = r * r,
                    s = r * d;
                return (2 * t - 2 * n + i + a) * s + (-3 * t + 3 * n - 2 * i - a) * d + i * r + t
            }
        }
    }, function(e) {
        "function" == typeof define && define.amd ? define([], function() {
            return TWEEN
        }) : "undefined" != typeof module && "object" == typeof exports ? module.exports = TWEEN : void 0 !== e && (e.TWEEN = TWEEN)
    }(this), function(e) {
        "use strict";
        var t = e.HTMLCanvasElement && e.HTMLCanvasElement.prototype,
            n = e.Blob && function() {
                try {
                    return Boolean(new Blob)
                } catch (e) {
                    return !1
                }
            }(),
            o = n && e.Uint8Array && function() {
                try {
                    return 100 === new Blob([new Uint8Array(100)]).size
                } catch (e) {
                    return !1
                }
            }(),
            r = e.BlobBuilder || e.WebKitBlobBuilder || e.MozBlobBuilder || e.MSBlobBuilder,
            i = /^data:((.*?)(;charset=.*?)?)(;base64)?,/,
            a = (n || r) && e.atob && e.ArrayBuffer && e.Uint8Array && function(e) {
                var t, a, d, s, u, l, h, c, p;
                if (t = e.match(i), !t) throw new Error("invalid data URI");
                for (a = t[2] ? t[1] : "text/plain" + (t[3] || ";charset=US-ASCII"), d = !!t[4], s = e.slice(t[0].length), u = d ? atob(s) : decodeURIComponent(s), l = new ArrayBuffer(u.length), h = new Uint8Array(l), c = 0; c < u.length; c += 1) h[c] = u.charCodeAt(c);
                return n ? new Blob([o ? h : l], {
                    type: a
                }) : (p = new r, p.append(l), p.getBlob(a))
            };
        e.HTMLCanvasElement && !t.toBlob && (t.mozGetAsFile ? t.toBlob = function(e, n, o) {
            e(o && t.toDataURL && a ? a(this.toDataURL(n, o)) : this.mozGetAsFile("blob", n))
        } : t.toDataURL && a && (t.toBlob = function(e, t, n) {
            e(a(this.toDataURL(t, n)))
        })), "function" == typeof define && define.amd ? define(function() {
            return a
        }) : "object" == typeof module && module.exports ? module.exports = a : e.dataURLtoBlob = a
    }(window), function(e, t) {
        "function" == typeof define && define.amd ? define(["tether"], t) : "object" == typeof exports ? module.exports = t(require("tether")) : e.Drop = t(e.Tether)
    }(this, function(e) {
        "use strict";

        function t(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function n(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function o(e) {
            var t = e.split(" "),
                n = d(t, 2),
                o = n[0],
                r = n[1];
            if (["left", "right"].indexOf(o) >= 0) {
                var i = [r, o];
                o = i[0], r = i[1]
            }
            return [o, r].join(" ")
        }

        function r(e, t) {
            for (var n = void 0, o = [];
                (n = e.indexOf(t)) !== -1;) o.push(e.splice(n, 1));
            return o
        }

        function i() {
            var d = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                l = function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return new(a.apply($, [null].concat(t)))
                };
            h(l, {
                createContext: i,
                drops: [],
                defaults: {}
            });
            var A = {
                classPrefix: "drop",
                defaults: {
                    position: "bottom left",
                    openOn: "click",
                    beforeClose: null,
                    constrainToScrollParent: !0,
                    constrainToWindow: !0,
                    classes: "",
                    remove: !1,
                    openDelay: 0,
                    closeDelay: 50,
                    focusDelay: null,
                    blurDelay: null,
                    hoverOpenDelay: null,
                    hoverCloseDelay: null,
                    tetherOptions: {}
                }
            };
            h(l, A, d), h(l.defaults, A.defaults, d.defaults), "undefined" == typeof v[l.classPrefix] && (v[l.classPrefix] = []), l.updateBodyClasses = function() {
                for (var e = !1, t = v[l.classPrefix], n = t.length, o = 0; o < n; ++o)
                    if (t[o].isOpened()) {
                        e = !0;
                        break
                    }
                e ? c(document.body, l.classPrefix + "-open") : p(document.body, l.classPrefix + "-open")
            };
            var $ = function(i) {
                function a(e) {
                    if (t(this, a), u(Object.getPrototypeOf(a.prototype), "constructor", this).call(this), this.options = h({}, l.defaults, e), this.target = this.options.target, "undefined" == typeof this.target) throw new Error("Drop Error: You must provide a target.");
                    var n = "data-" + l.classPrefix,
                        o = this.target.getAttribute(n);
                    o && null == this.options.content && (this.options.content = o);
                    for (var r = ["position", "openOn"], i = 0; i < r.length; ++i) {
                        var d = this.target.getAttribute(n + "-" + r[i]);
                        d && null == this.options[r[i]] && (this.options[r[i]] = d)
                    }
                    this.options.classes && this.options.addTargetClasses !== !1 && c(this.target, this.options.classes), l.drops.push(this), v[l.classPrefix].push(this), this._boundEvents = [], this.bindMethods(), this.setupElements(), this.setupEvents(), this.setupTether()
                }
                return n(a, i), s(a, [{
                    key: "_on",
                    value: function(e, t, n) {
                        this._boundEvents.push({
                            element: e,
                            event: t,
                            handler: n
                        }), e.addEventListener(t, n)
                    }
                }, {
                    key: "bindMethods",
                    value: function() {
                        this.transitionEndHandler = this._transitionEndHandler.bind(this)
                    }
                }, {
                    key: "setupElements",
                    value: function() {
                        var e = this;
                        if (this.drop = document.createElement("div"), c(this.drop, l.classPrefix), this.options.classes && c(this.drop, this.options.classes), this.content = document.createElement("div"), c(this.content, l.classPrefix + "-content"), "function" == typeof this.options.content) {
                            var t = function() {
                                var t = e.options.content.call(e, e);
                                if ("string" == typeof t) e.content.innerHTML = t;
                                else {
                                    if ("object" != typeof t) throw new Error("Drop Error: Content function should return a string or HTMLElement.");
                                    e.content.innerHTML = "", e.content.appendChild(t)
                                }
                            };
                            t(), this.on("open", t.bind(this))
                        } else "object" == typeof this.options.content ? this.content.appendChild(this.options.content) : this.content.innerHTML = this.options.content;
                        this.drop.appendChild(this.content)
                    }
                }, {
                    key: "setupTether",
                    value: function() {
                        var t = this.options.position.split(" ");
                        t[0] = y[t[0]], t = t.join(" ");
                        var n = [];
                        this.options.constrainToScrollParent ? n.push({
                            to: "scrollParent",
                            pin: "top, bottom",
                            attachment: "together none"
                        }) : n.push({
                            to: "scrollParent"
                        }), this.options.constrainToWindow !== !1 ? n.push({
                            to: "window",
                            attachment: "together"
                        }) : n.push({
                            to: "window"
                        });
                        var r = {
                            element: this.drop,
                            target: this.target,
                            attachment: o(t),
                            targetAttachment: o(this.options.position),
                            classPrefix: l.classPrefix,
                            offset: "0 0",
                            targetOffset: "0 0",
                            enabled: !1,
                            constraints: n,
                            addTargetClasses: this.options.addTargetClasses
                        };
                        this.options.tetherOptions !== !1 && (this.tether = new e(h({}, r, this.options.tetherOptions)))
                    }
                }, {
                    key: "setupEvents",
                    value: function() {
                        var e = this;
                        if (this.options.openOn) {
                            if ("always" === this.options.openOn) return void setTimeout(this.open.bind(this));
                            var t = this.options.openOn.split(" ");
                            if (t.indexOf("click") >= 0)
                                for (var n = function(t) {
                                        e.toggle(t), t.preventDefault()
                                    }, o = function(t) {
                                        e.isOpened() && (t.target === e.drop || e.drop.contains(t.target) || t.target === e.target || e.target.contains(t.target) || e.close(t))
                                    }, r = 0; r < f.length; ++r) {
                                    var i = f[r];
                                    this._on(this.target, i, n), this._on(document, i, o)
                                }
                            var a = null,
                                d = null,
                                s = function(t) {
                                    null !== d ? clearTimeout(d) : a = setTimeout(function() {
                                        e.open(t), a = null
                                    }, ("focus" === t.type ? e.options.focusDelay : e.options.hoverOpenDelay) || e.options.openDelay)
                                },
                                u = function(t) {
                                    null !== a ? clearTimeout(a) : d = setTimeout(function() {
                                        e.close(t), d = null
                                    }, ("blur" === t.type ? e.options.blurDelay : e.options.hoverCloseDelay) || e.options.closeDelay)
                                };
                            t.indexOf("hover") >= 0 && (this._on(this.target, "mouseover", s), this._on(this.drop, "mouseover", s), this._on(this.target, "mouseout", u), this._on(this.drop, "mouseout", u)), t.indexOf("focus") >= 0 && (this._on(this.target, "focus", s), this._on(this.drop, "focus", s), this._on(this.target, "blur", u), this._on(this.drop, "blur", u))
                        }
                    }
                }, {
                    key: "isOpened",
                    value: function() {
                        if (this.drop) return g(this.drop, l.classPrefix + "-open")
                    }
                }, {
                    key: "toggle",
                    value: function(e) {
                        this.isOpened() ? this.close(e) : this.open(e)
                    }
                }, {
                    key: "open",
                    value: function(e) {
                        var t = this;
                        this.isOpened() || (this.drop.parentNode || document.body.appendChild(this.drop), "undefined" != typeof this.tether && this.tether.enable(), c(this.drop, l.classPrefix + "-open"), c(this.drop, l.classPrefix + "-open-transitionend"), setTimeout(function() {
                            t.drop && c(t.drop, l.classPrefix + "-after-open")
                        }), "undefined" != typeof this.tether && this.tether.position(), this.trigger("open"), l.updateBodyClasses())
                    }
                }, {
                    key: "_transitionEndHandler",
                    value: function(e) {
                        e.target === e.currentTarget && (g(this.drop, l.classPrefix + "-open") || p(this.drop, l.classPrefix + "-open-transitionend"), this.drop.removeEventListener(m, this.transitionEndHandler))
                    }
                }, {
                    key: "beforeCloseHandler",
                    value: function(e) {
                        var t = !0;
                        return this.isClosing || "function" != typeof this.options.beforeClose || (this.isClosing = !0, t = this.options.beforeClose(e, this) !== !1), this.isClosing = !1, t
                    }
                }, {
                    key: "close",
                    value: function(e) {
                        this.isOpened() && this.beforeCloseHandler(e) && (p(this.drop, l.classPrefix + "-open"), p(this.drop, l.classPrefix + "-after-open"), this.drop.addEventListener(m, this.transitionEndHandler), this.trigger("close"), "undefined" != typeof this.tether && this.tether.disable(), l.updateBodyClasses(), this.options.remove && this.remove(e))
                    }
                }, {
                    key: "remove",
                    value: function(e) {
                        this.close(e), this.drop.parentNode && this.drop.parentNode.removeChild(this.drop)
                    }
                }, {
                    key: "position",
                    value: function() {
                        this.isOpened() && "undefined" != typeof this.tether && this.tether.position()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.remove(), "undefined" != typeof this.tether && this.tether.destroy();
                        for (var e = 0; e < this._boundEvents.length; ++e) {
                            var t = this._boundEvents[e],
                                n = t.element,
                                o = t.event,
                                i = t.handler;
                            n.removeEventListener(o, i)
                        }
                        this._boundEvents = [], this.tether = null, this.drop = null, this.content = null, this.target = null, r(v[l.classPrefix], this), r(l.drops, this)
                    }
                }]), a
            }(N);
            return l
        }
        var a = Function.prototype.bind,
            d = function() {
                function e(e, t) {
                    var n = [],
                        o = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var a, d = e[Symbol.iterator](); !(o = (a = d.next()).done) && (n.push(a.value), !t || n.length !== t); o = !0);
                    } catch (s) {
                        r = !0, i = s
                    } finally {
                        try {
                            !o && d["return"] && d["return"]()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return n
                }
                return function(t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            u = function(e, t, n) {
                for (var o = !0; o;) {
                    var r = e,
                        i = t,
                        a = n;
                    o = !1, null === r && (r = Function.prototype);
                    var d = Object.getOwnPropertyDescriptor(r, i);
                    if (void 0 !== d) {
                        if ("value" in d) return d.value;
                        var s = d.get;
                        if (void 0 === s) return;
                        return s.call(a)
                    }
                    var u = Object.getPrototypeOf(r);
                    if (null === u) return;
                    e = u, t = i, n = a, o = !0, d = u = void 0
                }
            },
            l = e.Utils,
            h = l.extend,
            c = l.addClass,
            p = l.removeClass,
            g = l.hasClass,
            N = l.Evented,
            f = ["click"];
        "ontouchstart" in document.documentElement && f.push("touchstart");
        var A = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            },
            m = "";
        for (var $ in A)
            if ({}.hasOwnProperty.call(A, $)) {
                var b = document.createElement("p");
                "undefined" != typeof b.style[$] && (m = A[$])
            }
        var y = {
                left: "right",
                right: "left",
                top: "bottom",
                bottom: "top",
                middle: "middle",
                center: "center"
            },
            v = {},
            _ = i();
        return document.addEventListener("DOMContentLoaded", function() {
            _.updateBodyClasses()
        }), _
    }), function() {
        for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(t, n) {
            var o = (new Date).getTime(),
                r = Math.max(0, 16 - (o - e)),
                i = window.setTimeout(function() {
                    t(o + r)
                }, r);
            return e = o + r, i
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
            clearTimeout(e)
        })
    }(), "THREE" in window && (THREE.SpriteCanvasMaterial = function(e) {
        THREE.Material.call(this), this.type = "SpriteCanvasMaterial", this.color = new THREE.Color(16777215), this.program = function(e, t) {}, this.setValues(e)
    }, THREE.SpriteCanvasMaterial.prototype = Object.create(THREE.Material.prototype), THREE.SpriteCanvasMaterial.prototype.constructor = THREE.SpriteCanvasMaterial, THREE.SpriteCanvasMaterial.prototype.clone = function() {
        var e = new THREE.SpriteCanvasMaterial;
        return e.copy(this), e.color.copy(this.color), e.program = this.program, e
    }, THREE.CanvasRenderer = function(e) {
        function t() {
            Ae.setRGB(0, 0, 0), me.setRGB(0, 0, 0), $e.setRGB(0, 0, 0);
            for (var e = 0, t = v.length; e < t; e++) {
                var n = v[e],
                    o = n.color;
                n instanceof THREE.AmbientLight ? Ae.add(o) : n instanceof THREE.DirectionalLight ? me.add(o) : n instanceof THREE.PointLight && $e.add(o)
            }
        }

        function n(e, t, n) {
            for (var o = 0, r = v.length; o < r; o++) {
                var i = v[o];
                if (ce.copy(i.color), i instanceof THREE.DirectionalLight) {
                    var a = be.setFromMatrixPosition(i.matrixWorld).normalize(),
                        d = t.dot(a);
                    if (d <= 0) continue;
                    d *= i.intensity, n.add(ce.multiplyScalar(d))
                } else if (i instanceof THREE.PointLight) {
                    var a = be.setFromMatrixPosition(i.matrixWorld),
                        d = t.dot(be.subVectors(a, e).normalize());
                    if (d <= 0) continue;
                    if (d *= 0 == i.distance ? 1 : 1 - Math.min(e.distanceTo(a) / i.distance, 1), 0 == d) continue;
                    d *= i.intensity, n.add(ce.multiplyScalar(d))
                }
            }
        }

        function o(e, t, n) {
            c(n.opacity), p(n.blending);
            var o = t.scale.x * z,
                r = t.scale.y * W,
                i = .5 * Math.sqrt(o * o + r * r);
            if (fe.min.set(e.x - i, e.y - i), fe.max.set(e.x + i, e.y + i), n instanceof THREE.SpriteMaterial) {
                var a = n.map;
                if (null !== a) {
                    var d = pe[a.id];
                    if (void 0 !== d && d.version === a.version || (d = u(a), pe[a.id] = d), void 0 !== d.canvas) {
                        m(d.canvas);
                        var s = a.image,
                            l = s.width * a.offset.x,
                            h = s.height * a.offset.y,
                            g = s.width * a.repeat.x,
                            N = s.height * a.repeat.y,
                            f = o / g,
                            $ = r / N;
                        J.save(), J.translate(e.x, e.y), 0 !== n.rotation && J.rotate(n.rotation), J.translate(-o / 2, -r / 2), J.scale(f, $), J.translate(-l, -h), J.fillRect(l, h, g, N), J.restore()
                    }
                } else m(n.color.getStyle()), J.save(), J.translate(e.x, e.y), 0 !== n.rotation && J.rotate(n.rotation), J.scale(o, -r), J.fillRect(-.5, -.5, 1, 1), J.restore()
            } else n instanceof THREE.SpriteCanvasMaterial && (A(n.color.getStyle()), m(n.color.getStyle()), J.save(), J.translate(e.x, e.y), 0 !== n.rotation && J.rotate(n.rotation), J.scale(o, r), n.program(J), J.restore())
        }

        function r(e, t, n, o) {
            if (c(o.opacity), p(o.blending), J.beginPath(), J.moveTo(e.positionScreen.x, e.positionScreen.y), J.lineTo(t.positionScreen.x, t.positionScreen.y), o instanceof THREE.LineBasicMaterial) {
                if (g(o.linewidth), N(o.linecap), f(o.linejoin), o.vertexColors !== THREE.VertexColors) A(o.color.getStyle());
                else {
                    var r = n.vertexColors[0].getStyle(),
                        i = n.vertexColors[1].getStyle();
                    if (r === i) A(r);
                    else {
                        try {
                            var a = J.createLinearGradient(e.positionScreen.x, e.positionScreen.y, t.positionScreen.x, t.positionScreen.y);
                            a.addColorStop(0, r), a.addColorStop(1, i)
                        } catch (d) {
                            a = r
                        }
                        A(a)
                    }
                }
                J.stroke(), fe.expandByScalar(2 * o.linewidth)
            } else o instanceof THREE.LineDashedMaterial && (g(o.linewidth), N(o.linecap), f(o.linejoin), A(o.color.getStyle()), $([o.dashSize, o.gapSize]), J.stroke(), fe.expandByScalar(2 * o.linewidth), $([]))
        }

        function i(e, t, o, r, i, u, h, g) {
            if (B.info.render.vertices += 3, B.info.render.faces++, c(g.opacity), p(g.blending), C = e.positionScreen.x, S = e.positionScreen.y, O = t.positionScreen.x, R = t.positionScreen.y, M = o.positionScreen.x, x = o.positionScreen.y, a(C, S, O, R, M, x), (g instanceof THREE.MeshLambertMaterial || g instanceof THREE.MeshPhongMaterial) && null === g.map) le.copy(g.color), he.copy(g.emissive), g.vertexColors === THREE.FaceColors && le.multiply(h.color), ue.copy(Ae), ye.copy(e.positionWorld).add(t.positionWorld).add(o.positionWorld).divideScalar(3), n(ye, h.normalModel, ue), ue.multiply(le).add(he), g.wireframe === !0 ? d(ue, g.wireframeLinewidth, g.wireframeLinecap, g.wireframeLinejoin) : s(ue);
            else if (g instanceof THREE.MeshBasicMaterial || g instanceof THREE.MeshLambertMaterial || g instanceof THREE.MeshPhongMaterial)
                if (null !== g.map) {
                    var N = g.map.mapping;
                    N === THREE.UVMapping && (F = h.uvs, l(C, S, O, R, M, x, F[r].x, F[r].y, F[i].x, F[i].y, F[u].x, F[u].y, g.map))
                } else null !== g.envMap ? g.envMap.mapping === THREE.SphericalReflectionMapping && (ve.copy(h.vertexNormalsModel[r]).applyMatrix3(_e), w = .5 * ve.x + .5, D = .5 * ve.y + .5, ve.copy(h.vertexNormalsModel[i]).applyMatrix3(_e), I = .5 * ve.x + .5, L = .5 * ve.y + .5, ve.copy(h.vertexNormalsModel[u]).applyMatrix3(_e), U = .5 * ve.x + .5, V = .5 * ve.y + .5, l(C, S, O, R, M, x, w, D, I, L, U, V, g.envMap)) : (ue.copy(g.color), g.vertexColors === THREE.FaceColors && ue.multiply(h.color), g.wireframe === !0 ? d(ue, g.wireframeLinewidth, g.wireframeLinecap, g.wireframeLinejoin) : s(ue));
            else g instanceof THREE.MeshNormalMaterial ? (ve.copy(h.normalModel).applyMatrix3(_e), ue.setRGB(ve.x, ve.y, ve.z).multiplyScalar(.5).addScalar(.5), g.wireframe === !0 ? d(ue, g.wireframeLinewidth, g.wireframeLinecap, g.wireframeLinejoin) : s(ue)) : (ue.setRGB(1, 1, 1), g.wireframe === !0 ? d(ue, g.wireframeLinewidth, g.wireframeLinecap, g.wireframeLinejoin) : s(ue))
        }

        function a(e, t, n, o, r, i) {
            J.beginPath(), J.moveTo(e, t), J.lineTo(n, o), J.lineTo(r, i), J.closePath()
        }

        function d(e, t, n, o) {
            g(t), N(n), f(o), A(e.getStyle()), J.stroke(), fe.expandByScalar(2 * t)
        }

        function s(e) {
            m(e.getStyle()), J.fill()
        }

        function u(e) {
            if (0 === e.version || e instanceof THREE.CompressedTexture || e instanceof THREE.DataTexture) return {
                canvas: void 0,
                version: e.version
            };
            var t = e.image;
            if (t.complete === !1) return {
                canvas: void 0,
                version: 0
            };
            var n = document.createElement("canvas");
            n.width = t.width, n.height = t.height;
            var o = n.getContext("2d");
            o.setTransform(1, 0, 0, -1, 0, t.height), o.drawImage(t, 0, 0);
            var r = e.wrapS === THREE.RepeatWrapping,
                i = e.wrapT === THREE.RepeatWrapping,
                a = "no-repeat";
            r === !0 && i === !0 ? a = "repeat" : r === !0 ? a = "repeat-x" : i === !0 && (a = "repeat-y");
            var d = J.createPattern(n, a);
            return e.onUpdate && e.onUpdate(e), {
                canvas: d,
                version: e.version
            }
        }

        function l(e, t, n, o, r, i, a, d, s, l, h, c, p) {
            var g = pe[p.id];
            if (void 0 !== g && g.version === p.version || (g = u(p), pe[p.id] = g), void 0 === g.canvas) return m("rgba( 0, 0, 0, 1)"), void J.fill();
            m(g.canvas);
            var N, f, A, $, b, y, v, _, E = p.offset.x / p.repeat.x,
                P = p.offset.y / p.repeat.y,
                T = p.image.width * p.repeat.x,
                C = p.image.height * p.repeat.y;
            a = (a + E) * T, d = (d + P) * C, s = (s + E) * T, l = (l + P) * C, h = (h + E) * T, c = (c + P) * C, n -= e, o -= t, r -= e, i -= t, s -= a, l -= d, h -= a, c -= d, v = s * c - h * l, 0 !== v && (_ = 1 / v, N = (c * n - l * r) * _, f = (c * o - l * i) * _, A = (s * r - h * n) * _, $ = (s * i - h * o) * _, b = e - N * a - A * d, y = t - f * a - $ * d, J.save(), J.transform(N, f, A, $, b, y), J.fill(), J.restore())
        }

        function h(e, t, n) {
            var o, r = t.x - e.x,
                i = t.y - e.y,
                a = r * r + i * i;
            0 !== a && (o = n / Math.sqrt(a), r *= o, i *= o, t.x += r, t.y += i, e.x -= r, e.y -= i)
        }

        function c(e) {
            te !== e && (J.globalAlpha = e, te = e)
        }

        function p(e) {
            ne !== e && (e === THREE.NormalBlending ? J.globalCompositeOperation = "source-over" : e === THREE.AdditiveBlending ? J.globalCompositeOperation = "lighter" : e === THREE.SubtractiveBlending && (J.globalCompositeOperation = "darker"), ne = e)
        }

        function g(e) {
            ie !== e && (J.lineWidth = e, ie = e)
        }

        function N(e) {
            ae !== e && (J.lineCap = e, ae = e)
        }

        function f(e) {
            de !== e && (J.lineJoin = e, de = e)
        }

        function A(e) {
            oe !== e && (J.strokeStyle = e, oe = e)
        }

        function m(e) {
            re !== e && (J.fillStyle = e, re = e)
        }

        function $(e) {
            se.length !== e.length && (J.setLineDash(e), se = e)
        }
        console.log("THREE.CanvasRenderer", THREE.REVISION), e = e || {};
        var b, y, v, _, E, P, T, C, S, O, R, M, x, F, w, D, I, L, U, V, B = this,
            k = new THREE.Projector,
            H = void 0 !== e.canvas ? e.canvas : document.createElement("canvas"),
            G = H.width,
            j = H.height,
            z = Math.floor(G / 2),
            W = Math.floor(j / 2),
            q = 0,
            Y = 0,
            X = G,
            K = j,
            Z = 1,
            J = H.getContext("2d", {
                alpha: e.alpha === !0
            }),
            Q = new THREE.Color(0),
            ee = e.alpha === !0 ? 0 : 1,
            te = 1,
            ne = 0,
            oe = null,
            re = null,
            ie = null,
            ae = null,
            de = null,
            se = [],
            ue = (new THREE.RenderableVertex, new THREE.RenderableVertex, new THREE.Color),
            le = (new THREE.Color, new THREE.Color, new THREE.Color, new THREE.Color, new THREE.Color),
            he = new THREE.Color,
            ce = new THREE.Color,
            pe = {},
            ge = new THREE.Box2,
            Ne = new THREE.Box2,
            fe = new THREE.Box2,
            Ae = new THREE.Color,
            me = new THREE.Color,
            $e = new THREE.Color,
            be = new THREE.Vector3,
            ye = new THREE.Vector3,
            ve = new THREE.Vector3,
            _e = new THREE.Matrix3;
        void 0 === J.setLineDash && (J.setLineDash = function() {}), this.domElement = H, this.autoClear = !0, this.sortObjects = !0, this.sortElements = !0, this.info = {
            render: {
                vertices: 0,
                faces: 0
            }
        }, this.supportsVertexTextures = function() {}, this.setFaceCulling = function() {}, this.getContext = function() {
            return J
        }, this.getContextAttributes = function() {
            return J.getContextAttributes()
        }, this.getPixelRatio = function() {
            return Z
        }, this.setPixelRatio = function(e) {
            void 0 !== e && (Z = e)
        }, this.setSize = function(e, t, n) {
            G = e * Z, j = t * Z, H.width = G, H.height = j, z = Math.floor(G / 2), W = Math.floor(j / 2), n !== !1 && (H.style.width = e + "px", H.style.height = t + "px"), ge.min.set(-z, -W), ge.max.set(z, W), Ne.min.set(-z, -W), Ne.max.set(z, W), te = 1, ne = 0, oe = null, re = null, ie = null, ae = null, de = null, this.setViewport(0, 0, e, t)
        }, this.setViewport = function(e, t, n, o) {
            q = e * Z, Y = t * Z, X = n * Z, K = o * Z
        }, this.setScissor = function() {}, this.setScissorTest = function() {}, this.setClearColor = function(e, t) {
            Q.set(e), ee = void 0 !== t ? t : 1, Ne.min.set(-z, -W), Ne.max.set(z, W)
        }, this.setClearColorHex = function(e, t) {
            console.warn("THREE.CanvasRenderer: .setClearColorHex() is being removed. Use .setClearColor() instead."), this.setClearColor(e, t)
        }, this.getClearColor = function() {
            return Q
        }, this.getClearAlpha = function() {
            return ee
        }, this.getMaxAnisotropy = function() {
            return 0
        }, this.clear = function() {
            Ne.isEmpty() === !1 && (Ne.intersect(ge), Ne.expandByScalar(2), Ne.min.x = Ne.min.x + z, Ne.min.y = -Ne.min.y + W, Ne.max.x = Ne.max.x + z, Ne.max.y = -Ne.max.y + W, ee < 1 && J.clearRect(0 | Ne.min.x, 0 | Ne.max.y, Ne.max.x - Ne.min.x | 0, Ne.min.y - Ne.max.y | 0), ee > 0 && (p(THREE.NormalBlending), c(1), m("rgba(" + Math.floor(255 * Q.r) + "," + Math.floor(255 * Q.g) + "," + Math.floor(255 * Q.b) + "," + ee + ")"), J.fillRect(0 | Ne.min.x, 0 | Ne.max.y, Ne.max.x - Ne.min.x | 0, Ne.min.y - Ne.max.y | 0)), Ne.makeEmpty())
        }, this.clearColor = function() {}, this.clearDepth = function() {}, this.clearStencil = function() {}, this.render = function(e, n) {
            if (n instanceof THREE.Camera == !1) return void console.error("THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera.");
            this.autoClear === !0 && this.clear(), B.info.render.vertices = 0, B.info.render.faces = 0, J.setTransform(X / G, 0, 0, -K / j, q, j - Y), J.translate(z, W), b = k.projectScene(e, n, this.sortObjects, this.sortElements), y = b.elements, v = b.lights, _ = n, _e.getNormalMatrix(n.matrixWorldInverse), t();
            for (var a = 0, d = y.length; a < d; a++) {
                var s = y[a],
                    u = s.material;
                if (void 0 !== u && 0 !== u.opacity) {
                    if (fe.makeEmpty(), s instanceof THREE.RenderableSprite) E = s, E.x *= z, E.y *= W, o(E, s, u);
                    else if (s instanceof THREE.RenderableLine) E = s.v1, P = s.v2, E.positionScreen.x *= z, E.positionScreen.y *= W, P.positionScreen.x *= z, P.positionScreen.y *= W, fe.setFromPoints([E.positionScreen, P.positionScreen]), ge.intersectsBox(fe) === !0 && r(E, P, s, u);
                    else if (s instanceof THREE.RenderableFace) {
                        if (E = s.v1, P = s.v2, T = s.v3, E.positionScreen.z < -1 || E.positionScreen.z > 1) continue;
                        if (P.positionScreen.z < -1 || P.positionScreen.z > 1) continue;
                        if (T.positionScreen.z < -1 || T.positionScreen.z > 1) continue;
                        E.positionScreen.x *= z, E.positionScreen.y *= W, P.positionScreen.x *= z, P.positionScreen.y *= W, T.positionScreen.x *= z, T.positionScreen.y *= W, u.overdraw > 0 && (h(E.positionScreen, P.positionScreen, u.overdraw), h(P.positionScreen, T.positionScreen, u.overdraw), h(T.positionScreen, E.positionScreen, u.overdraw)), fe.setFromPoints([E.positionScreen, P.positionScreen, T.positionScreen]), ge.intersectsBox(fe) === !0 && i(E, P, T, 0, 1, 2, s, u)
                    }
                    Ne.union(fe)
                }
            }
            J.setTransform(1, 0, 0, 1, 0, 0)
        }
    }), "THREE" in window) {
    var Detector = {
        canvas: !!window.CanvasRenderingContext2D,
        webgl: function() {
            try {
                var e = document.createElement("canvas");
                return !(!window.WebGLRenderingContext || !e.getContext("webgl") && !e.getContext("experimental-webgl"))
            } catch (t) {
                return !1
            }
        }(),
        workers: !!window.Worker,
        fileapi: window.File && window.FileReader && window.FileList && window.Blob,
        getWebGLErrorMessage: function() {
            var e = document.createElement("div");
            return e.id = "webgl-error-message", e.style.fontFamily = "monospace", e.style.fontSize = "13px", e.style.fontWeight = "normal", e.style.textAlign = "center", e.style.background = "#fff", e.style.color = "#000", e.style.padding = "1.5em", e.style.width = "400px", e.style.margin = "5em auto 0", this.webgl || (e.innerHTML = window.WebGLRenderingContext ? ['Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />', 'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join("\n") : ['Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>', 'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join("\n")), e
        },
        addGetWebGLMessage: function(e) {
            var t, n, o;
            e = e || {}, t = void 0 !== e.parent ? e.parent : document.body, n = void 0 !== e.id ? e.id : "oldie", o = Detector.getWebGLErrorMessage(), o.id = n, t.appendChild(o)
        }
    };
    "object" == typeof module && (module.exports = Detector)
}
"THREE" in window && (THREE.RenderableObject = function() {
    this.id = 0, this.object = null, this.z = 0, this.renderOrder = 0
}, THREE.RenderableFace = function() {
    this.id = 0, this.v1 = new THREE.RenderableVertex, this.v2 = new THREE.RenderableVertex, this.v3 = new THREE.RenderableVertex, this.normalModel = new THREE.Vector3, this.vertexNormalsModel = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3], this.vertexNormalsLength = 0, this.color = new THREE.Color, this.material = null, this.uvs = [new THREE.Vector2, new THREE.Vector2, new THREE.Vector2], this.z = 0, this.renderOrder = 0
}, THREE.RenderableVertex = function() {
    this.position = new THREE.Vector3, this.positionWorld = new THREE.Vector3, this.positionScreen = new THREE.Vector4, this.visible = !0
}, THREE.RenderableVertex.prototype.copy = function(e) {
    this.positionWorld.copy(e.positionWorld), this.positionScreen.copy(e.positionScreen)
}, THREE.RenderableLine = function() {
    this.id = 0, this.v1 = new THREE.RenderableVertex, this.v2 = new THREE.RenderableVertex, this.vertexColors = [new THREE.Color, new THREE.Color], this.material = null, this.z = 0, this.renderOrder = 0
}, THREE.RenderableSprite = function() {
    this.id = 0, this.object = null, this.x = 0, this.y = 0, this.z = 0, this.rotation = 0, this.scale = new THREE.Vector2, this.material = null, this.renderOrder = 0
}, THREE.Projector = function() {
    function e() {
        if (s === $) {
            var e = new THREE.RenderableObject;
            return m.push(e), $++, s++, e
        }
        return m[s++]
    }

    function t() {
        if (l === y) {
            var e = new THREE.RenderableVertex;
            return b.push(e), y++, l++, e
        }
        return b[l++]
    }

    function n() {
        if (c === _) {
            var e = new THREE.RenderableFace;
            return v.push(e), _++, c++, e
        }
        return v[c++]
    }

    function o() {
        if (g === P) {
            var e = new THREE.RenderableLine;
            return E.push(e), P++, g++, e
        }
        return E[g++]
    }

    function r() {
        if (f === C) {
            var e = new THREE.RenderableSprite;
            return T.push(e), C++, f++, e
        }
        return T[f++]
    }

    function i(e, t) {
        return e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : e.id !== t.id ? e.id - t.id : 0
    }

    function a(e, t) {
        var n = 0,
            o = 1,
            r = e.z + e.w,
            i = t.z + t.w,
            a = -e.z + e.w,
            d = -t.z + t.w;
        return r >= 0 && i >= 0 && a >= 0 && d >= 0 || !(r < 0 && i < 0 || a < 0 && d < 0) && (r < 0 ? n = Math.max(n, r / (r - i)) : i < 0 && (o = Math.min(o, r / (r - i))), a < 0 ? n = Math.max(n, a / (a - d)) : d < 0 && (o = Math.min(o, a / (a - d))), !(o < n) && (e.lerp(t, n), t.lerp(e, 1 - o), !0))
    }
    var d, s, u, l, h, c, p, g, N, f, A, m = [],
        $ = 0,
        b = [],
        y = 0,
        v = [],
        _ = 0,
        E = [],
        P = 0,
        T = [],
        C = 0,
        S = {
            objects: [],
            lights: [],
            elements: []
        },
        O = new THREE.Vector3,
        R = new THREE.Vector4,
        M = new THREE.Box3(new THREE.Vector3((-1), (-1), (-1)), new THREE.Vector3(1, 1, 1)),
        x = new THREE.Box3,
        F = new Array(3),
        w = (new Array(4), new THREE.Matrix4),
        D = new THREE.Matrix4,
        I = new THREE.Matrix4,
        L = new THREE.Matrix3,
        U = new THREE.Frustum,
        V = new THREE.Vector4,
        B = new THREE.Vector4;
    this.projectVector = function(e, t) {
        console.warn("THREE.Projector: .projectVector() is now vector.project()."), e.project(t)
    }, this.unprojectVector = function(e, t) {
        console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."), e.unproject(t)
    }, this.pickingRay = function(e, t) {
        console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
    };
    var k = function() {
            function e(e) {
                m = e, $ = m.material, y.getNormalMatrix(m.matrixWorld), N.length = 0, f.length = 0
            }

            function r(e) {
                var t = e.position,
                    n = e.positionWorld,
                    o = e.positionScreen;
                n.copy(t).applyMatrix4(A), o.copy(n).applyMatrix4(D);
                var r = 1 / o.w;
                o.x *= r, o.y *= r, o.z *= r, e.visible = o.x >= -1 && o.x <= 1 && o.y >= -1 && o.y <= 1 && o.z >= -1 && o.z <= 1
            }

            function i(e, n, o) {
                u = t(), u.position.set(e, n, o), r(u)
            }

            function a(e, t, n) {
                N.push(e, t, n)
            }

            function d(e, t) {
                f.push(e, t)
            }

            function s(e, t, n) {
                return e.visible === !0 || t.visible === !0 || n.visible === !0 || (F[0] = e.positionScreen, F[1] = t.positionScreen, F[2] = n.positionScreen, M.intersectsBox(x.setFromPoints(F)))
            }

            function l(e, t, n) {
                return (n.positionScreen.x - e.positionScreen.x) * (t.positionScreen.y - e.positionScreen.y) - (n.positionScreen.y - e.positionScreen.y) * (t.positionScreen.x - e.positionScreen.x) < 0
            }

            function c(e, t) {
                var n = b[e],
                    r = b[t];
                p = o(), p.id = m.id, p.v1.copy(n), p.v2.copy(r), p.z = (n.positionScreen.z + r.positionScreen.z) / 2, p.renderOrder = m.renderOrder, p.material = m.material, S.elements.push(p)
            }

            function g(e, t, o) {
                var r = b[e],
                    i = b[t],
                    a = b[o];
                if (s(r, i, a) !== !1 && ($.side === THREE.DoubleSide || l(r, i, a) === !0)) {
                    h = n(), h.id = m.id, h.v1.copy(r), h.v2.copy(i), h.v3.copy(a), h.z = (r.positionScreen.z + i.positionScreen.z + a.positionScreen.z) / 3, h.renderOrder = m.renderOrder, h.normalModel.fromArray(N, 3 * e), h.normalModel.applyMatrix3(y).normalize();
                    for (var d = 0; d < 3; d++) {
                        var u = h.vertexNormalsModel[d];
                        u.fromArray(N, 3 * arguments[d]), u.applyMatrix3(y).normalize();
                        var c = h.uvs[d];
                        c.fromArray(f, 2 * arguments[d])
                    }
                    h.vertexNormalsLength = 3, h.material = m.material, S.elements.push(h)
                }
            }
            var N = [],
                f = [],
                m = null,
                $ = null,
                y = new THREE.Matrix3;
            return {
                setObject: e,
                projectVertex: r,
                checkTriangleVisibility: s,
                checkBackfaceCulling: l,
                pushVertex: i,
                pushNormal: a,
                pushUv: d,
                pushLine: c,
                pushTriangle: g
            }
        },
        H = new k;
    this.projectScene = function(u, m, $, y) {
        c = 0, g = 0, f = 0, S.elements.length = 0, u.autoUpdate === !0 && u.updateMatrixWorld(), null === m.parent && m.updateMatrixWorld(), w.copy(m.matrixWorldInverse.getInverse(m.matrixWorld)), D.multiplyMatrices(m.projectionMatrix, w), U.setFromMatrix(D), s = 0, S.objects.length = 0, S.lights.length = 0, u.traverseVisible(function(t) {
            if (t instanceof THREE.Light) S.lights.push(t);
            else if (t instanceof THREE.Mesh || t instanceof THREE.Line || t instanceof THREE.Sprite) {
                var n = t.material;
                if (n.visible === !1) return;
                t.frustumCulled !== !1 && U.intersectsObject(t) !== !0 || (d = e(), d.id = t.id, d.object = t, O.setFromMatrixPosition(t.matrixWorld), O.applyProjection(D), d.z = O.z, d.renderOrder = t.renderOrder, S.objects.push(d))
            }
        }), $ === !0 && S.objects.sort(i);
        for (var v = 0, _ = S.objects.length; v < _; v++) {
            var E = S.objects[v].object,
                P = E.geometry;
            if (H.setObject(E), A = E.matrixWorld, l = 0, E instanceof THREE.Mesh) {
                if (P instanceof THREE.BufferGeometry) {
                    var T = P.attributes,
                        C = P.groups;
                    if (void 0 === T.position) continue;
                    for (var M = T.position.array, x = 0, F = M.length; x < F; x += 3) H.pushVertex(M[x], M[x + 1], M[x + 2]);
                    if (void 0 !== T.normal)
                        for (var k = T.normal.array, x = 0, F = k.length; x < F; x += 3) H.pushNormal(k[x], k[x + 1], k[x + 2]);
                    if (void 0 !== T.uv)
                        for (var G = T.uv.array, x = 0, F = G.length; x < F; x += 2) H.pushUv(G[x], G[x + 1]);
                    if (null !== P.index) {
                        var j = P.index.array;
                        if (C.length > 0)
                            for (var v = 0; v < C.length; v++)
                                for (var z = C[v], x = z.start, F = z.start + z.count; x < F; x += 3) H.pushTriangle(j[x], j[x + 1], j[x + 2]);
                        else
                            for (var x = 0, F = j.length; x < F; x += 3) H.pushTriangle(j[x], j[x + 1], j[x + 2])
                    } else
                        for (var x = 0, F = M.length / 3; x < F; x += 3) H.pushTriangle(x, x + 1, x + 2)
                } else if (P instanceof THREE.Geometry) {
                    var W = P.vertices,
                        q = P.faces,
                        Y = P.faceVertexUvs[0];
                    L.getNormalMatrix(A);
                    for (var X = E.material, K = X instanceof THREE.MultiMaterial, Z = K === !0 ? E.material : null, J = 0, Q = W.length; J < Q; J++) {
                        var ee = W[J];
                        if (O.copy(ee), X.morphTargets === !0)
                            for (var te = P.morphTargets, ne = E.morphTargetInfluences, oe = 0, re = te.length; oe < re; oe++) {
                                var ie = ne[oe];
                                if (0 !== ie) {
                                    var ae = te[oe],
                                        de = ae.vertices[J];
                                    O.x += (de.x - ee.x) * ie, O.y += (de.y - ee.y) * ie, O.z += (de.z - ee.z) * ie
                                }
                            }
                        H.pushVertex(O.x, O.y, O.z)
                    }
                    for (var se = 0, ue = q.length; se < ue; se++) {
                        var le = q[se];
                        if (X = K === !0 ? Z.materials[le.materialIndex] : E.material, void 0 !== X) {
                            var he = X.side,
                                ce = b[le.a],
                                pe = b[le.b],
                                ge = b[le.c];
                            if (H.checkTriangleVisibility(ce, pe, ge) !== !1) {
                                var Ne = H.checkBackfaceCulling(ce, pe, ge);
                                if (he !== THREE.DoubleSide) {
                                    if (he === THREE.FrontSide && Ne === !1) continue;
                                    if (he === THREE.BackSide && Ne === !0) continue
                                }
                                h = n(), h.id = E.id, h.v1.copy(ce), h.v2.copy(pe), h.v3.copy(ge), h.normalModel.copy(le.normal), Ne !== !1 || he !== THREE.BackSide && he !== THREE.DoubleSide || h.normalModel.negate(), h.normalModel.applyMatrix3(L).normalize();
                                for (var fe = le.vertexNormals, Ae = 0, me = Math.min(fe.length, 3); Ae < me; Ae++) {
                                    var $e = h.vertexNormalsModel[Ae];
                                    $e.copy(fe[Ae]), Ne !== !1 || he !== THREE.BackSide && he !== THREE.DoubleSide || $e.negate(), $e.applyMatrix3(L).normalize()
                                }
                                h.vertexNormalsLength = fe.length;
                                var be = Y[se];
                                if (void 0 !== be)
                                    for (var ye = 0; ye < 3; ye++) h.uvs[ye].copy(be[ye]);
                                h.color = le.color, h.material = X, h.z = (ce.positionScreen.z + pe.positionScreen.z + ge.positionScreen.z) / 3, h.renderOrder = E.renderOrder, S.elements.push(h)
                            }
                        }
                    }
                }
            } else if (E instanceof THREE.Line) {
                if (P instanceof THREE.BufferGeometry) {
                    var T = P.attributes;
                    if (void 0 !== T.position) {
                        for (var M = T.position.array, x = 0, F = M.length; x < F; x += 3) H.pushVertex(M[x], M[x + 1], M[x + 2]);
                        if (null !== P.index)
                            for (var j = P.index.array, x = 0, F = j.length; x < F; x += 2) H.pushLine(j[x], j[x + 1]);
                        else
                            for (var ve = E instanceof THREE.LineSegments ? 2 : 1, x = 0, F = M.length / 3 - 1; x < F; x += ve) H.pushLine(x, x + 1)
                    }
                } else if (P instanceof THREE.Geometry) {
                    I.multiplyMatrices(D, A);
                    var W = E.geometry.vertices;
                    if (0 === W.length) continue;
                    ce = t(), ce.positionScreen.copy(W[0]).applyMatrix4(I);
                    for (var ve = E instanceof THREE.LineSegments ? 2 : 1, J = 1, Q = W.length; J < Q; J++) ce = t(), ce.positionScreen.copy(W[J]).applyMatrix4(I), (J + 1) % ve > 0 || (pe = b[l - 2], V.copy(ce.positionScreen), B.copy(pe.positionScreen), a(V, B) === !0 && (V.multiplyScalar(1 / V.w), B.multiplyScalar(1 / B.w), p = o(), p.id = E.id, p.v1.positionScreen.copy(V), p.v2.positionScreen.copy(B), p.z = Math.max(V.z, B.z), p.renderOrder = E.renderOrder, p.material = E.material, E.material.vertexColors === THREE.VertexColors && (p.vertexColors[0].copy(E.geometry.colors[J]), p.vertexColors[1].copy(E.geometry.colors[J - 1])), S.elements.push(p)))
                }
            } else if (E instanceof THREE.Sprite) {
                R.set(A.elements[12], A.elements[13], A.elements[14], 1), R.applyMatrix4(D);
                var _e = 1 / R.w;
                R.z *= _e, R.z >= -1 && R.z <= 1 && (N = r(), N.id = E.id, N.x = R.x * _e, N.y = R.y * _e, N.z = R.z, N.renderOrder = E.renderOrder, N.object = E, N.rotation = E.rotation, N.scale.x = E.scale.x * Math.abs(N.x - (R.x + m.projectionMatrix.elements[0]) / (R.w + m.projectionMatrix.elements[12])), N.scale.y = E.scale.y * Math.abs(N.y - (R.y + m.projectionMatrix.elements[5]) / (R.w + m.projectionMatrix.elements[13])), N.material = E.material, S.elements.push(N))
            }
        }
        return y === !0 && S.elements.sort(i), S
    }
}), require("web/static/js/app");
//# sourceMappingURL=app.js.map
