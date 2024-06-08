import React, { useState, useEffect } from 'react'

interface DigitalProps {
    Close: () => void;
    setSelectedTime: (time: string) => void;
    analogDigital: () => void;
}

const ClockDigital: React.FC<DigitalProps> = ({ Close, setSelectedTime, analogDigital }) => {
    const currentHour = (new Date().getHours() % 12 || 12);
    const currentMinute = (new Date().getMinutes() % 60 + 1);
    const [selectedHour, setSelectedHour] = useState<number>(currentHour - 1);
    const [selectedMinute, setSelectedMinute] = useState<number>(currentMinute - 1);
    const [isPM, setIsPM] = useState<boolean>(new Date().getHours() >= 12);
    const [errorMessage, setErrorMessage] = useState<string>('');


    const formatTime = (time: number) => {
        return time < 10 ? `0${time}` : `${time}`;
    };

    const handleOkClick = () => {

        if (isNaN(selectedHour) || isNaN(selectedMinute) || selectedHour < 1 || selectedHour > 12 || selectedMinute < 0 || selectedMinute > 59) {
            setErrorMessage('Invalid time.');
            return;
        }

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
        const isMorning = currentHour > 12 || currentHour === 12;;
        setIsPM(!isMorning);
    }, [currentHour, currentMinute]);

    const handleAmClick = () => {
        setIsPM(false);
    };

    const handlePmClick = () => {
        setIsPM(true);
    };

    const handleMinuteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedMinute(parseInt(event.target.value));
    }

    const handleHourChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedHour(parseInt(event.target.value));
    }

    const handleSwitch = () => {
        analogDigital();
    }

    return (
        <div>
            <div className="clock">
                <div className="clock-header">
                    <h1>Set Time</h1>
                </div>

                <div className="clock-content">

                    <div className="digital">
                        <div className='digital-inputs'>
                            <input
                                type="number"
                                min={1}
                                max={12}
                                placeholder={(selectedHour + 1).toString()}
                                onChange={handleHourChange}
                            />
                            <div>:</div>
                            <input
                                type="number"
                                min={0}
                                max={59}
                                placeholder={formatTime(selectedMinute).toString()}
                                onChange={handleMinuteChange}
                            />
                        </div>
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
                    </div>

                    {/* <div className='analog-button' onClick={handleSwitch}><ClockIcon /></div> */}
                    <div className="buttons">
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                        <div className="clock-cancel" onClick={Close}>Cancel</div>
                        <div className="clock-ok" onClick={handleOkClick}>Ok</div>
                    </div>
                </div>
            </div>
            <div id="clock-overlay" onClick={Close}></div>
        </div>
    )
}

export default ClockDigital