import { connect } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import ALink from "../../components/common/ALink";
import { toast } from "react-toastify";
import { actions as WishlistAction } from "../../store/wishlist";
import { actions as CartAction } from "../../store/cart";
import { actions as ModalAction } from "../../store/modal";
import { IoMdHome } from "react-icons/io";
import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import withApollo from "../../server/apollo";
import dayjs from "dayjs";
import { Helmet } from "react-helmet";
import Pagination from "../../components/features/pagination";
import { useRouter } from "next/router";
import Dropdown from "../../components/features/dropdown/Dropdown";
import ReturnRequestFormModal from "../../components/features/modals/ReturnRequestFormModal";
import CustomModal from "../../components/features/modals/CustomModal";
import ReturnPolicyModal from "../../components/features/modals/ReturnPolicyModal";
import { set } from "react-hook-form";

const GET_ORDERS = gql`
  query GetUserOrderProducts($input: GetUserOrderProductsInput!) {
    getUserOrderProducts(input: $input) {
      maxRecords
      records {
        _id
        productId
        vendorId
        orderId
        itemId
        productName
        shortDescription
        skuId
        image {
          fileType
          fileURL
          mimeType
          originalName
        }
        returnPeriod
        mrp
        sellingPrice
        shippingCharge
        paymentMode
        paymentStatus
        orderDate
        shippingStatus
        shippedDate
        deliveryDate
        returnStatus
        returnDate
        returnRequestDate
        returnRejectedDate
        returnUserReason
        refundStatus
        refundAmount
        refundDate
        cancelledDate
        cancelUserReason
        courierId
        invoiceNumber
        invoice {
          fileType
          fileURL
          mimeType
          originalName
        }
      }
    }
  }
`;

const CANCEL_ORDER = gql`
  mutation CancelUserOrderProduct($input: CancelUserOrderProductInput!) {
    cancelUserOrderProduct(input: $input) {
      _id
    }
  }
`;

const RETURN_ORDER = gql`
  mutation ReturnUserOrderProduct(
    $input: ReturnUserOrderProductInput!
    $image: [Upload]
  ) {
    returnUserOrderProduct(input: $input, image: $image) {
      _id
    }
  }
`;

const DOWNLOAD_INVOICE = gql`
  mutation GetUserIvoiceSignedUrl($input: GetUserIvoiceUrlInput!) {
    getUserIvoiceSignedUrl(input: $input) {
      url
    }
  }
`;

