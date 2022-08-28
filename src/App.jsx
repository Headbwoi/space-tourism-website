import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home, Destination, Crew, Technology, NotFound } from "./pages"
import data from "./data.json"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/destination"
          element={<Destination destination={data.destinations} />}
        />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
