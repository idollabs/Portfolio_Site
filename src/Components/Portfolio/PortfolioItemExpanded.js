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
  Typography,
} from '@material-ui/core';
import { useSiteState } from '../../State/reducer';

import webImage from '../../images/new-england-mermaid-screenshot.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    position: 'absolute',
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
});

const PortfolioItemExpanded = () => {
  const classes = useStyles();
  const { togglePortfolioItem } = useSiteState();

  return (
    <>
      <div
        className='itemSelectedContainer'
        onClick={togglePortfolioItem}
      ></div>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component='img'
            alt='Contemplative Reptile'
            height='400'
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
          <Button size='small' color='secondary' onClick={togglePortfolioItem}>
            Close
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default PortfolioItemExpanded;
