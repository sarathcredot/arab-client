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
    }, "Cancel") : __jsx((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null, (item === null || item === void 0 ? void 0 : item.shippingStatus) === "DELIVERED" && (item === null || item === void 0 ? void 0 : item.returnStatus) === "NA" && __jsx("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFnZXMvb3JkZXJzLmpzIl0sIm5hbWVzIjpbIkdFVF9PUkRFUlMiLCJncWwiLCJDQU5DRUxfT1JERVIiLCJSRVRVUk5fT1JERVIiLCJET1dOTE9BRF9JTlZPSUNFIiwiT3JkZXJzIiwicHJvcHMiLCJ3aXNobGlzdCIsImFkZFRvQ2FydCIsInJlbW92ZUZyb21XaXNobGlzdCIsInNob3dRdWlja1ZpZXciLCJ1c2VTdGF0ZSIsImZsYWciLCJzZXRGbGFnIiwib3JkZXJzIiwic2V0T3JkZXJzIiwicm91dGVyIiwidXNlUm91dGVyIiwicGFnZSIsInF1ZXJ5IiwicGFyc2VJbnQiLCJwZXJQYWdlIiwic2V0UGVyUGFnZSIsIm9uTW92ZUZyb21Ub1dpc2hsaXQiLCJlIiwiaXRlbSIsInByZXZlbnREZWZhdWx0IiwicmVtb3ZlUHJvZHVjdCIsIm9uUXVpY2tWaWV3Q2xpY2siLCJwcm9kdWN0Iiwic2x1ZyIsImdldFN0YXR1c0NvbG9yIiwic3RhdHVzIiwiZ2V0UmV0dXJuU3RhdHVzQ29sb3IiLCJ1c2VNdXRhdGlvbiIsImNhbmNlbFVzZXJPcmRlclByb2R1Y3QiLCJkb3dubG9hZEludm9pY2UiLCJyZXR1cm5PcmRlciIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiaW5wdXQiLCJzaXplIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsInJlZmV0Y2giLCJ0b3RhbFBhZ2UiLCJnZXRVc2VyT3JkZXJQcm9kdWN0cyIsIm1heFJlY29yZHMiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwicmVjb3JkcyIsIm9yZGVyQ2FuY2VsIiwiaWQiLCJ3aW5kb3ciLCJjb25maXJtIiwiX2lkIiwicmVzcG9uc2UiLCJ0b2FzdCIsInBhZGRpbmciLCJsb2ciLCJoYW5kbGVEb3dubG9hZCIsImludm9pY2UiLCJ1cmwiLCJnZXRVc2VySXZvaWNlU2lnbmVkVXJsIiwib3BlbiIsIm1lc3NhZ2UiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ0b2dnbGVEcm9wZG93biIsIml0ZW1JZCIsInByZXYiLCJzaG93UmV0dXJuRm9ybU1vZGFsIiwic2V0U2hvd1JldHVybkZvcm1Nb2RhbCIsIm9yZGVyUHJvZHVjdElkRm9yUmV0dXJuIiwic2V0T3JkZXJQcm9kdWN0SWRGb3JSZXR1cm4iLCJvcmRlcklkRm9yUmV0dXJuIiwic2V0T3JkZXJJZEZvclJldHVybiIsImlzU2hpcHBpbmdBZGRyZXNzIiwic2V0SXNTaGlwcGluZ0FkZHJlc3MiLCJpc0FjY2VwdFBvbGljeSIsInNldElzQWNjZXB0UG9saWN5Iiwic2hvd1BvbGljeU1vZGFsIiwic2V0U2hvd1BvbGljeU1vZGFsIiwiY2xvc2VNb2RhbCIsImhhbmRsZU9yZGVyUmV0dXJuIiwiZm9ybURhdGEiLCJiYW5rRGV0YWlscyIsInJldHVybkFkZHJlc3MiLCJyZXR1cm5Vc2VyUmVhc29uIiwiaW1hZ2UiLCJFcnJvciIsImVycm9ycyIsInJldHVyblVzZXJPcmRlclByb2R1Y3QiLCJmb250U2l6ZSIsImJhY2tncm91bmRDb2xvciIsIndpZHRoIiwibWFyZ2luVG9wIiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyQ29sb3IiLCJsZW5ndGgiLCJwYWRkaW5nTGVmdCIsIm1hcCIsImluZGV4IiwicHJvZHVjdElkIiwiZmlsZVVSTCIsImZvbnRXZWlnaHQiLCJwcm9kdWN0TmFtZSIsInNwbGl0Iiwic2xpY2UiLCJqb2luIiwiY29sb3IiLCJvcmRlcklkIiwiZGF5anMiLCJvcmRlckRhdGUiLCJmb3JtYXQiLCJyZXR1cm5TdGF0dXMiLCJzaGlwcGluZ1N0YXR1cyIsInBhcnNlRmxvYXQiLCJOdW1iZXIiLCJzZWxsaW5nUHJpY2UiLCJzaGlwcGluZ0NoYXJnZSIsInRvRml4ZWQiLCJib3JkZXIiLCJjdXJzb3IiLCJtYXJnaW5SaWdodCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibGlzdCIsIndpdGhBcG9sbG8iLCJzc3IiLCJjb25uZWN0IiwiV2lzaGxpc3RBY3Rpb24iLCJDYXJ0QWN0aW9uIiwiTW9kYWxBY3Rpb24iXSwibWFw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QUFBLElBREYsQ0FERixDQXZPTixDQXhCSixDQTdFRixDQUpGLEVBNFZHMEIsbUJBQW1CLElBQ2xCLE1BQUMsd0ZBQUQ7QUFDRSxVQUFNLEVBQUVBLG1CQURWO0FBRUUsYUFBUyxFQUFFQyxzQkFGYjtBQUdFLGdCQUFZLEVBQUVZLGlCQUhoQjtBQUlFLFdBQU8sRUFBRVQsZ0JBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTdWSixFQXFXR00sZUFBZSxJQUNkLE1BQUMsbUZBQUQ7QUFDRSxVQUFNLEVBQUVBLGVBRFY7QUFFRSxhQUFTLEVBQUVDLGtCQUZiO0FBR0UsZ0JBQVksRUFBRSx3QkFBTTtBQUNsQkYsdUJBQWlCLENBQUMsSUFBRCxDQUFqQjtBQUNBUiw0QkFBc0IsQ0FBQyxJQUFELENBQXRCO0FBQ0FVLHdCQUFrQixDQUFDLEtBQUQsQ0FBbEI7QUFDRCxLQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0V0osQ0FERjtBQW1YRDs7R0FoakJROUUsTTtVQUlRWSxtRCxFQWtEa0JpQix3RCxFQUNQQSx3RCxFQUNKQSx3RCxFQUVvQkkscUQ7OztLQTFEbkNqQyxNOztBQWtqQlQsSUFBTXlILGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTHhILFlBQVEsRUFBRXdILEtBQUssQ0FBQ3hILFFBQU4sQ0FBZXlILElBQWYsR0FBc0JELEtBQUssQ0FBQ3hILFFBQU4sQ0FBZXlILElBQXJDLEdBQTRDO0FBRGpELEdBQVA7QUFHRCxDQUpEOztBQU1BLCtEQUFlQyx3REFBVSxDQUFDO0FBQUVDLEtBQUc7QUFBTCxDQUFELENBQVYsQ0FDYkMsb0RBQU8sQ0FBQ0wsZUFBRCxnREFDRk0scURBREUsR0FFRkMsaURBRkUsR0FHRkMsa0RBSEUsRUFBUCxDQUlHakksTUFKSCxDQURhLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGFnZXMvb3JkZXJzLmZlZTAzYmQ0ODJiNDE0ZGNlMzNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlIH0gZnJvbSBcInJlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCBBTGluayBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tb24vQUxpbmtcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IHsgYWN0aW9ucyBhcyBXaXNobGlzdEFjdGlvbiB9IGZyb20gXCIuLi8uLi9zdG9yZS93aXNobGlzdFwiO1xyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIENhcnRBY3Rpb24gfSBmcm9tIFwiLi4vLi4vc3RvcmUvY2FydFwiO1xyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIE1vZGFsQWN0aW9uIH0gZnJvbSBcIi4uLy4uL3N0b3JlL21vZGFsXCI7XHJcbmltcG9ydCB7IElvTWRIb21lIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcbmltcG9ydCB7IGdxbCwgdXNlTGF6eVF1ZXJ5LCB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHdpdGhBcG9sbG8gZnJvbSBcIi4uLy4uL3NlcnZlci9hcG9sbG9cIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tIFwicmVhY3QtaGVsbWV0XCI7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZlYXR1cmVzL3BhZ2luYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mZWF0dXJlcy9kcm9wZG93bi9Ecm9wZG93blwiO1xyXG5pbXBvcnQgUmV0dXJuUmVxdWVzdEZvcm1Nb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mZWF0dXJlcy9tb2RhbHMvUmV0dXJuUmVxdWVzdEZvcm1Nb2RhbFwiO1xyXG5pbXBvcnQgQ3VzdG9tTW9kYWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmVhdHVyZXMvbW9kYWxzL0N1c3RvbU1vZGFsXCI7XHJcbmltcG9ydCBSZXR1cm5Qb2xpY3lNb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mZWF0dXJlcy9tb2RhbHMvUmV0dXJuUG9saWN5TW9kYWxcIjtcclxuXHJcbmNvbnN0IEdFVF9PUkRFUlMgPSBncWxgXHJcbiAgcXVlcnkgR2V0VXNlck9yZGVyUHJvZHVjdHMoJGlucHV0OiBHZXRVc2VyT3JkZXJQcm9kdWN0c0lucHV0ISkge1xyXG4gICAgZ2V0VXNlck9yZGVyUHJvZHVjdHMoaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgICBtYXhSZWNvcmRzXHJcbiAgICAgIHJlY29yZHMge1xyXG4gICAgICAgIF9pZFxyXG4gICAgICAgIHByb2R1Y3RJZFxyXG4gICAgICAgIHZlbmRvcklkXHJcbiAgICAgICAgb3JkZXJJZFxyXG4gICAgICAgIGl0ZW1JZFxyXG4gICAgICAgIHByb2R1Y3ROYW1lXHJcbiAgICAgICAgc2hvcnREZXNjcmlwdGlvblxyXG4gICAgICAgIHNrdUlkXHJcbiAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgZmlsZVR5cGVcclxuICAgICAgICAgIGZpbGVVUkxcclxuICAgICAgICAgIG1pbWVUeXBlXHJcbiAgICAgICAgICBvcmlnaW5hbE5hbWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuUGVyaW9kXHJcbiAgICAgICAgbXJwXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlXHJcbiAgICAgICAgc2hpcHBpbmdDaGFyZ2VcclxuICAgICAgICBwYXltZW50TW9kZVxyXG4gICAgICAgIHBheW1lbnRTdGF0dXNcclxuICAgICAgICBvcmRlckRhdGVcclxuICAgICAgICBzaGlwcGluZ1N0YXR1c1xyXG4gICAgICAgIHNoaXBwZWREYXRlXHJcbiAgICAgICAgZGVsaXZlcnlEYXRlXHJcbiAgICAgICAgcmV0dXJuU3RhdHVzXHJcbiAgICAgICAgcmV0dXJuRGF0ZVxyXG4gICAgICAgIHJldHVyblJlcXVlc3REYXRlXHJcbiAgICAgICAgcmV0dXJuUmVqZWN0ZWREYXRlXHJcbiAgICAgICAgcmV0dXJuVXNlclJlYXNvblxyXG4gICAgICAgIHJlZnVuZFN0YXR1c1xyXG4gICAgICAgIHJlZnVuZEFtb3VudFxyXG4gICAgICAgIHJlZnVuZERhdGVcclxuICAgICAgICBjYW5jZWxsZWREYXRlXHJcbiAgICAgICAgY2FuY2VsVXNlclJlYXNvblxyXG4gICAgICAgIGNvdXJpZXJJZFxyXG4gICAgICAgIGludm9pY2VOdW1iZXJcclxuICAgICAgICBpbnZvaWNlIHtcclxuICAgICAgICAgIGZpbGVUeXBlXHJcbiAgICAgICAgICBmaWxlVVJMXHJcbiAgICAgICAgICBtaW1lVHlwZVxyXG4gICAgICAgICAgb3JpZ2luYWxOYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ0FOQ0VMX09SREVSID0gZ3FsYFxyXG4gIG11dGF0aW9uIENhbmNlbFVzZXJPcmRlclByb2R1Y3QoJGlucHV0OiBDYW5jZWxVc2VyT3JkZXJQcm9kdWN0SW5wdXQhKSB7XHJcbiAgICBjYW5jZWxVc2VyT3JkZXJQcm9kdWN0KGlucHV0OiAkaW5wdXQpIHtcclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUkVUVVJOX09SREVSID0gZ3FsYFxyXG4gIG11dGF0aW9uIFJldHVyblVzZXJPcmRlclByb2R1Y3QoXHJcbiAgICAkaW5wdXQ6IFJldHVyblVzZXJPcmRlclByb2R1Y3RJbnB1dCFcclxuICAgICRpbWFnZTogW1VwbG9hZF1cclxuICApIHtcclxuICAgIHJldHVyblVzZXJPcmRlclByb2R1Y3QoaW5wdXQ6ICRpbnB1dCwgaW1hZ2U6ICRpbWFnZSkge1xyXG4gICAgICBfaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBET1dOTE9BRF9JTlZPSUNFID0gZ3FsYFxyXG4gIG11dGF0aW9uIEdldFVzZXJJdm9pY2VTaWduZWRVcmwoJGlucHV0OiBHZXRVc2VySXZvaWNlVXJsSW5wdXQhKSB7XHJcbiAgICBnZXRVc2VySXZvaWNlU2lnbmVkVXJsKGlucHV0OiAkaW5wdXQpIHtcclxuICAgICAgdXJsXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gT3JkZXJzKHByb3BzKSB7XHJcbiAgY29uc3QgeyB3aXNobGlzdCwgYWRkVG9DYXJ0LCByZW1vdmVGcm9tV2lzaGxpc3QsIHNob3dRdWlja1ZpZXcgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtmbGFnLCBzZXRGbGFnXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtvcmRlcnMsIHNldE9yZGVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgcGFnZSA9IHJvdXRlci5xdWVyeS5wYWdlID8gcGFyc2VJbnQocm91dGVyLnF1ZXJ5LnBhZ2UpIDogMDtcclxuICBjb25zdCBbcGVyUGFnZSwgc2V0UGVyUGFnZV0gPSB1c2VTdGF0ZSg1KTtcclxuXHJcbiAgY29uc3Qgb25Nb3ZlRnJvbVRvV2lzaGxpdCA9IChlLCBpdGVtKSA9PiB7XHJcbiAgICBzZXRGbGFnKDIpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYWRkVG9DYXJ0KGl0ZW0pO1xyXG4gICAgcmVtb3ZlRnJvbVdpc2hsaXN0KGl0ZW0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZVByb2R1Y3QgPSAoZSwgaXRlbSkgPT4ge1xyXG4gICAgc2V0RmxhZygxKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHJlbW92ZUZyb21XaXNobGlzdChpdGVtKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblF1aWNrVmlld0NsaWNrID0gKGUsIHByb2R1Y3QpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNob3dRdWlja1ZpZXcocHJvZHVjdC5zbHVnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRTdGF0dXNDb2xvciA9IChzdGF0dXMpID0+IHtcclxuICAgIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICAgIGNhc2UgXCJQRU5ESU5HXCI6XHJcbiAgICAgICAgcmV0dXJuIFwiI0ZGQTUwMFwiO1xyXG4gICAgICBjYXNlIFwiSU5fUFJPR1JFU1NcIjpcclxuICAgICAgICByZXR1cm4gXCIjRkZBNTAwXCI7XHJcbiAgICAgIGNhc2UgXCJDT01QTEVURURcIjpcclxuICAgICAgICByZXR1cm4gXCIjNDQ5NjFEXCI7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIFwiIzAwMDAwMFwiO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFJldHVyblN0YXR1c0NvbG9yID0gKHN0YXR1cykgPT4ge1xyXG4gICAgc3dpdGNoIChzdGF0dXMpIHtcclxuICAgICAgY2FzZSBcIlBFTkRJTkdcIjpcclxuICAgICAgICByZXR1cm4gXCIjRkZDMTA3XCI7XHJcbiAgICAgIGNhc2UgXCJBUFBST1ZFRFwiOlxyXG4gICAgICAgIHJldHVybiBcIiMyOEE3NDVcIjtcclxuICAgICAgY2FzZSBcIlJFSkVDVEVEXCI6XHJcbiAgICAgICAgcmV0dXJuIFwiI0RDMzU0NVwiO1xyXG4gICAgICBjYXNlIFwiQ09MTEVDVEVEXCI6XHJcbiAgICAgICAgcmV0dXJuIFwiIzE3QTJCOFwiO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBcIiMxN0EyQjhcIjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBbY2FuY2VsVXNlck9yZGVyUHJvZHVjdF0gPSB1c2VNdXRhdGlvbihDQU5DRUxfT1JERVIpO1xyXG4gIGNvbnN0IFtkb3dubG9hZEludm9pY2VdID0gdXNlTXV0YXRpb24oRE9XTkxPQURfSU5WT0lDRSk7XHJcbiAgY29uc3QgW3JldHVybk9yZGVyXSA9IHVzZU11dGF0aW9uKFJFVFVSTl9PUkRFUik7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IsIHJlZmV0Y2ggfSA9IHVzZVF1ZXJ5KEdFVF9PUkRFUlMsIHtcclxuICAgIHZhcmlhYmxlczogeyBpbnB1dDogeyBwYWdlOiBwYWdlIHx8IDAsIHNpemU6IHBlclBhZ2UgfSB9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB0b3RhbFBhZ2UgPSBkYXRhXHJcbiAgICA/IHBhcnNlSW50KGRhdGE/LmdldFVzZXJPcmRlclByb2R1Y3RzPy5tYXhSZWNvcmRzIC8gcGVyUGFnZSkgK1xyXG4gICAgICAoZGF0YT8uZ2V0VXNlck9yZGVyUHJvZHVjdHM/Lm1heFJlY29yZHMgJSBwZXJQYWdlID8gMSA6IDApXHJcbiAgICA6IDA7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIG9yZGVyczpcIiwgZXJyb3IpO1xyXG4gICAgfSBlbHNlIGlmIChkYXRhKSB7XHJcbiAgICAgIHNldE9yZGVycyhkYXRhLmdldFVzZXJPcmRlclByb2R1Y3RzLnJlY29yZHMgfHwgW10pO1xyXG4gICAgfVxyXG4gIH0sIFtkYXRhLCBlcnJvcl0pO1xyXG5cclxuICBjb25zdCBvcmRlckNhbmNlbCA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKCF3aW5kb3cuY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjYW5jZWwgdGhpcyBvcmRlcj9cIikpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNhbmNlbFVzZXJPcmRlclByb2R1Y3Qoe1xyXG4gICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgaW5wdXQ6IHtcclxuICAgICAgICAgICAgX2lkOiBpZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIHJlZmV0Y2goKTtcclxuICAgICAgdG9hc3Quc3VjY2VzcyhcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweFwiIH19PllvdXIgb3JkZXIgaGFzIGJlZW4gY2FuY2VsZWQuPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRG93bmxvYWQgPSBhc3luYyAoX2lkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBpbnZvaWNlID0gYXdhaXQgZG93bmxvYWRJbnZvaWNlKHtcclxuICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgICAgIF9pZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCB1cmwgPSBpbnZvaWNlLmRhdGEuZ2V0VXNlckl2b2ljZVNpZ25lZFVybC51cmw7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW52b2ljZVwiLCB1cmwpO1xyXG4gICAgICAvLyBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAvLyBsaW5rLmhyZWYgPSB1cmw7XHJcbiAgICAgIC8vIGxpbmsuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsICdpbnZvaWNlLnBkZicpO1xyXG4gICAgICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgICAvLyBsaW5rLmNsaWNrKCk7XHJcbiAgICAgIC8vIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XHJcbiAgICAgIHdpbmRvdy5vcGVuKHVybCwgXCJfYmxhbmtcIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0b2FzdC5lcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLz09PT09PT09PT09PT09PT09PT09PT09PT1SRVRVUk4gT1JERVI9PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxcXFxyXG4gIC8vRHJvcCBEb3duXHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHRvZ2dsZURyb3Bkb3duID0gKGUsIGl0ZW1JZCkgPT4ge1xyXG4gICAgc2V0SXNPcGVuKChwcmV2KSA9PiAoaXRlbUlkID09PSBwcmV2ID8gXCJcIiA6IGl0ZW1JZCkpO1xyXG4gIH07XHJcblxyXG4gIC8vUmV0dXJuIG9yZGVyXHJcbiAgY29uc3QgW3Nob3dSZXR1cm5Gb3JtTW9kYWwsIHNldFNob3dSZXR1cm5Gb3JtTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvcmRlclByb2R1Y3RJZEZvclJldHVybiwgc2V0T3JkZXJQcm9kdWN0SWRGb3JSZXR1cm5dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW29yZGVySWRGb3JSZXR1cm4sIHNldE9yZGVySWRGb3JSZXR1cm5dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2lzU2hpcHBpbmdBZGRyZXNzLCBzZXRJc1NoaXBwaW5nQWRkcmVzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vcmV0dXJuIHBvbGljeVxyXG4gIGNvbnN0IFtpc0FjY2VwdFBvbGljeSwgc2V0SXNBY2NlcHRQb2xpY3ldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93UG9saWN5TW9kYWwsIHNldFNob3dQb2xpY3lNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XHJcbiAgICBzZXRTaG93UmV0dXJuRm9ybU1vZGFsKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9yZGVyUmV0dXJuID0gYXN5bmMgKGZvcm1EYXRhKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGJhbmtEZXRhaWxzLCByZXR1cm5BZGRyZXNzLCByZXR1cm5Vc2VyUmVhc29uLCBpbWFnZSB9ID0gZm9ybURhdGE7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhiYW5rRGV0YWlscywgXCJCQU5LIERFVEFJTFNcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJldHVybkFkZHJlc3MsIFwiUkVUVVJOIEFERFJFU1NcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJldHVyblVzZXJSZWFzb24sIFwiUkVUVVJOIFVTRVIgUkVBU09OXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhpbWFnZSwgXCIgPSBJTUFHRVNcIik7XHJcblxyXG4gICAgICBpZiAoIWJhbmtEZXRhaWxzKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQmFuayBEZXRhaWxzIGFyZSByZXF1aXJlZCFcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFyZXR1cm5BZGRyZXNzKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmV0dXJuIGFkZHJlc3MgaXMgcmVxdWlyZWQhXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghcmV0dXJuVXNlclJlYXNvbikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlYXNvbiBpcyByZXF1aXJlZCFcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHZhcmlhYmxlcyA9IHtcclxuICAgICAgICBpbnB1dDoge1xyXG4gICAgICAgICAgX2lkOiBvcmRlclByb2R1Y3RJZEZvclJldHVybixcclxuICAgICAgICAgIGJhbmtEZXRhaWxzLFxyXG4gICAgICAgICAgcmV0dXJuQWRkcmVzcyxcclxuICAgICAgICAgIHJldHVyblVzZXJSZWFzb24sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbWFnZSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKHZhcmlhYmxlcywgXCJWQVJJQUJMRVNcIik7XHJcblxyXG4gICAgICBjb25zdCB7IGRhdGEsIGVycm9ycyB9ID0gYXdhaXQgcmV0dXJuT3JkZXIoe1xyXG4gICAgICAgIHZhcmlhYmxlcyxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoZXJyb3JzKSBjb25zb2xlLmxvZyhlcnJvcnMsIFwiRVJST1JTXCIpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coZGF0YSwgJ1JFU1BPTlNFIFJFVFVSTiBTVUJNSVQnKVxyXG5cclxuICAgICAgaWYgKGRhdGE/LnJldHVyblVzZXJPcmRlclByb2R1Y3Q/Ll9pZCkge1xyXG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoXHJcbiAgICAgICAgICBcIllvdXIgb3JkZXIgcmV0dXJuIHJlcXVlc3QgaGFzIGJlZW4gc3VibWl0dGVkIHN1Y2Nlc3NmdWxseS5cIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRvYXN0LmVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVsbWV0PlxyXG4gICAgICAgIDx0aXRsZT5PcmRlcnMgfCBBcmFiIERlYWxzPC90aXRsZT5cclxuICAgICAgPC9IZWxtZXQ+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1haW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPG5hdiBhcmlhLWxhYmVsPVwiYnJlYWRjcnVtYlwiIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItbmF2XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPElvTWRIb21lIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE2cHhcIiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8aSBjbGFzc05hbWU9XCJpY29uLWhvbWVcIiA+PC9pPiAqL31cclxuICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtIGFjdGl2ZVwiIGFyaWEtY3VycmVudD1cInBhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvcGFnZXMvYWNjb3VudFwiPk15IGFjY291bnQ8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtIGFjdGl2ZVwiIGFyaWEtY3VycmVudD1cInBhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgPEFMaW5rIGNsYXNzTmFtZT1cImFjdGl2ZWl0ZW1cIiBocmVmPVwiL3BhZ2VzL29yZGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIE9yZGVyc1xyXG4gICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L29sPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyXCI+ICovfVxyXG5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlclwiPiAqL31cclxuICAgICAgICB7LyogPG5hdiBhcmlhLWxhYmVsPVwiYnJlYWRjcnVtYlwiIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItbmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWl0ZW1cIj48QUxpbmsgaHJlZj1cIi9cIj5Ib21lPC9BTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWl0ZW0gYWN0aXZlXCIgYXJpYS1jdXJyZW50PVwicGFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPcmRlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+ICovfVxyXG5cclxuICAgICAgICB7LyogPGgxPm9yZGVyczwvaDE+XHJcbiAgICAgICAgICovfVxyXG5cclxuICAgICAgICB7LyogPHVsIGNsYXNzTmFtZT1cImNoZWNrb3V0LXByb2dyZXNzLWJhciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBmbGV4LXdyYXBcIj5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9wYWdlcy9hY2NvdW50XCI+TXkgQWNjb3VudDwvQUxpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhY3RpdmVcIj5cclxuICAgICAgICAgICAgICA8QUxpbmsgaHJlZj1cIi9wYWdlcy9vcmRlcnNcIj5PcmRlcnM8L0FMaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8dWxcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tvdXQtcHJvZ3Jlc3MtYmFyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGZsZXgtd3JhcFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjRjlGOUY5XCIsIHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvcGFnZXMvYWNjb3VudFwiPk15IEFjY291bnQ8L0FMaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvcGFnZXMvb3JkZXJzXCI+T3JkZXJzPC9BTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMnJlbVwiLFxyXG4gICAgICAgICAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkXCIsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiNFMkUyRTJcIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGg0Pk9yZGVyczwvaDQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VjY2Vzcy1hbGVydFwiPlxyXG4gICAgICAgICAgICB7ZmxhZyA9PT0gMSA/IDxwPlByb2R1Y3Qgc3VjY2Vzc2Z1bGx5IHJlbW92ZWQuPC9wPiA6IFwiXCJ9XHJcbiAgICAgICAgICAgIHtmbGFnID09PSAyID8gPHA+UHJvZHVjdCBhZGRlZCB0byBjYXJ0IHN1Y2Nlc3NmdWxseS48L3A+IDogXCJcIn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwid2lzaGxpc3QtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+TXkgd2lzaGxpc3Qgb24gUG9ydG8gU2hvcCAzNjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICB7b3JkZXJzLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aXNobGlzdC10YWJsZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXdpc2hsaXN0IG1iLTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lzaGxpc3QtZW1wdHktcGFnZSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXNob3BwaW5nLWJhZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPHA+Tm8gcHJvZHVjdHMgT3JkZXJlZDwvcD5cclxuICAgICAgICAgICAgICAgICAgPEFMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9zaG9wXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgYnRuLWFkZC1jYXJ0IHByb2R1Y3QtdHlwZS1zaW1wbGUgYnRuLXNob3AgZm9udDEgdy1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIGdvIHNob3B7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpc2hsaXN0LXRhYmxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS13aXNobGlzdCBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRodW1ibmFpbC1jb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IFwiMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBQcm9kdWN0XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwic3RhdHVzLWNvbFwiPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInN0YXR1cy1jb2xcIj5PcmRlciBJZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInN0YXR1cy1jb2xcIj5EYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwic3RhdHVzLWNvbFwiPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInByaWNlLWNvbFwiPlRvdGFsIFByaWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiYWN0aW9uLWNvbFwiPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICB7b3JkZXJzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtcIndpc2hsaXN0LWl0ZW1cIiArIGluZGV4fSBjbGFzc05hbWU9XCJwcm9kdWN0LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm1lZGlhLXdpdGgtbGF6eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInByb2R1Y3QtaW1hZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3Byb2R1Y3QvZGVmYXVsdC8ke2l0ZW0ucHJvZHVjdElkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltYWdlLmZpbGVVUkx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZD17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjgwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiODBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmRlci1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxoNSBjbGFzc05hbWU9XCJwcm9kdWN0LXRpdGxlXCIgc3R5bGU9e3tmb250V2VpZ2h0OlwiNzAwXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17YC9wcm9kdWN0L2RlZmF1bHQvJHtpdGVtLnByb2R1Y3RJZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnByb2R1Y3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LXRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250V2VpZ2h0OiBcIjcwMFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QUxpbmsgaHJlZj17YC9wcm9kdWN0L2RlZmF1bHQvJHtpdGVtLnByb2R1Y3RJZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnByb2R1Y3ROYW1lLnNwbGl0KFwiIFwiKS5zbGljZSgwLCA0KS5qb2luKFwiIFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+e2l0ZW0ub3JkZXJJZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXlqcyhpdGVtLm9yZGVyRGF0ZSkuZm9ybWF0KFwiWVlZWS9NTS9ERFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IGl0ZW0/LnJldHVyblN0YXR1cyAhPT0gXCJOQVwiID8gZ2V0UmV0dXJuU3RhdHVzQ29sb3IoaXRlbT8ucmV0dXJuU3RhdHVzKTogZ2V0U3RhdHVzQ29sb3IoaXRlbT8uc2hpcHBpbmdTdGF0dXMpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtPy5yZXR1cm5TdGF0dXMgIT09IFwiTkFcIiA/IGAke2l0ZW0/LnJldHVyblN0YXR1c30tKFJldHVybilgOiBpdGVtPy5zaGlwcGluZ1N0YXR1cyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwib2xkLXByaWNlXCI+eydPTVIgJyArIGl0ZW0ucHJpY2VbIDEgXS50b0ZpeGVkKCAyICkgfTwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9NUntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BhcnNlRmxvYXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKGl0ZW0uc2VsbGluZ1ByaWNlKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoaXRlbT8uc2hpcHBpbmdDaGFyZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkudG9GaXhlZCgyKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlRHJvcGRvd249e3RvZ2dsZURyb3Bkb3dufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1JZD17aXRlbT8uaXRlbUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3Blbj17aXNPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzT3Blbj17c2V0SXNPcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlcl91cGRhdGVfbWVudV9jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtPy5zaGlwcGluZ1N0YXR1cyAhPT0gXCJERUxJVkVSRURcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbT8uc2hpcHBpbmdTdGF0dXMgIT09IFwiQ0FOQ0VMRURcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9yZGVyX3VwZGF0ZV9tZW51X2l0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUXVpY2sgVmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyQ2FuY2VsKGl0ZW0uX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge2l0ZW0/LnNoaXBwaW5nU3RhdHVzICE9PSBcIlBFTkRJTkdcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbT8uaW52b2ljZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmRlcl91cGRhdGVfbWVudV9pdGVtIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJRdWljayBWaWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRG93bmxvYWQoaXRlbS5faWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNPcGVuKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTUgMjBoMTR2LTJINXpNMTkgOWgtNFYzSDl2Nkg1bDcgN3pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnZvaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0/LnNoaXBwaW5nU3RhdHVzID09PSBcIkRFTElWRVJFRFwiICYmIGl0ZW0/LnJldHVyblN0YXR1cyA9PT0gXCJOQVwiICYmICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9yZGVyX3VwZGF0ZV9tZW51X2l0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93UG9saWN5TW9kYWwodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3JkZXJQcm9kdWN0SWRGb3JSZXR1cm4oaXRlbT8uX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRPcmRlcklkRm9yUmV0dXJuKGl0ZW0/Lm9yZGVySWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzT3BlbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogeyFpdGVtPy5pbnZvaWNlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmRlcl91cGRhdGVfbWVudV9pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmRlcl91cGRhdGVfbWVudV9pdGVtIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUXVpY2sgVmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEb3dubG9hZChpdGVtLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjFlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk01IDIwaDE0di0ySDV6TTE5IDloLTRWM0g5djZINWw3IDd6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW52b2ljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JkZXJfdXBkYXRlX21lbnVfaXRlbSBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlF1aWNrIFZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbT8uaW52b2ljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IGJvcmRlcjogXCJub25lXCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcIm5vdC1hbGxvd2VkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbT8uaW52b2ljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRG93bmxvYWQoaXRlbS5faWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNPcGVuKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjFlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPXtpdGVtPy5pbnZvaWNlID8gXCJibGFja1wiIDogXCJncmV5XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTUgMjBoMTR2LTJINXpNMTkgOWgtNFYzSDl2Nkg1bDcgN3pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnZvaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJvcmRlcl91cGRhdGVfbWVudV9pdGVtXCI+Q2FuY2VsPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyX3VwZGF0ZV9tZW51X2l0ZW1cIj5SZXR1cm48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXJfdXBkYXRlX21lbnVfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnZvaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgIHtsb2FkaW5nIHx8XHJcbiAgICAgICAgICAgICAgICAob3JkZXJzICYmIG9yZGVycy5sZW5ndGggJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwidG9vbGJveCB0b29sYm94LXBhZ2luYXRpb24gYm9yZGVyLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uIHRvdGFsUGFnZT17dG90YWxQYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgIHsvKiBSZXR1cm4gc3VibWl0IG1vZGFsICovfVxyXG4gICAgICB7c2hvd1JldHVybkZvcm1Nb2RhbCAmJiAoXHJcbiAgICAgICAgPFJldHVyblJlcXVlc3RGb3JtTW9kYWxcclxuICAgICAgICAgIGlzT3Blbj17c2hvd1JldHVybkZvcm1Nb2RhbH1cclxuICAgICAgICAgIHNldElzT3Blbj17c2V0U2hvd1JldHVybkZvcm1Nb2RhbH1cclxuICAgICAgICAgIGhhbmRsZVN1Ym1pdD17aGFuZGxlT3JkZXJSZXR1cm59XHJcbiAgICAgICAgICBvcmRlcklkPXtvcmRlcklkRm9yUmV0dXJufVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHsvKiBQb2xpY3kgbW9kYWwgKi99XHJcbiAgICAgIHtzaG93UG9saWN5TW9kYWwgJiYgKFxyXG4gICAgICAgIDxSZXR1cm5Qb2xpY3lNb2RhbFxyXG4gICAgICAgICAgaXNPcGVuPXtzaG93UG9saWN5TW9kYWx9XHJcbiAgICAgICAgICBzZXRJc09wZW49e3NldFNob3dQb2xpY3lNb2RhbH1cclxuICAgICAgICAgIGhhbmRsZVN1Ym1pdD17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc0FjY2VwdFBvbGljeSh0cnVlKTtcclxuICAgICAgICAgICAgc2V0U2hvd1JldHVybkZvcm1Nb2RhbCh0cnVlKTtcclxuICAgICAgICAgICAgc2V0U2hvd1BvbGljeU1vZGFsKGZhbHNlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB3aXNobGlzdDogc3RhdGUud2lzaGxpc3QubGlzdCA/IHN0YXRlLndpc2hsaXN0Lmxpc3QgOiBbXSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyh7IHNzcjogdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiB9KShcclxuICBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywge1xyXG4gICAgLi4uV2lzaGxpc3RBY3Rpb24sXHJcbiAgICAuLi5DYXJ0QWN0aW9uLFxyXG4gICAgLi4uTW9kYWxBY3Rpb24sXHJcbiAgfSkoT3JkZXJzKVxyXG4pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9