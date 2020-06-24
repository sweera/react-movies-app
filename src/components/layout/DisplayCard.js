import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
//import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import {Link} from 'react-router-dom'

//import { Link } from 'react-router-dom'

const getStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    width: '80em'
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },

}))

const DisplayCard = props => {
  const classes = getStyles()
  //const label = 'How gorgeous?!'
  const {imageurl,label,date,overview,popularity} = props
  return (
   
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <img src={imageurl} width="200px"/>
          
            
          </Grid>
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column" spacing={3}>
              <Grid item xs>
              <b>{label}</b>
                <Typography gutterBottom variant="subtitle1">
                
                Release Date: {date}
              </Typography>
                {/* <Typography variant="body2" gutterBottom>
                  overview={overview}
              </Typography> */}
                <Typography  color="textSecondary">
                 Popularity: {popularity}
                  
              </Typography>
              <Typography>
              {overview}
              </Typography>
               
              </Grid>
              
            </Grid>
           
          </Grid>
        </Grid>
      </Paper>
    </div>


  )
}

export default DisplayCard