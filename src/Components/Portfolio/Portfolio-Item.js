import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Card,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import webImage from '../../images/new-england-mermaid-screenshot.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 346,
  },
});

export default function PortfolioItem() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='200'
          image={webImage}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='h2'
            color='secondary'
          >
            Lizard
          </Typography>
          <Typography variant='body2' color='secondary' component='p'>
            <Box color='#00000090'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Box>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='secondary'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
