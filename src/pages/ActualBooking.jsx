import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
 
// eslint-disable-next-line react/prop-types
const ActualBooking = ({ name, dateTime, companyName, price }) => {
  const [capacity, setCapacity] = React.useState("");
 
  return (
    <Card sx={{ maxWidth: 400, padding: 2, boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        <Typography variant="body1">
          <strong>Name:</strong> {name}
        </Typography>
        <Typography variant="body1">
          <strong>Date And Time:</strong> {dateTime}
        </Typography>
        <Typography variant="body1">
          <strong>Company Name:</strong> {companyName}
        </Typography>
 
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel>Select Capacity</InputLabel>
          <Select
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          >
            <MenuItem value="2 wheeler">2 Wheeler</MenuItem>
            <MenuItem value="4 wheeler">4 Wheeler</MenuItem>
          </Select>
        </FormControl>
 
        <Typography variant="body1" sx={{ mt: 2 }}>
          <strong>Price:</strong> {price}
        </Typography>
 
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Book
        </Button>
      </CardContent>
    </Card>
  );
};
 
export default ActualBooking;