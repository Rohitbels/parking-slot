/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Container, Grid, Card, CardContent, Typography, Button } from "@mui/material";
import { NewBookingModal } from "./BookingModal";
import { formatTimestamp } from "../utils";
import LabelValue from "../LabelValue";
import MenuAppBar from "../Header";

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
      "companyname": "Think Project",
      "fourslot": "10",
      "twoslot": "5",
      "twoslotprice": "100",
      "fourslotprice": "200",
    },
     {
      "companyname": "Wipro",
      "fourslot": "25",
      "twoslot": "50",
      "twoslotprice": "100",
      "fourslotprice": "200",
    },
    {
      "companyname": "Capgemini",
      "fourslot": "10",
      "twoslot": "25",
      "twoslotprice": "100",
      "fourslotprice": "200",
    },
    {
      "companyname": "Micrsoft",
      "fourslot": "15",
      "twoslot": "25",
      "twoslotprice": "100",
      "fourslotprice": "200",
    },
    {
      "companyname": "Google",
      "fourslot": "26",
      "twoslot": "22",
      "twoslotprice": "100",
      "fourslotprice": "200",
    },
    {
      "companyname": "Netflix",
      "fourslot": "80",
      "twoslot": "90",
      "twoslotprice": "100",
      "fourslotprice": "200",
    },
    {
      "companyname": "Meta",
      "fourslot": "30",
      "twoslot": "25",
      "twoslotprice": "100",
      "fourslotprice": "200",
    },
    {
      "companyname": "Amazon",
      "fourslot": "17",
      "twoslot": "25",
      "twoslotprice": "100",
      "fourslotprice": "200",
    },
  
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
      <LabelValue label={"Company Name"} value={booking.companyname} />
      <LabelValue label={"Available four-wheeler Slot"} value={booking.fourslot} />
      <LabelValue label={"Available Two-wheeler Slot"} value={booking.twoslot} />
      <LabelValue label={"Price for per slot of Two-wheeler"} value={booking.twoslotprice} />
      <LabelValue label={"Price for per slot of Four-wheeler"} value={booking.fourslotprice} />
      </div>
      <Typography variant="body2">
        
      </Typography>
    </CardContent>
  </Card>
);

const BookingGrid = (props) => {
    const [open, setOpen] = useState(false);
  return (
    <>
    <MenuAppBar companyName="Pool Parking APP" userName="Rohit"  />
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
             {/* <Button  variant="contained" color="primary"  onClick={() => setOpen(true)}>
        New Booking
      </Button> */}
        </Grid>
      </Grid>
      <NewBookingModal key={open} open={open} handleClose={() => {
        setOpen(false)
      }}  />
    </Container></>
    
  );
};

export default BookingGrid;
