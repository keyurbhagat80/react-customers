export interface Values {
  firstName: string;
  lastName: string;
  dob: string;
}

export const validateForm = (formValues: Values) => {
  const errors: any = {};
  if (!formValues.firstName) {
    errors.firstName = "First name field is required";
  }

  if (!formValues.lastName) {
    errors.lastName = "Last name field is required";
  }

  if (!formValues.dob) {
    errors.dob = "Date of birth field is required";
  }
  return errors;
};
