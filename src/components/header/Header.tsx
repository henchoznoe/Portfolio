import Github from '../icons/Github.tsx';
import LinkedIn from '../icons/LinkedIn.tsx';
import { motion } from 'framer-motion';
import Mail from '../icons/Mail.tsx';

const Header = () => {

  return (
    <div className="h-20">
      <div className="w-full h-full flex justify-between items-center py-4 px-4 md:px-8 lg:px-16">
        <motion.span
          className="text-blue-300 text-xl md:text-2xl font-medium tracking-wide uppercase"
          initial={{ x: -500 }}
          animate={{ x: 0, transition: { type: 'spring', stiffness: 30 } }}
        >
          Noé Henchoz
        </motion.span>
        <div className="flex gap-2 sm:gap-5">
          <motion.a
            className="p-2 w-9 h-9 text-blue-900 bg-blue-200 group rounded-full ring-2 ring-blue-300/30 outline-none"
            href="https://www.linkedin.com/in/henchoznoe/"
            target="_blank"
            initial={{ x: 500 }}
            animate={{ x: 0, transition: { type: 'spring', stiffness: 30, delay: 0.5 } }}
          >
            <LinkedIn/>
          </motion.a>
          <motion.a
            className="p-2 w-9 h-9 text-fuchsia-900 bg-fuchsia-200 group rounded-full ring-2 ring-fuchsia-300/30 outline-none"
            href="https://github.com/henchoznoe"
            target="_blank"
            initial={{ x: 500 }}
            animate={{ x: 0, transition: { type: 'spring', stiffness: 30, delay: 0.6 } }}
          >
            <Github/>
          </motion.a>
          <motion.a
            className="p-2 w-9 h-9 text-teal-900 bg-teal-200 group rounded-full ring-2 ring-teal-300/30 outline-none"
            href="mailto:henchoznoe@gmail.com"
            initial={{ x: 500 }}
            animate={{ x: 0, transition: { type: 'spring', stiffness: 30, delay: 0.7 } }}
          >
            <Mail/>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Header;
