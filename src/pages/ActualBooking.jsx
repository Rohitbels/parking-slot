/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  CardContent,
  Button,
  FormControl,
  TextField,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

// eslint-disable-next-line react/prop-types
const ActualBooking = ({
  name,
  companyName,
  price = { car: 100, bike: 50 },
  handleNext,
  bookingDetails
}) => {
  const [dateTime, setDateTime] = useState("");
  const [fourWheelerCapacity, setFourWheelerCapacity] = useState("");
  const [twoWheelerCapacity, setTwoWheelerCapacity] = useState("");
  const [calculatePrice, setCalculatePrice] = useState(0);
  const { availfourWheelerCapacity, availtwoWheelerCapacity } = bookingDetails;

  useEffect(() => {
    if (price && price?.car && price?.bike) {
      const carPrice = price.car * fourWheelerCapacity;
      const bikePrice = price.bike * twoWheelerCapacity;

      setCalculatePrice(carPrice + bikePrice);
    }
  }, [price, fourWheelerCapacity, twoWheelerCapacity]);

  const onClickBook = () => {
    if (
      fourWheelerCapacity <= availfourWheelerCapacity &&
      twoWheelerCapacity <= availtwoWheelerCapacity
    ) {
      handleNext({ calculatePrice, fourWheelerCapacity, twoWheelerCapacity });
    } else {
      alert("available capacity exceeded!");
    }
  };

  return (
    <div>
      <CardContent>
        <TableContainer component={Paper} sx={{ mb: 2 }}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <strong>Name:</strong>
                </TableCell>
                <TableCell>{name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <strong>Company Name:</strong>
                </TableCell>
                <TableCell>{companyName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <strong>Price:</strong>
                </TableCell>
                <TableCell>{calculatePrice}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <strong>Available Capacity (Two Wheeler) :</strong>
                </TableCell>
                <TableCell>{availtwoWheelerCapacity}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <strong>Available Capacity (Four Wheeler) : </strong>
                </TableCell>
                <TableCell>{availfourWheelerCapacity}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
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
        <TextField
          sx={{ mt: 2 }}
          fullWidth
          label="2 Wheeler Capacity"
          type="number"
          value={twoWheelerCapacity}
          inputProps={{ min: 1, max: availtwoWheelerCapacity }}
          onChange={(e) => setTwoWheelerCapacity(e.target.value)}
        />
        <TextField
          sx={{ mt: 2 }}
          fullWidth
          label="4 Wheeler Capacity"
          type="number"
          inputProps={{ min: 1, max: availfourWheelerCapacity }}
          value={fourWheelerCapacity}
          onChange={(e) => setFourWheelerCapacity(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={onClickBook}
        >
          Book
        </Button>
      </CardContent>
    </div>
  );
};

export default ActualBooking;
