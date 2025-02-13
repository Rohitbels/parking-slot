import React from "react";
import { Typography, Stack } from "@mui/material";

const LabelValue = ({ label, value }) => {
  return (
    <div direction="row" style={{
        display: 'inline-flex',
        flexDirection: 'column'
    }}>
      <Typography variant="body1" >
        {label}
      </Typography>
      <Typography variant="body1" fontWeight="bold">{value}</Typography>
    </div>
  );
};

export default LabelValue;
