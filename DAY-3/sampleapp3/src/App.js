import Nav from './components/Nav';
import './asserts/Css/app.css';
import CarouselComponent from './components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './asserts/Css/carousel.css';
import IMG from './asserts/images/coffee-171653_1920.jpg';

function App(){
  return (   
  <div >
    <img src = {IMG} class = 'img'/>
    <Nav/>
    <div className="right-corner-text">
        <blockquote class="bigger-quote">
      <h1>DE KOFFIE</h1>
    </blockquote>
    </div>
    <div>
    <q class="quotes">Another day, another cup of coffee.</q>
    </div>
    <CarouselComponent/>
    </div>

  )
}
export default App;
