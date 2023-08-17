import Header from './Header/Header';
import List from './List/List';
import Footer from './Footer/Footer';

import currencies from '../../data/currencies';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header description="euro" rate={1} />
      <List currencies={currencies} />
      <Footer description="United State Dollar" rate={1.09} />
    </div>
  );
}

export default App;
