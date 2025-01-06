self["webpackHotUpdate_N_E"]("pages/pages/orders",{

/***/ "./pages/pages/orders.js":
/*!*******************************!*\
  !*** ./pages/pages/orders.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_91954_OneDrive_Documents_GitHub_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_91954_OneDrive_Documents_GitHub_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_91954_OneDrive_Documents_GitHub_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_91954_OneDrive_Documents_GitHub_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_91954_OneDrive_Documents_GitHub_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_91954_OneDrive_Documents_GitHub_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_91954_OneDrive_Documents_GitHub_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_common_ALink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/common/ALink */ "./components/common/ALink.jsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _store_wishlist__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/wishlist */ "./store/wishlist.js");
/* harmony import */ var _store_cart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/cart */ "./store/cart.js");
/* harmony import */ var _store_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/modal */ "./store/modal.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _server_apollo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../server/apollo */ "./server/apollo.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _components_features_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/features/pagination */ "./components/features/pagination.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_features_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/features/dropdown/Dropdown */ "./components/features/dropdown/Dropdown.jsx");
/* harmony import */ var _components_features_modals_ReturnRequestFormModal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/features/modals/ReturnRequestFormModal */ "./components/features/modals/ReturnRequestFormModal.jsx");
/* harmony import */ var _components_features_modals_CustomModal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/features/modals/CustomModal */ "./components/features/modals/CustomModal.jsx");
/* harmony import */ var _components_features_modals_ReturnPolicyModal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/features/modals/ReturnPolicyModal */ "./components/features/modals/ReturnPolicyModal.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\91954\\OneDrive\\Documents\\GitHub\\ArabDeal-Web\\pages\\pages\\orders.js",
    _s = $RefreshSig$();


