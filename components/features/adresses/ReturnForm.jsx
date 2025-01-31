

import React from 'react'
import { useState, useEffect, useReducer, useRef } from 'react'
import { gql, useQuery } from "@apollo/client";



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



function ReturnForm({ orderId , setIsOpen,handleSubmit}) {

    const [addinput, setaddinput] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])

    const [bank, setbank] = useState([1, 1, 1, 1, 1])


    const {
        loading: ordersLoading,
        error: ordersError,
        data:  ordersDataResponse,
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
            image: { value: "", error: false },
        },
        returnAddress: {
            firstname: { value: "", error: false },
            email: { value: "", error: false },
            mobile: { value: "", error: false },
            country: { value: "", error: false },
            // houseNumber: {
            //     value: "",
            //     error: false,
            // },
            // streetName: { value: "", error: false },
            // apartment: { value: "", error: false },
            // suite: { value: "", error: false },
            // unit: { value: "", error: false },
            // city: { value: "", error: false },

            postCode: { value: "", error: false },
            governorate: { value: "", error: false },
            village: { value: "", error: false },
            governorateID: { value: "", error: false },
            villageID: { value: "", error: false },
            address:{ value: "", error: false },
            
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


    const [isShippingAddress, setIsShippingAddress] = useState(false);

    //HANDLERS
    // function openModal() {
    //     setIsOpen(true);
    // }

    // function closeModal() {
    //     setIsOpen(false);
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

            handleSubmit(data);
        } catch (error) {
            toast.error(error.message);
        }
    };

    //USE EFFECT
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
        <div>

            <div className="container re-form-main " >

                <h1 className='re-form-title' > Return Order  </h1>
                <div style={{ borderTop: '1px solid #E2E2E2', marginTop: '10px', marginBottom: "20px" }} > </div>

                <div>

                    <form style={{ marginBottom: "0px" }} action="">

                        <label className='re-input-label' htmlFor=""> Reason for returning the order <span style={{ color: "red" }} >*</span></label>
                        <input style={{ marginBottom: "0px" }} className='re-inpt-ureson' type="text"
                            value={formState?.data?.returnUserReason?.value}
                            onChange={handleChange("data")("returnUserReason")}
                            ref={fieldRefs.data.returnUserReason}
                        />
                        {
                            formState?.data?.returnUserReason?.error &&
                            <span style={{ color: "red" }} > reason is required! </span>
                        }


                        {/* <label className='re-input-label' htmlFor=""> Reason for returning the order *</label> */}
                        {/* <input className='re-inpt-ureson' type="text" /> */}

                        {/* <div style={{ display: 'flex', alignItems: 'center' }}>
                            <label htmlFor="file-upload" className="upload-btn">
                                Upload
                            </label>
                            <input
                                className="re-inpt-ureson-file file-input"
                                type="file"
                                id="file-upload"
                            />
                        </div> */}


                        <div style={{ display: 'flex', alignItems: 'center', marginTop: "20px",  }}>
                            {/* Hidden file input */}
                            <input
                                className="file-input"
                                type="file"
                                id="image"
                                accept="image/*"
                                multiple
                                onChange={handleChangeImage("data")("image")}
                                ref={fieldRefs.data.image}
                            />

                            {/* Input box for displaying file name */}
                            <input
                                className="re-inpt-ureson-file"
                                type="text"
                                placeholder="No file selected"
                                readOnly
                                id="image"
                                accept="image/*"
                                multiple
                                onChange={handleChangeImage("data")("image")}
                                ref={fieldRefs.data.image}
                                style={{ marginBottom: "0px" }}
                            />

                            {/* Upload button */}
                            <button
                                className="upload-btn"
                                
                            >
                                Upload
                            </button>
                        </div>
                        {formState?.data?.image?.error && (

                            <span style={{ color: "red" }} >  image is required! </span>
                        )}




                    </form>

                    <div style={{marginTop:'20px'}} >

                        <h2 className='re-sub-title' > Return Address  </h2>

                        <div style={{ display: "flex", gap: "10px", alignItems: "center" }} >
                            <input style={{ width: "20px", height: "20px" }} type="checkbox"

                                id="lost-password"
                                checked={isShippingAddress}
                                onChange={(e) => {
                                    setIsShippingAddress(e.target.checked);
                                }}

                            />
                            <label style={{ marginTop: "10px" }} className='re-input-label' htmlFor=""> Reason for returning the order *</label>

                        </div>
                    </div>

                    <div   className='re-address-form-main' >







                        <div  >

                            <label className='re-input-label' htmlFor=""> First Name <span style={{ color: "red" }} >*</span></label><br />
                            <input className='re-address-input' type="text"

                                id="firstName"
                                value={formState?.returnAddress?.firstname?.value}
                                onChange={handleChange("returnAddress")("firstname")}
                                ref={fieldRefs.returnAddress.firstname}

                            /><br />
                            {formState?.returnAddress?.firstname?.error && (

                                <span>  first name is required! </span>
                            )}

                        </div>


                        <div>

                            <label className='re-input-label' htmlFor=""> Contact number  <span style={{ color: "red" }} >*</span></label><br />
                            <input className='re-address-input' type="text"

                                id="mobile"
                                value={formState?.returnAddress?.mobile?.value}
                                onChange={handleChange("returnAddress")("mobile")}
                                ref={fieldRefs.returnAddress.mobile}

                            /><br />
                            {
                                formState?.returnAddress?.mobile?.error &&
                                <span style={{ color: "red" }} > mobile is required! </span>
                            }

                        </div>


                        <div>

                            <label className='re-input-label' htmlFor=""> Email   <span style={{ color: "red" }} >*</span></label><br />
                            <input className='re-address-input' type="text"

                                id="email"
                                value={formState?.returnAddress?.email?.value}
                                onChange={handleChange("returnAddress")("email")}
                                ref={fieldRefs.returnAddress.email}

                            /><br />
                            {formState?.returnAddress?.email?.error && (

                                <span style={{ color: "red" }} >  email is required! </span>

                            )}

                        </div>


                        <div>

                            <label className='re-input-label' htmlFor=""> Address   <span style={{ color: "red" }} >*</span></label><br />
                            <input className='re-address-input' type="text"

                                id="address"
                                value={formState?.returnAddress?.address?.value}
                                onChange={handleChange("returnAddress")(
                                    "address"
                                )}
                                ref={fieldRefs.returnAddress.address}

                            /><br />
                            {formState?.returnAddress?.address?.error && (

                                <span style={{ color: "red" }} >   Address is required! </span>
                            )}

                        </div>


                        {/* <div>

                            <label className='re-input-label' htmlFor=""> Apartment   <span style={{ color: "red" }} >*</span></label><br />
                            <input className='re-address-input' type="text"

                                id="apartment"
                                value={formState?.returnAddress?.apartment?.value}
                                onChange={handleChange("returnAddress")("apartment")}
                                ref={fieldRefs.returnAddress.apartment}

                            /><br />

                            {formState?.returnAddress?.apartment?.error && (

                                <span style={{ color: "red" }} >   apartment is required!   </span>


                            )}

                        </div>
 */}

                        {/* <div>

                            <label className='re-input-label' htmlFor=""> Suite   <span style={{ color: "red" }} >*</span></label><br />
                            <input className='re-address-input' type="text"

                                id="suite"
                                value={formState?.returnAddress?.suite?.value}
                                onChange={handleChange("returnAddress")("suite")}
                                ref={fieldRefs.returnAddress.suite}
                            /><br />

                            {formState?.returnAddress?.suite?.error && (
                                <span style={{ color: "red" }} > suite is required!  </span>

                            )}

                        </div> */}


                        {/* <div>

                            <label className='re-input-label' htmlFor=""> Unit   <span style={{ color: "red" }} >*</span></label><br />
                            <input className='re-address-input' type="text"

                                id="unit"
                                value={formState?.returnAddress?.unit?.value}
                                onChange={handleChange("returnAddress")("unit")}
                                ref={fieldRefs.returnAddress.unit}
                            /><br />

                            {formState?.returnAddress?.unit?.error && (

                                <span style={{ color: "red" }} > unit is required!  </span>

                            )}

                        </div> */}


                        {/* <div>

                            <label className='re-input-label' htmlFor=""> Street   <span style={{ color: "red" }} >*</span></label><br />
                            <input className='re-address-input' type="text"

                                id="streetName"
                                value={formState?.returnAddress?.streetName?.value}
                                onChange={handleChange("returnAddress")("streetName")}
                                ref={fieldRefs.returnAddress.streetName}
                            /><br />

                            {formState?.returnAddress?.streetName?.error && (

                                <span style={{ color: "red" }} > street Name is required!  </span>

                            )}

                        </div> */}


                        <div>

                            <label className='re-input-label' htmlFor=""> Governate   <span style={{ color: "red" }} >*</span></label><br />
                            <select name="" id=""
                                className='re-address-input'
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

                            </select><br />

                            {formState?.returnAddress?.governorateID?.error && (

                                <span style={{ color: "red" }} > governate is required! </span>

                            )}


                        </div>


                        <div>

                            <label className='re-input-label' htmlFor=""> Wilayat   <span style={{ color: "red" }} >*</span></label><br />
                            <select name="" id=""
                                className='re-address-input'
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

                            </select><br />

                            {formState?.returnAddress?.villageID?.error && (

                                <span style={{ color: "red" }} > wilayat is required! </span>

                            )}

                        </div>


                        {/* <div>

                            <label className='re-input-label' htmlFor=""> City   <span style={{ color: "red" }} >*</span></label><br />
                            <input className='re-address-input' type="text"

                                id="city"
                                value={formState?.returnAddress?.city?.value}
                                onChange={handleChange("returnAddress")("city")}
                                ref={fieldRefs.returnAddress.city}
                            /><br />

                            {formState?.returnAddress?.city?.error && (

                                <span style={{ color: "red" }} >  city is required! </span>

                            )}

                        </div> */}


                        <div>

                            <label className='re-input-label' htmlFor=""> Post   <span style={{ color: "red" }} >*</span></label><br />
                            <input className='re-address-input' type="text"

                                id="postCode"
                                value={formState?.returnAddress?.postCode?.value}
                                onChange={handleChange("returnAddress")("postCode")}
                                ref={fieldRefs.returnAddress.postCode}
                            /><br />
                            {formState?.returnAddress?.postCode?.error && (
                                <span style={{ color: "red" }} >  post Code is required! </span>

                            )}

                        </div>











                    </div>










                    <div style={{ marginTop: "25px" }} >

                        <h2 className='re-sub-title' > Bank Details  </h2>

                        {/* <div style={{ display: "flex", gap: "10px", alignItems: "center" }} >
                            <input style={{ width: "20px", height: "20px" }} type="checkbox" />
                            <label style={{ marginTop: "10px" }} className='re-input-label' htmlFor=""> Reason for returning the order *</label>

                        </div> */}
                    </div>

                    <div className='re-address-form-main' >





                        <div>

                            <label className='re-input-label' htmlFor=""> Recipient’s name  <span style={{ color: "red" }} >*</span></label><br />
                            <input className='re-address-input' type="text"
                                id="accountHolderName"
                                value={
                                    formState?.bankDetails?.accountHolderName?.value
                                }
                                onChange={handleChange("bankDetails")(
                                    "accountHolderName"
                                )}
                                ref={fieldRefs.bankDetails.accountHolderName}
                            /><br />
                            {formState?.bankDetails?.accountHolderName?.error && (

                                <span style={{ color: "red" }} >  account holder name is required!</span>


                            )}

                        </div>


                        <div>

                            <label className='re-input-label' htmlFor=""> Account number   <span style={{ color: "red" }} >*</span></label><br />
                            <input className='re-address-input' type="text"
                                id="accountNumber"
                                value={formState?.bankDetails?.accountNumber?.value}
                                onChange={handleChange("bankDetails")(
                                    "accountNumber"
                                )}
                                ref={fieldRefs.bankDetails.accountNumber}
                            /><br />

                            {formState?.bankDetails?.accountNumber?.error && (

                                <span style={{ color: "red" }} > account number is required!  </span>

                            )}

                        </div>


                        <div>

                            <label className='re-input-label' htmlFor=""> Bank name    <span style={{ color: "red" }} >*</span></label><br />
                            <input className='re-address-input' type="text"
                                id="bankName"
                                value={formState?.bankDetails?.bankName?.value}
                                onChange={handleChange("bankDetails")("bankName")}
                                ref={fieldRefs.bankDetails.bankName}
                            /><br />

                            {formState?.bankDetails?.bankName?.error && (

                                <span style={{ color: "red" }} >  bank name is required!  </span>

                            )}

                        </div>



                        <div>

                            <label className='re-input-label' htmlFor=""> Branch name     <span style={{ color: "red" }} >*</span></label><br />
                            <input className='re-address-input' type="text"
                                id="branchName"
                                value={formState?.bankDetails?.branchName?.value}
                                onChange={handleChange("bankDetails")("branchName")}
                                ref={fieldRefs.bankDetails.branchName}
                            /><br />
                            {formState?.bankDetails?.branchName?.error && (

                                <span style={{ color: "red" }} >  branch name is required!    </span>

                            )}

                        </div>


                        <div>

                            <label className='re-input-label' htmlFor=""> Swift code  <span style={{ color: "red" }} >*</span></label><br />
                            <input className='re-address-input' type="text"
                                id="ifscCode"
                                value={formState?.bankDetails?.ifscCode?.value}
                                onChange={handleChange("bankDetails")("ifscCode")}
                                ref={fieldRefs.bankDetails.ifscCode}
                            /><br />
                            {formState?.bankDetails?.ifscCode?.error && (
                                <span> IFSC code is required! </span>
                            )}

                        </div>
















                    </div>



                    <div>

                    </div>



                </div>


                <div>

                </div>


                <div style={{ display: "flex", justifyContent: "end", alignItems: "center", gap: "10px" }} >

                    <div
                        href="/pages/cart"
                        className="btn btn-block view-cart "
                        style={{ border: "1px solid #000", background: "white", width: "231px", height: "52px" }}
                        onClick={()=>{setIsOpen(false)}}

                    >
                        Cancel
                    </div>


                    <div

                        className="btn btn-block view-cart "
                        style={{ border: "1px solid #000", background: "black", color: "white", width: "231px", height: "52px" }}
                        onClick={handleOnSubmit}

                    >
                        Accept
                    </div>

                </div>




            </div>


        </div>
    )
}

export default ReturnForm