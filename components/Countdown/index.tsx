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
    <div className="bg-light shadow p-1 rounded">
      <div className="row countdown d-flex justify-content-between row-cols-xs-2 row-cols-6 g-0 border border-secondary border-1 rounded m-2 px-5">
        <div className="col d-flex flex-column justify-content-center align-items-center px-4 fs-5 py-2">
          <p className="fs-3">{timeUntilWedding.getMonth()}</p>
          <p className="fs-6">Months</p>
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center px-4 fs-5">
          <p className="fs-3">{timeUntilWedding.getDay()}</p>
          <p className="fs-6">Days</p>
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center px-4 fs-5">
          <p className="fs-3">{timeUntilWedding.getHours()}</p>
          <p className="fs-6">Hours</p>
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center px-4 fs-5">
          <p className="fs-3">{timeUntilWedding.getMinutes()}</p>
          <p className="fs-6">Minutes</p>
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center px-4 fs-5">
          <p className="fs-3">{timeUntilWedding.getSeconds()}</p>
          <p className="fs-6">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
