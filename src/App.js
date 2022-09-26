import './App.scss';

function App() {

  function loop() {
    setInterval(displayTime, 1000)
  }
  loop()
  
  function displayTime() {
    const timeNow = new Date();

    let day = timeNow.toLocaleString('default', { weekday: 'short' });
    // let month = timeNow.toLocaleString('default', { month: 'long' });
    // let dayInNumber = timeNow.toLocaleString('default', { day: 'numeric' });
    
    let dateStr = day
    //  + ', ' + dayInNumber + ' de ' + month;
    document.getElementById('date').innerText = dateStr;

    let hours = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let timeStr = hours + ":" + minutes + ":" + seconds;

    document.getElementById('clock').innerText = timeStr;
  }

  return (
    <div className='container'>
      <p id="date" className="glow">
      </p>
      <h2 id="clock" className="glow">
      </h2>
      <img src="https://picsum.photos/1920/1080" alt="" />
    </div>
  );
}

export default App;
