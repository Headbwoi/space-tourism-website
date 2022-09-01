import "./crew.css"
import Navbar from "../../components/NavBar"
import Header from "../../components/Header"
import { useState } from "react"

const Crew = ({ crew }) => {
  const [index, setIndex] = useState(0)
  let data = crew[index]

  const btns = document.querySelectorAll(".crew-crew")
  const removeActiveClass = () => {
    btns.forEach((button) => {
      button.classList.remove("active")
    })
  }
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      removeActiveClass()
      btn.classList.add("active")
    })
  })

  return (
    <section className="crew-home">
      <Navbar />

      <div className="crew-container">
        <header className="mx-auto w-fit md:mx-0 mt-6 md:mt-10  lg:mt-[4.75rem]">
          <h1 className="font-barlow text-base md:text-xl lg:text-head_xs uppercase text-white mb-8 md:mb-[3.75rem] lg:mb-[4.375rem]">
            <span className="mr-[1.125rem] md:mr-[1.13rem] lg:mr-7 font-bold tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px] opacity-25">
              02
            </span>
            meet your crew
          </h1>
        </header>
        <div className="crew-content">
          {/* image */}
          <div className="border-b border-lightBlue md:border-none w-full h-[13.9375rem] md:h-[35.75rem]  max-w-[38.75rem] lg:max-h-[44.5rem] overflow-hidden ">
            <img
              src={data.images.webp}
              alt={`image of ${data.name}`}
              className="h-[13.9375rem] md:h-[35.75rem] mx-auto lg:mr-0"
            />
          </div>
          {/* text */}
          <div className="crew-text lg:mt-[154px]">
            {/* toggle */}
            <div className="mb-8 flex items-start justify-center space-x-4 lg:space-x-6 mt-28 md:mt-0">
              <span
                className="crew-crew active"
                onClick={() => setIndex(0)}
              ></span>
              <span className="crew-crew" onClick={() => setIndex(1)}></span>
              <span className="crew-crew" onClick={() => setIndex(2)}></span>
              <span className="crew-crew" onClick={() => setIndex(3)}></span>
            </div>
            <div>
              {/* title */}
              <h2 className="crew-heading">{data.role}</h2>
              {/* name */}
              <h3 className="crew-name">{data.name}</h3>
              <p className="crew-bio">{data.bio}</p>
            </div>
            {/* info */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Crew