function Orders(props) {
  const { wishlist, addToCart, removeFromWishlist, showQuickView } = props;
  const [flag, setFlag] = useState(0);
  const [orders, setOrders] = useState([]);
  const router = useRouter();
  const page = router.query.page ? parseInt(router.query.page) : 0;
  const [perPage, setPerPage] = useState(5);

  const onMoveFromToWishlit = (e, item) => {
    setFlag(2);
    e.preventDefault();
    addToCart(item);
    removeFromWishlist(item);
  };

  const removeProduct = (e, item) => {
    setFlag(1);
    e.preventDefault();
    removeFromWishlist(item);
  };

  const onQuickViewClick = (e, product) => {
    e.preventDefault();
    showQuickView(product.slug);
  };

  const getStatusColor = (status) => {
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

  const getReturnStatusColor = (status) => {
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

  const [cancelUserOrderProduct] = useMutation(CANCEL_ORDER);
  const [downloadInvoice] = useMutation(DOWNLOAD_INVOICE);
  const [returnOrder] = useMutation(RETURN_ORDER);

  const { data, loading, error, refetch } = useQuery(GET_ORDERS, {
    variables: { input: { page: page || 0, size: perPage } },
  });

  const totalPage = data
    ? parseInt(data?.getUserOrderProducts?.maxRecords / perPage) +
      (data?.getUserOrderProducts?.maxRecords % perPage ? 1 : 0)
    : 0;

  useEffect(() => {
    if (error) {
      console.error("Error fetching orders:", error);
    } else if (data) {
      setOrders(data.getUserOrderProducts.records || []);
    }
  }, [data, error]);

   //=========================CANCEL ORDER============================\\

   const [showCancelPopup,setshowCancelPopup]=useState(false)
   const [cancelId,setCancelId]=useState(null)

  const orderCancel = async (cancelId) => {
    try {
      // if (!window.confirm("Are you sure you want to cancel this order?"))
      //   return;
      // console.log("confirmed")
      const response = await cancelUserOrderProduct({
        variables: {
          input: {
            _id: cancelId,
          },
        },
      });
      console.log(response);
      setshowCancelPopup(false)
      setCancelId(null)
      refetch();
      toast.success(
        <div style={{ padding: "10px" }}>Your order has been canceled. </div>
      );
    } catch (error) {
      console.log(error);
      toast.error(<div style={{ padding: "10px" }}>{error?.message}</div>);
    }
  };

  const handleDownload = async (_id) => {
    try {
      const invoice = await downloadInvoice({
        variables: {
          input: {
            _id,
          },
        },
      });

      const url = invoice.data.getUserIvoiceSignedUrl.url;
      // console.log("invoice", url);
      // const link = document.createElement('a');
      // link.href = url;
      // link.setAttribute('download', 'invoice.pdf');
      // document.body.appendChild(link);
      // link.click();
      // document.body.removeChild(link);
      window.open(url, "_blank");
    } catch (error) {
      toast.error(error.message);
    }
  };

  //=========================RETURN ORDER============================\\
  //Drop Down
  const [isOpen, setIsOpen] = useState("");
  const toggleDropdown = (e, itemId) => {
    setIsOpen((prev) => (itemId === prev ? "" : itemId));
  };

  //Return order
  const [showReturnFormModal, setShowReturnFormModal] = useState(false);
  const [orderProductIdForReturn, setOrderProductIdForReturn] = useState("");
  const [orderIdForReturn, setOrderIdForReturn] = useState("");

  //return policy
  const [isAcceptPolicy, setIsAcceptPolicy] = useState(false);
  const [showPolicyModal, setShowPolicyModal] = useState(false);

  function closeModal() {
    setShowReturnFormModal(false);
  }

  const handleOrderReturn = async (formData) => {
    try {
      const { bankDetails, returnAddress, returnUserReason, image } = formData;

      console.log(bankDetails, "BANK DETAILS");
      console.log(returnAddress, "RETURN ADDRESS");
      console.log(returnUserReason, "RETURN USER REASON");
      console.log(image, " = IMAGES");

      if (!bankDetails) {
        throw new Error("Bank Details are required!");
      }
      if (!returnAddress) {
        throw new Error("Return address is required!");
      }
      if (!returnUserReason) {
        throw new Error("Reason is required!");
      }

      const variables = {
        input: {
          _id: orderProductIdForReturn,
          bankDetails,
          returnAddress,
          returnUserReason,
        },
        image,
      };

      console.log(variables, "VARIABLES");

      const { data, errors } = await returnOrder({
        variables,
      });

      if (errors) console.log(errors, "ERRORS");

      console.log(data, 'RESPONSE RETURN SUBMIT')

      if (data?.returnUserOrderProduct?._id) {
        setShowReturnFormModal(false);
        refetch();
        toast.success(
          "Your order return request has been submitted successfully."
        );

      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>Orders | Arab Deals</title>
      </Helmet>
      <main className="main">
        <div className="container">
          <nav aria-label="breadcrumb" className="breadcrumb-nav">
            <div className="container">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <ALink href="/">
                    <IoMdHome style={{ fontSize: "16px" }} />
                    {/* <i className="icon-home" ></i> */}
                  </ALink>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <ALink href="/pages/account">My account</ALink>
                </li>

                <li className="breadcrumb-item active" aria-current="page">
                  <ALink className="activeitem" href="/pages/orders">
                    Orders
                  </ALink>
                </li>
              </ol>
            </div>
          </nav>
        </div>
        {/* <div className="page-header"> */}

        {/* <div className="container d-flex flex-column align-items-center"> */}
        {/* <nav aria-label="breadcrumb" className="breadcrumb-nav">
                        <div className="container">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><ALink href="/">Home</ALink></li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Orders
                                </li>
                            </ol>
                        </div>
                    </nav> */}

        {/* <h1>orders</h1>
         */}

        {/* <ul className="checkout-progress-bar d-flex justify-content-center flex-wrap">
          <li className="">
              <ALink href="/pages/account">My Account</ALink>
            </li>
            <li className="active">
              <ALink href="/pages/orders">Orders</ALink>
            </li>
           
          </ul>
        </div>
      </div> */}

        <div className=" d-flex flex-column align-items-center">
          <ul
            className="checkout-progress-bar d-flex justify-content-center flex-wrap"
            style={{ backgroundColor: "#F9F9F9", width: "100%" }}
          >
            <li className="">
              <ALink href="/pages/account">My Account</ALink>
            </li>
            <li className="active">
              <ALink href="/pages/orders">Orders</ALink>
            </li>
          </ul>
        </div>

        <div
          className="container"
          style={{
            marginTop: "2rem",
            borderBottom: "1px solid",
            borderColor: "#E2E2E2",
          }}
        >
          <h4>Orders</h4>
        </div>
        <div className="container">
          <div className="success-alert">
            {flag === 1 ? <p>Product successfully removed.</p> : ""}
            {flag === 2 ? <p>Product added to cart successfully.</p> : ""}
          </div>
          {/* <div className="wishlist-title">
                    <h2>My wishlist on Porto Shop 36</h2>
                </div> */}
          {orders.length === 0 ? (
            <div className="wishlist-table-container">
              <div className="table table-wishlist mb-0">
                <div className="wishlist-empty-page text-center">
                  <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                  <p>No products Ordered</p>
                  <ALink
                    href="/shop"
                    className="btn btn-dark btn-add-cart product-type-simple btn-shop font1 w-auto"
                  >
                    go shop{" "}
                  </ALink>
                </div>
              </div>
            </div>
          ) : (
            <div className="wishlist-table-container">
              <table className="table table-wishlist mb-0">
                <thead>
                  <tr>
                    <th
                      className="thumbnail-col"
                      style={{ paddingLeft: "0px" }}
                    >
                      Product
                    </th>
                    <th className="status-col"></th>
                    <th className="status-col">Order Id</th>
                    <th className="status-col">Date</th>
                    <th className="status-col">Status</th>
                    <th className="price-col">Total Price</th>
                    <th className="action-col"></th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((item, index) => (
                    <tr key={"wishlist-item" + index} className="product-row">
                      <td className="media-with-lazy">
                        <figure className="product-image-container">
                          <ALink
                            href={`/product/default/${item.productId}`}
                            className="product-image"
                          >
                            <LazyLoadImage
                              alt="product"
                              src={item.image.fileURL}
                              threshold={500}
                              width="80"
                              height="80"
                              className="order-image"
                            />
                          </ALink>
                        </figure>
                      </td>
                      <td>
                        {/* <h5 className="product-title" style={{fontWeight:"700"}}>
                          <ALink href={`/product/default/${item.productId}`}>
                            {item.productName}
                          </ALink>
                        </h5> */}
                        <h5
                          className="product-title"
                          style={{ fontWeight: "700" }}
                        >
                          <ALink href={`/product/default/${item.productId}`}>
                            {item.productName.split(" ").slice(0, 4).join(" ")}
                            ...
                          </ALink>
                        </h5>
                      </td>
                      <td style={{ color: "black" }}>{item.orderId}</td>
                      <td style={{ color: "black" }}>
                        {dayjs(item.orderDate).format("YYYY/MM/DD")}
                      </td>
                      <td
                        style={{ color: item?.returnStatus !== "NA" ? getReturnStatusColor(item?.returnStatus): getStatusColor(item?.shippingStatus) }}
                      >
                        {item?.returnStatus !== "NA" ? `${item?.returnStatus}-(Return)`: item?.shippingStatus }
                      </td>

                      <td style={{ color: "black" }}>
                        <div className="price-box">
                          <>
                            {/* <span className="old-price">{'OMR ' + item.price[ 1 ].toFixed( 2 ) }</span> */}
                            <span className="product-price">
                              OMR{" "}
                              {parseFloat(
                                Number(item.sellingPrice) +
                                  Number(item?.shippingCharge)
                              ).toFixed(2)}
                            </span>
                          </>
                        </div>
                      </td>

                      <td>
                        <Dropdown
                          toggleDropdown={toggleDropdown}
                          itemId={item?.itemId}
                          isOpen={isOpen}
                          setIsOpen={setIsOpen}
                        >
                          <div className="order_update_menu_container">
                            {item?.shippingStatus !== "DELIVERED" &&
                            item?.shippingStatus !== "CANCELED" ? (
                              <div
                                className="order_update_menu_item"
                                title="Quick View"
                                onClick={(e) => {
                                  console.log("Item ID:", item._id);
                                  e.preventDefault();
                                  setshowCancelPopup(true);
                                  setCancelId(item._id);
                                }}
                              >
                                Cancel
                              </div>
                            ) : (
                              <>
                                {/* {item?.shippingStatus !== "PENDING" &&
                                  item?.invoice && (
                                    <div
                                      className="order_update_menu_item "
                                      title="Quick View"
                                      style={{ border: "1px solid" }}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        handleDownload(item._id);
                                        setIsOpen(false)
                                      }}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 24 24"
                                        style={{
                                          marginRight: "5px",
                                        }}
                                      >
                                        <path
                                          fill="white"
                                          d="M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"
                                        />
                                      </svg>
                                      Invoice
                                    </div>
                                  )} */}
                                {item?.shippingStatus === "DELIVERED" && item?.returnStatus === "NA" &&  (
                                  <div
                                    className="order_update_menu_item"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setShowPolicyModal(true);
                                      setOrderProductIdForReturn(item?._id);
                                      setOrderIdForReturn(item?.orderId);
                                      setIsOpen(false);
                                    }}
                                  >
                                    Return
                                  </div>
                                )}
                                {/* {!item?.invoice ? (
                                  <div
                                    className="order_update_menu_item"
                                    disabled
                                  >
                                    Cancel
                                  </div>
                                ) : (
                                  <div
                                    className="order_update_menu_item "
                                    title="Quick View"
                                    style={{ border: "1px solid" }}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      handleDownload(item._id);
                                    }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="1em"
                                      height="1em"
                                      viewBox="0 0 24 24"
                                      style={{
                                        marginRight: "5px",
                                      }}
                                    >
                                      <path
                                        fill="white"
                                        d="M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"
                                      />
                                    </svg>
                                    Invoice
                                  </div>
                                )} */}
                              </>
                            )}
                            <button
                              className="order_update_menu_item "
                              title="Quick View"
                              style={
                                item?.invoice
                                  ? { border: "none" }
                                  : {
                                      color: "grey",
                                      border: "none",
                                      cursor: "not-allowed",
                                    }
                              }
                              onClick={(e) => {
                                e.preventDefault();
                                if (item?.invoice) {
                                  handleDownload(item._id);
                                  setIsOpen(false);
                                }
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                                style={{
                                  marginRight: "5px",
                                }}
                              >
                                <path
                                  fill={item?.invoice ? "black" : "grey"}
                                  d="M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"
                                />
                              </svg>
                              Invoice
                            </button>

                            {/* <div className="order_update_menu_item">Cancel</div>
                            <div className="order_update_menu_item">Return</div>
                            <div className="order_update_menu_item">
                              Invoice
                            </div> */}
                          </div>
                        </Dropdown>
                      </td>
                    </tr>
                  ))}

                    {showCancelPopup && (
                      <div className="popup-overlay">
                        <div className="popup-content">
                          <h4 className="popup-head-content">Cancel Order</h4>
                          <hr class="custom-line" />
                          <p className="popup-body-content" style={{lineHeight:"18px"}}>Canceling this order means it will no longer be processed or delivered.
                          If this was unintentional, you can close this popup and continue shopping.<br/>
                          Please note that refunds, if applicable, will be processed as per our refund policy</p>
                          <div className="popup-actions">
                          <button
                            onClick={() => {
                              setshowCancelPopup(false);
                              setCancelId(null);
                            }}
                            className="btn btn-outline-dark"
                          >
                            CANCEL
                          </button>
                          <button
                            className="btn btn-dark"
                            onClick={() => orderCancel(cancelId)} 
                          >
                            CONFIRM
                          </button>
                          </div>
                        </div>
                      </div>
                    )} 

                </tbody>
              </table>
              {loading ||
                (orders && orders.length && (
                  <div className="container">
                    <nav className="toolbox toolbox-pagination border-0">
                      <Pagination totalPage={totalPage} />
                    </nav>
                  </div>
                ))}
            </div>
          )}
        </div>
      </main>

      {/* Return submit modal */}
      {showReturnFormModal && (
        <ReturnRequestFormModal
          isOpen={showReturnFormModal}
          setIsOpen={setShowReturnFormModal}
          handleSubmit={handleOrderReturn}
          orderId={orderIdForReturn}
        />
      )}
      {/* Policy modal */}
      {showPolicyModal && (
        <ReturnPolicyModal
          isOpen={showPolicyModal}
          setIsOpen={setShowPolicyModal}
          handleSubmit={() => {
            setIsAcceptPolicy(true);
            setShowReturnFormModal(true);
            setShowPolicyModal(false);
          }}
        />
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    wishlist: state.wishlist.list ? state.wishlist.list : [],
  };
};

export default withApollo({ ssr: typeof window === "undefined" })(
  connect(mapStateToProps, {
    ...WishlistAction,
    ...CartAction,
    ...ModalAction,
  })(Orders)
);
