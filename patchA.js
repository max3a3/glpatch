var CABLES = (function (t) {
    var e = {};
    function i(s) {
      if (e[s]) return e[s].exports;
      var r = (e[s] = {
        i: s,
        l: !1,
        exports: {},
      });
      return t[s].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
    }
    return (
      (i.m = t),
      (i.c = e),
      (i.d = function (t, e, s) {
        i.o(t, e) ||
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: s,
          });
      }),
      (i.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module",
          }),
          Object.defineProperty(t, "__esModule", {
            value: !0,
          });
      }),
      (i.t = function (t, e) {
        if ((1 & e && (t = i(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var s = Object.create(null);
        if (
          (i.r(s),
          Object.defineProperty(s, "default", {
            enumerable: !0,
            value: t,
          }),
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
        i.d(s, "base64Chars", function () {
          return h;
        }),
        i.d(s, "base64lookup", function () {
          return l;
        }),
        i.d(s, "b64encTypesArray", function () {
          return c;
        }),
        i.d(s, "b64decTypedArray", function () {
          return u;
        });
      var r = {};
      i.r(r),
        i.d(r, "shuffleArray", function () {
          return d;
        }),
        i.d(r, "shortId", function () {
          return E;
        }),
        i.d(r, "uuid", function () {
          return b;
        }),
        i.d(r, "generateUUID", function () {
          return A;
        }),
        i.d(r, "simpleId", function () {
          return x;
        }),
        i.d(r, "smoothStep", function () {
          return v;
        }),
        i.d(r, "smootherStep", function () {
          return I;
        }),
        i.d(r, "clamp", function () {
          return O;
        }),
        i.d(r, "map", function () {
          return R;
        }),
        i.d(r, "cacheBust", function () {
          return P;
        }),
        i.d(r, "basename", function () {
          return N;
        }),
        i.d(r, "jsonp", function () {
          return F;
        }),
        i.d(r, "ajaxSync", function () {
          return C;
        }),
        i.d(r, "ajax", function () {
          return M;
        }),
        i.d(r, "request", function () {
          return w;
        }),
        i.d(r, "UTILS", function () {
          return g;
        });
      var n = {};
      i.r(n),
        i.d(n, "easeExpoIn", function () {
          return Y;
        }),
        i.d(n, "easeExpoOut", function () {
          return W;
        }),
        i.d(n, "easeExpoInOut", function () {
          return z;
        }),
        i.d(n, "easeCubicIn", function () {
          return X;
        }),
        i.d(n, "easeCubicOut", function () {
          return K;
        }),
        i.d(n, "easeCubicInOut", function () {
          return j;
        }),
        i.d(n, "ANIM", function () {
          return H;
        }),
        i.d(n, "Anim", function () {
          return Q;
        }),
        i.d(n, "TL", function () {
          return q;
        });
      var o = {};
      i.r(o),
        i.d(o, "PatchConnectionReceiver", function () {
          return Ut;
        }),
        i.d(o, "PatchConnectionSender", function () {
          return Bt;
        }),
        i.d(o, "PatchConnectorBroadcastChannel", function () {
          return Lt;
        });
      const h =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        a = new Uint8Array(256);
      for (let t = 0; t < h.length; t++) a[h.charCodeAt(t)] = t;
      const l = a,
        c = function (t) {
          t.buffer && (t = t.buffer);
          let e,
            i = new Uint8Array(t),
            s = i.length,
            r = "";
          for (e = 0; e < s; e += 3)
            (r += h[i[e] >> 2]),
              (r += h[((3 & i[e]) << 4) | (i[e + 1] >> 4)]),
              (r += h[((15 & i[e + 1]) << 2) | (i[e + 2] >> 6)]),
              (r += h[63 & i[e + 2]]);
          return (
            s % 3 == 2
              ? (r = r.substring(0, r.length - 1) + "=")
              : s % 3 == 1 && (r = r.substring(0, r.length - 2) + "=="),
            r
          );
        },
        u = function (t) {
          let e,
            i,
            s,
            r,
            n,
            o = 0.75 * t.length,
            h = t.length,
            a = 0;
          "=" === t[t.length - 1] && (o--, "=" === t[t.length - 2] && o--);
          let c = new ArrayBuffer(o),
            u = new Uint8Array(c);
          for (e = 0; e < h; e += 4)
            (i = l[t.charCodeAt(e)]),
              (s = l[t.charCodeAt(e + 1)]),
              (r = l[t.charCodeAt(e + 2)]),
              (n = l[t.charCodeAt(e + 3)]),
              (u[a++] = (i << 2) | (s >> 4)),
              (u[a++] = ((15 & s) << 4) | (r >> 2)),
              (u[a++] = ((3 & r) << 6) | (63 & n));
          return c;
        };
      class _ {
        constructor(t) {
          (this._logs = []), (this.initiator = t);
        }
        stack(t) {
          console.error("[" + this.initiator + "] ", t),
            console.log(new Error().stack);
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
          console.error("[" + this.initiator + "]", ...arguments);
        }
        info(t) {
          console.error("[" + this.initiator + "]", ...arguments);
        }
        warn(t) {
          console.warn("[" + this.initiator + "]", ...arguments);
        }
        verbose() {
          ((CABLES.UI &&
            CABLES.UI.logFilter.shouldPrint(this.initiator, ...arguments)) ||
            !CABLES.logSilent) &&
            console.log("[" + this.initiator + "]", ...arguments);
        }
        log(t) {
          ((CABLES.UI &&
            CABLES.UI.logFilter.shouldPrint(this.initiator, ...arguments)) ||
            !CABLES.logSilent) &&
            console.log("[" + this.initiator + "]", ...arguments);
        }
        userInteraction(t) {}
      }
      const p = function () {
          (this._log = new _("eventtaget")),
            (this._eventCallbacks = {}),
            (this._logName = ""),
            (this._logEvents = !1),
            (this._listeners = {}),
            (this.addEventListener = this.on =
              function (t, e, i) {
                const s = {
                  id: (i || "") + CABLES.uuid(),
                  name: t,
                  cb: e,
                };
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
        g = {
          float32Concat: function (t, e) {
            t instanceof Float32Array || (t = new Float32Array(t)),
              e instanceof Float32Array || (e = new Float32Array(e));
            const i = new Float32Array(t.length + e.length);
            return i.set(t), i.set(e, t.length), i;
          },
        },
        d = function (t) {
          for (let e = t.length - 1; e > 0; e--) {
            const i = Math.floor(Math.seededRandom() * (e + 1)),
              s = t[e];
            (t[e] = t[i]), (t[i] = s);
          }
          return t;
        },
        f = {},
        m = function () {
          let t = Math.random().toString(36).substr(2, 9);
          return f.hasOwnProperty(t) && (t = m()), (f[t] = !0), t;
        },
        E = m,
        T = function () {
          let t = new Date().getTime();
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
            const i = (t + 16 * Math.random()) % 16 | 0;
            return (
              (t = Math.floor(t / 16)), ("x" == e ? i : (3 & i) | 8).toString(16)
            );
          });
        },
        b = T,
        A = T;
      let y = 0;
      const x = function () {
          return y++, y;
        },
        v = function (t) {
          const e = Math.max(0, Math.min(1, (t - 0) / 1));
          return (t = e * e * (3 - 2 * e));
        },
        I = function (t) {
          const e = Math.max(0, Math.min(1, (t - 0) / 1));
          return (t = e * e * e * (e * (6 * e - 15) + 10));
        },
        O = function (t, e, i) {
          return Math.min(Math.max(t, e), i);
        },
        R = function (t, e, i, s, r, n) {
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
          let _ = 0,
            p = 0;
          return (
            (_ = o
              ? ((a - t) * (u - c)) / (a - h)
              : ((t - h) * (u - c)) / (a - h)),
            (p = l ? u - _ : _ + c),
            n
              ? 1 == n
                ? s +
                  (t = Math.max(0, Math.min(1, (p - s) / (r - s)))) *
                    t *
                    (3 - 2 * t) *
                    (r - s)
                : 2 == n
                ? s +
                  (t = Math.max(0, Math.min(1, (p - s) / (r - s)))) *
                    t *
                    t *
                    (t * (6 * t - 15) + 10) *
                    (r - s)
                : p
              : p
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
      const P = function (t) {
          return (
            t.indexOf("?") > -1 ? (t += "&") : (t += "?"),
            t + "cb=" + CABLES.uuid()
          );
        },
        N = function (t) {
          let e = "";
          if (!t) return "";
          const i = (t + "").split("/");
          if (i.length > 0) {
            let t = i[i.length - 1].split("?");
            (e = t[0]), (t = e.split(".")), (e = t[0]);
          }
          return e;
        };
      let S = null;
      const F = function (t, e) {
          (S = S || 0), S++;
          const i = S;
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
          w({
            url: t,
            cb: e,
            method: i,
            data: s,
            contenttype: r,
            sync: !0,
          });
        },
        M = function (t, e, i, s, r, n, o = {}) {
          w({
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
        w = function (t) {
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
        };
      window.performance = window.performance || {
        offset: Date.now(),
        now: function () {
          return Date.now() - this.offset;
        },
      };
      const U = {
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
          EASING_BEZIER: 4,
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
        B = {
          OP_PORT_TYPE_VALUE: 0,
          OP_PORT_TYPE_FUNCTION: 1,
          OP_PORT_TYPE_OBJECT: 2,
          OP_PORT_TYPE_TEXTURE: 2,
          OP_PORT_TYPE_ARRAY: 3,
          OP_PORT_TYPE_DYNAMIC: 4,
          OP_PORT_TYPE_STRING: 5,
          OP_VERSION_PREFIX: "_v",
        },
        L = {
          PORT_DIR_IN: 0,
          PORT_DIR_OUT: 1,
        },
        k = {
          PACO_CLEAR: 0,
          PACO_VALUECHANGE: 1,
          PACO_OP_DELETE: 2,
          PACO_UNLINK: 3,
          PACO_LINK: 4,
          PACO_LOAD: 5,
          PACO_OP_CREATE: 6,
          PACO_OP_ENABLE: 7,
          PACO_OP_DISABLE: 8,
        },
        D = function (t, e, i, s) {
          p.apply(this),
            (this.data = {}),
            (this._log = new _("core_port")),
            (this.direction = L.PORT_DIR_IN),
            (this.id = A()),
            (this.parent = t),
            (this.links = []),
            (this.value = 0),
            (this.name = e),
            (this.type = i || B.OP_PORT_TYPE_VALUE),
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
      (D.prototype.getValueForDisplay = function () {
        let t = String(this.value);
        return t.length > 100 && (t = t.substring(0, 100)), t;
      }),
        (D.prototype.onAnimToggle = function () {}),
        (D.prototype._onAnimToggle = function () {
          this.onAnimToggle();
        }),
        (D.prototype.remove = function () {
          this.removeLinks(), this.parent.removePort(this);
        }),
        (D.prototype.setUiAttribs = function (t) {
          let e = !1;
          this.uiAttribs || (this.uiAttribs = {});
          for (const i in t)
            this.uiAttribs[i] != t[i] && (e = !0), (this.uiAttribs[i] = t[i]);
          e && this.emitEvent("onUiAttrChange", t);
        }),
        (D.prototype.getUiAttribs = function () {
          return this.uiAttribs;
        }),
        (D.prototype.getUiAttrib = function (t) {
          return this.uiAttribs && this.uiAttribs.hasOwnProperty(t)
            ? this.uiAttribs[t]
            : null;
        }),
        (D.prototype.get = function () {
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
        (D.prototype.set = D.prototype.setValue =
          function (t) {
            if (
              void 0 !== t &&
              this.parent.enabled &&
              !this.crashed &&
              (t !== this.value ||
                this.changeAlways ||
                this.type == B.OP_PORT_TYPE_TEXTURE ||
                this.type == B.OP_PORT_TYPE_ARRAY)
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
                    this.parent.patch.emitEvent("exception".ex, this.parent),
                    this.parent.onError && this.parent.onError(t);
                }
                this.parent &&
                  this.parent.patch &&
                  this.parent.patch.isEditorMode() &&
                  this.type == B.OP_PORT_TYPE_TEXTURE &&
                  gui.texturePreview().updateTexturePort(this);
              }
              if (this.direction == L.PORT_DIR_OUT)
                for (let t = 0; t < this.links.length; ++t)
                  this.links[t].setValue();
            }
          }),
        (D.prototype.updateAnim = function () {
          this._animated &&
            ((this.value = this.get()),
            (this._oldAnimVal != this.value || this.changeAlways) &&
              ((this._oldAnimVal = this.value), this.forceChange()),
            (this._oldAnimVal = this.value));
        }),
        (D.args = function (t) {
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
        (D.prototype.forceChange = function () {
          this.onValueChanged || this.onChange,
            this.emitEvent("change", this.value, this),
            this.onChange
              ? this.onChange(this, this.value)
              : this.onValueChanged && this.onValueChanged(this, this.value);
        }),
        (D.prototype.getTypeString = function () {
          return this.type == B.OP_PORT_TYPE_VALUE
            ? "Number"
            : this.type == B.OP_PORT_TYPE_FUNCTION
            ? "Trigger"
            : this.type == B.OP_PORT_TYPE_OBJECT
            ? "Object"
            : this.type == B.OP_PORT_TYPE_DYNAMIC
            ? "Dynamic"
            : this.type == B.OP_PORT_TYPE_ARRAY
            ? "Array"
            : this.type == B.OP_PORT_TYPE_STRING
            ? "String"
            : "Unknown";
        }),
        (D.prototype.deSerializeSettings = function (t) {
          if (
            t &&
            (t.animated && this.setAnimated(t.animated),
            t.useVariable && this.setVariableName(t.useVariable),
            t.anim)
          ) {
            this.anim || (this.anim = new Q()),
              t.anim.loop && (this.anim.loop = t.anim.loop);
            for (const e in t.anim.keys)
              this.anim.keys.push(new H.Key(t.anim.keys[e]));
          }
        }),
        (D.prototype.getSerialized = function () {
          const t = {};
          if (
            ((t.name = this.getName()),
            this.ignoreValueSerialize ||
              0 !== this.links.length ||
              (this.type == B.OP_PORT_TYPE_OBJECT &&
                this.value &&
                this.value.tex) ||
              (t.value = this.value),
            this._useVariableName && (t.useVariable = this._useVariableName),
            this._animated && (t.animated = !0),
            this.anim && (t.anim = this.anim.getSerialized()),
            "file" == this.uiAttribs.display &&
              (t.display = this.uiAttribs.display),
            this.direction == L.PORT_DIR_OUT && this.links.length > 0)
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
        (D.prototype.shouldLink = function () {
          return !0;
        }),
        (D.prototype.removeLinks = function () {
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
        (D.prototype.removeLink = function (t) {
          for (const e in this.links)
            this.links[e] == t && this.links.splice(e, 1);
          this.direction == L.PORT_DIR_IN &&
            (this.type == B.OP_PORT_TYPE_VALUE
              ? this.setValue(this._valueBeforeLink || 0)
              : this.setValue(this._valueBeforeLink || null)),
            this.onLinkChanged && this.onLinkChanged(),
            this.emitEvent("onLinkChanged");
        }),
        (D.prototype.getName = function () {
          return this.name;
        }),
        (D.prototype.addLink = function (t) {
          (this._valueBeforeLink = this.value),
            this.links.push(t),
            this.onLinkChanged && this.onLinkChanged(),
            this.emitEvent("onLinkChanged");
        }),
        (D.prototype.getLinkTo = function (t) {
          for (const e in this.links)
            if (this.links[e].portIn == t || this.links[e].portOut == t)
              return this.links[e];
        }),
        (D.prototype.removeLinkTo = function (t) {
          for (const e in this.links)
            if (this.links[e].portIn == t || this.links[e].portOut == t)
              return (
                this.links[e].remove(),
                this.onLinkChanged && this.onLinkChanged(),
                void this.emitEvent("onLinkChanged")
              );
        }),
        (D.prototype.isLinkedTo = function (t) {
          for (const e in this.links)
            if (this.links[e].portIn == t || this.links[e].portOut == t)
              return !0;
          return !1;
        }),
        (D.prototype.trigger = function () {
          if (0 === this.links.length) return;
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
        (D.prototype.call = function () {
          this._log.warn("call deprecated - use trigger() "), this.trigger();
        }),
        (D.prototype.execute = function () {
          this._log.warn(
            "### execute port: " + this.getName(),
            this.goals.length
          );
        }),
        (D.prototype.setVariableName = function (t) {
          this._useVariableName = t;
        }),
        (D.prototype.getVariableName = function () {
          return this._useVariableName;
        }),
        (D.prototype.setVariable = function (t) {
          this.setAnimated(!1);
          const e = {
            useVariable: !1,
          };
          this._variableIn &&
            (this._variableIn.removeListener(this.set.bind(this)),
            (this._variableIn = null)),
            t
              ? ((this._variableIn = this.parent.patch.getVar(t)),
                this._variableIn
                  ? (this.type == B.OP_PORT_TYPE_OBJECT
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
            this.setUiAttribs(e);
        }),
        (D.prototype._handleNoTriggerOpAnimUpdates = function (t) {
          let e = !1;
          for (let t = 0; t < this.parent.portsIn.length; t++)
            if (this.parent.portsIn.type == B.OP_PORT_TYPE_FUNCTION) {
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
        (D.prototype.setAnimated = function (t) {
          this._animated != t &&
            ((this._animated = t),
            this._animated && !this.anim && (this.anim = new Q()),
            this._onAnimToggle()),
            this._handleNoTriggerOpAnimUpdates(t),
            this.setUiAttribs({
              isAnimated: this._animated,
            });
        }),
        (D.prototype.toggleAnim = function (t) {
          (this._animated = !this._animated),
            this._animated && !this.anim && (this.anim = new Q()),
            this.setAnimated(this._animated),
            this._onAnimToggle(),
            this.setUiAttribs({
              isAnimated: this._animated,
            });
        }),
        (D.prototype.getType = function () {
          return this.type;
        }),
        (D.prototype.isLinked = function () {
          return this.links.length > 0;
        }),
        (D.prototype.isBoundToVar = function () {
          return null != this._useVariableName;
        }),
        (D.prototype.isAnimated = function () {
          return this._animated;
        }),
        (D.prototype.isHidden = function () {
          return this.uiAttribs.hidePort;
        }),
        (D.prototype._onTriggered = function (t) {
          this.parent.updateAnims(),
            this.parent.enabled && this.onTriggered && this.onTriggered(t);
        }),
        (D.prototype._onSetProfiling = function (t) {
          this.parent.patch.profiler.add("port", this),
            this.setValue(t),
            this.parent.patch.profiler.add("port", null);
        }),
        (D.prototype._onTriggeredProfiling = function () {
          this.parent.enabled &&
            this.onTriggered &&
            (this.parent.patch.profiler.add("port", this),
            this.onTriggered(),
            this.parent.patch.profiler.add("port", null));
        }),
        (D.prototype.onValueChange = function (t) {
          this.onChange = t;
        }),
        (D.prototype.getUiActiveState = function () {
          return this._uiActiveState;
        }),
        (D.prototype.setUiActiveState = function (t) {
          (this._uiActiveState = t),
            this.onUiActiveStateChange && this.onUiActiveStateChange();
        }),
        (D.prototype.hidePort = function () {
          this._log.warn("op.hideport() is deprecated, do not use it!");
        }),
        (D.portTypeNumberToString = function (t) {
          return t == B.OP_PORT_TYPE_VALUE
            ? "value"
            : t == B.OP_PORT_TYPE_FUNCTION
            ? "function"
            : t == B.OP_PORT_TYPE_OBJECT
            ? "object"
            : t == B.OP_PORT_TYPE_ARRAY
            ? "array"
            : t == B.OP_PORT_TYPE_STRING
            ? "string"
            : t == B.OP_PORT_TYPE_DYNAMIC
            ? "dynamic"
            : "unknown";
        });
      class V extends D {
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
            void 0 !== e &&
              this.indexPort.setUiAttribs({
                hidePort: e,
              });
        }
      }
      class G extends V {
        setUiAttribs(t) {
          if (this.indexPort.isLinked())
            for (const e in t) "greyout" != e || t[e] || (t[e] = "true");
          super.setUiAttribs(t);
        }
      }
      const H = {
        Key: function (t) {
          (this.time = 0),
            (this.value = 0),
            (this.ui = null),
            (this.onChange = null),
            (this._easing = 0),
            (this.cb = null),
            (this.cbTriggered = !1);
          this.setEasing(U.EASING_LINEAR), this.set(t);
        },
      };
      (H.Key.linear = function (t, e, i) {
        return parseFloat(e.value) + parseFloat(i.value - e.value) * t;
      }),
        (H.Key.easeLinear = function (t, e) {
          return H.Key.linear(t, this, e);
        }),
        (H.Key.easeAbsolute = function (t, e) {
          return this.value;
        });
      const Y = function (t) {
        return Math.pow(2, 10 * (t - 1));
      };
      H.Key.easeExpoIn = function (t, e) {
        return (t = Y(t)), H.Key.linear(t, this, e);
      };
      const W = function (t) {
        return (t = 1 - Math.pow(2, -10 * t));
      };
      H.Key.easeExpoOut = function (t, e) {
        return (t = W(t)), H.Key.linear(t, this, e);
      };
      const z = function (t) {
        return (
          (t *= 2) < 1
            ? (t = 0.5 * Math.pow(2, 10 * (t - 1)))
            : (t--, (t = 0.5 * (2 - Math.pow(2, -10 * t)))),
          t
        );
      };
      (H.Key.easeExpoInOut = function (t, e) {
        return (t = z(t)), H.Key.linear(t, this, e);
      }),
        (H.Key.easeSinIn = function (t, e) {
          return (
            (t = -1 * Math.cos((t * Math.PI) / 2) + 1), H.Key.linear(t, this, e)
          );
        }),
        (H.Key.easeSinOut = function (t, e) {
          return (t = Math.sin((t * Math.PI) / 2)), H.Key.linear(t, this, e);
        }),
        (H.Key.easeSinInOut = function (t, e) {
          return (
            (t = -0.5 * (Math.cos(Math.PI * t) - 1)), H.Key.linear(t, this, e)
          );
        });
      const X = function (t) {
        return (t *= t * t);
      };
      (H.Key.easeCubicIn = function (t, e) {
        return (t = X(t)), H.Key.linear(t, this, e);
      }),
        (H.Key.easeInQuint = function (t, e) {
          return (t *= t * t * t * t), H.Key.linear(t, this, e);
        }),
        (H.Key.easeOutQuint = function (t, e) {
          return (t = (t -= 1) * t * t * t * t + 1), H.Key.linear(t, this, e);
        }),
        (H.Key.easeInOutQuint = function (t, e) {
          return (
            (t /= 0.5) < 1
              ? (t *= 0.5 * t * t * t * t)
              : (t = 0.5 * ((t -= 2) * t * t * t * t + 2)),
            H.Key.linear(t, this, e)
          );
        }),
        (H.Key.easeInQuart = function (t, e) {
          return (t *= t * t * t), H.Key.linear(t, this, e);
        }),
        (H.Key.easeOutQuart = function (t, e) {
          return (t = -1 * ((t -= 1) * t * t * t - 1)), H.Key.linear(t, this, e);
        }),
        (H.Key.easeInOutQuart = function (t, e) {
          return (
            (t /= 0.5) < 1
              ? (t *= 0.5 * t * t * t)
              : (t = -0.5 * ((t -= 2) * t * t * t - 2)),
            H.Key.linear(t, this, e)
          );
        }),
        (H.Key.bounce = function (t) {
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
        (H.Key.easeInBounce = function (t, e) {
          return H.Key.linear(H.Key.bounce(t), this, e);
        }),
        (H.Key.easeOutBounce = function (t, e) {
          return H.Key.linear(H.Key.bounce(t), this, e);
        }),
        (H.Key.easeInElastic = function (t, e) {
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
            H.Key.linear(t, this, e)
          );
        }),
        (H.Key.easeOutElastic = function (t, e) {
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
            H.Key.linear(t, this, e)
          );
        }),
        (H.Key.easeInBack = function (t, e) {
          const i = 1.70158;
          return (t = t * t * ((i + 1) * t - i)), H.Key.linear(t, this, e);
        }),
        (H.Key.easeOutBack = function (t, e) {
          const i = 1.70158;
          return (
            (t = (t = t / 1 - 1) * t * ((i + 1) * t + i) + 1),
            H.Key.linear(t, this, e)
          );
        }),
        (H.Key.easeInOutBack = function (t, e) {
          let i = 1.70158;
          return (
            (t =
              (t /= 0.5) < 1
                ? t * t * ((1 + (i *= 1.525)) * t - i) * 0.5
                : 0.5 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2)),
            H.Key.linear(t, this, e)
          );
        });
      const K = function (t) {
        return (t = --t * t * t + 1);
      };
      H.Key.easeCubicOut = function (t, e) {
        return (t = K(t)), H.Key.linear(t, this, e);
      };
      const j = function (t) {
        return (
          (t *= 2) < 1 ? (t *= 0.5 * t * t) : (t = 0.5 * ((t -= 2) * t * t + 2)),
          t
        );
      };
      (H.Key.easeCubicInOut = function (t, e) {
        return (t = j(t)), H.Key.linear(t, this, e);
      }),
        (H.Key.easeSmoothStep = function (t, e) {
          const i = Math.max(0, Math.min(1, t));
          return (t = i * i * (3 - 2 * i)), H.Key.linear(t, this, e);
        }),
        (H.Key.easeSmootherStep = function (t, e) {
          const i = Math.max(0, Math.min(1, (t - 0) / 1));
          return (
            (t = i * i * i * (i * (6 * i - 15) + 10)), H.Key.linear(t, this, e)
          );
        }),
        (H.Key.prototype.setEasing = function (t) {
          (this._easing = t),
            this._easing == U.EASING_ABSOLUTE
              ? (this.ease = H.Key.easeAbsolute)
              : this._easing == U.EASING_SMOOTHSTEP
              ? (this.ease = H.Key.easeSmoothStep)
              : this._easing == U.EASING_SMOOTHERSTEP
              ? (this.ease = H.Key.easeSmootherStep)
              : this._easing == U.EASING_CUBIC_IN
              ? (this.ease = H.Key.easeCubicIn)
              : this._easing == U.EASING_CUBIC_OUT
              ? (this.ease = H.Key.easeCubicOut)
              : this._easing == U.EASING_CUBIC_INOUT
              ? (this.ease = H.Key.easeCubicInOut)
              : this._easing == U.EASING_EXPO_IN
              ? (this.ease = H.Key.easeExpoIn)
              : this._easing == U.EASING_EXPO_OUT
              ? (this.ease = H.Key.easeExpoOut)
              : this._easing == U.EASING_EXPO_INOUT
              ? (this.ease = H.Key.easeExpoInOut)
              : this._easing == U.EASING_SIN_IN
              ? (this.ease = H.Key.easeSinIn)
              : this._easing == U.EASING_SIN_OUT
              ? (this.ease = H.Key.easeSinOut)
              : this._easing == U.EASING_SIN_INOUT
              ? (this.ease = H.Key.easeSinInOut)
              : this._easing == U.EASING_BACK_OUT
              ? (this.ease = H.Key.easeOutBack)
              : this._easing == U.EASING_BACK_IN
              ? (this.ease = H.Key.easeInBack)
              : this._easing == U.EASING_BACK_INOUT
              ? (this.ease = H.Key.easeInOutBack)
              : this._easing == U.EASING_ELASTIC_IN
              ? (this.ease = H.Key.easeInElastic)
              : this._easing == U.EASING_ELASTIC_OUT
              ? (this.ease = H.Key.easeOutElastic)
              : this._easing == U.EASING_ELASTIC_INOUT
              ? (this.ease = H.Key.easeElasticInOut)
              : this._easing == U.EASING_BOUNCE_IN
              ? (this.ease = H.Key.easeInBounce)
              : this._easing == U.EASING_BOUNCE_OUT
              ? (this.ease = H.Key.easeOutBounce)
              : this._easing == U.EASING_QUART_OUT
              ? (this.ease = H.Key.easeOutQuart)
              : this._easing == U.EASING_QUART_IN
              ? (this.ease = H.Key.easeInQuart)
              : this._easing == U.EASING_QUART_INOUT
              ? (this.ease = H.Key.easeInOutQuart)
              : this._easing == U.EASING_QUINT_OUT
              ? (this.ease = H.Key.easeOutQuint)
              : this._easing == U.EASING_QUINT_IN
              ? (this.ease = H.Key.easeInQuint)
              : this._easing == U.EASING_QUINT_INOUT
              ? (this.ease = H.Key.easeInOutQuint)
              : ((this._easing = U.EASING_LINEAR),
                (this.ease = H.Key.easeLinear));
        }),
        (H.Key.prototype.trigger = function () {
          this.cb(), (this.cbTriggered = !0);
        }),
        (H.Key.prototype.setValue = function (t) {
          (this.value = t), null !== this.onChange && this.onChange();
        }),
        (H.Key.prototype.set = function (t) {
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
        (H.Key.prototype.getSerialized = function () {
          const t = {};
          return (t.t = this.time), (t.v = this.value), (t.e = this._easing), t;
        }),
        (H.Key.prototype.getEasing = function () {
          return this._easing;
        });
      const Q = function (t) {
        (t = t || {}),
          (this.keys = []),
          (this.onChange = null),
          (this.stayInTimeline = !1),
          (this.loop = !1),
          (this._log = new _("Anim")),
          (this.defaultEasing = t.defaultEasing || U.EASING_LINEAR),
          (this.onLooped = null),
          (this._timesLooped = 0),
          (this._needsSort = !1);
      };
      (Q.prototype.forceChangeCallback = function () {
        null !== this.onChange && this.onChange();
      }),
        (Q.prototype.hasEnded = function (t) {
          return (
            0 === this.keys.length || this.keys[this.keys.length - 1].time <= t
          );
        }),
        (Q.prototype.isRising = function (t) {
          if (this.hasEnded(t)) return !1;
          const e = this.getKeyIndex(t);
          return this.keys[e].value < this.keys[e + 1].value;
        }),
        (Q.prototype.clearBefore = function (t) {
          const e = this.getValue(t),
            i = this.getKeyIndex(t);
          this.setValue(t, e), i > 1 && this.keys.splice(0, i);
        }),
        (Q.prototype.clear = function (t) {
          let e = 0;
          t && (e = this.getValue(t)),
            (this.keys.length = 0),
            t && this.setValue(t, e),
            null !== this.onChange && this.onChange();
        }),
        (Q.prototype.sortKeys = function () {
          this.keys.sort((t, e) => parseFloat(t.time) - parseFloat(e.time)),
            (this._needsSort = !1);
        }),
        (Q.prototype.getLength = function () {
          return 0 === this.keys.length
            ? 0
            : this.keys[this.keys.length - 1].time;
        }),
        (Q.prototype.getKeyIndex = function (t) {
          let e = 0;
          for (let i = 0; i < this.keys.length; i++)
            if ((t >= this.keys[i].time && (e = i), this.keys[i].time > t))
              return e;
          return e;
        }),
        (Q.prototype.setValue = function (t, e, i) {
          let s = !1;
          for (const r in this.keys)
            if (this.keys[r].time == t) {
              (s = this.keys[r]), this.keys[r].setValue(e), (this.keys[r].cb = i);
              break;
            }
          s ||
            this.keys.push(
              new H.Key({
                time: t,
                value: e,
                e: this.defaultEasing,
                cb: i,
              })
            ),
            this.onChange && this.onChange(),
            (this._needsSort = !0);
        }),
        (Q.prototype.getSerialized = function () {
          const t = {
            keys: [],
          };
          t.loop = this.loop;
          for (const e in this.keys) t.keys.push(this.keys[e].getSerialized());
          return t;
        }),
        (Q.prototype.getKey = function (t) {
          const e = this.getKeyIndex(t);
          return this.keys[e];
        }),
        (Q.prototype.getNextKey = function (t) {
          let e = this.getKeyIndex(t) + 1;
          return (
            e >= this.keys.length && (e = this.keys.length - 1), this.keys[e]
          );
        }),
        (Q.prototype.isFinished = function (t) {
          return (
            this.keys.length <= 0 || t > this.keys[this.keys.length - 1].time
          );
        }),
        (Q.prototype.isStarted = function (t) {
          return !(this.keys.length <= 0) && t >= this.keys[0].time;
        }),
        (Q.prototype.getValue = function (t) {
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
        (Q.prototype.addKey = function (t) {
          void 0 === t.time
            ? this.log.warn("key time undefined, ignoring!")
            : (this.keys.push(t), null !== this.onChange && this.onChange());
        }),
        (Q.prototype.easingFromString = function (t) {
          return "linear" == t
            ? U.EASING_LINEAR
            : "absolute" == t
            ? U.EASING_ABSOLUTE
            : "smoothstep" == t
            ? U.EASING_SMOOTHSTEP
            : "smootherstep" == t
            ? U.EASING_SMOOTHERSTEP
            : "Cubic In" == t
            ? U.EASING_CUBIC_IN
            : "Cubic Out" == t
            ? U.EASING_CUBIC_OUT
            : "Cubic In Out" == t
            ? U.EASING_CUBIC_INOUT
            : "Expo In" == t
            ? U.EASING_EXPO_IN
            : "Expo Out" == t
            ? U.EASING_EXPO_OUT
            : "Expo In Out" == t
            ? U.EASING_EXPO_INOUT
            : "Sin In" == t
            ? U.EASING_SIN_IN
            : "Sin Out" == t
            ? U.EASING_SIN_OUT
            : "Sin In Out" == t
            ? U.EASING_SIN_INOUT
            : "Back In" == t
            ? U.EASING_BACK_IN
            : "Back Out" == t
            ? U.EASING_BACK_OUT
            : "Back In Out" == t
            ? U.EASING_BACK_INOUT
            : "Elastic In" == t
            ? U.EASING_ELASTIC_IN
            : "Elastic Out" == t
            ? U.EASING_ELASTIC_OUT
            : "Bounce In" == t
            ? U.EASING_BOUNCE_IN
            : "Bounce Out" == t
            ? U.EASING_BOUNCE_OUT
            : "Quart Out" == t
            ? U.EASING_QUART_OUT
            : "Quart In" == t
            ? U.EASING_QUART_IN
            : "Quart In Out" == t
            ? U.EASING_QUART_INOUT
            : "Quint Out" == t
            ? U.EASING_QUINT_OUT
            : "Quint In" == t
            ? U.EASING_QUINT_IN
            : "Quint In Out" == t
            ? U.EASING_QUINT_INOUT
            : void 0;
        }),
        (Q.prototype.createPort = function (t, e, i) {
          const s = t.inDropDown(e, U.EASINGS);
          return (
            s.set("linear"),
            (s.defaultValue = "linear"),
            (s.onChange = function () {
              (this.defaultEasing = this.easingFromString(s.get())), i && i();
            }.bind(this)),
            s
          );
        }),
        (Q.slerpQuaternion = function (t, e, i, s, r, n) {
          Q.slerpQuaternion.q1 ||
            ((Q.slerpQuaternion.q1 = quat.create()),
            (Q.slerpQuaternion.q2 = quat.create()));
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
              Q.slerpQuaternion.q1,
              i.keys[o].value,
              s.keys[o].value,
              r.keys[o].value,
              n.keys[o].value
            ),
              quat.set(
                Q.slerpQuaternion.q2,
                i.keys[h].value,
                s.keys[h].value,
                r.keys[h].value,
                n.keys[h].value
              ),
              quat.slerp(e, Q.slerpQuaternion.q1, Q.slerpQuaternion.q2, l);
          }
          return e;
        });
      const q = H;
      q.Anim = Q;
      const J = function (t) {
        p.apply(this),
          (this.id = CABLES.uuid()),
          (this.portIn = null),
          (this.portOut = null),
          (this.scene = t),
          (this.activityCounter = 0),
          (this.ignoreInSerialize = !1);
      };
      (J.prototype.setValue = function (t) {
        void 0 === t ? this._setValue() : this.portIn.set(t);
      }),
        (J.prototype.activity = function () {
          this.activityCounter++;
        }),
        (J.prototype._setValue = function () {
          if (!this.portOut) return void this.remove();
          const t = this.portOut.get();
          t == t &&
            (this.portIn.type != B.OP_PORT_TYPE_FUNCTION && this.activity(),
            (this.portIn.get() !== t || this.portIn.changeAlways) &&
              this.portIn.set(t));
        }),
        (J.prototype.getOtherPort = function (t) {
          return t == this.portIn ? this.portOut : this.portIn;
        }),
        (J.prototype.remove = function () {
          this.portIn && this.portIn.removeLink(this),
            this.portOut && this.portOut.removeLink(this),
            this.scene &&
              this.scene.emitEvent("onUnLink", this.portIn, this.portOut, this),
            !this.portIn ||
              (this.portIn.type != B.OP_PORT_TYPE_OBJECT &&
                this.portIn.type != B.OP_PORT_TYPE_ARRAY) ||
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
        (J.prototype.link = function (t, e) {
          if (!J.canLink(t, e))
            return console.warn("[core_link] cannot link ports!", t, e), !1;
          t.direction == L.PORT_DIR_IN
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
        (J.prototype.getSerialized = function () {
          const t = {};
          return (
            (t.portIn = this.portIn.getName()),
            (t.portOut = this.portOut.getName()),
            (t.objIn = this.portIn.parent.id),
            (t.objOut = this.portOut.parent.id),
            t
          );
        }),
        (J.canLinkText = function (t, e) {
          if (t.direction == e.direction) {
            let t = "(out)";
            return (
              e.direction == L.PORT_DIR_IN && (t = "(in)"),
              "can not link: same direction " + t
            );
          }
          return t.parent == e.parent
            ? "can not link: same op"
            : t.type != B.OP_PORT_TYPE_DYNAMIC &&
              e.type != B.OP_PORT_TYPE_DYNAMIC &&
              t.type != e.type
            ? "can not link: different type"
            : t
            ? e
              ? (t.direction == L.PORT_DIR_IN && t.isAnimated()) ||
                (e.direction == L.PORT_DIR_IN && e.isAnimated())
                ? "can not link: is animated"
                : t.isLinkedTo(e)
                ? "ports already linked"
                : (t.canLink && !t.canLink(e)) || (e.canLink && !e.canLink(t))
                ? "Incompatible"
                : "can link"
              : "can not link: port 2 invalid"
            : "can not link: port 1 invalid";
        }),
        (J.canLink = function (t, e) {
          return (
            !!t &&
            !!e &&
            (t.direction != L.PORT_DIR_IN || !t.isAnimated()) &&
            (e.direction != L.PORT_DIR_IN || !e.isAnimated()) &&
            !t.isHidden() &&
            !e.isHidden() &&
            !t.isLinkedTo(e) &&
            t.direction != e.direction &&
            (t.type == e.type ||
              t.type == B.OP_PORT_TYPE_DYNAMIC ||
              e.type == B.OP_PORT_TYPE_DYNAMIC) &&
            (t.type == B.OP_PORT_TYPE_DYNAMIC ||
              e.type == B.OP_PORT_TYPE_DYNAMIC ||
              (t.parent != e.parent &&
                !(t.canLink && !t.canLink(e)) &&
                !(e.canLink && !e.canLink(t))))
          );
        });
      const Z = function () {
        if (
          (p.apply(this),
          (this._log = new _("core_op")),
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
          arguments[1])
        ) {
          if (
            ((this._shortOpName =
              arguments[1].split(".")[arguments[1].split(".").length - 1]),
            this._shortOpName.indexOf(B.OP_VERSION_PREFIX) > 0)
          ) {
            const t = this._shortOpName.split(B.OP_VERSION_PREFIX)[1];
            this._shortOpName = this._shortOpName.substring(
              0,
              this._shortOpName.length - (B.OP_VERSION_PREFIX + t).length
            );
          }
          this.uiAttribs.title = this._shortOpName;
        }
        (this.id = arguments[2] || b()),
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
        (Z.prototype.clearUiAttrib = function (t) {
          const e = {
            name: null,
          };
          this.uiAttrib(e);
        }),
          (Z.prototype.getTitle = function () {
            return (this.uiAttribs && this.uiAttribs.title) || this.name;
          }),
          (Z.prototype.setTitle = function (t) {
            const e = this.name != t;
            (this.name = t),
              this.uiAttr({
                title: t,
              }),
              e && this.fireEvent("onTitleChange", t);
          });
        const t = function (t) {
          if (t) {
            (t.error || t.warning || t.hint) &&
              this._log.warn(
                "old ui error/warning attribute in " +
                  this.name +
                  ", use op.setUiError !",
                t
              ),
              "object" != typeof t &&
                this._log.error("op.uiAttrib attribs are not string"),
              this.uiAttribs || (this.uiAttribs = {});
            for (const e in t) this.uiAttribs[e] = t[e];
            t.title && t.title != this.name && this.setTitle(t.title),
              this.fireEvent("onUiAttribsChange", t);
          }
        };
        (Z.prototype.setUiAttrib = t),
          (Z.prototype.uiAttr = t),
          (Z.prototype.getName = function () {
            return this.uiAttribs.name
              ? this.uiAttribs.name
              : this.objName.split(".");
          }),
          (Z.prototype.addOutPort = function (t) {
            return (
              (t.direction = L.PORT_DIR_OUT),
              (t.parent = this),
              this.portsOut.push(t),
              this.fireEvent("onPortAdd", t),
              t
            );
          }),
          (Z.prototype.hasDynamicPort = function () {
            let t = 0;
            for (t = 0; t < this.portsIn.length; t++) {
              if (this.portsIn[t].type == B.OP_PORT_TYPE_DYNAMIC) return !0;
              if ("dyn" == this.portsIn[t].getName()) return !0;
            }
            for (t = 0; t < this.portsOut.length; t++) {
              if (this.portsOut[t].type == B.OP_PORT_TYPE_DYNAMIC) return !0;
              if ("dyn" == this.portsOut[t].getName()) return !0;
            }
            return !1;
          }),
          (Z.prototype.addInPort = function (t) {
            if (!(t instanceof D)) throw new Error("parameter is not a port!");
            return (
              (t.direction = L.PORT_DIR_IN),
              (t.parent = this),
              this.portsIn.push(t),
              this.fireEvent("onPortAdd", t),
              t
            );
          }),
          (Z.prototype.inFunction = Z.prototype.inTrigger =
            function (t, e) {
              const i = this.addInPort(new D(this, t, B.OP_PORT_TYPE_FUNCTION));
              return void 0 !== e && i.set(e), i;
            }),
          (Z.prototype.inFunctionButton = Z.prototype.inTriggerButton =
            function (t, e) {
              const i = this.addInPort(
                new D(this, t, B.OP_PORT_TYPE_FUNCTION, {
                  display: "button",
                })
              );
              return void 0 !== e && i.set(e), i;
            }),
          (Z.prototype.inFunctionButton = Z.prototype.inUiTriggerButtons =
            function (t, e) {
              const i = this.addInPort(
                new D(this, t, B.OP_PORT_TYPE_FUNCTION, {
                  display: "buttons",
                })
              );
              return void 0 !== e && i.set(e), i;
            }),
          (Z.prototype.inValueFloat =
            Z.prototype.inValue =
            Z.prototype.inFloat =
              function (t, e) {
                const i = this.addInPort(new D(this, t, B.OP_PORT_TYPE_VALUE));
                return void 0 !== e && (i.set(e), (i.defaultValue = e)), i;
              }),
          (Z.prototype.inValueBool = Z.prototype.inBool =
            function (t, e) {
              const i = this.addInPort(
                new D(this, t, B.OP_PORT_TYPE_VALUE, {
                  display: "bool",
                })
              );
              return void 0 !== e && (i.set(e), (i.defaultValue = i.get())), i;
            }),
          (Z.prototype.inValueString = function (t, e) {
            const i = this.addInPort(
              new D(this, t, B.OP_PORT_TYPE_VALUE, {
                type: "string",
              })
            );
            return (
              (i.value = ""), void 0 !== e && (i.set(e), (i.defaultValue = e)), i
            );
          }),
          (Z.prototype.inString = function (t, e) {
            const i = this.addInPort(
              new D(this, t, B.OP_PORT_TYPE_STRING, {
                type: "string",
              })
            );
            return (
              (e = e || ""), (i.value = e), i.set(e), (i.defaultValue = e), i
            );
          }),
          (Z.prototype.inValueText = function (t, e) {
            const i = this.addInPort(
              new D(this, t, B.OP_PORT_TYPE_VALUE, {
                type: "string",
                display: "text",
              })
            );
            return (
              (i.value = ""), void 0 !== e && (i.set(e), (i.defaultValue = e)), i
            );
          }),
          (Z.prototype.inTextarea = function (t, e) {
            const i = this.addInPort(
              new D(this, t, B.OP_PORT_TYPE_STRING, {
                type: "string",
                display: "text",
              })
            );
            return (
              (i.value = ""), void 0 !== e && (i.set(e), (i.defaultValue = e)), i
            );
          }),
          (Z.prototype.inStringEditor = function (t, e, i, s = !0) {
            const r = this.addInPort(
              new D(this, t, B.OP_PORT_TYPE_STRING, {
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
          (Z.prototype.inValueEditor = function (t, e, i, s = !0) {
            const r = this.addInPort(
              new D(this, t, B.OP_PORT_TYPE_VALUE, {
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
          (Z.prototype.inValueSelect = Z.prototype.inDropDown =
            function (t, e, i, s) {
              let r = null;
              if (s) {
                const i = new D(this, t, B.OP_PORT_TYPE_VALUE, {
                  display: "dropdown",
                  hidePort: !0,
                  type: "string",
                  values: e,
                });
                r = this.addInPort(i);
              } else {
                const s = new D(this, t + " index", B.OP_PORT_TYPE_VALUE, {
                    increment: "integer",
                    hideParam: !0,
                  }),
                  n = this.addInPort(s),
                  o = new G(
                    this,
                    t,
                    B.OP_PORT_TYPE_VALUE,
                    {
                      display: "dropdown",
                      hidePort: !0,
                      type: "string",
                      values: e,
                    },
                    n
                  );
                if (
                  ((s.onLinkChanged = function () {
                    o.setUiAttribs({
                      greyout: s.isLinked(),
                    });
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
          (Z.prototype.inSwitch = function (t, e, i, s) {
            let r = null;
            if (s) {
              const i = new D(this, t, B.OP_PORT_TYPE_STRING, {
                display: "switch",
                hidePort: !0,
                type: "string",
                values: e,
              });
              r = this.addInPort(i);
            } else {
              const s = new D(this, t + " index", B.OP_PORT_TYPE_VALUE, {
                  increment: "integer",
                  hideParam: !0,
                }),
                n = this.addInPort(s),
                o = new V(
                  this,
                  t,
                  B.OP_PORT_TYPE_STRING,
                  {
                    display: "switch",
                    hidePort: !0,
                    type: "string",
                    values: e,
                  },
                  n
                );
              if (
                ((s.onLinkChanged = function () {
                  o.setUiAttribs({
                    greyout: s.isLinked(),
                  });
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
          (Z.prototype.inValueInt = Z.prototype.inInt =
            function (t, e) {
              const i = this.addInPort(
                new D(this, t, B.OP_PORT_TYPE_VALUE, {
                  increment: "integer",
                })
              );
              return void 0 !== e && (i.set(e), (i.defaultValue = e)), i;
            }),
          (Z.prototype.inFile = function (t, e, i) {
            const s = this.addInPort(
              new D(this, t, B.OP_PORT_TYPE_VALUE, {
                display: "file",
                type: "string",
                filter: e,
              })
            );
            return void 0 !== i && (s.set(i), (s.defaultValue = i)), s;
          }),
          (Z.prototype.inUrl = function (t, e, i) {
            const s = this.addInPort(
              new D(this, t, B.OP_PORT_TYPE_STRING, {
                display: "file",
                type: "string",
                filter: e,
              })
            );
            return void 0 !== i && (s.set(i), (s.defaultValue = i)), s;
          }),
          (Z.prototype.inTexture = function (t, e) {
            const i = this.addInPort(
              new D(this, t, B.OP_PORT_TYPE_OBJECT, {
                display: "texture",
                objType: "texture",
                preview: !0,
              })
            );
            return void 0 !== e && i.set(e), i;
          }),
          (Z.prototype.inObject = function (t, e, i) {
            const s = this.addInPort(
              new D(this, t, B.OP_PORT_TYPE_OBJECT, {
                objType: i,
              })
            );
            return void 0 !== e && s.set(e), s;
          }),
          (Z.prototype.inGradient = function (t, e) {
            const i = this.addInPort(
              new D(this, t, B.OP_PORT_TYPE_VALUE, {
                display: "gradient",
                hidePort: !0,
              })
            );
            return void 0 !== e && i.set(e), i;
          }),
          (Z.prototype.inArray = function (t, e) {
            const i = this.addInPort(new D(this, t, B.OP_PORT_TYPE_ARRAY));
            return void 0 !== e && i.set(e), i;
          }),
          (Z.prototype.inValueSlider = Z.prototype.inFloatSlider =
            function (t, e, i, s) {
              const r = {
                display: "range",
              };
              null != i && null != s && ((r.min = i), (r.max = s));
              const n = this.addInPort(new D(this, t, B.OP_PORT_TYPE_VALUE, r));
              return void 0 !== e && (n.set(e), (n.defaultValue = e)), n;
            }),
          (Z.prototype.outFunction = Z.prototype.outTrigger =
            function (t, e) {
              const i = this.addOutPort(new D(this, t, B.OP_PORT_TYPE_FUNCTION));
              return void 0 !== e && i.set(e), i;
            }),
          (Z.prototype.outValue = Z.prototype.outNumber =
            function (t, e) {
              const i = this.addOutPort(new D(this, t, B.OP_PORT_TYPE_VALUE));
              return void 0 !== e && i.set(e), i;
            }),
          (Z.prototype.outValueBool = Z.prototype.outBool =
            function (t, e) {
              const i = this.addOutPort(
                new D(this, t, B.OP_PORT_TYPE_VALUE, {
                  display: "bool",
                })
              );
              return void 0 !== e ? i.set(e) : i.set(0), i;
            }),
          (Z.prototype.outValueString = function (t, e) {
            const i = this.addOutPort(
              new D(this, t, B.OP_PORT_TYPE_VALUE, {
                type: "string",
              })
            );
            return void 0 !== e && i.set(e), i;
          }),
          (Z.prototype.outString = function (t, e) {
            const i = this.addOutPort(
              new D(this, t, B.OP_PORT_TYPE_STRING, {
                type: "string",
              })
            );
            return void 0 !== e ? i.set(e) : i.set(""), i;
          }),
          (Z.prototype.outObject = function (t, e, i) {
            const s = this.addOutPort(
              new D(this, t, B.OP_PORT_TYPE_OBJECT, {
                objType: i || null,
              })
            );
            return void 0 !== e && s.set(e), (s.ignoreValueSerialize = !0), s;
          }),
          (Z.prototype.outArray = function (t, e) {
            const i = this.addOutPort(new D(this, t, B.OP_PORT_TYPE_ARRAY));
            return void 0 !== e && i.set(e), (i.ignoreValueSerialize = !0), i;
          }),
          (Z.prototype.outTexture = function (t, e) {
            const i = this.addOutPort(
              new D(this, t, B.OP_PORT_TYPE_OBJECT, {
                preview: !0,
                objType: "texture",
              })
            );
            return void 0 !== e && i.set(e), (i.ignoreValueSerialize = !0), i;
          }),
          (Z.prototype.inDynamic = function (t, e, i, s) {
            const r = new D(this, t, B.OP_PORT_TYPE_DYNAMIC, i);
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
          (Z.prototype.printInfo = function () {
            for (let t = 0; t < this.portsIn.length; t++)
              console.log("in: " + this.portsIn[t].getName());
            for (const t in this.portsOut)
              console.log("out: " + this.portsOut[t].getName());
          }),
          (Z.prototype.getOutChilds = function () {
            const t = [];
            for (const e in this.portsOut)
              for (const i in this.portsOut[e].links)
                this.portsOut[e].type == B.OP_PORT_TYPE_FUNCTION &&
                  t.push(this.portsOut[e].links[i].portIn.parent);
            return t;
          }),
          (Z.prototype.markChilds = function () {
            this.marked = !0;
            for (const t in this.portsOut)
              for (const e in this.portsOut[t].links)
                (this.portsOut[t].parent.marked = !0),
                  this.portsOut[t].links[e].portIn.parent != this &&
                    this.portsOut[t].links[e].portIn.parent.markChilds();
          }),
          (Z.prototype.selectChilds = function () {
            this.setUiAttrib({
              selected: !0,
            });
            for (const t in this.portsOut)
              for (const e in this.portsOut[t].links)
                this.portsOut[t].parent.setUiAttrib({
                  selected: !0,
                }),
                  this.portsOut[t].links[e].portIn.parent != this &&
                    this.portsOut[t].links[e].portIn.parent.selectChilds();
          }),
          (Z.prototype.deleteChilds = function () {
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
          (Z.prototype.removeLinks = function () {
            for (let t = 0; t < this.portsIn.length; t++)
              this.portsIn[t].removeLinks();
            for (let t = 0; t < this.portsOut.length; t++)
              this.portsOut[t].removeLinks();
          }),
          (Z.prototype.countFittingPorts = function (t) {
            let e = 0;
            for (const i in this.portsOut) J.canLink(t, this.portsOut[i]) && e++;
            for (const i in this.portsIn) J.canLink(t, this.portsIn[i]) && e++;
            return e;
          }),
          (Z.prototype.findFittingPort = function (t, e = !1) {
            if (e) {
              for (const e in this.portsIn)
                if (J.canLink(t, this.portsIn[e])) return this.portsIn[e];
              for (const e in this.portsOut)
                if (J.canLink(t, this.portsOut[e])) return this.portsOut[e];
            } else {
              for (const e in this.portsOut)
                if (J.canLink(t, this.portsOut[e])) return this.portsOut[e];
              for (const e in this.portsIn)
                if (J.canLink(t, this.portsIn[e])) return this.portsIn[e];
            }
          }),
          (Z.prototype.getSerialized = function (t) {
            const e = {};
            this.opId && (e.opId = this.opId),
              (e.objName = this.objName),
              (e.id = this.id),
              (e.uiAttribs = this.uiAttribs),
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
          (Z.prototype.getFirstOutPortByType = function (t) {
            for (const e in this.portsOut)
              if (this.portsOut[e].type == t) return this.portsOut[e];
          }),
          (Z.prototype.getPort = Z.prototype.getPortByName =
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
          (Z.prototype.getPortById = function (t) {
            for (let e = 0; e < this.portsIn.length; e++)
              if (this.portsIn[e].id == t) return this.portsIn[e];
            for (let e = 0; e < this.portsOut.length; e++)
              if (this.portsOut[e].id == t) return this.portsOut[e];
          }),
          (Z.prototype.updateAnims = function () {
            for (let t = 0; t < this.portsIn.length; t++)
              this.portsIn[t].updateAnim();
          }),
          (Z.prototype.log = function () {
            const t = "op " + this.objName;
            if (CABLES.UI && !CABLES.UI.logFilter.shouldPrint(t, ...arguments))
              return;
            if (!CABLES.UI && this.patch.silent) return;
            const e = ["[op " + this._shortOpName + "]"];
            e.push.apply(e, arguments),
              Function.prototype.apply.apply(console.log, [console, e]);
          }),
          (Z.prototype.error = Z.prototype.logError =
            function () {
              const t = ["[op " + this._shortOpName + "]"];
              t.push.apply(t, arguments),
                Function.prototype.apply.apply(console.error, [console, t]);
            }),
          (Z.prototype.warn = Z.prototype.logWarn =
            function () {
              const t = ["[op " + this._shortOpName + "]"];
              t.push.apply(t, arguments),
                Function.prototype.apply.apply(console.warn, [console, t]);
            }),
          (Z.prototype.verbose = Z.prototype.logVerbose =
            function () {
              const t = "op " + this._shortOpName;
              if (CABLES.UI && !CABLES.UI.logFilter.shouldPrint(t, ...arguments))
                return;
              if (!CABLES.UI && this.patch.silent) return;
              const e = ["[" + t + "]"];
              e.push.apply(e, arguments),
                Function.prototype.apply.apply(console.info, [console, e]);
            }),
          (Z.prototype.unLink = function () {
            for (let t = 0; t < this.portsOut.length; t++)
              this.portsOut[t].removeLinks();
            for (let t = 0; t < this.portsIn.length; t++)
              this.portsIn[t].removeLinks();
          }),
          (Z.prototype.profile = function (t) {
            for (let t = 0; t < this.portsIn.length; t++)
              (this.portsIn[t]._onTriggered =
                this.portsIn[t]._onTriggeredProfiling),
                (this.portsIn[t].set = this.portsIn[t]._onSetProfiling);
          }),
          (Z.prototype.findParent = function (t) {
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
          (Z.prototype.cleanUp = function () {
            if (this._instances) {
              for (let t = 0; t < this._instances.length; t++)
                this._instances[t].onDelete && this._instances[t].onDelete();
              this._instances.length = 0;
            }
          }),
          (Z.prototype.instanced = function (t) {
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
                  this.portsOut[t].type == B.OP_PORT_TYPE_FUNCTION &&
                    (this._instances[e].getPortByName(
                      this.portsOut[t].name
                    ).trigger = this.portsOut[t].trigger.bind(this.portsOut[t]));
              }
              for (i = 0; i < this.portsIn.length; i++)
                (this.portsIn[i].onChange = null),
                  (this.portsIn[i].onValueChanged = null);
            }
            for (i = 0; i < this.portsIn.length; i++)
              (this.portsIn[i].type != B.OP_PORT_TYPE_VALUE &&
                this.portsIn[i].type != B.OP_PORT_TYPE_ARRAY) ||
                this._instances[this.patch.instancing.index()].portsIn[i].set(
                  this.portsIn[i].get()
                ),
                this.portsIn[i].type,
                B.OP_PORT_TYPE_FUNCTION;
            for (i = 0; i < this.portsOut.length; i++)
              this.portsOut[i].type == B.OP_PORT_TYPE_VALUE &&
                this.portsOut[i].set(
                  this._instances[this.patch.instancing.index()].portsOut[i].get()
                );
            return !0;
          }),
          (Z.prototype.initInstancable = function () {}),
          (Z.prototype.setValues = function (t) {
            for (const e in t) {
              const i = this.getPortByName(e);
              i
                ? i.set(t[e])
                : this._log.warn("op.setValues: port not found:", e);
            }
          }),
          (Z.prototype.setUiError = function (t, e, i) {
            if (!e && !this.hasUiErrors) return;
            if (!e && !this._uiErrors.hasOwnProperty(t)) return;
            if (this._uiErrors.hasOwnProperty(t) && this._uiErrors[t].txt == e)
              return;
            t.indexOf(" ") > -1 &&
              this._log.warn("setuierror id cant have spaces!"),
              !e && this._uiErrors.hasOwnProperty(t)
                ? delete this._uiErrors[t]
                : !e ||
                  (this._uiErrors.hasOwnProperty(t) &&
                    this._uiErrors[t].txt == e) ||
                  (null == i && (i = 2),
                  (this._uiErrors[t] = {
                    txt: e,
                    level: i,
                    id: t,
                  }));
            const s = [];
            for (const t in this._uiErrors) s.push(this._uiErrors[t]);
            this.uiAttr({
              uierrors: s,
            }),
              (this.hasUiErrors = Object.keys(this._uiErrors).length);
          }),
          (Z.prototype.setError = function (t, e) {
            this._log.warn("old error message op.error() - use op.setUiError()");
          }),
          (Z.prototype.addListener = Z.prototype.addEventListener =
            function (t, e) {
              this._eventCallbacks[t]
                ? this._eventCallbacks[t].push(e)
                : (this._eventCallbacks[t] = [e]);
            }),
          (Z.prototype.hasEventListener = function (t, e) {
            if (t && e) {
              if (this._eventCallbacks[t]) {
                return -1 != this._eventCallbacks[t].indexOf(e);
              }
            } else this._log.warn("hasListener: missing parameters");
          }),
          (Z.prototype.removeEventListener = function (t, e) {
            if (this._eventCallbacks[t]) {
              const i = this._eventCallbacks[t].indexOf(e);
              -1 == i
                ? this._log.warn("eventlistener " + t + " not found...")
                : this._eventCallbacks[t].slice(i);
            }
          }),
          (Z.prototype.fireEvent = function (t, e) {
            if (this._eventCallbacks[t])
              for (let i = 0; i < this._eventCallbacks[t].length; i++)
                this._eventCallbacks[t][i] && this._eventCallbacks[t][i].cb(e);
            this.onUiAttrChange &&
              "onUiAttribsChange" == t &&
              this.onUiAttrChange(e);
          }),
          (Z.prototype.setEnabled = function (t) {
            (this.enabled = t), this.fireEvent("onEnabledChange", t);
          }),
          (Z.prototype.setPortGroup = function (t, e) {
            for (let i = 0; i < e.length; i++)
              e[i] && e[i].setUiAttribs
                ? e[i].setUiAttribs({
                    group: t,
                  })
                : this._log.error("setPortGroup: invalid port!");
          }),
          (Z.prototype.setUiAxisPorts = function (t, e, i) {
            t &&
              t.setUiAttribs({
                axis: "X",
              }),
              e &&
                e.setUiAttribs({
                  axis: "Y",
                }),
              i &&
                i.setUiAttribs({
                  axis: "Z",
                });
          }),
          (Z.prototype.removePort = function (t) {
            for (let e = 0; e < this.portsIn.length; e++)
              if (this.portsIn[e] == t)
                return (
                  this.portsIn.splice(e, 1),
                  this.fireEvent("onUiAttribsChange", {}),
                  void this.fireEvent("onPortRemoved", {})
                );
          }),
          (Z.prototype._checkLinksNeededToWork = function () {}),
          (Z.prototype.toWorkNeedsParent = function (t) {
            this.patch.isEditorMode() && (this._needsParentOp = t);
          }),
          (Z.prototype.toWorkPortsNeedToBeLinked = function () {
            if (this.patch.isEditorMode())
              for (let t = 0; t < arguments.length; t++)
                -1 == this._needsLinkedToWork.indexOf(arguments[t]) &&
                  this._needsLinkedToWork.push(arguments[t]);
          }),
          (Z.prototype.toWorkPortsNeedToBeLinkedReset = function () {
            this.patch.isEditorMode() &&
              ((this._needsLinkedToWork.length = 0),
              this.checkLinkTimeWarnings && this.checkLinkTimeWarnings());
          }),
          (Z.prototype.initVarPorts = function () {
            for (let t = 0; t < this.portsIn.length; t++)
              this.portsIn[t].getVariableName() &&
                this.portsIn[t].setVariable(this.portsIn[t].getVariableName());
          }),
          (Z.prototype.refreshParams = function () {
            this.patch &&
              this.patch.isEditorMode() &&
              this.isCurrentUiOp() &&
              gui.opParams.show(this);
          }),
          (Z.prototype.isCurrentUiOp = function () {
            if (this.patch.isEditorMode()) return gui.patchView.isCurrentOp(this);
          });
      }
      (Z.getNamespaceClassName = function (t) {
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
        (Z.isSubpatchOp = function (t) {
          return "Ops.Ui.Patch" == t || "Ops.Ui.SubPatch" == t;
        });
      const $ = function (t, e) {
        if (!t) throw new Error("no cgl");
        (this._log = new _("cgl_texture")),
          (this._cgl = t),
          (this.tex = this._cgl.gl.createTexture()),
          (this.id = b()),
          (this.width = 0),
          (this.height = 0),
          (this.loading = !1),
          (this.flip = !0),
          (this.flipped = !1),
          (this.shadowMap = !1),
          (this.deleted = !1),
          (this.image = null),
          (this.anisotropic = 0),
          (this.filter = $.FILTER_NEAREST),
          (this.wrap = $.WRAP_CLAMP_TO_EDGE),
          (this.texTarget = this._cgl.gl.TEXTURE_2D),
          e && e.type && (this.texTarget = e.type),
          (this.textureType = $.TYPE_DEFAULT),
          (this.unpackAlpha = !0),
          (this._fromData = !0),
          (this.name = "unknown"),
          e
            ? ((this.name = e.name || this.name),
              e.isDepthTexture && (this.textureType = $.TYPE_DEPTH),
              e.isFloatingPointTexture && (this.textureType = $.TYPE_FLOAT),
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
      ($.prototype.isFloatingPoint = function () {
        return this.textureType == $.TYPE_FLOAT;
      }),
        ($.prototype.compareSettings = function (t) {
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
        ($.prototype.clone = function () {
          const t = new $(this._cgl, {
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
            this.compareSettings(t) ||
              (this._log.error("Cloned texture settings do not compare!"),
              this._log.error(this),
              this._log.error(t)),
            t
          );
        }),
        ($.prototype.setSize = function (t, e) {
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
            (this.textureType != $.TYPE_FLOAT ||
              this.filter != $.FILTER_LINEAR ||
              this._cgl.gl.getExtension("OES_texture_float_linear") ||
              (console.warn(
                "this graphics card does not support floating point texture linear interpolation! using NEAREST"
              ),
              (this.filter = $.FILTER_NEAREST)),
            this.textureType == $.TYPE_FLOAT)
          )
            if (1 == this._cgl.glVersion)
              if (this._cgl.glUseHalfFloatTex) {
                const i = this._cgl.gl.getExtension("OES_texture_half_float");
                if (1 == this._cgl.glVersion && !i)
                  throw new Error("no half float texture extension");
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
              } else {
                this._cgl.gl.getExtension("OES_texture_float");
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
              }
            else
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
          else if (this.textureType == $.TYPE_DEPTH)
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
        ($.prototype.initFromData = function (t, e, i, s, r) {
          (this.filter = s),
            (this.wrap = r),
            null == s && (this.filter = $.FILTER_LINEAR),
            null == r && (this.wrap = $.CLAMP_TO_EDGE),
            (this.width = e),
            (this.height = i),
            (this._fromData = !0),
            (this.deleted = !1),
            this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, this.flip),
            this._cgl.gl.bindTexture(this.texTarget, this.tex),
            this._cgl.gl.texImage2D(
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
            this._cgl.gl.bindTexture(this.texTarget, null);
        }),
        ($.prototype.updateMipMap = function () {
          (2 != this._cgl.glVersion && !this.isPowerOfTwo()) ||
            this.filter != $.FILTER_MIPMAP ||
            (this._cgl.gl.generateMipmap(this.texTarget),
            this._cgl.profileData.profileGenMipMap++);
        }),
        ($.prototype.initTexture = function (t, e) {
          this._cgl.checkFrameStarted("texture inittexture"),
            (this._fromData = !1),
            this._cgl.gl.pixelStorei(
              this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
              this.unpackAlpha
            ),
            t.width && (this.width = t.width),
            t.height && (this.height = t.height),
            e && (this.filter = e),
            t.width > this._cgl.maxTexSize &&
              this._log.error(
                "[cgl_texture] texture size to big!!!",
                t.width,
                this._cgl.maxTexSize
              ),
            t.height > this._cgl.maxTexSize &&
              this._log.error(
                "[cgl_texture] texture size to big!!!",
                t.height,
                this._cgl.maxTexSize
              ),
            this._cgl.gl.bindTexture(this.texTarget, this.tex),
            (this.deleted = !1),
            (this.flipped = !this.flip),
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
            this.getInfoOneLine();
        }),
        ($.prototype.delete = function () {
          this.loading ||
            ((this.deleted = !0),
            (this.width = 0),
            (this.height = 0),
            this._cgl.profileData.profileTextureDelete++,
            this._cgl.gl.deleteTexture(this.tex),
            (this.image = null),
            (this.tex = null));
        }),
        ($.prototype.isPowerOfTwo = function () {
          return $.isPowerOfTwo(this.width) && $.isPowerOfTwo(this.height);
        }),
        ($.prototype.printInfo = function () {
          console.log(this.getInfo());
        }),
        ($.prototype.getInfoReadable = function () {
          const t = this.getInfo();
          let e = "";
          t.name = t.name.substr(0, t.name.indexOf("?rnd="));
          for (const i in t) e += "* " + i + ":  **" + t[i] + "**\n";
          return e;
        }),
        ($.prototype.getInfoOneLine = function () {
          let t = this.width + "x" + this.height;
          return (
            this.textureType === CGL.Texture.TYPE_FLOAT && (t += " HDR"),
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
        ($.prototype.getInfo = function () {
          const t = {};
          (t.name = this.name),
            (t["power of two"] = this.isPowerOfTwo()),
            (t.size = this.width + " x " + this.height);
          let e = this.texTarget;
          return (
            this.texTarget == this._cgl.gl.TEXTURE_2D && (e = "TEXTURE_2D"),
            (t.target = e),
            (t.unpackAlpha = this.unpackAlpha),
            this.textureType == $.TYPE_FLOAT
              ? (t.textureType = "TYPE_FLOAT")
              : this.textureType == $.TYPE_DEPTH
              ? (t.textureType = "TYPE_DEPTH")
              : this.textureType == $.TYPE_DEFAULT
              ? (t.textureType = "TYPE_DEFAULT")
              : (t.textureType = "UNKNOWN"),
            this.wrap == $.WRAP_CLAMP_TO_EDGE
              ? (t.wrap = "CLAMP_TO_EDGE")
              : this.wrap == $.WRAP_REPEAT
              ? (t.wrap = "WRAP_REPEAT")
              : this.wrap == $.WRAP_MIRRORED_REPEAT
              ? (t.wrap = "WRAP_MIRRORED_REPEAT")
              : (t.wrap = "UNKNOWN"),
            this.filter == $.FILTER_NEAREST
              ? (t.filter = "FILTER_NEAREST")
              : this.filter == $.FILTER_LINEAR
              ? (t.filter = "FILTER_LINEAR")
              : this.filter == $.FILTER_MIPMAP
              ? (t.filter = "FILTER_MIPMAP")
              : (t.filter = "UNKNOWN"),
            t
          );
        }),
        ($.prototype._setFilter = function () {
          if (
            (this._fromData ||
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
            this.textureType == $.TYPE_FLOAT &&
              this.filter == $.FILTER_MIPMAP &&
              ((this.filter = $.FILTER_LINEAR),
              this._log.stack(
                "texture: HDR and mipmap filtering at the same time is not possible"
              )),
            1 != this._cgl.glVersion || this.isPowerOfTwo())
          ) {
            if (
              (this.wrap == $.WRAP_CLAMP_TO_EDGE
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
                : this.wrap == $.WRAP_REPEAT
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
                : this.wrap == $.WRAP_MIRRORED_REPEAT &&
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
              this.filter == $.FILTER_NEAREST)
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
            else if (this.filter == $.FILTER_LINEAR)
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
              if (this.filter != $.FILTER_MIPMAP)
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
              (this.filter = $.FILTER_NEAREST),
              (this.wrap = $.WRAP_CLAMP_TO_EDGE);
          this.getInfoOneLine();
        }),
        ($.load = function (t, e, i, s) {
          if (!e)
            return i({
              error: !0,
            });
          let r = null;
          t.patch.loading.existByName(e) ||
            (r = t.patch.loading.start("texture", e));
          const n = new $(t);
          return (
            (n.name = e),
            t.patch.isEditorMode() &&
              gui.jobs().start({
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
                i &&
                  i(
                    {
                      error: !0,
                    },
                    n
                  ),
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
        ($.getTempTexture = function (t) {
          return (
            t || console.error("[getTempTexture] no cgl!"),
            t.tempTexture ||
              (t.tempTexture = $.getTemporaryTexture(
                t,
                256,
                $.FILTER_LINEAR,
                $.REPEAT
              )),
            t.tempTexture
          );
        }),
        ($.getEmptyTexture = function (t) {
          if (
            (t || console.error("[getEmptyTexture] no cgl!"), t.tempTextureEmpty)
          )
            return t.tempTextureEmpty;
          t.tempTextureEmpty = new $(t, {
            name: "emptyTexture",
          });
          const e = new Uint8Array(256);
          return (
            t.tempTextureEmpty.initFromData(
              e,
              8,
              8,
              $.FILTER_NEAREST,
              $.WRAP_REPEAT
            ),
            t.tempTextureEmpty
          );
        }),
        ($.getRandomTexture = function (t) {
          if ((t || console.error("[getRandomTexture] no cgl!"), t.randomTexture))
            return t.randomTexture;
          const e = new Uint8Array(262144);
          for (let t = 0; t < 65536; t++)
            (e[4 * t + 0] = 255 * Math.random()),
              (e[4 * t + 1] = 255 * Math.random()),
              (e[4 * t + 2] = 255 * Math.random()),
              (e[4 * t + 3] = 255);
          return (
            (t.randomTexture = new $(t)),
            t.randomTexture.initFromData(
              e,
              256,
              256,
              $.FILTER_NEAREST,
              $.WRAP_REPEAT
            ),
            t.randomTexture
          );
        }),
        ($.getBlackTexture = function (t) {
          if ((t || this._log.error("[getBlackTexture] no cgl!"), t.blackTexture))
            return t.blackTexture;
          const e = new Uint8Array(256);
          for (let t = 0; t < 64; t++)
            (e[4 * t + 0] = e[4 * t + 1] = e[4 * t + 2] = 0),
              (e[4 * t + 3] = 255);
          return (
            (t.blackTexture = new $(t)),
            t.blackTexture.initFromData(e, 8, 8, $.FILTER_NEAREST, $.WRAP_REPEAT),
            t.blackTexture
          );
        }),
        ($.getEmptyCubemapTexture = function (t) {
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
            r = $.FILTER_NEAREST,
            n = $.WRAP_CLAMP_TO_EDGE;
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
        ($.getTempGradientTexture = function (t) {
          if (
            (t || console.error("[getTempGradientTexture] no cgl!"),
            t.tempTextureGradient)
          )
            return t.tempTextureGradient;
          const e = new $(t),
            i = new Uint8Array(262144);
          for (let t = 0; t < 256; t++)
            for (let e = 0; e < 256; e++)
              (i[4 * (e + 256 * t) + 0] =
                i[4 * (e + 256 * t) + 1] =
                i[4 * (e + 256 * t) + 2] =
                  255 - t),
                (i[4 * (e + 256 * t) + 3] = 255);
          return (
            e.initFromData(i, 256, 256, $.FILTER_NEAREST, $.WRAP_REPEAT),
            (t.tempTextureGradient = e),
            e
          );
        }),
        ($.getTemporaryTexture = function (t, e, i, s) {
          const r = new $(t),
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
        ($.createFromImage = function (t, e, i) {
          const s = new $(t, (i = i || {}));
          return (
            (s.flip = !1),
            (s.image = e),
            (s.width = e.width),
            (s.height = e.height),
            s.initTexture(e, i.filter),
            s
          );
        }),
        ($.fromImage = function (t, e, i, s) {
          console.error("deprecated texture from image...");
          const r = new $(t);
          return (
            (r.flip = !1),
            i && (r.filter = i),
            s && (r.wrap = s),
            (r.image = e),
            r.initTexture(e),
            r
          );
        }),
        ($.isPowerOfTwo = function (t) {
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
        ($.FILTER_NEAREST = 0),
        ($.FILTER_LINEAR = 1),
        ($.FILTER_MIPMAP = 2),
        ($.WRAP_REPEAT = 0),
        ($.WRAP_MIRRORED_REPEAT = 1),
        ($.WRAP_CLAMP_TO_EDGE = 2),
        ($.TYPE_DEFAULT = 0),
        ($.TYPE_DEPTH = 1),
        ($.TYPE_FLOAT = 2);
      const tt = function (t, e, i, s) {
        (this._log = new _("cgl_framebuffer2")),
          (this.Framebuffer2DrawTargetsDefault = null),
          (this.Framebuffer2BlittingFramebuffer = null),
          (this.Framebuffer2FinalFramebuffer = null),
          (this._cgl = t),
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
          (this._options = s || {
            isFloatingPointTexture: !1,
          }),
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
            (this._options.filter = $.FILTER_LINEAR),
          this._options.hasOwnProperty("wrap") ||
            (this._options.wrap = $.WRAP_REPEAT),
          (this._numRenderBuffers = this._options.numRenderBuffers),
          (this._colorTextures = []);
        for (let e = 0; e < this._numRenderBuffers; e++)
          this._colorTextures[e] = new $(t, {
            name: "fb2 " + this.name + " " + e,
            isFloatingPointTexture: this._options.isFloatingPointTexture,
            filter: this._options.filter,
            wrap: this._options.wrap,
          });
        let r = $.FILTER_NEAREST;
        this._options.shadowMap && (r = $.FILTER_LINEAR);
        this._options.depth &&
          (this._textureDepth = new $(t, {
            name: "fb2 depth " + this.name,
            isDepthTexture: !0,
            filter: r,
            shadowMap: this._options.shadowMap || !1,
            width: e || 512,
            height: i || 512,
          })),
          t.aborted || this.setSize(e || 512, i || 512);
      };
      (tt.prototype.getWidth = function () {
        return this._width;
      }),
        (tt.prototype.getHeight = function () {
          return this._height;
        }),
        (tt.prototype.getGlFrameBuffer = function () {
          return this._frameBuffer;
        }),
        (tt.prototype.getDepthRenderBuffer = function () {
          return this._depthRenderbuffer;
        }),
        (tt.prototype.getTextureColor = function () {
          return this._colorTextures[0];
        }),
        (tt.prototype.getTextureColorNum = function (t) {
          return this._colorTextures[t];
        }),
        (tt.prototype.getTextureDepth = function () {
          return this._textureDepth;
        }),
        (tt.prototype.setFilter = function (t) {
          for (let e = 0; e < this._numRenderBuffers; e++)
            (this._colorTextures[e].filter = t),
              this._colorTextures[e].setSize(this._width, this._height);
        }),
        (tt.prototype.delete = tt.prototype.dispose =
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
        (tt.prototype.setSize = function (t, e) {
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
            this._cgl.gl.bindFramebuffer(
              this._cgl.gl.FRAMEBUFFER,
              this._frameBuffer
            ),
              this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, t),
              this._options.isFloatingPointTexture
                ? this._options.multisampling &&
                  this._options.multisamplingSamples
                  ? this._cgl.gl.renderbufferStorageMultisample(
                      this._cgl.gl.RENDERBUFFER,
                      this._options.multisamplingSamples,
                      this._cgl.gl.RGBA32F,
                      this._width,
                      this._height
                    )
                  : this._cgl.gl.renderbufferStorage(
                      this._cgl.gl.RENDERBUFFER,
                      this._cgl.gl.RGBA32F,
                      this._width,
                      this._height
                    )
                : this._options.multisampling &&
                  this._options.multisamplingSamples
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
                  ),
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
        (tt.prototype.renderStart = function () {
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
        (tt.prototype.renderEnd = function () {
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
            this._colorTextures[0].filter == $.FILTER_MIPMAP)
          )
            for (let t = 0; t < this._numRenderBuffers; t++)
              this._cgl.gl.bindTexture(
                this._cgl.gl.TEXTURE_2D,
                this._colorTextures[t].tex
              ),
                this._colorTextures[t].updateMipMap(),
                this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null);
        });
      class et {
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
            if (t instanceof et) {
              const e = t;
              this.applyPos(e.maxX, e.maxY, e.maxZ),
                this.applyPos(e.minX, e.minY, e.minZ);
            } else
              for (let e = 0; e < t.vertices.length; e += 3)
                (t.vertices[e + 0] != t.vertices[e + 0] &&
                  null == t.vertices[e + 0]) ||
                  this.applyPos(
                    t.vertices[e + 0],
                    t.vertices[e + 1],
                    t.vertices[e + 2]
                  );
            this.calcCenterSize();
          }
        }
        copy() {
          return new et(this);
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
      const it = function (t) {
        (this.name = t || "unknown"),
          (this._log = new _("cgl_geometry")),
          (this.faceVertCount = 3),
          (this._vertices = []),
          (this.verticesIndices = []),
          (this.texCoords = new Float32Array()),
          (this.texCoordsIndices = []),
          (this.vertexNormals = []),
          (this.tangents = []),
          (this.biTangents = []),
          (this.barycentrics = []),
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
      (it.prototype.clear = function () {
        (this.vertices = new Float32Array([])),
          (this.verticesIndices.length = 0),
          (this.texCoords = new Float32Array([])),
          (this.texCoordsIndices.length = 0),
          (this.vertexNormals = new Float32Array([]));
      }),
        (it.prototype.getAttributes = function () {
          return this._attributes;
        }),
        (it.prototype.getAttribute = function (t) {
          for (const e in this._attributes)
            if (this._attributes[e].name == t) return this._attributes[e];
          return null;
        }),
        (it.prototype.setAttribute = function (t, e, i) {
          let s = "";
          1 == i
            ? (s = "float")
            : 2 == i
            ? (s = "vec2")
            : 3 == i
            ? (s = "vec3")
            : 4 == i && (s = "vec4");
          const r = {
            name: t,
            data: e,
            itemSize: i,
            type: s,
          };
          this._attributes[t] = r;
        }),
        (it.prototype.setVertices = function (t) {
          t instanceof Float32Array
            ? (this._vertices = t)
            : (this._vertices = new Float32Array(t));
        }),
        (it.prototype.setTexCoords = function (t) {
          t instanceof Float32Array
            ? (this.texCoords = t)
            : (this.texCoords = new Float32Array(t));
        }),
        (it.prototype.calcNormals = function (t) {
          t || this.unIndex(), this.calculateNormals({});
        }),
        (it.prototype.setPointVertices = function (t) {
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
        (it.prototype.merge = function (t) {
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
        (it.prototype.copy = function () {
          let t = 0;
          const e = new it(this.name + " copy");
          if (
            ((e.faceVertCount = this.faceVertCount),
            e.setVertices(this._vertices.slice(0)),
            this.verticesIndices)
          )
            for (
              e.verticesIndices.length = this.verticesIndices.length, t = 0;
              t < this.verticesIndices.length;
              t++
            )
              e.verticesIndices[t] = this.verticesIndices[t];
          for (
            e.texCoords = new Float32Array(this.texCoords.length), t = 0;
            t < this.texCoords.length;
            t++
          )
            e.texCoords[t] = this.texCoords[t];
          for (
            e.texCoordsIndices.length = this.texCoordsIndices.length, t = 0;
            t < this.texCoordsIndices.length;
            t++
          )
            e.texCoordsIndices[t] = this.texCoordsIndices[t];
          for (
            e.vertexNormals = new Float32Array(this.vertexNormals.length), t = 0;
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
            e.barycentrics.length = this.barycentrics.length, t = 0;
            t < this.barycentrics.length;
            t++
          )
            e.barycentrics[t] = this.barycentrics[t];
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
        (it.prototype.calculateNormals = function (t) {
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
            t.length = this.verticesIndices.length / 3;
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
        (it.prototype.calcTangentsBitangents = function () {
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
              _ = this.verticesIndices[3 * u + 1],
              p = this.verticesIndices[3 * u + 2];
            vec3.set(
              s,
              this.vertices[3 * t],
              this.vertices[3 * t + 1],
              this.vertices[3 * t + 2]
            ),
              vec3.set(
                r,
                this.vertices[3 * _],
                this.vertices[3 * _ + 1],
                this.vertices[3 * _ + 2]
              ),
              vec3.set(
                n,
                this.vertices[3 * p],
                this.vertices[3 * p + 1],
                this.vertices[3 * p + 2]
              ),
              vec2.set(o, this.texCoords[2 * t], this.texCoords[2 * t + 1]),
              vec2.set(h, this.texCoords[2 * _], this.texCoords[2 * _ + 1]),
              vec2.set(a, this.texCoords[2 * p], this.texCoords[2 * p + 1]);
            const g = r[0] - s[0],
              d = n[0] - s[0],
              f = r[1] - s[1],
              m = n[1] - s[1],
              E = r[2] - s[2],
              T = n[2] - s[2],
              b = h[0] - o[0],
              A = a[0] - o[0],
              y = h[1] - o[1],
              x = a[1] - o[1],
              v = 1 / (b * x - A * y);
            vec3.set(
              l,
              (x * g - y * d) * v,
              (x * f - y * m) * v,
              (x * E - y * T) * v
            ),
              vec3.set(
                c,
                (b * d - A * g) * v,
                (b * m - A * f) * v,
                (b * T - A * E) * v
              ),
              (i[t] = l),
              (i[_] = l),
              (i[p] = l),
              (i[t + e] = c),
              (i[_ + e] = c),
              (i[p + e] = c);
          }
          const u = vec3.create(),
            _ = vec3.create(),
            p = vec3.create(),
            g = vec3.create(),
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
              vec3.set(_, i[t][0], i[t][1], i[t][2]);
            const s = vec3.dot(u, _);
            vec3.scale(d, u, s),
              vec3.subtract(f, _, d),
              vec3.normalize(E, f),
              vec3.cross(m, u, _);
            vec3.dot(m, i[t + e]);
            const r = 1;
            vec3.scale(p, E, 1 / r),
              vec3.cross(g, u, p),
              (this.tangents[3 * t + 0] = p[0]),
              (this.tangents[3 * t + 1] = p[1]),
              (this.tangents[3 * t + 2] = p[2]),
              (this.biTangents[3 * t + 0] = g[0]),
              (this.biTangents[3 * t + 1] = g[1]),
              (this.biTangents[3 * t + 2] = g[2]);
          }
        }),
        (it.prototype.isIndexed = function () {
          return 0 != this.verticesIndices.length;
        }),
        (it.prototype.unIndex = function (t, e) {
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
        (it.prototype.calcBarycentric = function () {
          this.barycentrics.length = this.vertices.length;
          let t = 0;
          for (t = 0; t < this.vertices.length; t++) this.barycentrics[t] = 0;
          let e = 0;
          for (t = 0; t < this.vertices.length; t += 3)
            (this.barycentrics[t + e] = 1), e++, 3 == e && (e = 0);
        }),
        (it.prototype.getBounds = function () {
          return new et(this);
        }),
        (it.prototype.center = function (t, e, i) {
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
        (it.prototype.mapTexCoords2d = function () {
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
        (it.buildFromFaces = function (t, e) {
          const i = [],
            s = [];
          for (let e = 0; e < t.length; e += 3) {
            const r = t[e + 0],
              n = t[e + 1],
              o = t[e + 2],
              h = [-1, -1, -1];
            for (let t = 0; t < i; t += 3)
              i[t + 0] == r[0] &&
                i[t + 1] == r[1] &&
                i[t + 2] == r[2] &&
                (h[0] = t / 3),
                i[t + 0] == n[0] &&
                  i[t + 1] == n[1] &&
                  i[t + 2] == n[2] &&
                  (h[1] = t / 3),
                i[t + 0] == o[0] &&
                  i[t + 1] == o[1] &&
                  i[t + 2] == o[2] &&
                  (h[2] = t / 3);
            -1 == h[0] && (i.push(r[0], r[1], r[2]), (h[0] = (i.length - 1) / 3)),
              -1 == h[1] &&
                (i.push(n[0], n[1], n[2]), (h[1] = (i.length - 1) / 3)),
              -1 == h[2] &&
                (i.push(o[0], o[1], o[2]), (h[2] = (i.length - 1) / 3)),
              s.push(parseInt(h[0], 10)),
              s.push(parseInt(h[1], 10)),
              s.push(parseInt(h[2], 10));
          }
          const r = new it(this.name);
          return (r.name = e), (r.vertices = i), (r.verticesIndices = s), r;
        }),
        (it.json2geom = function (t) {
          const e = new it("jsonMeshGeom");
          if (
            ((e.verticesIndices = []),
            (e.vertices = t.vertices || []),
            (e.vertexNormals = t.normals || []),
            (e.vertexColors = t.colors || []),
            (e.tangents = t.tangents || []),
            (e.biTangents = t.bitangents || []),
            t.texturecoords && e.setTexCoords(t.texturecoords[0]),
            t.vertices_b64 && (e.vertices = new Float32Array(u(t.vertices_b64))),
            t.normals_b64 &&
              (e.vertexNormals = new Float32Array(u(t.normals_b64))),
            t.tangents_b64 && (e.tangents = new Float32Array(u(t.tangents_b64))),
            t.bitangents_b64 &&
              (e.biTangents = new Float32Array(u(t.bitangents_b64))),
            t.texturecoords_b64 &&
              e.setTexCoords(new Float32Array(u(t.texturecoords_b64[0]))),
            t.faces_b64)
          )
            e.verticesIndices = new Uint32Array(u(t.faces_b64));
          else {
            e.verticesIndices.length = 3 * t.faces.length;
            for (let i = 0; i < t.faces.length; i++)
              (e.verticesIndices[3 * i] = t.faces[i][0]),
                (e.verticesIndices[3 * i + 1] = t.faces[i][1]),
                (e.verticesIndices[3 * i + 2] = t.faces[i][2]);
          }
          return e;
        });
      const st = function (t, e, i, s, r, n, o, h, a, l) {
        if (
          ((this._loc = -1),
          (this._log = new _("cgl_uniform")),
          (this._type = e),
          (this._cgl = t._cgl),
          (this._name = i),
          (this._shader = t),
          (this._value = 1e-5),
          (this._oldValue = null),
          (this._port = null),
          (this._structName = a),
          (this._structUniformName = h),
          (this._propertyName = l),
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
        "object" == typeof s && s instanceof D
          ? ((this._port = s),
            (this._value = this._port.get()),
            r && n && o
              ? ((r instanceof D && n instanceof D && o instanceof D) ||
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
              ? ((r instanceof D && n instanceof D) ||
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
              ? (r instanceof D ||
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
      (st.prototype.copy = function (t) {
        const e = new st(
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
        (st.prototype.getGlslTypeString = function () {
          return "f" == this._type
            ? "float"
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
        (st.prototype._isValidLoc = function () {
          return -1 != this._loc;
        }),
        (st.prototype.getType = function () {
          return this._type;
        }),
        (st.prototype.getName = function () {
          return this._name;
        }),
        (st.prototype.getValue = function () {
          return this._value;
        }),
        (st.prototype.getShaderType = function () {
          return this.shaderType;
        }),
        (st.prototype.isStructMember = function () {
          return !!this._structName;
        }),
        (st.prototype.resetLoc = function () {
          (this._loc = -1), (this.needsUpdate = !0);
        }),
        (st.prototype.bindTextures = function () {
          return this._value;
        }),
        (st.prototype.resetLoc = function () {
          (this._loc = -1), (this.needsUpdate = !0);
        }),
        (st.prototype.bindTextures = function () {}),
        (st.prototype.getLoc = function () {
          return this._loc;
        }),
        (st.prototype.updateFromPort4f = function () {
          (this._value[0] = this._port.get()),
            (this._value[1] = this._port2.get()),
            (this._value[2] = this._port3.get()),
            (this._value[3] = this._port4.get()),
            this.setValue(this._value);
        }),
        (st.prototype.updateFromPort3f = function () {
          (this._value[0] = this._port.get()),
            (this._value[1] = this._port2.get()),
            (this._value[2] = this._port3.get()),
            this.setValue(this._value);
        }),
        (st.prototype.updateFromPort2f = function () {
          (this._value[0] = this._port.get()),
            (this._value[1] = this._port2.get()),
            this.setValue(this._value);
        }),
        (st.prototype.updateFromPort = function () {
          this.setValue(this._port.get());
        }),
        (st.prototype.updateValueF = function () {
          this._isValidLoc()
            ? (this.needsUpdate = !1)
            : (this._loc = this._shader
                .getCgl()
                .gl.getUniformLocation(this._shader.getProgram(), this._name)),
            this._shader.getCgl().gl.uniform1f(this._loc, this._value),
            this._cgl.profileData.profileUniformCount++;
        }),
        (st.prototype.setValueF = function (t) {
          t != this._value && ((this.needsUpdate = !0), (this._value = t));
        }),
        (st.prototype.updateValueI = function () {
          this._isValidLoc()
            ? (this.needsUpdate = !1)
            : (this._loc = this._shader
                .getCgl()
                .gl.getUniformLocation(this._shader.getProgram(), this._name)),
            this._shader.getCgl().gl.uniform1i(this._loc, this._value),
            this._cgl.profileData.profileUniformCount++;
        }),
        (st.prototype.updateValue2I = function () {
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
        (st.prototype.updateValue3I = function () {
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
        (st.prototype.updateValue4I = function () {
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
        (st.prototype.setValueI = function (t) {
          t != this._value && ((this.needsUpdate = !0), (this._value = t));
        }),
        (st.prototype.setValue2I = function (t) {
          t &&
            (this._oldValue
              ? (t[0] == this._oldValue[0] && t[1] == this._oldValue[1]) ||
                ((this._oldValue[0] = t[0]),
                (this._oldValue[1] = t[1]),
                (this.needsUpdate = !0))
              : ((this._oldValue = [t[0] - 1, 1]), (this.needsUpdate = !0)),
            (this._value = t));
        }),
        (st.prototype.setValue3I = function (t) {
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
        (st.prototype.setValue4I = function (t) {
          (this.needsUpdate = !0), (this._value = t || vec4.create());
        }),
        (st.prototype.updateValueBool = function () {
          this._isValidLoc()
            ? (this.needsUpdate = !1)
            : (this._loc = this._shader
                .getCgl()
                .gl.getUniformLocation(this._shader.getProgram(), this._name)),
            this._shader.getCgl().gl.uniform1i(this._loc, this._value ? 1 : 0),
            this._cgl.profileData.profileUniformCount++;
        }),
        (st.prototype.setValueBool = function (t) {
          t != this._value && ((this.needsUpdate = !0), (this._value = t));
        }),
        (st.prototype.setValueArray4F = function (t) {
          (this.needsUpdate = !0), (this._value = t);
        }),
        (st.prototype.updateValueArray4F = function () {
          this._isValidLoc()
            ? (this.needsUpdate = !1)
            : (this._loc = this._shader
                .getCgl()
                .gl.getUniformLocation(this._shader.getProgram(), this._name)),
            this._value &&
              (this._shader.getCgl().gl.uniform4fv(this._loc, this._value),
              this._cgl.profileData.profileUniformCount++);
        }),
        (st.prototype.setValueArray3F = function (t) {
          (this.needsUpdate = !0), (this._value = t);
        }),
        (st.prototype.updateValueArray3F = function () {
          this._isValidLoc()
            ? (this.needsUpdate = !1)
            : (this._loc = this._shader
                .getCgl()
                .gl.getUniformLocation(this._shader.getProgram(), this._name)),
            this._value &&
              (this._shader.getCgl().gl.uniform3fv(this._loc, this._value),
              this._cgl.profileData.profileUniformCount++);
        }),
        (st.prototype.setValueArray2F = function (t) {
          (this.needsUpdate = !0), (this._value = t);
        }),
        (st.prototype.updateValueArray2F = function () {
          this._isValidLoc()
            ? (this.needsUpdate = !1)
            : (this._loc = this._shader
                .getCgl()
                .gl.getUniformLocation(this._shader.getProgram(), this._name)),
            this._value &&
              (this._shader.getCgl().gl.uniform2fv(this._loc, this._value),
              this._cgl.profileData.profileUniformCount++);
        }),
        (st.prototype.setValueArrayF = function (t) {
          (this.needsUpdate = !0), (this._value = t);
        }),
        (st.prototype.updateValueArrayF = function () {
          this._isValidLoc()
            ? (this.needsUpdate = !1)
            : (this._loc = this._shader
                .getCgl()
                .gl.getUniformLocation(this._shader.getProgram(), this._name)),
            this._value &&
              (this._shader.getCgl().gl.uniform1fv(this._loc, this._value),
              this._cgl.profileData.profileUniformCount++);
        }),
        (st.prototype.setValueArrayT = function (t) {
          (this.needsUpdate = !0), (this._value = t);
        }),
        (st.prototype.updateValue3F = function () {
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
        (st.prototype.setValue3F = function (t) {
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
        (st.prototype.updateValue2F = function () {
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
        (st.prototype.setValue2F = function (t) {
          t &&
            (this._oldValue
              ? (t[0] == this._oldValue[0] && t[1] == this._oldValue[1]) ||
                ((this._oldValue[0] = t[0]),
                (this._oldValue[1] = t[1]),
                (this.needsUpdate = !0))
              : ((this._oldValue = [t[0] - 1, 1]), (this.needsUpdate = !0)),
            (this._value = t));
        }),
        (st.prototype.updateValue4F = function () {
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
        (st.prototype.setValue4F = function (t) {
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
        (st.prototype.updateValueM4 = function () {
          this._isValidLoc() ||
            ((this._loc = this._shader
              .getCgl()
              .gl.getUniformLocation(this._shader.getProgram(), this._name)),
            this._cgl.profileData.profileShaderGetUniform++,
            (this._cgl.profileData.profileShaderGetUniformName = this._name)),
            this._shader.getCgl().gl.uniformMatrix4fv(this._loc, !1, this._value),
            this._cgl.profileData.profileUniformCount++;
        }),
        (st.prototype.setValueM4 = function (t) {
          (this.needsUpdate = !0), (this._value = t || mat4.create());
        }),
        (st.prototype.updateValueArrayT = function () {
          this._isValidLoc()
            ? (this.needsUpdate = !1)
            : (this._loc = this._shader
                .getCgl()
                .gl.getUniformLocation(this._shader.getProgram(), this._name)),
            this._value &&
              (this._shader.getCgl().gl.uniform1iv(this._loc, this._value),
              this._cgl.profileData.profileUniformCount++);
        }),
        (st.prototype.updateValueT = function () {
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
        (st.prototype.setValueT = function (t) {
          (this.needsUpdate = !0), (this._value = t);
        });
      const rt = 180 / Math.PI,
        nt = {
          MATH: {
            DEG2RAD: Math.PI / 180,
            RAD2DEG: rt,
          },
          SHADER: {
            SHADERVAR_VERTEX_POSITION: "vPosition",
            SHADERVAR_VERTEX_NUMBER: "attrVertIndex",
            SHADERVAR_VERTEX_NORMAL: "attrVertNormal",
            SHADERVAR_VERTEX_TEXCOORD: "attrTexCoord",
            SHADERVAR_INSTANCE_MMATRIX: "instMat",
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
      const ot = {
          lastMesh: null,
        },
        ht = function (t, e, i) {
          (this._cgl = t),
            (this._log = new _("cgl_mesh")),
            (this._bufVertexAttrib = null),
            (this._bufVerticesIndizes = this._cgl.gl.createBuffer()),
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
      (ht.prototype.updateVertices = function (t) {
        this.setAttribute(nt.SHADER.SHADERVAR_VERTEX_POSITION, t.vertices, 3),
          (this._numVerts = t.vertices.length / 3);
      }),
        (ht.prototype.setAttributePointer = function (t, e, i, s) {
          for (let r = 0; r < this._attributes.length; r++)
            this._attributes[r].name == t &&
              (this._attributes[r].pointer || (this._attributes[r].pointer = []),
              this._attributes[r].pointer.push({
                loc: -1,
                name: e,
                stride: i,
                offset: s,
                instanced: t == nt.SHADER.SHADERVAR_INSTANCE_MMATRIX,
              }));
        }),
        (ht.prototype.getAttribute = function (t) {
          for (let e = 0; e < this._attributes.length; e++)
            if (this._attributes[e].name == t) return this._attributes[e];
        }),
        (ht.prototype.setAttributeRange = function (t, e, i, s) {
          t &&
            (i || s) &&
            (this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, t.buffer),
            (this._cgl.profileData.profileMeshAttributes += s - i || 0),
            (this._cgl.profileData.profileSingleMeshAttribute[this._name] =
              this._cgl.profileData.profileSingleMeshAttribute[this._name] || 0),
            (this._cgl.profileData.profileSingleMeshAttribute[this._name] +=
              s - i || 0),
            t.numItems < e.length / t.itemSize && this._resizeAttr(e, t),
            s > e.length &&
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
        (ht.prototype._resizeAttr = function (t, e) {
          e.buffer && this._cgl.gl.deleteBuffer(e.buffer),
            (e.buffer = this._cgl.gl.createBuffer()),
            this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, e.buffer),
            this._bufferArray(t, e),
            (e.numItems = t.length / e.itemSize);
        }),
        (ht.prototype._bufferArray = function (t, e) {
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
        (ht.prototype.addAttribute =
          ht.prototype.updateAttribute =
          ht.prototype.setAttribute =
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
                  t == nt.SHADER.SHADERVAR_INSTANCE_MMATRIX && (n = !0),
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
                t == nt.SHADER.SHADERVAR_VERTEX_POSITION &&
                  (this._bufVertexAttrib = c),
                this._attributes.push(c),
                (this._attribLocs = {}),
                c
              );
            }),
        (ht.prototype.getAttributes = function () {
          return this._attributes;
        }),
        (ht.prototype.updateTexCoords = function (t) {
          if (t.texCoords && t.texCoords.length > 0)
            this.setAttribute(
              nt.SHADER.SHADERVAR_VERTEX_TEXCOORD,
              t.texCoords,
              2
            );
          else {
            const e = new Float32Array(Math.round((t.vertices.length / 3) * 2));
            this.setAttribute(nt.SHADER.SHADERVAR_VERTEX_TEXCOORD, e, 2);
          }
        }),
        (ht.prototype.updateNormals = function (t) {
          if (t.vertexNormals && t.vertexNormals.length > 0)
            this.setAttribute("attrVertNormal", t.vertexNormals, 3);
          else {
            const e = new Float32Array(Math.round(t.vertices.length));
            this.setAttribute("attrVertNormal", e, 3);
          }
        }),
        (ht.prototype._setVertexNumbers = function () {
          if (
            !this._verticesNumbers ||
            this._verticesNumbers.length != this._numVerts
          ) {
            this._verticesNumbers = new Float32Array(this._numVerts);
            for (let t = 0; t < this._numVerts; t++) this._verticesNumbers[t] = t;
            this.setAttribute(
              nt.SHADER.SHADERVAR_VERTEX_NUMBER,
              this._verticesNumbers,
              1,
              (t, e, i) => {
                i.uniformNumVertices ||
                  (i.uniformNumVertices = new st(
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
        (ht.prototype.setVertexIndices = function (t) {
          if (this._bufVerticesIndizes)
            if (t.length > 0) {
              for (let e = 0; e < t.length; e++)
                if (t[e] >= this._numVerts)
                  return void this._log.warn("invalid index in " + this._name);
              this._cgl.gl.bindBuffer(
                this._cgl.gl.ELEMENT_ARRAY_BUFFER,
                this._bufVerticesIndizes
              ),
                t instanceof Uint16Array
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
          else this._log.warn("no bufVerticesIndizes");
        }),
        (ht.prototype.setGeom = function (t, e) {
          (this._geom = t),
            null != t.glPrimitive && (this._glPrimitive = t.glPrimitive),
            this._geom &&
              this._geom.name &&
              (this._name = "mesh " + this._geom.name),
            (ot.lastMesh = null),
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
        (ht.prototype._preBind = function (t) {
          for (let e = 0; e < this._attributes.length; e++)
            this._attributes[e].cb &&
              this._attributes[e].cb(this._attributes[e], this._geom, t);
        }),
        (ht.prototype._checkAttrLengths = function () {}),
        (ht.prototype._bind = function (t) {
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
            this._checkAttrLengths();
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
        (ht.prototype.unBind = function () {
          const t = this._lastShader;
          if (((this._lastShader = null), !t)) return;
          let e = [];
          this._attribLocs[t.id]
            ? (e = this._attribLocs[t.id])
            : (this._attribLocs[t.id] = e),
            (ot.lastMesh = null);
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
        (ht.prototype.meshChanged = function () {
          return this._cgl.lastMesh && this._cgl.lastMesh != this;
        }),
        (ht.prototype.printDebug = function (t) {
          console.log("--attributes");
          for (let t = 0; t < this._attributes.length; t++)
            console.log("attribute " + t + " " + this._attributes[t].name);
        }),
        (ht.prototype.setNumVertices = function (t) {
          this._bufVertexAttrib.numItems = t;
        }),
        (ht.prototype.getNumVertices = function () {
          return this._bufVertexAttrib.numItems;
        }),
        (ht.prototype.render = function (t) {
          if (!t || !t.isValid()) return;
          this._geom &&
            (t.wireframe ||
              this._geom.isIndexed() ||
              !this._preWireframeGeom ||
              this.setGeom(this._preWireframeGeom),
            t.wireframe &&
              this._geom.isIndexed() &&
              ((this._preWireframeGeom = this._geom),
              (this._geom = this._geom.copy()),
              this._geom.unIndex(),
              this._geom.calcBarycentric(),
              this.setGeom(this._geom),
              this.setAttribute("attrBarycentric", this._geom.barycentrics, 3)));
          let e = !1;
          ot.lastMesh != this && (ot.lastMesh && ot.lastMesh.unBind(), (e = !0)),
            e && this._preBind(t),
            t.bind(),
            t.bindTextures && t.bindTextures(),
            this._bind(t),
            this.addVertexNumbers && this._setVertexNumbers(),
            (ot.lastMesh = this);
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
                ((i = {
                  id: e,
                  num: 0,
                }),
                (this._cgl.profileData.glQueryData[e] = i)),
              this._queryExt ||
                (this._queryExt = this._cgl.gl.getExtension(
                  "EXT_disjoint_timer_query_webgl2"
                )),
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
                  this._cgl.gl.UNSIGNED_SHORT,
                  0
                )
              : this._cgl.gl.drawElementsInstanced(
                  i,
                  this._bufVerticesIndizes.numItems,
                  this._cgl.gl.UNSIGNED_SHORT,
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
        (ht.prototype.setNumInstances = function (t) {
          if (((t = Math.max(0, t)), this._numInstances != t)) {
            this._numInstances = t;
            const e = new Float32Array(t);
            for (let i = 0; i < t; i++) e[i] = i;
            this.setAttribute("instanceIndex", e, 1, {
              instanced: !0,
            });
          }
        }),
        (ht.prototype._disposeAttributes = function () {
          if (this._attributes) {
            for (let t = 0; t < this._attributes.length; t++)
              this._attributes[t].buffer &&
                (this._cgl.gl.deleteBuffer(this._attributes[t].buffer),
                (this._attributes[t].buffer = null));
            this._attributes.length = 0;
          }
        }),
        (ht.prototype.dispose = function () {
          this._bufVertexAttrib &&
            this._bufVertexAttrib.buffer &&
            this._cgl.gl.deleteBuffer(this._bufVertexAttrib.buffer),
            this._bufVerticesIndizes &&
              this._cgl.gl.deleteBuffer(this._bufVerticesIndizes),
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
              let s = {
                  nameOut: e,
                },
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
        })(ht);
      const at = {
          getSimpleRect: function (t, e) {
            const i = new it(e);
            return (
              (i.vertices = [1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0]),
              (i.texCoords = [1, 1, 0, 1, 1, 0, 0, 0]),
              (i.verticesIndices = [0, 1, 2, 2, 1, 3]),
              (i.vertexNormals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
              new ht(t, i)
            );
          },
        },
        lt = function (t, e) {
          (this._cgl = t),
            (this._log = new _("cgl_TextureEffect")),
            t.TextureEffectMesh || this.createMesh(),
            (this._textureSource = null),
            (this._options = e),
            (this._textureTarget = null),
            (this._frameBuf = this._cgl.gl.createFramebuffer()),
            (this._frameBuf2 = this._cgl.gl.createFramebuffer()),
            (this._renderbuffer = this._cgl.gl.createRenderbuffer()),
            (this._renderbuffer2 = this._cgl.gl.createRenderbuffer()),
            (this.switched = !1),
            (this.depth = !1);
        };
      (lt.prototype.getWidth = function () {
        return this._textureSource.width;
      }),
        (lt.prototype.getHeight = function () {
          return this._textureSource.height;
        }),
        (lt.prototype.setSourceTexture = function (t) {
          t.textureType == $.TYPE_FLOAT &&
            this._cgl.gl.getExtension("EXT_color_buffer_float"),
            null === t
              ? ((this._textureSource = new $(this._cgl)),
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
              this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null));
        }),
        (lt.prototype.startEffect = function (t) {
          this._textureTarget
            ? ((this.switched = !1),
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
              mat4.identity(this._cgl.mvMatrix),
              t && (this._bgTex = t),
              (this._countEffects = 0))
            : this._log.warn("effect has no target");
        }),
        (lt.prototype.endEffect = function () {
          this._cgl.popDepthTest(!1),
            this._cgl.popModelMatrix(),
            this._cgl.popPMatrix(),
            this._cgl.popModelMatrix(),
            this._cgl.popViewMatrix(),
            this._cgl.popPMatrix(),
            this._cgl.resetViewPort();
        }),
        (lt.prototype.bind = function () {
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
        (lt.prototype.finish = function () {
          null !== this._textureSource
            ? (this._cgl.TextureEffectMesh.render(this._cgl.getShader()),
              this._cgl.gl.bindFramebuffer(
                this._cgl.gl.FRAMEBUFFER,
                this._cgl.popGlFrameBuffer()
              ),
              this._cgl.profileData.profileTextureEffect++,
              this._textureTarget.filter == $.FILTER_MIPMAP &&
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
        (lt.prototype.getCurrentTargetTexture = function () {
          return this.switched ? this._textureSource : this._textureTarget;
        }),
        (lt.prototype.getCurrentSourceTexture = function () {
          return 0 == this._countEffects && this._bgTex
            ? this._bgTex
            : this.switched
            ? this._textureTarget
            : this._textureSource;
        }),
        (lt.prototype.delete = function () {
          this._textureTarget && this._textureTarget.delete(),
            this._textureSource && this._textureSource.delete(),
            this._cgl.gl.deleteRenderbuffer(this._renderbuffer),
            this._cgl.gl.deleteFramebuffer(this._frameBuf);
        }),
        (lt.prototype.createMesh = function () {
          this._cgl.TextureEffectMesh = at.getSimpleRect(
            this._cgl,
            "texEffectRect"
          );
        }),
        (lt.checkOpNotInTextureEffect = function (t) {
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
        (lt.checkOpInEffect = function (t) {
          return t.patch.cgl.currentTextureEffect && t.uiAttribs.uierrors
            ? (t.setUiError("texeffect", null), !0)
            : !!t.patch.cgl.currentTextureEffect ||
                (t.patch.cgl.currentTextureEffect ||
                (t.uiAttribs.uierrors && 0 != t.uiAttribs.uierrors.length)
                  ? !!t.patch.cgl.currentTextureEffect
                  : (t.setUiError(
                      "texeffect",
                      'This op must be a child of an ImageCompose op! More infos <a href="https://docs.cables.gl/image_composition/image_composition.html" target="_blank">here</a>.',
                      1
                    ),
                    !1));
        }),
        (lt.getBlendCode = function () {
          return (
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
            "   #ifdef BM_SUBSTRACT".endl() +
            "       colNew=max(base + blend - vec3(1.0), vec3(0.0));".endl() +
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
            "}".endl() +
            "vec4 cgl_blend(vec4 oldColor,vec4 newColor,float amount)".endl() +
            "{".endl() +
            "vec4 col=vec4( _blend(oldColor.rgb,newColor.rgb) ,1.0);".endl() +
            "col=vec4( mix( col.rgb, oldColor.rgb ,1.0-oldColor.a*amount),1.0);".endl() +
            "return col;".endl() +
            "}"
          );
        }),
        (lt.onChangeBlendSelect = function (t, e) {
          "normal" == e ? t.define("BM_NORMAL") : t.removeDefine("BM_NORMAL"),
            "multiply" == e
              ? t.define("BM_MULTIPLY")
              : t.removeDefine("BM_MULTIPLY"),
            "multiply invert" == e
              ? t.define("BM_MULTIPLY_INV")
              : t.removeDefine("BM_MULTIPLY_INV"),
            "average" == e
              ? t.define("BM_AVERAGE")
              : t.removeDefine("BM_AVERAGE"),
            "add" == e ? t.define("BM_ADD") : t.removeDefine("BM_ADD"),
            "substract" == e
              ? t.define("BM_SUBSTRACT")
              : t.removeDefine("BM_SUBSTRACT"),
            "difference" == e
              ? t.define("BM_DIFFERENCE")
              : t.removeDefine("BM_DIFFERENCE"),
            "negation" == e
              ? t.define("BM_NEGATION")
              : t.removeDefine("BM_NEGATION"),
            "exclusion" == e
              ? t.define("BM_EXCLUSION")
              : t.removeDefine("BM_EXCLUSION"),
            "lighten" == e
              ? t.define("BM_LIGHTEN")
              : t.removeDefine("BM_LIGHTEN"),
            "darken" == e ? t.define("BM_DARKEN") : t.removeDefine("BM_DARKEN"),
            "overlay" == e
              ? t.define("BM_OVERLAY")
              : t.removeDefine("BM_OVERLAY"),
            "screen" == e ? t.define("BM_SCREEN") : t.removeDefine("BM_SCREEN"),
            "softlight" == e
              ? t.define("BM_SOFTLIGHT")
              : t.removeDefine("BM_SOFTLIGHT"),
            "hardlight" == e
              ? t.define("BM_HARDLIGHT")
              : t.removeDefine("BM_HARDLIGHT"),
            "color dodge" == e
              ? t.define("BM_COLORDODGE")
              : t.removeDefine("BM_COLORDODGE"),
            "color burn" == e
              ? t.define("BM_COLORBURN")
              : t.removeDefine("BM_COLORBURN");
        }),
        (lt.AddBlendSelect = function (t, e, i) {
          return t.inValueSelect(
            e,
            [
              "normal",
              "lighten",
              "darken",
              "multiply",
              "multiply invert",
              "average",
              "add",
              "substract",
              "difference",
              "negation",
              "exclusion",
              "overlay",
              "screen",
              "color dodge",
              "color burn",
              "softlight",
              "hardlight",
            ],
            i || "normal"
          );
        }),
        (lt.setupBlending = function (t, e, i, s) {
          t.setPortGroup("Blending", [i, s]),
            (i.onChange = () => {
              lt.onChangeBlendSelect(e, i.get());
              let s = i.get();
              "normal" == s
                ? (s = null)
                : "multiply" == s
                ? (s = "mul")
                : "multiply invert" == s
                ? (s = "mulinv")
                : "lighten" == s
                ? (s = "light")
                : "darken" == s
                ? (s = "darken")
                : "average" == s
                ? (s = "avg")
                : "substract" == s
                ? (s = "sub")
                : "difference" == s
                ? (s = "diff")
                : "negation" == s || "negation" == s || "negation" == s
                ? (s = "neg")
                : "exclusion" == s
                ? (s = "exc")
                : "overlay" == s
                ? (s = "ovl")
                : "color dodge" == s
                ? (s = "dodge")
                : "color burn" == s
                ? (s = "burn")
                : "softlight" == s
                ? (s = "soft")
                : "hardlight" == s && (s = "hard"),
                t.setUiAttrib({
                  extendTitle: s,
                });
            }),
            lt.onChangeBlendSelect(e, i.get());
        });
      const ct = {
          "CGL.BLENDMODES": function () {
            (this.name = "blendmodes"), (this.srcHeadFrag = lt.getBlendCode());
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
                return [new st(t, "t", "CGLRNDTEX", 7)];
              }),
              (this.onBind = function (t, e) {
                $.getRandomTexture(t), t.setTexture(7, $.getRandomTexture(t).tex);
              });
          },
        },
        ut = function () {
          return window.performance.now();
        },
        _t = function () {
          return ut();
        },
        pt = function () {
          CABLES.EventTarget.apply(this),
            (this._timeStart = ut()),
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
          (this._lastTime = (ut() - this._timeStart) / 1e3),
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
            (this._timeStart = ut()),
            (this._timeOffset = t),
            (this._currentTime = t),
            this._eventTimeChange();
        }),
        (pt.prototype.setOffset = function (t) {
          this._currentTime + t < 0
            ? ((this._timeStart = ut()),
              (this._timeOffset = 0),
              (this._currentTime = 0))
            : ((this._timeOffset += t),
              (this._currentTime = this._lastTime + this._timeOffset)),
            this._eventTimeChange();
        }),
        (pt.prototype.play = function () {
          (this._timeStart = ut()), (this._paused = !1), this._eventPlayPause();
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
      const gt = Math.PI / 180,
        dt = (Math.PI, -1 != window.navigator.userAgent.indexOf("Windows")),
        ft = function (t) {
          let e;
          if (t.wheelDelta)
            (e =
              (t.wheelDelta % 120) - 0 == -0
                ? t.wheelDelta / 120
                : t.wheelDelta / 30),
              (e *= -1.5),
              dt && (e *= 2);
          else {
            let i = t.deltaY;
            t.shiftKey && (i = t.deltaX);
            const s = i || t.detail;
            (e = -(s % 3 ? 10 * s : s / 3)), (e *= -3);
          }
          return e > 20 && (e = 20), e < -20 && (e = -20), e;
        },
        mt = ft,
        Et = ft,
        Tt = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        },
        bt = /[&<>"']/g,
        At = RegExp(bt.source),
        yt = function (t, e) {
          if (!t) throw new Error("shader constructed without cgl " + e);
          (this._log = new _("cgl_shader")),
            (this._cgl = t),
            e || this._log.stack("no shader name given"),
            (this._name = e || "unknown"),
            (this.glslVersion = 0),
            t.glVersion > 1 && (this.glslVersion = 300),
            (this.id = x()),
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
      (yt.prototype.isValid = function () {
        return this._isValid;
      }),
        (yt.prototype.getCgl = function () {
          return this._cgl;
        }),
        (yt.prototype.getName = function () {
          return this._name;
        }),
        (yt.prototype.enableExtension = function (t) {
          this.setWhyCompile("enable extension " + t),
            (this._needsRecompile = !0),
            this._extensions.push(t);
        }),
        (yt.prototype.getAttrVertexPos = function () {
          return this._attrVertexPos;
        }),
        (yt.prototype.hasTextureUniforms = function () {
          for (let t = 0; t < this._uniforms.length; t++)
            if ("t" == this._uniforms[t].getType()) return !0;
          return !1;
        }),
        (yt.prototype.setWhyCompile = function (t) {
          this._compileReason = t;
        }),
        (yt.prototype.copyUniformValues = function (t) {
          for (let e = 0; e < t._uniforms.length; e++)
            this._uniforms[e] &&
              this.getUniform(t._uniforms[e].getName()).set(
                t._uniforms[e].getValue()
              );
          this.popTextures();
          for (let e = 0; e < t._textureStackUni.length; e++)
            (this._textureStackUni[e] = t._textureStackUni[e]),
              (this._textureStackTex[e] = t._textureStackTex[e]),
              (this._textureStackType[e] = t._textureStackType[e]),
              (this._textureStackTexCgl[e] = t._textureStackTexCgl[e]);
        }),
        (yt.prototype.copy = function () {
          const t = new yt(this._cgl, this._name + " copy");
          t.setSource(this.srcVert, this.srcFrag),
            (t._modules = JSON.parse(JSON.stringify(this._modules))),
            (t._defines = JSON.parse(JSON.stringify(this._defines))),
            (t._modGroupCount = this._modGroupCount),
            (t._moduleNames = this._moduleNames),
            (t.glPrimitive = this.glPrimitive),
            (t.offScreenPass = this.offScreenPass),
            (t._extensions = this._extensions);
          for (let e = 0; e < this._uniforms.length; e++) {
            this._uniforms[e].copy(t).resetLoc();
          }
          return this.setWhyCompile("copy"), (t._needsRecompile = !0), t;
        }),
        (yt.prototype.setSource = function (t, e) {
          (this.srcVert = t),
            (this.srcFrag = e),
            this.setWhyCompile("Source changed"),
            (this._needsRecompile = !0);
        }),
        (yt.prototype._addLibs = function (t) {
          for (const e in ct)
            if (t.indexOf(e) > -1) {
              const i = new ct[e]();
              (t = t.replace("{{" + e + "}}", i.srcHeadFrag)),
                this._libs.push(i),
                i.initUniforms && i.initUniforms(this);
            }
          return t;
        }),
        (yt.prototype.createStructUniforms = function () {
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
        (yt.prototype.compile = function () {
          const t = performance.now();
          this._cgl.printError("shader.compile"),
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
            (this._cgl.printError("createStructUniforms"),
            this._cgl.profileData.addHeavyEvent(
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
          let _ = "",
            p = "";
          this._modules.sort(function (t, e) {
            return t.group - e.group;
          }),
            this._modules.sort(function (t, e) {
              return t.priority || 0 - e.priority || 0;
            });
          let g = !1;
          for (let t = 0; t < this._moduleNames.length; t++) {
            let e = "",
              i = "";
            for (let s = 0; s < this._modules.length; s++)
              if (this._modules[s].name == this._moduleNames[t]) {
                if (
                  ((_ +=
                    "\n//---- MOD: group:" +
                    this._modules[s].group +
                    ": idx:" +
                    s +
                    " - prfx:" +
                    this._modules[s].prefix +
                    " - " +
                    this._modules[s].title +
                    " ------\n"),
                  (p +=
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
                  !g)
                ) {
                  g = !0;
                  for (let t = 0; t < this._attributes.length; t++)
                    this._attributes[t].name &&
                      this._attributes[t].type &&
                      ((_ +=
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
                        ((_ +=
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
                      (p +=
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
                (_ += this._modules[s].srcHeadVert || ""),
                  (p += this._modules[s].srcHeadFrag || ""),
                  (e += this._modules[s].srcBodyVert || ""),
                  (i += this._modules[s].srcBodyFrag || ""),
                  (_ += "\n//---- end mod ------\n"),
                  (p += "\n//---- end mod ------\n"),
                  (e += "\n//---- end mod ------\n"),
                  (i += "\n//---- end mod ------\n"),
                  (e = e.replace(/{{mod}}/g, this._modules[s].prefix)),
                  (i = i.replace(/{{mod}}/g, this._modules[s].prefix)),
                  (_ = _.replace(/{{mod}}/g, this._modules[s].prefix)),
                  (p = p.replace(/{{mod}}/g, this._modules[s].prefix)),
                  (e = e.replace(/MOD_/g, this._modules[s].prefix)),
                  (i = i.replace(/MOD_/g, this._modules[s].prefix)),
                  (_ = _.replace(/MOD_/g, this._modules[s].prefix)),
                  (p = p.replace(/MOD_/g, this._modules[s].prefix));
              }
            (r = r.replace("{{" + this._moduleNames[t] + "}}", e)),
              (n = n.replace("{{" + this._moduleNames[t] + "}}", i));
          }
          if (
            ((r = r.replace("{{MODULES_HEAD}}", _)),
            (n = n.replace("{{MODULES_HEAD}}", p)),
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
            (ot.lastMesh = null),
            (ot.lastShader = null),
            (this._needsRecompile = !1),
            (this.lastCompile = _t()),
            (this._cgl.profileData.shaderCompileTime += performance.now() - t);
        }),
        (yt.hasChanged = function () {
          return this._needsRecompile;
        }),
        (yt.prototype.bind = function () {
          if (
            this._isValid &&
            ((ot.lastShader = this),
            (this._program && !this._needsRecompile) || this.compile(),
            this._isValid)
          ) {
            if (!this._projMatrixUniform) {
              (this._attrVertexPos = this._cgl.glGetAttribLocation(
                this._program,
                nt.SHADER.SHADERVAR_VERTEX_POSITION
              )),
                (this._projMatrixUniform = this._cgl.gl.getUniformLocation(
                  this._program,
                  nt.SHADER.SHADERVAR_UNI_PROJMAT
                )),
                (this._mvMatrixUniform = this._cgl.gl.getUniformLocation(
                  this._program,
                  "mvMatrix"
                )),
                (this._vMatrixUniform = this._cgl.gl.getUniformLocation(
                  this._program,
                  nt.SHADER.SHADERVAR_UNI_VIEWMAT
                )),
                (this._mMatrixUniform = this._cgl.gl.getUniformLocation(
                  this._program,
                  nt.SHADER.SHADERVAR_UNI_MODELMAT
                )),
                (this._camPosUniform = this._cgl.gl.getUniformLocation(
                  this._program,
                  nt.SHADER.SHADERVAR_UNI_VIEWPOS
                )),
                (this._normalMatrixUniform = this._cgl.gl.getUniformLocation(
                  this._program,
                  nt.SHADER.SHADERVAR_UNI_NORMALMAT
                )),
                (this._inverseViewMatrixUniform = this._cgl.gl.getUniformLocation(
                  this._program,
                  nt.SHADER.SHADERVAR_UNI_INVVIEWMAT
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
        (yt.prototype.toggleDefine = function (t, e) {
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
        (yt.prototype.define = function (t, e) {
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
        (yt.prototype.getDefines = function () {
          return this._defines;
        }),
        (yt.prototype.getDefine = function (t) {
          for (let e = 0; e < this._defines.length; e++)
            if (this._defines[e][0] == t) return this._defines[e][1];
          return null;
        }),
        (yt.prototype.hasDefine = function (t) {
          for (let e = 0; e < this._defines.length; e++)
            if (this._defines[e][0] == t) return !0;
        }),
        (yt.prototype.removeDefine = function (t) {
          for (let e = 0; e < this._defines.length; e++)
            if (this._defines[e][0] == t)
              return (
                this._defines.splice(e, 1),
                (this._needsRecompile = !0),
                void this.setWhyCompile("define removed:" + t)
              );
        }),
        (yt.prototype.removeModule = function (t) {
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
        (yt.prototype.getNumModules = function () {
          return this._modules.length;
        }),
        (yt.prototype.getCurrentModules = function () {
          return this._modules;
        }),
        (yt.prototype.addModule = function (t, e) {
          return (
            t.id || (t.id = A()),
            t.numId || (t.numId = this._moduleNumId),
            t.num || (t.num = this._modules.length),
            e && !e.group && (e.group = x()),
            t.group || (t.group = e ? e.group : x()),
            (t.prefix = "mod" + t.group + "_"),
            this._modules.push(t),
            (this._needsRecompile = !0),
            this.setWhyCompile("add module " + t.title),
            this._moduleNumId++,
            t
          );
        }),
        (yt.prototype.hasModule = function (t) {
          for (let e = 0; e < this._modules.length; e++)
            if (this._modules[e].id == t) return !0;
          return !1;
        }),
        (yt.prototype.setModules = function (t) {
          this._moduleNames = t;
        }),
        (yt.prototype.dispose = function () {
          this._cgl.gl.deleteProgram(this._program);
        }),
        (yt.prototype.needsRecompile = function () {
          return this._needsRecompile;
        }),
        (yt.prototype.setDrawBuffers = function (t) {
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
        (yt.prototype.getUniforms = function () {
          return this._uniforms;
        }),
        (yt.prototype.getUniform = function (t) {
          for (let e = 0; e < this._uniforms.length; e++)
            if (this._uniforms[e].getName() == t) return this._uniforms[e];
          return null;
        }),
        (yt.prototype.removeUniform = function (t) {
          for (let e = 0; e < this._uniforms.length; e++)
            this._uniforms[e].getName() == t && this._uniforms.splice(e, 1);
          (this._needsRecompile = !0), this.setWhyCompile("remove uniform " + t);
        }),
        (yt.prototype._addUniform = function (t) {
          this._uniforms.push(t),
            this.setWhyCompile("add uniform " + name),
            (this._needsRecompile = !0);
        }),
        (yt.prototype.addUniformFrag = function (t, e, i, s, r, n) {
          const o = new CGL.Uniform(this, t, e, i, s, r, n);
          return (o.shaderType = "frag"), o;
        }),
        (yt.prototype.addUniformVert = function (t, e, i, s, r, n) {
          const o = new CGL.Uniform(this, t, e, i, s, r, n);
          return (o.shaderType = "vert"), o;
        }),
        (yt.prototype.addUniformBoth = function (t, e, i, s, r, n) {
          const o = new CGL.Uniform(this, t, e, i, s, r, n);
          return (o.shaderType = "both"), o;
        }),
        (yt.prototype.addUniformStructFrag = function (t, e, i) {
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
        (yt.prototype.addUniformStructVert = function (t, e, i) {
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
        (yt.prototype.addUniformStructBoth = function (t, e, i) {
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
        (yt.prototype.hasUniform = function (t) {
          for (let e = 0; e < this._uniforms.length; e++)
            if (this._uniforms[e].getName() == t) return !0;
          return !1;
        }),
        (yt.prototype._createProgram = function (t, e) {
          this._cgl.printError("_createprogram");
          const i = this._cgl.gl.createProgram();
          return (
            this._cgl.printError("gl.createprogram"),
            (this.vshader = yt.createShader(
              this._cgl,
              t,
              this._cgl.gl.VERTEX_SHADER,
              this
            )),
            this._cgl.printError("createshader"),
            (this.fshader = yt.createShader(
              this._cgl,
              e,
              this._cgl.gl.FRAGMENT_SHADER,
              this
            )),
            this._cgl.printError("createshader"),
            this._cgl.gl.attachShader(i, this.vshader),
            this._cgl.printError("attachshader "),
            this._cgl.gl.attachShader(i, this.fshader),
            this._cgl.printError("attachshader "),
            this._linkProgram(i, t, e),
            this._cgl.printError("shader linkprogram err"),
            i
          );
        }),
        (yt.prototype.hasErrors = function () {
          return this._hasErrors;
        }),
        (yt.prototype._linkProgram = function (t, e, i) {
          this._cgl.printError("_linkprogram"),
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
                console.log("srcFrag", i),
                console.log("srcVert", e),
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
                  yt.getDefaultVertexShader(),
                  yt.getErrorFragmentShader()
                ),
                this._cgl.printError("shader link err")));
        }),
        (yt.prototype.getProgram = function () {
          return this._program;
        }),
        (yt.prototype.setFeedbackNames = function (t) {
          this.setWhyCompile("setFeedbackNames"),
            (this._needsRecompile = !0),
            (this._feedBackNames = t);
        }),
        (yt.prototype.getDefaultVertexShader = yt.getDefaultVertexShader =
          function () {
            return (
              "".endl() +
              "{{MODULES_HEAD}}".endl() +
              "IN vec3 vPosition;".endl() +
              "IN vec2 attrTexCoord;".endl() +
              "IN vec3 attrVertNormal;".endl() +
              "IN vec3 attrTangent,attrBiTangent;".endl() +
              "IN float attrVertIndex;".endl() +
              "OUT vec2 texCoord;".endl() +
              "OUT vec3 norm;".endl() +
              "UNI mat4 projMatrix;".endl() +
              "UNI mat4 viewMatrix;".endl() +
              "UNI mat4 modelMatrix;".endl() +
              "void main()".endl() +
              "{".endl() +
              "    texCoord=attrTexCoord;".endl() +
              "    norm=attrVertNormal;".endl() +
              "    vec4 pos=vec4(vPosition,  1.0);".endl() +
              "    vec3 tangent=attrTangent;".endl() +
              "    vec3 bitangent=attrBiTangent;".endl() +
              "    mat4 mMatrix=modelMatrix;".endl() +
              "    {{MODULE_VERTEX_POSITION}}".endl() +
              "    gl_Position = projMatrix * (viewMatrix*mMatrix) * pos;".endl() +
              "}"
            );
          }),
        (yt.prototype.getDefaultFragmentShader = yt.getDefaultFragmentShader =
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
        (yt.prototype.addAttribute = function (t) {
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
        (yt.prototype.bindTextures = yt.prototype._bindTextures =
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
        (yt.prototype.setUniformTexture = function (t, e) {
          for (let i = 0; i < this._textureStackTex.length; i++)
            if (this._textureStackUni[i] == t) {
              const t = this._textureStackTex[i];
              return (this._textureStackTex[i] = e), t;
            }
          return null;
        }),
        (yt.prototype.pushTexture = function (t, e, i) {
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
        (yt.prototype.popTexture = function () {
          this._textureStackUni.pop(),
            this._textureStackTex.pop(),
            this._textureStackType.pop();
        }),
        (yt.prototype.popTextures = function () {
          this._textureStackTex.length =
            this._textureStackTexCgl.length =
            this._textureStackType.length =
            this._textureStackUni.length =
              0;
        }),
        (yt.getErrorFragmentShader = function () {
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
        (yt.createShader = function (t, e, i, s) {
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
                  (n = i) && At.test(n)
                    ? n.replace(bt, function (t) {
                        return Tt[t];
                      })
                    : n || ""),
                s && (a += "</span>");
            }
            console.warn(o),
              (o = o.replace(/\n/g, "<br/>")),
              (a = o + "<br/>" + a + "<br/><br/>"),
              t.patch.emitEvent("criticalError", "Shader error " + this._name, a),
              t.patch.isEditorMode() &&
                console.log("Shader error " + this._name, a),
              (a += "</div>"),
              (this._name = "errorshader"),
              s.setSource(
                yt.getDefaultVertexShader(),
                yt.getErrorFragmentShader()
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
      class vt {
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
          const s = {
            event: t,
            name: e,
            info: i,
            date: performance.now(),
          };
          this.heavyEvents.push(s), this._cgl.emitEvent("heavyEvent", s);
        }
      }
      const It = function (t) {
        p.apply(this),
          (this.profileData = new vt(this)),
          (this._log = new _("cgl_context"));
        const e = [0, 0, 0, 0];
        (this.glVersion = 0),
          (this.glUseHalfFloatTex = !1),
          (this.clearCanvasTransparent = !0),
          (this.clearCanvasDepth = !0),
          (this.patch = t),
          (this.debugOneFrame = !1),
          (this.maxTextureUnits = 0),
          (this.maxVaryingVectors = 0),
          (this.currentProgram = null),
          (this._hadStackError = !1),
          (this.glSlowRenderer = !1),
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
        const i = new yt(this, "simpleshader");
        i.setModules([
          "MODULE_VERTEX_POSITION",
          "MODULE_COLOR",
          "MODULE_BEGIN_FRAG",
        ]),
          i.setSource(yt.getDefaultVertexShader(), yt.getDefaultFragmentShader());
        let s = i;
        this.aborted = !1;
        const r = [];
        (this.addEventListener = function (t, e) {
          "resize" == t && r.push(e);
        }),
          (this.removeEventListener = function (t, e) {
            if ("resize" == t)
              for (const t in r) if (r[t] == e) return void r.splice(t, 1);
          }),
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
                    (navigator.userAgent.match(/iPad/i) ||
                      navigator.userAgent.match(/iPhone/i)) &&
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
            if (e) {
              "Google SwiftShader" ===
                this.gl.getParameter(e.UNMASKED_RENDERER_WEBGL) &&
                (this.glSlowRenderer = !0);
            }
            this.gl.getExtension("OES_standard_derivatives");
            const i = this.gl.getExtension("ANGLE_instanced_arrays") || this.gl;
            this.canvas.addEventListener("webglcontextlost", (t) => {
              this._log.error("canvas lost...", t), (this.aborted = !0);
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
        const h = vec3.create();
        vec3.set(h, 0, 0, 2);
        const a = vec3.create();
        vec3.set(a, 0, 0, 0),
          (this.renderStart = function (t, e, s) {
            e || (e = a),
              s || (s = h),
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
              t.pushBlendMode(nt.BLEND_MODES.BLEND_NORMAL, !1);
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
                this._loggedGlError ||
                  (this.patch.printTriggerStack(),
                  this._log.stack("glerror"),
                  (this._loggedGlError = !0));
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
      (It.prototype.addNextFrameOnceCallback = function (t) {
        t && this._onetimeCallbacks.push(t);
      }),
        (It.prototype.pushViewMatrix = function () {
          this.vMatrix = this._vMatrixStack.push(this.vMatrix);
        }),
        (It.prototype.popViewMatrix = function () {
          this.vMatrix = this._vMatrixStack.pop();
        }),
        (It.prototype.getViewMatrixStateCount = function () {
          return this._vMatrixStack.stateCounter;
        }),
        (It.prototype.pushPMatrix = function () {
          this.pMatrix = this._pMatrixStack.push(this.pMatrix);
        }),
        (It.prototype.popPMatrix = function () {
          return (this.pMatrix = this._pMatrixStack.pop()), this.pMatrix;
        }),
        (It.prototype.getProjectionMatrixStateCount = function () {
          return this._pMatrixStack.stateCounter;
        }),
        (It.prototype.pushMvMatrix = It.prototype.pushModelMatrix =
          function () {
            this.mMatrix = this._mMatrixStack.push(this.mMatrix);
          }),
        (It.prototype.popMvMatrix =
          It.prototype.popmMatrix =
          It.prototype.popModelMatrix =
            function () {
              return (this.mMatrix = this._mMatrixStack.pop()), this.mMatrix;
            }),
        (It.prototype.modelMatrix = function () {
          return this.mMatrix;
        }),
        (It.prototype._stackDepthTest = []),
        (It.prototype.pushDepthTest = function (t) {
          this._stackDepthTest.push(t),
            t
              ? this.gl.enable(this.gl.DEPTH_TEST)
              : this.gl.disable(this.gl.DEPTH_TEST);
        }),
        (It.prototype.stateDepthTest = function () {
          return this._stackDepthTest[this._stackDepthTest.length - 1];
        }),
        (It.prototype.popDepthTest = function () {
          this._stackDepthTest.pop(),
            this._stackDepthTest[this._stackDepthTest.length - 1]
              ? this.gl.enable(this.gl.DEPTH_TEST)
              : this.gl.disable(this.gl.DEPTH_TEST);
        }),
        (It.prototype._stackDepthWrite = []),
        (It.prototype.pushDepthWrite = function (t) {
          this._stackDepthWrite.push(t), this.gl.depthMask(t);
        }),
        (It.prototype.stateDepthWrite = function () {
          return this._stackDepthWrite[this._stackDepthWrite.length - 1];
        }),
        (It.prototype.popDepthWrite = function () {
          this._stackDepthWrite.pop(),
            this.gl.depthMask(
              this._stackDepthWrite[this._stackDepthWrite.length - 1]
            );
        }),
        (It.prototype._stackCullFace = []),
        (It.prototype.pushCullFace = function (t) {
          this._stackCullFace.push(t),
            t
              ? this.gl.enable(this.gl.CULL_FACE)
              : this.gl.disable(this.gl.CULL_FACE);
        }),
        (It.prototype.stateCullFace = function () {
          return this._stackCullFace[this._stackCullFace.length - 1];
        }),
        (It.prototype.popCullFace = function () {
          this._stackCullFace.pop(),
            this._stackCullFace[this._stackCullFace.length - 1]
              ? this.gl.enable(this.gl.CULL_FACE)
              : this.gl.disable(this.gl.CULL_FACE);
        }),
        (It.prototype._stackCullFaceFacing = []),
        (It.prototype.pushCullFaceFacing = function (t) {
          this._stackCullFaceFacing.push(t),
            this.gl.cullFace(
              this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1]
            );
        }),
        (It.prototype.stateCullFaceFacing = function () {
          return this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1];
        }),
        (It.prototype.popCullFaceFacing = function () {
          this._stackCullFaceFacing.pop(),
            this._stackCullFaceFacing.length > 0 &&
              this.gl.cullFace(
                this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1]
              );
        }),
        (It.prototype._stackDepthFunc = []),
        (It.prototype.pushDepthFunc = function (t) {
          this._stackDepthFunc.push(t), this.gl.depthFunc(t);
        }),
        (It.prototype.stateDepthFunc = function () {
          return (
            this._stackDepthFunc.length > 0 &&
            this._stackDepthFunc[this._stackDepthFunc.length - 1]
          );
        }),
        (It.prototype.popDepthFunc = function () {
          this._stackDepthFunc.pop(),
            this._stackDepthFunc.length > 0 &&
              this.gl.depthFunc(
                this._stackDepthFunc[this._stackDepthFunc.length - 1]
              );
        }),
        (It.prototype._stackBlend = []),
        (It.prototype.pushBlend = function (t) {
          this._stackBlend.push(t),
            t ? this.gl.enable(this.gl.BLEND) : this.gl.disable(this.gl.BLEND);
        }),
        (It.prototype.popBlend = function () {
          this._stackBlend.pop(),
            this._stackBlend[this._stackBlend.length - 1]
              ? this.gl.enable(this.gl.BLEND)
              : this.gl.disable(this.gl.BLEND);
        }),
        (It.prototype.stateBlend = function () {
          return this._stackBlend[this._stackBlend.length - 1];
        });
      (It.prototype._stackBlendMode = []),
        (It.prototype._stackBlendModePremul = []),
        (It.prototype.pushBlendMode = function (t, e) {
          this._stackBlendMode.push(t), this._stackBlendModePremul.push(e);
          const i = this._stackBlendMode.length - 1;
          this.pushBlend(this._stackBlendMode[i] !== nt.BLEND_MODES.BLEND_NONE),
            this._setBlendMode(
              this._stackBlendMode[i],
              this._stackBlendModePremul[i]
            );
        }),
        (It.prototype.popBlendMode = function () {
          this._stackBlendMode.pop(), this._stackBlendModePremul.pop();
          const t = this._stackBlendMode.length - 1;
          this.popBlend(this._stackBlendMode[t] !== nt.BLEND_MODES.BLEND_NONE),
            t >= 0 &&
              this._setBlendMode(
                this._stackBlendMode[t],
                this._stackBlendModePremul[t]
              );
        }),
        (It.prototype.glGetAttribLocation = function (t, e) {
          return this.gl.getAttribLocation(t, e);
        }),
        (It.prototype.shouldDrawHelpers = function (t) {
          return (
            !this.frameStore.shadowPass &&
            !!t.patch.isEditorMode() &&
            (CABLES.UI.renderHelper ||
              (CABLES.UI.renderHelperCurrent && t.isCurrentUiOp()))
          );
        }),
        (It.prototype._setBlendMode = function (t, e) {
          const i = this.gl;
          t == nt.BLEND_MODES.BLEND_NONE ||
            (t == nt.BLEND_MODES.BLEND_ADD
              ? e
                ? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD),
                  i.blendFuncSeparate(i.ONE, i.ONE, i.ONE, i.ONE))
                : (i.blendEquation(i.FUNC_ADD), i.blendFunc(i.SRC_ALPHA, i.ONE))
              : t == nt.BLEND_MODES.BLEND_SUB
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
              : t == nt.BLEND_MODES.BLEND_MUL
              ? e
                ? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD),
                  i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA))
                : (i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ZERO, i.SRC_COLOR))
              : t == nt.BLEND_MODES.BLEND_NORMAL
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
        (It.prototype.setCursor = function (t) {
          this._cursor = t;
        });
      const Ot = Object.assign(
        {
          Framebuffer: function (t, e, i, s) {
            const r = t;
            this._log = new _("Framebuffer");
            const n =
              r.gl.getExtension("WEBGL_depth_texture") ||
              r.gl.getExtension("WEBKIT_WEBGL_depth_texture") ||
              r.gl.getExtension("MOZ_WEBGL_depth_texture") ||
              r.gl.DEPTH_TEXTURE;
            n || r.exitError("NO_DEPTH_TEXTURE", "no depth texture support");
            let o = e || 512,
              h = i || 512;
            (s = s || {
              isFloatingPointTexture: !1,
            }).hasOwnProperty("clear") || (s.clear = !0),
              s.hasOwnProperty("filter") || (s.filter = $.FILTER_LINEAR);
            const a = new $(r, {
              isFloatingPointTexture: s.isFloatingPointTexture,
              filter: s.filter,
              wrap: s.wrap || $.CLAMP_TO_EDGE,
            });
            let l = null;
            n &&
              (l = new $(r, {
                isDepthTexture: !0,
              })),
              (this._options = s);
            const c = r.gl.createFramebuffer(),
              u = r.gl.createRenderbuffer();
            (this.getWidth = function () {
              return o;
            }),
              (this.getHeight = function () {
                return h;
              }),
              (this.getGlFrameBuffer = function () {
                return c;
              }),
              (this.getDepthRenderBuffer = function () {
                return u;
              }),
              (this.getTextureColor = function () {
                return a;
              }),
              (this.getTextureDepth = function () {
                return l;
              }),
              (this.setFilter = function (t) {
                (a.filter = t), a.setSize(o, h);
              }),
              (this.setSize = function (t, e) {
                if (
                  (t < 2 && (t = 2),
                  e < 2 && (e = 2),
                  (o = Math.ceil(t)),
                  (h = Math.ceil(e)),
                  r.profileData.profileFrameBuffercreate++,
                  r.gl.bindFramebuffer(r.gl.FRAMEBUFFER, c),
                  r.gl.bindRenderbuffer(r.gl.RENDERBUFFER, u),
                  a.setSize(o, h),
                  l && l.setSize(o, h),
                  n &&
                    r.gl.renderbufferStorage(
                      r.gl.RENDERBUFFER,
                      r.gl.DEPTH_COMPONENT16,
                      o,
                      h
                    ),
                  r.gl.framebufferTexture2D(
                    r.gl.FRAMEBUFFER,
                    r.gl.COLOR_ATTACHMENT0,
                    r.gl.TEXTURE_2D,
                    a.tex,
                    0
                  ),
                  n &&
                    (r.gl.framebufferRenderbuffer(
                      r.gl.FRAMEBUFFER,
                      r.gl.DEPTH_ATTACHMENT,
                      r.gl.RENDERBUFFER,
                      u
                    ),
                    r.gl.framebufferTexture2D(
                      r.gl.FRAMEBUFFER,
                      r.gl.DEPTH_ATTACHMENT,
                      r.gl.TEXTURE_2D,
                      l.tex,
                      0
                    )),
                  !r.gl.isFramebuffer(c))
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
                        h,
                        a.tex,
                        u
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
                  r.gl.bindFramebuffer(r.gl.FRAMEBUFFER, c),
                  r.pushGlFrameBuffer(c),
                  r.pushFrameBuffer(this),
                  r.pushPMatrix(),
                  r.gl.viewport(0, 0, o, h),
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
                a.delete(),
                  l && l.delete(),
                  r.gl.deleteRenderbuffer(u),
                  r.gl.deleteFramebuffer(c);
              }),
              this.setSize(o, h);
          },
          Framebuffer2: tt,
          Geometry: it,
          BoundingBox: et,
          Marker: function (t) {
            const e = new it("marker");
            e.setPointVertices([
              1e-5, 0, 0, 1, 0, 0, 0, 1e-5, 0, 0, 1, 0, 0, 0, 1e-5, 0, 0, 1,
            ]);
            const i = new ht(t, e, t.gl.LINES);
            i.setGeom(e);
            const s = new yt(t, "markermaterial"),
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
                  (r = (360 / Math.round(24)) * s * gt),
                    i.push(0.5 * Math.cos(r)),
                    i.push(0),
                    i.push(0.5 * Math.sin(r));
                for (s = 0; s <= Math.round(24); s++)
                  (r = (360 / Math.round(24)) * s * gt),
                    i.push(0.5 * Math.cos(r)),
                    i.push(0.5 * Math.sin(r)),
                    i.push(0);
                for (s = 0; s <= Math.round(24); s++)
                  (r = (360 / Math.round(24)) * s * gt),
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
          Mesh: ht,
          MESH: ot,
          ShaderLibMods: ct,
          Shader: yt,
          Uniform: st,
          MESHES: at,
          Context: It,
          Texture: $,
          TextureEffect: lt,
          isWindows: dt,
          getWheelSpeed: mt,
          getWheelDelta: Et,
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
        nt.BLEND_MODES,
        nt.SHADER,
        nt.MATH,
        nt.BLEND_MODES
      );
      window.CGL = Ot;
      const Rt = function (t) {
        (this._log = new _("LoadingStatus")),
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
      (Rt.prototype.setOnFinishedLoading = function (t) {
        this._cbFinished.push(t);
      }),
        (Rt.prototype.getNumAssets = function () {
          return this._countFinished;
        }),
        (Rt.prototype.getProgress = function () {
          return this._percent;
        }),
        (Rt.prototype.checkStatus = function () {
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
                  e(this._patch);
                }, 200);
              }
            this._wasFinishedPrinted ||
              ((this._wasFinishedPrinted = !0), this.print());
          }
        }),
        (Rt.prototype.getListJobs = function () {
          let t = [];
          for (const e in this._loadingAssets)
            this._loadingAssets[e].finished ||
              t.push(this._loadingAssets[e].name);
          return t;
        }),
        (Rt.prototype.print = function () {
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
        (Rt.prototype.finished = function (t) {
          this._loadingAssets[t] &&
            ((this._loadingAssets[t].finished = !0),
            (this._loadingAssets[t].timeEnd = Date.now())),
            this.checkStatus();
        }),
        (Rt.prototype._startAssetTasks = function () {
          for (let t = 0; t < this._assetTasks.length; t++) this._assetTasks[t]();
          this._assetTasks.length = 0;
        }),
        (Rt.prototype.addAssetLoadingTask = function (t) {
          this._patch.isEditorMode() && !CABLES.UI.loaded
            ? (this._assetTasks.push(t),
              this._loadingAssetTaskCb ||
                window.gui.addEventListener(
                  "uiloaded",
                  this._startAssetTasks.bind(this)
                ),
              (this._loadingAssetTaskCb = !0))
            : t();
        }),
        (Rt.prototype.existByName = function (t) {
          for (let e in this._loadingAssets)
            if (
              this._loadingAssets[e].name == t &&
              !this._loadingAssets[e].finished
            )
              return !0;
        }),
        (Rt.prototype.start = function (t, e) {
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
            i
          );
        });
      const Pt = function () {
        (this._loops = []), (this._indizes = []), (this._index = 0);
      };
      (Pt.prototype.pushLoop = function (t) {
        this._loops.push(Math.abs(Math.floor(t))),
          this._indizes.push(this._index);
      }),
        (Pt.prototype.popLoop = function () {
          this._loops.pop(),
            (this._index = this._indizes.pop()),
            0 === this._loops.length && (this._index = 0);
        }),
        (Pt.prototype.numLoops = function () {
          return this._loops.length;
        }),
        (Pt.prototype.numCycles = function () {
          if (0 === this._loops.length) return 0;
          let t = this._loops[0];
          for (let e = 1; e < this._loops.length; e++) t *= this._loops[e];
          return t;
        }),
        (Pt.prototype.inLoop = function () {
          return this._loops.length > 0;
        }),
        (Pt.prototype.increment = function () {
          this._index++;
        }),
        (Pt.prototype.index = function () {
          return this._index;
        });
      const Nt = function (t) {
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
                  ? (e[n.id] ||
                      (e[n.id] = {
                        numTriggers: 0,
                        timeUsed: 0,
                      }),
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
        },
        St = function (t) {
          (this._patch = t), (this.result = []);
        };
      (St.MIDI = 0),
        (St.POINTERLOCK = 1),
        (St.WEBAUDIO = 2),
        (St.WEBGL2 = 3),
        ((St.infos = [])[St.POINTERLOCK] = {
          title: "pointerLock",
          caniuse: "https://caniuse.com/#search=pointerlock",
        }),
        (St.infos[St.MIDI] = {
          title: "midi API",
          caniuse: "https://caniuse.com/#search=midi",
        }),
        (St.infos[St.WEBAUDIO] = {
          title: "web audio",
          caniuse: "https://caniuse.com/#search=webaudio",
        }),
        (St.infos[St.WEBGL2] = {
          title: "WebGL 2",
        }),
        (St.prototype.checkRequirement = function (t, e) {
          switch (((this.result = []), t)) {
            case St.WEBGL2:
              return e.patch.cgl.glVersion >= 2;
            case St.POINTERLOCK:
              return "exitPointerLock" in document;
            case St.MIDI:
              return "MIDIAccess" in window;
            case St.WEBAUDIO:
              let t = !1;
              return (
                window.audioContext && (t = !0),
                t ||
                  (!("webkitAudioContext" in window) &&
                    !("AudioContext" in window)) ||
                  (t = !0),
                t
              );
          }
        }),
        (St.prototype.checkOp = function (t) {
          if (t && t.requirements)
            for (let e = 0; e < t.requirements.length; e++) {
              const i = t.requirements[e];
              if (!this.result[i]) {
                const e = this.checkRequirement(i, t);
                if (!e) {
                  t.patch.cgl &&
                    t.patch.cgl.canvas &&
                    t.patch.cgl.canvas.remove();
                  let e = St.infos[i].title;
                  throw (
                    (St.infos[i].caniuse &&
                      (e =
                        '<a href="' +
                        St.infos[i].caniuse +
                        '" target="_blank">' +
                        St.infos[i].title +
                        " (" +
                        t.objName +
                        ")</a>"),
                    new Error(
                      "this browser does not meet requirement: " +
                        St.infos[i].title +
                        " (" +
                        t.objName +
                        ")"
                    ))
                  );
                }
                this.result[i] = {
                  success: e,
                  info: St.infos[i],
                };
              }
            }
        });
      const Ft = function (t) {
        p.apply(this),
          (this._log = new _("core_patch")),
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
          (this.loading = new Rt(this)),
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
          (this.instancing = new Pt()),
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
          (this.cgl = new It(this)),
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
                M(this.config.patchFile, (t, e) => {
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
      (Ft.prototype.isPlaying = function () {
        return !this._paused;
      }),
        (Ft.prototype.isRenderingOneFrame = function () {
          return this._renderOneFrame;
        }),
        (Ft.prototype.renderOneFrame = function () {
          (this._paused = !0),
            (this._renderOneFrame = !0),
            this.exec(),
            (this._renderOneFrame = !1);
        }),
        (Ft.prototype.getFPS = function () {
          return this._perf.fps;
        }),
        (Ft.prototype.isEditorMode = function () {
          return !0 === this.config.editorMode;
        }),
        (Ft.prototype.pause = function () {
          cancelAnimationFrame(this._animReq),
            this.emitEvent("pause"),
            (this._animReq = null),
            (this._paused = !0),
            this.freeTimer.pause();
        }),
        (Ft.prototype.resume = function () {
          this._paused &&
            (cancelAnimationFrame(this._animReq),
            (this._paused = !1),
            this.freeTimer.play(),
            this.emitEvent("resume"),
            this.exec());
        }),
        (Ft.prototype.setVolume = function (t) {
          this.config.masterVolume = t;
          for (let e = 0; e < this._volumeListeners.length; e++)
            this._volumeListeners[e].onMasterVolumeChanged(t);
        }),
        (Ft.prototype.getAssetPath = function () {
          if (this.isEditorMode()) return "/assets/" + gui.project()._id + "/";
          if (document.location.href.indexOf("cables.gl") > 0) {
            const t = document.location.href.split("/");
            return "/assets/" + t[t.length - 1] + "/";
          }
          return "assets/";
        }),
        (Ft.prototype.getFilePath = function (t) {
          return (
            this._isLocal &&
              !this.config.allowLocalFileAccess &&
              this.exitError(
                "localAccess",
                "Browser security forbids loading files directly without a webserver. Upload files to a server to work. use allowLocalFileAccess:true to ignore this."
              ),
            t
              ? 0 === (t = String(t)).indexOf("https:") ||
                0 === t.indexOf("http:")
                ? t
                : ((t = t.replace("//", "/")),
                  this.config.prefixAssetPath +
                    t +
                    (this.config.suffixAssetPath || ""))
              : t
          );
        }),
        (Ft.prototype.clear = function () {
          for (
            this.cgl.TextureEffectMesh = null,
              this.animFrameOps.length = 0,
              this.timer = new pt();
            this.ops.length > 0;
  
          )
            this.deleteOp(this.ops[0].id);
        }),
        (Ft.getOpClass = function (t) {
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
        (Ft.prototype.createOp = function (t, e) {
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
              if (!Ft.getOpClass(r))
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
              this._log.error(t),
              this.emitEvent("exceptionOp", t, r),
              !this.isEditorMode())
            )
              throw (
                (this._log.error("[instancing error] " + r, t),
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
        (Ft.prototype.addOp = function (t, e, i, s) {
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
        (Ft.prototype.addOnAnimFrame = function (t) {
          for (let e = 0; e < this.animFrameOps.length; e++)
            if (this.animFrameOps[e] == t) return;
          this.animFrameOps.push(t);
        }),
        (Ft.prototype.removeOnAnimFrame = function (t) {
          for (let e = 0; e < this.animFrameOps.length; e++)
            if (this.animFrameOps[e] == t)
              return void this.animFrameOps.splice(e, 1);
        }),
        (Ft.prototype.addOnAnimFrameCallback = function (t) {
          this.animFrameCallbacks.push(t);
        }),
        (Ft.prototype.removeOnAnimCallback = function (t) {
          for (let e = 0; e < this.animFrameCallbacks.length; e++)
            if (this.animFrameCallbacks[e] == t)
              return void this.animFrameCallbacks.splice(e, 1);
        }),
        (Ft.prototype.deleteOp = function (t, e, i) {
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
        (Ft.prototype.getFrameNum = function () {
          return this._frameNum;
        }),
        (Ft.prototype.renderFrame = function (t) {
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
        (Ft.prototype.exec = function (t) {
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
        (Ft.prototype.link = function (t, e, i, s, r, n) {
          if (!t) return void this._log.warn("link: op1 is null ");
          if (!i) return void this._log.warn("link: op2 is null");
          const o = t.getPort(e, r),
            h = i.getPort(s, r);
          if (o)
            if (h) {
              if (!o.shouldLink(o, h) || !h.shouldLink(o, h)) return !1;
              if (J.canLink(o, h)) {
                const t = new J(this);
                return t.link(o, h), this.emitEvent("onLink", o, h, t, n), t;
              }
            } else
              this._log.warn(
                "port not found! " + s + " of " + i.name + "(" + i.objName + ")"
              );
          else this._log.warn("port not found! " + e + "(" + t.objName + ")");
        }),
        (Ft.prototype.serialize = function (t) {
          const e = {
            ops: [],
          };
          e.settings = this.settings;
          for (const t in this.ops) e.ops.push(this.ops[t].getSerialized());
          return t ? e : JSON.stringify(e);
        }),
        (Ft.prototype.getOpById = function (t) {
          return this._opIdCache[t];
        }),
        (Ft.prototype.getOpsByName = function (t) {
          const e = [];
          for (const i in this.ops) this.ops[i].name == t && e.push(this.ops[i]);
          return e;
        }),
        (Ft.prototype.getOpsByObjName = function (t) {
          const e = [];
          for (const i in this.ops)
            this.ops[i].objName == t && e.push(this.ops[i]);
          return e;
        }),
        (Ft.prototype.loadLib = function (t) {
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
        (Ft.prototype.reloadOp = function (t, e) {
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
            let a, l;
            for (a in (s.push(h), n.portsIn))
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
        (Ft.prototype.getSubPatchOps = function (t) {
          const e = [];
          for (const i in this.ops)
            this.ops[i].uiAttribs &&
              this.ops[i].uiAttribs.subPatch == t &&
              e.push(this.ops[i]);
          return e;
        }),
        (Ft.prototype.getSubPatchOp = function (t, e) {
          for (const i in this.ops)
            if (
              this.ops[i].uiAttribs &&
              this.ops[i].uiAttribs.subPatch == t &&
              this.ops[i].objName == e
            )
              return this.ops[i];
          return !1;
        }),
        (Ft.prototype.deSerialize = function (t, e) {
          if (this.aborted) return;
          const i = this.loading.start("core", "deserialize");
          (this.namespace = t.namespace || ""),
            (this.name = t.name || ""),
            "string" == typeof t && (t = JSON.parse(t));
          const s = this;
          function r(t, e, i, r) {
            s.link(s.getOpById(t), i, s.getOpById(e), r, !1, !0);
          }
          this.settings = t.settings;
          const n = new St(this);
          for (const i in t.ops) {
            const s = CABLES.now(),
              r = t.ops[i];
            let o = null;
            try {
              o = r.opId
                ? this.addOp(r.opId, r.uiAttribs, r.id, !0)
                : this.addOp(r.objName, r.uiAttribs, r.id, !0);
            } catch (t) {
              throw (
                (this._log.warn("[instancing error] op data:", r, t),
                new Error("instancing error: " + r.objName))
              );
            }
            if ((n.checkOp(o), o)) {
              e && (o.id = b()),
                (o.portsInData = r.portsIn),
                (o._origData = r),
                (o.storage = r.storage);
              for (const t in r.portsIn) {
                const e = r.portsIn[t],
                  i = o.getPort(e.name);
                !i ||
                  ("bool" != i.uiAttribs.display && "bool" != i.uiAttribs.type) ||
                  isNaN(e.value) ||
                  (e.value = !0 === e.value),
                  i &&
                    void 0 !== e.value &&
                    i.type != B.OP_PORT_TYPE_TEXTURE &&
                    i.set(e.value),
                  i && i.deSerializeSettings(e);
              }
              for (const e in r.portsOut) {
                const s = o.getPort(r.portsOut[e].name);
                s &&
                  s.type != B.OP_PORT_TYPE_TEXTURE &&
                  r.portsOut[e].hasOwnProperty("value") &&
                  s.set(t.ops[i].portsOut[e].value);
              }
            }
            const h = Math.round(100 * (CABLES.now() - s)) / 100;
            !this.silent &&
              h > 200 &&
              this._log.warn("long op init ", t.ops[i].objName, h);
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
                        r(
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
                        r(
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
            this.loading.finished(i);
          }, 100),
            this.config.onPatchLoaded && this.config.onPatchLoaded(this),
            this.emitEvent("patchLoadEnd");
        }),
        (Ft.prototype.profile = function (t) {
          this.profiler = new Nt(this);
          for (const e in this.ops) this.ops[e].profile(t);
        }),
        ((Ft.Variable = function (t, e, i) {
          (this._name = t),
            (this._changeListeners = []),
            (this.type = i),
            this.setValue(e);
        }).prototype.getValue = function () {
          return this._v;
        }),
        (Ft.Variable.prototype.getName = function () {
          return this._name;
        }),
        (Ft.Variable.prototype.setValue = function (t) {
          this._v = t;
          for (let e = 0; e < this._changeListeners.length; e++)
            this._changeListeners[e](t, this);
        }),
        (Ft.Variable.prototype.addListener = function (t) {
          -1 == this._changeListeners.indexOf(t) && this._changeListeners.push(t);
        }),
        (Ft.Variable.prototype.removeListener = function (t) {
          const e = this._changeListeners.indexOf(t);
          this._changeListeners.splice(e, 1);
        }),
        (Ft.prototype.setVariable = function (t, e) {
          void 0 !== this._variables[t]
            ? this._variables[t].setValue(e)
            : this._log.warn("variable " + t + " not found!");
        }),
        (Ft.prototype._sortVars = function () {
          if (!this.isEditorMode()) return;
          const t = {};
          Object.keys(this._variables)
            .sort((t, e) =>
              t.localeCompare(e, "en", {
                sensitivity: "base",
              })
            )
            .forEach((e) => {
              t[e] = this._variables[e];
            }),
            (this._variables = t);
        }),
        (Ft.prototype.hasVar = function (t) {
          return void 0 !== this._variables[t];
        }),
        (Ft.prototype.setVarValue = function (t, e) {
          return (
            this.hasVar(t)
              ? this._variables[t].setValue(e)
              : ((this._variables[t] = new Ft.Variable(t, e)),
                this._sortVars(),
                this.emitEvent("variablesChanged")),
            this._variables[t]
          );
        }),
        (Ft.prototype.getVarValue = function (t, e) {
          if (this._variables.hasOwnProperty(t))
            return this._variables[t].getValue();
        }),
        (Ft.prototype.getVar = function (t) {
          if (this._variables.hasOwnProperty(t)) return this._variables[t];
        }),
        (Ft.prototype.deleteVar = function (t) {
          for (let e = 0; e < this.ops.length; e++)
            for (let i = 0; i < this.ops[e].portsIn.length; i++)
              this.ops[e].portsIn[i].getVariableName() == t &&
                this.ops[e].portsIn[i].setVariable(null);
          delete this._variables[t],
            this.emitEvent("variableDeleted", t),
            this.emitEvent("variablesChanged");
        }),
        (Ft.prototype.getVars = function (t) {
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
        (Ft.prototype.exitError = function (t, e, i) {
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
        (Ft.prototype.preRenderOps = function () {
          this._log.log("prerendering...");
          for (let t = 0; t < this.ops.length; t++)
            this.ops[t].preRender &&
              (this.ops[t].preRender(),
              this._log.log("prerender " + this.ops[t].objName));
        }),
        (Ft.prototype.dispose = function () {
          this.pause(), this.clear();
        }),
        (Ft.prototype.pushTriggerStack = function (t) {
          this._triggerStack.push(t);
        }),
        (Ft.prototype.popTriggerStack = function () {
          this._triggerStack.pop();
        }),
        (Ft.prototype.printTriggerStack = function () {
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
      var Ct = Ft;
      const Mt = {
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
              (CABLES.patch = new Ct(e)),
              r
            );
          },
        },
        wt = {
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
                  !wt.toneJsInitialized &&
                  (Tone.setContext(window.audioContext),
                  (wt.toneJsInitialized = !0)),
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
              [B.OP_PORT_TYPE_VALUE, B.OP_PORT_TYPE_OBJECT],
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
                  s = wt.getAudioContext();
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
            const n = wt.createAudioContext();
            let o = null;
            (r || void 0 === r) &&
              ((o = t.loading.start("audio", e)),
              t.isEditorMode() &&
                gui.jobs().start({
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
        Ut = function (t, e, i) {
          (this._patch = t),
            (this.connector = i),
            (this._log = new _("PatchConnectionReceiver"));
        };
      Ut.prototype._receive = function (t) {
        let e = {};
        if (
          ((e = t.hasOwnProperty("event") ? t : JSON.parse(t.data)),
          e.event == k.PACO_OP_CREATE)
        ) {
          if (
            (this._log.log("op create: data.vars.objName"),
            this._patch.getOpById(e.vars.opId))
          )
            return;
          let t = null;
          window.gui
            ? gui.serverOps.loadOpLibs(e.vars.objName, () => {
                (t = this._patch.addOp(e.vars.objName, null, e.vars.opId)),
                  (t.id = e.vars.opId);
              })
            : ((t = this._patch.addOp(e.vars.objName, null, e.vars.opId)),
              (t.id = e.vars.opId));
        } else if (e.event == k.PACO_LOAD)
          this._log.log("PACO load patch....."),
            this._patch.clear(),
            this._patch.deSerialize(e.vars.patch);
        else if (e.event == k.PACO_CLEAR)
          this._patch.clear(), this._log.log("clear");
        else if (e.event == k.PACO_OP_DELETE)
          this._log.log("op delete"), this._patch.deleteOp(e.vars.op, !0);
        else if (e.event == k.PACO_OP_ENABLE) {
          const t = this._patch.getOpById(e.vars.op);
          t && (t.enabled = !0);
        } else if (e.event == k.PACO_OP_DISABLE) {
          const t = this._patch.getOpById(e.vars.op);
          t && (t.enabled = !1);
        } else if (e.event == k.PACO_UNLINK) {
          const t = this._patch.getOpById(e.vars.op1),
            i = this._patch.getOpById(e.vars.op2);
          if (!t || !i) return void console.log("[paco] unlink op not found ");
          const s = t.getPort(e.vars.port1),
            r = i.getPort(e.vars.port2);
          s.removeLinkTo(r);
        } else if (e.event == k.PACO_LINK) {
          const t = this._patch.getOpById(e.vars.op1),
            i = this._patch.getOpById(e.vars.op2);
          this._patch.link(t, e.vars.port1, i, e.vars.port2);
        } else if (e.event == k.PACO_VALUECHANGE) {
          this._patch.getOpById(e.vars.op).getPort(e.vars.port).set(e.vars.v);
        } else this._log.warn("unknown patchConnectionEvent!", t);
      };
      const Bt = function (t) {
        (this.connectors = []),
          t.addEventListener("onOpDelete", (t) => {
            this.send(CABLES.PACO_OP_DELETE, {
              op: t.id,
            });
          }),
          t.addEventListener("onOpAdd", (t) => {
            this.send(CABLES.PACO_OP_CREATE, {
              opId: t.id,
              objName: t.objName,
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
          t.addEventListener("onLink", (t, e) => {
            this.send(CABLES.PACO_LINK, {
              op1: t.parent.id,
              op2: e.parent.id,
              port1: t.name,
              port2: e.name,
            });
          });
      };
      Bt.prototype.send = function (t, e) {
        for (let i = 0; i < this.connectors.length; i++)
          this.connectors[i].send(t, e);
      };
      const Lt = function () {
        window.BroadcastChannel &&
          (this.bc = new BroadcastChannel("test_channel"));
      };
      (Lt.prototype.receive = function (t) {
        this.bc &&
          (this._log.log("init"), (this.bc.onmessage = t._receive.bind(t)));
      }),
        (Lt.prototype.send = function (t, e) {
          if (!this.bc) return;
          const i = {};
          (i.event = t), (i.vars = e), this.bc.postMessage(JSON.stringify(i));
        });
      const kt = Object.assign(
        {
          EventTarget: p,
          EMBED: Mt,
          Link: J,
          Port: D,
          Op: Z,
          Profiler: Nt,
          Requirements: St,
          Patch: Ct,
          Instancing: Pt,
          Timer: pt,
          WEBAUDIO: wt,
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
          LoadingStatus: Rt,
          now: _t,
          internalNow: ut,
        },
        s,
        r,
        n,
        U,
        o,
        L,
        k,
        U,
        B
      );
      e.default = kt;
      (function () {
        return !this;
      })() || console.warn("not in strict mode: index core");
    },
  ]).default;
  //# sourceMappingURL=cables.min.js.mapvar CABLES = CABLES || {}; CABLES.build = {"timestamp":1642088436991,"created":"2022-01-13T15:40:36.991Z","git":{"branch":"master","commit":"c537af9dc816369192a4c7405dc4d949add1219c","date":null,"message":null}};
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
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
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
    timestamp: 1642088436991,
    created: "2022-01-13T15:40:36.991Z",
    git: {
      branch: "master",
      commit: "c537af9dc816369192a4c7405dc4d949add1219c",
      date: null,
      message: null,
    },
  };
  if (!CABLES.exportedPatches) CABLES.exportedPatches = {};
  CABLES.exportedPatches["ZXxZ9X"] = {
    settings: {
      opExample: [],
      licence: "none",
      isPublic: false,
    },
    ops: [
      {
        objName: "Ops.Gl.MainLoop",
        id: "0",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "FPS Limit",
            value: 12,
          },
          {
            name: "Reduce FPS not focussed",
            value: true,
          },
          {
            name: "Reduce FPS loading",
            value: false,
          },
          {
            name: "Clear",
            value: true,
          },
          {
            name: "ClearAlpha",
            value: false,
          },
          {
            name: "Fullscreen Button",
            value: false,
          },
          {
            name: "Active",
            value: true,
          },
          {
            name: "Hires Displays",
            value: false,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            links: [
              {
                portIn: "render",
                portOut: "trigger",
                objIn: "48",
                objOut: "0",
              },
            ],
          },
          {
            name: "width",
            value: 650,
          },
          {
            name: "height",
            value: 670,
          },
        ],
      },
      {
        objName: "Ops.Gl.TextureEffects.Noise.PerlinNoise",
        id: "1",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "Blend Mode index",
            value: 0,
          },
          {
            name: "Blend Mode",
            value: "normal",
          },
          {
            name: "Amount",
            value: 1,
          },
          {
            name: "Color index",
            value: 0,
          },
          {
            name: "Color",
            value: "RGB",
          },
          {
            name: "Scale",
          },
          {
            name: "X",
          },
          {
            name: "Y",
            value: 0,
          },
          {
            name: "Z",
            value: 0,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            links: [
              {
                portIn: "render",
                portOut: "trigger",
                objIn: "3",
                objOut: "1",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Gl.TextureEffects.ImageCompose_v2",
        id: "2",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Render",
          },
          {
            name: "Use viewport size",
            value: false,
          },
          {
            name: "Width",
            value: 512,
          },
          {
            name: "Height",
            value: 512,
          },
          {
            name: "Filter index",
            value: 1,
          },
          {
            name: "Filter",
            value: "linear",
          },
          {
            name: "Wrap index",
            value: 1,
          },
          {
            name: "Wrap",
            value: "repeat",
          },
          {
            name: "HDR",
            value: false,
          },
          {
            name: "Transparent",
            value: false,
          },
        ],
        portsOut: [
          {
            name: "Next",
            links: [
              {
                portIn: "render",
                portOut: "Next",
                objIn: "1",
                objOut: "2",
              },
            ],
          },
          {
            name: "texture_out",
            links: [
              {
                portIn: "Image",
                portOut: "texture_out",
                objIn: "13",
                objOut: "2",
              },
            ],
          },
          {
            name: "Aspect Ratio",
            value: 1,
          },
        ],
      },
      {
        objName: "Ops.Gl.TextureEffects.ColorMap",
        id: "3",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "Blend Mode index",
            value: 0,
          },
          {
            name: "Blend Mode",
            value: "normal",
          },
          {
            name: "Amount",
            value: 1,
          },
          {
            name: "Gradient",
          },
          {
            name: "Method index",
            value: 0,
          },
          {
            name: "Method",
            value: "Luminance",
          },
          {
            name: "Min",
            value: 0.462,
          },
          {
            name: "Max",
            value: 1,
          },
          {
            name: "Position",
            value: 0.634,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            links: [
              {
                portIn: "render",
                portOut: "trigger",
                objIn: "6",
                objOut: "3",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Gl.TextureEffects.ImageCompose_v2",
        id: "4",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Render",
          },
          {
            name: "Use viewport size",
            value: false,
          },
          {
            name: "Width",
            value: 512,
          },
          {
            name: "Height",
            value: 512,
          },
          {
            name: "Filter index",
            value: 1,
          },
          {
            name: "Filter",
            value: "linear",
          },
          {
            name: "Wrap index",
            value: 1,
          },
          {
            name: "Wrap",
            value: "repeat",
          },
          {
            name: "HDR",
            value: false,
          },
          {
            name: "Transparent",
            value: false,
          },
        ],
        portsOut: [
          {
            name: "Next",
            links: [
              {
                portIn: "Render",
                portOut: "Next",
                objIn: "5",
                objOut: "4",
              },
            ],
          },
          {
            name: "texture_out",
            links: [
              {
                portIn: "Gradient",
                portOut: "texture_out",
                objIn: "3",
                objOut: "4",
              },
            ],
          },
          {
            name: "Aspect Ratio",
            value: 1,
          },
        ],
      },
      {
        objName: "Ops.Gl.TextureEffects.Gradient",
        id: "5",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Render",
          },
          {
            name: "Blend Mode index",
            value: 0,
          },
          {
            name: "Blend Mode",
            value: "normal",
          },
          {
            name: "Amount",
            value: 1,
          },
          {
            name: "Width",
            value: 7,
          },
          {
            name: "Type index",
            value: 0,
          },
          {
            name: "Type",
            value: "X",
          },
          {
            name: "Pos",
            value: 0.6,
          },
          {
            name: "Smoothstep",
            value: true,
          },
          {
            name: "r",
            value: 1,
          },
          {
            name: "g",
            value: 1,
          },
          {
            name: "b",
            value: 1,
          },
          {
            name: "r2",
            value: 0,
          },
          {
            name: "g2",
            value: 0,
          },
          {
            name: "b2",
            value: 0,
          },
          {
            name: "r3",
            value: 0,
          },
          {
            name: "g3",
            value: 0,
          },
          {
            name: "b3",
            value: 0,
          },
          {
            name: "Randomize",
            value: 0,
          },
        ],
        portsOut: [
          {
            name: "Next",
            value: 0,
          },
        ],
      },
      {
        objName: "Ops.Gl.TextureEffects.SkewStretchImage",
        id: "6",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "Blend Mode index",
            value: 0,
          },
          {
            name: "Blend Mode",
            value: "normal",
          },
          {
            name: "Amount",
            value: 1,
          },
          {
            name: "Clamp",
            value: false,
          },
          {
            name: "Stretch Top",
            value: 1,
          },
          {
            name: "Stretch Bottom",
            value: 1,
          },
          {
            name: "Stretch Left",
            value: 4,
          },
          {
            name: "Stretch Right",
            value: 4,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            value: 0,
          },
        ],
      },
      {
        objName: "Ops.Gl.TextureEffects.Noise.PerlinNoise",
        id: "7",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "Blend Mode index",
            value: 0,
          },
          {
            name: "Blend Mode",
            value: "normal",
          },
          {
            name: "Amount",
            value: 1,
          },
          {
            name: "Color index",
            value: 0,
          },
          {
            name: "Color",
            value: "RGB",
          },
          {
            name: "Scale",
          },
          {
            name: "X",
          },
          {
            name: "Y",
            value: 0,
          },
          {
            name: "Z",
            value: 0,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            links: [
              {
                portIn: "render",
                portOut: "trigger",
                objIn: "6",
                objOut: "7",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Gl.TextureEffects.ImageCompose_v2",
        id: "8",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Render",
          },
          {
            name: "Use viewport size",
            value: false,
          },
          {
            name: "Width",
            value: 512,
          },
          {
            name: "Height",
            value: 512,
          },
          {
            name: "Filter index",
            value: 1,
          },
          {
            name: "Filter",
            value: "linear",
          },
          {
            name: "Wrap index",
            value: 1,
          },
          {
            name: "Wrap",
            value: "repeat",
          },
          {
            name: "HDR",
            value: false,
          },
          {
            name: "Transparent",
            value: false,
          },
        ],
        portsOut: [
          {
            name: "Next",
            links: [
              {
                portIn: "render",
                portOut: "Next",
                objIn: "7",
                objOut: "8",
              },
            ],
          },
          {
            name: "texture_out",
            links: [
              {
                portIn: "Image",
                portOut: "texture_out",
                objIn: "14",
                objOut: "8",
              },
            ],
          },
          {
            name: "Aspect Ratio",
            value: 1,
          },
        ],
      },
      {
        objName: "Ops.Anim.Timer_v2",
        id: "9",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Speed",
            value: 1,
          },
          {
            name: "Play",
            value: true,
          },
          {
            name: "Reset",
            value: 0,
          },
          {
            name: "Sync to timeline",
            value: false,
          },
        ],
        portsOut: [
          {
            name: "Time",
            links: [
              {
                portIn: "number1",
                portOut: "Time",
                objIn: "126",
                objOut: "9",
              },
              {
                portIn: "number1",
                portOut: "Time",
                objIn: "127",
                objOut: "9",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Gl.ShaderEffects.VertexDisplacementMap_v4",
        id: "10",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Render",
          },
          {
            name: "Extrude",
            value: 0.16,
          },
          {
            name: "Mode index",
            value: 0,
          },
          {
            name: "Mode",
            value: "*",
          },
          {
            name: "Axis index",
            value: 0,
          },
          {
            name: "Axis",
            value: "XYZ",
          },
          {
            name: "Coordinates index",
            value: 0,
          },
          {
            name: "Coordinates",
            value: "Tex Coords",
          },
          {
            name: "Texture",
          },
          {
            name: "Channel index",
            value: 0,
          },
          {
            name: "Channel",
            value: "RGB",
          },
          {
            name: "Flip index",
            value: 0,
          },
          {
            name: "Flip",
            value: "None",
          },
          {
            name: "Range index",
            value: 0,
          },
          {
            name: "Range",
            value: "0-1",
          },
          {
            name: "Offset X",
            value: 0,
          },
          {
            name: "Offset Y",
            value: 0,
          },
          {
            name: "Scale",
            value: 1.34,
          },
          {
            name: "Calc Normals",
            value: true,
          },
          {
            name: "Discard Zero Values",
            value: false,
          },
          {
            name: "colorize",
            value: false,
          },
          {
            name: "Colorize Min",
            value: 0.269,
          },
          {
            name: "Colorize Max",
            value: 1,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            links: [
              {
                portIn: "Render",
                portOut: "trigger",
                objIn: "125",
                objOut: "10",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Sequence",
        id: "11",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "exe",
          },
          {
            name: "Clean up connections",
            value: 0,
          },
          {
            name: "exe 0",
            value: 0,
          },
          {
            name: "exe 1",
            value: 0,
          },
          {
            name: "exe 2",
            value: 0,
          },
          {
            name: "exe 3",
            value: 0,
          },
          {
            name: "exe 4",
            value: 0,
          },
          {
            name: "exe 5",
            value: 0,
          },
          {
            name: "exe 6",
            value: 0,
          },
          {
            name: "exe 7",
            value: 0,
          },
          {
            name: "exe 8",
            value: 0,
          },
          {
            name: "exe 9",
            value: 0,
          },
          {
            name: "exe 10",
            value: 0,
          },
          {
            name: "exe 11",
            value: 0,
          },
          {
            name: "exe 12",
            value: 0,
          },
          {
            name: "exe 13",
            value: 0,
          },
          {
            name: "exe 14",
            value: 0,
          },
        ],
        portsOut: [
          {
            name: "trigger 0",
            links: [
              {
                portIn: "Render",
                portOut: "trigger 0",
                objIn: "2",
                objOut: "11",
              },
              {
                portIn: "Render",
                portOut: "trigger 0",
                objIn: "4",
                objOut: "11",
              },
            ],
          },
          {
            name: "trigger 1",
            links: [
              {
                portIn: "Render",
                portOut: "trigger 1",
                objIn: "8",
                objOut: "11",
              },
            ],
          },
          {
            name: "trigger 2",
            value: 0,
          },
          {
            name: "trigger 3",
            value: 0,
          },
          {
            name: "trigger 4",
            links: [
              {
                portIn: "Render",
                portOut: "trigger 4",
                objIn: "25",
                objOut: "11",
              },
            ],
          },
          {
            name: "trigger 5",
            value: 0,
          },
          {
            name: "trigger 6",
            value: 0,
          },
          {
            name: "trigger 7",
            value: 0,
          },
          {
            name: "trigger 8",
            links: [
              {
                portIn: "Render",
                portOut: "trigger 8",
                objIn: "124",
                objOut: "11",
              },
            ],
          },
          {
            name: "trigger 9",
            links: [
              {
                portIn: "Render",
                portOut: "trigger 9",
                objIn: "20",
                objOut: "11",
              },
            ],
          },
          {
            name: "trigger 10",
            links: [
              {
                portIn: "Render",
                portOut: "trigger 10",
                objIn: "17",
                objOut: "11",
              },
            ],
          },
          {
            name: "trigger 11",
            links: [
              {
                portIn: "Render",
                portOut: "trigger 11",
                objIn: "15",
                objOut: "11",
              },
            ],
          },
          {
            name: "trigger 12",
            links: [
              {
                portIn: "Render",
                portOut: "trigger 12",
                objIn: "12",
                objOut: "11",
              },
            ],
          },
          {
            name: "trigger 13",
            value: 0,
          },
          {
            name: "trigger 14",
            links: [
              {
                portIn: "exe",
                portOut: "trigger 14",
                objIn: "32",
                objOut: "11",
              },
            ],
          },
          {
            name: "trigger 15",
            value: 0,
          },
        ],
      },
      {
        objName: "Ops.Gl.TextureEffects.ImageCompose_v2",
        id: "12",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Render",
          },
          {
            name: "Use viewport size",
            value: false,
          },
          {
            name: "Width",
            value: 512,
          },
          {
            name: "Height",
            value: 512,
          },
          {
            name: "Filter index",
            value: 1,
          },
          {
            name: "Filter",
            value: "linear",
          },
          {
            name: "Wrap index",
            value: 1,
          },
          {
            name: "Wrap",
            value: "clamp to edge",
          },
          {
            name: "HDR",
            value: false,
          },
          {
            name: "Transparent",
            value: false,
          },
        ],
        portsOut: [
          {
            name: "Next",
            links: [
              {
                portIn: "render",
                portOut: "Next",
                objIn: "13",
                objOut: "12",
              },
            ],
          },
          {
            name: "texture_out",
            links: [
              {
                portIn: "Image",
                portOut: "texture_out",
                objIn: "42",
                objOut: "12",
              },
            ],
          },
          {
            name: "Aspect Ratio",
            value: 1,
          },
        ],
      },
      {
        objName: "Ops.Gl.TextureEffects.DrawImage_v3",
        id: "13",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "blendMode index",
            value: 0,
          },
          {
            name: "blendMode",
            value: "normal",
          },
          {
            name: "amount",
            value: 0.21,
          },
          {
            name: "Image",
          },
          {
            name: "removeAlphaSrc",
            value: false,
          },
          {
            name: "Mask",
            value: 0,
          },
          {
            name: "Mask Src index",
            value: 1,
          },
          {
            name: "Mask Src",
            value: "alpha channel",
          },
          {
            name: "Invert alpha channel",
            value: false,
          },
          {
            name: "Aspect Ratio",
            value: false,
          },
          {
            name: "Stretch Axis index",
            value: 0,
          },
          {
            name: "Stretch Axis",
            value: "X",
          },
          {
            name: "Position",
            value: 0,
          },
          {
            name: "Crop",
            value: false,
          },
          {
            name: "flip x",
            value: false,
          },
          {
            name: "flip y",
            value: false,
          },
          {
            name: "Transform",
            value: false,
          },
          {
            name: "Scale X",
            value: 1,
          },
          {
            name: "Scale Y",
            value: 1,
          },
          {
            name: "Position X",
            value: 0,
          },
          {
            name: "Position Y",
            value: 0,
          },
          {
            name: "Rotation",
            value: 0,
          },
          {
            name: "Clip Repeat",
            value: false,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            links: [
              {
                portIn: "render",
                portOut: "trigger",
                objIn: "21",
                objOut: "13",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Gl.TextureEffects.DrawImage_v3",
        id: "14",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "blendMode index",
            value: 0,
          },
          {
            name: "blendMode",
            value: "difference",
          },
          {
            name: "amount",
          },
          {
            name: "Image",
          },
          {
            name: "removeAlphaSrc",
            value: false,
          },
          {
            name: "Mask",
            value: 0,
          },
          {
            name: "Mask Src index",
            value: 1,
          },
          {
            name: "Mask Src",
            value: "alpha channel",
          },
          {
            name: "Invert alpha channel",
            value: false,
          },
          {
            name: "Aspect Ratio",
            value: false,
          },
          {
            name: "Stretch Axis index",
            value: 0,
          },
          {
            name: "Stretch Axis",
            value: "X",
          },
          {
            name: "Position",
            value: 0,
          },
          {
            name: "Crop",
            value: false,
          },
          {
            name: "flip x",
            value: false,
          },
          {
            name: "flip y",
            value: false,
          },
          {
            name: "Transform",
            value: false,
          },
          {
            name: "Scale X",
            value: 1,
          },
          {
            name: "Scale Y",
            value: 1,
          },
          {
            name: "Position X",
            value: 0,
          },
          {
            name: "Position Y",
            value: 0,
          },
          {
            name: "Rotation",
            value: 0,
          },
          {
            name: "Clip Repeat",
            value: false,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            links: [
              {
                portIn: "render",
                portOut: "trigger",
                objIn: "16",
                objOut: "14",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Gl.TextureEffects.ImageCompose_v2",
        id: "15",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Render",
          },
          {
            name: "Use viewport size",
            value: false,
          },
          {
            name: "Width",
            value: 512,
          },
          {
            name: "Height",
            value: 512,
          },
          {
            name: "Filter index",
            value: 1,
          },
          {
            name: "Filter",
            value: "linear",
          },
          {
            name: "Wrap index",
            value: 1,
          },
          {
            name: "Wrap",
            value: "repeat",
          },
          {
            name: "HDR",
            value: false,
          },
          {
            name: "Transparent",
            value: false,
          },
        ],
        portsOut: [
          {
            name: "Next",
            links: [
              {
                portIn: "render",
                portOut: "Next",
                objIn: "14",
                objOut: "15",
              },
            ],
          },
          {
            name: "texture_out",
            links: [
              {
                portIn: "Texture",
                portOut: "texture_out",
                objIn: "10",
                objOut: "15",
              },
            ],
          },
          {
            name: "Aspect Ratio",
            value: 1,
          },
        ],
      },
      {
        objName: "Ops.Gl.TextureEffects.DrawImage_v3",
        id: "16",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "blendMode index",
            value: 0,
          },
          {
            name: "blendMode",
            value: "normal",
          },
          {
            name: "amount",
            value: 0.915,
          },
          {
            name: "Image",
          },
          {
            name: "removeAlphaSrc",
            value: false,
          },
          {
            name: "Mask",
          },
          {
            name: "Mask Src index",
            value: 1,
          },
          {
            name: "Mask Src",
            value: "luminance",
          },
          {
            name: "Invert alpha channel",
            value: false,
          },
          {
            name: "Aspect Ratio",
            value: false,
          },
          {
            name: "Stretch Axis index",
            value: 0,
          },
          {
            name: "Stretch Axis",
            value: "X",
          },
          {
            name: "Position",
            value: 0,
          },
          {
            name: "Crop",
            value: false,
          },
          {
            name: "flip x",
            value: false,
          },
          {
            name: "flip y",
            value: false,
          },
          {
            name: "Transform",
            value: true,
          },
          {
            name: "Scale X",
            value: 1,
          },
          {
            name: "Scale Y",
            value: 1,
          },
          {
            name: "Position X",
            value: 0,
          },
          {
            name: "Position Y",
          },
          {
            name: "Rotation",
            value: 0,
          },
          {
            name: "Clip Repeat",
            value: false,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            value: 0,
          },
        ],
      },
      {
        objName: "Ops.Gl.TextureEffects.ImageCompose_v2",
        id: "17",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Render",
          },
          {
            name: "Use viewport size",
            value: false,
          },
          {
            name: "Width",
            value: 512,
          },
          {
            name: "Height",
            value: 512,
          },
          {
            name: "Filter index",
            value: 1,
          },
          {
            name: "Filter",
            value: "linear",
          },
          {
            name: "Wrap index",
            value: 1,
          },
          {
            name: "Wrap",
            value: "repeat",
          },
          {
            name: "HDR",
            value: false,
          },
          {
            name: "Transparent",
            value: false,
          },
        ],
        portsOut: [
          {
            name: "Next",
            links: [
              {
                portIn: "render",
                portOut: "Next",
                objIn: "18",
                objOut: "17",
              },
            ],
          },
          {
            name: "texture_out",
            links: [
              {
                portIn: "Image",
                portOut: "texture_out",
                objIn: "16",
                objOut: "17",
              },
            ],
          },
          {
            name: "Aspect Ratio",
            value: 1,
          },
        ],
      },
      {
        objName: "Ops.Gl.TextureEffects.Color",
        id: "18",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "Blend Mode index",
            value: 0,
          },
          {
            name: "Blend Mode",
            value: "normal",
          },
          {
            name: "Amount",
            value: 1,
          },
          {
            name: "Mask",
            value: 0,
          },
          {
            name: "Mask Invert",
            value: false,
          },
          {
            name: "r",
            value: 0.5,
          },
          {
            name: "g",
            value: 0.5,
          },
          {
            name: "b",
            value: 0.5,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            value: 0,
          },
        ],
      },
      {
        objName: "Ops.Gl.TextureEffects.Gradient",
        id: "19",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Render",
          },
          {
            name: "Blend Mode index",
            value: 0,
          },
          {
            name: "Blend Mode",
            value: "normal",
          },
          {
            name: "Amount",
            value: 1,
          },
          {
            name: "Width",
            value: 1.01,
          },
          {
            name: "Type index",
            value: 0,
          },
          {
            name: "Type",
            value: "X",
          },
          {
            name: "Pos",
            value: 0.234,
          },
          {
            name: "Smoothstep",
            value: true,
          },
          {
            name: "r",
            value: 1,
          },
          {
            name: "g",
            value: 1,
          },
          {
            name: "b",
            value: 1,
          },
          {
            name: "r2",
            value: 1,
          },
          {
            name: "g2",
            value: 1,
          },
          {
            name: "b2",
            value: 1,
          },
          {
            name: "r3",
            value: 0,
          },
          {
            name: "g3",
            value: 0,
          },
          {
            name: "b3",
            value: 0,
          },
          {
            name: "Randomize",
            value: 0,
          },
        ],
        portsOut: [
          {
            name: "Next",
            value: 0,
          },
        ],
      },
      {
        objName: "Ops.Gl.TextureEffects.ImageCompose_v2",
        id: "20",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Render",
          },
          {
            name: "Use viewport size",
            value: false,
          },
          {
            name: "Width",
            value: 512,
          },
          {
            name: "Height",
            value: 512,
          },
          {
            name: "Filter index",
            value: 1,
          },
          {
            name: "Filter",
            value: "linear",
          },
          {
            name: "Wrap index",
            value: 1,
          },
          {
            name: "Wrap",
            value: "clamp to edge",
          },
          {
            name: "HDR",
            value: false,
          },
          {
            name: "Transparent",
            value: false,
          },
        ],
        portsOut: [
          {
            name: "Next",
            links: [
              {
                portIn: "Render",
                portOut: "Next",
                objIn: "19",
                objOut: "20",
              },
            ],
          },
          {
            name: "texture_out",
            links: [
              {
                portIn: "Mask",
                portOut: "texture_out",
                objIn: "16",
                objOut: "20",
              },
            ],
          },
          {
            name: "Aspect Ratio",
            value: 1,
          },
        ],
      },
      {
        objName: "Ops.Gl.TextureEffects.DrawImage_v3",
        id: "21",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "blendMode index",
            value: 0,
          },
          {
            name: "blendMode",
            value: "multiply",
          },
          {
            name: "amount",
            value: 1,
          },
          {
            name: "Image",
          },
          {
            name: "removeAlphaSrc",
            value: false,
          },
          {
            name: "Mask",
            value: 0,
          },
          {
            name: "Mask Src index",
            value: 1,
          },
          {
            name: "Mask Src",
            value: "luminance",
          },
          {
            name: "Invert alpha channel",
            value: false,
          },
          {
            name: "Aspect Ratio",
            value: false,
          },
          {
            name: "Stretch Axis index",
            value: 0,
          },
          {
            name: "Stretch Axis",
            value: "X",
          },
          {
            name: "Position",
            value: 0,
          },
          {
            name: "Crop",
            value: false,
          },
          {
            name: "flip x",
            value: false,
          },
          {
            name: "flip y",
            value: false,
          },
          {
            name: "Transform",
            value: true,
          },
          {
            name: "Scale X",
            value: 1,
          },
          {
            name: "Scale Y",
            value: 1,
          },
          {
            name: "Position X",
          },
          {
            name: "Position Y",
            value: 0,
          },
          {
            name: "Rotation",
            value: 0,
          },
          {
            name: "Clip Repeat",
            value: false,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            links: [
              {
                portIn: "render",
                portOut: "trigger",
                objIn: "23",
                objOut: "21",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Gl.Matrix.Transform",
        id: "22",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "posX",
            value: 0,
          },
          {
            name: "posY",
            value: 0,
          },
          {
            name: "posZ",
            value: 0,
          },
          {
            name: "scale",
            value: 26.82,
          },
          {
            name: "rotX",
            value: 90,
          },
          {
            name: "rotY",
            value: -52.88,
          },
          {
            name: "rotZ",
            value: 0,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            links: [
              {
                portIn: "Render",
                portOut: "trigger",
                objIn: "10",
                objOut: "22",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Gl.TextureEffects.DrawImage_v3",
        id: "23",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "blendMode index",
            value: 0,
          },
          {
            name: "blendMode",
            value: "multiply",
          },
          {
            name: "amount",
            value: 1,
          },
          {
            name: "Image",
          },
          {
            name: "removeAlphaSrc",
            value: false,
          },
          {
            name: "Mask",
            value: 0,
          },
          {
            name: "Mask Src index",
            value: 1,
          },
          {
            name: "Mask Src",
            value: "luminance",
          },
          {
            name: "Invert alpha channel",
            value: false,
          },
          {
            name: "Aspect Ratio",
            value: false,
          },
          {
            name: "Stretch Axis index",
            value: 0,
          },
          {
            name: "Stretch Axis",
            value: "X",
          },
          {
            name: "Position",
            value: 0,
          },
          {
            name: "Crop",
            value: false,
          },
          {
            name: "flip x",
            value: false,
          },
          {
            name: "flip y",
            value: false,
          },
          {
            name: "Transform",
            value: true,
          },
          {
            name: "Scale X",
            value: 1,
          },
          {
            name: "Scale Y",
            value: 1,
          },
          {
            name: "Position X",
          },
          {
            name: "Position Y",
            value: 0.01,
          },
          {
            name: "Rotation",
            value: 0,
          },
          {
            name: "Clip Repeat",
            value: false,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            value: 0,
          },
        ],
      },
      {
        objName: "Ops.Gl.TextureEffects.Gradient",
        id: "24",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Render",
          },
          {
            name: "Blend Mode index",
            value: 0,
          },
          {
            name: "Blend Mode",
            value: "normal",
          },
          {
            name: "Amount",
            value: 1,
          },
          {
            name: "Width",
            value: 1.5,
          },
          {
            name: "Type index",
            value: 0,
          },
          {
            name: "Type",
            value: "X",
          },
          {
            name: "Pos",
            value: 0.234,
          },
          {
            name: "Smoothstep",
            value: true,
          },
          {
            name: "r",
            value: 1,
          },
          {
            name: "g",
            value: 1,
          },
          {
            name: "b",
            value: 1,
          },
          {
            name: "r2",
            value: 1,
          },
          {
            name: "g2",
            value: 1,
          },
          {
            name: "b2",
            value: 1,
          },
          {
            name: "r3",
            value: 0,
          },
          {
            name: "g3",
            value: 0,
          },
          {
            name: "b3",
            value: 0,
          },
          {
            name: "Randomize",
            value: 0,
          },
        ],
        portsOut: [
          {
            name: "Next",
            links: [
              {
                portIn: "render",
                portOut: "Next",
                objIn: "26",
                objOut: "24",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Gl.TextureEffects.ImageCompose_v2",
        id: "25",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Render",
          },
          {
            name: "Use viewport size",
            value: false,
          },
          {
            name: "Width",
            value: 512,
          },
          {
            name: "Height",
            value: 512,
          },
          {
            name: "Filter index",
            value: 1,
          },
          {
            name: "Filter",
            value: "linear",
          },
          {
            name: "Wrap index",
            value: 1,
          },
          {
            name: "Wrap",
            value: "clamp to edge",
          },
          {
            name: "HDR",
            value: false,
          },
          {
            name: "Transparent",
            value: false,
          },
        ],
        portsOut: [
          {
            name: "Next",
            links: [
              {
                portIn: "Render",
                portOut: "Next",
                objIn: "24",
                objOut: "25",
              },
            ],
          },
          {
            name: "texture_out",
            links: [
              {
                portIn: "Image",
                portOut: "texture_out",
                objIn: "23",
                objOut: "25",
              },
            ],
          },
          {
            name: "Aspect Ratio",
            value: 1,
          },
        ],
      },
      {
        objName: "Ops.Gl.TextureEffects.Invert",
        id: "26",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "Blend Mode index",
            value: 0,
          },
          {
            name: "Blend Mode",
            value: "normal",
          },
          {
            name: "Mask Invert",
            value: true,
          },
          {
            name: "Mask",
            value: 0,
          },
          {
            name: "Amount",
            value: 1,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            value: 0,
          },
        ],
      },
      {
        objName: "Ops.Math.MapRange",
        id: "27",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "value",
          },
          {
            name: "old min",
            value: 0,
          },
          {
            name: "old max",
            value: 1,
          },
          {
            name: "new min",
            value: 0.38,
          },
          {
            name: "new max",
            value: 0.28,
          },
          {
            name: "Easing index",
            value: 0,
          },
          {
            name: "Easing",
            value: "Linear",
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "Position X",
                portOut: "result",
                objIn: "21",
                objOut: "27",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Math.MapRange",
        id: "28",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "value",
          },
          {
            name: "old min",
            value: 0,
          },
          {
            name: "old max",
            value: 1,
          },
          {
            name: "new min",
            value: 0.1,
          },
          {
            name: "new max",
            value: -0.58,
          },
          {
            name: "Easing index",
            value: 0,
          },
          {
            name: "Easing",
            value: "Linear",
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "Position X",
                portOut: "result",
                objIn: "23",
                objOut: "28",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Value.Number",
        id: "29",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "value",
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "value",
                portOut: "result",
                objIn: "28",
                objOut: "29",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Value.Number",
        id: "30",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "value",
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "value",
                portOut: "result",
                objIn: "31",
                objOut: "30",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Math.MapRange",
        id: "31",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "value",
          },
          {
            name: "old min",
            value: 0,
          },
          {
            name: "old max",
            value: 1,
          },
          {
            name: "new min",
            value: 1.21,
          },
          {
            name: "new max",
            value: 1.58,
          },
          {
            name: "Easing index",
            value: 0,
          },
          {
            name: "Easing",
            value: "Linear",
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "amount",
                portOut: "result",
                objIn: "14",
                objOut: "31",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Sequence",
        id: "32",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "exe",
          },
          {
            name: "Clean up connections",
            value: 0,
          },
          {
            name: "exe 0",
            value: 0,
          },
          {
            name: "exe 1",
            value: 0,
          },
          {
            name: "exe 2",
            value: 0,
          },
          {
            name: "exe 3",
            value: 0,
          },
          {
            name: "exe 4",
            value: 0,
          },
          {
            name: "exe 5",
            value: 0,
          },
          {
            name: "exe 6",
            value: 0,
          },
          {
            name: "exe 7",
            value: 0,
          },
          {
            name: "exe 8",
            value: 0,
          },
          {
            name: "exe 9",
            value: 0,
          },
          {
            name: "exe 10",
            value: 0,
          },
          {
            name: "exe 11",
            value: 0,
          },
          {
            name: "exe 12",
            value: 0,
          },
          {
            name: "exe 13",
            value: 0,
          },
          {
            name: "exe 14",
            value: 0,
          },
        ],
        portsOut: [
          {
            name: "trigger 0",
            value: 0,
          },
          {
            name: "trigger 1",
            links: [
              {
                portIn: "Render",
                portOut: "trigger 1",
                objIn: "41",
                objOut: "32",
              },
            ],
          },
          {
            name: "trigger 2",
            value: 0,
          },
          {
            name: "trigger 3",
            links: [
              {
                portIn: "render",
                portOut: "trigger 3",
                objIn: "43",
                objOut: "32",
              },
            ],
          },
          {
            name: "trigger 4",
            links: [
              {
                portIn: "render",
                portOut: "trigger 4",
                objIn: "107",
                objOut: "32",
              },
            ],
          },
          {
            name: "trigger 5",
            links: [
              {
                portIn: "Render",
                portOut: "trigger 5",
                objIn: "110",
                objOut: "32",
              },
            ],
          },
          {
            name: "trigger 6",
            value: 0,
          },
          {
            name: "trigger 7",
            value: 0,
          },
          {
            name: "trigger 8",
            value: 0,
          },
          {
            name: "trigger 9",
            value: 0,
          },
          {
            name: "trigger 10",
            value: 0,
          },
          {
            name: "trigger 11",
            value: 0,
          },
          {
            name: "trigger 12",
            links: [
              {
                portIn: "render",
                portOut: "trigger 12",
                objIn: "49",
                objOut: "32",
              },
            ],
          },
          {
            name: "trigger 13",
            links: [
              {
                portIn: "Render",
                portOut: "trigger 13",
                objIn: "50",
                objOut: "32",
              },
            ],
          },
          {
            name: "trigger 14",
            links: [
              {
                portIn: "Render",
                portOut: "trigger 14",
                objIn: "56",
                objOut: "32",
              },
            ],
          },
          {
            name: "trigger 15",
            links: [
              {
                portIn: "render",
                portOut: "trigger 15",
                objIn: "102",
                objOut: "32",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Gl.MeshInstancer_v4",
        id: "33",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "exe",
          },
          {
            name: "geom",
          },
          {
            name: "Scale",
            value: -0.01,
          },
          {
            name: "Limit Instances",
            value: false,
          },
          {
            name: "Limit",
            value: 5488,
          },
          {
            name: "positions",
          },
          {
            name: "Scale Array",
            value: null,
            anim: {
              keys: [],
              loop: false,
            },
          },
          {
            name: "Rotations",
            value: null,
          },
          {
            name: "Rotation Type index",
            value: 0,
          },
          {
            name: "Rotation Type",
            value: "Quaternions",
          },
          {
            name: "Material blend mode index",
            value: 0,
          },
          {
            name: "Material blend mode",
            value: "Multiply",
          },
          {
            name: "Colors",
            value: null,
          },
          {
            name: "TexCoords",
          },
        ],
        portsOut: [
          {
            name: "Trigger Out",
            value: 0,
          },
          {
            name: "Num",
            value: 21285,
          },
        ],
      },
      {
        objName: "Ops.Gl.Meshes.Triangle",
        id: "34",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
            value: null,
          },
          {
            name: "width",
            value: 3,
          },
          {
            name: "height",
            value: 0.5,
          },
          {
            name: "Draw",
            value: true,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            value: 0,
          },
          {
            name: "geometry",
            links: [
              {
                portIn: "geom",
                portOut: "geometry",
                objIn: "33",
                objOut: "34",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Gl.Geometry.GeometryPoints",
        id: "35",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Geometry",
          },
        ],
        portsOut: [
          {
            name: "Vertices",
            links: [
              {
                portIn: "positions",
                portOut: "Vertices",
                objIn: "33",
                objOut: "35",
              },
            ],
          },
          {
            name: "Faces",
          },
          {
            name: "TexCoords",
            links: [
              {
                portIn: "TexCoords",
                portOut: "TexCoords",
                objIn: "33",
                objOut: "35",
              },
            ],
          },
          {
            name: "Vertex Colors",
          },
          {
            name: "Normals",
          },
          {
            name: "BiTangents",
          },
          {
            name: "Tangents",
          },
        ],
      },
      {
        objName: "Ops.Gl.ShaderEffects.InstancedDisplacementMap",
        id: "36",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Trigger",
          },
          {
            name: "Texture",
          },
          {
            name: "Source index",
            value: 0,
          },
          {
            name: "Source",
            value: "Model Pos",
          },
          {
            name: "Mode index",
            value: 0,
          },
          {
            name: "Mode",
            value: "Scale",
          },
          {
            name: "Strength",
          },
          {
            name: "Min",
            value: 0,
          },
          {
            name: "Scale",
            value: 2.22,
          },
          {
            name: "Clamp",
            value: false,
          },
          {
            name: "Colorize",
            value: false,
          },
          {
            name: "Debug Bounds",
            value: false,
          },
          {
            name: "Normalize",
            value: false,
          },
          {
            name: "Offset X",
            value: 0,
          },
          {
            name: "Offset Y",
            value: 0,
          },
          {
            name: "Abs",
            value: false,
          },
          {
            name: "Channel index",
            value: 0,
          },
          {
            name: "Channel",
            value: "RGB",
          },
          {
            name: "X",
            value: true,
          },
          {
            name: "Y",
            value: false,
          },
          {
            name: "Z",
            value: false,
          },
        ],
        portsOut: [
          {
            name: "Next",
            links: [
              {
                portIn: "exe",
                portOut: "Next",
                objIn: "33",
                objOut: "36",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Gl.Matrix.Transform",
        id: "37",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "posX",
            value: 0,
          },
          {
            name: "posY",
            value: 0,
          },
          {
            name: "posZ",
            value: 0,
          },
          {
            name: "scale",
            value: 3.22,
          },
          {
            name: "rotX",
            value: 90,
          },
          {
            name: "rotY",
            value: 0,
          },
          {
            name: "rotZ",
            value: 0,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            links: [
              {
                portIn: "Trigger",
                portOut: "trigger",
                objIn: "36",
                objOut: "37",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Gl.Matrix.Transform",
        id: "38",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "posX",
            value: 0,
          },
          {
            name: "posY",
            value: 0,
          },
          {
            name: "posZ",
            value: 0,
          },
          {
            name: "scale",
          },
          {
            name: "rotX",
            value: 0,
          },
          {
            name: "rotY",
            value: 0,
          },
          {
            name: "rotZ",
            value: 0,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            links: [
              {
                portIn: "render",
                portOut: "trigger",
                objIn: "60",
                objOut: "38",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Gl.ShaderEffects.TransformVertex",
        id: "39",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "Translate X",
            value: 0,
          },
          {
            name: "Translate Y",
            value: 0,
          },
          {
            name: "Translate Z",
            value: 0,
          },
          {
            name: "Scale X",
            value: 1,
          },
          {
            name: "Scale Y",
            value: 1,
          },
          {
            name: "Scale Z",
            value: 1,
          },
          {
            name: "Rotation X",
          },
          {
            name: "Rotation Y",
            value: 0,
          },
          {
            name: "Rotation Z",
          },
          {
            name: "Transform normals",
            value: false,
          },
        ],
        portsOut: [
          {
            name: "Trigger",
            links: [
              {
                portIn: "render",
                portOut: "Trigger",
                objIn: "37",
                objOut: "39",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Gl.TextureEffects.BrightnessContrast",
        id: "40",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "contrast",
          },
          {
            name: "brightness",
          },
        ],
        portsOut: [
          {
            name: "trigger",
            value: 0,
          },
        ],
      },
      {
        objName: "Ops.Gl.TextureEffects.ImageCompose_v2",
        id: "41",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Render",
          },
          {
            name: "Use viewport size",
            value: false,
          },
          {
            name: "Width",
            value: 512,
          },
          {
            name: "Height",
            value: 512,
          },
          {
            name: "Filter index",
            value: 1,
          },
          {
            name: "Filter",
            value: "mipmap",
          },
          {
            name: "Wrap index",
            value: 1,
          },
          {
            name: "Wrap",
            value: "repeat",
          },
          {
            name: "HDR",
            value: false,
          },
          {
            name: "Transparent",
            value: false,
          },
        ],
        portsOut: [
          {
            name: "Next",
            links: [
              {
                portIn: "render",
                portOut: "Next",
                objIn: "42",
                objOut: "41",
              },
            ],
          },
          {
            name: "texture_out",
            links: [
              {
                portIn: "texture",
                portOut: "texture_out",
                objIn: "44",
                objOut: "41",
              },
            ],
          },
          {
            name: "Aspect Ratio",
            value: 1,
          },
        ],
      },
      {
        objName: "Ops.Gl.TextureEffects.DrawImage_v3",
        id: "42",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "blendMode index",
            value: 0,
          },
          {
            name: "blendMode",
            value: "normal",
          },
          {
            name: "amount",
            value: 1,
          },
          {
            name: "Image",
          },
          {
            name: "removeAlphaSrc",
            value: false,
          },
          {
            name: "Mask",
            value: 0,
          },
          {
            name: "Mask Src index",
            value: 1,
          },
          {
            name: "Mask Src",
            value: "luminance",
          },
          {
            name: "Invert alpha channel",
            value: false,
          },
          {
            name: "Aspect Ratio",
            value: false,
          },
          {
            name: "Stretch Axis index",
            value: 0,
          },
          {
            name: "Stretch Axis",
            value: "X",
          },
          {
            name: "Position",
            value: 0,
          },
          {
            name: "Crop",
            value: false,
          },
          {
            name: "flip x",
            value: false,
          },
          {
            name: "flip y",
            value: false,
          },
          {
            name: "Transform",
            value: false,
          },
          {
            name: "Scale X",
            value: 1,
          },
          {
            name: "Scale Y",
            value: 1,
          },
          {
            name: "Position X",
            value: 0,
          },
          {
            name: "Position Y",
            value: 0,
          },
          {
            name: "Rotation",
            value: 0,
          },
          {
            name: "Clip Repeat",
            value: false,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            links: [
              {
                portIn: "render",
                portOut: "trigger",
                objIn: "40",
                objOut: "42",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Gl.Render2Texture",
        id: "43",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "use viewport size",
            value: false,
          },
          {
            name: "texture width",
            value: 1024,
          },
          {
            name: "texture height",
            value: 1024,
          },
          {
            name: "Auto Aspect",
            value: false,
          },
          {
            name: "filter index",
            value: 1,
          },
          {
            name: "filter",
            value: "linear",
          },
          {
            name: "Wrap index",
            value: 1,
          },
          {
            name: "Wrap",
            value: "Repeat",
          },
          {
            name: "MSAA index",
            value: 0,
          },
          {
            name: "MSAA",
            value: "none",
          },
          {
            name: "HDR",
            value: false,
          },
          {
            name: "Depth",
            value: false,
          },
          {
            name: "Clear",
            value: true,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            links: [
              {
                portIn: "render",
                portOut: "trigger",
                objIn: "103",
                objOut: "43",
              },
            ],
          },
          {
            name: "texture",
            links: [
              {
                portIn: "Image",
                portOut: "texture",
                objIn: "111",
                objOut: "43",
              },
            ],
          },
          {
            name: "textureDepth",
          },
        ],
      },
      {
        objName: "Ops.Gl.Shader.BasicMaterial_v3",
        id: "44",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "r",
            value: 1,
          },
          {
            name: "g",
            value: 1,
          },
          {
            name: "b",
            value: 1,
          },
          {
            name: "a",
            value: 1,
          },
          {
            name: "texture",
          },
          {
            name: "colorizeTexture",
            value: false,
          },
          {
            name: "textureOpacity",
            value: 0,
          },
          {
            name: "Alpha Mask Source index",
            value: 0,
          },
          {
            name: "Alpha Mask Source",
            value: "Luminance",
          },
          {
            name: "Opacity TexCoords Transform",
            value: false,
          },
          {
            name: "Discard Transparent Pixels",
            value: false,
          },
          {
            name: "diffuseRepeatX",
            value: 1,
          },
          {
            name: "diffuseRepeatY",
            value: 1,
          },
          {
            name: "Tex Offset X",
            value: 0,
          },
          {
            name: "Tex Offset Y",
            value: 0,
          },
          {
            name: "Crop TexCoords",
            value: false,
          },
          {
            name: "billboard",
            value: false,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            links: [
              {
                portIn: "render",
                portOut: "trigger",
                objIn: "22",
                objOut: "44",
              },
            ],
          },
          {
            name: "shader",
          },
        ],
      },
      {
        objName: "Ops.Gl.Shader.BasicMaterial_v3",
        id: "45",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "r",
            value: 0.8266666666666667,
          },
          {
            name: "g",
            value: 0.8266666666666667,
          },
          {
            name: "b",
            value: 0.8266666666666667,
          },
          {
            name: "a",
            value: 1,
          },
          {
            name: "texture",
            value: 0,
          },
          {
            name: "colorizeTexture",
            value: false,
          },
          {
            name: "textureOpacity",
            value: 0,
          },
          {
            name: "Alpha Mask Source index",
            value: 0,
          },
          {
            name: "Alpha Mask Source",
            value: "Luminance",
          },
          {
            name: "Opacity TexCoords Transform",
            value: false,
          },
          {
            name: "Discard Transparent Pixels",
            value: false,
          },
          {
            name: "diffuseRepeatX",
            value: 1,
          },
          {
            name: "diffuseRepeatY",
            value: 1,
          },
          {
            name: "Tex Offset X",
            value: 0,
          },
          {
            name: "Tex Offset Y",
            value: 0,
          },
          {
            name: "Crop TexCoords",
            value: false,
          },
          {
            name: "billboard",
            value: false,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            links: [
              {
                portIn: "render",
                portOut: "trigger",
                objIn: "39",
                objOut: "45",
              },
            ],
          },
          {
            name: "shader",
          },
        ],
      },
      {
        objName: "Ops.Value.Number",
        id: "46",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "value",
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "value",
                portOut: "result",
                objIn: "57",
                objOut: "46",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Value.Number",
        id: "47",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "value",
            value: 90,
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "Rotation X",
                portOut: "result",
                objIn: "39",
                objOut: "47",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Gl.Matrix.TranslateView",
        id: "48",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "x",
            value: 0.03,
          },
          {
            name: "y",
            value: 0,
          },
          {
            name: "z",
            value: 0,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            links: [
              {
                portIn: "exe",
                portOut: "trigger",
                objIn: "11",
                objOut: "48",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Gl.Render2Texture",
        id: "49",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "use viewport size",
            value: false,
          },
          {
            name: "texture width",
            value: 2048,
          },
          {
            name: "texture height",
            value: 2048,
          },
          {
            name: "Auto Aspect",
            value: false,
          },
          {
            name: "filter index",
            value: 1,
          },
          {
            name: "filter",
            value: "linear",
          },
          {
            name: "Wrap index",
            value: 1,
          },
          {
            name: "Wrap",
            value: "Repeat",
          },
          {
            name: "MSAA index",
            value: 0,
          },
          {
            name: "MSAA",
            value: "none",
          },
          {
            name: "HDR",
            value: false,
          },
          {
            name: "Depth",
            value: false,
          },
          {
            name: "Clear",
            value: true,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            links: [
              {
                portIn: "render",
                portOut: "trigger",
                objIn: "104",
                objOut: "49",
              },
            ],
          },
          {
            name: "texture",
            links: [
              {
                portIn: "Image",
                portOut: "texture",
                objIn: "77",
                objOut: "49",
              },
              {
                portIn: "Image",
                portOut: "texture",
                objIn: "51",
                objOut: "49",
              },
            ],
          },
          {
            name: "textureDepth",
          },
        ],
      },
      {
        objName: "Ops.Gl.TextureEffects.ImageCompose_v2",
        id: "50",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Render",
          },
          {
            name: "Use viewport size",
            value: false,
          },
          {
            name: "Width",
            value: 2048,
          },
          {
            name: "Height",
            value: 2048,
          },
          {
            name: "Filter index",
            value: 1,
          },
          {
            name: "Filter",
            value: "nearest",
          },
          {
            name: "Wrap index",
            value: 1,
          },
          {
            name: "Wrap",
            value: "repeat",
          },
          {
            name: "HDR",
            value: false,
          },
          {
            name: "Transparent",
            value: false,
          },
        ],
        portsOut: [
          {
            name: "Next",
            links: [
              {
                portIn: "render",
                portOut: "Next",
                objIn: "77",
                objOut: "50",
              },
            ],
          },
          {
            name: "texture_out",
          },
          {
            name: "Aspect Ratio",
            value: 1,
          },
        ],
      },
      {
        objName: "Ops.Gl.TextureEffects.DrawImage_v3",
        id: "51",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "blendMode index",
            value: 0,
          },
          {
            name: "blendMode",
            value: "normal",
          },
          {
            name: "amount",
            value: 1,
          },
          {
            name: "Image",
          },
          {
            name: "removeAlphaSrc",
            value: false,
          },
          {
            name: "Mask",
            value: 0,
          },
          {
            name: "Mask Src index",
            value: 1,
          },
          {
            name: "Mask Src",
            value: "luminance",
          },
          {
            name: "Invert alpha channel",
            value: false,
          },
          {
            name: "Aspect Ratio",
            value: false,
          },
          {
            name: "Stretch Axis index",
            value: 0,
          },
          {
            name: "Stretch Axis",
            value: "X",
          },
          {
            name: "Position",
            value: 0,
          },
          {
            name: "Crop",
            value: false,
          },
          {
            name: "flip x",
            value: false,
          },
          {
            name: "flip y",
            value: false,
          },
          {
            name: "Transform",
            value: true,
          },
          {
            name: "Scale X",
            value: 0.5,
          },
          {
            name: "Scale Y",
            value: 0.5,
          },
          {
            name: "Position X",
            value: 0,
          },
          {
            name: "Position Y",
            value: 0,
          },
          {
            name: "Rotation",
          },
          {
            name: "Clip Repeat",
            value: false,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            value: 0,
          },
        ],
      },
      {
        objName: "Ops.Gl.Meshes.FullscreenRectangle",
        id: "52",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "Center in Canvas",
            value: true,
          },
          {
            name: "Flip Y",
            value: false,
          },
          {
            name: "Flip X",
            value: false,
          },
          {
            name: "Texture",
          },
        ],
        portsOut: [
          {
            name: "trigger",
            value: 0,
          },
        ],
      },
      {
        objName: "Ops.Math.MapRange",
        id: "53",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "value",
          },
          {
            name: "old min",
            value: 0,
          },
          {
            name: "old max",
            value: 1,
          },
          {
            name: "new min",
            value: 0.07,
          },
          {
            name: "new max",
            value: -0.07,
          },
          {
            name: "Easing index",
            value: 0,
          },
          {
            name: "Easing",
            value: "Linear",
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "Translate Z",
                portOut: "result",
                objIn: "106",
                objOut: "53",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Value.Number",
        id: "54",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "value",
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "value",
                portOut: "result",
                objIn: "114",
                objOut: "54",
              },
              {
                portIn: "value",
                portOut: "result",
                objIn: "115",
                objOut: "54",
              },
              {
                portIn: "value",
                portOut: "result",
                objIn: "129",
                objOut: "54",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Value.Number",
        id: "55",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "value",
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "value",
                portOut: "result",
                objIn: "53",
                objOut: "55",
              },
              {
                portIn: "value",
                portOut: "result",
                objIn: "116",
                objOut: "55",
              },
              {
                portIn: "value",
                portOut: "result",
                objIn: "130",
                objOut: "55",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Gl.TextureEffects.ImageCompose_v2",
        id: "56",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Render",
          },
          {
            name: "Use viewport size",
            value: false,
          },
          {
            name: "Width",
            value: 512,
          },
          {
            name: "Height",
            value: 512,
          },
          {
            name: "Filter index",
            value: 1,
          },
          {
            name: "Filter",
            value: "nearest",
          },
          {
            name: "Wrap index",
            value: 1,
          },
          {
            name: "Wrap",
            value: "repeat",
          },
          {
            name: "HDR",
            value: false,
          },
          {
            name: "Transparent",
            value: false,
          },
        ],
        portsOut: [
          {
            name: "Next",
            links: [
              {
                portIn: "render",
                portOut: "Next",
                objIn: "51",
                objOut: "56",
              },
            ],
          },
          {
            name: "texture_out",
            links: [
              {
                portIn: "Texture",
                portOut: "texture_out",
                objIn: "52",
                objOut: "56",
              },
            ],
          },
          {
            name: "Aspect Ratio",
            value: 1,
          },
        ],
      },
      {
        objName: "Ops.Math.MapRange",
        id: "57",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "value",
          },
          {
            name: "old min",
            value: 0,
          },
          {
            name: "old max",
            value: 1,
          },
          {
            name: "new min",
            value: 0.07,
          },
          {
            name: "new max",
            value: 15,
          },
          {
            name: "Easing index",
            value: 0,
          },
          {
            name: "Easing",
            value: "Linear",
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "Rotation Z",
                portOut: "result",
                objIn: "39",
                objOut: "57",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Value.Number",
        id: "58",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "value",
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "value",
                portOut: "result",
                objIn: "59",
                objOut: "58",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Math.MapRange",
        id: "59",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "value",
          },
          {
            name: "old min",
            value: 0,
          },
          {
            name: "old max",
            value: 1,
          },
          {
            name: "new min",
            value: 2,
          },
          {
            name: "new max",
            value: 15,
          },
          {
            name: "Easing index",
            value: 0,
          },
          {
            name: "Easing",
            value: "Linear",
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "Scale",
                portOut: "result",
                objIn: "1",
                objOut: "59",
              },
              {
                portIn: "Scale",
                portOut: "result",
                objIn: "7",
                objOut: "59",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Gl.Meshes.Circle",
        id: "60",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "radius",
            value: 0.5,
          },
          {
            name: "innerRadius",
            value: 0.99,
          },
          {
            name: "segments",
            value: 40,
          },
          {
            name: "percent",
            value: 1,
          },
          {
            name: "steps",
            value: 0,
          },
          {
            name: "invertSteps",
            value: false,
          },
          {
            name: "mapping index",
            value: 0,
          },
          {
            name: "mapping",
            value: "flat",
          },
          {
            name: "Spline",
            value: false,
          },
          {
            name: "Draw",
            value: true,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            value: 0,
          },
          {
            name: "geometry",
          },
        ],
      },
      {
        objName: "Ops.Sequence",
        id: "61",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "exe",
          },
          {
            name: "Clean up connections",
            value: 0,
          },
          {
            name: "exe 0",
            value: 0,
          },
          {
            name: "exe 1",
            value: 0,
          },
          {
            name: "exe 2",
            value: 0,
          },
          {
            name: "exe 3",
            value: 0,
          },
          {
            name: "exe 4",
            value: 0,
          },
          {
            name: "exe 5",
            value: 0,
          },
          {
            name: "exe 6",
            value: 0,
          },
          {
            name: "exe 7",
            value: 0,
          },
          {
            name: "exe 8",
            value: 0,
          },
          {
            name: "exe 9",
            value: 0,
          },
          {
            name: "exe 10",
            value: 0,
          },
          {
            name: "exe 11",
            value: 0,
          },
          {
            name: "exe 12",
            value: 0,
          },
          {
            name: "exe 13",
            value: 0,
          },
          {
            name: "exe 14",
            value: 0,
          },
        ],
        portsOut: [
          {
            name: "trigger 0",
            links: [
              {
                portIn: "render",
                portOut: "trigger 0",
                objIn: "44",
                objOut: "61",
              },
            ],
          },
          {
            name: "trigger 1",
            value: 0,
          },
          {
            name: "trigger 2",
            value: 0,
          },
          {
            name: "trigger 3",
            value: 0,
          },
          {
            name: "trigger 4",
            value: 0,
          },
          {
            name: "trigger 5",
            value: 0,
          },
          {
            name: "trigger 6",
            value: 0,
          },
          {
            name: "trigger 7",
            value: 0,
          },
          {
            name: "trigger 8",
            value: 0,
          },
          {
            name: "trigger 9",
            value: 0,
          },
          {
            name: "trigger 10",
            value: 0,
          },
          {
            name: "trigger 11",
            value: 0,
          },
          {
            name: "trigger 12",
            value: 0,
          },
          {
            name: "trigger 13",
            value: 0,
          },
          {
            name: "trigger 14",
            value: 0,
          },
          {
            name: "trigger 15",
            value: 0,
          },
        ],
      },
      {
        objName: "Ops.Gl.Shader.BasicMaterial_v3",
        id: "62",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "r",
          },
          {
            name: "g",
          },
          {
            name: "b",
          },
          {
            name: "a",
            value: 1,
          },
          {
            name: "texture",
            value: 0,
          },
          {
            name: "colorizeTexture",
            value: false,
          },
          {
            name: "textureOpacity",
            value: 0,
          },
          {
            name: "Alpha Mask Source index",
            value: 0,
          },
          {
            name: "Alpha Mask Source",
            value: "Luminance",
          },
          {
            name: "Opacity TexCoords Transform",
            value: false,
          },
          {
            name: "Discard Transparent Pixels",
            value: false,
          },
          {
            name: "diffuseRepeatX",
            value: 1,
          },
          {
            name: "diffuseRepeatY",
            value: 1,
          },
          {
            name: "Tex Offset X",
            value: 0,
          },
          {
            name: "Tex Offset Y",
            value: 0,
          },
          {
            name: "Crop TexCoords",
            value: false,
          },
          {
            name: "billboard",
            value: false,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            links: [
              {
                portIn: "render",
                portOut: "trigger",
                objIn: "38",
                objOut: "62",
              },
            ],
          },
          {
            name: "shader",
          },
        ],
      },
      {
        objName: "Ops.Gl.Matrix.Transform",
        id: "63",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "posX",
            value: 0,
          },
          {
            name: "posY",
            value: 0,
          },
          {
            name: "posZ",
            value: 0.14,
          },
          {
            name: "scale",
          },
          {
            name: "rotX",
            value: 0,
          },
          {
            name: "rotY",
            value: 0,
          },
          {
            name: "rotZ",
            value: 0,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            links: [
              {
                portIn: "render",
                portOut: "trigger",
                objIn: "64",
                objOut: "63",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Gl.Meshes.Circle",
        id: "64",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "radius",
            value: 0.56,
          },
          {
            name: "innerRadius",
            value: 0.936,
          },
          {
            name: "segments",
            value: 40,
          },
          {
            name: "percent",
            value: 1,
          },
          {
            name: "steps",
            value: 0,
          },
          {
            name: "invertSteps",
            value: false,
          },
          {
            name: "mapping index",
            value: 0,
          },
          {
            name: "mapping",
            value: "flat",
          },
          {
            name: "Spline",
            value: false,
          },
          {
            name: "Draw",
            value: true,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            value: 0,
          },
          {
            name: "geometry",
          },
        ],
      },
      {
        objName: "Ops.Gl.Shader.BasicMaterial_v3",
        id: "65",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "r",
            value: 0,
          },
          {
            name: "g",
            value: 0,
          },
          {
            name: "b",
            value: 0,
          },
          {
            name: "a",
            value: 1,
          },
          {
            name: "texture",
            value: 0,
          },
          {
            name: "colorizeTexture",
            value: false,
          },
          {
            name: "textureOpacity",
            value: 0,
          },
          {
            name: "Alpha Mask Source index",
            value: 0,
          },
          {
            name: "Alpha Mask Source",
            value: "Luminance",
          },
          {
            name: "Opacity TexCoords Transform",
            value: false,
          },
          {
            name: "Discard Transparent Pixels",
            value: false,
          },
          {
            name: "diffuseRepeatX",
            value: 1,
          },
          {
            name: "diffuseRepeatY",
            value: 1,
          },
          {
            name: "Tex Offset X",
            value: 0,
          },
          {
            name: "Tex Offset Y",
            value: 0,
          },
          {
            name: "Crop TexCoords",
            value: false,
          },
          {
            name: "billboard",
            value: false,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            links: [
              {
                portIn: "render",
                portOut: "trigger",
                objIn: "63",
                objOut: "65",
              },
            ],
          },
          {
            name: "shader",
          },
        ],
      },
      {
        objName: "Ops.Anim.Timer_v2",
        id: "66",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Speed",
            value: 1.05,
          },
          {
            name: "Play",
            value: true,
          },
          {
            name: "Reset",
            value: 0,
          },
          {
            name: "Sync to timeline",
            value: false,
          },
        ],
        portsOut: [
          {
            name: "Time",
            links: [
              {
                portIn: "value",
                portOut: "Time",
                objIn: "67",
                objOut: "66",
              },
              {
                portIn: "value",
                portOut: "Time",
                objIn: "69",
                objOut: "66",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Math.Sine",
        id: "67",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "value",
          },
          {
            name: "phase",
            value: 0,
          },
          {
            name: "frequency",
            value: 1,
          },
          {
            name: "amplitude",
            value: 1,
          },
          {
            name: "asine",
            value: false,
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "number2",
                portOut: "result",
                objIn: "68",
                objOut: "67",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Math.Sum",
        id: "68",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "number1",
          },
          {
            name: "number2",
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "scale",
                portOut: "result",
                objIn: "63",
                objOut: "68",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Math.Sine",
        id: "69",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "value",
          },
          {
            name: "phase",
            value: 1,
          },
          {
            name: "frequency",
            value: 1.2,
          },
          {
            name: "amplitude",
            value: 0.8,
          },
          {
            name: "asine",
            value: false,
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "number2",
                portOut: "result",
                objIn: "70",
                objOut: "69",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Math.Sum",
        id: "70",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "number1",
          },
          {
            name: "number2",
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "scale",
                portOut: "result",
                objIn: "38",
                objOut: "70",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Math.MapRange",
        id: "71",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "value",
          },
          {
            name: "old min",
            value: 0,
          },
          {
            name: "old max",
            value: 1,
          },
          {
            name: "new min",
            value: -0.23,
          },
          {
            name: "new max",
            value: 0.48,
          },
          {
            name: "Easing index",
            value: 0,
          },
          {
            name: "Easing",
            value: "Linear",
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "Position Y",
                portOut: "result",
                objIn: "16",
                objOut: "71",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Value.Number",
        id: "72",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "value",
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "value",
                portOut: "result",
                objIn: "71",
                objOut: "72",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Math.MapRange",
        id: "73",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "value",
          },
          {
            name: "old min",
            value: 0,
          },
          {
            name: "old max",
            value: 1,
          },
          {
            name: "new min",
            value: 1.5,
          },
          {
            name: "new max",
            value: 2.4,
          },
          {
            name: "Easing index",
            value: 0,
          },
          {
            name: "Easing",
            value: "Linear",
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "number1",
                portOut: "result",
                objIn: "68",
                objOut: "73",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Value.Number",
        id: "74",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "value",
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "value",
                portOut: "result",
                objIn: "73",
                objOut: "74",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Math.MapRange",
        id: "75",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "value",
          },
          {
            name: "old min",
            value: 0,
          },
          {
            name: "old max",
            value: 1,
          },
          {
            name: "new min",
            value: 0.4,
          },
          {
            name: "new max",
            value: 1.44,
          },
          {
            name: "Easing index",
            value: 0,
          },
          {
            name: "Easing",
            value: "Linear",
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "number1",
                portOut: "result",
                objIn: "70",
                objOut: "75",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Value.Number",
        id: "76",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "value",
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "value",
                portOut: "result",
                objIn: "75",
                objOut: "76",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Gl.TextureEffects.DrawImage_v3",
        id: "77",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "blendMode index",
            value: 0,
          },
          {
            name: "blendMode",
            value: "normal",
          },
          {
            name: "amount",
            value: 1,
          },
          {
            name: "Image",
          },
          {
            name: "removeAlphaSrc",
            value: false,
          },
          {
            name: "Mask",
            value: 0,
          },
          {
            name: "Mask Src index",
            value: 1,
          },
          {
            name: "Mask Src",
            value: "alpha channel",
          },
          {
            name: "Invert alpha channel",
            value: false,
          },
          {
            name: "Aspect Ratio",
            value: false,
          },
          {
            name: "Stretch Axis index",
            value: 0,
          },
          {
            name: "Stretch Axis",
            value: "X",
          },
          {
            name: "Position",
            value: 0,
          },
          {
            name: "Crop",
            value: false,
          },
          {
            name: "flip x",
            value: false,
          },
          {
            name: "flip y",
            value: false,
          },
          {
            name: "Transform",
            value: true,
          },
          {
            name: "Scale X",
            value: 1,
          },
          {
            name: "Scale Y",
            value: 1,
          },
          {
            name: "Position X",
            value: 0,
          },
          {
            name: "Position Y",
            value: 0,
          },
          {
            name: "Rotation",
            value: 0,
          },
          {
            name: "Clip Repeat",
            value: false,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            value: 0,
          },
        ],
      },
      {
        objName: "Ops.Math.MapRange",
        id: "78",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "value",
          },
          {
            name: "old min",
            value: 0,
          },
          {
            name: "old max",
            value: 1,
          },
          {
            name: "new min",
            value: 0,
          },
          {
            name: "new max",
            value: 3.99,
          },
          {
            name: "Easing index",
            value: 0,
          },
          {
            name: "Easing",
            value: "Linear",
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "Integer",
                portOut: "result",
                objIn: "128",
                objOut: "78",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Value.Number",
        id: "79",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "value",
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "value",
                portOut: "result",
                objIn: "78",
                objOut: "79",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Vars.VarSetNumber_v2",
        id: "80",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Value",
            value: 0,
          },
          {
            name: "Variable",
            value: "ax1",
          },
          {
            name: "Create new variable",
            value: 0,
          },
          {
            name: "",
            value: ["Rename"],
          },
        ],
        portsOut: [],
      },
      {
        objName: "Ops.Vars.VarSetNumber_v2",
        id: "81",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Value",
            value: 0,
          },
          {
            name: "Variable",
            value: "fx3",
          },
          {
            name: "Create new variable",
            value: 0,
          },
          {
            name: "",
            value: ["Rename"],
          },
        ],
        portsOut: [],
      },
      {
        objName: "Ops.Vars.VarSetNumber_v2",
        id: "82",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Value",
            value: 0,
          },
          {
            name: "Variable",
            value: "fx4",
          },
          {
            name: "Create new variable",
            value: 0,
          },
          {
            name: "",
            value: ["Rename"],
          },
        ],
        portsOut: [],
      },
      {
        objName: "Ops.Vars.VarSetNumber_v2",
        id: "83",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Value",
            value: 0,
          },
          {
            name: "Variable",
            value: "fx5",
          },
          {
            name: "Create new variable",
            value: 0,
          },
          {
            name: "",
            value: ["Rename"],
          },
        ],
        portsOut: [],
      },
      {
        objName: "Ops.Vars.VarSetNumber_v2",
        id: "84",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Value",
            value: 0,
          },
          {
            name: "Variable",
            value: "fx6",
          },
          {
            name: "Create new variable",
            value: 0,
          },
          {
            name: "",
            value: ["Rename"],
          },
        ],
        portsOut: [],
      },
      {
        objName: "Ops.Vars.VarSetNumber_v2",
        id: "85",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Value",
            value: 0,
          },
          {
            name: "Variable",
            value: "fx7",
          },
          {
            name: "Create new variable",
            value: 0,
          },
          {
            name: "",
            value: ["Rename"],
          },
        ],
        portsOut: [],
      },
      {
        objName: "Ops.Vars.VarSetNumber_v2",
        id: "86",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Value",
            value: 0,
          },
          {
            name: "Variable",
            value: "ax2",
          },
          {
            name: "Create new variable",
            value: 0,
          },
          {
            name: "",
            value: ["Rename"],
          },
        ],
        portsOut: [],
      },
      {
        objName: "Ops.Vars.VarGetNumber_v2",
        id: "87",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Variable",
            value: "fx4",
          },
        ],
        portsOut: [
          {
            name: "Value",
            links: [
              {
                portIn: "value",
                portOut: "Value",
                objIn: "46",
                objOut: "87",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Vars.VarGetNumber_v2",
        id: "88",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Variable",
            value: "fx8",
          },
        ],
        portsOut: [
          {
            name: "Value",
            links: [
              {
                portIn: "value",
                portOut: "Value",
                objIn: "30",
                objOut: "88",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Vars.VarGetNumber_v2",
        id: "89",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Variable",
            value: "fx7",
          },
        ],
        portsOut: [
          {
            name: "Value",
            links: [
              {
                portIn: "value",
                portOut: "Value",
                objIn: "76",
                objOut: "89",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Vars.VarGetNumber_v2",
        id: "90",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Variable",
            value: "fx6",
          },
        ],
        portsOut: [
          {
            name: "Value",
            links: [
              {
                portIn: "value",
                portOut: "Value",
                objIn: "55",
                objOut: "90",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Vars.VarGetNumber_v2",
        id: "91",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Variable",
            value: "fx5",
          },
        ],
        portsOut: [
          {
            name: "Value",
            links: [
              {
                portIn: "value",
                portOut: "Value",
                objIn: "54",
                objOut: "91",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Vars.VarGetNumber_v2",
        id: "92",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Variable",
            value: "fx9",
          },
        ],
        portsOut: [
          {
            name: "Value",
            links: [
              {
                portIn: "value",
                portOut: "Value",
                objIn: "74",
                objOut: "92",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Vars.VarGetNumber_v2",
        id: "93",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Variable",
            value: "fx3",
          },
        ],
        portsOut: [
          {
            name: "Value",
            links: [
              {
                portIn: "value",
                portOut: "Value",
                objIn: "72",
                objOut: "93",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Vars.VarGetNumber_v2",
        id: "94",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Variable",
            value: "ax1",
          },
        ],
        portsOut: [
          {
            name: "Value",
            links: [
              {
                portIn: "value",
                portOut: "Value",
                objIn: "27",
                objOut: "94",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Vars.VarGetNumber_v2",
        id: "95",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Variable",
            value: "ax2",
          },
        ],
        portsOut: [
          {
            name: "Value",
            links: [
              {
                portIn: "value",
                portOut: "Value",
                objIn: "29",
                objOut: "95",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Vars.VarSetNumber_v2",
        id: "96",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Value",
            value: 0,
          },
          {
            name: "Variable",
            value: "fx8",
          },
          {
            name: "Create new variable",
            value: 0,
          },
          {
            name: "",
            value: ["Rename"],
          },
        ],
        portsOut: [],
      },
      {
        objName: "Ops.Vars.VarSetNumber_v2",
        id: "97",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Value",
            value: 0,
          },
          {
            name: "Variable",
            value: "fx9",
          },
          {
            name: "Create new variable",
            value: 0,
          },
          {
            name: "",
            value: ["Rename"],
          },
        ],
        portsOut: [],
      },
      {
        objName: "Ops.Vars.VarSetNumber_v2",
        id: "98",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Value",
            value: 0,
          },
          {
            name: "Variable",
            value: "fx10",
          },
          {
            name: "Create new variable",
            value: 0,
          },
          {
            name: "",
            value: ["Rename"],
          },
        ],
        portsOut: [],
      },
      {
        objName: "Ops.Vars.VarSetNumber_v2",
        id: "99",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Value",
            value: 0,
          },
          {
            name: "Variable",
            value: "fx11",
          },
          {
            name: "Create new variable",
            value: 0,
          },
          {
            name: "",
            value: ["Rename"],
          },
        ],
        portsOut: [],
      },
      {
        objName: "Ops.Vars.VarGetNumber_v2",
        id: "100",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Variable",
            value: "fx10",
          },
        ],
        portsOut: [
          {
            name: "Value",
            links: [
              {
                portIn: "value",
                portOut: "Value",
                objIn: "58",
                objOut: "100",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Vars.VarGetNumber_v2",
        id: "101",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Variable",
            value: "fx11",
          },
        ],
        portsOut: [
          {
            name: "Value",
            links: [
              {
                portIn: "value",
                portOut: "Value",
                objIn: "79",
                objOut: "101",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Gl.AspectRatio",
        id: "102",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "Aspect Ratio index",
            value: 0,
          },
          {
            name: "Aspect Ratio",
            value: "1",
          },
          {
            name: "Custom",
            value: 1.777777,
          },
          {
            name: "use viewport size",
            value: true,
          },
          {
            name: "texture width",
            value: 512,
          },
          {
            name: "texture height",
            value: 512,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            links: [
              {
                portIn: "render",
                portOut: "trigger",
                objIn: "52",
                objOut: "102",
              },
            ],
          },
          {
            name: "Width",
            value: 650,
          },
          {
            name: "Height",
            value: 650,
          },
        ],
      },
      {
        objName: "Ops.Gl.AspectRatio",
        id: "103",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "Aspect Ratio index",
            value: 0,
          },
          {
            name: "Aspect Ratio",
            value: "1",
          },
          {
            name: "Custom",
            value: 1.777777,
          },
          {
            name: "use viewport size",
            value: false,
          },
          {
            name: "texture width",
            value: 1024,
          },
          {
            name: "texture height",
            value: 1024,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            links: [
              {
                portIn: "render",
                portOut: "trigger",
                objIn: "105",
                objOut: "103",
              },
            ],
          },
          {
            name: "Width",
            value: 1024,
          },
          {
            name: "Height",
            value: 1024,
          },
        ],
      },
      {
        objName: "Ops.Gl.AspectRatio",
        id: "104",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "Aspect Ratio index",
            value: 0,
          },
          {
            name: "Aspect Ratio",
            value: "1",
          },
          {
            name: "Custom",
            value: 1.777777,
          },
          {
            name: "use viewport size",
            value: false,
          },
          {
            name: "texture width",
            value: 2048,
          },
          {
            name: "texture height",
            value: 2048,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            links: [
              {
                portIn: "render",
                portOut: "trigger",
                objIn: "45",
                objOut: "104",
              },
            ],
          },
          {
            name: "Width",
            value: 2048,
          },
          {
            name: "Height",
            value: 2048,
          },
        ],
      },
      {
        objName: "Ops.Gl.Matrix.Transform",
        id: "105",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "posX",
          },
          {
            name: "posY",
          },
          {
            name: "posZ",
            value: 0,
          },
          {
            name: "scale",
            value: 1.1,
          },
          {
            name: "rotX",
            value: 0,
          },
          {
            name: "rotY",
            value: 0,
          },
          {
            name: "rotZ",
            value: 0,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            links: [
              {
                portIn: "exe",
                portOut: "trigger",
                objIn: "61",
                objOut: "105",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Gl.Geometry.TransformGeometry",
        id: "106",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Geometry",
          },
          {
            name: "Translate X",
          },
          {
            name: "Translate Y",
            value: 0,
          },
          {
            name: "Translate Z",
          },
          {
            name: "Scale X",
            value: 0.7,
          },
          {
            name: "Scale Y",
            value: 0.7,
          },
          {
            name: "Scale Z",
            value: 0.7,
          },
          {
            name: "Rotation X",
            value: 0,
          },
          {
            name: "Rotation Y",
            value: 0,
          },
          {
            name: "Rotation Z",
            value: 0,
          },
        ],
        portsOut: [
          {
            name: "Result",
            links: [
              {
                portIn: "Geometry",
                portOut: "Result",
                objIn: "35",
                objOut: "106",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Gl.Render2Texture",
        id: "107",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "use viewport size",
            value: false,
          },
          {
            name: "texture width",
            value: 1024,
          },
          {
            name: "texture height",
            value: 1024,
          },
          {
            name: "Auto Aspect",
            value: false,
          },
          {
            name: "filter index",
            value: 1,
          },
          {
            name: "filter",
            value: "linear",
          },
          {
            name: "Wrap index",
            value: 1,
          },
          {
            name: "Wrap",
            value: "Repeat",
          },
          {
            name: "MSAA index",
            value: 0,
          },
          {
            name: "MSAA",
            value: "none",
          },
          {
            name: "HDR",
            value: false,
          },
          {
            name: "Depth",
            value: false,
          },
          {
            name: "Clear",
            value: true,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            links: [
              {
                portIn: "render",
                portOut: "trigger",
                objIn: "108",
                objOut: "107",
              },
            ],
          },
          {
            name: "texture",
            links: [
              {
                portIn: "Image",
                portOut: "texture",
                objIn: "112",
                objOut: "107",
              },
            ],
          },
          {
            name: "textureDepth",
          },
        ],
      },
      {
        objName: "Ops.Gl.AspectRatio",
        id: "108",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "Aspect Ratio index",
            value: 0,
          },
          {
            name: "Aspect Ratio",
            value: "1",
          },
          {
            name: "Custom",
            value: 1.777777,
          },
          {
            name: "use viewport size",
            value: false,
          },
          {
            name: "texture width",
            value: 1024,
          },
          {
            name: "texture height",
            value: 1024,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            links: [
              {
                portIn: "render",
                portOut: "trigger",
                objIn: "109",
                objOut: "108",
              },
            ],
          },
          {
            name: "Width",
            value: 1024,
          },
          {
            name: "Height",
            value: 1024,
          },
        ],
      },
      {
        objName: "Ops.Gl.Matrix.Transform",
        id: "109",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "posX",
          },
          {
            name: "posY",
          },
          {
            name: "posZ",
            value: 0,
          },
          {
            name: "scale",
            value: 1,
          },
          {
            name: "rotX",
            value: 0,
          },
          {
            name: "rotY",
            value: 0,
          },
          {
            name: "rotZ",
            value: 0,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            links: [
              {
                portIn: "render",
                portOut: "trigger",
                objIn: "62",
                objOut: "109",
              },
              {
                portIn: "render",
                portOut: "trigger",
                objIn: "65",
                objOut: "109",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Gl.TextureEffects.ImageCompose_v2",
        id: "110",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Render",
          },
          {
            name: "Use viewport size",
            value: false,
          },
          {
            name: "Width",
            value: 1024,
          },
          {
            name: "Height",
            value: 1024,
          },
          {
            name: "Filter index",
            value: 1,
          },
          {
            name: "Filter",
            value: "nearest",
          },
          {
            name: "Wrap index",
            value: 1,
          },
          {
            name: "Wrap",
            value: "repeat",
          },
          {
            name: "HDR",
            value: false,
          },
          {
            name: "Transparent",
            value: true,
          },
        ],
        portsOut: [
          {
            name: "Next",
            links: [
              {
                portIn: "render",
                portOut: "Next",
                objIn: "111",
                objOut: "110",
              },
            ],
          },
          {
            name: "texture_out",
            links: [
              {
                portIn: "Texture",
                portOut: "texture_out",
                objIn: "36",
                objOut: "110",
              },
            ],
          },
          {
            name: "Aspect Ratio",
            value: 1,
          },
        ],
      },
      {
        objName: "Ops.Gl.TextureEffects.DrawImage_v3",
        id: "111",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "blendMode index",
            value: 0,
          },
          {
            name: "blendMode",
            value: "normal",
          },
          {
            name: "amount",
            value: 1,
          },
          {
            name: "Image",
          },
          {
            name: "removeAlphaSrc",
            value: false,
          },
          {
            name: "Mask",
            value: 0,
          },
          {
            name: "Mask Src index",
            value: 1,
          },
          {
            name: "Mask Src",
            value: "luminance",
          },
          {
            name: "Invert alpha channel",
            value: false,
          },
          {
            name: "Aspect Ratio",
            value: false,
          },
          {
            name: "Stretch Axis index",
            value: 0,
          },
          {
            name: "Stretch Axis",
            value: "X",
          },
          {
            name: "Position",
            value: 0,
          },
          {
            name: "Crop",
            value: false,
          },
          {
            name: "flip x",
            value: false,
          },
          {
            name: "flip y",
            value: false,
          },
          {
            name: "Transform",
            value: false,
          },
          {
            name: "Scale X",
            value: 1,
          },
          {
            name: "Scale Y",
            value: 1,
          },
          {
            name: "Position X",
            value: 0,
          },
          {
            name: "Position Y",
            value: 0,
          },
          {
            name: "Rotation",
            value: 0,
          },
          {
            name: "Clip Repeat",
            value: false,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            links: [
              {
                portIn: "render",
                portOut: "trigger",
                objIn: "112",
                objOut: "111",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Gl.TextureEffects.DrawImage_v3",
        id: "112",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "render",
          },
          {
            name: "blendMode index",
            value: 0,
          },
          {
            name: "blendMode",
            value: "normal",
          },
          {
            name: "amount",
            value: 1,
          },
          {
            name: "Image",
          },
          {
            name: "removeAlphaSrc",
            value: false,
          },
          {
            name: "Mask",
            value: 0,
          },
          {
            name: "Mask Src index",
            value: 1,
          },
          {
            name: "Mask Src",
            value: "luminance",
          },
          {
            name: "Invert alpha channel",
            value: false,
          },
          {
            name: "Aspect Ratio",
            value: false,
          },
          {
            name: "Stretch Axis index",
            value: 0,
          },
          {
            name: "Stretch Axis",
            value: "X",
          },
          {
            name: "Position",
            value: 0,
          },
          {
            name: "Crop",
            value: false,
          },
          {
            name: "flip x",
            value: false,
          },
          {
            name: "flip y",
            value: false,
          },
          {
            name: "Transform",
            value: false,
          },
          {
            name: "Scale X",
            value: 1,
          },
          {
            name: "Scale Y",
            value: 1,
          },
          {
            name: "Position X",
            value: 0,
          },
          {
            name: "Position Y",
            value: 0,
          },
          {
            name: "Rotation",
            value: 0,
          },
          {
            name: "Clip Repeat",
            value: false,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            value: 0,
          },
        ],
      },
      {
        objName: "Ops.Value.SwitchNumber",
        id: "113",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Index",
          },
          {
            name: "Value 0",
            value: 0,
          },
          {
            name: "Value 1",
            value: 90,
          },
          {
            name: "Value 2",
            value: 180,
          },
          {
            name: "Value 3",
            value: 270,
          },
          {
            name: "Value 4",
            value: 0,
          },
          {
            name: "Value 5",
            value: 0,
          },
          {
            name: "Value 6",
            value: 0,
          },
          {
            name: "Value 7",
            value: 0,
          },
          {
            name: "Value 8",
            value: 0,
          },
          {
            name: "Value 9",
            value: 0,
          },
          {
            name: "Value 10",
            value: 0,
          },
          {
            name: "Value 11",
            value: 0,
          },
          {
            name: "Value 12",
            value: 0,
          },
          {
            name: "Value 13",
            value: 0,
          },
          {
            name: "Value 14",
            value: 0,
          },
          {
            name: "Value 15",
            value: 0,
          },
        ],
        portsOut: [
          {
            name: "Result",
            links: [
              {
                portIn: "Rotation",
                portOut: "Result",
                objIn: "51",
                objOut: "113",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Math.MapRange",
        id: "114",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "value",
          },
          {
            name: "old min",
            value: 0,
          },
          {
            name: "old max",
            value: 1,
          },
          {
            name: "new min",
            value: -0.07,
          },
          {
            name: "new max",
            value: 0.07,
          },
          {
            name: "Easing index",
            value: 0,
          },
          {
            name: "Easing",
            value: "Linear",
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "Translate X",
                portOut: "result",
                objIn: "106",
                objOut: "114",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Math.MapRange",
        id: "115",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "value",
          },
          {
            name: "old min",
            value: 0,
          },
          {
            name: "old max",
            value: 1,
          },
          {
            name: "new min",
            value: -0.26,
          },
          {
            name: "new max",
            value: 0.26,
          },
          {
            name: "Easing index",
            value: 0,
          },
          {
            name: "Easing",
            value: "Linear",
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "posX",
                portOut: "result",
                objIn: "105",
                objOut: "115",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Math.MapRange",
        id: "116",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "value",
          },
          {
            name: "old min",
            value: 0,
          },
          {
            name: "old max",
            value: 1,
          },
          {
            name: "new min",
            value: -0.23,
          },
          {
            name: "new max",
            value: 0.23,
          },
          {
            name: "Easing index",
            value: 0,
          },
          {
            name: "Easing",
            value: "Linear",
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "posY",
                portOut: "result",
                objIn: "105",
                objOut: "116",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Vars.VarSetNumber_v2",
        id: "117",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Value",
            value: 0,
          },
          {
            name: "Variable",
            value: "fx12",
          },
          {
            name: "Create new variable",
            value: 0,
          },
          {
            name: "",
            value: ["Rename"],
          },
        ],
        portsOut: [],
      },
      {
        objName: "Ops.Anim.Timer_v2",
        id: "118",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Speed",
            value: 0.22,
          },
          {
            name: "Play",
            value: true,
          },
          {
            name: "Reset",
            value: 0,
          },
          {
            name: "Sync to timeline",
            value: false,
          },
        ],
        portsOut: [
          {
            name: "Time",
            value: 4204.512807999645,
          },
        ],
      },
      {
        objName: "Ops.Vars.VarGetNumber_v2",
        id: "119",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Variable",
            value: "fx12",
          },
        ],
        portsOut: [
          {
            name: "Value",
            links: [
              {
                portIn: "value",
                portOut: "Value",
                objIn: "120",
                objOut: "119",
              },
              {
                portIn: "value",
                portOut: "Value",
                objIn: "121",
                objOut: "119",
              },
              {
                portIn: "value",
                portOut: "Value",
                objIn: "122",
                objOut: "119",
              },
              {
                portIn: "value",
                portOut: "Value",
                objIn: "131",
                objOut: "119",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Math.MapRange",
        id: "120",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "value",
          },
          {
            name: "old min",
            value: 0,
          },
          {
            name: "old max",
            value: 1,
          },
          {
            name: "new min",
            value: 0.488,
          },
          {
            name: "new max",
            value: 0.498,
          },
          {
            name: "Easing index",
            value: 0,
          },
          {
            name: "Easing",
            value: "Linear",
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "contrast",
                portOut: "result",
                objIn: "40",
                objOut: "120",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Math.MapRange",
        id: "121",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "value",
          },
          {
            name: "old min",
            value: 0,
          },
          {
            name: "old max",
            value: 1,
          },
          {
            name: "new min",
            value: 0.154,
          },
          {
            name: "new max",
            value: 0.523,
          },
          {
            name: "Easing index",
            value: 0,
          },
          {
            name: "Easing",
            value: "Linear",
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "brightness",
                portOut: "result",
                objIn: "40",
                objOut: "121",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Math.MapRange",
        id: "122",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "value",
          },
          {
            name: "old min",
            value: 0,
          },
          {
            name: "old max",
            value: 1,
          },
          {
            name: "new min",
            value: 0.08,
          },
          {
            name: "new max",
            value: 0.39,
          },
          {
            name: "Easing index",
            value: 0,
          },
          {
            name: "Easing",
            value: "Linear",
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "r",
                portOut: "result",
                objIn: "62",
                objOut: "122",
              },
              {
                portIn: "g",
                portOut: "result",
                objIn: "62",
                objOut: "122",
              },
              {
                portIn: "b",
                portOut: "result",
                objIn: "62",
                objOut: "122",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Gl.TextureEffects.Gradient",
        id: "123",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Render",
          },
          {
            name: "Blend Mode index",
            value: 0,
          },
          {
            name: "Blend Mode",
            value: "normal",
          },
          {
            name: "Amount",
            value: 1,
          },
          {
            name: "Width",
            value: 3.8,
          },
          {
            name: "Type index",
            value: 0,
          },
          {
            name: "Type",
            value: "X",
          },
          {
            name: "Pos",
            value: 0.234,
          },
          {
            name: "Smoothstep",
            value: true,
          },
          {
            name: "r",
            value: 1,
          },
          {
            name: "g",
            value: 1,
          },
          {
            name: "b",
            value: 1,
          },
          {
            name: "r2",
            value: 1,
          },
          {
            name: "g2",
            value: 1,
          },
          {
            name: "b2",
            value: 1,
          },
          {
            name: "r3",
            value: 0,
          },
          {
            name: "g3",
            value: 0,
          },
          {
            name: "b3",
            value: 0,
          },
          {
            name: "Randomize",
            value: 0,
          },
        ],
        portsOut: [
          {
            name: "Next",
            value: 0,
          },
        ],
      },
      {
        objName: "Ops.Gl.TextureEffects.ImageCompose_v2",
        id: "124",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Render",
          },
          {
            name: "Use viewport size",
            value: false,
          },
          {
            name: "Width",
            value: 512,
          },
          {
            name: "Height",
            value: 512,
          },
          {
            name: "Filter index",
            value: 1,
          },
          {
            name: "Filter",
            value: "linear",
          },
          {
            name: "Wrap index",
            value: 1,
          },
          {
            name: "Wrap",
            value: "clamp to edge",
          },
          {
            name: "HDR",
            value: false,
          },
          {
            name: "Transparent",
            value: false,
          },
        ],
        portsOut: [
          {
            name: "Next",
            links: [
              {
                portIn: "Render",
                portOut: "Next",
                objIn: "123",
                objOut: "124",
              },
            ],
          },
          {
            name: "texture_out",
            links: [
              {
                portIn: "Image",
                portOut: "texture_out",
                objIn: "21",
                objOut: "124",
              },
            ],
          },
          {
            name: "Aspect Ratio",
            value: 1,
          },
        ],
      },
      {
        objName: "Ops.Json3d.Mesh3d",
        id: "125",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Render",
          },
          {
            name: "file",
            value: "assets/novairisUV.3d.json",
            display: "file",
          },
          {
            name: "Mesh Index",
            value: 0,
          },
          {
            name: "Calculate Normals index",
            value: 0,
          },
          {
            name: "Calculate Normals",
            value: "no",
          },
          {
            name: "Resize",
            value: true,
          },
          {
            name: "New Size",
            value: 1,
          },
          {
            name: "Center",
            value: true,
          },
          {
            name: "Merge All",
            value: false,
          },
          {
            name: "Draw",
            value: true,
          },
        ],
        portsOut: [
          {
            name: "trigger",
            value: 0,
          },
          {
            name: "Geometry",
            links: [
              {
                portIn: "Geometry",
                portOut: "Geometry",
                objIn: "106",
                objOut: "125",
              },
            ],
          },
          {
            name: "Scaling",
            value: 0.13706835502771397,
          },
          {
            name: "Mesh Name",
            value: "novairisUV",
          },
        ],
      },
      {
        objName: "Ops.Math.Multiply",
        id: "126",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "number1",
          },
          {
            name: "number2",
            value: -1,
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "X",
                portOut: "result",
                objIn: "1",
                objOut: "126",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Math.Multiply",
        id: "127",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "number1",
          },
          {
            name: "number2",
            value: -0.5,
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "X",
                portOut: "result",
                objIn: "7",
                objOut: "127",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Value.Integer",
        id: "128",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "Integer",
          },
        ],
        portsOut: [
          {
            name: "Number out",
            links: [
              {
                portIn: "Index",
                portOut: "Number out",
                objIn: "113",
                objOut: "128",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Math.MapRange",
        id: "129",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "value",
          },
          {
            name: "old min",
            value: 0,
          },
          {
            name: "old max",
            value: 1,
          },
          {
            name: "new min",
            value: -0.25,
          },
          {
            name: "new max",
            value: 0.25,
          },
          {
            name: "Easing index",
            value: 0,
          },
          {
            name: "Easing",
            value: "Linear",
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "posX",
                portOut: "result",
                objIn: "109",
                objOut: "129",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Math.MapRange",
        id: "130",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "value",
          },
          {
            name: "old min",
            value: 0,
          },
          {
            name: "old max",
            value: 1,
          },
          {
            name: "new min",
            value: -0.25,
          },
          {
            name: "new max",
            value: 0.25,
          },
          {
            name: "Easing index",
            value: 0,
          },
          {
            name: "Easing",
            value: "Linear",
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "posY",
                portOut: "result",
                objIn: "109",
                objOut: "130",
              },
            ],
          },
        ],
      },
      {
        objName: "Ops.Math.MapRange",
        id: "131",
        uiAttribs: {
          subPatch: 0,
        },
        portsIn: [
          {
            name: "value",
          },
          {
            name: "old min",
            value: 0,
          },
          {
            name: "old max",
            value: 1,
          },
          {
            name: "new min",
            value: 0.5,
          },
          {
            name: "new max",
            value: 1,
          },
          {
            name: "Easing index",
            value: 0,
          },
          {
            name: "Easing",
            value: "Linear",
          },
        ],
        portsOut: [
          {
            name: "result",
            links: [
              {
                portIn: "Strength",
                portOut: "result",
                objIn: "36",
                objOut: "131",
              },
            ],
          },
        ],
      },
    ],
    users: [],
    userOps: [],
    tags: [],
    _id: "61fe744115ab9b228493a5f5",
    name: "CATARACT_2",
    userId: "61b09eec69154b5a9a1d6ab4",
    created: "2022-02-05T12:57:37.242Z",
    cloneOf: "61b4bcacc94f506a30f75218",
    updated: "2022-02-05T20:15:27.916Z",
    log: [
      {
        _id: "61fe744115ab9b228493a5f7",
        key: "collabsatcreate",
        text: "initial list of collaborators:",
      },
    ],
    __v: 32,
    shortId: "ZXxZ9X",
    buildInfo: {
      ui: {
        timestamp: 1642093519649,
        created: "2022-01-13T17:05:19.649Z",
        git: {
          branch: "master",
          commit: "4915a0a526ca85fa926ed6750446328f8fc1e649",
          date: "2021-11-30T10:48:51.000Z",
          message: "icons",
        },
      },
      host: "cables.gl",
    },
    opsHash: "f02a01da35936f0609d206ccf4afa5a1306bb9e6",
    ui: {
      timeLineLength: 20,
      bookmarks: [],
      viewBoxesGl: {
        0: {
          x: -1148.0716138998985,
          y: -583.9449207644004,
          z: 1650.0713282922566,
        },
      },
      renderer: {
        w: 650,
        h: 670,
        s: 1,
      },
    },
    updatedByUser: "aagxd",
    deployments: {
      lastDeployment: {
        date: 1644092135381,
        service: "download",
      },
    },
    exports: 23,
  };
  if (!CABLES.exportedPatch) {
    CABLES.exportedPatch = CABLES.exportedPatches["ZXxZ9X"];
  }
  ("use strict");
  var CABLES = CABLES || {};
  CABLES.OPS = CABLES.OPS || {};
  var Ops = Ops || {};
  Ops.Gl = Ops.Gl || {};
  Ops.Anim = Ops.Anim || {};
  Ops.Math = Ops.Math || {};
  Ops.Vars = Ops.Vars || {};
  Ops.Value = Ops.Value || {};
  Ops.Json3d = Ops.Json3d || {};
  Ops.Gl.Matrix = Ops.Gl.Matrix || {};
  Ops.Gl.Meshes = Ops.Gl.Meshes || {};
  Ops.Gl.Shader = Ops.Gl.Shader || {};
  Ops.Gl.Geometry = Ops.Gl.Geometry || {};
  Ops.Gl.ShaderEffects = Ops.Gl.ShaderEffects || {};
  Ops.Gl.TextureEffects = Ops.Gl.TextureEffects || {};
  Ops.Gl.TextureEffects.Noise = Ops.Gl.TextureEffects.Noise || {};
  Ops.Gl.MainLoop = function () {
    CABLES.Op.apply(this, arguments);
    const a = this;
    const e = {};
    const t = a.inValue("FPS Limit", 0);
    const n = a.outTrigger("trigger");
    const r = a.outValue("width");
    const o = a.outValue("height");
    const i = a.inValueBool("Reduce FPS not focussed", true);
    const s = a.inValueBool("Reduce FPS loading");
    const l = a.inValueBool("Clear", true);
    const u = a.inValueBool("ClearAlpha", true);
    const m = a.inValueBool("Fullscreen Button", false);
    const f = a.inValueBool("Active", true);
    const c = a.inValueBool("Hires Displays", false);
    a.onAnimFrame = C;
    c.onChange = function () {
      if (c.get()) a.patch.cgl.pixelDensity = window.devicePixelRatio;
      else a.patch.cgl.pixelDensity = 1;
      a.patch.cgl.updateSize();
      if (CABLES.UI) gui.setLayout();
    };
    f.onChange = function () {
      a.patch.removeOnAnimFrame(a);
      if (f.get()) {
        a.setUiAttrib({
          extendTitle: "",
        });
        a.onAnimFrame = C;
        a.patch.addOnAnimFrame(a);
        a.log("adding again!");
      } else {
        a.setUiAttrib({
          extendTitle: "Inactive",
        });
      }
    };
    const d = a.patch.cgl;
    let p = 0;
    let g = 0;
    if (!a.patch.cgl)
      a.uiAttr({
        error: "No webgl cgl context",
      });
    const v = vec3.create();
    vec3.set(v, 0, 0, 0);
    const h = vec3.create();
    vec3.set(h, 0, 0, -2);
    m.onChange = M;
    setTimeout(M, 100);
    let O = null;
    let x = true;
    let b = true;
    window.addEventListener("blur", () => {
      x = false;
    });
    window.addEventListener("focus", () => {
      x = true;
    });
    document.addEventListener("visibilitychange", () => {
      b = !document.hidden;
    });
    function _() {
      if (s.get() && a.patch.loading.getProgress() < 1) return 5;
      if (i.get()) {
        if (!b) return 10;
        if (!x) return 30;
      }
      return t.get();
    }
    function M() {
      function e() {
        if (O) O.style.display = "block";
      }
      function t() {
        if (O) O.style.display = "none";
      }
      a.patch.cgl.canvas.addEventListener("mouseleave", t);
      a.patch.cgl.canvas.addEventListener("mouseenter", e);
      if (m.get()) {
        if (!O) {
          O = document.createElement("div");
          const n = a.patch.cgl.canvas.parentElement;
          if (n) n.appendChild(O);
          O.addEventListener("mouseenter", e);
          O.addEventListener("click", function (e) {
            if (CABLES.UI && !e.shiftKey) gui.cycleFullscreen();
            else d.fullScreen();
          });
        }
        O.style.padding = "10px";
        O.style.position = "absolute";
        O.style.right = "5px";
        O.style.top = "5px";
        O.style.width = "20px";
        O.style.height = "20px";
        O.style.cursor = "pointer";
        O.style["border-radius"] = "40px";
        O.style.background = "#444";
        O.style["z-index"] = "9999";
        O.style.display = "none";
        O.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 490 490" style="width:20px;height:20px;" xml:space="preserve" width="512px" height="512px"><g><path d="M173.792,301.792L21.333,454.251v-80.917c0-5.891-4.776-10.667-10.667-10.667C4.776,362.667,0,367.442,0,373.333V480     c0,5.891,4.776,10.667,10.667,10.667h106.667c5.891,0,10.667-4.776,10.667-10.667s-4.776-10.667-10.667-10.667H36.416     l152.459-152.459c4.093-4.237,3.975-10.99-0.262-15.083C184.479,297.799,177.926,297.799,173.792,301.792z" fill="#FFFFFF"/><path d="M480,0H373.333c-5.891,0-10.667,4.776-10.667,10.667c0,5.891,4.776,10.667,10.667,10.667h80.917L301.792,173.792     c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262c0.089-0.086,0.176-0.173,0.262-0.262     L469.333,36.416v80.917c0,5.891,4.776,10.667,10.667,10.667s10.667-4.776,10.667-10.667V10.667C490.667,4.776,485.891,0,480,0z" fill="#FFFFFF"/><path d="M36.416,21.333h80.917c5.891,0,10.667-4.776,10.667-10.667C128,4.776,123.224,0,117.333,0H10.667     C4.776,0,0,4.776,0,10.667v106.667C0,123.224,4.776,128,10.667,128c5.891,0,10.667-4.776,10.667-10.667V36.416l152.459,152.459     c4.237,4.093,10.99,3.975,15.083-0.262c3.992-4.134,3.992-10.687,0-14.82L36.416,21.333z" fill="#FFFFFF"/><path d="M480,362.667c-5.891,0-10.667,4.776-10.667,10.667v80.917L316.875,301.792c-4.237-4.093-10.99-3.976-15.083,0.261     c-3.993,4.134-3.993,10.688,0,14.821l152.459,152.459h-80.917c-5.891,0-10.667,4.776-10.667,10.667s4.776,10.667,10.667,10.667     H480c5.891,0,10.667-4.776,10.667-10.667V373.333C490.667,367.442,485.891,362.667,480,362.667z" fill="#FFFFFF"/></g></svg>';
      } else {
        if (O) {
          O.style.display = "none";
          O.remove();
          O = null;
        }
      }
    }
    a.onDelete = function () {
      d.gl.clearColor(0, 0, 0, 0);
      d.gl.clear(d.gl.COLOR_BUFFER_BIT | d.gl.DEPTH_BUFFER_BIT);
    };
    function C(e) {
      if (!f.get()) return;
      if (d.aborted || d.canvas.clientWidth === 0 || d.canvas.clientHeight === 0)
        return;
      const t = performance.now();
      a.patch.config.fpsLimit = _();
      if (d.canvasWidth == -1) {
        d.setCanvas(a.patch.config.glCanvasId);
        return;
      }
      if (d.canvasWidth != r.get() || d.canvasHeight != o.get()) {
        r.set(d.canvasWidth);
        o.set(d.canvasHeight);
      }
      if (CABLES.now() - g > 1e3) {
        CGL.fpsReport = CGL.fpsReport || [];
        if (a.patch.loading.getProgress() >= 1 && g !== 0) CGL.fpsReport.push(p);
        p = 0;
        g = CABLES.now();
      }
      CGL.MESH.lastShader = null;
      CGL.MESH.lastMesh = null;
      d.renderStart(d, v, h);
      if (l.get()) {
        d.gl.clearColor(0, 0, 0, 1);
        d.gl.clear(d.gl.COLOR_BUFFER_BIT | d.gl.DEPTH_BUFFER_BIT);
      }
      n.trigger();
      if (CGL.MESH.lastMesh) CGL.MESH.lastMesh.unBind();
      if (CGL.Texture.previewTexture) {
        if (!CGL.Texture.texturePreviewer)
          CGL.Texture.texturePreviewer = new CGL.Texture.texturePreview(d);
        CGL.Texture.texturePreviewer.render(CGL.Texture.previewTexture);
      }
      d.renderEnd(d);
      if (u.get()) {
        d.gl.clearColor(1, 1, 1, 1);
        d.gl.colorMask(false, false, false, true);
        d.gl.clear(d.gl.COLOR_BUFFER_BIT);
        d.gl.colorMask(true, true, true, true);
      }
      if (!d.frameStore.phong) d.frameStore.phong = {};
      p++;
      a.patch.cgl.profileData.profileMainloopMs = performance.now() - t;
    }
  };
  Ops.Gl.MainLoop.prototype = new CABLES.Op();
  CABLES.OPS["b0472a1d-db16-4ba6-8787-f300fbdc77bb"] = {
    f: Ops.Gl.MainLoop,
    objName: "Ops.Gl.MainLoop",
  };
  Ops.Gl.TextureEffects.Noise.PerlinNoise = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = {
      perlinnoise3d_frag:
        'UNI float z;\nUNI float x;\nUNI float y;\nUNI float scale;\nIN vec2 texCoord;\nUNI sampler2D tex;\n\nUNI float amount;\n\n{{CGL.BLENDMODES}}\n\n\nfloat Interpolation_C2( float x ) { return x * x * x * (x * (x * 6.0 - 15.0) + 10.0); }   //  6x^5-15x^4+10x^3\t( Quintic Curve.  As used by Perlin in Improved Noise.  http://mrl.nyu.edu/~perlin/paper445.pdf )\nvec2 Interpolation_C2( vec2 x ) { return x * x * x * (x * (x * 6.0 - 15.0) + 10.0); }\nvec3 Interpolation_C2( vec3 x ) { return x * x * x * (x * (x * 6.0 - 15.0) + 10.0); }\nvec4 Interpolation_C2( vec4 x ) { return x * x * x * (x * (x * 6.0 - 15.0) + 10.0); }\nvec4 Interpolation_C2_InterpAndDeriv( vec2 x ) { return x.xyxy * x.xyxy * ( x.xyxy * ( x.xyxy * ( x.xyxy * vec2( 6.0, 0.0 ).xxyy + vec2( -15.0, 30.0 ).xxyy ) + vec2( 10.0, -60.0 ).xxyy ) + vec2( 0.0, 30.0 ).xxyy ); }\nvec3 Interpolation_C2_Deriv( vec3 x ) { return x * x * (x * (x * 30.0 - 60.0) + 30.0); }\n\n\nvoid FAST32_hash_3D( \tvec3 gridcell,\n                        out vec4 lowz_hash_0,\n                        out vec4 lowz_hash_1,\n                        out vec4 lowz_hash_2,\n                        out vec4 highz_hash_0,\n                        out vec4 highz_hash_1,\n                        out vec4 highz_hash_2\t)\t\t//\tgenerates 3 random numbers for each of the 8 cell corners\n{\n    //    gridcell is assumed to be an integer coordinate\n\n    //\tTODO: \tthese constants need tweaked to find the best possible noise.\n    //\t\t\tprobably requires some kind of brute force computational searching or something....\n    const vec2 OFFSET = vec2( 50.0, 161.0 );\n    const float DOMAIN = 69.0;\n    const vec3 SOMELARGEFLOATS = vec3( 635.298681, 682.357502, 668.926525 );\n    const vec3 ZINC = vec3( 48.500388, 65.294118, 63.934599 );\n\n    //\ttruncate the domain\n    gridcell.xyz = gridcell.xyz - floor(gridcell.xyz * ( 1.0 / DOMAIN )) * DOMAIN;\n    vec3 gridcell_inc1 = step( gridcell, vec3( DOMAIN - 1.5 ) ) * ( gridcell + 1.0 );\n\n    //\tcalculate the noise\n    vec4 P = vec4( gridcell.xy, gridcell_inc1.xy ) + OFFSET.xyxy;\n    P *= P;\n    P = P.xzxz * P.yyww;\n    vec3 lowz_mod = vec3( 1.0 / ( SOMELARGEFLOATS.xyz + gridcell.zzz * ZINC.xyz ) );\n    vec3 highz_mod = vec3( 1.0 / ( SOMELARGEFLOATS.xyz + gridcell_inc1.zzz * ZINC.xyz ) );\n    lowz_hash_0 = fract( P * lowz_mod.xxxx );\n    highz_hash_0 = fract( P * highz_mod.xxxx );\n    lowz_hash_1 = fract( P * lowz_mod.yyyy );\n    highz_hash_1 = fract( P * highz_mod.yyyy );\n    lowz_hash_2 = fract( P * lowz_mod.zzzz );\n    highz_hash_2 = fract( P * highz_mod.zzzz );\n}\n\n//\n//\tPerlin Noise 3D  ( gradient noise )\n//\tReturn value range of -1.0->1.0\n//\thttp://briansharpe.files.wordpress.com/2011/11/perlinsample.jpg\n//\nfloat Perlin3D( vec3 P )\n{\n    //\testablish our grid cell and unit position\n    vec3 Pi = floor(P);\n    vec3 Pf = P - Pi;\n    vec3 Pf_min1 = Pf - 1.0;\n\n#if 1\n    //\n    //\tclassic noise.\n    //\trequires 3 random values per point.  with an efficent hash function will run faster than improved noise\n    //\n\n    //\tcalculate the hash.\n    //\t( various hashing methods listed in order of speed )\n    vec4 hashx0, hashy0, hashz0, hashx1, hashy1, hashz1;\n    FAST32_hash_3D( Pi, hashx0, hashy0, hashz0, hashx1, hashy1, hashz1 );\n    //SGPP_hash_3D( Pi, hashx0, hashy0, hashz0, hashx1, hashy1, hashz1 );\n\n    //\tcalculate the gradients\n    vec4 grad_x0 = hashx0 - 0.49999;\n    vec4 grad_y0 = hashy0 - 0.49999;\n    vec4 grad_z0 = hashz0 - 0.49999;\n    vec4 grad_x1 = hashx1 - 0.49999;\n    vec4 grad_y1 = hashy1 - 0.49999;\n    vec4 grad_z1 = hashz1 - 0.49999;\n    vec4 grad_results_0 = inversesqrt( grad_x0 * grad_x0 + grad_y0 * grad_y0 + grad_z0 * grad_z0 ) * ( vec2( Pf.x, Pf_min1.x ).xyxy * grad_x0 + vec2( Pf.y, Pf_min1.y ).xxyy * grad_y0 + Pf.zzzz * grad_z0 );\n    vec4 grad_results_1 = inversesqrt( grad_x1 * grad_x1 + grad_y1 * grad_y1 + grad_z1 * grad_z1 ) * ( vec2( Pf.x, Pf_min1.x ).xyxy * grad_x1 + vec2( Pf.y, Pf_min1.y ).xxyy * grad_y1 + Pf_min1.zzzz * grad_z1 );\n\n#if 1\n    //\tClassic Perlin Interpolation\n    vec3 blend = Interpolation_C2( Pf );\n    vec4 res0 = mix( grad_results_0, grad_results_1, blend.z );\n    vec4 blend2 = vec4( blend.xy, vec2( 1.0 - blend.xy ) );\n    float final = dot( res0, blend2.zxzx * blend2.wwyy );\n    final *= 1.1547005383792515290182975610039;\t\t//\t(optionally) scale things to a strict -1.0->1.0 range    *= 1.0/sqrt(0.75)\n    return final;\n#else\n    //\tClassic Perlin Surflet\n    //\thttp://briansharpe.wordpress.com/2012/03/09/modifications-to-classic-perlin-noise/\n    Pf *= Pf;\n    Pf_min1 *= Pf_min1;\n    vec4 vecs_len_sq = vec4( Pf.x, Pf_min1.x, Pf.x, Pf_min1.x ) + vec4( Pf.yy, Pf_min1.yy );\n    float final = dot( Falloff_Xsq_C2( min( vec4( 1.0 ), vecs_len_sq + Pf.zzzz ) ), grad_results_0 ) + dot( Falloff_Xsq_C2( min( vec4( 1.0 ), vecs_len_sq + Pf_min1.zzzz ) ), grad_results_1 );\n    final *= 2.3703703703703703703703703703704;\t\t//\t(optionally) scale things to a strict -1.0->1.0 range    *= 1.0/cube(0.75)\n    return final;\n#endif\n\n#else\n    //\n    //\timproved noise.\n    //\trequires 1 random value per point.  Will run faster than classic noise if a slow hashing function is used\n    //\n\n    //\tcalculate the hash.\n    //\t( various hashing methods listed in order of speed )\n    vec4 hash_lowz, hash_highz;\n    FAST32_hash_3D( Pi, hash_lowz, hash_highz );\n    //BBS_hash_3D( Pi, hash_lowz, hash_highz );\n    //SGPP_hash_3D( Pi, hash_lowz, hash_highz );\n\n    //\n    //\t"improved" noise using 8 corner gradients.  Faster than the 12 mid-edge point method.\n    //\tKen mentions using diagonals like this can cause "clumping", but we\'ll live with that.\n    //\t[1,1,1]  [-1,1,1]  [1,-1,1]  [-1,-1,1]\n    //\t[1,1,-1] [-1,1,-1] [1,-1,-1] [-1,-1,-1]\n    //\n    hash_lowz -= 0.5;\n    vec4 grad_results_0_0 = vec2( Pf.x, Pf_min1.x ).xyxy * sign( hash_lowz );\n    hash_lowz = abs( hash_lowz ) - 0.25;\n    vec4 grad_results_0_1 = vec2( Pf.y, Pf_min1.y ).xxyy * sign( hash_lowz );\n    vec4 grad_results_0_2 = Pf.zzzz * sign( abs( hash_lowz ) - 0.125 );\n    vec4 grad_results_0 = grad_results_0_0 + grad_results_0_1 + grad_results_0_2;\n\n    hash_highz -= 0.5;\n    vec4 grad_results_1_0 = vec2( Pf.x, Pf_min1.x ).xyxy * sign( hash_highz );\n    hash_highz = abs( hash_highz ) - 0.25;\n    vec4 grad_results_1_1 = vec2( Pf.y, Pf_min1.y ).xxyy * sign( hash_highz );\n    vec4 grad_results_1_2 = Pf_min1.zzzz * sign( abs( hash_highz ) - 0.125 );\n    vec4 grad_results_1 = grad_results_1_0 + grad_results_1_1 + grad_results_1_2;\n\n    //\tblend the gradients and return\n    vec3 blend = Interpolation_C2( Pf );\n    vec4 res0 = mix( grad_results_0, grad_results_1, blend.z );\n    vec4 blend2 = vec4( blend.xy, vec2( 1.0 - blend.xy ) );\n    return dot( res0, blend2.zxzx * blend2.wwyy ) * (2.0 / 3.0);\t//\t(optionally) mult by (2.0/3.0) to scale to a strict -1.0->1.0 range\n#endif\n}\n\nvoid main()\n{\n    vec4 base=texture(tex,texCoord);\n    vec2 p=vec2(texCoord.x-0.5,texCoord.y-0.5);\n\n    p=p*scale;\n    p=vec2(p.x+0.5-x,p.y+0.5-y);\n\n    float aa=texture(tex,texCoord).r;\n    float v=Perlin3D(vec3(p.x,p.y,z))*0.5+0.5;\n    float v2=v;\n    float v3=v;\n\n    #ifdef RGB\n        v2=Perlin3D(vec3(p.x*2.0,p.y*2.0,z))*0.5+0.5;\n        v3=Perlin3D(vec3(p.x*3.0,p.y*3.0,z))*0.5+0.5;\n    #endif\n\n    vec4 col=vec4(v,v2,v3,1.0);\n\n\n    outColor=cgl_blend(base,col,amount);\n}\n',
    };
    const n = e.inTrigger("render"),
      a = CGL.TextureEffect.AddBlendSelect(e, "Blend Mode", "normal"),
      r = e.inValueSlider("Amount", 1),
      o = e.inSwitch("Color", ["Mono", "RGB"], "Mono"),
      i = e.inValue("Scale", 22),
      s = e.inValue("X", 0),
      l = e.inValue("Y", 0),
      u = e.inValue("Z", 0),
      m = e.outTrigger("trigger");
    const f = e.patch.cgl;
    const c = new CGL.Shader(f, "perlinnoise");
    e.setPortGroup("Position", [s, l, u]);
    c.setSource(c.getDefaultVertexShader(), t.perlinnoise3d_frag);
    const d = new CGL.Uniform(c, "t", "tex", 0),
      p = new CGL.Uniform(c, "f", "z", u),
      g = new CGL.Uniform(c, "f", "x", s),
      v = new CGL.Uniform(c, "f", "y", l),
      h = new CGL.Uniform(c, "f", "scale", i),
      O = new CGL.Uniform(c, "f", "amount", r);
    CGL.TextureEffect.setupBlending(e, c, a, r);
    o.onChange = () => {
      c.toggleDefine("RGB", o.get() == "RGB");
    };
    n.onTriggered = function () {
      if (!CGL.TextureEffect.checkOpInEffect(e)) return;
      f.pushShader(c);
      f.currentTextureEffect.bind();
      f.setTexture(0, f.currentTextureEffect.getCurrentSourceTexture().tex);
      f.currentTextureEffect.finish();
      f.popShader();
      m.trigger();
    };
  };
  Ops.Gl.TextureEffects.Noise.PerlinNoise.prototype = new CABLES.Op();
  CABLES.OPS["446442ba-1a7e-4c71-bb43-b12005aa6511"] = {
    f: Ops.Gl.TextureEffects.Noise.PerlinNoise,
    objName: "Ops.Gl.TextureEffects.Noise.PerlinNoise",
  };
  Ops.Gl.TextureEffects.ImageCompose_v2 = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = {
      imgcomp_frag:
        "UNI float a;\nvoid main()\n{\n   outColor= vec4(0.0,0.0,0.0,a);\n}\n",
    };
    const n = e.inTrigger("Render"),
      a = e.inBool("Use viewport size", true),
      r = e.inValueInt("Width", 640),
      o = e.inValueInt("Height", 480),
      i = e.inSwitch("Filter", ["nearest", "linear", "mipmap"], "linear"),
      s = e.inValueSelect(
        "Wrap",
        ["clamp to edge", "repeat", "mirrored repeat"],
        "repeat"
      ),
      l = e.inValueBool("HDR"),
      u = e.inValueBool("Transparent", false),
      m = e.outTrigger("Next"),
      f = e.outTexture("texture_out"),
      c = e.outValue("Aspect Ratio");
    const d = e.patch.cgl;
    e.setPortGroup("Texture Size", [a, r, o]);
    e.setPortGroup("Texture Settings", [s, i, l, u]);
    f.set(CGL.Texture.getEmptyTexture(d));
    let p = null;
    let g = null;
    let v = 8,
      h = 8;
    const O = [0, 0, 0, 0];
    let x = true;
    let b = CGL.Texture.FILTER_LINEAR;
    let _ = CGL.Texture.WRAP_CLAMP_TO_EDGE;
    const M = 0;
    const C = 0;
    s.onChange = E;
    i.onChange = D;
    n.onTriggered = e.preRender = T;
    D();
    E();
    I();
    function S() {
      if (p) p.delete();
      if (g) g.delete();
      if (l.get() && i.get() == "mipmap")
        e.setUiError(
          "fpmipmap",
          "Don't use mipmap and HDR at the same time, many systems do not support this."
        );
      else e.setUiError("fpmipmap", null);
      p = new CGL.TextureEffect(d, {
        isFloatingPointTexture: l.get(),
      });
      g = new CGL.Texture(d, {
        name: "image_compose_v2_" + e.id,
        isFloatingPointTexture: l.get(),
        filter: b,
        wrap: _,
        width: Math.ceil(r.get()),
        height: Math.ceil(o.get()),
      });
      p.setSourceTexture(g);
      f.set(CGL.Texture.getEmptyTexture(d));
      x = false;
    }
    l.onChange = function () {
      x = true;
    };
    function A() {
      if (!p) S();
      if (a.get()) {
        v = d.getViewPort()[2];
        h = d.getViewPort()[3];
      } else {
        v = Math.ceil(r.get());
        h = Math.ceil(o.get());
      }
      if ((v != g.width || h != g.height) && v !== 0 && h !== 0) {
        g.setSize(v, h);
        c.set(v / h);
        p.setSourceTexture(g);
        f.set(CGL.Texture.getEmptyTexture(d));
        f.set(g);
      }
      if (f.get() && b != CGL.Texture.FILTER_NEAREST) {
        if (!f.get().isPowerOfTwo())
          e.setUiError(
            "hintnpot",
            "texture dimensions not power of two! - texture filtering when scaling will not work on ios devices.",
            0
          );
        else e.setUiError("hintnpot", null, 0);
      } else e.setUiError("hintnpot", null, 0);
    }
    function I() {
      r.setUiAttribs({
        greyout: a.get(),
      });
      o.setUiAttribs({
        greyout: a.get(),
      });
    }
    a.onChange = function () {
      I();
    };
    e.preRender = function () {
      T();
    };
    function T() {
      if (!p || x) S();
      const e = d.getViewPort();
      O[0] = e[0];
      O[1] = e[1];
      O[2] = e[2];
      O[3] = e[3];
      d.pushBlend(false);
      A();
      d.currentTextureEffect = p;
      p.setSourceTexture(g);
      let t = CGL.Texture.getBlackTexture(d);
      if (u.get()) t = CGL.Texture.getEmptyTexture(d);
      p.startEffect(t);
      m.trigger();
      f.set(p.getCurrentSourceTexture());
      p.endEffect();
      d.setViewPort(O[0], O[1], O[2], O[3]);
      d.popBlend(false);
      d.currentTextureEffect = null;
    }
    function E() {
      if (s.get() == "repeat") _ = CGL.Texture.WRAP_REPEAT;
      if (s.get() == "mirrored repeat") _ = CGL.Texture.WRAP_MIRRORED_REPEAT;
      if (s.get() == "clamp to edge") _ = CGL.Texture.WRAP_CLAMP_TO_EDGE;
      x = true;
    }
    function D() {
      if (i.get() == "nearest") b = CGL.Texture.FILTER_NEAREST;
      if (i.get() == "linear") b = CGL.Texture.FILTER_LINEAR;
      if (i.get() == "mipmap") b = CGL.Texture.FILTER_MIPMAP;
      x = true;
    }
  };
  Ops.Gl.TextureEffects.ImageCompose_v2.prototype = new CABLES.Op();
  CABLES.OPS["a5b43d4c-a9ea-4eaf-9ed0-f257d222659d"] = {
    f: Ops.Gl.TextureEffects.ImageCompose_v2,
    objName: "Ops.Gl.TextureEffects.ImageCompose_v2",
  };
  Ops.Gl.TextureEffects.ColorMap = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = {
      colormap_frag:
        "IN vec2 texCoord;\nUNI sampler2D tex;\nUNI sampler2D gradient;\nUNI float pos;\nUNI float amount;\nUNI float vmin;\nUNI float vmax;\n\n{{CGL.BLENDMODES}}\n\n\nfloat lumi(vec3 color)\n{\n   return vec3(dot(vec3(0.2126,0.7152,0.0722), color)).r;\n}\n\nvoid main()\n{\n    vec4 base=texture(tex,texCoord);\n\n   base=clamp(base,vmin,vmax);\n\n    #ifdef METH_LUMI\n        vec4 color=texture(gradient,vec2(lumi(base.rgb),pos));\n    #endif\n\n    #ifdef METH_CHANNELS\n        vec4 color=vec4(1.0);\n        color.r=texture(gradient,vec2(base.r,pos)).r;\n        color.g=texture(gradient,vec2(base.g,pos)).g;\n        color.b=texture(gradient,vec2(base.b,pos)).b;\n    #endif\n\n//   outColor= vec4(color);\n   outColor=cgl_blend(base,color,amount);\n\n}\n",
    };
    let n = e.inTrigger("render");
    let a = e.outTrigger("trigger");
    const r = CGL.TextureEffect.AddBlendSelect(e, "Blend Mode", "normal");
    const o = e.inValueSlider("Amount", 1);
    let i = e.inTexture("Gradient");
    let s = e.inSwitch("Method", ["Luminance", "Channels"], "Luminance");
    let l = e.inFloatSlider("Min", 0);
    let u = e.inFloatSlider("Max", 1);
    let m = e.inValueSlider("Position", 0.5);
    let f = e.patch.cgl;
    let c = new CGL.Shader(f, e.name);
    c.define("METH_LUMI");
    c.setSource(c.getDefaultVertexShader(), t.colormap_frag);
    var d = new CGL.Uniform(c, "t", "tex", 0);
    var d = new CGL.Uniform(c, "t", "gradient", 1);
    let p = new CGL.Uniform(c, "f", "pos", m);
    let g = new CGL.Uniform(c, "f", "vmin", l);
    let v = new CGL.Uniform(c, "f", "vmax", u);
    let h = new CGL.Uniform(c, "f", "amount", o);
    CGL.TextureEffect.setupBlending(e, c, r, o);
    s.onChange = () => {
      c.toggleDefine("METH_LUMI", s.get() == "Luminance");
      c.toggleDefine("METH_CHANNELS", s.get() == "Channels");
    };
    n.onTriggered = function () {
      if (!CGL.TextureEffect.checkOpInEffect(e)) return;
      if (!i.get()) return;
      f.pushShader(c);
      f.currentTextureEffect.bind();
      f.setTexture(0, f.currentTextureEffect.getCurrentSourceTexture().tex);
      f.setTexture(1, i.get().tex);
      f.currentTextureEffect.finish();
      f.popShader();
      a.trigger();
    };
  };
  Ops.Gl.TextureEffects.ColorMap.prototype = new CABLES.Op();
  CABLES.OPS["58e302d7-4b84-4077-aa13-4f3cf0885205"] = {
    f: Ops.Gl.TextureEffects.ColorMap,
    objName: "Ops.Gl.TextureEffects.ColorMap",
  };
  Ops.Gl.TextureEffects.Gradient = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = {
      gradient_frag:
        "IN vec2 texCoord;\nUNI float amount;\nUNI float pos;\nUNI float width;\n\nUNI vec3 colA;\nUNI vec3 colB;\nUNI vec3 colC;\nUNI sampler2D tex;\n\n{{CGL.BLENDMODES}}\n\nvoid main()\n{\n    vec4 base=texture(tex,texCoord);\n    vec4 col;\n    float ax=texCoord.x;\n\n    #ifdef GRAD_Y\n        ax=texCoord.y;\n    #endif\n    #ifdef GRAD_XY\n        ax=(texCoord.x+texCoord.y)/2.0;\n    #endif\n    #ifdef GRAD_RADIAL\n        ax=distance(texCoord,vec2(0.5,0.5))*2.0;\n    #endif\n\n    ax=((ax-0.5)*width)+0.5;\n\n    // ax-=0.03;\n\n    #ifndef GRAD_SMOOTHSTEP\n        if(ax<=pos) col = vec4(mix(colA, colB, ax*1.0/pos),1.0);\n        else col = vec4(mix(colB, colC, min(1.0,(ax-pos)*1.0/(1.0-pos))),1.0);\n    #endif\n\n    #ifdef GRAD_SMOOTHSTEP\n        if(ax<=pos) col = vec4(mix(colA, colB, smoothstep(0.0,1.0,ax*1.0/pos)),1.0);\n        else col = vec4(mix(colB, colC, smoothstep(0.0,1.0,min(1.0,(ax-pos)*1.0/(1.0-pos)))),1.0);\n    #endif\n\n    outColor=cgl_blend(base,col,amount);\n}",
    };
    const n = e.inTrigger("Render");
    const a = CGL.TextureEffect.AddBlendSelect(e, "Blend Mode", "normal");
    const r = e.inValueSlider("Amount", 1);
    const o = e.inValue("Width", 1);
    const i = e.inSwitch("Type", ["X", "Y", "XY", "Radial"], "X");
    const s = e.inValueSlider("Pos", 0.5);
    const l = e.inValueBool("Smoothstep", true);
    const u = e.inValueSlider("r", Math.random());
    const m = e.inValueSlider("g", Math.random());
    const f = e.inValueSlider("b", Math.random());
    u.setUiAttribs({
      colorPick: true,
    });
    const c = e.inValueSlider("r2", Math.random());
    const d = e.inValueSlider("g2", Math.random());
    const p = e.inValueSlider("b2", Math.random());
    c.setUiAttribs({
      colorPick: true,
    });
    const g = e.inValueSlider("r3", Math.random());
    const v = e.inValueSlider("g3", Math.random());
    const h = e.inValueSlider("b3", Math.random());
    g.setUiAttribs({
      colorPick: true,
    });
    l.onChange = D;
    e.setPortGroup("Blending", [a, r]);
    e.setPortGroup("Color A", [u, m, f]);
    e.setPortGroup("Color B", [c, d, p]);
    e.setPortGroup("Color C", [g, v, h]);
    const O = e.inTriggerButton("Randomize");
    const x = e.outTrigger("Next");
    const b = e.patch.cgl;
    const _ = new CGL.Shader(b, "gradient");
    _.setSource(_.getDefaultVertexShader(), t.gradient_frag);
    const M = new CGL.Uniform(_, "f", "amount", r);
    const C = new CGL.Uniform(_, "f", "pos", s);
    const S = new CGL.Uniform(_, "f", "width", o);
    const A = new CGL.Uniform(_, "t", "tex", 0);
    let I, T, E;
    c.onChange = d.onChange = p.onChange = N;
    g.onChange = v.onChange = h.onChange = y;
    u.onChange = m.onChange = f.onChange = P;
    P();
    N();
    y();
    D();
    function D() {
      if (l.get()) _.define("GRAD_SMOOTHSTEP");
      else _.removeDefine("GRAD_SMOOTHSTEP");
    }
    i.onChange = function () {
      _.removeDefine("GRAD_X");
      _.removeDefine("GRAD_Y");
      _.removeDefine("GRAD_XY");
      _.removeDefine("GRAD_RADIAL");
      if (i.get() == "XY") _.define("GRAD_XY");
      if (i.get() == "X") _.define("GRAD_X");
      if (i.get() == "Y") _.define("GRAD_Y");
      if (i.get() == "Radial") _.define("GRAD_RADIAL");
    };
    CGL.TextureEffect.setupBlending(e, _, a, r);
    O.onTriggered = function () {
      u.set(Math.random());
      m.set(Math.random());
      f.set(Math.random());
      c.set(Math.random());
      d.set(Math.random());
      p.set(Math.random());
      g.set(Math.random());
      v.set(Math.random());
      h.set(Math.random());
    };
    function P() {
      const e = [u.get(), m.get(), f.get()];
      if (!E) E = new CGL.Uniform(_, "3f", "colA", e);
      else E.setValue(e);
    }
    function N() {
      const e = [c.get(), d.get(), p.get()];
      if (!T) T = new CGL.Uniform(_, "3f", "colB", e);
      else T.setValue(e);
    }
    function y() {
      const e = [g.get(), v.get(), h.get()];
      if (!I) I = new CGL.Uniform(_, "3f", "colC", e);
      else I.setValue(e);
    }
    n.onTriggered = function () {
      if (!CGL.TextureEffect.checkOpInEffect(e)) return;
      b.pushShader(_);
      b.currentTextureEffect.bind();
      b.setTexture(0, b.currentTextureEffect.getCurrentSourceTexture().tex);
      b.currentTextureEffect.finish();
      b.popShader();
      x.trigger();
    };
  };
  Ops.Gl.TextureEffects.Gradient.prototype = new CABLES.Op();
  CABLES.OPS["5ada9bd8-227a-4a1f-87ad-0f879c7aa84d"] = {
    f: Ops.Gl.TextureEffects.Gradient,
    objName: "Ops.Gl.TextureEffects.Gradient",
  };
  Ops.Gl.TextureEffects.SkewStretchImage = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = {
      invert_frag:
        "IN vec2 texCoord;\nUNI sampler2D tex;\nUNI float amount;\nUNI float stretchTopX;\nUNI float stretchBotX;\nUNI float stretchLeft;\nUNI float stretchRight;\n\n{{CGL.BLENDMODES}}\n\nvoid main()\n{\n    vec4 col=vec4(1.0,0.0,0.0,1.0);\n\n    vec2 tc=texCoord;\n\n    #ifdef SMOOTHSTEP\n        tc.y=smoothstep(0.,1.,tc.y);\n        tc.x=smoothstep(0.,1.,tc.x);\n    #endif\n\n    vec2 tcnorm=texCoord;\n\n    tcnorm-=0.5;\n    tcnorm*=2.0;\n\n    tcnorm.x=mix(tcnorm.x*stretchBotX,tcnorm.x,tc.y);\n    tcnorm.x=mix(tcnorm.x*stretchTopX,tcnorm.x,1.0-tc.y);\n\n    tcnorm.y=mix(tcnorm.y*stretchLeft,tcnorm.y,tc.x);\n    tcnorm.y=mix(tcnorm.y*stretchRight,tcnorm.y,1.0-tc.x);\n\n    tc=tcnorm/2.0+0.5;\n\n    col=texture(tex,tc);\n\n    #ifdef CLAMP\n        if(tc.x<0.0 || tc.x>1.0 || tc.y<0.0 || tc.y>1.0) col=vec4(0.0,0.0,0.0,1.0);\n    #endif\n\n    vec4 base=texture(tex,texCoord);\n\n    outColor=cgl_blend(base,col,amount);\n}\n",
    };
    const n = e.inTrigger("render"),
      a = CGL.TextureEffect.AddBlendSelect(e, "Blend Mode", "normal"),
      r = e.inValueSlider("Amount", 1),
      o = e.inBool("Clamp", false),
      i = e.outTrigger("trigger");
    const s = e.patch.cgl;
    const l = new CGL.Shader(s, "skewstrechimage");
    l.setSource(l.getDefaultVertexShader(), t.invert_frag);
    const u = new CGL.Uniform(l, "t", "tex", 0);
    const m = new CGL.Uniform(l, "f", "amount", r);
    l.addUniformFrag("f", "stretchTopX", e.inFloat("Stretch Top", 1));
    l.addUniformFrag("f", "stretchBotX", e.inFloat("Stretch Bottom", 1));
    l.addUniformFrag("f", "stretchLeft", e.inFloat("Stretch Left", 1));
    l.addUniformFrag("f", "stretchRight", e.inFloat("Stretch Right", 1));
    CGL.TextureEffect.setupBlending(e, l, a, r);
    o.onChange = function () {
      l.toggleDefine("CLAMP", o.get());
    };
    n.onTriggered = function () {
      if (!CGL.TextureEffect.checkOpInEffect(e)) return;
      s.pushShader(l);
      s.currentTextureEffect.bind();
      s.setTexture(0, s.currentTextureEffect.getCurrentSourceTexture().tex);
      s.currentTextureEffect.finish();
      s.popShader();
      i.trigger();
    };
  };
  Ops.Gl.TextureEffects.SkewStretchImage.prototype = new CABLES.Op();
  CABLES.OPS["91100fd5-c2e8-4d44-b54c-e445ec9282c4"] = {
    f: Ops.Gl.TextureEffects.SkewStretchImage,
    objName: "Ops.Gl.TextureEffects.SkewStretchImage",
  };
  Ops.Anim.Timer_v2 = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = {};
    const a = e.inValue("Speed", 1),
      n = e.inValueBool("Play", true),
      r = e.inTriggerButton("Reset"),
      o = e.inValueBool("Sync to timeline", false),
      i = e.outValue("Time");
    e.setPortGroup("Controls", [n, r, a]);
    const s = new CABLES.Timer();
    let l = null;
    let u = 0;
    let m = false;
    n.onChange = f;
    f();
    function f() {
      if (n.get()) {
        s.play();
        e.patch.addOnAnimFrame(e);
      } else {
        s.pause();
        e.patch.removeOnAnimFrame(e);
      }
    }
    r.onTriggered = c;
    function c() {
      u = 0;
      l = null;
      s.setTime(0);
      i.set(0);
    }
    o.onChange = function () {
      m = o.get();
      n.setUiAttribs({
        greyout: m,
      });
      r.setUiAttribs({
        greyout: m,
      });
    };
    e.onAnimFrame = function (e) {
      if (s.isPlaying()) {
        if (CABLES.overwriteTime !== undefined) {
          i.set(CABLES.overwriteTime * a.get());
        } else if (m) {
          i.set(e * a.get());
        } else {
          s.update();
          const t = s.get();
          if (l === null) {
            l = t;
            return;
          }
          const n = Math.abs(t - l);
          l = t;
          u += n * a.get();
          if (u != u) u = 0;
          i.set(u);
        }
      }
    };
  };
  Ops.Anim.Timer_v2.prototype = new CABLES.Op();
  CABLES.OPS["aac7f721-208f-411a-adb3-79adae2e471a"] = {
    f: Ops.Anim.Timer_v2,
    objName: "Ops.Anim.Timer_v2",
  };
  Ops.Gl.ShaderEffects.VertexDisplacementMap_v4 = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = {
      vertdisplace_body_vert:
        "\nvec2 MOD_tc=texCoord;\n\n#ifdef MOD_COORD_MESHXY\n    MOD_tc=pos.xy;\n#endif\n#ifdef MOD_COORD_MESHXZ\n    MOD_tc=pos.xz;\n#endif\n\n\n#ifdef MOD_FLIP_Y\n    MOD_tc.y=1.0-MOD_tc.y;\n#endif\n#ifdef MOD_FLIP_X\n    MOD_tc.x=1.0-MOD_tc.x;\n#endif\n#ifdef MOD_FLIP_XY\n    MOD_tc=1.0-MOD_tc;\n#endif\n\nMOD_tc*=MOD_scale;\n\nvec4 MOD_sample=texture2D( MOD_texture, vec2(MOD_tc.x+MOD_offsetX,MOD_tc.y+MOD_offsetY) );\nvec3 MOD_disp;\n\n#ifdef MOD_INPUT_R\n    MOD_disp=vec3(MOD_sample.r);\n#endif\n#ifdef MOD_INPUT_G\n    MOD_disp=vec3(MOD_sample.g);\n#endif\n#ifdef MOD_INPUT_B\n    MOD_disp=vec3(MOD_sample.b);\n#endif\n#ifdef MOD_INPUT_A\n    MOD_disp=vec3(MOD_sample.a);\n#endif\n#ifdef MOD_INPUT_RGB\n    MOD_disp=MOD_sample.rgb;\n#endif\n#ifdef MOD_INPUT_LUMI\n    MOD_disp=vec3(dot(vec3(0.2126,0.7152,0.0722), MOD_sample.rgb));\n#endif\n\n\n\n#ifdef MOD_HEIGHTMAP_INVERT\n   MOD_disp=1.0-MOD_disp;\n#endif\n// #ifdef MOD_HEIGHTMAP_NORMALIZE\n//   MOD_disp-=0.5;\n//   MOD_disp*=2.0;\n// #endif\n\n\n#ifdef MOD_HEIGHTMAP_NORMALIZE\n    MOD_disp=(MOD_disp-0.5)*2.0;\n    // MOD_disp=(MOD_disp-0.5)*-1.0+0.5;\n#endif\n\n\nfloat MOD_zero=0.0;\n\n#ifdef MOD_MODE_DIV\n    MOD_zero=1.0;\n#endif\n#ifdef MOD_MODE_MUL\n    MOD_zero=1.0;\n#endif\n\n\n\nvec3 MOD_mask=vec3(1.0);\n\n#ifdef MOD_AXIS_X\n    MOD_mask=vec3(1.,0.,0.);\n    MOD_disp*=MOD_mask*MOD_extrude;\n#endif\n#ifdef MOD_AXIS_Y\n    MOD_mask=vec3(0.,1.,0.);\n    MOD_disp*=MOD_mask*MOD_extrude;\n#endif\n#ifdef MOD_AXIS_Z\n    MOD_mask=vec3(0.,0.,1.);\n    MOD_disp*=MOD_mask*MOD_extrude;\n#endif\n#ifdef MOD_AXIS_XY\n    MOD_mask=vec3(1.,1.,0.);\n    MOD_disp*=MOD_mask*MOD_extrude;\n#endif\n#ifdef MOD_AXIS_XYZ\n    MOD_mask=vec3(1.,1.,1.);\n    MOD_disp*=MOD_mask*MOD_extrude;\n#endif\n\n\n// MOD_disp=smoothstep(-1.,1.,MOD_disp*MOD_disp*MOD_disp);\n// MOD_disp=MOD_disp*MOD_disp*MOD_disp;\n\n// #ifdef MOD_FLIP_Y\n//     MOD_mask.y=1.0-MOD_mask.y;\n// #endif\n// #ifdef MOD_FLIP_X\n//     MOD_mask.x=1.0-MOD_mask.x;\n// #endif\n// #ifdef MOD_FLIP_XY\n//     MOD_mask.xy=1.0-MOD_mask.xy;\n// #endif\n\n\n\n#ifdef MOD_MODE_DIV\n    pos.xyz/=MOD_disp*MOD_mask;\n#endif\n\n#ifdef MOD_MODE_MUL\n    pos.xyz*=MOD_disp*MOD_mask;\n#endif\n\n#ifdef MOD_MODE_ADD\n    pos.xyz+=MOD_disp*MOD_mask;\n#endif\n\n#ifdef MOD_MODE_NORMAL\n\n    vec3 MOD_t=norm;\n    #ifdef MOD_SMOOTHSTEP\n        MOD_t=smoothstep(-1.,1.,MOD_t);\n    #endif\n\n    pos.xyz+=MOD_t*MOD_disp*MOD_mask;\n\n#endif\n\n#ifdef MOD_MODE_TANGENT\n    MOD_disp*=-1.0;\n\n    vec3 MOD_t=attrTangent;\n    #ifdef MOD_SMOOTHSTEP\n        MOD_t=smoothstep(-1.,1.,MOD_t);\n    #endif\n\n    pos.xyz+=MOD_t*MOD_disp*MOD_mask;\n\n#endif\n\n#ifdef MOD_MODE_BITANGENT\n    MOD_disp*=-1.0;\n    vec3 MOD_t=attrBiTangent;\n\n    #ifdef MOD_SMOOTHSTEP\n        MOD_t=smoothstep(-1.,1.,MOD_t);\n    #endif\n\n    pos.xyz+=MOD_t*MOD_disp*MOD_mask;\n\n#endif\n\n\n// pos.y*=-1.0;\n    // pos.xy+=vec2(MOD_texVal*MOD_extrude)*normalize(pos.xy);\n\n\nMOD_displHeightMapColor=MOD_disp;\n\n\n#ifdef CALC_NORMALS\n    norm+=MOD_calcNormal(MOD_texture,MOD_tc);\n#endif",
      vertdisplace_head_vert:
        "OUT vec3 MOD_displHeightMapColor;\n\n// mat4 rotationX( in float angle ) {\n// \treturn mat4(\t1.0,\t\t0,\t\t\t0,\t\t\t0,\n// \t\t\t \t\t0, \tcos(angle),\t-sin(angle),\t\t0,\n// \t\t\t\t\t0, \tsin(angle),\t cos(angle),\t\t0,\n// \t\t\t\t\t0, \t\t\t0,\t\t\t  0, \t\t1);\n// }\n\n// mat4 rotationY( in float angle ) {\n// \treturn mat4(\tcos(angle),\t\t0,\t\tsin(angle),\t0,\n// \t\t\t \t\t\t\t0,\t\t1.0,\t\t\t 0,\t0,\n// \t\t\t\t\t-sin(angle),\t0,\t\tcos(angle),\t0,\n// \t\t\t\t\t\t\t0, \t\t0,\t\t\t\t0,\t1);\n// }\n\n// mat4 rotationZ( in float angle ) {\n// \treturn mat4(\tcos(angle),\t\t-sin(angle),\t0,\t0,\n// \t\t\t \t\tsin(angle),\t\tcos(angle),\t\t0,\t0,\n// \t\t\t\t\t\t\t0,\t\t\t\t0,\t\t1,\t0,\n// \t\t\t\t\t\t\t0,\t\t\t\t0,\t\t0,\t1);\n// }\n\n\nvec3 MOD_calcNormal(sampler2D tex,vec2 uv)\n{\n    float strength=13.0;\n    float texelSize=1.0/512.0;\n\n    float tl = abs(texture(tex, uv + texelSize * vec2(-1.0, -1.0)).x);   // top left\n    float  l = abs(texture(tex, uv + texelSize * vec2(-1.0,  0.0)).x);   // left\n    float bl = abs(texture(tex, uv + texelSize * vec2(-1.0,  1.0)).x);   // bottom left\n    float  t = abs(texture(tex, uv + texelSize * vec2( 0.0, -1.0)).x);   // top\n    float  b = abs(texture(tex, uv + texelSize * vec2( 0.0,  1.0)).x);   // bottom\n    float tr = abs(texture(tex, uv + texelSize * vec2( 1.0, -1.0)).x);   // top right\n    float  r = abs(texture(tex, uv + texelSize * vec2( 1.0,  0.0)).x);   // right\n    float br = abs(texture(tex, uv + texelSize * vec2( 1.0,  1.0)).x);   // bottom right\n\n    //     // Compute dx using Sobel:\n    //     //           -1 0 1\n    //     //           -2 0 2\n    //     //           -1 0 1\n    float dX = tr + 2.0*r + br -tl - 2.0*l - bl;\n\n    //     // Compute dy using Sobel:\n    //     //           -1 -2 -1\n    //     //            0  0  0\n    //     //            1  2  1\n    float dY = bl + 2.0*b + br -tl - 2.0*t - tr;\n\n    //     // Build the normalized normal\n\n    vec3 N = normalize(vec3(dX,dY, 1.0 / strength));\n\n    //     //convert (-1.0 , 1.0) to (0.0 , 1.0), if needed\n    N= N * 0.5 + 0.5;\n\n   return N;\n}\n",
    };
    const n = e.inTrigger("Render"),
      a = e.inValue("Extrude", 0.5),
      r = e.inSwitch("Mode", ["Norm", "Tang", "BiTang", "*", "+", "/"], "Norm"),
      o = e.inSwitch("Axis", ["XYZ", "XY", "X", "Y", "Z"], "XYZ"),
      i = e.inSwitch(
        "Coordinates",
        ["Tex Coords", "Mesh XY", "Mesh XZ"],
        "Tex Coords"
      ),
      s = e.inTexture("Texture", null, "texture"),
      l = e.inSwitch(
        "Channel",
        ["Luminance", "R", "G", "B", "A", "RGB"],
        "Luminance"
      ),
      u = e.inSwitch("Flip", ["None", "X", "Y", "XY"], "None"),
      m = e.inSwitch("Range", ["0-1", "1-0", "Normalized"], "0-1"),
      f = e.inValueFloat("Offset X"),
      c = e.inValueFloat("Offset Y"),
      d = e.inValueFloat("Scale", 1),
      p = e.inValueBool("Calc Normals", false),
      g = e.inValueBool("Discard Zero Values"),
      v = e.inValueBool("colorize", false),
      h = e.inValueSlider("Colorize Min", 0),
      O = e.inValueSlider("Colorize Max", 1),
      x = e.outTrigger("trigger");
    const b = e.patch.cgl;
    e.setPortGroup("Input", [s, u, l, m, f, c, d]);
    e.setPortGroup("Colorize", [v, h, O]);
    e.toWorkPortsNeedToBeLinked(s, x, n);
    n.onTriggered = T;
    l.onChange =
      v.onChange =
      o.onChange =
      m.onChange =
      g.onChange =
      u.onChange =
      p.onChange =
      i.onChange =
      r.onChange =
        I;
    const _ = t.vertdisplace_head_vert;
    const M = t.vertdisplace_body_vert;
    const C =
      "".endl() +
      "IN vec3 MOD_displHeightMapColor;".endl() +
      "vec3 MOD_map(vec3 value, float inMin, float inMax, float outMin, float outMax) { return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);}".endl();
    const S =
      "".endl() +
      "#ifdef MOD_HEIGHTMAP_COLORIZE".endl() +
      "   col.rgb*=MOD_map( MOD_displHeightMapColor, 0.0,1.0 , MOD_colorizeMin,MOD_colorizeMax);".endl() +
      "#endif".endl() +
      "#ifdef MOD_DISPLACE_REMOVE_ZERO".endl() +
      "   if(MOD_displHeightMapColor.r==0.0)discard;".endl() +
      "#endif".endl();
    const A = new CGL.ShaderModifier(b, e.name);
    A.addModule({
      title: e.name,
      name: "MODULE_VERTEX_POSITION",
      srcHeadVert: _,
      srcBodyVert: M,
    });
    A.addModule({
      title: e.name,
      name: "MODULE_COLOR",
      srcHeadFrag: C,
      srcBodyFrag: S,
    });
    A.addUniformVert("t", "MOD_texture", 0);
    A.addUniformVert("f", "MOD_extrude", a);
    A.addUniformVert("f", "MOD_offsetX", f);
    A.addUniformVert("f", "MOD_offsetY", c);
    A.addUniformVert("f", "MOD_scale", d);
    A.addUniformFrag("f", "MOD_colorizeMin", h);
    A.addUniformFrag("f", "MOD_colorizeMax", O);
    I();
    function I() {
      A.toggleDefine("MOD_HEIGHTMAP_COLORIZE", v.get());
      A.toggleDefine("MOD_HEIGHTMAP_INVERT", m.get() == "1-0");
      A.toggleDefine("MOD_HEIGHTMAP_NORMALIZE", m.get() == "Normalized");
      A.toggleDefine("MOD_DISPLACE_REMOVE_ZERO", g.get());
      A.toggleDefine("MOD_INPUT_R", l.get() == "R");
      A.toggleDefine("MOD_INPUT_G", l.get() == "G");
      A.toggleDefine("MOD_INPUT_B", l.get() == "B");
      A.toggleDefine("MOD_INPUT_A", l.get() == "A");
      A.toggleDefine("MOD_INPUT_RGB", l.get() == "RGB");
      A.toggleDefine("MOD_INPUT_LUMI", l.get() == "Luminance");
      A.toggleDefine("MOD_FLIP_X", u.get() == "X");
      A.toggleDefine("MOD_FLIP_Y", u.get() == "Y");
      A.toggleDefine("MOD_FLIP_XY", u.get() == "XY");
      A.toggleDefine("MOD_AXIS_X", o.get() == "X");
      A.toggleDefine("MOD_AXIS_Y", o.get() == "Y");
      A.toggleDefine("MOD_AXIS_Z", o.get() == "Z");
      A.toggleDefine("MOD_AXIS_XYZ", o.get() == "XYZ");
      A.toggleDefine("MOD_AXIS_XY", o.get() == "XY");
      A.toggleDefine("MOD_MODE_BITANGENT", r.get() == "BiTang");
      A.toggleDefine("MOD_MODE_TANGENT", r.get() == "Tang");
      A.toggleDefine("MOD_MODE_NORMAL", r.get() == "Norm");
      A.toggleDefine("MOD_MODE_MUL", r.get() == "*");
      A.toggleDefine("MOD_MODE_ADD", r.get() == "+");
      A.toggleDefine("MOD_MODE_DIV", r.get() == "/");
      A.toggleDefine("MOD_SMOOTHSTEP", 0);
      A.toggleDefine("MOD_COORD_TC", i.get() == "Tex Coords");
      A.toggleDefine("MOD_COORD_MESHXY", i.get() == "Mesh XY");
      A.toggleDefine("MOD_COORD_MESHXZ", i.get() == "Mesh XZ");
      A.toggleDefine("CALC_NORMALS", p.get());
    }
    function T() {
      A.bind();
      if (s.get() && s.get().deleted) console.log("deleted!!!");
      if (s.get() && !s.get().deleted) A.pushTexture("MOD_texture", s.get());
      else A.pushTexture("MOD_texture", CGL.Texture.getEmptyTexture(b));
      x.trigger();
      A.unbind();
    }
  };
  Ops.Gl.ShaderEffects.VertexDisplacementMap_v4.prototype = new CABLES.Op();
  CABLES.OPS["ed36e5ad-457b-4ac6-a929-11b66951cb6c"] = {
    f: Ops.Gl.ShaderEffects.VertexDisplacementMap_v4,
    objName: "Ops.Gl.ShaderEffects.VertexDisplacementMap_v4",
  };
  Ops.Sequence = function () {
    CABLES.Op.apply(this, arguments);
    const o = this;
    const e = {};
    const t = o.inTrigger("exe"),
      n = o.inTriggerButton("Clean up connections");
    const a = [],
      i = [],
      r = 16;
    let s = null;
    t.onTriggered = u;
    n.onTriggered = m;
    n.setUiAttribs({
      hidePort: true,
    });
    n.setUiAttribs({
      hideParam: true,
    });
    for (let t = 0; t < r; t++) {
      const f = o.outTrigger("trigger " + t);
      i.push(f);
      f.onLinkChanged = l;
      if (t < r - 1) {
        let e = o.inTrigger("exe " + t);
        e.onTriggered = u;
        a.push(e);
      }
    }
    function l() {
      clearTimeout(s);
      s = setTimeout(() => {
        let t = false;
        for (let e = 0; e < i.length; e++) if (i[e].links.length > 1) t = true;
        n.setUiAttribs({
          hideParam: !t,
        });
        if (o.isCurrentUiOp()) o.refreshParams();
      }, 60);
    }
    function u() {
      for (let e = 0; e < i.length; e++) i[e].trigger();
    }
    function m() {
      let a = 0;
      for (let n = 0; n < i.length; n++) {
        let t = [];
        if (i[n].links.length > 1)
          for (let e = 1; e < i[n].links.length; e++) {
            while (i[a].links.length > 0) a++;
            t.push(i[n].links[e]);
            const r = i[n].links[e].getOtherPort(i[n]);
            o.patch.link(o, "trigger " + a, r.parent, r.name);
            a++;
          }
        for (let e = 0; e < t.length; e++) t[e].remove();
      }
      l();
    }
  };
  Ops.Sequence.prototype = new CABLES.Op();
  CABLES.OPS["a466bc1f-06e9-4595-8849-bffb9fe22f99"] = {
    f: Ops.Sequence,
    objName: "Ops.Sequence",
  };
  Ops.Gl.TextureEffects.DrawImage_v3 = function () {
    CABLES.Op.apply(this, arguments);
    const a = this;
    const e = {
      drawimage_frag:
        "#ifdef HAS_TEXTURES\n    IN vec2 texCoord;\n    UNI sampler2D tex;\n    UNI sampler2D image;\n#endif\n\n#ifdef TEX_TRANSFORM\n    IN mat3 transform;\n#endif\n// UNI float rotate;\n\n{{CGL.BLENDMODES}}\n\n#ifdef HAS_TEXTUREALPHA\n   UNI sampler2D imageAlpha;\n#endif\n\nUNI float amount;\n\n#ifdef ASPECT_RATIO\n    UNI float aspectTex;\n    UNI float aspectPos;\n#endif\n\nvoid main()\n{\n    vec4 blendRGBA=vec4(0.0,0.0,0.0,1.0);\n\n    #ifdef HAS_TEXTURES\n        vec2 tc=texCoord;\n\n        #ifdef TEX_FLIP_X\n            tc.x=1.0-tc.x;\n        #endif\n        #ifdef TEX_FLIP_Y\n            tc.y=1.0-tc.y;\n        #endif\n\n        #ifdef ASPECT_RATIO\n            #ifdef ASPECT_AXIS_X\n                tc.y=(1.0-aspectPos)-(((1.0-aspectPos)-tc.y)*aspectTex);\n            #endif\n            #ifdef ASPECT_AXIS_Y\n                tc.x=(1.0-aspectPos)-(((1.0-aspectPos)-tc.x)/aspectTex);\n            #endif\n        #endif\n\n        #ifdef TEX_TRANSFORM\n            vec3 coordinates=vec3(tc.x, tc.y,1.0);\n            tc=(transform * coordinates ).xy;\n        #endif\n\n        blendRGBA=texture(image,tc);\n\n        vec3 blend=blendRGBA.rgb;\n        vec4 baseRGBA=texture(tex,texCoord);\n        vec3 base=baseRGBA.rgb;\n        vec3 colNew=_blend(base,blend);\n\n        #ifdef REMOVE_ALPHA_SRC\n            blendRGBA.a=1.0;\n        #endif\n\n        #ifdef HAS_TEXTUREALPHA\n            vec4 colImgAlpha=texture(imageAlpha,tc);\n            float colImgAlphaAlpha=colImgAlpha.a;\n\n            #ifdef ALPHA_FROM_LUMINANCE\n                vec3 gray = vec3(dot(vec3(0.2126,0.7152,0.0722), colImgAlpha.rgb ));\n                colImgAlphaAlpha=(gray.r+gray.g+gray.b)/3.0;\n            #endif\n\n            #ifdef ALPHA_FROM_INV_UMINANCE\n                vec3 gray = vec3(dot(vec3(0.2126,0.7152,0.0722), colImgAlpha.rgb ));\n                colImgAlphaAlpha=1.0-(gray.r+gray.g+gray.b)/3.0;\n            #endif\n\n            #ifdef INVERT_ALPHA\n                colImgAlphaAlpha=clamp(colImgAlphaAlpha,0.0,1.0);\n                colImgAlphaAlpha=1.0-colImgAlphaAlpha;\n            #endif\n\n            blendRGBA.a=colImgAlphaAlpha*blendRGBA.a;\n        #endif\n    #endif\n\n    float am=amount;\n\n    #ifdef CLIP_REPEAT\n        if(tc.y>1.0 || tc.y<0.0 || tc.x>1.0 || tc.x<0.0)\n        {\n            // colNew.rgb=vec3(0.0);\n            am=0.0;\n        }\n    #endif\n\n    #ifdef ASPECT_RATIO\n        #ifdef ASPECT_CROP\n            if(tc.y>1.0 || tc.y<0.0 || tc.x>1.0 || tc.x<0.0)\n            {\n                colNew.rgb=base.rgb;\n                am=0.0;\n            }\n\n        #endif\n    #endif\n\n    // blendRGBA.rgb=mix( colNew, base ,1.0-am);\n    // blendRGBA.a=clamp((blendRGBA.a*am),0.,1.);\n\n    blendRGBA.rgb=mix(colNew,base,1.0-(am*blendRGBA.a));\n    blendRGBA.a=clamp(baseRGBA.a+(blendRGBA.a*am),0.,1.);\n\n\n    outColor= blendRGBA;\n\n}\n\n",
      drawimage_vert:
        "IN vec3 vPosition;\nIN vec2 attrTexCoord;\nIN vec3 attrVertNormal;\n\nUNI mat4 projMatrix;\nUNI mat4 mvMatrix;\n\nOUT vec2 texCoord;\n// OUT vec3 norm;\n\n#ifdef TEX_TRANSFORM\n    UNI float posX;\n    UNI float posY;\n    UNI float scaleX;\n    UNI float scaleY;\n    UNI float rotate;\n    OUT mat3 transform;\n#endif\n\nvoid main()\n{\n   texCoord=attrTexCoord;\n//   norm=attrVertNormal;\n\n   #ifdef TEX_TRANSFORM\n        vec3 coordinates=vec3(attrTexCoord.x, attrTexCoord.y,1.0);\n        float angle = radians( rotate );\n        vec2 scale= vec2(scaleX,scaleY);\n        vec2 translate= vec2(posX,posY);\n\n        transform = mat3(   scale.x * cos( angle ), scale.x * sin( angle ), 0.0,\n            - scale.y * sin( angle ), scale.y * cos( angle ), 0.0,\n            - 0.5 * scale.x * cos( angle ) + 0.5 * scale.y * sin( angle ) - 0.5 * translate.x*2.0 + 0.5,  - 0.5 * scale.x * sin( angle ) - 0.5 * scale.y * cos( angle ) - 0.5 * translate.y*2.0 + 0.5, 1.0);\n   #endif\n\n   gl_Position = projMatrix * mvMatrix * vec4(vPosition,  1.0);\n}\n",
    };
    const t = a.inTrigger("render");
    const n = CGL.TextureEffect.AddBlendSelect(a, "blendMode");
    const r = a.inValueSlider("amount", 1);
    const o = a.inTexture("Image");
    const i = a.inValueBool("removeAlphaSrc", false);
    const s = a.inTexture("Mask");
    const l = a.inValueSelect(
      "Mask Src",
      ["alpha channel", "luminance", "luminance inv"],
      "luminance"
    );
    const u = a.inValueBool("Invert alpha channel");
    const m = a.inValueBool("Aspect Ratio", false);
    const f = a.inValueSelect("Stretch Axis", ["X", "Y"], "X");
    const c = a.inValueSlider("Position", 0);
    const d = a.inValueBool("Crop", false);
    const p = a.outTrigger("trigger");
    n.set("normal");
    const g = a.patch.cgl;
    const v = new CGL.Shader(g, "drawimage");
    s.onLinkChanged = h;
    a.setPortGroup("Mask", [s, l, u]);
    a.setPortGroup("Aspect Ratio", [m, c, d, f]);
    i.onChange = S;
    function h() {
      if (s.isLinked()) {
        i.setUiAttribs({
          greyout: true,
        });
        l.setUiAttribs({
          greyout: false,
        });
        u.setUiAttribs({
          greyout: false,
        });
      } else {
        i.setUiAttribs({
          greyout: false,
        });
        l.setUiAttribs({
          greyout: true,
        });
        u.setUiAttribs({
          greyout: true,
        });
      }
    }
    a.toWorkPortsNeedToBeLinked(o);
    v.setSource(e.drawimage_vert, e.drawimage_frag);
    const O = new CGL.Uniform(v, "t", "tex", 0);
    const x = new CGL.Uniform(v, "t", "image", 1);
    const b = new CGL.Uniform(v, "t", "imageAlpha", 2);
    const _ = new CGL.Uniform(v, "f", "aspectTex", 1);
    const M = new CGL.Uniform(v, "f", "aspectPos", c);
    u.onChange = function () {
      if (u.get()) v.define("INVERT_ALPHA");
      else v.removeDefine("INVERT_ALPHA");
    };
    m.onChange = C;
    d.onChange = C;
    f.onChange = C;
    function C() {
      v.removeDefine("ASPECT_AXIS_X");
      v.removeDefine("ASPECT_AXIS_Y");
      v.removeDefine("ASPECT_CROP");
      c.setUiAttribs({
        greyout: !m.get(),
      });
      d.setUiAttribs({
        greyout: !m.get(),
      });
      f.setUiAttribs({
        greyout: !m.get(),
      });
      if (m.get()) {
        v.define("ASPECT_RATIO");
        if (d.get()) v.define("ASPECT_CROP");
        if (f.get() == "X") v.define("ASPECT_AXIS_X");
        if (f.get() == "Y") v.define("ASPECT_AXIS_Y");
      } else {
        v.removeDefine("ASPECT_RATIO");
        if (d.get()) v.define("ASPECT_CROP");
        if (f.get() == "X") v.define("ASPECT_AXIS_X");
        if (f.get() == "Y") v.define("ASPECT_AXIS_Y");
      }
    }
    function S() {
      if (i.get()) v.define("REMOVE_ALPHA_SRC");
      else v.removeDefine("REMOVE_ALPHA_SRC");
    }
    l.onChange = function () {
      v.toggleDefine("ALPHA_FROM_LUMINANCE", l.get() == "luminance");
      v.toggleDefine("ALPHA_FROM_INV_UMINANCE", l.get() == "luminance_inv");
    };
    l.set("alpha channel");
    {
      const R = a.inValueBool("flip x");
      const V = a.inValueBool("flip y");
      R.onChange = function () {
        if (R.get()) v.define("TEX_FLIP_X");
        else v.removeDefine("TEX_FLIP_X");
      };
      V.onChange = function () {
        if (V.get()) v.define("TEX_FLIP_Y");
        else v.removeDefine("TEX_FLIP_Y");
      };
    }
    {
      var A = a.inValueBool("Transform");
      var I = a.inValueSlider("Scale X", 1);
      var T = a.inValueSlider("Scale Y", 1);
      var E = a.inValue("Position X", 0);
      var D = a.inValue("Position Y", 0);
      var P = a.inValue("Rotation", 0);
      const j = a.inValueBool("Clip Repeat", false);
      j.onChange = N;
      function N() {
        if (j.get()) v.define("CLIP_REPEAT");
        else v.removeDefine("CLIP_REPEAT");
      }
      const U = new CGL.Uniform(v, "f", "scaleX", I);
      const w = new CGL.Uniform(v, "f", "scaleY", T);
      const B = new CGL.Uniform(v, "f", "posX", E);
      const k = new CGL.Uniform(v, "f", "posY", D);
      const X = new CGL.Uniform(v, "f", "rotate", P);
      A.onChange = y;
    }
    function y() {
      v.toggleDefine("TEX_TRANSFORM", A.get());
      if (A.get()) {
        I.setUiAttribs({
          greyout: false,
        });
        T.setUiAttribs({
          greyout: false,
        });
        E.setUiAttribs({
          greyout: false,
        });
        D.setUiAttribs({
          greyout: false,
        });
        P.setUiAttribs({
          greyout: false,
        });
      } else {
        I.setUiAttribs({
          greyout: true,
        });
        T.setUiAttribs({
          greyout: true,
        });
        E.setUiAttribs({
          greyout: true,
        });
        D.setUiAttribs({
          greyout: true,
        });
        P.setUiAttribs({
          greyout: true,
        });
      }
    }
    CGL.TextureEffect.setupBlending(a, v, n, r);
    const L = new CGL.Uniform(v, "f", "amount", r);
    s.onChange = function () {
      if (s.get() && s.get().tex) {
        v.define("HAS_TEXTUREALPHA");
      } else {
        v.removeDefine("HAS_TEXTUREALPHA");
      }
    };
    function G() {
      if (!CGL.TextureEffect.checkOpInEffect(a)) return;
      const e = o.get();
      if (e && e.tex && r.get() > 0) {
        g.pushShader(v);
        g.currentTextureEffect.bind();
        const t = g.currentTextureEffect.getCurrentSourceTexture();
        g.setTexture(0, t.tex);
        const n =
          (1 /
            (g.currentTextureEffect.getWidth() /
              g.currentTextureEffect.getHeight())) *
          (e.width / e.height);
        _.setValue(n);
        g.setTexture(1, e.tex);
        if (s.get() && s.get().tex) {
          g.setTexture(2, s.get().tex);
        }
        g.pushBlendMode(CGL.BLEND_NONE, true);
        g.currentTextureEffect.finish();
        g.popBlendMode();
        g.popShader();
      }
      p.trigger();
    }
    t.onTriggered = G;
    y();
    S();
    h();
    C();
  };
  Ops.Gl.TextureEffects.DrawImage_v3.prototype = new CABLES.Op();
  CABLES.OPS["8f6b2f15-fcb0-4597-90c0-e5173f2969fe"] = {
    f: Ops.Gl.TextureEffects.DrawImage_v3,
    objName: "Ops.Gl.TextureEffects.DrawImage_v3",
  };
  Ops.Gl.TextureEffects.Color = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = {
      color_frag:
        "IN vec2 texCoord;\nUNI sampler2D tex;\nUNI float r;\nUNI float g;\nUNI float b;\nUNI float amount;\n\n#ifdef MASK\n    UNI sampler2D mask;\n#endif\n\n{{CGL.BLENDMODES}}\n\nvoid main()\n{\n    vec4 col=vec4(r,g,b,1.0);\n    vec4 base=texture(tex,texCoord);\n\n    float am=amount;\n    #ifdef MASK\n        float msk=texture(mask,texCoord).r;\n        #ifdef INVERTMASK\n            msk=1.0-msk;\n        #endif\n        am*=1.0-msk;\n    #endif\n\n    outColor= cgl_blend(base,col,am);\n    outColor.a*=base.a;\n\n}\n",
    };
    const n = e.inTrigger("render"),
      a = CGL.TextureEffect.AddBlendSelect(e, "Blend Mode", "normal"),
      r = e.inValueSlider("Amount", 1),
      o = e.inTexture("Mask"),
      i = e.inValueBool("Mask Invert"),
      s = e.inValueSlider("r", Math.random()),
      l = e.inValueSlider("g", Math.random()),
      u = e.inValueSlider("b", Math.random()),
      m = e.outTrigger("trigger");
    s.setUiAttribs({
      colorPick: true,
    });
    e.setPortGroup("Color", [s, l, u]);
    const f = 0;
    const c = e.patch.cgl;
    const d = new CGL.Shader(c, "textureeffect color");
    const p = t.color_frag || "";
    d.setSource(d.getDefaultVertexShader(), p);
    CGL.TextureEffect.setupBlending(e, d, a, r);
    const g = new CGL.Uniform(d, "t", "tex", f),
      v = new CGL.Uniform(d, "t", "mask", 1),
      h = new CGL.Uniform(d, "f", "r", s),
      O = new CGL.Uniform(d, "f", "g", l),
      x = new CGL.Uniform(d, "f", "b", u),
      b = new CGL.Uniform(d, "f", "amount", r);
    o.onChange = function () {
      if (o.get()) d.define("MASK");
      else d.removeDefine("MASK");
    };
    i.onChange = function () {
      if (i.get()) d.define("INVERTMASK");
      else d.removeDefine("INVERTMASK");
    };
    n.onTriggered = function () {
      if (!CGL.TextureEffect.checkOpInEffect(e)) return;
      c.pushShader(d);
      c.currentTextureEffect.bind();
      c.setTexture(f, c.currentTextureEffect.getCurrentSourceTexture().tex);
      if (o.get()) c.setTexture(1, o.get().tex);
      c.currentTextureEffect.finish();
      c.popShader();
      m.trigger();
    };
  };
  Ops.Gl.TextureEffects.Color.prototype = new CABLES.Op();
  CABLES.OPS["c0acfc80-16f9-4f17-978d-bad650f3ed1c"] = {
    f: Ops.Gl.TextureEffects.Color,
    objName: "Ops.Gl.TextureEffects.Color",
  };
  Ops.Gl.Matrix.Transform = function () {
    CABLES.Op.apply(this, arguments);
    const t = this;
    const e = {};
    const n = t.inTrigger("render"),
      a = t.inValue("posX", 0),
      r = t.inValue("posY", 0),
      o = t.inValue("posZ", 0),
      i = t.inValue("scale", 1),
      s = t.inValue("rotX", 0),
      l = t.inValue("rotY", 0),
      u = t.inValue("rotZ", 0),
      m = t.outTrigger("trigger");
    t.setPortGroup("Rotation", [s, l, u]);
    t.setPortGroup("Position", [a, r, o]);
    t.setPortGroup("Scale", [i]);
    t.setUiAxisPorts(a, r, o);
    const f = t.patch.cgl;
    const c = vec3.create();
    const d = vec3.create();
    const p = mat4.create();
    mat4.identity(p);
    let g = false,
      v = false,
      h = true,
      O = true,
      x = true;
    s.onChange = l.onChange = u.onChange = A;
    a.onChange = r.onChange = o.onChange = C;
    i.onChange = S;
    n.onTriggered = function () {
      let e = false;
      if (h) {
        _();
        e = true;
      }
      if (O) {
        M();
        e = true;
      }
      if (x) e = true;
      if (e) b();
      f.pushModelMatrix();
      mat4.multiply(f.mMatrix, f.mMatrix, p);
      m.trigger();
      f.popModelMatrix();
      if (CABLES.UI && CABLES.UI.showCanvasTransforms)
        gui.setTransform(t.id, a.get(), r.get(), o.get());
      if (t.isCurrentUiOp())
        gui.setTransformGizmo({
          posX: a,
          posY: r,
          posZ: o,
        });
    };
    t.transform3d = function () {
      return {
        pos: [a, r, o],
      };
    };
    function b() {
      mat4.identity(p);
      if (v) mat4.translate(p, p, c);
      if (s.get() !== 0) mat4.rotateX(p, p, s.get() * CGL.DEG2RAD);
      if (l.get() !== 0) mat4.rotateY(p, p, l.get() * CGL.DEG2RAD);
      if (u.get() !== 0) mat4.rotateZ(p, p, u.get() * CGL.DEG2RAD);
      if (g) mat4.scale(p, p, d);
      x = false;
    }
    function _() {
      v = false;
      if (a.get() !== 0 || r.get() !== 0 || o.get() !== 0) v = true;
      vec3.set(c, a.get(), r.get(), o.get());
      h = false;
    }
    function M() {
      g = true;
      vec3.set(d, i.get(), i.get(), i.get());
      O = false;
    }
    function C() {
      h = true;
    }
    function S() {
      O = true;
    }
    function A() {
      x = true;
    }
    b();
  };
  Ops.Gl.Matrix.Transform.prototype = new CABLES.Op();
  CABLES.OPS["650baeb1-db2d-4781-9af6-ab4e9d4277be"] = {
    f: Ops.Gl.Matrix.Transform,
    objName: "Ops.Gl.Matrix.Transform",
  };
  Ops.Gl.TextureEffects.Invert = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = {
      invert_frag:
        "IN vec2 texCoord;\nUNI sampler2D tex;\nUNI sampler2D texMask;\nUNI float amount;\n\n{{CGL.BLENDMODES}}\n\nvoid main()\n{\n   vec4 col=vec4(1.0,0.0,0.0,1.0);\n   col=texture(tex,texCoord);\n\n    #ifdef USE_MASK\n        #ifdef MASK_INVERT\n            if(texture(texMask,texCoord).r>0.5)\n            {\n                outColor= col;\n                return;\n            }\n        #endif\n\n        #ifndef MASK_INVERT\n            if(texture(texMask,texCoord).r<0.5)\n            {\n                outColor= col;\n                return;\n            }\n        #endif\n    #endif\n\n   vec4 invert = vec4(vec3(1.0)-col.rgb,1.0);\n\n   outColor=cgl_blend(col,invert,amount);\n}\n",
    };
    const n = e.inTrigger("render");
    const a = CGL.TextureEffect.AddBlendSelect(e, "Blend Mode", "normal");
    const r = e.inBool("Mask Invert", false);
    const o = e.inTexture("Mask");
    const i = e.inValueSlider("Amount", 1);
    const s = e.outTrigger("trigger");
    const l = e.patch.cgl;
    const u = new CGL.Shader(l, e.name);
    u.setSource(u.getDefaultVertexShader(), t.invert_frag);
    const m = new CGL.Uniform(u, "t", "tex", 0),
      f = new CGL.Uniform(u, "f", "amount", i),
      c = new CGL.Uniform(u, "t", "texMask", 1);
    CGL.TextureEffect.setupBlending(e, u, a, i);
    r.onChange = o.onChange = () => {
      u.toggleDefine("USE_MASK", o.isLinked());
      u.toggleDefine("MASK_INVERT", r.get());
    };
    n.onTriggered = function () {
      if (!CGL.TextureEffect.checkOpInEffect(e)) return;
      l.pushShader(u);
      l.currentTextureEffect.bind();
      l.setTexture(0, l.currentTextureEffect.getCurrentSourceTexture().tex);
      if (o.get()) l.setTexture(1, o.get().tex);
      l.currentTextureEffect.finish();
      l.popShader();
      s.trigger();
    };
  };
  Ops.Gl.TextureEffects.Invert.prototype = new CABLES.Op();
  CABLES.OPS["7188ff85-e73c-4a3b-8237-49508a00d63a"] = {
    f: Ops.Gl.TextureEffects.Invert,
    objName: "Ops.Gl.TextureEffects.Invert",
  };
  Ops.Math.MapRange = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = {};
    const c = e.inValueFloat("value", 0),
      d = e.inValueFloat("old min", 0),
      p = e.inValueFloat("old max", 1),
      g = e.inValueFloat("new min", -1),
      v = e.inValueFloat("new max", 1),
      n = e.inValueSelect(
        "Easing",
        ["Linear", "Smoothstep", "Smootherstep"],
        "Linear"
      ),
      h = e.outValue("result", 0);
    e.setPortGroup("Input Range", [d, p]);
    e.setPortGroup("Output Range", [g, v]);
    let O = 0;
    let x = 0;
    c.onChange = d.onChange = p.onChange = g.onChange = v.onChange = a;
    a();
    n.onChange = function () {
      if (n.get() == "Smoothstep") O = 1;
      else if (n.get() == "Smootherstep") O = 2;
      else O = 0;
    };
    function a() {
      const e = g.get();
      const t = v.get();
      const n = d.get();
      const a = p.get();
      let r = c.get();
      if (r >= Math.max(a, n)) {
        h.set(t);
        return;
      } else if (r <= Math.min(a, n)) {
        h.set(e);
        return;
      }
      let o = false;
      const i = Math.min(n, a);
      const s = Math.max(n, a);
      if (i != n) o = true;
      let l = false;
      const u = Math.min(e, t);
      const m = Math.max(e, t);
      if (u != e) l = true;
      let f = 0;
      if (o) f = ((s - r) * (m - u)) / (s - i);
      else f = ((r - i) * (m - u)) / (s - i);
      if (l) x = m - f;
      else x = f + u;
      if (O === 0) {
        h.set(x);
      } else if (O == 1) {
        r = Math.max(0, Math.min(1, (x - e) / (t - e)));
        h.set(e + r * r * (3 - 2 * r) * (t - e));
      } else if (O == 2) {
        r = Math.max(0, Math.min(1, (x - e) / (t - e)));
        h.set(e + r * r * r * (r * (r * 6 - 15) + 10) * (t - e));
      }
    }
  };
  Ops.Math.MapRange.prototype = new CABLES.Op();
  CABLES.OPS["2617b407-60a0-4ff6-b4a7-18136cfa7817"] = {
    f: Ops.Math.MapRange,
    objName: "Ops.Math.MapRange",
  };
  Ops.Value.Number = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = {};
    const n = e.inValueFloat("value");
    const a = e.outValue("result");
    n.onChange = r;
    function r() {
      a.set(Number(n.get()));
    }
  };
  Ops.Value.Number.prototype = new CABLES.Op();
  CABLES.OPS["8fb2bb5d-665a-4d0a-8079-12710ae453be"] = {
    f: Ops.Value.Number,
    objName: "Ops.Value.Number",
  };
  Ops.Gl.MeshInstancer_v4 = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = {
      instancer_body_frag:
        "#ifdef COLORIZE_INSTANCES\n    #ifdef BLEND_MODE_MULTIPLY\n        col.rgb *= frag_instColor.rgb;\n        col.a *= frag_instColor.a;\n    #endif\n\n    #ifdef BLEND_MODE_ADD\n        col.rgb += frag_instColor.rgb;\n        col.a += frag_instColor.a;\n    #endif\n\n    #ifdef BLEND_MODE_NONE\n        col.rgb = frag_instColor.rgb;\n        col.a = frag_instColor.a;\n    #endif\n#endif\n",
      instancer_body_vert:
        "\n\n#ifdef HAS_TEXCOORDS\ntexCoord=(texCoord*instTexCoords.zw)+instTexCoords.xy;\n#endif\n\nmMatrix*=instMat;\npos.xyz*=MOD_scale;\n\n#ifdef HAS_COLORS\nfrag_instColor=instColor;\n#endif\n#ifndef HAS_COLORS\nfrag_instColor=vec4(1.0);\n#endif\n\n",
      instancer_head_frag: "IN vec4 frag_instColor;\n",
      instancer_head_vert:
        "\nIN vec4 instColor;\nIN mat4 instMat;\nIN vec4 instTexCoords;\nOUT mat4 instModelMat;\nOUT vec4 frag_instColor;\n\n#define INSTANCING",
    };
    const n = e.inTrigger("exe"),
      a = e.inObject("geom"),
      r = e.inValue("Scale", 1),
      o = e.inValueBool("Limit Instances", false),
      i = e.inValueInt("Limit", 100),
      l = e.inArray("positions"),
      u = e.inArray("Scale Array"),
      m = e.inArray("Rotations"),
      f = e.inSwitch("Rotation Type", ["Euler", "Quaternions"], "Euler"),
      s = e.inSwitch(
        "Material blend mode",
        ["Multiply", "Add", "Normal"],
        "Multiply"
      ),
      c = e.inArray("Colors"),
      d = e.inArray("TexCoords"),
      p = e.outTrigger("Trigger Out"),
      g = e.outValue("Num");
    e.setPortGroup("Limit Number of Instances", [i, o]);
    e.setPortGroup("Parameters", [u, m, l, f]);
    e.toWorkPortsNeedToBeLinked(a);
    e.toWorkPortsNeedToBeLinked(n);
    a.ignoreValueSerialize = true;
    const v = e.patch.cgl;
    const h = mat4.create();
    let O = new Float32Array(1),
      x = new Float32Array(1),
      b = new Float32Array(1),
      _ = null,
      M = true,
      C = 0,
      S = true,
      A = true,
      I = true;
    const T = new CGL.ShaderModifier(v, e.name);
    T.addModule({
      name: "MODULE_VERTEX_POSITION",
      title: e.name,
      priority: -2,
      srcHeadVert: t.instancer_head_vert,
      srcBodyVert: t.instancer_body_vert,
    });
    T.addModule({
      name: "MODULE_COLOR",
      priority: -2,
      title: e.name,
      srcHeadFrag: t.instancer_head_frag,
      srcBodyFrag: t.instancer_body_frag,
    });
    T.addUniformVert("f", "MOD_scale", r);
    let E = true;
    s.onChange = () => {
      E = true;
    };
    o.onChange = L;
    n.onTriggered = G;
    n.onLinkChanged = function () {
      if (!n.isLinked()) N();
    };
    L();
    m.onChange =
      u.onChange =
      l.onChange =
      f.onChange =
        function () {
          I = true;
          M = true;
        };
    d.onChange = function () {
      A = true;
      M = true;
      E = true;
    };
    c.onChange = function () {
      S = true;
      M = true;
      E = true;
    };
    function D() {
      (S = true), (I = true);
      M = true;
    }
    function P() {
      T.toggleDefine("COLORIZE_INSTANCES", c.get());
      T.toggleDefine("TEXCOORDS_INSTANCES", d.get());
      T.toggleDefine("BLEND_MODE_MULTIPLY", s.get() === "Multiply");
      T.toggleDefine("BLEND_MODE_ADD", s.get() === "Add");
      T.toggleDefine("BLEND_MODE_NONE", s.get() === "Normal");
      E = false;
    }
    a.onChange = function () {
      if (_) _.dispose();
      if (!a.get()) {
        _ = null;
        return;
      }
      _ = new CGL.Mesh(v, a.get());
      D();
    };
    function N() {}
    function y() {
      if (!_) return;
      let e = l.get();
      if (!e) e = [0, 0, 0];
      C = Math.floor(e.length / 3);
      if (E) P();
      const n = c.get();
      const a = d.get();
      const r = u.get();
      if (O.length != C * 16) O = new Float32Array(C * 16);
      if (x.length != C * 4) {
        S = true;
        x = new Float32Array(C * 4);
      }
      if (b.length != C * 4) {
        A = true;
        b = new Float32Array(C * 4);
      }
      const o = m.get();
      const i = f.get() == "Quaternions";
      for (let t = 0; t < C; t++) {
        mat4.identity(h);
        mat4.translate(h, h, [e[t * 3], e[t * 3 + 1], e[t * 3 + 2]]);
        if (o) {
          if (i) {
            const s = mat4.create();
            mat4.fromQuat(s, [
              o[t * 4 + 0],
              o[t * 4 + 1],
              o[t * 4 + 2],
              o[t * 4 + 3],
            ]);
            mat4.mul(h, h, s);
          } else {
            mat4.rotateX(h, h, o[t * 3 + 0] * CGL.DEG2RAD);
            mat4.rotateY(h, h, o[t * 3 + 1] * CGL.DEG2RAD);
            mat4.rotateZ(h, h, o[t * 3 + 2] * CGL.DEG2RAD);
          }
        }
        if (S && n) {
          x[t * 4 + 0] = n[t * 4 + 0];
          x[t * 4 + 1] = n[t * 4 + 1];
          x[t * 4 + 2] = n[t * 4 + 2];
          x[t * 4 + 3] = n[t * 4 + 3];
        }
        if (A && a) {
          b[t * 4 + 0] = a[t * 4 + 0];
          b[t * 4 + 1] = a[t * 4 + 1];
          b[t * 4 + 2] = a[t * 4 + 2];
          b[t * 4 + 3] = a[t * 4 + 3];
        }
        if (r && r.length > t)
          mat4.scale(h, h, [r[t * 3], r[t * 3 + 1], r[t * 3 + 2]]);
        else mat4.scale(h, h, [1, 1, 1]);
        for (let e = 0; e < 16; e++) O[t * 16 + e] = h[e];
      }
      _.numInstances = C;
      if (I) _.addAttribute("instMat", O, 16);
      if (S)
        _.addAttribute("instColor", x, 4, {
          instanced: true,
        });
      if (A)
        _.addAttribute("instTexCoords", b, 4, {
          instanced: true,
        });
      T.toggleDefine("HAS_TEXCOORDS", a);
      T.toggleDefine("HAS_COLORS", n);
      S = false;
      M = false;
    }
    function L() {
      i.setUiAttribs({
        hidePort: !o.get(),
        greyout: !o.get(),
      });
    }
    function G() {
      if (!_) return;
      if (M) y();
      T.bind();
      if (o.get()) _.numInstances = Math.min(C, i.get());
      else _.numInstances = C;
      g.set(_.numInstances);
      if (_.numInstances > 0) _.render(v.getShader());
      p.trigger();
      T.unbind();
    }
  };
  Ops.Gl.MeshInstancer_v4.prototype = new CABLES.Op();
  CABLES.OPS["322d8c8d-851b-481d-9bee-ec1cf7d57a35"] = {
    f: Ops.Gl.MeshInstancer_v4,
    objName: "Ops.Gl.MeshInstancer_v4",
  };
  Ops.Gl.Meshes.Triangle = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = {};
    const n = e.inTrigger("render"),
      a = e.outTrigger("trigger"),
      r = e.inValueFloat("width", 1),
      o = e.inValueFloat("height", 1),
      i = e.inValueBool("Draw", true),
      s = new CGL.Geometry("triangle"),
      l = e.outObject("geometry");
    l.ignoreValueSerialize = true;
    e.setPortGroup("Size", [r, o]);
    const u = e.patch.cgl;
    let m = null;
    r.onChange = f;
    o.onChange = f;
    f();
    e.preRender = f;
    n.onTriggered = function () {
      if (i.get()) m.render(u.getShader());
      a.trigger();
    };
    function f() {
      s.vertices = [0, o.get(), 0, -r.get(), -o.get(), 0, r.get(), -o.get(), 0];
      s.vertexNormals = [0, 0, 1, 0, 0, 1, 0, 0, 1];
      s.tangents = [1, 0, 0, 1, 0, 0, 1, 0, 0];
      s.biTangents = [0, 1, 0, 0, 1, 0, 0, 1, 0];
      s.texCoords = [0.5, 0, 1, 1, 0, 1];
      s.verticesIndices = [0, 1, 2];
      m = new CGL.Mesh(u, s);
      l.set(null);
      l.set(s);
    }
  };
  Ops.Gl.Meshes.Triangle.prototype = new CABLES.Op();
  CABLES.OPS["331bc9dc-d44c-43bd-be18-a2673fba124e"] = {
    f: Ops.Gl.Meshes.Triangle,
    objName: "Ops.Gl.Meshes.Triangle",
  };
  Ops.Gl.Geometry.GeometryPoints = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = {};
    const n = e.inObject("Geometry"),
      a = e.outArray("Vertices"),
      r = e.outArray("Faces"),
      o = e.outArray("TexCoords"),
      i = e.outArray("Vertex Colors"),
      s = e.outArray("Normals"),
      l = e.outArray("BiTangents"),
      u = e.outArray("Tangents");
    n.onChange = function () {
      var e = n.get();
      if (!e) return;
      var t = Array.prototype.slice.call(e.vertices);
      a.set(t);
      r.set(e.verticesIndices);
      o.set(e.texCoords);
      s.set(e.vertexNormals);
      u.set(e.tangents);
      l.set(e.biTangents);
      i.set(e.vertexColors[0]);
    };
  };
  Ops.Gl.Geometry.GeometryPoints.prototype = new CABLES.Op();
  CABLES.OPS["b215118b-de1f-4be9-8890-d07a2ecff010"] = {
    f: Ops.Gl.Geometry.GeometryPoints,
    objName: "Ops.Gl.Geometry.GeometryPoints",
  };
  Ops.Gl.ShaderEffects.InstancedDisplacementMap = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = {
      displace_vert:
        "\n#ifdef INSTANCING\n\n    #ifdef MOD_SRC_INSTMAT\n        vec3 MOD_p=vec3(instMat[3][0],instMat[3][1],instMat[3][2]);\n    #endif\n\n    #ifdef MOD_SRC_MMAT\n        vec3 MOD_p=vec3(mMatrix[3][0],mMatrix[3][1],mMatrix[3][2]);\n    #endif\n    // vec3 MOD_p=(mMatrix*vec4(0.0,0.0,0.0,1.0)).xyz;//vec3(mMatrix[3][0],mMatrix[3][1],mMatrix[3][2]);\n\n    vec2 MOD_coord=MOD_p.xy*(1.0/MOD_scale)+MOD_offset-vec2(0.5,0.5);\n\n    // vec3 MOD_dis\n\n    #ifdef MOD_CHAN_R\n        vec3 MOD_dis=vec3( texture(MOD_texture,MOD_coord).r );\n    #endif\n    #ifdef MOD_CHAN_G\n        vec3 MOD_dis=vec3( texture(MOD_texture,MOD_coord).g );\n    #endif\n    #ifdef MOD_CHAN_B\n        vec3 MOD_dis=vec3( texture(MOD_texture,MOD_coord).b );\n    #endif\n\n    #ifdef MOD_CHAN_RGB\n        vec3 MOD_dis=vec3( texture(MOD_texture,MOD_coord).rgb );\n    #endif\n\n    #ifdef MOD_COLORIZE\n        MOD_dispColor=MOD_dis;\n    #endif\n\n    #ifdef MOD_DEBUG\n        MOD_dispColor.rg=mod(MOD_coord,1.0).rg;\n    #endif\n\n\n    #ifdef MOD_NORMALIZE\n        MOD_dis=(MOD_dis-0.5)*2.0;\n    #endif\n\n\n    #ifdef MOD_CLAMP\n    if(MOD_coord.x>1.0||MOD_coord.x<0.0|| MOD_coord.y>1.0 || MOD_coord.y<0.0)\n    {\n        MOD_dis=vec3(0.0);\n        #ifdef MOD_COLORIZE\n            MOD_dispColor=vec3(0.0);\n        #endif\n    }\n    #endif\n\n\n    #ifdef MOD_MODE_TRANS\n        MOD_dis*=MOD_strength;\n        MOD_dis+=MOD_min;\n\n        #ifdef MOD_AXIS_X\n            // pos.x+=MOD_dis;\n            mMatrix[3][0] += MOD_dis.x;\n        #endif\n        #ifdef MOD_AXIS_Y\n            // pos.y+=MOD_dis;\n            mMatrix[3][1] += MOD_dis.y;\n        #endif\n        #ifdef MOD_AXIS_Z\n            // pos.z+=MOD_dis;\n            mMatrix[3][2] += MOD_dis.z;\n        #endif\n    #endif\n\n    #ifdef MOD_MODE_SCALE\n        MOD_dis*=MOD_strength;\n        MOD_dis+=MOD_min;\n\n        #ifdef MOD_ABS\n            MOD_dis=abs(MOD_dis);\n        #endif\n\n        #ifdef MOD_AXIS_X\n            pos.x*=MOD_dis.x;\n        #endif\n        #ifdef MOD_AXIS_Y\n            pos.y*=MOD_dis.y;\n        #endif\n        #ifdef MOD_AXIS_Z\n            pos.z*=MOD_dis.z;\n        #endif\n    #endif\n\n    #ifdef MOD_MODE_ROT\n        #define MOD_PI 3.14159265358\n\n        #ifdef MOD_AXIS_X\n            pos*=MOD_rot(vec3(1.0,0.0,0.0), MOD_dis.x*3.14);\n            norm=((vec4(norm,0.0)*MOD_rot(vec3(1.0,0.0,0.0), MOD_dis.x*MOD_PI)).xyz);\n        #endif\n        #ifdef MOD_AXIS_Y\n            pos*=MOD_rot(vec3(0.0,1.0,0.0), MOD_dis.y*MOD_PI);\n            norm=((vec4(norm,0.0)*MOD_rot(vec3(0.0,1.0,0.0), MOD_dis.y*MOD_PI)).xyz);\n        #endif\n        #ifdef MOD_AXIS_Z\n            pos*=MOD_rot(vec3(0.0,0.0,1.0), MOD_dis.z*MOD_PI);\n            norm=((vec4(norm,0.0)*MOD_rot(vec3(0.0,0.0,1.0), MOD_dis.z*MOD_PI)).xyz);\n        #endif\n\n        norm=normalize(norm);\n    #endif\n\n#endif\n",
      displace_head_vert:
        "\n#ifdef MOD_COLORIZE\nOUT vec3 MOD_dispColor;\n#endif\n\n\n\n#ifdef MOD_MODE_ROT\n\n    mat4 MOD_rot(vec3 axis, float angle)\n    {\n        axis = normalize(axis);\n        float s = sin(angle);\n        float c = cos(angle);\n        float oc = 1.0 - c;\n\n        return mat4(\n    \t\toc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,\n            oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,\n            oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,\n    \t\t0.0,                                0.0,                                0.0,                                1.0\n    \t);\n    }\n\n#endif",
    };
    const n = e.inTrigger("Trigger"),
      a = e.inTexture("Texture"),
      r = e.inSwitch("Source", ["Model Pos", "Inst Pos"], "Model Pos"),
      o = e.inSwitch("Mode", ["Translate", "Scale", "Rotate"], "Translate"),
      i = e.inFloat("Strength", 1),
      s = e.inFloat("Min", 0),
      l = e.inFloat("Scale", 1),
      u = e.inBool("Clamp", false),
      m = e.inBool("Colorize", false),
      f = e.inBool("Debug Bounds", false),
      c = e.inBool("Normalize", false),
      d = e.inFloat("Offset X", 0),
      p = e.inFloat("Offset Y", 0),
      g = e.inBool("Abs", false),
      v = e.inSwitch("Channel", ["R", "G", "B", "RGB"], "R"),
      h = e.inBool("X", false),
      O = e.inBool("Y", false),
      x = e.inBool("Z", true),
      b = e.outTrigger("Next");
    h.onChange =
      a.onChange =
      O.onChange =
      x.onChange =
      u.onChange =
      o.onChange =
      c.onChange =
      f.onChange =
      v.onChange =
      g.onChange =
      m.onChange =
        C;
    n.onTriggered = S;
    const _ = e.patch.cgl;
    const M = new CGL.ShaderModifier(_, e.name);
    M.addModule({
      title: e.name,
      name: "MODULE_VERTEX_POSITION",
      srcHeadVert: t.displace_head_vert || "",
      srcBodyVert: t.displace_vert || "",
    });
    M.addModule({
      title: e.name,
      name: "MODULE_COLOR",
      srcHeadFrag: "#ifdef MOD_COLORIZE\nIN vec3 MOD_dispColor;\n#endif",
      srcBodyFrag: "#ifdef MOD_COLORIZE\ncol.rgb*=MOD_dispColor;\n#endif",
    });
    M.addUniformVert("t", "MOD_texture", 0);
    M.addUniformVert("2f", "MOD_offset", d, p);
    M.addUniformVert("f", "MOD_scale", l);
    M.addUniformVert("f", "MOD_strength", i);
    M.addUniformVert("f", "MOD_min", s);
    C();
    function C() {
      e.setUiAttrib({
        extendTitle: o.get(),
      });
      M.toggleDefine("MOD_MODE_TRANS", o.get() === "Translate");
      M.toggleDefine("MOD_MODE_SCALE", o.get() === "Scale");
      M.toggleDefine("MOD_MODE_ROT", o.get() === "Rotate");
      M.toggleDefine(
        "MOD_CHAN_R",
        v.get() != "G" && v.get() != "B" && v.get() != "RGB"
      );
      M.toggleDefine("MOD_CHAN_G", v.get() == "G");
      M.toggleDefine("MOD_CHAN_B", v.get() == "B");
      M.toggleDefine("MOD_CHAN_RGB", v.get() == "RGB");
      M.toggleDefine("MOD_SRC_INSTMAT", r.get() == "Inst Pos");
      M.toggleDefine("MOD_SRC_MMAT", r.get() == "Model Pos");
      M.toggleDefine("MOD_AXIS_X", h.get());
      M.toggleDefine("MOD_AXIS_Y", O.get());
      M.toggleDefine("MOD_AXIS_Z", x.get());
      M.toggleDefine("MOD_ABS", g.get());
      M.toggleDefine("MOD_CLAMP", u.get());
      M.toggleDefine("MOD_COLORIZE", m.get() || f.get());
      M.toggleDefine("MOD_NORMALIZE", c.get());
      M.toggleDefine("MOD_DEBUG", f.get());
    }
    function S() {
      M.bind();
      if (a.get()) M.pushTexture("MOD_texture", a.get().tex);
      else M.pushTexture("MOD_texture", CGL.Texture.getEmptyTexture(_).tex);
      b.trigger();
      M.unbind();
    }
  };
  Ops.Gl.ShaderEffects.InstancedDisplacementMap.prototype = new CABLES.Op();
  CABLES.OPS["fb30d485-3906-4a17-b4d3-365286044035"] = {
    f: Ops.Gl.ShaderEffects.InstancedDisplacementMap,
    objName: "Ops.Gl.ShaderEffects.InstancedDisplacementMap",
  };
  Ops.Gl.ShaderEffects.TransformVertex = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = {
      trans_vert:
        "\n\n\npos.xyz*=vec3(MOD_scale);\npos.xyz+=vec3(MOD_translate);\n\nmat4 rmat=\n        MOD_rotationX(MOD_rot.x*0.0174533)*\n        MOD_rotationY(MOD_rot.y*0.0174533)*\n        MOD_rotationZ(MOD_rot.z*0.0174533);\n\npos*=rmat;\n\n#ifdef MOD_TRANS_NORMS\n    norm=(vec4(norm,1.0)*rmat).xyz;\n    bitangent=(vec4(bitangent,1.0)*rmat).xyz;\n    tangent=(vec4(tangent,1.0)*rmat).xyz;\n#endif",
      trans_head_vert:
        "\nmat4 MOD_rotationX( in float angle ) {\n\treturn mat4(\t1.0,\t\t0,\t\t\t0,\t\t\t0,\n\t\t\t \t\t0, \tcos(angle),\t-sin(angle),\t\t0,\n\t\t\t\t\t0, \tsin(angle),\t cos(angle),\t\t0,\n\t\t\t\t\t0, \t\t\t0,\t\t\t  0, \t\t1);\n}\n\nmat4 MOD_rotationY( in float angle ) {\n\treturn mat4(\tcos(angle),\t\t0,\t\tsin(angle),\t0,\n\t\t\t \t\t\t\t0,\t\t1.0,\t\t\t 0,\t0,\n\t\t\t\t\t-sin(angle),\t0,\t\tcos(angle),\t0,\n\t\t\t\t\t\t\t0, \t\t0,\t\t\t\t0,\t1);\n}\n\nmat4 MOD_rotationZ( in float angle ) {\n\treturn mat4(\tcos(angle),\t\t-sin(angle),\t0,\t0,\n\t\t\t \t\tsin(angle),\t\tcos(angle),\t\t0,\t0,\n\t\t\t\t\t\t\t0,\t\t\t\t0,\t\t1,\t0,\n\t\t\t\t\t\t\t0,\t\t\t\t0,\t\t0,\t1);\n}\n",
    };
    const n = e.inTrigger("render"),
      a = e.outTrigger("Trigger"),
      r = e.inValue("Translate X", 0),
      o = e.inValue("Translate Y", 0),
      i = e.inValue("Translate Z", 0),
      s = e.inValue("Scale X", 1),
      l = e.inValue("Scale Y", 1),
      u = e.inValue("Scale Z", 1),
      m = e.inValue("Rotation X", 0),
      f = e.inValue("Rotation Y", 0),
      c = e.inValue("Rotation Z", 0),
      d = e.inBool("Transform normals", false);
    const p = e.patch.cgl;
    const g = new CGL.ShaderModifier(p, e.name);
    g.addModule({
      priority: -2,
      name: "MODULE_VERTEX_POSITION",
      srcHeadVert: t.trans_head_vert || "",
      srcBodyVert: t.trans_vert || "",
    });
    g.addUniformVert("3f", "MOD_translate", r, o, i);
    g.addUniformVert("3f", "MOD_scale", s, l, u);
    g.addUniformVert("3f", "MOD_rot", m, f, c);
    d.onChange = v;
    v();
    function v() {
      g.toggleDefine("MOD_TRANS_NORMS", d.get());
    }
    n.onTriggered = function () {
      g.bind();
      a.trigger();
      g.unbind();
    };
  };
  Ops.Gl.ShaderEffects.TransformVertex.prototype = new CABLES.Op();
  CABLES.OPS["68ca4a91-c3ce-4e81-bb84-3ba5f50dfaa1"] = {
    f: Ops.Gl.ShaderEffects.TransformVertex,
    objName: "Ops.Gl.ShaderEffects.TransformVertex",
  };
  Ops.Gl.TextureEffects.BrightnessContrast = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = {
      brightness_contrast_frag:
        "IN vec2 texCoord;\nUNI sampler2D tex;\nUNI float amount;\nUNI float amountbright;\n\nvoid main()\n{\n    vec4 col=vec4(1.0,0.0,0.0,1.0);\n    col=texture(tex,texCoord);\n\n    // apply contrast\n    col.rgb = ((col.rgb - 0.5) * max(amount*2.0, 0.0))+0.5;\n\n    // apply brightness\n    col.rgb *= amountbright*2.0;\n\n    outColor = col;\n}",
    };
    var n = e.inTrigger("render");
    var a = e.inValueSlider("contrast", 0.5);
    var r = e.inValueSlider("brightness", 0.5);
    var o = e.outTrigger("trigger");
    var i = e.patch.cgl;
    var s = new CGL.Shader(i, "brightnesscontrast");
    s.setSource(s.getDefaultVertexShader(), t.brightness_contrast_frag);
    var l = new CGL.Uniform(s, "t", "tex", 0);
    var u = new CGL.Uniform(s, "f", "amount", a);
    var m = new CGL.Uniform(s, "f", "amountbright", r);
    n.onTriggered = function () {
      if (!CGL.TextureEffect.checkOpInEffect(e)) return;
      if (!i.currentTextureEffect.getCurrentSourceTexture()) return;
      if (!CGL.TextureEffect.checkOpInEffect(e)) return;
      i.pushShader(s);
      i.currentTextureEffect.bind();
      i.setTexture(0, i.currentTextureEffect.getCurrentSourceTexture().tex);
      i.currentTextureEffect.finish();
      i.popShader();
      o.trigger();
    };
  };
  Ops.Gl.TextureEffects.BrightnessContrast.prototype = new CABLES.Op();
  CABLES.OPS["54b89199-c594-4dff-bc48-82d6c7a55e8a"] = {
    f: Ops.Gl.TextureEffects.BrightnessContrast,
    objName: "Ops.Gl.TextureEffects.BrightnessContrast",
  };
  Ops.Gl.Render2Texture = function () {
    CABLES.Op.apply(this, arguments);
    const a = this;
    const e = {};
    const r = a.patch.cgl;
    const t = a.inTrigger("render"),
      n = a.inValueBool("use viewport size", true),
      o = a.inValueInt("texture width", 512),
      i = a.inValueInt("texture height", 512),
      s = a.inBool("Auto Aspect", false),
      l = a.inSwitch("filter", ["nearest", "linear", "mipmap"], "linear"),
      u = a.inSwitch("Wrap", ["Clamp", "Repeat", "Mirror"], "Repeat"),
      m = a.inSwitch("MSAA", ["none", "2x", "4x", "8x"], "none"),
      f = a.outTrigger("trigger"),
      c = a.outTexture("texture"),
      d = a.outTexture("textureDepth"),
      p = a.inValueBool("HDR"),
      g = a.inValueBool("Depth", true),
      v = a.inValueBool("Clear", true);
    let h = null;
    let O = true;
    c.set(CGL.Texture.getEmptyTexture(r));
    a.setPortGroup("Size", [n, o, i, s]);
    n.onChange = x;
    function x() {
      o.setUiAttribs({
        greyout: n.get(),
      });
      i.setUiAttribs({
        greyout: n.get(),
      });
      s.setUiAttribs({
        greyout: n.get(),
      });
    }
    function b() {
      O = true;
    }
    const _ = [0, 0, 0, 0];
    p.onChange =
      g.onChange =
      v.onChange =
      l.onChange =
      u.onChange =
      m.onChange =
        b;
    function M() {
      const e = r.getViewPort();
      _[0] = e[0];
      _[1] = e[1];
      _[2] = e[2];
      _[3] = e[3];
      if (!h || O) {
        if (h) h.delete();
        let n = CGL.Texture.WRAP_REPEAT;
        if (u.get() == "Clamp") n = CGL.Texture.WRAP_CLAMP_TO_EDGE;
        else if (u.get() == "Mirror") n = CGL.Texture.WRAP_MIRRORED_REPEAT;
        if (p.get() && l.get() == "mipmap")
          a.setUiError(
            "fpmipmap",
            "Don't use mipmap and HDR at the same time, many systems do not support this."
          );
        else a.setUiError("fpmipmap", null);
        if (r.glVersion >= 2) {
          let e = true;
          let t = 4;
          if (m.get() == "none") {
            t = 0;
            e = false;
          }
          if (m.get() == "2x") t = 2;
          if (m.get() == "4x") t = 4;
          if (m.get() == "8x") t = 8;
          h = new CGL.Framebuffer2(r, 8, 8, {
            name: "render2texture " + a.id,
            isFloatingPointTexture: p.get(),
            multisampling: e,
            wrap: n,
            depth: g.get(),
            multisamplingSamples: t,
            clear: v.get(),
          });
        } else {
          h = new CGL.Framebuffer(r, 8, 8, {
            isFloatingPointTexture: p.get(),
            clear: v.get(),
          });
        }
        if (l.get() == "nearest") h.setFilter(CGL.Texture.FILTER_NEAREST);
        else if (l.get() == "linear") h.setFilter(CGL.Texture.FILTER_LINEAR);
        else if (l.get() == "mipmap") h.setFilter(CGL.Texture.FILTER_MIPMAP);
        d.set(h.getTextureDepth());
        O = false;
      }
      if (n.get()) {
        o.set(r.getViewPort()[2]);
        i.set(r.getViewPort()[3]);
      }
      if (
        h.getWidth() != Math.ceil(o.get()) ||
        h.getHeight() != Math.ceil(i.get())
      ) {
        h.setSize(
          Math.max(1, Math.ceil(o.get())),
          Math.max(1, Math.ceil(i.get()))
        );
      }
      h.renderStart(r);
      if (s.get()) mat4.perspective(r.pMatrix, 45, o.get() / i.get(), 0.1, 1e3);
      f.trigger();
      h.renderEnd(r);
      r.setViewPort(_[0], _[1], _[2], _[3]);
      c.set(CGL.Texture.getEmptyTexture(a.patch.cgl));
      c.set(h.getTextureColor());
    }
    t.onTriggered = M;
    a.preRender = M;
    x();
  };
  Ops.Gl.Render2Texture.prototype = new CABLES.Op();
  CABLES.OPS["d01fa820-396c-4cb5-9d78-6b14762852af"] = {
    f: Ops.Gl.Render2Texture,
    objName: "Ops.Gl.Render2Texture",
  };
  Ops.Gl.Shader.BasicMaterial_v3 = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = {
      basicmaterial_frag:
        "{{MODULES_HEAD}}\n\nIN vec2 texCoord;\n\n#ifdef HAS_TEXTURES\n    IN vec2 texCoordOrig;\n    #ifdef HAS_TEXTURE_DIFFUSE\n        UNI sampler2D tex;\n    #endif\n    #ifdef HAS_TEXTURE_OPACITY\n        UNI sampler2D texOpacity;\n   #endif\n#endif\n\nvoid main()\n{\n    {{MODULE_BEGIN_FRAG}}\n    vec4 col=color;\n\n    #ifdef HAS_TEXTURES\n        vec2 uv=texCoord;\n\n        #ifdef CROP_TEXCOORDS\n            if(uv.x<0.0 || uv.x>1.0 || uv.y<0.0 || uv.y>1.0) discard;\n        #endif\n\n        #ifdef HAS_TEXTURE_DIFFUSE\n            col=texture(tex,uv);\n\n            #ifdef COLORIZE_TEXTURE\n                col.r*=color.r;\n                col.g*=color.g;\n                col.b*=color.b;\n            #endif\n        #endif\n        col.a*=color.a;\n        #ifdef HAS_TEXTURE_OPACITY\n            #ifdef TRANSFORMALPHATEXCOORDS\n                uv=texCoordOrig;\n            #endif\n            #ifdef ALPHA_MASK_ALPHA\n                col.a*=texture(texOpacity,uv).a;\n            #endif\n            #ifdef ALPHA_MASK_LUMI\n                col.a*=dot(vec3(0.2126,0.7152,0.0722), texture(texOpacity,uv).rgb);\n            #endif\n            #ifdef ALPHA_MASK_R\n                col.a*=texture(texOpacity,uv).r;\n            #endif\n            #ifdef ALPHA_MASK_G\n                col.a*=texture(texOpacity,uv).g;\n            #endif\n            #ifdef ALPHA_MASK_B\n                col.a*=texture(texOpacity,uv).b;\n            #endif\n            // #endif\n        #endif\n    #endif\n\n    {{MODULE_COLOR}}\n\n    #ifdef DISCARDTRANS\n        if(col.a<0.2) discard;\n    #endif\n\n    outColor = col;\n}\n",
      basicmaterial_vert:
        "IN vec3 vPosition;\nIN vec2 attrTexCoord;\nIN vec3 attrVertNormal;\nIN float attrVertIndex;\n\n{{MODULES_HEAD}}\n\nOUT vec3 norm;\nOUT vec2 texCoord;\nOUT vec2 texCoordOrig;\n\nUNI mat4 projMatrix;\nUNI mat4 modelMatrix;\nUNI mat4 viewMatrix;\n\n#ifdef HAS_TEXTURES\n    UNI float diffuseRepeatX;\n    UNI float diffuseRepeatY;\n    UNI float texOffsetX;\n    UNI float texOffsetY;\n#endif\n\nvoid main()\n{\n    mat4 mMatrix=modelMatrix;\n    mat4 mvMatrix;\n\n    norm=attrVertNormal;\n    texCoordOrig=attrTexCoord;\n    texCoord=attrTexCoord;\n    #ifdef HAS_TEXTURES\n        texCoord.x=texCoord.x*diffuseRepeatX+texOffsetX;\n        texCoord.y=(1.0-texCoord.y)*diffuseRepeatY+texOffsetY;\n    #endif\n\n    vec4 pos = vec4(vPosition, 1.0);\n\n    #ifdef BILLBOARD\n       vec3 position=vPosition;\n       mvMatrix=viewMatrix*modelMatrix;\n\n       gl_Position = projMatrix * mvMatrix * vec4((\n           position.x * vec3(\n               mvMatrix[0][0],\n               mvMatrix[1][0],\n               mvMatrix[2][0] ) +\n           position.y * vec3(\n               mvMatrix[0][1],\n               mvMatrix[1][1],\n               mvMatrix[2][1]) ), 1.0);\n    #endif\n\n    {{MODULE_VERTEX_POSITION}}\n\n    #ifndef BILLBOARD\n        mvMatrix=viewMatrix * mMatrix;\n    #endif\n\n\n    #ifndef BILLBOARD\n        // gl_Position = projMatrix * viewMatrix * modelMatrix * pos;\n        gl_Position = projMatrix * mvMatrix * pos;\n    #endif\n}\n",
    };
    const n = e.inTrigger("render");
    const a = e.outTrigger("trigger");
    const r = e.outObject("shader", null, "shader");
    r.ignoreValueSerialize = true;
    e.toWorkPortsNeedToBeLinked(n);
    const o = e.patch.cgl;
    const i = new CGL.Shader(o, "basicmaterialnew");
    i.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG"]);
    i.setSource(t.basicmaterial_vert, t.basicmaterial_frag);
    r.set(i);
    n.onTriggered = A;
    const s = e.inValueSlider("r", Math.random());
    const l = e.inValueSlider("g", Math.random());
    const u = e.inValueSlider("b", Math.random());
    const m = e.inValueSlider("a", 1);
    s.setUiAttribs({
      colorPick: true,
    });
    i.addUniformFrag("4f", "color", s, l, u, m);
    const f = e.inTexture("texture");
    let c = null;
    f.onChange = T;
    const d = e.inValueBool("colorizeTexture", false);
    const p = e.inTexture("textureOpacity");
    let g = null;
    const v = e.inSwitch(
      "Alpha Mask Source",
      ["Luminance", "R", "G", "B", "A"],
      "Luminance"
    );
    v.setUiAttribs({
      greyout: true,
    });
    p.onChange = I;
    const h = e.inValueBool("Opacity TexCoords Transform", false);
    const O = e.inValueBool("Discard Transparent Pixels");
    const x = e.inValue("diffuseRepeatX", 1),
      b = e.inValue("diffuseRepeatY", 1),
      _ = e.inValue("Tex Offset X", 0),
      M = e.inValue("Tex Offset Y", 0),
      C = e.inBool("Crop TexCoords", false);
    i.addUniformFrag("f", "diffuseRepeatX", x);
    i.addUniformFrag("f", "diffuseRepeatY", b);
    i.addUniformFrag("f", "texOffsetX", _);
    i.addUniformFrag("f", "texOffsetY", M);
    const S = e.inValueBool("billboard", false);
    v.onChange =
      S.onChange =
      O.onChange =
      h.onChange =
      C.onChange =
      d.onChange =
        E;
    e.setPortGroup("Color", [s, l, u, m]);
    e.setPortGroup("Color Texture", [f, d]);
    e.setPortGroup("Opacity", [p, v, O, h]);
    e.setPortGroup("Texture Transform", [x, b, _, M, C]);
    I();
    T();
    e.preRender = function () {
      i.bind();
      A();
    };
    function A() {
      if (!i) return;
      o.pushShader(i);
      i.popTextures();
      if (c && f.get()) i.pushTexture(c, f.get());
      if (g && p.get()) i.pushTexture(g, p.get());
      a.trigger();
      o.popShader();
    }
    function I() {
      if (p.get()) {
        if (g !== null) return;
        i.removeUniform("texOpacity");
        i.define("HAS_TEXTURE_OPACITY");
        if (!g) g = new CGL.Uniform(i, "t", "texOpacity");
        v.setUiAttribs({
          greyout: false,
        });
        h.setUiAttribs({
          greyout: false,
        });
      } else {
        i.removeUniform("texOpacity");
        i.removeDefine("HAS_TEXTURE_OPACITY");
        g = null;
        v.setUiAttribs({
          greyout: true,
        });
        h.setUiAttribs({
          greyout: true,
        });
      }
      E();
    }
    function T() {
      if (f.get()) {
        if (!i.hasDefine("HAS_TEXTURE_DIFFUSE")) i.define("HAS_TEXTURE_DIFFUSE");
        if (!c) c = new CGL.Uniform(i, "t", "texDiffuse");
        x.setUiAttribs({
          greyout: false,
        });
        b.setUiAttribs({
          greyout: false,
        });
        _.setUiAttribs({
          greyout: false,
        });
        M.setUiAttribs({
          greyout: false,
        });
        d.setUiAttribs({
          greyout: false,
        });
      } else {
        i.removeUniform("texDiffuse");
        i.removeDefine("HAS_TEXTURE_DIFFUSE");
        c = null;
        x.setUiAttribs({
          greyout: true,
        });
        b.setUiAttribs({
          greyout: true,
        });
        _.setUiAttribs({
          greyout: true,
        });
        M.setUiAttribs({
          greyout: true,
        });
        d.setUiAttribs({
          greyout: true,
        });
      }
    }
    function E() {
      i.toggleDefine("CROP_TEXCOORDS", C.get());
      i.toggleDefine("COLORIZE_TEXTURE", d.get());
      i.toggleDefine("TRANSFORMALPHATEXCOORDS", h.get());
      i.toggleDefine("DISCARDTRANS", O.get());
      i.toggleDefine("BILLBOARD", S.get());
      i.toggleDefine("ALPHA_MASK_ALPHA", v.get() == "A");
      i.toggleDefine("ALPHA_MASK_LUMI", v.get() == "Luminance");
      i.toggleDefine("ALPHA_MASK_R", v.get() == "R");
      i.toggleDefine("ALPHA_MASK_G", v.get() == "G");
      i.toggleDefine("ALPHA_MASK_B", v.get() == "B");
    }
  };
  Ops.Gl.Shader.BasicMaterial_v3.prototype = new CABLES.Op();
  CABLES.OPS["ec55d252-3843-41b1-b731-0482dbd9e72b"] = {
    f: Ops.Gl.Shader.BasicMaterial_v3,
    objName: "Ops.Gl.Shader.BasicMaterial_v3",
  };
  Ops.Gl.Matrix.TranslateView = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = {};
    const n = e.inTrigger("render"),
      a = e.inValueFloat("x"),
      r = e.inValueFloat("y"),
      o = e.inValueFloat("z"),
      i = e.outTrigger("trigger");
    const s = e.patch.cgl;
    const l = vec3.create();
    n.onTriggered = function () {
      vec3.set(l, a.get(), r.get(), o.get());
      s.pushViewMatrix();
      mat4.translate(s.vMatrix, s.vMatrix, l);
      i.trigger();
      s.popViewMatrix();
    };
  };
  Ops.Gl.Matrix.TranslateView.prototype = new CABLES.Op();
  CABLES.OPS["b15472e2-b895-4dde-95c3-239fa5e08afc"] = {
    f: Ops.Gl.Matrix.TranslateView,
    objName: "Ops.Gl.Matrix.TranslateView",
  };
  Ops.Gl.Meshes.FullscreenRectangle = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = {
      shader_frag:
        "UNI sampler2D tex;\nIN vec2 texCoord;\n\nvoid main()\n{\n   outColor= texture(tex,vec2(texCoord.x,(1.0-texCoord.y)));\n}\n",
      shader_vert:
        "{{MODULES_HEAD}}\n\nIN vec3 vPosition;\nUNI mat4 projMatrix;\nUNI mat4 mvMatrix;\n\nOUT vec2 texCoord;\nIN vec2 attrTexCoord;\n\nvoid main()\n{\n   vec4 pos=vec4(vPosition,  1.0);\n\n   texCoord=attrTexCoord;\n\n   gl_Position = projMatrix * mvMatrix * pos;\n}\n",
    };
    const n = e.inTrigger("render"),
      a = e.inValueBool("Center in Canvas"),
      r = e.inValueBool("Flip Y"),
      o = e.inValueBool("Flip X"),
      i = e.inTexture("Texture"),
      s = e.outTrigger("trigger");
    const l = e.patch.cgl;
    let u = null;
    let m = new CGL.Geometry("fullscreen rectangle");
    let f = 0,
      c = 0,
      d = 0,
      p = 0,
      g = 0;
    a.onChange = M;
    o.onChange = _;
    r.onChange = _;
    const v = new CGL.Shader(l, "fullscreenrectangle");
    v.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG"]);
    v.setSource(t.shader_vert, t.shader_frag);
    v.fullscreenRectUniform = new CGL.Uniform(v, "t", "tex", 0);
    let h = false;
    let O = true;
    n.onTriggered = b;
    e.toWorkPortsNeedToBeLinked(n);
    i.onChange = function () {
      O = true;
    };
    function x() {
      let e = i.get();
      if (e) h = true;
      else h = false;
    }
    e.preRender = function () {
      x();
      {
        v.bind();
        if (u) u.render(v);
        b();
      }
    };
    function b() {
      if (l.getViewPort()[2] != p || l.getViewPort()[3] != g || !u) M();
      if (O) x();
      l.pushPMatrix();
      mat4.identity(l.pMatrix);
      mat4.ortho(l.pMatrix, 0, p, g, 0, -10, 1e3);
      l.pushModelMatrix();
      mat4.identity(l.mMatrix);
      l.pushViewMatrix();
      mat4.identity(l.vMatrix);
      if (a.get()) {
        let e = 0;
        let t = 0;
        if (p < l.canvasWidth) e = (l.canvasWidth - p) / 2;
        if (g < l.canvasHeight) t = (l.canvasHeight - g) / 2;
        l.setViewPort(e, t, p, g);
      }
      if (h) {
        if (i.get()) {
          l.setTexture(0, i.get().tex);
        }
        u.render(v);
      } else {
        u.render(l.getShader());
      }
      l.gl.clear(l.gl.DEPTH_BUFFER_BIT);
      l.popPMatrix();
      l.popModelMatrix();
      l.popViewMatrix();
      s.trigger();
    }
    function _() {
      u = null;
    }
    function M() {
      const e = l.getViewPort();
      if (e[2] == p && e[3] == g && u) return;
      let t = 0,
        n = 0;
      p = e[2];
      g = e[3];
      m.vertices = new Float32Array([
        t + p,
        n + g,
        0,
        t,
        n + g,
        0,
        t + p,
        n,
        0,
        t,
        n,
        0,
      ]);
      let a = null;
      if (r.get()) a = new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]);
      else a = new Float32Array([1, 1, 0, 1, 1, 0, 0, 0]);
      if (o.get()) {
        a[0] = 0;
        a[2] = 1;
        a[4] = 0;
        a[6] = 1;
      }
      m.setTexCoords(a);
      m.verticesIndices = new Float32Array([2, 1, 0, 3, 1, 2]);
      m.vertexNormals = new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]);
      m.tangents = new Float32Array([-1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0]);
      m.biTangents == new Float32Array([0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0]);
      if (!u) u = new CGL.Mesh(l, m);
      else u.setGeom(m);
    }
  };
  Ops.Gl.Meshes.FullscreenRectangle.prototype = new CABLES.Op();
  CABLES.OPS["255bd15b-cc91-4a12-9b4e-53c710cbb282"] = {
    f: Ops.Gl.Meshes.FullscreenRectangle,
    objName: "Ops.Gl.Meshes.FullscreenRectangle",
  };
  Ops.Gl.Meshes.Circle = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = {};
    const n = e.inTrigger("render");
    const P = e.inValue("radius", 0.5);
    const N = e.inValueSlider("innerRadius", 0);
    const y = e.inValueInt("segments", 40);
    const L = e.inValueSlider("percent", 1);
    const G = e.inValue("steps", 0);
    const R = e.inValueBool("invertSteps", false);
    const V = e.inSwitch("mapping", ["flat", "round"]);
    const j = e.inValueBool("Spline", false);
    const a = e.inValueBool("Draw", true);
    const r = e.outTrigger("trigger");
    const U = e.outObject("geometry", null, "geometry");
    e.setPortGroup("Size", [P, N]);
    e.setPortGroup("Display", [L, G, R]);
    V.set("flat");
    V.onChange =
      y.onChange =
      P.onChange =
      N.onChange =
      L.onChange =
      G.onChange =
      R.onChange =
      j.onChange =
        m;
    U.ignoreValueSerialize = true;
    const w = e.patch.cgl;
    let B = new CGL.Geometry("circle");
    let k = null;
    const o = -1;
    let i = 0;
    let s = null;
    let X = true;
    n.onTriggered = l;
    e.preRender = () => {
      l();
    };
    function l() {
      if (!CGL.TextureEffect.checkOpNotInTextureEffect(e)) return;
      if (X) u();
      s = w.getShader();
      if (!s) return;
      i = s.glPrimitive;
      if (j.get()) s.glPrimitive = w.gl.LINE_STRIP;
      if (a.get()) k.render(s);
      r.trigger();
      s.glPrimitive = i;
    }
    function u() {
      const n = Math.max(3, Math.floor(y.get()));
      B.clear();
      const t = [];
      const a = [];
      const r = [];
      const o = [];
      const i = [];
      let s = 0,
        l = 0;
      let u = 0,
        m = 0;
      let f = 0,
        c = 0;
      let d = 0,
        p = 0;
      let g = 0,
        v = 0;
      let h = 0,
        O = 0;
      let x = 0,
        b = 0;
      let _ = 0,
        M = 0;
      const C = Math.max(0, L.get());
      const S = [];
      if (j.get()) {
        let e = 0;
        let t = 0;
        const A = [];
        for (s = 0; s <= n * C; s++) {
          l = (360 / n) * s * CGL.DEG2RAD;
          _ = Math.cos(l) * P.get();
          M = Math.sin(l) * P.get();
          b = 0.5;
          if (s > 0) {
            S.push(e);
            S.push(t);
            S.push(0);
            x = 1 - (s - 1) / n;
            A.push(x, b);
          }
          S.push(_);
          S.push(M);
          S.push(0);
          e = _;
          t = M;
        }
        B.setPointVertices(S);
      } else if (N.get() <= 0) {
        for (s = 0; s <= n * C; s++) {
          l = (360 / n) * s * CGL.DEG2RAD;
          _ = Math.cos(l) * P.get();
          M = Math.sin(l) * P.get();
          if (V.get() == "flat") {
            x = (Math.cos(l) + 1) / 2;
            b = 1 - (Math.sin(l) + 1) / 2;
            h = 0.5;
            O = 0.5;
          } else if (V.get() == "round") {
            x = 1 - s / n;
            b = 0;
            h = x;
            O = 1;
          }
          t.push([_, M, 0], [u, m, 0], [0, 0, 0]);
          a.push(x, b, f, c, h, O);
          r.push(0, 0, 1, 0, 0, 1, 0, 0, 1);
          o.push(1, 0, 0, 1, 0, 0, 1, 0, 0);
          i.push(0, 1, 0, 0, 1, 0, 0, 1, 0);
          f = x;
          c = b;
          u = _;
          m = M;
        }
        B = CGL.Geometry.buildFromFaces(t, "circle");
        B.vertexNormals = r;
        B.tangents = o;
        B.biTangents = i;
        B.texCoords = a;
      } else {
        let e = 0;
        const I = n * C;
        const T = 0;
        for (s = 0; s <= I; s++) {
          e++;
          l = (360 / n) * s * CGL.DEG2RAD;
          _ = Math.cos(l) * P.get();
          M = Math.sin(l) * P.get();
          const E = Math.cos(l) * N.get() * P.get();
          const D = Math.sin(l) * N.get() * P.get();
          if (V.get() == "round") {
            x = 1 - s / n;
            b = 0;
            h = x;
            O = 1;
          }
          if (
            G.get() === 0 ||
            (e % parseInt(G.get(), 10) === 0 && !R.get()) ||
            (e % parseInt(G.get(), 10) !== 0 && R.get())
          ) {
            t.push([_, M, 0], [u, m, 0], [E, D, 0]);
            t.push([E, D, 0], [u, m, 0], [d, p, 0]);
            a.push(x, 0, f, 0, h, 1, x, 1, f, 0, g, 1);
            r.push(0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1);
            o.push(1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0);
            i.push(0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0);
          }
          g = h;
          v = O;
          f = x;
          c = b;
          u = _;
          m = M;
          d = E;
          p = D;
        }
        B = CGL.Geometry.buildFromFaces(t, "circle");
        B.vertexNormals = r;
        B.tangents = o;
        B.biTangents = i;
        if (V.get() == "flat") B.mapTexCoords2d();
        else B.texCoords = a;
      }
      U.set(null);
      U.set(B);
      if (B.vertices.length == 0) return;
      if (k) k.dispose();
      k = null;
      k = new CGL.Mesh(w, B);
      X = false;
    }
    function m() {
      X = true;
    }
    e.onDelete = function () {
      if (k) k.dispose();
    };
  };
  Ops.Gl.Meshes.Circle.prototype = new CABLES.Op();
  CABLES.OPS["4db917cc-2cef-43f4-83d5-38c4572fe943"] = {
    f: Ops.Gl.Meshes.Circle,
    objName: "Ops.Gl.Meshes.Circle",
  };
  Ops.Math.Sine = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = {};
    var n = e.inValue("value");
    var a = e.inValue("phase", 0);
    var r = e.inValue("frequency", 1);
    var o = e.inValue("amplitude", 1);
    var i = e.inValueBool("asine", false);
    var s = e.outValue("result");
    var l = Math.sin;
    a.onChange = n.onChange = function () {
      s.set(o.get() * l(n.get() * r.get() + a.get()));
    };
    i.onChange = function () {
      if (i.get()) l = Math.asin;
      else l = Math.sin;
    };
  };
  Ops.Math.Sine.prototype = new CABLES.Op();
  CABLES.OPS["d24da018-9f3d-428b-85c9-6ff14d77548b"] = {
    f: Ops.Math.Sine,
    objName: "Ops.Math.Sine",
  };
  Ops.Math.Sum = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = {};
    const n = e.inValueFloat("number1", 1),
      a = e.inValueFloat("number2", 1),
      r = e.outValue("result");
    n.onChange = a.onChange = o;
    o();
    function o() {
      const e = n.get() + a.get();
      if (!isNaN(e)) r.set(e);
    }
  };
  Ops.Math.Sum.prototype = new CABLES.Op();
  CABLES.OPS["c8fb181e-0b03-4b41-9e55-06b6267bc634"] = {
    f: Ops.Math.Sum,
    objName: "Ops.Math.Sum",
  };
  Ops.Vars.VarSetNumber_v2 = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = {};
    const n = e.inValueFloat("Value", 0);
    e.varName = e.inDropDown("Variable", [], "", true);
    new CABLES.VarSetOpWrapper(e, "number", n, e.varName);
  };
  Ops.Vars.VarSetNumber_v2.prototype = new CABLES.Op();
  CABLES.OPS["b5249226-6095-4828-8a1c-080654e192fa"] = {
    f: Ops.Vars.VarSetNumber_v2,
    objName: "Ops.Vars.VarSetNumber_v2",
  };
  Ops.Vars.VarGetNumber_v2 = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = {};
    var n = e.outValue("Value");
    e.varName = e.inValueSelect("Variable", [], "", true);
    new CABLES.VarGetOpWrapper(e, "number", e.varName, n);
  };
  Ops.Vars.VarGetNumber_v2.prototype = new CABLES.Op();
  CABLES.OPS["421f5b52-c0fa-47c4-8b7a-012b9e1c864a"] = {
    f: Ops.Vars.VarGetNumber_v2,
    objName: "Ops.Vars.VarGetNumber_v2",
  };
  Ops.Gl.AspectRatio = function () {
    CABLES.Op.apply(this, arguments);
    const s = this;
    const e = {};
    var n = [
      {
        title: "1:2",
        v: 1 / 2,
      },
      {
        title: "1",
        v: 1,
      },
      {
        title: "5:4",
        v: 5 / 4,
      },
      {
        title: "4:3",
        v: 4 / 3,
      },
      {
        title: "3:2",
        v: 3 / 2,
      },
      {
        title: "11:8",
        v: 11 / 8,
      },
      {
        title: "16:9",
        v: 16 / 9,
      },
      {
        title: "2:1",
        v: 2,
      },
      {
        title: "21:9",
        v: 21 / 9,
      },
      {
        title: "custom",
        v: 0,
      },
    ];
    var t = [];
    for (var a = 0; a < n.length; a++) t.push(n[a].title);
    const r = s.inTrigger("render"),
      o = s.outTrigger("trigger"),
      l = s.outValue("Width"),
      u = s.outValue("Height"),
      i = s.inValueSelect("Aspect Ratio", t, n[0].title),
      m = s.inValueFloat("Custom", 1.777777);
    const f = s.inValueBool("use viewport size", true),
      c = s.inValueInt("texture width", 512),
      d = s.inValueInt("texture height", 512);
    s.setPortGroup("Size", [f, c, d]);
    f.onChange = p;
    function p() {
      c.setUiAttribs({
        greyout: f.get(),
      });
      d.setUiAttribs({
        greyout: f.get(),
      });
    }
    const g = [];
    const v = s.patch.cgl;
    var h = 1e3,
      O = 1e3,
      x,
      b;
    var _ = 1;
    i.onChange = M;
    m.onChange = M;
    M();
    function M() {
      var e = i.get();
      if (e == "custom") {
        if (m.uiAttribs.greyout)
          m.setUiAttribs({
            greyout: false,
          });
        _ = Math.abs(m.get());
      } else {
        if (!m.uiAttribs.greyout)
          m.setUiAttribs({
            greyout: true,
          });
        for (var t = 0; t < n.length; t++) {
          if (n[t].title == e) {
            _ = n[t].v;
            break;
          }
        }
      }
    }
    function C() {
      var e = v.canvasWidth;
      var t = v.canvasHeight;
      if (!f.get()) {
        e = c.get();
        t = d.get();
      }
      var n = t * _;
      var a = t;
      var r = 0;
      var o = 0;
      if (n > e) {
        n = e;
        a = e / _;
      }
      if (n < e) r = (e - n) / 2;
      if (a < t) o = (t - a) / 2;
      n = Math.ceil(n);
      a = Math.ceil(a);
      r = Math.ceil(r);
      o = Math.ceil(o);
      if (n != h || a != O || r != x || o != b) {
        h = n;
        O = a;
        x = r;
        b = o;
        v.setViewPort(x, b, h, O);
        for (var i = 0; i < s.patch.ops.length; i++)
          if (s.patch.ops[i].onResize) s.patch.ops[i].onResize();
      }
      l.set(h);
      u.set(O);
    }
    s.onDelete = function () {
      v.resetViewPort();
    };
    r.onTriggered = function () {
      var e = v.getViewPort();
      g[0] = e[0];
      g[1] = e[1];
      g[2] = e[2];
      g[3] = e[3];
      C();
      x = Math.ceil(x);
      b = Math.ceil(b);
      h = Math.ceil(h);
      O = Math.ceil(O);
      v.setViewPort(x, b, h, O);
      mat4.perspective(v.pMatrix, 45, _, 0.1, 1100);
      o.trigger();
      v.setViewPort(g[0], g[1], g[2], g[3]);
    };
  };
  Ops.Gl.AspectRatio.prototype = new CABLES.Op();
  CABLES.OPS["b4f17994-3028-4203-9a8d-d5e5377a58fc"] = {
    f: Ops.Gl.AspectRatio,
    objName: "Ops.Gl.AspectRatio",
  };
  Ops.Gl.Geometry.TransformGeometry = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = {};
    const a = e.inObject("Geometry"),
      r = e.inValue("Translate X"),
      o = e.inValue("Translate Y"),
      i = e.inValue("Translate Z"),
      s = e.inValueSlider("Scale X", 1),
      l = e.inValueSlider("Scale Y", 1),
      u = e.inValueSlider("Scale Z", 1),
      m = e.inValue("Rotation X"),
      f = e.inValue("Rotation Y"),
      c = e.inValue("Rotation Z"),
      d = e.outObject("Result", null, "geometry");
    r.onChange =
      o.onChange =
      i.onChange =
      s.onChange =
      l.onChange =
      u.onChange =
      m.onChange =
      f.onChange =
      c.onChange =
      a.onChange =
        h;
    const p = vec3.create();
    const n = vec3.create();
    const g = vec3.create();
    const v = vec3.create();
    function h() {
      const e = a.get();
      const t = 0;
      if (e) {
        const n = e.copy();
        for (let e = 0; e < n.vertices.length; e += 3) {
          n.vertices[e + 0] *= s.get();
          n.vertices[e + 1] *= l.get();
          n.vertices[e + 2] *= u.get();
          n.vertices[e + 0] += r.get();
          n.vertices[e + 1] += o.get();
          n.vertices[e + 2] += i.get();
        }
        for (let e = 0; e < n.vertices.length; e += 3) {
          vec3.set(p, n.vertices[e + 0], n.vertices[e + 1], n.vertices[e + 2]);
          vec3.rotateX(p, p, g, m.get() * CGL.DEG2RAD);
          vec3.rotateY(p, p, g, f.get() * CGL.DEG2RAD);
          vec3.rotateZ(p, p, g, c.get() * CGL.DEG2RAD);
          n.vertices[e + 0] = p[0];
          n.vertices[e + 1] = p[1];
          n.vertices[e + 2] = p[2];
        }
        d.set(null);
        d.set(n);
      } else {
        d.set(null);
      }
    }
  };
  Ops.Gl.Geometry.TransformGeometry.prototype = new CABLES.Op();
  CABLES.OPS["9678fee2-5436-499c-b94d-2603cdbeb380"] = {
    f: Ops.Gl.Geometry.TransformGeometry,
    objName: "Ops.Gl.Geometry.TransformGeometry",
  };
  Ops.Value.SwitchNumber = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = {};
    var n = e.inValueInt("Index");
    var a = [];
    var r = e.outValue("Result");
    n.onChange = s;
    for (var o = 0; o < 16; o++) {
      var i = e.inValue("Value " + o);
      a.push(i);
      i.onChange = s;
    }
    function s() {
      if (n.get() >= 0 && a[n.get()]) {
        r.set(a[n.get()].get());
      }
    }
  };
  Ops.Value.SwitchNumber.prototype = new CABLES.Op();
  CABLES.OPS["fbb89f72-f2e3-4d34-ad01-7d884a1bcdc0"] = {
    f: Ops.Value.SwitchNumber,
    objName: "Ops.Value.SwitchNumber",
  };
  Ops.Json3d.Mesh3d = function () {
    CABLES.Op.apply(this, arguments);
    const r = this;
    const e = {};
    const t = r.inTrigger("Render"),
      n = r.inUrl("file", "3d json"),
      a = r.inValueInt("Mesh Index", 0),
      o = r.inSwitch("Calculate Normals", ["no", "smooth", "flat"], "no"),
      i = r.inBool("Resize", true),
      s = r.inValue("New Size", 1),
      l = r.inValueBool("Center", true),
      u = r.inValueBool("Merge All", false),
      m = r.outTrigger("trigger"),
      f = r.inValueBool("Draw", true),
      c = r.outObject("Geometry"),
      d = r.outValue("Scaling", 1),
      p = r.outString("Mesh Name");
    r.setPortGroup("Geometry", [l, u, o, s, i]);
    const g = r.patch.cgl;
    const v = new CABLES.Variable();
    const h = [];
    let O = null;
    let x = null;
    let b = null;
    const _ = [];
    let M = -1;
    let C = {};
    let S = true;
    let A = false;
    r.preRender = t.onTriggered = D;
    n.onChange = o.onChange = G;
    l.onChange = s.onChange = a.onChange = u.onChange = P;
    i.onChange = u.onChange = T;
    t.onLinkChanged = () => {
      if (!t.isLinked()) c.set(null);
      else c.set(O);
    };
    function I(t) {
      if (x && x.meshes && x.meshes[t] && x.meshes[t].name)
        return x.meshes[t].name;
      if (
        x &&
        x.rootnode &&
        x.rootnode.children &&
        x.rootnode.children.length > t - 1
      ) {
        for (let e = 0; e < x.rootnode.children.length; e++) {
          if (
            x.rootnode.children[e].meshes &&
            x.rootnode.children[e].meshes.length == 1 &&
            x.rootnode.children[e].meshes[0] == t
          )
            return x.rootnode.children[e].name;
        }
      }
      return "unknown";
    }
    function T() {
      s.setUiAttribs({
        greyout: !i.get(),
      });
      a.setUiAttribs({
        greyout: u.get(),
      });
      P();
    }
    function E() {
      if (!O) {
        r.error("calc normals: no geom!");
        return;
      }
      if (o.get() == "smooth") O.calculateNormals();
      else if (o.get() == "flat") {
        O.unIndex();
        O.calculateNormals();
      }
    }
    function D() {
      if (S) L();
      if (f.get()) {
        if (b) b.render(g.getShader());
        m.trigger();
      }
    }
    function P() {
      S = true;
    }
    function N() {
      if (!O) return;
      if (i.get()) {
        const t = s.get() / C.maxAxis;
        for (let e = 0; e < O.vertices.length; e++) O.vertices[e] *= t;
        d.set(t);
      } else {
        d.set(1);
      }
    }
    function y(e) {
      if (!CABLES.UI) return;
      let t = '<div class="panel">';
      if (x) {
        t += "Mesh " + (M + 1) + " of " + x.meshes.length + "<br/>";
        t += "<br/>";
      }
      if (e) {
        t += (e.verticesIndices || []).length / 3 + " faces <br/>";
        t += (e.vertices || []).length / 3 + " vertices <br/>";
        t += (e.texCoords || []).length / 2 + " texturecoords <br/>";
        t += (e.vertexNormals || []).length / 3 + " normals <br/>";
        t += (e.tangents || []).length / 3 + " tangents <br/>";
        t += (e.biTangents || []).length / 3 + " bitangents <br/>";
      }
      t += "</div>";
      r.uiAttr({
        info: t,
      });
    }
    function L() {
      if (b) {
        b.dispose();
        b = null;
      }
      const e = Math.floor(a.get());
      if (
        !x ||
        e != e ||
        !CABLES.UTILS.isNumeric(e) ||
        e < 0 ||
        e >= x.meshes.length
      ) {
        r.uiAttr({
          warning: "mesh not found - index out of range / or no file selected ",
        });
        _[e] = null;
        A = true;
        p.set("");
        c.set(null);
        return;
      } else {
        if (A) {
          r.uiAttr({
            warning: null,
          });
          A = false;
        }
      }
      M = e;
      O = new CGL.Geometry();
      if (u.get()) {
        for (let e = 0; e < x.meshes.length; e++) {
          var t = x.meshes[e];
          if (t) {
            const n = CGL.Geometry.json2geom(t);
            O.merge(n);
          }
        }
        p.set(I(""));
      } else {
        var t = x.meshes[e];
        p.set(I(e));
        if (!t) {
          b = null;
          r.uiAttr({
            warning: "mesh not found",
          });
          return;
        }
        O = CGL.Geometry.json2geom(t);
      }
      if (l.get()) O.center();
      C = O.getBounds();
      N();
      y(O);
      if (o.get() != "no") E();
      c.set(null);
      c.set(O);
      if (b) b.dispose();
      b = new CGL.Mesh(g, O);
      S = false;
      _[e] = b;
      r.uiAttr({
        warning: null,
      });
    }
    function G() {
      if (!n.get()) {
        c.set(null);
        return;
      }
      M = -1;
      function e() {
        CABLES.ajax(r.patch.getFilePath(n.get()), function (e, t, n) {
          if (e) {
            if (CABLES.UI)
              r.uiAttr({
                error: "could not load file...",
              });
            r.error("ajax error:", e);
            r.patch.loading.finished(a);
            return;
          } else {
            if (CABLES.UI)
              r.uiAttr({
                error: null,
              });
          }
          try {
            x = JSON.parse(t);
          } catch (e) {
            if (CABLES.UI)
              r.uiAttr({
                error: "could not load file...",
              });
            r.patch.loading.finished(a);
            c.set(null);
            return;
          }
          S = true;
          r.patch.loading.finished(a);
          if (CABLES.UI) gui.jobs().finish("loading3d" + a);
        });
      }
      var a = r.patch.loading.start("json3dMesh", n.get());
      if (CABLES.UI)
        gui.jobs().start(
          {
            id: "loading3d" + a,
            title: "loading 3d data",
          },
          e
        );
      else e();
    }
  };
  Ops.Json3d.Mesh3d.prototype = new CABLES.Op();
  CABLES.OPS["cdf55940-7726-4ab3-854c-1a576434da46"] = {
    f: Ops.Json3d.Mesh3d,
    objName: "Ops.Json3d.Mesh3d",
  };
  Ops.Math.Multiply = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = {};
    const n = e.inValueFloat("number1", 1);
    const a = e.inValueFloat("number2", 2);
    const r = e.outValue("result");
    n.onChange = a.onChange = o;
    o();
    function o() {
      const e = n.get();
      const t = a.get();
      r.set(e * t);
    }
  };
  Ops.Math.Multiply.prototype = new CABLES.Op();
  CABLES.OPS["1bbdae06-fbb2-489b-9bcc-36c9d65bd441"] = {
    f: Ops.Math.Multiply,
    objName: "Ops.Math.Multiply",
  };
  Ops.Value.Integer = function () {
    CABLES.Op.apply(this, arguments);
    const e = this;
    const t = {};
    const n = e.inInt("Integer", 0),
      a = e.outNumber("Number out");
    n.onChange = function () {
      a.set(Math.floor(n.get()));
    };
  };
  Ops.Value.Integer.prototype = new CABLES.Op();
  CABLES.OPS["17bc01d7-04ad-4aab-b88b-bb09744c4a69"] = {
    f: Ops.Value.Integer,
    objName: "Ops.Value.Integer",
  };
  window.addEventListener("load", function (e) {
    CABLES.jsLoaded = new Event("CABLES.jsLoaded");
    document.dispatchEvent(CABLES.jsLoaded);
  });
  (this.CGL = this.CGL || {}),
    (this.CGL.COREMODULES = this.CGL.COREMODULES || {}),
    (this.CGL.COREMODULES.Shadermodifier = (function (n) {
      var a = {};
      function r(e) {
        if (a[e]) return a[e].exports;
        var t = (a[e] = {
          i: e,
          l: !1,
          exports: {},
        });
        return n[e].call(t.exports, t, t.exports, r), (t.l = !0), t.exports;
      }
      return (
        (r.m = n),
        (r.c = a),
        (r.d = function (e, t, n) {
          r.o(e, t) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: n,
            });
        }),
        (r.r = function (e) {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, {
              value: "Module",
            }),
            Object.defineProperty(e, "__esModule", {
              value: !0,
            });
        }),
        (r.t = function (t, e) {
          if ((1 & e && (t = r(t)), 8 & e)) return t;
          if (4 & e && "object" == typeof t && t && t.__esModule) return t;
          var n = Object.create(null);
          if (
            (r.r(n),
            Object.defineProperty(n, "default", {
              enumerable: !0,
              value: t,
            }),
            2 & e && "string" != typeof t)
          )
            for (var a in t)
              r.d(
                n,
                a,
                function (e) {
                  return t[e];
                }.bind(null, a)
              );
          return n;
        }),
        (r.n = function (e) {
          var t =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return r.d(t, "a", t), t;
        }),
        (r.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (r.p = ""),
        r((r.s = 0))
      );
    })([
      function (e, t, n) {
        "use strict";
        n.r(t);
        CGL.ShaderModifier = class {
          constructor(e, t, n) {
            (this._cgl = e),
              (this._name = t),
              (this._origShaders = {}),
              (this._uniforms = []),
              (this._structUniforms = []),
              (this._definesToggled = {}),
              (this._defines = {}),
              (this._mods = []),
              (this._textures = []),
              (this._boundShader = null),
              (this._changedDefines = !0),
              (this._changedUniforms = !0),
              (this._modulesChanged = !1),
              (this.needsTexturePush = !1),
              (this._lastShader = null),
              1 == this._cgl.glVersion &&
                (this._cgl.gl.getExtension("OES_texture_float"),
                this._cgl.gl.getExtension("OES_texture_float_linear"),
                this._cgl.gl.getExtension("OES_texture_half_float"),
                this._cgl.gl.getExtension("OES_texture_half_float_linear"));
          }
          bind() {
            const n = this._cgl.getShader();
            if (!n) return;
            this._boundShader = this._origShaders[n.id];
            let a = !1;
            if (
              (this._boundShader &&
                this._lastShader != this._boundShader.shader &&
                (this._boundShader.shader.hasModule(this._mods[0].id) ||
                  (a = !0)),
              (a ||
                !this._boundShader ||
                n.lastCompile != this._boundShader.lastCompile ||
                this._modulesChanged ||
                n._needsRecompile) &&
                (this._boundShader && this._boundShader.shader.dispose(),
                n._needsRecompile && n.compile(),
                (this._boundShader = this._origShaders[n.id] =
                  {
                    lastCompile: n.lastCompile,
                    orig: n,
                    shader: n.copy(),
                  }),
                1 == this._cgl.glVersion &&
                  (this._boundShader.shader.enableExtension(
                    "GL_OES_standard_derivatives"
                  ),
                  this._boundShader.shader.enableExtension(
                    "GL_OES_texture_float"
                  ),
                  this._boundShader.shader.enableExtension(
                    "GL_OES_texture_float_linear"
                  ),
                  this._boundShader.shader.enableExtension(
                    "GL_OES_texture_half_float"
                  ),
                  this._boundShader.shader.enableExtension(
                    "GL_OES_texture_half_float_linear"
                  )),
                this._addModulesToShader(this._boundShader.shader),
                this._updateDefinesShader(this._boundShader.shader),
                this._updateUniformsShader(this._boundShader.shader)),
              this._changedDefines && this._updateDefines(),
              this._changedUniforms && this._updateUniforms(),
              this._cgl.pushShader(this._boundShader.shader),
              this._boundShader.shader.copyUniformValues(this._boundShader.orig),
              this.needsTexturePush)
            ) {
              for (let t = 0; t < this._textures.length; t += 1) {
                const a = this._textures[t][0],
                  e = this._textures[t][1],
                  r = this._textures[t][2];
                if (this._getUniform(a)) {
                  const n = this.getPrefixedName(a),
                    o = this._boundShader.shader.getUniform(n);
                  o && this._boundShader.shader.pushTexture(o, e, r);
                }
              }
              (this.needsTexturePush = !1), (this._textures.length = 0);
            }
            this._modulesChanged = !1;
          }
          unbind() {
            this._boundShader && this._cgl.popShader(),
              (this._boundShader = null);
          }
          _addModulesToShader(t) {
            let n;
            this._mods.length > 1 && (n = this._mods[0]);
            for (let e = 0; e < this._mods.length; e++)
              t.addModule(this._mods[e], n);
          }
          _removeModulesFromShader(t) {
            for (const e in this._origShaders)
              this._origShaders[e].shader.removeModule(t);
          }
          addModule(e) {
            this._mods.push(e), (this._modulesChanged = !0);
          }
          removeModule(t) {
            const n = [];
            for (let e = 0; e < this._mods.length; e++)
              this._mods[e].title == t &&
                (this._removeModulesFromShader(this._mods[e]), n.push(e));
            for (let e = n.length - 1; e >= 0; e -= 1) this._mods.splice(n[e], 1);
            this._modulesChanged = !0;
          }
          _updateUniformsShader(r) {
            for (let e = 0; e < this._uniforms.length; e++) {
              const t = this._uniforms[e],
                n = this.getPrefixedName(t.name);
              if (!r.hasUniform(n) && !t.structName) {
                let e = null;
                "both" === t.shaderType
                  ? ((e = r.addUniformBoth(t.type, n, t.v1, t.v2, t.v3, t.v4)),
                    (e.comment = "mod: " + this._name))
                  : "frag" === t.shaderType
                  ? ((e = r.addUniformFrag(t.type, n, t.v1, t.v2, t.v3, t.v4)),
                    (e.comment = "mod: " + this._name))
                  : "vert" === t.shaderType &&
                    ((e = r.addUniformVert(t.type, n, t.v1, t.v2, t.v3, t.v4)),
                    (e.comment = "mod: " + this._name));
              }
            }
            for (let a = 0; a < this._structUniforms.length; a += 1) {
              const e = this._structUniforms[a];
              let t = e.uniformName,
                n = e.structName;
              const o = e.members;
              e.propertyName;
              (t = this.getPrefixedName(e.uniformName)),
                (n = this.getPrefixedName(e.structName)),
                "frag" === e.shaderType && r.addUniformStructFrag(n, t, o),
                "vert" === e.shaderType && r.addUniformStructVert(n, t, o),
                "both" === e.shaderType && r.addUniformStructBoth(n, t, o);
            }
          }
          _updateUniforms() {
            for (const e in this._origShaders)
              this._updateUniformsShader(this._origShaders[e].shader);
            this._changedUniforms = !1;
          }
          _setUniformValue(e, t, n) {
            const a = e.getUniform(t);
            a && a.setValue(n);
          }
          setUniformValue(e, t) {
            if (!this._getUniform(e)) return;
            const n = this.getPrefixedName(e);
            for (const e in this._origShaders)
              this._setUniformValue(this._origShaders[e].shader, n, t);
          }
          hasUniform(e) {
            return this._getUniform(e);
          }
          _getUniform(t) {
            for (let e = 0; e < this._uniforms.length; e++) {
              if (this._uniforms[e].name == t) return this._uniforms[e];
              if (
                this._uniforms[e].structName &&
                this._uniforms[e].propertyName == t
              )
                return this._uniforms[e];
            }
            return !1;
          }
          _getStructUniform(t) {
            for (let e = 0; e < this._structUniforms.length; e += 1)
              if (this._structUniforms[e].uniformName === t)
                return this._structUniforms[e];
            return null;
          }
          _isStructUniform(t) {
            for (let e = 0; e < this._uniforms.length; e++) {
              if (this._uniforms[e].name == t) return !1;
              if (
                this._uniforms[e].structName &&
                this._uniforms[e].propertyName == t
              )
                return !0;
            }
            return !1;
          }
          addUniform(t, n, a, r, o, i, s, l, u, m) {
            if (!this._getUniform(n)) {
              let e = "both";
              m && (e = m),
                this._uniforms.push({
                  type: t,
                  name: n,
                  v1: a,
                  v2: r,
                  v3: o,
                  v4: i,
                  structUniformName: s,
                  structName: l,
                  propertyName: u,
                  shaderType: e,
                }),
                (this._changedUniforms = !0);
            }
          }
          addUniformFrag(e, t, n, a, r, o) {
            this.addUniform(e, t, n, a, r, o, null, null, null, "frag"),
              (this._changedUniforms = !0);
          }
          addUniformVert(e, t, n, a, r, o) {
            this.addUniform(e, t, n, a, r, o, null, null, null, "vert"),
              (this._changedUniforms = !0);
          }
          addUniformBoth(e, t, n, a, r, o) {
            this.addUniform(e, t, n, a, r, o, null, null, null, "both"),
              (this._changedUniforms = !0);
          }
          addUniformStruct(t, n, a, r) {
            for (let e = 0; e < a.length; e += 1) {
              const o = a[e];
              ("2i" !== o.type && "i" !== o.type && "3i" !== o.type) ||
                "both" !== r ||
                console.error(
                  "Adding an integer struct member to both shaders can potentially error. Please use different structs for each shader. Error occured in struct:",
                  t,
                  " with member:",
                  o.name,
                  " of type:",
                  o.type,
                  "."
                ),
                this._getUniform(n + "." + o.name) ||
                  this.addUniform(
                    o.type,
                    n + "." + o.name,
                    o.v1,
                    o.v2,
                    o.v3,
                    o.v4,
                    n,
                    t,
                    o.name,
                    r
                  );
            }
            this._getStructUniform(n) ||
              this._structUniforms.push({
                structName: t,
                uniformName: n,
                members: a,
                shaderType: r,
              });
          }
          addUniformStructVert(e, t, n) {
            this.addUniformStruct(e, t, n, "vert");
          }
          addUniformStructFrag(e, t, n) {
            this.addUniformStruct(e, t, n, "frag");
          }
          addUniformStructBoth(e, t, n) {
            this.addUniformStruct(e, t, n, "both");
          }
          pushTexture(e, t, n) {
            if (!t) throw new Error("no texture given to texturestack");
            this._textures.push([e, t, n]), (this.needsTexturePush = !0);
          }
          _removeUniformFromShader(e, t) {
            t.hasUniform(e) && t.removeUniform(e);
          }
          removeUniform(n) {
            if (this._getUniform(n)) {
              for (let t = this._uniforms.length - 1; t >= 0; t -= 1) {
                const e = n;
                if (
                  this._uniforms[t].name == n &&
                  !this._uniforms[t].structName
                ) {
                  for (const n in this._origShaders)
                    this._removeUniformFromShader(
                      this.getPrefixedName(e),
                      this._origShaders[n].shader
                    );
                  this._uniforms.splice(t, 1);
                }
              }
              this._changedUniforms = !0;
            }
          }
          removeUniformStruct(n) {
            if (this._getStructUniform(n)) {
              for (let e = this._structUniforms.length - 1; e >= 0; e -= 1) {
                const t = this._structUniforms[e];
                if (t.uniformName === n) {
                  for (const n in this._origShaders)
                    for (let e = 0; e < t.members.length; e += 1) {
                      const a = t.members[e];
                      this._removeUniformFromShader(
                        this.getPrefixedName(a.name),
                        this._origShaders[n].shader
                      );
                    }
                  this._structUniforms.splice(e, 1);
                }
              }
              this._changedUniforms = !0;
            }
          }
          getPrefixedName(e) {
            const t = this._mods[0].group;
            if (void 0 !== t)
              return (
                0 == e.indexOf("MOD_") &&
                  (e = "mod" + t + "_" + (e = e.substr("MOD_".length))),
                e
              );
          }
          _updateDefinesShader(n) {
            for (const t in this._defines) {
              const e = this.getPrefixedName(t);
              null !== this._defines[t] && void 0 !== this._defines[t]
                ? n.define(e, this._defines[t])
                : n.removeDefine(e);
            }
            for (const t in this._definesToggled) {
              const e = this.getPrefixedName(t);
              n.toggleDefine(e, this._definesToggled[t]);
            }
          }
          _updateDefines() {
            for (const e in this._origShaders)
              this._updateDefinesShader(this._origShaders[e].shader);
            this._changedDefines = !1;
          }
          define(e, t) {
            (this._defines[e] = t), (this._changedDefines = !0);
          }
          removeDefine(e) {
            (this._defines[e] = null), (this._changedDefines = !0);
          }
          hasDefine(e) {
            return null !== this._defines[e] && void 0 !== this._defines[e];
          }
          toggleDefine(e, t) {
            (this._changedDefines = !0), (this._definesToggled[e] = t);
          }
          currentShader() {
            return this._boundShader.shader;
          }
          dispose() {}
        };
      },
    ]).Shadermodifier);
  (this.CABLES = this.CABLES || {}),
    (this.CABLES.COREMODULES = this.CABLES.COREMODULES || {}),
    (this.CABLES.COREMODULES.Vargetset = (function (n) {
      var a = {};
      function r(e) {
        if (a[e]) return a[e].exports;
        var t = (a[e] = {
          i: e,
          l: !1,
          exports: {},
        });
        return n[e].call(t.exports, t, t.exports, r), (t.l = !0), t.exports;
      }
      return (
        (r.m = n),
        (r.c = a),
        (r.d = function (e, t, n) {
          r.o(e, t) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: n,
            });
        }),
        (r.r = function (e) {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, {
              value: "Module",
            }),
            Object.defineProperty(e, "__esModule", {
              value: !0,
            });
        }),
        (r.t = function (t, e) {
          if ((1 & e && (t = r(t)), 8 & e)) return t;
          if (4 & e && "object" == typeof t && t && t.__esModule) return t;
          var n = Object.create(null);
          if (
            (r.r(n),
            Object.defineProperty(n, "default", {
              enumerable: !0,
              value: t,
            }),
            2 & e && "string" != typeof t)
          )
            for (var a in t)
              r.d(
                n,
                a,
                function (e) {
                  return t[e];
                }.bind(null, a)
              );
          return n;
        }),
        (r.n = function (e) {
          var t =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return r.d(t, "a", t), t;
        }),
        (r.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (r.p = ""),
        r((r.s = 0))
      );
    })([
      function (e, t) {
        (CABLES.VarSetOpWrapper = class {
          constructor(t, e, n, a, r, o) {
            (this._valuePort = n),
              (this._varNamePort = a),
              (this._op = t),
              (this._type = e),
              (this._triggerPort = r),
              (this._nextPort = o),
              (this._btnCreate = t.inTriggerButton("Create new variable")),
              this._btnCreate.setUiAttribs({
                hidePort: !0,
              }),
              (this._btnCreate.onTriggered = this._createVar.bind(this)),
              (this._helper = t.inUiTriggerButtons("", ["Rename"])),
              this._helper.setUiAttribs({
                hidePort: !0,
              }),
              (this._helper.onTriggered = (e) => {
                "Rename" == e && CABLES.CMD.PATCH.renameVariable(t.varName.get());
              }),
              this._op.setPortGroup("Variable", [
                this._helper,
                this._varNamePort,
                this._btnCreate,
              ]),
              this._op.on(
                "uiParamPanel",
                this._updateVarNamesDropdown.bind(this)
              ),
              this._op.patch.addEventListener(
                "variablesChanged",
                this._updateName.bind(this)
              ),
              this._op.patch.addEventListener(
                "variableRename",
                this._renameVar.bind(this)
              ),
              (this._varNamePort.onChange = this._updateName.bind(this)),
              (this._valuePort.changeAlways = !0),
              this._triggerPort
                ? (this._triggerPort.onTriggered = () => {
                    this._setVarValue(!0);
                  })
                : (this._valuePort.onChange = this._setVarValue.bind(this)),
              (this._op.init = () => {
                this._updateName(),
                  this._triggerPort || this._setVarValue(),
                  this._updateErrorUi();
              });
          }
          _updateErrorUi() {
            CABLES.UI &&
              (this._varNamePort.get()
                ? this._op.setUiError("novarname", null)
                : this._op.setUiError("novarname", "no variable selected"));
          }
          _updateName() {
            const e = this._varNamePort.get();
            this._op.setTitle("var set "),
              this._op.setUiAttrib({
                extendTitle: "#" + e,
              }),
              this._updateErrorUi();
            const t = this._op.patch.getVar(e);
            t && !t.type && (t.type = this._type),
              this._op.patch.hasVar(e) ||
                0 == e ||
                this._triggerPort ||
                this._setVarValue(),
              !this._op.patch.hasVar(e) &&
                0 != e &&
                this._triggerPort &&
                ("string" == this._type || "number" == this._type
                  ? this._op.patch.setVarValue(e, "")
                  : this._op.patch.setVarValue(e, null)),
              this._op.isCurrentUiOp() &&
                (this._updateVarNamesDropdown(), this._op.refreshParams()),
              this._updateDisplay();
          }
          _createVar() {
            CABLES.CMD.PATCH.createVariable(this._op, this._type, () => {
              this._updateName();
            });
          }
          _updateDisplay() {
            this._valuePort.setUiAttribs({
              greyout: !this._varNamePort.get(),
            });
          }
          _updateVarNamesDropdown() {
            if (CABLES.UI) {
              const e = [],
                t = this._op.patch.getVars();
              for (const n in t) t[n].type == this._type && "0" != n && e.push(n);
              this._varNamePort.uiAttribs.values = e;
            }
          }
          _renameVar(e, t) {
            e == this._varNamePort.get() &&
              (this._varNamePort.set(t), this._updateName());
          }
          _setVarValue(e) {
            const t = this._varNamePort.get();
            t &&
              (CABLES.watchVars &&
                CABLES.watchVars[t] &&
                console.log(
                  this._op.getTitle(),
                  "change var ",
                  t,
                  "to",
                  this._valuePort.get(),
                  this._op.id
                ),
              this._op.patch.setVarValue(t, this._valuePort.get()),
              e && this._nextPort && this._nextPort.trigger());
          }
        }),
          (CABLES.VarGetOpWrapper = class {
            constructor(e, t, n, a) {
              (this._op = e),
                (this._type = t),
                (this._varnamePort = n),
                (this._variable = null),
                (this._valueOutPort = a),
                this._op.on(
                  "uiParamPanel",
                  this._updateVarNamesDropdown.bind(this)
                ),
                this._op.patch.on("variableRename", this._renameVar.bind(this)),
                this._op.patch.on("variableDeleted", (e) => {
                  this._op.isCurrentUiOp() && this._op.refreshParams();
                }),
                (this._varnamePort.onChange = this._init.bind(this)),
                this._op.patch.addEventListener(
                  "variablesChanged",
                  this._init.bind(this)
                ),
                (this._op.onDelete = function () {
                  this._variable &&
                    this._variable.removeListener(this._setValueOut.bind(this));
                }),
                (this._op.init = () => {
                  this._init();
                });
            }
            _renameVar(e, t) {
              e == this._varnamePort.get() &&
                (this._varnamePort.set(t), this._updateVarNamesDropdown());
            }
            _updateVarNamesDropdown() {
              if (CABLES.UI) {
                const e = [],
                  t = this._op.patch.getVars();
                for (const n in t)
                  t[n].type == this._type && "0" != n && e.push(n);
                this._op.varName.uiAttribs.values = e;
              }
            }
            _setValueOut(e) {
              this._updateVarNamesDropdown(), this._valueOutPort.set(e);
            }
            _init() {
              this._updateVarNamesDropdown(),
                this._variable &&
                  this._variable.removeListener(this._setValueOut.bind(this)),
                (this._variable = this._op.patch.getVar(this._op.varName.get())),
                this._variable
                  ? (this._variable.addListener(this._setValueOut.bind(this)),
                    this._op.setUiError("unknownvar", null),
                    this._op.setTitle("var get "),
                    this._op.setUiAttrib({
                      extendTitle: "#" + this._varnamePort.get(),
                    }),
                    this._valueOutPort.set(this._variable.getValue()))
                  : (this._op.setUiError(
                      "unknownvar",
                      "unknown variable! - there is no setVariable with this name (" +
                        this._varnamePort.get() +
                        ")"
                    ),
                    this._op.setUiAttrib({
                      extendTitle: "#invalid",
                    }),
                    this._valueOutPort.set(0));
            }
          });
      },
    ]).Cables);
  