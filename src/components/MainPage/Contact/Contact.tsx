import ContactTitle from "./ContactTitle/ContactTitle";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  return (
    <div className="bg-gray-300 rounded-[50px] px-[30px] pt-[74px] pb-16">
      <ContactTitle />
      <ContactForm />
    </div>
  );
};

export default Contact;
