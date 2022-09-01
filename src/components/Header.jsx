import React from "react"

const Header = (props) => {
  return (
    <header>
      <h1 className="font-barlow text-base md:text-xl lg:text-head_xs uppercase text-white mb-8 md:mb-[3.75rem] lg:mb-[4.375rem]">
        <span className="mr-7 font-bold tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px] opacity-25">
          {props.num}
        </span>
        {props.text}
      </h1>
    </header>
  )
}

export default Header
