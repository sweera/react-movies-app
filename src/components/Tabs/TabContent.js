import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import RecipeCard from './RecipeCard'

//import { getRecipeIdFromUri } from '../helpers/index'

const getStyles = makeStyles(theme => ({
  root: {
    margin: '5em 0'
  }
}))

const Recipes = props => {
  const classes = getStyles()

  return (
    <div className='container'>
      <Grid container className={classes.root} spacing={5}>
        {props.recipes.map(element => {
          const { uri, label, image, source } = element.recipe
          return (
            <Grid item xs={3}>
              <RecipeCard
                key={getRecipeIdFromUri(uri)}
                id={getRecipeIdFromUri(uri)}
                label={label}
                imageUrl={image}
                source={source}
                uri={uri}
              />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default Recipes
