import React from 'react';
import { Box, Button, TextField, Typography, InputAdornment } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SendIcon from '@mui/icons-material/Send';

const NewsletterSubscription = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3rem',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        maxWidth: '1200px',
        margin: 'auto',
        // mt: '0.5rem'
      }}
    >
      <MailOutlineIcon sx={{ fontSize: 40, color: 'primary.main' }} />
      <Typography variant="h5" gutterBottom>
        Subscribe To Our Newsletter!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Subscribe to our newsletter and stay updated
      </Typography>
      <Box
        component="form"
        sx={{
          display: 'flex',
          width: '100%',
          mt: '1rem'
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Your Email"
          type="email"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailOutlineIcon />
              </InputAdornment>
            ),
            sx: {
              borderRadius: '4px 0 0 4px'
            }
          }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            borderRadius: '0 4px 4px 0',
            px: '1.5rem'
          }}
        >
          <SendIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default NewsletterSubscription;
