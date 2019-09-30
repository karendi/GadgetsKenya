import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Logo from '../assets/Logo.png'
import { minHeight } from '@material-ui/system';

const useStyles = makeStyles({
  card: {
    minWidth: '100%',
    minHeight: '50vh'
  },
});

const ImgMediaCard =()=> {
  const classes = useStyles();
  return (
    <Card className="about-us">
      <CardActionArea>
        <CardMedia style={ {minHeight: '100vh'}}
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={Logo}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <div>About Us<br/>
            We are your to go to tech market place!</div>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          We are your to go to tech market place!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default ImgMediaCard;