var __jsx = (react__WEBPACK_IMPORTED_MODULE_5___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_91954_OneDrive_Documents_GitHub_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject4() {
  var data = (0,C_Users_91954_OneDrive_Documents_GitHub_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)(["\n  mutation GetUserIvoiceSignedUrl($input: GetUserIvoiceUrlInput!) {\n    getUserIvoiceSignedUrl(input: $input) {\n      url\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0,C_Users_91954_OneDrive_Documents_GitHub_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)(["\n  mutation ReturnUserOrderProduct(\n    $input: ReturnUserOrderProductInput!\n    $image: [Upload]\n  ) {\n    returnUserOrderProduct(input: $input, image: $image) {\n      _id\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0,C_Users_91954_OneDrive_Documents_GitHub_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)(["\n  mutation CancelUserOrderProduct($input: CancelUserOrderProductInput!) {\n    cancelUserOrderProduct(input: $input) {\n      _id\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_91954_OneDrive_Documents_GitHub_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)(["\n  query GetUserOrderProducts($input: GetUserOrderProductsInput!) {\n    getUserOrderProducts(input: $input) {\n      maxRecords\n      records {\n        _id\n        productId\n        vendorId\n        orderId\n        itemId\n        productName\n        shortDescription\n        skuId\n        image {\n          fileType\n          fileURL\n          mimeType\n          originalName\n        }\n        returnPeriod\n        mrp\n        sellingPrice\n        shippingCharge\n        paymentMode\n        paymentStatus\n        orderDate\n        shippingStatus\n        shippedDate\n        deliveryDate\n        returnStatus\n        returnDate\n        returnRequestDate\n        returnRejectedDate\n        returnUserReason\n        refundStatus\n        refundAmount\n        refundDate\n        cancelledDate\n        cancelUserReason\n        courierId\n        invoiceNumber\n        invoice {\n          fileType\n          fileURL\n          mimeType\n          originalName\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




















var GET_ORDERS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_22__.gql)(_templateObject());
var CANCEL_ORDER = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_22__.gql)(_templateObject2());
var RETURN_ORDER = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_22__.gql)(_templateObject3());
var DOWNLOAD_INVOICE = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_22__.gql)(_templateObject4());

function Orders(props) {
  _s();

  var _data$getUserOrderPro,
      _data$getUserOrderPro2,
      _this = this;

  var wishlist = props.wishlist,
      addToCart = props.addToCart,
      removeFromWishlist = props.removeFromWishlist,
      showQuickView = props.showQuickView;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0),
      flag = _useState[0],
      setFlag = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      orders = _useState2[0],
      setOrders = _useState2[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_17__.useRouter)();
  var page = router.query.page ? parseInt(router.query.page) : 0;

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(5),
      perPage = _useState3[0],
      setPerPage = _useState3[1];

  var onMoveFromToWishlit = function onMoveFromToWishlit(e, item) {
    setFlag(2);
    e.preventDefault();
    addToCart(item);
    removeFromWishlist(item);
  };

  var removeProduct = function removeProduct(e, item) {
    setFlag(1);
    e.preventDefault();
    removeFromWishlist(item);
  };

  var onQuickViewClick = function onQuickViewClick(e, product) {
    e.preventDefault();
    showQuickView(product.slug);
  };

  var getStatusColor = function getStatusColor(status) {
    switch (status) {
      case "PENDING":
        return "#FFA500";

      case "IN_PROGRESS":
        return "#FFA500";

      case "COMPLETED":
        return "#44961D";

      default:
        return "#000000";
    }
  };

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_22__.useMutation)(CANCEL_ORDER),
      _useMutation2 = (0,C_Users_91954_OneDrive_Documents_GitHub_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation, 1),
      cancelUserOrderProduct = _useMutation2[0];

  var _useMutation3 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_22__.useMutation)(DOWNLOAD_INVOICE),
      _useMutation4 = (0,C_Users_91954_OneDrive_Documents_GitHub_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation3, 1),
      downloadInvoice = _useMutation4[0];

  var _useMutation5 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_22__.useMutation)(RETURN_ORDER),
      _useMutation6 = (0,C_Users_91954_OneDrive_Documents_GitHub_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation5, 1),
      returnOrder = _useMutation6[0];

  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_22__.useQuery)(GET_ORDERS, {
    variables: {
      input: {
        page: page || 0,
        size: perPage
      }
    }
  }),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error,
      refetch = _useQuery.refetch;

  var totalPage = data ? parseInt((data === null || data === void 0 ? void 0 : (_data$getUserOrderPro = data.getUserOrderProducts) === null || _data$getUserOrderPro === void 0 ? void 0 : _data$getUserOrderPro.maxRecords) / perPage) + ((data === null || data === void 0 ? void 0 : (_data$getUserOrderPro2 = data.getUserOrderProducts) === null || _data$getUserOrderPro2 === void 0 ? void 0 : _data$getUserOrderPro2.maxRecords) % perPage ? 1 : 0) : 0;
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    if (error) {
      console.error("Error fetching orders:", error);
    } else if (data) {
      setOrders(data.getUserOrderProducts.records || []);
    }
  }, [data, error]);

  var orderCancel = /*#__PURE__*/function () {
    var _ref = (0,C_Users_91954_OneDrive_Documents_GitHub_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_91954_OneDrive_Documents_GitHub_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(id) {
      var response;
      return C_Users_91954_OneDrive_Documents_GitHub_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (window.confirm("Are you sure you want to cancel this order?")) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              _context.next = 5;
              return cancelUserOrderProduct({
                variables: {
                  input: {
                    _id: id
                  }
                }
              });

            case 5:
              response = _context.sent;
              refetch();
              react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.success(__jsx("div", {
                style: {
                  padding: "10px"
                },
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 9
                }
              }, "Your order has been canceled."));
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function orderCancel(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleDownload = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_91954_OneDrive_Documents_GitHub_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_91954_OneDrive_Documents_GitHub_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(_id) {
      var invoice, url;
      return C_Users_91954_OneDrive_Documents_GitHub_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return downloadInvoice({
                variables: {
                  input: {
                    _id: _id
                  }
                }
              });

            case 3:
              invoice = _context2.sent;
              url = invoice.data.getUserIvoiceSignedUrl.url; // console.log("invoice", url);
              // const link = document.createElement('a');
              // link.href = url;
              // link.setAttribute('download', 'invoice.pdf');
              // document.body.appendChild(link);
              // link.click();
              // document.body.removeChild(link);

              window.open(url, "_blank");
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.error(_context2.t0.message);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
    }));

    return function handleDownload(_x2) {
      return _ref2.apply(this, arguments);
    };
  }(); //=========================RETURN ORDER============================\\
  //Drop Down


  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(""),
      isOpen = _useState4[0],
      setIsOpen = _useState4[1];

  var toggleDropdown = function toggleDropdown(e, itemId) {
    setIsOpen(function (prev) {
      return itemId === prev ? "" : itemId;
    });
  }; //Return order


  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      showReturnFormModal = _useState5[0],
      setShowReturnFormModal = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(""),
      orderProductIdForReturn = _useState6[0],
      setOrderProductIdForReturn = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(""),
      orderIdForReturn = _useState7[0],
      setOrderIdForReturn = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      isShippingAddress = _useState8[0],
      setIsShippingAddress = _useState8[1]; //return policy


  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      isAcceptPolicy = _useState9[0],
      setIsAcceptPolicy = _useState9[1];

  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      showPolicyModal = _useState10[0],
      setShowPolicyModal = _useState10[1];

  function closeModal() {
    setShowReturnFormModal(false);
  }

  var handleOrderReturn = /*#__PURE__*/function () {
    var _ref3 = (0,C_Users_91954_OneDrive_Documents_GitHub_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_91954_OneDrive_Documents_GitHub_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(formData) {
      var _data$returnUserOrder, bankDetails, returnAddress, returnUserReason, image, variables, _yield$returnOrder, _data, errors;

      return C_Users_91954_OneDrive_Documents_GitHub_ArabDeal_Web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              bankDetails = formData.bankDetails, returnAddress = formData.returnAddress, returnUserReason = formData.returnUserReason, image = formData.image;
              console.log(bankDetails, "BANK DETAILS");
              console.log(returnAddress, "RETURN ADDRESS");
              console.log(returnUserReason, "RETURN USER REASON");
              console.log(image, " = IMAGES");

              if (bankDetails) {
                _context3.next = 8;
                break;
              }

              throw new Error("Bank Details are required!");

            case 8:
              if (returnAddress) {
                _context3.next = 10;
                break;
              }

              throw new Error("Return address is required!");

            case 10:
              if (returnUserReason) {
                _context3.next = 12;
                break;
              }

              throw new Error("Reason is required!");

            case 12:
              variables = {
                input: {
                  _id: orderProductIdForReturn,
                  bankDetails: bankDetails,
                  returnAddress: returnAddress,
                  returnUserReason: returnUserReason
                },
                image: image
              };
              console.log(variables, "VARIABLES");
              _context3.next = 16;
              return returnOrder({
                variables: variables
              });

            case 16:
              _yield$returnOrder = _context3.sent;
              _data = _yield$returnOrder.data;
              errors = _yield$returnOrder.errors;
              if (errors) console.log(errors, "ERRORS");
              console.log(_data, 'RESPONSE RETURN SUBMIT');

              if (_data !== null && _data !== void 0 && (_data$returnUserOrder = _data.returnUserOrderProduct) !== null && _data$returnUserOrder !== void 0 && _data$returnUserOrder._id) {
                react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.success("Your order return request has been submitted successfully.");
              }

              _context3.next = 27;
              break;

            case 24:
              _context3.prev = 24;
              _context3.t0 = _context3["catch"](0);
              react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.error(_context3.t0.message);

            case 27:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 24]]);
    }));

    return function handleOrderReturn(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  return __jsx((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_15__.Helmet, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 9
    }
  }, "Orders | Arab Deals")), __jsx("main", {
    className: "main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 9
    }
  }, __jsx("nav", {
    "aria-label": "breadcrumb",
    className: "breadcrumb-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 13
    }
  }, __jsx("ol", {
    className: "breadcrumb",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 15
    }
  }, __jsx("li", {
    className: "breadcrumb-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 17
    }
  }, __jsx(_components_common_ALink__WEBPACK_IMPORTED_MODULE_8__.default, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 19
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_23__.IoMdHome, {
    style: {
      fontSize: "16px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 21
    }
  }))), __jsx("li", {
    className: "breadcrumb-item active",
    "aria-current": "page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 17
    }
  }, __jsx(_components_common_ALink__WEBPACK_IMPORTED_MODULE_8__.default, {
    href: "/pages/account",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 19
    }
  }, "My account")), __jsx("li", {
    className: "breadcrumb-item active",
    "aria-current": "page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 17
    }
  }, __jsx(_components_common_ALink__WEBPACK_IMPORTED_MODULE_8__.default, {
    className: "activeitem",
    href: "/pages/orders",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 19
    }
  }, "Orders")))))), __jsx("div", {
    className: " d-flex flex-column align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: "checkout-progress-bar d-flex justify-content-center flex-wrap",
    style: {
      backgroundColor: "#F9F9F9",
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 13
    }
  }, __jsx(_components_common_ALink__WEBPACK_IMPORTED_MODULE_8__.default, {
    href: "/pages/account",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 15
    }
  }, "My Account")), __jsx("li", {
    className: "active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 13
    }
  }, __jsx(_components_common_ALink__WEBPACK_IMPORTED_MODULE_8__.default, {
    href: "/pages/orders",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 15
    }
  }, "Orders")))), __jsx("div", {
    className: "container",
    style: {
      marginTop: "2rem",
      borderBottom: "1px solid",
      borderColor: "#E2E2E2"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 9
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 11
    }
  }, "Orders")), __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "success-alert",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 11
    }
  }, flag === 1 ? __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 27
    }
  }, "Product successfully removed.") : "", flag === 2 ? __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 27
    }
  }, "Product added to cart successfully.") : ""), orders.length === 0 ? __jsx("div", {
    className: "wishlist-table-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "table table-wishlist mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "wishlist-empty-page text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 17
    }
  }, __jsx("i", {
    "class": "fa fa-shopping-bag",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 19
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 19
    }
  }, "No products Ordered"), __jsx(_components_common_ALink__WEBPACK_IMPORTED_MODULE_8__.default, {
    href: "/shop",
    className: "btn btn-dark btn-add-cart product-type-simple btn-shop font1 w-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 19
    }
  }, "go shop", " ")))) : __jsx("div", {
    className: "wishlist-table-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 13
    }
  }, __jsx("table", {
    className: "table table-wishlist mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 15
    }
  }, __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 17
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 19
    }
  }, __jsx("th", {
    className: "thumbnail-col",
    style: {
      paddingLeft: "0px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 21
    }
  }, "Product"), __jsx("th", {
    className: "status-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 21
    }
  }), __jsx("th", {
    className: "status-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 21
    }
  }, "Order Id"), __jsx("th", {
    className: "status-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 21
    }
  }, "Date"), __jsx("th", {
    className: "status-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 21
    }
  }, "Status"), __jsx("th", {
    className: "price-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 21
    }
  }, "Total Price"), __jsx("th", {
    className: "action-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 21
    }
  }))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 17
    }
  }, orders.map(function (item, index) {
    return __jsx("tr", {
      key: "wishlist-item" + index,
      className: "product-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 401,
        columnNumber: 21
      }
    }, __jsx("td", {
      className: "media-with-lazy",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402,
        columnNumber: 23
      }
    }, __jsx("figure", {
      className: "product-image-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 403,
        columnNumber: 25
      }
    }, __jsx(_components_common_ALink__WEBPACK_IMPORTED_MODULE_8__.default, {
      href: "/product/default/".concat(item.productId),
      className: "product-image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 404,
        columnNumber: 27
      }
    }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_7__.LazyLoadImage, {
      alt: "product",
      src: item.image.fileURL,
      threshold: 500,
      width: "80",
      height: "80",
      className: "order-image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 408,
        columnNumber: 29
      }
    })))), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419,
        columnNumber: 23
      }
    }, __jsx("h5", {
      className: "product-title",
      style: {
        fontWeight: "700"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 425,
        columnNumber: 25
      }
    }, __jsx(_components_common_ALink__WEBPACK_IMPORTED_MODULE_8__.default, {
      href: "/product/default/".concat(item.productId),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 429,
        columnNumber: 27
      }
    }, item.productName.split(" ").slice(0, 4).join(" "), "..."))), __jsx("td", {
      style: {
        color: "black"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 435,
        columnNumber: 23
      }
    }, item.orderId), __jsx("td", {
      style: {
        color: "black"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 436,
        columnNumber: 23
      }
    }, dayjs__WEBPACK_IMPORTED_MODULE_14___default()(item.orderDate).format("YYYY/MM/DD")), __jsx("td", {
      style: {
        color: getStatusColor(item === null || item === void 0 ? void 0 : item.shippingStatus)
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 439,
        columnNumber: 23
      }
    }, (item === null || item === void 0 ? void 0 : item.returnStatus) !== "NA" ? "".concat(item === null || item === void 0 ? void 0 : item.returnStatus, "-(Return)") : item === null || item === void 0 ? void 0 : item.shippingStatus), __jsx("td", {
      style: {
        color: "black"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 445,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "price-box",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 446,
        columnNumber: 25
      }
    }, __jsx((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null, __jsx("span", {
      className: "product-price",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 449,
        columnNumber: 29
      }
    }, "OMR", " ", parseFloat(Number(item.sellingPrice) + Number(item === null || item === void 0 ? void 0 : item.shippingCharge)).toFixed(2))))), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 460,
        columnNumber: 23
      }
    }, __jsx(_components_features_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_18__.default, {
      toggleDropdown: toggleDropdown,
      itemId: item === null || item === void 0 ? void 0 : item.itemId,
      isOpen: isOpen,
      setIsOpen: setIsOpen,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 461,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "order_update_menu_container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 467,
        columnNumber: 27
      }
    }, (item === null || item === void 0 ? void 0 : item.shippingStatus) !== "DELIVERED" && (item === null || item === void 0 ? void 0 : item.shippingStatus) !== "CANCELED" ? __jsx("div", {
      className: "order_update_menu_item",
      title: "Quick View",
      onClick: function onClick(e) {
        e.preventDefault();
        orderCancel(item._id);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 470,
        columnNumber: 31
      }
    }, "Cancel") : __jsx((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null, (item === null || item === void 0 ? void 0 : item.shippingStatus) === "DELIVERED" && __jsx("div", {
      className: "order_update_menu_item",
      onClick: function onClick(e) {
        e.preventDefault();
        setShowPolicyModal(true);
        setOrderProductIdForReturn(item === null || item === void 0 ? void 0 : item._id);
        setOrderIdForReturn(item === null || item === void 0 ? void 0 : item.orderId);
        setIsOpen(false);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 512,
        columnNumber: 35
      }
    }, "Return")), __jsx("button", {
      className: "order_update_menu_item ",
      title: "Quick View",
      style: item !== null && item !== void 0 && item.invoice ? {
        border: "none"
      } : {
        color: "grey",
        border: "none",
        cursor: "not-allowed"
      },
      onClick: function onClick(e) {
        e.preventDefault();

        if (item !== null && item !== void 0 && item.invoice) {
          handleDownload(item._id);
          setIsOpen(false);
        }
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 561,
        columnNumber: 29
      }
    }, __jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      style: {
        marginRight: "5px"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 581,
        columnNumber: 31
      }
    }, __jsx("path", {
      fill: item !== null && item !== void 0 && item.invoice ? "black" : "grey",
      d: "M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 590,
        columnNumber: 33
      }
    })), "Invoice")))));
  }))), loading || orders && orders.length && __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 612,
      columnNumber: 19
    }
  }, __jsx("nav", {
    className: "toolbox toolbox-pagination border-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613,
      columnNumber: 21
    }
  }, __jsx(_components_features_pagination__WEBPACK_IMPORTED_MODULE_16__.default, {
    totalPage: totalPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 614,
      columnNumber: 23
    }
  })))))), showReturnFormModal && __jsx(_components_features_modals_ReturnRequestFormModal__WEBPACK_IMPORTED_MODULE_19__.default, {
    isOpen: showReturnFormModal,
    setIsOpen: setShowReturnFormModal,
    handleSubmit: handleOrderReturn,
    orderId: orderIdForReturn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 625,
      columnNumber: 9
    }
  }), showPolicyModal && __jsx(_components_features_modals_ReturnPolicyModal__WEBPACK_IMPORTED_MODULE_21__.default, {
    isOpen: showPolicyModal,
    setIsOpen: setShowPolicyModal,
    handleSubmit: function handleSubmit() {
      setIsAcceptPolicy(true);
      setShowReturnFormModal(true);
      setShowPolicyModal(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 634,
      columnNumber: 9
    }
  }));
}

