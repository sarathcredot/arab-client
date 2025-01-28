import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import styles from "./ReturnModal.module.scss";
import { useRouter } from "next/router";



/**
 * 
 * input: { _id, returnUserReason, bankDetails, returnAddress },
 * 
 * const validatedBankDetails = {
        accountHolderName: bankDetails?.accountHolderName || "",
        accountNumber: bankDetails?.accountNumber || "",
        ifscCode: bankDetails?.ifscCode || "",
        bankName: bankDetails?.bankName || "",
        branchName: bankDetails?.branchName || "",
    };

    const validatedReturnAddress = returnAddress ? {
        firstname: returnAddress.firstname || "",
        email: returnAddress.email || "",
        mobile: returnAddress.mobile || "",
        country: returnAddress.country || "India", // Default to "India"
        houseNumber: returnAddress.houseNumber || "",
        streetName: returnAddress.streetName || "",
        apartment: returnAddress.apartment || "",
        suite: returnAddress.suite || "",
        unit: returnAddress.unit || "",
        city: returnAddress.city || "",
        postCode: returnAddress.postCode || "",
    } : null;
 */

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "90vh", // Allow modal to take up 90% of viewport height
    overflowY: "auto",
    border: "none"
  },
};

export default function ReturnPolicyModal({ isOpen, setIsOpen, handleSubmit ,orderId}) {
  function closeModal() {
    setIsOpen(false);
    setIsExpanded(false);
  }

  const [isExpanded, setIsExpanded] = useState(false);
  console.log("modal page order is ",orderId)

  const toggleViewMore = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  if (!isOpen) return null;
  const router=useRouter()

  return (
    <>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
        // contentLabel="Return Order"
        >
          {/* <div className={styles.modalOverlay  } onClick={closeModal}></div> */}
          {isOpen && (
            <>
              <div className={styles.modalContent} style={{ zIndex: 9999999 }}>
                <div className="container">

                  <h1 className={styles.retuenTitle} > Return Policy  </h1>
                  <div style={{ borderTop: '1px solid #E2E2E2', marginTop: '10px' }} > </div>


                  <p className={styles.policyContent} > Lorem ipsum dolor sit amet consectetur. Sapien ut libero sed lacinia egestas pace.
                    Lorem ipsum dolor sit amet consectetur. Sapien ut libero sed lacinia egestas pace. Lorem ipsum dolor
                    sit amet consectetur. Sapien ut libero sed lacinia egestas pace. Lorem ipsum dolor sit amet consectetur.
                    Sapien ut libero sed lacinia egestas pace.  Lorem ipsum dolor sit amet consectetur. Sapien ut libero sed
                    lacinia egestas pace. Lorem ipsum dolor sit amet consectetur. Sapien ut libero sed lacinia egestas pace.
                    Lorem ipsum dolor sit amet consectetur.
                    Sapien ut libero sed lacinia egestas pace. Lorem ipsum dolor sit amet consectetur. </p>

                  <p className={styles.bottomContent} > Know more about <span className={styles.bottomContentSpan} > Privacy & Policy  </span> </p>

                  <div className={styles.flexactions}  style={{ display: "flex", justifyContent: "end", alignItems: "center", gap: "10px" ,marginTop:"20px"}} >

                    <div
                      href="/pages/cart"
                      className="btn btn-block view-cart "
                      style={{ border: "1px solid #000", background: "white", width: "231px", height: "52px" }}
                      onClick={closeModal}
                    >
                      Cancel
                    </div>
                   

                    <div
                     
                      className="btn btn-block view-cart "
                      style={{ border: "1px solid #000", background: "black", color:"white", width: "231px", height: "52px" }}
                      // onClick={()=>{router.push({pathname:"/pages/orderReturnForm",query:{id:orderId}})}}
                      onClick={handleSubmit}
                    >
                      Accept
                    </div>


                  </div>



                  {/* <div className={styles.container}>
                    <p>
                      Our return policy allows returns within 15 days of purchase.
                      Items must be in original condition and packaging.
                      {isExpanded && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `
  <ul>
    <li>
      If the product arrives <strong>defective</strong> or is
      <strong>damaged during shipping</strong>, you are entitled to a replacement or refund.
    </li>
    <li>
      Please contact our <strong>customer support team</strong> within <strong>7 days</strong> of delivery to
      report the issue.
    </li>
  </ul>
  <h5>3. Return Process</h5>
  <ul>
    <li>
      Initiate your return by contacting our <strong>customer support team</strong> via
      [email] or [phone number]. Provide your <strong>order number</strong> and a description
      of the issue.
    </li>
    <li>
      Upon approval, you will receive a <strong>return authorization number (RAN)</strong> and
      detailed instructions on how to ship the item back to us.
    </li>
  </ul>
  <h5>4. Shipping Costs for Returns</h5>
  <ul>
    <li>
      <strong>Non-defective items</strong>: Customers are responsible for return shipping
      costs.
    </li>
    <li>
      <strong>Defective/damaged items</strong>: We will cover the return shipping costs if
      the issue is verified.
    </li>
  </ul>
  <h5>5. Refunds</h5>
  <ul>
    <li>
      Refunds are processed within <strong>5–7 business days</strong> of receiving and
      inspecting the returned item.
    </li>
    <li>
      The refund will be issued to the <strong>original payment method</strong>. Please note
      that it may take additional time for your bank or credit card provider to reflect
      the refund.
    </li>
  </ul>
  <h5>7. Exchange Policy</h5>
  <ul>
    <li>
      Exchanges are available for items of the same value. For different items, the return
      and purchase of the new item must be completed separately.
    </li>
  </ul>
  <h5>8. Contact Us</h5>
  <p>
    If you have any questions or need assistance, please reach out to our
    <strong>customer support team</strong> at:
  </p>
  <ul>
    <li><strong>Email</strong>: support@example.com</li>
    <li><strong>Phone</strong>: +1-800-123-4567</li>
    <li><strong>Hours</strong>: Monday to Friday, 9:00 AM – 6:00 PM (Local Time)</li>
  </ul>`,
                          }}
                        ></div>
                      )}
                    </p>
                    <span className={styles.btn} onClick={toggleViewMore}>
                      {isExpanded ? "View Less" : "View More"}
                    </span>
                  </div>

                  <div className="text-right">  
                    <a
                      href="#"
                      className="btn btn-regist mr-2 text-dark bg-transparent text-transform-none p-0"
                      onClick={closeModal}
                    >
                      Cancel
                    </a>
                    <button
                      type="submit"
                      className="btn btn-dark btn-md"
                      onClick={handleSubmit}
                    >
                      Accept
                    </button>
                  </div> */}


                </div>
                {/* <button
                  title="Close (Esc)"
                  type="button"
                  className="mfp-close"
                  onClick={closeModal}
                >
                  ×
                </button> */}
              </div>
            </>
          )}
        </Modal>
      )}
    </>
  );
}
