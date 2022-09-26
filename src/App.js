import './App.scss';

const weekdays = ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.'];
const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'];

function App() {

  function loop() {
    setInterval(displayTime, 1000)
  }
  loop()

  function displayTime() {
    const timeNow = new Date();

    // Outra forma de fazer, mas não funciona no Safari:
    // let day = timeNow.toLocaleString('default', { weekday: 'short' });
    // let month = timeNow.toLocaleString('default', { month: 'long' });
    // let dayInNumber = timeNow.toLocaleString('default', { day: 'numeric' });
    // day + ', ' + dayInNumber + ' de ' + month;

    let day = weekdays[timeNow.getDay()];
    let dayInNumber = timeNow.getDate();
    let month = months[timeNow.getMonth()];
    let dateStr = (day + ', ' + dayInNumber + ' de ' + month).toLowerCase();

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
