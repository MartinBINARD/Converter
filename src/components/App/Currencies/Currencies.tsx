import './Currencies.scss';
import { Currency } from '../../../@types';

interface CurrenciesProps {
  currencies: Currency[];
}

function Currencies({ currencies }: CurrenciesProps) {
  const items = currencies.map((currency) => (
    <li className="currencies-list-item" key={currency.description}>
      {currency.description}
    </li>
  ));

  return (
    <section className="currencies">
      <h2 className="currencies-title">Currencies</h2>
      <ul className="currencies-list">{items}</ul>
    </section>
  );
}

export default Currencies;
