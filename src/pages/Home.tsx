import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import useTyping from '../hooks/useTyping.ts';
import { dynamicText } from '../constants/home/dynamic-text.ts';

const Home = () => {

  const dynamicSentences = useTyping(dynamicText, 1400);

  return (
    <>
      <div
        className="h-[calc(100dvh-80px)] flex flex-col md:flex-row items-center md:px-8 lg:px-10 2xl:px-24 gap-28 md:gap-0">
        <div className="w-full md:w-7/12 pt-24 md:mt-0">
          <motion.h1
            className="font-bold text-3xl sm:text-4xl text-center md:text-left lg:text-5xl 2xl:text-6xl px-8 md:px-0 mb-0 md:mb-12"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 30, delay: 0.4 } }}
          >
            I'm a student Web Developer from Switzerland.
          </motion.h1>
          <motion.p className="hidden md:block md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 30, delay: 0.6 } }}
          >
            <span
              className="text-ellipsis bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">Discover</span>&nbsp;
            <span className="italic">{dynamicSentences}</span>
          </motion.p>
        </div>
        <motion.div className="w-full md:w-5/12 flex items-center justify-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 30, delay: 0.8 } }}
        >
          <Tilt glareEnable={true} tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={800} glareColor="transparent"
                className="w-7/12 z-20">
            <img src="/AvatarAI.png" alt="Avatar"
                 className="w-full h-full rounded-full hover:scale-105 transition-all"/>
          </Tilt>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
