import "./technology.css"
import Navbar from "../../components/NavBar"
import Header from "../../components/Header"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const Technology = ({ tech }) => {
  const [index, setIndex] = useState(0)
  const [screenSize, setScreenSize] = useState(window.innerWidth)
  let data = tech[index]

  const handleResize = () => {
    setScreenSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const btns = document.querySelectorAll(".tech-tech")
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
    <section className="tech-home">
      <Navbar />
      <Header num="03" text="space launch 101" />

      <div className="tech-container">
        {/* image */}
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="tech-image"
        >
          <img
            src={`${
              screenSize > 1110 ? data.images.portrait : data.images.landscape
            }`}
            alt={`${data.name} image`}
            className="w-full h-full object-contain"
          />
        </motion.div>
        {/* text */}
        <div className="tech-text">
          <motion.div
            whileInView={{ y: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="tech-text-toggle"
          >
            <span className="tech-tech active" onClick={() => setIndex(0)}>
              1
            </span>
            <span className="tech-tech" onClick={() => setIndex(1)}>
              2
            </span>
            <span className="tech-tech" onClick={() => setIndex(2)}>
              3
            </span>
          </motion.div>

          <motion.div
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="tech-text-text"
          >
            <h2 className="terminology">the terminology...</h2>
            <h3 className="name">{data.name}</h3>
            <p className="description">{data.description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Technology
