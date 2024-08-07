import ContactTitle from "./ContactTitle/ContactTitle";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  return (
    <div className="bg-gray-300 rounded-[50px] px-[30px] pt-[74px] pb-16 max-w-[1280px] mx-auto md:px-9 md:pb-10 md:flex md:items-start md:justify-between xl:px-[135px]">
      <ContactTitle />
      <ContactForm />
    </div>
  );
};

export default Contact;
