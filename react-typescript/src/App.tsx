import React, { useState } from 'react';
import './App.css';
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface Istate {
  people: {
    name: string,
    url: string,
    age: number,
    notes?: string
  }[];
}

function App() {
  const [people, setPeople] = useState<Istate['people']>([
    {
      name: 'John',
      url: 'https://www.google.com',
      age: 20,
      notes: 'Lorem ipsum dolor'
    },
    {
      name: 'Jane',
      url: 'https://www.google.com',
      age: 20
    }
  ]);

  return (
    <div className="App">
      <h1 className="App-title">Welcome to React with Typescript</h1>
      <List people={people} />
      <hr></hr>
      <AddToList setPeople={setPeople} people={people} />
    </div>
  );
}

export default App;
