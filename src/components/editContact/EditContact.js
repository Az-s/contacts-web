import React , {useEffect, useState} from 'react';
import { Container, Grid, Card, Box, Typography, TextField, CardMedia, Stack, Button, Paper} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useDispatch } from "react-redux";
import { editContact } from '../../store/actions/actionsAddContact';
import axiosApi from '../../axiosApi';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const EditContact = ({history , match}) => {
    const dispatch = useDispatch();

    const [customer, setCustomer] = useState({
        name: '',
        phone: '',
        email: '',
        photo: '',
    });

    useEffect(() => {   
        const fetchContact = async () => {
            const response = await axiosApi.get('contacts/' + match.params.id + '.json');
            setCustomer(response.data);
        }
        fetchContact().catch(console.error);
    }, [match.params.id]);

    const onInputChange = e => {
        const { name, value } = e.target;

        setCustomer(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // const onSave = async e => {
    //     e.preventDefault();
    //     await axiosApi.put('contacts/' + match.params.id + '.json' , {...customer});
    //     history.push('/');
    // };

    const changeContact = async (e) => {
        e.preventDefault();
        try {
            await dispatch(editContact(match.params.id ,{ ...customer }));
            history.push('/');
        } catch (e) {
            console.log('error happened');
        }
    };

    return (
        <Container maxWidth="lg">
            <Grid
                container
                justifyContent="center"
                alignItems="center"
            >
                <Card sx={{ display: 'flex', width: '100%', marginTop: '2rem' , paddingLeft: '2rem'}}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography component="div" variant="h5" sx={{ display: 'flex', justifyContent: 'center' }}>
                            Add new contact:
                        </Typography>
                        <Stack
                            sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
                        >
                            <Box component="div" variant="h6" mt={2}>
                                <TextField
                                    id="outlined-basic"
                                    label="Name"
                                    type="text"
                                    name='name'
                                    value={customer.name}
                                    onChange={onInputChange}
                                    variant="outlined" />
                            </Box>
                            <Box component="div" variant="h6" mt={2}>
                                <TextField
                                    id="outlined-basic"
                                    label="Phone"
                                    type="text"
                                    name='phone'
                                    value={customer.phone}
                                    onChange={onInputChange}
                                    variant="outlined" />
                            </Box>
                            <Box component="div" variant="h6" mt={2}>
                                <TextField
                                    id="outlined-basic"
                                    label="Email"
                                    type="email"
                                    name='email'
                                    value={customer.email}
                                    onChange={onInputChange}
                                    variant="outlined" />
                            </Box>
                            <Box component="div" variant="h6" mt={2}>
                                <TextField
                                    id="outlined-basic"
                                    label="Photo"
                                    type="text"
                                    name='photo'
                                    value={customer.photo}
                                    onChange={onInputChange}
                                    variant="outlined" />
                            </Box>
                            <Item component="div" variant="h6" mt={2}>
                                Photo preview:
                                <CardMedia
                                    component="img"
                                    sx={{ width: 150 }}
                                    image={customer.photo ? customer.photo : 'https://mediscan.kz/images/user.png'}
                                    alt="no img"
                                />
                            </Item>
                        </Stack>
                        <Stack spacing={2} direction="row" m={2}>
                            <Button
                                variant="contained"
                                type='submit'
                                // onClick={onSave}
                                onClick={changeContact}
                            >
                                Save changes
                            </Button>
                        </Stack>
                    </Box>
                </Card>
            </Grid>
        </Container>
    )
}

export default EditContact;
