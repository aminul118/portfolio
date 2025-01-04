import HeadTittle from "../../components/Typing/HeadTittle";
import ContactForm from "./ContactForm";
import ContactInformation from "./ContactInformation";
import img from "../../assets/background/bg1.jpg";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-cover bg-center "
      style={{ backgroundImage: `url(${img})` }}
    >
      <HeadTittle heading="Contact" />
      <div className="flex flex-col lg:flex-row gap-6 container mx-auto justify-between px-2 mt-12">
        {/* Left Contact Form */}
        <div className="flex-1">
          <ContactForm />
        </div>
        {/* Right Contact Information */}
        <div className="flex-1 text-black">
          <ContactInformation />
        </div>
      </div>
    </section>
  );
};

export default Contact;
