import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import useStyles from './styles';

const App: React.FC = () => {
  
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            🍔
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <section>
        <section>
           <Link to='/'>HomePage</Link>
           <Link to='/about'>About</Link>
         </section>
      
         <Switch>
         <Route exact path='/'>
                <h1>HomePage</h1>
           </Route>
           <Route exact path='/about'>
                <h2>About</h2>
           </Route>
           <Redirect to='/' />
         </Switch>
       </section>
    </section>
  );
};

export default App;

 
