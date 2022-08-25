import Navbar from "../../components/NavBar"

const Home = () => {
  return (
    <div
      className={`pt-6 lg:pt-10 min-h-screen bg-[url("../src/assets/home/background-home-mobile.jpg")] md:bg-[url("../src/assets/home/background-home-tablet.jpg")] lg:bg-[url("../src/assets/home/background-home-desktop.jpg")]  bg-no-repeat bg-cover overflow-x-hidden`}
    >
      <Navbar />
      <div className="container flex items-center justify-center flex-col lg:flex-row">
        
      </div>
    </div>
  )
}

export default Home
