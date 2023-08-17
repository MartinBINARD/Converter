import './Header.scss';

interface ConvertCurrency {
  description: string;
  rate: number;
}

function Header({ description, rate }: ConvertCurrency) {
  return (
    <header className="header">
      <h1>Converter</h1>
      <p>
        {rate} {description}
      </p>
    </header>
  );
}

export default Header;
