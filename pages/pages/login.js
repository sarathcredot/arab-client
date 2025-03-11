import React, { useState } from "react";
import ALink from "../../components/common/ALink";
import OTPInput from "react-otp-input";
// import { useQuery,gql,useMutation } from "@apollo/react-hooks";
import { gql, useMutation, useLazyQuery } from "@apollo/client";
import withApollo from "../../server/apollo";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { IoMdHome } from "react-icons/io";
import MainMenu from "../../components/common/partials/main-menu";
import { Helmet } from "react-helmet";
// import Flag from "/images/brands/oman_flag.svg"
// import { useForm, Controller } from "react-hook-form";
export const LOGIN = gql`
  mutation UserLoginOtp($input: userLoginOtpInput!) {
    userLoginOtp(input: $input) {
      message
      mobileNumber
      _id
    }
  }
`;

export const OTP_VERIFY = gql`
  mutation UserVerifyOtp($input: userVerifyOtpInput!) {
    userVerifyOtp(input: $input) {
      message
      token
      userId
    }
  }
`;


function Login({ mutate }) {
  const router = useRouter();
  const { origin } = router.query; 
  const formatedOrigin = origin ? origin?.replace("-", "/") : null;
  const [isOtp, SetIsOtp] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");
  const [otperror, setOtperror] = useState("");
  const [otp, setOtp] = useState("");
  const [otpId, setOtpTd] = useState("");
  const [userLoginOtp] = useMutation(LOGIN);
  const [UserVerifyOtp] = useMutation(OTP_VERIFY);

  const handleOtpChange = async (event) => {
    event.preventDefault();
    console.log({mobileNumber})
    try {
      if (!mobileNumber.trim()) {
        setError("Mobile number is required");
        return;
      }
       if(mobileNumber.length!==8){
        setError("Mobile number must be exactly 8 digits");
        return;
      }
      const response = await userLoginOtp({
        variables: { 
          input: {
            mobileNumber: mobileNumber,
            countryCode: "+968" 
          } 
        },
      });
      setOtpTd(response.data.userLoginOtp._id);
      toast.success(<div style={{ padding: "10px" }}>OTP sent successfully</div>);
      SetIsOtp(true);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleResentotp = async () => {
    try {
      const response = await userLoginOtp({
        variables: { input: { mobileNumber: mobileNumber,countryCode: "+968"} },
      });
      if (response) {
        toast.success(<div style={{ padding: "10px" }}>OTP sent successfully</div>);
      }
    } catch (error){
      toast.error(<div style={{ padding: "10px" }}>{error?.message}</div>);
      console.log("error", error);
    }
  };

  const BULK_ADD_TO_CART = gql`
    mutation BulkAddToCart($input: BulkAddToCartInput!) {
      bulkAddToCart(input: $input) {
        message
      }
    }
  `;

  const [BulkAddToCart] = useMutation(BULK_ADD_TO_CART);

  const handleVerifyOTP = async (event) => {
    event.preventDefault();
    try {
      if (!otp) {
        setOtperror("Otp is required");
        return;
      }
      const response = await UserVerifyOtp({ variables: { input: { code: otp, _id: otpId } } });

      if (response) {
        localStorage.setItem("arabtoken", response?.data?.userVerifyOtp?.token);

        localStorage.setItem("userId", response?.data?.userVerifyOtp?.userId);
        try {
          const cartItems = JSON.parse(localStorage.getItem("cart"));
          if (cartItems?.length > 0) {
            const result = await BulkAddToCart({
              variables: {
                input: {
                  products: cartItems.map((item) => ({
                    productId: item.productId,
                    quantity: item.quantity,
                  })),
                },
              },
            });
          }
          localStorage.removeItem("cart");
        } catch (error) {
          console.log(error);
        }
        if (formatedOrigin) {
          return router.push(`/${formatedOrigin}`);
        }

        const historyUrl = localStorage.getItem("historyUrl");
        if (historyUrl) {
          return router.push(historyUrl);
        } else {
          return router.push("/");
        }
      }else{
        setOtperror("Please Enter Correct OTP")
      }
    } catch (error) {
      console.log("error", error);
      setOtperror("Please Enter Correct OTP")
    }
  };
  return (
    <>
      <Helmet>
        <title>Login | Arab Deals</title>
      </Helmet>
      <main className="main login_page">
          <img className="login_bg_image" src="/images/login_bg_svg.svg" alt="" />
        <div
          className=" login-container container"
          style={{ marginTop: "0", position: "relative" }}
        >
          {/* <div
            style={{
              zIndex: "99",
              position: "absolute",
              width: "100%",
              left: "0",
              right: "0",
              background: "#fff",
            }}
            className="custom_loginresp"
          >
            <div>
              <MainMenu />
            </div>
          </div> */}
          <div className="container custom_login_space ">
            <nav
              aria-label="breadcrumb"
              className="breadcrumb-nav mb-0"
              style={{ paddingBottom: "0px"}}
            >
              {/* <div className="container">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <ALink href="/">
                      <IoMdHome style={{ fontSize: "16px" }} />
                    </ALink>
                  </li>

                  <li className="breadcrumb-item active" aria-current="page">
                    <ALink className="activeitem" href="/pages/orders">
                      Login/ Register
                    </ALink>
                  </li>
                </ol>
              </div> */}
            </nav>
          </div>
          <div className="row login_row">
            <div className="col-lg-12 mx-auto login_container custom_headlog">
              {isOtp ? (
                <div className="row h-100 custom-loginleft">
                <div className="col-md-6 login_content_otp">
                  <div>

                  <div className="heading">
                    <h2 style={{fontSize:"25px",fontWeight:"600"}}>Verify Phone Number</h2>
                    <div className="">
                        <p
                          className=""
                          style={{
                            fontSize: "12px",
                            color: "#777777",
                            fontWeight: "400",
                            marginTop:"20px"
                          }}
                        >
                          Secure Your Account, Shop With Confidence.
                        </p>
                      </div>
                    </div>

                    <form style={{ marginTop: "20px" }}>
                      <div className="login_otp_section">
                        <div className="otp_boxes">

                        <OTPInput
                          value={otp}
                          onChange={(value)=>{
                            setOtp(value);
                            setOtperror("");
                          }}
                          numInputs={5}
                          containerStyle={{
                            textAlign: "center",
                            width: "60px",
                            height: "60px",
                            gap: "20px",
                          }}
                          renderInput={(props) => (
                            <input
                              {...props}
                              type="number"
                              className="otpbox"
                              // style={{
                              //   width: "60px",
                              //   height: "60px",
                              //   textAlign: "center",
                              //   fontSize: "18px ",
                              //   borderColor: "#ECECEC",

                              //   outline: "none",
                              //   border: "1px solid #ECECEC",

                              // }}
                            />
                          )}
                          />
                          </div>
                          {otperror && <div style={{ color: "red",marginTop:10 }}>{otperror}</div>}
                        <button
                          type="submit"
                          className="btn btn-dark btn-md "
                          style={{ marginTop: "20px", fontWeight: "normal" }}
                          onClick={handleVerifyOTP}
                        >
                          Verify OTP
                        </button>
                        <div className="resend-action" style={{ marginTop: "33px" }}>
                          <p
                            style={{
                              fontWeight: "400",
                              fontSize: "12px",
                              color: "#000000",
                            }}
                          >
                            Don't have OTP ?
                            <span
                              style={{
                                paddingLeft: "5px",
                                color: "#399E0A",
                                fontWeight: "500",
                                cursor: "pointer",
                              }}
                              className="btn-text"
                              onClick={handleResentotp}
                            >
                              Resend
                            </span>
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                  </div>
                  <div className="col d-flex login_img_div">
                    <div className="" style={{width:"60%"}}>
                      <img className="login_watch_img" src="images\watch_svg_login.svg" />
                    </div>
                  </div>

                </div>
              ) : (
                <div className="row h-100 custom-loginleft">
                  <div className="col-md-6 login_content">
                    <div>

                    <div className="heading">
                      <h2 style={{fontSize:"25px",fontWeight:"600"}}>Login/ Register to your account</h2>
                      <div className="">
                        <p
                          className=""
                          style={{
                            fontSize: "12px",
                            color: "#777777",
                            fontWeight: "400",
                            marginTop:"20px"
                          }}
                        >
                          Lorem ipsum dolor sit amet consectetur. Sapien ut libero sed lacinia egestas pace.
                        </p>
                      </div>
                    </div>

                    <div></div>

                    <form style={{ marginTop: "30px" }}>
                      <div className="container">
                        <div className="input-group" style={{ position: "relative",border:"1px solid #CDCDCD" }}>
                          <div className="input-group-prepend h-100" style={{ position: "absolute" }}>
                            {/* <span
                              className=""
                              style={{display:"block", padding: "17px",margin:"auto 0",fontWeight:"normal" }}
                            >

                              <img src="/images/brands/oman_flag.svg" alt="Oman Flag" width={30}  />
                              +968
                            </span> */}
                            <span
                              className="input-group-text countrycodeinput border-0 h-100"
                              style={{ padding: "10px" }}
                            >
                              <img
                                src="/images/brands/oman_flag.svg"
                                alt="Flag"
                                width="24"
                                height="20"
                              />
                              {/* +968 */}
                            </span>
                            <span
                              className="input-group-text countrycodeinput border-0 h-100"
                              style={{ padding: "10px",background:"#fff",borderRight:"none",borderLeft:"none",fontSize:"12px" }}
                            >
                              +968
                            </span>
                          </div>
                          <input
                            type="number"
                            placeholder="Mobile Number"
                            className="form-input form-wide"
                            value={mobileNumber}
                            onChange={(e) => {
                              setMobileNumber(e.target.value);
                              setError("");
                            }}
                            style={{ outline: "none", paddingLeft: "95px",border:"none",margin:0 }}
                            />
                        </div>
                      </div>

                      {error && <div style={{ color: "red",marginTop:"10px",fontWeight:"normal" }}>{error}</div>}

                      {/* <div
                      className="orcontainer"
                      
                      >
                      <div className="orcircle"
                      // style={{
                        //   backgroundColor: "#F8F8F8",
                        //   borderRadius: "50%",
                        //   width: "46px",
                        //   height: "46px",
                        //   display: "flex",
                        //   alignItems: "center",
                        //   justifyContent: "center",
                        //   marginTop: "14px",
                        // }}
                        >
                        <div style={{ fontSize: "14px", fontWeight: "500" }}>
                          <p
                            style={{ fontFamily: "Poppins", marginBottom: "0" }}
                          >
                            OR
                          </p>
                        </div>
                      </div>
                    </div> */}

                      {/* <div className="mt-3 buttonwrapper"> */}
                      {/* <div
                        class="google-btn googlebtn"
                        
                      >
                        <div class="google-icon-wrapper ">
                          <img
                            class="google-icon"
                            src="images\brands\googel.svg"
                          />
                          </div>
                        <p
                          class="btn-text mt-3 "
                          style={{ paddingLeft: "20px" }}
                        >
                        <p
                        style={{
                          fontSize: "12px",
                          fontWeight: "600",
                              color: "#000000",cursor:"pointer"
                            }}
                          >
                            Login in with google
                          </p>
                        </p>
                      </div>
                      <div
                        class="google-btn googlebtn  "
                        
                      >
                        <div class="google-icon-wrapper">
                          <img
                            class="google-icon"
                            src="images\brands\apple.svg"
                          />
                          </div>
                          <p
                          class="btn-text mt-3"
                          style={{ paddingLeft: "20px" }}
                        >
                          <p
                            style={{
                              fontSize: "12px",
                              fontWeight: "600",
                              color: "#000000",
                              cursor:"pointer"
                              }}
                          >
                          Sign in wIth Apple
                          </p>
                        </p>
                      </div> */}
                      {/* </div> */}

                      <button
                        type="submit"
                        className="btn btn-dark btn-md hoverbtn"
                        style={{ marginTop: "20px", fontWeight: "400",paddingInline:"50px" }}
                        onClick={handleOtpChange}
                      >
                        GET OTP
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-md-6 d-none d-md-flex login_img_div">
                  <div className="" style={{width:"60%"}}>
                    <img className="login_watch_img" src="images\watch_svg_login.svg" />
                  </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default withApollo({ ssr: typeof window === "undefined" })(Login);
