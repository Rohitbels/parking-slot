import React, { useState, useEffect, useRef } from 'react';
import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react';
import {
  Container,
  Typography,
  Button,
  Box,
  TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router';

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const Qr = () => {
  const { qrid } = useParams();

  return (
    <Container maxWidth="sm">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <QRCodeSVG value={qrid} /> 

        <Box sx={{ display: 'flex', gap: 2 }}>
        </Box>
      </Box>
    </Container>
  );
};

export default Qr;