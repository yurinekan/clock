import './App.scss';

function App() {

  function loop() {
    setInterval(displayTime,1000)
  }
  loop()
  function displayTime(){
    const timeNow = new Date();
    
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
    <div id="clock" class="glow">00:00:00</div>
  );
}

export default App;
