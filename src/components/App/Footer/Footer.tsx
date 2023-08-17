import './Footer.scss';

interface SelectedCurrency {
  description: string;
  rate: number;
}

function Footer({ description, rate }: SelectedCurrency) {
  return (
    <header className="Footer">
      <h2>{rate}</h2>
      <h3>{description}</h3>
    </header>
  );
}

export default Footer;
