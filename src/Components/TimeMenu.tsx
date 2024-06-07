import React, { useState, useEffect } from 'react'
import ClockAnalog from './ClockAnalog'
import ClockDigital from './ClockDigital'

interface TimeProps {
  open: boolean;
  Close: () => void;
  setSelectedTime: (time: string) => void;
}

const TimeMenu: React.FC<TimeProps> = ({ open, Close, setSelectedTime }) => {
  const [analogDigital, setAnalogDigital] = useState<boolean>(false);

  const switchToAnalog = () => {
    setAnalogDigital(true);
  };

  useEffect(() => {
    console.log(analogDigital)
    const handleResize = () => {
      setAnalogDigital(window.innerWidth < 431);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!open) return null
  return (
    <div>
      <ClockDigital
        Close={Close}
        setSelectedTime={setSelectedTime}
        analogDigital={switchToAnalog}
      />
    {/* {analogDigital ? (
      <ClockAnalog
        Close={Close}
        setSelectedTime={setSelectedTime}
        analogDigital={switchToDigital}
      />
    ) : ( */}
  </div>
  )
}

export default TimeMenu