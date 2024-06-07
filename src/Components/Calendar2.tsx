import React, { useState } from 'react';
import { monthNames, monthAbbNames, dayAbb } from './Context';

interface Calendar2Props {
    openCalendar2: boolean;
    CloseCalendar2: () => void;
    onSelectDate: (date: Date) => void;
    selectedDay: number | null;
    initialDate: Date;
    handleEnterClick: () => void;
}


const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfWeek = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
};

const getLastMonthDays = (year: number, month: number) => {
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevMonthLastDay = new Date(year, prevMonth + 1, 0);
    const daysInPrevMonth = prevMonthLastDay.getDate();
    const firstDayOfWeek = getFirstDayOfWeek(year, month);
    const lastMonthDaysCount = (firstDayOfWeek + 7) % 7;

    return Array.from({ length: lastMonthDaysCount }, (_, index) => daysInPrevMonth - lastMonthDaysCount + index + 1);
};

const Calendar2: React.FC<Calendar2Props> = ({
    openCalendar2,
    CloseCalendar2,
    onSelectDate,
    handleEnterClick,
    initialDate
}) => {

    const [year, setYear] = useState(initialDate.getFullYear());
    const [month, setMonth] = useState(initialDate.getMonth());
    const [selectedDate, setSelectedDate] = useState<Date | null>(initialDate);


    if (!openCalendar2) return null;

    const handleDayClick = (day: number) => {
        const selected = new Date(year, month, day);
        setSelectedDate(selected);
        onSelectDate(selected);
    };

    const handlePrevMonthClick = () => {
        let newYear = year;
        let newMonth = month;
    
        if (month === 0) {
            newYear = year - 1;
            newMonth = 11;
        } else {
            newMonth = month - 1;
        }
    
        setYear(newYear);
        setMonth(newMonth);
    };
    
    const handleNextMonthClick = () => {
        let newYear = year;
        let newMonth = month;
    
        if (month === 11) {
            newYear = year + 1;
            newMonth = 0;
        } else {
            newMonth = month + 1;
        }
    
        setYear(newYear);
        setMonth(newMonth);
    };

const lastMonthDays = getLastMonthDays(year, month);
const daysInMonth = getDaysInMonth(year, month);
const firstDayOfWeek = getFirstDayOfWeek(year, month);
const selectedDayOfMonth = selectedDate ? selectedDate.getDate() : null;

return (
    <div>
        <div id="calendar2">
            <div className="calendar-header">
                <div>
                    <span>{year}</span>
                    <h1>
                        {dayAbb[selectedDate ? selectedDate.getDay() : firstDayOfWeek]}
                        {', '}
                        {monthAbbNames[month]}
                        {' '}
                        {selectedDate ? selectedDate.getDate() : ''}
                    </h1>
                </div>
            </div>
            <div className="month2">
                <i className="fas prevMonth" onClick={handlePrevMonthClick}>&#xf104;</i>
                <div className="date2">
                    <h2>{monthNames[month]}</h2>
                    <span>{year}</span>
                </div>
                <i className="fas nextMonth" onClick={handleNextMonthClick}>&#xf105;</i>
            </div>
            <div className="weekdays">
                <div>S</div>
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
            </div>
            <div className="days">
                {lastMonthDays.map((day, index) => (
                    <div key={index} className={`prev-month-day`}>
                        {day}
                    </div>
                ))}
                {Array.from({ length: daysInMonth }, (_, index) => index + 1).map((day) => (

                    <div key={day} className={`current-month-day ${selectedDate && selectedDayOfMonth === day ? "selected" : ""}`} onClick={() => handleDayClick(day)}>
                        {day}
                    </div>
                ))}
                {Array.from({ length: 7 - (firstDayOfWeek + daysInMonth) % 7 }, (_, index) => index + 1).map((day) => (
                    <div key={day} className={`next-month-day`}>
                        {day}
                    </div>
                ))}
            </div>
            <div className="buttons">
                <div className="cancel" onClick={CloseCalendar2}>Cancel</div>
                <div className="ok" onClick={handleEnterClick}>Ok</div>
            </div>
        </div>
        <div id="calendar-overlay" onClick={CloseCalendar2}></div>
    </div>
);
};

export default Calendar2;