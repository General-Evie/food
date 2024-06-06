import React, { useState, useEffect } from 'react';
import { PenIcon } from './SVGs/PenSVG';
import Calendar from './Calendar';
import EntryMenu from './EntryMenu';
import UpdateMenu from './UpdateMenu';
import { monthNames } from './Context';
import Lunch from './EntryTypes/Lunch';
import Tfood from './EntryTypes/Tfood';
import Junk from './EntryTypes/Junk';
import Snacks from './EntryTypes/Snacks';
import Dinner from './EntryTypes/Dinner';
import Breakfast from './EntryTypes/Breakfast';
import Water from './EntryTypes/Water';
import Tea from './EntryTypes/Tea';
import Juice from './EntryTypes/Juice';
import Energy from './EntryTypes/Energy';
import Alcohol from './EntryTypes/Alcohol';
import Typedrink from './EntryTypes/Typedrink';
import Coffee from './EntryTypes/Coffee';
import Exercise from './EntryTypes/Exercise';
import Meds from './EntryTypes/Meds';
import Herbal from './EntryTypes/Herbal';
import Supplements from './EntryTypes/Supplements';

const Container: React.FC = () => {
    const [OpenEntry, setOpenEntry] = useState<boolean>(false);
    const [CalendarOpen, setCalendarOpen] = useState<boolean>(false);
    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [selectedCalendarDate, setSelectedCalendarDate] = useState<Date | null>(currentDate);
    const [openUpdate, setOpenUpdate] = useState<boolean>(false);
    const [Update, setUpdate] = useState<boolean>(false);
    const [entries, setEntries] = useState<JSX.Element[]>([]);
    const [clickedEntryData, setClickedEntryData] = useState<any>(null);

    const localStorageKey = 'myApp.entries';

    const displayDateObj = new Date(`${monthNames[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`);


    const handleSaveEntry = (newEntry: JSX.Element) => {
        setEntries([...entries, newEntry]);
    };

    const renderEntry = (entryData: any) => {
        const renderComponent = () => {
            switch (type) {
                case 'Lunch':
                    return <Lunch />;
                case 'Food':
                    return <Tfood />;
                case 'Junk':
                    return <Junk />;
                case 'Snacks':
                    return <Snacks />;
                case 'Dinner':
                    return <Dinner />;
                case 'Breakfast':
                    return <Breakfast />;
                case 'Water':
                    return <Water />;
                case 'Tea':
                    return <Tea />;
                case 'Juice':
                    return <Juice />;
                case 'Energy':
                    return <Energy />;
                case 'Alcohol':
                    return <Alcohol />;
                case 'Drink':
                    return <Typedrink />;
                case 'Coffee':
                    return <Coffee />;
                case 'Exercise':
                    return <Exercise />;
                case 'Meds':
                    return <Meds />;
                case 'Herbal':
                    return <Herbal />;
                case 'Supplements':
                    return <Supplements />;
                default:
                    return null;
            }
        }
        const { type, description, selectedTime } = entryData;
        const entryDate = new Date(entryData.selectedEntryDate);
        if (entryDate.toDateString() === currentDate.toDateString()) {
            return (
                <div onClick={() => handleUpdate(entryData)} className='entries' key={entryData.id}>
                    <div className='type-of-entry'>
                        <div className='selected-child'>{renderComponent()}</div>
                        <div className='entry-details'>
                            <div>{type}</div>
                            <div>{description}</div>
                        </div>
                        <div className='entry-time'>{selectedTime}</div>
                    </div>
                </div>
            )
        };
    };

    useEffect(() => {
        const storedEntries = localStorage.getItem(localStorageKey);
        if (storedEntries) {
            const parsedEntries = JSON.parse(storedEntries);
            parsedEntries.sort((a: any, b: any) => {
                const timeA = new Date(`01/01/2000 ${a.selectedTime}`).getTime();
                const timeB = new Date(`01/01/2000 ${b.selectedTime}`).getTime();
                return timeA - timeB;
            });
            setEntries(parsedEntries.map((entryData: any) => renderEntry(entryData)));
        }
    }, [currentDate]);


    const handleEnterClick = () => {
        if (selectedCalendarDate) {
            setCurrentDate(selectedCalendarDate);
            setCalendarOpen(false);
        }
    };

    const handleSelectDate = (date: Date) => {
        setSelectedCalendarDate(date);
    };

    const handleEntry = () => {
        setOpenEntry(true);
        setUpdate(false)
    };

    const handleCalendar = () => {
        setCalendarOpen(true);
    };

    const handleUpdate = (entryData: any) => {
        console.log(entryData.id)
        setClickedEntryData(entryData)
        setOpenUpdate(true);
        setUpdate(true)
    };

    const deleteEntry = (entryId: string) => {
        const existingEntries = JSON.parse(localStorage.getItem(localStorageKey) || '[]');
        const updatedEntries = existingEntries.filter((entry: any) => entry.id !== entryId);
        localStorage.setItem(localStorageKey, JSON.stringify(updatedEntries));
        window.location.reload();
    };

    const handlePrevDay = () => {
        const prevDay = new Date(currentDate);
        prevDay.setDate(currentDate.getDate() - 1);
        setCurrentDate(prevDay);
    };

    const handleNextDay = () => {
        const nextDay = new Date(currentDate);
        nextDay.setDate(currentDate.getDate() + 1);
        setCurrentDate(nextDay);
    };

    return (
        <div className='body'>
            <Calendar
                openCalendar={CalendarOpen}
                CloseCalendar={() => setCalendarOpen(false)}
                onSelectDate={handleSelectDate}
                selectedDay={selectedCalendarDate ? selectedCalendarDate.getDate() : null}
                initialDate={currentDate}
                handleEnterClick={handleEnterClick}
            />
            <div className="calendar-button">
                <div className="month">
                    <i className="fas prevDay" onClick={handlePrevDay}>&#xf104;</i>
                    <div className="date">
                        <h1 onClick={handleCalendar}>{`${monthNames[currentDate.getMonth()]} ${currentDate.getDate()}`}</h1>
                    </div>
                    <i className="fas nextDay" onClick={handleNextDay}>&#xf105;</i>
                </div>
                <div className="content">{entries}</div>
                <div className="entries-overlay">
                    <button className="entry-button" onClick={handleEntry}><PenIcon /></button>
                </div>
            </div>
            <EntryMenu
                onSaveEntry={handleSaveEntry}
                open={OpenEntry}
                update={Update}
                Close={() => setOpenEntry(false)}
                displayDate={displayDateObj}
                initialDate={currentDate}
                localStorageKey={localStorageKey}
                entryData={clickedEntryData}
            />

            <UpdateMenu
                onSaveEntry={handleSaveEntry}
                open={openUpdate}
                Close={() => setOpenUpdate(false)}
                update={Update}
                displayDate={displayDateObj}
                initialDate={currentDate}
                localStorageKey={localStorageKey}
                entryData={clickedEntryData}
                deleteEntry={deleteEntry}
            />
        </div>
    );
};

export default Container;