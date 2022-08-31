import "./destination.css"
import Navbar from "../../components/NavBar"
import { useState } from "react"

const Destination = ({ destination }) => {
  const [index, setIndex] = useState(0)
  let data = destination[index]

  const handleSelect = (selected) => {
    switch (selected) {
      case "moon":
        setIndex(0)
        break
      case "mars":
        setIndex(1)
        break
      case "europa":
        setIndex(2)
        break
      case "titan":
        setIndex(3)
        break
      default:
        setIndex(0)
        break
    }
  }

  return (
    <section className=" destination-home ">
      <Navbar />
      <div className="w-full px-6 md:px-9 lg:px-0 text-center lg:text-left mt-6 md:mt-10 lg:mt-[4.875rem] container">
        <header>
          <h1 className="dest-heading">
            <span className="dest-heading-span">01</span>
            pick your destination
          </h1>
        </header>

        {/* flex */}
        <div className="flex items-center justify-center flex-col lg:flex-row lg:space-x-[9.75rem]">
          {/* image */}
          <img
            src={data.images.png}
            alt={`${data.name} image`}
            className="dest-image"
          />

          {/* slideshow and text */}
          <div className="lg:w-[27.8125rem] lg:h-[29.5rem] ">
            {/* slider/switcher/toggle */}
            <div className="flex items-center justify-center lg:justify-start space-x-7 md:space-x-9 mb-5 md:mb-9 ">
              <span
                className="dest-dest active"
                onClick={(e) => handleSelect(e.target.textContent)}
              >
                moon
              </span>
              <span
                className="dest-dest"
                onClick={(e) => handleSelect(e.target.textContent)}
              >
                mars
              </span>
              <span
                className="dest-dest"
                onClick={(e) => handleSelect(e.target.textContent)}
              >
                europa
              </span>
              <span
                className="dest-dest"
                onClick={(e) => handleSelect(e.target.textContent)}
              >
                titan
              </span>
            </div>
            {/* text */}
            <div className="text-center lg:text-left">
              {/* heading */}
              <div className="h-16 md:h-[5.75rem] lg:h-[7.1875rem]">
                <h2 className="text-white text-head_md md:text-[5rem] lg:text-head_lg font-belle uppercase">
                  {data.name}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Destination
