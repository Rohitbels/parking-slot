import * as React from 'react';
import { 
  Box, Button, Modal, Typography, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, Paper 
} from '@mui/material';
import { WhatsApp } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};

const bookingInfo = {
  workspace: "We Work",
  dateTime: "13/02/25 5:43 PM",
  type: "Car",
  totalBookings: 10,
};

const bookings = [
  { location: "Office A", type: "Reserved", link: "https://example.com/booking/1" },
  { location: "Office B", type: "Open Spot", link: "https://example.com/booking/2" },
];

export default function AlreadyBooked( { open, setOpen, booking }) {


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const shareOnWhatsApp = (link) => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent("Check out this booking: " + link)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          {/* Booking Info Section */}
          <Typography variant="h6" fontWeight="bold">{bookingInfo.workspace}</Typography>
          <Typography variant="body2" color="text.secondary">Date & Time</Typography>
          <Typography variant="body1" mb={1}>{bookingInfo.dateTime}</Typography>

          <Typography variant="body2" color="text.secondary">Booking Type</Typography>
          <Typography variant="body1" mb={1}>{bookingInfo.type}</Typography>

          <Typography variant="body2" color="text.secondary">No. of Bookings</Typography>
          <Typography variant="body1" mb={2}>{bookingInfo.totalBookings}</Typography>

          {/* Table for Booking Locations */}
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><b>Booking Location</b></TableCell>
                  <TableCell><b>Booking Type</b></TableCell>
                  <TableCell><b>Share</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bookings.map((booking, index) => (
                  <TableRow key={index}>
                    <TableCell>{booking.location}</TableCell>
                    <TableCell>{booking.type}</TableCell>
                    <TableCell>
                      <Button 
                        size="small" 
                        color="success" 
                        onClick={() => shareOnWhatsApp(`http`)}
                        startIcon={<WhatsApp />}
                      >
                        Share
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Modal>
    </div>
  );
}
