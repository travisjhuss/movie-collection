import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


function AddMovie() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <DialogTitle>Add Movie...</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="Movie Title"
                    type="text"
                />
                <br/>
                <TextField
                    autoFocus
                    margin="dense"
                    id="poster-url"
                    label="Movie Poster URL"
                    type="text"
                />
                <br/>
                <TextField
                    autoFocus
                    margin="dense"
                    id="description"
                    label="Description"
                    multiline
                    rows={4}
                    type="text"
                    fullWidth
                />
                <br/>

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
          </Button>
                <Button onClick={handleClose} color="primary">
                    Subscribe
          </Button>
            </DialogActions>
        </>
    );
} // end AddMovie

export default AddMovie;