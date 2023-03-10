import './App.css';
import Card from './components/Card/Card';

import data from './assets/personData.json';

function App() {
  const personElement = data.map(person => (<Card key={person.index} {...person}/>))

  return (
    <div className="App">
      <div className="card-list">
        {personElement}
      </div>
    </div>
  );
}

export default App;
