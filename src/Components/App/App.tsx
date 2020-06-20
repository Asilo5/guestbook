import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import useStyles from './styles';
import Home from '../Home/Home';
import About from '../About/About';

const App: React.FC = () => {
  
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            🍔
          </IconButton>
          <Button component={Link} to='/' color="inherit">Home</Button>
          <Button component={Link} to='/about' color="inherit">About</Button>
        </Toolbar>
      </AppBar>

      <section>
         <Switch>
           <Route exact path='/' component={Home} /> 
           <Route exact path='/about' component={About}/>
           <Redirect to='/' />
         </Switch>
       </section>
    </section>
  );
};

export default App;

 
