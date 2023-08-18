import './Result.scss';

interface SelectedCurrency {
  description: string;
  rate: number;
}

function Result({ description, rate }: SelectedCurrency) {
  return (
    <header className="result">
      <span className="result-value">{rate}</span>
      <span className="result-currency">{description}</span>
    </header>
  );
}

export default Result;
