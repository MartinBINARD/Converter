import Header from './Header/Header';
import Currencies from './Currencies/Currencies';
import Result from './Result/Result';

import currencies from '../../data/currencies';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header description="euro" rate={1} />
      <Currencies currencies={currencies} />
      <Result description="United State Dollar" rate={1.09} />
    </div>
  );
}

export default App;
