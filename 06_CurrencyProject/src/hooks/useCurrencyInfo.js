/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  //callling api using useEffect
  //useEffect need callback() and  dependemcy array
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    // console.log(data);
  }, [currency, setData]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
