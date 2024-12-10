import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import HeadTittle from "../../components/Typing/HeadTittle";

const Contact = () => {
  return (
    <section id="contact" className=" py-24 bg-slate-300">
      <HeadTittle heading={`Contact`} />

      <div className="flex flex-col lg:flex-row  gap-6  container mx-auto justify-between px-2 mt-12">
        {/* left */}
        <div className="flex-1">
          <form className="w-full ">
            <div className="flex flex-col sm:flex-row items-center gap-[20px]">
              <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                <label className="relative">
                  <input
                    type="text"
                    className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
                  />
                  <span className=" absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                    Your name
                  </span>
                </label>
              </div>

              <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                <label className="relative">
                  <input
                    type="email"
                    className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
                  />
                  <span className=" absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                    Email Address
                  </span>
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-[5px] w-full mt-[20px]">
              <label className="relative w-full">
                <textarea className="peer min-h-[200px] border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"></textarea>
                <span className=" absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                  Write Message
                </span>
              </label>
            </div>

            <button
              type="submit"
              className={`py-3 px-4 border border-blue-500 rounded-md outline-none mt-[10px]`}
            >
              Submit
            </button>
          </form>
        </div>
        {/* Right */}
        <div className="flex-1 text-black">
          {/*  information  */}

          <aside className="flex flex-col items-center">
            <div className="flex flex-col gap-5 ">
              <h1 className="text-2xl font-semibold leading-[35px] ">
                Contact Information
              </h1>
              <p className="flex items-center gap-2 mt-4">
                <FaPhone />
                +8801781082064
              </p>
              <p className="flex items-center break-all gap-2">
                <FaEnvelope />
                mr.aminul118@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <FaLocationDot />
                Mirpur, Dhaka
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;
