import './App.scss';

const weekdays = ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'];
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
  let count = 0;

  function loop() {
    setInterval(displayTime, 1000);
    setInterval(changeBackgroundImage, 14400000);
  }
  loop()

  function changeBackgroundImage() {
    let imageBackground = document.getElementsByTagName('img')[0];
    animateFadeElement(imageBackground);

    imageBackground.src = `https://picsum.photos/1920/1080?random=${count++}`;
  }

  function animateFadeElement(element) {
    const fade = [
      { filter: 'brightness(1)' },
      { filter: 'brightness(0)' },
      { filter: 'brightness(0)' },
      { filter: 'brightness(1)' }

    ];

    const fadeTiming = {
      duration: 2000,
      iterations: 1,
      easing: 'ease-out'
    }

    element.animate(fade, fadeTiming)
  }
  
  function displayTime() {
    const timeNow = new Date();

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
