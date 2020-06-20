import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Home from '../Home/Home';

import { useStoreState } from '../../hooks';
import useStyles from './styles';

const App: React.FC = () => {
  
  const classes = useStyles();
  const { entries } = useStoreState((state) => state.guestbook);

  console.log(entries)

  return (
    <section className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            🍔
          </IconButton>
          <Button color="inherit"><Link to='/'>Home</Link></Button>
          <Button color="inherit"><Link to='/about'>About</Link></Button>
        </Toolbar>
      </AppBar>

      <section>
         <Switch>
           <Route exact path='/' component={Home} /> 
           {/* <Route exact path='/about' component={About}/> */}
           <Redirect to='/' />
         </Switch>
       </section>
    </section>
  );
};

export default App;

 
