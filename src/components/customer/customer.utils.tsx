import { Customers } from "./List/List";

export interface FormValues {
  firstName: string;
  lastName: string;
  dob: string;
}

export const validateForm = (formValues: FormValues) => {
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

export const executeSearch = (
  searchValue: string,
  customers: Customers[]
): Customers[] => {
  let results: Customers[] = [];

  const matchWords = new RegExp(searchValue, "i");

  results = customers.filter((el) => {
    return matchWords.test(el.firstName) || matchWords.test(el.lastName);
  });

  return results;
};
