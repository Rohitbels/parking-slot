/* eslint-disable react/prop-types */
import React from "react";
import { Container, Grid, Card, CardContent, Typography, Button } from "@mui/material";

const bookings = [
  { location: "Downtown Parking", type: "Car", date: "2025-02-14", time: "10:30 AM" },
  { location: "Mall Basement", type: "Two-Wheeler", date: "2025-02-15", time: "2:00 PM" },
  { location: "Office Tower A", type: "Car", date: "2025-02-16", time: "8:00 AM" },
  { location: "City Center", type: "Two-Wheeler", date: "2025-02-17", time: "6:30 PM" },
  { location: "City Center", type: "Two-Wheeler", date: "2025-02-17", time: "6:30 PM" },
  { location: "City Center", type: "Two-Wheeler", date: "2025-02-17", time: "6:30 PM" },
  { location: "City Center", type: "Two-Wheeler", date: "2025-02-17", time: "6:30 PM" },
];

const BookingCard = ({ booking }) => (
  <Card sx={{ minWidth: 275, p: 2, boxShadow: 3 }}>
    <CardContent>
      <Typography variant="h6" component="div">
        {booking.location}
      </Typography>
      <Typography color="text.secondary">{booking.type}</Typography>
      <Typography variant="body2">
        {booking.date} at {booking.time}
      </Typography>
    </CardContent>
  </Card>
);

const BookingGrid = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        {bookings.map((booking, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <BookingCard booking={booking} />
          </Grid>
        ))}
        <Grid item xs={12} sm={6} md={4} lg={3} key="button" sx={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Button variant="contained">New Booking</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BookingGrid;
