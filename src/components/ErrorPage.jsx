import { Box, Typography } from '@mui/material'
import React from 'react'

function ErrorPage() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom textAlign='center'>
        No Hotel Data found
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src="/noData.jpg" alt="No trips found" className="no-data" />
      </div>
    </Box>
  );
}

export default ErrorPage
