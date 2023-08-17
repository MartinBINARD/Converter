import './List.scss';

interface Currency {
  description: string;
}

interface CurrencyProps {
  currencies: Currency[];
}

function List({ currencies }: CurrencyProps) {
  const items = currencies.map((currency) => (
    <li className="currency-item" key={currency.description}>
      {currency.description}
    </li>
  ));

  return (
    <section className="currency-section">
      <h2>Currencies</h2>
      <ul className="currency-list">{items}</ul>
    </section>
  );
}

export default List;
