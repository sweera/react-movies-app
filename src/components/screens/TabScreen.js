import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
//import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
//import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import DisplayCard from '../layout/DisplayCard';
import Select from '@material-ui/core/Select'
import Grid from '@material-ui/core/Grid'



const TabPanel = props => {
  //const classes = useStyles()
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: '500'
  },
  tabs: {
    //backgroundColor: theme.palette.background.grey
    //margin: theme.spacing(2),
    //marginLeft: theme.spacing(11)
    //position:'center',
    //width: '500em'
    backgroundColor: theme.palette.background.Blue,

  }
}));

export default function SimpleTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      props.onTabChange('movie')
    } else if (newValue === 1) {
      props.onTabChange('search')
    } else if (newValue === 2) {
      props.onTabChange('tv')
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant='fullWidth'>
          <Tab label="Movies" {...a11yProps(0)} className={classes.tabs} />
          <Tab label="Search Results" {...a11yProps(1)} className={classes.tabs} />
          <Tab label="TV Shows" {...a11yProps(2)} className={classes.tabs} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className={classes.tabs}>
        <div>
          <Select className={classes.select}
            //defaultValue='multi'
            label='Category'
            name='Category'
            native
            // id="demo-simple-select"
            // value={age}
            onChange={e => props.onGenreChange(e.target.value)}
            variant='outlined'
          >
            <option value={'popular'}>Popular</option>
            <option value={'now_playing'}>Now Playing</option>
            <option value={'top_rated'}>Top Rated</option>
            <option value={'upcoming'}>Upcoming</option>
          </Select>
          {props.dataList.map(element => {
            const { poster_path, title, release_date, overview, popularity } = element

            return (<DisplayCard
              imageurl={'https://image.tmdb.org/t/p/original' + poster_path}
              label={title}
              date={release_date}
              overview={overview}
              popularity={popularity}

            />)
          })}
        </div>

      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <h4>{props.searchMsg}</h4>
          {props.dataList.map(element => {
            const { poster_path, title, name, release_date, first_air_date, overview, popularity } = element

            return (<DisplayCard
              imageurl={'https://image.tmdb.org/t/p/original' + poster_path}
              label={(title) ? title : name}
              date={(release_date) ? release_date : first_air_date}
              overview={overview}
              popularity={popularity}

            />)
          })}
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div>
          <Select className={classes.select}
            //defaultValue='multi'
            label='Category'
            name='Category'
            native
            // id="demo-simple-select"
            // value={age}
            onChange={e => props.onGenreChange(e.target.value)}
            variant='outlined'
          >
            <option value={'popular'}>Popular</option>
            <option value={'airing_today'}>Airing Today</option>
            <option value={'top_rated'}>Top Rated</option>
            <option value={'on_the_air'}>On The Air</option>
          </Select>
          {props.dataList.map(element => {
            const { poster_path, name, first_air_date, overview, popularity } = element

            return (<DisplayCard
              imageurl={'https://image.tmdb.org/t/p/original' + poster_path}
              label={name}
              date={first_air_date}
              overview={overview}
              popularity={popularity}

            />)
          })}
        </div>
      </TabPanel>
    </div>
  );
}
