import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <section className='App'>
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
  );
};

export default App;
