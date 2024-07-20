import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const backgroundImage = 'url(intercity.png)';

const CouponCard = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  position: 'relative', 
  backgroundImage: `${backgroundImage}`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  textAlign: 'center',
  margin: theme.spacing(2, 0),
  color: '#fff', 
  '&:hover': {
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
  },
}));

const Overlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6))',
  borderRadius: theme.spacing(1),
  zIndex: 1,
}));

const Content = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
}));

const CouponHeader = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '8px',
});

const CouponSubheader = styled(Typography)({
  fontSize: '1rem',
  marginBottom: '16px',
});

const CouponButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(1),
  backgroundColor: '#4c3f90',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#4c3f90',
  },
}));

const Cabcoupon = () => {
  return (
<>
<CouponCard>
      <Overlay />
      <Content>
        <CouponHeader>Special Discount</CouponHeader>
        <CouponSubheader>Bus & Car Bookings</CouponSubheader>
        <Typography variant="body2" sx={{ marginBottom: '16px' }}>
          Use code <strong>TRAVEL10</strong> to get 10% off on your next ride!
        </Typography>
        <CouponButton variant="contained">Book Now</CouponButton>
      </Content>
    </CouponCard>
    <CouponCard>
      <Overlay />
      <Content>
        <CouponHeader>Special Discount</CouponHeader>
        <CouponSubheader>Bus & Car Bookings</CouponSubheader>
        <Typography variant="body2" sx={{ marginBottom: '16px' }}>
          Use code <strong>TRAVEL10</strong> to get 10% off on your next ride!
        </Typography>
        <CouponButton variant="contained">Book Now</CouponButton>
      </Content>
    </CouponCard>
    <CouponCard>
      <Overlay />
      <Content>
        <CouponHeader>Special Discount</CouponHeader>
        <CouponSubheader>Bus & Car Bookings</CouponSubheader>
        <Typography variant="body2" sx={{ marginBottom: '16px' }}>
          Use code <strong>TRAVEL10</strong> to get 10% off on your next ride!
        </Typography>
        <CouponButton variant="contained">Book Now</CouponButton>
      </Content>
    </CouponCard>
</>
  );
};

export default Cabcoupon;
