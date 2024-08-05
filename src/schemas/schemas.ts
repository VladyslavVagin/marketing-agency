import * as yup from "yup";

const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const contactSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().matches(emailRegExp, "Wrong Email").required("Email is required"),
    message: yup.string().required("Message is required"),
});