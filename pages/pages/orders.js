import { connect } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { MdMoreVert } from "react-icons/md";
import { MdDownload } from "react-icons/md";

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
import ReturnForm from "../../components/features/adresses/ReturnForm";
import WarrantyForm from "../../components/features/adresses/WarrantyReqForm"
import { Controller } from "react-hook-form";
import Link from "next/link";
import styles from "../../components/features/dropdown/Dropdown.module.scss";

const GET_ORDERS = gql`
   query GetUserOrderProducts($input: GetUserOrderProductsInput!) {
  getUserOrderProducts(input: $input) {
    maxRecords
    records {
      _id
      productId
      orderId
      vendorId
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
      warranty {
       
        name
        description
        duration
        warrantyType
        warrantyRegister
      }
      warrantyClaimStatus
    }
  }
}
`;

// const GET_ORDERS = gql`
//  query GetUserOrderProducts($input: GetUserOrderProductsInput!) {
//   getUserOrderProducts(input: $input) {
//     maxRecords
//     records {
//       _id
//       productId
//       orderId
//       vendorId
//       itemId
//       productName
//       shortDescription
//       skuId
//       image {
//         fileType
//         fileURL
//         mimeType
//         originalName
//       }
//       returnPeriod
//       mrp
//       sellingPrice
//       shippingCharge
//       paymentMode
//       paymentStatus
//       orderDate
//       shippingStatus
//       shippedDate
//       deliveryDate
//       returnStatus
//       returnDate
//       returnRequestDate
//       returnRejectedDate
//       returnUserReason
//       refundStatus
//       refundAmount
//       refundDate
//       cancelledDate
//       cancelUserReason
//       courierId
//       invoiceNumber
//       invoice {
//         fileType
//         fileURL
//         mimeType
//         originalName
//       }
//       warranty {
//         _id
//         name
//         description
//         duration
//         isEnable
//         isDeleted
//         warrantyType
//       }
//     }
//   }
// }

// `;

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

const WARRANTY_REQ = gql`

mutation CreateWarrantyClaimRequestByUSer($input: createWarrantyClaimRequestByUSerInput!, $image: [Upload]) {
  createWarrantyClaimRequestByUSer(input: $input, image: $image) {
    success
    message
  }
}



`

