import React from "react"

const Header = (props) => {
  return (
    <header className="mx-auto w-fit md:mx-0 md:pl-10 lg:pl-[10.25rem] mt-6 md:mt-10  lg:mt-[4.75rem]">
      <h1 className="font-barlowCondensed text-base md:text-xl lg:text-head_xs uppercase text-white mb-8 md:mb-[3.75rem] lg:mb-[4.375rem]">
        <span className="mr-[1.125rem] md:mr-[1.13rem] lg:mr-7 font-bold tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px] opacity-25">
          {props.num}
        </span>
        {props.text}
      </h1>
    </header>
  )
}

export default Header
