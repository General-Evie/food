import React, { useState, useEffect } from 'react'
import { useMyContext } from './Context'
import { KeyboardIcon } from './SVGs/KeyboardSVG';

interface AnalogProps {
    Close: () => void;
    setSelectedTime: (time: string) => void;
    analogDigital: () => void;
}

const ClockAnalog: React.FC<AnalogProps> = ({ Close, setSelectedTime, analogDigital }) => {
    const currentHour = (new Date().getHours() % 12) + 1;
    const currentMinute = (new Date().getMinutes() % 60) + 1;


    const hours = Array.from({ length: 12 }, (_, i) => i + 1);
    const minutes = Array.from({ length: 60 }, (_, i) => i);


    const [selectedHour, setSelectedHour] = useState<number>(currentHour - 1);
    const [selectedMinute, setSelectedMinute] = useState<number | null>(currentMinute - 1);
    const [showHours, setShowHours] = useState<boolean>(true);
    const [showMinutes, setShowMinutes] = useState<boolean>(false);
    const [hourArmRotation, setHourArmRotation] = useState<number>(0);
    const [minuteArmRotation, setMinuteArmRotation] = useState<number>(0);
    const [isPM, setIsPM] = useState<boolean>(false);

    const formatTime = (time: number) => {
        return time < 10 ? `0${time}` : `${time}`;
    };

    const handleHourClick = (hour: number) => {
        setSelectedHour(hour);
        const hourRotation = ((hour === 12 ? 0 : hour) / 12) * 360;
        setHourArmRotation(hourRotation);
    };

    const handleMinuteClick = (minute: number) => {
        setSelectedMinute(minute);
        const minuteRotation = (minute / 60) * 360;
        setMinuteArmRotation(minuteRotation);
    };

    const handleHours = () => {
        setShowHours(true);
        setShowMinutes(false);
    }

    const handleMinutes = () => {
        setShowMinutes(true);
        setShowHours(false)
    }

    const handleOkClick = () => {
        const formattedHour = selectedHour !== null ? (selectedHour === 0 ? 12 : selectedHour) : '';
        const formattedMinute = selectedMinute !== null ? formatTime(selectedMinute) : '';
        const amPm = isPM ? 'PM' : 'AM';

        const currentTimeString = `${formattedHour}:${formattedMinute} ${amPm}`;
        console.log(currentTimeString)
        setSelectedTime(currentTimeString);
        Close();
    };

    useEffect(() => {
        setSelectedHour(currentHour - 1);
        setSelectedMinute(currentMinute - 1);
        const initialHourRotation = ((selectedHour ?? 0) / 12) * 360;
        const initialMinuteRotation = ((selectedMinute ?? 0) / 60) * 360;
        const isMorning = currentHour < 12 || currentHour === 12;;

        setHourArmRotation(initialHourRotation);
        setMinuteArmRotation(initialMinuteRotation);
        setIsPM(!isMorning);
    }, [currentHour, currentMinute]);

    const handleAmClick = () => {
        setIsPM(false);
    };

    const handlePmClick = () => {
        setIsPM(true);
    };

    const handleSwitch = () => {
        analogDigital();
    }

    return (
        <div>
            <div className="clock">
                <div className="clock-header">
                    <h1>
                        <div className="Hour" onClick={handleHours}>
                            {selectedHour !== null ? (selectedHour === 0 ? 12 : selectedHour) : ''}
                        </div>
                        <div>:</div>
                        <div className="Minute" onClick={handleMinutes}>
                            {selectedMinute !== null ? formatTime(selectedMinute) : ''}
                        </div>
                    </h1>
                    <div>
                        <p
                            className="am-pm"
                            id="am"
                            style={{ opacity: isPM ? 0.5 : 1 }}
                            onClick={handleAmClick}
                        >
                            AM
                        </p>
                        <p
                            className="am-pm"
                            id="pm"
                            style={{ opacity: isPM ? 1 : 0.5 }}
                            onClick={handlePmClick}
                        >
                            PM
                        </p>
                    </div>
                    {/* <h1>Set Time</h1> */}
                </div>
                <div className="clock-content">
                    <div className="analog">
                        <div className="dial-selector">
                            <div className="fulcrum"></div>
                            {showHours && (<div className="hr-arm"
                                style={{ transform: `rotate(${hourArmRotation}deg)` }}></div>)}
                            {showMinutes && (<div className="min-arm"
                                style={{ transform: `rotate(${minuteArmRotation}deg)` }}></div>)}
                        </div>
                        {showHours && (<div className="hours">
                            {hours.map((hour) => (
                                <div
                                    key={hour}
                                    className='hour-container'
                                    style={{
                                        transform: `rotate(${(hour / 12) * 360}deg)`,
                                    }}
                                    onClick={() => handleHourClick(hour)}
                                >
                                    <b className={`hour-text ${hour === selectedHour || (hour === 12 && selectedHour === 0) ? 'selected' : ''}`}
                                        style={{
                                            transform: `rotate(-${(hour / 12) * 360}deg)`,
                                        }}
                                    >
                                        {hour === 0 ? 12 : hour}
                                    </b>
                                </div>
                            ))}
                        </div>)}
                        {showMinutes && (
                            <div className="minutes">
                                {minutes.map((minute) => (
                                    <div
                                        key={minute}
                                        className={`minute-container ${minute % 5 === 0 ? '' : 'selected2'
                                            }`}
                                        style={{
                                            transform: `rotate(${(minute / 60) * 360}deg)`,
                                        }}
                                        onClick={() => handleMinuteClick(minute)}
                                    >
                                        <b className={`minute-text ${minute === selectedMinute ? 'selected' : ''}`}
                                            style={{
                                                transform: `rotate(-${(minute / 60) * 360}deg)`,
                                            }}
                                        >
                                            {minute % 5 === 0 ? minute : '•'}
                                        </b>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className='digital-button' onClick={handleSwitch}><KeyboardIcon /></div>
                    <div className="buttons">
                        <div className="clock-cancel" onClick={Close}>Cancel</div>
                        <div className="clock-ok" onClick={handleOkClick}>Ok</div>
                    </div>
                </div>
            </div>
            <div id="clock-overlay" onClick={Close}></div>
        </div>
    )
}

export default ClockAnalog