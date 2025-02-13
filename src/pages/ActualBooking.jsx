import { useState } from "react";
import {
  CardContent,
  Typography,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  TextField,
} from "@mui/material";

// eslint-disable-next-line react/prop-types
const ActualBooking = ({ name, companyName, price }) => {
  const [capacity, setCapacity] = useState("");
  const [dateTime, setDateTime] = useState("");

  return (
    <div>
      <CardContent>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <TextField
            label="Select Date & Time"
            type="datetime-local"
            fullWidth
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            sx={{ mt: 2 }}
            InputLabelProps={{
              shrink: true, // Ensures label is visible when a value is set
            }}
          />
        </FormControl>
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
          <strong>Name:</strong> {name}
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          <strong>Company Name:</strong> {companyName}
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          <strong>Price:</strong> {price}
        </Typography>

        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Book
        </Button>
      </CardContent>
    </div>
  );
};

export default ActualBooking;
