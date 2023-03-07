export const timer = (selector, deadline) => {
  const addZero = (num) => num <= 9 ? `0${num}` : num;

  const getTimeRemaining = (endTime) => {
    const betweenTime = Date.parse(endTime) - Date.parse(new Date());
    const seconds = Math.floor((betweenTime / 1000) % 60);
    const minutes = Math.floor((betweenTime / 1000 / 60) % 60);
    const hours = Math.floor((betweenTime / (1000 * 60 * 60)) % 24);
    const days = Math.floor((betweenTime / (1000 * 60 * 60 * 24)));
    return { betweenTime, seconds, minutes, hours, days };
  };

  const updateClock = () => {
    const timeObj = getTimeRemaining(deadline);
    days.textContent = addZero(timeObj.days);
    hours.textContent = addZero(timeObj.hours);
    minutes.textContent = addZero(timeObj.minutes);
    seconds.textContent = addZero(timeObj.seconds);
    if (timeObj.totalMilliseconds <= 0) {
      days.textContent = "00";
      hours.textContent = "00";
      minutes.textContent = "00";
      seconds.textContent = "00";
      clearInterval(timerInterval);
    }
  };
  updateClock();
  const setClock = (selector, deadline) => {
    const HtmlblockTimer = document.querySelector(selector);
    const days = HtmlblockTimer.querySelector("#days");
    const hours = HtmlblockTimer.querySelector("#hours");
    const minutes = HtmlblockTimer.querySelector("#minutes");
    const seconds = HtmlblockTimer.querySelector("#seconds");
    const timerInterval = setInterval(updateClock, 1000);
  };

  setClock(selector, deadline);
};