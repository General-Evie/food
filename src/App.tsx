import React from 'react';
import './App.css';
import Container from './Components/Container';
import Lunch from './Components/EntryTypes/Lunch';
import Tfood from './Components/EntryTypes/Tfood';
import Junk from './Components/EntryTypes/Junk';
import Snacks from './Components/EntryTypes/Snacks';
import Dinner from './Components/EntryTypes/Dinner';
import Breakfast from './Components/EntryTypes/Breakfast';
import { ContextProvider } from './Components/Context';

function App() {
  const contextProps = {
    openEntry: false,
    calendarOpen: false,
    currentDate: new Date(),
    selectedDate: null,
    openUpdate: false,
    entries: [],
    type: '',
    description: '',
    foodComponents: [
      { name: 'Lunch', component: Lunch },
      { name: 'Tfood', component: Tfood },
      { name: 'Junk', component: Junk },
      { name: 'Snacks', component: Snacks },
      { name: 'Dinner', component: Dinner },
      { name: 'Breakfast', component: Breakfast }
  ],
  addEntry: (name: string) => {}
  };

  return (
      <div className="App">
        <ContextProvider {...contextProps}>
          <Container />
        </ContextProvider>
      </div>
  );
}

export default App;
