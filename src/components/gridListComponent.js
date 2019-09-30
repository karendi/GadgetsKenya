import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import audiobrown from '../assets/gridList/audio-brown-connection-1337753.jpg';
import camera from '../assets/gridList/black-black-and-white-camera-2929411.jpg';
import googleHome from '../assets/gridList/gadget-google-assistant-google-home-1072851.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  tile: {
      height:  '100vh'
  },
  gridList: {
    flexWrap: 'nowrap',
    height: '100vh',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

var gridTileStyle= {
  height: '100vh'
}

const tileData = [
    {
        img: audiobrown,
        title: 'Headsets',
        author: 'author',
    },
    {
        img: camera,
        title: 'Camera',
        author: 'author',
    },
    {
        img: googleHome,
        title: 'Bluetooth Speaker',
        author: 'author',
    }
];
 
const SingleLineGridList= ()=> {
  const classes = useStyles();
  {console.log(classes.root)}
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map(tile => (
          <GridListTile className={classes.gridList} style={gridTileStyle} skey={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default SingleLineGridList