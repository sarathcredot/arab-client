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

  var getReturnStatusColor = function getReturnStatusColor(status) {
    switch (status) {
      case "PENDING":
        return "#FFC107";

      case "APPROVED":
        return "#28A745";

      case "REJECTED":
        return "#DC3545";

      case "COLLECTED":
        return "#17A2B8";

      default:
        return "#17A2B8";
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
                  lineNumber: 189,
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
      lineNumber: 292,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 9
    }
  }, "Orders | Arab Deals")), __jsx("main", {
    className: "main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 9
    }
  }, __jsx("nav", {
    "aria-label": "breadcrumb",
    className: "breadcrumb-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 13
    }
  }, __jsx("ol", {
    className: "breadcrumb",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 15
    }
  }, __jsx("li", {
    className: "breadcrumb-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 17
    }
  }, __jsx(_components_common_ALink__WEBPACK_IMPORTED_MODULE_8__.default, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 19
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_23__.IoMdHome, {
    style: {
      fontSize: "16px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 21
    }
  }))), __jsx("li", {
    className: "breadcrumb-item active",
    "aria-current": "page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 17
    }
  }, __jsx(_components_common_ALink__WEBPACK_IMPORTED_MODULE_8__.default, {
    href: "/pages/account",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 19
    }
  }, "My account")), __jsx("li", {
    className: "breadcrumb-item active",
    "aria-current": "page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 17
    }
  }, __jsx(_components_common_ALink__WEBPACK_IMPORTED_MODULE_8__.default, {
    className: "activeitem",
    href: "/pages/orders",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 19
    }
  }, "Orders")))))), __jsx("div", {
    className: " d-flex flex-column align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
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
      lineNumber: 349,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 13
    }
  }, __jsx(_components_common_ALink__WEBPACK_IMPORTED_MODULE_8__.default, {
    href: "/pages/account",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 15
    }
  }, "My Account")), __jsx("li", {
    className: "active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 13
    }
  }, __jsx(_components_common_ALink__WEBPACK_IMPORTED_MODULE_8__.default, {
    href: "/pages/orders",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
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
      lineNumber: 362,
      columnNumber: 9
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 11
    }
  }, "Orders")), __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "success-alert",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 11
    }
  }, flag === 1 ? __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 27
    }
  }, "Product successfully removed.") : "", flag === 2 ? __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 27
    }
  }, "Product added to cart successfully.") : ""), orders.length === 0 ? __jsx("div", {
    className: "wishlist-table-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "table table-wishlist mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "wishlist-empty-page text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 17
    }
  }, __jsx("i", {
    "class": "fa fa-shopping-bag",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 19
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 19
    }
  }, "No products Ordered"), __jsx(_components_common_ALink__WEBPACK_IMPORTED_MODULE_8__.default, {
    href: "/shop",
    className: "btn btn-dark btn-add-cart product-type-simple btn-shop font1 w-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 19
    }
  }, "go shop", " ")))) : __jsx("div", {
    className: "wishlist-table-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 13
    }
  }, __jsx("table", {
    className: "table table-wishlist mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 15
    }
  }, __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 17
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
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
      lineNumber: 400,
      columnNumber: 21
    }
  }, "Product"), __jsx("th", {
    className: "status-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 21
    }
  }), __jsx("th", {
    className: "status-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 21
    }
  }, "Order Id"), __jsx("th", {
    className: "status-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 21
    }
  }, "Date"), __jsx("th", {
    className: "status-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 21
    }
  }, "Status"), __jsx("th", {
    className: "price-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 21
    }
  }, "Total Price"), __jsx("th", {
    className: "action-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 21
    }
  }))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 17
    }
  }, orders.map(function (item, index) {
    return __jsx("tr", {
      key: "wishlist-item" + index,
      className: "product-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 416,
        columnNumber: 21
      }
    }, __jsx("td", {
      className: "media-with-lazy",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 417,
        columnNumber: 23
      }
    }, __jsx("figure", {
      className: "product-image-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418,
        columnNumber: 25
      }
    }, __jsx(_components_common_ALink__WEBPACK_IMPORTED_MODULE_8__.default, {
      href: "/product/default/".concat(item.productId),
      className: "product-image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419,
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
        lineNumber: 423,
        columnNumber: 29
      }
    })))), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 434,
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
        lineNumber: 440,
        columnNumber: 25
      }
    }, __jsx(_components_common_ALink__WEBPACK_IMPORTED_MODULE_8__.default, {
      href: "/product/default/".concat(item.productId),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 444,
        columnNumber: 27
      }
    }, item.productName.split(" ").slice(0, 4).join(" "), "..."))), __jsx("td", {
      style: {
        color: "black"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 450,
        columnNumber: 23
      }
    }, item.orderId), __jsx("td", {
      style: {
        color: "black"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 451,
        columnNumber: 23
      }
    }, dayjs__WEBPACK_IMPORTED_MODULE_14___default()(item.orderDate).format("YYYY/MM/DD")), __jsx("td", {
      style: {
        color: (item === null || item === void 0 ? void 0 : item.returnStatus) !== "NA" ? getReturnStatusColor(item === null || item === void 0 ? void 0 : item.returnStatus) : getStatusColor(item === null || item === void 0 ? void 0 : item.shippingStatus)
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 454,
        columnNumber: 23
      }
    }, (item === null || item === void 0 ? void 0 : item.returnStatus) !== "NA" ? "".concat(item === null || item === void 0 ? void 0 : item.returnStatus, "-(Return)") : item === null || item === void 0 ? void 0 : item.shippingStatus), __jsx("td", {
      style: {
        color: "black"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 460,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "price-box",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 461,
        columnNumber: 25
      }
    }, __jsx((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null, __jsx("span", {
      className: "product-price",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 464,
        columnNumber: 29
      }
    }, "OMR", " ", parseFloat(Number(item.sellingPrice) + Number(item === null || item === void 0 ? void 0 : item.shippingCharge)).toFixed(2))))), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 475,
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
        lineNumber: 476,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "order_update_menu_container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 482,
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
        lineNumber: 485,
        columnNumber: 31
      }
    }, "Cancel") : __jsx((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null, (item === null || item === void 0 ? void 0 : item.shippingStatus) === "DELIVERED" && (item === null || item === void 0 ? void 0 : item.returnStatus) === "NA"(__jsx("div", {
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
        lineNumber: 527,
        columnNumber: 35
      }
    }, "Return"))), __jsx("button", {
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
        lineNumber: 576,
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
        lineNumber: 596,
        columnNumber: 31
      }
    }, __jsx("path", {
      fill: item !== null && item !== void 0 && item.invoice ? "black" : "grey",
      d: "M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 605,
        columnNumber: 33
      }
    })), "Invoice")))));
  }))), loading || orders && orders.length && __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627,
      columnNumber: 19
    }
  }, __jsx("nav", {
    className: "toolbox toolbox-pagination border-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 628,
      columnNumber: 21
    }
  }, __jsx(_components_features_pagination__WEBPACK_IMPORTED_MODULE_16__.default, {
    totalPage: totalPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 629,
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
      lineNumber: 640,
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
      lineNumber: 649,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFnZXMvb3JkZXJzLmpzIl0sIm5hbWVzIjpbIkdFVF9PUkRFUlMiLCJncWwiLCJDQU5DRUxfT1JERVIiLCJSRVRVUk5fT1JERVIiLCJET1dOTE9BRF9JTlZPSUNFIiwiT3JkZXJzIiwicHJvcHMiLCJ3aXNobGlzdCIsImFkZFRvQ2FydCIsInJlbW92ZUZyb21XaXNobGlzdCIsInNob3dRdWlja1ZpZXciLCJ1c2VTdGF0ZSIsImZsYWciLCJzZXRGbGFnIiwib3JkZXJzIiwic2V0T3JkZXJzIiwicm91dGVyIiwidXNlUm91dGVyIiwicGFnZSIsInF1ZXJ5IiwicGFyc2VJbnQiLCJwZXJQYWdlIiwic2V0UGVyUGFnZSIsIm9uTW92ZUZyb21Ub1dpc2hsaXQiLCJlIiwiaXRlbSIsInByZXZlbnREZWZhdWx0IiwicmVtb3ZlUHJvZHVjdCIsIm9uUXVpY2tWaWV3Q2xpY2siLCJwcm9kdWN0Iiwic2x1ZyIsImdldFN0YXR1c0NvbG9yIiwic3RhdHVzIiwiZ2V0UmV0dXJuU3RhdHVzQ29sb3IiLCJ1c2VNdXRhdGlvbiIsImNhbmNlbFVzZXJPcmRlclByb2R1Y3QiLCJkb3dubG9hZEludm9pY2UiLCJyZXR1cm5PcmRlciIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiaW5wdXQiLCJzaXplIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsInJlZmV0Y2giLCJ0b3RhbFBhZ2UiLCJnZXRVc2VyT3JkZXJQcm9kdWN0cyIsIm1heFJlY29yZHMiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwicmVjb3JkcyIsIm9yZGVyQ2FuY2VsIiwiaWQiLCJ3aW5kb3ciLCJjb25maXJtIiwiX2lkIiwicmVzcG9uc2UiLCJ0b2FzdCIsInBhZGRpbmciLCJsb2ciLCJoYW5kbGVEb3dubG9hZCIsImludm9pY2UiLCJ1cmwiLCJnZXRVc2VySXZvaWNlU2lnbmVkVXJsIiwib3BlbiIsIm1lc3NhZ2UiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ0b2dnbGVEcm9wZG93biIsIml0ZW1JZCIsInByZXYiLCJzaG93UmV0dXJuRm9ybU1vZGFsIiwic2V0U2hvd1JldHVybkZvcm1Nb2RhbCIsIm9yZGVyUHJvZHVjdElkRm9yUmV0dXJuIiwic2V0T3JkZXJQcm9kdWN0SWRGb3JSZXR1cm4iLCJvcmRlcklkRm9yUmV0dXJuIiwic2V0T3JkZXJJZEZvclJldHVybiIsImlzU2hpcHBpbmdBZGRyZXNzIiwic2V0SXNTaGlwcGluZ0FkZHJlc3MiLCJpc0FjY2VwdFBvbGljeSIsInNldElzQWNjZXB0UG9saWN5Iiwic2hvd1BvbGljeU1vZGFsIiwic2V0U2hvd1BvbGljeU1vZGFsIiwiY2xvc2VNb2RhbCIsImhhbmRsZU9yZGVyUmV0dXJuIiwiZm9ybURhdGEiLCJiYW5rRGV0YWlscyIsInJldHVybkFkZHJlc3MiLCJyZXR1cm5Vc2VyUmVhc29uIiwiaW1hZ2UiLCJFcnJvciIsImVycm9ycyIsInJldHVyblVzZXJPcmRlclByb2R1Y3QiLCJmb250U2l6ZSIsImJhY2tncm91bmRDb2xvciIsIndpZHRoIiwibWFyZ2luVG9wIiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyQ29sb3IiLCJsZW5ndGgiLCJwYWRkaW5nTGVmdCIsIm1hcCIsImluZGV4IiwicHJvZHVjdElkIiwiZmlsZVVSTCIsImZvbnRXZWlnaHQiLCJwcm9kdWN0TmFtZSIsInNwbGl0Iiwic2xpY2UiLCJqb2luIiwiY29sb3IiLCJvcmRlcklkIiwiZGF5anMiLCJvcmRlckRhdGUiLCJmb3JtYXQiLCJyZXR1cm5TdGF0dXMiLCJzaGlwcGluZ1N0YXR1cyIsInBhcnNlRmxvYXQiLCJOdW1iZXIiLCJzZWxsaW5nUHJpY2UiLCJzaGlwcGluZ0NoYXJnZSIsInRvRml4ZWQiLCJib3JkZXIiLCJjdXJzb3IiLCJtYXJnaW5SaWdodCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibGlzdCIsIndpdGhBcG9sbG8iLCJzc3IiLCJjb25uZWN0IiwiV2lzaGxpc3RBY3Rpb24iLCJDYXJ0QWN0aW9uIiwiTW9kYWxBY3Rpb24iXSwibWFw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LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExhenlMb2FkSW1hZ2UgfSBmcm9tIFwicmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IEFMaW5rIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9BTGlua1wiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIFdpc2hsaXN0QWN0aW9uIH0gZnJvbSBcIi4uLy4uL3N0b3JlL3dpc2hsaXN0XCI7XHJcbmltcG9ydCB7IGFjdGlvbnMgYXMgQ2FydEFjdGlvbiB9IGZyb20gXCIuLi8uLi9zdG9yZS9jYXJ0XCI7XHJcbmltcG9ydCB7IGFjdGlvbnMgYXMgTW9kYWxBY3Rpb24gfSBmcm9tIFwiLi4vLi4vc3RvcmUvbW9kYWxcIjtcclxuaW1wb3J0IHsgSW9NZEhvbWUgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcclxuaW1wb3J0IHsgZ3FsLCB1c2VMYXp5UXVlcnksIHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgd2l0aEFwb2xsbyBmcm9tIFwiLi4vLi4vc2VydmVyL2Fwb2xsb1wiO1xyXG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gXCJyZWFjdC1oZWxtZXRcIjtcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmVhdHVyZXMvcGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZlYXR1cmVzL2Ryb3Bkb3duL0Ryb3Bkb3duXCI7XHJcbmltcG9ydCBSZXR1cm5SZXF1ZXN0Rm9ybU1vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZlYXR1cmVzL21vZGFscy9SZXR1cm5SZXF1ZXN0Rm9ybU1vZGFsXCI7XHJcbmltcG9ydCBDdXN0b21Nb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mZWF0dXJlcy9tb2RhbHMvQ3VzdG9tTW9kYWxcIjtcclxuaW1wb3J0IFJldHVyblBvbGljeU1vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZlYXR1cmVzL21vZGFscy9SZXR1cm5Qb2xpY3lNb2RhbFwiO1xyXG5cclxuY29uc3QgR0VUX09SREVSUyA9IGdxbGBcclxuICBxdWVyeSBHZXRVc2VyT3JkZXJQcm9kdWN0cygkaW5wdXQ6IEdldFVzZXJPcmRlclByb2R1Y3RzSW5wdXQhKSB7XHJcbiAgICBnZXRVc2VyT3JkZXJQcm9kdWN0cyhpbnB1dDogJGlucHV0KSB7XHJcbiAgICAgIG1heFJlY29yZHNcclxuICAgICAgcmVjb3JkcyB7XHJcbiAgICAgICAgX2lkXHJcbiAgICAgICAgcHJvZHVjdElkXHJcbiAgICAgICAgdmVuZG9ySWRcclxuICAgICAgICBvcmRlcklkXHJcbiAgICAgICAgaXRlbUlkXHJcbiAgICAgICAgcHJvZHVjdE5hbWVcclxuICAgICAgICBzaG9ydERlc2NyaXB0aW9uXHJcbiAgICAgICAgc2t1SWRcclxuICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICBmaWxlVHlwZVxyXG4gICAgICAgICAgZmlsZVVSTFxyXG4gICAgICAgICAgbWltZVR5cGVcclxuICAgICAgICAgIG9yaWdpbmFsTmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm5QZXJpb2RcclxuICAgICAgICBtcnBcclxuICAgICAgICBzZWxsaW5nUHJpY2VcclxuICAgICAgICBzaGlwcGluZ0NoYXJnZVxyXG4gICAgICAgIHBheW1lbnRNb2RlXHJcbiAgICAgICAgcGF5bWVudFN0YXR1c1xyXG4gICAgICAgIG9yZGVyRGF0ZVxyXG4gICAgICAgIHNoaXBwaW5nU3RhdHVzXHJcbiAgICAgICAgc2hpcHBlZERhdGVcclxuICAgICAgICBkZWxpdmVyeURhdGVcclxuICAgICAgICByZXR1cm5TdGF0dXNcclxuICAgICAgICByZXR1cm5EYXRlXHJcbiAgICAgICAgcmV0dXJuUmVxdWVzdERhdGVcclxuICAgICAgICByZXR1cm5SZWplY3RlZERhdGVcclxuICAgICAgICByZXR1cm5Vc2VyUmVhc29uXHJcbiAgICAgICAgcmVmdW5kU3RhdHVzXHJcbiAgICAgICAgcmVmdW5kQW1vdW50XHJcbiAgICAgICAgcmVmdW5kRGF0ZVxyXG4gICAgICAgIGNhbmNlbGxlZERhdGVcclxuICAgICAgICBjYW5jZWxVc2VyUmVhc29uXHJcbiAgICAgICAgY291cmllcklkXHJcbiAgICAgICAgaW52b2ljZU51bWJlclxyXG4gICAgICAgIGludm9pY2Uge1xyXG4gICAgICAgICAgZmlsZVR5cGVcclxuICAgICAgICAgIGZpbGVVUkxcclxuICAgICAgICAgIG1pbWVUeXBlXHJcbiAgICAgICAgICBvcmlnaW5hbE5hbWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDQU5DRUxfT1JERVIgPSBncWxgXHJcbiAgbXV0YXRpb24gQ2FuY2VsVXNlck9yZGVyUHJvZHVjdCgkaW5wdXQ6IENhbmNlbFVzZXJPcmRlclByb2R1Y3RJbnB1dCEpIHtcclxuICAgIGNhbmNlbFVzZXJPcmRlclByb2R1Y3QoaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgICBfaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBSRVRVUk5fT1JERVIgPSBncWxgXHJcbiAgbXV0YXRpb24gUmV0dXJuVXNlck9yZGVyUHJvZHVjdChcclxuICAgICRpbnB1dDogUmV0dXJuVXNlck9yZGVyUHJvZHVjdElucHV0IVxyXG4gICAgJGltYWdlOiBbVXBsb2FkXVxyXG4gICkge1xyXG4gICAgcmV0dXJuVXNlck9yZGVyUHJvZHVjdChpbnB1dDogJGlucHV0LCBpbWFnZTogJGltYWdlKSB7XHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IERPV05MT0FEX0lOVk9JQ0UgPSBncWxgXHJcbiAgbXV0YXRpb24gR2V0VXNlckl2b2ljZVNpZ25lZFVybCgkaW5wdXQ6IEdldFVzZXJJdm9pY2VVcmxJbnB1dCEpIHtcclxuICAgIGdldFVzZXJJdm9pY2VTaWduZWRVcmwoaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgICB1cmxcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBPcmRlcnMocHJvcHMpIHtcclxuICBjb25zdCB7IHdpc2hsaXN0LCBhZGRUb0NhcnQsIHJlbW92ZUZyb21XaXNobGlzdCwgc2hvd1F1aWNrVmlldyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2ZsYWcsIHNldEZsYWddID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW29yZGVycywgc2V0T3JkZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBwYWdlID0gcm91dGVyLnF1ZXJ5LnBhZ2UgPyBwYXJzZUludChyb3V0ZXIucXVlcnkucGFnZSkgOiAwO1xyXG4gIGNvbnN0IFtwZXJQYWdlLCBzZXRQZXJQYWdlXSA9IHVzZVN0YXRlKDUpO1xyXG5cclxuICBjb25zdCBvbk1vdmVGcm9tVG9XaXNobGl0ID0gKGUsIGl0ZW0pID0+IHtcclxuICAgIHNldEZsYWcoMik7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBhZGRUb0NhcnQoaXRlbSk7XHJcbiAgICByZW1vdmVGcm9tV2lzaGxpc3QoaXRlbSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlUHJvZHVjdCA9IChlLCBpdGVtKSA9PiB7XHJcbiAgICBzZXRGbGFnKDEpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgcmVtb3ZlRnJvbVdpc2hsaXN0KGl0ZW0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uUXVpY2tWaWV3Q2xpY2sgPSAoZSwgcHJvZHVjdCkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2hvd1F1aWNrVmlldyhwcm9kdWN0LnNsdWcpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFN0YXR1c0NvbG9yID0gKHN0YXR1cykgPT4ge1xyXG4gICAgc3dpdGNoIChzdGF0dXMpIHtcclxuICAgICAgY2FzZSBcIlBFTkRJTkdcIjpcclxuICAgICAgICByZXR1cm4gXCIjRkZBNTAwXCI7XHJcbiAgICAgIGNhc2UgXCJJTl9QUk9HUkVTU1wiOlxyXG4gICAgICAgIHJldHVybiBcIiNGRkE1MDBcIjtcclxuICAgICAgY2FzZSBcIkNPTVBMRVRFRFwiOlxyXG4gICAgICAgIHJldHVybiBcIiM0NDk2MURcIjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gXCIjMDAwMDAwXCI7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0UmV0dXJuU3RhdHVzQ29sb3IgPSAoc3RhdHVzKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHN0YXR1cykge1xyXG4gICAgICBjYXNlIFwiUEVORElOR1wiOlxyXG4gICAgICAgIHJldHVybiBcIiNGRkMxMDdcIjtcclxuICAgICAgY2FzZSBcIkFQUFJPVkVEXCI6XHJcbiAgICAgICAgcmV0dXJuIFwiIzI4QTc0NVwiO1xyXG4gICAgICBjYXNlIFwiUkVKRUNURURcIjpcclxuICAgICAgICByZXR1cm4gXCIjREMzNTQ1XCI7XHJcbiAgICAgIGNhc2UgXCJDT0xMRUNURURcIjpcclxuICAgICAgICByZXR1cm4gXCIjMTdBMkI4XCI7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIFwiIzE3QTJCOFwiO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtjYW5jZWxVc2VyT3JkZXJQcm9kdWN0XSA9IHVzZU11dGF0aW9uKENBTkNFTF9PUkRFUik7XHJcbiAgY29uc3QgW2Rvd25sb2FkSW52b2ljZV0gPSB1c2VNdXRhdGlvbihET1dOTE9BRF9JTlZPSUNFKTtcclxuICBjb25zdCBbcmV0dXJuT3JkZXJdID0gdXNlTXV0YXRpb24oUkVUVVJOX09SREVSKTtcclxuXHJcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciwgcmVmZXRjaCB9ID0gdXNlUXVlcnkoR0VUX09SREVSUywge1xyXG4gICAgdmFyaWFibGVzOiB7IGlucHV0OiB7IHBhZ2U6IHBhZ2UgfHwgMCwgc2l6ZTogcGVyUGFnZSB9IH0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRvdGFsUGFnZSA9IGRhdGFcclxuICAgID8gcGFyc2VJbnQoZGF0YT8uZ2V0VXNlck9yZGVyUHJvZHVjdHM/Lm1heFJlY29yZHMgLyBwZXJQYWdlKSArXHJcbiAgICAgIChkYXRhPy5nZXRVc2VyT3JkZXJQcm9kdWN0cz8ubWF4UmVjb3JkcyAlIHBlclBhZ2UgPyAxIDogMClcclxuICAgIDogMDtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgb3JkZXJzOlwiLCBlcnJvcik7XHJcbiAgICB9IGVsc2UgaWYgKGRhdGEpIHtcclxuICAgICAgc2V0T3JkZXJzKGRhdGEuZ2V0VXNlck9yZGVyUHJvZHVjdHMucmVjb3JkcyB8fCBbXSk7XHJcbiAgICB9XHJcbiAgfSwgW2RhdGEsIGVycm9yXSk7XHJcblxyXG4gIGNvbnN0IG9yZGVyQ2FuY2VsID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoIXdpbmRvdy5jb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNhbmNlbCB0aGlzIG9yZGVyP1wiKSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2FuY2VsVXNlck9yZGVyUHJvZHVjdCh7XHJcbiAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICBpbnB1dDoge1xyXG4gICAgICAgICAgICBfaWQ6IGlkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgcmVmZXRjaCgpO1xyXG4gICAgICB0b2FzdC5zdWNjZXNzKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4XCIgfX0+WW91ciBvcmRlciBoYXMgYmVlbiBjYW5jZWxlZC48L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEb3dubG9hZCA9IGFzeW5jIChfaWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGludm9pY2UgPSBhd2FpdCBkb3dubG9hZEludm9pY2Uoe1xyXG4gICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgaW5wdXQ6IHtcclxuICAgICAgICAgICAgX2lkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHVybCA9IGludm9pY2UuZGF0YS5nZXRVc2VySXZvaWNlU2lnbmVkVXJsLnVybDtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJpbnZvaWNlXCIsIHVybCk7XHJcbiAgICAgIC8vIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgIC8vIGxpbmsuaHJlZiA9IHVybDtcclxuICAgICAgLy8gbGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgJ2ludm9pY2UucGRmJyk7XHJcbiAgICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICAgIC8vIGxpbmsuY2xpY2soKTtcclxuICAgICAgLy8gZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcclxuICAgICAgd2luZG93Lm9wZW4odXJsLCBcIl9ibGFua1wiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRvYXN0LmVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vPT09PT09PT09PT09PT09PT09PT09PT09PVJFVFVSTiBPUkRFUj09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXFxcXHJcbiAgLy9Ecm9wIERvd25cclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgdG9nZ2xlRHJvcGRvd24gPSAoZSwgaXRlbUlkKSA9PiB7XHJcbiAgICBzZXRJc09wZW4oKHByZXYpID0+IChpdGVtSWQgPT09IHByZXYgPyBcIlwiIDogaXRlbUlkKSk7XHJcbiAgfTtcclxuXHJcbiAgLy9SZXR1cm4gb3JkZXJcclxuICBjb25zdCBbc2hvd1JldHVybkZvcm1Nb2RhbCwgc2V0U2hvd1JldHVybkZvcm1Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29yZGVyUHJvZHVjdElkRm9yUmV0dXJuLCBzZXRPcmRlclByb2R1Y3RJZEZvclJldHVybl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbb3JkZXJJZEZvclJldHVybiwgc2V0T3JkZXJJZEZvclJldHVybl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaXNTaGlwcGluZ0FkZHJlc3MsIHNldElzU2hpcHBpbmdBZGRyZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy9yZXR1cm4gcG9saWN5XHJcbiAgY29uc3QgW2lzQWNjZXB0UG9saWN5LCBzZXRJc0FjY2VwdFBvbGljeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dQb2xpY3lNb2RhbCwgc2V0U2hvd1BvbGljeU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcclxuICAgIHNldFNob3dSZXR1cm5Gb3JtTW9kYWwoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlT3JkZXJSZXR1cm4gPSBhc3luYyAoZm9ybURhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgYmFua0RldGFpbHMsIHJldHVybkFkZHJlc3MsIHJldHVyblVzZXJSZWFzb24sIGltYWdlIH0gPSBmb3JtRGF0YTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKGJhbmtEZXRhaWxzLCBcIkJBTksgREVUQUlMU1wiKTtcclxuICAgICAgY29uc29sZS5sb2cocmV0dXJuQWRkcmVzcywgXCJSRVRVUk4gQUREUkVTU1wiKTtcclxuICAgICAgY29uc29sZS5sb2cocmV0dXJuVXNlclJlYXNvbiwgXCJSRVRVUk4gVVNFUiBSRUFTT05cIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKGltYWdlLCBcIiA9IElNQUdFU1wiKTtcclxuXHJcbiAgICAgIGlmICghYmFua0RldGFpbHMpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCYW5rIERldGFpbHMgYXJlIHJlcXVpcmVkIVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXJldHVybkFkZHJlc3MpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXR1cm4gYWRkcmVzcyBpcyByZXF1aXJlZCFcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFyZXR1cm5Vc2VyUmVhc29uKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVhc29uIGlzIHJlcXVpcmVkIVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgdmFyaWFibGVzID0ge1xyXG4gICAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgICBfaWQ6IG9yZGVyUHJvZHVjdElkRm9yUmV0dXJuLFxyXG4gICAgICAgICAgYmFua0RldGFpbHMsXHJcbiAgICAgICAgICByZXR1cm5BZGRyZXNzLFxyXG4gICAgICAgICAgcmV0dXJuVXNlclJlYXNvbixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGltYWdlLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc29sZS5sb2codmFyaWFibGVzLCBcIlZBUklBQkxFU1wiKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3JzIH0gPSBhd2FpdCByZXR1cm5PcmRlcih7XHJcbiAgICAgICAgdmFyaWFibGVzLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChlcnJvcnMpIGNvbnNvbGUubG9nKGVycm9ycywgXCJFUlJPUlNcIik7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLCAnUkVTUE9OU0UgUkVUVVJOIFNVQk1JVCcpXHJcblxyXG4gICAgICBpZiAoZGF0YT8ucmV0dXJuVXNlck9yZGVyUHJvZHVjdD8uX2lkKSB7XHJcbiAgICAgICAgdG9hc3Quc3VjY2VzcyhcclxuICAgICAgICAgIFwiWW91ciBvcmRlciByZXR1cm4gcmVxdWVzdCBoYXMgYmVlbiBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5LlwiXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdG9hc3QuZXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWxtZXQ+XHJcbiAgICAgICAgPHRpdGxlPk9yZGVycyB8IEFyYWIgRGVhbHM8L3RpdGxlPlxyXG4gICAgICA8L0hlbG1ldD5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8bmF2IGFyaWEtbGFiZWw9XCJicmVhZGNydW1iXCIgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1uYXZcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYlwiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW9NZEhvbWUgc3R5bGU9e3sgZm9udFNpemU6IFwiMTZweFwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxpIGNsYXNzTmFtZT1cImljb24taG9tZVwiID48L2k+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWl0ZW0gYWN0aXZlXCIgYXJpYS1jdXJyZW50PVwicGFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9wYWdlcy9hY2NvdW50XCI+TXkgYWNjb3VudDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWl0ZW0gYWN0aXZlXCIgYXJpYS1jdXJyZW50PVwicGFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8QUxpbmsgY2xhc3NOYW1lPVwiYWN0aXZlaXRlbVwiIGhyZWY9XCIvcGFnZXMvb3JkZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgT3JkZXJzXHJcbiAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXJcIj4gKi99XHJcblxyXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyXCI+ICovfVxyXG4gICAgICAgIHsvKiA8bmF2IGFyaWEtbGFiZWw9XCJicmVhZGNydW1iXCIgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJicmVhZGNydW1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbVwiPjxBTGluayBocmVmPVwiL1wiPkhvbWU8L0FMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbSBhY3RpdmVcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9yZGVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L25hdj4gKi99XHJcblxyXG4gICAgICAgIHsvKiA8aDE+b3JkZXJzPC9oMT5cclxuICAgICAgICAgKi99XHJcblxyXG4gICAgICAgIHsvKiA8dWwgY2xhc3NOYW1lPVwiY2hlY2tvdXQtcHJvZ3Jlc3MtYmFyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3BhZ2VzL2FjY291bnRcIj5NeSBBY2NvdW50PC9BTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3BhZ2VzL29yZGVyc1wiPk9yZGVyczwvQUxpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gKi99XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDx1bFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjaGVja291dC1wcm9ncmVzcy1iYXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgZmxleC13cmFwXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNGOUY5RjlcIiwgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9wYWdlcy9hY2NvdW50XCI+TXkgQWNjb3VudDwvQUxpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhY3RpdmVcIj5cclxuICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9wYWdlcy9vcmRlcnNcIj5PcmRlcnM8L0FMaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyXCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCIycmVtXCIsXHJcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWRcIixcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiI0UyRTJFMlwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aDQ+T3JkZXJzPC9oND5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWNjZXNzLWFsZXJ0XCI+XHJcbiAgICAgICAgICAgIHtmbGFnID09PSAxID8gPHA+UHJvZHVjdCBzdWNjZXNzZnVsbHkgcmVtb3ZlZC48L3A+IDogXCJcIn1cclxuICAgICAgICAgICAge2ZsYWcgPT09IDIgPyA8cD5Qcm9kdWN0IGFkZGVkIHRvIGNhcnQgc3VjY2Vzc2Z1bGx5LjwvcD4gOiBcIlwifVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ3aXNobGlzdC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5NeSB3aXNobGlzdCBvbiBQb3J0byBTaG9wIDM2PC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgIHtvcmRlcnMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpc2hsaXN0LXRhYmxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtd2lzaGxpc3QgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aXNobGlzdC1lbXB0eS1wYWdlIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtc2hvcHBpbmctYmFnXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8cD5ObyBwcm9kdWN0cyBPcmRlcmVkPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8QUxpbmtcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Nob3BcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayBidG4tYWRkLWNhcnQgcHJvZHVjdC10eXBlLXNpbXBsZSBidG4tc2hvcCBmb250MSB3LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgZ28gc2hvcHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lzaGxpc3QtdGFibGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXdpc2hsaXN0IG1iLTBcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGh1bWJuYWlsLWNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nTGVmdDogXCIwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFByb2R1Y3RcclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJzdGF0dXMtY29sXCI+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwic3RhdHVzLWNvbFwiPk9yZGVyIElkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwic3RhdHVzLWNvbFwiPkRhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJzdGF0dXMtY29sXCI+U3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHJpY2UtY29sXCI+VG90YWwgUHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJhY3Rpb24tY29sXCI+PC90aD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIHtvcmRlcnMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e1wid2lzaGxpc3QtaXRlbVwiICsgaW5kZXh9IGNsYXNzTmFtZT1cInByb2R1Y3Qtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibWVkaWEtd2l0aC1sYXp5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvcHJvZHVjdC9kZWZhdWx0LyR7aXRlbS5wcm9kdWN0SWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3QtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInByb2R1Y3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1hZ2UuZmlsZVVSTH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkPXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiODBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI4MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9yZGVyLWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGg1IGNsYXNzTmFtZT1cInByb2R1Y3QtdGl0bGVcIiBzdHlsZT17e2ZvbnRXZWlnaHQ6XCI3MDBcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXtgL3Byb2R1Y3QvZGVmYXVsdC8ke2l0ZW0ucHJvZHVjdElkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucHJvZHVjdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3QtdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiNzAwXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPXtgL3Byb2R1Y3QvZGVmYXVsdC8ke2l0ZW0ucHJvZHVjdElkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucHJvZHVjdE5hbWUuc3BsaXQoXCIgXCIpLnNsaWNlKDAsIDQpLmpvaW4oXCIgXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT57aXRlbS5vcmRlcklkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RheWpzKGl0ZW0ub3JkZXJEYXRlKS5mb3JtYXQoXCJZWVlZL01NL0REXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogaXRlbT8ucmV0dXJuU3RhdHVzICE9PSBcIk5BXCIgPyBnZXRSZXR1cm5TdGF0dXNDb2xvcihpdGVtPy5yZXR1cm5TdGF0dXMpOiBnZXRTdGF0dXNDb2xvcihpdGVtPy5zaGlwcGluZ1N0YXR1cykgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0/LnJldHVyblN0YXR1cyAhPT0gXCJOQVwiID8gYCR7aXRlbT8ucmV0dXJuU3RhdHVzfS0oUmV0dXJuKWA6IGl0ZW0/LnNoaXBwaW5nU3RhdHVzIH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2UtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJvbGQtcHJpY2VcIj57J09NUiAnICsgaXRlbS5wcmljZVsgMSBdLnRvRml4ZWQoIDIgKSB9PC9zcGFuPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT01Se1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFyc2VGbG9hdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoaXRlbS5zZWxsaW5nUHJpY2UpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihpdGVtPy5zaGlwcGluZ0NoYXJnZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS50b0ZpeGVkKDIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVEcm9wZG93bj17dG9nZ2xlRHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUlkPXtpdGVtPy5pdGVtSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNPcGVuPXtpc09wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNPcGVuPXtzZXRJc09wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyX3VwZGF0ZV9tZW51X2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0/LnNoaXBwaW5nU3RhdHVzICE9PSBcIkRFTElWRVJFRFwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtPy5zaGlwcGluZ1N0YXR1cyAhPT0gXCJDQU5DRUxFRFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JkZXJfdXBkYXRlX21lbnVfaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJRdWljayBWaWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJDYW5jZWwoaXRlbS5faWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7aXRlbT8uc2hpcHBpbmdTdGF0dXMgIT09IFwiUEVORElOR1wiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtPy5pbnZvaWNlICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9yZGVyX3VwZGF0ZV9tZW51X2l0ZW0gXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlF1aWNrIFZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEb3dubG9hZChpdGVtLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc09wZW4oZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNSAyMGgxNHYtMkg1ek0xOSA5aC00VjNIOXY2SDVsNyA3elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludm9pY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbT8uc2hpcHBpbmdTdGF0dXMgPT09IFwiREVMSVZFUkVEXCIgJiYgaXRlbT8ucmV0dXJuU3RhdHVzID09PSBcIk5BXCIgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmRlcl91cGRhdGVfbWVudV9pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1BvbGljeU1vZGFsKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE9yZGVyUHJvZHVjdElkRm9yUmV0dXJuKGl0ZW0/Ll9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3JkZXJJZEZvclJldHVybihpdGVtPy5vcmRlcklkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc09wZW4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHshaXRlbT8uaW52b2ljZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JkZXJfdXBkYXRlX21lbnVfaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JkZXJfdXBkYXRlX21lbnVfaXRlbSBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlF1aWNrIFZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRG93bmxvYWQoaXRlbS5faWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNSAyMGgxNHYtMkg1ek0xOSA5aC00VjNIOXY2SDVsNyA3elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludm9pY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9yZGVyX3VwZGF0ZV9tZW51X2l0ZW0gXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJRdWljayBWaWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0/Lmludm9pY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyBib3JkZXI6IFwibm9uZVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImdyZXlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJub3QtYWxsb3dlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0/Lmludm9pY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURvd25sb2FkKGl0ZW0uX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzT3BlbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD17aXRlbT8uaW52b2ljZSA/IFwiYmxhY2tcIiA6IFwiZ3JleVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk01IDIwaDE0di0ySDV6TTE5IDloLTRWM0g5djZINWw3IDd6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW52b2ljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwib3JkZXJfdXBkYXRlX21lbnVfaXRlbVwiPkNhbmNlbDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlcl91cGRhdGVfbWVudV9pdGVtXCI+UmV0dXJuPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyX3VwZGF0ZV9tZW51X2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW52b2ljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICB7bG9hZGluZyB8fFxyXG4gICAgICAgICAgICAgICAgKG9yZGVycyAmJiBvcmRlcnMubGVuZ3RoICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInRvb2xib3ggdG9vbGJveC1wYWdpbmF0aW9uIGJvcmRlci0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbiB0b3RhbFBhZ2U9e3RvdGFsUGFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgICB7LyogUmV0dXJuIHN1Ym1pdCBtb2RhbCAqL31cclxuICAgICAge3Nob3dSZXR1cm5Gb3JtTW9kYWwgJiYgKFxyXG4gICAgICAgIDxSZXR1cm5SZXF1ZXN0Rm9ybU1vZGFsXHJcbiAgICAgICAgICBpc09wZW49e3Nob3dSZXR1cm5Gb3JtTW9kYWx9XHJcbiAgICAgICAgICBzZXRJc09wZW49e3NldFNob3dSZXR1cm5Gb3JtTW9kYWx9XHJcbiAgICAgICAgICBoYW5kbGVTdWJtaXQ9e2hhbmRsZU9yZGVyUmV0dXJufVxyXG4gICAgICAgICAgb3JkZXJJZD17b3JkZXJJZEZvclJldHVybn1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICB7LyogUG9saWN5IG1vZGFsICovfVxyXG4gICAgICB7c2hvd1BvbGljeU1vZGFsICYmIChcclxuICAgICAgICA8UmV0dXJuUG9saWN5TW9kYWxcclxuICAgICAgICAgIGlzT3Blbj17c2hvd1BvbGljeU1vZGFsfVxyXG4gICAgICAgICAgc2V0SXNPcGVuPXtzZXRTaG93UG9saWN5TW9kYWx9XHJcbiAgICAgICAgICBoYW5kbGVTdWJtaXQ9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNBY2NlcHRQb2xpY3kodHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldFNob3dSZXR1cm5Gb3JtTW9kYWwodHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldFNob3dQb2xpY3lNb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgd2lzaGxpc3Q6IHN0YXRlLndpc2hsaXN0Lmxpc3QgPyBzdGF0ZS53aXNobGlzdC5saXN0IDogW10sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oeyBzc3I6IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgfSkoXHJcbiAgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcclxuICAgIC4uLldpc2hsaXN0QWN0aW9uLFxyXG4gICAgLi4uQ2FydEFjdGlvbixcclxuICAgIC4uLk1vZGFsQWN0aW9uLFxyXG4gIH0pKE9yZGVycylcclxuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==