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
      var bankDetails, returnAddress, returnUserReason, image, variables, _yield$returnOrder, _data, errors;

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

              if (_data !== null && _data !== void 0 && _data._id) {
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
    }, item === null || item === void 0 ? void 0 : item.shippingStatus), __jsx("td", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFnZXMvb3JkZXJzLmpzIl0sIm5hbWVzIjpbIkdFVF9PUkRFUlMiLCJncWwiLCJDQU5DRUxfT1JERVIiLCJSRVRVUk5fT1JERVIiLCJET1dOTE9BRF9JTlZPSUNFIiwiT3JkZXJzIiwicHJvcHMiLCJ3aXNobGlzdCIsImFkZFRvQ2FydCIsInJlbW92ZUZyb21XaXNobGlzdCIsInNob3dRdWlja1ZpZXciLCJ1c2VTdGF0ZSIsImZsYWciLCJzZXRGbGFnIiwib3JkZXJzIiwic2V0T3JkZXJzIiwicm91dGVyIiwidXNlUm91dGVyIiwicGFnZSIsInF1ZXJ5IiwicGFyc2VJbnQiLCJwZXJQYWdlIiwic2V0UGVyUGFnZSIsIm9uTW92ZUZyb21Ub1dpc2hsaXQiLCJlIiwiaXRlbSIsInByZXZlbnREZWZhdWx0IiwicmVtb3ZlUHJvZHVjdCIsIm9uUXVpY2tWaWV3Q2xpY2siLCJwcm9kdWN0Iiwic2x1ZyIsImdldFN0YXR1c0NvbG9yIiwic3RhdHVzIiwidXNlTXV0YXRpb24iLCJjYW5jZWxVc2VyT3JkZXJQcm9kdWN0IiwiZG93bmxvYWRJbnZvaWNlIiwicmV0dXJuT3JkZXIiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImlucHV0Iiwic2l6ZSIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJyZWZldGNoIiwidG90YWxQYWdlIiwiZ2V0VXNlck9yZGVyUHJvZHVjdHMiLCJtYXhSZWNvcmRzIiwidXNlRWZmZWN0IiwiY29uc29sZSIsInJlY29yZHMiLCJvcmRlckNhbmNlbCIsImlkIiwid2luZG93IiwiY29uZmlybSIsIl9pZCIsInJlc3BvbnNlIiwidG9hc3QiLCJwYWRkaW5nIiwibG9nIiwiaGFuZGxlRG93bmxvYWQiLCJpbnZvaWNlIiwidXJsIiwiZ2V0VXNlckl2b2ljZVNpZ25lZFVybCIsIm9wZW4iLCJtZXNzYWdlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlRHJvcGRvd24iLCJpdGVtSWQiLCJwcmV2Iiwic2hvd1JldHVybkZvcm1Nb2RhbCIsInNldFNob3dSZXR1cm5Gb3JtTW9kYWwiLCJvcmRlclByb2R1Y3RJZEZvclJldHVybiIsInNldE9yZGVyUHJvZHVjdElkRm9yUmV0dXJuIiwib3JkZXJJZEZvclJldHVybiIsInNldE9yZGVySWRGb3JSZXR1cm4iLCJpc1NoaXBwaW5nQWRkcmVzcyIsInNldElzU2hpcHBpbmdBZGRyZXNzIiwiaXNBY2NlcHRQb2xpY3kiLCJzZXRJc0FjY2VwdFBvbGljeSIsInNob3dQb2xpY3lNb2RhbCIsInNldFNob3dQb2xpY3lNb2RhbCIsImNsb3NlTW9kYWwiLCJoYW5kbGVPcmRlclJldHVybiIsImZvcm1EYXRhIiwiYmFua0RldGFpbHMiLCJyZXR1cm5BZGRyZXNzIiwicmV0dXJuVXNlclJlYXNvbiIsImltYWdlIiwiRXJyb3IiLCJlcnJvcnMiLCJmb250U2l6ZSIsImJhY2tncm91bmRDb2xvciIsIndpZHRoIiwibWFyZ2luVG9wIiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyQ29sb3IiLCJsZW5ndGgiLCJwYWRkaW5nTGVmdCIsIm1hcCIsImluZGV4IiwicHJvZHVjdElkIiwiZmlsZVVSTCIsImZvbnRXZWlnaHQiLCJwcm9kdWN0TmFtZSIsInNwbGl0Iiwic2xpY2UiLCJqb2luIiwiY29sb3IiLCJvcmRlcklkIiwiZGF5anMiLCJvcmRlckRhdGUiLCJmb3JtYXQiLCJzaGlwcGluZ1N0YXR1cyIsInBhcnNlRmxvYXQiLCJOdW1iZXIiLCJzZWxsaW5nUHJpY2UiLCJzaGlwcGluZ0NoYXJnZSIsInRvRml4ZWQiLCJib3JkZXIiLCJjdXJzb3IiLCJtYXJnaW5SaWdodCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibGlzdCIsIndpdGhBcG9sbG8iLCJzc3IiLCJjb25uZWN0IiwiV2lzaGxpc3RBY3Rpb24iLCJDYXJ0QWN0aW9uIiwiTW9kYWxBY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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R0FBNEM7QUFEakQsR0FBUDtBQUdELENBSkQ7O0FBTUEsK0RBQWVDLHdEQUFVLENBQUM7QUFBRUMsS0FBRztBQUFMLENBQUQsQ0FBVixDQUNiQyxvREFBTyxDQUFDTCxlQUFELGdEQUNGTSxxREFERSxHQUVGQyxpREFGRSxHQUdGQyxrREFIRSxFQUFQLENBSUc5SCxNQUpILENBRGEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYWdlcy9vcmRlcnMuODczODhhNTc5MzYwZTMzODQxZDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExhenlMb2FkSW1hZ2UgfSBmcm9tIFwicmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9BTGlua1wiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIFdpc2hsaXN0QWN0aW9uIH0gZnJvbSBcIi4uLy4uL3N0b3JlL3dpc2hsaXN0XCI7XHJcbmltcG9ydCB7IGFjdGlvbnMgYXMgQ2FydEFjdGlvbiB9IGZyb20gXCIuLi8uLi9zdG9yZS9jYXJ0XCI7XHJcbmltcG9ydCB7IGFjdGlvbnMgYXMgTW9kYWxBY3Rpb24gfSBmcm9tIFwiLi4vLi4vc3RvcmUvbW9kYWxcIjtcclxuaW1wb3J0IHsgSW9NZEhvbWUgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcclxuaW1wb3J0IHsgZ3FsLCB1c2VMYXp5UXVlcnksIHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgd2l0aEFwb2xsbyBmcm9tIFwiLi4vLi4vc2VydmVyL2Fwb2xsb1wiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gXCJyZWFjdC1oZWxtZXRcIjtcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmVhdHVyZXMvcGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZlYXR1cmVzL2Ryb3Bkb3duL0Ryb3Bkb3duXCI7XHJcbmltcG9ydCBSZXR1cm5SZXF1ZXN0Rm9ybU1vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZlYXR1cmVzL21vZGFscy9SZXR1cm5SZXF1ZXN0Rm9ybU1vZGFsXCI7XHJcbmltcG9ydCBDdXN0b21Nb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mZWF0dXJlcy9tb2RhbHMvQ3VzdG9tTW9kYWxcIjtcclxuaW1wb3J0IFJldHVyblBvbGljeU1vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZlYXR1cmVzL21vZGFscy9SZXR1cm5Qb2xpY3lNb2RhbFwiO1xyXG5cclxuY29uc3QgR0VUX09SREVSUyA9IGdxbGBcclxuICBxdWVyeSBHZXRVc2VyT3JkZXJQcm9kdWN0cygkaW5wdXQ6IEdldFVzZXJPcmRlclByb2R1Y3RzSW5wdXQhKSB7XHJcbiAgICBnZXRVc2VyT3JkZXJQcm9kdWN0cyhpbnB1dDogJGlucHV0KSB7XHJcbiAgICAgIG1heFJlY29yZHNcclxuICAgICAgcmVjb3JkcyB7XHJcbiAgICAgICAgX2lkXHJcbiAgICAgICAgcHJvZHVjdElkXHJcbiAgICAgICAgdmVuZG9ySWRcclxuICAgICAgICBvcmRlcklkXHJcbiAgICAgICAgaXRlbUlkXHJcbiAgICAgICAgcHJvZHVjdE5hbWVcclxuICAgICAgICBzaG9ydERlc2NyaXB0aW9uXHJcbiAgICAgICAgc2t1SWRcclxuICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICBmaWxlVHlwZVxyXG4gICAgICAgICAgZmlsZVVSTFxyXG4gICAgICAgICAgbWltZVR5cGVcclxuICAgICAgICAgIG9yaWdpbmFsTmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm5QZXJpb2RcclxuICAgICAgICBtcnBcclxuICAgICAgICBzZWxsaW5nUHJpY2VcclxuICAgICAgICBzaGlwcGluZ0NoYXJnZVxyXG4gICAgICAgIHBheW1lbnRNb2RlXHJcbiAgICAgICAgcGF5bWVudFN0YXR1c1xyXG4gICAgICAgIG9yZGVyRGF0ZVxyXG4gICAgICAgIHNoaXBwaW5nU3RhdHVzXHJcbiAgICAgICAgc2hpcHBlZERhdGVcclxuICAgICAgICBkZWxpdmVyeURhdGVcclxuICAgICAgICByZXR1cm5TdGF0dXNcclxuICAgICAgICByZXR1cm5EYXRlXHJcbiAgICAgICAgcmV0dXJuUmVxdWVzdERhdGVcclxuICAgICAgICByZXR1cm5SZWplY3RlZERhdGVcclxuICAgICAgICByZXR1cm5Vc2VyUmVhc29uXHJcbiAgICAgICAgcmVmdW5kU3RhdHVzXHJcbiAgICAgICAgcmVmdW5kQW1vdW50XHJcbiAgICAgICAgcmVmdW5kRGF0ZVxyXG4gICAgICAgIGNhbmNlbGxlZERhdGVcclxuICAgICAgICBjYW5jZWxVc2VyUmVhc29uXHJcbiAgICAgICAgY291cmllcklkXHJcbiAgICAgICAgaW52b2ljZU51bWJlclxyXG4gICAgICAgIGludm9pY2Uge1xyXG4gICAgICAgICAgZmlsZVR5cGVcclxuICAgICAgICAgIGZpbGVVUkxcclxuICAgICAgICAgIG1pbWVUeXBlXHJcbiAgICAgICAgICBvcmlnaW5hbE5hbWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDQU5DRUxfT1JERVIgPSBncWxgXHJcbiAgbXV0YXRpb24gQ2FuY2VsVXNlck9yZGVyUHJvZHVjdCgkaW5wdXQ6IENhbmNlbFVzZXJPcmRlclByb2R1Y3RJbnB1dCEpIHtcclxuICAgIGNhbmNlbFVzZXJPcmRlclByb2R1Y3QoaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgICBfaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBSRVRVUk5fT1JERVIgPSBncWxgXHJcbiAgbXV0YXRpb24gUmV0dXJuVXNlck9yZGVyUHJvZHVjdChcclxuICAgICRpbnB1dDogUmV0dXJuVXNlck9yZGVyUHJvZHVjdElucHV0IVxyXG4gICAgJGltYWdlOiBbVXBsb2FkXVxyXG4gICkge1xyXG4gICAgcmV0dXJuVXNlck9yZGVyUHJvZHVjdChpbnB1dDogJGlucHV0LCBpbWFnZTogJGltYWdlKSB7XHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IERPV05MT0FEX0lOVk9JQ0UgPSBncWxgXHJcbiAgbXV0YXRpb24gR2V0VXNlckl2b2ljZVNpZ25lZFVybCgkaW5wdXQ6IEdldFVzZXJJdm9pY2VVcmxJbnB1dCEpIHtcclxuICAgIGdldFVzZXJJdm9pY2VTaWduZWRVcmwoaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgICB1cmxcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBPcmRlcnMocHJvcHMpIHtcclxuICBjb25zdCB7IHdpc2hsaXN0LCBhZGRUb0NhcnQsIHJlbW92ZUZyb21XaXNobGlzdCwgc2hvd1F1aWNrVmlldyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2ZsYWcsIHNldEZsYWddID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW29yZGVycywgc2V0T3JkZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBwYWdlID0gcm91dGVyLnF1ZXJ5LnBhZ2UgPyBwYXJzZUludChyb3V0ZXIucXVlcnkucGFnZSkgOiAwO1xyXG4gIGNvbnN0IFtwZXJQYWdlLCBzZXRQZXJQYWdlXSA9IHVzZVN0YXRlKDUpO1xyXG5cclxuICBjb25zdCBvbk1vdmVGcm9tVG9XaXNobGl0ID0gKGUsIGl0ZW0pID0+IHtcclxuICAgIHNldEZsYWcoMik7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBhZGRUb0NhcnQoaXRlbSk7XHJcbiAgICByZW1vdmVGcm9tV2lzaGxpc3QoaXRlbSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlUHJvZHVjdCA9IChlLCBpdGVtKSA9PiB7XHJcbiAgICBzZXRGbGFnKDEpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgcmVtb3ZlRnJvbVdpc2hsaXN0KGl0ZW0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uUXVpY2tWaWV3Q2xpY2sgPSAoZSwgcHJvZHVjdCkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2hvd1F1aWNrVmlldyhwcm9kdWN0LnNsdWcpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFN0YXR1c0NvbG9yID0gKHN0YXR1cykgPT4ge1xyXG4gICAgc3dpdGNoIChzdGF0dXMpIHtcclxuICAgICAgY2FzZSBcIlBFTkRJTkdcIjpcclxuICAgICAgICByZXR1cm4gXCIjRkZBNTAwXCI7XHJcbiAgICAgIGNhc2UgXCJJTl9QUk9HUkVTU1wiOlxyXG4gICAgICAgIHJldHVybiBcIiNGRkE1MDBcIjtcclxuICAgICAgY2FzZSBcIkNPTVBMRVRFRFwiOlxyXG4gICAgICAgIHJldHVybiBcIiM0NDk2MURcIjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gXCIjMDAwMDAwXCI7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW2NhbmNlbFVzZXJPcmRlclByb2R1Y3RdID0gdXNlTXV0YXRpb24oQ0FOQ0VMX09SREVSKTtcclxuICBjb25zdCBbZG93bmxvYWRJbnZvaWNlXSA9IHVzZU11dGF0aW9uKERPV05MT0FEX0lOVk9JQ0UpO1xyXG4gIGNvbnN0IFtyZXR1cm5PcmRlcl0gPSB1c2VNdXRhdGlvbihSRVRVUk5fT1JERVIpO1xyXG5cclxuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yLCByZWZldGNoIH0gPSB1c2VRdWVyeShHRVRfT1JERVJTLCB7XHJcbiAgICB2YXJpYWJsZXM6IHsgaW5wdXQ6IHsgcGFnZTogcGFnZSB8fCAwLCBzaXplOiBwZXJQYWdlIH0gfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdG90YWxQYWdlID0gZGF0YVxyXG4gICAgPyBwYXJzZUludChkYXRhPy5nZXRVc2VyT3JkZXJQcm9kdWN0cz8ubWF4UmVjb3JkcyAvIHBlclBhZ2UpICtcclxuICAgICAgKGRhdGE/LmdldFVzZXJPcmRlclByb2R1Y3RzPy5tYXhSZWNvcmRzICUgcGVyUGFnZSA/IDEgOiAwKVxyXG4gICAgOiAwO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBvcmRlcnM6XCIsIGVycm9yKTtcclxuICAgIH0gZWxzZSBpZiAoZGF0YSkge1xyXG4gICAgICBzZXRPcmRlcnMoZGF0YS5nZXRVc2VyT3JkZXJQcm9kdWN0cy5yZWNvcmRzIHx8IFtdKTtcclxuICAgIH1cclxuICB9LCBbZGF0YSwgZXJyb3JdKTtcclxuXHJcbiAgY29uc3Qgb3JkZXJDYW5jZWwgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghd2luZG93LmNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2FuY2VsIHRoaXMgb3JkZXI/XCIpKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjYW5jZWxVc2VyT3JkZXJQcm9kdWN0KHtcclxuICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgICAgIF9pZDogaWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICByZWZldGNoKCk7XHJcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHhcIiB9fT5Zb3VyIG9yZGVyIGhhcyBiZWVuIGNhbmNlbGVkLjwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURvd25sb2FkID0gYXN5bmMgKF9pZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaW52b2ljZSA9IGF3YWl0IGRvd25sb2FkSW52b2ljZSh7XHJcbiAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICBpbnB1dDoge1xyXG4gICAgICAgICAgICBfaWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgdXJsID0gaW52b2ljZS5kYXRhLmdldFVzZXJJdm9pY2VTaWduZWRVcmwudXJsO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImludm9pY2VcIiwgdXJsKTtcclxuICAgICAgLy8gY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgLy8gbGluay5ocmVmID0gdXJsO1xyXG4gICAgICAvLyBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCAnaW52b2ljZS5wZGYnKTtcclxuICAgICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgICAgLy8gbGluay5jbGljaygpO1xyXG4gICAgICAvLyBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xyXG4gICAgICB3aW5kb3cub3Blbih1cmwsIFwiX2JsYW5rXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdG9hc3QuZXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09UkVUVVJOIE9SREVSPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcXFxcclxuICAvL0Ryb3AgRG93blxyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCB0b2dnbGVEcm9wZG93biA9IChlLCBpdGVtSWQpID0+IHtcclxuICAgIHNldElzT3BlbigocHJldikgPT4gKGl0ZW1JZCA9PT0gcHJldiA/IFwiXCIgOiBpdGVtSWQpKTtcclxuICB9O1xyXG5cclxuICAvL1JldHVybiBvcmRlclxyXG4gIGNvbnN0IFtzaG93UmV0dXJuRm9ybU1vZGFsLCBzZXRTaG93UmV0dXJuRm9ybU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb3JkZXJQcm9kdWN0SWRGb3JSZXR1cm4sIHNldE9yZGVyUHJvZHVjdElkRm9yUmV0dXJuXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtvcmRlcklkRm9yUmV0dXJuLCBzZXRPcmRlcklkRm9yUmV0dXJuXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpc1NoaXBwaW5nQWRkcmVzcywgc2V0SXNTaGlwcGluZ0FkZHJlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvL3JldHVybiBwb2xpY3lcclxuICBjb25zdCBbaXNBY2NlcHRQb2xpY3ksIHNldElzQWNjZXB0UG9saWN5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd1BvbGljeU1vZGFsLCBzZXRTaG93UG9saWN5TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xyXG4gICAgc2V0U2hvd1JldHVybkZvcm1Nb2RhbChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVPcmRlclJldHVybiA9IGFzeW5jIChmb3JtRGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBiYW5rRGV0YWlscywgcmV0dXJuQWRkcmVzcywgcmV0dXJuVXNlclJlYXNvbiwgaW1hZ2UgfSA9IGZvcm1EYXRhO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coYmFua0RldGFpbHMsIFwiQkFOSyBERVRBSUxTXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXR1cm5BZGRyZXNzLCBcIlJFVFVSTiBBRERSRVNTXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXR1cm5Vc2VyUmVhc29uLCBcIlJFVFVSTiBVU0VSIFJFQVNPTlwiKTtcclxuICAgICAgY29uc29sZS5sb2coaW1hZ2UsIFwiID0gSU1BR0VTXCIpO1xyXG5cclxuICAgICAgaWYgKCFiYW5rRGV0YWlscykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkJhbmsgRGV0YWlscyBhcmUgcmVxdWlyZWQhXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghcmV0dXJuQWRkcmVzcykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJldHVybiBhZGRyZXNzIGlzIHJlcXVpcmVkIVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXJldHVyblVzZXJSZWFzb24pIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWFzb24gaXMgcmVxdWlyZWQhXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB2YXJpYWJsZXMgPSB7XHJcbiAgICAgICAgaW5wdXQ6IHtcclxuICAgICAgICAgIF9pZDogb3JkZXJQcm9kdWN0SWRGb3JSZXR1cm4sXHJcbiAgICAgICAgICBiYW5rRGV0YWlscyxcclxuICAgICAgICAgIHJldHVybkFkZHJlc3MsXHJcbiAgICAgICAgICByZXR1cm5Vc2VyUmVhc29uLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW1hZ2UsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyh2YXJpYWJsZXMsIFwiVkFSSUFCTEVTXCIpO1xyXG5cclxuICAgICAgY29uc3QgeyBkYXRhLCBlcnJvcnMgfSA9IGF3YWl0IHJldHVybk9yZGVyKHtcclxuICAgICAgICB2YXJpYWJsZXMsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKGVycm9ycykgY29uc29sZS5sb2coZXJyb3JzLCBcIkVSUk9SU1wiKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEsICdSRVNQT05TRSBSRVRVUk4gU1VCTUlUJylcclxuXHJcbiAgICAgIGlmIChkYXRhPy5faWQpIHtcclxuICAgICAgICB0b2FzdC5zdWNjZXNzKFxyXG4gICAgICAgICAgXCJZb3VyIG9yZGVyIHJldHVybiByZXF1ZXN0IGhhcyBiZWVuIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHkuXCJcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0b2FzdC5lcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlbG1ldD5cclxuICAgICAgICA8dGl0bGU+T3JkZXJzIHwgQXJhYiBEZWFsczwvdGl0bGU+XHJcbiAgICAgIDwvSGVsbWV0PlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxuYXYgYXJpYS1sYWJlbD1cImJyZWFkY3J1bWJcIiBjbGFzc05hbWU9XCJicmVhZGNydW1iLW5hdlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJicmVhZGNydW1iXCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJb01kSG9tZSBzdHlsZT17eyBmb250U2l6ZTogXCIxNnB4XCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGkgY2xhc3NOYW1lPVwiaWNvbi1ob21lXCIgPjwvaT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbSBhY3RpdmVcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3BhZ2VzL2FjY291bnRcIj5NeSBhY2NvdW50PC9BTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbSBhY3RpdmVcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxBTGluayBjbGFzc05hbWU9XCJhY3RpdmVpdGVtXCIgaHJlZj1cIi9wYWdlcy9vcmRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICBPcmRlcnNcclxuICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC9vbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiPiAqL31cclxuXHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj4gKi99XHJcbiAgICAgICAgey8qIDxuYXYgYXJpYS1sYWJlbD1cImJyZWFkY3J1bWJcIiBjbGFzc05hbWU9XCJicmVhZGNydW1iLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtXCI+PEFMaW5rIGhyZWY9XCIvXCI+SG9tZTwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtIGFjdGl2ZVwiIGFyaWEtY3VycmVudD1cInBhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3JkZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PiAqL31cclxuXHJcbiAgICAgICAgey8qIDxoMT5vcmRlcnM8L2gxPlxyXG4gICAgICAgICAqL31cclxuXHJcbiAgICAgICAgey8qIDx1bCBjbGFzc05hbWU9XCJjaGVja291dC1wcm9ncmVzcy1iYXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgZmxleC13cmFwXCI+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvcGFnZXMvYWNjb3VudFwiPk15IEFjY291bnQ8L0FMaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvcGFnZXMvb3JkZXJzXCI+T3JkZXJzPC9BTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICBcclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPHVsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoZWNrb3V0LXByb2dyZXNzLWJhciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBmbGV4LXdyYXBcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI0Y5RjlGOVwiLCB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3BhZ2VzL2FjY291bnRcIj5NeSBBY2NvdW50PC9BTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3BhZ2VzL29yZGVyc1wiPk9yZGVyczwvQUxpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXJcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjJyZW1cIixcclxuICAgICAgICAgICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZFwiLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjRTJFMkUyXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxoND5PcmRlcnM8L2g0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Y2Nlc3MtYWxlcnRcIj5cclxuICAgICAgICAgICAge2ZsYWcgPT09IDEgPyA8cD5Qcm9kdWN0IHN1Y2Nlc3NmdWxseSByZW1vdmVkLjwvcD4gOiBcIlwifVxyXG4gICAgICAgICAgICB7ZmxhZyA9PT0gMiA/IDxwPlByb2R1Y3QgYWRkZWQgdG8gY2FydCBzdWNjZXNzZnVsbHkuPC9wPiA6IFwiXCJ9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIndpc2hsaXN0LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPk15IHdpc2hsaXN0IG9uIFBvcnRvIFNob3AgMzY8L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAge29yZGVycy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lzaGxpc3QtdGFibGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS13aXNobGlzdCBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpc2hsaXN0LWVtcHR5LXBhZ2UgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zaG9wcGluZy1iYWdcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDxwPk5vIHByb2R1Y3RzIE9yZGVyZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxBTGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvc2hvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGJ0bi1hZGQtY2FydCBwcm9kdWN0LXR5cGUtc2ltcGxlIGJ0bi1zaG9wIGZvbnQxIHctYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBnbyBzaG9we1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aXNobGlzdC10YWJsZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtd2lzaGxpc3QgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aHVtYm5haWwtY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgUHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInN0YXR1cy1jb2xcIj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJzdGF0dXMtY29sXCI+T3JkZXIgSWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJzdGF0dXMtY29sXCI+RGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInN0YXR1cy1jb2xcIj5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwcmljZS1jb2xcIj5Ub3RhbCBQcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImFjdGlvbi1jb2xcIj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAge29yZGVycy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17XCJ3aXNobGlzdC1pdGVtXCIgKyBpbmRleH0gY2xhc3NOYW1lPVwicHJvZHVjdC1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJtZWRpYS13aXRoLWxhenlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9wcm9kdWN0L2RlZmF1bHQvJHtpdGVtLnByb2R1Y3RJZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWFnZS5maWxlVVJMfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGQ9ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI4MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjgwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JkZXItaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aDUgY2xhc3NOYW1lPVwicHJvZHVjdC10aXRsZVwiIHN0eWxlPXt7Zm9udFdlaWdodDpcIjcwMFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9e2AvcHJvZHVjdC9kZWZhdWx0LyR7aXRlbS5wcm9kdWN0SWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5wcm9kdWN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC10aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFdlaWdodDogXCI3MDBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9e2AvcHJvZHVjdC9kZWZhdWx0LyR7aXRlbS5wcm9kdWN0SWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5wcm9kdWN0TmFtZS5zcGxpdChcIiBcIikuc2xpY2UoMCwgNCkuam9pbihcIiBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PntpdGVtLm9yZGVySWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF5anMoaXRlbS5vcmRlckRhdGUpLmZvcm1hdChcIllZWVkvTU0vRERcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBnZXRTdGF0dXNDb2xvcihpdGVtPy5zaGlwcGluZ1N0YXR1cykgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0/LnNoaXBwaW5nU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT1cIm9sZC1wcmljZVwiPnsnT01SICcgKyBpdGVtLnByaWNlWyAxIF0udG9GaXhlZCggMiApIH08L3NwYW4+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPTVJ7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZUZsb2F0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihpdGVtLnNlbGxpbmdQcmljZSkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGl0ZW0/LnNoaXBwaW5nQ2hhcmdlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnRvRml4ZWQoMil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZURyb3Bkb3duPXt0b2dnbGVEcm9wZG93bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtSWQ9e2l0ZW0/Lml0ZW1JZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc09wZW49e2lzT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc09wZW49e3NldElzT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXJfdXBkYXRlX21lbnVfY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbT8uc2hpcHBpbmdTdGF0dXMgIT09IFwiREVMSVZFUkVEXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0/LnNoaXBwaW5nU3RhdHVzICE9PSBcIkNBTkNFTEVEXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmRlcl91cGRhdGVfbWVudV9pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlF1aWNrIFZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlckNhbmNlbChpdGVtLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtpdGVtPy5zaGlwcGluZ1N0YXR1cyAhPT0gXCJQRU5ESU5HXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0/Lmludm9pY2UgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JkZXJfdXBkYXRlX21lbnVfaXRlbSBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUXVpY2sgVmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURvd25sb2FkKGl0ZW0uX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzT3BlbihmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjFlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk01IDIwaDE0di0ySDV6TTE5IDloLTRWM0g5djZINWw3IDd6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW52b2ljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtPy5zaGlwcGluZ1N0YXR1cyA9PT0gXCJERUxJVkVSRURcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9yZGVyX3VwZGF0ZV9tZW51X2l0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93UG9saWN5TW9kYWwodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3JkZXJQcm9kdWN0SWRGb3JSZXR1cm4oaXRlbT8uX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRPcmRlcklkRm9yUmV0dXJuKGl0ZW0/Lm9yZGVySWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzT3BlbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogeyFpdGVtPy5pbnZvaWNlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmRlcl91cGRhdGVfbWVudV9pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmRlcl91cGRhdGVfbWVudV9pdGVtIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUXVpY2sgVmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEb3dubG9hZChpdGVtLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjFlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk01IDIwaDE0di0ySDV6TTE5IDloLTRWM0g5djZINWw3IDd6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW52b2ljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JkZXJfdXBkYXRlX21lbnVfaXRlbSBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlF1aWNrIFZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbT8uaW52b2ljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IGJvcmRlcjogXCJub25lXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcIm5vdC1hbGxvd2VkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbT8uaW52b2ljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRG93bmxvYWQoaXRlbS5faWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNPcGVuKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjFlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPXtpdGVtPy5pbnZvaWNlID8gXCJibGFja1wiIDogXCJncmV5XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTUgMjBoMTR2LTJINXpNMTkgOWgtNFYzSDl2Nkg1bDcgN3pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnZvaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJvcmRlcl91cGRhdGVfbWVudV9pdGVtXCI+Q2FuY2VsPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyX3VwZGF0ZV9tZW51X2l0ZW1cIj5SZXR1cm48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXJfdXBkYXRlX21lbnVfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnZvaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgIHtsb2FkaW5nIHx8XHJcbiAgICAgICAgICAgICAgICAob3JkZXJzICYmIG9yZGVycy5sZW5ndGggJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwidG9vbGJveCB0b29sYm94LXBhZ2luYXRpb24gYm9yZGVyLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uIHRvdGFsUGFnZT17dG90YWxQYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgIHsvKiBSZXR1cm4gc3VibWl0IG1vZGFsICovfVxyXG4gICAgICB7c2hvd1JldHVybkZvcm1Nb2RhbCAmJiAoXHJcbiAgICAgICAgPFJldHVyblJlcXVlc3RGb3JtTW9kYWxcclxuICAgICAgICAgIGlzT3Blbj17c2hvd1JldHVybkZvcm1Nb2RhbH1cclxuICAgICAgICAgIHNldElzT3Blbj17c2V0U2hvd1JldHVybkZvcm1Nb2RhbH1cclxuICAgICAgICAgIGhhbmRsZVN1Ym1pdD17aGFuZGxlT3JkZXJSZXR1cm59XHJcbiAgICAgICAgICBvcmRlcklkPXtvcmRlcklkRm9yUmV0dXJufVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHsvKiBQb2xpY3kgbW9kYWwgKi99XHJcbiAgICAgIHtzaG93UG9saWN5TW9kYWwgJiYgKFxyXG4gICAgICAgIDxSZXR1cm5Qb2xpY3lNb2RhbFxyXG4gICAgICAgICAgaXNPcGVuPXtzaG93UG9saWN5TW9kYWx9XHJcbiAgICAgICAgICBzZXRJc09wZW49e3NldFNob3dQb2xpY3lNb2RhbH1cclxuICAgICAgICAgIGhhbmRsZVN1Ym1pdD17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc0FjY2VwdFBvbGljeSh0cnVlKTtcclxuICAgICAgICAgICAgc2V0U2hvd1JldHVybkZvcm1Nb2RhbCh0cnVlKTtcclxuICAgICAgICAgICAgc2V0U2hvd1BvbGljeU1vZGFsKGZhbHNlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB3aXNobGlzdDogc3RhdGUud2lzaGxpc3QubGlzdCA/IHN0YXRlLndpc2hsaXN0Lmxpc3QgOiBbXSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyh7IHNzcjogdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiB9KShcclxuICBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywge1xyXG4gICAgLi4uV2lzaGxpc3RBY3Rpb24sXHJcbiAgICAuLi5DYXJ0QWN0aW9uLFxyXG4gICAgLi4uTW9kYWxBY3Rpb24sXHJcbiAgfSkoT3JkZXJzKVxyXG4pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9