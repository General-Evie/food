import React, { useEffect, useState } from 'react'
import LowerEntryMenu from './LowerEntryMenu'
import Food from './Food'
import Drink from './Drink'
import Other from './Other'

interface EntryMenuProps {
  open: boolean;
  Close: () => void;
  update: boolean;
  displayDate: Date;
  onSaveEntry: (newEntry: JSX.Element) => void,
  initialDate: Date;
  localStorageKey: string;
  entryData: any;
}

const EntryMenu: React.FC<EntryMenuProps> = ({ open, Close, displayDate, onSaveEntry, initialDate, localStorageKey, update, entryData }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [food, setFood] = useState<boolean>(true)
  const [drink, setDrink] = useState<boolean>(false)
  const [other, setOther] = useState<boolean>(false)
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null)


  const display = () => {
    setFood(false)
    setDrink(false)
    setOther(false)
  }

  const handleFood = () => {
    display();
    setFood(true);
  };

  const handleDrink = () => {
    display();
    setDrink(true);
  };

  const handleOther = () => {
    display();
    setOther(true);
  };

  const clickedComponent = (type: string) => {
    setSelectedComponent(type)
  };

  const handleClick = () => {
    Close();
    setIsOpen(false)
  }


  useEffect(() => {
    if (update === true) {
      setIsOpen(true)
    }
  })

  if (!open) return null
  return (
    <div>
      <div className="entry-menu">
        <div className="entry-menu-header">
          <h1><i className="fas close-menu" onClick={Close}>&#xf104;</i>Manage</h1>
          <nav className="entry-menu-nav">
            <li className="entry-menu-li" id="food" onClick={handleFood}>Food</li>
            <li className="entry-menu-li" id="drink" onClick={handleDrink}>Drink</li>
            <li className="entry-menu-li" id="others" onClick={handleOther}>Other</li>
          </nav>
        </div>
        <div className="entry-menu-content">
          {food && <Food
            food={isOpen => setIsOpen(isOpen)}
            renderType={clickedComponent}
          />}
          {drink && <Drink
            drink={isOpen => setIsOpen(isOpen)}
            renderType={clickedComponent}
          />}
          {other && <Other
            other={isOpen => setIsOpen(isOpen)}
            renderType={clickedComponent}
          />}
          <LowerEntryMenu
            onSaveEntry={onSaveEntry}
            open={isOpen}
            Close={Close}
            update={update}
            displayDate={displayDate}
            selectedComponent={selectedComponent}
            initialDate={initialDate}
            localStorageKey={localStorageKey}
            entryData={entryData}
          />
        </div>
      </div>
      <div id="entry-menu-overlay" onClick={handleClick}></div>
    </div>
  )
}

export default EntryMenu