import React from "react";
import { useState, useEffect, useReducer, useRef } from "react";
import { gql, useQuery } from "@apollo/client";
import { toast } from "react-toastify";

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
        address
      }
    }
  }
`;

function WarrantyReqForm({ orderId, setIsOpen, handleSubmit, claimType, orderObjId }) {
  const [addinput, setaddinput] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  const [bank, setbank] = useState([1, 1, 1, 1, 1]);

  console.log("claim type ", claimType);

  const {
    loading: ordersLoading,
    error: ordersError,
    data: ordersDataResponse,
    refetch: ordersRefetch,
  } = useQuery(GET_ORDER_DETAILS, {
    fetchPolicy: "network-only",
    variables: {
      input: {
        orderId: orderId,
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
      cliamType: { value: "", error: false },
      image: { value: [], error: false },
      imageFileName: { value: "", error: false },
    },
    returnAddress: {
      firstname: { value: "", error: false },
      email: { value: "", error: false },
      mobile: { value: "", error: false },
      country: { value: "", error: false },
      postCode: { value: "", error: false },
      governorate: { value: "", error: false },
      village: { value: "", error: false },
      governorateID: { value: "", error: false },
      villageID: { value: "", error: false },
      address: { value: "", error: false },
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
  const [isShippingAddress, setIsShippingAddress] = useState(false);

  const handleChange = (form) => (field) => (e) => {
    const value = e.target.value;
    dispatch({ type: "SET_FIELD", form, field, value, error: false });
  };

  const handleGovernorateChange = (form) => (field) => (e) => {
    let governorateId = e.target.value;
    console.log("govt", governorateId);
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
    const value = e.target.value;
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
    const files = e.target.files;
    if (!files.length) return; // Prevent empty file selection

    const fileArray = Array.from(files);
    // const fileNames = fileArray.map((file) => file.name).join(", ");

    const existingImages = formState[form][field].value || [];

    const updatedImages = [...existingImages, ...fileArray];

    // Compute the file names from the combined images array
    const fileNamesCombined = updatedImages
      .map((file) => file.name)
      .join(", ");

    dispatch({
      type: "SET_FIELD",
      form,
      field: "imageFileName",
      value: fileNamesCombined,
      error: false,
    });
    dispatch({ type: "SET_FIELD", form, field, value: [...existingImages, ...fileArray], error: false });
  };

  const fieldRefs = {
    data: {
      returnUserReason: useRef(null),
      image: useRef(null),
      imageFileName: { value: "", error: false },
      cliamType: useRef(null),
    },
    returnAddress: {
      firstname: useRef(null),
      email: useRef(null),
      mobile: useRef(null),
      country: useRef(null),
      postCode: useRef(null),
      governorateID: useRef(null),
      villageID: useRef(null),
    },
  };

  useEffect(() => {
    if (claimType.length === 1) {
      dispatch({
        type: "SET_FIELD",
        form: "data",
        field: "cliamType",
        value: claimType[0],
        error: false,
      });
    }
  }, [claimType]);

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
      } else if (!value.value?.trim()) {
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

  const handleOnSubmit = (e) => {
    console.log("form data", formState);
    try {
      e.preventDefault();

      if (validateForm("data", formState?.data)) {
        return; // Exit if reason or image fails
      }

      if (validateForm("returnAddress", formState?.returnAddress)) {
        return; // Exit if returnAddress validation fails
      }

      const returnAddress = Object.keys(formState?.returnAddress)?.reduce(
        (acc, curr) => {
          acc[curr] = formState?.returnAddress[curr].value;
          return acc;
        },
        {}
      );

      const data = {
        claimType: formState?.data?.cliamType,
        orderProductId: orderObjId,
        returnAddress,
        returnUserReason: formState?.data?.returnUserReason?.value,
        image: formState?.data?.image?.value,
      };

      handleSubmit(data);


    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
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
    <div>
      <div className="container re-form-main mt-5">
        <h1 className="re-form-title">Complaint Registration</h1>
        <div
          style={{
            borderTop: "1px solid #E2E2E2",
            marginTop: "10px",
            marginBottom: "20px",
          }}
        ></div>

        <div>
          <form style={{ marginBottom: "0px" }} action="">
            <label className="re-input-label" htmlFor="">
              Explain your complaint <span style={{ color: "red" }}>*</span>
            </label>
            <input
              style={{ marginBottom: "0px" }}
              className="re-inpt-ureson"
              type="text"
              value={formState?.data?.returnUserReason?.value}
              onChange={handleChange("data")("returnUserReason")}
              ref={fieldRefs.data.returnUserReason}
            />
            {formState?.data?.returnUserReason?.error && (
              <span style={{ color: "red" }}>Reason is required!</span>
            )}

            {/* <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
                position: "relative",
              }}
            >
              <input
                className="file-input"
                type="file"
                id="image"
                accept="image/*"
                multiple
                onChange={handleChangeImage("data")("image")}
                ref={fieldRefs.data.image}
              />
              <input
                className="re-inpt-ureson-file"
                type="text"
                placeholder="No file selected"
                readOnly
                value={formState?.data?.imageFileName?.value}
                
                style={{ marginBottom: "0px" }}
              />
            </div> */}

            <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
              {/* Hidden file input */}
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                multiple
                onChange={handleChangeImage("data")("image")}
                ref={fieldRefs.data.image}
                style={{ display: "none" }} // Hide the input
              />

              {/* Input box for displaying selected file name */}
              <input
                className="re-inpt-ureson-file"
                type="text"
                placeholder="No file selected"
                readOnly
                value={formState?.data?.imageFileName?.value || ""}
                style={{ flex: 1, padding: "8px" }}
              />

              {/* Upload button triggers file input */}

              <div
                onClick={(e) => {
                  e.preventDefault(); // Prevents any form submission
                  document.getElementById("fileInput").click();
                }}
                style={{ display: 'flex', alignItems: 'center' }}>
                <label htmlFor="file-upload" className="upload-btn hoverbtn">
                  Upload
                </label>
                <input
                  className="re-inpt-ureson-file file-input"
                  type="file"
                  id="file-upload"
                />
              </div>

              {/* <button
                                onClick={(e) => {
                                    e.preventDefault(); // Prevents any form submission
                                    document.getElementById("fileInput").click();
                                }}
                                style={{
                                    padding: "8px 12px",
                                    backgroundColor: "#007bff",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "4px",
                                    cursor: "pointer",
                                }}
                            >
                                Upload
                            </button> */}
            </div>






            {formState?.data?.image?.error && (
              <span style={{ color: "red" }}>Image is required!</span>
            )}
          </form>

          <div style={{ marginTop: "20px" }}>
            <h2 className="re-sub-title">Your Address</h2>
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <input
                style={{ width: "20px", height: "20px" }}
                type="checkbox"
                id="lost-password"
                checked={isShippingAddress}
                onChange={(e) => {
                  setIsShippingAddress(e.target.checked);
                }}
              />
              <label
                style={{ marginTop: "10px",cursor:"pointer" }}
                className="re-input-label"
                htmlFor="lost-password"
              >
                Use shipping address 
                {/* <span style={{ color: "red" }}>*</span> */}
              </label>
            </div>
          </div>

          <div className="re-address-form-main">
            <div>
              <label className="re-input-label" htmlFor="">
                First Name <span style={{ color: "red" }}>*</span>
              </label>
              <br />
              <input
                className="re-address-input"
                type="text"
                id="firstName"
                value={formState?.returnAddress?.firstname?.value}
                onChange={handleChange("returnAddress")("firstname")}
                ref={fieldRefs.returnAddress.firstname}
              />
              <br />
              {formState?.returnAddress?.firstname?.error && (
                <span>First name is required!</span>
              )}
            </div>

            <div>
              <label className="re-input-label" htmlFor="">
                Contact number <span style={{ color: "red" }}>*</span>
              </label>
              <br />
              <input
                className="re-address-input"
                type="text"
                id="mobile"
                value={formState?.returnAddress?.mobile?.value}
                onChange={handleChange("returnAddress")("mobile")}
                ref={fieldRefs.returnAddress.mobile}
              />
              <br />
              {formState?.returnAddress?.mobile?.error && (
                <span style={{ color: "red" }}>Mobile is required!</span>
              )}
            </div>

            <div>
              <label className="re-input-label" htmlFor="">
                Email <span style={{ color: "red" }}>*</span>
              </label>
              <br />
              <input
                className="re-address-input"
                type="text"
                id="email"
                value={formState?.returnAddress?.email?.value}
                onChange={handleChange("returnAddress")("email")}
                ref={fieldRefs.returnAddress.email}
              />
              <br />
              {formState?.returnAddress?.email?.error && (
                <span style={{ color: "red" }}>Email is required!</span>
              )}
            </div>

            <div>
              <label className="re-input-label" htmlFor="">
                Address <span style={{ color: "red" }}>*</span>
              </label>
              <br />
              <input
                className="re-address-input"
                type="text"
                id="address"
                value={formState?.returnAddress?.address?.value}
                onChange={handleChange("returnAddress")("address")}
                ref={fieldRefs.returnAddress.address}
              />
              <br />
              {formState?.returnAddress?.address?.error && (
                <span style={{ color: "red" }}>Address is required!</span>
              )}
            </div>

            <div>
              <label className="re-input-label" htmlFor="">
                Governate <span style={{ color: "red" }}>*</span>
              </label>
              <br />
              <select
                name=""
                id=""
                className="re-address-input"
                value={formState?.returnAddress?.governorateID?.value}
                onChange={handleGovernorateChange("returnAddress")(
                  "governorateID"
                )}
                ref={fieldRefs.returnAddress.governorateID}
                style={{outline:"none",padding:"10px"}}
              >
                <option value="">Select Governorate</option>
                {getLocation?.getLocationsData?.map((gov) => (
                  <option key={gov._id} value={gov._id}>
                    {gov.name}
                  </option>
                ))}
              </select>
              <br />
              {formState?.returnAddress?.governorateID?.error && (
                <span style={{ color: "red" }}>Governate is required!</span>
              )}
            </div>

            <div>
              <label className="re-input-label" htmlFor="">
                Wilayat <span style={{ color: "red" }}>*</span>
              </label>
              <br />
              <select
                name=""
                id=""
                className="re-address-input"
                value={formState?.returnAddress?.villageID?.value}
                onChange={handleChangeVillage("returnAddress")("villageID")}
                disabled={!villages.length}
                ref={fieldRefs.returnAddress.villageID}
                style={{outline:"none",padding:"10px"}}
              >
                <option value="">Select Wilayat</option>
                {villages.map((wil) => (
                  <option key={wil._id} value={wil._id}>
                    {wil.name}
                  </option>
                ))}
              </select>
              <br />
              {formState?.returnAddress?.villageID?.error && (
                <span style={{ color: "red" }}>Wilayat is required!</span>
              )}
            </div>

            <div>
              <label className="re-input-label" htmlFor="">
                Post <span style={{ color: "red" }}>*</span>
              </label>
              <br />
              <input
                className="re-address-input"
                type="text"
                id="postCode"
                value={formState?.returnAddress?.postCode?.value}
                onChange={handleChange("returnAddress")("postCode")}
                ref={fieldRefs.returnAddress.postCode}
              />
              <br />
              {formState?.returnAddress?.postCode?.error && (
                <span style={{ color: "red" }}>Post Code is required!</span>
              )}
            </div>

            <div>
              <label className="re-input-label" htmlFor="">
                Country <span style={{ color: "red" }}>*</span>
              </label>
              <br />
              <input
                className="re-address-input"
                type="text"
                id="country"
                value={formState?.returnAddress?.country?.value}
                onChange={handleChange("returnAddress")("country")}
                ref={fieldRefs.returnAddress.country}
              />
              <br />
              {formState?.returnAddress?.country?.error && (
                <span style={{ color: "red" }}>Country is required!</span>
              )}
            </div>
          </div>

          <div>
            <h2 style={{ marginTop: "18px" }} className="re-sub-title">
              Claim Type
            </h2>
            {formState?.data?.cliamType.error && (
              <span style={{ color: "red" }}>Claim Type is required!</span>
            )}

            {claimType?.map((item, index) => (
              <div key={index}>
                <input
                  style={{ marginRight: "10px" }}
                  type="radio"
                  value={item}
                  name="claimType"
                  defaultChecked={claimType.length === 1}
                  id={item}
                  onChange={handleChange("data")("cliamType")}
                />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            gap: "10px",
            margin: "40px 0 85px",
          }}
        >
          <div
            href="/pages/cart"
            className="btn btn-block view-cart btn-outline-red"
            style={{
              width: "231px",
              height: "52px",
            }}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Cancel
          </div>

          <div
            className="btn btn-block view-cart hoverbtn"
            style={{
              background: "black",
              color: "white",
              width: "231px",
              height: "52px",
            }}
            onClick={handleOnSubmit}
          >
            Submit
          </div>
        </div>
      </div>
    </div>
  );
}

export default WarrantyReqForm;