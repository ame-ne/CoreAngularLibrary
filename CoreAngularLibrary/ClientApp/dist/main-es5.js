(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
      var map = {
        "./af": "./node_modules/moment/locale/af.js",
        "./af.js": "./node_modules/moment/locale/af.js",
        "./ar": "./node_modules/moment/locale/ar.js",
        "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
        "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
        "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
        "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
        "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
        "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
        "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
        "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
        "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
        "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
        "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
        "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
        "./ar.js": "./node_modules/moment/locale/ar.js",
        "./az": "./node_modules/moment/locale/az.js",
        "./az.js": "./node_modules/moment/locale/az.js",
        "./be": "./node_modules/moment/locale/be.js",
        "./be.js": "./node_modules/moment/locale/be.js",
        "./bg": "./node_modules/moment/locale/bg.js",
        "./bg.js": "./node_modules/moment/locale/bg.js",
        "./bm": "./node_modules/moment/locale/bm.js",
        "./bm.js": "./node_modules/moment/locale/bm.js",
        "./bn": "./node_modules/moment/locale/bn.js",
        "./bn.js": "./node_modules/moment/locale/bn.js",
        "./bo": "./node_modules/moment/locale/bo.js",
        "./bo.js": "./node_modules/moment/locale/bo.js",
        "./br": "./node_modules/moment/locale/br.js",
        "./br.js": "./node_modules/moment/locale/br.js",
        "./bs": "./node_modules/moment/locale/bs.js",
        "./bs.js": "./node_modules/moment/locale/bs.js",
        "./ca": "./node_modules/moment/locale/ca.js",
        "./ca.js": "./node_modules/moment/locale/ca.js",
        "./cs": "./node_modules/moment/locale/cs.js",
        "./cs.js": "./node_modules/moment/locale/cs.js",
        "./cv": "./node_modules/moment/locale/cv.js",
        "./cv.js": "./node_modules/moment/locale/cv.js",
        "./cy": "./node_modules/moment/locale/cy.js",
        "./cy.js": "./node_modules/moment/locale/cy.js",
        "./da": "./node_modules/moment/locale/da.js",
        "./da.js": "./node_modules/moment/locale/da.js",
        "./de": "./node_modules/moment/locale/de.js",
        "./de-at": "./node_modules/moment/locale/de-at.js",
        "./de-at.js": "./node_modules/moment/locale/de-at.js",
        "./de-ch": "./node_modules/moment/locale/de-ch.js",
        "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
        "./de.js": "./node_modules/moment/locale/de.js",
        "./dv": "./node_modules/moment/locale/dv.js",
        "./dv.js": "./node_modules/moment/locale/dv.js",
        "./el": "./node_modules/moment/locale/el.js",
        "./el.js": "./node_modules/moment/locale/el.js",
        "./en-au": "./node_modules/moment/locale/en-au.js",
        "./en-au.js": "./node_modules/moment/locale/en-au.js",
        "./en-ca": "./node_modules/moment/locale/en-ca.js",
        "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
        "./en-gb": "./node_modules/moment/locale/en-gb.js",
        "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
        "./en-ie": "./node_modules/moment/locale/en-ie.js",
        "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
        "./en-il": "./node_modules/moment/locale/en-il.js",
        "./en-il.js": "./node_modules/moment/locale/en-il.js",
        "./en-in": "./node_modules/moment/locale/en-in.js",
        "./en-in.js": "./node_modules/moment/locale/en-in.js",
        "./en-nz": "./node_modules/moment/locale/en-nz.js",
        "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
        "./en-sg": "./node_modules/moment/locale/en-sg.js",
        "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
        "./eo": "./node_modules/moment/locale/eo.js",
        "./eo.js": "./node_modules/moment/locale/eo.js",
        "./es": "./node_modules/moment/locale/es.js",
        "./es-do": "./node_modules/moment/locale/es-do.js",
        "./es-do.js": "./node_modules/moment/locale/es-do.js",
        "./es-us": "./node_modules/moment/locale/es-us.js",
        "./es-us.js": "./node_modules/moment/locale/es-us.js",
        "./es.js": "./node_modules/moment/locale/es.js",
        "./et": "./node_modules/moment/locale/et.js",
        "./et.js": "./node_modules/moment/locale/et.js",
        "./eu": "./node_modules/moment/locale/eu.js",
        "./eu.js": "./node_modules/moment/locale/eu.js",
        "./fa": "./node_modules/moment/locale/fa.js",
        "./fa.js": "./node_modules/moment/locale/fa.js",
        "./fi": "./node_modules/moment/locale/fi.js",
        "./fi.js": "./node_modules/moment/locale/fi.js",
        "./fil": "./node_modules/moment/locale/fil.js",
        "./fil.js": "./node_modules/moment/locale/fil.js",
        "./fo": "./node_modules/moment/locale/fo.js",
        "./fo.js": "./node_modules/moment/locale/fo.js",
        "./fr": "./node_modules/moment/locale/fr.js",
        "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
        "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
        "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
        "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
        "./fr.js": "./node_modules/moment/locale/fr.js",
        "./fy": "./node_modules/moment/locale/fy.js",
        "./fy.js": "./node_modules/moment/locale/fy.js",
        "./ga": "./node_modules/moment/locale/ga.js",
        "./ga.js": "./node_modules/moment/locale/ga.js",
        "./gd": "./node_modules/moment/locale/gd.js",
        "./gd.js": "./node_modules/moment/locale/gd.js",
        "./gl": "./node_modules/moment/locale/gl.js",
        "./gl.js": "./node_modules/moment/locale/gl.js",
        "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
        "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
        "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
        "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
        "./gu": "./node_modules/moment/locale/gu.js",
        "./gu.js": "./node_modules/moment/locale/gu.js",
        "./he": "./node_modules/moment/locale/he.js",
        "./he.js": "./node_modules/moment/locale/he.js",
        "./hi": "./node_modules/moment/locale/hi.js",
        "./hi.js": "./node_modules/moment/locale/hi.js",
        "./hr": "./node_modules/moment/locale/hr.js",
        "./hr.js": "./node_modules/moment/locale/hr.js",
        "./hu": "./node_modules/moment/locale/hu.js",
        "./hu.js": "./node_modules/moment/locale/hu.js",
        "./hy-am": "./node_modules/moment/locale/hy-am.js",
        "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
        "./id": "./node_modules/moment/locale/id.js",
        "./id.js": "./node_modules/moment/locale/id.js",
        "./is": "./node_modules/moment/locale/is.js",
        "./is.js": "./node_modules/moment/locale/is.js",
        "./it": "./node_modules/moment/locale/it.js",
        "./it-ch": "./node_modules/moment/locale/it-ch.js",
        "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
        "./it.js": "./node_modules/moment/locale/it.js",
        "./ja": "./node_modules/moment/locale/ja.js",
        "./ja.js": "./node_modules/moment/locale/ja.js",
        "./jv": "./node_modules/moment/locale/jv.js",
        "./jv.js": "./node_modules/moment/locale/jv.js",
        "./ka": "./node_modules/moment/locale/ka.js",
        "./ka.js": "./node_modules/moment/locale/ka.js",
        "./kk": "./node_modules/moment/locale/kk.js",
        "./kk.js": "./node_modules/moment/locale/kk.js",
        "./km": "./node_modules/moment/locale/km.js",
        "./km.js": "./node_modules/moment/locale/km.js",
        "./kn": "./node_modules/moment/locale/kn.js",
        "./kn.js": "./node_modules/moment/locale/kn.js",
        "./ko": "./node_modules/moment/locale/ko.js",
        "./ko.js": "./node_modules/moment/locale/ko.js",
        "./ku": "./node_modules/moment/locale/ku.js",
        "./ku.js": "./node_modules/moment/locale/ku.js",
        "./ky": "./node_modules/moment/locale/ky.js",
        "./ky.js": "./node_modules/moment/locale/ky.js",
        "./lb": "./node_modules/moment/locale/lb.js",
        "./lb.js": "./node_modules/moment/locale/lb.js",
        "./lo": "./node_modules/moment/locale/lo.js",
        "./lo.js": "./node_modules/moment/locale/lo.js",
        "./lt": "./node_modules/moment/locale/lt.js",
        "./lt.js": "./node_modules/moment/locale/lt.js",
        "./lv": "./node_modules/moment/locale/lv.js",
        "./lv.js": "./node_modules/moment/locale/lv.js",
        "./me": "./node_modules/moment/locale/me.js",
        "./me.js": "./node_modules/moment/locale/me.js",
        "./mi": "./node_modules/moment/locale/mi.js",
        "./mi.js": "./node_modules/moment/locale/mi.js",
        "./mk": "./node_modules/moment/locale/mk.js",
        "./mk.js": "./node_modules/moment/locale/mk.js",
        "./ml": "./node_modules/moment/locale/ml.js",
        "./ml.js": "./node_modules/moment/locale/ml.js",
        "./mn": "./node_modules/moment/locale/mn.js",
        "./mn.js": "./node_modules/moment/locale/mn.js",
        "./mr": "./node_modules/moment/locale/mr.js",
        "./mr.js": "./node_modules/moment/locale/mr.js",
        "./ms": "./node_modules/moment/locale/ms.js",
        "./ms-my": "./node_modules/moment/locale/ms-my.js",
        "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
        "./ms.js": "./node_modules/moment/locale/ms.js",
        "./mt": "./node_modules/moment/locale/mt.js",
        "./mt.js": "./node_modules/moment/locale/mt.js",
        "./my": "./node_modules/moment/locale/my.js",
        "./my.js": "./node_modules/moment/locale/my.js",
        "./nb": "./node_modules/moment/locale/nb.js",
        "./nb.js": "./node_modules/moment/locale/nb.js",
        "./ne": "./node_modules/moment/locale/ne.js",
        "./ne.js": "./node_modules/moment/locale/ne.js",
        "./nl": "./node_modules/moment/locale/nl.js",
        "./nl-be": "./node_modules/moment/locale/nl-be.js",
        "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
        "./nl.js": "./node_modules/moment/locale/nl.js",
        "./nn": "./node_modules/moment/locale/nn.js",
        "./nn.js": "./node_modules/moment/locale/nn.js",
        "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
        "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
        "./pa-in": "./node_modules/moment/locale/pa-in.js",
        "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
        "./pl": "./node_modules/moment/locale/pl.js",
        "./pl.js": "./node_modules/moment/locale/pl.js",
        "./pt": "./node_modules/moment/locale/pt.js",
        "./pt-br": "./node_modules/moment/locale/pt-br.js",
        "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
        "./pt.js": "./node_modules/moment/locale/pt.js",
        "./ro": "./node_modules/moment/locale/ro.js",
        "./ro.js": "./node_modules/moment/locale/ro.js",
        "./ru": "./node_modules/moment/locale/ru.js",
        "./ru.js": "./node_modules/moment/locale/ru.js",
        "./sd": "./node_modules/moment/locale/sd.js",
        "./sd.js": "./node_modules/moment/locale/sd.js",
        "./se": "./node_modules/moment/locale/se.js",
        "./se.js": "./node_modules/moment/locale/se.js",
        "./si": "./node_modules/moment/locale/si.js",
        "./si.js": "./node_modules/moment/locale/si.js",
        "./sk": "./node_modules/moment/locale/sk.js",
        "./sk.js": "./node_modules/moment/locale/sk.js",
        "./sl": "./node_modules/moment/locale/sl.js",
        "./sl.js": "./node_modules/moment/locale/sl.js",
        "./sq": "./node_modules/moment/locale/sq.js",
        "./sq.js": "./node_modules/moment/locale/sq.js",
        "./sr": "./node_modules/moment/locale/sr.js",
        "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
        "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
        "./sr.js": "./node_modules/moment/locale/sr.js",
        "./ss": "./node_modules/moment/locale/ss.js",
        "./ss.js": "./node_modules/moment/locale/ss.js",
        "./sv": "./node_modules/moment/locale/sv.js",
        "./sv.js": "./node_modules/moment/locale/sv.js",
        "./sw": "./node_modules/moment/locale/sw.js",
        "./sw.js": "./node_modules/moment/locale/sw.js",
        "./ta": "./node_modules/moment/locale/ta.js",
        "./ta.js": "./node_modules/moment/locale/ta.js",
        "./te": "./node_modules/moment/locale/te.js",
        "./te.js": "./node_modules/moment/locale/te.js",
        "./tet": "./node_modules/moment/locale/tet.js",
        "./tet.js": "./node_modules/moment/locale/tet.js",
        "./tg": "./node_modules/moment/locale/tg.js",
        "./tg.js": "./node_modules/moment/locale/tg.js",
        "./th": "./node_modules/moment/locale/th.js",
        "./th.js": "./node_modules/moment/locale/th.js",
        "./tk": "./node_modules/moment/locale/tk.js",
        "./tk.js": "./node_modules/moment/locale/tk.js",
        "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
        "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
        "./tlh": "./node_modules/moment/locale/tlh.js",
        "./tlh.js": "./node_modules/moment/locale/tlh.js",
        "./tr": "./node_modules/moment/locale/tr.js",
        "./tr.js": "./node_modules/moment/locale/tr.js",
        "./tzl": "./node_modules/moment/locale/tzl.js",
        "./tzl.js": "./node_modules/moment/locale/tzl.js",
        "./tzm": "./node_modules/moment/locale/tzm.js",
        "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
        "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
        "./tzm.js": "./node_modules/moment/locale/tzm.js",
        "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
        "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
        "./uk": "./node_modules/moment/locale/uk.js",
        "./uk.js": "./node_modules/moment/locale/uk.js",
        "./ur": "./node_modules/moment/locale/ur.js",
        "./ur.js": "./node_modules/moment/locale/ur.js",
        "./uz": "./node_modules/moment/locale/uz.js",
        "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
        "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
        "./uz.js": "./node_modules/moment/locale/uz.js",
        "./vi": "./node_modules/moment/locale/vi.js",
        "./vi.js": "./node_modules/moment/locale/vi.js",
        "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
        "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
        "./yo": "./node_modules/moment/locale/yo.js",
        "./yo.js": "./node_modules/moment/locale/yo.js",
        "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
        "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
        "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
        "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
        "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
        "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
        "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
        "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
      /***/
    },

    /***/
    "./src/app/api/models.ts":
    /*!*******************************!*\
      !*** ./src/app/api/models.ts ***!
      \*******************************/

    /*! exports provided: AttachmentType, OrderStatus, Role */

    /***/
    function srcAppApiModelsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _models_attachment_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./models/attachment-type */
      "./src/app/api/models/attachment-type.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AttachmentType", function () {
        return _models_attachment_type__WEBPACK_IMPORTED_MODULE_0__["AttachmentType"];
      });
      /* harmony import */


      var _models_order_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./models/order-status */
      "./src/app/api/models/order-status.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "OrderStatus", function () {
        return _models_order_status__WEBPACK_IMPORTED_MODULE_1__["OrderStatus"];
      });
      /* harmony import */


      var _models_role__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./models/role */
      "./src/app/api/models/role.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Role", function () {
        return _models_role__WEBPACK_IMPORTED_MODULE_2__["Role"];
      });
      /***/

    },

    /***/
    "./src/app/api/models/attachment-type.ts":
    /*!***********************************************!*\
      !*** ./src/app/api/models/attachment-type.ts ***!
      \***********************************************/

    /*! exports provided: AttachmentType */

    /***/
    function srcAppApiModelsAttachmentTypeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AttachmentType", function () {
        return AttachmentType;
      });

      var AttachmentType;

      (function (AttachmentType) {
        AttachmentType[AttachmentType["BookAttachment"] = 1] = "BookAttachment";
        AttachmentType[AttachmentType["AuthorAttachment"] = 2] = "AuthorAttachment";
      })(AttachmentType || (AttachmentType = {}));
      /***/

    },

    /***/
    "./src/app/api/models/order-status.ts":
    /*!********************************************!*\
      !*** ./src/app/api/models/order-status.ts ***!
      \********************************************/

    /*! exports provided: OrderStatus */

    /***/
    function srcAppApiModelsOrderStatusTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderStatus", function () {
        return OrderStatus;
      });

      var OrderStatus;

      (function (OrderStatus) {
        OrderStatus[OrderStatus["Waiting"] = 1] = "Waiting";
        OrderStatus[OrderStatus["Accepted"] = 2] = "Accepted";
        OrderStatus[OrderStatus["Returned"] = 3] = "Returned";
      })(OrderStatus || (OrderStatus = {}));
      /***/

    },

    /***/
    "./src/app/api/models/role.ts":
    /*!************************************!*\
      !*** ./src/app/api/models/role.ts ***!
      \************************************/

    /*! exports provided: Role */

    /***/
    function srcAppApiModelsRoleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Role", function () {
        return Role;
      });

      var Role;

      (function (Role) {
        Role[Role["Administrator"] = 1] = "Administrator";
        Role[Role["Librarian"] = 2] = "Librarian";
        Role[Role["Storekeeper"] = 3] = "Storekeeper";
        Role[Role["Reader"] = 4] = "Reader";
      })(Role || (Role = {}));
      /***/

    },

    /***/
    "./src/app/api/services.ts":
    /*!*********************************!*\
      !*** ./src/app/api/services.ts ***!
      \*********************************/

    /*! exports provided: AttachmentsService, AuthenticationService, AuthorsService, BooksService, GenresService, OrdersService, UsersService */

    /***/
    function srcAppApiServicesTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _services_attachments_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./services/attachments.service */
      "./src/app/api/services/attachments.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AttachmentsService", function () {
        return _services_attachments_service__WEBPACK_IMPORTED_MODULE_0__["AttachmentsService"];
      });
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./services/authentication.service */
      "./src/app/api/services/authentication.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"];
      });
      /* harmony import */


      var _services_authors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services/authors.service */
      "./src/app/api/services/authors.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthorsService", function () {
        return _services_authors_service__WEBPACK_IMPORTED_MODULE_2__["AuthorsService"];
      });
      /* harmony import */


      var _services_books_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/books.service */
      "./src/app/api/services/books.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BooksService", function () {
        return _services_books_service__WEBPACK_IMPORTED_MODULE_3__["BooksService"];
      });
      /* harmony import */


      var _services_genres_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/genres.service */
      "./src/app/api/services/genres.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GenresService", function () {
        return _services_genres_service__WEBPACK_IMPORTED_MODULE_4__["GenresService"];
      });
      /* harmony import */


      var _services_orders_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/orders.service */
      "./src/app/api/services/orders.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "OrdersService", function () {
        return _services_orders_service__WEBPACK_IMPORTED_MODULE_5__["OrdersService"];
      });
      /* harmony import */


      var _services_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/users.service */
      "./src/app/api/services/users.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UsersService", function () {
        return _services_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"];
      });
      /***/

    },

    /***/
    "./src/app/api/services/attachments.service.ts":
    /*!*****************************************************!*\
      !*** ./src/app/api/services/attachments.service.ts ***!
      \*****************************************************/

    /*! exports provided: AttachmentsService */

    /***/
    function srcAppApiServicesAttachmentsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AttachmentsService", function () {
        return AttachmentsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var AttachmentsService = /*#__PURE__*/function () {
        function AttachmentsService(http) {
          _classCallCheck(this, AttachmentsService);

          this.http = http;
          this.baseUrl = 'api/attachments';
        }

        _createClass(AttachmentsService, [{
          key: "uploadBlob",
          value: function uploadBlob(file) {
            var formData = new FormData();
            formData.append('file', file);
            return this.http.post("".concat(this.baseUrl, "/upload"), formData);
          }
        }, {
          key: "getBlob",
          value: function getBlob(id) {
            return this.http.get("".concat(this.baseUrl, "/").concat(id), {
              responseType: 'blob'
            });
          }
        }, {
          key: "getImageUrl",
          value: function getImageUrl(blobId) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var blob;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.getBlob(blobId).toPromise();

                    case 2:
                      blob = _context.sent;
                      return _context.abrupt("return", this.createImageFromBlob(blob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                        return res;
                      })).toPromise());

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "createImageFromBlob",
          value: function createImageFromBlob(image) {
            var reader = new FileReader();
            var fileReaderObs = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
              reader.onload = function () {
                observer.next(reader.result);
                observer.complete();
              };
            });

            if (image) {
              reader.readAsDataURL(image);
            }

            return fileReaderObs;
          }
        }]);

        return AttachmentsService;
      }();

      AttachmentsService.ɵfac = function AttachmentsService_Factory(t) {
        return new (t || AttachmentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      AttachmentsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AttachmentsService,
        factory: AttachmentsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttachmentsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/api/services/authentication.service.ts":
    /*!********************************************************!*\
      !*** ./src/app/api/services/authentication.service.ts ***!
      \********************************************************/

    /*! exports provided: AuthenticationService */

    /***/
    function srcAppApiServicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return AuthenticationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/internal/BehaviorSubject */
      "./node_modules/rxjs/internal/BehaviorSubject.js");
      /* harmony import */


      var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var AuthenticationService = /*#__PURE__*/function () {
        function AuthenticationService(http) {
          _classCallCheck(this, AuthenticationService);

          this.http = http;
          this.url = 'api/auth';
          this.currentUserSubject = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
          this.currentUser = this.currentUserSubject.asObservable();
        }

        _createClass(AuthenticationService, [{
          key: "authenticate",
          value: function authenticate(request) {
            var _this = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
            headers = headers.append('Content-Type', 'application/json');
            return this.http.post(this.url + '/authenticate', JSON.stringify(request), {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              if (response && response.token) {
                localStorage.setItem('currentUser', JSON.stringify(response));

                _this.currentUserSubject.next(response);
              }

              return response;
            }));
          }
        }, {
          key: "registration",
          value: function registration(request) {
            var _this2 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
            headers = headers.append('Content-Type', 'application/json');
            return this.http.post(this.url + '/registration', JSON.stringify(request), {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              if (response && response.token) {
                localStorage.setItem('currentUser', JSON.stringify(response));

                _this2.currentUserSubject.next(response);
              }

              return response;
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('currentUser');
            this.currentUserSubject.next(null);
          }
        }, {
          key: "checkAccess",
          value: function checkAccess(roles) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
            headers = headers.append('Content-Type', 'application/json');
            return this.http.post(this.url + '/checkAccess', JSON.stringify(roles), {
              headers: headers
            });
          }
        }, {
          key: "currentUserValue",
          get: function get() {
            return this.currentUserSubject.value;
          }
        }]);

        return AuthenticationService;
      }();

      AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
        return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthenticationService,
        factory: AuthenticationService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/api/services/authors.service.ts":
    /*!*************************************************!*\
      !*** ./src/app/api/services/authors.service.ts ***!
      \*************************************************/

    /*! exports provided: AuthorsService */

    /***/
    function srcAppApiServicesAuthorsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthorsService", function () {
        return AuthorsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var AuthorsService = /*#__PURE__*/function () {
        function AuthorsService(http) {
          _classCallCheck(this, AuthorsService);

          this.http = http;
          this.url = 'api/authors';
        }

        _createClass(AuthorsService, [{
          key: "getAuthors",
          value: function getAuthors() {
            return this.http.get(this.url);
          }
        }, {
          key: "getAuthor",
          value: function getAuthor(id) {
            return this.http.get("".concat(this.url, "/").concat(id));
          }
        }, {
          key: "createAuthor",
          value: function createAuthor(author) {
            return this.http.post(this.url, author);
          }
        }, {
          key: "updateAuthor",
          value: function updateAuthor(author) {
            return this.http.put(this.url, author);
          }
        }, {
          key: "deleteAuthor",
          value: function deleteAuthor(id) {
            return this.http["delete"]("".concat(this.url, "/").concat(id));
          }
        }]);

        return AuthorsService;
      }();

      AuthorsService.ɵfac = function AuthorsService_Factory(t) {
        return new (t || AuthorsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      AuthorsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthorsService,
        factory: AuthorsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/api/services/books.service.ts":
    /*!***********************************************!*\
      !*** ./src/app/api/services/books.service.ts ***!
      \***********************************************/

    /*! exports provided: BooksService */

    /***/
    function srcAppApiServicesBooksServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BooksService", function () {
        return BooksService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var BooksService = /*#__PURE__*/function () {
        function BooksService(http) {
          _classCallCheck(this, BooksService);

          this.http = http;
          this.url = 'api/books';
        }

        _createClass(BooksService, [{
          key: "getBooks",
          value: function getBooks() {
            return this.http.get(this.url);
          }
        }, {
          key: "getBook",
          value: function getBook(id) {
            return this.http.get("".concat(this.url, "/").concat(id));
          }
        }, {
          key: "createBook",
          value: function createBook(book) {
            return this.http.post(this.url, book);
          }
        }, {
          key: "updateBook",
          value: function updateBook(book) {
            return this.http.put(this.url, book);
          }
        }, {
          key: "deleteBook",
          value: function deleteBook(id) {
            return this.http["delete"]("".concat(this.url, "/").concat(id));
          }
        }]);

        return BooksService;
      }();

      BooksService.ɵfac = function BooksService_Factory(t) {
        return new (t || BooksService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      BooksService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: BooksService,
        factory: BooksService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BooksService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/api/services/genres.service.ts":
    /*!************************************************!*\
      !*** ./src/app/api/services/genres.service.ts ***!
      \************************************************/

    /*! exports provided: GenresService */

    /***/
    function srcAppApiServicesGenresServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GenresService", function () {
        return GenresService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var GenresService = /*#__PURE__*/function () {
        function GenresService(http) {
          _classCallCheck(this, GenresService);

          this.http = http;
          this.url = 'api/genres';
        }

        _createClass(GenresService, [{
          key: "getGenres",
          value: function getGenres() {
            return this.http.get(this.url);
          }
        }, {
          key: "getGenre",
          value: function getGenre(id) {
            return this.http.get("".concat(this.url, "/").concat(id));
          }
        }, {
          key: "createGenre",
          value: function createGenre(genre) {
            return this.http.post(this.url, genre);
          }
        }, {
          key: "updateGenre",
          value: function updateGenre(genre) {
            return this.http.put(this.url, genre);
          }
        }, {
          key: "deleteGenre",
          value: function deleteGenre(id) {
            return this.http["delete"]("".concat(this.url, "/").concat(id));
          }
        }]);

        return GenresService;
      }();

      GenresService.ɵfac = function GenresService_Factory(t) {
        return new (t || GenresService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      GenresService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: GenresService,
        factory: GenresService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenresService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/api/services/orders.service.ts":
    /*!************************************************!*\
      !*** ./src/app/api/services/orders.service.ts ***!
      \************************************************/

    /*! exports provided: OrdersService */

    /***/
    function srcAppApiServicesOrdersServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersService", function () {
        return OrdersService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var OrdersService = /*#__PURE__*/function () {
        function OrdersService(http) {
          _classCallCheck(this, OrdersService);

          this.http = http;
          this.url = 'api/orders';
        }

        _createClass(OrdersService, [{
          key: "getList",
          value: function getList() {
            return this.http.get("".concat(this.url, "/list"));
          }
        }, {
          key: "getUserOrders",
          value: function getUserOrders(userId) {
            return this.http.get("".concat(this.url, "/user-orders/").concat(userId));
          }
        }, {
          key: "get",
          value: function get(id) {
            return this.http.get("".concat(this.url, "/").concat(id));
          }
        }, {
          key: "closeOrders",
          value: function closeOrders(ids) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers = headers.append('Content-Type', 'application/json');
            return this.http.post("".concat(this.url, "/close-orders"), JSON.stringify(ids), {
              headers: headers
            });
          }
        }, {
          key: "extendOrdersDate",
          value: function extendOrdersDate(ids) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers = headers.append('Content-Type', 'application/json');
            return this.http.post("".concat(this.url, "/extend-orders"), JSON.stringify(ids), {
              headers: headers
            });
          }
        }, {
          key: "addOrders",
          value: function addOrders(ids) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers = headers.append('Content-Type', 'application/json');
            return this.http.post("".concat(this.url, "/add-orders"), JSON.stringify(ids), {
              headers: headers
            });
          }
        }, {
          key: "placeOrders",
          value: function placeOrders(orders) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers = headers.append('Content-Type', 'application/json');
            return this.http.post("".concat(this.url, "/place-orders"), JSON.stringify(orders), {
              headers: headers
            });
          }
        }, {
          key: "returnOrders",
          value: function returnOrders(userId, ids) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers = headers.append('Content-Type', 'application/json');
            return this.http.post("".concat(this.url, "/return-orders/").concat(userId), JSON.stringify(ids), {
              headers: headers
            });
          }
        }]);

        return OrdersService;
      }();

      OrdersService.ɵfac = function OrdersService_Factory(t) {
        return new (t || OrdersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      OrdersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: OrdersService,
        factory: OrdersService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/api/services/users.service.ts":
    /*!***********************************************!*\
      !*** ./src/app/api/services/users.service.ts ***!
      \***********************************************/

    /*! exports provided: UsersService */

    /***/
    function srcAppApiServicesUsersServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersService", function () {
        return UsersService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var UsersService = /*#__PURE__*/function () {
        function UsersService(http) {
          _classCallCheck(this, UsersService);

          this.http = http;
          this.url = 'api/users';
        }

        _createClass(UsersService, [{
          key: "getAll",
          value: function getAll() {
            return this.http.get("".concat(this.url));
          }
        }, {
          key: "getById",
          value: function getById(id) {
            return this.http.get("".concat(this.url, "/").concat(id));
          }
        }]);

        return UsersService;
      }();

      UsersService.ɵfac = function UsersService_Factory(t) {
        return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UsersService,
        factory: UsersService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _api_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./api/services */
      "./src/app/api/services.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _menu_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./menu/user-menu/user-menu.component */
      "./src/app/menu/user-menu/user-menu.component.ts");
      /* harmony import */


      var _infrastructure_pipes_role_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./infrastructure/pipes/role.pipe */
      "./src/app/infrastructure/pipes/role.pipe.ts");

      function AppComponent_a_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0410\u0432\u0442\u043E\u0440\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_a_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0416\u0430\u043D\u0440\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(authService) {
          _classCallCheck(this, AppComponent);

          this.authService = authService;
        }

        _createClass(AppComponent, [{
          key: "currentUser",
          get: function get() {
            return this.authService && this.authService.currentUserValue ? this.authService.currentUserValue : null;
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app"]],
        decls: 18,
        vars: 10,
        consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "/", 1, "nav-link"], ["class", "nav-link", "routerLink", "/authors", 4, "ngIf"], ["class", "nav-link", "routerLink", "/genres", 4, "ngIf"], [1, "navbar-nav", "d-flex", "flex-row"], [1, "container", "body-content"], ["routerLink", "/authors", 1, "nav-link"], ["routerLink", "/genres", 1, "nav-link"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_a_7_Template, 2, 0, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "isAdmin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "isStorekeeper");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_a_11_Template, 2, 0, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "isAdmin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "isStorekeeper");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "user-menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 2, ctx.currentUser) || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, ctx.currentUser));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 6, ctx.currentUser) || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 8, ctx.currentUser));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _menu_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_4__["UserMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        pipes: [_infrastructure_pipes_role_pipe__WEBPACK_IMPORTED_MODULE_5__["IsAdmin"], _infrastructure_pipes_role_pipe__WEBPACK_IMPORTED_MODULE_5__["IsStorekeeper"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app',
            templateUrl: './app.component.html'
          }]
        }], function () {
          return [{
            type: _api_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _books_books_list_books_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./books/books-list/books-list.component */
      "./src/app/books/books-list/books-list.component.ts");
      /* harmony import */


      var _exceptions_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./exceptions/not-found/not-found.component */
      "./src/app/exceptions/not-found/not-found.component.ts");
      /* harmony import */


      var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./authentication/login/login.component */
      "./src/app/authentication/login/login.component.ts");
      /* harmony import */


      var _authentication_registration_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./authentication/registration/registration.component */
      "./src/app/authentication/registration/registration.component.ts");
      /* harmony import */


      var _menu_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./menu/user-menu/user-menu.component */
      "./src/app/menu/user-menu/user-menu.component.ts");
      /* harmony import */


      var _orders_user_orders_user_orders_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./orders/user-orders/user-orders.component */
      "./src/app/orders/user-orders/user-orders.component.ts");
      /* harmony import */


      var _infrastructure_app_routes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./infrastructure/app-routes.module */
      "./src/app/infrastructure/app-routes.module.ts");
      /* harmony import */


      var _infrastructure_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./infrastructure/interceptors/error.interceptor */
      "./src/app/infrastructure/interceptors/error.interceptor.ts");
      /* harmony import */


      var _infrastructure_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./infrastructure/interceptors/jwt.interceptor */
      "./src/app/infrastructure/interceptors/jwt.interceptor.ts");
      /* harmony import */


      var _infrastructure_pipes_role_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./infrastructure/pipes/role.pipe */
      "./src/app/infrastructure/pipes/role.pipe.ts");
      /* harmony import */


      var _infrastructure_pipes_order_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./infrastructure/pipes/order.pipe */
      "./src/app/infrastructure/pipes/order.pipe.ts");
      /* harmony import */


      var _infrastructure_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./infrastructure/pipes/date.pipe */
      "./src/app/infrastructure/pipes/date.pipe.ts");
      /* harmony import */


      var _infrastructure_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./infrastructure/pipes/search.pipe */
      "./src/app/infrastructure/pipes/search.pipe.ts");
      /* harmony import */


      var _orders_cart_cart_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./orders/cart/cart.component */
      "./src/app/orders/cart/cart.component.ts");
      /* harmony import */


      var _books_book_page_book_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./books/book-page/book-page.component */
      "./src/app/books/book-page/book-page.component.ts");
      /* harmony import */


      var _books_book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./books/book-edit/book-edit.component */
      "./src/app/books/book-edit/book-edit.component.ts");
      /* harmony import */


      var _orders_orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./orders/orders-list/orders-list.component */
      "./src/app/orders/orders-list/orders-list.component.ts");
      /* harmony import */


      var _authors_authors_list_authors_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./authors/authors-list/authors-list.component */
      "./src/app/authors/authors-list/authors-list.component.ts");
      /* harmony import */


      var _authors_author_edit_author_edit_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./authors/author-edit/author-edit.component */
      "./src/app/authors/author-edit/author-edit.component.ts");
      /* harmony import */


      var _genres_genres_list_genres_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./genres/genres-list/genres-list.component */
      "./src/app/genres/genres-list/genres-list.component.ts");
      /* harmony import */


      var _genres_genre_edit_genre_edit_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./genres/genre-edit/genre-edit.component */
      "./src/app/genres/genre-edit/genre-edit.component.ts");
      /* harmony import */


      var _items_tagbox_tagbox_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./items/tagbox/tagbox.component */
      "./src/app/items/tagbox/tagbox.component.ts");
      /* harmony import */


      var _items_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./items/carousel/carousel.component */
      "./src/app/items/carousel/carousel.component.ts");
      /* harmony import */


      var _items_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./items/file-uploader/file-uploader.component */
      "./src/app/items/file-uploader/file-uploader.component.ts");
      /* harmony import */


      var _infrastructure_pipes_image_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./infrastructure/pipes/image.pipe */
      "./src/app/infrastructure/pipes/image.pipe.ts");
      /* harmony import */


      var _exceptions_forbid_forbid_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./exceptions/forbid/forbid.component */
      "./src/app/exceptions/forbid/forbid.component.ts");
      /* harmony import */


      var _items_modal_modal_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./items/modal/modal.component */
      "./src/app/items/modal/modal.component.ts");
      /* harmony import */


      var _items_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./items/pagination/pagination.component */
      "./src/app/items/pagination/pagination.component.ts");

      ;

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
          useClass: _infrastructure_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_12__["ErrorInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
          useClass: _infrastructure_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_13__["JwtInterceptor"],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _infrastructure_app_routes_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutesModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _books_books_list_books_list_component__WEBPACK_IMPORTED_MODULE_5__["BooksListComponent"], _exceptions_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"], _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _authentication_registration_registration_component__WEBPACK_IMPORTED_MODULE_8__["RegistrationComponent"], _menu_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_9__["UserMenuComponent"], _orders_user_orders_user_orders_component__WEBPACK_IMPORTED_MODULE_10__["UserOrdersComponent"], _infrastructure_pipes_role_pipe__WEBPACK_IMPORTED_MODULE_14__["RoleTitle"], _infrastructure_pipes_role_pipe__WEBPACK_IMPORTED_MODULE_14__["IsAdmin"], _infrastructure_pipes_role_pipe__WEBPACK_IMPORTED_MODULE_14__["IsStorekeeper"], _infrastructure_pipes_role_pipe__WEBPACK_IMPORTED_MODULE_14__["IsLibrarian"], _infrastructure_pipes_order_pipe__WEBPACK_IMPORTED_MODULE_15__["OrderStatusTitle"], _infrastructure_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_16__["FormatDate"], _infrastructure_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_17__["SearchFilter"], _infrastructure_pipes_image_pipe__WEBPACK_IMPORTED_MODULE_29__["SafeImagePipe"], _orders_cart_cart_component__WEBPACK_IMPORTED_MODULE_18__["CartComponent"], _books_book_page_book_page_component__WEBPACK_IMPORTED_MODULE_19__["BookPageComponent"], _books_book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_20__["BookEditComponent"], _orders_orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_21__["OrdersListComponent"], _authors_authors_list_authors_list_component__WEBPACK_IMPORTED_MODULE_22__["AuthorsListComponent"], _authors_author_edit_author_edit_component__WEBPACK_IMPORTED_MODULE_23__["AuthorEditComponent"], _genres_genres_list_genres_list_component__WEBPACK_IMPORTED_MODULE_24__["GenresListComponent"], _genres_genre_edit_genre_edit_component__WEBPACK_IMPORTED_MODULE_25__["GenreEditComponent"], _items_tagbox_tagbox_component__WEBPACK_IMPORTED_MODULE_26__["TagboxComponent"], _items_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_27__["CarouselComponent"], _items_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_28__["FileUploaderComponent"], _exceptions_forbid_forbid_component__WEBPACK_IMPORTED_MODULE_30__["ForbidComponent"], _items_modal_modal_component__WEBPACK_IMPORTED_MODULE_31__["ModalComponent"], _items_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_32__["PaginationComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _infrastructure_app_routes_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutesModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _infrastructure_app_routes_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutesModule"]],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _books_books_list_books_list_component__WEBPACK_IMPORTED_MODULE_5__["BooksListComponent"], _exceptions_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"], _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _authentication_registration_registration_component__WEBPACK_IMPORTED_MODULE_8__["RegistrationComponent"], _menu_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_9__["UserMenuComponent"], _orders_user_orders_user_orders_component__WEBPACK_IMPORTED_MODULE_10__["UserOrdersComponent"], _infrastructure_pipes_role_pipe__WEBPACK_IMPORTED_MODULE_14__["RoleTitle"], _infrastructure_pipes_role_pipe__WEBPACK_IMPORTED_MODULE_14__["IsAdmin"], _infrastructure_pipes_role_pipe__WEBPACK_IMPORTED_MODULE_14__["IsStorekeeper"], _infrastructure_pipes_role_pipe__WEBPACK_IMPORTED_MODULE_14__["IsLibrarian"], _infrastructure_pipes_order_pipe__WEBPACK_IMPORTED_MODULE_15__["OrderStatusTitle"], _infrastructure_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_16__["FormatDate"], _infrastructure_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_17__["SearchFilter"], _infrastructure_pipes_image_pipe__WEBPACK_IMPORTED_MODULE_29__["SafeImagePipe"], _orders_cart_cart_component__WEBPACK_IMPORTED_MODULE_18__["CartComponent"], _books_book_page_book_page_component__WEBPACK_IMPORTED_MODULE_19__["BookPageComponent"], _books_book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_20__["BookEditComponent"], _orders_orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_21__["OrdersListComponent"], _authors_authors_list_authors_list_component__WEBPACK_IMPORTED_MODULE_22__["AuthorsListComponent"], _authors_author_edit_author_edit_component__WEBPACK_IMPORTED_MODULE_23__["AuthorEditComponent"], _genres_genres_list_genres_list_component__WEBPACK_IMPORTED_MODULE_24__["GenresListComponent"], _genres_genre_edit_genre_edit_component__WEBPACK_IMPORTED_MODULE_25__["GenreEditComponent"], _items_tagbox_tagbox_component__WEBPACK_IMPORTED_MODULE_26__["TagboxComponent"], _items_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_27__["CarouselComponent"], _items_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_28__["FileUploaderComponent"], _exceptions_forbid_forbid_component__WEBPACK_IMPORTED_MODULE_30__["ForbidComponent"], _items_modal_modal_component__WEBPACK_IMPORTED_MODULE_31__["ModalComponent"], _items_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_32__["PaginationComponent"]],
            providers: [{
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
              useClass: _infrastructure_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_12__["ErrorInterceptor"],
              multi: true
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
              useClass: _infrastructure_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_13__["JwtInterceptor"],
              multi: true
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/authentication/login/login.component.ts":
    /*!*********************************************************!*\
      !*** ./src/app/authentication/login/login.component.ts ***!
      \*********************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function srcAppAuthenticationLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../api/services */
      "./src/app/api/services.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function LoginComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0432\u0432\u0435\u0441\u0442\u0438 \u043B\u043E\u0433\u0438\u043D ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0432\u0432\u0435\u0441\u0442\u0438 \u043F\u0430\u0440\u043E\u043B\u044C ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(router, authenticationService) {
          _classCallCheck(this, LoginComponent);

          this.router = router;
          this.authenticationService = authenticationService;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "authenticate",
          value: function authenticate(form) {
            var _this3 = this;

            if (form.valid) {
              this.authenticationService.authenticate({
                login: this.login,
                password: this.password
              }).subscribe(function () {
                _this3.router.navigateByUrl('/');
              });
            }
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["login"]],
        decls: 19,
        vars: 5,
        consts: [[1, "w-25", "m-auto"], ["novalidate", "", 3, "ngSubmit"], ["form", "ngForm"], [1, "form-group"], ["name", "login", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["loginInput", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["name", "password", "type", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["passwordInput", "ngModel"], [1, "text-xs-center"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "text-danger"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

              return ctx.authenticate(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041B\u043E\u0433\u0438\u043D");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_7_listener($event) {
              return ctx.login = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_div_9_Template, 2, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041F\u0430\u0440\u043E\u043B\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) {
              return ctx.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_div_15_Template, 2, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0412\u0445\u043E\u0434");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.login);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.touched && (_r1.errors == null ? null : _r1.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.touched && (_r3.errors == null ? null : _r3.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid || _r0.pending);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _api_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/authentication/registration/registration.component.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/authentication/registration/registration.component.ts ***!
      \***********************************************************************/

    /*! exports provided: RegistrationComponent */

    /***/
    function srcAppAuthenticationRegistrationRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
        return RegistrationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_api_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/api/services */
      "./src/app/api/services.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function RegistrationComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0432\u0432\u0435\u0441\u0442\u0438 \u0444\u0430\u043C\u0438\u043B\u0438\u044E ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegistrationComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0432\u0432\u0435\u0441\u0442\u0438 \u0438\u043C\u044F ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegistrationComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0432\u0432\u0435\u0441\u0442\u0438 \u043F\u043E\u0447\u0442\u0443 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegistrationComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0432\u0432\u0435\u0441\u0442\u0438 \u043B\u043E\u0433\u0438\u043D ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegistrationComponent_div_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0432\u0432\u0435\u0441\u0442\u0438 \u043F\u0430\u0440\u043E\u043B\u044C ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var RegistrationComponent = /*#__PURE__*/function () {
        function RegistrationComponent(authenticationService, router) {
          _classCallCheck(this, RegistrationComponent);

          this.authenticationService = authenticationService;
          this.router = router;
          this.request = {};
        }

        _createClass(RegistrationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "registration",
          value: function registration(request) {
            var _this4 = this;

            this.authenticationService.registration(request).subscribe(function () {
              _this4.router.navigateByUrl('/');
            });
          }
        }]);

        return RegistrationComponent;
      }();

      RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) {
        return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegistrationComponent,
        selectors: [["registration"]],
        decls: 37,
        vars: 11,
        consts: [[1, "w-25", "m-auto"], ["novalidate", "", 3, "ngSubmit"], ["form", "ngForm"], [1, "form-group"], ["name", "lastName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["lastName", "ngModel"], ["class", "text-danger", 4, "ngIf"], ["name", "firstName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["firstName", "ngModel"], ["name", "email", "type", "email", "required", "", "email", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["name", "login", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["login", "ngModel"], ["name", "password", "type", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "text-xs-center"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "text-danger"]],
        template: function RegistrationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_Template_form_ngSubmit_2_listener() {
              return ctx.registration(ctx.request);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_7_listener($event) {
              return ctx.request.lastName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RegistrationComponent_div_9_Template, 2, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0418\u043C\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_13_listener($event) {
              return ctx.request.firstName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RegistrationComponent_div_15_Template, 2, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_19_listener($event) {
              return ctx.request.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RegistrationComponent_div_21_Template, 2, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u041B\u043E\u0433\u0438\u043D");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_25_listener($event) {
              return ctx.request.login = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RegistrationComponent_div_27_Template, 2, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u041F\u0430\u0440\u043E\u043B\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 13, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_31_listener($event) {
              return ctx.request.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, RegistrationComponent_div_33_Template, 2, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.request.lastName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.touched && (_r1.errors == null ? null : _r1.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.request.firstName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.touched && (_r3.errors == null ? null : _r3.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.request.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.touched && (_r5.errors == null ? null : _r5.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.request.login);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.touched && (_r7.errors == null ? null : _r7.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.request.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.touched && (_r9.errors == null ? null : _r9.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid || _r0.pending);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["EmailValidator"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'registration',
            templateUrl: './registration.component.html',
            styleUrls: ['./registration.component.css']
          }]
        }], function () {
          return [{
            type: src_app_api_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/authors/author-edit/author-edit.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/authors/author-edit/author-edit.component.ts ***!
      \**************************************************************/

    /*! exports provided: AuthorEditComponent */

    /***/
    function srcAppAuthorsAuthorEditAuthorEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthorEditComponent", function () {
        return AuthorEditComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_api_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/api/services */
      "./src/app/api/services.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var AuthorEditComponent = /*#__PURE__*/function () {
        function AuthorEditComponent(authorsService, router, activatedRoute) {
          _classCallCheck(this, AuthorEditComponent);

          this.authorsService = authorsService;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.author = {};
          this.id = activatedRoute.snapshot.params['id'];
          this.isNew = !this.id;
        }

        _createClass(AuthorEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (this.isNew) {
                        _context2.next = 6;
                        break;
                      }

                      _context2.next = 3;
                      return this.authorsService.getAuthor(this.id).toPromise();

                    case 3:
                      _context2.t0 = _context2.sent;
                      _context2.next = 7;
                      break;

                    case 6:
                      _context2.t0 = {};

                    case 7:
                      this.author = _context2.t0;

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "save",
          value: function save() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this5 = this;

              var action;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (this.isNew) {
                        action = this.authorsService.createAuthor(this.author).toPromise();
                      } else {
                        action = this.authorsService.updateAuthor(this.author).toPromise();
                      }

                      _context3.next = 3;
                      return action.then(function () {
                        _this5.router.navigateByUrl('/authors');
                      });

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return AuthorEditComponent;
      }();

      AuthorEditComponent.ɵfac = function AuthorEditComponent_Factory(t) {
        return new (t || AuthorEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_1__["AuthorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      AuthorEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthorEditComponent,
        selectors: [["author-edit"]],
        decls: 12,
        vars: 2,
        consts: [["novalidate", "", 3, "ngSubmit"], ["form", "ngForm"], [1, "form-group"], ["name", "fio", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "mr-1", "ml-1"], ["type", "submit", "routerLink", "/authors", 1, "btn", "btn-secondary", "mr-1", "ml-1"]],
        template: function AuthorEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AuthorEditComponent_Template_form_ngSubmit_2_listener() {
              return ctx.save();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0424\u0418\u041E");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AuthorEditComponent_Template_input_ngModelChange_7_listener($event) {
              return ctx.author.fio = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041E\u0442\u043C\u0435\u043D\u0430");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isNew ? "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435" : "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.author.fio);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhvcnMvYXV0aG9yLWVkaXQvYXV0aG9yLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorEditComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'author-edit',
            templateUrl: './author-edit.component.html',
            styleUrls: ['./author-edit.component.css']
          }]
        }], function () {
          return [{
            type: src_app_api_services__WEBPACK_IMPORTED_MODULE_1__["AuthorsService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/authors/authors-list/authors-list.component.ts":
    /*!****************************************************************!*\
      !*** ./src/app/authors/authors-list/authors-list.component.ts ***!
      \****************************************************************/

    /*! exports provided: AuthorsListComponent */

    /***/
    function srcAppAuthorsAuthorsListAuthorsListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthorsListComponent", function () {
        return AuthorsListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_api_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/api/services */
      "./src/app/api/services.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function AuthorsListComponent_tr_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthorsListComponent_tr_12_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var a_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2["delete"](a_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var a_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r1 == null ? null : a_r1.fio);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/author/" + (a_r1 == null ? null : a_r1.id) + "/edit");
        }
      }

      var AuthorsListComponent = /*#__PURE__*/function () {
        function AuthorsListComponent(authorsService) {
          _classCallCheck(this, AuthorsListComponent);

          this.authorsService = authorsService;
          this.authors = [];
        }

        _createClass(AuthorsListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadAuthors();
          }
        }, {
          key: "loadAuthors",
          value: function loadAuthors() {
            var _this6 = this;

            this.authorsService.getAuthors().subscribe(function (authors) {
              _this6.authors = authors;
            });
          }
        }, {
          key: "delete",
          value: function _delete(author) {
            var _this7 = this;

            if (confirm('Удалить автора?')) {
              this.authorsService.deleteAuthor(author.id).subscribe(function () {
                _this7.loadAuthors();
              });
            }
          }
        }]);

        return AuthorsListComponent;
      }();

      AuthorsListComponent.ɵfac = function AuthorsListComponent_Factory(t) {
        return new (t || AuthorsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_1__["AuthorsService"]));
      };

      AuthorsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthorsListComponent,
        selectors: [["authors-list"]],
        decls: 13,
        vars: 2,
        consts: [[1, "btn", "btn-primary", 3, "routerLink"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "mr-1", "ml-1", 3, "routerLink"], [1, "btn", "btn-primary", "mr-1", "ml-1", 3, "click"]],
        template: function AuthorsListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0421\u043F\u0438\u0441\u043E\u043A \u0430\u0432\u0442\u043E\u0440\u043E\u0432");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0424\u0418\u041E");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AuthorsListComponent_tr_12_Template, 8, 2, "tr", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/author/create");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.authors);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhvcnMvYXV0aG9ycy1saXN0L2F1dGhvcnMtbGlzdC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorsListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'authors-list',
            templateUrl: './authors-list.component.html',
            styleUrls: ['./authors-list.component.css']
          }]
        }], function () {
          return [{
            type: src_app_api_services__WEBPACK_IMPORTED_MODULE_1__["AuthorsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/books/book-edit/book-edit.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/books/book-edit/book-edit.component.ts ***!
      \********************************************************/

    /*! exports provided: BookEditComponent */

    /***/
    function srcAppBooksBookEditBookEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookEditComponent", function () {
        return BookEditComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_api_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/api/models */
      "./src/app/api/models.ts");
      /* harmony import */


      var src_app_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/api/services */
      "./src/app/api/services.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _items_tagbox_tagbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../items/tagbox/tagbox.component */
      "./src/app/items/tagbox/tagbox.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _items_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../items/file-uploader/file-uploader.component */
      "./src/app/items/file-uploader/file-uploader.component.ts");

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var _c0 = ["authorsTagBox"];
      var _c1 = ["genresTagBox"];
      var _c2 = ["coverFileInput"];
      var _c3 = ["pagesFileInput"];

      function BookEditComponent_div_22_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookEditComponent_div_22_div_4_Template_span_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var i_r7 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r8.removeAttachment(i_r7.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " X ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", i_r7.name, "", i_r7.isMain ? "(\u043E\u0431\u043B\u043E\u0436\u043A\u0430)" : "", "");
        }
      }

      function BookEditComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0418\u043C\u0435\u044E\u0449\u0438\u0435\u0441\u044F \u0432\u043B\u043E\u0436\u0435\u043D\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BookEditComponent_div_22_div_4_Template, 6, 2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.book.attachments);
        }
      }

      var BookEditComponent = /*#__PURE__*/function () {
        function BookEditComponent(booksService, authorsService, genresService, router, activatedRoute) {
          _classCallCheck(this, BookEditComponent);

          this.booksService = booksService;
          this.authorsService = authorsService;
          this.genresService = genresService;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.book = {};
          this.authors = [];
          this.genres = [];
          this.id = activatedRoute.snapshot.params['id'];
          this.isNew = !this.id;
        }

        _createClass(BookEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (this.isNew) {
                        _context4.next = 6;
                        break;
                      }

                      _context4.next = 3;
                      return this.booksService.getBook(this.id).toPromise();

                    case 3:
                      _context4.t0 = _context4.sent;
                      _context4.next = 7;
                      break;

                    case 6:
                      _context4.t0 = {
                        count: 0,
                        attachments: []
                      };

                    case 7:
                      this.book = _context4.t0;
                      _context4.next = 10;
                      return this.authorsService.getAuthors().toPromise();

                    case 10:
                      this.authors = _context4.sent;
                      _context4.next = 13;
                      return this.genresService.getGenres().toPromise();

                    case 13:
                      this.genres = _context4.sent;

                    case 14:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "removeAttachment",
          value: function removeAttachment(key) {
            this.book.attachments = this.book.attachments.filter(function (x) {
              return x.id != key;
            });
          }
        }, {
          key: "save",
          value: function save() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this8 = this,
                  _book$attachments;

              var action, selectedAuthors, selectedGenres, book, attachments;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      selectedAuthors = this.authorsTagBox.getSelectedItems();
                      selectedGenres = this.genresTagBox.getSelectedItems();
                      book = {
                        id: !this.isNew ? this.book.id : 0,
                        title: this.book.title,
                        count: this.book.count,
                        bookAuthors: selectedAuthors.map(function (x) {
                          return {
                            authorId: x.id,
                            bookId: _this8.book.id
                          };
                        }),
                        bookGenres: selectedGenres.map(function (x) {
                          return {
                            genreId: x.id,
                            bookId: _this8.book.id
                          };
                        }),
                        attachments: this.book.attachments
                      };

                      if (this.coverFileInput.uploadedBlobs && this.coverFileInput.uploadedBlobs.length > 0) {
                        book.attachments.map(function (x) {
                          return x.isMain = false;
                        });
                      }

                      attachments = this.coverFileInput.uploadedBlobs.map(function (x) {
                        return {
                          name: x.fileName,
                          type: src_app_api_models__WEBPACK_IMPORTED_MODULE_1__["AttachmentType"].BookAttachment,
                          isMain: true,
                          isPreview: false,
                          blobId: x.blobId
                        };
                      });
                      attachments.push.apply(attachments, _toConsumableArray(this.pagesFileInput.uploadedBlobs.map(function (x) {
                        return {
                          name: x.fileName,
                          type: src_app_api_models__WEBPACK_IMPORTED_MODULE_1__["AttachmentType"].BookAttachment,
                          isMain: false,
                          isPreview: false,
                          blobId: x.blobId
                        };
                      })));

                      (_book$attachments = book.attachments).push.apply(_book$attachments, _toConsumableArray(attachments));

                      if (this.isNew) {
                        action = this.booksService.createBook(book).toPromise();
                      } else {
                        action = this.booksService.updateBook(book).toPromise();
                      }

                      _context5.next = 10;
                      return action.then(function (data) {
                        var id = _this8.isNew && data ? data : _this8.id;

                        _this8.router.navigateByUrl("/book/".concat(id));
                      });

                    case 10:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return BookEditComponent;
      }();

      BookEditComponent.ɵfac = function BookEditComponent_Factory(t) {
        return new (t || BookEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_2__["BooksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_2__["AuthorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_2__["GenresService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
      };

      BookEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BookEditComponent,
        selectors: [["book-edit"]],
        viewQuery: function BookEditComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.authorsTagBox = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.genresTagBox = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.coverFileInput = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pagesFileInput = _t.first);
          }
        },
        decls: 39,
        vars: 16,
        consts: [["novalidate", "", 3, "submit"], ["form", "ngForm"], [1, "form-group"], ["name", "title", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "dataSource", "preSelected", "preSelectedKeyField", "keyField", "displayField"], ["authorsTagBox", ""], ["genresTagBox", ""], ["name", "count", "type", "number", "min", "0", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "form-group", 4, "ngIf"], [1, "form-control"], [3, "mode"], ["coverFileInput", ""], ["pagesFileInput", ""], ["type", "submit", 1, "btn", "btn-primary", "mr-1", "ml-1"], ["type", "submit", "routerLink", "/", 1, "btn", "btn-secondary", "mr-1", "ml-1"], [1, "mb-2", 2, "display", "flex"], [4, "ngFor", "ngForOf"], [1, "mr-2"], [1, "badge", "badge-secondary", 3, "click"]],
        template: function BookEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function BookEditComponent_Template_form_submit_2_listener() {
              return ctx.save();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookEditComponent_Template_input_ngModelChange_7_listener($event) {
              return ctx.book.title = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0410\u0432\u0442\u043E\u0440\u044B");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tagbox", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0416\u0430\u043D\u0440\u044B");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "tagbox", 4, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookEditComponent_Template_input_ngModelChange_21_listener($event) {
              return ctx.book.count = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, BookEditComponent_div_22_Template, 5, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0431\u043B\u043E\u0436\u043A\u0443");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "file-uploader", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u0438\u043C\u0435\u0440\u044B \u0441\u0442\u0440\u0430\u043D\u0438\u0446");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "file-uploader", 10, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u041E\u0442\u043C\u0435\u043D\u0430");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isNew ? "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435" : "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.book.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.authors)("preSelected", ctx.book.bookAuthors)("preSelectedKeyField", "authorId")("keyField", "id")("displayField", "fio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.genres)("preSelected", ctx.book.bookGenres)("preSelectedKeyField", "genreId")("keyField", "id")("displayField", "title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.book.count);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.book.attachments && ctx.book.attachments.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "single");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "multiple");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _items_tagbox_tagbox_component__WEBPACK_IMPORTED_MODULE_5__["TagboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _items_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_7__["FileUploaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tzL2Jvb2stZWRpdC9ib29rLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookEditComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'book-edit',
            templateUrl: './book-edit.component.html',
            styleUrls: ['./book-edit.component.css']
          }]
        }], function () {
          return [{
            type: src_app_api_services__WEBPACK_IMPORTED_MODULE_2__["BooksService"]
          }, {
            type: src_app_api_services__WEBPACK_IMPORTED_MODULE_2__["AuthorsService"]
          }, {
            type: src_app_api_services__WEBPACK_IMPORTED_MODULE_2__["GenresService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }];
        }, {
          authorsTagBox: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['authorsTagBox']
          }],
          genresTagBox: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['genresTagBox']
          }],
          coverFileInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['coverFileInput']
          }],
          pagesFileInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['pagesFileInput']
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/books/book-page/book-page.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/books/book-page/book-page.component.ts ***!
      \********************************************************/

    /*! exports provided: BookPageComponent */

    /***/
    function srcAppBooksBookPageBookPageComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookPageComponent", function () {
        return BookPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_api_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/api/services */
      "./src/app/api/services.ts");
      /* harmony import */


      var src_app_infrastructure_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/infrastructure/services/cart.service */
      "./src/app/infrastructure/services/cart.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_infrastructure_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/infrastructure/services/modal.service */
      "./src/app/infrastructure/services/modal.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _items_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../items/modal/modal.component */
      "./src/app/items/modal/modal.component.ts");
      /* harmony import */


      var _items_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../items/carousel/carousel.component */
      "./src/app/items/carousel/carousel.component.ts");
      /* harmony import */


      var _infrastructure_pipes_image_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../infrastructure/pipes/image.pipe */
      "./src/app/infrastructure/pipes/image.pipe.ts");

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      function BookPageComponent_img_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookPageComponent_img_4_Template_img_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.openModal("pages-modal");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "safeImage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r0.book.coverUrl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function BookPageComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
        }
      }

      function BookPageComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookPageComponent_div_7_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.openModal("pages-modal");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r3.book.pageExampleBlobIds.length, ")");
        }
      }

      function BookPageComponent_div_21_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookPageComponent_div_21_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r11.addToCart(ctx_r11.book);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0437\u044F\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function BookPageComponent_div_21_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function BookPageComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookPageComponent_div_21_button_1_Template, 2, 0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BookPageComponent_div_21_span_2_Template, 2, 0, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.book.count > 0 && !ctx_r4.cartService.alreadyInCart(ctx_r4.book));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.cartService.alreadyInCart(ctx_r4.book));
        }
      }

      var BookPageComponent = /*#__PURE__*/function () {
        function BookPageComponent(booksService, authService, cartService, activatedRoute, attachService, modalService) {
          _classCallCheck(this, BookPageComponent);

          this.booksService = booksService;
          this.authService = authService;
          this.cartService = cartService;
          this.activatedRoute = activatedRoute;
          this.attachService = attachService;
          this.modalService = modalService;
          this.book = {};
          this.id = activatedRoute.snapshot.params['id'];
        }

        _createClass(BookPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this9 = this;

              var bookResult, coverAttach;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.booksService.getBook(this.id).toPromise();

                    case 2:
                      bookResult = _context6.sent;
                      this.book = {
                        id: bookResult.id,
                        title: bookResult.title,
                        count: bookResult.count,
                        authors: bookResult.bookAuthors.map(function (x) {
                          return x.author && x.author.fio;
                        }).join(','),
                        genres: bookResult.bookGenres.map(function (x) {
                          return x.genre && x.genre.title;
                        }).join(',')
                      };
                      bookResult.attachments.sort(function (a, b) {
                        if (a.isMain) return 1;
                      });
                      this.book.pageExampleBlobIds = bookResult.attachments.map(function (x) {
                        return x.blobId;
                      });
                      coverAttach = bookResult.attachments.find(function (x) {
                        return x.isMain;
                      });

                      if (coverAttach && coverAttach.blobId) {
                        this.attachService.getImageUrl(coverAttach.blobId).then(function (url) {
                          _this9.book.coverUrl = url;
                        });
                      }

                    case 8:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "addToCart",
          value: function addToCart(book) {
            this.cartService.addToCart(book);
          }
        }, {
          key: "openModal",
          value: function openModal(id) {
            this.modalService.open(id);
          }
        }, {
          key: "currentUser",
          get: function get() {
            return this.authService && this.authService.currentUserValue ? this.authService.currentUserValue : null;
          }
        }]);

        return BookPageComponent;
      }();

      BookPageComponent.ɵfac = function BookPageComponent_Factory(t) {
        return new (t || BookPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_1__["BooksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_infrastructure_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_1__["AttachmentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_infrastructure_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"]));
      };

      BookPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BookPageComponent,
        selectors: [["book-page"]],
        decls: 24,
        vars: 8,
        consts: [[1, "container"], [1, "row"], [1, "col-6", "pic-preview", "mr-5", "mb-2"], ["class", "pic-preview", "style", "cursor: pointer;", 3, "src", "click", 4, "ngIf", "ngIfElse"], ["noImageFound", ""], ["class", "row", 4, "ngIf"], [1, "col-6"], [4, "ngIf"], ["id", "pages-modal"], [3, "dataSource"], [1, "pic-preview", 2, "cursor", "pointer", 3, "src", "click"], ["src", "assets/doge.jpg", 1, "pic-preview"], [1, "mx-auto", "btn", 3, "click"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"]],
        template: function BookPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BookPageComponent_img_4_Template, 2, 3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BookPageComponent_ng_template_5_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BookPageComponent_div_7_Template, 3, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0410\u0432\u0442\u043E\u0440(-\u044B)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0416\u0430\u043D\u0440(-\u044B)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, BookPageComponent_div_21_Template, 3, 2, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "modal", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "carousel", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.book.coverUrl)("ngIfElse", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.book.pageExampleBlobIds && ctx.book.pageExampleBlobIds.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.book.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.book.authors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.book.genres);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.book.pageExampleBlobIds);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _items_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"], _items_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"]],
        pipes: [_infrastructure_pipes_image_pipe__WEBPACK_IMPORTED_MODULE_8__["SafeImagePipe"]],
        styles: [".pic-preview[_ngcontent-%COMP%] {\r\n    max-height: 300px;\r\n    max-width: 300px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va3MvYm9vay1wYWdlL2Jvb2stcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tzL2Jvb2stcGFnZS9ib29rLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waWMtcHJldmlldyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookPageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'book-page',
            templateUrl: './book-page.component.html',
            styleUrls: ['./book-page.component.css']
          }]
        }], function () {
          return [{
            type: src_app_api_services__WEBPACK_IMPORTED_MODULE_1__["BooksService"]
          }, {
            type: src_app_api_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
          }, {
            type: src_app_infrastructure_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: src_app_api_services__WEBPACK_IMPORTED_MODULE_1__["AttachmentsService"]
          }, {
            type: src_app_infrastructure_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/books/books-list/books-list.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/books/books-list/books-list.component.ts ***!
      \**********************************************************/

    /*! exports provided: BooksListComponent */

    /***/
    function srcAppBooksBooksListBooksListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BooksListComponent", function () {
        return BooksListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _api_services_books_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../api/services/books.service */
      "./src/app/api/services/books.service.ts");
      /* harmony import */


      var src_app_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/api/services */
      "./src/app/api/services.ts");
      /* harmony import */


      var _infrastructure_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../infrastructure/services/cart.service */
      "./src/app/infrastructure/services/cart.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _items_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../items/pagination/pagination.component */
      "./src/app/items/pagination/pagination.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _infrastructure_pipes_role_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../infrastructure/pipes/role.pipe */
      "./src/app/infrastructure/pipes/role.pipe.ts");
      /* harmony import */


      var _infrastructure_pipes_image_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../infrastructure/pipes/image.pipe */
      "./src/app/infrastructure/pipes/image.pipe.ts");

      function BooksListComponent_a_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/book/create");
        }
      }

      function BooksListComponent_td_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
        }
      }

      function BooksListComponent_td_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
        }
      }

      function BooksListComponent_tr_30_img_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "safeImage");
        }

        if (rf & 2) {
          var b_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, b_r4 == null ? null : b_r4.coverUrl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function BooksListComponent_tr_30_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
        }
      }

      function BooksListComponent_tr_30_td_14_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BooksListComponent_tr_30_td_14_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var b_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.addToCart(b_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0437\u044F\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function BooksListComponent_tr_30_td_14_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function BooksListComponent_tr_30_td_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BooksListComponent_tr_30_td_14_button_1_Template, 2, 0, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BooksListComponent_tr_30_td_14_span_2_Template, 2, 0, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var b_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (b_r4 == null ? null : b_r4.count) > 0 && !ctx_r8.cartService.alreadyInCart(b_r4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.cartService.alreadyInCart(b_r4));
        }
      }

      function BooksListComponent_tr_30_td_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BooksListComponent_tr_30_td_15_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var b_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17["delete"](b_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var b_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/book/" + (b_r4 == null ? null : b_r4.id) + "/edit");
        }
      }

      function BooksListComponent_tr_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BooksListComponent_tr_30_img_2_Template, 2, 3, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BooksListComponent_tr_30_ng_template_3_Template, 1, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BooksListComponent_tr_30_td_14_Template, 3, 2, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BooksListComponent_tr_30_td_15_Template, 5, 1, "td", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "isAdmin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "isStorekeeper");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var b_r4 = ctx.$implicit;

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", b_r4 == null ? null : b_r4.coverUrl)("ngIfElse", _r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/book/" + (b_r4 == null ? null : b_r4.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](b_r4 == null ? null : b_r4.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](b_r4 == null ? null : b_r4.authors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](b_r4 == null ? null : b_r4.genres);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](b_r4 == null ? null : b_r4.count);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.currentUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 9, ctx_r3.currentUser) || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 11, ctx_r3.currentUser));
        }
      }

      var BooksListComponent = /*#__PURE__*/function () {
        function BooksListComponent(booksService, authService, attachService, cartService) {
          _classCallCheck(this, BooksListComponent);

          this.booksService = booksService;
          this.authService = authService;
          this.attachService = attachService;
          this.cartService = cartService;
          this.searchText = '';
          this.pageSize = 5;
        }

        _createClass(BooksListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadBooks();
          }
        }, {
          key: "loadBooks",
          value: function loadBooks() {
            var _this10 = this;

            this.booksService.getBooks().subscribe(function (data) {
              _this10.data = data.map(function (book) {
                var bookItem = {
                  id: book.id,
                  title: book.title,
                  count: book.count,
                  authors: book.bookAuthors.map(function (x) {
                    return x.author && x.author.fio;
                  }).join(','),
                  genres: book.bookGenres.map(function (x) {
                    return x.genre && x.genre.title;
                  }).join(',')
                };
                var coverAttach = book.attachments.find(function (x) {
                  return x.isMain;
                });

                if (coverAttach && coverAttach.blobId) {
                  _this10.attachService.getImageUrl(coverAttach.blobId).then(function (url) {
                    bookItem.coverUrl = url;
                  });
                }

                return bookItem;
              });
              _this10.booksCount = _this10.data.length;

              _this10.goToPage(1);
            });
          }
        }, {
          key: "addToCart",
          value: function addToCart(book) {
            this.cartService.addToCart(book);
            alert('Добавлено в корзину!');
          }
        }, {
          key: "delete",
          value: function _delete(book) {
            var _this11 = this;

            if (confirm('Удалить книгу?')) {
              this.booksService.deleteBook(book.id).subscribe(function () {
                _this11.loadBooks();
              });
            }
          }
        }, {
          key: "goToPage",
          value: function goToPage(page) {
            this.displayBooks = this.applySearchFilter();
            this.booksCount = this.displayBooks.length;
            this.displayBooks = this.displayBooks.slice((page - 1) * this.pageSize, (page - 1) * this.pageSize + this.pageSize);
          }
        }, {
          key: "applySearchFilter",
          value: function applySearchFilter() {
            if (!this.searchText) {
              return this.data;
            }

            var searchStr = this.searchText.toLowerCase();
            return this.data.filter(function (item) {
              return item.title.toLowerCase().includes(searchStr) || item.authors.toLowerCase().includes(searchStr) || item.genres.toLowerCase().includes(searchStr);
            });
          }
        }, {
          key: "currentUser",
          get: function get() {
            return this.authService && this.authService.currentUserValue ? this.authService.currentUserValue : null;
          }
        }]);

        return BooksListComponent;
      }();

      BooksListComponent.ɵfac = function BooksListComponent_Factory(t) {
        return new (t || BooksListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_services_books_service__WEBPACK_IMPORTED_MODULE_1__["BooksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_2__["AttachmentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_infrastructure_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]));
      };

      BooksListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BooksListComponent,
        selectors: [["books-list"]],
        decls: 31,
        vars: 15,
        consts: [[1, "container"], [1, "row"], [1, "col-4"], ["placeholder", "\u041F\u043E\u0438\u0441\u043A...", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [3, "pageSize", "itemsCount", "goToPage"], ["class", "btn btn-primary float-right", 3, "routerLink", 4, "ngIf"], [1, "table", "table-striped", "mt-2"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "float-right", 3, "routerLink"], ["class", "pic-preview", 3, "src", 4, "ngIf", "ngIfElse"], ["noImageFound", ""], [3, "routerLink"], [1, "pic-preview", 3, "src"], ["src", "assets/doge.jpg", 1, "pic-preview"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "mr-1", "ml-1", "float-right", 3, "click"], [1, "btn", "btn-primary", "mr-1", "ml-1", "float-right", 3, "routerLink"]],
        template: function BooksListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0421\u043F\u0438\u0441\u043E\u043A \u043A\u043D\u0438\u0433");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BooksListComponent_Template_input_ngModelChange_6_listener($event) {
              return ctx.searchText = $event;
            })("keyup", function BooksListComponent_Template_input_keyup_6_listener() {
              return ctx.goToPage(1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "pagination", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("goToPage", function BooksListComponent_Template_pagination_goToPage_8_listener($event) {
              return ctx.goToPage($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BooksListComponent_a_10_Template, 2, 1, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "isAdmin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "isStorekeeper");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0410\u0432\u0442\u043E\u0440\u044B");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0416\u0430\u043D\u0440\u044B");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, BooksListComponent_td_25_Template, 1, 0, "td", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, BooksListComponent_td_26_Template, 1, 0, "td", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "isAdmin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "isStorekeeper");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, BooksListComponent_tr_30_Template, 18, 13, "tr", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", ctx.pageSize)("itemsCount", ctx.booksCount);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, ctx.currentUser) || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 9, ctx.currentUser));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 11, ctx.currentUser) || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 13, ctx.currentUser));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayBooks);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _items_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__["PaginationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]],
        pipes: [_infrastructure_pipes_role_pipe__WEBPACK_IMPORTED_MODULE_8__["IsAdmin"], _infrastructure_pipes_role_pipe__WEBPACK_IMPORTED_MODULE_8__["IsStorekeeper"], _infrastructure_pipes_image_pipe__WEBPACK_IMPORTED_MODULE_9__["SafeImagePipe"]],
        styles: [".pic-preview[_ngcontent-%COMP%] {\r\n    max-height: 100px;\r\n    max-width: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va3MvYm9va3MtbGlzdC9ib29rcy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYm9va3MvYm9va3MtbGlzdC9ib29rcy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGljLXByZXZpZXcge1xyXG4gICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BooksListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'books-list',
            templateUrl: './books-list.component.html',
            styleUrls: ['./books-list.component.css']
          }]
        }], function () {
          return [{
            type: _api_services_books_service__WEBPACK_IMPORTED_MODULE_1__["BooksService"]
          }, {
            type: src_app_api_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
          }, {
            type: src_app_api_services__WEBPACK_IMPORTED_MODULE_2__["AttachmentsService"]
          }, {
            type: _infrastructure_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/exceptions/forbid/forbid.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/exceptions/forbid/forbid.component.ts ***!
      \*******************************************************/

    /*! exports provided: ForbidComponent */

    /***/
    function srcAppExceptionsForbidForbidComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForbidComponent", function () {
        return ForbidComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ForbidComponent = /*#__PURE__*/function () {
        function ForbidComponent() {
          _classCallCheck(this, ForbidComponent);
        }

        _createClass(ForbidComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ForbidComponent;
      }();

      ForbidComponent.ɵfac = function ForbidComponent_Factory(t) {
        return new (t || ForbidComponent)();
      };

      ForbidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ForbidComponent,
        selectors: [["forbid"]],
        decls: 4,
        vars: 0,
        template: function ForbidComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "403");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Forbidden");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4Y2VwdGlvbnMvZm9yYmlkL2ZvcmJpZC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForbidComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'forbid',
            templateUrl: './forbid.component.html',
            styleUrls: ['./forbid.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/exceptions/not-found/not-found.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/exceptions/not-found/not-found.component.ts ***!
      \*************************************************************/

    /*! exports provided: NotFoundComponent */

    /***/
    function srcAppExceptionsNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
        return NotFoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var NotFoundComponent = /*#__PURE__*/function () {
        function NotFoundComponent() {
          _classCallCheck(this, NotFoundComponent);
        }

        _createClass(NotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotFoundComponent;
      }();

      NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
        return new (t || NotFoundComponent)();
      };

      NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotFoundComponent,
        selectors: [["not-found"]],
        decls: 4,
        vars: 0,
        template: function NotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "404");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Not found");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4Y2VwdGlvbnMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'not-found',
            templateUrl: './not-found.component.html',
            styleUrls: ['./not-found.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/genres/genre-edit/genre-edit.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/genres/genre-edit/genre-edit.component.ts ***!
      \***********************************************************/

    /*! exports provided: GenreEditComponent */

    /***/
    function srcAppGenresGenreEditGenreEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GenreEditComponent", function () {
        return GenreEditComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_api_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/api/services */
      "./src/app/api/services.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var GenreEditComponent = /*#__PURE__*/function () {
        function GenreEditComponent(genresService, router, activatedRoute) {
          _classCallCheck(this, GenreEditComponent);

          this.genresService = genresService;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.genre = {};
          this.id = activatedRoute.snapshot.params['id'];
          this.isNew = !this.id;
        }

        _createClass(GenreEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      if (this.isNew) {
                        _context7.next = 6;
                        break;
                      }

                      _context7.next = 3;
                      return this.genresService.getGenre(this.id).toPromise();

                    case 3:
                      _context7.t0 = _context7.sent;
                      _context7.next = 7;
                      break;

                    case 6:
                      _context7.t0 = {};

                    case 7:
                      this.genre = _context7.t0;

                    case 8:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "save",
          value: function save() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this12 = this;

              var action;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      if (this.isNew) {
                        action = this.genresService.createGenre(this.genre).toPromise();
                      } else {
                        action = this.genresService.updateGenre(this.genre).toPromise();
                      }

                      _context8.next = 3;
                      return action.then(function () {
                        _this12.router.navigateByUrl('/genres');
                      });

                    case 3:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }]);

        return GenreEditComponent;
      }();

      GenreEditComponent.ɵfac = function GenreEditComponent_Factory(t) {
        return new (t || GenreEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_1__["GenresService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      GenreEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GenreEditComponent,
        selectors: [["genre-edit"]],
        decls: 12,
        vars: 2,
        consts: [["novalidate", "", 3, "ngSubmit"], ["form", "ngForm"], [1, "form-group"], ["name", "title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "mr-1", "ml-1"], ["type", "submit", "routerLink", "/genres", 1, "btn", "btn-secondary", "mr-1", "ml-1"]],
        template: function GenreEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GenreEditComponent_Template_form_ngSubmit_2_listener() {
              return ctx.save();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GenreEditComponent_Template_input_ngModelChange_7_listener($event) {
              return ctx.genre.title = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041E\u0442\u043C\u0435\u043D\u0430");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isNew ? "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435" : "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.genre.title);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbnJlcy9nZW5yZS1lZGl0L2dlbnJlLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenreEditComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'genre-edit',
            templateUrl: './genre-edit.component.html',
            styleUrls: ['./genre-edit.component.css']
          }]
        }], function () {
          return [{
            type: src_app_api_services__WEBPACK_IMPORTED_MODULE_1__["GenresService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/genres/genres-list/genres-list.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/genres/genres-list/genres-list.component.ts ***!
      \*************************************************************/

    /*! exports provided: GenresListComponent */

    /***/
    function srcAppGenresGenresListGenresListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GenresListComponent", function () {
        return GenresListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_api_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/api/services */
      "./src/app/api/services.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function GenresListComponent_tr_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GenresListComponent_tr_12_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var g_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2["delete"](g_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var g_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](g_r1 == null ? null : g_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/genre/" + (g_r1 == null ? null : g_r1.id) + "/edit");
        }
      }

      var GenresListComponent = /*#__PURE__*/function () {
        function GenresListComponent(genresService) {
          _classCallCheck(this, GenresListComponent);

          this.genresService = genresService;
          this.genres = [];
        }

        _createClass(GenresListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadGenres();
          }
        }, {
          key: "loadGenres",
          value: function loadGenres() {
            var _this13 = this;

            this.genresService.getGenres().subscribe(function (genres) {
              _this13.genres = genres;
            });
          }
        }, {
          key: "delete",
          value: function _delete(genre) {
            var _this14 = this;

            if (confirm('Удалить жанр?')) {
              this.genresService.deleteGenre(genre.id).subscribe(function () {
                _this14.loadGenres();
              });
            }
          }
        }]);

        return GenresListComponent;
      }();

      GenresListComponent.ɵfac = function GenresListComponent_Factory(t) {
        return new (t || GenresListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_1__["GenresService"]));
      };

      GenresListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GenresListComponent,
        selectors: [["genres-list"]],
        decls: 13,
        vars: 2,
        consts: [[1, "btn", "btn-primary", 3, "routerLink"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "mr-1", "ml-1", 3, "routerLink"], [1, "btn", "btn-primary", "mr-1", "ml-1", 3, "click"]],
        template: function GenresListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0421\u043F\u0438\u0441\u043E\u043A \u0436\u0430\u043D\u0440\u043E\u0432");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GenresListComponent_tr_12_Template, 8, 2, "tr", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/genre/create");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.genres);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbnJlcy9nZW5yZXMtbGlzdC9nZW5yZXMtbGlzdC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenresListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'genres-list',
            templateUrl: './genres-list.component.html',
            styleUrls: ['./genres-list.component.css']
          }]
        }], function () {
          return [{
            type: src_app_api_services__WEBPACK_IMPORTED_MODULE_1__["GenresService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/infrastructure/app-routes.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/infrastructure/app-routes.module.ts ***!
      \*****************************************************/

    /*! exports provided: AppRoutesModule */

    /***/
    function srcAppInfrastructureAppRoutesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutesModule", function () {
        return AppRoutesModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _books_books_list_books_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../books/books-list/books-list.component */
      "./src/app/books/books-list/books-list.component.ts");
      /* harmony import */


      var _exceptions_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../exceptions/not-found/not-found.component */
      "./src/app/exceptions/not-found/not-found.component.ts");
      /* harmony import */


      var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../authentication/login/login.component */
      "./src/app/authentication/login/login.component.ts");
      /* harmony import */


      var _authentication_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../authentication/registration/registration.component */
      "./src/app/authentication/registration/registration.component.ts");
      /* harmony import */


      var _orders_user_orders_user_orders_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../orders/user-orders/user-orders.component */
      "./src/app/orders/user-orders/user-orders.component.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./auth.guard */
      "./src/app/infrastructure/auth.guard.ts");
      /* harmony import */


      var _orders_cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../orders/cart/cart.component */
      "./src/app/orders/cart/cart.component.ts");
      /* harmony import */


      var _books_book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../books/book-edit/book-edit.component */
      "./src/app/books/book-edit/book-edit.component.ts");
      /* harmony import */


      var _books_book_page_book_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../books/book-page/book-page.component */
      "./src/app/books/book-page/book-page.component.ts");
      /* harmony import */


      var _api_models__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../api/models */
      "./src/app/api/models.ts");
      /* harmony import */


      var _orders_orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../orders/orders-list/orders-list.component */
      "./src/app/orders/orders-list/orders-list.component.ts");
      /* harmony import */


      var _authors_authors_list_authors_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../authors/authors-list/authors-list.component */
      "./src/app/authors/authors-list/authors-list.component.ts");
      /* harmony import */


      var _authors_author_edit_author_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../authors/author-edit/author-edit.component */
      "./src/app/authors/author-edit/author-edit.component.ts");
      /* harmony import */


      var _genres_genres_list_genres_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../genres/genres-list/genres-list.component */
      "./src/app/genres/genres-list/genres-list.component.ts");
      /* harmony import */


      var _genres_genre_edit_genre_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../genres/genre-edit/genre-edit.component */
      "./src/app/genres/genre-edit/genre-edit.component.ts");
      /* harmony import */


      var _exceptions_forbid_forbid_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../exceptions/forbid/forbid.component */
      "./src/app/exceptions/forbid/forbid.component.ts");

      ;
      var appRoutes = [{
        path: '',
        component: _books_books_list_books_list_component__WEBPACK_IMPORTED_MODULE_1__["BooksListComponent"]
      }, {
        path: 'book/create',
        component: _books_book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_9__["BookEditComponent"],
        pathMatch: 'full',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        data: {
          roles: [_api_models__WEBPACK_IMPORTED_MODULE_11__["Role"].Administrator, _api_models__WEBPACK_IMPORTED_MODULE_11__["Role"].Storekeeper]
        }
      }, {
        path: 'book/:id/edit',
        component: _books_book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_9__["BookEditComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        data: {
          roles: [_api_models__WEBPACK_IMPORTED_MODULE_11__["Role"].Administrator, _api_models__WEBPACK_IMPORTED_MODULE_11__["Role"].Storekeeper]
        }
      }, {
        path: 'book/:id',
        component: _books_book_page_book_page_component__WEBPACK_IMPORTED_MODULE_10__["BookPageComponent"]
      }, {
        path: 'auth/login',
        component: _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
      }, {
        path: 'auth/registration',
        component: _authentication_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"]
      }, {
        path: 'my/orders',
        component: _orders_user_orders_user_orders_component__WEBPACK_IMPORTED_MODULE_5__["UserOrdersComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
      }, {
        path: 'my/cart',
        component: _orders_cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
      }, {
        path: 'orders',
        redirectTo: 'orders/active',
        pathMatch: 'full'
      }, {
        path: 'orders/:mode',
        component: _orders_orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_12__["OrdersListComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        data: {
          roles: [_api_models__WEBPACK_IMPORTED_MODULE_11__["Role"].Administrator, _api_models__WEBPACK_IMPORTED_MODULE_11__["Role"].Librarian]
        }
      }, {
        path: 'authors',
        component: _authors_authors_list_authors_list_component__WEBPACK_IMPORTED_MODULE_13__["AuthorsListComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        data: {
          roles: [_api_models__WEBPACK_IMPORTED_MODULE_11__["Role"].Administrator, _api_models__WEBPACK_IMPORTED_MODULE_11__["Role"].Storekeeper]
        }
      }, {
        path: 'author/create',
        component: _authors_author_edit_author_edit_component__WEBPACK_IMPORTED_MODULE_14__["AuthorEditComponent"],
        pathMatch: 'full',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        data: {
          roles: [_api_models__WEBPACK_IMPORTED_MODULE_11__["Role"].Administrator, _api_models__WEBPACK_IMPORTED_MODULE_11__["Role"].Storekeeper]
        }
      }, {
        path: 'author/:id/edit',
        component: _authors_author_edit_author_edit_component__WEBPACK_IMPORTED_MODULE_14__["AuthorEditComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        data: {
          roles: [_api_models__WEBPACK_IMPORTED_MODULE_11__["Role"].Administrator, _api_models__WEBPACK_IMPORTED_MODULE_11__["Role"].Storekeeper]
        }
      }, {
        path: 'genres',
        component: _genres_genres_list_genres_list_component__WEBPACK_IMPORTED_MODULE_15__["GenresListComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        data: {
          roles: [_api_models__WEBPACK_IMPORTED_MODULE_11__["Role"].Administrator, _api_models__WEBPACK_IMPORTED_MODULE_11__["Role"].Storekeeper]
        }
      }, {
        path: 'genre/create',
        component: _genres_genre_edit_genre_edit_component__WEBPACK_IMPORTED_MODULE_16__["GenreEditComponent"],
        pathMatch: 'full',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        data: {
          roles: [_api_models__WEBPACK_IMPORTED_MODULE_11__["Role"].Administrator, _api_models__WEBPACK_IMPORTED_MODULE_11__["Role"].Storekeeper]
        }
      }, {
        path: 'genre/:id/edit',
        component: _genres_genre_edit_genre_edit_component__WEBPACK_IMPORTED_MODULE_16__["GenreEditComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        data: {
          roles: [_api_models__WEBPACK_IMPORTED_MODULE_11__["Role"].Administrator, _api_models__WEBPACK_IMPORTED_MODULE_11__["Role"].Storekeeper]
        }
      }, {
        path: 'error/404',
        component: _exceptions_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]
      }, {
        path: 'error/403',
        component: _exceptions_forbid_forbid_component__WEBPACK_IMPORTED_MODULE_17__["ForbidComponent"]
      }, {
        path: '**',
        component: _exceptions_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]
      }];

      var AppRoutesModule = function AppRoutesModule() {
        _classCallCheck(this, AppRoutesModule);
      };

      AppRoutesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: AppRoutesModule
      });
      AppRoutesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        factory: function AppRoutesModule_Factory(t) {
          return new (t || AppRoutesModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutesModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](AppRoutesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/infrastructure/auth.guard.ts":
    /*!**********************************************!*\
      !*** ./src/app/infrastructure/auth.guard.ts ***!
      \**********************************************/

    /*! exports provided: AuthGuard */

    /***/
    function srcAppInfrastructureAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../api/services */
      "./src/app/api/services.ts");

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, authenticationService) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.authenticationService = authenticationService;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var roles, result;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      roles = route.data.roles ? route.data.roles : [];
                      _context9.next = 3;
                      return this.authenticationService.checkAccess(roles).toPromise();

                    case 3:
                      result = _context9.sent;

                      if (result) {
                        _context9.next = 7;
                        break;
                      }

                      this.router.navigateByUrl('/auth/login');
                      return _context9.abrupt("return", false);

                    case 7:
                      return _context9.abrupt("return", true);

                    case 8:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _api_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/infrastructure/interceptors/error.interceptor.ts":
    /*!******************************************************************!*\
      !*** ./src/app/infrastructure/interceptors/error.interceptor.ts ***!
      \******************************************************************/

    /*! exports provided: ErrorInterceptor */

    /***/
    function srcAppInfrastructureInterceptorsErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return ErrorInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _api_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../api/services */
      "./src/app/api/services.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor(authenticationService, router) {
          _classCallCheck(this, ErrorInterceptor);

          this.authenticationService = authenticationService;
          this.router = router;
        }

        _createClass(ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var _this15 = this;

            return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
              return _this15.handleError(err);
            }));
          }
        }, {
          key: "handleError",
          value: function handleError(response) {
            if ([401, 403].indexOf(response.status) !== -1) {
              if (response.status === 401) {
                this.authenticationService.logout();
                this.router.navigateByUrl('/auth/login');
              }

              this.router.navigateByUrl('/error/403');
              return;
            }

            if (response.status === 404) {
              this.router.navigateByUrl('/error/404');
              return;
            }

            var message = response.error || '';

            if (typeof message === 'string') {
              try {
                message = JSON.parse(message);
              } catch (error) {}
            }

            if (typeof message === 'object') {
              if (message.innerException !== undefined) {
                message = message.innerException.exceptionMessage;
              } else {
                if (message.exceptionMessage !== undefined) {
                  message = message.exceptionMessage;
                } else {
                  if (message.errorText !== undefined) {
                    message = message.errorText;
                  }
                }
              }
            }

            if (message) {
              console.log(message);
            }

            if (typeof message === 'string') {
              alert(message);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response);
          }
        }]);

        return ErrorInterceptor;
      }();

      ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
        return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ErrorInterceptor,
        factory: ErrorInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _api_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/infrastructure/interceptors/jwt.interceptor.ts":
    /*!****************************************************************!*\
      !*** ./src/app/infrastructure/interceptors/jwt.interceptor.ts ***!
      \****************************************************************/

    /*! exports provided: JwtInterceptor */

    /***/
    function srcAppInfrastructureInterceptorsJwtInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
        return JwtInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _api_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../api/services */
      "./src/app/api/services.ts");

      var JwtInterceptor = /*#__PURE__*/function () {
        function JwtInterceptor(authenticationService) {
          _classCallCheck(this, JwtInterceptor);

          this.authenticationService = authenticationService;
        }

        _createClass(JwtInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var currentUser = this.authenticationService.currentUserValue;
            var isLoggedIn = currentUser && currentUser.token;
            var isApiUrl = request.url.startsWith('api');

            if (isLoggedIn && isApiUrl) {
              request = request.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(currentUser.token)
                }
              });
            }

            return next.handle(request);
          }
        }]);

        return JwtInterceptor;
      }();

      JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) {
        return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]));
      };

      JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: JwtInterceptor,
        factory: JwtInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _api_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/infrastructure/pipes/date.pipe.ts":
    /*!***************************************************!*\
      !*** ./src/app/infrastructure/pipes/date.pipe.ts ***!
      \***************************************************/

    /*! exports provided: FormatDate */

    /***/
    function srcAppInfrastructurePipesDatePipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormatDate", function () {
        return FormatDate;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);

      var FormatDate = /*#__PURE__*/function () {
        function FormatDate() {
          _classCallCheck(this, FormatDate);
        }

        _createClass(FormatDate, [{
          key: "transform",
          value: function transform(date, format) {
            if (!date) {
              return '';
            }

            if (format) {
              return moment__WEBPACK_IMPORTED_MODULE_1__(date).format(format);
            }

            return moment__WEBPACK_IMPORTED_MODULE_1__(date).format('DD.MM.YYYY');
          }
        }]);

        return FormatDate;
      }();

      FormatDate.ɵfac = function FormatDate_Factory(t) {
        return new (t || FormatDate)();
      };

      FormatDate.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "formatDate",
        type: FormatDate,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatDate, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'formatDate'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/infrastructure/pipes/image.pipe.ts":
    /*!****************************************************!*\
      !*** ./src/app/infrastructure/pipes/image.pipe.ts ***!
      \****************************************************/

    /*! exports provided: SafeImagePipe */

    /***/
    function srcAppInfrastructurePipesImagePipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SafeImagePipe", function () {
        return SafeImagePipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      var SafeImagePipe = /*#__PURE__*/function () {
        function SafeImagePipe(_sanitizer) {
          _classCallCheck(this, SafeImagePipe);

          this._sanitizer = _sanitizer;
        }

        _createClass(SafeImagePipe, [{
          key: "transform",
          value: function transform(value) {
            return this._sanitizer.bypassSecurityTrustResourceUrl(value);
          }
        }]);

        return SafeImagePipe;
      }();

      SafeImagePipe.ɵfac = function SafeImagePipe_Factory(t) {
        return new (t || SafeImagePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
      };

      SafeImagePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "safeImage",
        type: SafeImagePipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeImagePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'safeImage'
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/infrastructure/pipes/order.pipe.ts":
    /*!****************************************************!*\
      !*** ./src/app/infrastructure/pipes/order.pipe.ts ***!
      \****************************************************/

    /*! exports provided: OrderStatusTitle */

    /***/
    function srcAppInfrastructurePipesOrderPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderStatusTitle", function () {
        return OrderStatusTitle;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _api_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../api/models */
      "./src/app/api/models.ts");

      var OrderStatusTitle = /*#__PURE__*/function () {
        function OrderStatusTitle() {
          _classCallCheck(this, OrderStatusTitle);
        }

        _createClass(OrderStatusTitle, [{
          key: "transform",
          value: function transform(item) {
            if (item === _api_models__WEBPACK_IMPORTED_MODULE_1__["OrderStatus"].Waiting) {
              return 'Ожидает подтверждения';
            }

            if (item === _api_models__WEBPACK_IMPORTED_MODULE_1__["OrderStatus"].Accepted) {
              return 'Одобрен';
            }

            if (item === _api_models__WEBPACK_IMPORTED_MODULE_1__["OrderStatus"].Returned) {
              return 'Возврат';
            }

            return '';
          }
        }]);

        return OrderStatusTitle;
      }();

      OrderStatusTitle.ɵfac = function OrderStatusTitle_Factory(t) {
        return new (t || OrderStatusTitle)();
      };

      OrderStatusTitle.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "orderStatusTitle",
        type: OrderStatusTitle,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderStatusTitle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'orderStatusTitle'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/infrastructure/pipes/role.pipe.ts":
    /*!***************************************************!*\
      !*** ./src/app/infrastructure/pipes/role.pipe.ts ***!
      \***************************************************/

    /*! exports provided: RoleTitle, IsAdmin, IsStorekeeper, IsLibrarian */

    /***/
    function srcAppInfrastructurePipesRolePipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoleTitle", function () {
        return RoleTitle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IsAdmin", function () {
        return IsAdmin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IsStorekeeper", function () {
        return IsStorekeeper;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IsLibrarian", function () {
        return IsLibrarian;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _api_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../api/models */
      "./src/app/api/models.ts");

      var RoleTitle = /*#__PURE__*/function () {
        function RoleTitle() {
          _classCallCheck(this, RoleTitle);
        }

        _createClass(RoleTitle, [{
          key: "transform",
          value: function transform(item) {
            if (item == _api_models__WEBPACK_IMPORTED_MODULE_1__["Role"].Administrator) {
              return 'Администратор';
            }

            if (item == _api_models__WEBPACK_IMPORTED_MODULE_1__["Role"].Librarian) {
              return 'Библиотекарь';
            }

            if (item == _api_models__WEBPACK_IMPORTED_MODULE_1__["Role"].Reader) {
              return 'Читатель';
            }

            if (item == _api_models__WEBPACK_IMPORTED_MODULE_1__["Role"].Storekeeper) {
              return 'Кладовщик';
            }

            return 'Ты кто?';
          }
        }]);

        return RoleTitle;
      }();

      RoleTitle.ɵfac = function RoleTitle_Factory(t) {
        return new (t || RoleTitle)();
      };

      RoleTitle.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "roleTitle",
        type: RoleTitle,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleTitle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'roleTitle'
          }]
        }], function () {
          return [];
        }, null);
      })();

      var IsAdmin = /*#__PURE__*/function () {
        function IsAdmin() {
          _classCallCheck(this, IsAdmin);
        }

        _createClass(IsAdmin, [{
          key: "transform",
          value: function transform(user) {
            return user && user.role == _api_models__WEBPACK_IMPORTED_MODULE_1__["Role"].Administrator;
          }
        }]);

        return IsAdmin;
      }();

      IsAdmin.ɵfac = function IsAdmin_Factory(t) {
        return new (t || IsAdmin)();
      };

      IsAdmin.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "isAdmin",
        type: IsAdmin,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsAdmin, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'isAdmin'
          }]
        }], function () {
          return [];
        }, null);
      })();

      var IsStorekeeper = /*#__PURE__*/function () {
        function IsStorekeeper() {
          _classCallCheck(this, IsStorekeeper);
        }

        _createClass(IsStorekeeper, [{
          key: "transform",
          value: function transform(user) {
            return user && user.role == _api_models__WEBPACK_IMPORTED_MODULE_1__["Role"].Storekeeper;
          }
        }]);

        return IsStorekeeper;
      }();

      IsStorekeeper.ɵfac = function IsStorekeeper_Factory(t) {
        return new (t || IsStorekeeper)();
      };

      IsStorekeeper.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "isStorekeeper",
        type: IsStorekeeper,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsStorekeeper, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'isStorekeeper'
          }]
        }], function () {
          return [];
        }, null);
      })();

      var IsLibrarian = /*#__PURE__*/function () {
        function IsLibrarian() {
          _classCallCheck(this, IsLibrarian);
        }

        _createClass(IsLibrarian, [{
          key: "transform",
          value: function transform(user) {
            return user && user.role == _api_models__WEBPACK_IMPORTED_MODULE_1__["Role"].Librarian;
          }
        }]);

        return IsLibrarian;
      }();

      IsLibrarian.ɵfac = function IsLibrarian_Factory(t) {
        return new (t || IsLibrarian)();
      };

      IsLibrarian.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "isLibrarian",
        type: IsLibrarian,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IsLibrarian, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'isLibrarian'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/infrastructure/pipes/search.pipe.ts":
    /*!*****************************************************!*\
      !*** ./src/app/infrastructure/pipes/search.pipe.ts ***!
      \*****************************************************/

    /*! exports provided: SearchFilter */

    /***/
    function srcAppInfrastructurePipesSearchPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchFilter", function () {
        return SearchFilter;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SearchFilter = /*#__PURE__*/function () {
        function SearchFilter() {
          _classCallCheck(this, SearchFilter);
        }

        _createClass(SearchFilter, [{
          key: "transform",
          value: function transform(items, searchText) {
            if (!items || items.length === 0) {
              return [];
            }

            if (!searchText) {
              return items;
            }

            searchText = searchText.toLowerCase();
            return items.filter(function (item) {
              return item.title.toLowerCase().includes(searchText) || item.authors.toLowerCase().includes(searchText) || item.genres.toLowerCase().includes(searchText);
            });
          }
        }]);

        return SearchFilter;
      }();

      SearchFilter.ɵfac = function SearchFilter_Factory(t) {
        return new (t || SearchFilter)();
      };

      SearchFilter.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "searchFilter",
        type: SearchFilter,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchFilter, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'searchFilter'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/infrastructure/services/cart.service.ts":
    /*!*********************************************************!*\
      !*** ./src/app/infrastructure/services/cart.service.ts ***!
      \*********************************************************/

    /*! exports provided: CartService */

    /***/
    function srcAppInfrastructureServicesCartServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartService", function () {
        return CartService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CartService = /*#__PURE__*/function () {
        function CartService() {
          _classCallCheck(this, CartService);

          this.books = [];
        }

        _createClass(CartService, [{
          key: "addToCart",
          value: function addToCart(book) {
            this.books.push(book);
          }
        }, {
          key: "removeFromCart",
          value: function removeFromCart(book) {
            var index = this.books.indexOf(book);

            if (index > -1) {
              this.books.splice(index, 1);
            }

            return this.books;
          }
        }, {
          key: "getItems",
          value: function getItems() {
            return this.books;
          }
        }, {
          key: "clearCart",
          value: function clearCart() {
            this.books = [];
            return this.books;
          }
        }, {
          key: "hasItems",
          value: function hasItems() {
            return this.books && this.books.length > 0;
          }
        }, {
          key: "alreadyInCart",
          value: function alreadyInCart(book) {
            return book ? !!this.books.find(function (x) {
              return x.id === book.id;
            }) : true;
          }
        }]);

        return CartService;
      }();

      CartService.ɵfac = function CartService_Factory(t) {
        return new (t || CartService)();
      };

      CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CartService,
        factory: CartService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/infrastructure/services/modal.service.ts":
    /*!**********************************************************!*\
      !*** ./src/app/infrastructure/services/modal.service.ts ***!
      \**********************************************************/

    /*! exports provided: ModalService */

    /***/
    function srcAppInfrastructureServicesModalServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalService", function () {
        return ModalService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var ModalService = /*#__PURE__*/function () {
        function ModalService() {
          _classCallCheck(this, ModalService);

          this.modals = [];
          this.modalState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.modalStateObservable$ = this.modalState.asObservable();
        }

        _createClass(ModalService, [{
          key: "add",
          value: function add(modal) {
            this.modals.push(modal);
          }
        }, {
          key: "remove",
          value: function remove(id) {
            this.modals = this.modals.filter(function (x) {
              return x.id !== id;
            });
          }
        }, {
          key: "open",
          value: function open(id) {
            var modal = this.modals.filter(function (x) {
              return x.id === id;
            })[0];
            this.modalState.next('open');
            modal.open();
          }
        }, {
          key: "close",
          value: function close(id) {
            var modal = this.modals.filter(function (x) {
              return x.id === id;
            })[0];
            this.modalState.next('close');
            modal.close();
          }
        }]);

        return ModalService;
      }();

      ModalService.ɵfac = function ModalService_Factory(t) {
        return new (t || ModalService)();
      };

      ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ModalService,
        factory: ModalService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/items/carousel/carousel.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/items/carousel/carousel.component.ts ***!
      \******************************************************/

    /*! exports provided: CarouselComponent */

    /***/
    function srcAppItemsCarouselCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
        return CarouselComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_api_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/api/services */
      "./src/app/api/services.ts");
      /* harmony import */


      var src_app_infrastructure_services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/infrastructure/services/modal.service */
      "./src/app/infrastructure/services/modal.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _infrastructure_pipes_image_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../infrastructure/pipes/image.pipe */
      "./src/app/infrastructure/pipes/image.pipe.ts");

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      function CarouselComponent_span_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_span_3_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.prev();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2190");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CarouselComponent_span_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_span_8_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2192");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var CarouselComponent = /*#__PURE__*/function () {
        function CarouselComponent(attachService, modalService) {
          _classCallCheck(this, CarouselComponent);

          this.attachService = attachService;
          this.modalService = modalService;
          this.currentIndex = 0;
          this.imageData = [];
        }

        _createClass(CarouselComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            this.modalStateSubscription = this.modalService.modalStateObservable$.subscribe(function (state) {
              if (state === 'open') {
                _this16.currentIndex = 0;

                _this16.loadImage();
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.modalStateSubscription.unsubscribe();
          }
        }, {
          key: "next",
          value: function next() {
            this.currentIndex++;
            this.loadImage();
          }
        }, {
          key: "prev",
          value: function prev() {
            this.currentIndex--;
            this.loadImage();
          }
        }, {
          key: "checkIndex",
          value: function checkIndex() {
            if (this.currentIndex < 0) {
              this.currentIndex = this.imageData.length - 1;
            }

            if (this.currentIndex === this.imageData.length) {
              this.currentIndex = 0;
            }
          }
        }, {
          key: "loadImage",
          value: function loadImage() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var currentImageData, blobId, url;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      this.checkIndex();
                      currentImageData = this.imageData[this.currentIndex];

                      if (!(currentImageData.isLoaded && currentImageData.url)) {
                        _context10.next = 6;
                        break;
                      }

                      this.currentImage = currentImageData.url;
                      _context10.next = 11;
                      break;

                    case 6:
                      blobId = currentImageData.blobId;
                      _context10.next = 9;
                      return this.attachService.getImageUrl(blobId);

                    case 9:
                      url = _context10.sent;

                      if (url) {
                        currentImageData.url = url;
                        currentImageData.isLoaded = true;
                        this.currentImage = currentImageData.url;
                      }

                    case 11:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "dataSource",
          set: function set(blobIds) {
            if (blobIds) {
              this.imageData = blobIds.map(function (x) {
                return {
                  blobId: x,
                  url: '',
                  isLoaded: false
                };
              });
              this.currentIndex = 0;
              this.loadImage();
            }
          }
        }]);

        return CarouselComponent;
      }();

      CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
        return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_1__["AttachmentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_infrastructure_services_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]));
      };

      CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CarouselComponent,
        selectors: [["carousel"]],
        hostBindings: function CarouselComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.arrowright", function CarouselComponent_keyup_arrowright_HostBindingHandler($event) {
              return ctx.next($event.target);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keyup.arrowleft", function CarouselComponent_keyup_arrowleft_HostBindingHandler($event) {
              return ctx.prev($event.target);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
          }
        },
        inputs: {
          dataSource: "dataSource"
        },
        decls: 9,
        vars: 5,
        consts: [[1, "container"], [1, "row"], ["class", "arrow left-arrow", 3, "click", 4, "ngIf"], [1, "col-12", "pr-2", "pl-2", 2, "text-align", "center"], [1, "img-area", 3, "src"], ["class", "arrow right-arrow", 3, "click", 4, "ngIf"], [1, "arrow", "left-arrow", 3, "click"], [1, "arrow", "right-arrow", 3, "click"]],
        template: function CarouselComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CarouselComponent_span_3_Template, 2, 0, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "safeImage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CarouselComponent_span_8_Template, 2, 0, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageData.length > 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, ctx.currentImage), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageData.length > 1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        pipes: [_infrastructure_pipes_image_pipe__WEBPACK_IMPORTED_MODULE_4__["SafeImagePipe"]],
        styles: [".left-arrow[_ngcontent-%COMP%] {\r\n    left: 0;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.right-arrow[_ngcontent-%COMP%] {\r\n    right: 0;\r\n    transform: translate(calc(-50% + 30px), -50%);\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%] {\r\n    top: 50%;\r\n    position: fixed;\r\n    z-index: 1000;\r\n    background: white;\r\n    border-radius: 6px;\r\n    width: 30px;\r\n    border: 3px solid #3399ff;\r\n    text-align: center;\r\n    cursor: pointer;   \r\n}\r\n\r\n.img-area[_ngcontent-%COMP%] {\r\n    max-width: inherit; \r\n    max-height: 80vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbXMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLE9BQU87SUFDUCxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0ksUUFBUTtJQUNSLGVBQWU7SUFDZixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2l0ZW1zL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdC1hcnJvdyB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5yaWdodC1hcnJvdyB7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGMoLTUwJSArIDMwcHgpLCAtNTAlKTtcclxufVxyXG5cclxuLmFycm93IHtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMzM5OWZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyOyAgIFxyXG59XHJcblxyXG4uaW1nLWFyZWEge1xyXG4gICAgbWF4LXdpZHRoOiBpbmhlcml0OyBcclxuICAgIG1heC1oZWlnaHQ6IDgwdmg7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'carousel',
            templateUrl: './carousel.component.html',
            styleUrls: ['./carousel.component.css']
          }]
        }], function () {
          return [{
            type: src_app_api_services__WEBPACK_IMPORTED_MODULE_1__["AttachmentsService"]
          }, {
            type: src_app_infrastructure_services_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]
          }];
        }, {
          dataSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          next: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keyup.arrowright', ['$event.target']]
          }],
          prev: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keyup.arrowleft', ['$event.target']]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/items/file-uploader/file-uploader.component.ts":
    /*!****************************************************************!*\
      !*** ./src/app/items/file-uploader/file-uploader.component.ts ***!
      \****************************************************************/

    /*! exports provided: FileUploaderComponent */

    /***/
    function srcAppItemsFileUploaderFileUploaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileUploaderComponent", function () {
        return FileUploaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _api_services_attachments_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../api/services/attachments.service */
      "./src/app/api/services/attachments.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var _c0 = ["fileUploader"];

      function FileUploaderComponent_input_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileUploaderComponent_input_1_Template_input_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.selectFiles($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FileUploaderComponent_input_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 7, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileUploaderComponent_input_2_Template_input_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.selectFiles($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FileUploaderComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileUploaderComponent_div_3_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.uploadFiles();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FileUploaderComponent_div_4_ul_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var file_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](file_r13.fileName);
        }
      }

      function FileUploaderComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FileUploaderComponent_div_4_ul_3_Template, 3, 1, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.uploadedBlobs);
        }
      }

      var FileUploaderComponent = /*#__PURE__*/function () {
        function FileUploaderComponent(attachmentsService) {
          _classCallCheck(this, FileUploaderComponent);

          this.attachmentsService = attachmentsService;
          this.uploadedBlobs = [];
          this.mode = 'single';
        }

        _createClass(FileUploaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "selectFiles",
          value: function selectFiles(event) {
            this.selectedFiles = event.target.files;
          }
        }, {
          key: "uploadFiles",
          value: function uploadFiles() {
            for (var i = 0; i < this.selectedFiles.length; i++) {
              this.upload(i, this.selectedFiles[i]);
            }
          }
        }, {
          key: "upload",
          value: function upload(idx, file) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var _this17 = this;

              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.attachmentsService.uploadBlob(file).toPromise().then(function (uploadedId) {
                        _this17.uploadedBlobs.push({
                          blobId: uploadedId,
                          fileName: file.name
                        });

                        _this17.fileUploader.nativeElement.value = '';
                      })["catch"](function () {
                        alert("\u0424\u0430\u0439\u043B \"".concat(file.name, "\" \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D"));
                      });

                    case 2:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }]);

        return FileUploaderComponent;
      }();

      FileUploaderComponent.ɵfac = function FileUploaderComponent_Factory(t) {
        return new (t || FileUploaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_services_attachments_service__WEBPACK_IMPORTED_MODULE_1__["AttachmentsService"]));
      };

      FileUploaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FileUploaderComponent,
        selectors: [["file-uploader"]],
        viewQuery: function FileUploaderComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileUploader = _t.first);
          }
        },
        inputs: {
          mode: "mode"
        },
        decls: 5,
        vars: 4,
        consts: [[1, "btn", "btn-default"], ["type", "file", "multiple", "", "accept", ".png, .jpg, .jpeg", 3, "change", 4, "ngIf"], ["type", "file", "accept", ".png, .jpg, .jpeg", 3, "change", 4, "ngIf"], ["class", "btn btn-success", 3, "click", 4, "ngIf"], ["class", "card", 4, "ngIf"], ["type", "file", "multiple", "", "accept", ".png, .jpg, .jpeg", 3, "change"], ["fileUploader", ""], ["type", "file", "accept", ".png, .jpg, .jpeg", 3, "change"], [1, "btn", "btn-success", 3, "click"], [1, "card"], [1, "card-header"], ["class", "list-group list-group-flush", 4, "ngFor", "ngForOf"], [1, "list-group", "list-group-flush"], [1, "list-group-item"]],
        template: function FileUploaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileUploaderComponent_input_1_Template, 2, 0, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FileUploaderComponent_input_2_Template, 2, 0, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FileUploaderComponent_div_3_Template, 2, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FileUploaderComponent_div_4_Template, 4, 1, "div", 4);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode == "multiple");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode == "single");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(!ctx.selectedFiles || ctx.selectedFiles.length == 0 || ctx.mode == "single" && ctx.uploadedBlobs.length >= 1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.uploadedBlobs && ctx.uploadedBlobs.length > 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW1zL2ZpbGUtdXBsb2FkZXIvZmlsZS11cGxvYWRlci5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileUploaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'file-uploader',
            templateUrl: './file-uploader.component.html',
            styleUrls: ['./file-uploader.component.css']
          }]
        }], function () {
          return [{
            type: _api_services_attachments_service__WEBPACK_IMPORTED_MODULE_1__["AttachmentsService"]
          }];
        }, {
          mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          fileUploader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileUploader']
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/items/modal/modal.component.ts":
    /*!************************************************!*\
      !*** ./src/app/items/modal/modal.component.ts ***!
      \************************************************/

    /*! exports provided: ModalComponent */

    /***/
    function srcAppItemsModalModalComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
        return ModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _infrastructure_services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../infrastructure/services/modal.service */
      "./src/app/infrastructure/services/modal.service.ts");

      var _c0 = ["*"];

      var ModalComponent = /*#__PURE__*/function () {
        function ModalComponent(modalService, elRef) {
          _classCallCheck(this, ModalComponent);

          this.modalService = modalService;
          this.elRef = elRef;
          this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.element = elRef.nativeElement;
        }

        _createClass(ModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var modal = this;

            if (!this.id) {
              return;
            }

            document.body.appendChild(this.element);
            this.element.addEventListener('click', function (e) {
              if (e.target.className === 'cal-modal') {
                modal.close();
              }
            });
            this.modalService.add(this);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.modalService.remove(this.id);
            this.element.remove();
            document.body.classList.remove('cal-open');
          }
        }, {
          key: "open",
          value: function open() {
            this.element.style.display = 'block';
            document.body.classList.add('cal-open');

            if (this.onOpen) {
              this.onOpen.emit();
            }
          }
        }, {
          key: "close",
          value: function close() {
            this.element.style.display = 'none';
            document.body.classList.remove('cal-open');

            if (this.onClose) {
              this.onClose.emit();
            }
          }
        }]);

        return ModalComponent;
      }();

      ModalComponent.ɵfac = function ModalComponent_Factory(t) {
        return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_infrastructure_services_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ModalComponent,
        selectors: [["modal"]],
        inputs: {
          id: "id"
        },
        outputs: {
          onOpen: "onOpen",
          onClose: "onClose"
        },
        ngContentSelectors: _c0,
        decls: 4,
        vars: 0,
        consts: [[1, "cal-modal"], [1, "cal-modal-body"], [1, "cal-modal-background"]],
        template: function ModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
          }
        },
        styles: ["[_nghost-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n  .cal-modal {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 1000;    \r\n    overflow: auto;\r\n}\r\n\r\n  .cal-modal>.cal-modal-body {\r\n    padding: 20px;\r\n    background: #fff;\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n  .cal-modal-background {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-color: #000;\r\n    opacity: 0.75;    \r\n    z-index: 900;\r\n}\r\n\r\n  body.cal-open {\r\n    overflow: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbXMvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2l0ZW1zL21vZGFsL21vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmNhbC1tb2RhbCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDAwOyAgICBcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmNhbC1tb2RhbD4uY2FsLW1vZGFsLWJvZHkge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59ICAgIFxyXG5cclxuOjpuZy1kZWVwIC5jYWwtbW9kYWwtYmFja2dyb3VuZCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgb3BhY2l0eTogMC43NTsgICAgXHJcbiAgICB6LWluZGV4OiA5MDA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBib2R5LmNhbC1vcGVuIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'modal',
            templateUrl: './modal.component.html',
            styleUrls: ['./modal.component.css']
          }]
        }], function () {
          return [{
            type: _infrastructure_services_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/items/pagination/pagination.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/items/pagination/pagination.component.ts ***!
      \**********************************************************/

    /*! exports provided: PaginationComponent */

    /***/
    function srcAppItemsPaginationPaginationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginationComponent", function () {
        return PaginationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function PaginationComponent_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_1_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.setPage(ctx_r3.currentPage - 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2190");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "active": a0
        };
      };

      function PaginationComponent_li_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_2_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var index_r6 = ctx.index;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.setPage(index_r6 + 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var index_r6 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r1.currentPage === index_r6 + 1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](index_r6 + 1);
        }
      }

      function PaginationComponent_li_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_3_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.setPage(ctx_r9.currentPage + 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2192");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var PaginationComponent = /*#__PURE__*/function () {
        function PaginationComponent() {
          _classCallCheck(this, PaginationComponent);

          this.pagesArray = [];
          this.currentPage = 1;
          this.pageSize = 10;
          this.goToPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(PaginationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "setPage",
          value: function setPage(pageNumber) {
            if (pageNumber === this.currentPage) {
              return;
            }

            this.currentPage = pageNumber;
            this.goToPage.emit(pageNumber);
          }
        }, {
          key: "itemsCount",
          set: function set(items) {
            if (items) {
              var totalPages = Math.ceil(items / this.pageSize);
              this.pagesArray = new Array(totalPages).fill(1);
            }

            if (items === 0) {
              this.pagesArray = [1];
            }
          }
        }]);

        return PaginationComponent;
      }();

      PaginationComponent.ɵfac = function PaginationComponent_Factory(t) {
        return new (t || PaginationComponent)();
      };

      PaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PaginationComponent,
        selectors: [["pagination"]],
        inputs: {
          pageSize: "pageSize",
          itemsCount: "itemsCount"
        },
        outputs: {
          goToPage: "goToPage"
        },
        decls: 4,
        vars: 3,
        consts: [[1, "pagination"], ["class", "page-item", 3, "click", 4, "ngIf"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "page-item", 3, "click"], [1, "page-link"], [1, "page-item", 3, "ngClass", "click"]],
        template: function PaginationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationComponent_li_1_Template, 3, 0, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationComponent_li_2_Template, 3, 4, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PaginationComponent_li_3_Template, 3, 0, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPage !== 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pagesArray);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPage !== ctx.pagesArray.length);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW1zL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'pagination',
            templateUrl: './pagination.component.html',
            styleUrls: ['./pagination.component.css']
          }]
        }], function () {
          return [];
        }, {
          pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          itemsCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          goToPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/items/tagbox/tagbox.component.ts":
    /*!**************************************************!*\
      !*** ./src/app/items/tagbox/tagbox.component.ts ***!
      \**************************************************/

    /*! exports provided: TagboxComponent */

    /***/
    function srcAppItemsTagboxTagboxComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagboxComponent", function () {
        return TagboxComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      function TagboxComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagboxComponent_div_1_Template_span_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var i_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.removeItem(i_r3[ctx_r4.keyField]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " X ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r3 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r3[ctx_r0.displayField]);
        }
      }

      function TagboxComponent_option_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r6 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r6[ctx_r2.keyField]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r6[ctx_r2.displayField], " ");
        }
      }

      var TagboxComponent = /*#__PURE__*/function () {
        function TagboxComponent() {
          _classCallCheck(this, TagboxComponent);

          this.selectedItems = [];
          this.items = [];
          this.keyField = 'id';
          this.displayField = 'title';
          this.preSelectedKeyField = 'id';
        }

        _createClass(TagboxComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getSelectedItems",
          value: function getSelectedItems() {
            return this.selectedItems;
          }
        }, {
          key: "addItem",
          value: function addItem(itemKey) {
            var _this18 = this;

            var selectedItem = this.items.filter(function (x) {
              return x[_this18.keyField] == itemKey;
            })[0];
            this.items = this.items.filter(function (x) {
              return x[_this18.keyField] != itemKey;
            });
            this.selectedItems.push(selectedItem);
            this.sort();
          }
        }, {
          key: "removeItem",
          value: function removeItem(itemKey) {
            var _this19 = this;

            var selectedItem = this.selectedItems.filter(function (x) {
              return x[_this19.keyField] == itemKey;
            })[0];
            this.selectedItems = this.selectedItems.filter(function (x) {
              return x[_this19.keyField] != itemKey;
            });
            this.items.push(selectedItem);
            this.sort();
          }
        }, {
          key: "onSelectItem",
          value: function onSelectItem(e, key) {
            if (!key || key == -1) return;
            this.addItem(key);
          }
        }, {
          key: "sort",
          value: function sort() {
            var _this20 = this;

            this.items.sort(function (a, b) {
              return a[_this20.displayField] > b[_this20.displayField] ? 1 : -1;
            });
          }
        }, {
          key: "dataSource",
          set: function set(data) {
            var _this21 = this;

            if (data) {
              this.items = data;

              if (this.preSelected && this.preSelected.length > 0) {
                this.selectedItems = this.items.filter(function (x) {
                  return _this21.preSelected.some(function (i) {
                    return i[_this21.preSelectedKeyField] == x[_this21.keyField];
                  });
                });
                this.items = this.items.filter(function (i) {
                  return !_this21.selectedItems.includes(i);
                });
              }

              this.sort();
            }
          }
        }]);

        return TagboxComponent;
      }();

      TagboxComponent.ɵfac = function TagboxComponent_Factory(t) {
        return new (t || TagboxComponent)();
      };

      TagboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TagboxComponent,
        selectors: [["tagbox"]],
        inputs: {
          dataSource: "dataSource",
          keyField: "keyField",
          displayField: "displayField",
          preSelected: "preSelected",
          preSelectedKeyField: "preSelectedKeyField"
        },
        decls: 7,
        vars: 3,
        consts: [["id", "selectedItems", 1, "mb-2", 2, "display", "flex"], [4, "ngFor", "ngForOf"], ["id", "itemsToSelect", 1, "form-control", 3, "change"], ["mySelect", ""], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "mr-2"], [1, "badge", "badge-secondary", 3, "click"]],
        template: function TagboxComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TagboxComponent_div_1_Template, 6, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TagboxComponent_Template_select_change_2_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

              return ctx.onSelectItem($event, _r1.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "---");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TagboxComponent_option_6_Template, 2, 2, "option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectedItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0 - 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW1zL3RhZ2JveC90YWdib3guY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagboxComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'tagbox',
            templateUrl: './tagbox.component.html',
            styleUrls: ['./tagbox.component.css']
          }]
        }], function () {
          return [];
        }, {
          dataSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          keyField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          displayField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          preSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          preSelectedKeyField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/menu/user-menu/user-menu.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/menu/user-menu/user-menu.component.ts ***!
      \*******************************************************/

    /*! exports provided: UserMenuComponent */

    /***/
    function srcAppMenuUserMenuUserMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserMenuComponent", function () {
        return UserMenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_api_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/api/services */
      "./src/app/api/services.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _infrastructure_pipes_role_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../infrastructure/pipes/role.pipe */
      "./src/app/infrastructure/pipes/role.pipe.ts");

      function UserMenuComponent_a_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0445\u043E\u0434");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserMenuComponent_a_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserMenuComponent_a_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041C\u043E\u0438 \u043A\u043D\u0438\u0433\u0438 \u043D\u0430 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserMenuComponent_a_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041C\u043E\u0438 \u043A\u043D\u0438\u0433\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserMenuComponent_span_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserMenuComponent_span_10_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u044B\u0445\u043E\u0434");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserMenuComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "---\u0417\u0430\u0434\u0430\u0447\u0438 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430\u0440\u044F---");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0412\u044B\u0434\u0430\u043D\u043D\u044B\u0435 \u043A\u043D\u0438\u0433\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0417\u0430\u043A\u0430\u0437\u044B \u043D\u0430 \u0432\u044B\u0434\u0430\u0447\u0443");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0417\u0430\u043A\u0430\u0437\u044B \u043D\u0430 \u0432\u043E\u0437\u0432\u0440\u0430\u0442");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var UserMenuComponent = /*#__PURE__*/function () {
        function UserMenuComponent(authService, router) {
          _classCallCheck(this, UserMenuComponent);

          this.authService = authService;
          this.router = router;
        }

        _createClass(UserMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logout",
          value: function logout() {
            this.authService.logout();
            this.router.navigateByUrl('/');
          }
        }, {
          key: "currentUser",
          get: function get() {
            return this.authService && this.authService.currentUserValue ? this.authService.currentUserValue : null;
          }
        }]);

        return UserMenuComponent;
      }();

      UserMenuComponent.ɵfac = function UserMenuComponent_Factory(t) {
        return new (t || UserMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      UserMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UserMenuComponent,
        selectors: [["user-menu"]],
        decls: 14,
        vars: 13,
        consts: [[1, "dropdown"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "dropdown-menu-right"], ["class", "dropdown-item", "routerLink", "/auth/login", 4, "ngIf"], ["class", "dropdown-item", "routerLink", "/auth/registration", 4, "ngIf"], ["class", "dropdown-item", "routerLink", "/my/cart", 4, "ngIf"], ["class", "dropdown-item", "routerLink", "/my/orders", 4, "ngIf"], ["class", "dropdown-item", "style", "cursor: pointer;", 3, "click", 4, "ngIf"], [4, "ngIf"], ["routerLink", "/auth/login", 1, "dropdown-item"], ["routerLink", "/auth/registration", 1, "dropdown-item"], ["routerLink", "/my/cart", 1, "dropdown-item"], ["routerLink", "/my/orders", 1, "dropdown-item"], [1, "dropdown-item", 2, "cursor", "pointer", 3, "click"], [1, "dropdown-item"], ["routerLink", "/orders/active", 1, "dropdown-item"], ["routerLink", "/orders/give", 1, "dropdown-item"], ["routerLink", "/orders/take", 1, "dropdown-item"]],
        template: function UserMenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "roleTitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserMenuComponent_a_6_Template, 2, 0, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserMenuComponent_a_7_Template, 2, 0, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserMenuComponent_a_8_Template, 2, 0, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserMenuComponent_a_9_Template, 2, 0, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserMenuComponent_span_10_Template, 2, 0, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UserMenuComponent_div_11_Template, 9, 0, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "isAdmin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "isLibrarian");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", !ctx.currentUser ? "\u0412\u0445\u043E\u0434/\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F" : ctx.currentUser.login + " (" + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, ctx.currentUser.role) + ")", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentUser);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 9, ctx.currentUser) || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 11, ctx.currentUser));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        pipes: [_infrastructure_pipes_role_pipe__WEBPACK_IMPORTED_MODULE_4__["RoleTitle"], _infrastructure_pipes_role_pipe__WEBPACK_IMPORTED_MODULE_4__["IsAdmin"], _infrastructure_pipes_role_pipe__WEBPACK_IMPORTED_MODULE_4__["IsLibrarian"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvdXNlci1tZW51L3VzZXItbWVudS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserMenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'user-menu',
            templateUrl: './user-menu.component.html',
            styleUrls: ['./user-menu.component.css']
          }]
        }], function () {
          return [{
            type: src_app_api_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/orders/cart/cart.component.ts":
    /*!***********************************************!*\
      !*** ./src/app/orders/cart/cart.component.ts ***!
      \***********************************************/

    /*! exports provided: CartComponent */

    /***/
    function srcAppOrdersCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
        return CartComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_infrastructure_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/infrastructure/services/cart.service */
      "./src/app/infrastructure/services/cart.service.ts");
      /* harmony import */


      var src_app_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/api/services */
      "./src/app/api/services.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function CartComponent_div_3_tr_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_3_tr_8_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var b_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r4.removeFromCart(b_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0423\u0431\u0440\u0430\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var b_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](b_r3 == null ? null : b_r3.title);
        }
      }

      function CartComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CartComponent_div_3_tr_8_Template, 6, 1, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_3_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.placeOrder();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.books);
        }
      }

      function CartComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u0443\u0441\u0442\u043E!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var CartComponent = /*#__PURE__*/function () {
        function CartComponent(cartService, ordersService, authService, router) {
          _classCallCheck(this, CartComponent);

          this.cartService = cartService;
          this.ordersService = ordersService;
          this.authService = authService;
          this.router = router;
        }

        _createClass(CartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.books = this.cartService.getItems();
          }
        }, {
          key: "removeFromCart",
          value: function removeFromCart(book) {
            this.books = this.cartService.removeFromCart(book);
          }
        }, {
          key: "placeOrder",
          value: function placeOrder() {
            var _this22 = this;

            var userId = this.authService.currentUserValue.id;
            var orders = [];
            this.books.map(function (book) {
              orders.push({
                bookId: book.id,
                userId: userId
              });
            });
            this.ordersService.placeOrders(orders).subscribe(function () {
              _this22.books = _this22.cartService.clearCart();

              _this22.router.navigateByUrl('/my/orders');
            });
          }
        }]);

        return CartComponent;
      }();

      CartComponent.ɵfac = function CartComponent_Factory(t) {
        return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_infrastructure_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_2__["OrdersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CartComponent,
        selectors: [["cart"]],
        decls: 5,
        vars: 2,
        consts: [[1, "container", "body-content"], [4, "ngIf"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "click"]],
        template: function CartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041A\u043D\u0438\u0433\u0438 \u043D\u0430 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CartComponent_div_3_Template, 11, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CartComponent_div_4_Template, 2, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.books && ctx.books.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.books || ctx.books.length === 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'cart',
            templateUrl: './cart.component.html',
            styleUrls: ['./cart.component.css']
          }]
        }], function () {
          return [{
            type: src_app_infrastructure_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]
          }, {
            type: src_app_api_services__WEBPACK_IMPORTED_MODULE_2__["OrdersService"]
          }, {
            type: src_app_api_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/orders/orders-list/orders-list.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/orders/orders-list/orders-list.component.ts ***!
      \*************************************************************/

    /*! exports provided: OrderAction, OrdersListComponent */

    /***/
    function srcAppOrdersOrdersListOrdersListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderAction", function () {
        return OrderAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersListComponent", function () {
        return OrdersListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_api_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/api/models */
      "./src/app/api/models.ts");
      /* harmony import */


      var src_app_api_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/api/services */
      "./src/app/api/services.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _infrastructure_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../infrastructure/pipes/date.pipe */
      "./src/app/infrastructure/pipes/date.pipe.ts");
      /* harmony import */


      var _infrastructure_pipes_order_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../infrastructure/pipes/order.pipe */
      "./src/app/infrastructure/pipes/order.pipe.ts");

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      function OrdersListComponent_tr_18_button_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrdersListComponent_tr_18_button_15_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var order_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.doAction(order_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.actionName);
        }
      }

      function OrdersListComponent_tr_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "formatDate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "formatDate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "orderStatusTitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, OrdersListComponent_tr_18_button_15_Template, 2, 1, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var order_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", order_r1 == null ? null : order_r1.user == null ? null : order_r1.user.lastName, " ", order_r1 == null ? null : order_r1.user == null ? null : order_r1.user.firstName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1 == null ? null : order_r1.book == null ? null : order_r1.book.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, order_r1 == null ? null : order_r1.dateFrom));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 9, order_r1 == null ? null : order_r1.dateTo));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 11, order_r1 == null ? null : order_r1.status));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", order_r1 && ctx_r0.actionName);
        }
      }

      var OrderAction;

      (function (OrderAction) {
        OrderAction[OrderAction["None"] = 1] = "None";
        OrderAction[OrderAction["CreateOrder"] = 2] = "CreateOrder";
        OrderAction[OrderAction["CloseOrder"] = 3] = "CloseOrder";
        OrderAction[OrderAction["ExtendOrder"] = 4] = "ExtendOrder";
      })(OrderAction || (OrderAction = {}));

      var OrdersListComponent = /*#__PURE__*/function () {
        function OrdersListComponent(ordersService, activatedRoute) {
          _classCallCheck(this, OrdersListComponent);

          this.ordersService = ordersService;
          this.activatedRoute = activatedRoute;
          this.orders = [];
          this.action = OrderAction.None;
          this.actionName = '';
        }

        _createClass(OrdersListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this23 = this;

            this.activatedRoute.params.subscribe(function (routeParams) {
              _this23.mode = routeParams['mode'];

              if (_this23.mode === 'give') {
                _this23.actionName = 'Выдать';
                _this23.action = OrderAction.CreateOrder;
              } else if (_this23.mode === 'take') {
                _this23.actionName = 'Принять';
                _this23.action = OrderAction.CloseOrder;
              } else if (_this23.mode === 'active') {
                _this23.actionName = 'Продлить';
                _this23.action = OrderAction.ExtendOrder;
              }

              _this23.getOrders();
            });
          }
        }, {
          key: "getOrders",
          value: function getOrders() {
            var _this24 = this;

            this.ordersService.getList().subscribe(function (orders) {
              switch (_this24.action) {
                case OrderAction.CloseOrder:
                  _this24.orders = orders.filter(function (x) {
                    return x.status && x.status === src_app_api_models__WEBPACK_IMPORTED_MODULE_1__["OrderStatus"].Returned;
                  });
                  break;

                case OrderAction.CreateOrder:
                  _this24.orders = orders.filter(function (x) {
                    return x.status && x.status === src_app_api_models__WEBPACK_IMPORTED_MODULE_1__["OrderStatus"].Waiting;
                  });
                  break;

                case OrderAction.ExtendOrder:
                  _this24.orders = orders.filter(function (x) {
                    return x.status && x.status === src_app_api_models__WEBPACK_IMPORTED_MODULE_1__["OrderStatus"].Accepted;
                  });
                  break;

                case OrderAction.None:
                default:
                  _this24.orders = orders;
                  break;
              }
            });
          }
        }, {
          key: "doAction",
          value: function doAction(order) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var _this25 = this;

              var action;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      if (this.action === OrderAction.CreateOrder) {
                        action = this.ordersService.addOrders([order.id]).toPromise();
                      } else if (this.action === OrderAction.CloseOrder) {
                        action = this.ordersService.closeOrders([order.id]).toPromise();
                      } else if (this.action === OrderAction.ExtendOrder) {
                        action = this.ordersService.extendOrdersDate([order.id]).toPromise();
                      }

                      if (this.action !== OrderAction.None) {
                        action.then(function () {
                          _this25.getOrders();
                        });
                      }

                    case 2:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }]);

        return OrdersListComponent;
      }();

      OrdersListComponent.ɵfac = function OrdersListComponent_Factory(t) {
        return new (t || OrdersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_2__["OrdersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
      };

      OrdersListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OrdersListComponent,
        selectors: [["orders-list"]],
        decls: 19,
        vars: 1,
        consts: [[1, "container", "body-content"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"]],
        template: function OrdersListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0417\u0430\u043A\u0430\u0437\u044B");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0414\u0430\u0442\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0414\u0430\u0442\u0430 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0421\u0442\u0430\u0442\u0443\u0441");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, OrdersListComponent_tr_18_Template, 16, 13, "tr", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orders);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        pipes: [_infrastructure_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_5__["FormatDate"], _infrastructure_pipes_order_pipe__WEBPACK_IMPORTED_MODULE_6__["OrderStatusTitle"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlcnMtbGlzdC9vcmRlcnMtbGlzdC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'orders-list',
            templateUrl: './orders-list.component.html',
            styleUrls: ['./orders-list.component.css']
          }]
        }], function () {
          return [{
            type: src_app_api_services__WEBPACK_IMPORTED_MODULE_2__["OrdersService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/orders/user-orders/user-orders.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/orders/user-orders/user-orders.component.ts ***!
      \*************************************************************/

    /*! exports provided: UserOrdersComponent */

    /***/
    function srcAppOrdersUserOrdersUserOrdersComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserOrdersComponent", function () {
        return UserOrdersComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_api_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/api/services */
      "./src/app/api/services.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _infrastructure_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../infrastructure/pipes/date.pipe */
      "./src/app/infrastructure/pipes/date.pipe.ts");
      /* harmony import */


      var _infrastructure_pipes_order_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../infrastructure/pipes/order.pipe */
      "./src/app/infrastructure/pipes/order.pipe.ts");

      function UserOrdersComponent_tr_16_button_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserOrdersComponent_tr_16_button_13_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var order_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.returnOrder(order_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserOrdersComponent_tr_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "formatDate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "formatDate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "orderStatusTitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UserOrdersComponent_tr_16_button_13_Template, 2, 0, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var order_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1 == null ? null : order_r1.book == null ? null : order_r1.book.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, order_r1 == null ? null : order_r1.dateFrom));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, order_r1 == null ? null : order_r1.dateTo));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 9, order_r1 == null ? null : order_r1.status));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (order_r1 == null ? null : order_r1.status) === 2);
        }
      }

      var UserOrdersComponent = /*#__PURE__*/function () {
        function UserOrdersComponent(ordersService, authenticationService) {
          _classCallCheck(this, UserOrdersComponent);

          this.ordersService = ordersService;
          this.authenticationService = authenticationService;
          this.orders = [];
        }

        _createClass(UserOrdersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getOrders();
          }
        }, {
          key: "getOrders",
          value: function getOrders() {
            var _this26 = this;

            var userId = this.authenticationService.currentUserValue.id;
            this.ordersService.getUserOrders(userId).subscribe(function (orders) {
              _this26.orders = orders;
            });
          }
        }, {
          key: "returnOrder",
          value: function returnOrder(order) {
            var _this27 = this;

            var userId = this.authenticationService.currentUserValue.id;
            this.ordersService.returnOrders(userId, [order.id]).subscribe(function () {
              _this27.getOrders();
            });
          }
        }]);

        return UserOrdersComponent;
      }();

      UserOrdersComponent.ɵfac = function UserOrdersComponent_Factory(t) {
        return new (t || UserOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_1__["OrdersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]));
      };

      UserOrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UserOrdersComponent,
        selectors: [["user-orders"]],
        decls: 17,
        vars: 1,
        consts: [[1, "container", "body-content"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"]],
        template: function UserOrdersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041C\u043E\u0438 \u0437\u0430\u043A\u0430\u0437\u044B");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0414\u0430\u0442\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0414\u0430\u0442\u0430 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0430");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0421\u0442\u0430\u0442\u0443\u0441");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UserOrdersComponent_tr_16_Template, 14, 11, "tr", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orders);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        pipes: [_infrastructure_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_3__["FormatDate"], _infrastructure_pipes_order_pipe__WEBPACK_IMPORTED_MODULE_4__["OrderStatusTitle"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy91c2VyLW9yZGVycy91c2VyLW9yZGVycy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserOrdersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'user-orders',
            templateUrl: './user-orders.component.html',
            styleUrls: ['./user-orders.component.css']
          }]
        }], function () {
          return [{
            type: src_app_api_services__WEBPACK_IMPORTED_MODULE_1__["OrdersService"]
          }, {
            type: src_app_api_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");

      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      var platform = Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])();
      platform.bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\administrator.SCSM\source\repos\CoreAngularLibrary\CoreAngularLibrary\ClientApp\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map