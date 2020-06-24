import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';


const getStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        backgroundColor: 'Blue',
        color: 'White',
    },
    form: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '50em',
    },
    select: {
        width: '14em',
        marginTop: theme.spacing(1),
    }
}))

const Form = props => {
    const classes = getStyles()
    return (
        <form onSubmit={props.onSubmit} className={classes.form}>
            <TextField
                label='Search Movies'
                name='searchQuery'
                margin='normal'
                className={classes.textField}
                onChange={e => props.onInputChange(e.target.value)}
                variant='outlined'
            />
            <Select className={classes.select}
                //defaultValue='multi'
                label='Search Type'
                name='Search Type'
                // id="demo-simple-select"
                // value={age}
                onChange={e => props.onInputChange(e.target.value)}
                variant='outlined'
            >
                <MenuItem>Multi</MenuItem>
                <MenuItem>Movies</MenuItem>
                <MenuItem>Shows</MenuItem>
            </Select>

            <Button className={classes.button} type="submit" variant="outlined">
                Search
            </Button>
        </form>
    )
}

export default Form