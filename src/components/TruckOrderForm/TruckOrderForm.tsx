import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import s from "./TruckOrderForm.module.css";
import Button from "../Button/Button";
import Input from "../InputForm/InputForm";

interface FormValues {
  name: string;
  email: string;
  bookingDate: Date | null;
  comment: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  bookingDate: null,
  comment: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  bookingDate: Yup.date().nullable().required("Booking date is required"),
  comment: Yup.string(),
});

const TruckOrderForm: React.FC = () => {
  const handleSubmit = (values: FormValues) => {
    console.log("Submitted data:", values);
  };

  return (
      <div className={s.container}>
          <h3 className={s.title}>Book your campervan now</h3>
          <p className={s.p}>Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
     <div className={s.inputCont}>
              <Input name="name" label="Name*" />
              <Input name="email" type="email" label="Email*" />
              <Input name="bookingDate" as="datepicker" label="Booking date*" />
              <Input name="comment" as="textarea" label="Comment" />
     </div>
          <Button type="submit" className="send">
            Send
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default TruckOrderForm;
