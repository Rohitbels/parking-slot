import BookingListing from "../BookingListing"
import MenuAppBar from "../Header";
// import { NewBookingModal } from "./BookingModal";

const Home = () => {
  return (
    <div className="flex ">
      <MenuAppBar companyName="Pool Parking APP" userName="Rohit"  />
      <BookingListing /> 
     </div>
  )
}

export default Home;