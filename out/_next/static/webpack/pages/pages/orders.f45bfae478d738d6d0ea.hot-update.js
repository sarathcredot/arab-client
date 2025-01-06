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
        lineNumber: 527,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFnZXMvb3JkZXJzLmpzIl0sIm5hbWVzIjpbIkdFVF9PUkRFUlMiLCJncWwiLCJDQU5DRUxfT1JERVIiLCJSRVRVUk5fT1JERVIiLCJET1dOTE9BRF9JTlZPSUNFIiwiT3JkZXJzIiwicHJvcHMiLCJ3aXNobGlzdCIsImFkZFRvQ2FydCIsInJlbW92ZUZyb21XaXNobGlzdCIsInNob3dRdWlja1ZpZXciLCJ1c2VTdGF0ZSIsImZsYWciLCJzZXRGbGFnIiwib3JkZXJzIiwic2V0T3JkZXJzIiwicm91dGVyIiwidXNlUm91dGVyIiwicGFnZSIsInF1ZXJ5IiwicGFyc2VJbnQiLCJwZXJQYWdlIiwic2V0UGVyUGFnZSIsIm9uTW92ZUZyb21Ub1dpc2hsaXQiLCJlIiwiaXRlbSIsInByZXZlbnREZWZhdWx0IiwicmVtb3ZlUHJvZHVjdCIsIm9uUXVpY2tWaWV3Q2xpY2siLCJwcm9kdWN0Iiwic2x1ZyIsImdldFN0YXR1c0NvbG9yIiwic3RhdHVzIiwiZ2V0UmV0dXJuU3RhdHVzQ29sb3IiLCJ1c2VNdXRhdGlvbiIsImNhbmNlbFVzZXJPcmRlclByb2R1Y3QiLCJkb3dubG9hZEludm9pY2UiLCJyZXR1cm5PcmRlciIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiaW5wdXQiLCJzaXplIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsInJlZmV0Y2giLCJ0b3RhbFBhZ2UiLCJnZXRVc2VyT3JkZXJQcm9kdWN0cyIsIm1heFJlY29yZHMiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwicmVjb3JkcyIsIm9yZGVyQ2FuY2VsIiwiaWQiLCJ3aW5kb3ciLCJjb25maXJtIiwiX2lkIiwicmVzcG9uc2UiLCJ0b2FzdCIsInBhZGRpbmciLCJsb2ciLCJoYW5kbGVEb3dubG9hZCIsImludm9pY2UiLCJ1cmwiLCJnZXRVc2VySXZvaWNlU2lnbmVkVXJsIiwib3BlbiIsIm1lc3NhZ2UiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ0b2dnbGVEcm9wZG93biIsIml0ZW1JZCIsInByZXYiLCJzaG93UmV0dXJuRm9ybU1vZGFsIiwic2V0U2hvd1JldHVybkZvcm1Nb2RhbCIsIm9yZGVyUHJvZHVjdElkRm9yUmV0dXJuIiwic2V0T3JkZXJQcm9kdWN0SWRGb3JSZXR1cm4iLCJvcmRlcklkRm9yUmV0dXJuIiwic2V0T3JkZXJJZEZvclJldHVybiIsImlzU2hpcHBpbmdBZGRyZXNzIiwic2V0SXNTaGlwcGluZ0FkZHJlc3MiLCJpc0FjY2VwdFBvbGljeSIsInNldElzQWNjZXB0UG9saWN5Iiwic2hvd1BvbGljeU1vZGFsIiwic2V0U2hvd1BvbGljeU1vZGFsIiwiY2xvc2VNb2RhbCIsImhhbmRsZU9yZGVyUmV0dXJuIiwiZm9ybURhdGEiLCJiYW5rRGV0YWlscyIsInJldHVybkFkZHJlc3MiLCJyZXR1cm5Vc2VyUmVhc29uIiwiaW1hZ2UiLCJFcnJvciIsImVycm9ycyIsInJldHVyblVzZXJPcmRlclByb2R1Y3QiLCJmb250U2l6ZSIsImJhY2tncm91bmRDb2xvciIsIndpZHRoIiwibWFyZ2luVG9wIiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyQ29sb3IiLCJsZW5ndGgiLCJwYWRkaW5nTGVmdCIsIm1hcCIsImluZGV4IiwicHJvZHVjdElkIiwiZmlsZVVSTCIsImZvbnRXZWlnaHQiLCJwcm9kdWN0TmFtZSIsInNwbGl0Iiwic2xpY2UiLCJqb2luIiwiY29sb3IiLCJvcmRlcklkIiwiZGF5anMiLCJvcmRlckRhdGUiLCJmb3JtYXQiLCJyZXR1cm5TdGF0dXMiLCJzaGlwcGluZ1N0YXR1cyIsInBhcnNlRmxvYXQiLCJOdW1iZXIiLCJzZWxsaW5nUHJpY2UiLCJzaGlwcGluZ0NoYXJnZSIsInRvRml4ZWQiLCJib3JkZXIiLCJjdXJzb3IiLCJtYXJnaW5SaWdodCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibGlzdCIsIndpdGhBcG9sbG8iLCJzc3IiLCJjb25uZWN0IiwiV2lzaGxpc3RBY3Rpb24iLCJDYXJ0QWN0aW9uIiwiTW9kYWxBY3Rpb24iXSwibWFw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VUFBTSxFQUFFQSxtQkFEVjtBQUVFLGFBQVMsRUFBRUMsc0JBRmI7QUFHRSxnQkFBWSxFQUFFWSxpQkFIaEI7QUFJRSxXQUFPLEVBQUVULGdCQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE3VkosRUFxV0dNLGVBQWUsSUFDZCxNQUFDLG1GQUFEO0FBQ0UsVUFBTSxFQUFFQSxlQURWO0FBRUUsYUFBUyxFQUFFQyxrQkFGYjtBQUdFLGdCQUFZLEVBQUUsd0JBQU07QUFDbEJGLHVCQUFpQixDQUFDLElBQUQsQ0FBakI7QUFDQVIsNEJBQXNCLENBQUMsSUFBRCxDQUF0QjtBQUNBVSx3QkFBa0IsQ0FBQyxLQUFELENBQWxCO0FBQ0QsS0FQSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdFdKLENBREY7QUFtWEQ7O0dBaGpCUTlFLE07VUFJUVksbUQsRUFrRGtCaUIsd0QsRUFDUEEsd0QsRUFDSkEsd0QsRUFFb0JJLHFEOzs7S0ExRG5DakMsTTs7QUFrakJULElBQU15SCxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0x4SCxZQUFRLEVBQUV3SCxLQUFLLENBQUN4SCxRQUFOLENBQWV5SCxJQUFmLEdBQXNCRCxLQUFLLENBQUN4SCxRQUFOLENBQWV5SCxJQUFyQyxHQUE0QztBQURqRCxHQUFQO0FBR0QsQ0FKRDs7QUFNQSwrREFBZUMsd0RBQVUsQ0FBQztBQUFFQyxLQUFHO0FBQUwsQ0FBRCxDQUFWLENBQ2JDLG9EQUFPLENBQUNMLGVBQUQsZ0RBQ0ZNLHFEQURFLEdBRUZDLGlEQUZFLEdBR0ZDLGtEQUhFLEVBQVAsQ0FJR2pJLE1BSkgsQ0FEYSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BhZ2VzL29yZGVycy5mNDViZmFlNDc4ZDczOGQ2ZDBlYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZSB9IGZyb20gXCJyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgQUxpbmsgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29tbW9uL0FMaW5rXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCB7IGFjdGlvbnMgYXMgV2lzaGxpc3RBY3Rpb24gfSBmcm9tIFwiLi4vLi4vc3RvcmUvd2lzaGxpc3RcIjtcclxuaW1wb3J0IHsgYWN0aW9ucyBhcyBDYXJ0QWN0aW9uIH0gZnJvbSBcIi4uLy4uL3N0b3JlL2NhcnRcIjtcclxuaW1wb3J0IHsgYWN0aW9ucyBhcyBNb2RhbEFjdGlvbiB9IGZyb20gXCIuLi8uLi9zdG9yZS9tb2RhbFwiO1xyXG5pbXBvcnQgeyBJb01kSG9tZSB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xyXG5pbXBvcnQgeyBncWwsIHVzZUxhenlRdWVyeSwgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB3aXRoQXBvbGxvIGZyb20gXCIuLi8uLi9zZXJ2ZXIvYXBvbGxvXCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSBcInJlYWN0LWhlbG1ldFwiO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mZWF0dXJlcy9wYWdpbmF0aW9uXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmVhdHVyZXMvZHJvcGRvd24vRHJvcGRvd25cIjtcclxuaW1wb3J0IFJldHVyblJlcXVlc3RGb3JtTW9kYWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmVhdHVyZXMvbW9kYWxzL1JldHVyblJlcXVlc3RGb3JtTW9kYWxcIjtcclxuaW1wb3J0IEN1c3RvbU1vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZlYXR1cmVzL21vZGFscy9DdXN0b21Nb2RhbFwiO1xyXG5pbXBvcnQgUmV0dXJuUG9saWN5TW9kYWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmVhdHVyZXMvbW9kYWxzL1JldHVyblBvbGljeU1vZGFsXCI7XHJcblxyXG5jb25zdCBHRVRfT1JERVJTID0gZ3FsYFxyXG4gIHF1ZXJ5IEdldFVzZXJPcmRlclByb2R1Y3RzKCRpbnB1dDogR2V0VXNlck9yZGVyUHJvZHVjdHNJbnB1dCEpIHtcclxuICAgIGdldFVzZXJPcmRlclByb2R1Y3RzKGlucHV0OiAkaW5wdXQpIHtcclxuICAgICAgbWF4UmVjb3Jkc1xyXG4gICAgICByZWNvcmRzIHtcclxuICAgICAgICBfaWRcclxuICAgICAgICBwcm9kdWN0SWRcclxuICAgICAgICB2ZW5kb3JJZFxyXG4gICAgICAgIG9yZGVySWRcclxuICAgICAgICBpdGVtSWRcclxuICAgICAgICBwcm9kdWN0TmFtZVxyXG4gICAgICAgIHNob3J0RGVzY3JpcHRpb25cclxuICAgICAgICBza3VJZFxyXG4gICAgICAgIGltYWdlIHtcclxuICAgICAgICAgIGZpbGVUeXBlXHJcbiAgICAgICAgICBmaWxlVVJMXHJcbiAgICAgICAgICBtaW1lVHlwZVxyXG4gICAgICAgICAgb3JpZ2luYWxOYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVyblBlcmlvZFxyXG4gICAgICAgIG1ycFxyXG4gICAgICAgIHNlbGxpbmdQcmljZVxyXG4gICAgICAgIHNoaXBwaW5nQ2hhcmdlXHJcbiAgICAgICAgcGF5bWVudE1vZGVcclxuICAgICAgICBwYXltZW50U3RhdHVzXHJcbiAgICAgICAgb3JkZXJEYXRlXHJcbiAgICAgICAgc2hpcHBpbmdTdGF0dXNcclxuICAgICAgICBzaGlwcGVkRGF0ZVxyXG4gICAgICAgIGRlbGl2ZXJ5RGF0ZVxyXG4gICAgICAgIHJldHVyblN0YXR1c1xyXG4gICAgICAgIHJldHVybkRhdGVcclxuICAgICAgICByZXR1cm5SZXF1ZXN0RGF0ZVxyXG4gICAgICAgIHJldHVyblJlamVjdGVkRGF0ZVxyXG4gICAgICAgIHJldHVyblVzZXJSZWFzb25cclxuICAgICAgICByZWZ1bmRTdGF0dXNcclxuICAgICAgICByZWZ1bmRBbW91bnRcclxuICAgICAgICByZWZ1bmREYXRlXHJcbiAgICAgICAgY2FuY2VsbGVkRGF0ZVxyXG4gICAgICAgIGNhbmNlbFVzZXJSZWFzb25cclxuICAgICAgICBjb3VyaWVySWRcclxuICAgICAgICBpbnZvaWNlTnVtYmVyXHJcbiAgICAgICAgaW52b2ljZSB7XHJcbiAgICAgICAgICBmaWxlVHlwZVxyXG4gICAgICAgICAgZmlsZVVSTFxyXG4gICAgICAgICAgbWltZVR5cGVcclxuICAgICAgICAgIG9yaWdpbmFsTmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENBTkNFTF9PUkRFUiA9IGdxbGBcclxuICBtdXRhdGlvbiBDYW5jZWxVc2VyT3JkZXJQcm9kdWN0KCRpbnB1dDogQ2FuY2VsVXNlck9yZGVyUHJvZHVjdElucHV0ISkge1xyXG4gICAgY2FuY2VsVXNlck9yZGVyUHJvZHVjdChpbnB1dDogJGlucHV0KSB7XHJcbiAgICAgIF9pZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFJFVFVSTl9PUkRFUiA9IGdxbGBcclxuICBtdXRhdGlvbiBSZXR1cm5Vc2VyT3JkZXJQcm9kdWN0KFxyXG4gICAgJGlucHV0OiBSZXR1cm5Vc2VyT3JkZXJQcm9kdWN0SW5wdXQhXHJcbiAgICAkaW1hZ2U6IFtVcGxvYWRdXHJcbiAgKSB7XHJcbiAgICByZXR1cm5Vc2VyT3JkZXJQcm9kdWN0KGlucHV0OiAkaW5wdXQsIGltYWdlOiAkaW1hZ2UpIHtcclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRE9XTkxPQURfSU5WT0lDRSA9IGdxbGBcclxuICBtdXRhdGlvbiBHZXRVc2VySXZvaWNlU2lnbmVkVXJsKCRpbnB1dDogR2V0VXNlckl2b2ljZVVybElucHV0ISkge1xyXG4gICAgZ2V0VXNlckl2b2ljZVNpZ25lZFVybChpbnB1dDogJGlucHV0KSB7XHJcbiAgICAgIHVybFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIE9yZGVycyhwcm9wcykge1xyXG4gIGNvbnN0IHsgd2lzaGxpc3QsIGFkZFRvQ2FydCwgcmVtb3ZlRnJvbVdpc2hsaXN0LCBzaG93UXVpY2tWaWV3IH0gPSBwcm9wcztcclxuICBjb25zdCBbZmxhZywgc2V0RmxhZ10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbb3JkZXJzLCBzZXRPcmRlcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHBhZ2UgPSByb3V0ZXIucXVlcnkucGFnZSA/IHBhcnNlSW50KHJvdXRlci5xdWVyeS5wYWdlKSA6IDA7XHJcbiAgY29uc3QgW3BlclBhZ2UsIHNldFBlclBhZ2VdID0gdXNlU3RhdGUoNSk7XHJcblxyXG4gIGNvbnN0IG9uTW92ZUZyb21Ub1dpc2hsaXQgPSAoZSwgaXRlbSkgPT4ge1xyXG4gICAgc2V0RmxhZygyKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGFkZFRvQ2FydChpdGVtKTtcclxuICAgIHJlbW92ZUZyb21XaXNobGlzdChpdGVtKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW1vdmVQcm9kdWN0ID0gKGUsIGl0ZW0pID0+IHtcclxuICAgIHNldEZsYWcoMSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICByZW1vdmVGcm9tV2lzaGxpc3QoaXRlbSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25RdWlja1ZpZXdDbGljayA9IChlLCBwcm9kdWN0KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzaG93UXVpY2tWaWV3KHByb2R1Y3Quc2x1Zyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0U3RhdHVzQ29sb3IgPSAoc3RhdHVzKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHN0YXR1cykge1xyXG4gICAgICBjYXNlIFwiUEVORElOR1wiOlxyXG4gICAgICAgIHJldHVybiBcIiNGRkE1MDBcIjtcclxuICAgICAgY2FzZSBcIklOX1BST0dSRVNTXCI6XHJcbiAgICAgICAgcmV0dXJuIFwiI0ZGQTUwMFwiO1xyXG4gICAgICBjYXNlIFwiQ09NUExFVEVEXCI6XHJcbiAgICAgICAgcmV0dXJuIFwiIzQ0OTYxRFwiO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBcIiMwMDAwMDBcIjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRSZXR1cm5TdGF0dXNDb2xvciA9IChzdGF0dXMpID0+IHtcclxuICAgIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICAgIGNhc2UgXCJQRU5ESU5HXCI6XHJcbiAgICAgICAgcmV0dXJuIFwiI0ZGQzEwN1wiO1xyXG4gICAgICBjYXNlIFwiQVBQUk9WRURcIjpcclxuICAgICAgICByZXR1cm4gXCIjMjhBNzQ1XCI7XHJcbiAgICAgIGNhc2UgXCJSRUpFQ1RFRFwiOlxyXG4gICAgICAgIHJldHVybiBcIiNEQzM1NDVcIjtcclxuICAgICAgY2FzZSBcIkNPTExFQ1RFRFwiOlxyXG4gICAgICAgIHJldHVybiBcIiMxN0EyQjhcIjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gXCIjMTdBMkI4XCI7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW2NhbmNlbFVzZXJPcmRlclByb2R1Y3RdID0gdXNlTXV0YXRpb24oQ0FOQ0VMX09SREVSKTtcclxuICBjb25zdCBbZG93bmxvYWRJbnZvaWNlXSA9IHVzZU11dGF0aW9uKERPV05MT0FEX0lOVk9JQ0UpO1xyXG4gIGNvbnN0IFtyZXR1cm5PcmRlcl0gPSB1c2VNdXRhdGlvbihSRVRVUk5fT1JERVIpO1xyXG5cclxuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yLCByZWZldGNoIH0gPSB1c2VRdWVyeShHRVRfT1JERVJTLCB7XHJcbiAgICB2YXJpYWJsZXM6IHsgaW5wdXQ6IHsgcGFnZTogcGFnZSB8fCAwLCBzaXplOiBwZXJQYWdlIH0gfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdG90YWxQYWdlID0gZGF0YVxyXG4gICAgPyBwYXJzZUludChkYXRhPy5nZXRVc2VyT3JkZXJQcm9kdWN0cz8ubWF4UmVjb3JkcyAvIHBlclBhZ2UpICtcclxuICAgICAgKGRhdGE/LmdldFVzZXJPcmRlclByb2R1Y3RzPy5tYXhSZWNvcmRzICUgcGVyUGFnZSA/IDEgOiAwKVxyXG4gICAgOiAwO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBvcmRlcnM6XCIsIGVycm9yKTtcclxuICAgIH0gZWxzZSBpZiAoZGF0YSkge1xyXG4gICAgICBzZXRPcmRlcnMoZGF0YS5nZXRVc2VyT3JkZXJQcm9kdWN0cy5yZWNvcmRzIHx8IFtdKTtcclxuICAgIH1cclxuICB9LCBbZGF0YSwgZXJyb3JdKTtcclxuXHJcbiAgY29uc3Qgb3JkZXJDYW5jZWwgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghd2luZG93LmNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2FuY2VsIHRoaXMgb3JkZXI/XCIpKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjYW5jZWxVc2VyT3JkZXJQcm9kdWN0KHtcclxuICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgICAgIF9pZDogaWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICByZWZldGNoKCk7XHJcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHhcIiB9fT5Zb3VyIG9yZGVyIGhhcyBiZWVuIGNhbmNlbGVkLjwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURvd25sb2FkID0gYXN5bmMgKF9pZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaW52b2ljZSA9IGF3YWl0IGRvd25sb2FkSW52b2ljZSh7XHJcbiAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICBpbnB1dDoge1xyXG4gICAgICAgICAgICBfaWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgdXJsID0gaW52b2ljZS5kYXRhLmdldFVzZXJJdm9pY2VTaWduZWRVcmwudXJsO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImludm9pY2VcIiwgdXJsKTtcclxuICAgICAgLy8gY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgLy8gbGluay5ocmVmID0gdXJsO1xyXG4gICAgICAvLyBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCAnaW52b2ljZS5wZGYnKTtcclxuICAgICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgICAgLy8gbGluay5jbGljaygpO1xyXG4gICAgICAvLyBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xyXG4gICAgICB3aW5kb3cub3Blbih1cmwsIFwiX2JsYW5rXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdG9hc3QuZXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09UkVUVVJOIE9SREVSPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcXFxcclxuICAvL0Ryb3AgRG93blxyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCB0b2dnbGVEcm9wZG93biA9IChlLCBpdGVtSWQpID0+IHtcclxuICAgIHNldElzT3BlbigocHJldikgPT4gKGl0ZW1JZCA9PT0gcHJldiA/IFwiXCIgOiBpdGVtSWQpKTtcclxuICB9O1xyXG5cclxuICAvL1JldHVybiBvcmRlclxyXG4gIGNvbnN0IFtzaG93UmV0dXJuRm9ybU1vZGFsLCBzZXRTaG93UmV0dXJuRm9ybU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb3JkZXJQcm9kdWN0SWRGb3JSZXR1cm4sIHNldE9yZGVyUHJvZHVjdElkRm9yUmV0dXJuXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtvcmRlcklkRm9yUmV0dXJuLCBzZXRPcmRlcklkRm9yUmV0dXJuXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpc1NoaXBwaW5nQWRkcmVzcywgc2V0SXNTaGlwcGluZ0FkZHJlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvL3JldHVybiBwb2xpY3lcclxuICBjb25zdCBbaXNBY2NlcHRQb2xpY3ksIHNldElzQWNjZXB0UG9saWN5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd1BvbGljeU1vZGFsLCBzZXRTaG93UG9saWN5TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xyXG4gICAgc2V0U2hvd1JldHVybkZvcm1Nb2RhbChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVPcmRlclJldHVybiA9IGFzeW5jIChmb3JtRGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBiYW5rRGV0YWlscywgcmV0dXJuQWRkcmVzcywgcmV0dXJuVXNlclJlYXNvbiwgaW1hZ2UgfSA9IGZvcm1EYXRhO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coYmFua0RldGFpbHMsIFwiQkFOSyBERVRBSUxTXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXR1cm5BZGRyZXNzLCBcIlJFVFVSTiBBRERSRVNTXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXR1cm5Vc2VyUmVhc29uLCBcIlJFVFVSTiBVU0VSIFJFQVNPTlwiKTtcclxuICAgICAgY29uc29sZS5sb2coaW1hZ2UsIFwiID0gSU1BR0VTXCIpO1xyXG5cclxuICAgICAgaWYgKCFiYW5rRGV0YWlscykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkJhbmsgRGV0YWlscyBhcmUgcmVxdWlyZWQhXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghcmV0dXJuQWRkcmVzcykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJldHVybiBhZGRyZXNzIGlzIHJlcXVpcmVkIVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXJldHVyblVzZXJSZWFzb24pIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWFzb24gaXMgcmVxdWlyZWQhXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB2YXJpYWJsZXMgPSB7XHJcbiAgICAgICAgaW5wdXQ6IHtcclxuICAgICAgICAgIF9pZDogb3JkZXJQcm9kdWN0SWRGb3JSZXR1cm4sXHJcbiAgICAgICAgICBiYW5rRGV0YWlscyxcclxuICAgICAgICAgIHJldHVybkFkZHJlc3MsXHJcbiAgICAgICAgICByZXR1cm5Vc2VyUmVhc29uLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW1hZ2UsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyh2YXJpYWJsZXMsIFwiVkFSSUFCTEVTXCIpO1xyXG5cclxuICAgICAgY29uc3QgeyBkYXRhLCBlcnJvcnMgfSA9IGF3YWl0IHJldHVybk9yZGVyKHtcclxuICAgICAgICB2YXJpYWJsZXMsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKGVycm9ycykgY29uc29sZS5sb2coZXJyb3JzLCBcIkVSUk9SU1wiKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEsICdSRVNQT05TRSBSRVRVUk4gU1VCTUlUJylcclxuXHJcbiAgICAgIGlmIChkYXRhPy5yZXR1cm5Vc2VyT3JkZXJQcm9kdWN0Py5faWQpIHtcclxuICAgICAgICB0b2FzdC5zdWNjZXNzKFxyXG4gICAgICAgICAgXCJZb3VyIG9yZGVyIHJldHVybiByZXF1ZXN0IGhhcyBiZWVuIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHkuXCJcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0b2FzdC5lcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlbG1ldD5cclxuICAgICAgICA8dGl0bGU+T3JkZXJzIHwgQXJhYiBEZWFsczwvdGl0bGU+XHJcbiAgICAgIDwvSGVsbWV0PlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxuYXYgYXJpYS1sYWJlbD1cImJyZWFkY3J1bWJcIiBjbGFzc05hbWU9XCJicmVhZGNydW1iLW5hdlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJicmVhZGNydW1iXCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJb01kSG9tZSBzdHlsZT17eyBmb250U2l6ZTogXCIxNnB4XCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGkgY2xhc3NOYW1lPVwiaWNvbi1ob21lXCIgPjwvaT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbSBhY3RpdmVcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3BhZ2VzL2FjY291bnRcIj5NeSBhY2NvdW50PC9BTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbSBhY3RpdmVcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxBTGluayBjbGFzc05hbWU9XCJhY3RpdmVpdGVtXCIgaHJlZj1cIi9wYWdlcy9vcmRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICBPcmRlcnNcclxuICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC9vbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiPiAqL31cclxuXHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj4gKi99XHJcbiAgICAgICAgey8qIDxuYXYgYXJpYS1sYWJlbD1cImJyZWFkY3J1bWJcIiBjbGFzc05hbWU9XCJicmVhZGNydW1iLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtXCI+PEFMaW5rIGhyZWY9XCIvXCI+SG9tZTwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtIGFjdGl2ZVwiIGFyaWEtY3VycmVudD1cInBhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3JkZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PiAqL31cclxuXHJcbiAgICAgICAgey8qIDxoMT5vcmRlcnM8L2gxPlxyXG4gICAgICAgICAqL31cclxuXHJcbiAgICAgICAgey8qIDx1bCBjbGFzc05hbWU9XCJjaGVja291dC1wcm9ncmVzcy1iYXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgZmxleC13cmFwXCI+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvcGFnZXMvYWNjb3VudFwiPk15IEFjY291bnQ8L0FMaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvcGFnZXMvb3JkZXJzXCI+T3JkZXJzPC9BTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICBcclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPHVsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoZWNrb3V0LXByb2dyZXNzLWJhciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBmbGV4LXdyYXBcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI0Y5RjlGOVwiLCB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3BhZ2VzL2FjY291bnRcIj5NeSBBY2NvdW50PC9BTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3BhZ2VzL29yZGVyc1wiPk9yZGVyczwvQUxpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXJcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjJyZW1cIixcclxuICAgICAgICAgICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZFwiLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjRTJFMkUyXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxoND5PcmRlcnM8L2g0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Y2Nlc3MtYWxlcnRcIj5cclxuICAgICAgICAgICAge2ZsYWcgPT09IDEgPyA8cD5Qcm9kdWN0IHN1Y2Nlc3NmdWxseSByZW1vdmVkLjwvcD4gOiBcIlwifVxyXG4gICAgICAgICAgICB7ZmxhZyA9PT0gMiA/IDxwPlByb2R1Y3QgYWRkZWQgdG8gY2FydCBzdWNjZXNzZnVsbHkuPC9wPiA6IFwiXCJ9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIndpc2hsaXN0LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPk15IHdpc2hsaXN0IG9uIFBvcnRvIFNob3AgMzY8L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAge29yZGVycy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lzaGxpc3QtdGFibGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS13aXNobGlzdCBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpc2hsaXN0LWVtcHR5LXBhZ2UgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zaG9wcGluZy1iYWdcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDxwPk5vIHByb2R1Y3RzIE9yZGVyZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxBTGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvc2hvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGJ0bi1hZGQtY2FydCBwcm9kdWN0LXR5cGUtc2ltcGxlIGJ0bi1zaG9wIGZvbnQxIHctYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBnbyBzaG9we1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aXNobGlzdC10YWJsZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtd2lzaGxpc3QgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aHVtYm5haWwtY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgUHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInN0YXR1cy1jb2xcIj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJzdGF0dXMtY29sXCI+T3JkZXIgSWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJzdGF0dXMtY29sXCI+RGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInN0YXR1cy1jb2xcIj5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwcmljZS1jb2xcIj5Ub3RhbCBQcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImFjdGlvbi1jb2xcIj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAge29yZGVycy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17XCJ3aXNobGlzdC1pdGVtXCIgKyBpbmRleH0gY2xhc3NOYW1lPVwicHJvZHVjdC1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJtZWRpYS13aXRoLWxhenlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9wcm9kdWN0L2RlZmF1bHQvJHtpdGVtLnByb2R1Y3RJZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWFnZS5maWxlVVJMfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGQ9ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI4MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjgwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JkZXItaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aDUgY2xhc3NOYW1lPVwicHJvZHVjdC10aXRsZVwiIHN0eWxlPXt7Zm9udFdlaWdodDpcIjcwMFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9e2AvcHJvZHVjdC9kZWZhdWx0LyR7aXRlbS5wcm9kdWN0SWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5wcm9kdWN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC10aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFdlaWdodDogXCI3MDBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9e2AvcHJvZHVjdC9kZWZhdWx0LyR7aXRlbS5wcm9kdWN0SWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5wcm9kdWN0TmFtZS5zcGxpdChcIiBcIikuc2xpY2UoMCwgNCkuam9pbihcIiBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PntpdGVtLm9yZGVySWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF5anMoaXRlbS5vcmRlckRhdGUpLmZvcm1hdChcIllZWVkvTU0vRERcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBpdGVtPy5yZXR1cm5TdGF0dXMgIT09IFwiTkFcIiA/IGdldFJldHVyblN0YXR1c0NvbG9yKGl0ZW0/LnJldHVyblN0YXR1cyk6IGdldFN0YXR1c0NvbG9yKGl0ZW0/LnNoaXBwaW5nU3RhdHVzKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbT8ucmV0dXJuU3RhdHVzICE9PSBcIk5BXCIgPyBgJHtpdGVtPy5yZXR1cm5TdGF0dXN9LShSZXR1cm4pYDogaXRlbT8uc2hpcHBpbmdTdGF0dXMgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT1cIm9sZC1wcmljZVwiPnsnT01SICcgKyBpdGVtLnByaWNlWyAxIF0udG9GaXhlZCggMiApIH08L3NwYW4+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPTVJ7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJzZUZsb2F0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihpdGVtLnNlbGxpbmdQcmljZSkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGl0ZW0/LnNoaXBwaW5nQ2hhcmdlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnRvRml4ZWQoMil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZURyb3Bkb3duPXt0b2dnbGVEcm9wZG93bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtSWQ9e2l0ZW0/Lml0ZW1JZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc09wZW49e2lzT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc09wZW49e3NldElzT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXJfdXBkYXRlX21lbnVfY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbT8uc2hpcHBpbmdTdGF0dXMgIT09IFwiREVMSVZFUkVEXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0/LnNoaXBwaW5nU3RhdHVzICE9PSBcIkNBTkNFTEVEXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmRlcl91cGRhdGVfbWVudV9pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlF1aWNrIFZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlckNhbmNlbChpdGVtLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtpdGVtPy5zaGlwcGluZ1N0YXR1cyAhPT0gXCJQRU5ESU5HXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0/Lmludm9pY2UgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JkZXJfdXBkYXRlX21lbnVfaXRlbSBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUXVpY2sgVmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURvd25sb2FkKGl0ZW0uX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzT3BlbihmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjFlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCI1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk01IDIwaDE0di0ySDV6TTE5IDloLTRWM0g5djZINWw3IDd6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW52b2ljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtPy5zaGlwcGluZ1N0YXR1cyA9PT0gXCJERUxJVkVSRURcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9yZGVyX3VwZGF0ZV9tZW51X2l0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93UG9saWN5TW9kYWwodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3JkZXJQcm9kdWN0SWRGb3JSZXR1cm4oaXRlbT8uX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRPcmRlcklkRm9yUmV0dXJuKGl0ZW0/Lm9yZGVySWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzT3BlbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogeyFpdGVtPy5pbnZvaWNlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmRlcl91cGRhdGVfbWVudV9pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmRlcl91cGRhdGVfbWVudV9pdGVtIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUXVpY2sgVmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEb3dubG9hZChpdGVtLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjFlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk01IDIwaDE0di0ySDV6TTE5IDloLTRWM0g5djZINWw3IDd6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW52b2ljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JkZXJfdXBkYXRlX21lbnVfaXRlbSBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlF1aWNrIFZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbT8uaW52b2ljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IGJvcmRlcjogXCJub25lXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcIm5vdC1hbGxvd2VkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbT8uaW52b2ljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRG93bmxvYWQoaXRlbS5faWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNPcGVuKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjFlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPXtpdGVtPy5pbnZvaWNlID8gXCJibGFja1wiIDogXCJncmV5XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTUgMjBoMTR2LTJINXpNMTkgOWgtNFYzSDl2Nkg1bDcgN3pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnZvaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJvcmRlcl91cGRhdGVfbWVudV9pdGVtXCI+Q2FuY2VsPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyX3VwZGF0ZV9tZW51X2l0ZW1cIj5SZXR1cm48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXJfdXBkYXRlX21lbnVfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnZvaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgIHtsb2FkaW5nIHx8XHJcbiAgICAgICAgICAgICAgICAob3JkZXJzICYmIG9yZGVycy5sZW5ndGggJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwidG9vbGJveCB0b29sYm94LXBhZ2luYXRpb24gYm9yZGVyLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uIHRvdGFsUGFnZT17dG90YWxQYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgIHsvKiBSZXR1cm4gc3VibWl0IG1vZGFsICovfVxyXG4gICAgICB7c2hvd1JldHVybkZvcm1Nb2RhbCAmJiAoXHJcbiAgICAgICAgPFJldHVyblJlcXVlc3RGb3JtTW9kYWxcclxuICAgICAgICAgIGlzT3Blbj17c2hvd1JldHVybkZvcm1Nb2RhbH1cclxuICAgICAgICAgIHNldElzT3Blbj17c2V0U2hvd1JldHVybkZvcm1Nb2RhbH1cclxuICAgICAgICAgIGhhbmRsZVN1Ym1pdD17aGFuZGxlT3JkZXJSZXR1cm59XHJcbiAgICAgICAgICBvcmRlcklkPXtvcmRlcklkRm9yUmV0dXJufVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHsvKiBQb2xpY3kgbW9kYWwgKi99XHJcbiAgICAgIHtzaG93UG9saWN5TW9kYWwgJiYgKFxyXG4gICAgICAgIDxSZXR1cm5Qb2xpY3lNb2RhbFxyXG4gICAgICAgICAgaXNPcGVuPXtzaG93UG9saWN5TW9kYWx9XHJcbiAgICAgICAgICBzZXRJc09wZW49e3NldFNob3dQb2xpY3lNb2RhbH1cclxuICAgICAgICAgIGhhbmRsZVN1Ym1pdD17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc0FjY2VwdFBvbGljeSh0cnVlKTtcclxuICAgICAgICAgICAgc2V0U2hvd1JldHVybkZvcm1Nb2RhbCh0cnVlKTtcclxuICAgICAgICAgICAgc2V0U2hvd1BvbGljeU1vZGFsKGZhbHNlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB3aXNobGlzdDogc3RhdGUud2lzaGxpc3QubGlzdCA/IHN0YXRlLndpc2hsaXN0Lmxpc3QgOiBbXSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyh7IHNzcjogdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiB9KShcclxuICBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywge1xyXG4gICAgLi4uV2lzaGxpc3RBY3Rpb24sXHJcbiAgICAuLi5DYXJ0QWN0aW9uLFxyXG4gICAgLi4uTW9kYWxBY3Rpb24sXHJcbiAgfSkoT3JkZXJzKVxyXG4pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9