/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  Container,
  Grid2,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { NewBookingModal } from "./pages/BookingModal";
import { apiUrl, formatTimestamp } from "./utils";
import LabelValue from "./LabelValue";
import Qr from "./pages/Qrcode";
import AlreadyBooked from "./pages/AlreadyBooked";

const bookings = [
  { location: "Downtown Parking", type: "Car", date: "2025-02-14", time: "10:30 AM" },
  { location: "Mall Basement", type: "Two-Wheeler", date: "2025-02-15", time: "2:00 PM" },
  { location: "Office Tower A", type: "Car", date: "2025-02-16", time: "8:00 AM" },
  { location: "City Center", type: "Two-Wheeler", date: "2025-02-17", time: "6:30 PM" },
  { location: "City Center", type: "Two-Wheeler", date: "2025-02-17", time: "6:30 PM" },
  { location: "City Center", type: "Two-Wheeler", date: "2025-02-17", time: "6:30 PM" },
  { location: "City Center", type: "Two-Wheeler", date: "2025-02-17", time: "6:30 PM" },
];


const bk = [
  {
    "userId": 1,
    "userName": "John Doe",
    "userOrganisationId": 1,
    "userOrganisationName": "ABC Corp",
    "bookingOrganisationId": 1,
    "dateOfReservation": "2025-02-13T13:59:28.992512",
    "bookingType": 1,
    "bookingSlots": 4
  },
  {
    "userId": 1,
    "userName": "John Doe",
    "userOrganisationId": 1,
    "userOrganisationName": "ABC Corp",
    "bookingOrganisationId": 1,
    "dateOfReservation": "2025-02-13T13:58:26.246201",
    "bookingType": 1,
    "bookingSlots": 7
  }
];


const BookingCard = ({ booking }) => (
  <Card sx={{ minWidth: 275, p: 2, boxShadow: 3 }}>
    <CardContent>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "4px",
        }}
      >
        <Typography variant="h6" component="div">
          {booking.location}
        </Typography>
        <LabelValue
          label={"Date & Time "}
          value={formatTimestamp(booking.dateOfReservation)}
        />
        <LabelValue
          label={"Booking type"}
          value={["Two wheeler", "Car"][booking.bookingType - 1]}
        />
        <LabelValue label={"No. of Bookings"} value={booking.bookingSlots} />
      </div>
      <Typography variant="body2"></Typography>
    </CardContent>
  </Card>
);

const BookingGrid = () => {
  const [open, setOpen] = useState(false);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/Booking?userId=1`, {
      method: "GET",
      headers: {
        Accept: "*/*",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`booking details API resposnes ==>`, data);
        setBookings(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Grid2 container spacing={3}>
        {bookings.length < 0 ? (
          <Typography>No Previous Bookings Found.</Typography>
        ) : (
          bookings.map((booking) => (
            <Grid2
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={booking.bookingOrganisationId}
            >
              <BookingCard booking={booking} />
            </Grid2>
          ))
        )}
        <Grid2
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          key="button"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(true)}
          >
            New Booking
          </Button>
        </Grid2>
      </Grid2>
      <NewBookingModal
        key={open}
        open={open}
        handleClose={() => {
          setOpen(false);
        }}
      />
    </Container>
  );
};

export default BookingGrid;
