var CABLES = (function (t) {
    var e = {};
    function i(s) {
      if (e[s]) return e[s].exports;
      var r = (e[s] = { i: s, l: !1, exports: {} });
      return t[s].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
    }
    return (
      (i.m = t),
      (i.c = e),
      (i.d = function (t, e, s) {
        i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s });
      }),
      (i.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (i.t = function (t, e) {
        if ((1 & e && (t = i(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var s = Object.create(null);
        if (
          (i.r(s),
          Object.defineProperty(s, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var r in t)
            i.d(
              s,
              r,
              function (e) {
                return t[e];
              }.bind(null, r)
            );
        return s;
      }),
      (i.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return i.d(e, "a", e), e;
      }),
      (i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (i.p = ""),
      i((i.s = 0))
    );
  })([
    function (t, e, i) {
      t.exports = i(1);
    },
    function (t, e, i) {
      "use strict";
      i.r(e);
      var s = {};
      i.r(s),
        i.d(s, "getShortOpName", function () {
          return _;
        }),
        i.d(s, "shuffleArray", function () {
          return p;
        }),
        i.d(s, "shortId", function () {
          return m;
        }),
        i.d(s, "uuid", function () {
          return T;
        }),
        i.d(s, "generateUUID", function () {
          return A;
        }),
        i.d(s, "simpleId", function () {
          return y;
        }),
        i.d(s, "smoothStep", function () {
          return v;
        }),
        i.d(s, "smootherStep", function () {
          return x;
        }),
        i.d(s, "clamp", function () {
          return I;
        }),
        i.d(s, "map", function () {
          return O;
        }),
        i.d(s, "cacheBust", function () {
          return R;
        }),
        i.d(s, "copyArray", function () {
          return S;
        }),
        i.d(s, "basename", function () {
          return P;
        }),
        i.d(s, "jsonp", function () {
          return F;
        }),
        i.d(s, "ajaxSync", function () {
          return C;
        }),
        i.d(s, "ajax", function () {
          return w;
        }),
        i.d(s, "request", function () {
          return M;
        }),
        i.d(s, "keyCodeToName", function () {
          return U;
        }),
        i.d(s, "UTILS", function () {
          return g;
        });
      var r = {};
      i.r(r),
        i.d(r, "base64Chars", function () {
          return k;
        }),
        i.d(r, "base64lookup", function () {
          return V;
        }),
        i.d(r, "b64encTypesArray", function () {
          return G;
        }),
        i.d(r, "b64decTypedArray", function () {
          return H;
        });
      var n = {};
      i.r(n),
        i.d(n, "easeExpoIn", function () {
          return K;
        }),
        i.d(n, "easeExpoOut", function () {
          return j;
        }),
        i.d(n, "easeExpoInOut", function () {
          return Q;
        }),
        i.d(n, "easeCubicIn", function () {
          return q;
        }),
        i.d(n, "easeCubicOut", function () {
          return J;
        }),
        i.d(n, "easeCubicInOut", function () {
          return Z;
        }),
        i.d(n, "ANIM", function () {
          return X;
        }),
        i.d(n, "Anim", function () {
          return $;
        }),
        i.d(n, "TL", function () {
          return tt;
        });
      var o = {};
      i.r(o),
        i.d(o, "PatchConnectionReceiver", function () {
          return kt;
        }),
        i.d(o, "PatchConnectionSender", function () {
          return Dt;
        }),
        i.d(o, "PatchConnectorBroadcastChannel", function () {
          return Vt;
        });
      class h {
        constructor(t) {
          (this._logs = []), (this.initiator = t);
        }
        stack(t) {
          console.error("[" + this.initiator + "] ", t),
            console.log(new Error().stack),
            window.gui &&
              window.gui.emitEvent("coreLogEvent", this.initiator, "error", t);
        }
        groupCollapsed(t) {
          console.groupCollapsed("[" + this.initiator + "] " + t);
        }
        table(t) {
          console.table(t);
        }
        groupEnd() {
          console.groupEnd();
        }
        error(t) {
          console.error("[" + this.initiator + "]", ...arguments),
            window.gui &&
              window.gui.emitEvent(
                "coreLogEvent",
                this.initiator,
                "error",
                arguments
              );
        }
        info(t) {
          console.error("[" + this.initiator + "]", ...arguments),
            window.gui &&
              window.gui.emitEvent(
                "coreLogEvent",
                this.initiator,
                "info",
                arguments
              );
        }
        warn(t) {
          console.warn("[" + this.initiator + "]", ...arguments),
            window.gui &&
              window.gui.emitEvent(
                "coreLogEvent",
                this.initiator,
                "warn",
                arguments
              );
        }
        verbose() {
          ((CABLES.UI &&
            CABLES.UI.logFilter.shouldPrint(this.initiator, ...arguments)) ||
            !CABLES.logSilent) &&
            console.log("[" + this.initiator + "]", ...arguments),
            window.gui &&
              window.gui.emitEvent(
                "coreLogEvent",
                this.initiator,
                "verbose",
                arguments
              );
        }
        log(t) {
          ((CABLES.UI &&
            CABLES.UI.logFilter.shouldPrint(this.initiator, ...arguments)) ||
            !CABLES.logSilent) &&
            console.log("[" + this.initiator + "]", ...arguments),
            window.gui &&
              window.gui.emitEvent(
                "coreLogEvent",
                this.initiator,
                "log",
                arguments
              );
        }
        userInteraction(t) {}
      }
      const a = {
          EASINGS: [
            "linear",
            "absolute",
            "smoothstep",
            "smootherstep",
            "Cubic In",
            "Cubic Out",
            "Cubic In Out",
            "Expo In",
            "Expo Out",
            "Expo In Out",
            "Sin In",
            "Sin Out",
            "Sin In Out",
            "Quart In",
            "Quart Out",
            "Quart In Out",
            "Quint In",
            "Quint Out",
            "Quint In Out",
            "Back In",
            "Back Out",
            "Back In Out",
            "Elastic In",
            "Elastic Out",
            "Bounce In",
            "Bounce Out",
          ],
          EASING_LINEAR: 0,
          EASING_ABSOLUTE: 1,
          EASING_SMOOTHSTEP: 2,
          EASING_SMOOTHERSTEP: 3,
          EASING_CUBICSPLINE: 4,
          EASING_CUBIC_IN: 5,
          EASING_CUBIC_OUT: 6,
          EASING_CUBIC_INOUT: 7,
          EASING_EXPO_IN: 8,
          EASING_EXPO_OUT: 9,
          EASING_EXPO_INOUT: 10,
          EASING_SIN_IN: 11,
          EASING_SIN_OUT: 12,
          EASING_SIN_INOUT: 13,
          EASING_BACK_IN: 14,
          EASING_BACK_OUT: 15,
          EASING_BACK_INOUT: 16,
          EASING_ELASTIC_IN: 17,
          EASING_ELASTIC_OUT: 18,
          EASING_BOUNCE_IN: 19,
          EASING_BOUNCE_OUT: 21,
          EASING_QUART_IN: 22,
          EASING_QUART_OUT: 23,
          EASING_QUART_INOUT: 24,
          EASING_QUINT_IN: 25,
          EASING_QUINT_OUT: 26,
          EASING_QUINT_INOUT: 27,
        },
        l = {
          OP_PORT_TYPE_VALUE: 0,
          OP_PORT_TYPE_FUNCTION: 1,
          OP_PORT_TYPE_OBJECT: 2,
          OP_PORT_TYPE_TEXTURE: 2,
          OP_PORT_TYPE_ARRAY: 3,
          OP_PORT_TYPE_DYNAMIC: 4,
          OP_PORT_TYPE_STRING: 5,
          OP_VERSION_PREFIX: "_v",
        },
        c = { PORT_DIR_IN: 0, PORT_DIR_OUT: 1 },
        u = {
          PACO_CLEAR: 0,
          PACO_VALUECHANGE: 1,
          PACO_OP_DELETE: 2,
          PACO_UNLINK: 3,
          PACO_LINK: 4,
          PACO_LOAD: 5,
          PACO_OP_CREATE: 6,
          PACO_OP_ENABLE: 7,
          PACO_OP_DISABLE: 8,
          PACO_UIATTRIBS: 9,
          PACO_VARIABLES: 10,
          PACO_TRIGGERS: 11,
          PACO_PORT_SETVARIABLE: 12,
          PACO_PORT_SETANIMATED: 13,
          PACO_PORT_ANIM_UPDATED: 14,
          PACO_DESERIALIZE: 15,
        },
        g = {
          float32Concat: function (t, e) {
            t instanceof Float32Array || (t = new Float32Array(t)),
              e instanceof Float32Array || (e = new Float32Array(e));
            const i = new Float32Array(t.length + e.length);
            return i.set(t), i.set(e, t.length), i;
          },
        },
        _ = function (t) {
          let e = t.split(".")[t.split(".").length - 1];
          if (e.indexOf(l.OP_VERSION_PREFIX) > 0) {
            const t = e.split(l.OP_VERSION_PREFIX)[1];
            e = e.substring(0, e.length - (l.OP_VERSION_PREFIX + t).length);
          }
          return e;
        },
        p = function (t) {
          for (let e = t.length - 1; e > 0; e--) {
            const i = Math.floor(Math.seededRandom() * (e + 1)),
              s = t[e];
            (t[e] = t[i]), (t[i] = s);
          }
          return t;
        },
        d = {},
        f = function () {
          let t = Math.random().toString(36).substr(2, 9);
          return d.hasOwnProperty(t) && (t = f()), (d[t] = !0), t;
        },
        m = f,
        E = function () {
          let t = new Date().getTime();
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
            const i = (t + 16 * Math.random()) % 16 | 0;
            return (
              (t = Math.floor(t / 16)), ("x" == e ? i : (3 & i) | 8).toString(16)
            );
          });
        },
        T = E,
        A = E;
      let b = 0;
      const y = function () {
          return b++, b;
        },
        v = function (t) {
          const e = Math.max(0, Math.min(1, (t - 0) / 1));
          return (t = e * e * (3 - 2 * e));
        },
        x = function (t) {
          const e = Math.max(0, Math.min(1, (t - 0) / 1));
          return (t = e * e * e * (e * (6 * e - 15) + 10));
        },
        I = function (t, e, i) {
          return Math.min(Math.max(t, e), i);
        },
        O = function (t, e, i, s, r, n) {
          if (t >= i) return r;
          if (t <= e) return s;
          let o = !1;
          const h = Math.min(e, i),
            a = Math.max(e, i);
          h != e && (o = !0);
          let l = !1;
          const c = Math.min(s, r),
            u = Math.max(s, r);
          c != s && (l = !0);
          let g = 0,
            _ = 0;
          return (
            (g = o
              ? ((a - t) * (u - c)) / (a - h)
              : ((t - h) * (u - c)) / (a - h)),
            (_ = l ? u - g : g + c),
            n
              ? 1 == n
                ? s +
                  (t = Math.max(0, Math.min(1, (_ - s) / (r - s)))) *
                    t *
                    (3 - 2 * t) *
                    (r - s)
                : 2 == n
                ? s +
                  (t = Math.max(0, Math.min(1, (_ - s) / (r - s)))) *
                    t *
                    t *
                    (t * (6 * t - 15) + 10) *
                    (r - s)
                : _
              : _
          );
        };
      (Math.randomSeed = 1),
        (Math.seededRandom = function (t, e) {
          0 === Math.randomSeed && (Math.randomSeed = 999 * Math.random()),
            (t = t || 1),
            (e = e || 0),
            (Math.randomSeed = (9301 * Math.randomSeed + 49297) % 233280);
          return e + (Math.randomSeed / 233280) * (t - e);
        }),
        (g.arrayWriteToEnd = function (t, e) {
          for (let e = 1; e < t.length; e++) t[e - 1] = t[e];
          t[t.length - 1] = e;
        }),
        (g.isNumeric = function (t) {
          return !isNaN(parseFloat(t)) && isFinite(t);
        }),
        (g.isArray = function (t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        }),
        (String.prototype.endl = function () {
          return this + "\n";
        }),
        (String.prototype.startsWith = function (t) {
          return 0 === this.indexOf(t);
        }),
        (String.prototype.endsWith = function (t) {
          return this.match(t + "$") == t;
        });
      const R = function (t) {
          return (
            t.indexOf("?") > -1 ? (t += "&") : (t += "?"),
            t + "cb=" + CABLES.uuid()
          );
        },
        S = function (t, e) {
          if (!t) return null;
          (e = e || []).length = t.length;
          for (let i = 0; i < t.length; i++) e[i] = t[i];
          return e;
        },
        P = function (t) {
          let e = "";
          if (!t) return "";
          const i = (t + "").split("/");
          if (i.length > 0) {
            let t = i[i.length - 1].split("?");
            (e = t[0]), (t = e.split(".")), (e = t[0]);
          }
          return e;
        };
      let N = null;
      const F = function (t, e) {
          (N = N || 0), N++;
          const i = N;
          CABLES["jsonpFunc" + i] = function (t) {
            e(!1, t);
          };
          let s = "?";
          t.indexOf(s) > -1 && (s = "&");
          const r = document.createElement("script");
          r.setAttribute("src", t + s + "callback=CABLES.jsonpFunc" + i),
            document.body.appendChild(r);
        },
        C = function (t, e, i, s, r) {
          M({ url: t, cb: e, method: i, data: s, contenttype: r, sync: !0 });
        },
        w = function (t, e, i, s, r, n, o = {}) {
          M({
            url: t,
            cb: e,
            method: i,
            data: s,
            contenttype: r,
            sync: !1,
            jsonP: n,
            headers: o,
          });
        },
        M = function (t) {
          let e;
          t.hasOwnProperty("asynch") || (t.asynch = !0);
          try {
            e = new XMLHttpRequest();
          } catch (t) {}
          if (
            ((e.onreadystatechange = function () {
              4 == e.readyState &&
                t.cb &&
                (200 == e.status || 0 == e.status
                  ? t.cb(!1, e.responseText, e)
                  : t.cb(!0, e.responseText, e));
            }),
            e.addEventListener("progress", (t) => {}),
            e.open(t.method ? t.method.toUpperCase() : "GET", t.url, !t.sync),
            "object" == typeof t.headers)
          ) {
            const i = Object.keys(t.headers);
            for (let s = 0; s < i.length; s++) {
              const r = i[s],
                n = t.headers[r];
              e.setRequestHeader(r, n);
            }
          }
          t.post || t.data
            ? (e.setRequestHeader(
                "Content-type",
                t.contenttype
                  ? t.contenttype
                  : "application/x-www-form-urlencoded"
              ),
              e.send(t.data || t.post))
            : e.send();
        },
        U = function (t) {
          if (!t && 0 !== t) return "Unidentified";
          const e = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: "Space",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          };
          return e[t] ? e[t] : String.fromCharCode(t);
        };
      window.performance = window.performance || {
        offset: Date.now(),
        now: function () {
          return Date.now() - this.offset;
        },
      };
      const L = function (t, e) {
        if (!t) throw new Error("no cgl");
        (this._log = new h("cgl_texture")),
          (this._cgl = t),
          (this.tex = this._cgl.gl.createTexture()),
          (this.id = T()),
          (this.width = 0),
          (this.height = 0),
          (this.loading = !1),
          (this.flip = !0),
          (this.flipped = !1),
          (this.shadowMap = !1),
          (this.deleted = !1),
          (this.image = null),
          (this.anisotropic = 0),
          (this.filter = L.FILTER_NEAREST),
          (this.wrap = L.WRAP_CLAMP_TO_EDGE),
          (this.texTarget = this._cgl.gl.TEXTURE_2D),
          e && e.type && (this.texTarget = e.type),
          (this.textureType = L.TYPE_DEFAULT),
          (this.unpackAlpha = !0),
          (this._fromData = !0),
          (this.name = "unknown"),
          e
            ? ((this.name = e.name || this.name),
              e.isDepthTexture && (this.textureType = L.TYPE_DEPTH),
              e.isFloatingPointTexture && (this.textureType = L.TYPE_FLOAT),
              "textureType" in e && (this.textureType = e.textureType),
              "filter" in e && (this.filter = e.filter),
              "wrap" in e && (this.wrap = e.wrap),
              "unpackAlpha" in e && (this.unpackAlpha = e.unpackAlpha),
              "flip" in e && (this.flip = e.flip),
              "shadowMap" in e && (this.shadowMap = e.shadowMap),
              "anisotropic" in e && (this.anisotropic = e.anisotropic))
            : (e = {}),
          e.width || (e.width = 8),
          e.height || (e.height = 8),
          this._cgl.profileData.profileTextureNew++,
          this._cgl.profileData.addHeavyEvent(
            "texture created",
            this.name,
            e.width + "x" + e.height
          ),
          this.setSize(e.width, e.height),
          this.getInfoOneLine();
      };
      (L.prototype.isFloatingPoint = function () {
        return this.textureType == L.TYPE_FLOAT;
      }),
        (L.prototype.compareSettings = function (t) {
          return (
            !!t &&
            t.width == this.width &&
            t.height == this.height &&
            t.filter == this.filter &&
            t.wrap == this.wrap &&
            t.textureType == this.textureType &&
            t.unpackAlpha == this.unpackAlpha &&
            t.anisotropic == this.anisotropic &&
            t.shadowMap == this.shadowMap &&
            t.texTarget == this.texTarget &&
            t.flip == this.flip
          );
        }),
        (L.prototype.clone = function () {
          const t = new L(this._cgl, {
            name: this.name,
            filter: this.filter,
            wrap: this.wrap,
            textureType: this.textureType,
            unpackAlpha: this.unpackAlpha,
            flip: this.flip,
            width: this.width,
            height: this.height,
          });
          return (
            this._cgl.profileData.addHeavyEvent(
              "texture created",
              this.name,
              this.width + "x" + this.height
            ),
            this.compareSettings(t) ||
              (this._log.error("Cloned texture settings do not compare!"),
              this._log.error(this),
              this._log.error(t)),
            t
          );
        }),
        (L.prototype.setSize = function (t, e) {
          if (
            ((t != t || t <= 0 || !t) && (t = 8),
            (e != e || e <= 0 || !e) && (e = 8),
            (t > this._cgl.maxTexSize || e > this._cgl.maxTexSize) &&
              this._log.error(
                "texture size too big! " +
                  t +
                  "x" +
                  e +
                  " / max: " +
                  this._cgl.maxTexSize
              ),
            (t = Math.min(t, this._cgl.maxTexSize)),
            (e = Math.min(e, this._cgl.maxTexSize)),
            (t = Math.floor(t)),
            (e = Math.floor(e)),
            this.width == t && this.height == e)
          )
            return;
          (this.width = t),
            (this.height = e),
            (this.deleted = !1),
            (this.shortInfoString = this.getInfoOneLine()),
            this._cgl.gl.bindTexture(this.texTarget, this.tex),
            this._cgl.profileData.profileTextureResize++;
          if (
            (this._cgl.patch.config.canvas.forceTextureNearest &&
              (this.filter = L.FILTER_NEAREST),
            1 != this._cgl.glVersion ||
              this.textureType != L.TYPE_FLOAT ||
              this.filter != L.FILTER_LINEAR ||
              this._cgl.gl.getExtension("OES_texture_float_linear") ||
              (console.warn(
                "this graphics card does not support floating point texture linear interpolation! using NEAREST"
              ),
              (this.filter = L.FILTER_NEAREST)),
            this.textureType == L.TYPE_FLOAT)
          )
            if (1 == this._cgl.glVersion)
              if (this._cgl.glUseHalfFloatTex) {
                const i = this._cgl.gl.getExtension("OES_texture_half_float");
                this._cgl.gl.getExtension("EXT_color_buffer_half_float");
                if (!i) throw new Error("no half float texture extension");
                this._cgl.gl.texImage2D(
                  this.texTarget,
                  0,
                  this._cgl.gl.RGBA,
                  t,
                  e,
                  0,
                  this._cgl.gl.RGBA,
                  i.HALF_FLOAT_OES,
                  null
                );
              } else
                this._cgl.gl.getExtension("OES_texture_float"),
                  this._cgl.gl.texImage2D(
                    this.texTarget,
                    0,
                    this._cgl.gl.RGBA,
                    t,
                    e,
                    0,
                    this._cgl.gl.RGBA,
                    this._cgl.gl.FLOAT,
                    null
                  );
            else if (this._cgl.glUseHalfFloatTex) {
              if (!this._cgl.gl.getExtension("EXT_color_buffer_half_float"))
                throw new Error("no half float texture extension");
              console.log(
                "half float",
                this._cgl.gl.RGBA16F,
                this._cgl.gl.HALF_FLOAT
              ),
                console.log("half float", this._cgl.gl.HALF_FLOAT),
                console.log("half float", this._cgl.gl.RGBA16F),
                this._cgl.gl.texImage2D(
                  this.texTarget,
                  0,
                  this._cgl.gl.RGBA,
                  t,
                  e,
                  0,
                  this._cgl.gl.RGBA,
                  this._cgl.gl.HALF_FLOAT,
                  null
                );
            } else
              this._cgl.gl.getExtension("EXT_color_buffer_float"),
                this._cgl.gl.getExtension("EXT_color_buffer_float_linear"),
                this._cgl.gl.getExtension("OES_texture_float_linear"),
                this._cgl.gl.texImage2D(
                  this.texTarget,
                  0,
                  this._cgl.gl.RGBA32F,
                  t,
                  e,
                  0,
                  this._cgl.gl.RGBA,
                  this._cgl.gl.FLOAT,
                  null
                );
          else if (this.textureType == L.TYPE_DEPTH)
            if (1 == this._cgl.glVersion) {
              const i = this._cgl.gl.DEPTH_COMPONENT;
              this._cgl.gl.texImage2D(
                this.texTarget,
                0,
                i,
                t,
                e,
                0,
                this._cgl.gl.DEPTH_COMPONENT,
                this._cgl.gl.UNSIGNED_SHORT,
                null
              );
            } else {
              const i = this._cgl.gl.DEPTH_COMPONENT32F;
              this._cgl.gl.texImage2D(
                this.texTarget,
                0,
                i,
                t,
                e,
                0,
                this._cgl.gl.DEPTH_COMPONENT,
                this._cgl.gl.FLOAT,
                null
              );
            }
          else
            this._cgl.gl.texImage2D(
              this.texTarget,
              0,
              this._cgl.gl.RGBA,
              t,
              e,
              0,
              this._cgl.gl.RGBA,
              this._cgl.gl.UNSIGNED_BYTE,
              null
            );
          this._setFilter(),
            this.updateMipMap(),
            this._cgl.gl.bindTexture(this.texTarget, null);
        }),
        (L.prototype.initFromData = function (t, e, i, s, r) {
          if (
            ((this.filter = s),
            (this.wrap = r),
            null == s && (this.filter = L.FILTER_LINEAR),
            null == r && (this.wrap = L.WRAP_CLAMP_TO_EDGE),
            (this.width = e),
            (this.height = i),
            (this._fromData = !0),
            (this.deleted = !1),
            this.height > this._cgl.maxTexSize ||
              this.width > this._cgl.maxTexSize)
          ) {
            const t = CGL.Texture.getTempTexture(this._cgl);
            return (
              (this.width = t.width),
              (this.height = t.height),
              (this.tex = t.tex),
              void this._log.error(
                "[cgl_texture] texture size to big!!!",
                this.width,
                this.height,
                this._cgl.maxTexSize
              )
            );
          }
          this.flip &&
            this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, this.flip),
            this._cgl.gl.bindTexture(this.texTarget, this.tex),
            this.textureType == L.TYPE_FLOAT
              ? this._cgl.gl.texImage2D(
                  this.texTarget,
                  0,
                  this._cgl.gl.RGBA32F,
                  e,
                  i,
                  0,
                  this._cgl.gl.RGBA,
                  this._cgl.gl.FLOAT,
                  t
                )
              : this._cgl.gl.texImage2D(
                  this.texTarget,
                  0,
                  this._cgl.gl.RGBA,
                  e,
                  i,
                  0,
                  this._cgl.gl.RGBA,
                  this._cgl.gl.UNSIGNED_BYTE,
                  t
                ),
            this._setFilter(),
            this.updateMipMap(),
            this.flip &&
              this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, !1),
            this._cgl.gl.bindTexture(this.texTarget, null);
        }),
        (L.prototype.updateMipMap = function () {
          (2 != this._cgl.glVersion && !this.isPowerOfTwo()) ||
            this.filter != L.FILTER_MIPMAP ||
            (this._cgl.gl.generateMipmap(this.texTarget),
            this._cgl.profileData.profileGenMipMap++);
        }),
        (L.prototype.initTexture = function (t, e) {
          if (
            (this._cgl.printError("before initTexture"),
            this._cgl.checkFrameStarted("texture inittexture"),
            (this._fromData = !1),
            this._cgl.gl.pixelStorei(
              this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
              this.unpackAlpha
            ),
            t.width && (this.width = t.width),
            t.height && (this.height = t.height),
            e && (this.filter = e),
            t.height > this._cgl.maxTexSize || t.width > this._cgl.maxTexSize)
          ) {
            const e = CGL.Texture.getTempTexture(this._cgl);
            return (
              (this.width = e.width),
              (this.height = e.height),
              (this.tex = e.tex),
              void this._log.error(
                "[cgl_texture] texture size to big!!!",
                t.width,
                t.height,
                this._cgl.maxTexSize
              )
            );
          }
          this._cgl.gl.bindTexture(this.texTarget, this.tex),
            (this.deleted = !1),
            (this.flipped = !this.flip),
            this.flipped &&
              this._cgl.gl.pixelStorei(
                this._cgl.gl.UNPACK_FLIP_Y_WEBGL,
                this.flipped
              ),
            this._cgl.gl.texImage2D(
              this.texTarget,
              0,
              this._cgl.gl.RGBA,
              this._cgl.gl.RGBA,
              this._cgl.gl.UNSIGNED_BYTE,
              t
            ),
            this._setFilter(),
            this.updateMipMap(),
            this._cgl.gl.bindTexture(this.texTarget, null),
            this._cgl.gl.pixelStorei(
              this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
              !1
            ),
            this.flipped &&
              this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, !1),
            this.getInfoOneLine(),
            this._cgl.printError("initTexture");
        }),
        (L.prototype.delete = function () {
          this.loading ||
            ((this.deleted = !0),
            (this.width = 0),
            (this.height = 0),
            this._cgl.profileData.profileTextureDelete++,
            this._cgl.gl.deleteTexture(this.tex),
            (this.image = null),
            (this.tex = null));
        }),
        (L.prototype.isPowerOfTwo = function () {
          return L.isPowerOfTwo(this.width) && L.isPowerOfTwo(this.height);
        }),
        (L.prototype.printInfo = function () {
          console.log(this.getInfo());
        }),
        (L.prototype.getInfoReadable = function () {
          const t = this.getInfo();
          let e = "";
          t.name = t.name.substr(0, t.name.indexOf("?rnd="));
          for (const i in t) e += "* " + i + ":  **" + t[i] + "**\n";
          return e;
        }),
        (L.prototype.getInfoOneLine = function () {
          let t = this.width + " x " + this.height;
          return (
            this.textureType === CGL.Texture.TYPE_FLOAT
              ? (t += " 32bit")
              : (t += " 8bit"),
            this.filter === CGL.Texture.FILTER_NEAREST && (t += " nearest"),
            this.filter === CGL.Texture.FILTER_LINEAR && (t += " linear"),
            this.filter === CGL.Texture.FILTER_MIPMAP && (t += " mipmap"),
            this.wrap === CGL.Texture.WRAP_CLAMP_TO_EDGE && (t += " clamp"),
            this.wrap === CGL.Texture.WRAP_REPEAT && (t += " repeat"),
            this.wrap === CGL.Texture.WRAP_MIRRORED_REPEAT && (t += " repeatmir"),
            (this.shortInfoString = t),
            t
          );
        }),
        (L.prototype.getInfo = function () {
          const t = {};
          (t.name = this.name),
            (t["power of two"] = this.isPowerOfTwo()),
            (t.size = this.width + " x " + this.height);
          let e = this.texTarget;
          return (
            this.texTarget == this._cgl.gl.TEXTURE_2D && (e = "TEXTURE_2D"),
            (t.target = e),
            (t.unpackAlpha = this.unpackAlpha),
            this.textureType == L.TYPE_FLOAT
              ? (t.textureType = "TYPE_FLOAT")
              : this.textureType == L.TYPE_DEPTH
              ? (t.textureType = "TYPE_DEPTH")
              : this.textureType == L.TYPE_DEFAULT
              ? (t.textureType = "TYPE_DEFAULT")
              : (t.textureType = "UNKNOWN"),
            this.wrap == L.WRAP_CLAMP_TO_EDGE
              ? (t.wrap = "CLAMP_TO_EDGE")
              : this.wrap == L.WRAP_REPEAT
              ? (t.wrap = "WRAP_REPEAT")
              : this.wrap == L.WRAP_MIRRORED_REPEAT
              ? (t.wrap = "WRAP_MIRRORED_REPEAT")
              : (t.wrap = "UNKNOWN"),
            this.filter == L.FILTER_NEAREST
              ? (t.filter = "FILTER_NEAREST")
              : this.filter == L.FILTER_LINEAR
              ? (t.filter = "FILTER_LINEAR")
              : this.filter == L.FILTER_MIPMAP
              ? (t.filter = "FILTER_MIPMAP")
              : (t.filter = "UNKNOWN"),
            t
          );
        }),
        (L.prototype._setFilter = function () {
          if (
            (this._cgl.printError("before _setFilter"),
            this._fromData ||
              this._cgl.gl.pixelStorei(
                this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                this.unpackAlpha
              ),
            this.shadowMap &&
              (this._cgl.gl.texParameteri(
                this._cgl.gl.TEXTURE_2D,
                this._cgl.gl.TEXTURE_COMPARE_MODE,
                this._cgl.gl.COMPARE_REF_TO_TEXTURE
              ),
              this._cgl.gl.texParameteri(
                this._cgl.gl.TEXTURE_2D,
                this._cgl.gl.TEXTURE_COMPARE_FUNC,
                this._cgl.gl.LEQUAL
              )),
            this.textureType == L.TYPE_FLOAT &&
              this.filter == L.FILTER_MIPMAP &&
              ((this.filter = L.FILTER_LINEAR),
              this._log.stack(
                "texture: HDR and mipmap filtering at the same time is not possible"
              )),
            1 != this._cgl.glVersion || this.isPowerOfTwo())
          ) {
            if (
              (this.wrap == L.WRAP_CLAMP_TO_EDGE
                ? (this._cgl.gl.texParameteri(
                    this.texTarget,
                    this._cgl.gl.TEXTURE_WRAP_S,
                    this._cgl.gl.CLAMP_TO_EDGE
                  ),
                  this._cgl.gl.texParameteri(
                    this.texTarget,
                    this._cgl.gl.TEXTURE_WRAP_T,
                    this._cgl.gl.CLAMP_TO_EDGE
                  ))
                : this.wrap == L.WRAP_REPEAT
                ? (this._cgl.gl.texParameteri(
                    this.texTarget,
                    this._cgl.gl.TEXTURE_WRAP_S,
                    this._cgl.gl.REPEAT
                  ),
                  this._cgl.gl.texParameteri(
                    this.texTarget,
                    this._cgl.gl.TEXTURE_WRAP_T,
                    this._cgl.gl.REPEAT
                  ))
                : this.wrap == L.WRAP_MIRRORED_REPEAT &&
                  (this._cgl.gl.texParameteri(
                    this.texTarget,
                    this._cgl.gl.TEXTURE_WRAP_S,
                    this._cgl.gl.MIRRORED_REPEAT
                  ),
                  this._cgl.gl.texParameteri(
                    this.texTarget,
                    this._cgl.gl.TEXTURE_WRAP_T,
                    this._cgl.gl.MIRRORED_REPEAT
                  )),
              this.filter == L.FILTER_NEAREST)
            )
              this._cgl.gl.texParameteri(
                this.texTarget,
                this._cgl.gl.TEXTURE_MAG_FILTER,
                this._cgl.gl.NEAREST
              ),
                this._cgl.gl.texParameteri(
                  this.texTarget,
                  this._cgl.gl.TEXTURE_MIN_FILTER,
                  this._cgl.gl.NEAREST
                );
            else if (this.filter == L.FILTER_LINEAR)
              this._cgl.gl.texParameteri(
                this.texTarget,
                this._cgl.gl.TEXTURE_MIN_FILTER,
                this._cgl.gl.LINEAR
              ),
                this._cgl.gl.texParameteri(
                  this.texTarget,
                  this._cgl.gl.TEXTURE_MAG_FILTER,
                  this._cgl.gl.LINEAR
                );
            else {
              if (this.filter != L.FILTER_MIPMAP)
                throw (
                  (this._log.log("unknown texture filter!", this.filter),
                  new Error("unknown texture filter!" + this.filter))
                );
              this._cgl.gl.texParameteri(
                this.texTarget,
                this._cgl.gl.TEXTURE_MAG_FILTER,
                this._cgl.gl.LINEAR
              ),
                this._cgl.gl.texParameteri(
                  this.texTarget,
                  this._cgl.gl.TEXTURE_MIN_FILTER,
                  this._cgl.gl.LINEAR_MIPMAP_LINEAR
                );
            }
            if (this.anisotropic) {
              const t = this._cgl.gl.getExtension(
                "EXT_texture_filter_anisotropic"
              );
              if (t) {
                const e = this._cgl.gl.getParameter(
                  t.MAX_TEXTURE_MAX_ANISOTROPY_EXT
                );
                this._cgl.gl.texParameterf(
                  this._cgl.gl.TEXTURE_2D,
                  t.TEXTURE_MAX_ANISOTROPY_EXT,
                  Math.min(e, this.anisotropic)
                );
              }
            }
          } else
            this._cgl.gl.texParameteri(
              this.texTarget,
              this._cgl.gl.TEXTURE_MAG_FILTER,
              this._cgl.gl.NEAREST
            ),
              this._cgl.gl.texParameteri(
                this.texTarget,
                this._cgl.gl.TEXTURE_MIN_FILTER,
                this._cgl.gl.NEAREST
              ),
              this._cgl.gl.texParameteri(
                this.texTarget,
                this._cgl.gl.TEXTURE_WRAP_S,
                this._cgl.gl.CLAMP_TO_EDGE
              ),
              this._cgl.gl.texParameteri(
                this.texTarget,
                this._cgl.gl.TEXTURE_WRAP_T,
                this._cgl.gl.CLAMP_TO_EDGE
              ),
              (this.filter = L.FILTER_NEAREST),
              (this.wrap = L.WRAP_CLAMP_TO_EDGE);
          this.getInfoOneLine(), this._cgl.printError("_setFilter");
        }),
        (L.load = function (t, e, i, s) {
          if (!e) return i({ error: !0 });
          let r = null;
          t.patch.loading.existByName(e) ||
            (r = t.patch.loading.start("texture", e));
          const n = new L(t);
          return (
            (n.name = e),
            t.patch.isEditorMode() &&
              gui
                .jobs()
                .start({
                  id: "loadtexture" + r,
                  title: "loading texture " + CABLES.basename(e),
                }),
            (n.image = new Image()),
            (n.image.crossOrigin = "anonymous"),
            (n.loading = !0),
            s && s.hasOwnProperty("filter") && (n.filter = s.filter),
            s && s.hasOwnProperty("flip") && (n.flip = s.flip),
            s && s.hasOwnProperty("wrap") && (n.wrap = s.wrap),
            s &&
              s.hasOwnProperty("anisotropic") &&
              (n.anisotropic = s.anisotropic),
            s &&
              s.hasOwnProperty("unpackAlpha") &&
              (n.unpackAlpha = s.unpackAlpha),
            (n.image.onabort = n.image.onerror =
              (s) => {
                console.warn("[cgl.texture.load] error loading texture", e, s),
                  (n.loading = !1),
                  r && t.patch.loading.finished(r);
                i && i({ error: !0 }, n),
                  t.patch.isEditorMode() && gui.jobs().finish("loadtexture" + r);
              }),
            (n.image.onload = function (e) {
              t.addNextFrameOnceCallback(() => {
                n.initTexture(n.image),
                  r && t.patch.loading.finished(r),
                  (n.loading = !1),
                  t.patch.isEditorMode() && gui.jobs().finish("loadtexture" + r),
                  i && i(null, n);
              });
            }),
            (n.image.src = e),
            n
          );
        }),
        (L.getTempTexture = function (t) {
          return (
            t || console.error("[getTempTexture] no cgl!"),
            t.tempTexture ||
              (t.tempTexture = L.getTemporaryTexture(
                t,
                256,
                L.FILTER_LINEAR,
                L.REPEAT
              )),
            t.tempTexture
          );
        }),
        (L.getEmptyTexture = function (t, e) {
          if (e) return L.getEmptyTextureFloat(t);
          if (
            (t || console.error("[getEmptyTexture] no cgl!"), t.tempTextureEmpty)
          )
            return t.tempTextureEmpty;
          t.tempTextureEmpty = new L(t, { name: "emptyTexture" });
          const i = new Uint8Array(256).fill(0);
          for (let t = 0; t < 256; t += 4) i[t + 3] = 0;
          return (
            t.tempTextureEmpty.initFromData(
              i,
              8,
              8,
              L.FILTER_NEAREST,
              L.WRAP_REPEAT
            ),
            t.tempTextureEmpty
          );
        }),
        (L.getEmptyTextureFloat = function (t) {
          if (
            (t || console.error("[getEmptyTextureFloat] no cgl!"),
            t.tempTextureEmptyFloat)
          )
            return t.tempTextureEmptyFloat;
          t.tempTextureEmptyFloat = new L(t, {
            name: "emptyTexture",
            isFloatingPointTexture: !0,
          });
          const e = new Float32Array(256).fill(1);
          for (let t = 0; t < 256; t += 4) e[t + 3] = 0;
          return (
            t.tempTextureEmptyFloat.initFromData(
              e,
              8,
              8,
              L.FILTER_NEAREST,
              L.WRAP_REPEAT
            ),
            t.tempTextureEmptyFloat
          );
        }),
        (L.getRandomTexture = function (t) {
          if ((t || console.error("[getRandomTexture] no cgl!"), t.randomTexture))
            return t.randomTexture;
          const e = new Uint8Array(262144);
          for (let t = 0; t < 65536; t++)
            (e[4 * t + 0] = 255 * Math.random()),
              (e[4 * t + 1] = 255 * Math.random()),
              (e[4 * t + 2] = 255 * Math.random()),
              (e[4 * t + 3] = 255);
          return (
            (t.randomTexture = new L(t)),
            t.randomTexture.initFromData(
              e,
              256,
              256,
              L.FILTER_NEAREST,
              L.WRAP_REPEAT
            ),
            t.randomTexture
          );
        }),
        (L.getBlackTexture = function (t) {
          if ((t || this._log.error("[getBlackTexture] no cgl!"), t.blackTexture))
            return t.blackTexture;
          const e = new Uint8Array(256);
          for (let t = 0; t < 64; t++)
            (e[4 * t + 0] = e[4 * t + 1] = e[4 * t + 2] = 0),
              (e[4 * t + 3] = 255);
          return (
            (t.blackTexture = new L(t)),
            t.blackTexture.initFromData(e, 8, 8, L.FILTER_NEAREST, L.WRAP_REPEAT),
            t.blackTexture
          );
        }),
        (L.getEmptyCubemapTexture = function (t) {
          const e = [
              t.gl.TEXTURE_CUBE_MAP_POSITIVE_X,
              t.gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
              t.gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
              t.gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
              t.gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
              t.gl.TEXTURE_CUBE_MAP_NEGATIVE_Z,
            ],
            i = t.gl.createTexture(),
            s = t.gl.TEXTURE_CUBE_MAP,
            r = L.FILTER_NEAREST,
            n = L.WRAP_CLAMP_TO_EDGE;
          t.profileData.profileTextureNew++,
            t.gl.bindTexture(s, i),
            t.profileData.profileTextureResize++;
          for (let i = 0; i < 6; i += 1) {
            const r = new Uint8Array(256);
            t.gl.texImage2D(
              e[i],
              0,
              t.gl.RGBA,
              8,
              8,
              0,
              t.gl.RGBA,
              t.gl.UNSIGNED_BYTE,
              r
            ),
              t.gl.texParameteri(s, t.gl.TEXTURE_MAG_FILTER, t.gl.NEAREST),
              t.gl.texParameteri(s, t.gl.TEXTURE_MIN_FILTER, t.gl.NEAREST),
              t.gl.texParameteri(s, t.gl.TEXTURE_WRAP_S, t.gl.CLAMP_TO_EDGE),
              t.gl.texParameteri(s, t.gl.TEXTURE_WRAP_T, t.gl.CLAMP_TO_EDGE);
          }
          return (
            t.gl.bindTexture(s, null),
            {
              id: CABLES.uuid(),
              tex: i,
              cubemap: i,
              width: 8,
              height: 8,
              filter: r,
              wrap: n,
              unpackAlpha: !0,
              flip: !0,
              _fromData: !0,
              name: "emptyCubemapTexture",
              anisotropic: 0,
            }
          );
        }),
        (L.getTempGradientTexture = function (t) {
          if (
            (t || console.error("[getTempGradientTexture] no cgl!"),
            t.tempTextureGradient)
          )
            return t.tempTextureGradient;
          const e = new L(t),
            i = new Uint8Array(262144);
          for (let t = 0; t < 256; t++)
            for (let e = 0; e < 256; e++)
              (i[4 * (e + 256 * t) + 0] =
                i[4 * (e + 256 * t) + 1] =
                i[4 * (e + 256 * t) + 2] =
                  255 - t),
                (i[4 * (e + 256 * t) + 3] = 255);
          return (
            e.initFromData(i, 256, 256, L.FILTER_NEAREST, L.WRAP_REPEAT),
            (t.tempTextureGradient = e),
            e
          );
        }),
        (L.getTemporaryTexture = function (t, e, i, s) {
          const r = new L(t),
            n = [];
          for (let t = 0; t < e; t++)
            for (let i = 0; i < e; i++)
              (i + t) % 64 < 32
                ? (n.push(200 + (t / e) * 25 + (i / e) * 25),
                  n.push(200 + (t / e) * 25 + (i / e) * 25),
                  n.push(200 + (t / e) * 25 + (i / e) * 25))
                : (n.push(40 + (t / e) * 25 + (i / e) * 25),
                  n.push(40 + (t / e) * 25 + (i / e) * 25),
                  n.push(40 + (t / e) * 25 + (i / e) * 25)),
                n.push(255);
          const o = new Uint8Array(n);
          return r.initFromData(o, e, e, i, s), r;
        }),
        (L.createFromImage = function (t, e, i) {
          const s = new L(t, (i = i || {}));
          return (
            (s.flip = !1),
            (s.image = e),
            (s.width = e.width),
            (s.height = e.height),
            s.initTexture(e, i.filter),
            s
          );
        }),
        (L.fromImage = function (t, e, i, s) {
          console.error("deprecated texture from image...");
          const r = new L(t);
          return (
            (r.flip = !1),
            i && (r.filter = i),
            s && (r.wrap = s),
            (r.image = e),
            r.initTexture(e),
            r
          );
        }),
        (L.isPowerOfTwo = function (t) {
          return (
            1 == t ||
            2 == t ||
            4 == t ||
            8 == t ||
            16 == t ||
            32 == t ||
            64 == t ||
            128 == t ||
            256 == t ||
            512 == t ||
            1024 == t ||
            2048 == t ||
            4096 == t ||
            8192 == t ||
            16384 == t
          );
        }),
        (L.FILTER_NEAREST = 0),
        (L.FILTER_LINEAR = 1),
        (L.FILTER_MIPMAP = 2),
        (L.WRAP_REPEAT = 0),
        (L.WRAP_MIRRORED_REPEAT = 1),
        (L.WRAP_CLAMP_TO_EDGE = 2),
        (L.TYPE_DEFAULT = 0),
        (L.TYPE_DEPTH = 1),
        (L.TYPE_FLOAT = 2),
        (L.PFORMATSTR_RGBA32F = "RGBA 32bit float"),
        (L.PFORMATSTR_RGBA8UB = "RGBA 8bit ubyte"),
        (L.PIXELFORMATS = [L.PFORMATSTR_RGBA8UB, L.PFORMATSTR_RGBA32F]);
      const B = function (t, e, i, s) {
        (this._log = new h("cgl_framebuffer2")),
          (this.Framebuffer2DrawTargetsDefault = null),
          (this.Framebuffer2BlittingFramebuffer = null),
          (this.Framebuffer2FinalFramebuffer = null),
          (this._cgl = t),
          this._cgl.printError("before framebuffer2 constructor"),
          (this._width = 0),
          (this._height = 0),
          (this._depthRenderbuffer = null),
          (this._frameBuffer = null),
          (this._textureFrameBuffer = null),
          (this._colorRenderbuffers = []),
          (this._drawTargetArray = []),
          this.Framebuffer2BlittingFramebuffer ||
            (this.Framebuffer2BlittingFramebuffer = t.gl.createFramebuffer()),
          this.Framebuffer2FinalFramebuffer ||
            (this.Framebuffer2FinalFramebuffer = t.gl.createFramebuffer()),
          this.Framebuffer2DrawTargetsDefault ||
            (this.Framebuffer2DrawTargetsDefault = [t.gl.COLOR_ATTACHMENT0]),
          (this._options = s || { isFloatingPointTexture: !1 }),
          (this.name = this._options.name || "unknown"),
          this._cgl.profileData.addHeavyEvent("framebuffer create", this.name),
          this._options.hasOwnProperty("numRenderBuffers") ||
            (this._options.numRenderBuffers = 1),
          this._options.hasOwnProperty("depth") || (this._options.depth = !0),
          this._options.hasOwnProperty("clear") || (this._options.clear = !0),
          this._options.hasOwnProperty("multisampling") ||
            ((this._options.multisampling = !1),
            (this._options.multisamplingSamples = 0)),
          this._options.multisamplingSamples &&
            (this._cgl.glSlowRenderer && (this._options.multisamplingSamples = 0),
            this._cgl.gl.MAX_SAMPLES
              ? (this._options.multisamplingSamples = Math.min(
                  this._cgl.maxSamples,
                  this._options.multisamplingSamples
                ))
              : (this._options.multisamplingSamples = 0)),
          this._options.hasOwnProperty("filter") ||
            (this._options.filter = L.FILTER_LINEAR),
          this._options.hasOwnProperty("wrap") ||
            (this._options.wrap = L.WRAP_REPEAT),
          (this._numRenderBuffers = this._options.numRenderBuffers),
          (this._colorTextures = []);
        for (let e = 0; e < this._numRenderBuffers; e++)
          this._colorTextures[e] = new L(t, {
            name: "fb2 " + this.name + " " + e,
            isFloatingPointTexture: this._options.isFloatingPointTexture,
            filter: this._options.filter,
            wrap: this._options.wrap,
          });
        let r = L.FILTER_NEAREST;
        this._options.shadowMap && (r = L.FILTER_LINEAR);
        this._options.depth &&
          (this._textureDepth = new L(t, {
            name: "fb2 depth " + this.name,
            isDepthTexture: !0,
            filter: r,
            shadowMap: this._options.shadowMap || !1,
            width: e || 512,
            height: i || 512,
          })),
          t.aborted ||
            (this.setSize(e || 512, i || 512),
            this._cgl.printError("framebuffer2 constructor"));
      };
      (B.prototype.getWidth = function () {
        return this._width;
      }),
        (B.prototype.getHeight = function () {
          return this._height;
        }),
        (B.prototype.getGlFrameBuffer = function () {
          return this._frameBuffer;
        }),
        (B.prototype.getDepthRenderBuffer = function () {
          return this._depthRenderbuffer;
        }),
        (B.prototype.getTextureColor = function () {
          return this._colorTextures[0];
        }),
        (B.prototype.getTextureColorNum = function (t) {
          return this._colorTextures[t];
        }),
        (B.prototype.getTextureDepth = function () {
          return this._textureDepth;
        }),
        (B.prototype.setFilter = function (t) {
          for (let e = 0; e < this._numRenderBuffers; e++)
            (this._colorTextures[e].filter = t),
              this._colorTextures[e].setSize(this._width, this._height);
        }),
        (B.prototype.delete = B.prototype.dispose =
          function () {
            let t = 0;
            for (t = 0; t < this._numRenderBuffers; t++)
              this._colorTextures[t].delete();
            for (
              this._textureDepth && this._textureDepth.delete(), t = 0;
              t < this._numRenderBuffers;
              t++
            )
              this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffers[t]);
            this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer),
              this._cgl.gl.deleteFramebuffer(this._frameBuffer),
              this._cgl.gl.deleteFramebuffer(this._textureFrameBuffer);
          }),
        (B.prototype.setSize = function (t, e) {
          this._cgl.profileData.addHeavyEvent("framebuffer resize", this.name);
          let i = 0;
          if (
            ((this._width = Math.floor(t)),
            (this._height = Math.floor(e)),
            (this._width = Math.min(this._width, this._cgl.maxTexSize)),
            (this._height = Math.min(this._height, this._cgl.maxTexSize)),
            this._cgl.profileData.profileFrameBuffercreate++,
            this._frameBuffer)
          ) {
            for (i = 0; i < this._numRenderBuffers; i++)
              this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffers[i]);
            this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer),
              this._cgl.gl.deleteFramebuffer(this._frameBuffer),
              this._cgl.gl.deleteFramebuffer(this._textureFrameBuffer);
          }
          (this._frameBuffer = this._cgl.gl.createFramebuffer()),
            (this._textureFrameBuffer = this._cgl.gl.createFramebuffer());
          const s = this._options.depth;
          for (i = 0; i < this._numRenderBuffers; i++)
            this._colorTextures[i].setSize(this._width, this._height);
          for (i = 0; i < this._numRenderBuffers; i++) {
            const t = this._cgl.gl.createRenderbuffer();
            this._cgl.gl.getExtension("EXT_color_buffer_float");
            if (
              (this._cgl.gl.bindFramebuffer(
                this._cgl.gl.FRAMEBUFFER,
                this._frameBuffer
              ),
              this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, t),
              this._options.isFloatingPointTexture)
            ) {
              this._cgl.gl.getExtension("EXT_color_buffer_float"),
                this._cgl.gl.getExtension("EXT_color_buffer_float_linear"),
                this._cgl.gl.getExtension("OES_texture_float_linear");
              if (
                this._options.multisampling &&
                this._options.multisamplingSamples
              )
                this._cgl.gl.renderbufferStorageMultisample(
                  this._cgl.gl.RENDERBUFFER,
                  this._options.multisamplingSamples,
                  this._cgl.gl.RGBA32F,
                  this._width,
                  this._height
                );
              else {
                let t = this._cgl.gl.RGBA32F;
                this._cgl._isSafariCrap && (t = this._cgl.gl.RGBA16F),
                  this._cgl.gl.renderbufferStorage(
                    this._cgl.gl.RENDERBUFFER,
                    t,
                    this._width,
                    this._height
                  );
              }
            } else
              this._options.multisampling && this._options.multisamplingSamples
                ? this._cgl.gl.renderbufferStorageMultisample(
                    this._cgl.gl.RENDERBUFFER,
                    this._options.multisamplingSamples,
                    this._cgl.gl.RGBA8,
                    this._width,
                    this._height
                  )
                : this._cgl.gl.renderbufferStorage(
                    this._cgl.gl.RENDERBUFFER,
                    this._cgl.gl.RGBA8,
                    this._width,
                    this._height
                  );
            this._cgl.gl.framebufferRenderbuffer(
              this._cgl.gl.FRAMEBUFFER,
              this._cgl.gl.COLOR_ATTACHMENT0 + i,
              this._cgl.gl.RENDERBUFFER,
              t
            ),
              (this._colorRenderbuffers[i] = t);
          }
          for (
            this._cgl.gl.bindFramebuffer(
              this._cgl.gl.FRAMEBUFFER,
              this._textureFrameBuffer
            ),
              i = 0;
            i < this._numRenderBuffers;
            i++
          )
            this._cgl.gl.framebufferTexture2D(
              this._cgl.gl.FRAMEBUFFER,
              this._cgl.gl.COLOR_ATTACHMENT0 + i,
              this._cgl.gl.TEXTURE_2D,
              this._colorTextures[i].tex,
              0
            );
          this._options.depth &&
            this._cgl.gl.framebufferTexture2D(
              this._cgl.gl.FRAMEBUFFER,
              this._cgl.gl.DEPTH_ATTACHMENT,
              this._cgl.gl.TEXTURE_2D,
              this._textureDepth.tex,
              0
            ),
            this._cgl.gl.bindFramebuffer(
              this._cgl.gl.FRAMEBUFFER,
              this._frameBuffer
            );
          let r = this._cgl.gl.DEPTH_COMPONENT32F;
          for (
            this._cgl.glSlowRenderer && (r = this._cgl.gl.DEPTH_COMPONENT16),
              s &&
                (this._textureDepth.setSize(this._width, this._height),
                (this._depthRenderbuffer = this._cgl.gl.createRenderbuffer()),
                this._cgl.gl.bindRenderbuffer(
                  this._cgl.gl.RENDERBUFFER,
                  this._depthRenderbuffer
                ),
                this._options.isFloatingPointTexture,
                this._options.multisampling
                  ? this._cgl.gl.renderbufferStorageMultisample(
                      this._cgl.gl.RENDERBUFFER,
                      this._options.multisamplingSamples,
                      r,
                      this._width,
                      this._height
                    )
                  : this._cgl.gl.renderbufferStorage(
                      this._cgl.gl.RENDERBUFFER,
                      r,
                      this._width,
                      this._height
                    ),
                this._cgl.gl.framebufferRenderbuffer(
                  this._cgl.gl.FRAMEBUFFER,
                  this._cgl.gl.DEPTH_ATTACHMENT,
                  this._cgl.gl.RENDERBUFFER,
                  this._depthRenderbuffer
                )),
              this._drawTargetArray.length = 0,
              i = 0;
            i < this._numRenderBuffers;
            i++
          )
            this._drawTargetArray.push(this._cgl.gl.COLOR_ATTACHMENT0 + i);
          this._cgl.gl.isFramebuffer(this._textureFrameBuffer) ||
            this._this._log.warn("invalid framebuffer");
          const n = this._cgl.gl.checkFramebufferStatus(this._cgl.gl.FRAMEBUFFER);
          if (n != this._cgl.gl.FRAMEBUFFER_COMPLETE)
            switch (
              (this._log.error("framebuffer incomplete: " + this.name, this), n)
            ) {
              case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
                throw (
                  (this._log.warn("FRAMEBUFFER_INCOMPLETE_ATTACHMENT...", this),
                  new Error(
                    "Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT"
                  ))
                );
              case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
                throw (
                  (this._log.warn("FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT"),
                  new Error(
                    "Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT"
                  ))
                );
              case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
                throw (
                  (this._log.warn("FRAMEBUFFER_INCOMPLETE_DIMENSIONS"),
                  new Error(
                    "Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS"
                  ))
                );
              case this._cgl.gl.FRAMEBUFFER_UNSUPPORTED:
                throw (
                  (this._log.warn("FRAMEBUFFER_UNSUPPORTED"),
                  new Error("Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED"))
                );
              default:
                throw (
                  (this._log.warn("incomplete framebuffer", n),
                  new Error("Incomplete framebuffer: " + n))
                );
            }
          this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null),
            this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null);
        }),
        (B.prototype.renderStart = function () {
          this._cgl.checkFrameStarted("fb2 renderstart"),
            this._cgl.pushModelMatrix(),
            this._cgl.gl.bindFramebuffer(
              this._cgl.gl.FRAMEBUFFER,
              this._frameBuffer
            ),
            this._cgl.pushGlFrameBuffer(this._frameBuffer),
            this._cgl.pushFrameBuffer(this),
            this._cgl.pushPMatrix(),
            this._cgl.gl.viewport(0, 0, this._width, this._height),
            this._cgl.gl.drawBuffers(this._drawTargetArray),
            this._options.clear &&
              (this._cgl.gl.clearColor(0, 0, 0, 0),
              this._cgl.gl.clear(
                this._cgl.gl.COLOR_BUFFER_BIT | this._cgl.gl.DEPTH_BUFFER_BIT
              ));
        }),
        (B.prototype.renderEnd = function () {
          if (
            (this._cgl.popPMatrix(),
            this._cgl.profileData.profileFramebuffer++,
            this._numRenderBuffers <= 1)
          )
            this._cgl.gl.bindFramebuffer(
              this._cgl.gl.READ_FRAMEBUFFER,
              this._frameBuffer
            ),
              this._cgl.gl.bindFramebuffer(
                this._cgl.gl.DRAW_FRAMEBUFFER,
                this._textureFrameBuffer
              ),
              this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, 0, [0, 0, 0, 1]),
              this._cgl.gl.blitFramebuffer(
                0,
                0,
                this._width,
                this._height,
                0,
                0,
                this._width,
                this._height,
                this._cgl.gl.COLOR_BUFFER_BIT | this._cgl.gl.DEPTH_BUFFER_BIT,
                this._cgl.gl.NEAREST
              );
          else {
            this._cgl.gl.bindFramebuffer(
              this._cgl.gl.FRAMEBUFFER,
              this.Framebuffer2BlittingFramebuffer
            ),
              this._cgl.gl.framebufferRenderbuffer(
                this._cgl.gl.FRAMEBUFFER,
                this._cgl.gl.DEPTH_ATTACHMENT,
                this._cgl.gl.RENDERBUFFER,
                this._depthRenderbuffer
              ),
              this._cgl.gl.bindFramebuffer(
                this._cgl.gl.FRAMEBUFFER,
                this.Framebuffer2FinalFramebuffer
              ),
              this._cgl.gl.framebufferTexture2D(
                this._cgl.gl.FRAMEBUFFER,
                this._cgl.gl.DEPTH_ATTACHMENT,
                this._cgl.gl.TEXTURE_2D,
                this._textureDepth.tex,
                0
              );
            for (let t = 0; t < this._numRenderBuffers; t++) {
              this._cgl.gl.bindFramebuffer(
                this._cgl.gl.FRAMEBUFFER,
                this.Framebuffer2BlittingFramebuffer
              ),
                this._cgl.gl.framebufferRenderbuffer(
                  this._cgl.gl.FRAMEBUFFER,
                  this._cgl.gl.COLOR_ATTACHMENT0,
                  this._cgl.gl.RENDERBUFFER,
                  this._colorRenderbuffers[t]
                ),
                this._cgl.gl.bindFramebuffer(
                  this._cgl.gl.FRAMEBUFFER,
                  this.Framebuffer2FinalFramebuffer
                ),
                this._cgl.gl.framebufferTexture2D(
                  this._cgl.gl.FRAMEBUFFER,
                  this._cgl.gl.COLOR_ATTACHMENT0,
                  this._cgl.gl.TEXTURE_2D,
                  this._colorTextures[t].tex,
                  0
                ),
                this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null),
                this._cgl.gl.bindFramebuffer(
                  this._cgl.gl.READ_FRAMEBUFFER,
                  this.Framebuffer2BlittingFramebuffer
                ),
                this._cgl.gl.bindFramebuffer(
                  this._cgl.gl.DRAW_FRAMEBUFFER,
                  this.Framebuffer2FinalFramebuffer
                ),
                this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, 0, [0, 0, 0, 1]);
              let e = this._cgl.gl.COLOR_BUFFER_BIT;
              0 == t && (e |= this._cgl.gl.DEPTH_BUFFER_BIT),
                this._cgl.gl.blitFramebuffer(
                  0,
                  0,
                  this._width,
                  this._height,
                  0,
                  0,
                  this._width,
                  this._height,
                  e,
                  this._cgl.gl.NEAREST
                );
            }
          }
          if (
            (this._cgl.gl.bindFramebuffer(
              this._cgl.gl.FRAMEBUFFER,
              this._cgl.popGlFrameBuffer()
            ),
            this._cgl.popFrameBuffer(),
            this._cgl.popModelMatrix(),
            this._cgl.resetViewPort(),
            this._colorTextures[0].filter == L.FILTER_MIPMAP)
          )
            for (let t = 0; t < this._numRenderBuffers; t++)
              this._cgl.gl.bindTexture(
                this._cgl.gl.TEXTURE_2D,
                this._colorTextures[t].tex
              ),
                this._colorTextures[t].updateMipMap(),
                this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null);
        });
      const k =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        D = new Uint8Array(256);
      for (let t = 0; t < k.length; t++) D[k.charCodeAt(t)] = t;
      const V = D,
        G = function (t) {
          t.buffer && (t = t.buffer);
          let e,
            i = new Uint8Array(t),
            s = i.length,
            r = "";
          for (e = 0; e < s; e += 3)
            (r += k[i[e] >> 2]),
              (r += k[((3 & i[e]) << 4) | (i[e + 1] >> 4)]),
              (r += k[((15 & i[e + 1]) << 2) | (i[e + 2] >> 6)]),
              (r += k[63 & i[e + 2]]);
          return (
            s % 3 == 2
              ? (r = r.substring(0, r.length - 1) + "=")
              : s % 3 == 1 && (r = r.substring(0, r.length - 2) + "=="),
            r
          );
        },
        H = function (t) {
          let e,
            i,
            s,
            r,
            n,
            o = 0.75 * t.length,
            h = t.length,
            a = 0;
          "=" === t[t.length - 1] && (o--, "=" === t[t.length - 2] && o--);
          let l = new ArrayBuffer(o),
            c = new Uint8Array(l);
          for (e = 0; e < h; e += 4)
            (i = V[t.charCodeAt(e)]),
              (s = V[t.charCodeAt(e + 1)]),
              (r = V[t.charCodeAt(e + 2)]),
              (n = V[t.charCodeAt(e + 3)]),
              (c[a++] = (i << 2) | (s >> 4)),
              (c[a++] = ((15 & s) << 4) | (r >> 2)),
              (c[a++] = ((3 & r) << 6) | (63 & n));
          return l;
        };
      class z {
        constructor(t) {
          this._init(),
            (this._first = !0),
            (this._wireMesh = null),
            t && this.apply(t);
        }
        _init() {
          (this._max = [-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE]),
            (this._min = [Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE]),
            (this._center = [0, 0, 0]),
            (this._size = [0, 0, 0]),
            (this._maxAxis = 0),
            (this._first = !0);
        }
        get maxAxis() {
          return this._maxAxis || 1;
        }
        get size() {
          return this._size;
        }
        get center() {
          return this._center;
        }
        get x() {
          return this._center[0];
        }
        get y() {
          return this._center[1];
        }
        get z() {
          return this._center[2];
        }
        get minX() {
          return this._min[0];
        }
        get minY() {
          return this._min[1];
        }
        get minZ() {
          return this._min[2];
        }
        get maxX() {
          return this._max[0];
        }
        get maxY() {
          return this._max[1];
        }
        get maxZ() {
          return this._max[2];
        }
        apply(t, e) {
          if (t) {
            if (t instanceof z) {
              const e = t;
              this.applyPos(e.maxX, e.maxY, e.maxZ),
                this.applyPos(e.minX, e.minY, e.minZ);
            } else
              for (let e = 0; e < t.vertices.length; e += 3)
                this.applyPos(
                  t.vertices[e],
                  t.vertices[e + 1],
                  t.vertices[e + 2]
                );
            this.calcCenterSize();
          }
        }
        copy() {
          return new z(this);
        }
        get changed() {
          return !(
            this._max[0] == -Number.MAX_VALUE &&
            this._max[1] == -Number.MAX_VALUE &&
            this._max[2] == -Number.MAX_VALUE
          );
        }
        applyPos(t, e, i) {
          if (
            t != Number.MAX_VALUE &&
            t != -Number.MAX_VALUE &&
            e != Number.MAX_VALUE &&
            e != -Number.MAX_VALUE &&
            i != Number.MAX_VALUE &&
            i != -Number.MAX_VALUE &&
            CABLES.UTILS.isNumeric(t) &&
            CABLES.UTILS.isNumeric(e) &&
            CABLES.UTILS.isNumeric(i)
          ) {
            if (this._first)
              return (
                (this._max[0] = t),
                (this._max[1] = e),
                (this._max[2] = i),
                (this._min[0] = t),
                (this._min[1] = e),
                (this._min[2] = i),
                void (this._first = !1)
              );
            (this._max[0] = Math.max(this._max[0], t)),
              (this._max[1] = Math.max(this._max[1], e)),
              (this._max[2] = Math.max(this._max[2], i)),
              (this._min[0] = Math.min(this._min[0], t)),
              (this._min[1] = Math.min(this._min[1], e)),
              (this._min[2] = Math.min(this._min[2], i));
          }
        }
        calcCenterSize() {
          this._first ||
            ((this._size[0] = this._max[0] - this._min[0]),
            (this._size[1] = this._max[1] - this._min[1]),
            (this._size[2] = this._max[2] - this._min[2]),
            (this._center[0] = (this._min[0] + this._max[0]) / 2),
            (this._center[1] = (this._min[1] + this._max[1]) / 2),
            (this._center[2] = (this._min[2] + this._max[2]) / 2),
            (this._maxAxis = Math.max(
              this._size[2],
              Math.max(this._size[0], this._size[1])
            )));
        }
        mulMat4(t) {
          this._first &&
            ((this._max[0] = 0),
            (this._max[1] = 0),
            (this._max[2] = 0),
            (this._min[0] = 0),
            (this._min[1] = 0),
            (this._min[2] = 0),
            (this._first = !1)),
            vec3.transformMat4(this._max, this._max, t),
            vec3.transformMat4(this._min, this._min, t),
            this.calcCenterSize();
        }
        render(t, e) {
          this._wireMesh || (this._wireMesh = new CGL.WireCube(t)),
            t.pushModelMatrix(),
            mat4.translate(t.mMatrix, t.mMatrix, this._center),
            this._wireMesh.render(
              t,
              this._size[0] / 2,
              this._size[1] / 2,
              this._size[2] / 2
            ),
            t.popModelMatrix();
        }
      }
      const Y = function (t) {
        (this.name = t || "unknown"),
          (this._log = new h("cgl_geometry")),
          (this.faceVertCount = 3),
          (this._vertices = []),
          (this.verticesIndices = []),
          (this.texCoords = new Float32Array()),
          (this.texCoordsIndices = []),
          (this.vertexNormals = []),
          (this.tangents = []),
          (this.biTangents = []),
          (this.morphTargets = []),
          (this.vertexColors = []),
          (this._attributes = {}),
          (this.glPrimitive = null),
          Object.defineProperty(this, "vertices", {
            get() {
              return this._vertices;
            },
            set(t) {
              this.setVertices(t);
            },
          });
      };
      (Y.prototype.clear = function () {
        (this.vertices = new Float32Array([])),
          (this.verticesIndices.length = 0),
          (this.texCoords = new Float32Array([])),
          (this.texCoordsIndices.length = 0),
          (this.vertexNormals = new Float32Array([]));
      }),
        (Y.prototype.getAttributes = function () {
          return this._attributes;
        }),
        (Y.prototype.getAttribute = function (t) {
          for (const e in this._attributes)
            if (this._attributes[e].name == t) return this._attributes[e];
          return null;
        }),
        (Y.prototype.setAttribute = function (t, e, i) {
          let s = "";
          1 == i
            ? (s = "float")
            : 2 == i
            ? (s = "vec2")
            : 3 == i
            ? (s = "vec3")
            : 4 == i && (s = "vec4");
          const r = { name: t, data: e, itemSize: i, type: s };
          this._attributes[t] = r;
        }),
        (Y.prototype.setVertices = function (t) {
          t instanceof Float32Array
            ? (this._vertices = t)
            : (this._vertices = new Float32Array(t));
        }),
        (Y.prototype.setTexCoords = function (t) {
          t instanceof Float32Array
            ? (this.texCoords = t)
            : (this.texCoords = new Float32Array(t));
        }),
        (Y.prototype.calcNormals = function (t) {
          t || this.unIndex(), this.calculateNormals({});
        }),
        (Y.prototype.flipNormals = function (t, e, i) {
          let s = vec3.create();
          null == t && (t = 1), null == e && (e = 1), null == i && (i = 1);
          for (let r = 0; r < this.vertexNormals.length; r += 3)
            vec3.set(
              s,
              this.vertexNormals[r + 0],
              this.vertexNormals[r + 1],
              this.vertexNormals[r + 2]
            ),
              (s[0] *= -t),
              (s[1] *= -e),
              (s[2] *= -i),
              vec3.normalize(s, s),
              (this.vertexNormals[r + 0] = s[0]),
              (this.vertexNormals[r + 1] = s[1]),
              (this.vertexNormals[r + 2] = s[2]);
        }),
        (Y.prototype.getNumTriangles = function () {
          return this.verticesIndices && this.verticesIndices.length
            ? this.verticesIndices.length / 3
            : this.vertices.length / 3;
        }),
        (Y.prototype.flipVertDir = function () {
          const t = [];
          t.length = this.verticesIndices.length;
          for (let e = 0; e < this.verticesIndices.length; e += 3)
            (t[e] = this.verticesIndices[e + 2]),
              (t[e + 1] = this.verticesIndices[e + 1]),
              (t[e + 2] = this.verticesIndices[e]);
          this.verticesIndices = t;
        }),
        (Y.prototype.setPointVertices = function (t) {
          if (t.length % 3 == 0) {
            t instanceof Float32Array
              ? (this.vertices = t)
              : (this.vertices = new Float32Array(t)),
              this.texCoords instanceof Float32Array ||
                (this.texCoords = new Float32Array((t.length / 3) * 2)),
              (this.verticesIndices.length = t.length / 3);
            for (let e = 0; e < t.length / 3; e++)
              (this.verticesIndices[e] = e),
                (this.texCoords[2 * e] = 0),
                (this.texCoords[2 * e + 1] = 0);
          } else
            this._log.error("SetPointVertices: Array must be multiple of three.");
        }),
        (Y.prototype.merge = function (t) {
          if (!t) return;
          const e = this.verticesIndices.length,
            i = this.vertices.length / 3;
          this.verticesIndices.length =
            this.verticesIndices.length + t.verticesIndices.length;
          for (let s = 0; s < t.verticesIndices.length; s++)
            this.verticesIndices[e + s] = t.verticesIndices[s] + i;
          (this.vertices = g.float32Concat(this.vertices, t.vertices)),
            (this.texCoords = g.float32Concat(this.texCoords, t.texCoords)),
            (this.vertexNormals = g.float32Concat(
              this.vertexNormals,
              t.vertexNormals
            )),
            (this.tangents = g.float32Concat(this.tangents, t.tangents)),
            (this.biTangents = g.float32Concat(this.biTangents, t.biTangents));
        }),
        (Y.prototype.copy = function () {
          let t = 0;
          const e = new Y(this.name + " copy");
          if (
            ((e.faceVertCount = this.faceVertCount),
            (e.glPrimitive = this.glPrimitive),
            e.setVertices(this._vertices.slice(0)),
            this.verticesIndices)
          )
            for (
              e.verticesIndices.length = this.verticesIndices.length, t = 0;
              t < this.verticesIndices.length;
              t++
            )
              e.verticesIndices[t] = this.verticesIndices[t];
          if (this.texCoords)
            for (
              e.texCoords = new Float32Array(this.texCoords.length), t = 0;
              t < this.texCoords.length;
              t++
            )
              e.texCoords[t] = this.texCoords[t];
          if (this.texCoordsIndices)
            for (
              e.texCoordsIndices.length = this.texCoordsIndices.length, t = 0;
              t < this.texCoordsIndices.length;
              t++
            )
              e.texCoordsIndices[t] = this.texCoordsIndices[t];
          if (this.vertexNormals)
            for (
              e.vertexNormals = new Float32Array(this.vertexNormals.length),
                t = 0;
              t < this.vertexNormals.length;
              t++
            )
              e.vertexNormals[t] = this.vertexNormals[t];
          if (this.tangents)
            for (
              e.tangents = [], e.tangents.length = this.tangents.length, t = 0;
              t < this.tangents.length;
              t++
            )
              e.tangents[t] = this.tangents[t];
          if (this.biTangents)
            for (
              e.biTangents = [],
                e.biTangents.length = this.biTangents.length,
                t = 0;
              t < this.biTangents.length;
              t++
            )
              e.biTangents[t] = this.biTangents[t];
          for (
            e.morphTargets.length = this.morphTargets.length, t = 0;
            t < this.morphTargets.length;
            t++
          )
            e.morphTargets[t] = this.morphTargets[t];
          for (
            e.vertexColors.length = this.vertexColors.length, t = 0;
            t < this.vertexColors.length;
            t++
          )
            e.vertexColors[t] = this.vertexColors[t];
          return e;
        }),
        (Y.prototype.calculateNormals = function (t) {
          const e = vec3.create(),
            i = vec3.create(),
            s = vec3.create();
          function r(r) {
            return (
              vec3.subtract(e, r[0], r[1]),
              vec3.subtract(i, r[0], r[2]),
              vec3.cross(s, e, i),
              vec3.normalize(s, s),
              t &&
                t.forceZUp &&
                s[2] < 0 &&
                ((s[0] *= -1), (s[1] *= -1), (s[2] *= -1)),
              s
            );
          }
          (this.getVertexVec = function (t) {
            const e = [0, 0, 0];
            return (
              (e[0] = this.vertices[3 * t + 0]),
              (e[1] = this.vertices[3 * t + 1]),
              (e[2] = this.vertices[3 * t + 2]),
              e
            );
          }),
            (this.vertexNormals instanceof Float32Array &&
              this.vertexNormals.length == this.vertices.length) ||
              (this.vertexNormals = new Float32Array(this.vertices.length));
          for (let t = 0; t < this.vertices.length; t++)
            this.vertexNormals[t] = 0;
          if (this.isIndexed()) {
            const t = [];
            t.length = Math.floor(this.verticesIndices.length / 3);
            for (let e = 0; e < this.verticesIndices.length; e += 3) {
              const i = [
                this.getVertexVec(this.verticesIndices[e + 0]),
                this.getVertexVec(this.verticesIndices[e + 1]),
                this.getVertexVec(this.verticesIndices[e + 2]),
              ];
              (t[e / 3] = r(i)),
                (this.vertexNormals[3 * this.verticesIndices[e + 0] + 0] +=
                  t[e / 3][0]),
                (this.vertexNormals[3 * this.verticesIndices[e + 0] + 1] +=
                  t[e / 3][1]),
                (this.vertexNormals[3 * this.verticesIndices[e + 0] + 2] +=
                  t[e / 3][2]),
                (this.vertexNormals[3 * this.verticesIndices[e + 1] + 0] +=
                  t[e / 3][0]),
                (this.vertexNormals[3 * this.verticesIndices[e + 1] + 1] +=
                  t[e / 3][1]),
                (this.vertexNormals[3 * this.verticesIndices[e + 1] + 2] +=
                  t[e / 3][2]),
                (this.vertexNormals[3 * this.verticesIndices[e + 2] + 0] +=
                  t[e / 3][0]),
                (this.vertexNormals[3 * this.verticesIndices[e + 2] + 1] +=
                  t[e / 3][1]),
                (this.vertexNormals[3 * this.verticesIndices[e + 2] + 2] +=
                  t[e / 3][2]);
            }
            for (let t = 0; t < this.verticesIndices.length; t += 3)
              for (let e = 0; e < 3; e++) {
                const i = [
                  this.vertexNormals[3 * this.verticesIndices[t + e] + 0],
                  this.vertexNormals[3 * this.verticesIndices[t + e] + 1],
                  this.vertexNormals[3 * this.verticesIndices[t + e] + 2],
                ];
                vec3.normalize(i, i),
                  (this.vertexNormals[3 * this.verticesIndices[t + e] + 0] =
                    i[0]),
                  (this.vertexNormals[3 * this.verticesIndices[t + e] + 1] =
                    i[1]),
                  (this.vertexNormals[3 * this.verticesIndices[t + e] + 2] =
                    i[2]);
              }
          } else {
            const t = [];
            for (let e = 0; e < this.vertices.length; e += 9) {
              const i = r([
                [
                  this.vertices[e + 0],
                  this.vertices[e + 1],
                  this.vertices[e + 2],
                ],
                [
                  this.vertices[e + 3],
                  this.vertices[e + 4],
                  this.vertices[e + 5],
                ],
                [
                  this.vertices[e + 6],
                  this.vertices[e + 7],
                  this.vertices[e + 8],
                ],
              ]);
              t.push(i[0], i[1], i[2], i[0], i[1], i[2], i[0], i[1], i[2]);
            }
            this.vertexNormals = t;
          }
        }),
        (Y.prototype.calcTangentsBitangents = function () {
          if (!this.vertices.length)
            return void this._log.error(
              "Cannot calculate tangents/bitangents without vertices."
            );
          if (!this.vertexNormals.length)
            return void this._log.error(
              "Cannot calculate tangents/bitangents without normals."
            );
          if (!this.texCoords.length) {
            const t = (this.vertices.length / 3) * 2;
            this.texCoords = new Float32Array(t);
            for (let e = 0; e < t; e += 1) this.texCoords[e] = 0;
          }
          if (!this.verticesIndices || !this.verticesIndices.length)
            return void this._log.error(
              "Cannot calculate tangents/bitangents without vertex indices."
            );
          if (this.verticesIndices.length % 3 != 0)
            return void this._log.error("Vertex indices mismatch!");
          const t = this.verticesIndices.length / 3,
            e = this.vertices.length / 3;
          (this.tangents = new Float32Array(this.vertexNormals.length)),
            (this.biTangents = new Float32Array(this.vertexNormals.length));
          const i = [];
          i.length = 2 * e;
          const s = vec3.create(),
            r = vec3.create(),
            n = vec3.create(),
            o = vec2.create(),
            h = vec2.create(),
            a = vec2.create(),
            l = vec3.create(),
            c = vec3.create();
          for (let u = 0; u < t; u += 1) {
            const t = this.verticesIndices[3 * u],
              g = this.verticesIndices[3 * u + 1],
              _ = this.verticesIndices[3 * u + 2];
            vec3.set(
              s,
              this.vertices[3 * t],
              this.vertices[3 * t + 1],
              this.vertices[3 * t + 2]
            ),
              vec3.set(
                r,
                this.vertices[3 * g],
                this.vertices[3 * g + 1],
                this.vertices[3 * g + 2]
              ),
              vec3.set(
                n,
                this.vertices[3 * _],
                this.vertices[3 * _ + 1],
                this.vertices[3 * _ + 2]
              ),
              vec2.set(o, this.texCoords[2 * t], this.texCoords[2 * t + 1]),
              vec2.set(h, this.texCoords[2 * g], this.texCoords[2 * g + 1]),
              vec2.set(a, this.texCoords[2 * _], this.texCoords[2 * _ + 1]);
            const p = r[0] - s[0],
              d = n[0] - s[0],
              f = r[1] - s[1],
              m = n[1] - s[1],
              E = r[2] - s[2],
              T = n[2] - s[2],
              A = h[0] - o[0],
              b = a[0] - o[0],
              y = h[1] - o[1],
              v = a[1] - o[1],
              x = 1 / (A * v - b * y);
            vec3.set(
              l,
              (v * p - y * d) * x,
              (v * f - y * m) * x,
              (v * E - y * T) * x
            ),
              vec3.set(
                c,
                (A * d - b * p) * x,
                (A * m - b * f) * x,
                (A * T - b * E) * x
              ),
              (i[t] = l),
              (i[g] = l),
              (i[_] = l),
              (i[t + e] = c),
              (i[g + e] = c),
              (i[_ + e] = c);
          }
          const u = vec3.create(),
            g = vec3.create(),
            _ = vec3.create(),
            p = vec3.create(),
            d = vec3.create(),
            f = vec3.create(),
            m = vec3.create(),
            E = vec3.create();
          for (let t = 0; t < e; t += 1) {
            if (!i[t]) continue;
            vec3.set(
              u,
              this.vertexNormals[3 * t],
              this.vertexNormals[3 * t + 1],
              this.vertexNormals[3 * t + 2]
            ),
              vec3.set(g, i[t][0], i[t][1], i[t][2]);
            const s = vec3.dot(u, g);
            vec3.scale(d, u, s),
              vec3.subtract(f, g, d),
              vec3.normalize(E, f),
              vec3.cross(m, u, g);
            vec3.dot(m, i[t + e]);
            const r = 1;
            vec3.scale(_, E, 1 / r),
              vec3.cross(p, u, _),
              (this.tangents[3 * t + 0] = _[0]),
              (this.tangents[3 * t + 1] = _[1]),
              (this.tangents[3 * t + 2] = _[2]),
              (this.biTangents[3 * t + 0] = p[0]),
              (this.biTangents[3 * t + 1] = p[1]),
              (this.biTangents[3 * t + 2] = p[2]);
          }
        }),
        (Y.prototype.isIndexed = function () {
          return 0 != this.verticesIndices.length;
        }),
        (Y.prototype.unIndex = function (t, e) {
          const i = [],
            s = [],
            r = [],
            n = [],
            o = [],
            h = [];
          let a = 0,
            l = 0;
          for (l = 0; l < this.verticesIndices.length; l += 3)
            i.push(
              this.vertices[3 * this.verticesIndices[l + 0] + 0],
              this.vertices[3 * this.verticesIndices[l + 0] + 1],
              this.vertices[3 * this.verticesIndices[l + 0] + 2]
            ),
              n.push(
                this.vertexNormals[3 * this.verticesIndices[l + 0] + 0],
                this.vertexNormals[3 * this.verticesIndices[l + 0] + 1],
                this.vertexNormals[3 * this.verticesIndices[l + 0] + 2]
              ),
              this.tangents.length > 0 &&
                o.push(
                  this.tangents[3 * this.verticesIndices[l + 0] + 0],
                  this.tangents[3 * this.verticesIndices[l + 0] + 1],
                  this.tangents[3 * this.verticesIndices[l + 0] + 2]
                ),
              this.biTangents.length > 0 &&
                h.push(
                  this.biTangents[3 * this.verticesIndices[l + 0] + 0],
                  this.biTangents[3 * this.verticesIndices[l + 0] + 1],
                  this.biTangents[3 * this.verticesIndices[l + 0] + 2]
                ),
              this.texCoords
                ? r.push(
                    this.texCoords[2 * this.verticesIndices[l + 0] + 0],
                    this.texCoords[2 * this.verticesIndices[l + 0] + 1]
                  )
                : r.push(0, 0),
              s.push(a),
              a++,
              i.push(
                this.vertices[3 * this.verticesIndices[l + 1] + 0],
                this.vertices[3 * this.verticesIndices[l + 1] + 1],
                this.vertices[3 * this.verticesIndices[l + 1] + 2]
              ),
              n.push(
                this.vertexNormals[3 * this.verticesIndices[l + 1] + 0],
                this.vertexNormals[3 * this.verticesIndices[l + 1] + 1],
                this.vertexNormals[3 * this.verticesIndices[l + 1] + 2]
              ),
              this.tangents.length > 0 &&
                o.push(
                  this.tangents[3 * this.verticesIndices[l + 1] + 0],
                  this.tangents[3 * this.verticesIndices[l + 1] + 1],
                  this.tangents[3 * this.verticesIndices[l + 1] + 2]
                ),
              this.biTangents.length > 0 &&
                h.push(
                  this.biTangents[3 * this.verticesIndices[l + 1] + 0],
                  this.biTangents[3 * this.verticesIndices[l + 1] + 1],
                  this.biTangents[3 * this.verticesIndices[l + 1] + 2]
                ),
              this.texCoords
                ? r.push(
                    this.texCoords[2 * this.verticesIndices[l + 1] + 0],
                    this.texCoords[2 * this.verticesIndices[l + 1] + 1]
                  )
                : r.push(0, 0),
              s.push(a),
              a++,
              i.push(
                this.vertices[3 * this.verticesIndices[l + 2] + 0],
                this.vertices[3 * this.verticesIndices[l + 2] + 1],
                this.vertices[3 * this.verticesIndices[l + 2] + 2]
              ),
              n.push(
                this.vertexNormals[3 * this.verticesIndices[l + 2] + 0],
                this.vertexNormals[3 * this.verticesIndices[l + 2] + 1],
                this.vertexNormals[3 * this.verticesIndices[l + 2] + 2]
              ),
              this.tangents.length > 0 &&
                o.push(
                  this.tangents[3 * this.verticesIndices[l + 2] + 0],
                  this.tangents[3 * this.verticesIndices[l + 2] + 1],
                  this.tangents[3 * this.verticesIndices[l + 2] + 2]
                ),
              this.biTangents.length > 0 &&
                h.push(
                  this.biTangents[3 * this.verticesIndices[l + 2] + 0],
                  this.biTangents[3 * this.verticesIndices[l + 2] + 1],
                  this.biTangents[3 * this.verticesIndices[l + 2] + 2]
                ),
              this.texCoords
                ? r.push(
                    this.texCoords[2 * this.verticesIndices[l + 2] + 0],
                    this.texCoords[2 * this.verticesIndices[l + 2] + 1]
                  )
                : r.push(0, 0),
              s.push(a),
              a++;
          (this.vertices = i),
            (this.texCoords = r),
            (this.vertexNormals = n),
            o.length > 0 && (this.tangents = o),
            h.length > 0 && (this.biTangents = h),
            (this.verticesIndices.length = 0),
            t && (this.verticesIndices = s),
            e || this.calculateNormals();
        }),
        (Y.prototype.calcBarycentric = function () {
          let t = [];
          t.length = this.vertices.length;
          for (let e = 0; e < this.vertices.length; e++) t[e] = 0;
          let e = 0;
          for (let i = 0; i < this.vertices.length; i += 3)
            (t[i + e] = 1), e++, 3 == e && (e = 0);
          this.setAttribute("attrBarycentric", t, 3);
        }),
        (Y.prototype.getBounds = function () {
          return new z(this);
        }),
        (Y.prototype.center = function (t, e, i) {
          void 0 === t && ((t = !0), (e = !0), (i = !0));
          let s = 0;
          const r = this.getBounds(),
            n = [
              r.minX + (r.maxX - r.minX) / 2,
              r.minY + (r.maxY - r.minY) / 2,
              r.minZ + (r.maxZ - r.minZ) / 2,
            ];
          for (s = 0; s < this.vertices.length; s += 3)
            this.vertices[s + 0] == this.vertices[s + 0] &&
              (t && (this.vertices[s + 0] -= n[0]),
              e && (this.vertices[s + 1] -= n[1]),
              i && (this.vertices[s + 2] -= n[2]));
          return n;
        }),
        (Y.prototype.mapTexCoords2d = function () {
          const t = this.getBounds(),
            e = this.vertices.length / 3;
          this.texCoords = new Float32Array(2 * e);
          for (let i = 0; i < e; i++) {
            const e = this.vertices[3 * i + 0],
              s = this.vertices[3 * i + 1];
            (this.texCoords[2 * i + 0] = e / (t.maxX - t.minX) + 0.5),
              (this.texCoords[2 * i + 1] = 1 - s / (t.maxY - t.minY) + 0.5);
          }
        }),
        (Y.prototype.getInfo = function () {
          const t = {};
          return (
            this.verticesIndices
              ? (t.numFaces = this.verticesIndices.length / 3)
              : (t.numFaces = 0),
            this.vertices
              ? (t.numVerts = this.vertices.length / 3)
              : (t.numVerts = 0),
            this.vertexNormals
              ? (t.numNormals = this.vertexNormals.length / 3)
              : (t.numNormals = 0),
            this.texCoords
              ? (t.numTexCoords = this.texCoords.length / 2)
              : (t.numTexCoords = 0),
            this.tangents
              ? (t.numTangents = this.tangents.length / 3)
              : (t.numTangents = 0),
            this.biTangents
              ? (t.numBiTangents = this.biTangents.length / 3)
              : (t.numBiTangents = 0),
            this.biTangents
              ? (t.numBiTangents = this.biTangents.length / 3)
              : (t.numBiTangents = 0),
            this.vertexColors
              ? (t.numVertexColors = this.vertexColors.length / 4)
              : (t.numVertexColors = 0),
            this.getAttributes()
              ? (t.numAttribs = Object.keys(this.getAttributes()).length)
              : (t.numAttribs = 0),
            (t.isIndexed = this.isIndexed()),
            t
          );
        }),
        (Y.buildFromFaces = function (t, e, i) {
          const s = [],
            r = [];
          for (let e = 0; e < t.length; e += 3) {
            const n = t[e + 0],
              o = t[e + 1],
              h = t[e + 2],
              a = [-1, -1, -1];
            if (i)
              for (let t = 0; t < s.length; t += 3)
                s[t + 0] == n[0] &&
                  s[t + 1] == n[1] &&
                  s[t + 2] == n[2] &&
                  (a[0] = t / 3),
                  s[t + 0] == o[0] &&
                    s[t + 1] == o[1] &&
                    s[t + 2] == o[2] &&
                    (a[1] = t / 3),
                  s[t + 0] == h[0] &&
                    s[t + 1] == h[1] &&
                    s[t + 2] == h[2] &&
                    (a[2] = t / 3);
            -1 == a[0] && (s.push(n[0], n[1], n[2]), (a[0] = (s.length - 1) / 3)),
              -1 == a[1] &&
                (s.push(o[0], o[1], o[2]), (a[1] = (s.length - 1) / 3)),
              -1 == a[2] &&
                (s.push(h[0], h[1], h[2]), (a[2] = (s.length - 1) / 3)),
              r.push(parseInt(a[0], 10)),
              r.push(parseInt(a[1], 10)),
              r.push(parseInt(a[2], 10));
          }
          const n = new Y(e);
          return (n.name = e), (n.vertices = s), (n.verticesIndices = r), n;
        }),
        (Y.json2geom = function (t) {
          const e = new Y("jsonMeshGeom");
          if (
            ((e.verticesIndices = []),
            (e.vertices = t.vertices || []),
            (e.vertexNormals = t.normals || []),
            (e.vertexColors = t.colors || []),
            (e.tangents = t.tangents || []),
            (e.biTangents = t.bitangents || []),
            t.texturecoords && e.setTexCoords(t.texturecoords[0]),
            t.vertices_b64 && (e.vertices = new Float32Array(H(t.vertices_b64))),
            t.normals_b64 &&
              (e.vertexNormals = new Float32Array(H(t.normals_b64))),
            t.tangents_b64 && (e.tangents = new Float32Array(H(t.tangents_b64))),
            t.bitangents_b64 &&
              (e.biTangents = new Float32Array(H(t.bitangents_b64))),
            t.texturecoords_b64 &&
              e.setTexCoords(new Float32Array(H(t.texturecoords_b64[0]))),
            t.faces_b64)
          )
            e.verticesIndices = new Uint32Array(H(t.faces_b64));
          else {
            e.verticesIndices.length = 3 * t.faces.length;
            for (let i = 0; i < t.faces.length; i++)
              (e.verticesIndices[3 * i] = t.faces[i][0]),
                (e.verticesIndices[3 * i + 1] = t.faces[i][1]),
                (e.verticesIndices[3 * i + 2] = t.faces[i][2]);
          }
          return e;
        });
      const W = function () {
          (this._log = new h("eventtaget")),
            (this._eventCallbacks = {}),
            (this._logName = ""),
            (this._logEvents = !1),
            (this._listeners = {}),
            (this.addEventListener = this.on =
              function (t, e, i) {
                const s = { id: (i || "") + CABLES.uuid(), name: t, cb: e };
                return (
                  this._eventCallbacks[t]
                    ? this._eventCallbacks[t].push(s)
                    : (this._eventCallbacks[t] = [s]),
                  (this._listeners[s.id] = s),
                  s.id
                );
              }),
            (this.hasEventListener = function (t, e) {
              if (t && !e) return !!this._listeners[t];
              if (
                (this._log.warn("old eventtarget function haseventlistener!"),
                t && e && this._eventCallbacks[t])
              ) {
                return -1 != this._eventCallbacks[t].indexOf(e);
              }
            }),
            (this.removeEventListener = this.off =
              function (t, e) {
                if (null == t) return;
                if (!e) {
                  const e = this._listeners[t];
                  if (!e) return;
                  let i = !0;
                  for (; i; ) {
                    i = !1;
                    let s = -1;
                    for (let r = 0; r < this._eventCallbacks[e.name].length; r++)
                      0 === this._eventCallbacks[e.name][r].id.indexOf(t) &&
                        ((i = !0), (s = r));
                    -1 !== s &&
                      (this._eventCallbacks[e.name].splice(s, 1),
                      delete this._listeners[t]);
                  }
                  return;
                }
                this._log.stack(
                  " old function signature: removeEventListener! use listener id"
                );
                let i = null;
                for (let s = 0; s < this._eventCallbacks[t].length; s++)
                  this._eventCallbacks[t][s].cb == e && (i = s);
                null !== i
                  ? delete this._eventCallbacks[i]
                  : this._log.warn("removeEventListener not found " + t);
              }),
            (this.logEvents = function (t, e) {
              (this._logEvents = t), (this._logName = e);
            }),
            (this.emitEvent = function (t, e, i, s, r, n, o) {
              if (
                (this._logEvents &&
                  console.log("[event] ", this._logName, t, this._eventCallbacks),
                this._eventCallbacks[t])
              )
                for (let h = 0; h < this._eventCallbacks[t].length; h++)
                  this._eventCallbacks[t][h] &&
                    this._eventCallbacks[t][h].cb(e, i, s, r, n, o);
              else
                this._logEvents &&
                  console.log(
                    "[event] has no event callback",
                    t,
                    this._eventCallbacks
                  );
            });
        },
        X = {
          Key: function (t) {
            (this.time = 0),
              (this.value = 0),
              (this.ui = null),
              (this.onChange = null),
              (this._easing = 0),
              (this.bezTangIn = 0),
              (this.bezTangOut = 0),
              (this.cb = null),
              (this.cbTriggered = !1);
            this.setEasing(a.EASING_LINEAR), this.set(t);
          },
        };
      (X.Key.cubicSpline = function (t, e, i) {
        let s = t * t,
          r = s * t;
        return (
          (2 * r - 3 * s + 1) * e.value +
          (r - 2 * s + t) * e.bezTangOut +
          (-2 * r + 3 * s) * i.value +
          (r - s) * i.bezTangIn
        );
      }),
        (X.Key.easeCubicSpline = function (t, e) {
          return X.Key.cubicSpline(t, this, e);
        }),
        (X.Key.linear = function (t, e, i) {
          return parseFloat(e.value) + parseFloat(i.value - e.value) * t;
        }),
        (X.Key.easeLinear = function (t, e) {
          return X.Key.linear(t, this, e);
        }),
        (X.Key.easeAbsolute = function (t, e) {
          return this.value;
        });
      const K = function (t) {
        return Math.pow(2, 10 * (t - 1));
      };
      X.Key.easeExpoIn = function (t, e) {
        return (t = K(t)), X.Key.linear(t, this, e);
      };
      const j = function (t) {
        return (t = 1 - Math.pow(2, -10 * t));
      };
      X.Key.easeExpoOut = function (t, e) {
        return (t = j(t)), X.Key.linear(t, this, e);
      };
      const Q = function (t) {
        return (
          (t *= 2) < 1
            ? (t = 0.5 * Math.pow(2, 10 * (t - 1)))
            : (t--, (t = 0.5 * (2 - Math.pow(2, -10 * t)))),
          t
        );
      };
      (X.Key.easeExpoInOut = function (t, e) {
        return (t = Q(t)), X.Key.linear(t, this, e);
      }),
        (X.Key.easeSinIn = function (t, e) {
          return (
            (t = -1 * Math.cos((t * Math.PI) / 2) + 1), X.Key.linear(t, this, e)
          );
        }),
        (X.Key.easeSinOut = function (t, e) {
          return (t = Math.sin((t * Math.PI) / 2)), X.Key.linear(t, this, e);
        }),
        (X.Key.easeSinInOut = function (t, e) {
          return (
            (t = -0.5 * (Math.cos(Math.PI * t) - 1)), X.Key.linear(t, this, e)
          );
        });
      const q = function (t) {
        return (t *= t * t);
      };
      (X.Key.easeCubicIn = function (t, e) {
        return (t = q(t)), X.Key.linear(t, this, e);
      }),
        (X.Key.easeInQuint = function (t, e) {
          return (t *= t * t * t * t), X.Key.linear(t, this, e);
        }),
        (X.Key.easeOutQuint = function (t, e) {
          return (t = (t -= 1) * t * t * t * t + 1), X.Key.linear(t, this, e);
        }),
        (X.Key.easeInOutQuint = function (t, e) {
          return (
            (t /= 0.5) < 1
              ? (t *= 0.5 * t * t * t * t)
              : (t = 0.5 * ((t -= 2) * t * t * t * t + 2)),
            X.Key.linear(t, this, e)
          );
        }),
        (X.Key.easeInQuart = function (t, e) {
          return (t *= t * t * t), X.Key.linear(t, this, e);
        }),
        (X.Key.easeOutQuart = function (t, e) {
          return (t = -1 * ((t -= 1) * t * t * t - 1)), X.Key.linear(t, this, e);
        }),
        (X.Key.easeInOutQuart = function (t, e) {
          return (
            (t /= 0.5) < 1
              ? (t *= 0.5 * t * t * t)
              : (t = -0.5 * ((t -= 2) * t * t * t - 2)),
            X.Key.linear(t, this, e)
          );
        }),
        (X.Key.bounce = function (t) {
          return (
            (t /= 1) < 1 / 2.75
              ? (t *= 7.5625 * t)
              : (t =
                  t < 2 / 2.75
                    ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                    : t < 2.5 / 2.75
                    ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                    : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375),
            t
          );
        }),
        (X.Key.easeInBounce = function (t, e) {
          return X.Key.linear(X.Key.bounce(t), this, e);
        }),
        (X.Key.easeOutBounce = function (t, e) {
          return X.Key.linear(X.Key.bounce(t), this, e);
        }),
        (X.Key.easeInElastic = function (t, e) {
          let i = 1.70158,
            s = 0,
            r = 1;
          return (
            0 === t
              ? (t = 0)
              : 1 == (t /= 1)
              ? (t = 1)
              : (s || (s = 0.3),
                r < Math.abs(1)
                  ? ((r = 1), (i = s / 4))
                  : (i = (s / (2 * Math.PI)) * Math.asin(1 / r)),
                (t =
                  -r *
                    Math.pow(2, 10 * (t -= 1)) *
                    Math.sin(((1 * t - i) * (2 * Math.PI)) / s) +
                  0)),
            X.Key.linear(t, this, e)
          );
        }),
        (X.Key.easeOutElastic = function (t, e) {
          let i = 1.70158,
            s = 0,
            r = 1;
          return (
            0 === t
              ? (t = 0)
              : 1 == (t /= 1)
              ? (t = 1)
              : (s || (s = 0.3),
                r < Math.abs(1)
                  ? ((r = 1), (i = s / 4))
                  : (i = (s / (2 * Math.PI)) * Math.asin(1 / r)),
                (t =
                  r *
                    Math.pow(2, -10 * t) *
                    Math.sin(((1 * t - i) * (2 * Math.PI)) / s) +
                  1 +
                  0)),
            X.Key.linear(t, this, e)
          );
        }),
        (X.Key.easeInBack = function (t, e) {
          const i = 1.70158;
          return (t = t * t * ((i + 1) * t - i)), X.Key.linear(t, this, e);
        }),
        (X.Key.easeOutBack = function (t, e) {
          const i = 1.70158;
          return (
            (t = (t = t / 1 - 1) * t * ((i + 1) * t + i) + 1),
            X.Key.linear(t, this, e)
          );
        }),
        (X.Key.easeInOutBack = function (t, e) {
          let i = 1.70158;
          return (
            (t =
              (t /= 0.5) < 1
                ? t * t * ((1 + (i *= 1.525)) * t - i) * 0.5
                : 0.5 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2)),
            X.Key.linear(t, this, e)
          );
        });
      const J = function (t) {
        return (t = --t * t * t + 1);
      };
      X.Key.easeCubicOut = function (t, e) {
        return (t = J(t)), X.Key.linear(t, this, e);
      };
      const Z = function (t) {
        return (
          (t *= 2) < 1 ? (t *= 0.5 * t * t) : (t = 0.5 * ((t -= 2) * t * t + 2)),
          t
        );
      };
      (X.Key.easeCubicInOut = function (t, e) {
        return (t = Z(t)), X.Key.linear(t, this, e);
      }),
        (X.Key.easeSmoothStep = function (t, e) {
          const i = Math.max(0, Math.min(1, t));
          return (t = i * i * (3 - 2 * i)), X.Key.linear(t, this, e);
        }),
        (X.Key.easeSmootherStep = function (t, e) {
          const i = Math.max(0, Math.min(1, (t - 0) / 1));
          return (
            (t = i * i * i * (i * (6 * i - 15) + 10)), X.Key.linear(t, this, e)
          );
        }),
        (X.Key.prototype.setEasing = function (t) {
          (this._easing = t),
            this._easing == a.EASING_LINEAR
              ? (this.ease = X.Key.easeLinear)
              : this._easing == a.EASING_ABSOLUTE
              ? (this.ease = X.Key.easeAbsolute)
              : this._easing == a.EASING_SMOOTHSTEP
              ? (this.ease = X.Key.easeSmoothStep)
              : this._easing == a.EASING_SMOOTHERSTEP
              ? (this.ease = X.Key.easeSmootherStep)
              : this._easing == a.EASING_CUBIC_IN
              ? (this.ease = X.Key.easeCubicIn)
              : this._easing == a.EASING_CUBIC_OUT
              ? (this.ease = X.Key.easeCubicOut)
              : this._easing == a.EASING_CUBIC_INOUT
              ? (this.ease = X.Key.easeCubicInOut)
              : this._easing == a.EASING_EXPO_IN
              ? (this.ease = X.Key.easeExpoIn)
              : this._easing == a.EASING_EXPO_OUT
              ? (this.ease = X.Key.easeExpoOut)
              : this._easing == a.EASING_EXPO_INOUT
              ? (this.ease = X.Key.easeExpoInOut)
              : this._easing == a.EASING_SIN_IN
              ? (this.ease = X.Key.easeSinIn)
              : this._easing == a.EASING_SIN_OUT
              ? (this.ease = X.Key.easeSinOut)
              : this._easing == a.EASING_SIN_INOUT
              ? (this.ease = X.Key.easeSinInOut)
              : this._easing == a.EASING_BACK_OUT
              ? (this.ease = X.Key.easeOutBack)
              : this._easing == a.EASING_BACK_IN
              ? (this.ease = X.Key.easeInBack)
              : this._easing == a.EASING_BACK_INOUT
              ? (this.ease = X.Key.easeInOutBack)
              : this._easing == a.EASING_ELASTIC_IN
              ? (this.ease = X.Key.easeInElastic)
              : this._easing == a.EASING_ELASTIC_OUT
              ? (this.ease = X.Key.easeOutElastic)
              : this._easing == a.EASING_ELASTIC_INOUT
              ? (this.ease = X.Key.easeElasticInOut)
              : this._easing == a.EASING_BOUNCE_IN
              ? (this.ease = X.Key.easeInBounce)
              : this._easing == a.EASING_BOUNCE_OUT
              ? (this.ease = X.Key.easeOutBounce)
              : this._easing == a.EASING_QUART_OUT
              ? (this.ease = X.Key.easeOutQuart)
              : this._easing == a.EASING_QUART_IN
              ? (this.ease = X.Key.easeInQuart)
              : this._easing == a.EASING_QUART_INOUT
              ? (this.ease = X.Key.easeInOutQuart)
              : this._easing == a.EASING_QUINT_OUT
              ? (this.ease = X.Key.easeOutQuint)
              : this._easing == a.EASING_QUINT_IN
              ? (this.ease = X.Key.easeInQuint)
              : this._easing == a.EASING_QUINT_INOUT
              ? (this.ease = X.Key.easeInOutQuint)
              : this._easing == a.EASING_CUBICSPLINE
              ? (this.ease = X.Key.easeCubicSpline)
              : ((this._easing = a.EASING_LINEAR),
                (this.ease = X.Key.easeLinear));
        }),
        (X.Key.prototype.trigger = function () {
          this.cb(), (this.cbTriggered = !0);
        }),
        (X.Key.prototype.setValue = function (t) {
          (this.value = t), null !== this.onChange && this.onChange();
        }),
        (X.Key.prototype.set = function (t) {
          t &&
            (t.e && this.setEasing(t.e),
            t.cb && ((this.cb = t.cb), (this.cbTriggered = !1)),
            t.b,
            t.hasOwnProperty("t") && (this.time = t.t),
            t.hasOwnProperty("time") && (this.time = t.time),
            t.hasOwnProperty("v")
              ? (this.value = t.v)
              : t.hasOwnProperty("value") && (this.value = t.value)),
            null !== this.onChange && this.onChange();
        }),
        (X.Key.prototype.getSerialized = function () {
          const t = {};
          return (t.t = this.time), (t.v = this.value), (t.e = this._easing), t;
        }),
        (X.Key.prototype.getEasing = function () {
          return this._easing;
        });
      const $ = function (t) {
        W.apply(this),
          (t = t || {}),
          (this.keys = []),
          (this.onChange = null),
          (this.stayInTimeline = !1),
          (this.loop = !1),
          (this._log = new h("Anim")),
          (this.defaultEasing = t.defaultEasing || a.EASING_LINEAR),
          (this.onLooped = null),
          (this._timesLooped = 0),
          (this._needsSort = !1);
      };
      ($.prototype.forceChangeCallback = function () {
        null !== this.onChange && this.onChange(),
          this.emitEvent("onChange", this);
      }),
        ($.prototype.getLoop = function () {
          return this.loop;
        }),
        ($.prototype.setLoop = function (t) {
          (this.loop = t), this.emitEvent("onChange", this);
        }),
        ($.prototype.hasEnded = function (t) {
          return (
            0 === this.keys.length || this.keys[this.keys.length - 1].time <= t
          );
        }),
        ($.prototype.isRising = function (t) {
          if (this.hasEnded(t)) return !1;
          const e = this.getKeyIndex(t);
          return this.keys[e].value < this.keys[e + 1].value;
        }),
        ($.prototype.clearBefore = function (t) {
          const e = this.getValue(t),
            i = this.getKeyIndex(t);
          this.setValue(t, e), i > 1 && this.keys.splice(0, i);
        }),
        ($.prototype.clear = function (t) {
          let e = 0;
          t && (e = this.getValue(t)),
            (this.keys.length = 0),
            t && this.setValue(t, e),
            null !== this.onChange && this.onChange(),
            this.emitEvent("onChange", this);
        }),
        ($.prototype.sortKeys = function () {
          this.keys.sort((t, e) => parseFloat(t.time) - parseFloat(e.time)),
            (this._needsSort = !1);
        }),
        ($.prototype.getLength = function () {
          return 0 === this.keys.length
            ? 0
            : this.keys[this.keys.length - 1].time;
        }),
        ($.prototype.getKeyIndex = function (t) {
          let e = 0;
          for (let i = 0; i < this.keys.length; i++)
            if ((t >= this.keys[i].time && (e = i), this.keys[i].time > t))
              return e;
          return e;
        }),
        ($.prototype.setValue = function (t, e, i) {
          let s = null;
          for (const r in this.keys)
            if (this.keys[r].time == t) {
              (s = this.keys[r]), this.keys[r].setValue(e), (this.keys[r].cb = i);
              break;
            }
          return (
            s ||
              ((s = new X.Key({
                time: t,
                value: e,
                e: this.defaultEasing,
                cb: i,
              })),
              this.keys.push(s)),
            this.onChange && this.onChange(),
            this.emitEvent("onChange", this),
            (this._needsSort = !0),
            s
          );
        }),
        ($.prototype.setKeyEasing = function (t, e) {
          this.keys[t] &&
            (this.keys[t].setEasing(e), this.emitEvent("onChange", this));
        }),
        ($.prototype.getSerialized = function () {
          const t = { keys: [] };
          t.loop = this.loop;
          for (const e in this.keys) t.keys.push(this.keys[e].getSerialized());
          return t;
        }),
        ($.prototype.getKey = function (t) {
          const e = this.getKeyIndex(t);
          return this.keys[e];
        }),
        ($.prototype.getNextKey = function (t) {
          let e = this.getKeyIndex(t) + 1;
          return (
            e >= this.keys.length && (e = this.keys.length - 1), this.keys[e]
          );
        }),
        ($.prototype.isFinished = function (t) {
          return (
            this.keys.length <= 0 || t > this.keys[this.keys.length - 1].time
          );
        }),
        ($.prototype.isStarted = function (t) {
          return !(this.keys.length <= 0) && t >= this.keys[0].time;
        }),
        ($.prototype.getValue = function (t) {
          if (0 === this.keys.length) return 0;
          if ((this._needsSort && this.sortKeys(), t < this.keys[0].time))
            return this.keys[0].value;
          const e = this.keys.length - 1;
          if (this.loop && t > this.keys[e].time) {
            t / this.keys[e].time > this._timesLooped &&
              (this._timesLooped++, this.onLooped && this.onLooped()),
              (t =
                (t - this.keys[0].time) %
                (this.keys[e].time - this.keys[0].time)),
              (t += this.keys[0].time);
          }
          const i = this.getKeyIndex(t);
          if (i >= e)
            return (
              this.keys[e].cb &&
                !this.keys[e].cbTriggered &&
                this.keys[e].trigger(),
              this.keys[e].value
            );
          const s = parseInt(i, 10) + 1,
            r = this.keys[i],
            n = this.keys[s];
          if ((r.cb && !r.cbTriggered && r.trigger(), !n)) return -1;
          const o = (t - r.time) / (n.time - r.time);
          return r.ease || this.log._warn("has no ease", r, n), r.ease(o, n);
        }),
        ($.prototype.addKey = function (t) {
          void 0 === t.time
            ? this.log.warn("key time undefined, ignoring!")
            : (this.keys.push(t),
              null !== this.onChange && this.onChange(),
              this.emitEvent("onChange", this));
        }),
        ($.prototype.easingFromString = function (t) {
          return "linear" == t
            ? a.EASING_LINEAR
            : "absolute" == t
            ? a.EASING_ABSOLUTE
            : "smoothstep" == t
            ? a.EASING_SMOOTHSTEP
            : "smootherstep" == t
            ? a.EASING_SMOOTHERSTEP
            : "Cubic In" == t
            ? a.EASING_CUBIC_IN
            : "Cubic Out" == t
            ? a.EASING_CUBIC_OUT
            : "Cubic In Out" == t
            ? a.EASING_CUBIC_INOUT
            : "Expo In" == t
            ? a.EASING_EXPO_IN
            : "Expo Out" == t
            ? a.EASING_EXPO_OUT
            : "Expo In Out" == t
            ? a.EASING_EXPO_INOUT
            : "Sin In" == t
            ? a.EASING_SIN_IN
            : "Sin Out" == t
            ? a.EASING_SIN_OUT
            : "Sin In Out" == t
            ? a.EASING_SIN_INOUT
            : "Back In" == t
            ? a.EASING_BACK_IN
            : "Back Out" == t
            ? a.EASING_BACK_OUT
            : "Back In Out" == t
            ? a.EASING_BACK_INOUT
            : "Elastic In" == t
            ? a.EASING_ELASTIC_IN
            : "Elastic Out" == t
            ? a.EASING_ELASTIC_OUT
            : "Bounce In" == t
            ? a.EASING_BOUNCE_IN
            : "Bounce Out" == t
            ? a.EASING_BOUNCE_OUT
            : "Quart Out" == t
            ? a.EASING_QUART_OUT
            : "Quart In" == t
            ? a.EASING_QUART_IN
            : "Quart In Out" == t
            ? a.EASING_QUART_INOUT
            : "Quint Out" == t
            ? a.EASING_QUINT_OUT
            : "Quint In" == t
            ? a.EASING_QUINT_IN
            : "Quint In Out" == t
            ? a.EASING_QUINT_INOUT
            : void 0;
        }),
        ($.prototype.createPort = function (t, e, i) {
          const s = t.inDropDown(e, a.EASINGS);
          return (
            s.set("linear"),
            (s.defaultValue = "linear"),
            (s.onChange = function () {
              (this.defaultEasing = this.easingFromString(s.get())), i && i();
            }.bind(this)),
            s
          );
        }),
        ($.slerpQuaternion = function (t, e, i, s, r, n) {
          $.slerpQuaternion.q1 ||
            (($.slerpQuaternion.q1 = quat.create()),
            ($.slerpQuaternion.q2 = quat.create()));
          const o = i.getKeyIndex(t);
          let h = o + 1;
          if ((h >= i.keys.length && (h = i.keys.length - 1), o == h))
            quat.set(
              e,
              i.keys[o].value,
              s.keys[o].value,
              r.keys[o].value,
              n.keys[o].value
            );
          else {
            const a = i.keys[o].time,
              l = (t - a) / (i.keys[h].time - a);
            quat.set(
              $.slerpQuaternion.q1,
              i.keys[o].value,
              s.keys[o].value,
              r.keys[o].value,
              n.keys[o].value
            ),
              quat.set(
                $.slerpQuaternion.q2,
                i.keys[h].value,
                s.keys[h].value,
                r.keys[h].value,
                n.keys[h].value
              ),
              quat.slerp(e, $.slerpQuaternion.q1, $.slerpQuaternion.q2, l);
          }
          return e;
        });
      const tt = X;
      tt.Anim = $;
      const et = function (t, e, i, s) {
        W.apply(this),
          (this.data = {}),
          (this._log = new h("core_port")),
          (this.direction = c.PORT_DIR_IN),
          (this.id = A()),
          (this.parent = t),
          (this.links = []),
          (this.value = 0),
          (this.name = e),
          (this.type = i || l.OP_PORT_TYPE_VALUE),
          (this.uiAttribs = s || {}),
          (this.anim = null),
          (this._oldAnimVal = -5711),
          (this.defaultValue = null),
          (this._uiActiveState = !0),
          (this.ignoreValueSerialize = !1),
          (this.onLinkChanged = null),
          (this.crashed = !1),
          (this._valueBeforeLink = null),
          (this._lastAnimFrame = -1),
          (this._animated = !1),
          (this.onValueChanged = null),
          (this.onTriggered = null),
          (this.onUiActiveStateChange = null),
          (this.changeAlways = !1),
          (this._warnedDeprecated = !1),
          (this._useVariableName = null),
          (this.activityCounter = 0),
          (this._tempLastUiValue = null),
          Object.defineProperty(this, "val", {
            get() {
              return (
                this._log.warn("val getter deprecated!", this),
                this._log.stack("val getter deprecated"),
                (this._warnedDeprecated = !0),
                this.get()
              );
            },
            set(t) {
              this._log.warn("val setter deprecated!", this),
                this._log.stack("val setter deprecated"),
                this.setValue(t),
                (this._warnedDeprecated = !0);
            },
          });
      };
      (et.prototype.getValueForDisplay = function () {
        let t = String(this.value);
        return (
          this.uiAttribs &&
            "boolnum" == this.uiAttribs.display &&
            ((t += " - "), this.value ? (t += "true") : (t += "false")),
          (t = t.replace(/(<([^>]+)>)/gi, "")),
          t.length > 100 && (t = t.substring(0, 100)),
          t
        );
      }),
        (et.prototype.onAnimToggle = function () {}),
        (et.prototype._onAnimToggle = function () {
          this.onAnimToggle();
        }),
        (et.prototype.remove = function () {
          this.removeLinks(), this.parent.removePort(this);
        }),
        (et.prototype.setUiAttribs = function (t) {
          let e = !1;
          this.uiAttribs || (this.uiAttribs = {});
          for (const i in t)
            this.uiAttribs[i] != t[i] && (e = !0),
              (this.uiAttribs[i] = t[i]),
              "group" == i &&
                this.indexPort &&
                this.indexPort.setUiAttribs({ group: t[i] });
          e && this.emitEvent("onUiAttrChange", t);
        }),
        (et.prototype.getUiAttribs = function () {
          return this.uiAttribs;
        }),
        (et.prototype.getUiAttrib = function (t) {
          return this.uiAttribs && this.uiAttribs.hasOwnProperty(t)
            ? this.uiAttribs[t]
            : null;
        }),
        (et.prototype.get = function () {
          return (
            this._animated &&
              this._lastAnimFrame != this.parent.patch.getFrameNum() &&
              ((this._lastAnimFrame = this.parent.patch.getFrameNum()),
              (this.value = this.anim.getValue(
                this.parent.patch.timer.getTime()
              )),
              (this._oldAnimVal = this.value),
              this.forceChange()),
            this.value
          );
        }),
        (et.prototype.set = et.prototype.setValue =
          function (t) {
            if (
              void 0 !== t &&
              this.parent.enabled &&
              !this.crashed &&
              (t !== this.value ||
                this.changeAlways ||
                this.type == l.OP_PORT_TYPE_TEXTURE ||
                this.type == l.OP_PORT_TYPE_ARRAY)
            ) {
              if (this._animated)
                this.anim.setValue(this.parent.patch.timer.getTime(), t);
              else {
                try {
                  (this.value = t), this.forceChange();
                } catch (t) {
                  (this.crashed = !0),
                    (this.setValue = function (t) {}),
                    (this.onTriggered = function () {}),
                    this._log.error("onvaluechanged exception cought", t),
                    this._log.error(t.stack),
                    this._log.warn("exception in: " + this.parent.name),
                    this.parent.patch.isEditorMode() &&
                      gui.showOpCrash(this.parent),
                    this.parent.patch.emitEvent("exception", t, this.parent),
                    this.parent.onError && this.parent.onError(t);
                }
                this.parent &&
                  this.parent.patch &&
                  this.parent.patch.isEditorMode() &&
                  this.type == l.OP_PORT_TYPE_TEXTURE &&
                  gui.texturePreview().updateTexturePort(this);
              }
              if (this.direction == c.PORT_DIR_OUT)
                for (let t = 0; t < this.links.length; ++t)
                  this.links[t].setValue();
            }
          }),
        (et.prototype.updateAnim = function () {
          this._animated &&
            ((this.value = this.get()),
            (this._oldAnimVal != this.value || this.changeAlways) &&
              ((this._oldAnimVal = this.value), this.forceChange()),
            (this._oldAnimVal = this.value));
        }),
        (et.args = function (t) {
          return (t + "")
            .replace(/[/][/].*$/gm, "")
            .replace(/\s+/g, "")
            .replace(/[/][*][^/*]*[*][/]/g, "")
            .split("){", 1)[0]
            .replace(/^[^(]*[(]/, "")
            .replace(/=[^,]+/g, "")
            .split(",")
            .filter(Boolean);
        }),
        (et.prototype.forceChange = function () {
          this.onValueChanged || this.onChange,
            this._activity(),
            this.emitEvent("change", this.value, this),
            this.onChange
              ? this.onChange(this, this.value)
              : this.onValueChanged && this.onValueChanged(this, this.value);
        }),
        (et.prototype.getTypeString = function () {
          return this.type == l.OP_PORT_TYPE_VALUE
            ? "Number"
            : this.type == l.OP_PORT_TYPE_FUNCTION
            ? "Trigger"
            : this.type == l.OP_PORT_TYPE_OBJECT
            ? "Object"
            : this.type == l.OP_PORT_TYPE_DYNAMIC
            ? "Dynamic"
            : this.type == l.OP_PORT_TYPE_ARRAY
            ? "Array"
            : this.type == l.OP_PORT_TYPE_STRING
            ? "String"
            : "Unknown";
        }),
        (et.prototype.deSerializeSettings = function (t) {
          if (
            t &&
            (t.animated && this.setAnimated(t.animated),
            t.useVariable && this.setVariableName(t.useVariable),
            t.anim)
          ) {
            this.anim || (this.anim = new $()),
              this.anim.addEventListener("onChange", () => {
                this.parent.patch.emitEvent(
                  "portAnimUpdated",
                  this.parent,
                  this,
                  this.anim
                );
              }),
              t.anim.loop && (this.anim.loop = t.anim.loop);
            for (const e in t.anim.keys)
              this.anim.keys.push(new X.Key(t.anim.keys[e]));
          }
        }),
        (et.prototype.getSerialized = function () {
          const t = {};
          if (
            ((t.name = this.getName()),
            this.ignoreValueSerialize ||
              0 !== this.links.length ||
              (this.type == l.OP_PORT_TYPE_OBJECT &&
                this.value &&
                this.value.tex) ||
              (t.value = this.value),
            this._useVariableName && (t.useVariable = this._useVariableName),
            this._animated && (t.animated = !0),
            this.anim && (t.anim = this.anim.getSerialized()),
            "file" == this.uiAttribs.display &&
              (t.display = this.uiAttribs.display),
            this.direction == c.PORT_DIR_OUT && this.links.length > 0)
          ) {
            t.links = [];
            for (const e in this.links)
              !this.links[e].ignoreInSerialize &&
                this.links[e].portIn &&
                this.links[e].portOut &&
                t.links.push(this.links[e].getSerialized());
          }
          return t;
        }),
        (et.prototype.shouldLink = function () {
          return !0;
        }),
        (et.prototype.removeLinks = function () {
          let t = 0;
          for (; this.links.length > 0; ) {
            if ((t++, t > 5e3)) {
              this._log.warn("could not delete links... / infinite loop"),
                (this.links.length = 0);
              break;
            }
            this.links[0].remove();
          }
        }),
        (et.prototype.removeLink = function (t) {
          for (const e in this.links)
            this.links[e] == t && this.links.splice(e, 1);
          this.direction == c.PORT_DIR_IN &&
            (this.type == l.OP_PORT_TYPE_VALUE
              ? this.setValue(this._valueBeforeLink || 0)
              : this.setValue(this._valueBeforeLink || null)),
            this.onLinkChanged && this.onLinkChanged(),
            this.emitEvent("onLinkChanged");
        }),
        (et.prototype.getName = function () {
          return this.name;
        }),
        (et.prototype.addLink = function (t) {
          (this._valueBeforeLink = this.value),
            this.links.push(t),
            this.onLinkChanged && this.onLinkChanged(),
            this.emitEvent("onLinkChanged");
        }),
        (et.prototype.getLinkTo = function (t) {
          for (const e in this.links)
            if (this.links[e].portIn == t || this.links[e].portOut == t)
              return this.links[e];
        }),
        (et.prototype.removeLinkTo = function (t) {
          for (const e in this.links)
            if (this.links[e].portIn == t || this.links[e].portOut == t)
              return (
                this.links[e].remove(),
                this.onLinkChanged && this.onLinkChanged(),
                void this.emitEvent("onLinkChanged")
              );
        }),
        (et.prototype.isLinkedTo = function (t) {
          for (const e in this.links)
            if (this.links[e].portIn == t || this.links[e].portOut == t)
              return !0;
          return !1;
        }),
        (et.prototype._activity = function () {
          this.activityCounter++;
        }),
        (et.prototype.trigger = function () {
          if ((this._activity(), 0 === this.links.length)) return;
          if (!this.parent.enabled) return;
          let t = null;
          try {
            for (let e = 0; e < this.links.length; ++e)
              this.links[e].portIn &&
                ((t = this.links[e].portIn),
                t.parent.patch.pushTriggerStack(t),
                t._onTriggered(),
                t.parent.patch.popTriggerStack()),
                this.links[e] && this.links[e].activity();
          } catch (e) {
            (this.parent.enabled = !1),
              this.parent.patch.isEditorMode() &&
                (this.parent.patch.emitEvent("exception", e, t.parent),
                this.parent.patch.emitEvent("opcrash", t),
                t.parent.onError && t.parent.onError(e)),
              this._log.warn("exception!"),
              this._log.error("ontriggered exception cought", e),
              this._log.error(e.stack),
              this._log.warn("exception in: " + t.parent.name);
          }
        }),
        (et.prototype.call = function () {
          this._log.warn("call deprecated - use trigger() "), this.trigger();
        }),
        (et.prototype.execute = function () {
          this._log.warn(
            "### execute port: " + this.getName(),
            this.goals.length
          );
        }),
        (et.prototype.setVariableName = function (t) {
          this._useVariableName = t;
        }),
        (et.prototype.getVariableName = function () {
          return this._useVariableName;
        }),
        (et.prototype.setVariable = function (t) {
          this.setAnimated(!1);
          const e = { useVariable: !1 };
          this._variableIn &&
            (this._variableIn.removeListener(this.set.bind(this)),
            (this._variableIn = null)),
            t
              ? ((this._variableIn = this.parent.patch.getVar(t)),
                this._variableIn
                  ? (this.type == l.OP_PORT_TYPE_OBJECT
                      ? this._variableIn.addListener(() => {
                          this.set(null), this.set(this._variableIn.getValue());
                        })
                      : this._variableIn.addListener(this.set.bind(this)),
                    this.set(this._variableIn.getValue()))
                  : this._log.warn("PORT VAR NOT FOUND!!!", t),
                (this._useVariableName = t),
                (e.useVariable = !0),
                (e.variableName = this._useVariableName))
              : ((e.variableName = this._useVariableName = null),
                (e.useVariable = !1)),
            this.setUiAttribs(e),
            this.parent.patch.emitEvent("portSetVariable", this.parent, this, t);
        }),
        (et.prototype._handleNoTriggerOpAnimUpdates = function (t) {
          let e = !1;
          for (let t = 0; t < this.parent.portsIn.length; t++)
            if (this.parent.portsIn.type == l.OP_PORT_TYPE_FUNCTION) {
              e = !0;
              break;
            }
          e ||
            (t
              ? (this._notriggerAnimUpdate = this.parent.patch.on(
                  "onRenderFrame",
                  () => {
                    this.updateAnim();
                  }
                ))
              : this.parent.patch.removeEventListener(this._notriggerAnimUpdate));
        }),
        (et.prototype.setAnimated = function (t) {
          this._animated != t &&
            ((this._animated = t),
            this._animated &&
              !this.anim &&
              ((this.anim = new $()),
              this.anim.addEventListener("onChange", () => {
                this.parent.patch.emitEvent(
                  "portAnimUpdated",
                  this.parent,
                  this,
                  this.anim
                );
              })),
            this._onAnimToggle()),
            this._handleNoTriggerOpAnimUpdates(t),
            this.setUiAttribs({ isAnimated: this._animated });
        }),
        (et.prototype.toggleAnim = function (t) {
          (this._animated = !this._animated),
            this._animated &&
              !this.anim &&
              ((this.anim = new $()),
              this.anim.addEventListener("onChange", () => {
                this.parent.patch.emitEvent(
                  "portAnimUpdated",
                  this.parent,
                  this,
                  this.anim
                );
              })),
            this.setAnimated(this._animated),
            this._onAnimToggle(),
            this.setUiAttribs({ isAnimated: this._animated });
        }),
        (et.prototype.getType = function () {
          return this.type;
        }),
        (et.prototype.isLinked = function () {
          return this.links.length > 0;
        }),
        (et.prototype.isBoundToVar = function () {
          return null != this._useVariableName;
        }),
        (et.prototype.isAnimated = function () {
          return this._animated;
        }),
        (et.prototype.isHidden = function () {
          return this.uiAttribs.hidePort;
        }),
        (et.prototype._onTriggered = function (t) {
          this._activity(),
            this.parent.updateAnims(),
            this.parent.enabled && this.onTriggered && this.onTriggered(t);
        }),
        (et.prototype._onSetProfiling = function (t) {
          this.parent.patch.profiler.add("port", this),
            this.setValue(t),
            this.parent.patch.profiler.add("port", null);
        }),
        (et.prototype._onTriggeredProfiling = function () {
          this.parent.enabled &&
            this.onTriggered &&
            (this.parent.patch.profiler.add("port", this),
            this.onTriggered(),
            this.parent.patch.profiler.add("port", null));
        }),
        (et.prototype.onValueChange = function (t) {
          this.onChange = t;
        }),
        (et.prototype.getUiActiveState = function () {
          return this._uiActiveState;
        }),
        (et.prototype.setUiActiveState = function (t) {
          (this._uiActiveState = t),
            this.onUiActiveStateChange && this.onUiActiveStateChange();
        }),
        (et.prototype.hidePort = function () {
          this._log.warn("op.hideport() is deprecated, do not use it!");
        }),
        (et.portTypeNumberToString = function (t) {
          return t == l.OP_PORT_TYPE_VALUE
            ? "value"
            : t == l.OP_PORT_TYPE_FUNCTION
            ? "function"
            : t == l.OP_PORT_TYPE_OBJECT
            ? "object"
            : t == l.OP_PORT_TYPE_ARRAY
            ? "array"
            : t == l.OP_PORT_TYPE_STRING
            ? "string"
            : t == l.OP_PORT_TYPE_DYNAMIC
            ? "dynamic"
            : "unknown";
        });
      class it extends et {
        constructor(t, e, i, s, r) {
          super(t, e, i, s),
            (this.indexPort = r),
            (this.indexPort.set = (t) => {
              const e = s.values;
              if (!e) return;
              let i = Math.floor(t);
              (i = Math.min(i, e.length - 1)),
                (i = Math.max(i, 0)),
                this.indexPort.setValue(i),
                this.set(e[i]),
                this.parent.patch.isEditorMode() &&
                  window.gui &&
                  gui.patchView.isCurrentOp(this.parent) &&
                  gui.opParams.show(this.parent);
            });
        }
        setUiAttribs(t) {
          const e = t.hidePort;
          (t.hidePort = !0),
            super.setUiAttribs(t),
            void 0 !== e && this.indexPort.setUiAttribs({ hidePort: e });
        }
      }
      class st extends it {
        setUiAttribs(t) {
          if (this.indexPort.isLinked())
            for (const e in t) "greyout" != e || t[e] || (t[e] = "true");
          super.setUiAttribs(t);
        }
      }
      const rt = function (t, e, i, s, r, n, o, a, l, c) {
        if (
          ((this._loc = -1),
          (this._log = new h("cgl_uniform")),
          (this._type = e),
          (this._cgl = t._cgl),
          (this._name = i),
          (this._shader = t),
          (this._value = 1e-5),
          (this._oldValue = null),
          (this._port = null),
          (this._structName = l),
          (this._structUniformName = a),
          (this._propertyName = c),
          this._shader._addUniform(this),
          (this.needsUpdate = !0),
          (this.shaderType = null),
          (this.comment = null),
          "f" == e)
        )
          (this.set = this.setValue = this.setValueF.bind(this)),
            (this.updateValue = this.updateValueF.bind(this));
        else if ("f[]" == e)
          (this.set = this.setValue = this.setValueArrayF.bind(this)),
            (this.updateValue = this.updateValueArrayF.bind(this));
        else if ("2f[]" == e)
          (this.set = this.setValue = this.setValueArray2F.bind(this)),
            (this.updateValue = this.updateValueArray2F.bind(this));
        else if ("3f[]" == e)
          (this.set = this.setValue = this.setValueArray3F.bind(this)),
            (this.updateValue = this.updateValueArray3F.bind(this));
        else if ("4f[]" == e)
          (this.set = this.setValue = this.setValueArray4F.bind(this)),
            (this.updateValue = this.updateValueArray4F.bind(this));
        else if ("i" == e)
          (this.set = this.setValue = this.setValueI.bind(this)),
            (this.updateValue = this.updateValueI.bind(this));
        else if ("2i" == e)
          (this.set = this.setValue = this.setValue2I.bind(this)),
            (this.updateValue = this.updateValue2I.bind(this));
        else if ("3i" == e)
          (this.set = this.setValue = this.setValue3I.bind(this)),
            (this.updateValue = this.updateValue3I.bind(this));
        else if ("4i" == e)
          (this.set = this.setValue = this.setValue4I.bind(this)),
            (this.updateValue = this.updateValue4I.bind(this));
        else if ("b" == e)
          (this.set = this.setValue = this.setValueBool.bind(this)),
            (this.updateValue = this.updateValueBool.bind(this));
        else if ("4f" == e)
          (this.set = this.setValue = this.setValue4F.bind(this)),
            (this.updateValue = this.updateValue4F.bind(this));
        else if ("3f" == e)
          (this.set = this.setValue = this.setValue3F.bind(this)),
            (this.updateValue = this.updateValue3F.bind(this));
        else if ("2f" == e)
          (this.set = this.setValue = this.setValue2F.bind(this)),
            (this.updateValue = this.updateValue2F.bind(this));
        else if ("t" == e)
          (this.set = this.setValue = this.setValueT.bind(this)),
            (this.updateValue = this.updateValueT.bind(this));
        else if ("tc" == e)
          (this.set = this.setValue = this.setValueT.bind(this)),
            (this.updateValue = this.updateValueT.bind(this));
        else if ("t[]" == e)
          (this.set = this.setValue = this.setValueArrayT.bind(this)),
            (this.updateValue = this.updateValueArrayT.bind(this));
        else {
          if ("m4" != e && "m4[]" != e) throw new Error("Unknown uniform type");
          (this.set = this.setValue = this.setValueM4.bind(this)),
            (this.updateValue = this.updateValueM4.bind(this));
        }
        "object" == typeof s && s instanceof et
          ? ((this._port = s),
            (this._value = this._port.get()),
            r && n && o
              ? ((r instanceof et && n instanceof et && o instanceof et) ||
                  this._log.error(
                    "[cgl_uniform] mixed port/value parameter for vec4 ",
                    this._name
                  ),
                (this._value = [0, 0, 0, 0]),
                (this._port2 = r),
                (this._port3 = n),
                (this._port4 = o),
                this._port.on("change", this.updateFromPort4f.bind(this)),
                this._port2.on("change", this.updateFromPort4f.bind(this)),
                this._port3.on("change", this.updateFromPort4f.bind(this)),
                this._port4.on("change", this.updateFromPort4f.bind(this)),
                this.updateFromPort4f())
              : r && n
              ? ((r instanceof et && n instanceof et) ||
                  this._log.error(
                    "[cgl_uniform] mixed port/value parameter for vec4 ",
                    this._name
                  ),
                (this._value = [0, 0, 0]),
                (this._port2 = r),
                (this._port3 = n),
                this._port.on("change", this.updateFromPort3f.bind(this)),
                this._port2.on("change", this.updateFromPort3f.bind(this)),
                this._port3.on("change", this.updateFromPort3f.bind(this)),
                this.updateFromPort3f())
              : r
              ? (r instanceof et ||
                  this._log.error(
                    "[cgl_uniform] mixed port/value parameter for vec4 ",
                    this._name
                  ),
                (this._value = [0, 0]),
                (this._port2 = r),
                this._port.on("change", this.updateFromPort2f.bind(this)),
                this._port2.on("change", this.updateFromPort2f.bind(this)),
                this.updateFromPort2f())
              : this._port.on("change", this.updateFromPort.bind(this)))
          : (this._value = s),
          this.setValue(this._value),
          (this.needsUpdate = !0);
      };
      (rt.prototype.copy = function (t) {
        const e = new rt(
          t,
          this._type,
          this._name,
          this._value,
          this._port2,
          this._port3,
          this._port4,
          this._structUniformName,
          this._structName,
          this._propertyName
        );
        return (e.shaderType = this.shaderType), e;
      }),
        (rt.prototype.getGlslTypeString = function () {
          return "f" == this._type
            ? "float"
            : "b" == this._type
            ? "bool"
            : "i" == this._type
            ? "int"
            : "2i" == this._type
            ? "ivec2"
            : "2f" == this._type
            ? "vec2"
            : "3f" == this._type
            ? "vec3"
            : "4f" == this._type
            ? "vec4"
            : "m4" == this._type
            ? "mat4"
            : "t" == this._type
            ? "sampler2D"
            : "tc" == this._type
            ? "samplerCube"
            : "3f[]" == this._type || "m4[]" == this._type
            ? null
            : void this._log.warn(
                "[CGL UNIFORM] unknown glsl type string ",
                this._type
              );
        }),
        (rt.prototype._isValidLoc = function () {
          return -1 != this._loc;
        }),
        (rt.prototype.getType = function () {
          return this._type;
        }),
        (rt.prototype.getName = function () {
          return this._name;
        }),
        (rt.prototype.getValue = function () {
          return this._value;
        }),
        (rt.prototype.getShaderType = function () {
          return this.shaderType;
        }),
        (rt.prototype.isStructMember = function () {
          return !!this._structName;
        }),
        (rt.prototype.resetLoc = function () {
          (this._loc = -1), (this.needsUpdate = !0);
        }),
        (rt.prototype.bindTextures = function () {
          return this._value;
        }),
        (rt.prototype.resetLoc = function () {
          (this._loc = -1), (this.needsUpdate = !0);
        }),
        (rt.prototype.bindTextures = function () {}),
        (rt.prototype.getLoc = function () {
          return this._loc;
        }),
        (rt.prototype.updateFromPort4f = function () {
          (this._value[0] = this._port.get()),
            (this._value[1] = this._port2.get()),
            (this._value[2] = this._port3.get()),
            (this._value[3] = this._port4.get()),
            this.setValue(this._value);
        }),
        (rt.prototype.updateFromPort3f = function () {
          (this._value[0] = this._port.get()),
            (this._value[1] = this._port2.get()),
            (this._value[2] = this._port3.get()),
            this.setValue(this._value);
        }),
        (rt.prototype.updateFromPort2f = function () {
          (this._value[0] = this._port.get()),
            (this._value[1] = this._port2.get()),
            this.setValue(this._value);
        }),
        (rt.prototype.updateFromPort = function () {
          this.setValue(this._port.get());
        }),
        (rt.prototype.updateValueF = function () {
          this._isValidLoc()
            ? (this.needsUpdate = !1)
            : (this._loc = this._shader
                .getCgl()
                .gl.getUniformLocation(this._shader.getProgram(), this._name)),
            this._shader.getCgl().gl.uniform1f(this._loc, this._value),
            this._cgl.profileData.profileUniformCount++;
        }),
        (rt.prototype.setValueF = function (t) {
          t != this._value && ((this.needsUpdate = !0), (this._value = t));
        }),
        (rt.prototype.updateValueI = function () {
          this._isValidLoc()
            ? (this.needsUpdate = !1)
            : (this._loc = this._shader
                .getCgl()
                .gl.getUniformLocation(this._shader.getProgram(), this._name)),
            this._shader.getCgl().gl.uniform1i(this._loc, this._value),
            this._cgl.profileData.profileUniformCount++;
        }),
        (rt.prototype.updateValue2I = function () {
          this._value &&
            (this._isValidLoc() ||
              ((this._loc = this._shader
                .getCgl()
                .gl.getUniformLocation(this._shader.getProgram(), this._name)),
              this._cgl.profileData.profileShaderGetUniform++,
              (this._cgl.profileData.profileShaderGetUniformName = this._name)),
            this._shader
              .getCgl()
              .gl.uniform2i(this._loc, this._value[0], this._value[1]),
            (this.needsUpdate = !1),
            this._cgl.profileData.profileUniformCount++);
        }),
        (rt.prototype.updateValue3I = function () {
          this._value &&
            (this._isValidLoc() ||
              ((this._loc = this._shader
                .getCgl()
                .gl.getUniformLocation(this._shader.getProgram(), this._name)),
              this._cgl.profileData.profileShaderGetUniform++,
              (this._cgl.profileData.profileShaderGetUniformName = this._name)),
            this._shader
              .getCgl()
              .gl.uniform3i(
                this._loc,
                this._value[0],
                this._value[1],
                this._value[2]
              ),
            (this.needsUpdate = !1),
            this._cgl.profileData.profileUniformCount++);
        }),
        (rt.prototype.updateValue4I = function () {
          this._isValidLoc() ||
            ((this._loc = this._shader
              .getCgl()
              .gl.getUniformLocation(this._shader.getProgram(), this._name)),
            this._cgl.profileData.profileShaderGetUniform++,
            (this._cgl.profileData.profileShaderGetUniformName = this._name)),
            this._shader
              .getCgl()
              .gl.uniform4i(
                this._loc,
                this._value[0],
                this._value[1],
                this._value[2],
                this._value[3]
              ),
            this._cgl.profileData.profileUniformCount++;
        }),
        (rt.prototype.setValueI = function (t) {
          t != this._value && ((this.needsUpdate = !0), (this._value = t));
        }),
        (rt.prototype.setValue2I = function (t) {
          t &&
            (this._oldValue
              ? (t[0] == this._oldValue[0] && t[1] == this._oldValue[1]) ||
                ((this._oldValue[0] = t[0]),
                (this._oldValue[1] = t[1]),
                (this.needsUpdate = !0))
              : ((this._oldValue = [t[0] - 1, 1]), (this.needsUpdate = !0)),
            (this._value = t));
        }),
        (rt.prototype.setValue3I = function (t) {
          t &&
            (this._oldValue
              ? (t[0] == this._oldValue[0] &&
                  t[1] == this._oldValue[1] &&
                  t[2] == this._oldValue[2]) ||
                ((this._oldValue[0] = t[0]),
                (this._oldValue[1] = t[1]),
                (this._oldValue[2] = t[2]),
                (this.needsUpdate = !0))
              : ((this._oldValue = [t[0] - 1, 1, 2]), (this.needsUpdate = !0)),
            (this._value = t));
        }),
        (rt.prototype.setValue4I = function (t) {
          (this.needsUpdate = !0), (this._value = t || vec4.create());
        }),
        (rt.prototype.updateValueBool = function () {
          this._isValidLoc()
            ? (this.needsUpdate = !1)
            : (this._loc = this._shader
                .getCgl()
                .gl.getUniformLocation(this._shader.getProgram(), this._name)),
            this._shader.getCgl().gl.uniform1i(this._loc, this._value ? 1 : 0),
            this._cgl.profileData.profileUniformCount++;
        }),
        (rt.prototype.setValueBool = function (t) {
          t != this._value && ((this.needsUpdate = !0), (this._value = t));
        }),
        (rt.prototype.setValueArray4F = function (t) {
          (this.needsUpdate = !0), (this._value = t);
        }),
        (rt.prototype.updateValueArray4F = function () {
          this._isValidLoc()
            ? (this.needsUpdate = !1)
            : (this._loc = this._shader
                .getCgl()
                .gl.getUniformLocation(this._shader.getProgram(), this._name)),
            this._value &&
              (this._shader.getCgl().gl.uniform4fv(this._loc, this._value),
              this._cgl.profileData.profileUniformCount++);
        }),
        (rt.prototype.setValueArray3F = function (t) {
          (this.needsUpdate = !0), (this._value = t);
        }),
        (rt.prototype.updateValueArray3F = function () {
          this._isValidLoc()
            ? (this.needsUpdate = !1)
            : (this._loc = this._shader
                .getCgl()
                .gl.getUniformLocation(this._shader.getProgram(), this._name)),
            this._value &&
              (this._shader.getCgl().gl.uniform3fv(this._loc, this._value),
              this._cgl.profileData.profileUniformCount++);
        }),
        (rt.prototype.setValueArray2F = function (t) {
          (this.needsUpdate = !0), (this._value = t);
        }),
        (rt.prototype.updateValueArray2F = function () {
          this._isValidLoc()
            ? (this.needsUpdate = !1)
            : (this._loc = this._shader
                .getCgl()
                .gl.getUniformLocation(this._shader.getProgram(), this._name)),
            this._value &&
              (this._shader.getCgl().gl.uniform2fv(this._loc, this._value),
              this._cgl.profileData.profileUniformCount++);
        }),
        (rt.prototype.setValueArrayF = function (t) {
          (this.needsUpdate = !0), (this._value = t);
        }),
        (rt.prototype.updateValueArrayF = function () {
          this._isValidLoc()
            ? (this.needsUpdate = !1)
            : (this._loc = this._shader
                .getCgl()
                .gl.getUniformLocation(this._shader.getProgram(), this._name)),
            this._value &&
              (this._shader.getCgl().gl.uniform1fv(this._loc, this._value),
              this._cgl.profileData.profileUniformCount++);
        }),
        (rt.prototype.setValueArrayT = function (t) {
          (this.needsUpdate = !0), (this._value = t);
        }),
        (rt.prototype.updateValue3F = function () {
          this._value &&
            (this._isValidLoc() ||
              ((this._loc = this._shader
                .getCgl()
                .gl.getUniformLocation(this._shader.getProgram(), this._name)),
              this._cgl.profileData.profileShaderGetUniform++,
              (this._cgl.profileData.profileShaderGetUniformName = this._name)),
            this._shader
              .getCgl()
              .gl.uniform3f(
                this._loc,
                this._value[0],
                this._value[1],
                this._value[2]
              ),
            (this.needsUpdate = !1),
            this._cgl.profileData.profileUniformCount++);
        }),
        (rt.prototype.setValue3F = function (t) {
          t &&
            (this._oldValue
              ? (t[0] == this._oldValue[0] &&
                  t[1] == this._oldValue[1] &&
                  t[2] == this._oldValue[2]) ||
                ((this._oldValue[0] = t[0]),
                (this._oldValue[1] = t[1]),
                (this._oldValue[2] = t[2]),
                (this.needsUpdate = !0))
              : ((this._oldValue = [t[0] - 1, 1, 2]), (this.needsUpdate = !0)),
            (this._value = t));
        }),
        (rt.prototype.updateValue2F = function () {
          this._value &&
            (this._isValidLoc() ||
              ((this._loc = this._shader
                .getCgl()
                .gl.getUniformLocation(this._shader.getProgram(), this._name)),
              this._cgl.profileData.profileShaderGetUniform++,
              (this._cgl.profileData.profileShaderGetUniformName = this._name)),
            this._shader
              .getCgl()
              .gl.uniform2f(this._loc, this._value[0], this._value[1]),
            (this.needsUpdate = !1),
            this._cgl.profileData.profileUniformCount++);
        }),
        (rt.prototype.setValue2F = function (t) {
          t &&
            (this._oldValue
              ? (t[0] == this._oldValue[0] && t[1] == this._oldValue[1]) ||
                ((this._oldValue[0] = t[0]),
                (this._oldValue[1] = t[1]),
                (this.needsUpdate = !0))
              : ((this._oldValue = [t[0] - 1, 1]), (this.needsUpdate = !0)),
            (this._value = t));
        }),
        (rt.prototype.updateValue4F = function () {
          this._isValidLoc() ||
            ((this._loc = this._shader
              .getCgl()
              .gl.getUniformLocation(this._shader.getProgram(), this._name)),
            this._cgl.profileData.profileShaderGetUniform++,
            (this._cgl.profileData.profileShaderGetUniformName = this._name)),
            this._value ||
              (this._log.warn("no value for uniform", this._name, this),
              (this._value = [0, 0, 0, 0])),
            (this.needsUpdate = !1),
            this._shader
              .getCgl()
              .gl.uniform4f(
                this._loc,
                this._value[0],
                this._value[1],
                this._value[2],
                this._value[3]
              ),
            this._cgl.profileData.profileUniformCount++;
        }),
        (rt.prototype.setValue4F = function (t) {
          "number" == typeof this.value && (this.value = vec4.create()),
            t &&
              (this._oldValue
                ? (t[0] == this._oldValue[0] &&
                    t[1] == this._oldValue[1] &&
                    t[2] == this._oldValue[2] &&
                    t[3] == this._oldValue[3]) ||
                  ((this._oldValue[0] = t[0]),
                  (this._oldValue[1] = t[1]),
                  (this._oldValue[2] = t[2]),
                  (this.needsUpdate = !0))
                : ((this._oldValue = [t[0] - 1, 1, 2, 3]),
                  (this.needsUpdate = !0)),
              (this._value = t));
        }),
        (rt.prototype.updateValueM4 = function () {
          if (
            (this._isValidLoc() ||
              ((this._loc = this._shader
                .getCgl()
                .gl.getUniformLocation(this._shader.getProgram(), this._name)),
              this._cgl.profileData.profileShaderGetUniform++,
              (this._cgl.profileData.profileShaderGetUniformName = this._name)),
            !this._value || this._value.length % 16 != 0)
          )
            return console.log("this.name", this._name, this._value);
          this._shader.getCgl().gl.uniformMatrix4fv(this._loc, !1, this._value),
            this._cgl.profileData.profileUniformCount++;
        }),
        (rt.prototype.setValueM4 = function (t) {
          (this.needsUpdate = !0), (this._value = t || mat4.create());
        }),
        (rt.prototype.updateValueArrayT = function () {
          this._isValidLoc()
            ? (this.needsUpdate = !1)
            : (this._loc = this._shader
                .getCgl()
                .gl.getUniformLocation(this._shader.getProgram(), this._name)),
            this._value &&
              (this._shader.getCgl().gl.uniform1iv(this._loc, this._value),
              this._cgl.profileData.profileUniformCount++);
        }),
        (rt.prototype.updateValueT = function () {
          this._isValidLoc() ||
            ((this._loc = this._shader
              .getCgl()
              .gl.getUniformLocation(this._shader.getProgram(), this._name)),
            this._cgl.profileData.profileShaderGetUniform++,
            (this._cgl.profileData.profileShaderGetUniformName = this._name)),
            this._cgl.profileData.profileUniformCount++,
            this._shader.getCgl().gl.uniform1i(this._loc, this._value),
            (this.needsUpdate = !1);
        }),
        (rt.prototype.setValueT = function (t) {
          (this.needsUpdate = !0), (this._value = t);
        });
      const nt = 180 / Math.PI,
        ot = {
          MATH: { DEG2RAD: Math.PI / 180, RAD2DEG: nt },
          SHADER: {
            SHADERVAR_VERTEX_POSITION: "vPosition",
            SHADERVAR_VERTEX_NUMBER: "attrVertIndex",
            SHADERVAR_VERTEX_NORMAL: "attrVertNormal",
            SHADERVAR_VERTEX_TEXCOORD: "attrTexCoord",
            SHADERVAR_INSTANCE_MMATRIX: "instMat",
            SHADERVAR_VERTEX_COLOR: "attrVertColor",
            SHADERVAR_UNI_PROJMAT: "projMatrix",
            SHADERVAR_UNI_VIEWMAT: "viewMatrix",
            SHADERVAR_UNI_MODELMAT: "modelMatrix",
            SHADERVAR_UNI_NORMALMAT: "normalMatrix",
            SHADERVAR_UNI_INVVIEWMAT: "inverseViewMatrix",
            SHADERVAR_UNI_VIEWPOS: "camPos",
          },
          BLEND_MODES: {
            BLEND_NONE: 0,
            BLEND_NORMAL: 1,
            BLEND_ADD: 2,
            BLEND_SUB: 3,
            BLEND_MUL: 4,
          },
        };
      const ht = { lastMesh: null },
        at = function (t, e, i) {
          (this._cgl = t),
            (this._log = new h("cgl_mesh")),
            (this._bufVertexAttrib = null),
            (this._bufVerticesIndizes = this._cgl.gl.createBuffer()),
            (this._indexType = this._cgl.gl.UNSIGNED_SHORT),
            (this._attributes = []),
            (this._attribLocs = {}),
            (this._geom = null),
            (this._lastShader = null),
            (this._numInstances = 0),
            (this._glPrimitive = i),
            (this._preWireframeGeom = null),
            (this.addVertexNumbers = !1),
            (this.feedBackAttributes = []),
            this.setGeom(e),
            (this._feedBacks = []),
            (this._feedBacksChanged = !1),
            (this._transformFeedBackLoc = -1),
            (this._lastAttrUpdate = 0),
            (this._name = "unknown"),
            this._cgl.profileData.addHeavyEvent("mesh constructed", this._name),
            (this._queryExt = null),
            Object.defineProperty(this, "numInstances", {
              get() {
                return this._numInstances;
              },
              set(t) {
                this.setNumInstances(t);
              },
            });
        };
      (at.prototype.updateVertices = function (t) {
        this.setAttribute(ot.SHADER.SHADERVAR_VERTEX_POSITION, t.vertices, 3),
          (this._numVerts = t.vertices.length / 3);
      }),
        (at.prototype.setAttributePointer = function (t, e, i, s) {
          for (let r = 0; r < this._attributes.length; r++)
            this._attributes[r].name == t &&
              (this._attributes[r].pointer || (this._attributes[r].pointer = []),
              this._attributes[r].pointer.push({
                loc: -1,
                name: e,
                stride: i,
                offset: s,
                instanced: t == ot.SHADER.SHADERVAR_INSTANCE_MMATRIX,
              }));
        }),
        (at.prototype.getAttribute = function (t) {
          for (let e = 0; e < this._attributes.length; e++)
            if (this._attributes[e].name == t) return this._attributes[e];
        }),
        (at.prototype.setAttributeRange = function (t, e, i, s) {
          t &&
            (i || s) &&
            (t.name || (console.log(t), this._log.stack("no attrname?!")),
            this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, t.buffer),
            (this._cgl.profileData.profileMeshAttributes += s - i || 0),
            (this._cgl.profileData.profileSingleMeshAttribute[this._name] =
              this._cgl.profileData.profileSingleMeshAttribute[this._name] || 0),
            (this._cgl.profileData.profileSingleMeshAttribute[this._name] +=
              s - i || 0),
            t.numItems < e.length / t.itemSize && this._resizeAttr(e, t),
            s >= e.length - 1 &&
              this._log.log(
                this._cgl.canvas.id +
                  " " +
                  t.name +
                  " buffersubdata out of bounds ?",
                e.length,
                s,
                i,
                t
              ),
            1 == this._cgl.glVersion
              ? this._cgl.gl.bufferSubData(this._cgl.gl.ARRAY_BUFFER, 0, e)
              : this._cgl.gl.bufferSubData(
                  this._cgl.gl.ARRAY_BUFFER,
                  4 * i,
                  e,
                  i,
                  s - i
                ));
        }),
        (at.prototype._resizeAttr = function (t, e) {
          e.buffer && this._cgl.gl.deleteBuffer(e.buffer),
            (e.buffer = this._cgl.gl.createBuffer()),
            this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, e.buffer),
            this._bufferArray(t, e),
            (e.numItems = t.length / e.itemSize);
        }),
        (at.prototype._bufferArray = function (t, e) {
          let i = null;
          t &&
            (this._cgl.debugOneFrame &&
              console.log("_bufferArray", t.length, e.name),
            t instanceof Float32Array
              ? (i = t)
              : e && i && i.length == t.length
              ? i.set(t)
              : ((i = new Float32Array(t)),
                this._cgl.debugOneFrame &&
                  console.log(
                    "_bufferArray create new float32array",
                    t.length,
                    e.name
                  ),
                this._cgl.profileData.profileNonTypedAttrib++,
                (this._cgl.profileData.profileNonTypedAttribNames =
                  "(" + this._name + ":" + e.name + ")")),
            (e.arrayLength = i.length),
            this._cgl.gl.bufferData(
              this._cgl.gl.ARRAY_BUFFER,
              i,
              this._cgl.gl.DYNAMIC_DRAW
            ));
        }),
        (at.prototype.addAttribute =
          at.prototype.updateAttribute =
          at.prototype.setAttribute =
            function (t, e, i, s) {
              if (!e)
                throw (
                  (this._log.error("mesh addAttribute - no array given! " + t),
                  new Error())
                );
              let r = null,
                n = !1,
                o = 0;
              const h = e.length / i;
              for (
                this._cgl.profileData.profileMeshAttributes += h || 0,
                  "function" == typeof s && (r = s),
                  "object" == typeof s &&
                    (s.cb && (r = s.cb), s.instanced && (n = s.instanced)),
                  t == ot.SHADER.SHADERVAR_INSTANCE_MMATRIX && (n = !0),
                  o = 0;
                o < this._attributes.length;
                o++
              ) {
                const i = this._attributes[o];
                if (i.name == t)
                  return (
                    i.numItems === h || this._resizeAttr(e, i),
                    this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, i.buffer),
                    this._bufferArray(e, i),
                    i
                  );
              }
              const a = this._cgl.gl.createBuffer();
              this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, a);
              let l = this._cgl.gl.FLOAT;
              s && s.type && (l = s.type);
              const c = {
                buffer: a,
                name: t,
                cb: r,
                itemSize: i,
                numItems: h,
                startItem: 0,
                instanced: n,
                type: l,
              };
              return (
                this._bufferArray(e, c),
                t == ot.SHADER.SHADERVAR_VERTEX_POSITION &&
                  (this._bufVertexAttrib = c),
                this._attributes.push(c),
                (this._attribLocs = {}),
                c
              );
            }),
        (at.prototype.getAttributes = function () {
          return this._attributes;
        }),
        (at.prototype.updateTexCoords = function (t) {
          if (t.texCoords && t.texCoords.length > 0)
            this.setAttribute(
              ot.SHADER.SHADERVAR_VERTEX_TEXCOORD,
              t.texCoords,
              2
            );
          else {
            const e = new Float32Array(Math.round((t.vertices.length / 3) * 2));
            this.setAttribute(ot.SHADER.SHADERVAR_VERTEX_TEXCOORD, e, 2);
          }
        }),
        (at.prototype.updateNormals = function (t) {
          if (t.vertexNormals && t.vertexNormals.length > 0)
            this.setAttribute("attrVertNormal", t.vertexNormals, 3);
          else {
            const e = new Float32Array(Math.round(t.vertices.length));
            this.setAttribute("attrVertNormal", e, 3);
          }
        }),
        (at.prototype._setVertexNumbers = function (t) {
          if (
            !this._verticesNumbers ||
            this._verticesNumbers.length != this._numVerts ||
            t
          ) {
            if (t) this._verticesNumbers = t;
            else {
              this._verticesNumbers = new Float32Array(this._numVerts);
              for (let t = 0; t < this._numVerts; t++)
                this._verticesNumbers[t] = t;
            }
            this.setAttribute(
              ot.SHADER.SHADERVAR_VERTEX_NUMBER,
              this._verticesNumbers,
              1,
              (t, e, i) => {
                i.uniformNumVertices ||
                  (i.uniformNumVertices = new rt(
                    i,
                    "f",
                    "numVertices",
                    this._numVerts
                  )),
                  i.uniformNumVertices.setValue(this._numVerts);
              }
            );
          }
        }),
        (at.prototype.setVertexIndices = function (t) {
          if (this._bufVerticesIndizes)
            if (t.length > 0) {
              for (let e = 0; e < t.length; e++)
                if (t[e] >= this._numVerts)
                  return void this._log.warn("invalid index in " + this._name);
              this._cgl.gl.bindBuffer(
                this._cgl.gl.ELEMENT_ARRAY_BUFFER,
                this._bufVerticesIndizes
              ),
                t instanceof Float32Array &&
                  this._log.warn("vertIndices float32Array: " + this._name),
                t instanceof Uint32Array
                  ? ((this.vertIndicesTyped = t),
                    (this._indexType = this._cgl.gl.UNSIGNED_INT))
                  : t instanceof Uint16Array
                  ? (this.vertIndicesTyped = t)
                  : (this.vertIndicesTyped = new Uint16Array(t)),
                this._cgl.gl.bufferData(
                  this._cgl.gl.ELEMENT_ARRAY_BUFFER,
                  this.vertIndicesTyped,
                  this._cgl.gl.DYNAMIC_DRAW
                ),
                (this._bufVerticesIndizes.itemSize = 1),
                (this._bufVerticesIndizes.numItems = t.length);
            } else this._bufVerticesIndizes.numItems = 0;
          else this._log.warn("no bufVerticesIndizes: " + this._name);
        }),
        (at.prototype.setGeom = function (t, e) {
          (this._geom = t),
            null != t.glPrimitive && (this._glPrimitive = t.glPrimitive),
            this._geom &&
              this._geom.name &&
              (this._name = "mesh " + this._geom.name),
            (ht.lastMesh = null),
            this._cgl.profileData.profileMeshSetGeom++,
            this._disposeAttributes(),
            this.updateVertices(this._geom),
            this.setVertexIndices(this._geom.verticesIndices),
            this.updateTexCoords(this._geom),
            this.updateNormals(this._geom),
            this._geom.hasOwnProperty("tangents") &&
              this._geom.tangents &&
              this._geom.tangents.length > 0 &&
              this.setAttribute("attrTangent", this._geom.tangents, 3),
            this._geom.hasOwnProperty("biTangents") &&
              this._geom.biTangents &&
              this._geom.biTangents.length > 0 &&
              this.setAttribute("attrBiTangent", this._geom.biTangents, 3),
            this._geom.vertexColors.length > 0 &&
              (this._geom.vertexColors.flat && this._geom.vertexColors.flat(100),
              this.setAttribute("attrVertColor", this._geom.vertexColors, 4)),
            this.addVertexNumbers && this._setVertexNumbers();
          const i = this._geom.getAttributes();
          for (const t in i) this.setAttribute(t, i[t].data, i[t].itemSize);
          e && (this._geom = null);
        }),
        (at.prototype._preBind = function (t) {
          for (let e = 0; e < this._attributes.length; e++)
            this._attributes[e].cb &&
              this._attributes[e].cb(this._attributes[e], this._geom, t);
        }),
        (at.prototype._checkAttrLengths = function () {
          for (let t = 0; t < this._attributes.length; t++)
            if (
              this._attributes[t].arrayLength / this._attributes[t].itemSize <
              this._attributes[0].arrayLength / this._attributes[0].itemSize
            ) {
              let t = "unknown";
              this._geom && (t = this._geom.name);
            }
        }),
        (at.prototype._bind = function (t) {
          if (!t.isValid()) return;
          let e = [];
          if (
            (this._attribLocs[t.id]
              ? (e = this._attribLocs[t.id])
              : (this._attribLocs[t.id] = e),
            (this._lastShader = t),
            t.lastCompile > this._lastAttrUpdate ||
              e.length != this._attributes.length)
          ) {
            this._lastAttrUpdate = t.lastCompile;
            for (let t = 0; t < this._attributes.length; t++) e[t] = -1;
          }
          for (let i = 0; i < this._attributes.length; i++) {
            const s = this._attributes[i];
            if (
              (-1 == e[i] &&
                s._attrLocationLastShaderTime != t.lastCompile &&
                ((s._attrLocationLastShaderTime = t.lastCompile),
                (e[i] = this._cgl.glGetAttribLocation(t.getProgram(), s.name)),
                this._cgl.profileData.profileAttrLoc++),
              -1 != e[i])
            )
              if (
                (this._cgl.gl.enableVertexAttribArray(e[i]),
                this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, s.buffer),
                s.instanced)
              )
                if (s.itemSize <= 4)
                  (s.itemSize && 0 != s.itemSize) ||
                    this._log.warn(
                      "instanced attrib itemsize error",
                      this._geom.name,
                      s
                    ),
                    this._cgl.gl.vertexAttribPointer(
                      e[i],
                      s.itemSize,
                      s.type,
                      !1,
                      4 * s.itemSize,
                      0
                    ),
                    this._cgl.gl.vertexAttribDivisor(e[i], 1);
                else if (16 == s.itemSize) {
                  const t = 64;
                  this._cgl.gl.vertexAttribPointer(e[i], 4, s.type, !1, t, 0),
                    this._cgl.gl.enableVertexAttribArray(e[i] + 1),
                    this._cgl.gl.vertexAttribPointer(
                      e[i] + 1,
                      4,
                      s.type,
                      !1,
                      t,
                      16
                    ),
                    this._cgl.gl.enableVertexAttribArray(e[i] + 2),
                    this._cgl.gl.vertexAttribPointer(
                      e[i] + 2,
                      4,
                      s.type,
                      !1,
                      t,
                      32
                    ),
                    this._cgl.gl.enableVertexAttribArray(e[i] + 3),
                    this._cgl.gl.vertexAttribPointer(
                      e[i] + 3,
                      4,
                      s.type,
                      !1,
                      t,
                      48
                    ),
                    this._cgl.gl.vertexAttribDivisor(e[i], 1),
                    this._cgl.gl.vertexAttribDivisor(e[i] + 1, 1),
                    this._cgl.gl.vertexAttribDivisor(e[i] + 2, 1),
                    this._cgl.gl.vertexAttribDivisor(e[i] + 3, 1);
                } else this._log.warn("unknown instance attrib size", s.name);
              else {
                if (
                  ((s.itemSize && 0 != s.itemSize) ||
                    this._log.warn("attrib itemsize error", this._name, s),
                  this._cgl.gl.vertexAttribPointer(
                    e[i],
                    s.itemSize,
                    s.type,
                    !1,
                    4 * s.itemSize,
                    0
                  ),
                  s.pointer)
                )
                  for (let e = 0; e < s.pointer.length; e++) {
                    const i = s.pointer[e];
                    -1 == i.loc &&
                      (i.loc = this._cgl.glGetAttribLocation(
                        t.getProgram(),
                        i.name
                      )),
                      this._cgl.profileData.profileAttrLoc++,
                      this._cgl.gl.enableVertexAttribArray(i.loc),
                      this._cgl.gl.vertexAttribPointer(
                        i.loc,
                        s.itemSize,
                        s.type,
                        !1,
                        i.stride,
                        i.offset
                      );
                  }
                this.bindFeedback(s);
              }
          }
          0 !== this._bufVerticesIndizes.numItems &&
            this._cgl.gl.bindBuffer(
              this._cgl.gl.ELEMENT_ARRAY_BUFFER,
              this._bufVerticesIndizes
            );
        }),
        (at.prototype.unBind = function () {
          const t = this._lastShader;
          if (((this._lastShader = null), !t)) return;
          let e = [];
          this._attribLocs[t.id]
            ? (e = this._attribLocs[t.id])
            : (this._attribLocs[t.id] = e),
            (ht.lastMesh = null);
          for (let t = 0; t < this._attributes.length; t++)
            this._attributes[t].instanced &&
              (this._attributes[t].itemSize <= 4
                ? (-1 != e[t] && this._cgl.gl.vertexAttribDivisor(e[t], 0),
                  e[t] >= 0 && this._cgl.gl.disableVertexAttribArray(e[t]))
                : (this._cgl.gl.vertexAttribDivisor(e[t], 0),
                  this._cgl.gl.vertexAttribDivisor(e[t] + 1, 0),
                  this._cgl.gl.vertexAttribDivisor(e[t] + 2, 0),
                  this._cgl.gl.vertexAttribDivisor(e[t] + 3, 0),
                  this._cgl.gl.disableVertexAttribArray(e[t] + 1),
                  this._cgl.gl.disableVertexAttribArray(e[t] + 2),
                  this._cgl.gl.disableVertexAttribArray(e[t] + 3))),
              -1 != e[t] && this._cgl.gl.disableVertexAttribArray(e[t]);
        }),
        (at.prototype.meshChanged = function () {
          return this._cgl.lastMesh && this._cgl.lastMesh != this;
        }),
        (at.prototype.printDebug = function (t) {
          console.log("--attributes");
          for (let t = 0; t < this._attributes.length; t++)
            console.log("attribute " + t + " " + this._attributes[t].name);
        }),
        (at.prototype.setNumVertices = function (t) {
          this._bufVertexAttrib.numItems = t;
        }),
        (at.prototype.getNumVertices = function () {
          return this._bufVertexAttrib.numItems;
        }),
        (at.prototype.render = function (t) {
          if (!t || !t.isValid()) return;
          if (
            (this._checkAttrLengths(),
            this._geom &&
              (!this._preWireframeGeom ||
                t.wireframe ||
                this._geom.isIndexed() ||
                (this.setGeom(this._preWireframeGeom),
                (this._preWireframeGeom = null)),
              t.wireframe))
          ) {
            let t = !1;
            this._geom.isIndexed() &&
              (this._preWireframeGeom ||
                ((this._preWireframeGeom = this._geom),
                (this._geom = this._geom.copy())),
              this._geom.unIndex(),
              (t = !0)),
              this._geom.getAttribute("attrBarycentric") ||
                (this._preWireframeGeom ||
                  ((this._preWireframeGeom = this._geom),
                  (this._geom = this._geom.copy())),
                (t = !0),
                this._geom.calcBarycentric()),
              t && this.setGeom(this._geom);
          }
          let e = !1;
          ht.lastMesh != this && (ht.lastMesh && ht.lastMesh.unBind(), (e = !0)),
            e && this._preBind(t),
            t.bind(),
            t.bindTextures && t.bindTextures(),
            this._bind(t),
            this.addVertexNumbers && this._setVertexNumbers(),
            (ht.lastMesh = this);
          let i = this._cgl.gl.TRIANGLES;
          void 0 !== this._glPrimitive && (i = this._glPrimitive),
            null !== t.glPrimitive && (i = t.glPrimitive);
          let s = 1,
            r = this._cgl.profileData.doProfileGlQuery,
            n = !1;
          if (r) {
            let e = this._name + " " + t.getName() + " #" + t.id;
            this._numInstances && (e += " instanced " + this._numInstances + "x");
            let i = this._cgl.profileData.glQueryData[e];
            if (
              (i ||
                ((i = { id: e, num: 0 }),
                (this._cgl.profileData.glQueryData[e] = i)),
              this._queryExt ||
                !1 === this._queryExt ||
                (this._queryExt =
                  this._cgl.gl.getExtension("EXT_disjoint_timer_query_webgl2") ||
                  !1),
              this._queryExt)
            ) {
              if (i._drawQuery) {
                if (
                  this._cgl.gl.getQueryParameter(
                    i._drawQuery,
                    this._cgl.gl.QUERY_RESULT_AVAILABLE
                  )
                ) {
                  const t =
                    this._cgl.gl.getQueryParameter(
                      i._drawQuery,
                      this._cgl.gl.QUERY_RESULT
                    ) / 1e6;
                  (i._times += t),
                    i._numcount++,
                    (i.when = performance.now()),
                    (i._drawQuery = null),
                    (i.queryStarted = !1);
                }
              }
              i.queryStarted ||
                ((i._drawQuery = this._cgl.gl.createQuery()),
                this._cgl.gl.beginQuery(
                  this._queryExt.TIME_ELAPSED_EXT,
                  i._drawQuery
                ),
                (n = i.queryStarted = !0));
            }
          }
          if (
            (this.hasFeedbacks()
              ? this.drawFeedbacks(t, i)
              : 0 === this._bufVerticesIndizes.numItems
              ? (i == this._cgl.gl.TRIANGLES && (s = 3),
                0 === this._numInstances
                  ? this._cgl.gl.drawArrays(
                      i,
                      this._bufVertexAttrib.startItem,
                      this._bufVertexAttrib.numItems -
                        this._bufVertexAttrib.startItem
                    )
                  : this._cgl.gl.drawArraysInstanced(
                      i,
                      this._bufVertexAttrib.startItem,
                      this._bufVertexAttrib.numItems,
                      this._numInstances
                    ))
              : 0 === this._numInstances
              ? this._cgl.gl.drawElements(
                  i,
                  this._bufVerticesIndizes.numItems,
                  this._indexType,
                  0
                )
              : this._cgl.gl.drawElementsInstanced(
                  i,
                  this._bufVerticesIndizes.numItems,
                  this._indexType,
                  0,
                  this._numInstances
                ),
            this._cgl.debugOneFrame &&
              this._cgl.gl.getError() != this._cgl.gl.NO_ERROR)
          ) {
            this._log.error("mesh draw gl error"),
              this._log.error("mesh", this),
              this._log.error("shader", t);
            for (
              let e = 0;
              e <
              this._cgl.gl.getProgramParameter(
                t.getProgram(),
                this._cgl.gl.ACTIVE_ATTRIBUTES
              );
              e++
            ) {
              const i = this._cgl.gl.getActiveAttrib(t.getProgram(), e).name;
              this._log.error("attrib ", i);
            }
          }
          (this._cgl.profileData.profileMeshNumElements +=
            (this._bufVertexAttrib.numItems / s) * (this._numInstances || 1)),
            this._cgl.profileData.profileMeshDraw++,
            r && n && this._cgl.gl.endQuery(this._queryExt.TIME_ELAPSED_EXT),
            this.unBind();
        }),
        (at.prototype.setNumInstances = function (t) {
          if (((t = Math.max(0, t)), this._numInstances != t)) {
            this._numInstances = t;
            const e = new Float32Array(t);
            for (let i = 0; i < t; i++) e[i] = i;
            this.setAttribute("instanceIndex", e, 1, { instanced: !0 });
          }
        }),
        (at.prototype._disposeAttributes = function () {
          if (this._attributes) {
            for (let t = 0; t < this._attributes.length; t++)
              this._attributes[t].buffer &&
                (this._cgl.gl.deleteBuffer(this._attributes[t].buffer),
                (this._attributes[t].buffer = null));
            this._attributes.length = 0;
          }
        }),
        (at.prototype.dispose = function () {
          this._bufVertexAttrib &&
            this._bufVertexAttrib.buffer &&
            this._cgl.gl.deleteBuffer(this._bufVertexAttrib.buffer),
            this._bufVerticesIndizes &&
              this._cgl.gl.deleteBuffer(this._bufVerticesIndizes),
            (this._bufVerticesIndizes = null),
            this._disposeAttributes();
        }),
        (function (t) {
          (t.prototype.hasFeedbacks = function () {
            return this._feedBacks.length > 0;
          }),
            (t.prototype.removeFeedbacks = function (t) {
              this._feedbacks &&
                ((this._feedbacks.length = 0), (this._feedBacksChanged = !0));
            }),
            (t.prototype.setAttributeFeedback = function () {}),
            (t.prototype.setFeedback = function (t, e, i) {
              let s = { nameOut: e },
                r = !1;
              this.unBindFeedbacks();
              for (let t = 0; t < this._feedBacks.length; t++)
                this._feedBacks[t].nameOut == e &&
                  ((s = this._feedBacks[t]), (r = !0));
              return (
                r || (this._feedBacksChanged = !0),
                (s.initialArr = i),
                (s.attrib = t),
                s.outBuffer && this._cgl.gl.deleteBuffer(s.outBuffer),
                (s.outBuffer = this._cgl.gl.createBuffer()),
                this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, s.outBuffer),
                this._cgl.gl.bufferData(
                  this._cgl.gl.ARRAY_BUFFER,
                  s.initialArr,
                  this._cgl.gl.STATIC_DRAW
                ),
                this._cgl.gl.bindBuffer(
                  this._cgl.gl.ARRAY_BUFFER,
                  s.attrib.buffer
                ),
                this._cgl.gl.bufferData(
                  this._cgl.gl.ARRAY_BUFFER,
                  s.initialArr,
                  this._cgl.gl.STATIC_DRAW
                ),
                r || this._feedBacks.push(s),
                s
              );
            }),
            (t.prototype.bindFeedback = function (t) {
              if (!this._feedBacks || 0 === this._feedBacks.length) return;
              -1 == this._transformFeedBackLoc &&
                (this._transformFeedBackLoc =
                  this._cgl.gl.createTransformFeedback()),
                this._cgl.gl.bindTransformFeedback(
                  this._cgl.gl.TRANSFORM_FEEDBACK,
                  this._transformFeedBackLoc
                );
              let e = !1;
              for (let i = 0; i < this._feedBacks.length; i++) {
                const s = this._feedBacks[i];
                s.attrib == t &&
                  ((e = !0),
                  this._cgl.gl.bindBufferBase(
                    this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER,
                    i,
                    s.outBuffer
                  ));
              }
            }),
            (t.prototype.drawFeedbacks = function (t, e) {
              let i = 0;
              if (this._feedBacksChanged) {
                const e = [];
                for (
                  this._cgl.gl.bindTransformFeedback(
                    this._cgl.gl.TRANSFORM_FEEDBACK,
                    this._transformFeedBackLoc
                  ),
                    i = 0;
                  i < this._feedBacks.length;
                  i++
                )
                  e.push(this._feedBacks[i].nameOut);
                return (
                  t.setFeedbackNames(e),
                  console.log("feedbacknames", e),
                  t.compile(),
                  (this._feedBacksChanged = !1),
                  this._cgl.gl.bindTransformFeedback(
                    this._cgl.gl.TRANSFORM_FEEDBACK,
                    null
                  ),
                  void console.log("changed finished")
                );
              }
              this._cgl.gl.beginTransformFeedback(this.glPrimitive),
                this._cgl.gl.drawArrays(e, 0, this._feedBacks[0].attrib.numItems),
                this._cgl.gl.endTransformFeedback(),
                this.unBindFeedbacks(),
                this.feedBacksSwapBuffers();
            }),
            (t.prototype.unBindFeedbacks = function () {
              for (let t = 0; t < this._feedBacks.length; t++)
                this._cgl.gl.bindBufferBase(
                  this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER,
                  t,
                  null
                );
              this._cgl.gl.bindTransformFeedback(
                this._cgl.gl.TRANSFORM_FEEDBACK,
                null
              );
            }),
            (t.prototype.feedBacksSwapBuffers = function () {
              for (let t = 0; t < this._feedBacks.length; t++) {
                const e = this._feedBacks[t].attrib.buffer;
                (this._feedBacks[t].attrib.buffer = this._feedBacks[t].outBuffer),
                  (this._feedBacks[t].outBuffer = e);
              }
            });
        })(at);
      const lt = {
          getSimpleRect: function (t, e) {
            const i = new Y(e);
            return (
              (i.vertices = [1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0]),
              (i.texCoords = [1, 1, 0, 1, 1, 0, 0, 0]),
              (i.verticesIndices = [0, 1, 2, 2, 1, 3]),
              (i.vertexNormals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
              new at(t, i)
            );
          },
        },
        ct = function (t, e) {
          (this._cgl = t),
            (this._log = new h("cgl_TextureEffect")),
            t.TextureEffectMesh || this.createMesh(),
            (this._textureSource = null),
            (this._options = e),
            (this.imgCompVer = 0),
            (this.aspectRatio = 1),
            (this._textureTarget = null),
            (this._frameBuf = this._cgl.gl.createFramebuffer()),
            (this._frameBuf2 = this._cgl.gl.createFramebuffer()),
            (this._renderbuffer = this._cgl.gl.createRenderbuffer()),
            (this._renderbuffer2 = this._cgl.gl.createRenderbuffer()),
            (this.switched = !1),
            (this.depth = !1);
        };
      (ct.prototype.getWidth = function () {
        return this._textureSource.width;
      }),
        (ct.prototype.getHeight = function () {
          return this._textureSource.height;
        }),
        (ct.prototype.setSourceTexture = function (t) {
          t.textureType == L.TYPE_FLOAT &&
            this._cgl.gl.getExtension("EXT_color_buffer_float"),
            null === t
              ? ((this._textureSource = new L(this._cgl)),
                this._textureSource.setSize(16, 16))
              : (this._textureSource = t),
            this._textureSource.compareSettings(this._textureTarget) ||
              (this._textureTarget && this._textureTarget.delete(),
              (this._textureTarget = this._textureSource.clone()),
              this._cgl.profileData.profileEffectBuffercreate++,
              this._cgl.gl.bindFramebuffer(
                this._cgl.gl.FRAMEBUFFER,
                this._frameBuf
              ),
              this._cgl.gl.bindRenderbuffer(
                this._cgl.gl.RENDERBUFFER,
                this._renderbuffer
              ),
              this.depth &&
                this._cgl.gl.renderbufferStorage(
                  this._cgl.gl.RENDERBUFFER,
                  this._cgl.gl.DEPTH_COMPONENT16,
                  this._textureSource.width,
                  this._textureSource.height
                ),
              this._cgl.gl.framebufferTexture2D(
                this._cgl.gl.FRAMEBUFFER,
                this._cgl.gl.COLOR_ATTACHMENT0,
                this._cgl.gl.TEXTURE_2D,
                this._textureTarget.tex,
                0
              ),
              this.depth &&
                this._cgl.gl.framebufferRenderbuffer(
                  this._cgl.gl.FRAMEBUFFER,
                  this._cgl.gl.DEPTH_ATTACHMENT,
                  this._cgl.gl.RENDERBUFFER,
                  this._renderbuffer
                ),
              this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null),
              this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null),
              this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null),
              this._cgl.gl.bindFramebuffer(
                this._cgl.gl.FRAMEBUFFER,
                this._frameBuf2
              ),
              this._cgl.gl.bindRenderbuffer(
                this._cgl.gl.RENDERBUFFER,
                this._renderbuffer2
              ),
              this.depth &&
                this._cgl.gl.renderbufferStorage(
                  this._cgl.gl.RENDERBUFFER,
                  this._cgl.gl.DEPTH_COMPONENT16,
                  this._textureSource.width,
                  this._textureSource.height
                ),
              this._cgl.gl.framebufferTexture2D(
                this._cgl.gl.FRAMEBUFFER,
                this._cgl.gl.COLOR_ATTACHMENT0,
                this._cgl.gl.TEXTURE_2D,
                this._textureSource.tex,
                0
              ),
              this.depth &&
                this._cgl.gl.framebufferRenderbuffer(
                  this._cgl.gl.FRAMEBUFFER,
                  this._cgl.gl.DEPTH_ATTACHMENT,
                  this._cgl.gl.RENDERBUFFER,
                  this._renderbuffer2
                ),
              this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null),
              this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null),
              this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null)),
            (this.aspectRatio =
              this._textureSource.width / this._textureSource.height);
        }),
        (ct.prototype.continueEffect = function () {
          this._cgl.pushDepthTest(!1),
            this._cgl.pushModelMatrix(),
            this._cgl.pushPMatrix(),
            this._cgl.gl.viewport(
              0,
              0,
              this.getCurrentTargetTexture().width,
              this.getCurrentTargetTexture().height
            ),
            mat4.perspective(
              this._cgl.pMatrix,
              45,
              this.getCurrentTargetTexture().width /
                this.getCurrentTargetTexture().height,
              0.1,
              1100
            ),
            this._cgl.pushPMatrix(),
            mat4.identity(this._cgl.pMatrix),
            this._cgl.pushViewMatrix(),
            mat4.identity(this._cgl.vMatrix),
            this._cgl.pushModelMatrix(),
            mat4.identity(this._cgl.mvMatrix);
        }),
        (ct.prototype.startEffect = function (t) {
          this._textureTarget
            ? ((this.switched = !1),
              this.continueEffect(),
              t && (this._bgTex = t),
              (this._countEffects = 0))
            : this._log.warn("effect has no target");
        }),
        (ct.prototype.endEffect = function () {
          this._cgl.popDepthTest(),
            this._cgl.popModelMatrix(),
            this._cgl.popPMatrix(),
            this._cgl.popModelMatrix(),
            this._cgl.popViewMatrix(),
            this._cgl.popPMatrix(),
            this._cgl.resetViewPort();
        }),
        (ct.prototype.bind = function () {
          null !== this._textureSource
            ? this.switched
              ? (this._cgl.gl.bindFramebuffer(
                  this._cgl.gl.FRAMEBUFFER,
                  this._frameBuf2
                ),
                this._cgl.pushGlFrameBuffer(this._frameBuf2))
              : (this._cgl.gl.bindFramebuffer(
                  this._cgl.gl.FRAMEBUFFER,
                  this._frameBuf
                ),
                this._cgl.pushGlFrameBuffer(this._frameBuf))
            : this._log.warn("no base texture set!");
        }),
        (ct.prototype.finish = function () {
          null !== this._textureSource
            ? (this._cgl.TextureEffectMesh.render(this._cgl.getShader()),
              this._cgl.gl.bindFramebuffer(
                this._cgl.gl.FRAMEBUFFER,
                this._cgl.popGlFrameBuffer()
              ),
              this._cgl.profileData.profileTextureEffect++,
              this._textureTarget.filter == L.FILTER_MIPMAP &&
                (this.switched
                  ? (this._cgl.gl.bindTexture(
                      this._cgl.gl.TEXTURE_2D,
                      this._textureSource.tex
                    ),
                    this._textureSource.updateMipMap())
                  : (this._cgl.gl.bindTexture(
                      this._cgl.gl.TEXTURE_2D,
                      this._textureTarget.tex
                    ),
                    this._textureTarget.updateMipMap()),
                this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null)),
              (this.switched = !this.switched),
              this._countEffects++)
            : this._log.warn("no base texture set!");
        }),
        (ct.prototype.getCurrentTargetTexture = function () {
          return this.switched ? this._textureSource : this._textureTarget;
        }),
        (ct.prototype.getCurrentSourceTexture = function () {
          return 0 == this._countEffects && this._bgTex
            ? this._bgTex
            : this.switched
            ? this._textureTarget
            : this._textureSource;
        }),
        (ct.prototype.delete = function () {
          this._textureTarget && this._textureTarget.delete(),
            this._textureSource && this._textureSource.delete(),
            this._cgl.gl.deleteRenderbuffer(this._renderbuffer),
            this._cgl.gl.deleteFramebuffer(this._frameBuf);
        }),
        (ct.prototype.createMesh = function () {
          this._cgl.TextureEffectMesh = lt.getSimpleRect(
            this._cgl,
            "texEffectRect"
          );
        }),
        (ct.checkOpNotInTextureEffect = function (t) {
          return t.uiAttribs.error && !t.patch.cgl.currentTextureEffect
            ? (t.setUiError("textureeffect", null), !0)
            : !t.patch.cgl.currentTextureEffect ||
                (t.patch.cgl.currentTextureEffect && !t.uiAttribs.error
                  ? (t.setUiError(
                      "textureeffect",
                      "This op can not be a child of a ImageCompose/texture effect! imagecompose should only have textureeffect childs.",
                      0
                    ),
                    !1)
                  : !t.patch.cgl.currentTextureEffect);
        }),
        (ct.checkOpInEffect = function (t, e) {
          if (((e = e || 0), t.patch.cgl.currentTextureEffect)) {
            if (
              t.uiAttribs.uierrors &&
              t.patch.cgl.currentTextureEffect.imgCompVer >= e
            )
              return t.setUiError("texeffect", null), !0;
            e &&
              t.patch.cgl.currentTextureEffect.imgCompVer < e &&
              t.setUiError(
                "texeffect",
                "This op must be a child of an ImageCompose op with version >=" +
                  e +
                  ' <span class="button-small" onclick="gui.patchView.downGradeOp(\'' +
                  t.id +
                  "','" +
                  t.name +
                  "')\">Downgrade</span> to previous version",
                1
              );
          }
          return (
            !!t.patch.cgl.currentTextureEffect ||
            (t.patch.cgl.currentTextureEffect ||
            (t.uiAttribs.uierrors && 0 != t.uiAttribs.uierrors.length)
              ? !!t.patch.cgl.currentTextureEffect
              : (t.setUiError(
                  "texeffect",
                  'This op must be a child of an ImageCompose op! More infos <a href="https://docs.cables.gl/image_composition/image_composition.html" target="_blank">here</a>. ',
                  1
                ),
                !1))
          );
        }),
        (ct.getBlendCode = function (t) {
          let e =
            "".endl() +
            "vec3 _blend(vec3 base,vec3 blend)".endl() +
            "{".endl() +
            "   vec3 colNew=blend;".endl() +
            "   #ifdef BM_MULTIPLY".endl() +
            "       colNew=base*blend;".endl() +
            "   #endif".endl() +
            "   #ifdef BM_MULTIPLY_INV".endl() +
            "       colNew=base* vec3(1.0)-blend;".endl() +
            "   #endif".endl() +
            "   #ifdef BM_AVERAGE".endl() +
            "       colNew=((base + blend) / 2.0);".endl() +
            "   #endif".endl() +
            "   #ifdef BM_ADD".endl() +
            "       colNew=min(base + blend, vec3(1.0));".endl() +
            "   #endif".endl() +
            "   #ifdef BM_SUBTRACT_ONE".endl() +
            "       colNew=max(base + blend - vec3(1.0), vec3(0.0));".endl() +
            "   #endif".endl() +
            "   #ifdef BM_SUBTRACT".endl() +
            "       colNew=base - blend;".endl() +
            "   #endif".endl() +
            "   #ifdef BM_DIFFERENCE".endl() +
            "       colNew=abs(base - blend);".endl() +
            "   #endif".endl() +
            "   #ifdef BM_NEGATION".endl() +
            "       colNew=(vec3(1.0) - abs(vec3(1.0) - base - blend));".endl() +
            "   #endif".endl() +
            "   #ifdef BM_EXCLUSION".endl() +
            "       colNew=(base + blend - 2.0 * base * blend);".endl() +
            "   #endif".endl() +
            "   #ifdef BM_LIGHTEN".endl() +
            "       colNew=max(blend, base);".endl() +
            "   #endif".endl() +
            "   #ifdef BM_DARKEN".endl() +
            "       colNew=min(blend, base);".endl() +
            "   #endif".endl() +
            "   #ifdef BM_OVERLAY".endl() +
            "      #define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))".endl() +
            "      colNew=vec3(BlendOverlayf(base.r, blend.r),BlendOverlayf(base.g, blend.g),BlendOverlayf(base.b, blend.b));".endl() +
            "   #endif".endl() +
            "   #ifdef BM_SCREEN".endl() +
            "      #define BlendScreenf(base, blend)       (1.0 - ((1.0 - base) * (1.0 - blend)))".endl() +
            "      colNew=vec3(BlendScreenf(base.r, blend.r),BlendScreenf(base.g, blend.g),BlendScreenf(base.b, blend.b));".endl() +
            "   #endif".endl() +
            "   #ifdef BM_SOFTLIGHT".endl() +
            "      #define BlendSoftLightf(base, blend)    ((blend < 0.5) ? (2.0 * base * blend + base * base * (1.0 - 2.0 * blend)) : (sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend)))".endl() +
            "      colNew=vec3(BlendSoftLightf(base.r, blend.r),BlendSoftLightf(base.g, blend.g),BlendSoftLightf(base.b, blend.b));".endl() +
            "   #endif".endl() +
            "   #ifdef BM_HARDLIGHT".endl() +
            "      #define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))".endl() +
            "      colNew=vec3(BlendOverlayf(base.r, blend.r),BlendOverlayf(base.g, blend.g),BlendOverlayf(base.b, blend.b));".endl() +
            "   #endif".endl() +
            "   #ifdef BM_COLORDODGE".endl() +
            "      #define BlendColorDodgef(base, blend)   ((blend == 1.0) ? blend : min(base / (1.0 - blend), 1.0))".endl() +
            "      colNew=vec3(BlendColorDodgef(base.r, blend.r),BlendColorDodgef(base.g, blend.g),BlendColorDodgef(base.b, blend.b));".endl() +
            "   #endif".endl() +
            "   #ifdef BM_COLORBURN".endl() +
            "      #define BlendColorBurnf(base, blend)    ((blend == 0.0) ? blend : max((1.0 - ((1.0 - base) / blend)), 0.0))".endl() +
            "      colNew=vec3(BlendColorBurnf(base.r, blend.r),BlendColorBurnf(base.g, blend.g),BlendColorBurnf(base.b, blend.b));".endl() +
            "   #endif".endl() +
            "   return colNew;".endl() +
            "}".endl();
          return (
            t ||
              (e +=
                "vec4 cgl_blend(vec4 oldColor,vec4 newColor,float amount)".endl() +
                "{".endl() +
                "vec4 col=vec4( _blend(oldColor.rgb,newColor.rgb) ,1.0);".endl() +
                "col=vec4( mix( col.rgb, oldColor.rgb ,1.0-oldColor.a*amount),1.0);".endl() +
                "return col;".endl() +
                "}".endl()),
            t >= 3 &&
              (e +=
                "vec4 cgl_blendPixel(vec4 base,vec4 col,float amount)".endl() +
                "{".endl() +
                "vec3 colNew=_blend(base.rgb,col.rgb);".endl() +
                "float newA=clamp(base.a+(col.a*amount),0.,1.);".endl() +
                "#ifdef BM_ALPHAMASKED".endl() +
                "newA=base.a;".endl() +
                "#endif".endl() +
                "return vec4(".endl() +
                "mix(colNew,base.rgb,1.0-(amount*col.a)),".endl() +
                "newA);".endl() +
                "}".endl()),
            e
          );
        }),
        (ct.onChangeBlendSelect = function (t, e, i) {
          t.toggleDefine("BM_NORMAL", "normal" == e),
            t.toggleDefine("BM_MULTIPLY", "multiply" == e),
            t.toggleDefine("BM_MULTIPLY_INV", "multiply invert" == e),
            t.toggleDefine("BM_AVERAGE", "average" == e),
            t.toggleDefine("BM_ADD", "add" == e),
            t.toggleDefine("BM_SUBTRACT_ONE", "subtract one" == e),
            t.toggleDefine("BM_SUBTRACT", "subtract" == e),
            t.toggleDefine("BM_DIFFERENCE", "difference" == e),
            t.toggleDefine("BM_NEGATION", "negation" == e),
            t.toggleDefine("BM_EXCLUSION", "exclusion" == e),
            t.toggleDefine("BM_LIGHTEN", "lighten" == e),
            t.toggleDefine("BM_DARKEN", "darken" == e),
            t.toggleDefine("BM_OVERLAY", "overlay" == e),
            t.toggleDefine("BM_SCREEN", "screen" == e),
            t.toggleDefine("BM_SOFTLIGHT", "softlight" == e),
            t.toggleDefine("BM_HARDLIGHT", "hardlight" == e),
            t.toggleDefine("BM_COLORDODGE", "color dodge" == e),
            t.toggleDefine("BM_COLORBURN", "color burn" == e),
            t.toggleDefine("BM_ALPHAMASKED", i);
        }),
        (ct.AddBlendSelect = function (t, e, i) {
          return t.inValueSelect(
            e || "Blend Mode",
            [
              "normal",
              "lighten",
              "darken",
              "multiply",
              "multiply invert",
              "average",
              "add",
              "subtract",
              "difference",
              "negation",
              "exclusion",
              "overlay",
              "screen",
              "color dodge",
              "color burn",
              "softlight",
              "hardlight",
              "subtract one",
            ],
            i || "normal"
          );
        }),
        (ct.AddBlendAlphaMask = function (t, e, i) {
          return t.inSwitch(e || "Alpha Mask", ["Off", "On"], i || "Off");
        }),
        (ct.setupBlending = function (t, e, i, s, r) {
          const n = () => {
            let s = !1;
            r && (s = "On" == r.get()), ct.onChangeBlendSelect(e, i.get(), s);
            let n = i.get();
            "normal" == n
              ? (n = null)
              : "multiply" == n
              ? (n = "mul")
              : "multiply invert" == n
              ? (n = "mulinv")
              : "lighten" == n
              ? (n = "light")
              : "darken" == n
              ? (n = "darken")
              : "average" == n
              ? (n = "avg")
              : "subtract one" == n
              ? (n = "sub one")
              : "subtract" == n
              ? (n = "sub")
              : "difference" == n
              ? (n = "diff")
              : "negation" == n || "negation" == n || "negation" == n
              ? (n = "neg")
              : "exclusion" == n
              ? (n = "exc")
              : "overlay" == n
              ? (n = "ovl")
              : "color dodge" == n
              ? (n = "dodge")
              : "color burn" == n
              ? (n = "burn")
              : "softlight" == n
              ? (n = "soft")
              : "hardlight" == n && (n = "hard"),
              t.setUiAttrib({ extendTitle: n });
          };
          t.setPortGroup("Blending", [i, s, r]);
          let o = !1;
          (i.onChange = n),
            r && ((r.onChange = n), (o = "On" == r.get())),
            ct.onChangeBlendSelect(e, i.get(), o);
        });
      const ut = {
          "CGL.BLENDMODES": function () {
            (this.name = "blendmodes"), (this.srcHeadFrag = ct.getBlendCode());
          },
          "CGL.BLENDMODES3": function () {
            (this.name = "blendmodes3"), (this.srcHeadFrag = ct.getBlendCode(3));
          },
          "CGL.LUMINANCE": function () {
            (this.name = "luminance"),
              (this.srcHeadFrag =
                "".endl() +
                "float cgl_luminance(vec3 c)".endl() +
                "{".endl() +
                "    return dot(vec3(0.2126,0.7152,0.0722),c);".endl() +
                "}".endl());
          },
          "CGL.RANDOM_OLD": function () {
            (this.name = "randomNumber"),
              (this.srcHeadFrag =
                "".endl() +
                "float cgl_random(vec2 co)".endl() +
                "{".endl() +
                "    return fract(sin(dot(co.xy ,vec2(12.9898,4.1414))) * 432758.5453);".endl() +
                "}".endl() +
                "vec3 cgl_random3(vec2 co)".endl() +
                "{".endl() +
                "    return vec3( cgl_random(co),cgl_random(co+0.5711),cgl_random(co+1.5711));".endl() +
                "}");
          },
          "CGL.RANDOM_LOW": function () {
            (this.name = "randomNumber"),
              (this.srcHeadFrag =
                "".endl() +
                "float cgl_random(vec2 co)".endl() +
                "{".endl() +
                "    return fract(sin(dot(co.xy ,vec2(12.9898,4.1414))) * 358.5453);".endl() +
                "}".endl() +
                "vec3 cgl_random3(vec2 co)".endl() +
                "{".endl() +
                "    return vec3( cgl_random(co),cgl_random(co+0.5711),cgl_random(co+1.5711));".endl() +
                "}");
          },
          "CGL.RANDOM_TEX": function () {
            (this.name = "randomNumbertex"),
              (this.srcHeadFrag =
                "".endl() +
                "UNI sampler2D CGLRNDTEX;".endl() +
                "float cgl_random(vec2 co)".endl() +
                "{".endl() +
                "    return texture(CGLRNDTEX,co*5711.0).r;".endl() +
                "}".endl() +
                "vec3 cgl_random3(vec2 co)".endl() +
                "{".endl() +
                "    return texture(CGLRNDTEX,co*5711.0).rgb;".endl() +
                "}"),
              (this.initUniforms = function (t) {
                return [new rt(t, "t", "CGLRNDTEX", 7)];
              }),
              (this.onBind = function (t, e) {
                L.getRandomTexture(t), t.setTexture(7, L.getRandomTexture(t).tex);
              });
          },
        },
        gt = function () {
          return window.performance.now();
        },
        _t = function () {
          return gt();
        },
        pt = function () {
          CABLES.EventTarget.apply(this),
            (this._timeStart = gt()),
            (this._timeOffset = 0),
            (this._currentTime = 0),
            (this._lastTime = 0),
            (this._paused = !0),
            (this._delay = 0),
            (this._eventsPaused = !1),
            (this.overwriteTime = -1),
            (this.cbPlayPause = []),
            (this.cbTimeChange = []);
        };
      (pt.prototype._getTime = function () {
        return (
          (this._lastTime = (gt() - this._timeStart) / 1e3),
          this._lastTime + this._timeOffset
        );
      }),
        (pt.prototype._eventPlayPause = function () {
          if ((this.emitEvent("playPause"), !this._eventsPaused))
            for (const t in this.cbPlayPause) this.cbPlayPause[t]();
        }),
        (pt.prototype._eventTimeChange = function () {
          if (!this._eventsPaused)
            for (const t in this.cbTimeChange) this.cbTimeChange[t]();
        }),
        (pt.prototype.setDelay = function (t) {
          (this._delay = t), this._eventTimeChange();
        }),
        (pt.prototype.isPlaying = function () {
          return !this._paused;
        }),
        (pt.prototype.update = function () {
          if (!this._paused)
            return (this._currentTime = this._getTime()), this._currentTime;
        }),
        (pt.prototype.getMillis = function () {
          return 1e3 * this.get();
        }),
        (pt.prototype.get = pt.prototype.getTime =
          function () {
            return this.overwriteTime >= 0
              ? this.overwriteTime - this._delay
              : this._currentTime - this._delay;
          }),
        (pt.prototype.togglePlay = function () {
          this._paused ? this.play() : this.pause();
        }),
        (pt.prototype.setTime = function (t) {
          t < 0 && (t = 0),
            (this._timeStart = gt()),
            (this._timeOffset = t),
            (this._currentTime = t),
            this._eventTimeChange();
        }),
        (pt.prototype.setOffset = function (t) {
          this._currentTime + t < 0
            ? ((this._timeStart = gt()),
              (this._timeOffset = 0),
              (this._currentTime = 0))
            : ((this._timeOffset += t),
              (this._currentTime = this._lastTime + this._timeOffset)),
            this._eventTimeChange();
        }),
        (pt.prototype.play = function () {
          (this._timeStart = gt()), (this._paused = !1), this._eventPlayPause();
        }),
        (pt.prototype.pause = function () {
          (this._timeOffset = this._currentTime),
            (this._paused = !0),
            this._eventPlayPause();
        }),
        (pt.prototype.pauseEvents = function (t) {
          this._eventsPaused = t;
        }),
        (pt.prototype.onPlayPause = function (t) {
          t && "function" == typeof t && this.cbPlayPause.push(t);
        }),
        (pt.prototype.onTimeChange = function (t) {
          t && "function" == typeof t && this.cbTimeChange.push(t);
        });
      const dt = Math.PI / 180,
        ft = (Math.PI, -1 != window.navigator.userAgent.indexOf("Windows")),
        mt = function (t) {
          let e;
          if (t.wheelDelta)
            (e =
              (t.wheelDelta % 120) - 0 == -0
                ? t.wheelDelta / 120
                : t.wheelDelta / 30),
              (e *= -1.5),
              ft && (e *= 2);
          else {
            let i = t.deltaY;
            t.shiftKey && (i = t.deltaX);
            const s = i || t.detail;
            (e = -(s % 3 ? 10 * s : s / 3)), (e *= -3);
          }
          return e > 20 && (e = 20), e < -20 && (e = -20), e;
        },
        Et = mt,
        Tt = mt,
        At = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        },
        bt = /[&<>"']/g,
        yt = RegExp(bt.source);
      const vt = function (t, e) {
        if (!t) throw new Error("shader constructed without cgl " + e);
        (this._log = new h("cgl_shader")),
          (this._cgl = t),
          e || this._log.stack("no shader name given"),
          (this._name = e || "unknown"),
          (this.glslVersion = 0),
          t.glVersion > 1 && (this.glslVersion = 300),
          (this.id = y()),
          (this._isValid = !0),
          (this._program = null),
          (this._uniforms = []),
          (this._drawBuffers = [!0]),
          (this._defines = []),
          (this._needsRecompile = !0),
          (this._compileReason = "initial"),
          (this._projMatrixUniform = null),
          (this._mvMatrixUniform = null),
          (this._mMatrixUniform = null),
          (this._vMatrixUniform = null),
          (this._camPosUniform = null),
          (this._normalMatrixUniform = null),
          (this._inverseViewMatrixUniform = null),
          (this._attrVertexPos = -1),
          (this.precision = t.patch.config.glslPrecision || "highp"),
          (this._pMatrixState = -1),
          (this._vMatrixState = -1),
          (this._modGroupCount = 0),
          (this._feedBackNames = []),
          (this._attributes = []),
          (this.glPrimitive = null),
          (this.offScreenPass = !1),
          (this._extensions = []),
          (this.srcVert = this.getDefaultVertexShader()),
          (this.srcFrag = this.getDefaultFragmentShader()),
          (this.lastCompile = 0),
          (this._moduleNames = []),
          (this._modules = []),
          (this._moduleNumId = 0),
          (this._libs = []),
          (this._structNames = []),
          (this._structUniformNames = []),
          (this._textureStackUni = []),
          (this._textureStackTex = []),
          (this._textureStackType = []),
          (this._textureStackTexCgl = []),
          (this._tempNormalMatrix = mat4.create()),
          (this._tempCamPosMatrix = mat4.create()),
          (this._tempInverseViewMatrix = mat4.create()),
          this.setModules([
            "MODULE_VERTEX_POSITION",
            "MODULE_COLOR",
            "MODULE_BEGIN_FRAG",
          ]);
      };
      (vt.prototype.isValid = function () {
        return this._isValid;
      }),
        (vt.prototype.getCgl = function () {
          return this._cgl;
        }),
        (vt.prototype.getName = function () {
          return this._name;
        }),
        (vt.prototype.enableExtension = function (t) {
          this.setWhyCompile("enable extension " + t),
            (this._needsRecompile = !0),
            this._extensions.push(t);
        }),
        (vt.prototype.getAttrVertexPos = function () {
          return this._attrVertexPos;
        }),
        (vt.prototype.hasTextureUniforms = function () {
          for (let t = 0; t < this._uniforms.length; t++)
            if ("t" == this._uniforms[t].getType()) return !0;
          return !1;
        }),
        (vt.prototype.setWhyCompile = function (t) {
          this._compileReason = t;
        }),
        (vt.prototype.copyUniformValues = function (t) {
          for (let e = 0; e < t._uniforms.length; e++)
            this._uniforms[e]
              ? (-1 != t._uniforms[e].getName().indexOf("pathPoints") &&
                  console.log(
                    "copyUniformValues",
                    t._uniforms[e].getName(),
                    t._uniforms[e].getValue()
                  ),
                this.getUniform(t._uniforms[e].getName()).set(
                  t._uniforms[e].getValue()
                ))
              : this._log.log("unknown uniform?!");
          this.popTextures();
          for (let e = 0; e < t._textureStackUni.length; e++)
            (this._textureStackUni[e] = t._textureStackUni[e]),
              (this._textureStackTex[e] = t._textureStackTex[e]),
              (this._textureStackType[e] = t._textureStackType[e]),
              (this._textureStackTexCgl[e] = t._textureStackTexCgl[e]);
        }),
        (vt.prototype.copy = function () {
          const t = new vt(this._cgl, this._name + " copy");
          t.setSource(this.srcVert, this.srcFrag),
            (t._modules = JSON.parse(JSON.stringify(this._modules))),
            (t._defines = JSON.parse(JSON.stringify(this._defines))),
            (t._modGroupCount = this._modGroupCount),
            (t._moduleNames = this._moduleNames),
            (t.glPrimitive = this.glPrimitive),
            (t.offScreenPass = this.offScreenPass),
            (t._extensions = this._extensions),
            (t.wireframe = this.wireframe);
          for (let e = 0; e < this._uniforms.length; e++) {
            this._uniforms[e].copy(t).resetLoc();
          }
          return this.setWhyCompile("copy"), (t._needsRecompile = !0), t;
        }),
        (vt.prototype.setSource = function (t, e) {
          (this.srcVert = t),
            (this.srcFrag = e),
            this.setWhyCompile("Source changed"),
            (this._needsRecompile = !0);
        }),
        (vt.prototype._addLibs = function (t) {
          for (const e in ut)
            if (t.indexOf(e) > -1) {
              const i = new ut[e]();
              (t = t.replace("{{" + e + "}}", i.srcHeadFrag)),
                this._libs.push(i),
                i.initUniforms && i.initUniforms(this);
            }
          return t;
        }),
        (vt.prototype.createStructUniforms = function () {
          let t = "",
            e = "";
          (this._structNames = []),
            (this._injectedStringsFrag = {}),
            (this._injectedStringsVert = {}),
            (this._structUniformNamesIndicesFrag = []),
            (this._structUniformNamesIndicesVert = []);
          for (let i = 0; i < this._uniforms.length; i++)
            if (this._uniforms[i].isStructMember()) {
              const s =
                "{{INJECTION_POINT_STRUCT_" +
                this._uniforms[i]._structName +
                "}}";
              if (
                -1 === this._structNames.indexOf(this._uniforms[i]._structName)
              ) {
                const r =
                  "struct " +
                  this._uniforms[i]._structName +
                  " {".endl() +
                  s +
                  "};".endl().endl();
                ("both" !== this._uniforms[i].getShaderType() &&
                  "frag" !== this._uniforms[i].getShaderType()) ||
                  (t = t.concat(r)),
                  ("both" !== this._uniforms[i].getShaderType() &&
                    "vert" !== this._uniforms[i].getShaderType()) ||
                    (e = e.concat(r)),
                  this._structNames.push(this._uniforms[i]._structName),
                  (this._injectedStringsFrag[this._uniforms[i]._structName] = []),
                  (this._injectedStringsVert[this._uniforms[i]._structName] = []);
              }
              let r = "";
              this._uniforms[i].comment &&
                (r = " // " + this._uniforms[i].comment);
              let n = "";
              if (
                (null == this._uniforms[i].getGlslTypeString() && (n += "//"),
                (n +=
                  "  " +
                  this._uniforms[i].getGlslTypeString() +
                  " " +
                  this._uniforms[i]._propertyName +
                  ";" +
                  r),
                "both" === this._uniforms[i].getShaderType())
              ) {
                if (
                  -1 ===
                    this._injectedStringsFrag[
                      this._uniforms[i]._structName
                    ].indexOf(n) &&
                  -1 ===
                    this._injectedStringsVert[
                      this._uniforms[i]._structName
                    ].indexOf(n)
                ) {
                  const r = t.lastIndexOf(s),
                    o = e.lastIndexOf(s);
                  (t = t.slice(0, r) + n + t.slice(r - 1)),
                    (e = e.slice(0, o) + n + e.slice(o - 1)),
                    this._injectedStringsFrag[this._uniforms[i]._structName].push(
                      n
                    ),
                    this._injectedStringsVert[this._uniforms[i]._structName].push(
                      n
                    );
                }
                -1 === this._structUniformNamesIndicesFrag.indexOf(i) &&
                  this._structUniformNamesIndicesFrag.push(i),
                  -1 === this._structUniformNamesIndicesVert.indexOf(i) &&
                    this._structUniformNamesIndicesVert.push(i);
              } else if ("frag" === this._uniforms[i].getShaderType()) {
                if (
                  -1 ===
                  this._injectedStringsFrag[
                    this._uniforms[i]._structName
                  ].indexOf(n)
                ) {
                  const e = t.lastIndexOf(s);
                  (t = t.slice(0, e) + n + t.slice(e - 1)),
                    this._injectedStringsFrag[this._uniforms[i]._structName].push(
                      n
                    );
                }
                -1 === this._structUniformNamesIndicesFrag.indexOf(i) &&
                  this._structUniformNamesIndicesFrag.push(i);
              } else if ("vert" === this._uniforms[i].getShaderType()) {
                if (
                  -1 ===
                  this._injectedStringsVert[
                    this._uniforms[i]._structName
                  ].indexOf(n)
                ) {
                  const t = e.lastIndexOf(s);
                  (e = e.slice(0, t) + n + e.slice(t - 1)),
                    this._injectedStringsVert[this._uniforms[i]._structName].push(
                      n
                    );
                }
                -1 === this._structUniformNamesIndicesVert.indexOf(i) &&
                  this._structUniformNamesIndicesVert.push(i);
              }
            }
          (this._uniDeclarationsFrag = []), (this._uniDeclarationsVert = []);
          for (
            let e = 0;
            e < this._structUniformNamesIndicesFrag.length;
            e += 1
          ) {
            const i = this._structUniformNamesIndicesFrag[e],
              s =
                "UNI " +
                this._uniforms[i]._structName +
                " " +
                this._uniforms[i]._structUniformName +
                ";".endl();
            if (-1 === this._uniDeclarationsFrag.indexOf(s)) {
              const e =
                "{{INJECTION_POINT_STRUCT_" +
                this._uniforms[i]._structName +
                "}}";
              (t = t.replace(e, "")), (t += s), this._uniDeclarationsFrag.push(s);
            }
          }
          for (
            let t = 0;
            t < this._structUniformNamesIndicesVert.length;
            t += 1
          ) {
            const i = this._structUniformNamesIndicesVert[t],
              s =
                "UNI " +
                this._uniforms[i]._structName +
                " " +
                this._uniforms[i]._structUniformName +
                ";".endl();
            if (-1 === this._uniDeclarationsVert.indexOf(s)) {
              const t =
                "{{INJECTION_POINT_STRUCT_" +
                this._uniforms[i]._structName +
                "}}";
              (e = e.replace(t, "")), (e += s), this._uniDeclarationsVert.push(s);
            }
          }
          return [e, t];
        }),
        (vt.prototype.compile = function () {
          const t = performance.now();
          this._cgl.profileData.profileShaderCompiles++,
            (this._cgl.profileData.profileShaderCompileName =
              this._name + " [" + this._compileReason + "]");
          let e = "";
          if (this._extensions)
            for (let t = 0; t < this._extensions.length; t++)
              e += "#extension " + this._extensions[t] + " : enable".endl();
          let i = "";
          this._defines.length && (i = "\n// cgl generated".endl());
          for (let t = 0; t < this._defines.length; t++)
            i +=
              "#define " +
              this._defines[t][0] +
              " " +
              this._defines[t][1] +
              "".endl();
          const s = this.createStructUniforms();
          if (
            (this._cgl.profileData.addHeavyEvent(
              "shader compile",
              this._name + " [" + this._compileReason + "]"
            ),
            (this._compileReason = ""),
            this._uniforms)
          ) {
            const t = this._uniforms.map((t) => t._name),
              e = [];
            for (let i = 0; i < this._uniforms.length; i++) {
              const s = this._uniforms[i];
              t.indexOf(s._name, i + 1) > -1 && e.push(i);
            }
            for (let t = this._uniforms.length - 1; t >= 0; t -= 1)
              e.indexOf(t) > -1
                ? this._uniforms.splice(t, 1)
                : this._uniforms[t].resetLoc();
          }
          this._cgl.printError("uniform resets"),
            this.hasTextureUniforms() && (i += "#define HAS_TEXTURES".endl());
          let r = "",
            n = "";
          if (
            (this.srcFrag ||
              (this._log.error("[cgl shader] has no fragment source!"),
              (this.srcVert = this.getDefaultVertexShader()),
              (this.srcFrag = this.getDefaultFragmentShader())),
            300 == this.glslVersion)
          ) {
            let t = "";
            if (
              (this.srcFrag.indexOf("outColor0") > -1 &&
                (this._drawBuffers[0] = !0),
              this.srcFrag.indexOf("outColor1") > -1 &&
                (this._drawBuffers[1] = !0),
              this.srcFrag.indexOf("outColor2") > -1 &&
                (this._drawBuffers[2] = !0),
              this.srcFrag.indexOf("outColor3") > -1 &&
                (this._drawBuffers[3] = !0),
              1 == this._drawBuffers.length)
            )
              (t = "out vec4 outColor;".endl()),
                (t += "#define gl_FragColor outColor".endl());
            else {
              let e = 0;
              (t += "#define MULTI_COLORTARGETS".endl()),
                (t += "vec4 outColor;".endl());
              for (let i = 0; i < this._drawBuffers.length; i++)
                0 == e && (t += "#define gl_FragColor outColor" + i + "".endl()),
                  (t +=
                    "layout(location = " +
                    i +
                    ") out vec4 outColor" +
                    i +
                    ";".endl()),
                  e++;
            }
            (r =
              "#version 300 es".endl() +
              "// ".endl() +
              "// vertex shader " +
              this._name.endl() +
              "// ".endl() +
              "precision " +
              this.precision +
              " float;".endl() +
              "precision " +
              this.precision +
              " sampler2D;".endl() +
              "".endl() +
              "#define WEBGL2".endl() +
              "#define texture2D texture".endl() +
              "#define UNI uniform".endl() +
              "#define IN in".endl() +
              "#define OUT out".endl()),
              (n =
                "#version 300 es".endl() +
                "// ".endl() +
                "// fragment shader " +
                this._name.endl() +
                "// ".endl() +
                "precision " +
                this.precision +
                " float;".endl() +
                "precision " +
                this.precision +
                " sampler2D;".endl() +
                "".endl() +
                "#define WEBGL2".endl() +
                "#define texture2D texture".endl() +
                "#define IN in".endl() +
                "#define UNI uniform".endl() +
                t.endl());
          } else
            (n =
              "".endl() +
              "// ".endl() +
              "// fragment shader " +
              this._name.endl() +
              "// ".endl() +
              "#define WEBGL1".endl() +
              "#define texture texture2D".endl() +
              "#define outColor gl_FragColor".endl() +
              "#define IN varying".endl() +
              "#define UNI uniform".endl()),
              (r =
                "".endl() +
                "// ".endl() +
                "// vertex shader " +
                this._name.endl() +
                "// ".endl() +
                "#define WEBGL1".endl() +
                "#define texture texture2D".endl() +
                "#define OUT varying".endl() +
                "#define IN attribute".endl() +
                "#define UNI uniform".endl());
          let o = "\n// cgl generated".endl(),
            h = "\n// cgl generated".endl();
          (n += "\n// active mods: --------------- "),
            (r += "\n// active mods: --------------- ");
          let a = !1,
            l = !1;
          for (let t = 0; t < this._moduleNames.length; t++)
            for (let e = 0; e < this._modules.length; e++)
              this._modules[e].name == this._moduleNames[t] &&
                ((this._modules[e].srcBodyFrag || this._modules[e].srcHeadFrag) &&
                  ((a = !0),
                  (n +=
                    "\n// " +
                    t +
                    "." +
                    e +
                    ". " +
                    this._modules[e].title +
                    " (" +
                    this._modules[e].name +
                    ")")),
                (this._modules[e].srcBodyVert || this._modules[e].srcHeadVert) &&
                  ((r +=
                    "\n// " +
                    t +
                    "." +
                    e +
                    ". " +
                    this._modules[e].title +
                    " (" +
                    this._modules[e].name +
                    ")"),
                  (l = !0)));
          l || (n += "\n// no mods used..."),
            a || (n += "\n// no mods used..."),
            (n += "\n"),
            (r += "\n");
          for (let t = 0; t < this._uniforms.length; t++)
            if (
              this._uniforms[t].shaderType &&
              !this._uniforms[t].isStructMember()
            ) {
              let e = "";
              this._uniforms[t].getGlslTypeString() || (e += "// "),
                (e +=
                  "UNI " +
                  this._uniforms[t].getGlslTypeString() +
                  " " +
                  this._uniforms[t].getName());
              let i = "";
              this._uniforms[t].comment &&
                (i = " // " + this._uniforms[t].comment),
                ("vert" != this._uniforms[t].shaderType &&
                  "both" != this._uniforms[t].shaderType) ||
                  (-1 == this.srcVert.indexOf(e) &&
                    -1 ==
                      this.srcVert.indexOf(
                        "uniform " +
                          this._uniforms[t].getGlslTypeString() +
                          " " +
                          this._uniforms[t].getName()
                      ) &&
                    (o += e + ";" + i.endl())),
                ("frag" != this._uniforms[t].shaderType &&
                  "both" != this._uniforms[t].shaderType) ||
                  (-1 == this.srcFrag.indexOf(e) &&
                    -1 ==
                      this.srcFrag.indexOf(
                        "uniform " +
                          this._uniforms[t].getGlslTypeString() +
                          " " +
                          this._uniforms[t].getName()
                      ) &&
                    (h += e + ";" + i.endl()));
            }
          let c = 0,
            u = 0;
          for (let t = 0; t < this._uniforms.length; t++)
            this._uniforms[t].shaderType &&
              !this._uniforms[t].isStructMember() &&
              (("vert" != this._uniforms[t].shaderType &&
                "both" != this._uniforms[t].shaderType) ||
                u++,
              ("frag" != this._uniforms[t].shaderType &&
                "both" != this._uniforms[t].shaderType) ||
                c++);
          c >= this._cgl.maxUniformsFrag &&
            this._log.warn(
              "[cgl_shader] num uniforms frag: " +
                c +
                " / " +
                this._cgl.maxUniformsFrag
            ),
            u >= this._cgl.maxUniformsVert &&
              this._log.warn(
                "[cgl_shader] num uniforms vert: " +
                  u +
                  " / " +
                  this._cgl.maxUniformsVert
              ),
            -1 == n.indexOf("precision") &&
              (n = "precision " + this.precision + " float;".endl() + n),
            -1 == r.indexOf("precision") &&
              (r = "precision " + this.precision + " float;".endl() + r),
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            ) && ((n += "#define MOBILE".endl()), (r += "#define MOBILE".endl())),
            (r = e + r + i + s[0] + o + "\n// -- \n" + this.srcVert),
            (n = e + n + i + s[1] + h + "\n// -- \n" + this.srcFrag);
          let g = "",
            _ = "";
          this._modules.sort(function (t, e) {
            return t.group - e.group;
          }),
            this._modules.sort(function (t, e) {
              return t.priority || 0 - e.priority || 0;
            });
          let p = !1;
          for (let t = 0; t < this._moduleNames.length; t++) {
            let e = "",
              i = "";
            for (let s = 0; s < this._modules.length; s++)
              if (this._modules[s].name == this._moduleNames[t]) {
                if (
                  ((g +=
                    "\n//---- MOD: group:" +
                    this._modules[s].group +
                    ": idx:" +
                    s +
                    " - prfx:" +
                    this._modules[s].prefix +
                    " - " +
                    this._modules[s].title +
                    " ------\n"),
                  (_ +=
                    "\n//---- MOD: group:" +
                    this._modules[s].group +
                    ": idx:" +
                    s +
                    " - prfx:" +
                    this._modules[s].prefix +
                    " - " +
                    this._modules[s].title +
                    " ------\n"),
                  (e +=
                    "\n\n//---- MOD: " +
                    this._modules[s].title +
                    " / " +
                    this._modules[s].priority +
                    " ------\n"),
                  (i +=
                    "\n\n//---- MOD: " +
                    this._modules[s].title +
                    " / " +
                    this._modules[s].priority +
                    " ------\n"),
                  !p)
                ) {
                  p = !0;
                  for (let t = 0; t < this._attributes.length; t++)
                    this._attributes[t].name &&
                      this._attributes[t].type &&
                      ((g +=
                        "".endl() +
                        "#ifndef ATTRIB_" +
                        this._attributes[t].name.endl() +
                        "  #define ATTRIB_" +
                        this._attributes[t].name.endl() +
                        "  IN " +
                        this._attributes[t].type +
                        " " +
                        this._attributes[t].name +
                        ";".endl() +
                        "#endif"),
                      this._attributes[t].nameFrag &&
                        ((g +=
                          "".endl() +
                          "#ifndef ATTRIB_" +
                          this._attributes[t].nameFrag.endl() +
                          "  #define ATTRIB_" +
                          this._attributes[t].nameFrag.endl() +
                          "  OUT " +
                          this._attributes[t].type +
                          " " +
                          this._attributes[t].nameFrag +
                          ";".endl() +
                          "#endif"),
                        (e +=
                          "".endl() +
                          this._attributes[t].nameFrag +
                          "=" +
                          this._attributes[t].name +
                          ";")),
                      (_ +=
                        "".endl() +
                        "#ifndef ATTRIB_" +
                        this._attributes[t].nameFrag.endl() +
                        "  #define ATTRIB_" +
                        this._attributes[t].nameFrag.endl() +
                        "  IN " +
                        this._attributes[t].type +
                        " " +
                        this._attributes[t].nameFrag +
                        ";".endl() +
                        "#endif"));
                }
                (g += this._modules[s].srcHeadVert || ""),
                  (_ += this._modules[s].srcHeadFrag || ""),
                  (e += this._modules[s].srcBodyVert || ""),
                  (i += this._modules[s].srcBodyFrag || ""),
                  (g += "\n//---- end mod ------\n"),
                  (_ += "\n//---- end mod ------\n"),
                  (e += "\n//---- end mod ------\n"),
                  (i += "\n//---- end mod ------\n"),
                  (e = e.replace(/{{mod}}/g, this._modules[s].prefix)),
                  (i = i.replace(/{{mod}}/g, this._modules[s].prefix)),
                  (g = g.replace(/{{mod}}/g, this._modules[s].prefix)),
                  (_ = _.replace(/{{mod}}/g, this._modules[s].prefix)),
                  (e = e.replace(/MOD_/g, this._modules[s].prefix)),
                  (i = i.replace(/MOD_/g, this._modules[s].prefix)),
                  (g = g.replace(/MOD_/g, this._modules[s].prefix)),
                  (_ = _.replace(/MOD_/g, this._modules[s].prefix));
              }
            (r = r.replace("{{" + this._moduleNames[t] + "}}", e)),
              (n = n.replace("{{" + this._moduleNames[t] + "}}", i));
          }
          if (
            ((r = r.replace("{{MODULES_HEAD}}", g)),
            (n = n.replace("{{MODULES_HEAD}}", _)),
            (r = this._addLibs(r)),
            (n = this._addLibs(n)),
            this._program)
          ) {
            (this._program = this._createProgram(r, n)),
              (this._projMatrixUniform = null);
            for (let t = 0; t < this._uniforms.length; t++)
              this._uniforms[t].resetLoc();
          } else this._program = this._createProgram(r, n);
          (this.finalShaderFrag = n),
            (this.finalShaderVert = r),
            (ht.lastMesh = null),
            (ht.lastShader = null),
            (this._needsRecompile = !1),
            (this.lastCompile = _t()),
            (this._cgl.profileData.shaderCompileTime += performance.now() - t);
        }),
        (vt.hasChanged = function () {
          return this._needsRecompile;
        }),
        (vt.prototype.bind = function () {
          if (
            this._isValid &&
            ((ht.lastShader = this),
            (this._program && !this._needsRecompile) || this.compile(),
            this._isValid)
          ) {
            if (!this._projMatrixUniform) {
              (this._attrVertexPos = this._cgl.glGetAttribLocation(
                this._program,
                ot.SHADER.SHADERVAR_VERTEX_POSITION
              )),
                (this._projMatrixUniform = this._cgl.gl.getUniformLocation(
                  this._program,
                  ot.SHADER.SHADERVAR_UNI_PROJMAT
                )),
                (this._mvMatrixUniform = this._cgl.gl.getUniformLocation(
                  this._program,
                  "mvMatrix"
                )),
                (this._vMatrixUniform = this._cgl.gl.getUniformLocation(
                  this._program,
                  ot.SHADER.SHADERVAR_UNI_VIEWMAT
                )),
                (this._mMatrixUniform = this._cgl.gl.getUniformLocation(
                  this._program,
                  ot.SHADER.SHADERVAR_UNI_MODELMAT
                )),
                (this._camPosUniform = this._cgl.gl.getUniformLocation(
                  this._program,
                  ot.SHADER.SHADERVAR_UNI_VIEWPOS
                )),
                (this._normalMatrixUniform = this._cgl.gl.getUniformLocation(
                  this._program,
                  ot.SHADER.SHADERVAR_UNI_NORMALMAT
                )),
                (this._inverseViewMatrixUniform = this._cgl.gl.getUniformLocation(
                  this._program,
                  ot.SHADER.SHADERVAR_UNI_INVVIEWMAT
                ));
              for (let t = 0; t < this._uniforms.length; t++)
                this._uniforms[t].needsUpdate = !0;
            }
            this._cgl.currentProgram != this._program &&
              (this._cgl.profileData.profileShaderBinds++,
              this._cgl.gl.useProgram(this._program),
              (this._cgl.currentProgram = this._program));
            for (let t = 0; t < this._uniforms.length; t++)
              this._uniforms[t].needsUpdate && this._uniforms[t].updateValue();
            if (
              (this._pMatrixState != this._cgl.getProjectionMatrixStateCount() &&
                ((this._pMatrixState = this._cgl.getProjectionMatrixStateCount()),
                this._cgl.gl.uniformMatrix4fv(
                  this._projMatrixUniform,
                  !1,
                  this._cgl.pMatrix
                ),
                this._cgl.profileData.profileMVPMatrixCount++),
              this._vMatrixUniform)
            )
              this._vMatrixState != this._cgl.getViewMatrixStateCount() &&
                (this._cgl.gl.uniformMatrix4fv(
                  this._vMatrixUniform,
                  !1,
                  this._cgl.vMatrix
                ),
                this._cgl.profileData.profileMVPMatrixCount++,
                (this._vMatrixState = this._cgl.getViewMatrixStateCount()),
                this._inverseViewMatrixUniform &&
                  (mat4.invert(this._tempInverseViewMatrix, this._cgl.vMatrix),
                  this._cgl.gl.uniformMatrix4fv(
                    this._inverseViewMatrixUniform,
                    !1,
                    this._tempInverseViewMatrix
                  ),
                  this._cgl.profileData.profileMVPMatrixCount++)),
                this._cgl.gl.uniformMatrix4fv(
                  this._mMatrixUniform,
                  !1,
                  this._cgl.mMatrix
                ),
                this._cgl.profileData.profileMVPMatrixCount++,
                this._camPosUniform &&
                  (mat4.invert(this._tempCamPosMatrix, this._cgl.vMatrix),
                  this._cgl.gl.uniform3f(
                    this._camPosUniform,
                    this._tempCamPosMatrix[12],
                    this._tempCamPosMatrix[13],
                    this._tempCamPosMatrix[14]
                  ),
                  this._cgl.profileData.profileMVPMatrixCount++);
            else {
              const t = mat4.create();
              mat4.mul(t, this._cgl.vMatrix, this._cgl.mMatrix),
                this._cgl.gl.uniformMatrix4fv(this._mvMatrixUniform, !1, t),
                this._cgl.profileData.profileMVPMatrixCount++;
            }
            this._normalMatrixUniform &&
              (mat4.invert(this._tempNormalMatrix, this._cgl.mMatrix),
              mat4.transpose(this._tempNormalMatrix, this._tempNormalMatrix),
              this._cgl.gl.uniformMatrix4fv(
                this._normalMatrixUniform,
                !1,
                this._tempNormalMatrix
              ),
              this._cgl.profileData.profileMVPMatrixCount++);
            for (let t = 0; t < this._libs.length; t++)
              this._libs[t].onBind &&
                this._libs[t].onBind.bind(this._libs[t])(this._cgl, this);
            this._bindTextures();
          }
        }),
        (vt.prototype.toggleDefine = function (t, e) {
          e &&
            "object" == typeof e &&
            e.addEventListener &&
            (e.changeListener && e.removeEventListener(e.changeListener),
            (e.onToggleDefine = (e) => {
              this.toggleDefine(t, e);
            }),
            (e.changeListener = e.on("change", e.onToggleDefine)),
            (e = e.get())),
            e ? this.define(t) : this.removeDefine(t);
        }),
        (vt.prototype.define = function (t, e) {
          null == e && (e = ""),
            "object" == typeof e &&
              (e.removeEventListener("change", e.onDefineChange),
              (e.onDefineChange = (e) => {
                this.define(t, e);
              }),
              e.on("change", e.onDefineChange),
              (e = e.get()));
          for (let i = 0; i < this._defines.length; i++) {
            if (this._defines[i][0] == t && this._defines[i][1] == e) return;
            if (this._defines[i][0] == t)
              return (
                (this._defines[i][1] = e),
                this.setWhyCompile("define " + t + " " + e),
                void (this._needsRecompile = !0)
              );
          }
          this.setWhyCompile("define " + t + " " + e),
            (this._needsRecompile = !0),
            this._defines.push([t, e]);
        }),
        (vt.prototype.getDefines = function () {
          return this._defines;
        }),
        (vt.prototype.getDefine = function (t) {
          for (let e = 0; e < this._defines.length; e++)
            if (this._defines[e][0] == t) return this._defines[e][1];
          return null;
        }),
        (vt.prototype.hasDefine = function (t) {
          for (let e = 0; e < this._defines.length; e++)
            if (this._defines[e][0] == t) return !0;
        }),
        (vt.prototype.removeDefine = function (t) {
          for (let e = 0; e < this._defines.length; e++)
            if (this._defines[e][0] == t)
              return (
                this._defines.splice(e, 1),
                (this._needsRecompile = !0),
                void this.setWhyCompile("define removed:" + t)
              );
        }),
        (vt.prototype.removeModule = function (t) {
          for (let e = 0; e < this._modules.length; e++)
            if (t && t.id && (this._modules[e].id == t.id || !this._modules[e])) {
              let i = !0;
              for (; i; ) {
                i = !1;
                for (let e = 0; e < this._uniforms.length; e++)
                  0 != this._uniforms[e].getName().indexOf(t.prefix) ||
                    (this._uniforms.splice(e, 1), (i = !0));
              }
              (this._needsRecompile = !0),
                this.setWhyCompile("remove module " + t.title),
                this._modules.splice(e, 1);
              break;
            }
        }),
        (vt.prototype.getNumModules = function () {
          return this._modules.length;
        }),
        (vt.prototype.getCurrentModules = function () {
          return this._modules;
        }),
        (vt.prototype.addModule = function (t, e) {
          return (
            t.id || (t.id = A()),
            t.numId || (t.numId = this._moduleNumId),
            t.num || (t.num = this._modules.length),
            e && !e.group && (e.group = y()),
            t.group || (t.group = e ? e.group : y()),
            (t.prefix = "mod" + t.group + "_"),
            this._modules.push(t),
            (this._needsRecompile = !0),
            this.setWhyCompile("add module " + t.title),
            this._moduleNumId++,
            t
          );
        }),
        (vt.prototype.hasModule = function (t) {
          for (let e = 0; e < this._modules.length; e++)
            if (this._modules[e].id == t) return !0;
          return !1;
        }),
        (vt.prototype.setModules = function (t) {
          this._moduleNames = t;
        }),
        (vt.prototype.dispose = function () {
          this._cgl.gl.deleteProgram(this._program);
        }),
        (vt.prototype.needsRecompile = function () {
          return this._needsRecompile;
        }),
        (vt.prototype.setDrawBuffers = function (t) {
          if (this._drawBuffers.length !== t.length)
            return (
              (this._drawBuffers = t),
              (this._needsRecompile = !0),
              void this.setWhyCompile("setDrawBuffers")
            );
          for (let e = 0; e < t; e++)
            if (t[e] !== this._drawBuffers[e])
              return (
                (this._drawBuffers = t),
                (this._needsRecompile = !0),
                void this.setWhyCompile("setDrawBuffers")
              );
        }),
        (vt.prototype.getUniforms = function () {
          return this._uniforms;
        }),
        (vt.prototype.getUniform = function (t) {
          for (let e = 0; e < this._uniforms.length; e++)
            if (this._uniforms[e].getName() == t) return this._uniforms[e];
          return null;
        }),
        (vt.prototype.removeUniform = function (t) {
          for (let e = 0; e < this._uniforms.length; e++)
            this._uniforms[e].getName() == t && this._uniforms.splice(e, 1);
          (this._needsRecompile = !0), this.setWhyCompile("remove uniform " + t);
        }),
        (vt.prototype._addUniform = function (t) {
          this._uniforms.push(t),
            this.setWhyCompile("add uniform " + name),
            (this._needsRecompile = !0);
        }),
        (vt.prototype.addUniformFrag = function (t, e, i, s, r, n) {
          const o = new CGL.Uniform(this, t, e, i, s, r, n);
          return (o.shaderType = "frag"), o;
        }),
        (vt.prototype.addUniformVert = function (t, e, i, s, r, n) {
          const o = new CGL.Uniform(this, t, e, i, s, r, n);
          return (o.shaderType = "vert"), o;
        }),
        (vt.prototype.addUniformBoth = function (t, e, i, s, r, n) {
          const o = new CGL.Uniform(this, t, e, i, s, r, n);
          return (o.shaderType = "both"), o;
        }),
        (vt.prototype.addUniformStructFrag = function (t, e, i) {
          const s = {};
          if (!i) return s;
          for (let r = 0; r < i.length; r += 1) {
            const n = i[r];
            if (!this.hasUniform(e + "." + n.name)) {
              const i = new CGL.Uniform(
                this,
                n.type,
                e + "." + n.name,
                n.v1,
                n.v2,
                n.v3,
                n.v4,
                e,
                t,
                n.name
              );
              (i.shaderType = "frag"), (s[e + "." + n.name] = i);
            }
          }
          return s;
        }),
        (vt.prototype.addUniformStructVert = function (t, e, i) {
          const s = {};
          if (!i) return s;
          for (let r = 0; r < i.length; r += 1) {
            const n = i[r];
            if (!this.hasUniform(e + "." + n.name)) {
              const i = new CGL.Uniform(
                this,
                n.type,
                e + "." + n.name,
                n.v1,
                n.v2,
                n.v3,
                n.v4,
                e,
                t,
                n.name
              );
              (i.shaderType = "vert"), (s[e + "." + n.name] = i);
            }
          }
          return s;
        }),
        (vt.prototype.addUniformStructBoth = function (t, e, i) {
          const s = {};
          if (!i) return s;
          for (let r = 0; r < i.length; r += 1) {
            const n = i[r];
            if (
              (("2i" !== n.type && "i" !== n.type && "3i" !== n.type) ||
                this._log.error(
                  "Adding an integer struct member to both shaders can potentially error. Please use different structs for each shader. Error occured in struct:",
                  t,
                  " with member:",
                  n.name,
                  " of type:",
                  n.type,
                  "."
                ),
              !this.hasUniform(e + "." + n.name))
            ) {
              const i = new CGL.Uniform(
                this,
                n.type,
                e + "." + n.name,
                n.v1,
                n.v2,
                n.v3,
                n.v4,
                e,
                t,
                n.name
              );
              (i.shaderType = "both"), (s[e + "." + n.name] = i);
            }
          }
          return s;
        }),
        (vt.prototype.hasUniform = function (t) {
          for (let e = 0; e < this._uniforms.length; e++)
            if (this._uniforms[e].getName() == t) return !0;
          return !1;
        }),
        (vt.prototype._createProgram = function (t, e) {
          this._cgl.printError("before _createprogram");
          const i = this._cgl.gl.createProgram();
          return (
            (this.vshader = vt.createShader(
              this._cgl,
              t,
              this._cgl.gl.VERTEX_SHADER,
              this
            )),
            (this.fshader = vt.createShader(
              this._cgl,
              e,
              this._cgl.gl.FRAGMENT_SHADER,
              this
            )),
            this._cgl.gl.attachShader(i, this.vshader),
            this._cgl.gl.attachShader(i, this.fshader),
            this._linkProgram(i, t, e),
            this._cgl.printError("shader _createProgram"),
            i
          );
        }),
        (vt.prototype.hasErrors = function () {
          return this._hasErrors;
        }),
        (vt.prototype._linkProgram = function (t, e, i) {
          this._cgl.printError("before _linkprogram"),
            this._feedBackNames.length > 0 &&
              this._cgl.gl.transformFeedbackVaryings(
                t,
                this._feedBackNames,
                this._cgl.gl.SEPARATE_ATTRIBS
              ),
            this._cgl.gl.linkProgram(t),
            this._cgl.printError("gl.linkprogram"),
            (this._isValid = !0),
            (this._hasErrors = !1),
            !1 !== this._cgl.patch.config.glValidateShader &&
              (this._cgl.gl.validateProgram(t),
              this._cgl.gl.getProgramParameter(t, this._cgl.gl.VALIDATE_STATUS) ||
                (console.log("shaderprogram validation failed..."),
                console.log(
                  this._name + " programinfo: ",
                  this._cgl.gl.getProgramInfoLog(t)
                )),
              this._cgl.gl.getProgramParameter(t, this._cgl.gl.LINK_STATUS) ||
                ((this._hasErrors = !0),
                this._log.warn(
                  this._cgl.gl.getShaderInfoLog(this.fshader) ||
                    "empty shader infolog"
                ),
                this._log.warn(
                  this._cgl.gl.getShaderInfoLog(this.vshader) ||
                    "empty shader infolog"
                ),
                this._log.error(this._name + " shader linking fail..."),
                console.log(
                  this._name + " programinfo: ",
                  this._cgl.gl.getProgramInfoLog(t)
                ),
                console.log("--------------------------------------"),
                console.log(this),
                console.log("--------------------------------------"),
                (this._isValid = !1),
                (this._name = "errorshader"),
                this.setSource(
                  vt.getDefaultVertexShader(),
                  vt.getErrorFragmentShader()
                ),
                this._cgl.printError("shader link err")));
        }),
        (vt.prototype.getProgram = function () {
          return this._program;
        }),
        (vt.prototype.setFeedbackNames = function (t) {
          this.setWhyCompile("setFeedbackNames"),
            (this._needsRecompile = !0),
            (this._feedBackNames = t);
        }),
        (vt.prototype.getDefaultVertexShader = vt.getDefaultVertexShader =
          function () {
            return "{{MODULES_HEAD}}\nIN vec3 vPosition;\nIN vec2 attrTexCoord;\nIN vec3 attrVertNormal;\nIN vec3 attrTangent,attrBiTangent;\n\nIN float attrVertIndex;\n\nOUT vec2 texCoord;\nOUT vec3 norm;\nUNI mat4 projMatrix;\nUNI mat4 viewMatrix;\nUNI mat4 modelMatrix;\n\nvoid main()\n{\n    texCoord=attrTexCoord;\n    norm=attrVertNormal;\n    vec4 pos=vec4(vPosition,  1.0);\n    vec3 tangent=attrTangent;\n    vec3 bitangent=attrBiTangent;\n    mat4 mMatrix=modelMatrix;\n    {{MODULE_VERTEX_POSITION}}\n    gl_Position = projMatrix * (viewMatrix*mMatrix) * pos;\n}\n";
          }),
        (vt.prototype.getDefaultFragmentShader = vt.getDefaultFragmentShader =
          function (t, e, i) {
            return (
              null == t && ((t = 0.5), (e = 0.5), (i = 0.5)),
              "".endl() +
                "IN vec2 texCoord;".endl() +
                "{{MODULES_HEAD}}".endl() +
                "void main()".endl() +
                "{".endl() +
                "    vec4 col=vec4(" +
                t +
                "," +
                e +
                "," +
                i +
                ",1.0);".endl() +
                "    {{MODULE_COLOR}}".endl() +
                "    outColor = col;".endl() +
                "}"
            );
          }),
        (vt.prototype.addAttribute = function (t) {
          for (let e = 0; e < this._attributes.length; e++)
            if (
              this._attributes[e].name == t.name &&
              this._attributes[e].nameFrag == t.nameFrag
            )
              return;
          this._attributes.push(t),
            (this._needsRecompile = !0),
            this.setWhyCompile("addAttribute");
        }),
        (vt.prototype.bindTextures = vt.prototype._bindTextures =
          function () {
            this._textureStackTex.length > this._cgl.maxTextureUnits &&
              this._log.warn(
                "[shader._bindTextures] too many textures bound",
                this._textureStackTex.length + "/" + this._cgl.maxTextureUnits
              );
            for (let t = 0; t < this._textureStackTex.length; t++)
              if (this._textureStackTex[t] || this._textureStackTexCgl[t]) {
                let e = this._textureStackTex[t];
                this._textureStackTexCgl[t] &&
                  (e =
                    this._textureStackTexCgl[t].tex ||
                    CGL.Texture.getEmptyTexture(this._cgl).tex);
                let i = !0;
                this._textureStackUni[t]
                  ? (this._textureStackUni[t].setValue(t),
                    (i = this._cgl.setTexture(t, e, this._textureStackType[t])))
                  : (this._log.warn("no uniform for pushtexture", this._name),
                    (i = this._cgl.setTexture(t, e, this._textureStackType[t]))),
                  i ||
                    this._log.warn(
                      "tex bind failed",
                      this.getName(),
                      this._textureStackUni[t]
                    );
              } else this._log.warn("no texture for pushtexture", this._name);
          }),
        (vt.prototype.setUniformTexture = function (t, e) {
          for (let i = 0; i < this._textureStackTex.length; i++)
            if (this._textureStackUni[i] == t) {
              const t = this._textureStackTex[i];
              return (this._textureStackTex[i] = e), t;
            }
          return null;
        }),
        (vt.prototype.pushTexture = function (t, e, i) {
          if (!t) throw new Error("no uniform given to texturestack");
          if (e) {
            if (!(e.hasOwnProperty("tex") || e instanceof WebGLTexture))
              return (
                this._log.warn(new Error("invalid texture").stack),
                void this._log.warn("[cgl_shader] invalid texture...", e)
              );
            this._textureStackUni.push(t),
              e.hasOwnProperty("tex")
                ? (this._textureStackTexCgl.push(e),
                  this._textureStackTex.push(null))
                : (this._textureStackTexCgl.push(null),
                  this._textureStackTex.push(e)),
              this._textureStackType.push(i);
          }
        }),
        (vt.prototype.popTexture = function () {
          this._textureStackUni.pop(),
            this._textureStackTex.pop(),
            this._textureStackType.pop();
        }),
        (vt.prototype.popTextures = function () {
          this._textureStackTex.length =
            this._textureStackTexCgl.length =
            this._textureStackType.length =
            this._textureStackUni.length =
              0;
        }),
        (vt.prototype.getInfo = function () {
          const t = {};
          return (
            (t.name = this._name),
            (t.defines = this.getDefines()),
            (t.hasErrors = this.hasErrors()),
            t
          );
        }),
        (vt.getErrorFragmentShader = function () {
          return (
            "".endl() +
            "void main()".endl() +
            "{".endl() +
            "   float g=mod((gl_FragCoord.y+gl_FragCoord.x),50.0)/50.0;".endl() +
            "   g= step(0.1,g);".endl() +
            "   outColor = vec4( g+0.5, 0.0, 0.0, 1.0);".endl() +
            "}"
          );
        }),
        (vt.createShader = function (t, e, i, s) {
          if (t.aborted) return;
          const r = t.gl.createShader(i);
          if (
            (t.gl.shaderSource(r, e),
            t.gl.compileShader(r),
            !t.gl.getShaderParameter(r, t.gl.COMPILE_STATUS))
          ) {
            console.log("compile status: "),
              i == t.gl.VERTEX_SHADER && console.log("VERTEX_SHADER"),
              i == t.gl.FRAGMENT_SHADER && console.log("FRAGMENT_SHADER");
            let o = t.gl.getShaderInfoLog(r) || "empty shader info log";
            const h = (function (t) {
              const e = [],
                i = t.split("\n");
              for (const t in i) {
                const s = i[t].split(":");
                parseInt(s[2], 10) && e.push(parseInt(s[2], 10));
              }
              return e;
            })(o);
            let a = '<div class="shaderErrorCode">';
            const l = e.match(/^.*((\r\n|\n|\r)|$)/gm);
            for (const t in l) {
              const e = parseInt(t, 10) + 1,
                i = e + ": " + l[t];
              console.log(i);
              let s = !1;
              for (const t in h) h[t] == e && (s = !0);
              s && (a += '<span class="error">'),
                (a +=
                  (n = i) && yt.test(n)
                    ? n.replace(bt, function (t) {
                        return At[t];
                      })
                    : n || ""),
                s && (a += "</span>");
            }
            console.warn(o),
              (o = o.replace(/\n/g, "<br/>")),
              (a = o + "<br/>" + a + "<br/><br/>"),
              (a += "</div>"),
              t.patch.emitEvent("criticalError", "Shader error " + this._name, a),
              t.patch.isEditorMode() &&
                console.log("Shader error " + this._name, a),
              (this._name = "errorshader"),
              s.setSource(
                vt.getDefaultVertexShader(),
                vt.getErrorFragmentShader()
              );
          }
          var n;
          return r;
        });
      const xt = function () {
        (this._arr = [mat4.create()]), (this._index = 0), (this.stateCounter = 0);
      };
      (xt.prototype.push = function (t) {
        if (
          (this._index++, this.stateCounter++, this._index == this._arr.length)
        ) {
          const t = mat4.create();
          this._arr.push(t);
        }
        return (
          mat4.copy(this._arr[this._index], t || this._arr[this._index - 1]),
          this._arr[this._index]
        );
      }),
        (xt.prototype.pop = function () {
          return (
            this.stateCounter++,
            this._index--,
            this._index < 0 && (this._index = 0),
            this._arr[this._index]
          );
        }),
        (xt.prototype.length = function () {
          return this._index;
        });
      class It {
        constructor(t) {
          (this._cgl = t),
            (this._lastTime = 0),
            (this.pause = !1),
            (this.profileUniformCount = 0),
            (this.profileShaderBinds = 0),
            (this.profileUniformCount = 0),
            (this.profileShaderCompiles = 0),
            (this.profileVideosPlaying = 0),
            (this.profileMVPMatrixCount = 0),
            (this.profileEffectBuffercreate = 0),
            (this.profileShaderGetUniform = 0),
            (this.profileFrameBuffercreate = 0),
            (this.profileMeshSetGeom = 0),
            (this.profileTextureNew = 0),
            (this.profileGenMipMap = 0),
            (this.profileOnAnimFrameOps = 0),
            (this.profileMainloopMs = 0),
            (this.profileMeshDraw = 0),
            (this.profileTextureEffect = 0),
            (this.profileTexPreviews = 0),
            (this.shaderCompileTime = 0),
            (this.profileMeshNumElements = 0),
            (this.profileMeshAttributes = 0),
            (this.profileSingleMeshAttribute = []),
            (this.heavyEvents = []),
            (this.doProfileGlQuery = !1),
            (this.glQueryData = {});
        }
        clear() {
          (this.profileSingleMeshAttribute = {}),
            (this.profileMeshAttributes = 0),
            (this.profileUniformCount = 0),
            (this.profileShaderGetUniform = 0),
            (this.profileShaderCompiles = 0),
            (this.profileShaderBinds = 0),
            (this.profileTextureResize = 0),
            (this.profileFrameBuffercreate = 0),
            (this.profileEffectBuffercreate = 0),
            (this.profileTextureDelete = 0),
            (this.profileMeshSetGeom = 0),
            (this.profileVideosPlaying = 0),
            (this.profileMVPMatrixCount = 0),
            (this.profileNonTypedAttrib = 0),
            (this.profileNonTypedAttribNames = ""),
            (this.profileTextureNew = 0),
            (this.profileGenMipMap = 0),
            (this.profileFramebuffer = 0),
            (this.profileMeshDraw = 0),
            (this.profileTextureEffect = 0),
            (this.profileTexPreviews = 0),
            (this.profileMeshNumElements = 0);
        }
        clearGlQuery() {
          for (let t in this.glQueryData)
            (!this.glQueryData[t].lastClear ||
              performance.now() - this.glQueryData[t].lastClear > 1e3) &&
              ((this.glQueryData[t].time =
                this.glQueryData[t]._times / this.glQueryData[t]._numcount),
              (this.glQueryData[t].num = this.glQueryData[t]._numcount),
              (this.glQueryData[t]._times = 0),
              (this.glQueryData[t]._numcount = 0),
              (this.glQueryData[t].lastClear = performance.now()));
        }
        addHeavyEvent(t, e, i) {
          const s = { event: t, name: e, info: i, date: performance.now() };
          this.heavyEvents.push(s), this._cgl.emitEvent("heavyEvent", s);
        }
      }
      const Ot = function (t) {
        W.apply(this),
          (this.profileData = new It(this)),
          (this._log = new h("cgl_context"));
        const e = [0, 0, 0, 0];
        (this.glVersion = 0),
          (this.glUseHalfFloatTex = !1),
          (this.clearCanvasTransparent = !0),
          (this.clearCanvasDepth = !0),
          (this.patch = t),
          (this.debugOneFrame = !1),
          (this.checkGlErrors = !0),
          (this.maxTextureUnits = 0),
          (this.maxVaryingVectors = 0),
          (this.currentProgram = null),
          (this._hadStackError = !1),
          (this.glSlowRenderer = !1),
          (this._isSafariCrap = !1),
          (this.temporaryTexture = null),
          (this.frameStore = {}),
          (this._onetimeCallbacks = []),
          (this.gl = null),
          (this._cursor = "auto"),
          (this._currentCursor = ""),
          (this.pMatrix = mat4.create()),
          (this.mMatrix = mat4.create()),
          (this.vMatrix = mat4.create()),
          (this._textureslots = []),
          (this._pMatrixStack = new xt()),
          (this._mMatrixStack = new xt()),
          (this._vMatrixStack = new xt()),
          (this._glFrameBufferStack = []),
          (this._frameBufferStack = []),
          (this._shaderStack = []),
          (this._stackDepthTest = []),
          Object.defineProperty(this, "mvMatrix", {
            get() {
              return this.mMatrix;
            },
            set(t) {
              this.mMatrix = t;
            },
          }),
          (this.canvas = null),
          (this.pixelDensity = 1),
          mat4.identity(this.mMatrix),
          mat4.identity(this.vMatrix);
        const i = new vt(this, "simpleshader");
        i.setModules([
          "MODULE_VERTEX_POSITION",
          "MODULE_COLOR",
          "MODULE_BEGIN_FRAG",
        ]),
          i.setSource(vt.getDefaultVertexShader(), vt.getDefaultFragmentShader());
        let s = i;
        this.aborted = !1;
        const r = [];
        (this.exitError = function (t, e) {
          this.patch.exitError(t, e), (this.aborted = !0);
        }),
          (this.setCanvas = function (t) {
            if (
              ((this.canvas =
                "string" == typeof t ? document.getElementById(t) : t),
              this.patch.config.canvas || (this.patch.config.canvas = {}),
              this.patch.config.canvas.hasOwnProperty("preserveDrawingBuffer") ||
                (this.patch.config.canvas.preserveDrawingBuffer = !1),
              this.patch.config.canvas.hasOwnProperty("premultipliedAlpha") ||
                (this.patch.config.canvas.premultipliedAlpha = !1),
              this.patch.config.canvas.hasOwnProperty("alpha") ||
                (this.patch.config.canvas.alpha = !1),
              this.patch.config.hasOwnProperty("clearCanvasColor") &&
                (this.clearCanvasTransparent =
                  this.patch.config.clearCanvasColor),
              this.patch.config.hasOwnProperty("clearCanvasDepth") &&
                (this.clearCanvasDepth = this.patch.config.clearCanvasDepth),
              /^((?!chrome|android).)*safari/i.test(navigator.userAgent) &&
                (this._isSafariCrap = !0),
              this.patch.config.canvas.forceWebGl1 ||
                (this.gl = this.canvas.getContext(
                  "webgl2",
                  this.patch.config.canvas
                )),
              this.gl && "WebGL 1.0" != this.gl.getParameter(this.gl.VERSION)
                ? (this.glVersion = 2)
                : ((this.gl =
                    this.canvas.getContext("webgl", this.patch.config.canvas) ||
                    this.canvas.getContext(
                      "experimental-webgl",
                      this.patch.config.canvas
                    )),
                  (this.glVersion = 1),
                  /^((?!chrome|android).)*safari/i.test(navigator.userAgent) &&
                    navigator.userAgent.match(/iPhone/i) &&
                    (this.glUseHalfFloatTex = !0),
                  /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                    !window.MSStream &&
                    (this.patch.config.canvas.hasOwnProperty("powerPreference") ||
                      (this.patch.config.canvas.powerPreference =
                        "high-performance"))),
              !this.gl)
            )
              return void this.exitError(
                "NO_WEBGL",
                "sorry, could not initialize WebGL. Please check if your Browser supports WebGL or try to restart your browser."
              );
            const e = this.gl.getExtension("WEBGL_debug_renderer_info");
            e &&
              ((this.glRenderer = this.gl.getParameter(
                e.UNMASKED_RENDERER_WEBGL
              )),
              "Google SwiftShader" === this.glRenderer &&
                (this.glSlowRenderer = !0)),
              this.gl.getExtension("OES_standard_derivatives");
            const i = this.gl.getExtension("ANGLE_instanced_arrays") || this.gl;
            this.canvas.addEventListener("webglcontextlost", (t) => {
              this._log.error("canvas lost...", t),
                this.emitEvent("webglcontextlost"),
                (this.aborted = !0);
            }),
              (this.maxVaryingVectors = this.gl.getParameter(
                this.gl.MAX_VARYING_VECTORS
              )),
              (this.maxTextureUnits = this.gl.getParameter(
                this.gl.MAX_TEXTURE_IMAGE_UNITS
              )),
              (this.maxTexSize = this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE)),
              (this.maxUniformsFrag = this.gl.getParameter(
                this.gl.MAX_FRAGMENT_UNIFORM_VECTORS
              )),
              (this.maxUniformsVert = this.gl.getParameter(
                this.gl.MAX_VERTEX_UNIFORM_VECTORS
              )),
              (this.maxSamples = 0),
              this.gl.MAX_SAMPLES &&
                (this.maxSamples = this.gl.getParameter(this.gl.MAX_SAMPLES)),
              i.vertexAttribDivisorANGLE &&
                ((this.gl.vertexAttribDivisor =
                  i.vertexAttribDivisorANGLE.bind(i)),
                (this.gl.drawElementsInstanced =
                  i.drawElementsInstancedANGLE.bind(i))),
              this.updateSize();
          }),
          (this.getInfo = function () {
            return {
              glVersion: this.glVersion,
              glRenderer: this.glRenderer,
              glUseHalfFloatTex: this.glUseHalfFloatTex,
              maxVaryingVectors: this.maxVaryingVectors,
              maxTextureUnits: this.maxTextureUnits,
              maxTexSize: this.maxTexSize,
              maxUniformsFrag: this.maxUniformsFrag,
              maxUniformsVert: this.maxUniformsVert,
              maxSamples: this.maxSamples,
            };
          }),
          (this.updateSize = function () {
            (this.canvas.width = this.canvasWidth =
              this.canvas.clientWidth * this.pixelDensity),
              (this.canvas.height = this.canvasHeight =
                this.canvas.clientHeight * this.pixelDensity);
          }),
          (this.canvasWidth = -1),
          (this.canvasHeight = -1),
          (this.canvasScale = 1);
        let n = -1,
          o = -1;
        (this.getViewPort = function () {
          return e;
        }),
          (this.resetViewPort = function () {
            this.gl.viewport(e[0], e[1], e[2], e[3]);
          }),
          (this.setViewPort = function (t, i, s, r) {
            (e[0] = Math.round(t)),
              (e[1] = Math.round(i)),
              (e[2] = Math.round(s)),
              (e[3] = Math.round(r)),
              this.gl.viewport(e[0], e[1], e[2], e[3]);
          }),
          (this.screenShot = function (t, e, i, s) {
            e &&
              (this.gl.clearColor(1, 1, 1, 1),
              this.gl.colorMask(!1, !1, !1, !0),
              this.gl.clear(this.gl.COLOR_BUFFER_BIT),
              this.gl.colorMask(!0, !0, !0, !0)),
              this.canvas &&
                this.canvas.toBlob &&
                this.canvas.toBlob(
                  (e) => {
                    t ? t(e) : this._log.log("no screenshot callback...");
                  },
                  i,
                  s
                );
          }),
          (this.endFrame = function () {
            if (
              (this.patch.isEditorMode() &&
                CABLES.GL_MARKER.drawMarkerLayer(this),
              this.setPreviousShader(),
              this._vMatrixStack.length() > 0 &&
                this.logStackError(
                  "view matrix stack length !=0 at end of rendering..."
                ),
              this._mMatrixStack.length() > 0 &&
                this.logStackError(
                  "mvmatrix stack length !=0 at end of rendering..."
                ),
              this._pMatrixStack.length() > 0 &&
                this.logStackError(
                  "pmatrix stack length !=0 at end of rendering..."
                ),
              this._glFrameBufferStack.length > 0 &&
                this.logStackError(
                  "glFrameBuffer stack length !=0 at end of rendering..."
                ),
              this._stackDepthTest.length > 0 &&
                this.logStackError(
                  "depthtest stack length !=0 at end of rendering..."
                ),
              this._stackDepthWrite.length > 0 &&
                this.logStackError(
                  "depthwrite stack length !=0 at end of rendering..."
                ),
              this._stackDepthFunc.length > 0 &&
                this.logStackError(
                  "depthfunc stack length !=0 at end of rendering..."
                ),
              this._stackBlend.length > 0 &&
                this.logStackError(
                  "blend stack length !=0 at end of rendering..."
                ),
              this._stackBlendMode.length > 0 &&
                this.logStackError(
                  "blendMode stack length !=0 at end of rendering..."
                ),
              this._shaderStack.length > 0 &&
                this.logStackError(
                  "this._shaderStack length !=0 at end of rendering..."
                ),
              this._stackCullFace.length > 0 &&
                this.logStackError(
                  "this._stackCullFace length !=0 at end of rendering..."
                ),
              this._stackCullFaceFacing.length > 0 &&
                this.logStackError(
                  "this._stackCullFaceFacing length !=0 at end of rendering..."
                ),
              (this._frameStarted = !1),
              n != this.canvasWidth || o != this.canvasHeight)
            ) {
              (n = this.canvasWidth),
                (o = this.canvasHeight),
                this.setSize(
                  this.canvasWidth / this.pixelDensity,
                  this.canvasHeight / this.pixelDensity
                ),
                this.updateSize();
              for (let t = 0; t < r.length; t++) r[t]();
              this.emitEvent("resize");
            }
            this._cursor != this._currentCursor &&
              (this._currentCursor = this.canvas.style.cursor = this._cursor);
          }),
          (this.logStackError = function (t) {
            this._hadStackError ||
              ((this._hadStackError = !0),
              this._log.warn("[" + this.canvas.id + "]: ", t));
          }),
          (this.getShader = function () {
            if (
              s &&
              (!this.frameStore ||
                ((!0 === this.frameStore.renderOffscreen) == s.offScreenPass) ==
                  !0)
            )
              return s;
            for (let t = this._shaderStack.length - 1; t >= 0; t--)
              if (
                this._shaderStack[t] &&
                this.frameStore.renderOffscreen ==
                  this._shaderStack[t].offScreenPass
              )
                return this._shaderStack[t];
          }),
          (this.getDefaultShader = function () {
            return i;
          }),
          (this.pushShader = this.setShader =
            function (t) {
              this._shaderStack.push(t), (s = t);
            }),
          (this.popShader = this.setPreviousShader =
            function () {
              if (0 === this._shaderStack.length)
                throw new Error("Invalid shader stack pop!");
              this._shaderStack.pop(),
                (s = this._shaderStack[this._shaderStack.length - 1]);
            }),
          (this.pushGlFrameBuffer = function (t) {
            this._glFrameBufferStack.push(t);
          }),
          (this.popGlFrameBuffer = function () {
            return 0 == this._glFrameBufferStack.length
              ? null
              : (this._glFrameBufferStack.pop(),
                this._glFrameBufferStack[this._glFrameBufferStack.length - 1]);
          }),
          (this.getCurrentGlFrameBuffer = function () {
            return 0 === this._glFrameBufferStack.length
              ? null
              : this._glFrameBufferStack[this._glFrameBufferStack.length - 1];
          }),
          (this.pushFrameBuffer = function (t) {
            this._frameBufferStack.push(t);
          }),
          (this.popFrameBuffer = function () {
            return 0 == this._frameBufferStack.length
              ? null
              : (this._frameBufferStack.pop(),
                this._frameBufferStack[this._frameBufferStack.length - 1]);
          }),
          (this.getCurrentFrameBuffer = function () {
            return 0 === this._frameBufferStack.length
              ? null
              : this._frameBufferStack[this._frameBufferStack.length - 1];
          });
        const a = vec3.create();
        vec3.set(a, 0, 0, 2);
        const l = vec3.create();
        vec3.set(l, 0, 0, 0),
          (this.renderStart = function (t, e, s) {
            e || (e = l),
              s || (s = a),
              this.pushDepthTest(!0),
              this.pushDepthWrite(!0),
              this.pushDepthFunc(t.gl.LEQUAL),
              this.pushCullFaceFacing(t.gl.BACK),
              this.pushCullFace(!1),
              this.clearCanvasTransparent &&
                (t.gl.clearColor(0, 0, 0, 0), t.gl.clear(t.gl.COLOR_BUFFER_BIT)),
              this.clearCanvasDepth && t.gl.clear(t.gl.DEPTH_BUFFER_BIT),
              t.setViewPort(0, 0, t.canvasWidth, t.canvasHeight),
              mat4.perspective(
                t.pMatrix,
                45,
                t.canvasWidth / t.canvasHeight,
                0.1,
                1e3
              ),
              mat4.identity(t.mMatrix),
              mat4.identity(t.vMatrix),
              mat4.translate(t.mMatrix, t.mMatrix, e),
              mat4.translate(t.vMatrix, t.vMatrix, s),
              t.pushPMatrix(),
              t.pushModelMatrix(),
              t.pushViewMatrix(),
              t.pushBlendMode(ot.BLEND_MODES.BLEND_NORMAL, !1);
            for (let t = 0; t < this._textureslots.length; t++)
              this._textureslots[t] = null;
            if (
              (this.pushShader(i),
              (this._frameStarted = !0),
              this._onetimeCallbacks.length > 0)
            ) {
              for (let t = 0; t < this._onetimeCallbacks.length; t++)
                this._onetimeCallbacks[t]();
              this._onetimeCallbacks.length = 0;
            }
            this.emitEvent("beginFrame");
          }),
          (this.renderEnd = function (t) {
            t.popViewMatrix(),
              t.popModelMatrix(),
              t.popPMatrix(),
              this.popDepthTest(),
              this.popDepthWrite(),
              this.popDepthFunc(),
              this.popCullFaceFacing(),
              this.popCullFace(),
              this.popBlend(),
              this.popBlendMode(),
              t.endFrame(),
              this.emitEvent("endFrame");
          }),
          (this.getTexture = function (t) {
            return this._textureslots[t];
          }),
          (this.checkFrameStarted = function (t) {
            this._frameStarted ||
              (this._log.warn("frame not started " + t),
              this.patch.printTriggerStack());
          }),
          (this.setTexture = function (t, e, i) {
            return (
              this.checkFrameStarted("cgl setTexture"),
              null === e && (e = CGL.Texture.getEmptyTexture(this).tex),
              this._textureslots[t] != e &&
                (this.gl.activeTexture(this.gl.TEXTURE0 + t),
                this.gl.bindTexture(i || this.gl.TEXTURE_2D, e),
                (this._textureslots[t] = e)),
              !0
            );
          }),
          (this.fullScreen = function () {
            this.canvas.requestFullscreen
              ? this.canvas.requestFullscreen()
              : this.canvas.mozRequestFullScreen
              ? this.canvas.mozRequestFullScreen()
              : this.canvas.webkitRequestFullscreen
              ? this.canvas.webkitRequestFullscreen()
              : this.canvas.msRequestFullscreen &&
                this.canvas.msRequestFullscreen();
          }),
          (this.setSize = function (t, e, i) {
            i ||
              ((this.canvas.style.width = t + "px"),
              (this.canvas.style.height = e + "px")),
              (this.canvas.width = t * this.pixelDensity),
              (this.canvas.height = e * this.pixelDensity),
              this.updateSize();
          }),
          (this._resizeToWindowSize = function () {
            this.setSize(window.innerWidth, window.innerHeight),
              this.updateSize();
          }),
          (this._resizeToParentSize = function () {
            const t = this.canvas.parentElement;
            t
              ? (this.setSize(t.clientWidth, t.clientHeight), this.updateSize())
              : this._log.error("cables: can not resize to container element");
          }),
          (this.setAutoResize = function (t) {
            window.removeEventListener(
              "resize",
              this._resizeToWindowSize.bind(this)
            ),
              window.removeEventListener(
                "resize",
                this._resizeToParentSize.bind(this)
              ),
              "window" == t &&
                (window.addEventListener(
                  "resize",
                  this._resizeToWindowSize.bind(this)
                ),
                window.addEventListener(
                  "orientationchange",
                  this._resizeToWindowSize.bind(this)
                ),
                this._resizeToWindowSize()),
              "parent" == t &&
                (window.addEventListener(
                  "resize",
                  this._resizeToParentSize.bind(this)
                ),
                this._resizeToParentSize());
          }),
          (this.printError = function (t) {
            if (!this.checkGlErrors) return;
            let e = !1,
              i = this.gl.getError();
            if (i != this.gl.NO_ERROR) {
              let s = "";
              i == this.gl.OUT_OF_MEMORY && (s = "OUT_OF_MEMORY"),
                i == this.gl.INVALID_ENUM && (s = "INVALID_ENUM"),
                i == this.gl.INVALID_OPERATION && (s = "INVALID_OPERATION"),
                i == this.gl.INVALID_FRAMEBUFFER_OPERATION &&
                  (s = "INVALID_FRAMEBUFFER_OPERATION"),
                i == this.gl.INVALID_VALUE && (s = "INVALID_VALUE"),
                i == this.gl.CONTEXT_LOST_WEBGL &&
                  ((this.aborted = !0), (s = "CONTEXT_LOST_WEBGL")),
                i == this.gl.NO_ERROR && (s = "NO_ERROR"),
                (e = !0),
                this._log.warn("gl error [" + this.canvas.id + "]: ", t, i, s),
                -1 == this.canvas.id.indexOf("glGuiCanvas") &&
                  (this._loggedGlError ||
                    (this.patch.printTriggerStack(),
                    this._log.stack("glerror"),
                    (this._loggedGlError = !0)));
            }
            return (i = this.gl.getError()), e;
          }),
          (this.saveScreenshot = function (t, e, i, s, r) {
            this.patch.renderOneFrame();
            let n = this.canvas.clientWidth,
              o = this.canvas.clientHeight;
            function h(t, e, i) {
              return Array(e - String(t).length + 1).join(i || "0") + t;
            }
            i && ((this.canvas.width = i), (n = i)),
              s && ((this.canvas.height = s), (o = s));
            const a = new Date(),
              l = ""
                .concat(
                  String(a.getFullYear()) +
                    String(a.getMonth() + 1) +
                    String(a.getDate()),
                  "_"
                )
                .concat(h(a.getHours(), 2))
                .concat(h(a.getMinutes(), 2))
                .concat(h(a.getSeconds(), 2));
            t ? (t += ".png") : (t = "cables_" + l + ".png"),
              this.patch.cgl.screenShot(
                function (i) {
                  if (((this.canvas.width = n), (this.canvas.height = o), i)) {
                    const s = document.createElement("a");
                    (s.download = t),
                      (s.href = URL.createObjectURL(i)),
                      setTimeout(function () {
                        s.click(), e && e(i);
                      }, 100);
                  } else this._log.log("screenshot: no blob");
                }.bind(this),
                r
              );
          });
      };
      (Ot.prototype.addNextFrameOnceCallback = function (t) {
        t && this._onetimeCallbacks.push(t);
      }),
        (Ot.prototype.pushViewMatrix = function () {
          this.vMatrix = this._vMatrixStack.push(this.vMatrix);
        }),
        (Ot.prototype.popViewMatrix = function () {
          this.vMatrix = this._vMatrixStack.pop();
        }),
        (Ot.prototype.getViewMatrixStateCount = function () {
          return this._vMatrixStack.stateCounter;
        }),
        (Ot.prototype.pushPMatrix = function () {
          this.pMatrix = this._pMatrixStack.push(this.pMatrix);
        }),
        (Ot.prototype.popPMatrix = function () {
          return (this.pMatrix = this._pMatrixStack.pop()), this.pMatrix;
        }),
        (Ot.prototype.getProjectionMatrixStateCount = function () {
          return this._pMatrixStack.stateCounter;
        }),
        (Ot.prototype.pushMvMatrix = Ot.prototype.pushModelMatrix =
          function () {
            this.mMatrix = this._mMatrixStack.push(this.mMatrix);
          }),
        (Ot.prototype.popMvMatrix =
          Ot.prototype.popmMatrix =
          Ot.prototype.popModelMatrix =
            function () {
              return (this.mMatrix = this._mMatrixStack.pop()), this.mMatrix;
            }),
        (Ot.prototype.modelMatrix = function () {
          return this.mMatrix;
        }),
        (Ot.prototype._stackDepthTest = []),
        (Ot.prototype.pushDepthTest = function (t) {
          this._stackDepthTest.push(t),
            t
              ? this.gl.enable(this.gl.DEPTH_TEST)
              : this.gl.disable(this.gl.DEPTH_TEST);
        }),
        (Ot.prototype.stateDepthTest = function () {
          return this._stackDepthTest[this._stackDepthTest.length - 1];
        }),
        (Ot.prototype.popDepthTest = function () {
          this._stackDepthTest.pop(),
            this._stackDepthTest[this._stackDepthTest.length - 1]
              ? this.gl.enable(this.gl.DEPTH_TEST)
              : this.gl.disable(this.gl.DEPTH_TEST);
        }),
        (Ot.prototype._stackDepthWrite = []),
        (Ot.prototype.pushDepthWrite = function (t) {
          (t = t || !1), this._stackDepthWrite.push(t), this.gl.depthMask(t);
        }),
        (Ot.prototype.stateDepthWrite = function () {
          return this._stackDepthWrite[this._stackDepthWrite.length - 1];
        }),
        (Ot.prototype.popDepthWrite = function () {
          this._stackDepthWrite.pop(),
            this.gl.depthMask(
              this._stackDepthWrite[this._stackDepthWrite.length - 1] || !1
            );
        }),
        (Ot.prototype._stackCullFace = []),
        (Ot.prototype.pushCullFace = function (t) {
          this._stackCullFace.push(t),
            t
              ? this.gl.enable(this.gl.CULL_FACE)
              : this.gl.disable(this.gl.CULL_FACE);
        }),
        (Ot.prototype.stateCullFace = function () {
          return this._stackCullFace[this._stackCullFace.length - 1];
        }),
        (Ot.prototype.popCullFace = function () {
          this._stackCullFace.pop(),
            this._stackCullFace[this._stackCullFace.length - 1]
              ? this.gl.enable(this.gl.CULL_FACE)
              : this.gl.disable(this.gl.CULL_FACE);
        }),
        (Ot.prototype._stackCullFaceFacing = []),
        (Ot.prototype.pushCullFaceFacing = function (t) {
          this._stackCullFaceFacing.push(t),
            this.gl.cullFace(
              this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1]
            );
        }),
        (Ot.prototype.stateCullFaceFacing = function () {
          return this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1];
        }),
        (Ot.prototype.popCullFaceFacing = function () {
          this._stackCullFaceFacing.pop(),
            this._stackCullFaceFacing.length > 0 &&
              this.gl.cullFace(
                this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1]
              );
        }),
        (Ot.prototype._stackDepthFunc = []),
        (Ot.prototype.pushDepthFunc = function (t) {
          this._stackDepthFunc.push(t), this.gl.depthFunc(t);
        }),
        (Ot.prototype.stateDepthFunc = function () {
          return (
            this._stackDepthFunc.length > 0 &&
            this._stackDepthFunc[this._stackDepthFunc.length - 1]
          );
        }),
        (Ot.prototype.popDepthFunc = function () {
          this._stackDepthFunc.pop(),
            this._stackDepthFunc.length > 0 &&
              this.gl.depthFunc(
                this._stackDepthFunc[this._stackDepthFunc.length - 1]
              );
        }),
        (Ot.prototype._stackBlend = []),
        (Ot.prototype.pushBlend = function (t) {
          this._stackBlend.push(t),
            t ? this.gl.enable(this.gl.BLEND) : this.gl.disable(this.gl.BLEND);
        }),
        (Ot.prototype.popBlend = function () {
          this._stackBlend.pop(),
            this._stackBlend[this._stackBlend.length - 1]
              ? this.gl.enable(this.gl.BLEND)
              : this.gl.disable(this.gl.BLEND);
        }),
        (Ot.prototype.stateBlend = function () {
          return this._stackBlend[this._stackBlend.length - 1];
        });
      (Ot.prototype._stackBlendMode = []),
        (Ot.prototype._stackBlendModePremul = []),
        (Ot.prototype.pushBlendMode = function (t, e) {
          this._stackBlendMode.push(t), this._stackBlendModePremul.push(e);
          const i = this._stackBlendMode.length - 1;
          this.pushBlend(this._stackBlendMode[i] !== ot.BLEND_MODES.BLEND_NONE),
            this._setBlendMode(
              this._stackBlendMode[i],
              this._stackBlendModePremul[i]
            );
        }),
        (Ot.prototype.popBlendMode = function () {
          this._stackBlendMode.pop(), this._stackBlendModePremul.pop();
          const t = this._stackBlendMode.length - 1;
          this.popBlend(this._stackBlendMode[t] !== ot.BLEND_MODES.BLEND_NONE),
            t >= 0 &&
              this._setBlendMode(
                this._stackBlendMode[t],
                this._stackBlendModePremul[t]
              );
        }),
        (Ot.prototype.glGetAttribLocation = function (t, e) {
          return this.gl.getAttribLocation(t, e);
        }),
        (Ot.prototype.shouldDrawHelpers = function (t) {
          return (
            !this.frameStore.shadowPass &&
            !!t.patch.isEditorMode() &&
            (CABLES.UI.renderHelper ||
              (CABLES.UI.renderHelperCurrent && t.isCurrentUiOp()))
          );
        }),
        (Ot.prototype._setBlendMode = function (t, e) {
          const i = this.gl;
          t == ot.BLEND_MODES.BLEND_NONE ||
            (t == ot.BLEND_MODES.BLEND_ADD
              ? e
                ? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD),
                  i.blendFuncSeparate(i.ONE, i.ONE, i.ONE, i.ONE))
                : (i.blendEquation(i.FUNC_ADD), i.blendFunc(i.SRC_ALPHA, i.ONE))
              : t == ot.BLEND_MODES.BLEND_SUB
              ? e
                ? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD),
                  i.blendFuncSeparate(
                    i.ZERO,
                    i.ZERO,
                    i.ONE_MINUS_SRC_COLOR,
                    i.ONE_MINUS_SRC_ALPHA
                  ))
                : (i.blendEquation(i.FUNC_ADD),
                  i.blendFunc(i.ZERO, i.ONE_MINUS_SRC_COLOR))
              : t == ot.BLEND_MODES.BLEND_MUL
              ? e
                ? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD),
                  i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA))
                : (i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ZERO, i.SRC_COLOR))
              : t == ot.BLEND_MODES.BLEND_NORMAL
              ? e
                ? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD),
                  i.blendFuncSeparate(
                    i.ONE,
                    i.ONE_MINUS_SRC_ALPHA,
                    i.ONE,
                    i.ONE_MINUS_SRC_ALPHA
                  ))
                : (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD),
                  i.blendFuncSeparate(
                    i.SRC_ALPHA,
                    i.ONE_MINUS_SRC_ALPHA,
                    i.ONE,
                    i.ONE_MINUS_SRC_ALPHA
                  ))
              : this._log.log("setblendmode: unknown blendmode"));
        }),
        (Ot.prototype.setCursor = function (t) {
          this._cursor = t;
        });
      const Rt = Object.assign(
        {
          Framebuffer: function (t, e, i, s) {
            const r = t;
            this._log = new h("Framebuffer");
            const n =
              r.gl.getExtension("WEBGL_depth_texture") ||
              r.gl.getExtension("WEBKIT_WEBGL_depth_texture") ||
              r.gl.getExtension("MOZ_WEBGL_depth_texture") ||
              r.gl.DEPTH_TEXTURE;
            n || r.exitError("NO_DEPTH_TEXTURE", "no depth texture support");
            let o = e || 512,
              a = i || 512;
            (s = s || { isFloatingPointTexture: !1 }).hasOwnProperty("clear") ||
              (s.clear = !0),
              s.hasOwnProperty("filter") || (s.filter = L.FILTER_LINEAR);
            const l = new L(r, {
              isFloatingPointTexture: s.isFloatingPointTexture,
              filter: s.filter,
              wrap: s.wrap || L.CLAMP_TO_EDGE,
            });
            let c = null;
            n && (c = new L(r, { isDepthTexture: !0 })), (this._options = s);
            const u = r.gl.createFramebuffer(),
              g = r.gl.createRenderbuffer();
            (this.getWidth = function () {
              return o;
            }),
              (this.getHeight = function () {
                return a;
              }),
              (this.getGlFrameBuffer = function () {
                return u;
              }),
              (this.getDepthRenderBuffer = function () {
                return g;
              }),
              (this.getTextureColor = function () {
                return l;
              }),
              (this.getTextureDepth = function () {
                return c;
              }),
              (this.setFilter = function (t) {
                (l.filter = t), l.setSize(o, a);
              }),
              (this.setSize = function (t, e) {
                if (
                  (t < 2 && (t = 2),
                  e < 2 && (e = 2),
                  (o = Math.ceil(t)),
                  (a = Math.ceil(e)),
                  r.profileData.profileFrameBuffercreate++,
                  r.gl.bindFramebuffer(r.gl.FRAMEBUFFER, u),
                  r.gl.bindRenderbuffer(r.gl.RENDERBUFFER, g),
                  l.setSize(o, a),
                  c && c.setSize(o, a),
                  n &&
                    r.gl.renderbufferStorage(
                      r.gl.RENDERBUFFER,
                      r.gl.DEPTH_COMPONENT16,
                      o,
                      a
                    ),
                  r.gl.framebufferTexture2D(
                    r.gl.FRAMEBUFFER,
                    r.gl.COLOR_ATTACHMENT0,
                    r.gl.TEXTURE_2D,
                    l.tex,
                    0
                  ),
                  n &&
                    (r.gl.framebufferRenderbuffer(
                      r.gl.FRAMEBUFFER,
                      r.gl.DEPTH_ATTACHMENT,
                      r.gl.RENDERBUFFER,
                      g
                    ),
                    r.gl.framebufferTexture2D(
                      r.gl.FRAMEBUFFER,
                      r.gl.DEPTH_ATTACHMENT,
                      r.gl.TEXTURE_2D,
                      c.tex,
                      0
                    )),
                  !r.gl.isFramebuffer(u))
                )
                  throw new Error("Invalid framebuffer");
                const i = r.gl.checkFramebufferStatus(r.gl.FRAMEBUFFER);
                switch (i) {
                  case r.gl.FRAMEBUFFER_COMPLETE:
                    break;
                  case r.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
                    throw (
                      (this._log.warn(
                        "FRAMEBUFFER_INCOMPLETE_ATTACHMENT...",
                        o,
                        a,
                        l.tex,
                        g
                      ),
                      new Error(
                        "Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT"
                      ))
                    );
                  case r.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
                    throw (
                      (this._log.warn(
                        "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT"
                      ),
                      new Error(
                        "Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT"
                      ))
                    );
                  case r.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
                    throw (
                      (this._log.warn("FRAMEBUFFER_INCOMPLETE_DIMENSIONS"),
                      new Error(
                        "Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS"
                      ))
                    );
                  case r.gl.FRAMEBUFFER_UNSUPPORTED:
                    throw (
                      (this._log.warn("FRAMEBUFFER_UNSUPPORTED"),
                      new Error(
                        "Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED"
                      ))
                    );
                  case 36059:
                    this._log.warn(
                      "Incomplete: FRAMEBUFFER_INCOMPLETE_DRAW_BUFFER from ext. Or Safari/iOS undefined behaviour."
                    );
                    break;
                  default:
                    throw (
                      (this._log.warn("incomplete framebuffer", i),
                      new Error("Incomplete framebuffer: " + i))
                    );
                }
                r.gl.bindTexture(r.gl.TEXTURE_2D, null),
                  r.gl.bindRenderbuffer(r.gl.RENDERBUFFER, null),
                  r.gl.bindFramebuffer(r.gl.FRAMEBUFFER, null);
              }),
              (this.renderStart = function () {
                r.pushModelMatrix(),
                  r.gl.bindFramebuffer(r.gl.FRAMEBUFFER, u),
                  r.pushGlFrameBuffer(u),
                  r.pushFrameBuffer(this),
                  r.pushPMatrix(),
                  r.gl.viewport(0, 0, o, a),
                  this._options.clear &&
                    (r.gl.clearColor(0, 0, 0, 0),
                    r.gl.clear(r.gl.COLOR_BUFFER_BIT | r.gl.DEPTH_BUFFER_BIT));
              }),
              (this.renderEnd = function () {
                r.popPMatrix(),
                  r.gl.bindFramebuffer(r.gl.FRAMEBUFFER, r.popGlFrameBuffer()),
                  r.popFrameBuffer(),
                  r.popModelMatrix(),
                  r.resetViewPort();
              }),
              (this.delete = function () {
                l.delete(),
                  c && c.delete(),
                  r.gl.deleteRenderbuffer(g),
                  r.gl.deleteFramebuffer(u);
              }),
              this.setSize(o, a);
          },
          Framebuffer2: B,
          Geometry: Y,
          BoundingBox: z,
          Marker: function (t) {
            const e = new Y("marker");
            e.setPointVertices([
              1e-5, 0, 0, 1, 0, 0, 0, 1e-5, 0, 0, 1, 0, 0, 0, 1e-5, 0, 0, 1,
            ]);
            const i = new at(t, e, t.gl.LINES);
            i.setGeom(e);
            const s = new vt(t, "markermaterial"),
              r =
                "".endl() +
                "precision highp float;".endl() +
                "IN vec3 axisColor;".endl() +
                "void main()".endl() +
                "{".endl() +
                "    vec4 col=vec4(axisColor,1.0);".endl() +
                "    outColor = col;".endl() +
                "}",
              n =
                "".endl() +
                "IN vec3 vPosition;".endl() +
                "UNI mat4 projMatrix;".endl() +
                "UNI mat4 mvMatrix;".endl() +
                "OUT vec3 axisColor;".endl() +
                "void main()".endl() +
                "{".endl() +
                "   vec4 pos=vec4(vPosition, 1.0);".endl() +
                "   if(pos.x!=0.0)axisColor=vec3(1.0,0.3,0.0);".endl() +
                "   if(pos.y!=0.0)axisColor=vec3(0.0,1.0,0.2);".endl() +
                "   if(pos.z!=0.0)axisColor=vec3(0.0,0.5,1.0);".endl() +
                "   gl_Position = projMatrix * mvMatrix * pos;".endl() +
                "}";
            s.setSource(n, r),
              (this._vScale = vec3.create()),
              (this.draw = function (t, e, r) {
                const n = e || 2;
                t.pushModelMatrix(),
                  t.pushShader(s),
                  vec3.set(this._vScale, n, n, n),
                  mat4.scale(t.mvMatrix, t.mvMatrix, this._vScale),
                  t.pushDepthTest(1 == r),
                  i.render(t.getShader()),
                  t.popDepthTest(),
                  t.popShader(),
                  t.popModelMatrix();
              });
          },
          WirePoint: function (t) {
            const e = t.gl.createBuffer(),
              i = vec3.create();
            (this.render = function (t, s) {
              t.pushModelMatrix(),
                vec3.set(i, s, s, s),
                mat4.scale(t.mvMatrix, t.mvMatrix, i);
              const r = t.getShader();
              r &&
                (r.bind(),
                t.gl.bindBuffer(t.gl.ARRAY_BUFFER, e),
                t.gl.vertexAttribPointer(
                  r.getAttrVertexPos(),
                  e.itemSize,
                  t.gl.FLOAT,
                  !1,
                  0,
                  0
                ),
                t.gl.enableVertexAttribArray(r.getAttrVertexPos()),
                t.gl.bindBuffer(t.gl.ARRAY_BUFFER, e),
                t.gl.drawArrays(t.gl.LINE_STRIP, 0, e.numItems)),
                t.popModelMatrix();
            }),
              (function () {
                const i = [];
                let s = 0,
                  r = 0;
                for (s = 0; s <= Math.round(24); s++)
                  (r = (360 / Math.round(24)) * s * dt),
                    i.push(0.5 * Math.cos(r)),
                    i.push(0),
                    i.push(0.5 * Math.sin(r));
                for (s = 0; s <= Math.round(24); s++)
                  (r = (360 / Math.round(24)) * s * dt),
                    i.push(0.5 * Math.cos(r)),
                    i.push(0.5 * Math.sin(r)),
                    i.push(0);
                for (s = 0; s <= Math.round(24); s++)
                  (r = (360 / Math.round(24)) * s * dt),
                    i.push(0),
                    i.push(0.5 * Math.cos(r)),
                    i.push(0.5 * Math.sin(r));
                t.gl.bindBuffer(t.gl.ARRAY_BUFFER, e),
                  t.gl.bufferData(
                    t.gl.ARRAY_BUFFER,
                    new Float32Array(i),
                    t.gl.STATIC_DRAW
                  ),
                  (e.itemSize = 3),
                  (e.numItems = i.length / e.itemSize);
              })();
          },
          WireCube: function (t) {
            const e = t.gl.createBuffer(),
              i = vec3.create();
            (this.render = function (t, s, r, n) {
              t.pushModelMatrix(),
                vec3.set(i, s || 1, r || 1, n || 1),
                mat4.scale(t.mvMatrix, t.mvMatrix, i);
              const o = t.getShader();
              o &&
                (o.bind(),
                t.gl.bindBuffer(t.gl.ARRAY_BUFFER, e),
                t.gl.vertexAttribPointer(
                  o.getAttrVertexPos(),
                  e.itemSize,
                  t.gl.FLOAT,
                  !1,
                  0,
                  0
                ),
                t.gl.enableVertexAttribArray(o.getAttrVertexPos()),
                t.gl.bindBuffer(t.gl.ARRAY_BUFFER, e),
                t.gl.drawArrays(t.gl.LINE_STRIP, 0, e.numItems)),
                t.popModelMatrix();
            }),
              (function () {
                const i = [];
                i.push(-1, -1, 1),
                  i.push(1, -1, 1),
                  i.push(1, 1, 1),
                  i.push(-1, 1, 1),
                  i.push(-1, -1, 1),
                  i.push(-1, -1, -1),
                  i.push(1, -1, -1),
                  i.push(1, 1, -1),
                  i.push(-1, 1, -1),
                  i.push(-1, -1, -1),
                  i.push(-1, -1, -1),
                  i.push(-1, 1, -1),
                  i.push(-1, 1, 1),
                  i.push(-1, -1, 1),
                  i.push(-1, -1, -1),
                  i.push(1, -1, -1),
                  i.push(1, 1, -1),
                  i.push(1, 1, 1),
                  i.push(1, -1, 1),
                  i.push(1, -1, -1),
                  t.gl.bindBuffer(t.gl.ARRAY_BUFFER, e),
                  t.gl.bufferData(
                    t.gl.ARRAY_BUFFER,
                    new Float32Array(i),
                    t.gl.STATIC_DRAW
                  ),
                  (e.itemSize = 3),
                  (e.numItems = i.length / e.itemSize);
              })();
          },
          MatrixStack: xt,
          Mesh: at,
          MESH: ht,
          ShaderLibMods: ut,
          Shader: vt,
          Uniform: rt,
          MESHES: lt,
          Context: Ot,
          Texture: L,
          TextureEffect: ct,
          isWindows: ft,
          getWheelSpeed: Et,
          getWheelDelta: Tt,
          onLoadingAssetsFinished: null,
          profileData: void 0,
          UniColorShader: class {
            constructor(t) {
              this.shader = new CGL.Shader(t, "markermaterial");
              const e =
                  "".endl() +
                  "void main()".endl() +
                  "{".endl() +
                  "    outColor = vec4(color.rgb,1.0);".endl() +
                  "}",
                i =
                  "".endl() +
                  "IN vec3 vPosition;".endl() +
                  "UNI mat4 projMatrix;".endl() +
                  "UNI mat4 mvMatrix;".endl() +
                  "void main()".endl() +
                  "{".endl() +
                  "   gl_Position = projMatrix * mvMatrix * vec4(vPosition,1.0);".endl() +
                  "}";
              this.shader.setSource(i, e),
                (this.coloruni = this.shader.addUniformFrag(
                  "4f",
                  "color",
                  [1, 0.777, 1, 1]
                ));
            }
            setColor(t, e, i, s) {
              this.coloruni.set(t, e, i, s);
            }
          },
        },
        ot.BLEND_MODES,
        ot.SHADER,
        ot.MATH,
        ot.BLEND_MODES
      );
      window.CGL = Rt;
      const St = function (t) {
        W.apply(this),
          (this.id = CABLES.uuid()),
          (this.portIn = null),
          (this.portOut = null),
          (this.scene = t),
          (this.activityCounter = 0),
          (this.ignoreInSerialize = !1);
      };
      (St.prototype.setValue = function (t) {
        void 0 === t ? this._setValue() : this.portIn.set(t);
      }),
        (St.prototype.activity = function () {
          this.activityCounter++;
        }),
        (St.prototype._setValue = function () {
          if (!this.portOut) return void this.remove();
          const t = this.portOut.get();
          t == t &&
            (this.portIn.type != l.OP_PORT_TYPE_FUNCTION && this.activity(),
            (this.portIn.get() !== t || this.portIn.changeAlways) &&
              this.portIn.set(t));
        }),
        (St.prototype.getOtherPort = function (t) {
          return t == this.portIn ? this.portOut : this.portIn;
        }),
        (St.prototype.remove = function () {
          this.portIn && this.portIn.removeLink(this),
            this.portOut && this.portOut.removeLink(this),
            this.scene &&
              this.scene.emitEvent("onUnLink", this.portIn, this.portOut, this),
            !this.portIn ||
              (this.portIn.type != l.OP_PORT_TYPE_OBJECT &&
                this.portIn.type != l.OP_PORT_TYPE_ARRAY) ||
              (this.portIn.set(null),
              this.portIn.links.length > 0 &&
                this.portIn.set(
                  this.portIn.links[0].getOtherPort(this.portIn).get()
                )),
            this.portIn && this.portIn.parent._checkLinksNeededToWork(),
            this.portOut && this.portOut.parent._checkLinksNeededToWork(),
            (this.portIn = null),
            (this.portOut = null),
            (this.scene = null);
        }),
        (St.prototype.link = function (t, e) {
          if (!St.canLink(t, e))
            return console.warn("[core_link] cannot link ports!", t, e), !1;
          t.direction == c.PORT_DIR_IN
            ? ((this.portIn = t), (this.portOut = e))
            : ((this.portIn = e), (this.portOut = t)),
            t.addLink(this),
            e.addLink(this),
            this.setValue(),
            t.onLink && t.onLink(this),
            e.onLink && e.onLink(this),
            t.parent._checkLinksNeededToWork(),
            e.parent._checkLinksNeededToWork();
        }),
        (St.prototype.getSerialized = function () {
          const t = {};
          return (
            (t.portIn = this.portIn.getName()),
            (t.portOut = this.portOut.getName()),
            (t.objIn = this.portIn.parent.id),
            (t.objOut = this.portOut.parent.id),
            t
          );
        }),
        (St.canLinkText = function (t, e) {
          if (t.direction == e.direction) {
            let t = "(out)";
            return (
              e.direction == c.PORT_DIR_IN && (t = "(in)"),
              "can not link: same direction " + t
            );
          }
          return t.parent == e.parent
            ? "can not link: same op"
            : t.type != l.OP_PORT_TYPE_DYNAMIC &&
              e.type != l.OP_PORT_TYPE_DYNAMIC &&
              t.type != e.type
            ? "can not link: different type"
            : t
            ? e
              ? (t.direction == c.PORT_DIR_IN && t.isAnimated()) ||
                (e.direction == c.PORT_DIR_IN && e.isAnimated())
                ? "can not link: is animated"
                : t.isLinkedTo(e)
                ? "ports already linked"
                : (t.canLink && !t.canLink(e)) || (e.canLink && !e.canLink(t))
                ? "Incompatible"
                : "can link"
              : "can not link: port 2 invalid"
            : "can not link: port 1 invalid";
        }),
        (St.canLink = function (t, e) {
          return (
            !!t &&
            !!e &&
            (t.direction != c.PORT_DIR_IN || !t.isAnimated()) &&
            (e.direction != c.PORT_DIR_IN || !e.isAnimated()) &&
            !t.isHidden() &&
            !e.isHidden() &&
            !t.isLinkedTo(e) &&
            t.direction != e.direction &&
            (t.type == e.type ||
              t.type == l.OP_PORT_TYPE_DYNAMIC ||
              e.type == l.OP_PORT_TYPE_DYNAMIC) &&
            (t.type == l.OP_PORT_TYPE_DYNAMIC ||
              e.type == l.OP_PORT_TYPE_DYNAMIC ||
              (t.parent != e.parent &&
                !(t.canLink && !t.canLink(e)) &&
                !(e.canLink && !e.canLink(t))))
          );
        });
      const Pt = function () {
        W.apply(this),
          (this._log = new h("core_op")),
          (this.data = {}),
          (this.storage = {}),
          (this.objName = ""),
          (this.portsOut = []),
          (this.portsIn = []),
          (this.portsInData = []),
          (this.opId = ""),
          (this.uiAttribs = {}),
          (this.enabled = !0),
          (this.patch = arguments[0]),
          (this.name = arguments[1]),
          (this._needsLinkedToWork = []),
          (this._needsParentOp = null),
          (this._shortOpName = ""),
          (this.hasUiErrors = !1),
          (this._uiErrors = {}),
          arguments[1] &&
            ((this._shortOpName = CABLES.getShortOpName(arguments[1])),
            this.getTitle()),
          (this.id = arguments[2] || T()),
          (this.onAddPort = null),
          (this.onCreate = null),
          (this.onResize = null),
          (this.onLoaded = null),
          (this.onDelete = null),
          (this.onUiAttrChange = null),
          (this.onError = null),
          (this._eventCallbacks = {}),
          (this._instances = null),
          (this.preRender = null),
          (this.init = null);
      };
      {
        (Pt.prototype.clearUiAttrib = function (t) {
          const e = { name: null };
          this.uiAttrib(e);
        }),
          (Pt.prototype.getTitle = function () {
            return this.uiAttribs
              ? ((void 0 !== this.uiAttribs.title &&
                  "" !== this.uiAttribs.title) ||
                  -1 != this.objName.indexOf("Ops.Ui.") ||
                  (this.uiAttribs.title = this._shortOpName),
                void 0 === this.uiAttribs.title &&
                  (this.uiAttribs.title = this._shortOpName),
                this.uiAttribs.title)
              : "nouiattribs" + this.name;
          }),
          (Pt.prototype.setTitle = function (t) {
            const e = this.name != t;
            (this.name = t),
              this.uiAttr({ title: t }),
              e && this.fireEvent("onTitleChange", t);
          });
        const t = function (t) {
          if (!t) return;
          (t.error || t.warning || t.hint) &&
            this._log.warn(
              "old ui error/warning attribute in " +
                this.name +
                ", use op.setUiError !",
              t
            ),
            "object" != typeof t &&
              this._log.error("op.uiAttrib attribs are not of type object"),
            this.uiAttribs || (this.uiAttribs = {});
          let e = !1;
          for (const i in t)
            this.uiAttribs[i] != t[i] && (e = !0), (this.uiAttribs[i] = t[i]);
          this.uiAttribs.hasOwnProperty("selected") &&
            0 == this.uiAttribs.selected &&
            delete this.uiAttribs.selected,
            t.title && t.title != this.name && this.setTitle(t.title),
            e &&
              (this.fireEvent("onUiAttribsChange", t),
              this.patch.emitEvent("onUiAttribsChange", this, t));
        };
        (Pt.prototype.setUiAttribs =
          Pt.prototype.setUiAttrib =
          Pt.prototype.uiAttr =
            t),
          (Pt.prototype.getName = function () {
            return this.uiAttribs.name
              ? this.uiAttribs.name
              : this.objName.split(".");
          }),
          (Pt.prototype.addOutPort = function (t) {
            return (
              (t.direction = c.PORT_DIR_OUT),
              (t.parent = this),
              this.portsOut.push(t),
              this.fireEvent("onPortAdd", t),
              t
            );
          }),
          (Pt.prototype.hasDynamicPort = function () {
            let t = 0;
            for (t = 0; t < this.portsIn.length; t++) {
              if (this.portsIn[t].type == l.OP_PORT_TYPE_DYNAMIC) return !0;
              if ("dyn" == this.portsIn[t].getName()) return !0;
            }
            for (t = 0; t < this.portsOut.length; t++) {
              if (this.portsOut[t].type == l.OP_PORT_TYPE_DYNAMIC) return !0;
              if ("dyn" == this.portsOut[t].getName()) return !0;
            }
            return !1;
          }),
          (Pt.prototype.addInPort = function (t) {
            if (!(t instanceof et)) throw new Error("parameter is not a port!");
            return (
              (t.direction = c.PORT_DIR_IN),
              (t.parent = this),
              this.portsIn.push(t),
              this.fireEvent("onPortAdd", t),
              t
            );
          }),
          (Pt.prototype.inFunction = Pt.prototype.inTrigger =
            function (t, e) {
              const i = this.addInPort(new et(this, t, l.OP_PORT_TYPE_FUNCTION));
              return void 0 !== e && i.set(e), i;
            }),
          (Pt.prototype.inFunctionButton = Pt.prototype.inTriggerButton =
            function (t, e) {
              const i = this.addInPort(
                new et(this, t, l.OP_PORT_TYPE_FUNCTION, { display: "button" })
              );
              return void 0 !== e && i.set(e), i;
            }),
          (Pt.prototype.inFunctionButton = Pt.prototype.inUiTriggerButtons =
            function (t, e) {
              const i = this.addInPort(
                new et(this, t, l.OP_PORT_TYPE_FUNCTION, { display: "buttons" })
              );
              return void 0 !== e && i.set(e), i;
            }),
          (Pt.prototype.inValueFloat =
            Pt.prototype.inValue =
            Pt.prototype.inFloat =
              function (t, e) {
                const i = this.addInPort(new et(this, t, l.OP_PORT_TYPE_VALUE));
                return void 0 !== e && (i.set(e), (i.defaultValue = e)), i;
              }),
          (Pt.prototype.inValueBool = Pt.prototype.inBool =
            function (t, e) {
              const i = this.addInPort(
                new et(this, t, l.OP_PORT_TYPE_VALUE, { display: "bool" })
              );
              return void 0 !== e && (i.set(e), (i.defaultValue = i.get())), i;
            }),
          (Pt.prototype.inValueString = function (t, e) {
            const i = this.addInPort(
              new et(this, t, l.OP_PORT_TYPE_VALUE, { type: "string" })
            );
            return (
              (i.value = ""), void 0 !== e && (i.set(e), (i.defaultValue = e)), i
            );
          }),
          (Pt.prototype.inString = function (t, e) {
            const i = this.addInPort(
              new et(this, t, l.OP_PORT_TYPE_STRING, { type: "string" })
            );
            return (
              (e = e || ""), (i.value = e), i.set(e), (i.defaultValue = e), i
            );
          }),
          (Pt.prototype.inValueText = function (t, e) {
            const i = this.addInPort(
              new et(this, t, l.OP_PORT_TYPE_VALUE, {
                type: "string",
                display: "text",
              })
            );
            return (
              (i.value = ""), void 0 !== e && (i.set(e), (i.defaultValue = e)), i
            );
          }),
          (Pt.prototype.inTextarea = function (t, e) {
            const i = this.addInPort(
              new et(this, t, l.OP_PORT_TYPE_STRING, {
                type: "string",
                display: "text",
              })
            );
            return (
              (i.value = ""), void 0 !== e && (i.set(e), (i.defaultValue = e)), i
            );
          }),
          (Pt.prototype.inStringEditor = function (t, e, i, s = !0) {
            const r = this.addInPort(
              new et(this, t, l.OP_PORT_TYPE_STRING, {
                type: "string",
                display: "editor",
                editorSyntax: i,
                hideFormatButton: s,
              })
            );
            return (
              (r.value = ""), void 0 !== e && (r.set(e), (r.defaultValue = e)), r
            );
          }),
          (Pt.prototype.inValueEditor = function (t, e, i, s = !0) {
            const r = this.addInPort(
              new et(this, t, l.OP_PORT_TYPE_VALUE, {
                type: "string",
                display: "editor",
                editorSyntax: i,
                hideFormatButton: s,
              })
            );
            return (
              (r.value = ""), void 0 !== e && (r.set(e), (r.defaultValue = e)), r
            );
          }),
          (Pt.prototype.inValueSelect = Pt.prototype.inDropDown =
            function (t, e, i, s) {
              let r = null;
              if (s) {
                const i = new et(this, t, l.OP_PORT_TYPE_VALUE, {
                  display: "dropdown",
                  hidePort: !0,
                  type: "string",
                  values: e,
                });
                r = this.addInPort(i);
              } else {
                const s = new et(this, t + " index", l.OP_PORT_TYPE_VALUE, {
                    increment: "integer",
                    hideParam: !0,
                  }),
                  n = this.addInPort(s),
                  o = new st(
                    this,
                    t,
                    l.OP_PORT_TYPE_VALUE,
                    {
                      display: "dropdown",
                      hidePort: !0,
                      type: "string",
                      values: e,
                    },
                    n
                  );
                if (
                  ((o.indexPort = s),
                  (s.onLinkChanged = function () {
                    o.setUiAttribs({ greyout: s.isLinked() });
                  }),
                  (r = this.addInPort(o)),
                  void 0 !== i)
                ) {
                  r.set(i);
                  const t = e.findIndex((t) => t == i);
                  n.setValue(t), (r.defaultValue = i), (n.defaultValue = t);
                }
              }
              return r;
            }),
          (Pt.prototype.inSwitch = function (t, e, i, s) {
            let r = null;
            if (s) {
              const i = new et(this, t, l.OP_PORT_TYPE_STRING, {
                display: "switch",
                hidePort: !0,
                type: "string",
                values: e,
              });
              r = this.addInPort(i);
            } else {
              const s = new et(this, t + " index", l.OP_PORT_TYPE_VALUE, {
                  increment: "integer",
                  hideParam: !0,
                }),
                n = this.addInPort(s),
                o = new it(
                  this,
                  t,
                  l.OP_PORT_TYPE_STRING,
                  { display: "switch", hidePort: !0, type: "string", values: e },
                  n
                );
              if (
                ((s.onLinkChanged = function () {
                  o.setUiAttribs({ greyout: s.isLinked() });
                }),
                (r = this.addInPort(o)),
                void 0 !== i)
              ) {
                r.set(i);
                const t = e.findIndex((t) => t == i);
                n.setValue(t), (r.defaultValue = i), (n.defaultValue = t);
              }
            }
            return r;
          }),
          (Pt.prototype.inValueInt = Pt.prototype.inInt =
            function (t, e) {
              const i = this.addInPort(
                new et(this, t, l.OP_PORT_TYPE_VALUE, { increment: "integer" })
              );
              return void 0 !== e && (i.set(e), (i.defaultValue = e)), i;
            }),
          (Pt.prototype.inFile = function (t, e, i) {
            const s = this.addInPort(
              new et(this, t, l.OP_PORT_TYPE_VALUE, {
                display: "file",
                type: "string",
                filter: e,
              })
            );
            return void 0 !== i && (s.set(i), (s.defaultValue = i)), s;
          }),
          (Pt.prototype.inUrl = function (t, e, i) {
            const s = this.addInPort(
              new et(this, t, l.OP_PORT_TYPE_STRING, {
                display: "file",
                type: "string",
                filter: e,
              })
            );
            return void 0 !== i && (s.set(i), (s.defaultValue = i)), s;
          }),
          (Pt.prototype.inTexture = function (t, e) {
            const i = this.addInPort(
              new et(this, t, l.OP_PORT_TYPE_OBJECT, {
                display: "texture",
                objType: "texture",
                preview: !0,
              })
            );
            return void 0 !== e && i.set(e), i;
          }),
          (Pt.prototype.inObject = function (t, e, i) {
            const s = this.addInPort(
              new et(this, t, l.OP_PORT_TYPE_OBJECT, { objType: i })
            );
            return void 0 !== e && s.set(e), s;
          }),
          (Pt.prototype.inGradient = function (t, e) {
            const i = this.addInPort(
              new et(this, t, l.OP_PORT_TYPE_VALUE, {
                display: "gradient",
                hidePort: !0,
              })
            );
            return void 0 !== e && i.set(e), i;
          }),
          (Pt.prototype.inArray = function (t, e, i) {
            !i && CABLES.UTILS.isNumeric(e) && (i = e);
            const s = this.addInPort(
              new et(this, t, l.OP_PORT_TYPE_ARRAY, { stride: i })
            );
            return (
              void 0 === e || (!Array.isArray(e) && null != e) || s.set(e), s
            );
          }),
          (Pt.prototype.inValueSlider = Pt.prototype.inFloatSlider =
            function (t, e, i, s) {
              const r = { display: "range" };
              null != i && null != s && ((r.min = i), (r.max = s));
              const n = this.addInPort(new et(this, t, l.OP_PORT_TYPE_VALUE, r));
              return void 0 !== e && (n.set(e), (n.defaultValue = e)), n;
            }),
          (Pt.prototype.outFunction = Pt.prototype.outTrigger =
            function (t, e) {
              const i = this.addOutPort(new et(this, t, l.OP_PORT_TYPE_FUNCTION));
              return void 0 !== e && i.set(e), i;
            }),
          (Pt.prototype.outValue = Pt.prototype.outNumber =
            function (t, e) {
              const i = this.addOutPort(new et(this, t, l.OP_PORT_TYPE_VALUE));
              return void 0 !== e && i.set(e), i;
            }),
          (Pt.prototype.outValueBool = Pt.prototype.outBool =
            function (t, e) {
              const i = this.addOutPort(
                new et(this, t, l.OP_PORT_TYPE_VALUE, { display: "bool" })
              );
              return void 0 !== e ? i.set(e) : i.set(0), i;
            }),
          (Pt.prototype.outBoolNum = function (t, e) {
            const i = this.addOutPort(
              new et(this, t, l.OP_PORT_TYPE_VALUE, { display: "boolnum" })
            );
            return (
              (i.set = function (t) {
                this.setValue(t ? 1 : 0);
              }.bind(i)),
              void 0 !== e ? i.set(e) : i.set(0),
              i
            );
          }),
          (Pt.prototype.outValueString = function (t, e) {
            const i = this.addOutPort(
              new et(this, t, l.OP_PORT_TYPE_VALUE, { type: "string" })
            );
            return void 0 !== e && i.set(e), i;
          }),
          (Pt.prototype.outString = function (t, e) {
            const i = this.addOutPort(
              new et(this, t, l.OP_PORT_TYPE_STRING, { type: "string" })
            );
            return void 0 !== e ? i.set(e) : i.set(""), i;
          }),
          (Pt.prototype.outObject = function (t, e, i) {
            const s = this.addOutPort(
              new et(this, t, l.OP_PORT_TYPE_OBJECT, { objType: i || null })
            );
            return void 0 !== e && s.set(e), (s.ignoreValueSerialize = !0), s;
          }),
          (Pt.prototype.outArray = function (t, e, i) {
            !i && CABLES.UTILS.isNumeric(e) && (i = e);
            const s = this.addOutPort(
              new et(this, t, l.OP_PORT_TYPE_ARRAY, { stride: i })
            );
            return (
              void 0 === e || (!Array.isArray(e) && null != e) || s.set(e),
              (s.ignoreValueSerialize = !0),
              s
            );
          }),
          (Pt.prototype.outTexture = function (t, e) {
            const i = this.addOutPort(
              new et(this, t, l.OP_PORT_TYPE_OBJECT, {
                preview: !0,
                objType: "texture",
              })
            );
            return void 0 !== e && i.set(e), (i.ignoreValueSerialize = !0), i;
          }),
          (Pt.prototype.inDynamic = function (t, e, i, s) {
            const r = new et(this, t, l.OP_PORT_TYPE_DYNAMIC, i);
            return (
              (r.shouldLink = function (t, i) {
                if (e && g.isArray(e)) {
                  for (let s = 0; s < e.length; s++) {
                    if (t == this && i.type === e[s]) return !0;
                    if (i == this && t.type === e[s]) return !0;
                  }
                  return !1;
                }
                return !0;
              }),
              this.addInPort(r),
              void 0 !== s && (r.set(s), (r.defaultValue = s)),
              r
            );
          }),
          (Pt.prototype.printInfo = function () {
            for (let t = 0; t < this.portsIn.length; t++)
              console.log("in: " + this.portsIn[t].getName());
            for (const t in this.portsOut)
              console.log("out: " + this.portsOut[t].getName());
          }),
          (Pt.prototype.getOutChilds = function () {
            const t = [];
            for (const e in this.portsOut)
              for (const i in this.portsOut[e].links)
                this.portsOut[e].type == l.OP_PORT_TYPE_FUNCTION &&
                  t.push(this.portsOut[e].links[i].portIn.parent);
            return t;
          }),
          (Pt.prototype.markChilds = function () {
            this.marked = !0;
            for (const t in this.portsOut)
              for (const e in this.portsOut[t].links)
                (this.portsOut[t].parent.marked = !0),
                  this.portsOut[t].links[e].portIn.parent != this &&
                    this.portsOut[t].links[e].portIn.parent.markChilds();
          }),
          (Pt.prototype.selectChilds = function () {
            this.setUiAttrib({ selected: !0 });
            for (const t in this.portsOut)
              for (const e in this.portsOut[t].links)
                this.portsOut[t].parent.setUiAttrib({ selected: !0 }),
                  this.portsOut[t].links[e].portIn.parent != this &&
                    this.portsOut[t].links[e].portIn.parent.selectChilds();
          }),
          (Pt.prototype.deleteChilds = function () {
            const t = [];
            for (const e in this.portsOut)
              for (const i in this.portsOut[e].links)
                this.portsOut[e].links[i].portIn.parent != this &&
                  (this.portsOut[e].parent != this &&
                    t.push(this.portsOut[e].parent),
                  t.push(this.portsOut[e].links[i].portIn.parent),
                  this.portsOut[e].links[i].portIn.parent.deleteChilds());
            for (const e in t) this.patch.deleteOp(t[e].id);
          }),
          (Pt.prototype.removeLinks = function () {
            for (let t = 0; t < this.portsIn.length; t++)
              this.portsIn[t].removeLinks();
            for (let t = 0; t < this.portsOut.length; t++)
              this.portsOut[t].removeLinks();
          }),
          (Pt.prototype.countFittingPorts = function (t) {
            let e = 0;
            for (const i in this.portsOut) St.canLink(t, this.portsOut[i]) && e++;
            for (const i in this.portsIn) St.canLink(t, this.portsIn[i]) && e++;
            return e;
          }),
          (Pt.prototype.findFittingPort = function (t, e = !1) {
            if (e) {
              for (const e in this.portsIn)
                if (St.canLink(t, this.portsIn[e])) return this.portsIn[e];
              for (const e in this.portsOut)
                if (St.canLink(t, this.portsOut[e])) return this.portsOut[e];
            } else {
              for (const e in this.portsOut)
                if (St.canLink(t, this.portsOut[e])) return this.portsOut[e];
              for (const e in this.portsIn)
                if (St.canLink(t, this.portsIn[e])) return this.portsIn[e];
            }
          }),
          (Pt.prototype.getSerialized = function (t) {
            const e = {};
            this.opId && (e.opId = this.opId),
              (e.objName = this.objName),
              (e.id = this.id),
              (e.uiAttribs = this.uiAttribs),
              this.storage &&
                Object.keys(this.storage).length > 0 &&
                (e.storage = this.storage),
              this.uiAttribs.title == this._shortOpName &&
                delete this.uiAttribs.title,
              this.uiAttribs.hasOwnProperty("working") &&
                1 == this.uiAttribs.working &&
                delete this.uiAttribs.working,
              t &&
                this.uiAttribs.hasOwnProperty("uierrors") &&
                delete this.uiAttribs.uierrors,
              (e.portsIn = []),
              (e.portsOut = []);
            for (let t = 0; t < this.portsIn.length; t++)
              e.portsIn.push(this.portsIn[t].getSerialized());
            for (const t in this.portsOut)
              e.portsOut.push(this.portsOut[t].getSerialized());
            return e;
          }),
          (Pt.prototype.getFirstOutPortByType = function (t) {
            for (const e in this.portsOut)
              if (this.portsOut[e].type == t) return this.portsOut[e];
          }),
          (Pt.prototype.getFirstInPortByType = function (t) {
            for (const e in this.portsIn)
              if (this.portsIn[e].type == t) return this.portsIn[e];
          }),
          (Pt.prototype.getPort = Pt.prototype.getPortByName =
            function (t, e) {
              if (e) {
                for (let e = 0; e < this.portsIn.length; e++)
                  if (this.portsIn[e].getName().toLowerCase() == t)
                    return this.portsIn[e];
                for (let e = 0; e < this.portsOut.length; e++)
                  if (this.portsOut[e].getName().toLowerCase() == t)
                    return this.portsOut[e];
              } else {
                for (let e = 0; e < this.portsIn.length; e++)
                  if (this.portsIn[e].getName() == t) return this.portsIn[e];
                for (let e = 0; e < this.portsOut.length; e++)
                  if (this.portsOut[e].getName() == t) return this.portsOut[e];
              }
            }),
          (Pt.prototype.getPortById = function (t) {
            for (let e = 0; e < this.portsIn.length; e++)
              if (this.portsIn[e].id == t) return this.portsIn[e];
            for (let e = 0; e < this.portsOut.length; e++)
              if (this.portsOut[e].id == t) return this.portsOut[e];
          }),
          (Pt.prototype.updateAnims = function () {
            for (let t = 0; t < this.portsIn.length; t++)
              this.portsIn[t].updateAnim();
          }),
          (Pt.prototype.log = function () {
            const t = "op " + this.objName;
            if (CABLES.UI && !CABLES.UI.logFilter.shouldPrint(t, ...arguments))
              return;
            if (!CABLES.UI && this.patch.silent) return;
            const e = ["[op " + this._shortOpName + "]"];
            e.push.apply(e, arguments),
              Function.prototype.apply.apply(console.log, [console, e]);
          }),
          (Pt.prototype.error = Pt.prototype.logError =
            function () {
              const t = ["[op " + this._shortOpName + "]"];
              t.push.apply(t, arguments),
                Function.prototype.apply.apply(console.error, [console, t]),
                window.gui &&
                  window.gui.emitEvent(
                    "opLogEvent",
                    this.objName,
                    "error",
                    arguments
                  );
            }),
          (Pt.prototype.warn = Pt.prototype.logWarn =
            function () {
              const t = ["[op " + this._shortOpName + "]"];
              t.push.apply(t, arguments),
                Function.prototype.apply.apply(console.warn, [console, t]);
            }),
          (Pt.prototype.verbose = Pt.prototype.logVerbose =
            function () {
              const t = "op " + this._shortOpName;
              if (CABLES.UI && !CABLES.UI.logFilter.shouldPrint(t, ...arguments))
                return;
              if (!CABLES.UI && this.patch.silent) return;
              const e = ["[" + t + "]"];
              e.push.apply(e, arguments),
                Function.prototype.apply.apply(console.info, [console, e]);
            }),
          (Pt.prototype.unLink = function () {
            for (let t = 0; t < this.portsOut.length; t++)
              this.portsOut[t].removeLinks();
            for (let t = 0; t < this.portsIn.length; t++)
              this.portsIn[t].removeLinks();
          }),
          (Pt.prototype.profile = function (t) {
            for (let t = 0; t < this.portsIn.length; t++)
              (this.portsIn[t]._onTriggered =
                this.portsIn[t]._onTriggeredProfiling),
                (this.portsIn[t].set = this.portsIn[t]._onSetProfiling);
          }),
          (Pt.prototype.findParent = function (t) {
            for (let e = 0; e < this.portsIn.length; e++)
              if (this.portsIn[e].isLinked()) {
                if (this.portsIn[e].links[0].portOut.parent.objName == t)
                  return this.portsIn[e].links[0].portOut.parent;
                let i = null;
                if (
                  ((i = this.portsIn[e].links[0].portOut.parent.findParent(t)), i)
                )
                  return i;
              }
            return null;
          }),
          (Pt.prototype.cleanUp = function () {
            if (this._instances) {
              for (let t = 0; t < this._instances.length; t++)
                this._instances[t].onDelete && this._instances[t].onDelete();
              this._instances.length = 0;
            }
          }),
          (Pt.prototype.instanced = function (t) {
            if (
              (console.log("instanced", this.patch.instancing.numCycles()),
              0 === this.patch.instancing.numCycles())
            )
              return !1;
            let e = 0,
              i = 0;
            if (
              !this._instances ||
              this._instances.length != this.patch.instancing.numCycles()
            ) {
              for (
                this._instances || (this._instances = []),
                  this._.log(
                    "creating instances of ",
                    this.objName,
                    this.patch.instancing.numCycles(),
                    this._instances.length
                  ),
                  this._instances.length = this.patch.instancing.numCycles(),
                  e = 0;
                e < this._instances.length;
                e++
              ) {
                (this._instances[e] = this.patch.createOp(this.objName, !0)),
                  (this._instances[e].instanced = function () {
                    return !1;
                  }),
                  this._instances[e].uiAttr(this.uiAttribs);
                for (let t = 0; t < this.portsOut.length; t++)
                  this.portsOut[t].type == l.OP_PORT_TYPE_FUNCTION &&
                    (this._instances[e].getPortByName(
                      this.portsOut[t].name
                    ).trigger = this.portsOut[t].trigger.bind(this.portsOut[t]));
              }
              for (i = 0; i < this.portsIn.length; i++)
                (this.portsIn[i].onChange = null),
                  (this.portsIn[i].onValueChanged = null);
            }
            for (i = 0; i < this.portsIn.length; i++)
              (this.portsIn[i].type != l.OP_PORT_TYPE_VALUE &&
                this.portsIn[i].type != l.OP_PORT_TYPE_ARRAY) ||
                this._instances[this.patch.instancing.index()].portsIn[i].set(
                  this.portsIn[i].get()
                ),
                this.portsIn[i].type,
                l.OP_PORT_TYPE_FUNCTION;
            for (i = 0; i < this.portsOut.length; i++)
              this.portsOut[i].type == l.OP_PORT_TYPE_VALUE &&
                this.portsOut[i].set(
                  this._instances[this.patch.instancing.index()].portsOut[i].get()
                );
            return !0;
          }),
          (Pt.prototype.initInstancable = function () {}),
          (Pt.prototype.setValues = function (t) {
            for (const e in t) {
              const i = this.getPortByName(e);
              i
                ? i.set(t[e])
                : this._log.warn("op.setValues: port not found:", e);
            }
          }),
          (Pt.prototype.setUiError = function (t, e, i) {
            if (!e && !this.hasUiErrors) return;
            if (!e && !this._uiErrors.hasOwnProperty(t)) return;
            if (this._uiErrors.hasOwnProperty(t) && this._uiErrors[t].txt == e)
              return;
            t.indexOf(" ") > -1 &&
              this._log.warn("setuierror id cant have spaces! ", t),
              !e && this._uiErrors.hasOwnProperty(t)
                ? delete this._uiErrors[t]
                : !e ||
                  (this._uiErrors.hasOwnProperty(t) &&
                    this._uiErrors[t].txt == e) ||
                  (null == i && (i = 2),
                  (this._uiErrors[t] = { txt: e, level: i, id: t }));
            const s = [];
            for (const t in this._uiErrors) s.push(this._uiErrors[t]);
            this.uiAttr({ uierrors: s }),
              (this.hasUiErrors = Object.keys(this._uiErrors).length),
              console.log(t, e, this._uiErrors.hasOwnProperty(t));
          }),
          (Pt.prototype.setError = function (t, e) {
            this._log.warn("old error message op.error() - use op.setUiError()");
          }),
          (Pt.prototype.addListener = Pt.prototype.addEventListener =
            function (t, e) {
              this._eventCallbacks[t]
                ? this._eventCallbacks[t].push(e)
                : (this._eventCallbacks[t] = [e]);
            }),
          (Pt.prototype.hasEventListener = function (t, e) {
            if (t && e) {
              if (this._eventCallbacks[t]) {
                return -1 != this._eventCallbacks[t].indexOf(e);
              }
            } else this._log.warn("hasListener: missing parameters");
          }),
          (Pt.prototype.removeEventListener = function (t, e) {
            if (this._eventCallbacks[t]) {
              const i = this._eventCallbacks[t].indexOf(e);
              -1 == i
                ? this._log.warn("eventlistener " + t + " not found...")
                : this._eventCallbacks[t].slice(i);
            }
          }),
          (Pt.prototype.fireEvent = function (t, e) {
            if (this._eventCallbacks[t])
              for (let i = 0; i < this._eventCallbacks[t].length; i++)
                this._eventCallbacks[t][i] && this._eventCallbacks[t][i].cb(e);
            this.onUiAttrChange &&
              "onUiAttribsChange" == t &&
              this.onUiAttrChange(e);
          }),
          (Pt.prototype.setEnabled = function (t) {
            (this.enabled = t), this.fireEvent("onEnabledChange", t);
          }),
          (Pt.prototype.setPortGroup = function (t, e) {
            for (let i = 0; i < e.length; i++)
              e[i] &&
                (e[i].setUiAttribs
                  ? e[i].setUiAttribs({ group: t })
                  : this._log.error("setPortGroup: invalid port!"));
          }),
          (Pt.prototype.setUiAxisPorts = function (t, e, i) {
            t && t.setUiAttribs({ axis: "X" }),
              e && e.setUiAttribs({ axis: "Y" }),
              i && i.setUiAttribs({ axis: "Z" });
          }),
          (Pt.prototype.removePort = function (t) {
            for (let e = 0; e < this.portsIn.length; e++)
              if (this.portsIn[e] == t)
                return (
                  this.portsIn.splice(e, 1),
                  this.fireEvent("onUiAttribsChange", {}),
                  void this.fireEvent("onPortRemoved", {})
                );
          }),
          (Pt.prototype._checkLinksNeededToWork = function () {}),
          (Pt.prototype.toWorkNeedsParent = function (t) {
            this.patch.isEditorMode() && (this._needsParentOp = t);
          }),
          (Pt.prototype.toWorkPortsNeedToBeLinked = function () {
            if (this.patch.isEditorMode())
              for (let t = 0; t < arguments.length; t++)
                -1 == this._needsLinkedToWork.indexOf(arguments[t]) &&
                  this._needsLinkedToWork.push(arguments[t]);
          }),
          (Pt.prototype.toWorkPortsNeedToBeLinkedReset = function () {
            this.patch.isEditorMode() &&
              ((this._needsLinkedToWork.length = 0),
              this.checkLinkTimeWarnings && this.checkLinkTimeWarnings());
          }),
          (Pt.prototype.initVarPorts = function () {
            for (let t = 0; t < this.portsIn.length; t++)
              this.portsIn[t].getVariableName() &&
                this.portsIn[t].setVariable(this.portsIn[t].getVariableName());
          }),
          (Pt.prototype.refreshParams = function () {
            this.patch &&
              this.patch.isEditorMode() &&
              this.isCurrentUiOp() &&
              gui.opParams.show(this);
          }),
          (Pt.prototype.isCurrentUiOp = function () {
            if (this.patch.isEditorMode()) return gui.patchView.isCurrentOp(this);
          }),
          (Pt.prototype.renderVizLayer = null);
      }
      (Pt.getNamespaceClassName = function (t) {
        return t
          ? t.startsWith("Ops.Gl")
            ? "gl"
            : t.startsWith("Ops.WebAudio")
            ? "audio"
            : t.startsWith("Ops.Devices")
            ? "devices"
            : t.startsWith("Ops.Html") || t.startsWith("Ops.Sidebar")
            ? "html"
            : t.startsWith("Ops.Math")
            ? "math"
            : t.startsWith("Ops.User")
            ? "user"
            : "default"
          : "default";
      }),
        (Pt.isSubpatchOp = function (t) {
          return "Ops.Ui.Patch" == t || "Ops.Ui.SubPatch" == t;
        });
      const Nt = function (t) {
        CABLES.EventTarget.apply(this),
          (this._log = new h("LoadingStatus")),
          (this._loadingAssets = {}),
          (this._cbFinished = []),
          (this._assetTasks = []),
          (this._percent = 0),
          (this._count = 0),
          (this._countFinished = 0),
          (this._order = 0),
          (this._startTime = 0),
          (this._patch = t),
          (this._wasFinishedPrinted = !1),
          (this._loadingAssetTaskCb = !1);
      };
      (Nt.prototype.setOnFinishedLoading = function (t) {
        this._cbFinished.push(t);
      }),
        (Nt.prototype.getNumAssets = function () {
          return this._countFinished;
        }),
        (Nt.prototype.getProgress = function () {
          return this._percent;
        }),
        (Nt.prototype.checkStatus = function () {
          (this._countFinished = 0), (this._count = 0);
          for (const t in this._loadingAssets)
            this._count++,
              this._loadingAssets[t].finished || this._countFinished++;
          if (
            ((this._percent = (this._count - this._countFinished) / this._count),
            0 === this._countFinished)
          ) {
            for (let t = 0; t < this._cbFinished.length; t++)
              if (this._cbFinished[t]) {
                const e = this._cbFinished[t];
                setTimeout(() => {
                  e(this._patch), this.emitEvent("finishedAll");
                }, 100);
              }
            this._wasFinishedPrinted ||
              ((this._wasFinishedPrinted = !0), this.print()),
              this.emitEvent("finishedAll");
          }
        }),
        (Nt.prototype.getList = function () {
          let t = [];
          for (const e in this._loadingAssets) t.push(this._loadingAssets[e]);
          return t;
        }),
        (Nt.prototype.getListJobs = function () {
          let t = [];
          for (const e in this._loadingAssets)
            this._loadingAssets[e].finished ||
              t.push(this._loadingAssets[e].name);
          return t;
        }),
        (Nt.prototype.print = function () {
          if (this._patch.config.silent) return;
          const t = [];
          for (const e in this._loadingAssets)
            t.push([
              this._loadingAssets[e].order,
              this._loadingAssets[e].type,
              this._loadingAssets[e].name,
              (this._loadingAssets[e].timeEnd -
                this._loadingAssets[e].timeStart) /
                1e3 +
                "s",
            ]);
          this._log.groupCollapsed(
            "finished loading " +
              this._order +
              " assets in " +
              (Date.now() - this._startTime) / 1e3 +
              "s"
          ),
            this._log.table(t),
            this._log.groupEnd();
        }),
        (Nt.prototype.finished = function (t) {
          this._loadingAssets[t] &&
            ((this._loadingAssets[t].finished = !0),
            (this._loadingAssets[t].timeEnd = Date.now())),
            this.checkStatus(),
            this.emitEvent("finishedTask");
        }),
        (Nt.prototype._startAssetTasks = function () {
          for (let t = 0; t < this._assetTasks.length; t++) this._assetTasks[t]();
          this._assetTasks.length = 0;
        }),
        (Nt.prototype.addAssetLoadingTask = function (t) {
          this._patch.isEditorMode() && !CABLES.UI.loaded
            ? (this._assetTasks.push(t),
              this._loadingAssetTaskCb ||
                window.gui.addEventListener(
                  "uiloaded",
                  this._startAssetTasks.bind(this)
                ),
              (this._loadingAssetTaskCb = !0))
            : t(),
            this.emitEvent("addAssetTask");
        }),
        (Nt.prototype.existByName = function (t) {
          for (let e in this._loadingAssets)
            if (
              this._loadingAssets[e].name == t &&
              !this._loadingAssets[e].finished
            )
              return !0;
        }),
        (Nt.prototype.start = function (t, e) {
          0 == this._startTime && (this._startTime = Date.now());
          const i = A();
          return (
            (this._loadingAssets[i] = {
              id: i,
              type: t,
              name: e,
              finished: !1,
              timeStart: Date.now(),
              order: this._order,
            }),
            this._order++,
            this.emitEvent("startTask"),
            i
          );
        });
      const Ft = function () {
        (this._loops = []), (this._indizes = []), (this._index = 0);
      };
      (Ft.prototype.pushLoop = function (t) {
        this._loops.push(Math.abs(Math.floor(t))),
          this._indizes.push(this._index);
      }),
        (Ft.prototype.popLoop = function () {
          this._loops.pop(),
            (this._index = this._indizes.pop()),
            0 === this._loops.length && (this._index = 0);
        }),
        (Ft.prototype.numLoops = function () {
          return this._loops.length;
        }),
        (Ft.prototype.numCycles = function () {
          if (0 === this._loops.length) return 0;
          let t = this._loops[0];
          for (let e = 1; e < this._loops.length; e++) t *= this._loops[e];
          return t;
        }),
        (Ft.prototype.inLoop = function () {
          return this._loops.length > 0;
        }),
        (Ft.prototype.increment = function () {
          this._index++;
        }),
        (Ft.prototype.index = function () {
          return this._index;
        });
      const Ct = function (t) {
        this.startFrame = t.getFrameNum();
        let e = {},
          i = null,
          s = 0;
        (this.getItems = function () {
          return e;
        }),
          (this.clear = function () {
            e = {};
          }),
          (this.add = function (r, n) {
            null !== i &&
              ((n && n.id == i) ||
                (e[i] &&
                  ((e[i].timeUsed += performance.now() - s),
                  (!e[i].peakTime || _t() - e[i].peakTime > 5e3) &&
                    ((e[i].peak = 0), (e[i].peakTime = _t())),
                  (e[i].peak = Math.max(e[i].peak, performance.now() - s))))),
              null !== n
                ? (e[n.id] || (e[n.id] = { numTriggers: 0, timeUsed: 0 }),
                  e[n.id].lastFrame != t.getFrameNum() &&
                    (e[n.id].numTriggers = 0),
                  (e[n.id].lastFrame = t.getFrameNum()),
                  e[n.id].numTriggers++,
                  (e[n.id].opid = n.parent.id),
                  (e[n.id].title = n.parent.name + "." + n.name),
                  (e[n.id].subPatch = n.parent.uiAttribs.subPatch),
                  (i = n.id),
                  (s = performance.now()))
                : (i = null);
          }),
          (this.print = function () {
            console.log("--------");
            for (const t in e)
              console.log(
                e[t].title + ": " + e[t].numTriggers + " / " + e[t].timeUsed
              );
          });
      };
      var wt = class {
        constructor(t, e, i) {
          (this._name = t),
            (this._changeListeners = []),
            (this.type = i),
            this.setValue(e);
        }
        getValue() {
          return this._v;
        }
        getName() {
          return this._name;
        }
        setValue(t) {
          this._v = t;
          for (let e = 0; e < this._changeListeners.length; e++)
            this._changeListeners[e](t, this);
        }
        addListener(t) {
          -1 == this._changeListeners.indexOf(t) && this._changeListeners.push(t);
        }
        removeListener(t) {
          const e = this._changeListeners.indexOf(t);
          this._changeListeners.splice(e, 1);
        }
      };
      const Mt = function (t) {
        W.apply(this),
          (this._log = new h("core_patch")),
          (this.ops = []),
          (this.settings = {}),
          (this.config = t || {
            glCanvasResizeToWindow: !1,
            prefixAssetPath: "",
            prefixJsPath: "",
            silent: !0,
            onError: null,
            onFinishedLoading: null,
            onFirstFrameRendered: null,
            onPatchLoaded: null,
            fpsLimit: 0,
          }),
          (this.timer = new pt()),
          (this.freeTimer = new pt()),
          (this.animFrameOps = []),
          (this.animFrameCallbacks = []),
          (this.gui = !1),
          (CABLES.logSilent = this.silent = !0),
          (this.profiler = null),
          (this.aborted = !1),
          (this._crashedOps = []),
          (this._renderOneFrame = !1),
          (this._animReq = null),
          (this._opIdCache = {}),
          (this._triggerStack = []),
          (this.loading = new Nt(this)),
          (this._perf = {
            fps: 0,
            ms: 0,
            _fpsFrameCount: 0,
            _fpsMsCount: 0,
            _fpsStart: 0,
          }),
          (this._volumeListeners = []),
          (this._paused = !1),
          (this._frameNum = 0),
          (this.instancing = new Ft()),
          (this.onOneFrameRendered = null),
          (this.namedTriggers = {}),
          (this._origData = null),
          (this._frameNext = 0),
          (this._frameInterval = 0),
          (this._lastFrameTime = 0),
          (this._frameWasdelayed = !0),
          (function () {
            return !this;
          })() || this._log.warn("not in strict mode: core patch"),
          (this._isLocal = 0 === document.location.href.indexOf("file:")),
          this.config.hasOwnProperty("silent") &&
            (this.silent = CABLES.logSilent = this.config.silent),
          this.config.hasOwnProperty("doRequestAnimation") ||
            (this.config.doRequestAnimation = !0),
          this.config.prefixAssetPath || (this.config.prefixAssetPath = ""),
          this.config.prefixJsPath || (this.config.prefixJsPath = ""),
          this.config.masterVolume || (this.config.masterVolume = 1),
          (this._variables = {}),
          (this._variableListeners = []),
          (this.vars = {}),
          t && t.vars && (this.vars = t.vars),
          (this.cgl = new Ot(this)),
          this.cgl.setCanvas(
            this.config.glCanvasId || this.config.glCanvas || "glcanvas"
          ),
          !0 === this.config.glCanvasResizeToWindow &&
            this.cgl.setAutoResize("window"),
          !0 === this.config.glCanvasResizeToParent &&
            this.cgl.setAutoResize("parent"),
          this.loading.setOnFinishedLoading(this.config.onFinishedLoading),
          this.cgl.aborted && (this.aborted = !0),
          this.cgl.silent && (this.silent = !0),
          this.freeTimer.play(),
          this.exec(),
          this.aborted ||
            (this.config.patch
              ? this.deSerialize(this.config.patch)
              : this.config.patchFile &&
                w(this.config.patchFile, (t, e) => {
                  const i = JSON.parse(e);
                  if (t) {
                    return (
                      this._log.error("err", t),
                      this._log.error("data", i),
                      void this._log.error("data", i.msg)
                    );
                  }
                  this.deSerialize(i);
                }),
            this.timer.play()),
          console.log("made with https://cables.gl");
      };
      (Mt.prototype.isPlaying = function () {
        return !this._paused;
      }),
        (Mt.prototype.isRenderingOneFrame = function () {
          return this._renderOneFrame;
        }),
        (Mt.prototype.renderOneFrame = function () {
          (this._paused = !0),
            (this._renderOneFrame = !0),
            this.exec(),
            (this._renderOneFrame = !1);
        }),
        (Mt.prototype.getFPS = function () {
          return this._perf.fps;
        }),
        (Mt.prototype.isEditorMode = function () {
          return !0 === this.config.editorMode;
        }),
        (Mt.prototype.pause = function () {
          cancelAnimationFrame(this._animReq),
            this.emitEvent("pause"),
            (this._animReq = null),
            (this._paused = !0),
            this.freeTimer.pause();
        }),
        (Mt.prototype.resume = function () {
          this._paused &&
            (cancelAnimationFrame(this._animReq),
            (this._paused = !1),
            this.freeTimer.play(),
            this.emitEvent("resume"),
            this.exec());
        }),
        (Mt.prototype.setVolume = function (t) {
          this.config.masterVolume = t;
          for (let e = 0; e < this._volumeListeners.length; e++)
            this._volumeListeners[e].onMasterVolumeChanged(t);
        }),
        (Mt.prototype.getAssetPath = function () {
          if (this.isEditorMode()) return "/assets/" + gui.project()._id + "/";
          if (document.location.href.indexOf("cables.gl") > 0) {
            const t = document.location.href.split("/");
            return "/assets/" + t[t.length - 1] + "/";
          }
          return "assets/";
        }),
        (Mt.prototype.getFilePath = function (t) {
          return (
            this._isLocal &&
              !this.config.allowLocalFileAccess &&
              this.exitError(
                "localAccess",
                "Browser security forbids loading files directly without a webserver. Upload files to a server to work. use allowLocalFileAccess:true to ignore this."
              ),
            t
              ? 0 === (t = String(t)).indexOf("https:") ||
                0 === t.indexOf("http:") ||
                0 === t.indexOf("data:")
                ? t
                : ((t = t.replace("//", "/")),
                  this.config.prefixAssetPath +
                    t +
                    (this.config.suffixAssetPath || ""))
              : t
          );
        }),
        (Mt.prototype.clear = function () {
          for (
            this.emitEvent("patchClearStart"),
              this.cgl.TextureEffectMesh = null,
              this.animFrameOps.length = 0,
              this.timer = new pt();
            this.ops.length > 0;
  
          )
            this.deleteOp(this.ops[0].id);
          this.emitEvent("patchClearEnd");
        }),
        (Mt.getOpClass = function (t) {
          const e = t.split(".");
          let i = null;
          try {
            return (
              2 == e.length
                ? (i = window[e[0]][e[1]])
                : 3 == e.length
                ? (i = window[e[0]][e[1]][e[2]])
                : 4 == e.length
                ? (i = window[e[0]][e[1]][e[2]][e[3]])
                : 5 == e.length
                ? (i = window[e[0]][e[1]][e[2]][e[3]][e[4]])
                : 6 == e.length
                ? (i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]])
                : 7 == e.length
                ? (i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]])
                : 8 == e.length
                ? (i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]][e[7]])
                : 9 == e.length
                ? (i =
                    window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]][e[7]][e[8]])
                : 10 == e.length &&
                  (i =
                    window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]][e[7]][e[8]][
                      e[9]
                    ]),
              i
            );
          } catch (t) {
            return null;
          }
        }),
        (Mt.prototype.createOp = function (t, e) {
          const i = t.split(".");
          let s = null,
            r = "";
          try {
            if (-1 == t.indexOf("Ops.")) {
              const i = t;
              if (!CABLES.OPS[i])
                throw new Error("could not find op by id: " + i);
              (r = CABLES.OPS[i].objName),
                (s = new CABLES.OPS[i].f(this, r, e, i)),
                (s.opId = i);
            }
            if (!s) {
              r = t;
              if (!Mt.getOpClass(r))
                throw (
                  (this.emitEvent(
                    "criticalError",
                    "unknown op",
                    "unknown op: " + r
                  ),
                  this._log.error("unknown op: " + r),
                  new Error("unknown op: " + r))
                );
              if (
                (2 == i.length
                  ? (s = new window[i[0]][i[1]](this, r, e))
                  : 3 == i.length
                  ? (s = new window[i[0]][i[1]][i[2]](this, r, e))
                  : 4 == i.length
                  ? (s = new window[i[0]][i[1]][i[2]][i[3]](this, r, e))
                  : 5 == i.length
                  ? (s = new window[i[0]][i[1]][i[2]][i[3]][i[4]](this, r, e))
                  : 6 == i.length
                  ? (s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]](
                      this,
                      r,
                      e
                    ))
                  : 7 == i.length
                  ? (s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]](
                      this,
                      r,
                      e
                    ))
                  : 8 == i.length
                  ? (s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][
                      i[7]
                    ](this, r, e))
                  : 9 == i.length
                  ? (s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][
                      i[7]
                    ][i[8]](this, r, e))
                  : 10 == i.length
                  ? (s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][
                      i[7]
                    ][i[8]][i[9]](this, r, e))
                  : this._log.warn("parts.length", i.length),
                s)
              ) {
                s.opId = null;
                for (const t in CABLES.OPS)
                  CABLES.OPS[t].objName == r && (s.opId = t);
              }
            }
          } catch (t) {
            if (
              (this._crashedOps.push(r),
              this.emitEvent("exceptionOp", t, r, s),
              !this.isEditorMode())
            )
              throw (
                (this._log.error(t),
                this._log.error("[instancing error] " + r, t),
                CABLES.api && CABLES.api.sendErrorReport(t),
                this.exitError("INSTANCE_ERR", "Instancing Error " + r, t),
                new Error("instancing error " + r))
              );
          }
          return (
            s
              ? ((s.objName = r), (s.patch = this))
              : this._log.log("no op was created!?", t, e),
            s
          );
        }),
        (Mt.prototype.addOp = function (t, e, i, s) {
          const r = this.createOp(t, i);
          if (r) {
            if (
              (e && e.hasOwnProperty("errors") && delete e.errors,
              e && e.hasOwnProperty("error") && delete e.error,
              r.uiAttr(e),
              r.onCreate && r.onCreate(),
              r.hasOwnProperty("onAnimFrame") && this.addOnAnimFrame(r),
              r.hasOwnProperty("onMasterVolumeChanged") &&
                this._volumeListeners.push(r),
              this._opIdCache[r.id])
            )
              return void this._log.warn(
                "opid with id " + r.id + " already exists in patch!"
              );
            this.ops.push(r),
              (this._opIdCache[r.id] = r),
              this.emitEvent("onOpAdd", r, s),
              r.init && r.init();
          } else this._log.error("addop: no op.....");
          return r;
        }),
        (Mt.prototype.addOnAnimFrame = function (t) {
          for (let e = 0; e < this.animFrameOps.length; e++)
            if (this.animFrameOps[e] == t) return;
          this.animFrameOps.push(t);
        }),
        (Mt.prototype.removeOnAnimFrame = function (t) {
          for (let e = 0; e < this.animFrameOps.length; e++)
            if (this.animFrameOps[e] == t)
              return void this.animFrameOps.splice(e, 1);
        }),
        (Mt.prototype.addOnAnimFrameCallback = function (t) {
          this.animFrameCallbacks.push(t);
        }),
        (Mt.prototype.removeOnAnimCallback = function (t) {
          for (let e = 0; e < this.animFrameCallbacks.length; e++)
            if (this.animFrameCallbacks[e] == t)
              return void this.animFrameCallbacks.splice(e, 1);
        }),
        (Mt.prototype.deleteOp = function (t, e, i) {
          let s = !1;
          for (const r in this.ops)
            if (this.ops[r].id == t) {
              const n = this.ops[r];
              let o = null,
                h = null;
              if (n) {
                (s = !0),
                  e &&
                    n.portsIn.length > 0 &&
                    n.portsIn[0].isLinked() &&
                    n.portsOut.length > 0 &&
                    n.portsOut[0].isLinked() &&
                    n.portsIn[0].getType() == n.portsOut[0].getType() &&
                    ((o = n.portsIn[0].links[0].getOtherPort(n.portsIn[0])),
                    (h = n.portsOut[0].links[0].getOtherPort(n.portsOut[0])));
                const a = this.ops[r];
                a.removeLinks(),
                  a.emitEvent("onDelete", this.ops[r]),
                  this.onDelete &&
                    (this._log.warn("deprecated this.onDelete", this.onDelete),
                    this.onDelete(a)),
                  this.ops.splice(r, 1),
                  this.emitEvent("onOpDelete", a, i),
                  a.onDelete && a.onDelete(i),
                  a.cleanUp(),
                  null !== o &&
                    null !== h &&
                    this.link(o.parent, o.getName(), h.parent, h.getName()),
                  delete this._opIdCache[t];
                break;
              }
            }
          s || this._log.warn("core patch deleteop: not found...");
        }),
        (Mt.prototype.getFrameNum = function () {
          return this._frameNum;
        }),
        (Mt.prototype.renderFrame = function (t) {
          this.timer.update(), this.freeTimer.update();
          const e = this.timer.getTime(),
            i = performance.now();
          for (let t = 0; t < this.animFrameCallbacks.length; ++t)
            this.animFrameCallbacks[t] &&
              this.animFrameCallbacks[t](e, this._frameNum);
          for (let t = 0; t < this.animFrameOps.length; ++t)
            this.animFrameOps[t].onAnimFrame &&
              this.animFrameOps[t].onAnimFrame(e);
          (this.cgl.profileData.profileOnAnimFrameOps = performance.now() - i),
            this.emitEvent("onRenderFrame", e),
            this._frameNum++,
            1 == this._frameNum &&
              this.config.onFirstFrameRendered &&
              this.config.onFirstFrameRendered();
        }),
        (Mt.prototype.exec = function (t) {
          if (!this._renderOneFrame && (this._paused || this.aborted)) return;
          (this.config.fpsLimit = this.config.fpsLimit || 0),
            this.config.fpsLimit &&
              (this._frameInterval = 1e3 / this.config.fpsLimit);
          const e = CABLES.now(),
            i = e - this._frameNext;
          if (
            this.isEditorMode() &&
            !this._renderOneFrame &&
            e - this._lastFrameTime >= 500 &&
            0 !== this._lastFrameTime &&
            !this._frameWasdelayed
          )
            return (
              (this._lastFrameTime = 0),
              setTimeout(this.exec.bind(this), 500),
              this.emitEvent("renderDelayStart"),
              void (this._frameWasdelayed = !0)
            );
          if (
            this._renderOneFrame ||
            0 === this.config.fpsLimit ||
            i > this._frameInterval ||
            this._frameWasdelayed
          ) {
            const t = CABLES.now();
            this.renderFrame(),
              (this._perf._lastFrameTime = CABLES.now()),
              this._perf._fpsFrameCount++,
              (this._perf._fpsMsCount += CABLES.now() - t),
              this._frameInterval &&
                (this._frameNext = e - (i % this._frameInterval));
          }
          this._frameWasdelayed &&
            (this.emitEvent("renderDelayEnd"), (this._frameWasdelayed = !1)),
            this._renderOneFrame &&
              (this.onOneFrameRendered && this.onOneFrameRendered(),
              this.emitEvent("renderedOneFrame"),
              (this._renderOneFrame = !1)),
            CABLES.now() - this._perf._fpsStart >= 1e3 &&
              this._perf.fps != this._perf._fpsFrameCount &&
              ((this._perf.fps = this._perf._fpsFrameCount),
              (this._perf.ms = Math.round(
                this._perf._fpsMsCount / this._perf._fpsFrameCount
              )),
              this.emitEvent("performance", this._perf),
              (this._perf._fpsFrameCount = 0),
              (this._perf._fpsMsCount = 0),
              (this._perf._fpsStart = CABLES.now())),
            this.config.doRequestAnimation &&
              (this._animReq = requestAnimationFrame(this.exec.bind(this)));
        }),
        (Mt.prototype.link = function (t, e, i, s, r, n) {
          if (!t) return void this._log.warn("link: op1 is null ");
          if (!i) return void this._log.warn("link: op2 is null");
          const o = t.getPort(e, r),
            h = i.getPort(s, r);
          if (o)
            if (h) {
              if (!o.shouldLink(o, h) || !h.shouldLink(o, h)) return !1;
              if (St.canLink(o, h)) {
                const t = new St(this);
                return t.link(o, h), this.emitEvent("onLink", o, h, t, n), t;
              }
            } else
              this._log.warn(
                "port not found! " + s + " of " + i.name + "(" + i.objName + ")"
              );
          else this._log.warn("port not found! " + e + "(" + t.objName + ")");
        }),
        (Mt.prototype.serialize = function (t) {
          const e = {};
          (t = t || {}).hasOwnProperty("removeBlueprints") ||
            (t.removeBlueprints = !0),
            t.hasOwnProperty("removeFromNetworkAttr") ||
              (t.removeFromNetworkAttr = !0),
            (e.ops = []),
            (e.settings = this.settings);
          for (const i in this.ops) {
            const s = this.ops[i];
            (t.removeBlueprints && s.storage && s.storage.blueprint) ||
              (t.removeFromNetworkAttr &&
                s.uiAttribs &&
                s.uiAttribs.hasOwnProperty("fromNetwork") &&
                delete s.uiAttribs.fromNetwork,
              e.ops.push(s.getSerialized()));
          }
          return t.asObject ? e : JSON.stringify(e);
        }),
        (Mt.prototype.getOpById = function (t) {
          return this._opIdCache[t];
        }),
        (Mt.prototype.getOpsByName = function (t) {
          const e = [];
          for (const i in this.ops) this.ops[i].name == t && e.push(this.ops[i]);
          return e;
        }),
        (Mt.prototype.getOpsByObjName = function (t) {
          const e = [];
          for (const i in this.ops)
            this.ops[i].objName == t && e.push(this.ops[i]);
          return e;
        }),
        (Mt.prototype.loadLib = function (t) {
          C(
            "/ui/libs/" + t + ".js",
            (t, e) => {
              const i = document.createElement("script");
              (i.type = "text/javascript"),
                (i.text = e),
                document.getElementsByTagName("head")[0].appendChild(i);
            },
            "GET"
          );
        }),
        (Mt.prototype.reloadOp = function (t, e) {
          let i = 0;
          const s = [],
            r = [];
          for (const e in this.ops)
            this.ops[e].objName == t && r.push(this.ops[e]);
          for (let e = 0; e < r.length; e++) {
            i++;
            const n = r[e];
            n.deleted = !0;
            const o = this,
              h = this.addOp(t, n.uiAttribs);
            if (!h) continue;
            let a, l;
            for (a in (n && n.storage && (h.storage = n.storage),
            s.push(h),
            n.portsIn))
              if (0 === n.portsIn[a].links.length) {
                const t = h.getPort(n.portsIn[a].name);
                t
                  ? (t.set(n.portsIn[a].get()),
                    n.portsIn[a].getVariableName() &&
                      t.setVariable(n.portsIn[a].getVariableName()))
                  : this._log.error(
                      "[reloadOp] could not set port " +
                        n.portsIn[a].name +
                        ", propably renamed port ?"
                    );
              } else
                for (; n.portsIn[a].links.length; ) {
                  const t = n.portsIn[a].links[0].portIn.name,
                    e = n.portsIn[a].links[0].portOut.name,
                    i = n.portsIn[a].links[0].portOut.parent;
                  n.portsIn[a].links[0].remove(),
                    (l = o.link(h, t, i, e)),
                    l
                      ? l.setValue()
                      : this._log.warn(
                          "[reloadOp] relink after op reload not successfull for port " +
                            e
                        );
                }
            for (a in n.portsOut)
              for (; n.portsOut[a].links.length; ) {
                const t = n.portsOut[a].links[0].portOut.name,
                  e = n.portsOut[a].links[0].portIn.name,
                  i = n.portsOut[a].links[0].portIn.parent;
                n.portsOut[a].links[0].remove(),
                  (l = o.link(h, t, i, e)),
                  l
                    ? l.setValue()
                    : this._log.warn(
                        "relink after op reload not successfull for port " + e
                      );
              }
            this.deleteOp(n.id, !1, !0);
          }
          e(i, s);
        }),
        (Mt.prototype.getSubPatchOps = function (t) {
          const e = [];
          for (const i in this.ops)
            this.ops[i].uiAttribs &&
              this.ops[i].uiAttribs.subPatch == t &&
              e.push(this.ops[i]);
          return e;
        }),
        (Mt.prototype.getSubPatchOp = function (t, e) {
          for (const i in this.ops)
            if (
              this.ops[i].uiAttribs &&
              this.ops[i].uiAttribs.subPatch == t &&
              this.ops[i].objName == e
            )
              return this.ops[i];
          return !1;
        }),
        (Mt.prototype._addLink = function (t, e, i, s) {
          this.link(this.getOpById(t), i, this.getOpById(e), s, !1, !0);
        }),
        (Mt.prototype.deSerialize = function (t, e) {
          if (this.aborted) return;
          const i = [],
            s = this.loading.start("core", "deserialize");
          (this.namespace = t.namespace || ""),
            (this.name = t.name || ""),
            "string" == typeof t && (t = JSON.parse(t)),
            (this.settings = t.settings),
            this.emitEvent("patchLoadStart");
          for (const s in t.ops) {
            const r = CABLES.now(),
              n = t.ops[s];
            let o = null;
            try {
              o = n.opId
                ? this.addOp(n.opId, n.uiAttribs, n.id, !0)
                : this.addOp(n.objName, n.uiAttribs, n.id, !0);
            } catch (t) {
              throw (
                (this._log.warn("[instancing error] op data:", n, t),
                new Error("instancing error: " + n.objName))
              );
            }
            if (o) {
              e && (o.id = T()),
                (o.portsInData = n.portsIn),
                (o._origData = n),
                (o.storage = n.storage);
              for (const t in n.portsIn) {
                const e = n.portsIn[t],
                  i = o.getPort(e.name);
                !i ||
                  ("bool" != i.uiAttribs.display && "bool" != i.uiAttribs.type) ||
                  isNaN(e.value) ||
                  (e.value = !0 === e.value),
                  i &&
                    void 0 !== e.value &&
                    i.type != l.OP_PORT_TYPE_TEXTURE &&
                    i.set(e.value),
                  i && i.deSerializeSettings(e);
              }
              for (const e in n.portsOut) {
                const i = o.getPort(n.portsOut[e].name);
                i &&
                  i.type != l.OP_PORT_TYPE_TEXTURE &&
                  n.portsOut[e].hasOwnProperty("value") &&
                  i.set(t.ops[s].portsOut[e].value);
              }
              i.push(o);
            }
            const h = Math.round(100 * (CABLES.now() - r)) / 100;
            !this.silent &&
              h > 200 &&
              this._log.warn("long op init ", t.ops[s].objName, h);
          }
          for (const t in this.ops)
            this.ops[t].onLoadedValueSet &&
              (this.ops[t].onLoadedValueSet(this.ops[t]._origData),
              (this.ops[t].onLoadedValueSet = null),
              (this.ops[t]._origData = null));
          if (t.ops)
            for (let e = 0; e < t.ops.length; e++) {
              if (t.ops[e].portsIn)
                for (let i = 0; i < t.ops[e].portsIn.length; i++)
                  if (t.ops[e].portsIn[i].links)
                    for (let s = 0; s < t.ops[e].portsIn[i].links.length; s++)
                      t.ops[e].portsIn[i].links[s] &&
                        this._addLink(
                          t.ops[e].portsIn[i].links[s].objIn,
                          t.ops[e].portsIn[i].links[s].objOut,
                          t.ops[e].portsIn[i].links[s].portIn,
                          t.ops[e].portsIn[i].links[s].portOut
                        );
              if (t.ops[e].portsOut)
                for (let i = 0; i < t.ops[e].portsOut.length; i++)
                  if (t.ops[e].portsOut[i].links)
                    for (let s = 0; s < t.ops[e].portsOut[i].links.length; s++)
                      t.ops[e].portsOut[i].links[s] &&
                        this._addLink(
                          t.ops[e].portsOut[i].links[s].objIn,
                          t.ops[e].portsOut[i].links[s].objOut,
                          t.ops[e].portsOut[i].links[s].portIn,
                          t.ops[e].portsOut[i].links[s].portOut
                        );
            }
          for (const t in this.ops)
            this.ops[t].onLoaded &&
              (this.ops[t].onLoaded(), (this.ops[t].onLoaded = null));
          for (const t in this.ops)
            this.ops[t].init && (this.ops[t].init(), (this.ops[t].init = null));
          if (this.config.variables)
            for (const t in this.config.variables)
              this.setVarValue(t, this.config.variables[t]);
          for (const t in this.ops)
            this.ops[t].initVarPorts(), delete this.ops[t].uiAttribs.pasted;
          setTimeout(() => {
            this.loading.finished(s);
          }, 100),
            this.config.onPatchLoaded && this.config.onPatchLoaded(this),
            this.emitEvent("patchLoadEnd", i, t, e);
        }),
        (Mt.prototype.profile = function (t) {
          this.profiler = new Ct(this);
          for (const e in this.ops) this.ops[e].profile(t);
        }),
        (Mt.prototype.setVariable = function (t, e) {
          void 0 !== this._variables[t]
            ? this._variables[t].setValue(e)
            : this._log.warn("variable " + t + " not found!");
        }),
        (Mt.prototype._sortVars = function () {
          if (!this.isEditorMode()) return;
          const t = {};
          Object.keys(this._variables)
            .sort((t, e) => t.localeCompare(e, "en", { sensitivity: "base" }))
            .forEach((e) => {
              t[e] = this._variables[e];
            }),
            (this._variables = t);
        }),
        (Mt.prototype.hasVar = function (t) {
          return void 0 !== this._variables[t];
        }),
        (Mt.prototype.setVarValue = function (t, e, i) {
          return (
            this.hasVar(t)
              ? this._variables[t].setValue(e)
              : ((this._variables[t] = new wt(t, e, i)),
                this._sortVars(),
                this.emitEvent("variablesChanged")),
            this._variables[t]
          );
        }),
        (Mt.prototype.getVarValue = function (t, e) {
          if (this._variables.hasOwnProperty(t))
            return this._variables[t].getValue();
        }),
        (Mt.prototype.getVar = function (t) {
          if (this._variables.hasOwnProperty(t)) return this._variables[t];
        }),
        (Mt.prototype.deleteVar = function (t) {
          for (let e = 0; e < this.ops.length; e++)
            for (let i = 0; i < this.ops[e].portsIn.length; i++)
              this.ops[e].portsIn[i].getVariableName() == t &&
                this.ops[e].portsIn[i].setVariable(null);
          delete this._variables[t],
            this.emitEvent("variableDeleted", t),
            this.emitEvent("variablesChanged");
        }),
        (Mt.prototype.getVars = function (t) {
          if (void 0 === t) return this._variables;
          const e = [];
          t == CABLES.OP_PORT_TYPE_STRING && (t = "string"),
            t == CABLES.OP_PORT_TYPE_VALUE && (t = "number"),
            t == CABLES.OP_PORT_TYPE_ARRAY && (t = "array"),
            t == CABLES.OP_PORT_TYPE_OBJECT && (t = "object");
          for (const i in this._variables)
            (this._variables[i].type && this._variables[i].type != t) ||
              e.push(this._variables[i]);
          return e;
        }),
        (Mt.prototype.exitError = function (t, e, i) {
          if (((this.aborted = !0), this && this.config && this.config.onError))
            this.config.onError(t, e);
          else if (!this.isEditorMode()) {
            const s = document.createElement("div"),
              r = this.cgl.canvas.getBoundingClientRect();
            s.setAttribute(
              "style",
              "position:absolute;border:5px solid red;padding:15px;background-color:black;color:white;font-family:monospace;"
            ),
              (s.style.top = r.top + "px"),
              (s.style.left = r.left + "px");
            let n = "cables - An error occured:<br/>";
            (n += "[" + t + "] - " + e),
              i && (n += "<br/>Exception: " + i.message),
              (s.innerHTML = n);
            const o = this.cgl.canvas.parentElement;
            for (; o.hasChildNodes(); ) o.removeChild(o.lastChild);
            document.body.appendChild(s);
          }
        }),
        (Mt.prototype.preRenderOps = function () {
          this._log.log("prerendering...");
          for (let t = 0; t < this.ops.length; t++)
            this.ops[t].preRender &&
              (this.ops[t].preRender(),
              this._log.log("prerender " + this.ops[t].objName));
        }),
        (Mt.prototype.dispose = function () {
          this.pause(), this.clear();
        }),
        (Mt.prototype.pushTriggerStack = function (t) {
          this._triggerStack.push(t);
        }),
        (Mt.prototype.popTriggerStack = function () {
          this._triggerStack.pop();
        }),
        (Mt.prototype.printTriggerStack = function () {
          if (0 == this._triggerStack.length)
            return void console.log("stack length", this._triggerStack.length);
          console.groupCollapsed(
            "trigger port stack " +
              this._triggerStack[this._triggerStack.length - 1].parent.name +
              "." +
              this._triggerStack[this._triggerStack.length - 1].name
          );
          const t = [];
          for (let e = 0; e < this._triggerStack.length; e++)
            t.push(
              e +
                ". " +
                this._triggerStack[e].parent.name +
                " " +
                this._triggerStack[e].name
            );
          console.table(t), console.groupEnd();
        });
      var Ut = Mt;
      const Lt = {
          addPatch: function (t, e) {
            let i = t,
              s = A();
            if (
              "string" == typeof t &&
              ((s = t), (i = document.getElementById(s)), !i)
            )
              return void console.error(
                s + " Polyshape Container Element not found!"
              );
            const r = document.createElement("canvas");
            return (
              (r.id = "glcanvas_" + s),
              (r.width = i.clientWidth),
              (r.height = i.clientHeight),
              window.addEventListener(
                "resize",
                function () {
                  this.setAttribute("width", i.clientWidth),
                    (this.height = i.clientHeight);
                }.bind(r)
              ),
              i.appendChild(r),
              ((e = e || {}).glCanvasId = r.id),
              e.onError ||
                (e.onError = function (t) {
                  console.error(t);
                }),
              (CABLES.patch = new Ut(e)),
              r
            );
          },
        },
        Bt = {
          toneJsInitialized: !1,
          createAudioContext: function (t) {
            if (
              ((window.AudioContext =
                window.AudioContext || window.webkitAudioContext),
              window.AudioContext)
            )
              return (
                window.audioContext || (window.audioContext = new AudioContext()),
                window.Tone &&
                  !Bt.toneJsInitialized &&
                  (Tone.setContext(window.audioContext),
                  (Bt.toneJsInitialized = !0)),
                window.audioContext
              );
            t.patch.config.onError(
              "NO_WEBAUDIO",
              "Web Audio is not supported in this browser."
            );
          },
          getAudioContext: function () {
            return window.audioContext;
          },
          createAudioInPort: function (t, e, i, s) {
            if (!t || !e || !i) {
              const e =
                "ERROR: createAudioInPort needs three parameters, op, portName and audioNode";
              throw (t.log(e), new Error(e));
            }
            s || (s = 0),
              (t.webAudio = t.webAudio || {}),
              (t.webAudio.audioInPorts = t.webAudio.audioInPorts || []);
            const r = t.inObject(e);
            return (
              (r.webAudio = {}),
              (r.webAudio.previousAudioInNode = null),
              (r.webAudio.audioNode = i),
              (t.webAudio.audioInPorts[e] = r),
              (r.onChange = function () {
                const e = r.get();
                if (e)
                  try {
                    e.connect
                      ? (e.connect(r.webAudio.audioNode, 0, s),
                        t.setUiError("audioCtx", null))
                      : t.setUiError(
                          "audioCtx",
                          "The passed input is not an audio context. Please make sure you connect an audio context to the input.",
                          2
                        );
                  } catch (i) {
                    throw (
                      (t.log("Error: Failed to connect web audio node!", i),
                      t.log("port.webAudio.audioNode", r.webAudio.audioNode),
                      t.log("audioInNode: ", e),
                      t.log("inputChannelIndex:", s),
                      t.log("audioInNode.connect: ", e.connect),
                      i)
                    );
                  }
                else if (r.webAudio.previousAudioInNode)
                  try {
                    r.webAudio.previousAudioInNode.disconnect &&
                      r.webAudio.previousAudioInNode.disconnect(
                        r.webAudio.audioNode,
                        0,
                        s
                      ),
                      t.setUiError("audioCtx", null);
                  } catch (e) {
                    try {
                      r.webAudio.previousAudioInNode.disconnect(
                        r.webAudio.audioNode
                      );
                    } catch (i) {
                      throw (
                        (t.log(
                          "Disconnecting audio node with in/out port index, as well as without in/out-port-index did not work ",
                          e
                        ),
                        e.printStackTrace && e.printStackTrace(),
                        e)
                      );
                    }
                  }
                r.webAudio.previousAudioInNode = e;
              }),
              r
            );
          },
          replaceNodeInPort: function (t, e, i) {
            const s = t.webAudio.previousAudioInNode;
            if (s && s.disconnect) {
              try {
                s.disconnect(e);
              } catch (t) {
                throw (
                  (t.printStackTrace && t.printStackTrace(),
                  new Error(
                    "replaceNodeInPort: Could not disconnect old audio node. " +
                      t.name +
                      " " +
                      t.message
                  ))
                );
              }
              t.webAudio.audioNode = i;
              try {
                s.connect(i);
              } catch (t) {
                throw (
                  (t.printStackTrace && t.printStackTrace(),
                  new Error(
                    "replaceNodeInPort: Could not connect to new node. " +
                      t.name +
                      " " +
                      t.message
                  ))
                );
              }
            }
          },
          createAudioOutPort: function (t, e, i) {
            if (!t || !e || !i) {
              const e =
                "ERROR: createAudioOutPort needs three parameters, op, portName and audioNode";
              throw (t.log(e), new Error(e));
            }
            const s = t.outObject(e);
            return s.set(i), s;
          },
          createAudioParamInPort: function (t, e, i, s, r) {
            if (!t || !e || !i)
              return (
                t.log(
                  "ERROR: createAudioParamInPort needs three parameters, op, portName and audioNode"
                ),
                t && t.name && t.log("opname: ", t.name),
                t.log("portName", e),
                void t.log("audioNode: ", i)
              );
            (t.webAudio = t.webAudio || {}),
              (t.webAudio.audioInPorts = t.webAudio.audioInPorts || []);
            const n = t.inDynamic(
              e,
              [l.OP_PORT_TYPE_VALUE, l.OP_PORT_TYPE_OBJECT],
              s,
              r
            );
            return (
              (n.webAudio = {}),
              (n.webAudio.previousAudioInNode = null),
              (n.webAudio.audioNode = i),
              (t.webAudio.audioInPorts[e] = n),
              (n.onChange = function () {
                const e = n.get(),
                  i = n.webAudio.audioNode,
                  s = Bt.getAudioContext();
                if (null != e)
                  if ("object" == typeof e && e.connect) {
                    try {
                      e.connect(i);
                    } catch (e) {
                      throw (
                        (t.log("Could not connect audio node: ", e),
                        e.printStackTrace && e.printStackTrace(),
                        e)
                      );
                    }
                    n.webAudio.previousAudioInNode = e;
                  } else {
                    if (i._param && i._param.minValue && i._param.maxValue)
                      if (e >= i._param.minValue && e <= i._param.maxValue)
                        try {
                          i.setValueAtTime
                            ? i.setValueAtTime(e, s.currentTime)
                            : (i.value = e);
                        } catch (e) {
                          throw (
                            (t.log(
                              "Possible AudioParam problem with tone.js op: ",
                              e
                            ),
                            e.printStackTrace && e.printStackTrace(),
                            e)
                          );
                        }
                      else
                        t.log(
                          "Warning: The value for an audio parameter is out of range!"
                        );
                    else if (i.minValue && i.maxValue)
                      if (e >= i.minValue && e <= i.maxValue)
                        try {
                          i.setValueAtTime
                            ? i.setValueAtTime(e, s.currentTime)
                            : (i.value = e);
                        } catch (e) {
                          throw (
                            (t.log(
                              "AudioParam has minValue / maxValue defined, and value is in range, but setting the value failed! ",
                              e
                            ),
                            e.printStackTrace && e.printStackTrace(),
                            e)
                          );
                        }
                      else
                        t.log(
                          "Warning: The value for an audio parameter is out of range!"
                        );
                    else
                      try {
                        i.setValueAtTime
                          ? i.setValueAtTime(e, s.currentTime)
                          : (i.value = e);
                      } catch (e) {
                        throw (
                          (t.log(
                            "Possible AudioParam problem (without minValue / maxValue): ",
                            e
                          ),
                          e.printStackTrace && e.printStackTrace(),
                          e)
                        );
                      }
                    if (
                      n.webAudio.previousAudioInNode &&
                      n.webAudio.previousAudioInNode.disconnect
                    ) {
                      try {
                        n.webAudio.previousAudioInNode.disconnect(i);
                      } catch (e) {
                        throw (
                          (t.log("Could not disconnect previous audio node: ", e),
                          e)
                        );
                      }
                      n.webAudio.previousAudioInNode = void 0;
                    }
                  }
                else n.webAudio.previousAudioInNode;
              }),
              n
            );
          },
          loadAudioFile: function (t, e, i, s, r) {
            const n = Bt.createAudioContext();
            let o = null;
            (r || void 0 === r) &&
              ((o = t.loading.start("audio", e)),
              t.isEditorMode() &&
                gui
                  .jobs()
                  .start({
                    id: "loadaudio" + o,
                    title: " loading audio (" + e + ")",
                  }));
            const h = new XMLHttpRequest();
            e &&
              (h.open("GET", e, !0),
              (h.responseType = "arraybuffer"),
              (h.onload = function () {
                t.loading.finished(o),
                  t.isEditorMode() && gui.jobs().finish("loadaudio" + o),
                  n.decodeAudioData(h.response, i, s);
              }),
              h.send());
          },
          isValidToneTime: function (t) {
            try {
              new Tone.Time(t);
            } catch (t) {
              return !1;
            }
            return !0;
          },
          isValidToneNote: function (t) {
            try {
              Tone.Frequency(t);
            } catch (t) {
              return !1;
            }
            return !0;
          },
        },
        kt = function (t, e, i) {
          (this._patch = t),
            (this.connector = i),
            (this._log = new h("PatchConnectionReceiver"));
        };
      (kt.prototype._addOp = function (t) {
        let e = null;
        t.vars.uiAttribs && (e = t.vars.uiAttribs);
        const i = this._patch.addOp(t.vars.objName, e, t.vars.opId, !0);
        i &&
          ((i.id = t.vars.opId),
          t.vars.portsIn &&
            t.vars.portsIn.forEach((t) => {
              const e = i.getPortByName(t.name);
              e && e.set(t.value);
            }));
      }),
        (kt.prototype._receive = function (t) {
          let e = {};
          if (
            ((e = t.hasOwnProperty("event") ? t : JSON.parse(t.data)),
            e.event == u.PACO_OP_CREATE)
          ) {
            if (this._patch.getOpById(e.vars.opId)) return;
            this._log.verbose("op create:", e.vars.objName),
              window.gui
                ? gui.serverOps.loadOpLibs(e.vars.objName, () => {
                    this._addOp(e);
                  })
                : this._addOp(e);
          } else if (e.event == u.PACO_DESERIALIZE)
            e.vars.json &&
              (window.gui
                ? gui.serverOps.loadProjectLibs(e.vars.json, () => {
                    this._patch.deSerialize(e.vars.json, e.vars.genIds);
                  })
                : this._patch.deSerialize(e.vars.json, e.vars.genIds));
          else if (e.event == u.PACO_LOAD)
            this._log.verbose("PACO load patch....."),
              this._patch.clear(),
              window.gui
                ? gui.serverOps.loadProjectLibs(JSON.parse(e.vars.patch), () => {
                    this._patch.deSerialize(e.vars.patch);
                  })
                : this._patch.deSerialize(e.vars.patch);
          else if (e.event == u.PACO_CLEAR)
            this._patch.clear(), this._log.log("clear");
          else if (e.event == u.PACO_OP_DELETE) {
            this._log.verbose("op delete", e.vars.objName);
            this._patch.getOpById(e.vars.op);
            this._patch.deleteOp(e.vars.op, !0);
          } else if (e.event == u.PACO_OP_ENABLE) {
            const t = this._patch.getOpById(e.vars.op);
            t && (t.enabled = !0);
          } else if (e.event == u.PACO_OP_DISABLE) {
            const t = this._patch.getOpById(e.vars.op);
            t && (t.enabled = !1);
          } else if (e.event == u.PACO_UIATTRIBS) {
            const t = this._patch.getOpById(e.vars.op);
            t && t.setUiAttrib(e.vars.uiAttribs);
          } else if (e.event == u.PACO_UNLINK) {
            const t = this._patch.getOpById(e.vars.op1),
              i = this._patch.getOpById(e.vars.op2);
            if (!t || !i) return;
            const s = t.getPort(e.vars.port1),
              r = i.getPort(e.vars.port2);
            s && r
              ? s.removeLinkTo(r)
              : this._log.warn("paco unlink could not find port...");
          } else if (e.event == u.PACO_LINK) {
            const t = this._patch.getOpById(e.vars.op1),
              i = this._patch.getOpById(e.vars.op2);
            t && i && this._patch.link(t, e.vars.port1, i, e.vars.port2);
          } else if (e.event == u.PACO_VALUECHANGE) {
            if ("+ create new one" === e.vars.v) return;
            const t = this._patch.getOpById(e.vars.op);
            if (t) {
              const i = t.getPort(e.vars.port);
              i && i.set(e.vars.v);
            }
          } else if (e.event == u.PACO_VARIABLES) {
            const t = this._patch.getOpById(e.vars.opId);
            t && t.varName && t.varName.set(e.vars.varName);
          } else if (e.event == u.PACO_TRIGGERS) {
            const t = this._patch.getOpById(e.vars.opId);
            t && t.varName && t.varName.set(e.vars.varName);
          } else if (e.event == u.PACO_PORT_SETVARIABLE) {
            const t = this._patch.getOpById(e.vars.opId);
            if (t) {
              const i = t.getPortByName(e.vars.portName);
              i && i.setVariable(e.vars.variableName);
            }
          } else if (e.event == u.PACO_PORT_SETANIMATED) {
            const t = this._patch.getOpById(e.vars.opId);
            if (t) {
              t.portsIn[e.vars.portIndex] &&
                e.vars.hasOwnProperty("targetState") &&
                this._patch.emitEvent(
                  "pacoPortValueSetAnimated",
                  t,
                  e.vars.portIndex,
                  e.vars.targetState,
                  e.vars.defaultValue
                );
            }
          } else if (e.event == u.PACO_PORT_ANIM_UPDATED) {
            const t = this._patch.getOpById(e.vars.opId);
            if (t) {
              const i = t.getPortByName(e.vars.portName);
              if (i) {
                const t = i.getSerialized();
                (t.anim = e.vars.anim),
                  (i.anim = null),
                  i.deSerializeSettings(t),
                  this._patch.emitEvent("pacoPortAnimUpdated", i);
              }
            }
          } else this._log.warn("unknown patchConnectionEvent!", t);
        });
      const Dt = function (t) {
        (this.connectors = []),
          (this.paused = !1),
          t.addEventListener("onOpDelete", (t) => {
            this.send(CABLES.PACO_OP_DELETE, { op: t.id, objName: t.objName });
          }),
          t.addEventListener("patchClearStart", () => {
            this.paused = !0;
          }),
          t.addEventListener("patchClearEnd", () => {
            this.paused = !1;
          }),
          t.addEventListener("patchLoadStart", () => {
            this.paused = !0;
          }),
          t.addEventListener("patchLoadEnd", (t, e, i) => {
            (this.paused = !1),
              this.send(CABLES.PACO_DESERIALIZE, { json: e, genIds: i });
          }),
          t.addEventListener("onOpAdd", (t) => {
            const e = [];
            t.portsIn.forEach((t) => {
              const i = { id: t.id, name: t.name, value: t.get() };
              e.push(i);
            });
            let i = {};
            t.uiAttribs && (i = { ...t.uiAttribs }),
              this.send(CABLES.PACO_OP_CREATE, {
                opId: t.id,
                objName: t.objName,
                uiAttribs: i,
                portsIn: e,
              });
          }),
          t.addEventListener("onUnLink", (t, e) => {
            this.send(CABLES.PACO_UNLINK, {
              op1: t.parent.id,
              op2: e.parent.id,
              port1: t.getName(),
              port2: e.getName(),
            });
          }),
          t.addEventListener("onUiAttribsChange", (t, e) => {
            e &&
              (delete e.extendTitle,
              delete e.history,
              delete e.translate,
              Object.keys(e).length > 0 &&
                this.send(CABLES.PACO_UIATTRIBS, { op: t.id, uiAttribs: e }));
          }),
          t.addEventListener("opVariableNameChanged", (t, e) => {
            const i = { opId: t.id, varName: e };
            this.send(CABLES.PACO_VARIABLES, i);
          }),
          t.addEventListener("opTriggerNameChanged", (t, e) => {
            const i = { opId: t.id, varName: e };
            this.send(CABLES.PACO_TRIGGERS, i);
          }),
          t.addEventListener("onLink", (t, e) => {
            this.send(CABLES.PACO_LINK, {
              op1: t.parent.id,
              op2: e.parent.id,
              port1: t.name,
              port2: e.name,
            });
          }),
          t.addEventListener("portSetVariable", (t, e, i) => {
            const s = { opId: t.id, portName: e.name, variableName: i };
            this.send(CABLES.PACO_PORT_SETVARIABLE, s);
          }),
          t.addEventListener("portAnimUpdated", (t, e, i) => {
            if (t && e) {
              const s = { opId: t.id, portName: e.name, anim: i.getSerialized() };
              this.send(CABLES.PACO_PORT_ANIM_UPDATED, s);
            }
          });
      };
      Dt.prototype.send = function (t, e) {
        if (
          !this.paused &&
          (t !== CABLES.PACO_VALUECHANGE || "+ create new one" !== e.v)
        )
          for (let i = 0; i < this.connectors.length; i++)
            this.connectors[i].send(t, e);
      };
      const Vt = function () {
        window.BroadcastChannel &&
          (this.bc = new BroadcastChannel("test_channel"));
      };
      (Vt.prototype.receive = function (t) {
        this.bc &&
          (this._log.log("init"), (this.bc.onmessage = t._receive.bind(t)));
      }),
        (Vt.prototype.send = function (t, e) {
          if (!this.bc) return;
          const i = {};
          (i.event = t), (i.vars = e), this.bc.postMessage(JSON.stringify(i));
        });
      const Gt = Object.assign(
        {
          EventTarget: W,
          EMBED: Lt,
          Link: St,
          Port: et,
          Op: Pt,
          Profiler: Ct,
          Patch: Ut,
          Instancing: Ft,
          Timer: pt,
          WEBAUDIO: Bt,
          Variable: function () {
            let t = null;
            const e = [];
            (this.onChanged = function (t) {
              e.push(t);
            }),
              (this.getValue = function () {
                return t;
              }),
              (this.setValue = function (e) {
                (t = e), this.emitChanged();
              }),
              (this.emitChanged = function () {
                for (let t = 0; t < e.length; t++) e[t]();
              });
          },
          LoadingStatus: Nt,
          now: _t,
          internalNow: gt,
        },
        r,
        s,
        n,
        a,
        o,
        c,
        u,
        a,
        l
      );
      e.default = Gt;
      (function () {
        return !this;
      })() || console.warn("not in strict mode: index core");
    },
  ]).default;
  //# sourceMappingURL=cables.min.js.map
  
  var CABLES = CABLES || {};
  CABLES.build = {
    timestamp: 1658229186222,
    created: "2022-07-19T11:13:06.222Z",
    git: {
      branch: "master",
      commit: "819fc0e7c02646be982b7338326b610a383cd8f6",
      date: "2022-07-19T11:09:39.000Z",
      message: "corelib",
    },
  };
  /*!
  @fileoverview gl-matrix - High performance matrix and vector operations
  @author Brandon Jones
  @author Colin MacKenzie IV
  @version 3.1.0
  
  Copyright (c) 2015-2019, Brandon Jones, Colin MacKenzie IV.
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
  
  */
  !(function (t, n) {
    "object" == typeof exports && "undefined" != typeof module
      ? n(exports)
      : "function" == typeof define && define.amd
      ? define(["exports"], n)
      : n(((t = t || self).glMatrix = {}));
  })(this, function (t) {
    "use strict";
    var n = 1e-6,
      a = "undefined" != typeof Float32Array ? Float32Array : Array,
      r = Math.random;
    var u = Math.PI / 180;
    Math.hypot ||
      (Math.hypot = function () {
        for (var t = 0, n = arguments.length; n--; )
          t += arguments[n] * arguments[n];
        return Math.sqrt(t);
      });
    var e = Object.freeze({
      EPSILON: n,
      get ARRAY_TYPE() {
        return a;
      },
      RANDOM: r,
      setMatrixArrayType: function (t) {
        a = t;
      },
      toRadian: function (t) {
        return t * u;
      },
      equals: function (t, a) {
        return Math.abs(t - a) <= n * Math.max(1, Math.abs(t), Math.abs(a));
      },
    });
    function o(t, n, a) {
      var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = a[0],
        c = a[1],
        h = a[2],
        s = a[3];
      return (
        (t[0] = r * i + e * c),
        (t[1] = u * i + o * c),
        (t[2] = r * h + e * s),
        (t[3] = u * h + o * s),
        t
      );
    }
    function i(t, n, a) {
      return (
        (t[0] = n[0] - a[0]),
        (t[1] = n[1] - a[1]),
        (t[2] = n[2] - a[2]),
        (t[3] = n[3] - a[3]),
        t
      );
    }
    var c = o,
      h = i,
      s = Object.freeze({
        create: function () {
          var t = new a(4);
          return (
            a != Float32Array && ((t[1] = 0), (t[2] = 0)),
            (t[0] = 1),
            (t[3] = 1),
            t
          );
        },
        clone: function (t) {
          var n = new a(4);
          return (n[0] = t[0]), (n[1] = t[1]), (n[2] = t[2]), (n[3] = t[3]), n;
        },
        copy: function (t, n) {
          return (t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), (t[3] = n[3]), t;
        },
        identity: function (t) {
          return (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 1), t;
        },
        fromValues: function (t, n, r, u) {
          var e = new a(4);
          return (e[0] = t), (e[1] = n), (e[2] = r), (e[3] = u), e;
        },
        set: function (t, n, a, r, u) {
          return (t[0] = n), (t[1] = a), (t[2] = r), (t[3] = u), t;
        },
        transpose: function (t, n) {
          if (t === n) {
            var a = n[1];
            (t[1] = n[2]), (t[2] = a);
          } else (t[0] = n[0]), (t[1] = n[2]), (t[2] = n[1]), (t[3] = n[3]);
          return t;
        },
        invert: function (t, n) {
          var a = n[0],
            r = n[1],
            u = n[2],
            e = n[3],
            o = a * e - u * r;
          return o
            ? ((o = 1 / o),
              (t[0] = e * o),
              (t[1] = -r * o),
              (t[2] = -u * o),
              (t[3] = a * o),
              t)
            : null;
        },
        adjoint: function (t, n) {
          var a = n[0];
          return (t[0] = n[3]), (t[1] = -n[1]), (t[2] = -n[2]), (t[3] = a), t;
        },
        determinant: function (t) {
          return t[0] * t[3] - t[2] * t[1];
        },
        multiply: o,
        rotate: function (t, n, a) {
          var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            i = Math.sin(a),
            c = Math.cos(a);
          return (
            (t[0] = r * c + e * i),
            (t[1] = u * c + o * i),
            (t[2] = r * -i + e * c),
            (t[3] = u * -i + o * c),
            t
          );
        },
        scale: function (t, n, a) {
          var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            i = a[0],
            c = a[1];
          return (
            (t[0] = r * i), (t[1] = u * i), (t[2] = e * c), (t[3] = o * c), t
          );
        },
        fromRotation: function (t, n) {
          var a = Math.sin(n),
            r = Math.cos(n);
          return (t[0] = r), (t[1] = a), (t[2] = -a), (t[3] = r), t;
        },
        fromScaling: function (t, n) {
          return (t[0] = n[0]), (t[1] = 0), (t[2] = 0), (t[3] = n[1]), t;
        },
        str: function (t) {
          return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
        },
        frob: function (t) {
          return Math.hypot(t[0], t[1], t[2], t[3]);
        },
        LDU: function (t, n, a, r) {
          return (
            (t[2] = r[2] / r[0]),
            (a[0] = r[0]),
            (a[1] = r[1]),
            (a[3] = r[3] - t[2] * a[1]),
            [t, n, a]
          );
        },
        add: function (t, n, a) {
          return (
            (t[0] = n[0] + a[0]),
            (t[1] = n[1] + a[1]),
            (t[2] = n[2] + a[2]),
            (t[3] = n[3] + a[3]),
            t
          );
        },
        subtract: i,
        exactEquals: function (t, n) {
          return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3];
        },
        equals: function (t, a) {
          var r = t[0],
            u = t[1],
            e = t[2],
            o = t[3],
            i = a[0],
            c = a[1],
            h = a[2],
            s = a[3];
          return (
            Math.abs(r - i) <= n * Math.max(1, Math.abs(r), Math.abs(i)) &&
            Math.abs(u - c) <= n * Math.max(1, Math.abs(u), Math.abs(c)) &&
            Math.abs(e - h) <= n * Math.max(1, Math.abs(e), Math.abs(h)) &&
            Math.abs(o - s) <= n * Math.max(1, Math.abs(o), Math.abs(s))
          );
        },
        multiplyScalar: function (t, n, a) {
          return (
            (t[0] = n[0] * a),
            (t[1] = n[1] * a),
            (t[2] = n[2] * a),
            (t[3] = n[3] * a),
            t
          );
        },
        multiplyScalarAndAdd: function (t, n, a, r) {
          return (
            (t[0] = n[0] + a[0] * r),
            (t[1] = n[1] + a[1] * r),
            (t[2] = n[2] + a[2] * r),
            (t[3] = n[3] + a[3] * r),
            t
          );
        },
        mul: c,
        sub: h,
      });
    function M(t, n, a) {
      var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = n[4],
        c = n[5],
        h = a[0],
        s = a[1],
        M = a[2],
        f = a[3],
        l = a[4],
        v = a[5];
      return (
        (t[0] = r * h + e * s),
        (t[1] = u * h + o * s),
        (t[2] = r * M + e * f),
        (t[3] = u * M + o * f),
        (t[4] = r * l + e * v + i),
        (t[5] = u * l + o * v + c),
        t
      );
    }
    function f(t, n, a) {
      return (
        (t[0] = n[0] - a[0]),
        (t[1] = n[1] - a[1]),
        (t[2] = n[2] - a[2]),
        (t[3] = n[3] - a[3]),
        (t[4] = n[4] - a[4]),
        (t[5] = n[5] - a[5]),
        t
      );
    }
    var l = M,
      v = f,
      b = Object.freeze({
        create: function () {
          var t = new a(6);
          return (
            a != Float32Array && ((t[1] = 0), (t[2] = 0), (t[4] = 0), (t[5] = 0)),
            (t[0] = 1),
            (t[3] = 1),
            t
          );
        },
        clone: function (t) {
          var n = new a(6);
          return (
            (n[0] = t[0]),
            (n[1] = t[1]),
            (n[2] = t[2]),
            (n[3] = t[3]),
            (n[4] = t[4]),
            (n[5] = t[5]),
            n
          );
        },
        copy: function (t, n) {
          return (
            (t[0] = n[0]),
            (t[1] = n[1]),
            (t[2] = n[2]),
            (t[3] = n[3]),
            (t[4] = n[4]),
            (t[5] = n[5]),
            t
          );
        },
        identity: function (t) {
          return (
            (t[0] = 1),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 1),
            (t[4] = 0),
            (t[5] = 0),
            t
          );
        },
        fromValues: function (t, n, r, u, e, o) {
          var i = new a(6);
          return (
            (i[0] = t),
            (i[1] = n),
            (i[2] = r),
            (i[3] = u),
            (i[4] = e),
            (i[5] = o),
            i
          );
        },
        set: function (t, n, a, r, u, e, o) {
          return (
            (t[0] = n),
            (t[1] = a),
            (t[2] = r),
            (t[3] = u),
            (t[4] = e),
            (t[5] = o),
            t
          );
        },
        invert: function (t, n) {
          var a = n[0],
            r = n[1],
            u = n[2],
            e = n[3],
            o = n[4],
            i = n[5],
            c = a * e - r * u;
          return c
            ? ((c = 1 / c),
              (t[0] = e * c),
              (t[1] = -r * c),
              (t[2] = -u * c),
              (t[3] = a * c),
              (t[4] = (u * i - e * o) * c),
              (t[5] = (r * o - a * i) * c),
              t)
            : null;
        },
        determinant: function (t) {
          return t[0] * t[3] - t[1] * t[2];
        },
        multiply: M,
        rotate: function (t, n, a) {
          var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            i = n[4],
            c = n[5],
            h = Math.sin(a),
            s = Math.cos(a);
          return (
            (t[0] = r * s + e * h),
            (t[1] = u * s + o * h),
            (t[2] = r * -h + e * s),
            (t[3] = u * -h + o * s),
            (t[4] = i),
            (t[5] = c),
            t
          );
        },
        scale: function (t, n, a) {
          var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            i = n[4],
            c = n[5],
            h = a[0],
            s = a[1];
          return (
            (t[0] = r * h),
            (t[1] = u * h),
            (t[2] = e * s),
            (t[3] = o * s),
            (t[4] = i),
            (t[5] = c),
            t
          );
        },
        translate: function (t, n, a) {
          var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            i = n[4],
            c = n[5],
            h = a[0],
            s = a[1];
          return (
            (t[0] = r),
            (t[1] = u),
            (t[2] = e),
            (t[3] = o),
            (t[4] = r * h + e * s + i),
            (t[5] = u * h + o * s + c),
            t
          );
        },
        fromRotation: function (t, n) {
          var a = Math.sin(n),
            r = Math.cos(n);
          return (
            (t[0] = r),
            (t[1] = a),
            (t[2] = -a),
            (t[3] = r),
            (t[4] = 0),
            (t[5] = 0),
            t
          );
        },
        fromScaling: function (t, n) {
          return (
            (t[0] = n[0]),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = n[1]),
            (t[4] = 0),
            (t[5] = 0),
            t
          );
        },
        fromTranslation: function (t, n) {
          return (
            (t[0] = 1),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 1),
            (t[4] = n[0]),
            (t[5] = n[1]),
            t
          );
        },
        str: function (t) {
          return (
            "mat2d(" +
            t[0] +
            ", " +
            t[1] +
            ", " +
            t[2] +
            ", " +
            t[3] +
            ", " +
            t[4] +
            ", " +
            t[5] +
            ")"
          );
        },
        frob: function (t) {
          return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], 1);
        },
        add: function (t, n, a) {
          return (
            (t[0] = n[0] + a[0]),
            (t[1] = n[1] + a[1]),
            (t[2] = n[2] + a[2]),
            (t[3] = n[3] + a[3]),
            (t[4] = n[4] + a[4]),
            (t[5] = n[5] + a[5]),
            t
          );
        },
        subtract: f,
        multiplyScalar: function (t, n, a) {
          return (
            (t[0] = n[0] * a),
            (t[1] = n[1] * a),
            (t[2] = n[2] * a),
            (t[3] = n[3] * a),
            (t[4] = n[4] * a),
            (t[5] = n[5] * a),
            t
          );
        },
        multiplyScalarAndAdd: function (t, n, a, r) {
          return (
            (t[0] = n[0] + a[0] * r),
            (t[1] = n[1] + a[1] * r),
            (t[2] = n[2] + a[2] * r),
            (t[3] = n[3] + a[3] * r),
            (t[4] = n[4] + a[4] * r),
            (t[5] = n[5] + a[5] * r),
            t
          );
        },
        exactEquals: function (t, n) {
          return (
            t[0] === n[0] &&
            t[1] === n[1] &&
            t[2] === n[2] &&
            t[3] === n[3] &&
            t[4] === n[4] &&
            t[5] === n[5]
          );
        },
        equals: function (t, a) {
          var r = t[0],
            u = t[1],
            e = t[2],
            o = t[3],
            i = t[4],
            c = t[5],
            h = a[0],
            s = a[1],
            M = a[2],
            f = a[3],
            l = a[4],
            v = a[5];
          return (
            Math.abs(r - h) <= n * Math.max(1, Math.abs(r), Math.abs(h)) &&
            Math.abs(u - s) <= n * Math.max(1, Math.abs(u), Math.abs(s)) &&
            Math.abs(e - M) <= n * Math.max(1, Math.abs(e), Math.abs(M)) &&
            Math.abs(o - f) <= n * Math.max(1, Math.abs(o), Math.abs(f)) &&
            Math.abs(i - l) <= n * Math.max(1, Math.abs(i), Math.abs(l)) &&
            Math.abs(c - v) <= n * Math.max(1, Math.abs(c), Math.abs(v))
          );
        },
        mul: l,
        sub: v,
      });
    function m() {
      var t = new a(9);
      return (
        a != Float32Array &&
          ((t[1] = 0),
          (t[2] = 0),
          (t[3] = 0),
          (t[5] = 0),
          (t[6] = 0),
          (t[7] = 0)),
        (t[0] = 1),
        (t[4] = 1),
        (t[8] = 1),
        t
      );
    }
    function d(t, n, a) {
      var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = n[4],
        c = n[5],
        h = n[6],
        s = n[7],
        M = n[8],
        f = a[0],
        l = a[1],
        v = a[2],
        b = a[3],
        m = a[4],
        d = a[5],
        x = a[6],
        p = a[7],
        y = a[8];
      return (
        (t[0] = f * r + l * o + v * h),
        (t[1] = f * u + l * i + v * s),
        (t[2] = f * e + l * c + v * M),
        (t[3] = b * r + m * o + d * h),
        (t[4] = b * u + m * i + d * s),
        (t[5] = b * e + m * c + d * M),
        (t[6] = x * r + p * o + y * h),
        (t[7] = x * u + p * i + y * s),
        (t[8] = x * e + p * c + y * M),
        t
      );
    }
    function x(t, n, a) {
      return (
        (t[0] = n[0] - a[0]),
        (t[1] = n[1] - a[1]),
        (t[2] = n[2] - a[2]),
        (t[3] = n[3] - a[3]),
        (t[4] = n[4] - a[4]),
        (t[5] = n[5] - a[5]),
        (t[6] = n[6] - a[6]),
        (t[7] = n[7] - a[7]),
        (t[8] = n[8] - a[8]),
        t
      );
    }
    var p = d,
      y = x,
      q = Object.freeze({
        create: m,
        fromMat4: function (t, n) {
          return (
            (t[0] = n[0]),
            (t[1] = n[1]),
            (t[2] = n[2]),
            (t[3] = n[4]),
            (t[4] = n[5]),
            (t[5] = n[6]),
            (t[6] = n[8]),
            (t[7] = n[9]),
            (t[8] = n[10]),
            t
          );
        },
        clone: function (t) {
          var n = new a(9);
          return (
            (n[0] = t[0]),
            (n[1] = t[1]),
            (n[2] = t[2]),
            (n[3] = t[3]),
            (n[4] = t[4]),
            (n[5] = t[5]),
            (n[6] = t[6]),
            (n[7] = t[7]),
            (n[8] = t[8]),
            n
          );
        },
        copy: function (t, n) {
          return (
            (t[0] = n[0]),
            (t[1] = n[1]),
            (t[2] = n[2]),
            (t[3] = n[3]),
            (t[4] = n[4]),
            (t[5] = n[5]),
            (t[6] = n[6]),
            (t[7] = n[7]),
            (t[8] = n[8]),
            t
          );
        },
        fromValues: function (t, n, r, u, e, o, i, c, h) {
          var s = new a(9);
          return (
            (s[0] = t),
            (s[1] = n),
            (s[2] = r),
            (s[3] = u),
            (s[4] = e),
            (s[5] = o),
            (s[6] = i),
            (s[7] = c),
            (s[8] = h),
            s
          );
        },
        set: function (t, n, a, r, u, e, o, i, c, h) {
          return (
            (t[0] = n),
            (t[1] = a),
            (t[2] = r),
            (t[3] = u),
            (t[4] = e),
            (t[5] = o),
            (t[6] = i),
            (t[7] = c),
            (t[8] = h),
            t
          );
        },
        identity: function (t) {
          return (
            (t[0] = 1),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = 1),
            (t[5] = 0),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = 1),
            t
          );
        },
        transpose: function (t, n) {
          if (t === n) {
            var a = n[1],
              r = n[2],
              u = n[5];
            (t[1] = n[3]),
              (t[2] = n[6]),
              (t[3] = a),
              (t[5] = n[7]),
              (t[6] = r),
              (t[7] = u);
          } else
            (t[0] = n[0]),
              (t[1] = n[3]),
              (t[2] = n[6]),
              (t[3] = n[1]),
              (t[4] = n[4]),
              (t[5] = n[7]),
              (t[6] = n[2]),
              (t[7] = n[5]),
              (t[8] = n[8]);
          return t;
        },
        invert: function (t, n) {
          var a = n[0],
            r = n[1],
            u = n[2],
            e = n[3],
            o = n[4],
            i = n[5],
            c = n[6],
            h = n[7],
            s = n[8],
            M = s * o - i * h,
            f = -s * e + i * c,
            l = h * e - o * c,
            v = a * M + r * f + u * l;
          return v
            ? ((v = 1 / v),
              (t[0] = M * v),
              (t[1] = (-s * r + u * h) * v),
              (t[2] = (i * r - u * o) * v),
              (t[3] = f * v),
              (t[4] = (s * a - u * c) * v),
              (t[5] = (-i * a + u * e) * v),
              (t[6] = l * v),
              (t[7] = (-h * a + r * c) * v),
              (t[8] = (o * a - r * e) * v),
              t)
            : null;
        },
        adjoint: function (t, n) {
          var a = n[0],
            r = n[1],
            u = n[2],
            e = n[3],
            o = n[4],
            i = n[5],
            c = n[6],
            h = n[7],
            s = n[8];
          return (
            (t[0] = o * s - i * h),
            (t[1] = u * h - r * s),
            (t[2] = r * i - u * o),
            (t[3] = i * c - e * s),
            (t[4] = a * s - u * c),
            (t[5] = u * e - a * i),
            (t[6] = e * h - o * c),
            (t[7] = r * c - a * h),
            (t[8] = a * o - r * e),
            t
          );
        },
        determinant: function (t) {
          var n = t[0],
            a = t[1],
            r = t[2],
            u = t[3],
            e = t[4],
            o = t[5],
            i = t[6],
            c = t[7],
            h = t[8];
          return n * (h * e - o * c) + a * (-h * u + o * i) + r * (c * u - e * i);
        },
        multiply: d,
        translate: function (t, n, a) {
          var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            i = n[4],
            c = n[5],
            h = n[6],
            s = n[7],
            M = n[8],
            f = a[0],
            l = a[1];
          return (
            (t[0] = r),
            (t[1] = u),
            (t[2] = e),
            (t[3] = o),
            (t[4] = i),
            (t[5] = c),
            (t[6] = f * r + l * o + h),
            (t[7] = f * u + l * i + s),
            (t[8] = f * e + l * c + M),
            t
          );
        },
        rotate: function (t, n, a) {
          var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3],
            i = n[4],
            c = n[5],
            h = n[6],
            s = n[7],
            M = n[8],
            f = Math.sin(a),
            l = Math.cos(a);
          return (
            (t[0] = l * r + f * o),
            (t[1] = l * u + f * i),
            (t[2] = l * e + f * c),
            (t[3] = l * o - f * r),
            (t[4] = l * i - f * u),
            (t[5] = l * c - f * e),
            (t[6] = h),
            (t[7] = s),
            (t[8] = M),
            t
          );
        },
        scale: function (t, n, a) {
          var r = a[0],
            u = a[1];
          return (
            (t[0] = r * n[0]),
            (t[1] = r * n[1]),
            (t[2] = r * n[2]),
            (t[3] = u * n[3]),
            (t[4] = u * n[4]),
            (t[5] = u * n[5]),
            (t[6] = n[6]),
            (t[7] = n[7]),
            (t[8] = n[8]),
            t
          );
        },
        fromTranslation: function (t, n) {
          return (
            (t[0] = 1),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = 1),
            (t[5] = 0),
            (t[6] = n[0]),
            (t[7] = n[1]),
            (t[8] = 1),
            t
          );
        },
        fromRotation: function (t, n) {
          var a = Math.sin(n),
            r = Math.cos(n);
          return (
            (t[0] = r),
            (t[1] = a),
            (t[2] = 0),
            (t[3] = -a),
            (t[4] = r),
            (t[5] = 0),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = 1),
            t
          );
        },
        fromScaling: function (t, n) {
          return (
            (t[0] = n[0]),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = n[1]),
            (t[5] = 0),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = 1),
            t
          );
        },
        fromMat2d: function (t, n) {
          return (
            (t[0] = n[0]),
            (t[1] = n[1]),
            (t[2] = 0),
            (t[3] = n[2]),
            (t[4] = n[3]),
            (t[5] = 0),
            (t[6] = n[4]),
            (t[7] = n[5]),
            (t[8] = 1),
            t
          );
        },
        fromQuat: function (t, n) {
          var a = n[0],
            r = n[1],
            u = n[2],
            e = n[3],
            o = a + a,
            i = r + r,
            c = u + u,
            h = a * o,
            s = r * o,
            M = r * i,
            f = u * o,
            l = u * i,
            v = u * c,
            b = e * o,
            m = e * i,
            d = e * c;
          return (
            (t[0] = 1 - M - v),
            (t[3] = s - d),
            (t[6] = f + m),
            (t[1] = s + d),
            (t[4] = 1 - h - v),
            (t[7] = l - b),
            (t[2] = f - m),
            (t[5] = l + b),
            (t[8] = 1 - h - M),
            t
          );
        },
        normalFromMat4: function (t, n) {
          var a = n[0],
            r = n[1],
            u = n[2],
            e = n[3],
            o = n[4],
            i = n[5],
            c = n[6],
            h = n[7],
            s = n[8],
            M = n[9],
            f = n[10],
            l = n[11],
            v = n[12],
            b = n[13],
            m = n[14],
            d = n[15],
            x = a * i - r * o,
            p = a * c - u * o,
            y = a * h - e * o,
            q = r * c - u * i,
            g = r * h - e * i,
            A = u * h - e * c,
            w = s * b - M * v,
            R = s * m - f * v,
            z = s * d - l * v,
            P = M * m - f * b,
            j = M * d - l * b,
            I = f * d - l * m,
            S = x * I - p * j + y * P + q * z - g * R + A * w;
          return S
            ? ((S = 1 / S),
              (t[0] = (i * I - c * j + h * P) * S),
              (t[1] = (c * z - o * I - h * R) * S),
              (t[2] = (o * j - i * z + h * w) * S),
              (t[3] = (u * j - r * I - e * P) * S),
              (t[4] = (a * I - u * z + e * R) * S),
              (t[5] = (r * z - a * j - e * w) * S),
              (t[6] = (b * A - m * g + d * q) * S),
              (t[7] = (m * y - v * A - d * p) * S),
              (t[8] = (v * g - b * y + d * x) * S),
              t)
            : null;
        },
        projection: function (t, n, a) {
          return (
            (t[0] = 2 / n),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = -2 / a),
            (t[5] = 0),
            (t[6] = -1),
            (t[7] = 1),
            (t[8] = 1),
            t
          );
        },
        str: function (t) {
          return (
            "mat3(" +
            t[0] +
            ", " +
            t[1] +
            ", " +
            t[2] +
            ", " +
            t[3] +
            ", " +
            t[4] +
            ", " +
            t[5] +
            ", " +
            t[6] +
            ", " +
            t[7] +
            ", " +
            t[8] +
            ")"
          );
        },
        frob: function (t) {
          return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8]);
        },
        add: function (t, n, a) {
          return (
            (t[0] = n[0] + a[0]),
            (t[1] = n[1] + a[1]),
            (t[2] = n[2] + a[2]),
            (t[3] = n[3] + a[3]),
            (t[4] = n[4] + a[4]),
            (t[5] = n[5] + a[5]),
            (t[6] = n[6] + a[6]),
            (t[7] = n[7] + a[7]),
            (t[8] = n[8] + a[8]),
            t
          );
        },
        subtract: x,
        multiplyScalar: function (t, n, a) {
          return (
            (t[0] = n[0] * a),
            (t[1] = n[1] * a),
            (t[2] = n[2] * a),
            (t[3] = n[3] * a),
            (t[4] = n[4] * a),
            (t[5] = n[5] * a),
            (t[6] = n[6] * a),
            (t[7] = n[7] * a),
            (t[8] = n[8] * a),
            t
          );
        },
        multiplyScalarAndAdd: function (t, n, a, r) {
          return (
            (t[0] = n[0] + a[0] * r),
            (t[1] = n[1] + a[1] * r),
            (t[2] = n[2] + a[2] * r),
            (t[3] = n[3] + a[3] * r),
            (t[4] = n[4] + a[4] * r),
            (t[5] = n[5] + a[5] * r),
            (t[6] = n[6] + a[6] * r),
            (t[7] = n[7] + a[7] * r),
            (t[8] = n[8] + a[8] * r),
            t
          );
        },
        exactEquals: function (t, n) {
          return (
            t[0] === n[0] &&
            t[1] === n[1] &&
            t[2] === n[2] &&
            t[3] === n[3] &&
            t[4] === n[4] &&
            t[5] === n[5] &&
            t[6] === n[6] &&
            t[7] === n[7] &&
            t[8] === n[8]
          );
        },
        equals: function (t, a) {
          var r = t[0],
            u = t[1],
            e = t[2],
            o = t[3],
            i = t[4],
            c = t[5],
            h = t[6],
            s = t[7],
            M = t[8],
            f = a[0],
            l = a[1],
            v = a[2],
            b = a[3],
            m = a[4],
            d = a[5],
            x = a[6],
            p = a[7],
            y = a[8];
          return (
            Math.abs(r - f) <= n * Math.max(1, Math.abs(r), Math.abs(f)) &&
            Math.abs(u - l) <= n * Math.max(1, Math.abs(u), Math.abs(l)) &&
            Math.abs(e - v) <= n * Math.max(1, Math.abs(e), Math.abs(v)) &&
            Math.abs(o - b) <= n * Math.max(1, Math.abs(o), Math.abs(b)) &&
            Math.abs(i - m) <= n * Math.max(1, Math.abs(i), Math.abs(m)) &&
            Math.abs(c - d) <= n * Math.max(1, Math.abs(c), Math.abs(d)) &&
            Math.abs(h - x) <= n * Math.max(1, Math.abs(h), Math.abs(x)) &&
            Math.abs(s - p) <= n * Math.max(1, Math.abs(s), Math.abs(p)) &&
            Math.abs(M - y) <= n * Math.max(1, Math.abs(M), Math.abs(y))
          );
        },
        mul: p,
        sub: y,
      });
    function g(t) {
      return (
        (t[0] = 1),
        (t[1] = 0),
        (t[2] = 0),
        (t[3] = 0),
        (t[4] = 0),
        (t[5] = 1),
        (t[6] = 0),
        (t[7] = 0),
        (t[8] = 0),
        (t[9] = 0),
        (t[10] = 1),
        (t[11] = 0),
        (t[12] = 0),
        (t[13] = 0),
        (t[14] = 0),
        (t[15] = 1),
        t
      );
    }
    function A(t, n, a) {
      var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = n[4],
        c = n[5],
        h = n[6],
        s = n[7],
        M = n[8],
        f = n[9],
        l = n[10],
        v = n[11],
        b = n[12],
        m = n[13],
        d = n[14],
        x = n[15],
        p = a[0],
        y = a[1],
        q = a[2],
        g = a[3];
      return (
        (t[0] = p * r + y * i + q * M + g * b),
        (t[1] = p * u + y * c + q * f + g * m),
        (t[2] = p * e + y * h + q * l + g * d),
        (t[3] = p * o + y * s + q * v + g * x),
        (p = a[4]),
        (y = a[5]),
        (q = a[6]),
        (g = a[7]),
        (t[4] = p * r + y * i + q * M + g * b),
        (t[5] = p * u + y * c + q * f + g * m),
        (t[6] = p * e + y * h + q * l + g * d),
        (t[7] = p * o + y * s + q * v + g * x),
        (p = a[8]),
        (y = a[9]),
        (q = a[10]),
        (g = a[11]),
        (t[8] = p * r + y * i + q * M + g * b),
        (t[9] = p * u + y * c + q * f + g * m),
        (t[10] = p * e + y * h + q * l + g * d),
        (t[11] = p * o + y * s + q * v + g * x),
        (p = a[12]),
        (y = a[13]),
        (q = a[14]),
        (g = a[15]),
        (t[12] = p * r + y * i + q * M + g * b),
        (t[13] = p * u + y * c + q * f + g * m),
        (t[14] = p * e + y * h + q * l + g * d),
        (t[15] = p * o + y * s + q * v + g * x),
        t
      );
    }
    function w(t, n, a) {
      var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = r + r,
        c = u + u,
        h = e + e,
        s = r * i,
        M = r * c,
        f = r * h,
        l = u * c,
        v = u * h,
        b = e * h,
        m = o * i,
        d = o * c,
        x = o * h;
      return (
        (t[0] = 1 - (l + b)),
        (t[1] = M + x),
        (t[2] = f - d),
        (t[3] = 0),
        (t[4] = M - x),
        (t[5] = 1 - (s + b)),
        (t[6] = v + m),
        (t[7] = 0),
        (t[8] = f + d),
        (t[9] = v - m),
        (t[10] = 1 - (s + l)),
        (t[11] = 0),
        (t[12] = a[0]),
        (t[13] = a[1]),
        (t[14] = a[2]),
        (t[15] = 1),
        t
      );
    }
    function R(t, n) {
      return (t[0] = n[12]), (t[1] = n[13]), (t[2] = n[14]), t;
    }
    function z(t, n) {
      var a = n[0],
        r = n[1],
        u = n[2],
        e = n[4],
        o = n[5],
        i = n[6],
        c = n[8],
        h = n[9],
        s = n[10];
      return (
        (t[0] = Math.hypot(a, r, u)),
        (t[1] = Math.hypot(e, o, i)),
        (t[2] = Math.hypot(c, h, s)),
        t
      );
    }
    function P(t, n) {
      var r = new a(3);
      z(r, n);
      var u = 1 / r[0],
        e = 1 / r[1],
        o = 1 / r[2],
        i = n[0] * u,
        c = n[1] * e,
        h = n[2] * o,
        s = n[4] * u,
        M = n[5] * e,
        f = n[6] * o,
        l = n[8] * u,
        v = n[9] * e,
        b = n[10] * o,
        m = i + M + b,
        d = 0;
      return (
        m > 0
          ? ((d = 2 * Math.sqrt(m + 1)),
            (t[3] = 0.25 * d),
            (t[0] = (f - v) / d),
            (t[1] = (l - h) / d),
            (t[2] = (c - s) / d))
          : i > M && i > b
          ? ((d = 2 * Math.sqrt(1 + i - M - b)),
            (t[3] = (f - v) / d),
            (t[0] = 0.25 * d),
            (t[1] = (c + s) / d),
            (t[2] = (l + h) / d))
          : M > b
          ? ((d = 2 * Math.sqrt(1 + M - i - b)),
            (t[3] = (l - h) / d),
            (t[0] = (c + s) / d),
            (t[1] = 0.25 * d),
            (t[2] = (f + v) / d))
          : ((d = 2 * Math.sqrt(1 + b - i - M)),
            (t[3] = (c - s) / d),
            (t[0] = (l + h) / d),
            (t[1] = (f + v) / d),
            (t[2] = 0.25 * d)),
        t
      );
    }
    function j(t, n, a) {
      return (
        (t[0] = n[0] - a[0]),
        (t[1] = n[1] - a[1]),
        (t[2] = n[2] - a[2]),
        (t[3] = n[3] - a[3]),
        (t[4] = n[4] - a[4]),
        (t[5] = n[5] - a[5]),
        (t[6] = n[6] - a[6]),
        (t[7] = n[7] - a[7]),
        (t[8] = n[8] - a[8]),
        (t[9] = n[9] - a[9]),
        (t[10] = n[10] - a[10]),
        (t[11] = n[11] - a[11]),
        (t[12] = n[12] - a[12]),
        (t[13] = n[13] - a[13]),
        (t[14] = n[14] - a[14]),
        (t[15] = n[15] - a[15]),
        t
      );
    }
    var I = A,
      S = j,
      E = Object.freeze({
        create: function () {
          var t = new a(16);
          return (
            a != Float32Array &&
              ((t[1] = 0),
              (t[2] = 0),
              (t[3] = 0),
              (t[4] = 0),
              (t[6] = 0),
              (t[7] = 0),
              (t[8] = 0),
              (t[9] = 0),
              (t[11] = 0),
              (t[12] = 0),
              (t[13] = 0),
              (t[14] = 0)),
            (t[0] = 1),
            (t[5] = 1),
            (t[10] = 1),
            (t[15] = 1),
            t
          );
        },
        clone: function (t) {
          var n = new a(16);
          return (
            (n[0] = t[0]),
            (n[1] = t[1]),
            (n[2] = t[2]),
            (n[3] = t[3]),
            (n[4] = t[4]),
            (n[5] = t[5]),
            (n[6] = t[6]),
            (n[7] = t[7]),
            (n[8] = t[8]),
            (n[9] = t[9]),
            (n[10] = t[10]),
            (n[11] = t[11]),
            (n[12] = t[12]),
            (n[13] = t[13]),
            (n[14] = t[14]),
            (n[15] = t[15]),
            n
          );
        },
        copy: function (t, n) {
          return (
            (t[0] = n[0]),
            (t[1] = n[1]),
            (t[2] = n[2]),
            (t[3] = n[3]),
            (t[4] = n[4]),
            (t[5] = n[5]),
            (t[6] = n[6]),
            (t[7] = n[7]),
            (t[8] = n[8]),
            (t[9] = n[9]),
            (t[10] = n[10]),
            (t[11] = n[11]),
            (t[12] = n[12]),
            (t[13] = n[13]),
            (t[14] = n[14]),
            (t[15] = n[15]),
            t
          );
        },
        fromValues: function (t, n, r, u, e, o, i, c, h, s, M, f, l, v, b, m) {
          var d = new a(16);
          return (
            (d[0] = t),
            (d[1] = n),
            (d[2] = r),
            (d[3] = u),
            (d[4] = e),
            (d[5] = o),
            (d[6] = i),
            (d[7] = c),
            (d[8] = h),
            (d[9] = s),
            (d[10] = M),
            (d[11] = f),
            (d[12] = l),
            (d[13] = v),
            (d[14] = b),
            (d[15] = m),
            d
          );
        },
        set: function (t, n, a, r, u, e, o, i, c, h, s, M, f, l, v, b, m) {
          return (
            (t[0] = n),
            (t[1] = a),
            (t[2] = r),
            (t[3] = u),
            (t[4] = e),
            (t[5] = o),
            (t[6] = i),
            (t[7] = c),
            (t[8] = h),
            (t[9] = s),
            (t[10] = M),
            (t[11] = f),
            (t[12] = l),
            (t[13] = v),
            (t[14] = b),
            (t[15] = m),
            t
          );
        },
        identity: g,
        transpose: function (t, n) {
          if (t === n) {
            var a = n[1],
              r = n[2],
              u = n[3],
              e = n[6],
              o = n[7],
              i = n[11];
            (t[1] = n[4]),
              (t[2] = n[8]),
              (t[3] = n[12]),
              (t[4] = a),
              (t[6] = n[9]),
              (t[7] = n[13]),
              (t[8] = r),
              (t[9] = e),
              (t[11] = n[14]),
              (t[12] = u),
              (t[13] = o),
              (t[14] = i);
          } else
            (t[0] = n[0]),
              (t[1] = n[4]),
              (t[2] = n[8]),
              (t[3] = n[12]),
              (t[4] = n[1]),
              (t[5] = n[5]),
              (t[6] = n[9]),
              (t[7] = n[13]),
              (t[8] = n[2]),
              (t[9] = n[6]),
              (t[10] = n[10]),
              (t[11] = n[14]),
              (t[12] = n[3]),
              (t[13] = n[7]),
              (t[14] = n[11]),
              (t[15] = n[15]);
          return t;
        },
        invert: function (t, n) {
          var a = n[0],
            r = n[1],
            u = n[2],
            e = n[3],
            o = n[4],
            i = n[5],
            c = n[6],
            h = n[7],
            s = n[8],
            M = n[9],
            f = n[10],
            l = n[11],
            v = n[12],
            b = n[13],
            m = n[14],
            d = n[15],
            x = a * i - r * o,
            p = a * c - u * o,
            y = a * h - e * o,
            q = r * c - u * i,
            g = r * h - e * i,
            A = u * h - e * c,
            w = s * b - M * v,
            R = s * m - f * v,
            z = s * d - l * v,
            P = M * m - f * b,
            j = M * d - l * b,
            I = f * d - l * m,
            S = x * I - p * j + y * P + q * z - g * R + A * w;
          return S
            ? ((S = 1 / S),
              (t[0] = (i * I - c * j + h * P) * S),
              (t[1] = (u * j - r * I - e * P) * S),
              (t[2] = (b * A - m * g + d * q) * S),
              (t[3] = (f * g - M * A - l * q) * S),
              (t[4] = (c * z - o * I - h * R) * S),
              (t[5] = (a * I - u * z + e * R) * S),
              (t[6] = (m * y - v * A - d * p) * S),
              (t[7] = (s * A - f * y + l * p) * S),
              (t[8] = (o * j - i * z + h * w) * S),
              (t[9] = (r * z - a * j - e * w) * S),
              (t[10] = (v * g - b * y + d * x) * S),
              (t[11] = (M * y - s * g - l * x) * S),
              (t[12] = (i * R - o * P - c * w) * S),
              (t[13] = (a * P - r * R + u * w) * S),
              (t[14] = (b * p - v * q - m * x) * S),
              (t[15] = (s * q - M * p + f * x) * S),
              t)
            : null;
        },
        adjoint: function (t, n) {
          var a = n[0],
            r = n[1],
            u = n[2],
            e = n[3],
            o = n[4],
            i = n[5],
            c = n[6],
            h = n[7],
            s = n[8],
            M = n[9],
            f = n[10],
            l = n[11],
            v = n[12],
            b = n[13],
            m = n[14],
            d = n[15];
          return (
            (t[0] =
              i * (f * d - l * m) - M * (c * d - h * m) + b * (c * l - h * f)),
            (t[1] = -(
              r * (f * d - l * m) -
              M * (u * d - e * m) +
              b * (u * l - e * f)
            )),
            (t[2] =
              r * (c * d - h * m) - i * (u * d - e * m) + b * (u * h - e * c)),
            (t[3] = -(
              r * (c * l - h * f) -
              i * (u * l - e * f) +
              M * (u * h - e * c)
            )),
            (t[4] = -(
              o * (f * d - l * m) -
              s * (c * d - h * m) +
              v * (c * l - h * f)
            )),
            (t[5] =
              a * (f * d - l * m) - s * (u * d - e * m) + v * (u * l - e * f)),
            (t[6] = -(
              a * (c * d - h * m) -
              o * (u * d - e * m) +
              v * (u * h - e * c)
            )),
            (t[7] =
              a * (c * l - h * f) - o * (u * l - e * f) + s * (u * h - e * c)),
            (t[8] =
              o * (M * d - l * b) - s * (i * d - h * b) + v * (i * l - h * M)),
            (t[9] = -(
              a * (M * d - l * b) -
              s * (r * d - e * b) +
              v * (r * l - e * M)
            )),
            (t[10] =
              a * (i * d - h * b) - o * (r * d - e * b) + v * (r * h - e * i)),
            (t[11] = -(
              a * (i * l - h * M) -
              o * (r * l - e * M) +
              s * (r * h - e * i)
            )),
            (t[12] = -(
              o * (M * m - f * b) -
              s * (i * m - c * b) +
              v * (i * f - c * M)
            )),
            (t[13] =
              a * (M * m - f * b) - s * (r * m - u * b) + v * (r * f - u * M)),
            (t[14] = -(
              a * (i * m - c * b) -
              o * (r * m - u * b) +
              v * (r * c - u * i)
            )),
            (t[15] =
              a * (i * f - c * M) - o * (r * f - u * M) + s * (r * c - u * i)),
            t
          );
        },
        determinant: function (t) {
          var n = t[0],
            a = t[1],
            r = t[2],
            u = t[3],
            e = t[4],
            o = t[5],
            i = t[6],
            c = t[7],
            h = t[8],
            s = t[9],
            M = t[10],
            f = t[11],
            l = t[12],
            v = t[13],
            b = t[14],
            m = t[15];
          return (
            (n * o - a * e) * (M * m - f * b) -
            (n * i - r * e) * (s * m - f * v) +
            (n * c - u * e) * (s * b - M * v) +
            (a * i - r * o) * (h * m - f * l) -
            (a * c - u * o) * (h * b - M * l) +
            (r * c - u * i) * (h * v - s * l)
          );
        },
        multiply: A,
        translate: function (t, n, a) {
          var r,
            u,
            e,
            o,
            i,
            c,
            h,
            s,
            M,
            f,
            l,
            v,
            b = a[0],
            m = a[1],
            d = a[2];
          return (
            n === t
              ? ((t[12] = n[0] * b + n[4] * m + n[8] * d + n[12]),
                (t[13] = n[1] * b + n[5] * m + n[9] * d + n[13]),
                (t[14] = n[2] * b + n[6] * m + n[10] * d + n[14]),
                (t[15] = n[3] * b + n[7] * m + n[11] * d + n[15]))
              : ((r = n[0]),
                (u = n[1]),
                (e = n[2]),
                (o = n[3]),
                (i = n[4]),
                (c = n[5]),
                (h = n[6]),
                (s = n[7]),
                (M = n[8]),
                (f = n[9]),
                (l = n[10]),
                (v = n[11]),
                (t[0] = r),
                (t[1] = u),
                (t[2] = e),
                (t[3] = o),
                (t[4] = i),
                (t[5] = c),
                (t[6] = h),
                (t[7] = s),
                (t[8] = M),
                (t[9] = f),
                (t[10] = l),
                (t[11] = v),
                (t[12] = r * b + i * m + M * d + n[12]),
                (t[13] = u * b + c * m + f * d + n[13]),
                (t[14] = e * b + h * m + l * d + n[14]),
                (t[15] = o * b + s * m + v * d + n[15])),
            t
          );
        },
        scale: function (t, n, a) {
          var r = a[0],
            u = a[1],
            e = a[2];
          return (
            (t[0] = n[0] * r),
            (t[1] = n[1] * r),
            (t[2] = n[2] * r),
            (t[3] = n[3] * r),
            (t[4] = n[4] * u),
            (t[5] = n[5] * u),
            (t[6] = n[6] * u),
            (t[7] = n[7] * u),
            (t[8] = n[8] * e),
            (t[9] = n[9] * e),
            (t[10] = n[10] * e),
            (t[11] = n[11] * e),
            (t[12] = n[12]),
            (t[13] = n[13]),
            (t[14] = n[14]),
            (t[15] = n[15]),
            t
          );
        },
        rotate: function (t, a, r, u) {
          var e,
            o,
            i,
            c,
            h,
            s,
            M,
            f,
            l,
            v,
            b,
            m,
            d,
            x,
            p,
            y,
            q,
            g,
            A,
            w,
            R,
            z,
            P,
            j,
            I = u[0],
            S = u[1],
            E = u[2],
            O = Math.hypot(I, S, E);
          return O < n
            ? null
            : ((I *= O = 1 / O),
              (S *= O),
              (E *= O),
              (e = Math.sin(r)),
              (i = 1 - (o = Math.cos(r))),
              (c = a[0]),
              (h = a[1]),
              (s = a[2]),
              (M = a[3]),
              (f = a[4]),
              (l = a[5]),
              (v = a[6]),
              (b = a[7]),
              (m = a[8]),
              (d = a[9]),
              (x = a[10]),
              (p = a[11]),
              (y = I * I * i + o),
              (q = S * I * i + E * e),
              (g = E * I * i - S * e),
              (A = I * S * i - E * e),
              (w = S * S * i + o),
              (R = E * S * i + I * e),
              (z = I * E * i + S * e),
              (P = S * E * i - I * e),
              (j = E * E * i + o),
              (t[0] = c * y + f * q + m * g),
              (t[1] = h * y + l * q + d * g),
              (t[2] = s * y + v * q + x * g),
              (t[3] = M * y + b * q + p * g),
              (t[4] = c * A + f * w + m * R),
              (t[5] = h * A + l * w + d * R),
              (t[6] = s * A + v * w + x * R),
              (t[7] = M * A + b * w + p * R),
              (t[8] = c * z + f * P + m * j),
              (t[9] = h * z + l * P + d * j),
              (t[10] = s * z + v * P + x * j),
              (t[11] = M * z + b * P + p * j),
              a !== t &&
                ((t[12] = a[12]),
                (t[13] = a[13]),
                (t[14] = a[14]),
                (t[15] = a[15])),
              t);
        },
        rotateX: function (t, n, a) {
          var r = Math.sin(a),
            u = Math.cos(a),
            e = n[4],
            o = n[5],
            i = n[6],
            c = n[7],
            h = n[8],
            s = n[9],
            M = n[10],
            f = n[11];
          return (
            n !== t &&
              ((t[0] = n[0]),
              (t[1] = n[1]),
              (t[2] = n[2]),
              (t[3] = n[3]),
              (t[12] = n[12]),
              (t[13] = n[13]),
              (t[14] = n[14]),
              (t[15] = n[15])),
            (t[4] = e * u + h * r),
            (t[5] = o * u + s * r),
            (t[6] = i * u + M * r),
            (t[7] = c * u + f * r),
            (t[8] = h * u - e * r),
            (t[9] = s * u - o * r),
            (t[10] = M * u - i * r),
            (t[11] = f * u - c * r),
            t
          );
        },
        rotateY: function (t, n, a) {
          var r = Math.sin(a),
            u = Math.cos(a),
            e = n[0],
            o = n[1],
            i = n[2],
            c = n[3],
            h = n[8],
            s = n[9],
            M = n[10],
            f = n[11];
          return (
            n !== t &&
              ((t[4] = n[4]),
              (t[5] = n[5]),
              (t[6] = n[6]),
              (t[7] = n[7]),
              (t[12] = n[12]),
              (t[13] = n[13]),
              (t[14] = n[14]),
              (t[15] = n[15])),
            (t[0] = e * u - h * r),
            (t[1] = o * u - s * r),
            (t[2] = i * u - M * r),
            (t[3] = c * u - f * r),
            (t[8] = e * r + h * u),
            (t[9] = o * r + s * u),
            (t[10] = i * r + M * u),
            (t[11] = c * r + f * u),
            t
          );
        },
        rotateZ: function (t, n, a) {
          var r = Math.sin(a),
            u = Math.cos(a),
            e = n[0],
            o = n[1],
            i = n[2],
            c = n[3],
            h = n[4],
            s = n[5],
            M = n[6],
            f = n[7];
          return (
            n !== t &&
              ((t[8] = n[8]),
              (t[9] = n[9]),
              (t[10] = n[10]),
              (t[11] = n[11]),
              (t[12] = n[12]),
              (t[13] = n[13]),
              (t[14] = n[14]),
              (t[15] = n[15])),
            (t[0] = e * u + h * r),
            (t[1] = o * u + s * r),
            (t[2] = i * u + M * r),
            (t[3] = c * u + f * r),
            (t[4] = h * u - e * r),
            (t[5] = s * u - o * r),
            (t[6] = M * u - i * r),
            (t[7] = f * u - c * r),
            t
          );
        },
        fromTranslation: function (t, n) {
          return (
            (t[0] = 1),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = 0),
            (t[5] = 1),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = 0),
            (t[9] = 0),
            (t[10] = 1),
            (t[11] = 0),
            (t[12] = n[0]),
            (t[13] = n[1]),
            (t[14] = n[2]),
            (t[15] = 1),
            t
          );
        },
        fromScaling: function (t, n) {
          return (
            (t[0] = n[0]),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = 0),
            (t[5] = n[1]),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = 0),
            (t[9] = 0),
            (t[10] = n[2]),
            (t[11] = 0),
            (t[12] = 0),
            (t[13] = 0),
            (t[14] = 0),
            (t[15] = 1),
            t
          );
        },
        fromRotation: function (t, a, r) {
          var u,
            e,
            o,
            i = r[0],
            c = r[1],
            h = r[2],
            s = Math.hypot(i, c, h);
          return s < n
            ? null
            : ((i *= s = 1 / s),
              (c *= s),
              (h *= s),
              (u = Math.sin(a)),
              (o = 1 - (e = Math.cos(a))),
              (t[0] = i * i * o + e),
              (t[1] = c * i * o + h * u),
              (t[2] = h * i * o - c * u),
              (t[3] = 0),
              (t[4] = i * c * o - h * u),
              (t[5] = c * c * o + e),
              (t[6] = h * c * o + i * u),
              (t[7] = 0),
              (t[8] = i * h * o + c * u),
              (t[9] = c * h * o - i * u),
              (t[10] = h * h * o + e),
              (t[11] = 0),
              (t[12] = 0),
              (t[13] = 0),
              (t[14] = 0),
              (t[15] = 1),
              t);
        },
        fromXRotation: function (t, n) {
          var a = Math.sin(n),
            r = Math.cos(n);
          return (
            (t[0] = 1),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = 0),
            (t[5] = r),
            (t[6] = a),
            (t[7] = 0),
            (t[8] = 0),
            (t[9] = -a),
            (t[10] = r),
            (t[11] = 0),
            (t[12] = 0),
            (t[13] = 0),
            (t[14] = 0),
            (t[15] = 1),
            t
          );
        },
        fromYRotation: function (t, n) {
          var a = Math.sin(n),
            r = Math.cos(n);
          return (
            (t[0] = r),
            (t[1] = 0),
            (t[2] = -a),
            (t[3] = 0),
            (t[4] = 0),
            (t[5] = 1),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = a),
            (t[9] = 0),
            (t[10] = r),
            (t[11] = 0),
            (t[12] = 0),
            (t[13] = 0),
            (t[14] = 0),
            (t[15] = 1),
            t
          );
        },
        fromZRotation: function (t, n) {
          var a = Math.sin(n),
            r = Math.cos(n);
          return (
            (t[0] = r),
            (t[1] = a),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = -a),
            (t[5] = r),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = 0),
            (t[9] = 0),
            (t[10] = 1),
            (t[11] = 0),
            (t[12] = 0),
            (t[13] = 0),
            (t[14] = 0),
            (t[15] = 1),
            t
          );
        },
        fromRotationTranslation: w,
        fromQuat2: function (t, n) {
          var r = new a(3),
            u = -n[0],
            e = -n[1],
            o = -n[2],
            i = n[3],
            c = n[4],
            h = n[5],
            s = n[6],
            M = n[7],
            f = u * u + e * e + o * o + i * i;
          return (
            f > 0
              ? ((r[0] = (2 * (c * i + M * u + h * o - s * e)) / f),
                (r[1] = (2 * (h * i + M * e + s * u - c * o)) / f),
                (r[2] = (2 * (s * i + M * o + c * e - h * u)) / f))
              : ((r[0] = 2 * (c * i + M * u + h * o - s * e)),
                (r[1] = 2 * (h * i + M * e + s * u - c * o)),
                (r[2] = 2 * (s * i + M * o + c * e - h * u))),
            w(t, n, r),
            t
          );
        },
        getTranslation: R,
        getScaling: z,
        getRotation: P,
        fromRotationTranslationScale: function (t, n, a, r) {
          var u = n[0],
            e = n[1],
            o = n[2],
            i = n[3],
            c = u + u,
            h = e + e,
            s = o + o,
            M = u * c,
            f = u * h,
            l = u * s,
            v = e * h,
            b = e * s,
            m = o * s,
            d = i * c,
            x = i * h,
            p = i * s,
            y = r[0],
            q = r[1],
            g = r[2];
          return (
            (t[0] = (1 - (v + m)) * y),
            (t[1] = (f + p) * y),
            (t[2] = (l - x) * y),
            (t[3] = 0),
            (t[4] = (f - p) * q),
            (t[5] = (1 - (M + m)) * q),
            (t[6] = (b + d) * q),
            (t[7] = 0),
            (t[8] = (l + x) * g),
            (t[9] = (b - d) * g),
            (t[10] = (1 - (M + v)) * g),
            (t[11] = 0),
            (t[12] = a[0]),
            (t[13] = a[1]),
            (t[14] = a[2]),
            (t[15] = 1),
            t
          );
        },
        fromRotationTranslationScaleOrigin: function (t, n, a, r, u) {
          var e = n[0],
            o = n[1],
            i = n[2],
            c = n[3],
            h = e + e,
            s = o + o,
            M = i + i,
            f = e * h,
            l = e * s,
            v = e * M,
            b = o * s,
            m = o * M,
            d = i * M,
            x = c * h,
            p = c * s,
            y = c * M,
            q = r[0],
            g = r[1],
            A = r[2],
            w = u[0],
            R = u[1],
            z = u[2],
            P = (1 - (b + d)) * q,
            j = (l + y) * q,
            I = (v - p) * q,
            S = (l - y) * g,
            E = (1 - (f + d)) * g,
            O = (m + x) * g,
            T = (v + p) * A,
            D = (m - x) * A,
            F = (1 - (f + b)) * A;
          return (
            (t[0] = P),
            (t[1] = j),
            (t[2] = I),
            (t[3] = 0),
            (t[4] = S),
            (t[5] = E),
            (t[6] = O),
            (t[7] = 0),
            (t[8] = T),
            (t[9] = D),
            (t[10] = F),
            (t[11] = 0),
            (t[12] = a[0] + w - (P * w + S * R + T * z)),
            (t[13] = a[1] + R - (j * w + E * R + D * z)),
            (t[14] = a[2] + z - (I * w + O * R + F * z)),
            (t[15] = 1),
            t
          );
        },
        fromQuat: function (t, n) {
          var a = n[0],
            r = n[1],
            u = n[2],
            e = n[3],
            o = a + a,
            i = r + r,
            c = u + u,
            h = a * o,
            s = r * o,
            M = r * i,
            f = u * o,
            l = u * i,
            v = u * c,
            b = e * o,
            m = e * i,
            d = e * c;
          return (
            (t[0] = 1 - M - v),
            (t[1] = s + d),
            (t[2] = f - m),
            (t[3] = 0),
            (t[4] = s - d),
            (t[5] = 1 - h - v),
            (t[6] = l + b),
            (t[7] = 0),
            (t[8] = f + m),
            (t[9] = l - b),
            (t[10] = 1 - h - M),
            (t[11] = 0),
            (t[12] = 0),
            (t[13] = 0),
            (t[14] = 0),
            (t[15] = 1),
            t
          );
        },
        frustum: function (t, n, a, r, u, e, o) {
          var i = 1 / (a - n),
            c = 1 / (u - r),
            h = 1 / (e - o);
          return (
            (t[0] = 2 * e * i),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = 0),
            (t[5] = 2 * e * c),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = (a + n) * i),
            (t[9] = (u + r) * c),
            (t[10] = (o + e) * h),
            (t[11] = -1),
            (t[12] = 0),
            (t[13] = 0),
            (t[14] = o * e * 2 * h),
            (t[15] = 0),
            t
          );
        },
        perspective: function (t, n, a, r, u) {
          var e,
            o = 1 / Math.tan(n / 2);
          return (
            (t[0] = o / a),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = 0),
            (t[5] = o),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = 0),
            (t[9] = 0),
            (t[11] = -1),
            (t[12] = 0),
            (t[13] = 0),
            (t[15] = 0),
            null != u && u !== 1 / 0
              ? ((e = 1 / (r - u)),
                (t[10] = (u + r) * e),
                (t[14] = 2 * u * r * e))
              : ((t[10] = -1), (t[14] = -2 * r)),
            t
          );
        },
        perspectiveFromFieldOfView: function (t, n, a, r) {
          var u = Math.tan((n.upDegrees * Math.PI) / 180),
            e = Math.tan((n.downDegrees * Math.PI) / 180),
            o = Math.tan((n.leftDegrees * Math.PI) / 180),
            i = Math.tan((n.rightDegrees * Math.PI) / 180),
            c = 2 / (o + i),
            h = 2 / (u + e);
          return (
            (t[0] = c),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = 0),
            (t[5] = h),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = -(o - i) * c * 0.5),
            (t[9] = (u - e) * h * 0.5),
            (t[10] = r / (a - r)),
            (t[11] = -1),
            (t[12] = 0),
            (t[13] = 0),
            (t[14] = (r * a) / (a - r)),
            (t[15] = 0),
            t
          );
        },
        ortho: function (t, n, a, r, u, e, o) {
          var i = 1 / (n - a),
            c = 1 / (r - u),
            h = 1 / (e - o);
          return (
            (t[0] = -2 * i),
            (t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[4] = 0),
            (t[5] = -2 * c),
            (t[6] = 0),
            (t[7] = 0),
            (t[8] = 0),
            (t[9] = 0),
            (t[10] = 2 * h),
            (t[11] = 0),
            (t[12] = (n + a) * i),
            (t[13] = (u + r) * c),
            (t[14] = (o + e) * h),
            (t[15] = 1),
            t
          );
        },
        lookAt: function (t, a, r, u) {
          var e,
            o,
            i,
            c,
            h,
            s,
            M,
            f,
            l,
            v,
            b = a[0],
            m = a[1],
            d = a[2],
            x = u[0],
            p = u[1],
            y = u[2],
            q = r[0],
            A = r[1],
            w = r[2];
          return Math.abs(b - q) < n && Math.abs(m - A) < n && Math.abs(d - w) < n
            ? g(t)
            : ((M = b - q),
              (f = m - A),
              (l = d - w),
              (e = p * (l *= v = 1 / Math.hypot(M, f, l)) - y * (f *= v)),
              (o = y * (M *= v) - x * l),
              (i = x * f - p * M),
              (v = Math.hypot(e, o, i))
                ? ((e *= v = 1 / v), (o *= v), (i *= v))
                : ((e = 0), (o = 0), (i = 0)),
              (c = f * i - l * o),
              (h = l * e - M * i),
              (s = M * o - f * e),
              (v = Math.hypot(c, h, s))
                ? ((c *= v = 1 / v), (h *= v), (s *= v))
                : ((c = 0), (h = 0), (s = 0)),
              (t[0] = e),
              (t[1] = c),
              (t[2] = M),
              (t[3] = 0),
              (t[4] = o),
              (t[5] = h),
              (t[6] = f),
              (t[7] = 0),
              (t[8] = i),
              (t[9] = s),
              (t[10] = l),
              (t[11] = 0),
              (t[12] = -(e * b + o * m + i * d)),
              (t[13] = -(c * b + h * m + s * d)),
              (t[14] = -(M * b + f * m + l * d)),
              (t[15] = 1),
              t);
        },
        targetTo: function (t, n, a, r) {
          var u = n[0],
            e = n[1],
            o = n[2],
            i = r[0],
            c = r[1],
            h = r[2],
            s = u - a[0],
            M = e - a[1],
            f = o - a[2],
            l = s * s + M * M + f * f;
          l > 0 && ((s *= l = 1 / Math.sqrt(l)), (M *= l), (f *= l));
          var v = c * f - h * M,
            b = h * s - i * f,
            m = i * M - c * s;
          return (
            (l = v * v + b * b + m * m) > 0 &&
              ((v *= l = 1 / Math.sqrt(l)), (b *= l), (m *= l)),
            (t[0] = v),
            (t[1] = b),
            (t[2] = m),
            (t[3] = 0),
            (t[4] = M * m - f * b),
            (t[5] = f * v - s * m),
            (t[6] = s * b - M * v),
            (t[7] = 0),
            (t[8] = s),
            (t[9] = M),
            (t[10] = f),
            (t[11] = 0),
            (t[12] = u),
            (t[13] = e),
            (t[14] = o),
            (t[15] = 1),
            t
          );
        },
        str: function (t) {
          return (
            "mat4(" +
            t[0] +
            ", " +
            t[1] +
            ", " +
            t[2] +
            ", " +
            t[3] +
            ", " +
            t[4] +
            ", " +
            t[5] +
            ", " +
            t[6] +
            ", " +
            t[7] +
            ", " +
            t[8] +
            ", " +
            t[9] +
            ", " +
            t[10] +
            ", " +
            t[11] +
            ", " +
            t[12] +
            ", " +
            t[13] +
            ", " +
            t[14] +
            ", " +
            t[15] +
            ")"
          );
        },
        frob: function (t) {
          return Math.hypot(
            t[0],
            t[1],
            t[3],
            t[4],
            t[5],
            t[6],
            t[7],
            t[8],
            t[9],
            t[10],
            t[11],
            t[12],
            t[13],
            t[14],
            t[15]
          );
        },
        add: function (t, n, a) {
          return (
            (t[0] = n[0] + a[0]),
            (t[1] = n[1] + a[1]),
            (t[2] = n[2] + a[2]),
            (t[3] = n[3] + a[3]),
            (t[4] = n[4] + a[4]),
            (t[5] = n[5] + a[5]),
            (t[6] = n[6] + a[6]),
            (t[7] = n[7] + a[7]),
            (t[8] = n[8] + a[8]),
            (t[9] = n[9] + a[9]),
            (t[10] = n[10] + a[10]),
            (t[11] = n[11] + a[11]),
            (t[12] = n[12] + a[12]),
            (t[13] = n[13] + a[13]),
            (t[14] = n[14] + a[14]),
            (t[15] = n[15] + a[15]),
            t
          );
        },
        subtract: j,
        multiplyScalar: function (t, n, a) {
          return (
            (t[0] = n[0] * a),
            (t[1] = n[1] * a),
            (t[2] = n[2] * a),
            (t[3] = n[3] * a),
            (t[4] = n[4] * a),
            (t[5] = n[5] * a),
            (t[6] = n[6] * a),
            (t[7] = n[7] * a),
            (t[8] = n[8] * a),
            (t[9] = n[9] * a),
            (t[10] = n[10] * a),
            (t[11] = n[11] * a),
            (t[12] = n[12] * a),
            (t[13] = n[13] * a),
            (t[14] = n[14] * a),
            (t[15] = n[15] * a),
            t
          );
        },
        multiplyScalarAndAdd: function (t, n, a, r) {
          return (
            (t[0] = n[0] + a[0] * r),
            (t[1] = n[1] + a[1] * r),
            (t[2] = n[2] + a[2] * r),
            (t[3] = n[3] + a[3] * r),
            (t[4] = n[4] + a[4] * r),
            (t[5] = n[5] + a[5] * r),
            (t[6] = n[6] + a[6] * r),
            (t[7] = n[7] + a[7] * r),
            (t[8] = n[8] + a[8] * r),
            (t[9] = n[9] + a[9] * r),
            (t[10] = n[10] + a[10] * r),
            (t[11] = n[11] + a[11] * r),
            (t[12] = n[12] + a[12] * r),
            (t[13] = n[13] + a[13] * r),
            (t[14] = n[14] + a[14] * r),
            (t[15] = n[15] + a[15] * r),
            t
          );
        },
        exactEquals: function (t, n) {
          return (
            t[0] === n[0] &&
            t[1] === n[1] &&
            t[2] === n[2] &&
            t[3] === n[3] &&
            t[4] === n[4] &&
            t[5] === n[5] &&
            t[6] === n[6] &&
            t[7] === n[7] &&
            t[8] === n[8] &&
            t[9] === n[9] &&
            t[10] === n[10] &&
            t[11] === n[11] &&
            t[12] === n[12] &&
            t[13] === n[13] &&
            t[14] === n[14] &&
            t[15] === n[15]
          );
        },
        equals: function (t, a) {
          var r = t[0],
            u = t[1],
            e = t[2],
            o = t[3],
            i = t[4],
            c = t[5],
            h = t[6],
            s = t[7],
            M = t[8],
            f = t[9],
            l = t[10],
            v = t[11],
            b = t[12],
            m = t[13],
            d = t[14],
            x = t[15],
            p = a[0],
            y = a[1],
            q = a[2],
            g = a[3],
            A = a[4],
            w = a[5],
            R = a[6],
            z = a[7],
            P = a[8],
            j = a[9],
            I = a[10],
            S = a[11],
            E = a[12],
            O = a[13],
            T = a[14],
            D = a[15];
          return (
            Math.abs(r - p) <= n * Math.max(1, Math.abs(r), Math.abs(p)) &&
            Math.abs(u - y) <= n * Math.max(1, Math.abs(u), Math.abs(y)) &&
            Math.abs(e - q) <= n * Math.max(1, Math.abs(e), Math.abs(q)) &&
            Math.abs(o - g) <= n * Math.max(1, Math.abs(o), Math.abs(g)) &&
            Math.abs(i - A) <= n * Math.max(1, Math.abs(i), Math.abs(A)) &&
            Math.abs(c - w) <= n * Math.max(1, Math.abs(c), Math.abs(w)) &&
            Math.abs(h - R) <= n * Math.max(1, Math.abs(h), Math.abs(R)) &&
            Math.abs(s - z) <= n * Math.max(1, Math.abs(s), Math.abs(z)) &&
            Math.abs(M - P) <= n * Math.max(1, Math.abs(M), Math.abs(P)) &&
            Math.abs(f - j) <= n * Math.max(1, Math.abs(f), Math.abs(j)) &&
            Math.abs(l - I) <= n * Math.max(1, Math.abs(l), Math.abs(I)) &&
            Math.abs(v - S) <= n * Math.max(1, Math.abs(v), Math.abs(S)) &&
            Math.abs(b - E) <= n * Math.max(1, Math.abs(b), Math.abs(E)) &&
            Math.abs(m - O) <= n * Math.max(1, Math.abs(m), Math.abs(O)) &&
            Math.abs(d - T) <= n * Math.max(1, Math.abs(d), Math.abs(T)) &&
            Math.abs(x - D) <= n * Math.max(1, Math.abs(x), Math.abs(D))
          );
        },
        mul: I,
        sub: S,
      });
    function O() {
      var t = new a(3);
      return a != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0)), t;
    }
    function T(t) {
      var n = t[0],
        a = t[1],
        r = t[2];
      return Math.hypot(n, a, r);
    }
    function D(t, n, r) {
      var u = new a(3);
      return (u[0] = t), (u[1] = n), (u[2] = r), u;
    }
    function F(t, n, a) {
      return (t[0] = n[0] - a[0]), (t[1] = n[1] - a[1]), (t[2] = n[2] - a[2]), t;
    }
    function L(t, n, a) {
      return (t[0] = n[0] * a[0]), (t[1] = n[1] * a[1]), (t[2] = n[2] * a[2]), t;
    }
    function V(t, n, a) {
      return (t[0] = n[0] / a[0]), (t[1] = n[1] / a[1]), (t[2] = n[2] / a[2]), t;
    }
    function Q(t, n) {
      var a = n[0] - t[0],
        r = n[1] - t[1],
        u = n[2] - t[2];
      return Math.hypot(a, r, u);
    }
    function Y(t, n) {
      var a = n[0] - t[0],
        r = n[1] - t[1],
        u = n[2] - t[2];
      return a * a + r * r + u * u;
    }
    function X(t) {
      var n = t[0],
        a = t[1],
        r = t[2];
      return n * n + a * a + r * r;
    }
    function Z(t, n) {
      var a = n[0],
        r = n[1],
        u = n[2],
        e = a * a + r * r + u * u;
      return (
        e > 0 && (e = 1 / Math.sqrt(e)),
        (t[0] = n[0] * e),
        (t[1] = n[1] * e),
        (t[2] = n[2] * e),
        t
      );
    }
    function _(t, n) {
      return t[0] * n[0] + t[1] * n[1] + t[2] * n[2];
    }
    function B(t, n, a) {
      var r = n[0],
        u = n[1],
        e = n[2],
        o = a[0],
        i = a[1],
        c = a[2];
      return (
        (t[0] = u * c - e * i), (t[1] = e * o - r * c), (t[2] = r * i - u * o), t
      );
    }
    var N,
      k = F,
      U = L,
      W = V,
      C = Q,
      G = Y,
      H = T,
      J = X,
      K =
        ((N = O()),
        function (t, n, a, r, u, e) {
          var o, i;
          for (
            n || (n = 3),
              a || (a = 0),
              i = r ? Math.min(r * n + a, t.length) : t.length,
              o = a;
            o < i;
            o += n
          )
            (N[0] = t[o]),
              (N[1] = t[o + 1]),
              (N[2] = t[o + 2]),
              u(N, N, e),
              (t[o] = N[0]),
              (t[o + 1] = N[1]),
              (t[o + 2] = N[2]);
          return t;
        }),
      $ = Object.freeze({
        create: O,
        clone: function (t) {
          var n = new a(3);
          return (n[0] = t[0]), (n[1] = t[1]), (n[2] = t[2]), n;
        },
        length: T,
        fromValues: D,
        copy: function (t, n) {
          return (t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), t;
        },
        set: function (t, n, a, r) {
          return (t[0] = n), (t[1] = a), (t[2] = r), t;
        },
        add: function (t, n, a) {
          return (
            (t[0] = n[0] + a[0]), (t[1] = n[1] + a[1]), (t[2] = n[2] + a[2]), t
          );
        },
        subtract: F,
        multiply: L,
        divide: V,
        ceil: function (t, n) {
          return (
            (t[0] = Math.ceil(n[0])),
            (t[1] = Math.ceil(n[1])),
            (t[2] = Math.ceil(n[2])),
            t
          );
        },
        floor: function (t, n) {
          return (
            (t[0] = Math.floor(n[0])),
            (t[1] = Math.floor(n[1])),
            (t[2] = Math.floor(n[2])),
            t
          );
        },
        min: function (t, n, a) {
          return (
            (t[0] = Math.min(n[0], a[0])),
            (t[1] = Math.min(n[1], a[1])),
            (t[2] = Math.min(n[2], a[2])),
            t
          );
        },
        max: function (t, n, a) {
          return (
            (t[0] = Math.max(n[0], a[0])),
            (t[1] = Math.max(n[1], a[1])),
            (t[2] = Math.max(n[2], a[2])),
            t
          );
        },
        round: function (t, n) {
          return (
            (t[0] = Math.round(n[0])),
            (t[1] = Math.round(n[1])),
            (t[2] = Math.round(n[2])),
            t
          );
        },
        scale: function (t, n, a) {
          return (t[0] = n[0] * a), (t[1] = n[1] * a), (t[2] = n[2] * a), t;
        },
        scaleAndAdd: function (t, n, a, r) {
          return (
            (t[0] = n[0] + a[0] * r),
            (t[1] = n[1] + a[1] * r),
            (t[2] = n[2] + a[2] * r),
            t
          );
        },
        distance: Q,
        squaredDistance: Y,
        squaredLength: X,
        negate: function (t, n) {
          return (t[0] = -n[0]), (t[1] = -n[1]), (t[2] = -n[2]), t;
        },
        inverse: function (t, n) {
          return (t[0] = 1 / n[0]), (t[1] = 1 / n[1]), (t[2] = 1 / n[2]), t;
        },
        normalize: Z,
        dot: _,
        cross: B,
        lerp: function (t, n, a, r) {
          var u = n[0],
            e = n[1],
            o = n[2];
          return (
            (t[0] = u + r * (a[0] - u)),
            (t[1] = e + r * (a[1] - e)),
            (t[2] = o + r * (a[2] - o)),
            t
          );
        },
        hermite: function (t, n, a, r, u, e) {
          var o = e * e,
            i = o * (2 * e - 3) + 1,
            c = o * (e - 2) + e,
            h = o * (e - 1),
            s = o * (3 - 2 * e);
          return (
            (t[0] = n[0] * i + a[0] * c + r[0] * h + u[0] * s),
            (t[1] = n[1] * i + a[1] * c + r[1] * h + u[1] * s),
            (t[2] = n[2] * i + a[2] * c + r[2] * h + u[2] * s),
            t
          );
        },
        bezier: function (t, n, a, r, u, e) {
          var o = 1 - e,
            i = o * o,
            c = e * e,
            h = i * o,
            s = 3 * e * i,
            M = 3 * c * o,
            f = c * e;
          return (
            (t[0] = n[0] * h + a[0] * s + r[0] * M + u[0] * f),
            (t[1] = n[1] * h + a[1] * s + r[1] * M + u[1] * f),
            (t[2] = n[2] * h + a[2] * s + r[2] * M + u[2] * f),
            t
          );
        },
        random: function (t, n) {
          n = n || 1;
          var a = 2 * r() * Math.PI,
            u = 2 * r() - 1,
            e = Math.sqrt(1 - u * u) * n;
          return (
            (t[0] = Math.cos(a) * e), (t[1] = Math.sin(a) * e), (t[2] = u * n), t
          );
        },
        transformMat4: function (t, n, a) {
          var r = n[0],
            u = n[1],
            e = n[2],
            o = a[3] * r + a[7] * u + a[11] * e + a[15];
          return (
            (o = o || 1),
            (t[0] = (a[0] * r + a[4] * u + a[8] * e + a[12]) / o),
            (t[1] = (a[1] * r + a[5] * u + a[9] * e + a[13]) / o),
            (t[2] = (a[2] * r + a[6] * u + a[10] * e + a[14]) / o),
            t
          );
        },
        transformMat3: function (t, n, a) {
          var r = n[0],
            u = n[1],
            e = n[2];
          return (
            (t[0] = r * a[0] + u * a[3] + e * a[6]),
            (t[1] = r * a[1] + u * a[4] + e * a[7]),
            (t[2] = r * a[2] + u * a[5] + e * a[8]),
            t
          );
        },
        transformQuat: function (t, n, a) {
          var r = a[0],
            u = a[1],
            e = a[2],
            o = a[3],
            i = n[0],
            c = n[1],
            h = n[2],
            s = u * h - e * c,
            M = e * i - r * h,
            f = r * c - u * i,
            l = u * f - e * M,
            v = e * s - r * f,
            b = r * M - u * s,
            m = 2 * o;
          return (
            (s *= m),
            (M *= m),
            (f *= m),
            (l *= 2),
            (v *= 2),
            (b *= 2),
            (t[0] = i + s + l),
            (t[1] = c + M + v),
            (t[2] = h + f + b),
            t
          );
        },
        rotateX: function (t, n, a, r) {
          var u = [],
            e = [];
          return (
            (u[0] = n[0] - a[0]),
            (u[1] = n[1] - a[1]),
            (u[2] = n[2] - a[2]),
            (e[0] = u[0]),
            (e[1] = u[1] * Math.cos(r) - u[2] * Math.sin(r)),
            (e[2] = u[1] * Math.sin(r) + u[2] * Math.cos(r)),
            (t[0] = e[0] + a[0]),
            (t[1] = e[1] + a[1]),
            (t[2] = e[2] + a[2]),
            t
          );
        },
        rotateY: function (t, n, a, r) {
          var u = [],
            e = [];
          return (
            (u[0] = n[0] - a[0]),
            (u[1] = n[1] - a[1]),
            (u[2] = n[2] - a[2]),
            (e[0] = u[2] * Math.sin(r) + u[0] * Math.cos(r)),
            (e[1] = u[1]),
            (e[2] = u[2] * Math.cos(r) - u[0] * Math.sin(r)),
            (t[0] = e[0] + a[0]),
            (t[1] = e[1] + a[1]),
            (t[2] = e[2] + a[2]),
            t
          );
        },
        rotateZ: function (t, n, a, r) {
          var u = [],
            e = [];
          return (
            (u[0] = n[0] - a[0]),
            (u[1] = n[1] - a[1]),
            (u[2] = n[2] - a[2]),
            (e[0] = u[0] * Math.cos(r) - u[1] * Math.sin(r)),
            (e[1] = u[0] * Math.sin(r) + u[1] * Math.cos(r)),
            (e[2] = u[2]),
            (t[0] = e[0] + a[0]),
            (t[1] = e[1] + a[1]),
            (t[2] = e[2] + a[2]),
            t
          );
        },
        angle: function (t, n) {
          var a = D(t[0], t[1], t[2]),
            r = D(n[0], n[1], n[2]);
          Z(a, a), Z(r, r);
          var u = _(a, r);
          return u > 1 ? 0 : u < -1 ? Math.PI : Math.acos(u);
        },
        zero: function (t) {
          return (t[0] = 0), (t[1] = 0), (t[2] = 0), t;
        },
        str: function (t) {
          return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
        },
        exactEquals: function (t, n) {
          return t[0] === n[0] && t[1] === n[1] && t[2] === n[2];
        },
        equals: function (t, a) {
          var r = t[0],
            u = t[1],
            e = t[2],
            o = a[0],
            i = a[1],
            c = a[2];
          return (
            Math.abs(r - o) <= n * Math.max(1, Math.abs(r), Math.abs(o)) &&
            Math.abs(u - i) <= n * Math.max(1, Math.abs(u), Math.abs(i)) &&
            Math.abs(e - c) <= n * Math.max(1, Math.abs(e), Math.abs(c))
          );
        },
        sub: k,
        mul: U,
        div: W,
        dist: C,
        sqrDist: G,
        len: H,
        sqrLen: J,
        forEach: K,
      });
    function tt() {
      var t = new a(4);
      return (
        a != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 0)), t
      );
    }
    function nt(t) {
      var n = new a(4);
      return (n[0] = t[0]), (n[1] = t[1]), (n[2] = t[2]), (n[3] = t[3]), n;
    }
    function at(t, n, r, u) {
      var e = new a(4);
      return (e[0] = t), (e[1] = n), (e[2] = r), (e[3] = u), e;
    }
    function rt(t, n) {
      return (t[0] = n[0]), (t[1] = n[1]), (t[2] = n[2]), (t[3] = n[3]), t;
    }
    function ut(t, n, a, r, u) {
      return (t[0] = n), (t[1] = a), (t[2] = r), (t[3] = u), t;
    }
    function et(t, n, a) {
      return (
        (t[0] = n[0] + a[0]),
        (t[1] = n[1] + a[1]),
        (t[2] = n[2] + a[2]),
        (t[3] = n[3] + a[3]),
        t
      );
    }
    function ot(t, n, a) {
      return (
        (t[0] = n[0] - a[0]),
        (t[1] = n[1] - a[1]),
        (t[2] = n[2] - a[2]),
        (t[3] = n[3] - a[3]),
        t
      );
    }
    function it(t, n, a) {
      return (
        (t[0] = n[0] * a[0]),
        (t[1] = n[1] * a[1]),
        (t[2] = n[2] * a[2]),
        (t[3] = n[3] * a[3]),
        t
      );
    }
    function ct(t, n, a) {
      return (
        (t[0] = n[0] / a[0]),
        (t[1] = n[1] / a[1]),
        (t[2] = n[2] / a[2]),
        (t[3] = n[3] / a[3]),
        t
      );
    }
    function ht(t, n, a) {
      return (
        (t[0] = n[0] * a),
        (t[1] = n[1] * a),
        (t[2] = n[2] * a),
        (t[3] = n[3] * a),
        t
      );
    }
    function st(t, n) {
      var a = n[0] - t[0],
        r = n[1] - t[1],
        u = n[2] - t[2],
        e = n[3] - t[3];
      return Math.hypot(a, r, u, e);
    }
    function Mt(t, n) {
      var a = n[0] - t[0],
        r = n[1] - t[1],
        u = n[2] - t[2],
        e = n[3] - t[3];
      return a * a + r * r + u * u + e * e;
    }
    function ft(t) {
      var n = t[0],
        a = t[1],
        r = t[2],
        u = t[3];
      return Math.hypot(n, a, r, u);
    }
    function lt(t) {
      var n = t[0],
        a = t[1],
        r = t[2],
        u = t[3];
      return n * n + a * a + r * r + u * u;
    }
    function vt(t, n) {
      var a = n[0],
        r = n[1],
        u = n[2],
        e = n[3],
        o = a * a + r * r + u * u + e * e;
      return (
        o > 0 && (o = 1 / Math.sqrt(o)),
        (t[0] = a * o),
        (t[1] = r * o),
        (t[2] = u * o),
        (t[3] = e * o),
        t
      );
    }
    function bt(t, n) {
      return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] + t[3] * n[3];
    }
    function mt(t, n, a, r) {
      var u = n[0],
        e = n[1],
        o = n[2],
        i = n[3];
      return (
        (t[0] = u + r * (a[0] - u)),
        (t[1] = e + r * (a[1] - e)),
        (t[2] = o + r * (a[2] - o)),
        (t[3] = i + r * (a[3] - i)),
        t
      );
    }
    function dt(t, n) {
      return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3];
    }
    function xt(t, a) {
      var r = t[0],
        u = t[1],
        e = t[2],
        o = t[3],
        i = a[0],
        c = a[1],
        h = a[2],
        s = a[3];
      return (
        Math.abs(r - i) <= n * Math.max(1, Math.abs(r), Math.abs(i)) &&
        Math.abs(u - c) <= n * Math.max(1, Math.abs(u), Math.abs(c)) &&
        Math.abs(e - h) <= n * Math.max(1, Math.abs(e), Math.abs(h)) &&
        Math.abs(o - s) <= n * Math.max(1, Math.abs(o), Math.abs(s))
      );
    }
    var pt = ot,
      yt = it,
      qt = ct,
      gt = st,
      At = Mt,
      wt = ft,
      Rt = lt,
      zt = (function () {
        var t = tt();
        return function (n, a, r, u, e, o) {
          var i, c;
          for (
            a || (a = 4),
              r || (r = 0),
              c = u ? Math.min(u * a + r, n.length) : n.length,
              i = r;
            i < c;
            i += a
          )
            (t[0] = n[i]),
              (t[1] = n[i + 1]),
              (t[2] = n[i + 2]),
              (t[3] = n[i + 3]),
              e(t, t, o),
              (n[i] = t[0]),
              (n[i + 1] = t[1]),
              (n[i + 2] = t[2]),
              (n[i + 3] = t[3]);
          return n;
        };
      })(),
      Pt = Object.freeze({
        create: tt,
        clone: nt,
        fromValues: at,
        copy: rt,
        set: ut,
        add: et,
        subtract: ot,
        multiply: it,
        divide: ct,
        ceil: function (t, n) {
          return (
            (t[0] = Math.ceil(n[0])),
            (t[1] = Math.ceil(n[1])),
            (t[2] = Math.ceil(n[2])),
            (t[3] = Math.ceil(n[3])),
            t
          );
        },
        floor: function (t, n) {
          return (
            (t[0] = Math.floor(n[0])),
            (t[1] = Math.floor(n[1])),
            (t[2] = Math.floor(n[2])),
            (t[3] = Math.floor(n[3])),
            t
          );
        },
        min: function (t, n, a) {
          return (
            (t[0] = Math.min(n[0], a[0])),
            (t[1] = Math.min(n[1], a[1])),
            (t[2] = Math.min(n[2], a[2])),
            (t[3] = Math.min(n[3], a[3])),
            t
          );
        },
        max: function (t, n, a) {
          return (
            (t[0] = Math.max(n[0], a[0])),
            (t[1] = Math.max(n[1], a[1])),
            (t[2] = Math.max(n[2], a[2])),
            (t[3] = Math.max(n[3], a[3])),
            t
          );
        },
        round: function (t, n) {
          return (
            (t[0] = Math.round(n[0])),
            (t[1] = Math.round(n[1])),
            (t[2] = Math.round(n[2])),
            (t[3] = Math.round(n[3])),
            t
          );
        },
        scale: ht,
        scaleAndAdd: function (t, n, a, r) {
          return (
            (t[0] = n[0] + a[0] * r),
            (t[1] = n[1] + a[1] * r),
            (t[2] = n[2] + a[2] * r),
            (t[3] = n[3] + a[3] * r),
            t
          );
        },
        distance: st,
        squaredDistance: Mt,
        length: ft,
        squaredLength: lt,
        negate: function (t, n) {
          return (
            (t[0] = -n[0]), (t[1] = -n[1]), (t[2] = -n[2]), (t[3] = -n[3]), t
          );
        },
        inverse: function (t, n) {
          return (
            (t[0] = 1 / n[0]),
            (t[1] = 1 / n[1]),
            (t[2] = 1 / n[2]),
            (t[3] = 1 / n[3]),
            t
          );
        },
        normalize: vt,
        dot: bt,
        cross: function (t, n, a, r) {
          var u = a[0] * r[1] - a[1] * r[0],
            e = a[0] * r[2] - a[2] * r[0],
            o = a[0] * r[3] - a[3] * r[0],
            i = a[1] * r[2] - a[2] * r[1],
            c = a[1] * r[3] - a[3] * r[1],
            h = a[2] * r[3] - a[3] * r[2],
            s = n[0],
            M = n[1],
            f = n[2],
            l = n[3];
          return (
            (t[0] = M * h - f * c + l * i),
            (t[1] = -s * h + f * o - l * e),
            (t[2] = s * c - M * o + l * u),
            (t[3] = -s * i + M * e - f * u),
            t
          );
        },
        lerp: mt,
        random: function (t, n) {
          var a, u, e, o, i, c;
          n = n || 1;
          do {
            i = (a = 2 * r() - 1) * a + (u = 2 * r() - 1) * u;
          } while (i >= 1);
          do {
            c = (e = 2 * r() - 1) * e + (o = 2 * r() - 1) * o;
          } while (c >= 1);
          var h = Math.sqrt((1 - i) / c);
          return (
            (t[0] = n * a),
            (t[1] = n * u),
            (t[2] = n * e * h),
            (t[3] = n * o * h),
            t
          );
        },
        transformMat4: function (t, n, a) {
          var r = n[0],
            u = n[1],
            e = n[2],
            o = n[3];
          return (
            (t[0] = a[0] * r + a[4] * u + a[8] * e + a[12] * o),
            (t[1] = a[1] * r + a[5] * u + a[9] * e + a[13] * o),
            (t[2] = a[2] * r + a[6] * u + a[10] * e + a[14] * o),
            (t[3] = a[3] * r + a[7] * u + a[11] * e + a[15] * o),
            t
          );
        },
        transformQuat: function (t, n, a) {
          var r = n[0],
            u = n[1],
            e = n[2],
            o = a[0],
            i = a[1],
            c = a[2],
            h = a[3],
            s = h * r + i * e - c * u,
            M = h * u + c * r - o * e,
            f = h * e + o * u - i * r,
            l = -o * r - i * u - c * e;
          return (
            (t[0] = s * h + l * -o + M * -c - f * -i),
            (t[1] = M * h + l * -i + f * -o - s * -c),
            (t[2] = f * h + l * -c + s * -i - M * -o),
            (t[3] = n[3]),
            t
          );
        },
        zero: function (t) {
          return (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 0), t;
        },
        str: function (t) {
          return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
        },
        exactEquals: dt,
        equals: xt,
        sub: pt,
        mul: yt,
        div: qt,
        dist: gt,
        sqrDist: At,
        len: wt,
        sqrLen: Rt,
        forEach: zt,
      });
    function jt() {
      var t = new a(4);
      return (
        a != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0)), (t[3] = 1), t
      );
    }
    function It(t, n, a) {
      a *= 0.5;
      var r = Math.sin(a);
      return (
        (t[0] = r * n[0]),
        (t[1] = r * n[1]),
        (t[2] = r * n[2]),
        (t[3] = Math.cos(a)),
        t
      );
    }
    function St(t, n, a) {
      var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = a[0],
        c = a[1],
        h = a[2],
        s = a[3];
      return (
        (t[0] = r * s + o * i + u * h - e * c),
        (t[1] = u * s + o * c + e * i - r * h),
        (t[2] = e * s + o * h + r * c - u * i),
        (t[3] = o * s - r * i - u * c - e * h),
        t
      );
    }
    function Et(t, n, a) {
      a *= 0.5;
      var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = Math.sin(a),
        c = Math.cos(a);
      return (
        (t[0] = r * c + o * i),
        (t[1] = u * c + e * i),
        (t[2] = e * c - u * i),
        (t[3] = o * c - r * i),
        t
      );
    }
    function Ot(t, n, a) {
      a *= 0.5;
      var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = Math.sin(a),
        c = Math.cos(a);
      return (
        (t[0] = r * c - e * i),
        (t[1] = u * c + o * i),
        (t[2] = e * c + r * i),
        (t[3] = o * c - u * i),
        t
      );
    }
    function Tt(t, n, a) {
      a *= 0.5;
      var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = Math.sin(a),
        c = Math.cos(a);
      return (
        (t[0] = r * c + u * i),
        (t[1] = u * c - r * i),
        (t[2] = e * c + o * i),
        (t[3] = o * c - e * i),
        t
      );
    }
    function Dt(t, n) {
      var a = n[0],
        r = n[1],
        u = n[2],
        e = n[3],
        o = Math.sqrt(a * a + r * r + u * u),
        i = Math.exp(e),
        c = o > 0 ? (i * Math.sin(o)) / o : 0;
      return (
        (t[0] = a * c),
        (t[1] = r * c),
        (t[2] = u * c),
        (t[3] = i * Math.cos(o)),
        t
      );
    }
    function Ft(t, n) {
      var a = n[0],
        r = n[1],
        u = n[2],
        e = n[3],
        o = Math.sqrt(a * a + r * r + u * u),
        i = o > 0 ? Math.atan2(o, e) / o : 0;
      return (
        (t[0] = a * i),
        (t[1] = r * i),
        (t[2] = u * i),
        (t[3] = 0.5 * Math.log(a * a + r * r + u * u + e * e)),
        t
      );
    }
    function Lt(t, a, r, u) {
      var e,
        o,
        i,
        c,
        h,
        s = a[0],
        M = a[1],
        f = a[2],
        l = a[3],
        v = r[0],
        b = r[1],
        m = r[2],
        d = r[3];
      return (
        (o = s * v + M * b + f * m + l * d) < 0 &&
          ((o = -o), (v = -v), (b = -b), (m = -m), (d = -d)),
        1 - o > n
          ? ((e = Math.acos(o)),
            (i = Math.sin(e)),
            (c = Math.sin((1 - u) * e) / i),
            (h = Math.sin(u * e) / i))
          : ((c = 1 - u), (h = u)),
        (t[0] = c * s + h * v),
        (t[1] = c * M + h * b),
        (t[2] = c * f + h * m),
        (t[3] = c * l + h * d),
        t
      );
    }
    function Vt(t, n) {
      var a,
        r = n[0] + n[4] + n[8];
      if (r > 0)
        (a = Math.sqrt(r + 1)),
          (t[3] = 0.5 * a),
          (a = 0.5 / a),
          (t[0] = (n[5] - n[7]) * a),
          (t[1] = (n[6] - n[2]) * a),
          (t[2] = (n[1] - n[3]) * a);
      else {
        var u = 0;
        n[4] > n[0] && (u = 1), n[8] > n[3 * u + u] && (u = 2);
        var e = (u + 1) % 3,
          o = (u + 2) % 3;
        (a = Math.sqrt(n[3 * u + u] - n[3 * e + e] - n[3 * o + o] + 1)),
          (t[u] = 0.5 * a),
          (a = 0.5 / a),
          (t[3] = (n[3 * e + o] - n[3 * o + e]) * a),
          (t[e] = (n[3 * e + u] + n[3 * u + e]) * a),
          (t[o] = (n[3 * o + u] + n[3 * u + o]) * a);
      }
      return t;
    }
    var Qt,
      Yt,
      Xt,
      Zt,
      _t,
      Bt,
      Nt = nt,
      kt = at,
      Ut = rt,
      Wt = ut,
      Ct = et,
      Gt = St,
      Ht = ht,
      Jt = bt,
      Kt = mt,
      $t = ft,
      tn = $t,
      nn = lt,
      an = nn,
      rn = vt,
      un = dt,
      en = xt,
      on =
        ((Qt = O()),
        (Yt = D(1, 0, 0)),
        (Xt = D(0, 1, 0)),
        function (t, n, a) {
          var r = _(n, a);
          return r < -0.999999
            ? (B(Qt, Yt, n),
              H(Qt) < 1e-6 && B(Qt, Xt, n),
              Z(Qt, Qt),
              It(t, Qt, Math.PI),
              t)
            : r > 0.999999
            ? ((t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), t)
            : (B(Qt, n, a),
              (t[0] = Qt[0]),
              (t[1] = Qt[1]),
              (t[2] = Qt[2]),
              (t[3] = 1 + r),
              rn(t, t));
        }),
      cn =
        ((Zt = jt()),
        (_t = jt()),
        function (t, n, a, r, u, e) {
          return (
            Lt(Zt, n, u, e), Lt(_t, a, r, e), Lt(t, Zt, _t, 2 * e * (1 - e)), t
          );
        }),
      hn =
        ((Bt = m()),
        function (t, n, a, r) {
          return (
            (Bt[0] = a[0]),
            (Bt[3] = a[1]),
            (Bt[6] = a[2]),
            (Bt[1] = r[0]),
            (Bt[4] = r[1]),
            (Bt[7] = r[2]),
            (Bt[2] = -n[0]),
            (Bt[5] = -n[1]),
            (Bt[8] = -n[2]),
            rn(t, Vt(t, Bt))
          );
        }),
      sn = Object.freeze({
        create: jt,
        identity: function (t) {
          return (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), t;
        },
        setAxisAngle: It,
        getAxisAngle: function (t, a) {
          var r = 2 * Math.acos(a[3]),
            u = Math.sin(r / 2);
          return (
            u > n
              ? ((t[0] = a[0] / u), (t[1] = a[1] / u), (t[2] = a[2] / u))
              : ((t[0] = 1), (t[1] = 0), (t[2] = 0)),
            r
          );
        },
        getAngle: function (t, n) {
          var a = Jt(t, n);
          return Math.acos(2 * a * a - 1);
        },
        multiply: St,
        rotateX: Et,
        rotateY: Ot,
        rotateZ: Tt,
        calculateW: function (t, n) {
          var a = n[0],
            r = n[1],
            u = n[2];
          return (
            (t[0] = a),
            (t[1] = r),
            (t[2] = u),
            (t[3] = Math.sqrt(Math.abs(1 - a * a - r * r - u * u))),
            t
          );
        },
        exp: Dt,
        ln: Ft,
        pow: function (t, n, a) {
          return Ft(t, n), Ht(t, t, a), Dt(t, t), t;
        },
        slerp: Lt,
        random: function (t) {
          var n = r(),
            a = r(),
            u = r(),
            e = Math.sqrt(1 - n),
            o = Math.sqrt(n);
          return (
            (t[0] = e * Math.sin(2 * Math.PI * a)),
            (t[1] = e * Math.cos(2 * Math.PI * a)),
            (t[2] = o * Math.sin(2 * Math.PI * u)),
            (t[3] = o * Math.cos(2 * Math.PI * u)),
            t
          );
        },
        invert: function (t, n) {
          var a = n[0],
            r = n[1],
            u = n[2],
            e = n[3],
            o = a * a + r * r + u * u + e * e,
            i = o ? 1 / o : 0;
          return (
            (t[0] = -a * i), (t[1] = -r * i), (t[2] = -u * i), (t[3] = e * i), t
          );
        },
        conjugate: function (t, n) {
          return (t[0] = -n[0]), (t[1] = -n[1]), (t[2] = -n[2]), (t[3] = n[3]), t;
        },
        fromMat3: Vt,
        fromEuler: function (t, n, a, r) {
          var u = (0.5 * Math.PI) / 180;
          (n *= u), (a *= u), (r *= u);
          var e = Math.sin(n),
            o = Math.cos(n),
            i = Math.sin(a),
            c = Math.cos(a),
            h = Math.sin(r),
            s = Math.cos(r);
          return (
            (t[0] = e * c * s - o * i * h),
            (t[1] = o * i * s + e * c * h),
            (t[2] = o * c * h - e * i * s),
            (t[3] = o * c * s + e * i * h),
            t
          );
        },
        str: function (t) {
          return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
        },
        clone: Nt,
        fromValues: kt,
        copy: Ut,
        set: Wt,
        add: Ct,
        mul: Gt,
        scale: Ht,
        dot: Jt,
        lerp: Kt,
        length: $t,
        len: tn,
        squaredLength: nn,
        sqrLen: an,
        normalize: rn,
        exactEquals: un,
        equals: en,
        rotationTo: on,
        sqlerp: cn,
        setAxes: hn,
      });
    function Mn(t, n, a) {
      var r = 0.5 * a[0],
        u = 0.5 * a[1],
        e = 0.5 * a[2],
        o = n[0],
        i = n[1],
        c = n[2],
        h = n[3];
      return (
        (t[0] = o),
        (t[1] = i),
        (t[2] = c),
        (t[3] = h),
        (t[4] = r * h + u * c - e * i),
        (t[5] = u * h + e * o - r * c),
        (t[6] = e * h + r * i - u * o),
        (t[7] = -r * o - u * i - e * c),
        t
      );
    }
    function fn(t, n) {
      return (
        (t[0] = n[0]),
        (t[1] = n[1]),
        (t[2] = n[2]),
        (t[3] = n[3]),
        (t[4] = n[4]),
        (t[5] = n[5]),
        (t[6] = n[6]),
        (t[7] = n[7]),
        t
      );
    }
    var ln = Ut;
    var vn = Ut;
    function bn(t, n, a) {
      var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = a[4],
        c = a[5],
        h = a[6],
        s = a[7],
        M = n[4],
        f = n[5],
        l = n[6],
        v = n[7],
        b = a[0],
        m = a[1],
        d = a[2],
        x = a[3];
      return (
        (t[0] = r * x + o * b + u * d - e * m),
        (t[1] = u * x + o * m + e * b - r * d),
        (t[2] = e * x + o * d + r * m - u * b),
        (t[3] = o * x - r * b - u * m - e * d),
        (t[4] = r * s + o * i + u * h - e * c + M * x + v * b + f * d - l * m),
        (t[5] = u * s + o * c + e * i - r * h + f * x + v * m + l * b - M * d),
        (t[6] = e * s + o * h + r * c - u * i + l * x + v * d + M * m - f * b),
        (t[7] = o * s - r * i - u * c - e * h + v * x - M * b - f * m - l * d),
        t
      );
    }
    var mn = bn;
    var dn = Jt;
    var xn = $t,
      pn = xn,
      yn = nn,
      qn = yn;
    var gn = Object.freeze({
      create: function () {
        var t = new a(8);
        return (
          a != Float32Array &&
            ((t[0] = 0),
            (t[1] = 0),
            (t[2] = 0),
            (t[4] = 0),
            (t[5] = 0),
            (t[6] = 0),
            (t[7] = 0)),
          (t[3] = 1),
          t
        );
      },
      clone: function (t) {
        var n = new a(8);
        return (
          (n[0] = t[0]),
          (n[1] = t[1]),
          (n[2] = t[2]),
          (n[3] = t[3]),
          (n[4] = t[4]),
          (n[5] = t[5]),
          (n[6] = t[6]),
          (n[7] = t[7]),
          n
        );
      },
      fromValues: function (t, n, r, u, e, o, i, c) {
        var h = new a(8);
        return (
          (h[0] = t),
          (h[1] = n),
          (h[2] = r),
          (h[3] = u),
          (h[4] = e),
          (h[5] = o),
          (h[6] = i),
          (h[7] = c),
          h
        );
      },
      fromRotationTranslationValues: function (t, n, r, u, e, o, i) {
        var c = new a(8);
        (c[0] = t), (c[1] = n), (c[2] = r), (c[3] = u);
        var h = 0.5 * e,
          s = 0.5 * o,
          M = 0.5 * i;
        return (
          (c[4] = h * u + s * r - M * n),
          (c[5] = s * u + M * t - h * r),
          (c[6] = M * u + h * n - s * t),
          (c[7] = -h * t - s * n - M * r),
          c
        );
      },
      fromRotationTranslation: Mn,
      fromTranslation: function (t, n) {
        return (
          (t[0] = 0),
          (t[1] = 0),
          (t[2] = 0),
          (t[3] = 1),
          (t[4] = 0.5 * n[0]),
          (t[5] = 0.5 * n[1]),
          (t[6] = 0.5 * n[2]),
          (t[7] = 0),
          t
        );
      },
      fromRotation: function (t, n) {
        return (
          (t[0] = n[0]),
          (t[1] = n[1]),
          (t[2] = n[2]),
          (t[3] = n[3]),
          (t[4] = 0),
          (t[5] = 0),
          (t[6] = 0),
          (t[7] = 0),
          t
        );
      },
      fromMat4: function (t, n) {
        var r = jt();
        P(r, n);
        var u = new a(3);
        return R(u, n), Mn(t, r, u), t;
      },
      copy: fn,
      identity: function (t) {
        return (
          (t[0] = 0),
          (t[1] = 0),
          (t[2] = 0),
          (t[3] = 1),
          (t[4] = 0),
          (t[5] = 0),
          (t[6] = 0),
          (t[7] = 0),
          t
        );
      },
      set: function (t, n, a, r, u, e, o, i, c) {
        return (
          (t[0] = n),
          (t[1] = a),
          (t[2] = r),
          (t[3] = u),
          (t[4] = e),
          (t[5] = o),
          (t[6] = i),
          (t[7] = c),
          t
        );
      },
      getReal: ln,
      getDual: function (t, n) {
        return (t[0] = n[4]), (t[1] = n[5]), (t[2] = n[6]), (t[3] = n[7]), t;
      },
      setReal: vn,
      setDual: function (t, n) {
        return (t[4] = n[0]), (t[5] = n[1]), (t[6] = n[2]), (t[7] = n[3]), t;
      },
      getTranslation: function (t, n) {
        var a = n[4],
          r = n[5],
          u = n[6],
          e = n[7],
          o = -n[0],
          i = -n[1],
          c = -n[2],
          h = n[3];
        return (
          (t[0] = 2 * (a * h + e * o + r * c - u * i)),
          (t[1] = 2 * (r * h + e * i + u * o - a * c)),
          (t[2] = 2 * (u * h + e * c + a * i - r * o)),
          t
        );
      },
      translate: function (t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3],
          i = 0.5 * a[0],
          c = 0.5 * a[1],
          h = 0.5 * a[2],
          s = n[4],
          M = n[5],
          f = n[6],
          l = n[7];
        return (
          (t[0] = r),
          (t[1] = u),
          (t[2] = e),
          (t[3] = o),
          (t[4] = o * i + u * h - e * c + s),
          (t[5] = o * c + e * i - r * h + M),
          (t[6] = o * h + r * c - u * i + f),
          (t[7] = -r * i - u * c - e * h + l),
          t
        );
      },
      rotateX: function (t, n, a) {
        var r = -n[0],
          u = -n[1],
          e = -n[2],
          o = n[3],
          i = n[4],
          c = n[5],
          h = n[6],
          s = n[7],
          M = i * o + s * r + c * e - h * u,
          f = c * o + s * u + h * r - i * e,
          l = h * o + s * e + i * u - c * r,
          v = s * o - i * r - c * u - h * e;
        return (
          Et(t, n, a),
          (r = t[0]),
          (u = t[1]),
          (e = t[2]),
          (o = t[3]),
          (t[4] = M * o + v * r + f * e - l * u),
          (t[5] = f * o + v * u + l * r - M * e),
          (t[6] = l * o + v * e + M * u - f * r),
          (t[7] = v * o - M * r - f * u - l * e),
          t
        );
      },
      rotateY: function (t, n, a) {
        var r = -n[0],
          u = -n[1],
          e = -n[2],
          o = n[3],
          i = n[4],
          c = n[5],
          h = n[6],
          s = n[7],
          M = i * o + s * r + c * e - h * u,
          f = c * o + s * u + h * r - i * e,
          l = h * o + s * e + i * u - c * r,
          v = s * o - i * r - c * u - h * e;
        return (
          Ot(t, n, a),
          (r = t[0]),
          (u = t[1]),
          (e = t[2]),
          (o = t[3]),
          (t[4] = M * o + v * r + f * e - l * u),
          (t[5] = f * o + v * u + l * r - M * e),
          (t[6] = l * o + v * e + M * u - f * r),
          (t[7] = v * o - M * r - f * u - l * e),
          t
        );
      },
      rotateZ: function (t, n, a) {
        var r = -n[0],
          u = -n[1],
          e = -n[2],
          o = n[3],
          i = n[4],
          c = n[5],
          h = n[6],
          s = n[7],
          M = i * o + s * r + c * e - h * u,
          f = c * o + s * u + h * r - i * e,
          l = h * o + s * e + i * u - c * r,
          v = s * o - i * r - c * u - h * e;
        return (
          Tt(t, n, a),
          (r = t[0]),
          (u = t[1]),
          (e = t[2]),
          (o = t[3]),
          (t[4] = M * o + v * r + f * e - l * u),
          (t[5] = f * o + v * u + l * r - M * e),
          (t[6] = l * o + v * e + M * u - f * r),
          (t[7] = v * o - M * r - f * u - l * e),
          t
        );
      },
      rotateByQuatAppend: function (t, n, a) {
        var r = a[0],
          u = a[1],
          e = a[2],
          o = a[3],
          i = n[0],
          c = n[1],
          h = n[2],
          s = n[3];
        return (
          (t[0] = i * o + s * r + c * e - h * u),
          (t[1] = c * o + s * u + h * r - i * e),
          (t[2] = h * o + s * e + i * u - c * r),
          (t[3] = s * o - i * r - c * u - h * e),
          (i = n[4]),
          (c = n[5]),
          (h = n[6]),
          (s = n[7]),
          (t[4] = i * o + s * r + c * e - h * u),
          (t[5] = c * o + s * u + h * r - i * e),
          (t[6] = h * o + s * e + i * u - c * r),
          (t[7] = s * o - i * r - c * u - h * e),
          t
        );
      },
      rotateByQuatPrepend: function (t, n, a) {
        var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3],
          i = a[0],
          c = a[1],
          h = a[2],
          s = a[3];
        return (
          (t[0] = r * s + o * i + u * h - e * c),
          (t[1] = u * s + o * c + e * i - r * h),
          (t[2] = e * s + o * h + r * c - u * i),
          (t[3] = o * s - r * i - u * c - e * h),
          (i = a[4]),
          (c = a[5]),
          (h = a[6]),
          (s = a[7]),
          (t[4] = r * s + o * i + u * h - e * c),
          (t[5] = u * s + o * c + e * i - r * h),
          (t[6] = e * s + o * h + r * c - u * i),
          (t[7] = o * s - r * i - u * c - e * h),
          t
        );
      },
      rotateAroundAxis: function (t, a, r, u) {
        if (Math.abs(u) < n) return fn(t, a);
        var e = Math.hypot(r[0], r[1], r[2]);
        u *= 0.5;
        var o = Math.sin(u),
          i = (o * r[0]) / e,
          c = (o * r[1]) / e,
          h = (o * r[2]) / e,
          s = Math.cos(u),
          M = a[0],
          f = a[1],
          l = a[2],
          v = a[3];
        (t[0] = M * s + v * i + f * h - l * c),
          (t[1] = f * s + v * c + l * i - M * h),
          (t[2] = l * s + v * h + M * c - f * i),
          (t[3] = v * s - M * i - f * c - l * h);
        var b = a[4],
          m = a[5],
          d = a[6],
          x = a[7];
        return (
          (t[4] = b * s + x * i + m * h - d * c),
          (t[5] = m * s + x * c + d * i - b * h),
          (t[6] = d * s + x * h + b * c - m * i),
          (t[7] = x * s - b * i - m * c - d * h),
          t
        );
      },
      add: function (t, n, a) {
        return (
          (t[0] = n[0] + a[0]),
          (t[1] = n[1] + a[1]),
          (t[2] = n[2] + a[2]),
          (t[3] = n[3] + a[3]),
          (t[4] = n[4] + a[4]),
          (t[5] = n[5] + a[5]),
          (t[6] = n[6] + a[6]),
          (t[7] = n[7] + a[7]),
          t
        );
      },
      multiply: bn,
      mul: mn,
      scale: function (t, n, a) {
        return (
          (t[0] = n[0] * a),
          (t[1] = n[1] * a),
          (t[2] = n[2] * a),
          (t[3] = n[3] * a),
          (t[4] = n[4] * a),
          (t[5] = n[5] * a),
          (t[6] = n[6] * a),
          (t[7] = n[7] * a),
          t
        );
      },
      dot: dn,
      lerp: function (t, n, a, r) {
        var u = 1 - r;
        return (
          dn(n, a) < 0 && (r = -r),
          (t[0] = n[0] * u + a[0] * r),
          (t[1] = n[1] * u + a[1] * r),
          (t[2] = n[2] * u + a[2] * r),
          (t[3] = n[3] * u + a[3] * r),
          (t[4] = n[4] * u + a[4] * r),
          (t[5] = n[5] * u + a[5] * r),
          (t[6] = n[6] * u + a[6] * r),
          (t[7] = n[7] * u + a[7] * r),
          t
        );
      },
      invert: function (t, n) {
        var a = yn(n);
        return (
          (t[0] = -n[0] / a),
          (t[1] = -n[1] / a),
          (t[2] = -n[2] / a),
          (t[3] = n[3] / a),
          (t[4] = -n[4] / a),
          (t[5] = -n[5] / a),
          (t[6] = -n[6] / a),
          (t[7] = n[7] / a),
          t
        );
      },
      conjugate: function (t, n) {
        return (
          (t[0] = -n[0]),
          (t[1] = -n[1]),
          (t[2] = -n[2]),
          (t[3] = n[3]),
          (t[4] = -n[4]),
          (t[5] = -n[5]),
          (t[6] = -n[6]),
          (t[7] = n[7]),
          t
        );
      },
      length: xn,
      len: pn,
      squaredLength: yn,
      sqrLen: qn,
      normalize: function (t, n) {
        var a = yn(n);
        if (a > 0) {
          a = Math.sqrt(a);
          var r = n[0] / a,
            u = n[1] / a,
            e = n[2] / a,
            o = n[3] / a,
            i = n[4],
            c = n[5],
            h = n[6],
            s = n[7],
            M = r * i + u * c + e * h + o * s;
          (t[0] = r),
            (t[1] = u),
            (t[2] = e),
            (t[3] = o),
            (t[4] = (i - r * M) / a),
            (t[5] = (c - u * M) / a),
            (t[6] = (h - e * M) / a),
            (t[7] = (s - o * M) / a);
        }
        return t;
      },
      str: function (t) {
        return (
          "quat2(" +
          t[0] +
          ", " +
          t[1] +
          ", " +
          t[2] +
          ", " +
          t[3] +
          ", " +
          t[4] +
          ", " +
          t[5] +
          ", " +
          t[6] +
          ", " +
          t[7] +
          ")"
        );
      },
      exactEquals: function (t, n) {
        return (
          t[0] === n[0] &&
          t[1] === n[1] &&
          t[2] === n[2] &&
          t[3] === n[3] &&
          t[4] === n[4] &&
          t[5] === n[5] &&
          t[6] === n[6] &&
          t[7] === n[7]
        );
      },
      equals: function (t, a) {
        var r = t[0],
          u = t[1],
          e = t[2],
          o = t[3],
          i = t[4],
          c = t[5],
          h = t[6],
          s = t[7],
          M = a[0],
          f = a[1],
          l = a[2],
          v = a[3],
          b = a[4],
          m = a[5],
          d = a[6],
          x = a[7];
        return (
          Math.abs(r - M) <= n * Math.max(1, Math.abs(r), Math.abs(M)) &&
          Math.abs(u - f) <= n * Math.max(1, Math.abs(u), Math.abs(f)) &&
          Math.abs(e - l) <= n * Math.max(1, Math.abs(e), Math.abs(l)) &&
          Math.abs(o - v) <= n * Math.max(1, Math.abs(o), Math.abs(v)) &&
          Math.abs(i - b) <= n * Math.max(1, Math.abs(i), Math.abs(b)) &&
          Math.abs(c - m) <= n * Math.max(1, Math.abs(c), Math.abs(m)) &&
          Math.abs(h - d) <= n * Math.max(1, Math.abs(h), Math.abs(d)) &&
          Math.abs(s - x) <= n * Math.max(1, Math.abs(s), Math.abs(x))
        );
      },
    });
    function An() {
      var t = new a(2);
      return a != Float32Array && ((t[0] = 0), (t[1] = 0)), t;
    }
    function wn(t, n, a) {
      return (t[0] = n[0] - a[0]), (t[1] = n[1] - a[1]), t;
    }
    function Rn(t, n, a) {
      return (t[0] = n[0] * a[0]), (t[1] = n[1] * a[1]), t;
    }
    function zn(t, n, a) {
      return (t[0] = n[0] / a[0]), (t[1] = n[1] / a[1]), t;
    }
    function Pn(t, n) {
      var a = n[0] - t[0],
        r = n[1] - t[1];
      return Math.hypot(a, r);
    }
    function jn(t, n) {
      var a = n[0] - t[0],
        r = n[1] - t[1];
      return a * a + r * r;
    }
    function In(t) {
      var n = t[0],
        a = t[1];
      return Math.hypot(n, a);
    }
    function Sn(t) {
      var n = t[0],
        a = t[1];
      return n * n + a * a;
    }
    var En = In,
      On = wn,
      Tn = Rn,
      Dn = zn,
      Fn = Pn,
      Ln = jn,
      Vn = Sn,
      Qn = (function () {
        var t = An();
        return function (n, a, r, u, e, o) {
          var i, c;
          for (
            a || (a = 2),
              r || (r = 0),
              c = u ? Math.min(u * a + r, n.length) : n.length,
              i = r;
            i < c;
            i += a
          )
            (t[0] = n[i]),
              (t[1] = n[i + 1]),
              e(t, t, o),
              (n[i] = t[0]),
              (n[i + 1] = t[1]);
          return n;
        };
      })(),
      Yn = Object.freeze({
        create: An,
        clone: function (t) {
          var n = new a(2);
          return (n[0] = t[0]), (n[1] = t[1]), n;
        },
        fromValues: function (t, n) {
          var r = new a(2);
          return (r[0] = t), (r[1] = n), r;
        },
        copy: function (t, n) {
          return (t[0] = n[0]), (t[1] = n[1]), t;
        },
        set: function (t, n, a) {
          return (t[0] = n), (t[1] = a), t;
        },
        add: function (t, n, a) {
          return (t[0] = n[0] + a[0]), (t[1] = n[1] + a[1]), t;
        },
        subtract: wn,
        multiply: Rn,
        divide: zn,
        ceil: function (t, n) {
          return (t[0] = Math.ceil(n[0])), (t[1] = Math.ceil(n[1])), t;
        },
        floor: function (t, n) {
          return (t[0] = Math.floor(n[0])), (t[1] = Math.floor(n[1])), t;
        },
        min: function (t, n, a) {
          return (t[0] = Math.min(n[0], a[0])), (t[1] = Math.min(n[1], a[1])), t;
        },
        max: function (t, n, a) {
          return (t[0] = Math.max(n[0], a[0])), (t[1] = Math.max(n[1], a[1])), t;
        },
        round: function (t, n) {
          return (t[0] = Math.round(n[0])), (t[1] = Math.round(n[1])), t;
        },
        scale: function (t, n, a) {
          return (t[0] = n[0] * a), (t[1] = n[1] * a), t;
        },
        scaleAndAdd: function (t, n, a, r) {
          return (t[0] = n[0] + a[0] * r), (t[1] = n[1] + a[1] * r), t;
        },
        distance: Pn,
        squaredDistance: jn,
        length: In,
        squaredLength: Sn,
        negate: function (t, n) {
          return (t[0] = -n[0]), (t[1] = -n[1]), t;
        },
        inverse: function (t, n) {
          return (t[0] = 1 / n[0]), (t[1] = 1 / n[1]), t;
        },
        normalize: function (t, n) {
          var a = n[0],
            r = n[1],
            u = a * a + r * r;
          return (
            u > 0 && (u = 1 / Math.sqrt(u)),
            (t[0] = n[0] * u),
            (t[1] = n[1] * u),
            t
          );
        },
        dot: function (t, n) {
          return t[0] * n[0] + t[1] * n[1];
        },
        cross: function (t, n, a) {
          var r = n[0] * a[1] - n[1] * a[0];
          return (t[0] = t[1] = 0), (t[2] = r), t;
        },
        lerp: function (t, n, a, r) {
          var u = n[0],
            e = n[1];
          return (t[0] = u + r * (a[0] - u)), (t[1] = e + r * (a[1] - e)), t;
        },
        random: function (t, n) {
          n = n || 1;
          var a = 2 * r() * Math.PI;
          return (t[0] = Math.cos(a) * n), (t[1] = Math.sin(a) * n), t;
        },
        transformMat2: function (t, n, a) {
          var r = n[0],
            u = n[1];
          return (t[0] = a[0] * r + a[2] * u), (t[1] = a[1] * r + a[3] * u), t;
        },
        transformMat2d: function (t, n, a) {
          var r = n[0],
            u = n[1];
          return (
            (t[0] = a[0] * r + a[2] * u + a[4]),
            (t[1] = a[1] * r + a[3] * u + a[5]),
            t
          );
        },
        transformMat3: function (t, n, a) {
          var r = n[0],
            u = n[1];
          return (
            (t[0] = a[0] * r + a[3] * u + a[6]),
            (t[1] = a[1] * r + a[4] * u + a[7]),
            t
          );
        },
        transformMat4: function (t, n, a) {
          var r = n[0],
            u = n[1];
          return (
            (t[0] = a[0] * r + a[4] * u + a[12]),
            (t[1] = a[1] * r + a[5] * u + a[13]),
            t
          );
        },
        rotate: function (t, n, a, r) {
          var u = n[0] - a[0],
            e = n[1] - a[1],
            o = Math.sin(r),
            i = Math.cos(r);
          return (t[0] = u * i - e * o + a[0]), (t[1] = u * o + e * i + a[1]), t;
        },
        angle: function (t, n) {
          var a = t[0],
            r = t[1],
            u = n[0],
            e = n[1],
            o = a * a + r * r;
          o > 0 && (o = 1 / Math.sqrt(o));
          var i = u * u + e * e;
          i > 0 && (i = 1 / Math.sqrt(i));
          var c = (a * u + r * e) * o * i;
          return c > 1 ? 0 : c < -1 ? Math.PI : Math.acos(c);
        },
        zero: function (t) {
          return (t[0] = 0), (t[1] = 0), t;
        },
        str: function (t) {
          return "vec2(" + t[0] + ", " + t[1] + ")";
        },
        exactEquals: function (t, n) {
          return t[0] === n[0] && t[1] === n[1];
        },
        equals: function (t, a) {
          var r = t[0],
            u = t[1],
            e = a[0],
            o = a[1];
          return (
            Math.abs(r - e) <= n * Math.max(1, Math.abs(r), Math.abs(e)) &&
            Math.abs(u - o) <= n * Math.max(1, Math.abs(u), Math.abs(o))
          );
        },
        len: En,
        sub: On,
        mul: Tn,
        div: Dn,
        dist: Fn,
        sqrDist: Ln,
        sqrLen: Vn,
        forEach: Qn,
      });
    (t.glMatrix = e),
      (t.mat2 = s),
      (t.mat2d = b),
      (t.mat3 = q),
      (t.mat4 = E),
      (t.quat = sn),
      (t.quat2 = gn),
      (t.vec2 = Yn),
      (t.vec3 = $),
      (t.vec4 = Pt),
      Object.defineProperty(t, "__esModule", { value: !0 });
  });
  
  // ["glMatrix", "mat2", "mat2d", "mat3", "mat4", "quat", "quat2", "vec2", "vec3", "vec4"]
  window.glMatrix = glMatrix;
  window.mat2 = glMatrix.mat2;
  window.mat2d = glMatrix.mat2d;
  window.mat3 = glMatrix.mat3;
  window.mat4 = glMatrix.mat4;
  window.quat = glMatrix.quat;
  window.quat2 = glMatrix.quat2;
  window.vec2 = glMatrix.vec2;
  window.vec3 = glMatrix.vec3;
  window.vec4 = glMatrix.vec4;
  
  var CABLES = CABLES || {};
  CABLES.build = {
    timestamp: 1658229186222,
    created: "2022-07-19T11:13:06.222Z",
    git: {
      branch: "master",
      commit: "819fc0e7c02646be982b7338326b610a383cd8f6",
      date: "2022-07-19T11:09:39.000Z",
      message: "corelib",
    },
  };
  if (!CABLES.exportedPatches) CABLES.exportedPatches = {};
  CABLES.exportedPatches["1NeoC7"] = {
    settings: { opExample: [], licence: "none", isPublic: false },
    ops: [
      {
        objName: "Ops.Gl.MainLoop",
        id: "0",
        uiAttribs: { subPatch: 0 },
        portsIn: [
          { name: "FPS Limit", value: 0 },
          { name: "Reduce FPS not focussed", value: true },
          { name: "Reduce FPS loading", value: false },
          { name: "Clear", value: true },
          { name: "ClearAlpha", value: true },
          { name: "Fullscreen Button", value: false },
          { name: "Active", value: true },
          { name: "Hires Displays", value: false },
          { name: "Pixel Unit index", value: 0 },
          { name: "Pixel Unit", value: "Display" },
        ],
        portsOut: [
          {
            name: "trigger",
            links: [
              { portIn: "render", portOut: "trigger", objIn: "2", objOut: "0" },
            ],
          },
          { name: "width", value: 559 },
          { name: "height", value: 300 },
        ],
      },
      {
        objName: "Ops.Gl.Shader.WireframeMaterial",
        id: "1",
        uiAttribs: { subPatch: 0 },
        portsIn: [
          { name: "render" },
          { name: "enable depth testing", value: true },
          { name: "fill", value: true },
          { name: "width", value: 0.372 },
          { name: "opacity", value: 1 },
          { name: "diffuse r", value: 1 },
          { name: "diffuse g", value: 1 },
          { name: "diffuse b", value: 1 },
          { name: "Fill R", value: 0 },
          { name: "Fill G", value: 0 },
          { name: "Fill B", value: 0 },
        ],
        portsOut: [
          {
            name: "trigger",
            links: [
              { portIn: "Render", portOut: "trigger", objIn: "10", objOut: "1" },
            ],
          },
        ],
      },
      {
        objName: "Ops.Gl.ClearColor",
        id: "2",
        uiAttribs: { subPatch: 0 },
        portsIn: [
          { name: "render" },
          { name: "r", value: 0.867 },
          { name: "g", value: 0.867 },
          { name: "b", value: 0.867 },
          { name: "a", value: 0.673 },
        ],
        portsOut: [
          {
            name: "trigger",
            links: [
              { portIn: "render", portOut: "trigger", objIn: "3", objOut: "2" },
              { portIn: "exe", portOut: "trigger", objIn: "6", objOut: "2" },
              { portIn: "render", portOut: "trigger", objIn: "8", objOut: "2" },
            ],
          },
        ],
      },
      {
        objName: "Ops.Gl.Matrix.Transform",
        id: "3",
        uiAttribs: { subPatch: 0 },
        portsIn: [
          { name: "render" },
          { name: "posX", value: 0 },
          { name: "posY", value: 0 },
          { name: "posZ", value: -0.5 },
          { name: "scale", value: 1 },
          { name: "rotX" },
          { name: "rotY" },
          { name: "rotZ", value: 0 },
        ],
        portsOut: [
          {
            name: "trigger",
            links: [
              { portIn: "render", portOut: "trigger", objIn: "1", objOut: "3" },
            ],
          },
        ],
      },
      {
        objName: "Ops.Math.Multiply",
        id: "4",
        uiAttribs: { subPatch: 0 },
        portsIn: [{ name: "number1" }, { name: "number2", value: 10 }],
        portsOut: [
          {
            name: "result",
            links: [
              { portIn: "rotY", portOut: "result", objIn: "3", objOut: "4" },
            ],
          },
        ],
      },
      {
        objName: "Ops.Math.Multiply",
        id: "5",
        uiAttribs: { subPatch: 0 },
        portsIn: [{ name: "number1" }, { name: "number2", value: 5 }],
        portsOut: [
          {
            name: "result",
            links: [
              { portIn: "rotX", portOut: "result", objIn: "3", objOut: "5" },
              { portIn: "rotZ", portOut: "result", objIn: "8", objOut: "5" },
            ],
          },
        ],
      },
      {
        objName: "Ops.User.jiinliin.MyRelativeTime",
        id: "6",
        uiAttribs: { subPatch: 0 },
        portsIn: [{ name: "exe" }, { name: "Multiply", value: 1 }],
        portsOut: [
          { name: "Trigger out", value: 0 },
          {
            name: "result",
            links: [
              { portIn: "number1", portOut: "result", objIn: "4", objOut: "6" },
              { portIn: "number1", portOut: "result", objIn: "5", objOut: "6" },
            ],
          },
        ],
      },
      {
        objName: "Ops.User.jiinliin.Sphere_v2",
        id: "7",
        uiAttribs: { subPatch: 0 },
        portsIn: [
          { name: "render" },
          { name: "radius", value: 0.5 },
          { name: "stacks", value: 17.58 },
          { name: "slices", value: 32 },
          { name: "Filloffset", value: 1 },
          { name: "Render", value: true },
        ],
        portsOut: [{ name: "trigger", value: 0 }, { name: "geometry" }],
      },
      {
        objName: "Ops.Gl.Matrix.Transform",
        id: "8",
        uiAttribs: { subPatch: 0 },
        portsIn: [
          { name: "render" },
          { name: "posX", value: 1.3022501729235798 },
          { name: "posY", value: 0 },
          { name: "posZ", value: -0.23607653119946215 },
          { name: "scale", value: 1.44 },
          { name: "rotX", value: 0 },
          { name: "rotY", value: 0 },
          { name: "rotZ" },
        ],
        portsOut: [
          {
            name: "trigger",
            links: [
              { portIn: "render", portOut: "trigger", objIn: "9", objOut: "8" },
            ],
          },
        ],
      },
      {
        objName: "Ops.Gl.Shader.WireframeMaterial",
        id: "9",
        uiAttribs: { subPatch: 0 },
        portsIn: [
          { name: "render" },
          { name: "enable depth testing", value: true },
          { name: "fill", value: true },
          { name: "width", value: 0.372 },
          { name: "opacity", value: 1 },
          { name: "diffuse r", value: 1 },
          { name: "diffuse g", value: 1 },
          { name: "diffuse b", value: 1 },
          { name: "Fill R", value: 0 },
          { name: "Fill G", value: 0 },
          { name: "Fill B", value: 0 },
        ],
        portsOut: [
          {
            name: "trigger",
            links: [
              { portIn: "render", portOut: "trigger", objIn: "7", objOut: "9" },
            ],
          },
        ],
      },
      {
        objName: "Ops.User.jiinliin.Cube_v2",
        id: "10",
        uiAttribs: { subPatch: 0 },
        portsIn: [
          { name: "Render" },
          { name: "Render Mesh", value: true },
          { name: "Width", value: 1 },
          { name: "Length", value: 1.45 },
          { name: "Height", value: 1 },
          { name: "Center", value: true },
          { name: "Mapping index", value: 0 },
          { name: "Mapping", value: "Side" },
          { name: "Bias", value: 0 },
          { name: "Flip X", value: true },
          { name: "Top", value: 0 },
          { name: "Bottom", value: true },
          { name: "Left", value: true },
          { name: "Right", value: true },
          { name: "Front", value: true },
          { name: "Back", value: true },
        ],
        portsOut: [{ name: "Next", value: 0 }, { name: "geometry" }],
      },
    ],
    users: [],
    userOps: [],
    tags: [],
    _id: "62ca56401d3c2587c12f4bb9",
    name: "Simple Rotation",
    userId: "5dfae554b318c865963a985c",
    created: "2022-07-10T04:32:00.167Z",
    cloneOf: "5702a838df94c65f116d27ef",
    updated: "2022-07-10T17:02:52.067Z",
    log: [
      {
        _id: "62ca56401d3c2587c12f4bbb",
        key: "collabsatcreate",
        text: "initial list of collaborators:",
      },
    ],
    __v: 5,
    shortId: "1NeoC7",
    buildInfo: {
      core: {
        timestamp: 1656574516241,
        created: "2022-06-30T07:35:16.241Z",
        git: {
          branch: "master",
          commit: "abda58d5c2d1731d2d3526a32ffa23ace4933120",
          date: null,
          message: null,
        },
      },
      ui: {
        timestamp: 1656574563915,
        created: "2022-06-30T07:36:03.915Z",
        git: {
          branch: "master",
          commit: "cde4fa72579470c06fa2ad7390223a8b7a061095",
          date: "2022-06-29T13:18:31.000Z",
          message: "idiot sandwitch",
        },
      },
      host: "cables.gl",
    },
    opsHash: "8e3baa65889b358c5089da3669e1de76cde75b1b",
    ui: {
      timeLineLength: 20,
      bookmarks: [],
      viewBoxesGl: {
        0: { x: 96.01775012967917, y: 280.896266024414, z: 459.1247418022017 },
      },
      renderer: { w: 559, h: 300, s: 1 },
    },
    updatedByUser: "jiinliin",
    cachedUsername: "jiinliin",
    deployments: { lastDeployment: { date: 1657472591672, service: "download" } },
    exports: 3,
    description: "",
    views: 0,
    statsAdmin: {
      filenameScreenshots: [
        "_screenshots/screenshot.png",
        "_screenshots/screenshot_1657427736443.png",
        "_screenshots/screenshot_1657472115723.png",
        "_screenshots/screenshot_1657472572630.png",
        "_screenshots/screenshot_converted.jpg",
        "_screenshots/screenshot_converted.webp",
      ],
      filenameExports: [
        "_exports/cables_Simple_Rotation2.zip",
        "_exports/cables_copy_of_Simple_Rotation1.zip",
      ],
      filenameAssets: [],
      hasOldScreenshots: false,
      hasOldExports: false,
      sizeScreenshots: 349.9150390625,
      sizeExports: 323.75390625,
      sizeAssets: 0,
    },
  };
  if (!CABLES.exportedPatch) {
    CABLES.exportedPatch = CABLES.exportedPatches["1NeoC7"];
  }
  ("use strict");
  var CABLES = CABLES || {};
  CABLES.OPS = CABLES.OPS || {};
  var Ops = Ops || {};
  Ops.Gl = Ops.Gl || {};
  Ops.Math = Ops.Math || {};
  Ops.User = Ops.User || {};
  Ops.Gl.Matrix = Ops.Gl.Matrix || {};
  Ops.Gl.Shader = Ops.Gl.Shader || {};
  Ops.User.jiinliin = Ops.User.jiinliin || {};
  Ops.Gl.MainLoop = function () {
    CABLES.Op.apply(this, arguments);
    const r = this;
    const e = {};
    const t = r.inValue("FPS Limit", 0),
      n = r.outTrigger("trigger"),
      a = r.outNumber("width"),
      i = r.outNumber("height"),
      o = r.inValueBool("Reduce FPS not focussed", true),
      s = r.inValueBool("Reduce FPS loading"),
      l = r.inValueBool("Clear", true),
      u = r.inValueBool("ClearAlpha", true),
      c = r.inValueBool("Fullscreen Button", false),
      p = r.inValueBool("Active", true),
      g = r.inValueBool("Hires Displays", false),
      d = r.inSwitch("Pixel Unit", ["Display", "CSS"], "Display");
    r.onAnimFrame = M;
    g.onChange = function () {
      if (g.get()) r.patch.cgl.pixelDensity = window.devicePixelRatio;
      else r.patch.cgl.pixelDensity = 1;
      r.patch.cgl.updateSize();
      if (CABLES.UI) gui.setLayout();
      d.setUiAttribs({ greyout: !g.get() });
    };
    p.onChange = function () {
      r.patch.removeOnAnimFrame(r);
      if (p.get()) {
        r.setUiAttrib({ extendTitle: "" });
        r.onAnimFrame = M;
        r.patch.addOnAnimFrame(r);
        r.log("adding again!");
      } else {
        r.setUiAttrib({ extendTitle: "Inactive" });
      }
    };
    const f = r.patch.cgl;
    let m = 0;
    let h = 0;
    if (!r.patch.cgl) r.uiAttr({ error: "No webgl cgl context" });
    const v = vec3.create();
    vec3.set(v, 0, 0, 0);
    const b = vec3.create();
    vec3.set(b, 0, 0, -2);
    c.onChange = y;
    setTimeout(y, 100);
    let C = null;
    let O = true;
    let L = true;
    window.addEventListener("blur", () => {
      O = false;
    });
    window.addEventListener("focus", () => {
      O = true;
    });
    document.addEventListener("visibilitychange", () => {
      L = !document.hidden;
    });
    E();
    d.onChange = () => {
      a.set(0);
      i.set(0);
    };
    function S() {
      if (s.get() && r.patch.loading.getProgress() < 1) return 5;
      if (o.get()) {
        if (!L) return 10;
        if (!O) return 30;
      }
      return t.get();
    }
    function y() {
      function e() {
        if (C) C.style.display = "block";
      }
      function t() {
        if (C) C.style.display = "none";
      }
      r.patch.cgl.canvas.addEventListener("mouseleave", t);
      r.patch.cgl.canvas.addEventListener("mouseenter", e);
      if (c.get()) {
        if (!C) {
          C = document.createElement("div");
          const n = r.patch.cgl.canvas.parentElement;
          if (n) n.appendChild(C);
          C.addEventListener("mouseenter", e);
          C.addEventListener("click", function (e) {
            if (CABLES.UI && !e.shiftKey) gui.cycleFullscreen();
            else f.fullScreen();
          });
        }
        C.style.padding = "10px";
        C.style.position = "absolute";
        C.style.right = "5px";
        C.style.top = "5px";
        C.style.width = "20px";
        C.style.height = "20px";
        C.style.cursor = "pointer";
        C.style["border-radius"] = "40px";
        C.style.background = "#444";
        C.style["z-index"] = "9999";
        C.style.display = "none";
        C.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 490 490" style="width:20px;height:20px;" xml:space="preserve" width="512px" height="512px"><g><path d="M173.792,301.792L21.333,454.251v-80.917c0-5.891-4.776-10.667-10.667-10.667C4.776,362.667,0,367.442,0,373.333V480     c0,5.891,4.776,10.667,10.667,10.667h106.667c5.891,0,10.667-4.776,10.667-10.667s-4.776-10.667-10.667-10.667H36.416     l152.459-152.459c4.093-4.237,3.975-10.99-0.262-15.083C184.479,297.799,177.926,297.799,173.792,301.792z" fill="#FFFFFF"/><path d="M480,0H373.333c-5.891,0-10.667,4.776-10.667,10.667c0,5.891,4.776,10.667,10.667,10.667h80.917L301.792,173.792     c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262c0.089-0.086,0.176-0.173,0.262-0.262     L469.333,36.416v80.917c0,5.891,4.776,10.667,10.667,10.667s10.667-4.776,10.667-10.667V10.667C490.667,4.776,485.891,0,480,0z" fill="#FFFFFF"/><path d="M36.416,21.333h80.917c5.891,0,10.667-4.776,10.667-10.667C128,4.776,123.224,0,117.333,0H10.667     C4.776,0,0,4.776,0,10.667v106.667C0,123.224,4.776,128,10.667,128c5.891,0,10.667-4.776,10.667-10.667V36.416l152.459,152.459     c4.237,4.093,10.99,3.975,15.083-0.262c3.992-4.134,3.992-10.687,0-14.82L36.416,21.333z" fill="#FFFFFF"/><path d="M480,362.667c-5.891,0-10.667,4.776-10.667,10.667v80.917L316.875,301.792c-4.237-4.093-10.99-3.976-15.083,0.261     c-3.993,4.134-3.993,10.688,0,14.821l152.459,152.459h-80.917c-5.891,0-10.667,4.776-10.667,10.667s4.776,10.667,10.667,10.667     H480c5.891,0,10.667-4.776,10.667-10.667V373.333C490.667,367.442,485.891,362.667,480,362.667z" fill="#FFFFFF"/></g></svg>';
      } else {
        if (C) {
          C.style.display = "none";
          C.remove();
          C = null;
        }
      }
    }
    r.onDelete = function () {
      f.gl.clearColor(0, 0, 0, 0);
      f.gl.clear(f.gl.COLOR_BUFFER_BIT | f.gl.DEPTH_BUFFER_BIT);
    };
    function M(e) {
      if (!p.get()) return;
      if (f.aborted || f.canvas.clientWidth === 0 || f.canvas.clientHeight === 0)
        return;
      const t = performance.now();
      r.patch.config.fpsLimit = S();
      if (f.canvasWidth == -1) {
        f.setCanvas(r.patch.config.glCanvasId);
        return;
      }
      if (f.canvasWidth != a.get() || f.canvasHeight != i.get()) {
        let e = 1;
        if (d.get() == "CSS") e = r.patch.cgl.pixelDensity;
        a.set(f.canvasWidth / e);
        i.set(f.canvasHeight / e);
      }
      if (CABLES.now() - h > 1e3) {
        CGL.fpsReport = CGL.fpsReport || [];
        if (r.patch.loading.getProgress() >= 1 && h !== 0) CGL.fpsReport.push(m);
        m = 0;
        h = CABLES.now();
      }
      CGL.MESH.lastShader = null;
      CGL.MESH.lastMesh = null;
      f.renderStart(f, v, b);
      if (l.get()) {
        f.gl.clearColor(0, 0, 0, 1);
        f.gl.clear(f.gl.COLOR_BUFFER_BIT | f.gl.DEPTH_BUFFER_BIT);
      }
      n.trigger();
      if (CGL.MESH.lastMesh) CGL.MESH.lastMesh.unBind();
      if (CGL.Texture.previewTexture) {
        if (!CGL.Texture.texturePreviewer)
          CGL.Texture.texturePreviewer = new CGL.Texture.texturePreview(f);
        CGL.Texture.texturePreviewer.render(CGL.Texture.previewTexture);
      }
      f.renderEnd(f);
      if (u.get()) {
        f.gl.clearColor(1, 1, 1, 1);
        f.gl.colorMask(false, false, false, true);
        f.gl.clear(f.gl.COLOR_BUFFER_BIT);
        f.gl.colorMask(true, true, true, true);
      }
      if (!f.frameStore.phong) f.frameStore.phong = {};
      m++;
      r.patch.cgl.profileData.profileMainloopMs = performance.now() - t;
    }
    function E() {
      setTimeout(() => {
        if (r.patch.getOpsByObjName(r.name).length > 1) {
          r.setUiError("multimainloop", "there should only be one mainloop op!");
          r.patch.addEventListener("onOpDelete", E);
        } else r.setUiError("multimainloop", null, 1);
      }, 500);
    }
  };
  Ops.Gl.MainLoop.prototype = new CABLES.Op();
  CABLES.OPS["b0472a1d-db16-4ba6-8787-f300fbdc77bb"] = {
    f: Ops.Gl.MainLoop,
    objName: "Ops.Gl.MainLoop",
  };
  Ops.Gl.Shader.WireframeMaterial = function () {
    CABLES.Op.apply(this, arguments);
    const r = this;
    const e = {
      wireframe_frag:
        "{{MODULES_HEAD}}\n\nIN vec3 barycentric;\nUNI float width;\nUNI float opacity;\nUNI float r,g,b;\nUNI float fr,fg,fb;\nIN vec3 norm;\n\nfloat edgeFactor()\n{\n    vec3 d = fwidth(barycentric);\n    vec3 a3 = smoothstep(vec3(0.0), d*width*4.0, barycentric);\n    return min(min(a3.x, a3.y), a3.z);\n}\n\nvoid main()\n{\n    {{MODULE_BEGIN_FRAG}}\n\n    vec4 col;\n\n    #ifdef WIREFRAME_FILL\n        float v=opacity*(1.0-edgeFactor())*0.95;\n        vec3 wire = vec3(fr, fg, fb);\n        col.rgb = vec3(r, g, b);\n        col.rgb = mix(wire,col.rgb,v);\n        col.a = opacity;\n    #endif\n\n    #ifndef WIREFRAME_FILL\n        col = vec4(r,g,b, opacity*(1.0-edgeFactor())*0.95);\n    #endif\n\n    {{MODULE_COLOR}}\n\n// col=vec4(1.0);\n    outColor=col;\n}",
      wireframe_vert:
        "{{MODULES_HEAD}}\n\nIN vec3 vPosition;\nUNI mat4 projMatrix;\nUNI mat4 modelMatrix;\nUNI mat4 viewMatrix;\nOUT vec3 barycentric;\nIN vec2 attrTexCoord;\nOUT vec2 texCoord;\n\nIN vec3 attrBarycentric;\nIN vec3 attrVertNormal;\nOUT vec3 norm;\n\nvoid main()\n{\n    norm=attrVertNormal;\n    texCoord=attrTexCoord;\n    barycentric=attrBarycentric;\n    mat4 mMatrix=modelMatrix;\n    vec4 pos=vec4(vPosition, 1.0);\n\n    {{MODULE_VERTEX_POSITION}}\n\n    gl_Position = projMatrix * viewMatrix * mMatrix * pos;\n}\n",
    };
    let t = r.patch.cgl;
    let n = r.inTrigger("render");
    let a = r.outTrigger("trigger");
    let i = r.inValueBool("enable depth testing", true);
    let o = r.inValueBool("fill", true);
    function s() {
      if (p)
        if (o.get()) p.define("WIREFRAME_FILL");
        else p.removeDefine("WIREFRAME_FILL");
    }
    o.onChange = function () {
      s();
    };
    let l = r.inValueSlider("width", 0.25);
    l.onChange = function () {
      g.setValue(l.get());
    };
    let u = r.inValueSlider("opacity", 1);
    u.onChange = function () {
      d.setValue(u.get());
    };
    if (t.glVersion == 1 && !t.gl.getExtension("OES_standard_derivatives")) {
      r.uiAttr({ error: "no oes standart derivatives!" });
    } else {
      r.uiAttr({ error: null });
    }
    let c = function () {
      t.pushDepthTest(i.get());
      t.pushShader(p);
      a.trigger();
      t.popShader();
      t.popDepthTest();
    };
    var p = new CGL.Shader(t, "Wireframe Material");
    if (t.glVersion > 1) p.glslVersion = 300;
    var g = new CGL.Uniform(p, "f", "width", l.get());
    var d = new CGL.Uniform(p, "f", "opacity", u.get());
    if (t.glVersion == 1) p.enableExtension("OES_standard_derivatives");
    p.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG"]);
    p.setSource(e.wireframe_vert || "", e.wireframe_frag || "");
    p.wireframe = true;
    s();
    {
      var f = r.inValueSlider("diffuse r", Math.random());
      var m = r.inValueSlider("diffuse g", Math.random());
      var h = r.inValueSlider("diffuse b", Math.random());
      f.setUiAttribs({ colorPick: true });
    }
    m.uniform = new CGL.Uniform(p, "f", "g", m);
    f.uniform = new CGL.Uniform(p, "f", "r", f);
    h.uniform = new CGL.Uniform(p, "f", "b", h);
    {
      let e = r.inValueSlider("Fill R", Math.random());
      e.setUiAttribs({ colorPick: true });
      e.uniform = new CGL.Uniform(p, "f", "fr", e);
      let t = r.inValueSlider("Fill G", Math.random());
      t.uniform = new CGL.Uniform(p, "f", "fg", t);
      let n = r.inValueSlider("Fill B", Math.random());
      n.uniform = new CGL.Uniform(p, "f", "fb", n);
    }
    n.onTriggered = c;
    c();
  };
  Ops.Gl.Shader.WireframeMaterial.prototype = new CABLES.Op();
  CABLES.OPS["e5d64a7d-b161-4f85-907e-e10a34691733"] = {
    f: Ops.Gl.Shader.WireframeMaterial,
    objName: "Ops.Gl.Shader.WireframeMaterial",
  };
  Ops.Gl.ClearColor = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = {};
    const n = e.inTrigger("render"),
      r = e.outTrigger("trigger"),
      a = e.inFloatSlider("r", 0.1),
      i = e.inFloatSlider("g", 0.1),
      o = e.inFloatSlider("b", 0.1),
      s = e.inFloatSlider("a", 1);
    a.setUiAttribs({ colorPick: true });
    const l = e.patch.cgl;
    n.onTriggered = function () {
      l.gl.clearColor(a.get(), i.get(), o.get(), s.get());
      l.gl.clear(l.gl.COLOR_BUFFER_BIT | l.gl.DEPTH_BUFFER_BIT);
      r.trigger();
    };
  };
  Ops.Gl.ClearColor.prototype = new CABLES.Op();
  CABLES.OPS["19b441eb-9f63-4f35-ba08-b87841517c4d"] = {
    f: Ops.Gl.ClearColor,
    objName: "Ops.Gl.ClearColor",
  };
  Ops.Gl.Matrix.Transform = function () {
    CABLES.Op.apply(this, arguments);
    const t = this;
    const e = {};
    const n = t.inTrigger("render"),
      r = t.inValue("posX", 0),
      a = t.inValue("posY", 0),
      i = t.inValue("posZ", 0),
      o = t.inValue("scale", 1),
      s = t.inValue("rotX", 0),
      l = t.inValue("rotY", 0),
      u = t.inValue("rotZ", 0),
      c = t.outTrigger("trigger");
    t.setPortGroup("Rotation", [s, l, u]);
    t.setPortGroup("Position", [r, a, i]);
    t.setPortGroup("Scale", [o]);
    t.setUiAxisPorts(r, a, i);
    const p = t.patch.cgl;
    const g = vec3.create();
    const d = vec3.create();
    const f = mat4.create();
    mat4.identity(f);
    let m = false,
      h = false,
      v = true,
      b = true,
      C = true;
    s.onChange = l.onChange = u.onChange = E;
    r.onChange = a.onChange = i.onChange = y;
    o.onChange = M;
    n.onTriggered = function () {
      let e = false;
      if (v) {
        L();
        e = true;
      }
      if (b) {
        S();
        e = true;
      }
      if (C) e = true;
      if (e) O();
      p.pushModelMatrix();
      mat4.multiply(p.mMatrix, p.mMatrix, f);
      c.trigger();
      p.popModelMatrix();
      if (CABLES.UI && CABLES.UI.showCanvasTransforms)
        gui.setTransform(t.id, r.get(), a.get(), i.get());
      if (t.isCurrentUiOp()) gui.setTransformGizmo({ posX: r, posY: a, posZ: i });
    };
    t.transform3d = function () {
      return { pos: [r, a, i] };
    };
    function O() {
      mat4.identity(f);
      if (h) mat4.translate(f, f, g);
      if (s.get() !== 0) mat4.rotateX(f, f, s.get() * CGL.DEG2RAD);
      if (l.get() !== 0) mat4.rotateY(f, f, l.get() * CGL.DEG2RAD);
      if (u.get() !== 0) mat4.rotateZ(f, f, u.get() * CGL.DEG2RAD);
      if (m) mat4.scale(f, f, d);
      C = false;
    }
    function L() {
      h = false;
      if (r.get() !== 0 || a.get() !== 0 || i.get() !== 0) h = true;
      vec3.set(g, r.get(), a.get(), i.get());
      v = false;
    }
    function S() {
      m = true;
      vec3.set(d, o.get(), o.get(), o.get());
      b = false;
    }
    function y() {
      v = true;
    }
    function M() {
      b = true;
    }
    function E() {
      C = true;
    }
    O();
  };
  Ops.Gl.Matrix.Transform.prototype = new CABLES.Op();
  CABLES.OPS["650baeb1-db2d-4781-9af6-ab4e9d4277be"] = {
    f: Ops.Gl.Matrix.Transform,
    objName: "Ops.Gl.Matrix.Transform",
  };
  Ops.Math.Multiply = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = {};
    const n = e.inValueFloat("number1", 1);
    const r = e.inValueFloat("number2", 2);
    const a = e.outValue("result");
    n.onChange = r.onChange = i;
    i();
    function i() {
      const e = n.get();
      const t = r.get();
      a.set(e * t);
    }
  };
  Ops.Math.Multiply.prototype = new CABLES.Op();
  CABLES.OPS["1bbdae06-fbb2-489b-9bcc-36c9d65bd441"] = {
    f: Ops.Math.Multiply,
    objName: "Ops.Math.Multiply",
  };
  Ops.User.jiinliin.MyRelativeTime = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = {};
    const n = e.inTrigger("exe"),
      r = e.inValue("Multiply", 1),
      a = e.outTrigger("Trigger out"),
      i = e.outValue("result");
    n.onTriggered = o;
    o();
    function o() {
      i.set(e.patch.freeTimer.get() * r.get());
      a.trigger();
    }
  };
  Ops.User.jiinliin.MyRelativeTime.prototype = new CABLES.Op();
  Ops.User.jiinliin.Sphere_v2 = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = {};
    const L = Math.PI * 2,
      S = e.patch.cgl,
      n = e.inTrigger("render"),
      y = e.inValue("radius", 0.5),
      M = e.inValue("stacks", 32),
      E = e.inValue("slices", 32),
      x = e.inValueSlider("Filloffset", 1),
      r = e.inValueBool("Render", true),
      a = e.outTrigger("trigger"),
      B = e.outObject("geometry", null, "geometry"),
      I = vec3.fromValues(0, 1, 0),
      A = vec3.fromValues(1, 0, 0);
    let F = new CGL.Geometry("Sphere"),
      w = vec3.create(),
      T = vec3.create(),
      G = true,
      _;
    function i() {
      const e = Math.max(M.get(), 2),
        t = Math.max(E.get(), 3),
        n = Math.min(Math.max(x.get() * e, 1), e),
        r = y.get();
      let a = [],
        i = [],
        o = [],
        s = [],
        l = [],
        u = [],
        c,
        p,
        g,
        d,
        f,
        m,
        h,
        v,
        b,
        C,
        O;
      for (C = h = 0; C < e + 1; C++) {
        b = (C / e - 0.5) * Math.PI;
        p = Math.sin(b);
        m = Math.cos(b);
        for (O = t; O >= 0; O--) {
          v = (O / t) * L;
          c = Math.cos(v) * m;
          g = Math.sin(v) * m;
          a.push(c * r, p * r, g * r);
          i.push(O / t, C / (e + 1));
          d = Math.sqrt(c * c + p * p + g * g);
          o.push((w[0] = c / d), (w[1] = p / d), (w[2] = g / d));
          if (p == d) f = A;
          else f = I;
          vec3.cross(T, w, f);
          vec3.normalize(T, T);
          Array.prototype.push.apply(s, T);
          vec3.cross(T, T, w);
          Array.prototype.push.apply(l, T);
        }
        if (C == 0 || C > n) continue;
        for (O = 0; O < t; O++, h++) {
          u.push(h, h + 1, h + t + 1, h + 1, h + t + 2, h + t + 1);
        }
        h++;
      }
      F.clear();
      F.vertices = a;
      F.texCoords = i;
      F.vertexNormals = o;
      F.tangents = s;
      F.biTangents = l;
      F.verticesIndices = u;
      B.set(null);
      B.set(F);
      if (!_) _ = new CGL.Mesh(S, F);
      else _.setGeom(F);
      G = false;
    }
    n.onTriggered = function () {
      if (G) i();
      if (r.get()) _.render(S.getShader());
      a.trigger();
    };
    M.onChange =
      E.onChange =
      x.onChange =
      y.onChange =
        function () {
          G = true;
        };
    e.onDelete = function () {
      if (_) _.dispose();
    };
  };
  Ops.User.jiinliin.Sphere_v2.prototype = new CABLES.Op();
  Ops.User.jiinliin.Cube_v2 = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = {};
    const n = e.inTrigger("Render"),
      r = e.inValueBool("Render Mesh", true),
      o = e.inValue("Width", 1),
      s = e.inValue("Length", 1),
      l = e.inValue("Height", 1),
      u = e.inValueBool("Center", true),
      c = e.inSwitch("Mapping", ["Side", "Cube +-"], "Side"),
      g = e.inValue("Bias", 0),
      d = e.inValueBool("Flip X", true),
      p = e.inValueBool("Top", true),
      f = e.inValueBool("Bottom", true),
      m = e.inValueBool("Left", true),
      h = e.inValueBool("Right", true),
      v = e.inValueBool("Front", true),
      b = e.inValueBool("Back", true),
      a = e.outTrigger("Next"),
      C = e.outObject("geometry", null, "geometry");
    const O = e.patch.cgl;
    e.toWorkPortsNeedToBeLinked(n);
    e.setPortGroup("Mapping", [c, g, d]);
    e.setPortGroup("Geometry", [o, l, s, u]);
    e.setPortGroup("Sides", [p, f, m, h, v, b]);
    let L = null,
      S = null,
      y = true,
      M = true;
    g.onChange =
      d.onChange =
      p.onChange =
      f.onChange =
      m.onChange =
      h.onChange =
      v.onChange =
      b.onChange =
      c.onChange =
      o.onChange =
      l.onChange =
      s.onChange =
      u.onChange =
        i;
    function i() {
      M = true;
    }
    n.onLinkChanged = function () {
      if (!n.isLinked()) {
        C.set(null);
        return;
      }
      E();
    };
    n.onTriggered = function () {
      if (M) E();
      if (r.get() && S && y) S.render(O.getShader());
      a.trigger();
    };
    e.preRender = function () {
      E();
      S.render(O.getShader());
    };
    function E() {
      if (!L) L = new CGL.Geometry("cubemesh");
      L.clear();
      let e = o.get();
      let t = -1 * o.get();
      let n = l.get();
      let r = -1 * l.get();
      let a = s.get();
      let i = -1 * s.get();
      if (!u.get()) {
        t = 0;
        r = 0;
        i = 0;
      } else {
        e *= 0.5;
        t *= 0.5;
        n *= 0.5;
        r *= 0.5;
        a *= 0.5;
        i *= 0.5;
      }
      if (c.get() == "Side") x(L, e, n, a, t, r, i);
      else B(L, e, n, a, t, r, i);
      L.verticesIndices = [];
      if (p.get()) L.verticesIndices.push(8, 9, 10, 8, 10, 11);
      if (f.get()) L.verticesIndices.push(12, 13, 14, 12, 14, 15);
      if (m.get()) L.verticesIndices.push(20, 21, 22, 20, 22, 23);
      if (h.get()) L.verticesIndices.push(16, 17, 18, 16, 18, 19);
      if (b.get()) L.verticesIndices.push(4, 5, 6, 4, 6, 7);
      if (v.get()) L.verticesIndices.push(0, 1, 2, 0, 2, 3);
      if (L.verticesIndices.length === 0) y = false;
      else y = true;
      if (S) S.dispose();
      S = new CGL.Mesh(O, L);
      C.set(null);
      C.set(L);
      M = false;
    }
    e.onDelete = function () {
      if (S) S.dispose();
    };
    function x(e, t, n, r, a, i, o) {
      e.vertices = [
        a,
        i,
        r,
        t,
        i,
        r,
        t,
        n,
        r,
        a,
        n,
        r,
        a,
        i,
        o,
        a,
        n,
        o,
        t,
        n,
        o,
        t,
        i,
        o,
        a,
        n,
        o,
        a,
        n,
        r,
        t,
        n,
        r,
        t,
        n,
        o,
        a,
        i,
        o,
        t,
        i,
        o,
        t,
        i,
        r,
        a,
        i,
        r,
        t,
        i,
        o,
        t,
        n,
        o,
        t,
        n,
        r,
        t,
        i,
        r,
        a,
        i,
        o,
        a,
        i,
        r,
        a,
        n,
        r,
        a,
        n,
        o,
      ];
      const s = g.get();
      let l = 1;
      let u = 0;
      if (d.get()) {
        l = 0;
        u = 1;
      }
      e.setTexCoords([
        u + s,
        1 - s,
        l - s,
        1 - s,
        l - s,
        0 + s,
        u + s,
        0 + s,
        l - s,
        1 - s,
        l - s,
        0 + s,
        u + s,
        0 + s,
        u + s,
        1 - s,
        u + s,
        0 + s,
        u + s,
        1 - s,
        l - s,
        1 - s,
        l - s,
        0 + s,
        l - s,
        0 + s,
        u + s,
        0 + s,
        u + s,
        1 - s,
        l - s,
        1 - s,
        l - s,
        1 - s,
        l - s,
        0 + s,
        u + s,
        0 + s,
        u + s,
        1 - s,
        u + s,
        1 - s,
        l - s,
        1 - s,
        l - s,
        0 + s,
        u + s,
        0 + s,
      ]);
      e.vertexNormals = new Float32Array([
        0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
        -1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
        -1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
        -1, 0, 0,
      ]);
      e.tangents = new Float32Array([
        -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
        0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
        0, 0, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
        0, 0, 1,
      ]);
      e.biTangents = new Float32Array([
        0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
        0, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
        0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
        0,
      ]);
    }
    function B(e, t, n, r, a, i, o) {
      e.vertices = [
        a,
        i,
        r,
        t,
        i,
        r,
        t,
        n,
        r,
        a,
        n,
        r,
        a,
        i,
        o,
        a,
        n,
        o,
        t,
        n,
        o,
        t,
        i,
        o,
        a,
        n,
        o,
        a,
        n,
        r,
        t,
        n,
        r,
        t,
        n,
        o,
        a,
        i,
        o,
        t,
        i,
        o,
        t,
        i,
        r,
        a,
        i,
        r,
        t,
        i,
        o,
        t,
        n,
        o,
        t,
        n,
        r,
        t,
        i,
        r,
        a,
        i,
        o,
        a,
        i,
        r,
        a,
        n,
        r,
        a,
        n,
        o,
      ];
      const s = 0.25;
      const l = 1 / 3;
      const u = g.get();
      let c = 0;
      if (d.get()) c = 1;
      const p = [];
      p.push(
        c + s + u,
        l * 2 - u,
        c + s * 2 - u,
        l * 2 - u,
        c + s * 2 - u,
        l + u,
        c + s + u,
        l + u,
        c + s * 4 - u,
        l * 2 - u,
        c + s * 4 - u,
        l + u,
        c + s * 3 + u,
        l + u,
        c + s * 3 + u,
        l * 2 - u
      );
      if (d.get())
        p.push(
          s + u,
          0 - u,
          s * 2 - u,
          0 - u,
          s * 2 - u,
          l * 1 + u,
          s + u,
          l * 1 + u,
          s + u,
          l * 3 + u,
          s + u,
          l * 2 - u,
          s * 2 - u,
          l * 2 - u,
          s * 2 - u,
          l * 3 + u
        );
      else
        p.push(
          s + u,
          0 + u,
          s + u,
          l * 1 - u,
          s * 2 - u,
          l * 1 - u,
          s * 2 - u,
          0 + u,
          s + u,
          l * 3 - u,
          s * 2 - u,
          l * 3 - u,
          s * 2 - u,
          l * 2 + u,
          s + u,
          l * 2 + u
        );
      p.push(
        c + s * 3 - u,
        1 - l - u,
        c + s * 3 - u,
        1 - l * 2 + u,
        c + s * 2 + u,
        1 - l * 2 + u,
        c + s * 2 + u,
        1 - l - u,
        c + s * 0 + u,
        1 - l - u,
        c + s * 1 - u,
        1 - l - u,
        c + s * 1 - u,
        1 - l * 2 + u,
        c + s * 0 + u,
        1 - l * 2 + u
      );
      e.setTexCoords(p);
      e.vertexNormals = [
        0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
        -1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
        -1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
        -1, 0, 0,
      ];
      e.tangents = new Float32Array([
        -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
        0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
        0, 0, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
        0, 0, 1,
      ]);
      e.biTangents = new Float32Array([
        0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
        0, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
        0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
        0,
      ]);
    }
  };
  Ops.User.jiinliin.Cube_v2.prototype = new CABLES.Op();
  window.addEventListener("load", function (e) {
    CABLES.jsLoaded = new Event("CABLES.jsLoaded");
    document.dispatchEvent(CABLES.jsLoaded);
  });
  