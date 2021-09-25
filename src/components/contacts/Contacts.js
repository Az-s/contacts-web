import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts, deleteContacts } from '../../store/actions/actionsAddContact';
import Modalinfo from '../Modal/Modalinfo';
// import { setModalOpen } from '../../store/actions/actionsContacts';
import './Contacts.css';


const Contacts = ({ mathch, history }) => {
    const dispatch = useDispatch();

    const allContact = useSelector(state => state.addContact.contact);
    // const showPurchaseModal = useSelector(state => state.items.showPurchaseModal);

    const [open, setOpen] = useState(false);

    const handleClickOpen = (id) => {
        setOpen({
            [id]: true
        });
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    // const purchaseHandler = () => {
    //     dispatch(setModalOpen(true));
    // };
    // const purchaseCancelHandler = () => {
    //     dispatch(setModalOpen(false));
    // };

    const delContact = async (id) => {
        try {
            await dispatch(deleteContacts(id));
        } finally {
            history.push('/addContact');
            handleClose();
            // purchaseCancelHandler();
        }
    };

    return (
        <Container maxWidth="lg">
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                {allContact.map((c) => (
                    <Grid key={c.id}>
                        <Card sx={{ display: 'flex',  margin: '1rem' }}
                            className='cards'
                            onClick={() => handleClickOpen(c.id)}
                        >
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
                        <Modalinfo
                            key={c.id}
                            show={open[c.id]}
                            close={handleClose}
                            id={c.id}
                            name={c.name}
                            phone={c.phone}
                            email={c.email}
                            photo={c.photo}
                            onDelete={() => delContact(c.id)}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Contacts;
