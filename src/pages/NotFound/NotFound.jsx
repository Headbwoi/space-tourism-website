import React from "react"
import Navbar from "../../components/NavBar"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="bg-[url(/assets/destination/background-destination-mobile.jpg)] md:bg-[url(/assets/destination/background-destination-tablet.jpg)] lg:bg-[url(/assets/destination/background-destination-desktop.jpg)] pt-6 lg:pt-10 h-[44.375rem] md:h-[64rem] lg:h-[56.25rem] bg-no-repeat bg-cover">
      <Navbar />
      <div className="flex items-center justify-center flex-col lg:flex-row select-none container lg:space-x-20  mt-20  lg:mb-0">
        <motion.div
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="flex-[50%] "
        >
          <img
            src="/assets/destination/image-moon.png"
            alt="image not found"
            className="spin w-[10.625rem] h-[10.625rem] md:w-[18.75rem] md:h-[18.75rem] lg:w-[27.8125rem] lg:h-[27.8125rem] mb-14 lg:mb-0 mx-auto"
          />
        </motion.div>
        <div className="flex-[50%] text-center lg:text-left">
          <motion.p
            whileInView={{ y: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="text-3xl text-lightBlue mb-6 md:mb-8"
          >
            Help me! Help me!
          </motion.p>
          <motion.p
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 2.5 }}
            className="text-gray text-2xl capitalize mb-6"
          >
            your request dey carry me dey go where i no know
          </motion.p>
          <motion.div
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 3.5 }}
          >
            <Link to={"/"} className="text-2xl text-gray">
              Abeg save me{" "}
              <span className="text-lightBlue underline">Click here</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
