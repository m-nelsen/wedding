import { FC, useState, useEffect } from "react";

const Countdown: FC = () => {
  const weddingDate = new Date("2024-05-11T03:00:00.000-07:00");
  const todaysDate = new Date();
  const timeUntilWedding = new Date(
    weddingDate.getTime() - todaysDate.getTime()
  );

  const [timer, setTimer] = useState(timeUntilWedding.getTime());

  useEffect(() => {
    const timerClock = setTimeout(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => {
      clearTimeout(timerClock);
    };
  }, [timer]);

  return (
    <div className="row countdown row-cols-2 row-cols-md-3 row-cols-lg-6 g-0">
      <div className="col d-flex justify-content-center align-items-center">
        <p className="text-center">Wedding Countdown</p>
      </div>
      <div className="col d-flex justify-content-center align-items-center">
        <p>{timeUntilWedding.getMonth()} Months</p>
      </div>
      <div className="col d-flex justify-content-center align-items-center">
        <p>{timeUntilWedding.getDay()} Days</p>
      </div>
      <div className="col d-flex justify-content-center align-items-center">
        <p>{timeUntilWedding.getHours()} Hours</p>
      </div>
      <div className="col d-flex justify-content-center align-items-center">
        <p>{timeUntilWedding.getMinutes()} Minutes</p>
      </div>
      <div className="col d-flex justify-content-center align-items-center">
        <p>{timeUntilWedding.getSeconds()} Seconds</p>
      </div>
    </div>
  );
};

export default Countdown;
