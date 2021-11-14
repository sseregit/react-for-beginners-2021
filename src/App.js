import { useEffect, useState } from "react";

function App() {
  const [money, setMoney] = useState(0);
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const onChange = (event) => {
    setMoney(event.target.value);
  };
  console.log(money);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then((response) =>
      response.json().then((json) => {
        setCoins(json);
        setLoading(false);
      })
    );
  }, []);
  return (
    <div>
      <h1>The Coins ({coins.length})</h1>
      <input
        type="number"
        value={money}
        placeholder="How many money?"
        onChange={onChange}
      />
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
          {coins.map((value, index) => (
            <li>
              {value.name} ({value.symbol} : ${value.quotes.USD.price})
              <ul>
                <li>{money / value.quotes.USD.price}</li>
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default App;
