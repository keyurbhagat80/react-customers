import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  StyledPrimaryButton,
  StyledFormGroup,
  StyledInput,
  StyledFormWrapper,
  StyledSpinner,
  StyledError,
  StyledH1
} from "../customer.style";
import { useFormik } from "formik";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import Notification from "../../notification";
import { FormValues, validateForm } from "../customer.utils";
// import { useSelector } from "react-redux";
// import { Customers } from "../List/List";

interface props {
  id: string;
}

const Edit: React.FC<{}> = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    dob: ""
  };
  const [customer, setCustomer] = useState<FormValues>(initialValues);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const history = useHistory();
  const { id } = useParams<props>();
  // const customers = useSelector((state: any) => state.customers.customers);

  useEffect(() => {
    axios.get(`http://localhost:5000/customers/${id}`).then((data) => {
      setCustomer(data.data);
    });

    // const initialValue = customers.filter(
    //   (cust: Customers) => cust.id.toString() === id
    // );
    // setCustomer(initialValue);
  }, [id]);

  const handleFormSubmission = (formData: FormValues): void => {
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
      <StyledH1>Update Customer </StyledH1>

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

      <form data-testid={"update-post-form"} onSubmit={handleSubmit}>
        <StyledFormGroup>
          <label htmlFor="firstName">First Name </label>
          <StyledInput
            type="text"
            data-testid="firstName"
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
          <label htmlFor="lastName">Last Name </label>
          <StyledInput
            type="text"
            data-testid="lastName"
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
          <label htmlFor="dob">DOB </label>
          <StyledInput
            type="text"
            data-testid="dob"
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
