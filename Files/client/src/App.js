import React, {Fragment} from 'react';
import './App.css';
import InputCard from './components/InputCard';
import CardList from './components/CardList';

function App() {
  return (
    <Fragment>
      <InputCard />
      <CardList />    
    </Fragment>
  );
}

export default App;