const WARRANTY_CLIAM_STATUS = gql`

query GetOrderProductWarrantyClaim($input: getOrderProductWarrantyClaimInput) {
  getOrderProductWarrantyClaim(input: $input) {
    _id
    claimStatus
  }
}

`


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
  const [warrantyClaimType, setwarrantyClaimType] = useState([])
  const [cancelUserReason, setCancelUserReason] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false)
  const router = useRouter();
  const page = router.query.page ? parseInt(router.query.page) : 0;
  const [perPage, setPerPage] = useState(10);
  const [orderId, setorderId] = useState()

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
      case "PACKAGE_IN_PROGRESS":
        return "#000000";
      case "DELIVERED":
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
  const [warrantyReq] = useMutation(WARRANTY_REQ)

  const { data, loading, error, refetch } = useQuery(GET_ORDERS, {
    variables: { input: { page: page || 0, size: perPage } },
    fetchPolicy: "network-only"
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
      console.log("all orders", data)
    }
  }, [data, error]);

  //=========================CANCEL ORDER============================\\

  const [showCancelPopup, setshowCancelPopup] = useState(false)
  const [cancelId, setCancelId] = useState(null)

  const orderCancel = async (cancelId) => {
    try {
      // if (!window.confirm("Are you sure you want to cancel this order?"))
      //   return;
      // console.log("confirmed")
      const response = await cancelUserOrderProduct({
        variables: {
          input: {
            _id: cancelId,
            cancelUserReason: cancelUserReason,
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
      setCancelUserReason("")
      setTermsAgreed(false)
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
      console.log("invoice", url);
      if(url){

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'invoice.pdf');
      link.setAttribute("target", "_blank");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  //=========================RETURN ORDER============================\\
  //Drop Down
  const [openDropDown,setOpenDropDown] = useState(false)
  const [openDropDownID,setOpenDropDownID] = useState("")
  const toggleOpenDropDown = (open,itemID)=>{
    if(open){
      setOpenDropDown(true)
      setOpenDropDownID(itemID)
    }else{
      setOpenDropDown(false)
      setOpenDropDownID("")

    }
  }
  const [isOpen, setIsOpen] = useState("");

  const toggleDropdown = (e, itemId) => {
    setIsOpen((prev) => (itemId === prev ? "" : itemId));
  };

  //Return order
  const [showReturnFormModal, setShowReturnFormModal] = useState(false);
  const [orderProductIdForReturn, setOrderProductIdForReturn] = useState("");
  const [orderIdForReturn, setOrderIdForReturn] = useState("");
  const [deliveryDate, setdeliveryDate] = useState()


  //return policy
  const [isAcceptPolicy, setIsAcceptPolicy] = useState(false);
  const [showPolicyModal, setShowPolicyModal] = useState(false);
  const [modalType, setmodalType] = useState("")

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



      if (errors) {

        toast.success(
          "error"
        );

        console.log(errors, "ERRORS");
      }

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

  const handleWarrantyReq = async (formData) => {

    try {

      console.log("warranty req", formData)
      const { image, orderProductId, returnAddress, returnUserReason, claimType } = formData

      const variables = {
        input: {
          claimType: claimType.value,
          issueDescription: returnUserReason,
          productId: orderProductId,
          warrantyAddress: returnAddress


        },
        image,
      };

      const { errors, data } = await warrantyReq({

        variables
      })

      if (errors) {

        console.log("error1", error)

        toast.error(errors.message)
      }


      if (data) {

        setShowReturnFormModal(false);
        refetch();
        toast.success(
          "Your warranty request has been submitted successfully."
        );
      }



    } catch (error) {

      console.log("error2", error)
      toast.error(error.message)
    }


  }




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

        <div className=" d-flex flex-column align-items-center">
          <ul
            className="checkout-progress-bar d-flex justify-content-center flex-wrap mb-0"
            style={{ backgroundColor: "#F9F9F9", width: "100%" }}
          >
            {/* <li className="active">
              <ALink href="/pages/account">My Account</ALink>
            </li> */}
            <li className="">
              <ALink href="/pages/orders">Orders</ALink>
            </li>
          </ul>
        </div>

        {
          showReturnFormModal ?

            modalType === "return" ?

              <ReturnForm
                orderId={orderIdForReturn}
                setIsOpen={setShowReturnFormModal}
                handleSubmit={handleOrderReturn}

              />
              :
              <WarrantyForm
                orderId={orderIdForReturn}
                setIsOpen={setShowReturnFormModal}
                handleSubmit={handleWarrantyReq}
                claimType={warrantyClaimType}
                orderObjId={orderProductIdForReturn}





              />
            :

            <>

              {/* <div
                className="container"
                style={{
                  marginTop: "2rem",
                  borderBottom: "1px solid",
                  borderColor: "#E2E2E2",
                }}
              >
                <h4>Orders</h4>
              </div> */}
              <div className="container">
                <div className="success-alert">
                  {flag === 1 ? <p>Product successfully removed.</p> : ""}
                  {flag === 2 ? <p>Product added to cart successfully.</p> : ""}
                </div>

                {/* <div className="wishlist-title">
                    <h2>My wishlist on Porto Shop 36</h2>
                </div> */}
                {orders.length === 0 ? (
                  <div className="wishlist-table-container mb-0">
                    <div className="table table-wishlist mb-0">
                      <div className="wishlist-empty-page text-center">
                        <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                        <p>No products Ordered</p>
                        <ALink
                          href="/shop"
                          className="btn btn-dark btn-add-cart product-type-simple btn-shop font1 w-auto hoverbtn"
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
                          <th style={{color:"#000"}}
                            className="thumbnail-col"
                            // style={{ paddingLeft: "0px" }}
                          >
                            Product
                          </th>
                          <th style={{color:"#000"}} className="status-col"></th>
                          <th style={{color:"#000"}} className="status-col">Order Id</th>
                          <th style={{color:"#000"}} className="status-col">Date</th>
                          <th style={{color:"#000"}} className="status-col">Status</th>
                          <th style={{color:"#000"}} className="price-col">Total Price</th>
                          <th style={{color:"#000",width:"100px"}} className="action-col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((item, index) => (
                          <tr key={"wishlist-item" + index} className="product-row">
                            <td className="media-with-lazy pl-0" >
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
                                style={{ fontWeight: "600" }}
                              >
                                <ALink href={`/product/default/${item.productId}`}>
                                  {item.productName.length>20?item.productName.slice(0, 20)+"...":item.productName}
                                  
                                </ALink>
                              </h5>
                            </td>
                            <td style={{ color: "black" }}>{item.orderId}</td>
                            <td style={{ color: "black" }}>
                              {dayjs(item.orderDate).format("YYYY/MM/DD")}
                            </td>
                            <td
                              style={{ color: item?.returnStatus !== "NA" ? getReturnStatusColor(item?.returnStatus) : getStatusColor(item?.shippingStatus) }}
                            >
                              {item?.returnStatus !== "NA"
                                ? `RETURN - ${item?.returnStatus}`
                                : item?.shippingStatus.replace(/_/g, " ")}
                            </td>
                            <td style={{ color: "black" }}>
                              <div className="price-box">
                                <>
                                  {/* <span className="old-price">{'OMR ' + item.price[ 1 ].toFixed( 2 ) }</span> */}
                                  <span className="product-price" style={{color:"#000"}}>
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
                              <div className="order_dropDown">

                            <button
                              // className={`${styles.dropdownButton} dropdown_button`}
                              onClick={() => toggleOpenDropDown(openDropDownID===item?.itemId?false:true,item?.itemId)}
                              style={{border:"none",height:"37px",width:"37px",borderRadius:"5px",cursor:"pointer"}}
                            >
                              <MdMoreVert  size={24} />
                            </button>
                            {openDropDown&& openDropDownID===item?.itemId ?
                            <div className="header-menu">
                              <ul className="" style={{listStyle:"none",margin:0}}>
                                {item?.shippingStatus !== "DELIVERED" && item?.shippingStatus !== "CANCELED"&&
                                  <li 
                                    onClick={()=>{
                                      setCancelId(item._id);
                                        setshowCancelPopup(true);
                                        setOpenDropDown(false)
                                        setOpenDropDownID("")
                                    }}
                                  >
                                    Cancel
                                  </li>
                                }
                                {item?.shippingStatus === "DELIVERED" && item?.returnStatus === "NA" &&
                                  <li 
                                    onClick={()=>{
                                      setShowPolicyModal(true);
                                      setOrderProductIdForReturn(item?._id);
                                      setOrderIdForReturn(item?.orderId);
                                      setmodalType("return");
                                      setdeliveryDate(item?.deliveryDate);
                                      setOpenDropDown(false)
                                      setOpenDropDownID("")
                                    }}
                                  >
                                    Return
                                  </li>
                                }
                                {item?.shippingStatus === "DELIVERED" && item?.warranty?.warrantyRegister === true&&
                                  <li onClick={()=>{
                                    if (
                                      item.warrantyClaimStatus === null ||
                                      item.warrantyClaimStatus === "REJECTED" ||
                                      item.warrantyClaimStatus === "REPLACEMENT_COMPLETED"
                                    ) {
                                      setShowPolicyModal(true);
                                      setOrderProductIdForReturn(item?._id);
                                      setOrderIdForReturn(item?.orderId);
                                      setmodalType("complaint");
                                      setdeliveryDate(item?.deliveryDate);
                                      setOpenDropDown(false)
                                      setOpenDropDownID("")
                                    }
                                    return;
                                  }}>
                                    Complaint
                                  </li>
                                }
                                <li onClick={()=> {
                                  if (item?.invoice) {
                                    handleDownload(item._id);
                                    setOpenDropDown(false)
                                    setOpenDropDownID("")
                                  }
                                }} style={item?.invoice ? {} : { pointerEvents: "none", opacity: 0.5, color: "gray" }}>
                                  <MdDownload size={20} />
                                  Invoice
                                </li>
                              

                              </ul>
                            </div>:null
                            }
                                </div>
                              {/* <Dropdown
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
                                      title="Cancel the product"
                                      onClick={(e) => {
                                        console.log("Item ID:", item._id);
                                        e.preventDefault();
                                        setCancelId(item._id);
                                        setshowCancelPopup(true);
                                      }}
                                    >
                                      Cancel
                                    </div>
                                  ) : (
                                    <>
                                      {item?.shippingStatus === "DELIVERED" && item?.returnStatus === "NA" && (
                                        <div
                                          className="order_update_menu_item"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            setShowPolicyModal(true);
                                            setOrderProductIdForReturn(item?._id);

                                            setOrderIdForReturn(item?.orderId);
                                            setIsOpen(false);
                                            setmodalType("return")
                                            setdeliveryDate(item?.deliveryDate)
                                          }}
                                        >
                                          Return
                                        </div>
                                      )}

                                      {



                                        item?.shippingStatus === "DELIVERED" && item?.warranty?.warrantyRegister === true &&
                                        (


                                          <div
                                            className="order_update_menu_item"
                                            style={{

                                              cursor:
                                                item.warrantyClaimStatus === null ||
                                                  item.warrantyClaimStatus === "REJECTED" ||
                                                  item.warrantyClaimStatus === "REPLACEMENT_COMPLETED"
                                                  ? "pointer"
                                                  : "not-allowed",

                                            }}

                                            onClick={(e) => {
                                              // Prevent click when not allowed
                                              if (
                                                item.warrantyClaimStatus === null ||
                                                item.warrantyClaimStatus === "REJECTED" ||
                                                item.warrantyClaimStatus === "REPLACEMENT_COMPLETED"
                                              ) {
                                                e.preventDefault();
                                                setShowPolicyModal(true);
                                                setOrderProductIdForReturn(item?._id);
                                                setOrderIdForReturn(item?.orderId);
                                                setIsOpen(false);
                                                setmodalType("complaint");
                                                setdeliveryDate(item?.deliveryDate);
                                              }
                                              return;

                                            }}


                                          // onClick={(e) => {

                                          //   e.preventDefault();
                                          //   setShowPolicyModal(true);
                                          //   setOrderProductIdForReturn(item?._id);

                                          //   setOrderIdForReturn(item?.orderId);
                                          //   setIsOpen(false);
                                          //   setmodalType("complaint")
                                          //   setdeliveryDate(item?.deliveryDate)

                                          // }}
                                          >
                                            Complaint
                                          </div>
                                        )

                                      }
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
                                </div>
                              </Dropdown> */}
                            </td>
                          </tr>
                        ))}
                        {showCancelPopup && (
                          <div className="popup-overlay">
                            <div className="popup-content">
                              <h4 className="popup-head-content">Cancel Order</h4>
                              <hr class="custom-line" />
                              <div className="form-group">
                                <label
                                  style={{
                                    fontFamily: "Poppins",
                                    fontWeight: "400px",
                                    lineHeight: "20px",
                                  }}
                                >
                                  Are you sure you want to cancel the order ?{" "}
                                  {/* <ab className="required" title="required">
                                  *
                                </ab> */}
                                </label>
                                <input
                                  name="cancelUserReason"
                                  type="text"
                                  className="form-control"
                                  value={cancelUserReason}
                                  placeholder="Reason for canceling the order"
                                  onChange={(e) => setCancelUserReason(e.target.value)}
                                  style={{ marginTop: "10px" }}
                                />
                                {/* {errors?.label ? (
                                <div style={{ color: "red", fontWeight: "300" }}>
                                  {errors?.label?.message} 
                                </div>
                              ) : null}*/}
                              </div>
                              <p className="popup-body-content" style={{ lineHeight: "18px", fontSize: "12px" }}>Canceling this order means it will no longer be processed or delivered.
                                If this was unintentional, you can close this popup and continue shopping.<br />
                                Please note that refunds, if applicable, will be processed as per our refund policy</p>
                              <div className="form-group d-flex align-items-center" >
                                <input
                                  name="termsAgreed"
                                  type="checkbox"
                                  className="form-control"
                                  value={termsAgreed}
                                  onChange={(e) => setTermsAgreed(e.target.checked)}
                                  style={{ marginRight: 10, width: "15px" }}
                                />
                                <label
                                  htmlFor="termsAgreed"
                                  style={{
                                    fontFamily: "Poppins",
                                    fontWeight: "400px",
                                    fontSize: "12px",
                                    // lineHeight: "20px",
                                    padding: 0,
                                    margin: 0,
                                  }}
                                >
                                  I accept and confirm that canceling this order{" "}
                                  {/* <ab className="required" title="required">
                                      *
                                    </ab> */}
                                </label>

                              </div>
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
                                  disabled={!termsAgreed}
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

            </>

        }


      </main>

      {/* Return submit modal */}


      {/* {showReturnFormModal && (
        <ReturnRequestFormModal
          isOpen={showReturnFormModal}
          setIsOpen={setShowReturnFormModal}
          handleSubmit={handleOrderReturn}
          orderId={orderIdForReturn}
        />
      )} */}



      {/* Policy modal */}
      {showPolicyModal && (
        <ReturnPolicyModal
          isOpen={showPolicyModal}
          setIsOpen={setShowPolicyModal}
          orderId={orderIdForReturn}
          orderObjId={orderProductIdForReturn}
          modalType={modalType}
          deliveryDate={deliveryDate}
          cliamType={setwarrantyClaimType}
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
