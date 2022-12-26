import React from "react";
import { motion } from "framer-motion";
type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] 
    p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden ">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://arch.55.studio/wp-content/uploads/2022/12/Group-1000001794-1.png"
        alt="55studio"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Wordpress Developer</h4>
        <p className="font-bold text-2xl mt-1">55 Studio</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://s.w.org/style/images/about/WordPress-logotype-wmark-white.png"
            alt="Wordpress"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://s.w.org/style/images/about/WordPress-logotype-wmark-white.png"
            alt="Wordpress"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://s.w.org/style/images/about/WordPress-logotype-wmark-white.png"
            alt="Wordpress"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">01 June 2022 - Present</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Ability to communicate and work in a team environment</li>
          <li>Built and maintain websites for client</li>
          <li>Woocommerce (Bookings, Events, Etc.)</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
