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
                  lineNumber: 187,
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
      lineNumber: 290,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 9
    }
  }, "Orders | Arab Deals")), __jsx("main", {
    className: "main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 9
    }
  }, __jsx("nav", {
    "aria-label": "breadcrumb",
    className: "breadcrumb-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 13
    }
  }, __jsx("ol", {
    className: "breadcrumb",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 15
    }
  }, __jsx("li", {
    className: "breadcrumb-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 17
    }
  }, __jsx(_components_common_ALink__WEBPACK_IMPORTED_MODULE_8__.default, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 19
    }
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_23__.IoMdHome, {
    style: {
      fontSize: "16px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 21
    }
  }))), __jsx("li", {
    className: "breadcrumb-item active",
    "aria-current": "page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 17
    }
  }, __jsx(_components_common_ALink__WEBPACK_IMPORTED_MODULE_8__.default, {
    href: "/pages/account",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 19
    }
  }, "My account")), __jsx("li", {
    className: "breadcrumb-item active",
    "aria-current": "page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 17
    }
  }, __jsx(_components_common_ALink__WEBPACK_IMPORTED_MODULE_8__.default, {
    className: "activeitem",
    href: "/pages/orders",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 19
    }
  }, "Orders")))))), __jsx("div", {
    className: " d-flex flex-column align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
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
      lineNumber: 347,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 13
    }
  }, __jsx(_components_common_ALink__WEBPACK_IMPORTED_MODULE_8__.default, {
    href: "/pages/account",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 15
    }
  }, "My Account")), __jsx("li", {
    className: "active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 13
    }
  }, __jsx(_components_common_ALink__WEBPACK_IMPORTED_MODULE_8__.default, {
    href: "/pages/orders",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
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
      lineNumber: 360,
      columnNumber: 9
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 11
    }
  }, "Orders")), __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "success-alert",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 11
    }
  }, flag === 1 ? __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 27
    }
  }, "Product successfully removed.") : "", flag === 2 ? __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 27
    }
  }, "Product added to cart successfully.") : ""), orders.length === 0 ? __jsx("div", {
    className: "wishlist-table-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "table table-wishlist mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "wishlist-empty-page text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 17
    }
  }, __jsx("i", {
    "class": "fa fa-shopping-bag",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 19
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 19
    }
  }, "No products Ordered"), __jsx(_components_common_ALink__WEBPACK_IMPORTED_MODULE_8__.default, {
    href: "/shop",
    className: "btn btn-dark btn-add-cart product-type-simple btn-shop font1 w-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 19
    }
  }, "go shop", " ")))) : __jsx("div", {
    className: "wishlist-table-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 13
    }
  }, __jsx("table", {
    className: "table table-wishlist mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 15
    }
  }, __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 17
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
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
      lineNumber: 398,
      columnNumber: 21
    }
  }, "Product"), __jsx("th", {
    className: "status-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 21
    }
  }), __jsx("th", {
    className: "status-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 21
    }
  }, "Order Id"), __jsx("th", {
    className: "status-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 21
    }
  }, "Date"), __jsx("th", {
    className: "status-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 21
    }
  }, "Status"), __jsx("th", {
    className: "price-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 21
    }
  }, "Total Price"), __jsx("th", {
    className: "action-col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 21
    }
  }))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 17
    }
  }, orders.map(function (item, index) {
    return __jsx("tr", {
      key: "wishlist-item" + index,
      className: "product-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 414,
        columnNumber: 21
      }
    }, __jsx("td", {
      className: "media-with-lazy",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 415,
        columnNumber: 23
      }
    }, __jsx("figure", {
      className: "product-image-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 416,
        columnNumber: 25
      }
    }, __jsx(_components_common_ALink__WEBPACK_IMPORTED_MODULE_8__.default, {
      href: "/product/default/".concat(item.productId),
      className: "product-image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 417,
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
        lineNumber: 421,
        columnNumber: 29
      }
    })))), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432,
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
        lineNumber: 438,
        columnNumber: 25
      }
    }, __jsx(_components_common_ALink__WEBPACK_IMPORTED_MODULE_8__.default, {
      href: "/product/default/".concat(item.productId),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 442,
        columnNumber: 27
      }
    }, item.productName.split(" ").slice(0, 4).join(" "), "..."))), __jsx("td", {
      style: {
        color: "black"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 448,
        columnNumber: 23
      }
    }, item.orderId), __jsx("td", {
      style: {
        color: "black"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 449,
        columnNumber: 23
      }
    }, dayjs__WEBPACK_IMPORTED_MODULE_14___default()(item.orderDate).format("YYYY/MM/DD")), __jsx("td", {
      style: {
        color: getStatusColor(item === null || item === void 0 ? void 0 : item.shippingStatus)
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 452,
        columnNumber: 23
      }
    }, (item === null || item === void 0 ? void 0 : item.returnStatus) !== "NA" ? "".concat(item === null || item === void 0 ? void 0 : item.returnStatus, "-(Return)") : item === null || item === void 0 ? void 0 : item.shippingStatus), __jsx("td", {
      style: {
        color: "black"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 458,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "price-box",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 459,
        columnNumber: 25
      }
    }, __jsx((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null, __jsx("span", {
      className: "product-price",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 462,
        columnNumber: 29
      }
    }, "OMR", " ", parseFloat(Number(item.sellingPrice) + Number(item === null || item === void 0 ? void 0 : item.shippingCharge)).toFixed(2))))), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 473,
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
        lineNumber: 474,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "order_update_menu_container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 480,
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
        lineNumber: 483,
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
        lineNumber: 525,
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
        lineNumber: 574,
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
        lineNumber: 594,
        columnNumber: 31
      }
    }, __jsx("path", {
      fill: item !== null && item !== void 0 && item.invoice ? "black" : "grey",
      d: "M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 603,
        columnNumber: 33
      }
    })), "Invoice")))));
  }))), loading || orders && orders.length && __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 625,
      columnNumber: 19
    }
  }, __jsx("nav", {
    className: "toolbox toolbox-pagination border-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 626,
      columnNumber: 21
    }
  }, __jsx(_components_features_pagination__WEBPACK_IMPORTED_MODULE_16__.default, {
    totalPage: totalPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627,
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
      lineNumber: 638,
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
      lineNumber: 647,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFnZXMvb3JkZXJzLmpzIl0sIm5hbWVzIjpbIkdFVF9PUkRFUlMiLCJncWwiLCJDQU5DRUxfT1JERVIiLCJSRVRVUk5fT1JERVIiLCJET1dOTE9BRF9JTlZPSUNFIiwiT3JkZXJzIiwicHJvcHMiLCJ3aXNobGlzdCIsImFkZFRvQ2FydCIsInJlbW92ZUZyb21XaXNobGlzdCIsInNob3dRdWlja1ZpZXciLCJ1c2VTdGF0ZSIsImZsYWciLCJzZXRGbGFnIiwib3JkZXJzIiwic2V0T3JkZXJzIiwicm91dGVyIiwidXNlUm91dGVyIiwicGFnZSIsInF1ZXJ5IiwicGFyc2VJbnQiLCJwZXJQYWdlIiwic2V0UGVyUGFnZSIsIm9uTW92ZUZyb21Ub1dpc2hsaXQiLCJlIiwiaXRlbSIsInByZXZlbnREZWZhdWx0IiwicmVtb3ZlUHJvZHVjdCIsIm9uUXVpY2tWaWV3Q2xpY2siLCJwcm9kdWN0Iiwic2x1ZyIsImdldFN0YXR1c0NvbG9yIiwic3RhdHVzIiwiZ2V0UmV0dXJuU3RhdHVzQ29sb3IiLCJ1c2VNdXRhdGlvbiIsImNhbmNlbFVzZXJPcmRlclByb2R1Y3QiLCJkb3dubG9hZEludm9pY2UiLCJyZXR1cm5PcmRlciIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiaW5wdXQiLCJzaXplIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsInJlZmV0Y2giLCJ0b3RhbFBhZ2UiLCJnZXRVc2VyT3JkZXJQcm9kdWN0cyIsIm1heFJlY29yZHMiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwicmVjb3JkcyIsIm9yZGVyQ2FuY2VsIiwiaWQiLCJ3aW5kb3ciLCJjb25maXJtIiwiX2lkIiwicmVzcG9uc2UiLCJ0b2FzdCIsInBhZGRpbmciLCJsb2ciLCJoYW5kbGVEb3dubG9hZCIsImludm9pY2UiLCJ1cmwiLCJnZXRVc2VySXZvaWNlU2lnbmVkVXJsIiwib3BlbiIsIm1lc3NhZ2UiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ0b2dnbGVEcm9wZG93biIsIml0ZW1JZCIsInByZXYiLCJzaG93UmV0dXJuRm9ybU1vZGFsIiwic2V0U2hvd1JldHVybkZvcm1Nb2RhbCIsIm9yZGVyUHJvZHVjdElkRm9yUmV0dXJuIiwic2V0T3JkZXJQcm9kdWN0SWRGb3JSZXR1cm4iLCJvcmRlcklkRm9yUmV0dXJuIiwic2V0T3JkZXJJZEZvclJldHVybiIsImlzU2hpcHBpbmdBZGRyZXNzIiwic2V0SXNTaGlwcGluZ0FkZHJlc3MiLCJpc0FjY2VwdFBvbGljeSIsInNldElzQWNjZXB0UG9saWN5Iiwic2hvd1BvbGljeU1vZGFsIiwic2V0U2hvd1BvbGljeU1vZGFsIiwiY2xvc2VNb2RhbCIsImhhbmRsZU9yZGVyUmV0dXJuIiwiZm9ybURhdGEiLCJiYW5rRGV0YWlscyIsInJldHVybkFkZHJlc3MiLCJyZXR1cm5Vc2VyUmVhc29uIiwiaW1hZ2UiLCJFcnJvciIsImVycm9ycyIsInJldHVyblVzZXJPcmRlclByb2R1Y3QiLCJmb250U2l6ZSIsImJhY2tncm91bmRDb2xvciIsIndpZHRoIiwibWFyZ2luVG9wIiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyQ29sb3IiLCJsZW5ndGgiLCJwYWRkaW5nTGVmdCIsIm1hcCIsImluZGV4IiwicHJvZHVjdElkIiwiZmlsZVVSTCIsImZvbnRXZWlnaHQiLCJwcm9kdWN0TmFtZSIsInNwbGl0Iiwic2xpY2UiLCJqb2luIiwiY29sb3IiLCJvcmRlcklkIiwiZGF5anMiLCJvcmRlckRhdGUiLCJmb3JtYXQiLCJzaGlwcGluZ1N0YXR1cyIsInJldHVyblN0YXR1cyIsInBhcnNlRmxvYXQiLCJOdW1iZXIiLCJzZWxsaW5nUHJpY2UiLCJzaGlwcGluZ0NoYXJnZSIsInRvRml4ZWQiLCJib3JkZXIiLCJjdXJzb3IiLCJtYXJnaW5SaWdodCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibGlzdCIsIndpdGhBcG9sbG8iLCJzc3IiLCJjb25uZWN0IiwiV2lzaGxpc3RBY3Rpb24iLCJDYXJ0QWN0aW9uIiwiTW9kYWxBY3Rpb24iXSwibWFw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RFY7QUFFRSxhQUFTLEVBQUVDLGtCQUZiO0FBR0UsZ0JBQVksRUFBRSx3QkFBTTtBQUNsQkYsdUJBQWlCLENBQUMsSUFBRCxDQUFqQjtBQUNBUiw0QkFBc0IsQ0FBQyxJQUFELENBQXRCO0FBQ0FVLHdCQUFrQixDQUFDLEtBQUQsQ0FBbEI7QUFDRCxLQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0V0osQ0FERjtBQW1YRDs7R0E5aUJROUUsTTtVQUlRWSxtRCxFQWdEa0JpQix3RCxFQUNQQSx3RCxFQUNKQSx3RCxFQUVvQkkscUQ7OztLQXhEbkNqQyxNOztBQWdqQlQsSUFBTXlILGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTHhILFlBQVEsRUFBRXdILEtBQUssQ0FBQ3hILFFBQU4sQ0FBZXlILElBQWYsR0FBc0JELEtBQUssQ0FBQ3hILFFBQU4sQ0FBZXlILElBQXJDLEdBQTRDO0FBRGpELEdBQVA7QUFHRCxDQUpEOztBQU1BLCtEQUFlQyx3REFBVSxDQUFDO0FBQUVDLEtBQUc7QUFBTCxDQUFELENBQVYsQ0FDYkMsb0RBQU8sQ0FBQ0wsZUFBRCxnREFDRk0scURBREUsR0FFRkMsaURBRkUsR0FHRkMsa0RBSEUsRUFBUCxDQUlHakksTUFKSCxDQURhLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGFnZXMvb3JkZXJzLmZlNDE0YjIyNjNjNTcyZTZlNzcyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMYXp5TG9hZEltYWdlIH0gZnJvbSBcInJlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCBBTGluayBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb21tb24vQUxpbmtcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IHsgYWN0aW9ucyBhcyBXaXNobGlzdEFjdGlvbiB9IGZyb20gXCIuLi8uLi9zdG9yZS93aXNobGlzdFwiO1xyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIENhcnRBY3Rpb24gfSBmcm9tIFwiLi4vLi4vc3RvcmUvY2FydFwiO1xyXG5pbXBvcnQgeyBhY3Rpb25zIGFzIE1vZGFsQWN0aW9uIH0gZnJvbSBcIi4uLy4uL3N0b3JlL21vZGFsXCI7XHJcbmltcG9ydCB7IElvTWRIb21lIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcbmltcG9ydCB7IGdxbCwgdXNlTGF6eVF1ZXJ5LCB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHdpdGhBcG9sbG8gZnJvbSBcIi4uLy4uL3NlcnZlci9hcG9sbG9cIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tIFwicmVhY3QtaGVsbWV0XCI7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZlYXR1cmVzL3BhZ2luYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mZWF0dXJlcy9kcm9wZG93bi9Ecm9wZG93blwiO1xyXG5pbXBvcnQgUmV0dXJuUmVxdWVzdEZvcm1Nb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mZWF0dXJlcy9tb2RhbHMvUmV0dXJuUmVxdWVzdEZvcm1Nb2RhbFwiO1xyXG5pbXBvcnQgQ3VzdG9tTW9kYWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZmVhdHVyZXMvbW9kYWxzL0N1c3RvbU1vZGFsXCI7XHJcbmltcG9ydCBSZXR1cm5Qb2xpY3lNb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mZWF0dXJlcy9tb2RhbHMvUmV0dXJuUG9saWN5TW9kYWxcIjtcclxuXHJcbmNvbnN0IEdFVF9PUkRFUlMgPSBncWxgXHJcbiAgcXVlcnkgR2V0VXNlck9yZGVyUHJvZHVjdHMoJGlucHV0OiBHZXRVc2VyT3JkZXJQcm9kdWN0c0lucHV0ISkge1xyXG4gICAgZ2V0VXNlck9yZGVyUHJvZHVjdHMoaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgICBtYXhSZWNvcmRzXHJcbiAgICAgIHJlY29yZHMge1xyXG4gICAgICAgIF9pZFxyXG4gICAgICAgIHByb2R1Y3RJZFxyXG4gICAgICAgIHZlbmRvcklkXHJcbiAgICAgICAgb3JkZXJJZFxyXG4gICAgICAgIGl0ZW1JZFxyXG4gICAgICAgIHByb2R1Y3ROYW1lXHJcbiAgICAgICAgc2hvcnREZXNjcmlwdGlvblxyXG4gICAgICAgIHNrdUlkXHJcbiAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgZmlsZVR5cGVcclxuICAgICAgICAgIGZpbGVVUkxcclxuICAgICAgICAgIG1pbWVUeXBlXHJcbiAgICAgICAgICBvcmlnaW5hbE5hbWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuUGVyaW9kXHJcbiAgICAgICAgbXJwXHJcbiAgICAgICAgc2VsbGluZ1ByaWNlXHJcbiAgICAgICAgc2hpcHBpbmdDaGFyZ2VcclxuICAgICAgICBwYXltZW50TW9kZVxyXG4gICAgICAgIHBheW1lbnRTdGF0dXNcclxuICAgICAgICBvcmRlckRhdGVcclxuICAgICAgICBzaGlwcGluZ1N0YXR1c1xyXG4gICAgICAgIHNoaXBwZWREYXRlXHJcbiAgICAgICAgZGVsaXZlcnlEYXRlXHJcbiAgICAgICAgcmV0dXJuU3RhdHVzXHJcbiAgICAgICAgcmV0dXJuRGF0ZVxyXG4gICAgICAgIHJldHVyblJlcXVlc3REYXRlXHJcbiAgICAgICAgcmV0dXJuUmVqZWN0ZWREYXRlXHJcbiAgICAgICAgcmV0dXJuVXNlclJlYXNvblxyXG4gICAgICAgIHJlZnVuZFN0YXR1c1xyXG4gICAgICAgIHJlZnVuZEFtb3VudFxyXG4gICAgICAgIHJlZnVuZERhdGVcclxuICAgICAgICBjYW5jZWxsZWREYXRlXHJcbiAgICAgICAgY2FuY2VsVXNlclJlYXNvblxyXG4gICAgICAgIGNvdXJpZXJJZFxyXG4gICAgICAgIGludm9pY2VOdW1iZXJcclxuICAgICAgICBpbnZvaWNlIHtcclxuICAgICAgICAgIGZpbGVUeXBlXHJcbiAgICAgICAgICBmaWxlVVJMXHJcbiAgICAgICAgICBtaW1lVHlwZVxyXG4gICAgICAgICAgb3JpZ2luYWxOYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ0FOQ0VMX09SREVSID0gZ3FsYFxyXG4gIG11dGF0aW9uIENhbmNlbFVzZXJPcmRlclByb2R1Y3QoJGlucHV0OiBDYW5jZWxVc2VyT3JkZXJQcm9kdWN0SW5wdXQhKSB7XHJcbiAgICBjYW5jZWxVc2VyT3JkZXJQcm9kdWN0KGlucHV0OiAkaW5wdXQpIHtcclxuICAgICAgX2lkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUkVUVVJOX09SREVSID0gZ3FsYFxyXG4gIG11dGF0aW9uIFJldHVyblVzZXJPcmRlclByb2R1Y3QoXHJcbiAgICAkaW5wdXQ6IFJldHVyblVzZXJPcmRlclByb2R1Y3RJbnB1dCFcclxuICAgICRpbWFnZTogW1VwbG9hZF1cclxuICApIHtcclxuICAgIHJldHVyblVzZXJPcmRlclByb2R1Y3QoaW5wdXQ6ICRpbnB1dCwgaW1hZ2U6ICRpbWFnZSkge1xyXG4gICAgICBfaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBET1dOTE9BRF9JTlZPSUNFID0gZ3FsYFxyXG4gIG11dGF0aW9uIEdldFVzZXJJdm9pY2VTaWduZWRVcmwoJGlucHV0OiBHZXRVc2VySXZvaWNlVXJsSW5wdXQhKSB7XHJcbiAgICBnZXRVc2VySXZvaWNlU2lnbmVkVXJsKGlucHV0OiAkaW5wdXQpIHtcclxuICAgICAgdXJsXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gT3JkZXJzKHByb3BzKSB7XHJcbiAgY29uc3QgeyB3aXNobGlzdCwgYWRkVG9DYXJ0LCByZW1vdmVGcm9tV2lzaGxpc3QsIHNob3dRdWlja1ZpZXcgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtmbGFnLCBzZXRGbGFnXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtvcmRlcnMsIHNldE9yZGVyc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgcGFnZSA9IHJvdXRlci5xdWVyeS5wYWdlID8gcGFyc2VJbnQocm91dGVyLnF1ZXJ5LnBhZ2UpIDogMDtcclxuICBjb25zdCBbcGVyUGFnZSwgc2V0UGVyUGFnZV0gPSB1c2VTdGF0ZSg1KTtcclxuXHJcbiAgY29uc3Qgb25Nb3ZlRnJvbVRvV2lzaGxpdCA9IChlLCBpdGVtKSA9PiB7XHJcbiAgICBzZXRGbGFnKDIpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYWRkVG9DYXJ0KGl0ZW0pO1xyXG4gICAgcmVtb3ZlRnJvbVdpc2hsaXN0KGl0ZW0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZVByb2R1Y3QgPSAoZSwgaXRlbSkgPT4ge1xyXG4gICAgc2V0RmxhZygxKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHJlbW92ZUZyb21XaXNobGlzdChpdGVtKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblF1aWNrVmlld0NsaWNrID0gKGUsIHByb2R1Y3QpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNob3dRdWlja1ZpZXcocHJvZHVjdC5zbHVnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRTdGF0dXNDb2xvciA9IChzdGF0dXMpID0+IHtcclxuICAgIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICAgIGNhc2UgXCJQRU5ESU5HXCI6XHJcbiAgICAgICAgcmV0dXJuIFwiI0ZGQTUwMFwiO1xyXG4gICAgICBjYXNlIFwiSU5fUFJPR1JFU1NcIjpcclxuICAgICAgICByZXR1cm4gXCIjRkZBNTAwXCI7XHJcbiAgICAgIGNhc2UgXCJDT01QTEVURURcIjpcclxuICAgICAgICByZXR1cm4gXCIjNDQ5NjFEXCI7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIFwiIzAwMDAwMFwiO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFJldHVyblN0YXR1c0NvbG9yID0gKHN0YXR1cykgPT4ge1xyXG4gICAgc3dpdGNoIChzdGF0dXMpIHtcclxuICAgICAgY2FzZSBcIlBFTkRJTkdcIjpcclxuICAgICAgICByZXR1cm4gXCIjRkZDMTA3XCI7XHJcbiAgICAgIGNhc2UgXCJBUFBST1ZFRFwiOlxyXG4gICAgICAgIHJldHVybiBcIiMyOEE3NDVcIjtcclxuICAgICAgY2FzZSBcIkNPTVBMRVRFRFwiOlxyXG4gICAgICAgIHJldHVybiBcIiM0NDk2MURcIjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gXCIjMDAwMDAwXCI7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW2NhbmNlbFVzZXJPcmRlclByb2R1Y3RdID0gdXNlTXV0YXRpb24oQ0FOQ0VMX09SREVSKTtcclxuICBjb25zdCBbZG93bmxvYWRJbnZvaWNlXSA9IHVzZU11dGF0aW9uKERPV05MT0FEX0lOVk9JQ0UpO1xyXG4gIGNvbnN0IFtyZXR1cm5PcmRlcl0gPSB1c2VNdXRhdGlvbihSRVRVUk5fT1JERVIpO1xyXG5cclxuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yLCByZWZldGNoIH0gPSB1c2VRdWVyeShHRVRfT1JERVJTLCB7XHJcbiAgICB2YXJpYWJsZXM6IHsgaW5wdXQ6IHsgcGFnZTogcGFnZSB8fCAwLCBzaXplOiBwZXJQYWdlIH0gfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdG90YWxQYWdlID0gZGF0YVxyXG4gICAgPyBwYXJzZUludChkYXRhPy5nZXRVc2VyT3JkZXJQcm9kdWN0cz8ubWF4UmVjb3JkcyAvIHBlclBhZ2UpICtcclxuICAgICAgKGRhdGE/LmdldFVzZXJPcmRlclByb2R1Y3RzPy5tYXhSZWNvcmRzICUgcGVyUGFnZSA/IDEgOiAwKVxyXG4gICAgOiAwO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBvcmRlcnM6XCIsIGVycm9yKTtcclxuICAgIH0gZWxzZSBpZiAoZGF0YSkge1xyXG4gICAgICBzZXRPcmRlcnMoZGF0YS5nZXRVc2VyT3JkZXJQcm9kdWN0cy5yZWNvcmRzIHx8IFtdKTtcclxuICAgIH1cclxuICB9LCBbZGF0YSwgZXJyb3JdKTtcclxuXHJcbiAgY29uc3Qgb3JkZXJDYW5jZWwgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICghd2luZG93LmNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2FuY2VsIHRoaXMgb3JkZXI/XCIpKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjYW5jZWxVc2VyT3JkZXJQcm9kdWN0KHtcclxuICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgICAgIF9pZDogaWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICByZWZldGNoKCk7XHJcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHhcIiB9fT5Zb3VyIG9yZGVyIGhhcyBiZWVuIGNhbmNlbGVkLjwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURvd25sb2FkID0gYXN5bmMgKF9pZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaW52b2ljZSA9IGF3YWl0IGRvd25sb2FkSW52b2ljZSh7XHJcbiAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICBpbnB1dDoge1xyXG4gICAgICAgICAgICBfaWQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgdXJsID0gaW52b2ljZS5kYXRhLmdldFVzZXJJdm9pY2VTaWduZWRVcmwudXJsO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImludm9pY2VcIiwgdXJsKTtcclxuICAgICAgLy8gY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgLy8gbGluay5ocmVmID0gdXJsO1xyXG4gICAgICAvLyBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCAnaW52b2ljZS5wZGYnKTtcclxuICAgICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgICAgLy8gbGluay5jbGljaygpO1xyXG4gICAgICAvLyBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xyXG4gICAgICB3aW5kb3cub3Blbih1cmwsIFwiX2JsYW5rXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdG9hc3QuZXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09UkVUVVJOIE9SREVSPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcXFxcclxuICAvL0Ryb3AgRG93blxyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCB0b2dnbGVEcm9wZG93biA9IChlLCBpdGVtSWQpID0+IHtcclxuICAgIHNldElzT3BlbigocHJldikgPT4gKGl0ZW1JZCA9PT0gcHJldiA/IFwiXCIgOiBpdGVtSWQpKTtcclxuICB9O1xyXG5cclxuICAvL1JldHVybiBvcmRlclxyXG4gIGNvbnN0IFtzaG93UmV0dXJuRm9ybU1vZGFsLCBzZXRTaG93UmV0dXJuRm9ybU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb3JkZXJQcm9kdWN0SWRGb3JSZXR1cm4sIHNldE9yZGVyUHJvZHVjdElkRm9yUmV0dXJuXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtvcmRlcklkRm9yUmV0dXJuLCBzZXRPcmRlcklkRm9yUmV0dXJuXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpc1NoaXBwaW5nQWRkcmVzcywgc2V0SXNTaGlwcGluZ0FkZHJlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvL3JldHVybiBwb2xpY3lcclxuICBjb25zdCBbaXNBY2NlcHRQb2xpY3ksIHNldElzQWNjZXB0UG9saWN5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd1BvbGljeU1vZGFsLCBzZXRTaG93UG9saWN5TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xyXG4gICAgc2V0U2hvd1JldHVybkZvcm1Nb2RhbChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVPcmRlclJldHVybiA9IGFzeW5jIChmb3JtRGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBiYW5rRGV0YWlscywgcmV0dXJuQWRkcmVzcywgcmV0dXJuVXNlclJlYXNvbiwgaW1hZ2UgfSA9IGZvcm1EYXRhO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coYmFua0RldGFpbHMsIFwiQkFOSyBERVRBSUxTXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXR1cm5BZGRyZXNzLCBcIlJFVFVSTiBBRERSRVNTXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXR1cm5Vc2VyUmVhc29uLCBcIlJFVFVSTiBVU0VSIFJFQVNPTlwiKTtcclxuICAgICAgY29uc29sZS5sb2coaW1hZ2UsIFwiID0gSU1BR0VTXCIpO1xyXG5cclxuICAgICAgaWYgKCFiYW5rRGV0YWlscykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkJhbmsgRGV0YWlscyBhcmUgcmVxdWlyZWQhXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghcmV0dXJuQWRkcmVzcykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJldHVybiBhZGRyZXNzIGlzIHJlcXVpcmVkIVwiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXJldHVyblVzZXJSZWFzb24pIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWFzb24gaXMgcmVxdWlyZWQhXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB2YXJpYWJsZXMgPSB7XHJcbiAgICAgICAgaW5wdXQ6IHtcclxuICAgICAgICAgIF9pZDogb3JkZXJQcm9kdWN0SWRGb3JSZXR1cm4sXHJcbiAgICAgICAgICBiYW5rRGV0YWlscyxcclxuICAgICAgICAgIHJldHVybkFkZHJlc3MsXHJcbiAgICAgICAgICByZXR1cm5Vc2VyUmVhc29uLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW1hZ2UsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyh2YXJpYWJsZXMsIFwiVkFSSUFCTEVTXCIpO1xyXG5cclxuICAgICAgY29uc3QgeyBkYXRhLCBlcnJvcnMgfSA9IGF3YWl0IHJldHVybk9yZGVyKHtcclxuICAgICAgICB2YXJpYWJsZXMsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKGVycm9ycykgY29uc29sZS5sb2coZXJyb3JzLCBcIkVSUk9SU1wiKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEsICdSRVNQT05TRSBSRVRVUk4gU1VCTUlUJylcclxuXHJcbiAgICAgIGlmIChkYXRhPy5yZXR1cm5Vc2VyT3JkZXJQcm9kdWN0Py5faWQpIHtcclxuICAgICAgICB0b2FzdC5zdWNjZXNzKFxyXG4gICAgICAgICAgXCJZb3VyIG9yZGVyIHJldHVybiByZXF1ZXN0IGhhcyBiZWVuIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHkuXCJcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0b2FzdC5lcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlbG1ldD5cclxuICAgICAgICA8dGl0bGU+T3JkZXJzIHwgQXJhYiBEZWFsczwvdGl0bGU+XHJcbiAgICAgIDwvSGVsbWV0PlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxuYXYgYXJpYS1sYWJlbD1cImJyZWFkY3J1bWJcIiBjbGFzc05hbWU9XCJicmVhZGNydW1iLW5hdlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJicmVhZGNydW1iXCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJb01kSG9tZSBzdHlsZT17eyBmb250U2l6ZTogXCIxNnB4XCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGkgY2xhc3NOYW1lPVwiaWNvbi1ob21lXCIgPjwvaT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbSBhY3RpdmVcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3BhZ2VzL2FjY291bnRcIj5NeSBhY2NvdW50PC9BTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbSBhY3RpdmVcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxBTGluayBjbGFzc05hbWU9XCJhY3RpdmVpdGVtXCIgaHJlZj1cIi9wYWdlcy9vcmRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICBPcmRlcnNcclxuICAgICAgICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC9vbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhlYWRlclwiPiAqL31cclxuXHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj4gKi99XHJcbiAgICAgICAgey8qIDxuYXYgYXJpYS1sYWJlbD1cImJyZWFkY3J1bWJcIiBjbGFzc05hbWU9XCJicmVhZGNydW1iLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtXCI+PEFMaW5rIGhyZWY9XCIvXCI+SG9tZTwvQUxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtIGFjdGl2ZVwiIGFyaWEtY3VycmVudD1cInBhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3JkZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PiAqL31cclxuXHJcbiAgICAgICAgey8qIDxoMT5vcmRlcnM8L2gxPlxyXG4gICAgICAgICAqL31cclxuXHJcbiAgICAgICAgey8qIDx1bCBjbGFzc05hbWU9XCJjaGVja291dC1wcm9ncmVzcy1iYXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgZmxleC13cmFwXCI+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvcGFnZXMvYWNjb3VudFwiPk15IEFjY291bnQ8L0FMaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9XCIvcGFnZXMvb3JkZXJzXCI+T3JkZXJzPC9BTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICBcclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPHVsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoZWNrb3V0LXByb2dyZXNzLWJhciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBmbGV4LXdyYXBcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI0Y5RjlGOVwiLCB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3BhZ2VzL2FjY291bnRcIj5NeSBBY2NvdW50PC9BTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgIDxBTGluayBocmVmPVwiL3BhZ2VzL29yZGVyc1wiPk9yZGVyczwvQUxpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXJcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjJyZW1cIixcclxuICAgICAgICAgICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZFwiLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjRTJFMkUyXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxoND5PcmRlcnM8L2g0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Y2Nlc3MtYWxlcnRcIj5cclxuICAgICAgICAgICAge2ZsYWcgPT09IDEgPyA8cD5Qcm9kdWN0IHN1Y2Nlc3NmdWxseSByZW1vdmVkLjwvcD4gOiBcIlwifVxyXG4gICAgICAgICAgICB7ZmxhZyA9PT0gMiA/IDxwPlByb2R1Y3QgYWRkZWQgdG8gY2FydCBzdWNjZXNzZnVsbHkuPC9wPiA6IFwiXCJ9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIndpc2hsaXN0LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPk15IHdpc2hsaXN0IG9uIFBvcnRvIFNob3AgMzY8L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAge29yZGVycy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lzaGxpc3QtdGFibGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS13aXNobGlzdCBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpc2hsaXN0LWVtcHR5LXBhZ2UgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zaG9wcGluZy1iYWdcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDxwPk5vIHByb2R1Y3RzIE9yZGVyZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxBTGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvc2hvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGJ0bi1hZGQtY2FydCBwcm9kdWN0LXR5cGUtc2ltcGxlIGJ0bi1zaG9wIGZvbnQxIHctYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBnbyBzaG9we1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aXNobGlzdC10YWJsZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtd2lzaGxpc3QgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aHVtYm5haWwtY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgUHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInN0YXR1cy1jb2xcIj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJzdGF0dXMtY29sXCI+T3JkZXIgSWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJzdGF0dXMtY29sXCI+RGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInN0YXR1cy1jb2xcIj5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJwcmljZS1jb2xcIj5Ub3RhbCBQcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImFjdGlvbi1jb2xcIj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAge29yZGVycy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17XCJ3aXNobGlzdC1pdGVtXCIgKyBpbmRleH0gY2xhc3NOYW1lPVwicHJvZHVjdC1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJtZWRpYS13aXRoLWxhenlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9wcm9kdWN0L2RlZmF1bHQvJHtpdGVtLnByb2R1Y3RJZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWFnZS5maWxlVVJMfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGQ9ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI4MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjgwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JkZXItaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aDUgY2xhc3NOYW1lPVwicHJvZHVjdC10aXRsZVwiIHN0eWxlPXt7Zm9udFdlaWdodDpcIjcwMFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9e2AvcHJvZHVjdC9kZWZhdWx0LyR7aXRlbS5wcm9kdWN0SWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5wcm9kdWN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC10aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFdlaWdodDogXCI3MDBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEFMaW5rIGhyZWY9e2AvcHJvZHVjdC9kZWZhdWx0LyR7aXRlbS5wcm9kdWN0SWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5wcm9kdWN0TmFtZS5zcGxpdChcIiBcIikuc2xpY2UoMCwgNCkuam9pbihcIiBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PntpdGVtLm9yZGVySWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF5anMoaXRlbS5vcmRlckRhdGUpLmZvcm1hdChcIllZWVkvTU0vRERcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBnZXRTdGF0dXNDb2xvcihpdGVtPy5zaGlwcGluZ1N0YXR1cykgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0/LnJldHVyblN0YXR1cyAhPT0gXCJOQVwiID8gYCR7aXRlbT8ucmV0dXJuU3RhdHVzfS0oUmV0dXJuKWA6IGl0ZW0/LnNoaXBwaW5nU3RhdHVzIH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2UtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJvbGQtcHJpY2VcIj57J09NUiAnICsgaXRlbS5wcmljZVsgMSBdLnRvRml4ZWQoIDIgKSB9PC9zcGFuPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT01Se1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFyc2VGbG9hdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoaXRlbS5zZWxsaW5nUHJpY2UpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihpdGVtPy5zaGlwcGluZ0NoYXJnZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS50b0ZpeGVkKDIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVEcm9wZG93bj17dG9nZ2xlRHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUlkPXtpdGVtPy5pdGVtSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNPcGVuPXtpc09wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNPcGVuPXtzZXRJc09wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyX3VwZGF0ZV9tZW51X2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0/LnNoaXBwaW5nU3RhdHVzICE9PSBcIkRFTElWRVJFRFwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtPy5zaGlwcGluZ1N0YXR1cyAhPT0gXCJDQU5DRUxFRFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JkZXJfdXBkYXRlX21lbnVfaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJRdWljayBWaWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJDYW5jZWwoaXRlbS5faWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7aXRlbT8uc2hpcHBpbmdTdGF0dXMgIT09IFwiUEVORElOR1wiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtPy5pbnZvaWNlICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9yZGVyX3VwZGF0ZV9tZW51X2l0ZW0gXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlF1aWNrIFZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEb3dubG9hZChpdGVtLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc09wZW4oZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNSAyMGgxNHYtMkg1ek0xOSA5aC00VjNIOXY2SDVsNyA3elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludm9pY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbT8uc2hpcHBpbmdTdGF0dXMgPT09IFwiREVMSVZFUkVEXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmRlcl91cGRhdGVfbWVudV9pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1BvbGljeU1vZGFsKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE9yZGVyUHJvZHVjdElkRm9yUmV0dXJuKGl0ZW0/Ll9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3JkZXJJZEZvclJldHVybihpdGVtPy5vcmRlcklkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc09wZW4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHshaXRlbT8uaW52b2ljZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JkZXJfdXBkYXRlX21lbnVfaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JkZXJfdXBkYXRlX21lbnVfaXRlbSBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlF1aWNrIFZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRG93bmxvYWQoaXRlbS5faWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNSAyMGgxNHYtMkg1ek0xOSA5aC00VjNIOXY2SDVsNyA3elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludm9pY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9yZGVyX3VwZGF0ZV9tZW51X2l0ZW0gXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJRdWljayBWaWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0/Lmludm9pY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyBib3JkZXI6IFwibm9uZVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImdyZXlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJub3QtYWxsb3dlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0/Lmludm9pY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURvd25sb2FkKGl0ZW0uX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzT3BlbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD17aXRlbT8uaW52b2ljZSA/IFwiYmxhY2tcIiA6IFwiZ3JleVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk01IDIwaDE0di0ySDV6TTE5IDloLTRWM0g5djZINWw3IDd6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW52b2ljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwib3JkZXJfdXBkYXRlX21lbnVfaXRlbVwiPkNhbmNlbDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlcl91cGRhdGVfbWVudV9pdGVtXCI+UmV0dXJuPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyX3VwZGF0ZV9tZW51X2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW52b2ljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICB7bG9hZGluZyB8fFxyXG4gICAgICAgICAgICAgICAgKG9yZGVycyAmJiBvcmRlcnMubGVuZ3RoICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInRvb2xib3ggdG9vbGJveC1wYWdpbmF0aW9uIGJvcmRlci0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbiB0b3RhbFBhZ2U9e3RvdGFsUGFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgICB7LyogUmV0dXJuIHN1Ym1pdCBtb2RhbCAqL31cclxuICAgICAge3Nob3dSZXR1cm5Gb3JtTW9kYWwgJiYgKFxyXG4gICAgICAgIDxSZXR1cm5SZXF1ZXN0Rm9ybU1vZGFsXHJcbiAgICAgICAgICBpc09wZW49e3Nob3dSZXR1cm5Gb3JtTW9kYWx9XHJcbiAgICAgICAgICBzZXRJc09wZW49e3NldFNob3dSZXR1cm5Gb3JtTW9kYWx9XHJcbiAgICAgICAgICBoYW5kbGVTdWJtaXQ9e2hhbmRsZU9yZGVyUmV0dXJufVxyXG4gICAgICAgICAgb3JkZXJJZD17b3JkZXJJZEZvclJldHVybn1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICB7LyogUG9saWN5IG1vZGFsICovfVxyXG4gICAgICB7c2hvd1BvbGljeU1vZGFsICYmIChcclxuICAgICAgICA8UmV0dXJuUG9saWN5TW9kYWxcclxuICAgICAgICAgIGlzT3Blbj17c2hvd1BvbGljeU1vZGFsfVxyXG4gICAgICAgICAgc2V0SXNPcGVuPXtzZXRTaG93UG9saWN5TW9kYWx9XHJcbiAgICAgICAgICBoYW5kbGVTdWJtaXQ9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNBY2NlcHRQb2xpY3kodHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldFNob3dSZXR1cm5Gb3JtTW9kYWwodHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldFNob3dQb2xpY3lNb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgd2lzaGxpc3Q6IHN0YXRlLndpc2hsaXN0Lmxpc3QgPyBzdGF0ZS53aXNobGlzdC5saXN0IDogW10sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oeyBzc3I6IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgfSkoXHJcbiAgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcclxuICAgIC4uLldpc2hsaXN0QWN0aW9uLFxyXG4gICAgLi4uQ2FydEFjdGlvbixcclxuICAgIC4uLk1vZGFsQWN0aW9uLFxyXG4gIH0pKE9yZGVycylcclxuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==