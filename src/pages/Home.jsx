import BookingListing from "../BookingListing"
import { NewBookingModal } from "./BookingModal";

const Home = () => {
  return (
    <div className="flex "><BookingListing /> 
    <NewBookingModal /> </div>
  )
}

export default Home;