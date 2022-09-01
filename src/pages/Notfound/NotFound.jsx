import React from "react"
import Navbar from "../../components/NavBar"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <motion.div
      className="bg-[url(/assets/destination/background-destination-mobile.jpg)] md:bg-[url(/assets/destination/background-destination-tablet.jpg)] lg:bg-[url(/assets/destination/background-destination-desktop.jpg)] pt-6 lg:pt-10 h-[44.375rem] md:h-[64rem] lg:h-[56.25rem] bg-no-repeat bg-cover"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Navbar />
      <div className="flex items-center justify-center flex-col lg:flex-row select-none container lg:space-x-20  mt-20  lg:mb-0">
        <div className="flex-[50%] ">
          <img
            src="/assets/destination/image-moon.png"
            alt="image not found"
            className="spin w-[10.625rem] h-[10.625rem] md:w-[18.75rem] md:h-[18.75rem] lg:w-[27.8125rem] lg:h-[27.8125rem] mb-14 lg:mb-0 mx-auto"
          />
        </div>
        <div className="flex-[50%] text-center lg:text-left">
          <p className="text-3xl text-lightBlue mb-6 md:mb-8">
            Help me! Help me!
          </p>
          <p className="text-gray text-2xl capitalize mb-6">
            your request dey carry me dey go where i no know
          </p>
          <Link to={"/"} className="text-2xl text-gray">
            Abeg save me{" "}
            <span className="text-lightBlue underline">Click here</span>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default NotFound
