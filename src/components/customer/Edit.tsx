import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyledH1 } from "../../App.style";
import {
  StyledPrimaryButton,
  StyledFormGroup,
  StyledInput,
  StyledFormWrapper,
  StyledSpinner,
  StyledError
} from "./customer.style";
import { useFormik } from "formik";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import Notification from "../notification";
import { Values, validateForm } from "./customer.utils";

interface props {
  id: string;
}

const Edit: React.FC<{}> = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    dob: ""
  };
  const [customer, setCustomer] = useState<Values>(initialValues);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const history = useHistory();
  const { id } = useParams<props>();

  useEffect(() => {
    axios.get(`http://localhost:5000/customers/${id}`).then((data) => {
      setCustomer(data.data);
    });
  }, []);

  const handleFormSubmission = (formData: Values): void => {
    setTimeout(() => {
      axios
        .patch(`http://localhost:5000/customers/${id}`, formData)
        .then((data) => {
          setTimeout(() => {
            history.push("/");
          }, 1500);

          setSubmitSuccess(true);
        })
        .catch((error) => {
          console.log(error);
          setSubmitError(true);
        });
    }, 500);
    setLoading(false);
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    errors,
    values
  } = useFormik({
    initialValues: {
      firstName: customer.firstName,
      lastName: customer.lastName,
      dob: customer.dob
    },
    enableReinitialize: true,
    validate: validateForm,
    onSubmit: (value) => {
      setLoading(true);
      handleFormSubmission(value);
    }
  });

  return (
    <StyledFormWrapper>
      <StyledH1> Update Customer </StyledH1>

      {submitSuccess && (
        <Notification variation={"success"}>
          The form was successfully submitted!
        </Notification>
      )}

      {submitError && (
        <Notification variation={"error"}>
          The form was not successfully submitted. Please try again later.
        </Notification>
      )}

      <form id={"update-post-form"} onSubmit={handleSubmit}>
        <StyledFormGroup>
          <label htmlFor="firstName"> First Name </label>
          <StyledInput
            type="text"
            id="firstName"
            onChange={handleChange}
            onBlur={handleBlur}
            name="firstName"
            placeholder="Enter first name"
            value={values.firstName}
          />
          {touched.firstName && errors.firstName ? (
            <StyledError>{errors.firstName}</StyledError>
          ) : null}
        </StyledFormGroup>
        <StyledFormGroup>
          <label htmlFor="lastName"> Last Name </label>
          <StyledInput
            type="text"
            id="lastName"
            onChange={handleChange}
            onBlur={handleBlur}
            name="lastName"
            placeholder="Enter last name"
            value={values.lastName}
          />
          {touched.lastName && errors.lastName ? (
            <StyledError>{errors.lastName}</StyledError>
          ) : null}
        </StyledFormGroup>
        <StyledFormGroup>
          <label htmlFor="dob"> DOB </label>
          <StyledInput
            type="text"
            id="dob"
            onChange={handleChange}
            onBlur={handleBlur}
            name="dob"
            placeholder="Enter date of birth"
            value={values.dob}
          />
          {touched.dob && errors.dob ? (
            <StyledError>{errors.dob}</StyledError>
          ) : null}
        </StyledFormGroup>

        <div>
          <StyledPrimaryButton type="submit">
            Update Customer
          </StyledPrimaryButton>
          {loading && <StyledSpinner>Loading...</StyledSpinner>}
        </div>
      </form>
    </StyledFormWrapper>
  );
};

export default Edit;
