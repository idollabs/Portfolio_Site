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
import { useSiteState } from '../../State/context';
import { projects } from '../../data/projects';

const useStyles = makeStyles({
  root: {
    maxWidth: 346,
  },
});

export default function PortfolioItems() {
  const classes = useStyles();
  const { togglePortfolioItem } = useSiteState();

  return (
    <div className='portfolioContainer'>
      {projects.map(({ id, title, mainImage, shortDesc }) => {
        return (
          <Card className={classes.root} key={id}>
            <CardActionArea>
              <CardMedia
                component='img'
                alt={title}
                height='200'
                image={mainImage}
                title={title}
                onClick={() => togglePortfolioItem(id)}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='h2'
                  color='secondary'
                  onClick={() => togglePortfolioItem(id)}
                >
                  {title}
                </Typography>
                <Typography variant='body2' color='secondary' component='p'>
                  <Box color='#00000090'>{shortDesc}</Box>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size='small'
                color='secondary'
                onClick={() => togglePortfolioItem(id)}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}
