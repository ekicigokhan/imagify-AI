import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

export default function Description() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center my-24 p-6 md:px-28"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        Create AI Images
      </h1>
      <p className="text-gray-500 mb-8">Turn your imagination into visuals</p>
      <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
        <img
          src={assets.sample_img_1}
          alt=""
          className="w-80 xl:w-96 rounded-lg"
        />
        <div>
          <h2 className="text-3xl font-medium max-w-lg mb-4">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            aut animi ex laborum? Error dolor voluptas excepturi doloribus
            laudantium. Repudiandae saepe dolorum dicta qui natus ad sed velit
            amet ullam!
          </p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            sed tenetur commodi laudantium placeat velit cupiditate impedit
            voluptatibus. Officiis, voluptatibus. Voluptates illo dolorem
            laudantium dolore nulla dignissimos error magnam hic!
          </p>
        </div>
      </div>
    </motion.div>
  );
}
