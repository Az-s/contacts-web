import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from '../../store/actions/actionsAddContact';
import Modalinfo from '../Modal/Modalinfo';
import { setModalOpen } from '../../store/actions/actionsContacts';
import './Contacts.css';


const Contacts = () => {
    const dispatch = useDispatch();

    const allContact = useSelector(state => state.addContatc.contact);
    const showPurchaseModal = useSelector(state => state.items.showPurchaseModal);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);


    const purchaseHandler = () => {
        dispatch(setModalOpen(true));
    };
    const purchaseCancelHandler = () => {
        dispatch(setModalOpen(false));
    };

    return (
        <Container maxWidth="lg">
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                {allContact.map(c => (
                    <>
                        <Modalinfo
                            show={showPurchaseModal}
                            close={purchaseCancelHandler}
                            key={c.id}
                            name={c.name}
                            phone={c.phone}
                            email={c.email}
                            photo={c.photo}
                        />
                        <Card sx={{ display: 'flex', width: '40%', margin: '1rem' }} className='cards' onClick={purchaseHandler}>
                            <CardMedia
                                component="img"
                                sx={{ width: 150 }}
                                image={c.photo}
                                alt="https://drukasia.com/images/stripes/monk3.jpg"
                            />
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: '300px' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5">
                                        {c.name}
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </>
                ))}
            </Grid>
        </Container>
    )
}

export default Contacts;
