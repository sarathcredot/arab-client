import React, { useEffect, useState } from "react";
import ALink from "../../components/common/ALink";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import { useRouter } from "next/router";
import { IoMdHome, IoIosCopy, IoIosCheckmark, } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { gql, useMutation, useLazyQuery, useQuery } from "@apollo/client";
import { FaCalendarDays } from "react-icons/fa6";
import withApollo from "../../server/apollo";
import { Helmet } from "react-helmet";
import Pagination from "../../components/features/pagination";




function Account() {
  const id = localStorage?.getItem("userId");
  const token = localStorage.getItem("arabtoken");


  const [cupons, setcoupons] = useState([])
  const [copycode, setcopycode] = useState(null)
  const [perPage, setPerPage] = useState(4);
  const [currentPage,setCurrentPage]=useState(0)


  // console.log("this is userdata",userData)

  const router = useRouter();

  const query = router.query;

  const { page } = query;


  const GET_COUPONS = gql`
  
  query GetCouponsByUser($input: getCouponsByUserInput!) {
  getCouponsByUser(input: $input) {
    records {
      _id
      name
      code
      description
      orderCount
      discountType
      couponApplicableType
      discountValue
      max_discount
      minOrderAmount
      validCategories {
        category
      }
      validProducts {
        product
      }
      validUsers {
        user
      }
      validBrands {
        brand
      }
      usageLimit
      usagePerUserLimit
      startDate
      expiryDate
      isActive
    }
    maxRecords
  }
}
`;

  const {
    data: couponsData,
    loading: couponsLoading,
    error: couponsError,
    refetch: couponsRefetch,
  } = useQuery(GET_COUPONS, {

    variables: {
      input: {
        size:perPage ,
        page:currentPage ,
      }
    }
  });


  useEffect(() => {

    if (couponsData) {

      console.log("coupons data", couponsData)
      setcoupons(couponsData.getCouponsByUser.records)

    } else if (couponsError) {

      console.log("coupons error", couponsError)
    }

  }, [query, perPage, token, couponsData, couponsRefetch, couponsError])


  const codeCopy = (index) => {

    setcopycode(index)

    setTimeout(() => {
      setcopycode(null)
    }, 1000)
  }

  const totalRecords = couponsData?.getCouponsByUser?.maxRecords || 0;
  const totalPages = Math.ceil(totalRecords / perPage);




   


  return (
    <div>
      <Helmet>
        <title>Account | Arab Deals</title>
      </Helmet>
      <main className="main main-test">

        <nav aria-label="breadcrumb" className="breadcrumb-nav">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <ALink href="/">
                  <IoMdHome style={{ fontSize: "16px" }} />

                </ALink>
              </li>

              <li className="breadcrumb-item active" aria-current="page">
                <ALink className="activeitem" href="/pages/account">
                  Coupons
                </ALink>
              </li>
            </ol>
          </div>
        </nav>



        <div className=" d-flex flex-column align-items-center">
          {/* <h1>orders</h1>*/}

          <ul
            className="checkout-progress-bar d-flex justify-content-center flex-wrap"
            style={{ backgroundColor: "#F9F9F9", width: "100%" }}
          >
            <li className="">
              <ALink href="/pages/account">My Account</ALink>
            </li>
            <li className="active">
              <ALink href="/pages/account">Coupons</ALink>
            </li>
          </ul>
        </div>
      </main>

      <div className="container coupon-container-main" >

        {
          cupons.map((data, index) => (

            <div className="coupon-box-main" key={index} >
              <div style={{ display: "flex", justifyContent: "space-between" }} className="" >
                <h5> {data.name} </h5>

                {/* {
                  copycode === index ? <span style={{ cursor: "pointer", }} ><IoIosCheckmark style={{ fontSize: "15px" }} /> copied </span>

                    : <span onClick={() => { codeCopy(index) }} style={{ cursor: "pointer", }} > code: {data.code}<IoIosCopy style={{ fontSize: "15px" }} /></span>

                } */}
               

              </div>
              <div style={{display:"flex",justifyContent:"space-between"}} >

              <p>{data.description}  </p>

              <button className="coupon-btn"  > Apply </button>


              </div>

            



              <span style={{fontSize:"12px"}}  > 
                {/* <FaCalendarDays style={{ color: "orange", font: "15px" }} />  */}
                <img style={{width:"20px",height:"20px"}} src="images/icon/vuesax/bold/calendar.svg" alt="" />
                Expires on:{" "}
                {new Date(data.expiryDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}  </span>



            </div>

          ))
        }

        </div>

        <div className="container pagination-container " >
        <div className="d-flex justify-content-end mt-0 ">
              <ul className="pagination">
                <li className={`page-item ${currentPage === 0 ? "disabled" : ""}`}>
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 0}
                  >
                   <i className="icon-angle-left"></i>
                  </button>
                </li>
                {Array.from({ length: totalPages }, (_, index) => (
                  <li
                    key={index}
                    className={`page-item ${currentPage === index ? "active" : ""}`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(index)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
                {currentPage < totalPages - 1 && (
                  <li className={`page-item ${currentPage === totalPages - 1 ? "disabled" : ""}`}>
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={currentPage === totalPages - 1}
                    >
                      <i className="icon-angle-right"></i>
                    </button>
                  </li>
                )}
              </ul>
            </div>

        </div>

      


    </div>
  );
}

export default withApollo({ ssr: typeof window === "undefined" })(Account);
