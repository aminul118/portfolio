import HeadTittle from "../../components/Typing/HeadTittle";
import ContactForm from "./ContactForm";
import ContactInformation from "./ContactInformation";

const Contact = () => {
  return (
    <section id="contact" className=" py-24 bg-slate-300">
      <HeadTittle heading="Contact" />
      <div className="flex flex-col lg:flex-row  gap-6  container mx-auto justify-between px-2 mt-12">
        {/* left contact form*/}
        <div className="flex-1">
          <ContactForm />
        </div>
        {/* Right  contact information*/}
        <div className="flex-1 text-black">
          <ContactInformation />
        </div>
      </div>
    </section>
  );
};

export default Contact;
