import Tilt from 'react-parallax-tilt';
import Github from '@components/icons/Github.tsx';
import Instagram from '@components/icons/Instagram.tsx';
import LinkedIn from '@components/icons/LinkedIn.tsx';
import Mail from '@components/icons/Mail.tsx';

const Contact = () => {
  return (
    <div className="min-h-dvh flex flex-col md:flex-row items-center md:px-8 lg:px-10 2xl:px-24 gap-20 md:gap-10">
      <div className="w-full md:w-1/2 flex items-center justify-center order-2 md:order-none">
        <Tilt glareEnable={true} tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={800} glareColor="transparent"
              className="w-auto z-20">
          <img src="/cat.png" alt="Cat image" className="w-full h-full hover:scale-105 transition-all "/>
        </Tilt>
      </div>
      <div className="w-full md:w-1/2 mt-24 md:mt-0 flex flex-col gap-10">
        <h2 className="font-bold text-5xl text-center md:text-left md:text-6xl 2xl:text-7xl px-8 md:px-0">
          Contact
        </h2>
        <div className="flex gap-3 sm:gap-5 w-full justify-center md:justify-start">
          <a className="p-3 w-16 h-16 text-teal-900 bg-teal-200 group rounded-full ring-2 ring-teal-300/30 outline-none"
             href="mailto:henchoznoe@gmail.com">
            <Mail/>
          </a>
          <a className="p-3 w-16 h-16 text-blue-900 bg-blue-200 group rounded-full ring-2 ring-blue-300/30 outline-none"
             href="https://www.linkedin.com/in/henchoznoe/" target="_blank">
            <LinkedIn/>
          </a>
          <a className="p-3 w-16 h-16 text-red-900 bg-red-200 group rounded-full ring-2 ring-red-300/30 outline-none"
             href="https://www.instagram.com/henchoznoe/" target="_blank">
            <Instagram/>
          </a>
          <a
            className="p-3 w-16 h-16 text-fuchsia-900 bg-fuchsia-200 group rounded-full ring-2 ring-fuchsia-300/30 outline-none"
            href="https://github.com/henchoznoe" target="_blank">
            <Github/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
