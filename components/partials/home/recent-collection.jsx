import React, { useState } from "react";
import Reveal from "react-awesome-reveal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";


// Import Custom Component
import ALink from "../../common/ALink";
import ProductOne from "../../features/products/product-one";
import OwlCarousel from "../../features/owl-carousel";

// Import Settigns
import { fadeIn } from "../../../utils/data/keyframes";
import { productSlider } from "../../../utils/data/slider";
import withApollo from "../.././../server/apollo";
import { gql, useQuery } from "@apollo/client";
function RecentCollection(props) {
  const { bestSelling } = props;



  const GET_PRODUCTS = gql`
  query GetProducts($input: ProductFilters) {
    getProducts(input: $input) {
      maxRecords
      records {
        _id
        attributes {
          attributeValue
          attributeName
        }
        brandId
        brandName
        categoryId
        categoryIdPath
        categoryNamePath
        description
        images {
          fileURL
          originalName
          fileType
        }
        mrp
        offerPrice
        price
        productCode
        productInfo
        productName
        productShortInfo
        rating
        sellingPrice
        shortDescription
        skuId
        status
        stock
        tags
        vendorId
        isBlocked
      }
    }
  }
`;


  const { data: tenPercentData } = useQuery(GET_PRODUCTS, {
    variables: { input: { discount: 10 } },
  });
  const tenPercentProducts = tenPercentData?.getProducts?.records;

  // Query products with 30% discount
  const { data: thirtyPercentData } = useQuery(GET_PRODUCTS, {
    variables: { input: { discount: 30 } },
  });
  const thirtyPercentProducts = thirtyPercentData?.getProducts?.records;

  // Query products with 50% discount
  const { data: fiftyPercentData } = useQuery(GET_PRODUCTS, {
    variables: { input: { discount: 50 } },
  });
  const fiftyPercentProducts = fiftyPercentData?.getProducts?.records;



  return (
    <>
      <section className="recent-products-section" style={{ marginTop: "10px" }}>
        <Reveal
          keyframes={fadeIn}
          delay={100}
          duration={1000}
          triggerOnce
          style={{ marginTop: "30px" }}
        >
          <div
            className="heading shop-list d-flex align-items-center flex-wrap pb-4 mb-0 pl-0 pr-0"
            style={{ borderBottom: "1px solid ", borderColor: "#EEEEEE",justifyContent:"space-between"}}
          >
            <h4 className="section-title text-transform-none mb-0 mr-0">
              50% Off
            </h4>
            <Link href="/shop?discount=10">
      <a
        style={{
          display: "inline-flex",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        <span
          style={{
            display: "inline-block",
            color: "rgba(0, 0, 0, 1)",
            fontWeight: "500",
            transition: "transform 0.3s ease",
          }}
          className="view-all-text"
        >
          View All
        </span>
        <IoIosArrowForward
          style={{
            color:"black",
            fontSize: "20px",
            marginLeft: "5px",
            transition: "transform 0.3s ease",
          }}
          className="arrow-icon"
        />
      </a>
     </Link>
          
          </div>

          <OwlCarousel
            adClass="products-slider carousel-with-bg nav-blackcircle pb-0"
            options={{
              ...productSlider,
              responsive: {
                ...productSlider.responsive,
                0: {
                  items: 2,
                  nav: false
                },
                576: {
                  items: 2,
                  nav: false
                },
                768: {
                  items: 3,
                  nav: true
                },
                992: {
                  items: 4,
                  nav: true
                },
                1200: {
                  items: 5,
                  nav: true
                }
              },
            }}
          >
            {fiftyPercentProducts
              ? fiftyPercentProducts

                .map((item, index) => (
                  <ProductOne
                    adClass="inner-quickview inner-icon"
                    product={item}
                    key={"product-one" + index}
                    customStyle="20%"
                  />
                ))
              : [0, 1].map((item, index) => (
                <div
                  className="skel-pro skel-pro-grid"
                  key={"product-one" + index}
                ></div>
              ))}
          </OwlCarousel>
        </Reveal>
      </section>
      <section className="recent-products-section">
        <Reveal
          keyframes={fadeIn}
          delay={100}
          duration={1000}
          triggerOnce
          style={{ marginTop: "30px" }}
        >
          <div
            className="heading shop-list d-flex align-items-center flex-wrap pb-4 mb-0 pl-0 pr-0"
            style={{ borderBottom: "1px solid ", borderColor: "#EEEEEE",justifyContent:"space-between" }}
          >
            <h4 className="section-title text-transform-none mb-0 mr-0">
              30% Off
            </h4>
            <Link href="/shop?discount=10">
              <a
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    color: "rgba(0, 0, 0, 1)",
                    fontWeight: "500",
                    transition: "transform 0.3s ease",
                  }}
                  className="view-all-text"
                >
                  View All
                </span>
                <IoIosArrowForward
                  style={{
                    color: "black",
                    fontSize: "20px",
                    marginLeft: "5px",
                    transition: "transform 0.3s ease",
                  }}
                  className="arrow-icon"
                />
              </a>
            </Link>
          </div>

          <OwlCarousel
            adClass="products-slider carousel-with-bg nav-blackcircle pb-0"
            // options={productSlider}
            options={{
              ...productSlider,
              responsive: {
                ...productSlider.responsive,
                0: {
                  items: 2,
                  nav: false
                },
                576: {
                  items: 2,
                  nav: false
                },
                768: {
                  items: 3,
                  nav: true
                },
                992: {
                  items: 4,
                  nav: true
                },
                1200: {
                  items: 5,
                  nav: true
                }
              },
            }}
          >
            {thirtyPercentProducts ?
              thirtyPercentProducts.map((item, index) => (
                <ProductOne
                  adClass="inner-quickview inner-icon"
                  product={item}
                  key={"product-one" + index}
                  customStyle="20%"
                />
              ))
              : [0, 1].map((item, index) => (
                <div
                  className="skel-pro skel-pro-grid"
                  key={"product-one" + index}
                ></div>
              ))}
          </OwlCarousel>
        </Reveal>
      </section>
      <section className="recent-products-section">
        <Reveal
          keyframes={fadeIn}
          delay={100}
          duration={1000}
          triggerOnce
          style={{ marginTop: "30px" }}
        >
          <div
            className="heading shop-list d-flex align-items-center flex-wrap pb-4 mb-0 pl-0 pr-0"
            style={{ borderBottom: "1px solid ", borderColor: "#EEEEEE" ,justifyContent:"space-between"}}
          >
            <h4 className="section-title text-transform-none mb-0 mr-0">
              10% Off
            </h4>
            <Link href="/shop?discount=10">
              <a
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    color: "rgba(0, 0, 0, 1)",
                    fontWeight: "500",
                    transition: "transform 0.3s ease",
                  }}
                  className="view-all-text"
                >
                  View All
                </span>
                <IoIosArrowForward
                  style={{
                    color: "black",
                    fontSize: "20px",
                    marginLeft: "5px",
                    transition: "transform 0.3s ease",
                  }}
                  className="arrow-icon"
                />
              </a>
            </Link>
          </div>

          <OwlCarousel
            adClass="products-slider carousel-with-bg nav-blackcircle pb-0"
            // options={productSlider}
            options={{
              ...productSlider,
              responsive: {
                ...productSlider.responsive,
                0: {
                  items: 2,
                  nav: false
                },
                576: {
                  items: 2,
                  nav: false
                },
                768: {
                  items: 3,
                  nav: true
                },
                992: {
                  items: 4,
                  nav: true
                },
                1200: {
                  items: 5,
                  nav: true
                }
              },
            }}
          >
            {
              tenPercentProducts?.map((item, index) => (
                <ProductOne
                  adClass="inner-quickview inner-icon"
                  product={item}
                  key={"product-one" + index}
                  customStyle="20%"
                />
              ))
            }
          </OwlCarousel>
        </Reveal>
      </section>
    </>
  );
}

export default withApollo({ ssr: typeof window === "undefined" })(RecentCollection);
