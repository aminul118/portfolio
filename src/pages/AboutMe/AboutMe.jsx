import img from "../../assets/myPic/aminul.jpg";

const AboutMe = () => {
  return (
    <section className="py-8 bg-base-200">
      <div className="md:flex gap-6 items-center container mx-auto">
        <img className="w-80" src={img} alt="" />
        <div className="space-y-4">
          <h2 className="text-2xl">Hello! </h2>
          <p className="text-justify">
            I’m passionate Frontend Developer with a strong foundation in HTML,
            CSS, Tailwind CSS, React, JavaScript, React Router, TanStack Query,
            and JWT Token. I also have experience working with Node.js,
            Express.js, and MongoDB for backend development. I hold a Bachelor's
            degree in Computer Science and Engineering from Daffodil
            International University, where I honed my skills in
            problem-solving, web development, and software engineering. With a
            knack for creating interactive and user-friendly web applications,
            I’m dedicated to bridging the gap between design and functionality.
            I thrive in dynamic environments where I can collaborate with teams
            to build seamless digital experiences. When I’m not coding, I love
            exploring new technologies, contributing to open-source projects,
            and continuously enhancing my skills to stay updated in the
            ever-evolving tech landscape. Let’s connect and build something
            amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
