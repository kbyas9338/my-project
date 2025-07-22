import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import * as Yup from "yup";
import "react-datepicker/dist/react-datepicker.css";

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
];

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  age: Yup.number()
    .required("Age is required")
    .positive("Age must be positive")
    .min(18, "Age must be greater than 18"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  skill: Yup.string().required("Skill is required"),
  salary: Yup.number()
    .positive("Salary must be positive")
    .required("Salary is required"),
  dob: Yup.date().nullable().required("Date of birth is required"),
  courseCompleted: Yup.string().required("Please select Yes or No"),
  languages: Yup.array().min(1, "Please select at least one language"),
  state: Yup.string().required("Please select a state"),
});

export default function MyForm() {
  return (
    <div className="container" style={{ maxWidth: "600px", margin: "auto" }}>
      <h2 style={{ textAlign: "center" }}>User Form</h2>
      <Formik
        initialValues={{
          name: "",
          age: "",
          email: "",
          skill: "",
          salary: "",
          dob: null,
          courseCompleted: "",
          languages: [],
          state: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          const formattedValues = {
            ...values,
            dob: values.dob ? format(values.dob, "dd/MMM/yyyy") : "",
          };
          console.log("Form submitted", formattedValues);
          alert("Form submitted successfully!");
          resetForm();
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <Field name="name" className="form-control" />
              <ErrorMessage
                name="name"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Age</label>
              <Field name="age" className="form-control" />
              <ErrorMessage
                name="age"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Date of Birth</label>
              <DatePicker
                selected={values.dob}
                onChange={(date) => setFieldValue("dob", date)}
                placeholderText="Select date of birth"
                className="form-control"
                dateFormat="dd/MMM/yyyy"
                showYearDropdown
                scrollableMonthYearDropdown
                isClearable
              />
              <ErrorMessage
                name="dob"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <Field name="email" className="form-control" />
              <ErrorMessage
                name="email"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Skill</label>
              <Field name="skill" className="form-control" />
              <ErrorMessage
                name="skill"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Salary</label>
              <Field name="salary" className="form-control" />
              <ErrorMessage
                name="salary"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="mb-3">
              <label className="form-label d-block">
                Programming Languages
              </label>
              {["HTML", "CSS", "JavaScript", "Python"].map((lang) => (
                <div key={lang} className="form-check form-check-inline">
                  <Field
                    type="checkbox"
                    name="languages"
                    value={lang}
                    className="form-check-input"
                  />
                  <label className="form-check-label">{lang}</label>
                </div>
              ))}
              <ErrorMessage
                name="languages"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="mb-3">
              <label className="form-label d-block">
                Is this course completed?
              </label>
              <div className="form-check form-check-inline">
                <Field
                  type="radio"
                  name="courseCompleted"
                  value="yes"
                  className="form-check-input"
                />
                <label className="form-check-label">Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <Field
                  type="radio"
                  name="courseCompleted"
                  value="no"
                  className="form-check-input"
                />
                <label className="form-check-label">No</label>
              </div>
              <ErrorMessage
                name="courseCompleted"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Select State</label>
              <Field name="state" as="select" className="form-select">
                <option value="">-- Select a state --</option>
                {indianStates.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="state"
                component="div"
                className="text-danger"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
