import { FC, useState, useEffect } from "react";
import countdown from "../../utils/countdown.min.js";
import { setInterval } from "timers";

const Countdown: FC = () => {
  const [countdownDates, setCountdownDates] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const timerClock = setTimeout(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => {
      clearTimeout(timerClock);
    };
  }, [timer]);

  useEffect(() => {
    const weddingDate = new Date("2024-05-11T15:00:00.000-07:00");

    let {
      months: _months,
      days: _days,
      hours: _hours,
      minutes: _minutes,
      seconds: _seconds,
    } = countdown(new Date(), weddingDate);

    setCountdownDates({
      months: _months,
      days: _days,
      hours: _hours,
      minutes: _minutes,
      seconds: _seconds,
    });
  }, [timer]);

  return (
    <div className="bg-light shadow p-1 rounded">
      <div className="row countdown d-flex justify-content-between row-cols-xs-2 row-cols-6 g-0 border border-secondary border-1 rounded m-2 px-5">
        <div className="col d-flex flex-column justify-content-center align-items-center px-4 fs-5 py-2">
          <p className="fs-3">
            {countdownDates.months >= 0 ? countdownDates.months : 0}
          </p>
          <p className="fs-6">Months</p>
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center px-4 fs-5">
          <p className="fs-3">
            {countdownDates.days >= 0 ? countdownDates.days : 0}
          </p>
          <p className="fs-6">Days</p>
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center px-4 fs-5">
          <p className="fs-3">
            {countdownDates.hours >= 0 ? countdownDates.hours : 0}
          </p>
          <p className="fs-6">Hours</p>
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center px-4 fs-5">
          <p className="fs-3">
            {countdownDates.minutes >= 0 ? countdownDates.minutes : 0}
          </p>
          <p className="fs-6">Minutes</p>
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center px-4 fs-5">
          <p className="fs-3">
            {countdownDates.seconds >= 0 ? countdownDates.seconds : 0}
          </p>
          <p className="fs-6">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