_s(Orders, "Ze2+mAtn9/NaxIId3NngMUEiUqo=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_17__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_22__.useMutation, _apollo_client__WEBPACK_IMPORTED_MODULE_22__.useMutation, _apollo_client__WEBPACK_IMPORTED_MODULE_22__.useMutation, _apollo_client__WEBPACK_IMPORTED_MODULE_22__.useQuery];
});

_c = Orders;

var mapStateToProps = function mapStateToProps(state) {
  return {
    wishlist: state.wishlist.list ? state.wishlist.list : []
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_server_apollo__WEBPACK_IMPORTED_MODULE_13__.default)({
  ssr: false
})((0,react_redux__WEBPACK_IMPORTED_MODULE_6__.connect)(mapStateToProps, _objectSpread(_objectSpread(_objectSpread({}, _store_wishlist__WEBPACK_IMPORTED_MODULE_10__.actions), _store_cart__WEBPACK_IMPORTED_MODULE_11__.actions), _store_modal__WEBPACK_IMPORTED_MODULE_12__.actions))(Orders)));

var _c;

$RefreshReg$(_c, "Orders");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFnZXMvb3JkZXJzLmpzIl0sIm5hbWVzIjpbIkdFVF9PUkRFUlMiLCJncWwiLCJDQU5DRUxfT1JERVIiLCJSRVRVUk5fT1JERVIiLCJET1dOTE9BRF9JTlZPSUNFIiwiT3JkZXJzIiwicHJvcHMiLCJ3aXNobGlzdCIsImFkZFRvQ2FydCIsInJlbW92ZUZyb21XaXNobGlzdCIsInNob3dRdWlja1ZpZXciLCJ1c2VTdGF0ZSIsImZsYWciLCJzZXRGbGFnIiwib3JkZXJzIiwic2V0T3JkZXJzIiwicm91dGVyIiwidXNlUm91dGVyIiwicGFnZSIsInF1ZXJ5IiwicGFyc2VJbnQiLCJwZXJQYWdlIiwic2V0UGVyUGFnZSIsIm9uTW92ZUZyb21Ub1dpc2hsaXQiLCJlIiwiaXRlbSIsInByZXZlbnREZWZhdWx0IiwicmVtb3ZlUHJvZHVjdCIsIm9uUXVpY2tWaWV3Q2xpY2siLCJwcm9kdWN0Iiwic2x1ZyIsImdldFN0YXR1c0NvbG9yIiwic3RhdHVzIiwidXNlTXV0YXRpb24iLCJjYW5jZWxVc2VyT3JkZXJQcm9kdWN0IiwiZG93bmxvYWRJbnZvaWNlIiwicmV0dXJuT3JkZXIiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImlucHV0Iiwic2l6ZSIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJyZWZldGNoIiwidG90YWxQYWdlIiwiZ2V0VXNlck9yZGVyUHJvZHVjdHMiLCJtYXhSZWNvcmRzIiwidXNlRWZmZWN0IiwiY29uc29sZSIsInJlY29yZHMiLCJvcmRlckNhbmNlbCIsImlkIiwid2luZG93IiwiY29uZmlybSIsIl9pZCIsInJlc3BvbnNlIiwidG9hc3QiLCJwYWRkaW5nIiwibG9nIiwiaGFuZGxlRG93bmxvYWQiLCJpbnZvaWNlIiwidXJsIiwiZ2V0VXNlckl2b2ljZVNpZ25lZFVybCIsIm9wZW4iLCJtZXNzYWdlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlRHJvcGRvd24iLCJpdGVtSWQiLCJwcmV2Iiwic2hvd1JldHVybkZvcm1Nb2RhbCIsInNldFNob3dSZXR1cm5Gb3JtTW9kYWwiLCJvcmRlclByb2R1Y3RJZEZvclJldHVybiIsInNldE9yZGVyUHJvZHVjdElkRm9yUmV0dXJuIiwib3JkZXJJZEZvclJldHVybiIsInNldE9yZGVySWRGb3JSZXR1cm4iLCJpc1NoaXBwaW5nQWRkcmVzcyIsInNldElzU2hpcHBpbmdBZGRyZXNzIiwiaXNBY2NlcHRQb2xpY3kiLCJzZXRJc0FjY2VwdFBvbGljeSIsInNob3dQb2xpY3lNb2RhbCIsInNldFNob3dQb2xpY3lNb2RhbCIsImNsb3NlTW9kYWwiLCJoYW5kbGVPcmRlclJldHVybiIsImZvcm1EYXRhIiwiYmFua0RldGFpbHMiLCJyZXR1cm5BZGRyZXNzIiwicmV0dXJuVXNlclJlYXNvbiIsImltYWdlIiwiRXJyb3IiLCJlcnJvcnMiLCJyZXR1cm5Vc2VyT3JkZXJQcm9kdWN0IiwiZm9udFNpemUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3aWR0aCIsIm1hcmdpblRvcCIsImJvcmRlckJvdHRvbSIsImJvcmRlckNvbG9yIiwibGVuZ3RoIiwicGFkZGluZ0xlZnQiLCJtYXAiLCJpbmRleCIsInByb2R1Y3RJZCIsImZpbGVVUkwiLCJmb250V2VpZ2h0IiwicHJvZHVjdE5hbWUiLCJzcGxpdCIsInNsaWNlIiwiam9pbiIsImNvbG9yIiwib3JkZXJJZCIsImRheWpzIiwib3JkZXJEYXRlIiwiZm9ybWF0Iiwic2hpcHBpbmdTdGF0dXMiLCJyZXR1cm5TdGF0dXMiLCJwYXJzZUZsb2F0IiwiTnVtYmVyIiwic2VsbGluZ1ByaWNlIiwic2hpcHBpbmdDaGFyZ2UiLCJ0b0ZpeGVkIiwiYm9yZGVyIiwiY3Vyc29yIiwibWFyZ2luUmlnaHQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImxpc3QiLCJ3aXRoQXBvbGxvIiwic3NyIiwiY29ubmVjdCIsIldpc2hsaXN0QWN0aW9uIiwiQ2FydEFjdGlvbiIsIk1vZGFsQWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7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a0JnQix3RCxFQUNQQSx3RCxFQUNKQSx3RCxFQUVvQkkscUQ7OztLQTNDbkNoQyxNOztBQW1pQlQsSUFBTXdILGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTHZILFlBQVEsRUFBRXVILEtBQUssQ0FBQ3ZILFFBQU4sQ0FBZXdILElBQWYsR0FBc0JELEtBQUssQ0FBQ3ZILFFBQU4sQ0FBZXdILElBQXJDLEdBQTRDO0FBRGpELEdBQVA7QUFHRCxDQUpEOztBQU1BLCtEQUFlQyx3REFBVSxDQUFDO0FBQUVDLEtBQUc7QUFBTCxDQUFELENBQVYsQ0FDYkMsb0RBQU8sQ0FBQ0wsZUFBRCxnREFDRk0scURBREUsR0FFRkMsaURBRkUsR0FHRkMsa0RBSEUsRUFBUCxDQUlHaEksTUFKSCxDQURhLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGFnZXMvb3JkZXJzLmFlM2M3OTg0N2JhYmY2MmZiNjE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlIH0gZnJvbSBcInJlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCBBTGluayBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tb24vQUxpbmtcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IHsgYWN0aW9ucyBhcyBXaXNobGlzdEFjdGlvbiB9IGZyb20gXCIuLi8uLi9zdG9yZS93aXNobGlzdFwiO1xyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIENhcnRBY3Rpb24gfSBmcm9tIFwiLi4vLi4vc3RvcmUvY2FydFwiO1xyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIE1vZGFsQWN0aW9uIH0gZnJvbSBcIi4uLy4uL3N0b3JlL21vZGFsXCI7XHJcbmltcG9ydCB7IElvTWRIb21lIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcbmltcG9ydCB7IGdxbCwgdXNlTGF6eVF1ZXJ5LCB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHdpdGhBcG9sbG8gZnJvbSBcIi4uLy4uL3NlcnZlci9hcG9sbG9cIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tIFwicmVhY3QtaGVsbWV0XCI7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZlYXR1cmVzL3BhZ2luYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mZWF0dXJlcy9kcm9wZG93bi9Ecm9wZG93blwiO1xyXG5pbXBvcnQgUmV0dXJuUmVxdWVzdEZvcm1Nb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mZWF0dXJlcy9tb2RhbHMvUmV0dXJuUmVxdWVzdEZvcm1Nb2RhbFwiO1xyXG5pbXBvcnQgQ3VzdG9tTW9kYWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmVhdHVyZXMvbW9kYWxzL0N1c3RvbU1vZGFsXCI7XHJcbmltcG9ydCBSZXR1cm5Qb2xpY3lNb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mZWF0dXJlcy9tb2RhbHMvUmV0dXJuUG9saWN5TW9kYWxcIjtcclxuXHJcbmNvbnN0IEdFVF9PUkRFUlMgPSBncWxgXHJcbiAgcXVlcnkgR2V0VXNlck9yZGVyUHJvZHVjdHMoJGlucHV0OiBHZXRVc2VyT3JkZXJQcm9kdWN0c0lucHV0ISkge1xyXG4gICAgZ2V0VXNlck9yZGVyUHJvZHVjdHMoaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgICBtYXhSZWNvcmRzXHJcbiAgICAgIHJlY29yZHMge1xyXG4gICAgICAgIF9pZFxyXG4gICAgICAgIHByb2R1Y3RJZFxyXG4gICAgICAgIHZlbmRvcklkXHJcbiAgICAgICAgb3JkZXJJZFxyXG4gICAgICAgIGl0ZW1JZFxyXG4gICAgICAgIHByb2R1Y3ROYW1lXHJcbiAgICAgICAgc2hvcnREZXNjcmlwdGlvblxyXG4gICAgICAgIHNrdUlkXHJcbiAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgZmlsZVR5cGVcclxuICAgICAgICAgIGZpbGVVUkxcclxuICAgICAgICAgIG1pbWVUeXBlXHJcbiAgICAgICAgICBvcmlnaW5hbE5hbWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuUGVyaW9kXHJcbiAgICAgICAgbXJwXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlXHJcbiAgICAgICAgc2hpcHBpbmdDaGFyZ2VcclxuICAgICAgICBwYXltZW50TW9kZVxyXG4gICAgICAgIHBheW1lbnRTdGF0dXNcclxuICAgICAgICBvcmRlckRhdGVcclxuICAgICAgICBzaGlwcGluZ1N0YXR1c1xyXG4gICAgICAgIHNoaXBwZWREYXRlXHJcbiAgICAgICAgZGVsaXZlcnlEYXRlXHJcbiAgICAgICAgcmV0dXJuU3RhdHVzXHJcbiAgICAgICAgcmV0dXJuRGF0ZVxyXG4gICAgICAgIHJldHVyblJlcXVlc3REYXRlXHJcbiAgICAgICAgcmV0dXJuUmVqZWN0ZWREYXRlXHJcbiAgICAgICAgcmV0dXJuVXNlclJlYXNvblxyXG4gICAgICAgIHJlZnVuZFN0YXR1c1xyXG4gICAgICAgIHJlZnVuZEFtb3VudFxyXG4gICAgICAgIHJlZnVuZERhdGVcclxuICAgICAgICBjYW5jZWxsZWREYXRlXHJcbiAgICAgICAgY2FuY2VsVXNlclJlYXNvblxyXG4gICAgICAgIGNvdXJpZXJJZFxyXG4gICAgICAgIGludm9pY2VOdW1iZXJcclxuICAgICAgICBpbnZvaWNlIHtcclxuICAgICAgICAgIGZpbGVUeXBlXHJcbiAgICAgICAgICBmaWxlVVJMXHJcbiAgICAgICAgICBtaW1lVHlwZVxyXG4gICAgICAgICAgb3JpZ2luYWxOYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ0FOQ0VMX09SREVSID0gZ3FsYFxyXG4gIG11dGF0aW9uIENhbmNlbFVzZXJPcmRlclByb2R1Y3QoJGlucHV0OiBDYW5jZWxVc2VyT3JkZXJQcm9kdWN0SW5wdXQhKSB7XHJcbiAgICBjYW5jZWxVc2VyT3JkZXJQcm9kdWN0KGlucHV0OiAkaW5wdXQpIHtcclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUkVUVVJOX09SREVSID0gZ3FsYFxyXG4gIG11dGF0aW9uIFJldHVyblVzZXJPcmRlclByb2R1Y3QoXHJcbiAgICAkaW5wdXQ6IFJldHVyblVzZXJPcmRlclByb2R1Y3RJbnB1dCFcclxuICAgICRpbWFnZTogW1VwbG9hZF1cclxuICApIHtcclxuICAgIHJldHVyblVzZXJPcmRlclByb2R1Y3QoaW5wdXQ6ICRpbnB1dCwgaW1hZ2U6ICRpbWFnZSkge1xyXG4gICAgICBfaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBET1dOTE9BRF9JTlZPSUNFID0gZ3FsYFxyXG4gIG11dGF0aW9uIEdldFVzZXJJdm9pY2VTaWduZWRVcmwoJGlucHV0OiBHZXRVc2VySXZvaWNlVXJsSW5wdXQhKSB7XHJcbiAgICBnZXRVc2VySXZvaWNlU2lnbmVkVXJsKGlucHV0OiAkaW5wdXQpIHtcclxuICAgICAgdXJsXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gT3JkZXJzKHByb3BzKSB7XHJcbiAgY29uc3QgeyB3aXNobGlzdCwgYWRkVG9DYXJ0LCByZW1vdmVGcm9tV2lzaGxpc3QsIHNob3dRdWlja1ZpZXcgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtmbGFnLCBzZXRGbGFnXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtvcmRlcnMsIHNldE9yZGVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgcGFnZSA9IHJvdXRlci5xdWVyeS5wYWdlID8gcGFyc2VJbnQocm91dGVyLnF1ZXJ5LnBhZ2UpIDogMDtcclxuICBjb25zdCBbcGVyUGFnZSwgc2V0UGVyUGFnZV0gPSB1c2VTdGF0ZSg1KTtcclxuXHJcbiAgY29uc3Qgb25Nb3ZlRnJvbVRvV2lzaGxpdCA9IChlLCBpdGVtKSA9PiB7XHJcbiAgICBzZXRGbGFnKDIpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYWRkVG9DYXJ0KGl0ZW0pO1xyXG4gICAgcmVtb3ZlRnJvbVdpc2hsaXN0KGl0ZW0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZVByb2R1Y3QgPSAoZSwgaXRlbSkgPT4ge1xyXG4gICAgc2V0RmxhZygxKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHJlbW92ZUZyb21XaXNobGlzdChpdGVtKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblF1aWNrVmlld0NsaWNrID0gKGUsIHByb2R1Y3QpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNob3dRdWlja1ZpZXcocHJvZHVjdC5zbHVnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRTdGF0dXNDb2xvciA9IChzdGF0dXMpID0+IHtcclxuICAgIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICAgIGNhc2UgXCJQRU5ESU5HXCI6XHJcbiAgICAgICAgcmV0dXJuIFwiI0ZGQTUwMFwiO1xyXG4gICAgICBjYXNlIFwiSU5fUFJPR1JFU1NcIjpcclxuICAgICAgICByZXR1cm4gXCIjRkZBNTAwXCI7XHJcbiAgICAgIGNhc2UgXCJDT01QTEVURURcIjpcclxuICAgICAgICByZXR1cm4gXCIjNDQ5NjFEXCI7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIFwiIzAwMDAwMFwiO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtjYW5jZWxVc2VyT3JkZXJQcm9kdWN0XSA9IHVzZU11dGF0aW9uKENBTkNFTF9PUkRFUik7XHJcbiAgY29uc3QgW2Rvd25sb2FkSW52b2ljZV0gPSB1c2VNdXRhdGlvbihET1dOTE9BRF9JTlZPSUNFKTtcclxuICBjb25zdCBbcmV0dXJuT3JkZXJdID0gdXNlTXV0YXRpb24oUkVUVVJOX09SREVSKTtcclxuXHJcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciwgcmVmZXRjaCB9ID0gdXNlUXVlcnkoR0VUX09SREVSUywge1xyXG4gICAgdmFyaWFibGVzOiB7IGlucHV0OiB7IHBhZ2U6IHBhZ2UgfHwgMCwgc2l6ZTogcGVyUGFnZSB9IH0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRvdGFsUGFnZSA9IGRhdGFcclxuICAgID8gcGFyc2VJbnQoZGF0YT8uZ2V0VXNlck9yZGVyUHJvZHVjdHM/Lm1heFJlY29yZHMgLyBwZXJQYWdlKSArXHJcbiAgICAgIChkYXRhPy5nZXRVc2VyT3JkZXJQcm9kdWN0cz8ubWF4UmVjb3JkcyAlIHBlclBhZ2UgPyAxIDogMClcclxuICAgIDogMDtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgb3JkZXJzOlwiLCBlcnJvcik7XHJcbiAgICB9IGVsc2UgaWYgKGRhdGEpIHtcclxuICAgICAgc2V0T3JkZXJzKGRhdGEuZ2V0VXNlck9yZGVyUHJvZHVjdHMucmVjb3JkcyB8fCBbXSk7XHJcbiAgICB9XHJcbiAgfSwgW2RhdGEsIGVycm9yXSk7XHJcblxyXG4gIGNvbnN0IG9yZGVyQ2FuY2VsID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIXdpbmRvdy5jb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNhbmNlbCB0aGlzIG9yZGVyP1wiKSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2FuY2VsVXNlck9yZGVyUHJvZHVjdCh7XHJcbiAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICBpbnB1dDoge1xyXG4gICAgICAgICAgICBfaWQ6IGlkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgcmVmZXRjaCgpO1xyXG4gICAgICB0b2FzdC5zdWNjZXNzKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4XCIgfX0+WW91ciBvcmRlciBoYXMgYmVlbiBjYW5jZWxlZC48L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEb3dubG9hZCA9IGFzeW5jIChfaWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGludm9pY2UgPSBhd2FpdCBkb3dubG9hZEludm9pY2Uoe1xyXG4gICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgaW5wdXQ6IHtcclxuICAgICAgICAgICAgX2lkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHVybCA9IGludm9pY2UuZGF0YS5nZXRVc2VySXZvaWNlU2lnbmVkVXJsLnVybDtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJpbnZvaWNlXCIsIHVybCk7XHJcbiAgICAgIC8vIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgIC8vIGxpbmsuaHJlZiA9IHVybDtcclxuICAgICAgLy8gbGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgJ2ludm9pY2UucGRmJyk7XHJcbiAgICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICAgIC8vIGxpbmsuY2xpY2soKTtcclxuICAgICAgLy8gZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcclxuICAgICAgd2luZG93Lm9wZW4odXJsLCBcIl9ibGFua1wiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRvYXN0LmVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PVJFVFVSTiBPUkRFUj09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXFxcXHJcbiAgLy9Ecm9wIERvd25cclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgdG9nZ2xlRHJvcGRvd24gPSAoZSwgaXRlbUlkKSA9PiB7XHJcbiAgICBzZXRJc09wZW4oKHByZXYpID0+IChpdGVtSWQgPT09IHByZXYgPyBcIlwiIDogaXRlbUlkKSk7XHJcbiAgfTtcclxuXHJcbiAgLy9SZXR1cm4gb3JkZXJcclxuICBjb25zdCBbc2hvd1JldHVybkZvcm1Nb2RhbCwgc2V0U2hvd1JldHVybkZvcm1Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29yZGVyUHJvZHVjdElkRm9yUmV0dXJuLCBzZXRPcmRlclByb2R1Y3RJZEZvclJldHVybl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbb3JkZXJJZEZvclJldHVybiwgc2V0T3JkZXJJZEZvclJldHVybl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaXNTaGlwcGluZ0FkZHJlc3MsIHNldElzU2hpcHBpbmdBZGRyZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy9yZXR1cm4gcG9saWN5XHJcbiAgY29uc3QgW2lzQWNjZXB0UG9saWN5LCBzZXRJc0FjY2VwdFBvbGljeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dQb2xpY3lNb2RhbCwgc2V0U2hvd1BvbGljeU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcclxuICAgIHNldFNob3dSZXR1cm5Gb3JtTW9kYWwoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlT3JkZXJSZXR1cm4gPSBhc3luYyAoZm9ybURhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgYmFua0RldGFpbHMsIHJldHVybkFkZHJlc3MsIHJldHVyblVzZXJSZWFzb24sIGltYWdlIH0gPSBmb3JtRGF0YTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKGJhbmtEZXRhaWxzLCBcIkJBTksgREVUQUlMU1wiKTtcclxuICAgICAgY29uc29sZS5sb2cocmV0dXJuQWRkcmVzcywgXCJSRVRVUk4gQUREUkVTU1wiKTtcclxuICAgICAgY29uc29sZS5sb2cocmV0dXJuVXNlclJlYXNvbiwgXCJSRVRVUk4gVVNFUiBSRUFTT05cIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKGltYWdlLCBcIiA9IElNQUdFU1wiKTtcclxuXHJcbiAgICAgIGlmICghYmFua0RldGFpbHMpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCYW5rIERldGFpbHMgYXJlIHJlcXVpcmVkIVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXJldHVybkFkZHJlc3MpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXR1cm4gYWRkcmVzcyBpcyByZXF1aXJlZCFcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFyZXR1cm5Vc2VyUmVhc29uKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVhc29uIGlzIHJlcXVpcmVkIVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgdmFyaWFibGVzID0ge1xyXG4gICAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgICBfaWQ6IG9yZGVyUHJvZHVjdElkRm9yUmV0dXJuLFxyXG4gICAgICAgICAgYmFua0RldGFpbHMsXHJcbiAgICAgICAgICByZXR1cm5BZGRyZXNzLFxyXG4gICAgICAgICAgcmV0dXJuVXNlclJlYXNvbixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGltYWdlLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc29sZS5sb2codmFyaWFibGVzLCBcIlZBUklBQkxFU1wiKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3JzIH0gPSBhd2FpdCByZXR1cm5PcmRlcih7XHJcbiAgICAgICAgdmFyaWFibGVzLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChlcnJvcnMpIGNvbnNvbGUubG9nKGVycm9ycywgXCJFUlJPUlNcIik7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLCAnUkVTUE9OU0UgUkVUVVJOIFNVQk1JVCcpXHJcblxyXG4gICAgICBpZiAoZGF0YT8ucmV0dXJuVXNlck9yZGVyUHJvZHVjdD8uX2lkKSB7XHJcbiAgICAgICAgdG9hc3Quc3VjY2VzcyhcclxuICAgICAgICAgIFwiWW91ciBvcmRlciByZXR1cm4gcmVxdWVzdCBoYXMgYmVlbiBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5LlwiXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdG9hc3QuZXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWxtZXQ+XHJcbiAgICAgICAgPHRpdGxlPk9yZGVycyB8IEFyYWIgRGVhbHM8L3RpdGxlPlxyXG4gICAgICA8L0hlbG1ldD5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8bmF2IGFyaWEtbGFiZWw9XCJicmVhZGNydW1iXCIgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1uYXZcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYlwiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW9NZEhvbWUgc3R5bGU9e3sgZm9udFNpemU6IFwiMTZweFwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxpIGNsYXNzTmFtZT1cImljb24taG9tZVwiID48L2k+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWl0ZW0gYWN0aXZlXCIgYXJpYS1jdXJyZW50PVwicGFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9wYWdlcy9hY2NvdW50XCI+TXkgYWNjb3VudDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWl0ZW0gYWN0aXZlXCIgYXJpYS1jdXJyZW50PVwicGFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8QUxpbmsgY2xhc3NOYW1lPVwiYWN0aXZlaXRlbVwiIGhyZWY9XCIvcGFnZXMvb3JkZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgT3JkZXJzXHJcbiAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXJcIj4gKi99XHJcblxyXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyXCI+ICovfVxyXG4gICAgICAgIHsvKiA8bmF2IGFyaWEtbGFiZWw9XCJicmVhZGNydW1iXCIgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJicmVhZGNydW1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbVwiPjxBTGluayBocmVmPVwiL1wiPkhvbWU8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbSBhY3RpdmVcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9yZGVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L25hdj4gKi99XHJcblxyXG4gICAgICAgIHsvKiA8aDE+b3JkZXJzPC9oMT5cclxuICAgICAgICAgKi99XHJcblxyXG4gICAgICAgIHsvKiA8dWwgY2xhc3NOYW1lPVwiY2hlY2tvdXQtcHJvZ3Jlc3MtYmFyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3BhZ2VzL2FjY291bnRcIj5NeSBBY2NvdW50PC9BTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3BhZ2VzL29yZGVyc1wiPk9yZGVyczwvQUxpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gKi99XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDx1bFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjaGVja291dC1wcm9ncmVzcy1iYXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgZmxleC13cmFwXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNGOUY5RjlcIiwgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9wYWdlcy9hY2NvdW50XCI+TXkgQWNjb3VudDwvQUxpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhY3RpdmVcIj5cclxuICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9wYWdlcy9vcmRlcnNcIj5PcmRlcnM8L0FMaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyXCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCIycmVtXCIsXHJcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWRcIixcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiI0UyRTJFMlwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aDQ+T3JkZXJzPC9oND5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWNjZXNzLWFsZXJ0XCI+XHJcbiAgICAgICAgICAgIHtmbGFnID09PSAxID8gPHA+UHJvZHVjdCBzdWNjZXNzZnVsbHkgcmVtb3ZlZC48L3A+IDogXCJcIn1cclxuICAgICAgICAgICAge2ZsYWcgPT09IDIgPyA8cD5Qcm9kdWN0IGFkZGVkIHRvIGNhcnQgc3VjY2Vzc2Z1bGx5LjwvcD4gOiBcIlwifVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ3aXNobGlzdC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5NeSB3aXNobGlzdCBvbiBQb3J0byBTaG9wIDM2PC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgIHtvcmRlcnMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpc2hsaXN0LXRhYmxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtd2lzaGxpc3QgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aXNobGlzdC1lbXB0eS1wYWdlIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtc2hvcHBpbmctYmFnXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8cD5ObyBwcm9kdWN0cyBPcmRlcmVkPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8QUxpbmtcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Nob3BcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayBidG4tYWRkLWNhcnQgcHJvZHVjdC10eXBlLXNpbXBsZSBidG4tc2hvcCBmb250MSB3LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgZ28gc2hvcHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lzaGxpc3QtdGFibGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXdpc2hsaXN0IG1iLTBcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGh1bWJuYWlsLWNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nTGVmdDogXCIwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFByb2R1Y3RcclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJzdGF0dXMtY29sXCI+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwic3RhdHVzLWNvbFwiPk9yZGVyIElkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwic3RhdHVzLWNvbFwiPkRhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJzdGF0dXMtY29sXCI+U3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHJpY2UtY29sXCI+VG90YWwgUHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJhY3Rpb24tY29sXCI+PC90aD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIHtvcmRlcnMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e1wid2lzaGxpc3QtaXRlbVwiICsgaW5kZXh9IGNsYXNzTmFtZT1cInByb2R1Y3Qtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibWVkaWEtd2l0aC1sYXp5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvcHJvZHVjdC9kZWZhdWx0LyR7aXRlbS5wcm9kdWN0SWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3QtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1hZ2UuZmlsZVVSTH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkPXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiODBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI4MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9yZGVyLWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGg1IGNsYXNzTmFtZT1cInByb2R1Y3QtdGl0bGVcIiBzdHlsZT17e2ZvbnRXZWlnaHQ6XCI3MDBcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXtgL3Byb2R1Y3QvZGVmYXVsdC8ke2l0ZW0ucHJvZHVjdElkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucHJvZHVjdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3QtdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiNzAwXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXtgL3Byb2R1Y3QvZGVmYXVsdC8ke2l0ZW0ucHJvZHVjdElkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucHJvZHVjdE5hbWUuc3BsaXQoXCIgXCIpLnNsaWNlKDAsIDQpLmpvaW4oXCIgXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT57aXRlbS5vcmRlcklkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RheWpzKGl0ZW0ub3JkZXJEYXRlKS5mb3JtYXQoXCJZWVlZL01NL0REXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogZ2V0U3RhdHVzQ29sb3IoaXRlbT8uc2hpcHBpbmdTdGF0dXMpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtPy5yZXR1cm5TdGF0dXMgIT09IFwiTkFcIiA/IGAke2l0ZW0/LnJldHVyblN0YXR1c30tKFJldHVybilgOiBpdGVtPy5zaGlwcGluZ1N0YXR1cyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwib2xkLXByaWNlXCI+eydPTVIgJyArIGl0ZW0ucHJpY2VbIDEgXS50b0ZpeGVkKCAyICkgfTwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9NUntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BhcnNlRmxvYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGl0ZW0uc2VsbGluZ1ByaWNlKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoaXRlbT8uc2hpcHBpbmdDaGFyZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkudG9GaXhlZCgyKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlRHJvcGRvd249e3RvZ2dsZURyb3Bkb3dufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1JZD17aXRlbT8uaXRlbUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3Blbj17aXNPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzT3Blbj17c2V0SXNPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlcl91cGRhdGVfbWVudV9jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtPy5zaGlwcGluZ1N0YXR1cyAhPT0gXCJERUxJVkVSRURcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbT8uc2hpcHBpbmdTdGF0dXMgIT09IFwiQ0FOQ0VMRURcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9yZGVyX3VwZGF0ZV9tZW51X2l0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUXVpY2sgVmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyQ2FuY2VsKGl0ZW0uX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge2l0ZW0/LnNoaXBwaW5nU3RhdHVzICE9PSBcIlBFTkRJTkdcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbT8uaW52b2ljZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmRlcl91cGRhdGVfbWVudV9pdGVtIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJRdWljayBWaWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRG93bmxvYWQoaXRlbS5faWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNPcGVuKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTUgMjBoMTR2LTJINXpNMTkgOWgtNFYzSDl2Nkg1bDcgN3pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnZvaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0/LnNoaXBwaW5nU3RhdHVzID09PSBcIkRFTElWRVJFRFwiICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JkZXJfdXBkYXRlX21lbnVfaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dQb2xpY3lNb2RhbCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRPcmRlclByb2R1Y3RJZEZvclJldHVybihpdGVtPy5faWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE9yZGVySWRGb3JSZXR1cm4oaXRlbT8ub3JkZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNPcGVuKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7IWl0ZW0/Lmludm9pY2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9yZGVyX3VwZGF0ZV9tZW51X2l0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9yZGVyX3VwZGF0ZV9tZW51X2l0ZW0gXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJRdWljayBWaWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURvd25sb2FkKGl0ZW0uX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTUgMjBoMTR2LTJINXpNMTkgOWgtNFYzSDl2Nkg1bDcgN3pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnZvaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmRlcl91cGRhdGVfbWVudV9pdGVtIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUXVpY2sgVmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtPy5pbnZvaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHsgYm9yZGVyOiBcIm5vbmVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJncmV5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwibm90LWFsbG93ZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtPy5pbnZvaWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEb3dubG9hZChpdGVtLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc09wZW4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9e2l0ZW0/Lmludm9pY2UgPyBcImJsYWNrXCIgOiBcImdyZXlcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNSAyMGgxNHYtMkg1ek0xOSA5aC00VjNIOXY2SDVsNyA3elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludm9pY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyX3VwZGF0ZV9tZW51X2l0ZW1cIj5DYW5jZWw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXJfdXBkYXRlX21lbnVfaXRlbVwiPlJldHVybjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlcl91cGRhdGVfbWVudV9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludm9pY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAge2xvYWRpbmcgfHxcclxuICAgICAgICAgICAgICAgIChvcmRlcnMgJiYgb3JkZXJzLmxlbmd0aCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJ0b29sYm94IHRvb2xib3gtcGFnaW5hdGlvbiBib3JkZXItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb24gdG90YWxQYWdlPXt0b3RhbFBhZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgey8qIFJldHVybiBzdWJtaXQgbW9kYWwgKi99XHJcbiAgICAgIHtzaG93UmV0dXJuRm9ybU1vZGFsICYmIChcclxuICAgICAgICA8UmV0dXJuUmVxdWVzdEZvcm1Nb2RhbFxyXG4gICAgICAgICAgaXNPcGVuPXtzaG93UmV0dXJuRm9ybU1vZGFsfVxyXG4gICAgICAgICAgc2V0SXNPcGVuPXtzZXRTaG93UmV0dXJuRm9ybU1vZGFsfVxyXG4gICAgICAgICAgaGFuZGxlU3VibWl0PXtoYW5kbGVPcmRlclJldHVybn1cclxuICAgICAgICAgIG9yZGVySWQ9e29yZGVySWRGb3JSZXR1cm59XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAgey8qIFBvbGljeSBtb2RhbCAqL31cclxuICAgICAge3Nob3dQb2xpY3lNb2RhbCAmJiAoXHJcbiAgICAgICAgPFJldHVyblBvbGljeU1vZGFsXHJcbiAgICAgICAgICBpc09wZW49e3Nob3dQb2xpY3lNb2RhbH1cclxuICAgICAgICAgIHNldElzT3Blbj17c2V0U2hvd1BvbGljeU1vZGFsfVxyXG4gICAgICAgICAgaGFuZGxlU3VibWl0PXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzQWNjZXB0UG9saWN5KHRydWUpO1xyXG4gICAgICAgICAgICBzZXRTaG93UmV0dXJuRm9ybU1vZGFsKHRydWUpO1xyXG4gICAgICAgICAgICBzZXRTaG93UG9saWN5TW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHdpc2hsaXN0OiBzdGF0ZS53aXNobGlzdC5saXN0ID8gc3RhdGUud2lzaGxpc3QubGlzdCA6IFtdLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKHsgc3NyOiB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiIH0pKFxyXG4gIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7XHJcbiAgICAuLi5XaXNobGlzdEFjdGlvbixcclxuICAgIC4uLkNhcnRBY3Rpb24sXHJcbiAgICAuLi5Nb2RhbEFjdGlvbixcclxuICB9KShPcmRlcnMpXHJcbik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=