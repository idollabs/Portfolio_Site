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
import { projects } from '../../data/projects';
import { useSiteState } from '../../State/context';
import CloseIcon from '@material-ui/icons/Close';
import { PortfolioCarousel } from './PortfolioCarousel';
import find from 'lodash/find';

import webImage from '../../images/new-england-mermaid-screenshot.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    position: 'absolute',
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '82%',
    maxHeight: '60rem',
    overflow: 'auto',
  },

  heading: {
    textAlign: 'center',
  },
  quit: {
    position: 'absolute',
    top: '17%',
    left: '78%',
    transform: 'translate(-50%, -50%)',
    color: '#f4f4f4',
    fontSize: '3rem',
  },
});

const PortfolioItemExpanded = () => {
  const classes = useStyles();
  const { state, togglePortfolioItem } = useSiteState();
  // const {  } = find(projects, { id: id });
  console.log('state', state);
  return (
    <>
      <div
        className='itemSelectedContainer'
        onClick={togglePortfolioItem}
      ></div>
      {/* <CloseIcon className={classes.quit} /> */}

      {projects.map(({ id, title, link, technologies, longDesc }) => {
        return (
          <Card className={classes.root} key={id}>
            <CardActionArea>
              <PortfolioCarousel id={id} />

              <CardContent>
                <div className={classes.heading}>
                  <Typography
                    gutterBottom
                    variant='h4'
                    component='h2'
                    color='secondary'
                  >
                    {title}
                  </Typography>

                  <Button
                    variant='contained'
                    size='large'
                    color='secondary'
                    href={link}
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    Visit Site
                  </Button>
                </div>
                <br />
                <Typography variant='h6' color='secondary' component='p'>
                  <Box color='#00000099' textAlign='center'>
                    {technologies}
                  </Box>
                </Typography>
                <br />
                <Typography variant='body2' color='secondary' component='p'>
                  <Box color='#00000090'>{longDesc}</Box>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size='small'
                color='secondary'
                onClick={togglePortfolioItem}
              >
                Close
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};

export default PortfolioItemExpanded;
