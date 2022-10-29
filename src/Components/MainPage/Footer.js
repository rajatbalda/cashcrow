import React from 'react';
import styled from 'styled-components';
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Wrapper = styled.div`
width: 100%;
position: fixed;
bottom: 0;
text-allign:center;
height:50px;
background-color:#e6e1f5;
colorLblack;
padding:12px;
`

function Footer() {
  return (
    <Paper sx={{marginTop: 'calc(10% + 60px)',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    color: 'white',
    background: '#00f',
    height: '48px',
    paddingTop: '12px',
    }} component="footer" square variant="outlined">
       <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption">
            Copyright ©2022 Cashcrow.
          </Typography>
        </Box>
      </Container>
    </Paper>
  )
}

export default Footer