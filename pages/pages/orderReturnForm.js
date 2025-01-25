



import { gql, useQuery } from "@apollo/client";
import React, { useEffect, useReducer, useRef, useState } from "react";
import Modal, { setAppElement } from "react-modal";
import sytles from "../.././components/features/modals/ReturnModal.module.scss";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const customStyles = {
  content: {
    zIndex: 999999,
    position: "fixed",
    // maxWidth: "525px",
    marginLeft: "1rem",
    marginRight: "1rem",
    outline: "none",
    backgroundColor: "#fff",
  },
};

export default function orderReturnForm() {
  
 const router=useRouter()

 const {id}=router.query

 console.log("order id test",id)
 
  //QUERIES
  const GET_ORDER_DETAILS = gql`
    query GetAdminOrderDetails($input: GetAdminOrderDetailsInput!) {
      getAdminOrderDetails(input: $input) {
        shippingAddress {
          _id
          firstname
          email
          mobile
          streetName
          city
          houseNumber
          country
          postCode
          apartment
          suite
          unit
          governorateID
          governorate
          village
          villageID
        }
      }
    }
  `;

  const GET_LOCATION = gql`
    query GetLocationsData {
      getLocationsData {
        name
        _id
        villages {
          _id
          name
        }
      }
    }
  `;

  const {
    loading: ordersLoading,
    error: ordersError,
    data: ordersDataResponse,
    refetch: ordersRefetch,
  } = useQuery(GET_ORDER_DETAILS, {
    fetchPolicy: "network-only",
    variables: {
      input: {
        orderId:id,
      },
    },
  });

  const {
    data: getLocation,
    loading: getLocationLoading,
    error: getLocationError,
  } = useQuery(GET_LOCATION);

  const initialState = {
    data: {
      returnUserReason: { value: "", error: false },
      image: { value: "", error: false },
    },
    returnAddress: {
      firstname: { value: "", error: false },
      email: { value: "", error: false },
      mobile: { value: "", error: false },
      country: { value: "", error: false },
      houseNumber: {
        value: "",
        error: false,
      },
      streetName: { value: "", error: false },
      apartment: { value: "", error: false },
      suite: { value: "", error: false },
      unit: { value: "", error: false },
      city: { value: "", error: false },
      postCode: { value: "", error: false },
      governorate: { value: "", error: false },
      village: { value: "", error: false },
      governorateID: { value: "", error: false },
      villageID: { value: "", error: false },
    },
    bankDetails: {
      accountHolderName: {
        value: "",
        error: false,
      },
      accountNumber: {
        value: "",
        error: false,
      },
      ifscCode: { value: "", error: false },
      bankName: { value: "", error: false },
      branchName: { value: "", error: false },
    },
  };

  function reducer(state, action) {
    switch (action.type) {
      case "SET_FIELD":
        return {
          ...state,
          [action.form]: {
            ...state[action.form],
            [action.field]: { value: action.value, error: action.error },
          },
        };
      case "SET_ERROR":
        return {
          ...state,
          [action.form]: {
            ...state[action.form],
            [action.field]: {
              ...state[action.form][action.field],
              error: action.error,
            },
          },
        };
      default:
        return state;
    }
  }

  const [formState, dispatch] = useReducer(reducer, initialState);

  const [villages, setvillages] = useState([]);

  const handleChange = (form) => (field) => (e) => {
    const value = e.target.value;
    dispatch({ type: "SET_FIELD", form, field, value, error: false });
  };
  const handleGovernorateChange = (form) => (field) => (e) => {
    let governorateId = e.target.value;
    const selectedGovernorate = getLocation?.getLocationsData?.find(
      (g) => g._id === governorateId
    );
    setvillages(selectedGovernorate?.villages || []);
    dispatch({
      type: "SET_FIELD",
      form,
      field: "villageID",
      value: "",
      error: false,
    });
    dispatch({
      type: "SET_FIELD",
      form,
      field: "village",
      value: "",
      error: false,
    });
    dispatch({
      type: "SET_FIELD",
      form,
      field,
      value: governorateId,
      error: false,
    });
    dispatch({
      type: "SET_FIELD",
      form,
      field: "governorate",
      value: selectedGovernorate?.name,
      error: false,
    });
  };
  const handleChangeVillage = (form) => (field) => (e) => {
    const value = e.target.files;
    dispatch({ type: "SET_FIELD", form, field, value, error: false });

    const selectedVillage = villages?.find((v) => v._id === value);
    dispatch({
      type: "SET_FIELD",
      form,
      field: "village",
      value: selectedVillage?.name,
      error: false,
    });
  };
  const handleChangeImage = (form) => (field) => (e) => {
    const value = e.target.files;
    dispatch({ type: "SET_FIELD", form, field, value, error: false });
  };

  const fieldRefs = {
    data: {
      returnUserReason: useRef(null),
      image: useRef(null),
    },
    returnAddress: {
      firstname: useRef(null),
      email: useRef(null),
      mobile: useRef(null),
      country: useRef(null),
      houseNumber: useRef(null),
      streetName: useRef(null),
      apartment: useRef(null),
      suite: useRef(null),
      unit: useRef(null),
      city: useRef(null),
      postCode: useRef(null),
      governorateID: useRef(null),
      villageID: useRef(null),
    },
    bankDetails: {
      accountHolderName: useRef(null),
      accountNumber: useRef(null),
      ifscCode: useRef(null),
      bankName: useRef(null),
      branchName: useRef(null),
    },
  };

  const focusField = (form, field) => {
    const ref = fieldRefs[form][field];
    if (ref && ref.current) {
      ref.current.focus();
    }
  };

  const validateForm = (formName, formState) => {
    let hasError = false;

    for (const [key, value] of Object.entries(formState)) {
      if (Array.isArray(value?.value) || typeof value?.value === "object") {
        if (
          value?.value?.length <= 0 &&
          Object.keys(value?.value)?.length <= 0
        ) {
          if (!hasError) {
            focusField(formName, key);
          }
          hasError = true;
          dispatch({
            type: "SET_ERROR",
            form: formName,
            field: key,
            error: true,
          });
        }
      } else if (!value.value.trim()) {
        if (!hasError) {
          focusField(formName, key);
        }
        hasError = true;
        dispatch({
          type: "SET_ERROR",
          form: formName,
          field: key,
          error: true,
        });
      }
    }

    return hasError;
  };

  //check
  const [isShippingAddress, setIsShippingAddress] = useState(false);

  //HANDLERS
  // function openModal() {
  //   setIsOpen(true);
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }

  const handleOnSubmit = (e) => {
    try {
      e.preventDefault();

      if (validateForm("data", formState?.data)) {
        return; // Exit if reason or image fails
      }

      if (validateForm("returnAddress", formState?.returnAddress)) {
        return; // Exit if returnAddress validation fails
      }

      if (validateForm("bankDetails", formState?.bankDetails)) {
        return; // Exit if bankDetails validation fails
      }

      const bankDetails = Object.keys(formState?.bankDetails)?.reduce(
        (acc, curr) => {
          acc[curr] = formState?.bankDetails[curr].value;
          return acc;
        },
        {}
      );
      const returnAddress = Object.keys(formState?.returnAddress)?.reduce(
        (acc, curr) => {
          acc[curr] = formState?.returnAddress[curr].value;
          return acc;
        },
        {}
      );

      const data = {
        bankDetails,
        returnAddress,
        returnUserReason: formState?.data?.returnUserReason?.value,
        image: formState?.data?.image?.value,
      };

      // handleSubmit(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  //USE EFFECT
  useEffect(() => {

    if(ordersError){

        console.log("order api error ",ordersError)
    }
    console.log(
      ordersDataResponse?.getAdminOrderDetails?.shippingAddress,
      "= SHIPPING ADDRESS"
    );
    if (
      !ordersLoading &&
      ordersDataResponse?.getAdminOrderDetails?.shippingAddress
    ) {
      if (isShippingAddress) {
        const shippingAddress =
          ordersDataResponse?.getAdminOrderDetails?.shippingAddress;

        // Update all fields in returnAddress with shippingAddress values
        for (const key of Object.keys(formState?.returnAddress)) {
          dispatch({
            type: "SET_FIELD",
            form: "returnAddress",
            field: key,
            value: shippingAddress[key] || "", // Use empty string if value is undefined
            error: false, // Clear any existing errors
          });
        }
      } else {
        // Clear all fields in returnAddress
        for (const key of Object.keys(formState?.returnAddress)) {
          dispatch({
            type: "SET_FIELD",
            form: "returnAddress",
            field: key,
            value: "",
            error: false, // Clear any existing errors
          });
        }
      }
    }
  }, [isShippingAddress, ordersLoading, ordersDataResponse]);

  //TEST
  useEffect(() => {
    const shippingAddress =
      ordersDataResponse?.getAdminOrderDetails?.shippingAddress;
    if (
      isShippingAddress &&
      getLocation?.getLocationsData?.length &&
      shippingAddress?.villageID &&
      shippingAddress?.governorateID
    ) {
      const governorate = getLocation?.getLocationsData?.find(
        (loc) => loc._id === shippingAddress?.governorateID
      );
      if (governorate?.villages?.length) {
        setvillages(governorate?.villages);
      }
    }
  }, [getLocation, isShippingAddress, ordersDataResponse]);

  return (
    <>
      {/* {isOpen && ( */}
        <Modal
          // isOpen={isOpen}
          // onAfterOpen={afterOpenModal}
          // onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Return Order"
        >
          <div className="modal-wrapper inset-0" style={{ zIndex: 9999999 }}>
            <div className="container">
              <h2 className="title">Return Order</h2>

              <form action="#" className="mb-0" onSubmit={handleOnSubmit}>
                <div>
                  <label htmlFor="reason">
                    Reason for returning order
                    <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-input form-wide ${
                      formState?.data?.returnUserReason?.error
                        ? sytles.error
                        : "mb-2"
                    }`}
                    id="reason"
                    value={formState?.data?.returnUserReason?.value}
                    onChange={handleChange("data")("returnUserReason")}
                    ref={fieldRefs.data.returnUserReason}
                  />
                  {formState?.data?.returnUserReason?.error && (
                    <div className={`${sytles.error_message} mb-2`}>
                      Reason is required!
                    </div>
                  )}
                  <label htmlFor="reason">
                    Upload Images
                    <span className="required">*</span>
                  </label>
                  <input
                    type="file"
                    className={`form-input form-wide ${
                      formState?.data?.image?.error ? sytles.error : "mb-2"
                    }`}
                    id="image"
                    accept="image/*"
                    multiple
                    onChange={handleChangeImage("data")("image")}
                    ref={fieldRefs.data.image}
                  />
                  {formState?.data?.image?.error && (
                    <div className={`${sytles.error_message} mb-2`}>
                      Image is required!
                    </div>
                  )}
                </div>
                <hr style={{ margin: 0, marginBottom: "10px" }} />
                <div>
                  <div className="return_address">
                    <h5 className="title">Return Address Details</h5>
                    <div className="custom-control custom-checkbox ml-0">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="lost-password"
                        checked={isShippingAddress}
                        onChange={(e) => {
                          setIsShippingAddress(e.target.checked);
                        }}
                      />
                      <label
                        className="custom-control-label form-footer-right"
                        htmlFor="lost-password"
                      >
                        Use shipping address as return address.
                      </label>
                    </div>
                    <div
                      className="new_address d-flex justify-content-between"
                      style={{ flexWrap: "wrap" }}
                    >
                      <div className={sytles.new_address_col}>
                        <label htmlFor="firstName">
                          First Name<span className="required"> *</span>
                        </label>
                        <input
                          type="text"
                          className={`form-input form-wide ${
                            formState?.returnAddress?.firstname?.error
                              ? sytles.error
                              : "mb-2"
                          }`}
                          id="firstName"
                          value={formState?.returnAddress?.firstname?.value}
                          onChange={handleChange("returnAddress")("firstname")}
                          ref={fieldRefs.returnAddress.firstname}
                        />
                        {formState?.returnAddress?.firstname?.error && (
                          <div className={`${sytles.error_message} mb-2`}>
                            First Name is required!
                          </div>
                        )}
                        <label htmlFor="email">
                          Email<span className="required"> *</span>
                        </label>
                        <input
                          type="text"
                          className={`form-input form-wide ${
                            formState?.returnAddress?.email?.error
                              ? sytles.error
                              : "mb-2"
                          }`}
                          id="email"
                          value={formState?.returnAddress?.email?.value}
                          onChange={handleChange("returnAddress")("email")}
                          ref={fieldRefs.returnAddress.email}
                        />
                        {formState?.returnAddress?.email?.error && (
                          <div className={`${sytles.error_message} mb-2`}>
                            Email is required!
                          </div>
                        )}
                        <label htmlFor="mobile">
                          Mobile<span className="required"> *</span>
                        </label>
                        <input
                          type="text"
                          className={`form-input form-wide ${
                            formState?.returnAddress?.mobile?.error
                              ? sytles.error
                              : "mb-2"
                          }`}
                          id="mobile"
                          value={formState?.returnAddress?.mobile?.value}
                          onChange={handleChange("returnAddress")("mobile")}
                          ref={fieldRefs.returnAddress.mobile}
                        />
                        {formState?.returnAddress?.mobile?.error && (
                          <div className={`${sytles.error_message} mb-2`}>
                            Mobile is required!
                          </div>
                        )}
                        <label htmlFor="country">
                          Country<span className="required"> *</span>
                        </label>
                        <input
                          type="text"
                          className={`form-input form-wide ${
                            formState?.returnAddress?.country?.error
                              ? sytles.error
                              : "mb-2"
                          }`}
                          id="country"
                          value={formState?.returnAddress?.country?.value}
                          onChange={handleChange("returnAddress")("country")}
                          ref={fieldRefs.returnAddress.country}
                        />
                        {formState?.returnAddress?.country?.error && (
                          <div className={`${sytles.error_message} mb-2`}>
                            Country is required!
                          </div>
                        )}
                        <label htmlFor="city">
                          City<span className="required"> *</span>
                        </label>
                        <input
                          type="text"
                          className={`form-input form-wide ${
                            formState?.returnAddress?.city?.error
                              ? sytles.error
                              : "mb-2"
                          }`}
                          id="city"
                          value={formState?.returnAddress?.city?.value}
                          onChange={handleChange("returnAddress")("city")}
                          ref={fieldRefs.returnAddress.city}
                        />
                        {formState?.returnAddress?.city?.error && (
                          <div className={`${sytles.error_message} mb-2`}>
                            City is required!
                          </div>
                        )}
                      </div>
                      <div className={sytles.new_address_col}>
                        <label htmlFor="suite">
                          Suite<span className="required"> *</span>
                        </label>
                        <input
                          type="text"
                          className={`form-input form-wide  ${
                            formState?.returnAddress?.suite?.error
                              ? sytles.error
                              : "mb-2"
                          }`}
                          id="suite"
                          value={formState?.returnAddress?.suite?.value}
                          onChange={handleChange("returnAddress")("suite")}
                          ref={fieldRefs.returnAddress.suite}
                        />
                        {formState?.returnAddress?.suite?.error && (
                          <div className={`${sytles.error_message} mb-2`}>
                            Suite is required!
                          </div>
                        )}
                        <label htmlFor="unit">
                          Unit<span className="required"> *</span>
                        </label>
                        <input
                          type="text"
                          className={`form-input form-wide  ${
                            formState?.returnAddress?.unit?.error
                              ? sytles.error
                              : "mb-2"
                          }`}
                          id="unit"
                          value={formState?.returnAddress?.unit?.value}
                          onChange={handleChange("returnAddress")("unit")}
                          ref={fieldRefs.returnAddress.unit}
                        />
                        {formState?.returnAddress?.unit?.error && (
                          <div className={`${sytles.error_message} mb-2`}>
                            Unit is required!
                          </div>
                        )}
                        <label htmlFor="postCode">
                          Post Code<span className="required"> *</span>
                        </label>
                        <input
                          type="text"
                          className={`form-input form-wide ${
                            formState?.returnAddress?.postCode?.error
                              ? sytles.error
                              : "mb-2 "
                          }`}
                          id="postCode"
                          value={formState?.returnAddress?.postCode?.value}
                          onChange={handleChange("returnAddress")("postCode")}
                          ref={fieldRefs.returnAddress.postCode}
                        />
                        {formState?.returnAddress?.postCode?.error && (
                          <div className={`${sytles.error_message} mb-2`}>
                            Post Code is required!
                          </div>
                        )}
                        <label>
                          Governorate <span className="required">*</span>
                        </label>
                        <select
                          className={`form-control form-control-md ${
                            formState?.returnAddress?.postCode?.error
                              ? sytles.error
                              : "mb-2 "
                          }`}
                          value={formState?.returnAddress?.governorateID?.value}
                          onChange={handleGovernorateChange("returnAddress")(
                            "governorateID"
                          )}
                          ref={fieldRefs.returnAddress.governorateID}
                        >
                          <option value="">Select Governorate</option>
                          {getLocation?.getLocationsData?.map((gov) => (
                            <option key={gov._id} value={gov._id}>
                              {gov.name}
                            </option>
                          ))}
                        </select>

                        {formState?.returnAddress?.governorateID?.error && (
                          <div style={{ color: "red", fontWeight: "300" }}>
                            Governate is required!
                          </div>
                        )}
                        <label>
                          Wilayat <span className="required">*</span>
                        </label>
                        <select
                          className={`form-control form-control-md ${
                            formState?.returnAddress?.postCode?.error
                              ? sytles.error
                              : "mb-2 "
                          }`}
                          value={formState?.returnAddress?.villageID?.value}
                          onChange={handleChangeVillage("returnAddress")(
                            "villageID"
                          )}
                          disabled={!villages.length}
                          ref={fieldRefs.returnAddress.villageID}
                        >
                          <option value="">Select Wilayat</option>
                          {villages.map((wil) => (
                            <option key={wil._id} value={wil._id}>
                              {wil.name}
                            </option>
                          ))}
                        </select>
                        {formState?.returnAddress?.villageID?.error && (
                          <div style={{ color: "red", fontWeight: "300" }}>
                            Wilayat is required!
                          </div>
                        )}
                      </div>
                      <div className={sytles.new_address_col}>
                        <label htmlFor="houseNumber">
                          House Number<span className="required"> *</span>
                        </label>
                        <input
                          type="text"
                          className={`form-input form-wide ${
                            formState?.returnAddress?.houseNumber?.error
                              ? sytles.error
                              : "mb-2"
                          }`}
                          id="houseNumber"
                          value={formState?.returnAddress?.houseNumber?.value}
                          onChange={handleChange("returnAddress")(
                            "houseNumber"
                          )}
                          ref={fieldRefs.returnAddress.houseNumber}
                        />
                        {formState?.returnAddress?.houseNumber?.error && (
                          <div className={`${sytles.error_message} mb-2`}>
                            House Number is required!
                          </div>
                        )}
                        <label htmlFor="streetName">
                          Street Name<span className="required"> *</span>
                        </label>
                        <input
                          type="text"
                          className={`form-input form-wide ${
                            formState?.returnAddress?.streetName?.error
                              ? sytles.error
                              : " mb-2"
                          }`}
                          id="streetName"
                          value={formState?.returnAddress?.streetName?.value}
                          onChange={handleChange("returnAddress")("streetName")}
                          ref={fieldRefs.returnAddress.streetName}
                        />
                        {formState?.returnAddress?.streetName?.error && (
                          <div className={`${sytles.error_message} mb-2`}>
                            Street Name is required!
                          </div>
                        )}
                        <label htmlFor="apartment">
                          Appartment<span className="required"> *</span>
                        </label>
                        <input
                          type="text"
                          className={`form-input form-wide ${
                            formState?.returnAddress?.apartment?.error
                              ? sytles.error
                              : " mb-2"
                          }`}
                          id="apartment"
                          value={formState?.returnAddress?.apartment?.value}
                          onChange={handleChange("returnAddress")("apartment")}
                          ref={fieldRefs.returnAddress.apartment}
                        />
                        {formState?.returnAddress?.apartment?.error && (
                          <div className={`${sytles.error_message} mb-2`}>
                            Apartment is required!
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <hr style={{ margin: 0, marginBottom: "10px" }} />
                  <div className="bank_details_container">
                    <h5 className="title">Banking Details</h5>
                    <div className={sytles.bank_details}>
                      <div className={sytles.bank_details_col}>
                        <label htmlFor="accountHolderName">
                          Account Holder Number
                          <span className="required"> *</span>
                        </label>
                        <input
                          type="text"
                          className={`form-input form-wide ${
                            formState?.bankDetails?.accountHolderName?.error
                              ? sytles.error
                              : "mb-2"
                          }`}
                          id="accountHolderName"
                          value={
                            formState?.bankDetails?.accountHolderName?.value
                          }
                          onChange={handleChange("bankDetails")(
                            "accountHolderName"
                          )}
                          ref={fieldRefs.bankDetails.accountHolderName}
                        />
                        {formState?.bankDetails?.accountHolderName?.error && (
                          <div className={`${sytles.error_message} mb-2`}>
                            Account Holder Name is required!
                          </div>
                        )}
                        <label htmlFor="accountNumber">
                          Account Number<span className="required"> *</span>
                        </label>
                        <input
                          type="text"
                          className={`form-input form-wide ${
                            formState?.bankDetails?.accountNumber?.error
                              ? sytles.error
                              : " mb-2"
                          }`}
                          id="accountNumber"
                          value={formState?.bankDetails?.accountNumber?.value}
                          onChange={handleChange("bankDetails")(
                            "accountNumber"
                          )}
                          ref={fieldRefs.bankDetails.accountNumber}
                        />
                        {formState?.bankDetails?.accountNumber?.error && (
                          <div className={`${sytles.error_message} mb-2`}>
                            Account Number is required!
                          </div>
                        )}
                        <label htmlFor="ifscCode">
                          IFSC Code<span className="required"> *</span>
                        </label>
                        <input
                          type="text"
                          className={`form-input form-wide ${
                            formState?.bankDetails?.ifscCode?.error
                              ? sytles.error
                              : " mb-2"
                          }`}
                          id="ifscCode"
                          value={formState?.bankDetails?.ifscCode?.value}
                          onChange={handleChange("bankDetails")("ifscCode")}
                          ref={fieldRefs.bankDetails.ifscCode}
                        />
                        {formState?.bankDetails?.ifscCode?.error && (
                          <div className={`${sytles.error_message} mb-2`}>
                            IFSC Code is required!
                          </div>
                        )}
                      </div>
                      <div className={sytles.bank_details_col}>
                        <label htmlFor="bankName">
                          Bank Name<span className="required"> *</span>
                        </label>
                        <input
                          type="text"
                          className={`form-input form-wide ${
                            formState?.bankDetails?.bankName?.error
                              ? sytles.error
                              : "mb-2"
                          }`}
                          id="bankName"
                          value={formState?.bankDetails?.bankName?.value}
                          onChange={handleChange("bankDetails")("bankName")}
                          ref={fieldRefs.bankDetails.bankName}
                        />
                        {formState?.bankDetails?.bankName?.error && (
                          <div className={`${sytles.error_message} mb-2`}>
                            Bank Name is required!
                          </div>
                        )}
                        <label htmlFor="branchName">
                          Branch Name<span className="required"> *</span>
                        </label>
                        <input
                          type="text"
                          className={`form-input form-wide ${
                            formState?.bankDetails?.branchName?.error
                              ? sytles.error
                              : "mb-2"
                          }`}
                          id="branchName"
                          value={formState?.bankDetails?.branchName?.value}
                          onChange={handleChange("bankDetails")("branchName")}
                          ref={fieldRefs.bankDetails.branchName}
                        />
                        {formState?.bankDetails?.branchName?.error && (
                          <div className={`${sytles.error_message} mb-2`}>
                            Branch Name is required!
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-dark btn-block btn-md"
                  >
                    Submit
                  </button>

                  <a
                    href=""
                    className="btn btn-regist text-dark bg-transparent text-transform-none p-0"
                    onClick={closeModal}
                  >
                    Cancel
                  </a>
                </div>
              </form>
            </div>

            <button
              title="Close (Esc)"
              type="button"
              className="mfp-close"
              onClick={closeModal}
            >
              ×
            </button>
          </div>
        </Modal>
      {/* )} */}
    </>
  );
}
