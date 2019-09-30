import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { styled } from '@material-ui/styles'
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Person from '@material-ui/icons/Person'
import Logo from '../assets/Logo.png'

const PersonProfile = styled(Person)({
  top: '30%',
  left: '70%',
  position: 'absolute',
  width: '50%',
  height: '50%'
})

const StyledAvatar = styled(Avatar)({
})

export default function CustomizedBadges(props) {
  return (
    <AppBar style={{ background: '#FFA07A' }}>
    <Box display="flex">
      <Box m={1}>
        <IconButton aria-label="logo">
          <StyledAvatar alt="Stock avatar" src={Logo}/>
        </IconButton>
      </Box>
      <Box>
        <PersonProfile onClick={props.clickHandler}/>
      </Box>
    </Box>
    <Link activeClass="active" smooth={true} offset={-70} duration= {500} to="home">Home</Link>
    <Link activeClass="active" smooth={true} offset={-70} duration= {500} to="makeStyles-root-67">Hot Items</Link>
    <Link activeClass="active" smooth={true} offset={-70} duration= {500} to="about-us">About us</Link>
    </AppBar>
  );
}
