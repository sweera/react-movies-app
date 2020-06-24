import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
//import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DisplayCard from '../layout/DisplayCard';
import Grid from '@material-ui/core/Grid'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    // width:'50em',
    // marginLeft: theme.spacing(5)
  },
  tabs: {
      textAlign:'center',
      marginLeft: theme.spacing(1),
      backgroundColor: '#e8e7e6',
      border:'0',
      color:'Black',
      width: '30em',
      padding:'1.5em',
      cursor:'Pointer',
      fontSize: '16px',
      fontFamily:'Helvetica'
  }
}));
// const Tabs = props => {
//   const [activeTabIndex, setActiveTabIndex] = useState(0);
//   const activeTab = props.children[activeTabIndex];
//   const classes = useStyles();
//   return (
//   <div>
//       <div>
//         {props.children.map((tab, i) => (
//           <button
//             className={classes.tabs}
//             onClick={() => {
//               setActiveTabIndex(i);
//             }}
//             key={i}
//           >
//             {tab.props.title}
//           </button>
//         ))}
//       </div>
//       <div>
//         <div
          
//           style={{
//             width: 100 / props.children.length + "%",
//             transform: `translateX(${activeTabIndex * 100}%)`
//           }}
//         />
//       </div>
//       <div>{activeTab.props.children}</div>
//     </div>
//   );
// };



// const TabScreen = props =>{
    
//         const classes = useStyles();
//         return (
//           <div>
//           {/* <Tabs> */}
//             <div title="Movies">
//             {props.movies.map(element => {
//                   const { original_title, overview, title, release, vote_average } = element
//                   return(
                      
//                         <DisplayCard 
//                             // key={getRecipeIdFromUri(uri)}
//                             // id={getRecipeIdFromUri(uri)}
//                             label={original_title}
//                             //imageUrl={image}
//                             //source={source}
//                             //uri={uri}
//                             overview = {overview}
//                             title = {title}

//                         />
                      
//                   )
//               })}
//               <DisplayCard />
//             </div>
//             <div title="Search Results">
//               India{" "}
//               <DisplayCard />
//             </div> 
//             <div title="TV Shows">
//               Europe{" "}
//               <DisplayCard />
//             </div>
//           {/* </Tabs> */}
//         </div>
    
//           )
//     }
const TabScreen = props => {
  const classes = useStyles()
  return(
    <div className='container'>
        
            {props.movies.map(element => {
                const { poster_path, title, release_date, overview, popularity } = element
                return(
                    
                      <DisplayCard 
                          //key={getRecipeIdFromUri(uri)}
                          //id={getRecipeIdFromUri(uri)}
                          imageurl={'https://image.tmdb.org/t/p/original' + poster_path }
                          label={title}
                          date={release_date}
                          overview={overview}
                          popularity={popularity}
                      />
                    
                )
            })}
        
    </div>  
   // <div>{console.log(props)}</div>
  )
}

    

export default TabScreen
  
