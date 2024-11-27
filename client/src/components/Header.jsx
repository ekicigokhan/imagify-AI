import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { AppContext } from "../context/AppContext";

export default function Header() {
  const navigate = useNavigate();
  const { user, setShowLogin } = useContext(AppContext);

  const onClickHandler = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };
  return (
    <motion.div
      className="flex flex-col justify-center items-center text-center my-20"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <p>My text to image generator</p>
        <img src={assets.star_icon} alt="" />
      </motion.div>
      <h1 className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center">
        Turn text to{" "}
        <motion.span
          className="text-blue-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 2 }}
        >
          image
        </motion.span>
        , in seconds.
      </h1>
      <motion.p
        className="text-center max-w-xl mx-auto mt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facilis
        ratione consequuntur, perspiciatis ea expedita repellendus eos ducimus
        illum optio minima molestias exercitationem qui vero velit id doloribus
        quia iure.
      </motion.p>
      <motion.button
        onClick={onClickHandler}
        className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          default: { duration: 0.5 },
          opacity: { delay: 0.8, duration: 1 },
        }}
      >
        Generate Images
        <img src={assets.star_group} alt="" className="h-6" />
      </motion.button>
      <motion.div
        className="flex flex-wrap justify-center mt-16 gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {Array(6)
          .fill("")
          .map((item, index) => {
            return (
              <motion.img
                whileHover={{ scale: 1.05, duration: 0.1 }}
                className="rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10"
                src={
                  index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1
                }
                alt=""
                key={index}
                width={70}
              />
            );
          })}
      </motion.div>
      <motion.p
        className="mt-2 text-neutral-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        Generated images from <span className="text-blue-600">imagify</span>
      </motion.p>
    </motion.div>
  );
}
