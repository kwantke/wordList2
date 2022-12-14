import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import CreateDay from './component/CreateDay';
import CreateWord from './component/CreateWord';
import Day from './component/Day';
import DayList from './component/DayList';
import EmptyPage from './component/EmptyPage';
import Header from './component/Header';

function App() {
  return (
    <BrowserRouter>
       <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/">
            <DayList/>
          </Route>
          <Route path="/day/:day">
            <Day/>
          </Route>
          <Route path="/create_word">
            <CreateWord/>
          </Route>
          <Route path="/create_day">
            <CreateDay/>
          </Route>
          <Route>
            <EmptyPage/>
          </Route>
        </Switch>
        
      </div> 
    </BrowserRouter>
  );

}

export default App;
