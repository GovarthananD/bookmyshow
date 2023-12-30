import './App.css';
import Homes from './components/Homes';
import End from './components/end';
import Movies from './components/movies';
import Quick from './components/quick';
import Recommend from './components/recomend';
import Slider from './components/slider';
import Stream from './components/stream';


function App() {
  return (
    <div className="App">
      <Homes/>
      <Quick/>
      <Slider/>
      <Recommend/>
      <Movies/>
      <Stream/>
      <End/>
    </div>
  );
}

export default App;
