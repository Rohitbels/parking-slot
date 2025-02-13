import { Container, Grid, Card, CardContent, Typography, Button, Dialog, DialogTitle, DialogContent, Stepper, Step, StepLabel, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { useState } from "react";
import ActualBooking from "./ActualBooking";


const availableBookings = [
    { company: "Company A", slots: 5 },
    { company: "Company B", slots: 2 },
    { company: "Company C", slots: 8 },
  ];

export const NewBookingModal = ({ open, handleClose }) => {
    const [activeStep, setActiveStep] = useState(0);
  
    const handleNext = () => setActiveStep((prev) => prev + 1);
  
    return (
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>New Booking</DialogTitle>
        <DialogContent>
          <Stepper activeStep={activeStep} alternativeLabel>
            <Step>
              <StepLabel>Select Booking</StepLabel>
            </Step>
            <Step>
              <StepLabel> Add Details</StepLabel>
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
                  {availableBookings.map((booking, index) => (
                    <TableRow key={index}>
                      <TableCell>{booking.company}</TableCell>
                      <TableCell>{booking.slots}</TableCell>
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
                <ActualBooking />
          )}
        </DialogContent>
      </Dialog>
    );
  };