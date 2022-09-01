import "./crew.css"
import Navbar from "../../components/NavBar"
import Header from "../../components/Header"

const Crew = () => {
  return (
    <section className="crew-home">
      <Navbar />

      <Header num="02" text="meet your crew" />
      <div className="crew-container"></div>
    </section>
  )
}

export default Crew
