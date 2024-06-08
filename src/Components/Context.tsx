import React, { createContext, useContext, useReducer, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Lunch from './EntryTypes/Lunch';
import Tfood from './EntryTypes/Tfood';
import Junk from './EntryTypes/Junk';
import Snacks from './EntryTypes/Snacks';
import Dinner from './EntryTypes/Dinner';
import Breakfast from './EntryTypes/Breakfast';

interface Entry {
  id: string;
  name: string;
}

interface MyContextProps {
  children?: React.ReactNode;
  monthNames?: string[];
  monthAbbNames?: string[];
  openEntry: boolean;
  calendarOpen: boolean;
  currentDate: Date;
  selectedDate: Date | null;
  openUpdate: boolean;
  entries: Entry[];
  type: string;
  description: string;
  foodComponents: { name: string; component: React.FC<any>; }[];
  addEntry: (name: string) => void;
}

type AppAction =
  | { type: 'SET_OPEN_ENTRY'; payload: boolean }
  | { type: 'SET_CALENDAR_OPEN'; payload: boolean }
  | { type: 'SET_CURRENT_DATE'; payload: Date }
  | { type: 'SET_SELECTED_DATE'; payload: Date | null }
  | { type: 'SET_OPEN_UPDATE'; payload: boolean }
  | { type: 'SET_ENTRIES'; payload: Entry[] }
  | { type: 'SET_TYPE'; payload: string }
  | { type: 'SET_DESCRIPTION'; payload: string }
  | { type: 'ADD_ENTRY'; payload: Entry };
  

const appReducer = (state: MyContextProps, action: AppAction): MyContextProps => {
  switch (action.type) {
    case 'SET_OPEN_ENTRY':
      return { ...state, openEntry: action.payload };
    case 'SET_CALENDAR_OPEN':
      return { ...state, calendarOpen: action.payload };
    case 'SET_CURRENT_DATE':
      return { ...state, currentDate: action.payload };
    case 'SET_SELECTED_DATE':
      return { ...state, selectedDate: action.payload };
    case 'SET_OPEN_UPDATE':
      return { ...state, openUpdate: action.payload };
    case 'SET_ENTRIES':
      return { ...state, entries: action.payload };
    case 'SET_TYPE':
      return { ...state, type: action.payload };
    case 'SET_DESCRIPTION':
      return { ...state, description: action.payload };
    case 'ADD_ENTRY':
      return { ...state, entries: [...state.entries, action.payload] };
    default:
      return state;
  }
};

const initialAppState: MyContextProps = {
  openEntry: false,
  calendarOpen: false,
  currentDate: new Date(),
  selectedDate: new Date(),
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


const MyContext = createContext<MyContextProps | undefined>(undefined);

export const ContextProvider: React.FC<MyContextProps> = ({ monthNames, monthAbbNames, foodComponents, children }) => {
  const [state, dispatch] = useReducer(appReducer, initialAppState);

  monthNames = monthNames || [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  monthAbbNames = monthAbbNames || [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const dayAbb = [
    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri",
    "Sat"
  ];

  // const handleAddEntry = () => {
  //   const name: string = entryValueRef.current?.value || '';
  //   if (name !== '') {
  //     const newEntry: Entry = {
  //       id: uuidv4(),
  //       name: name
  //     };
  //     dispatch({ type: 'ADD_ENTRY', payload: newEntry });

  //     if (entryValueRef.current) {
  //       entryValueRef.current.value = '';
  //     }
  //   }
  // };

  // const addEntry = (name: string) => {
  //   const newEntry: Entry = {
  //     id: uuidv4(),
  //     name: name,
  //     time: time,
  //     date: date
  //   };
  //   dispatch({ type: 'ADD_ENTRY', payload: newEntry });
  // };

  return (
    <MyContext.Provider value={{ monthNames, monthAbbNames, ...state, foodComponents, children }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error('useMyContext must be used within a ContextProvider');
  }

  return context;
};

export const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const monthAbbNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export const dayAbb = [
  "Sun", "Mon", "Tue", "Wed", "Thu", "Fri",
  "Sat"
];