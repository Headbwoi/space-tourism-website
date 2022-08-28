import Navbar from "../../components/NavBar"
import { useState } from "react"

const Destination = ({ destination }) => {
  const [index, setIndex] = useState(0)
  let data = destination[index]

  window.onload = () => setIndex(0)

  console.log(data.name)

  return (
    <div className="pt-6 lg:pt-10 h-[53.125rem] md:h-[64rem] lg:h-[56.25rem] bg-[url(/assets/destination/background-destination-mobile.jpg)] md:bg-[url(/assets/destination/background-destination-tablet.jpg)] lg:bg-[url(/assets/destination/background-destination-desktop.jpg)] bg-no-repeat bg-cover ">
      <Navbar />
      <div className="bg-white text-darkBlue h-20 w-full">
        <div className="flex items-center justify-between">
          <span onClick={() => setIndex(0)}>0</span>
          <span onClick={() => setIndex(1)}>1</span>
          <span onClick={() => setIndex(2)}>2</span>
          <span onClick={() => setIndex(3)}>3</span>
        </div>

        <div className="text-white">
          <h1>{data.name}</h1>
          <img src={data.images.webp} alt="" />
          <p>{data.description}</p>
          <p>{data.travel}</p>
        </div>
      </div>
    </div>
  )
}

export default Destination
