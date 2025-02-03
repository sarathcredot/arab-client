import { connect } from "react-redux";

import ALink from "../../components/common/ALink";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { gql, useMutation, useLazyQuery } from "@apollo/client";
import withApollo from "../../server/apollo";
import { useEffect } from "react";
import { toast } from "react-toastify";
export const ACCOUNT_DETAIL = gql`
  mutation UpdateUserProfile($input: updateUserProfileInput!) {
    updateUserProfile(input: $input) {
      message
    }
  }
`;
export const USER_DETAIL = gql`
  query GetUserRecord {
  getUserRecord {
    record {
      _id
      email
      firstName
      lastName
      displayName
      mobileNumber
      isBlocked
      isDeleted
    }
    message
  }
}
`;
function accountdetails() {
  const id = localStorage?.getItem("userId");
  const [userdetail, { loading: userloading, error: usererror, data: userData, refetch }] =
    useLazyQuery(USER_DETAIL);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      displayName: "",
      email: "",
      // crLicense:""
    },
  });
  useEffect(() => {
    userdetail();
    // setValue("firstName",userData?.getUserRecord?.record?.firstName)
  }, [id]);

  useEffect(() => {
    console.log("USER = ",userData)
    if (userData && userData.getUserRecord && userData.getUserRecord.record) {
      const { firstName } = userData.getUserRecord.record;
      console.log("user data",userData)
      setValue("firstName", firstName);
      setValue("lastName", userData.getUserRecord.record?.lastName);
      setValue("email", userData.getUserRecord.record?.email);
      setValue("displayName", userData?.getUserRecord?.record?.displayName);
    }
  }, [userData,refetch]);

  const [UpdateUserProfile] = useMutation(ACCOUNT_DETAIL);
  const onSubmit = async (values) => {
    values._id = id;
    // e.preventDefault();
    try {
      // if (!mobileNumber.trim()) {
      //   setError("Mobile number is required");
      //   return;
      // }

      const response = await UpdateUserProfile({
        variables: {
          input: {
            firstName: values.firstName,
            email: values?.email,
            lastName: values?.lastName,
            displayName: values?.displayName,
          },
        },
      });
      if (response) {
        toast.success(response?.data?.updateUserProfile?.message);
        // reset();
        refetch();
        userdetail();
      }
      SetIsOtp(true);
    } catch (error) {
      toast.error(error?.message);
      console.log("error", error);
    }
  };

  const fieldRules = {
    firstName: {
      required: "FirstName is required",
    },
    lastName: {
      required: "LastName is required",
    },
    displayName: {
      required: "DisplayName is required",
    },
    email: {
      required: "Email is required",
    },
  };

  return (
    <main className="main main-test">
        <div style={{marginTop:"50px"}}></div>
        <ul className="checkout-progress-bar d-flex justify-content-center flex-wrap" style={{marginBottom:"0px"}}>
          <li>
            <ALink href="/pages/account">My Account</ALink>
          </li>
          <li className="active">
            <ALink href="/pages/accountdetails">Account Details</ALink>
          </li>
        </ul>
      
      <div className=" container checkout-container">
        <div className="row">
          <div className="col-lg-12">
            <ul style={{paddingLeft:"0px",listStyle:"none"}} className="checkout-steps" >
              <li>
                <div
                  className=""
                  style={{
                    marginTop: "3rem",
                    borderBottom: "1px solid",
                    borderColor: "#E2E2E2",
                    padding: "2px",
                  }}
                >
                  <h2 className="step-title" style={{paddingBottom:"10px",paddingLeft:"0px"}}>Account Details</h2>
                </div>

                <div className="">
                  <form onSubmit={handleSubmit(onSubmit)} id="checkout-form" style={{marginTop:"6.5rem"}}>
                    <div className="row">
                      <div className="col-md-6 mb-2">
                        <div className="form-group mr-5 mb-0">
                          <label
                            style={{
                              fontFamily: "Poppins",
                              fontWeight: "400px",
                              lineHeight: "20px",
                            }}
                          >
                            Full name{" "}
                            <ab className="required" title="required">
                              *
                            </ab>
                          </label>
  
                          <Controller
                            control={control}
                            name="displayName"
                            render={({ field: { onChange, value } }) => (
                              <input
                                type="text"
                                className="form-control"
                                value={value}
                                onChange={onChange}
                                style={{ marginTop: "10px" }}
                              />
                            )}
                            rules={fieldRules.displayName}
                          />
                        </div>
                        {errors?.displayName ? (
                          <div style={{ color: "red", marginTop: "10px" }}>
                            {errors?.displayName?.message}
                          </div>
                        ) : null}
                      </div>
                      <div className="col-md-6">
                      <div className="form-group mb-0">
                        <label
                          style={{
                            fontFamily: "Poppins",
                            fontWeight: "400px",
                            lineHeight: "20px",
                          }}
                          >
                          Email address{" "}
                          <ab className="required" title="required">
                            *
                          </ab>
                        </label>
                        <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, value } }) => (
                          <input
                            type="email"
                            className="form-control "
                            style={{ marginTop: "10px" }}
                            value={value}
                            onChange={onChange}
                          />
                        )}
                        rules={fieldRules.email}
                      />
                          </div>
                    
                      {errors?.email ? (
                        <div style={{ color: "red", marginTop: "10px" }}>
                          {errors?.email?.message}
                        </div>
                      ) : null}
                      </div>
                      {/* <div className="col-md-6">
                        <div className="form-group  mb-0">
                          <label
                            style={{
                              fontFamily: "Poppins",
                              fontWeight: "400px",
                              lineHeight: "20px",
                            }}
                          >
                            Last name{" "}
                            <ab className="required" title="required">
                              *
                            </ab>
                          </label>
                          <Controller
                            control={control}
                            name="lastName"
                            render={({ field: { onChange, value } }) => (
                              <input
                                type="text"
                                className="form-control"
                                value={value}
                                onChange={onChange}
                                style={{ marginTop: "10px" }}
                              />
                            )}
                            rules={fieldRules.lastName}
                          />
                        </div>
                        {errors?.lastName ? (
                          <div style={{ color: "red", marginTop: "10px" }}>
                            {errors?.lastName?.message}
                          </div>
                        ) : null}
                      </div> */}
  
                      {/* <div className="col-md-6">
                        <div className="form-group mr-5 mb-0">
                          <label
                            style={{
                              fontFamily: "Poppins",
                              fontWeight: "400px",
                              lineHeight: "20px",
                            }}
                          >
                            Display name{" "}
                            <ab className="required" title="required">
                              *
                            </ab>
                          </label>
                          <Controller
                            control={control}
                            name="displayName"
                            render={({ field: { onChange, value } }) => (
                              <input
                                type="text"
                                className="form-control mb-0"
                                style={{ marginTop: "10px" }}
                                value={value}
                                onChange={onChange}
                              />
                            )}
                            rules={fieldRules.displayName}
                          />
                        </div>
                        {errors?.displayName ? (
                          <div style={{ color: "red", marginTop: "10px" }}>
                            {errors?.displayName?.message}
                          </div>
                        ) : null}
                      </div> */}
                      <div className="col-md-12 mt-4">
    
                      {/* <p
                        style={{
                          fontFamily: "Poppins",
                          fontWeight: "400px",
                          fontSize: "12px",
                          lineHeight: "26px",
                        }}
                        >
                        This will be how your name will be displayed in the account section and in
                        reviews
                      </p> */}
                      {/* <div className="form-group mb-0">
                        <label
                          style={{
                            fontFamily: "Poppins",
                            fontWeight: "400px",
                            lineHeight: "20px",
                          }}
                          >
                          Email address{" "}
                          <ab className="required" title="required">
                            *
                          </ab>
                        </label>
                        <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, value } }) => (
                          <input
                            type="email"
                            className="form-control "
                            style={{ marginTop: "10px" }}
                            value={value}
                            onChange={onChange}
                          />
                        )}
                        rules={fieldRules.email}
                      />
                          </div>
                    
                      {errors?.email ? (
                        <div style={{ color: "red", marginTop: "10px" }}>
                          {errors?.email?.message}
                        </div>
                      ) : null} */}
                      
                      </div>
                     
                    </div>
  
                    <div
                      className="container"
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <div className="mt-3">
                        {" "}
                        <button type="submit" className="btn btn-dark btn-acc mr-0">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    cartList: state.cartlist.cart ? state.cartlist.cart : [],
  };
};

export default withApollo({ ssr: typeof window === "undefined" })(accountdetails);
