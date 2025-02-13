import { Container, Grid, Card, CardContent, Typography, Button, Dialog, DialogTitle, DialogContent, Stepper, Step, StepLabel, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, DialogActions } from "@mui/material";
import { useState } from "react";
import ActualBooking from "./ActualBooking";
import SuccessPage from "./success";
import PaymentPage from "./payment";


const availableBookings = [
    { company: "Company A", slots: 5 },
    { company: "Company B", slots: 2 },
    { company: "Company C", slots: 8 },
  ];

  const price =  { car: 100, bike: 50 }

  const companyName = "ThinkProject";

  const name = "Ashu Kharbanda";


  const avail = [
    {
      "organisationId": "eb171cef-1c4e-4eeb-88ca-6fa25720ce5f",
      "organisationName": "ThinkProject",
      "availableSlotsForTwoWheelers": 5,
      "availableSlotsForFourheelers": 5
    },
    {
      "organisationId": "bda96145-142c-4b25-9b37-87c61b5c48e6",
      "organisationName": "Infosys",
      "availableSlotsForTwoWheelers": 7,
      "availableSlotsForFourheelers": 10
    }
  ];

export const NewBookingModal = ({ open, handleClose }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [bookingDetails, setBookingDetails ] = useState({});    
    const handleNext = (...rest) => {
      console.log('All ===>', rest);

      if(activeStep === 1 ) {
        const [{ calculatePrice, fourWheelerCapacity, twoWheelerCapacity }] = rest;
        setBookingDetails({ calculatePrice, fourWheelerCapacity, twoWheelerCapacity});
        console.log('Read ===>', calculatePrice, fourWheelerCapacity, twoWheelerCapacity);
  
      }

      setActiveStep((prev) => prev + 1)
    };
  
    return (
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg" >
        <DialogTitle>New Booking</DialogTitle>
        <DialogContent>
          <Stepper activeStep={activeStep} alternativeLabel>
            <Step>
              <StepLabel>Select Booking</StepLabel>
            </Step>
            <Step>
              <StepLabel> Add Details</StepLabel>
            </Step>
            <Step>
              <StepLabel> Payment Details</StepLabel>
            </Step>
            <Step>
              <StepLabel> Booked Slot Details</StepLabel>
            </Step>
          </Stepper>
          {activeStep === 0 && (
            <TableContainer component={Paper} sx={{ mt: 3 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Company Name</TableCell>
                    <TableCell>Available Slots</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {avail.map((booking, index) => (
                    <TableRow key={index}>
                      <TableCell>{booking.organisationName}</TableCell>
                      <TableCell>{booking.availableSlotsForFourheelers}</TableCell>
                      <TableCell>
                        <Button variant="contained" onClick={handleNext}>
                          Book
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          {activeStep === 1 && (
                <ActualBooking handleNext={handleNext} name={name} companyName={companyName} price={price} />
          )}
          {activeStep === 2 && (
            <PaymentPage handleNext={handleNext} />
          )}
          {activeStep === 3 && (
            <SuccessPage bookingDetails={bookingDetails} />
          )}
        </DialogContent>
        <DialogActions>
            <Button onClick={() => {
                setActiveStep(n => {

                    if(n > 0) {
                        return n-1;
                    }
                    return n;
                })
            }}
            
            
            >Back</Button>
            <Button onClick={handleClose}>CLose</Button>
        </DialogActions>
      </Dialog>
    );
  };