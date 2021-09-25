import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container , Grid } from '@mui/material';

const Contacts = () => {
    return (
        <Container maxWidth="lg">
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Card sx={{ display: 'flex', width: '40%' , marginTop: '2rem'}}>
                    <CardMedia
                        component="img"
                        sx={{ width: 150 }}
                        image="https://images.pexels.com/photos/7992681/pexels-photo-7992681.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt="https://drukasia.com/images/stripes/monk3.jpg"
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , minWidth: '300px'}}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                Live From Space
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            </Grid>
        </Container>
    )
}

export default Contacts;
