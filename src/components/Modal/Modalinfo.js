import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Stack, CardMedia } from '@mui/material';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import EmailIcon from '@material-ui/icons/Email';
import './Modalinfo.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #c0c3c4',
    borderRadius: '5px',
    boxShadow: 12,
    pt: 2,
    px: 4,
    pb: 3,
};

const Modalinfo = ({ show, close, name, phone, email, photo, key }) => {

    return (
        <>
            <Modal
                hideBackdrop
                open={show}
                onClose={close}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 400 }}>
                    <Button onClick={close} sx={{ float: 'right' }}>&#10006;</Button>
                    <div className='contactCard'>
                        <CardMedia
                            component="img"
                            sx={{ width: 150 }}
                            image={photo}
                            alt={name}
                        />
                        <div className='contactInfo'>
                            <h2 id="child-modal-title">{name}</h2>
                            <p id="child-modal-description">
                                <AddIcCallIcon /> {phone}
                            </p>
                            <p id="child-modal-description">
                                <EmailIcon /> {email}
                            </p>
                        </div>
                    </div>
                    <Stack spacing={2} direction="row" mt={2} justifyContent='center'>
                        <Button
                            variant="contained"
                            type='submit'
                        >
                            Edit
                        </Button>
                        <Button
                            variant="contained"
                            type='button'
                        >
                            Delete
                        </Button>
                    </Stack>
                </Box>
            </Modal>
        </>
    )
}

export default Modalinfo;
