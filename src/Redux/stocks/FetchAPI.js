const FetchStocks = {
  getStocks() {
    const stocks = fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false')
      .then((res) => res.json())
      .then((response) => response);
    return stocks;
  },
};
export default FetchStocks;
