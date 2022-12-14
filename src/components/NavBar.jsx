import { useState } from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import CloseIcon from "../assets/shared/icon-close.svg"
import OpenMenu from "../assets/shared/icon-hamburger.svg"
import Logo from "../assets/shared/logo.svg"
import { AnimatePresence, motion } from "framer-motion"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar flex items-center justify-between px-5 md:pl-10 md:pr-0 md:h-24  relative">
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <span className=" w-[255px] lg:w-[315px] h-[1px] bg-white absolute top-1/2 left-[10.25rem] z-50 hidden lg:block"></span>
      {/* desktop nav, tablet nav */}
      <div className="hidden md:flex h-full md:items-center justify-between  md:px-11  relative bg-white/5 backdrop-blur-sm">
        <ul className="flex items-center lg:justify-center md:space-x-9 lg:space-x-12 w-full lg:pl-[118px] lg:pr-[165px]">
          <CustomLink num={"00"} to={"/"}>
            Home
          </CustomLink>
          <CustomLink num={"01"} to={"/destination"}>
            Destination
          </CustomLink>
          <CustomLink num={"02"} to={"/crew"}>
            crew
          </CustomLink>
          <CustomLink num={"03"} to={"/technology"}>
            technology
          </CustomLink>
        </ul>
      </div>

      <div className="md:hidden absolute top-5 right-5 z-50 cursor-pointer">
        <img
          src={open ? CloseIcon : OpenMenu}
          alt={`${open ? "open menu" : "CloseIcon"}`}
          onClick={() => setOpen(!open)}
        />
      </div>
      {/* mobile nav */}
      <AnimatePresence
        initial={false}
        mode={"wait"}
        onExitComplete={() => null}
      >
        {open && <MobileMenu />}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar

function CustomLink({ to, num, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={`${isActive ? "active" : ""} link`}>
      <Link to={to}>
        <span className="mr-2">{num}</span>
        {children}
      </Link>
    </li>
  )
}
function CustomLinkMobile({ to, num, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={`${isActive ? "active" : ""} mobile-link link`}>
      <Link to={to}>
        <span className="mr-2">{num}</span>
        {children}
      </Link>
    </li>
  )
}

function MobileMenu() {
  return (
    <motion.nav
      whileInView={{ x: [100, 0], opacity: [0, 1] }}
      exit={{ opacity: [1, 0], x: [0, 100] }}
      transition={{ duration: 0.5 }}
      className={`md:hidden fixed w-[70%] bg-darkBlue/75 backdrop-blur-lg right-0 bottom-0 h-full  opacity-0 translate-x-full z-40`}
    >
      <ul className="flex items-start justify-center flex-col absolute top-[160px] left-7">
        <CustomLinkMobile num={"00"} to={"/"}>
          Home
        </CustomLinkMobile>
        <CustomLinkMobile num={"01"} to={"/destination"}>
          Destination
        </CustomLinkMobile>
        <CustomLinkMobile num={"02"} to={"/crew"}>
          crew
        </CustomLinkMobile>
        <CustomLinkMobile num={"03"} to={"/technology"}>
          technology
        </CustomLinkMobile>
      </ul>
    </motion.nav>
  )
}
