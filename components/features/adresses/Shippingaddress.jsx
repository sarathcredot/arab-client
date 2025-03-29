import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import withApollo from "../../../server/apollo";
import { gql, useMutation, useLazyQuery, useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import ALink from "../../common/ALink";
import { IoMdArrowBack } from "react-icons/io";
import { USER_DETAIL } from "../../../pages/pages/account";

export const SHIPPING_ADDRESS = gql`
  mutation CreateUserShippingAddress($input: UserCreateShippingAddressInput!) {
    createUserShippingAddress(input: $input) {
      _id
    }
  }
`;

export const GET_ADDRESSES = gql`
  query GetUserShippingAddress($input: GetUserShippingAddressInput!) {
    getUserShippingAddress(input: $input) {
      _id
      firstname
      email
      mobile
      postCode
      country
      governorate
      village
      governorateID
      villageID
      isDefault
      address
      label
    }
  }
`;
export const UPDATE_SHIPPING = gql`
  mutation EditUserShippingAddress($input: UserEditShippingAddressInput!) {
    editUserShippingAddress(input: $input) {
      _id
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


function Addresses({ isEdit,setIsEdit, addressId, onClose, isShipping, setIsshipping }) {
  const router = useRouter();
  const { loading: userloading, error: usererror, data: userData, refetch } = useQuery(USER_DETAIL,{fetchPolicy:"network-only"});

  const {
    data: getAddress,
    loading: getAddressLoading,
    error: getAddressError,
    refetch: refetchAddress
  } = useQuery(GET_ADDRESSES, { variables: { input: { _id: addressId } } });
  const {
    data: getLocation,
    loading: getLocationLoading,
    error: getLocationError,
  } = useQuery(GET_LOCATION);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
    control,
  } = useForm({
    enableReinitialize: true,
    defaultValues: {
      label: "",
      firstname: "",
      country: "",
      // streetName: "",
      // houseNumber: "",
      address: "",
      // city: "",
      postCode: "",
      // apartment: "",
      email: "",
      mobile: "",
      governorate: "",
      village: "",
      governorateID: "",
      villageID: "",
    },
  });

  useEffect(() => {
    console.log(getAddress,' = GET ADDRESS')
    if (isEdit && getAddress && !getAddressLoading) {
      setValue("label", getAddress?.getUserShippingAddress?.label);
      setValue("firstname", getAddress?.getUserShippingAddress?.firstname);
      setValue("country", getAddress?.getUserShippingAddress?.country);
      setValue("address", getAddress?.getUserShippingAddress?.address);
      // setValue("houseNumber", getAddress?.getUserShippingAddress?.houseNumber);
      // setValue("streetName", getAddress?.getUserShippingAddress?.streetName);
      // setValue("city", getAddress?.getUserShippingAddress?.city);
      setValue("postCode", getAddress?.getUserShippingAddress?.postCode);
      setValue("mobile", getAddress?.getUserShippingAddress?.mobile);
      setValue("email", getAddress?.getUserShippingAddress?.email);
      // setValue("apartment", getAddress?.getUserShippingAddress?.apartment);
      setValue("governorate", getAddress?.getUserShippingAddress?.governorate);
      setValue("village", getAddress?.getUserShippingAddress?.village);
      setValue(
        "governorateID",
        getAddress?.getUserShippingAddress?.governorateID
      );
      setValue("villageID", getAddress?.getUserShippingAddress?.villageID);
      const selectedGovernorate = getLocation?.getLocationsData?.find(
        (g) => g._id === getAddress?.getUserShippingAddress?.governorateID
      );
      setvillages(selectedGovernorate?.villages || []);
    }
  }, [isEdit, getAddress, getAddressLoading]);

  const [CreateUserShippingAddress] = useMutation(SHIPPING_ADDRESS);
  const [EditUserShippingAddress] = useMutation(UPDATE_SHIPPING);

  const [villages, setvillages] = useState([]);

  const handleGovernorateChange = (governorateId) => {
    const selectedGovernorate = getLocation?.getLocationsData?.find(
      (g) => g._id === governorateId
    );
    setValue("governorate", selectedGovernorate?.name);
    setvillages(selectedGovernorate?.villages || []);
    setValue("village", ""); // Reset wilayat when governorate changes
  };

  const handleVillageChange = (villageId) => {
    if (villages?.length) {
      const selectedVillage = villages?.find((v) => v._id === villageId);
      setValue("village", selectedVillage?.name);
    }
  };

  const onSubmit = async (values) => {
    event.preventDefault();

    try {
      if (isEdit) {
        const response = await EditUserShippingAddress({
          variables: {
            input: { _id: getAddress?.getUserShippingAddress?._id, ...values },
          },
        });
        console.log("variables = ", {
          input: { _id: getAddress?.getUserShippingAddress?._id, ...values },
        });
        
        
        if (response) {
          toast.success(
            <div style={{ padding: "10px" }}>Shipping address updated</div>
          );
          refetchAddress();
          reset();
          onClose();
        }
      } else {
        const response = await CreateUserShippingAddress({
          variables: { input: { ...values } },
        });
        if (response) {
          localStorage?.setItem(
            "shippingId",
            response?.data?.createUserShippingAddress?._id
          );
          toast.success(
            <div style={{ padding: "10px" }}>Shipping address added</div>
          );
          onClose();
          reset();
        }
      }
      setIsEdit?.(false)
    } catch (error) {
      toast(<div style={{ padding: "10px" }}>{error.message}</div>);
    }
  };

  const fieldRules = {
    label: {
      required: "Label is required",
    },
    governorate: {
      required: "Governorate is required",
    },
    wilayat: {
      required: "wilayat is required",
    },
    // city: {
    //   required: "City is required",
    // },
    firstname: {
      required: "Full Name is required",
    },
    address: {
      required: "Address is required",
    },
    // houseNumber: {
    //   required: "HouseNumber is required",
    // },
    mobile: {
      required: "Phone number is required",
    },
    postCode: {
      required: "postCode is required",
    },
    // streetName: {
    //   required: "Street Name is required",
    // },
    email: {
      pattern: {
        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        message: "Invalid email address",
      },
    },
  };

  useEffect(()=>{
    if(!isEdit && userData){      
      setValue("firstname",userData?.getUserRecord?.record?.displayName)
      console.log("NAME = ",userData?.getUserRecord?.record)
      setValue("email",userData?.getUserRecord?.record?.email)
      setValue("mobile",userData?.getUserRecord?.record?.mobileNumber)
    }
  },[userData,isEdit])
  return (
    <div>
      <div className="container checkout-container">
        <div className="row">
          <div className="col-lg-12">
            <ul style={{ listStyleType: "none" }} className="checkout-steps">
              <li>
                <div
                  className="container custom-formspace"
                  // style={{
                  //     marginTop: "6rem",

                  //     padding: "2px"
                  // }}
                >
                  <h4
                    className="step-title step-title-new  "
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <div
                      onClick={() => {
                        setIsEdit?.(false)
                        setIsshipping(!isShipping)}}
                      className={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "rgba(232, 232, 232, 0.29)",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"                        
                      }}
                    >
                      <IoMdArrowBack style={{ fontSize: "20px",cursor:"pointer" }} />
                    </div>
                    Shipping address
                  </h4>
                </div>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  id="checkout-form"
                  style={{ marginTop: "40px" }}
                >
                  {/* <div className="row"> */}
                  {/* <div className="col-md-6"> */}
                  <div className="form-group">
                    <label
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: "400px",
                        lineHeight: "20px",
                      }}
                    >
                      Label{" "}
                      <ab className="required" title="required">
                        *
                      </ab>
                    </label>
                    <Controller
                      control={control}
                      name="label"
                      render={({ field: { onChange, value } }) => (
                        <input
                          type="text"
                          className="form-control"
                          value={value}
                          placeholder="Label"
                          onChange={onChange}
                          style={{ marginTop: "10px" }}
                        />
                      )}
                      rules={fieldRules.label}
                    />
                    {errors?.label ? (
                      <div style={{ color: "red", fontWeight: "300" }}>
                        {errors?.label?.message}
                      </div>
                    ) : null}
                  </div>
                  <div className="form-group">
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
                      name="firstname"
                      render={({ field: { onChange, value } }) => (
                        <input
                          type="text"
                          className="form-control"
                          value={value}
                          placeholder="Enter Your Full Name"
                          // onChange={onChange}
                          onChange={(e) => {
                            const newValue = e.target.value.replace(/[0-9]/g, ""); // Remove numbers
                            onChange({ target: { value: newValue } }); // Call onChange with filtered value
                          }}
                          style={{ marginTop: "10px" }}
                        />
                      )}
                      rules={fieldRules.firstname}
                    />
                    {errors?.firstname ? (
                      <div style={{ color: "red", fontWeight: "300" }}>
                        {errors?.firstname?.message}
                      </div>
                    ) : null}
                  </div>

                  <div className="form-group">
                    <label
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: "400px",
                        lineHeight: "20px",
                      }}
                    >
                      Country / Region{" "}
                    </label>
                    <Controller
                      control={control}
                      name="country"
                      render={({ field: { onChange, value } }) => (
                        <input
                          type="text"
                          className="form-control"
                          value={value}
                          placeholder="Country / Region"
                          onChange={onChange}
                          style={{ marginTop: "10px" }}
                        />
                      )}
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      Governorate <span className="required">*</span>
                    </label>
                    <Controller
                      control={control}
                      name="governorateID"
                      render={({ field: { onChange, value } }) => (
                        <select
                          className="form-control"
                          value={value}
                          onChange={(e) => {
                            onChange(e);
                            handleGovernorateChange(e.target.value);
                          }}
                        >
                          <option value="">Select Governorate</option>
                          {getLocation?.getLocationsData?.map((gov) => (
                            <option key={gov._id} value={gov._id}>
                              {gov.name}
                            </option>
                          ))}
                        </select>
                      )}
                      rules={fieldRules?.governorate}
                    />
                    {errors.governorate && (
                      <div style={{ color: "red", fontWeight: "300" }}>
                        {errors.governorate.message}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label>
                      Wilayat <span className="required">*</span>
                    </label>
                    <Controller
                      control={control}
                      name="villageID"
                      render={({ field: { onChange, value } }) => (
                        <select
                          className="form-control"
                          value={value}
                          onChange={(e) => {
                            onChange(e);
                            handleVillageChange(e.target.value);
                          }}
                          disabled={!villages.length}
                        >
                          <option value="">Select Wilayat</option>
                          {villages.map((wil) => (
                            <option key={wil._id} value={wil._id}>
                              {wil.name}
                            </option>
                          ))}
                        </select>
                      )}
                      rules={fieldRules?.village}
                    />
                    {errors.village && (
                      <div style={{ color: "red", fontWeight: "300" }}>
                        {errors.village.message}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label>
                      Address <span className="required">*</span>
                    </label>
                    <Controller
                      control={control}
                      name="address"
                      render={({ field: { onChange, value } }) => (
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Address"
                          value={value}
                          onChange={onChange}
                          style={{ marginTop: "10px" }}
                        />
                      )}
                      rules={fieldRules.address}
                    />
                    {errors?.address ? (
                      <div style={{ color: "red", fontWeight: "300" }}>
                        {errors?.address?.message}
                      </div>
                    ) : null}
                    {/* <Controller
                      control={control}
                      name="streetName"
                      render={({ field: { onChange, value } }) => (
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Apartment, suite, unit, etc."
                          value={value}
                          onChange={onChange}
                        />
                      )}
                      rules={fieldRules.streetName}
                    />
                    {errors?.streetName ? (
                      <div style={{ color: "red", fontWeight: "300" }}>
                        {errors?.streetName?.message}
                      </div>
                    ) : null} */}
                  </div>

                  {/* <div className="form-group">
                    <label>
                      Town/City <span className="required">*</span>
                    </label>
                    <Controller
                      control={control}
                      name="city"
                      render={({ field: { onChange, value } }) => (
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Abu Dhabi"
                          value={value}
                          onChange={onChange}
                          style={{ marginTop: "10px" }}
                        />
                      )}
                      rules={fieldRules.city}
                    />
                    {errors?.city ? (
                      <div style={{ color: "red", fontWeight: "300" }}>
                        {errors?.city?.message}
                      </div>
                    ) : null}
                  </div> */}

                  <div className="form-group">
                    <label>
                      Pincode/Zip <span className="required">*</span>
                    </label>
                    <Controller
                      control={control}
                      name="postCode"
                      render={({ field: { onChange, value } }) => (
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Pincode/Zip"
                          value={value}
                          onChange={onChange}
                          style={{ marginTop: "10px" }}
                        />
                      )}
                      rules={fieldRules.postCode}
                    />
                    {errors?.postCode ? (
                      <div style={{ color: "red", fontWeight: "300" }}>
                        {errors?.postCode?.message}
                      </div>
                    ) : null}
                  </div>

                  <div className="form-group">
                    <label>
                      Phone<span className="required">*</span>
                    </label>
                    <div className="input-group" style={{ marginTop: "10px" }}>
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          style={{ padding: "10px" }}
                        >
                          <img
                            // src="images\brands\flag1.svg"
                            src="/images/brands/oman_flag.svg"
                            alt="Flag"
                            width="24"
                            height="16"
                          />
                          {/* +968 */}
                        </span>
                      </div>
                      <Controller
                        control={control}
                        name="mobile"
                        render={({ field: { onChange, value } }) => (
                          <input
                            type="tel"
                            className="form-control"
                            placeholder="Enter Your Phone Number"
                            value={`+ 968 ${value}`}
                            onChange={onChange}
                          />
                        )}
                        rules={fieldRules.mobile}
                      />
                    </div>
                    {errors?.mobile ? (
                      <div style={{ color: "red", fontWeight: "300" }}>
                        {errors?.mobile?.message}
                      </div>
                    ) : null}
                  </div>

                  <div className="form-group">
                    <label>
                      Email
                      {/* <span className="required">*</span> */}
                    </label>
                    <Controller
                      control={control}
                      name="email"
                      render={({ field: { onChange, value } }) => (
                        <input
                          type="text"
                          className="form-control"
                          value={value}
                          placeholder="Enter Your Email"
                          onChange={onChange}
                          style={{ marginTop: "10px" }}
                        />
                      )}
                    />
                  </div>

                  <div
                    className="container"
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <div className="mt-3">
                      <button type="submit" className="btn btn-dark mr-0 hoverbtn">
                        {isEdit?"Save changes":"Submit"}
                      </button>
                    </div>
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withApollo({ ssr: typeof window === "undefined" })(Addresses);
