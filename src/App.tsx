import { FunctionComponent } from "react"
import HotelList from "./pages/hotel-list"
import EventList from "./pages/event-list"
import Header from "./components/header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HotelDetail from "./pages/hotel-detail"
import HotelView from "./components/hotel-view"

const App: FunctionComponent = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HotelList />} />
                <Route path="/hotels/:id" element={<HotelDetail />} />
                <Route path="/hotels/:id/view360" element={<HotelView />} />
                <Route path="/hotels" element={<HotelList />} />
                <Route path="/events" element={<EventList />} />
            </Routes>
        </Router>
    )
}

export default App
