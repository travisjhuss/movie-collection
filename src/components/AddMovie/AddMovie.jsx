import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';

function AddMovie() {

    const [personName, setPersonName] = useState([]);

    const handleChange = (event) => {
        setPersonName(event.target.value);
      };

    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
      ];

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
                        variant="outlined"
                    />
                    <br />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="poster-url"
                        label="Movie Poster URL"
                        type="text"
                        variant="outlined"
                    />
                    <br />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Description"
                        multiline
                        rows={4}
                        type="text"
                        fullWidth
                        variant="outlined"
                    />
                    <br />

                    <InputLabel id="genre-checkbox-label">Genres</InputLabel>
                    <Select
                        labelId="genre-checkbox-label"
                        id="genre-checkbox"
                        variant="outlined"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        // input={<Input />}
                        renderValue={(selected) => selected.join(', ')}
                    >
                        {names.map((name) => (
                            <MenuItem key={name} value={name}>
                                <Checkbox checked={personName.indexOf(name) > -1} />
                                <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
            </DialogContent>
            {/* <DialogActions>
                <Button onClick={handleCancel} color="primary">
                    Cancel
          </Button>
                <Button onClick={handleAddMovie} color="primary">
                    Add
          </Button>
            </DialogActions> */}
        </>
    );
} // end AddMovie

export default AddMovie;