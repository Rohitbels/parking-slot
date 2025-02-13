/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Container, Grid, Card, CardContent, Typography, Button } from "@mui/material";
import { NewBookingModal } from "./pages/BookingModal";
import { formatTimestamp } from "./utils";
import LabelValue from "./LabelValue";

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
      "userId": "8c392973-d0a2-4a7e-b646-90e3b8d678cd",
      "userName": "Nitesh",
      "location": "We Work",
      "userOrganisationId": "d4ecdb79-1ca3-4862-9b90-82037e1b959e",
      "bookingOrganisationId": "d22ce9a5-ada5-46eb-9122-fadfa757ec72",
      "dateOfReservation": "2025-02-13T17:43:04.6596296+05:30",
      "bookingType": 2,
      "bookingSlots": 10
    },
    {
      "userId": "58380d4c-806d-424f-beb6-afed4034c8d6",
      "userName": "Nitesh",
      "location": "Evershine",
      "userOrganisationId": "352b3a2b-74f5-40fc-9ce0-6b3ccb22842e",
      "bookingOrganisationId": "a4ae0675-cf6d-41ca-928e-a0694532a439",
      "dateOfReservation": "2025-02-13T17:43:04.6600613+05:30",
      "bookingType": 2,
      "bookingSlots": 20
    }
  ];


const BookingCard = ({ booking }) => (
  <Card sx={{ minWidth: 275, p: 2, boxShadow: 3 }}>
    <CardContent>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '4px'
      }}>
        <Typography variant="h6" component="div">
        {booking.location}
      </Typography>
      <LabelValue label={"Date & Time "} value={formatTimestamp(booking.dateOfReservation)} />
      <LabelValue label={"Booking type"} value={['Two wheeler', 'Car', ][booking.bookingType-1]} />
      <LabelValue label={"No. of Bookings"} value={booking.bookingSlots} />
      </div>
      <Typography variant="body2">
        
      </Typography>
    </CardContent>
  </Card>
);

const BookingGrid = () => {
    const [open, setOpen] = useState(false);
  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        {bk.map((booking, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={booking.bookingOrganisationId}>
            <BookingCard booking={booking} />
          </Grid>
        ))}
        <Grid item xs={12} sm={6} md={4} lg={3} key="button" sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
             <Button  variant="contained" color="primary"  onClick={() => setOpen(true)}>
        New Booking
      </Button>
        </Grid>
      </Grid>
      <NewBookingModal open={open} handleClose={() => {
        setOpen(false)
      }}  />
    </Container>
  );
};

export default BookingGrid;
