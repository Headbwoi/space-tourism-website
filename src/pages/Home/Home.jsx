import { Link } from "react-router-dom"
import Navbar from "../../components/NavBar"
import { motion } from "framer-motion"

const Home = () => {
  return (
    <div
      className={`pt-6 lg:pt-10 bg-[url("/assets/home/background-home-mobile.jpg")] md:bg-[url("/assets/home/background-home-tablet.jpg")] lg:bg-[url("/assets/home/background-home-desktop.jpg")]  bg-no-repeat bg-cover min-h-screen h-[44.6875rem] md:h-[64rem] lg:h-[56.25rem] `}
    >
      <Navbar />
      <div className="container flex items-center justify-center lg:justify-between flex-col lg:flex-row px-6 md:px-o mt-12 md:mt-[6.625rem] lg:mt-[15.6875rem] ">
        {/* text */}
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-[28.125rem] md:h-[20.875rem] lg:h-[23.875rem] text-center lg:text-left mb-20 md:mb-[9.75rem] lg:mb-0"
        >
          <h1 className="heading text-lg md:text-2xl lg:text-4xl uppercase text-white font-barlowCondensed">
            So, you want to travel to
          </h1>
          <h2 className="text-head_lg md:text-head_xl lg:text-[10.75rem] text-white font-belle uppercase">
            Space
          </h2>
          <p className="text-base md:text-lg text-white font-barlow">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </motion.div>
        {/* explore */}
        <motion.div
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="grid place-items-center relative explore"
        >
          <span className="absolute rounded-full w-[15.09375rem] h-[15.09375rem] md:w-[24.35125rem] md:h-[24.35125rem] lg:h-[28.125rem] lg:w-[28.125rem]  bg-white/20 opacity-0 z-20 duration-300 back"></span>
          <Link
            to={"/destination"}
            className="w-[9.375rem] h-[9.375rem] md:w-[15.125rem] md:h-[15.125rem] lg:w-[17.125rem] lg:h-[17.125rem] bg-white text-darkBlue text-xl md:text-[2rem] font-belle uppercase rounded-full grid place-items-center cursor-pointer z-30"
          >
            Explore
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Home
