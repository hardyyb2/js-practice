import React, { useState } from "react";
import { BANK_UPI_IDS } from "./AutoComplete.constants";

import styles from "./AutoComplete.module.css";

const AutoComplete = () => {
  const [upiId, setUpiId] = useState("");
  const [prediction, setPrediction] = useState("");
  const [predictions, setPredictions] = useState([]);

  const handleUpiIdChange = (e) => {
    const value = e.target.value || "";
    setUpiId(value);

    const [customerName, bankName] = value.split("@");

    if (!customerName) {
      setPredictions([]);
      return;
    }

    const matchingBankNames = BANK_UPI_IDS.filter((upi) =>
      upi.includes(bankName)
    );

    setPredictions(matchingBankNames);

    const firstMatchPrediction = matchingBankNames[0];

    if (!firstMatchPrediction) {
      setPrediction("");
      return;
    }

    setPrediction(customerName + "@" + firstMatchPrediction);
  };

  const handleKeyDown = (e) => {
    let validKey = e.keyCode === 39 || e.key === "ArrowRight" || e.which === 39;

    if (!validKey) return;

    if (validKey && prediction) {
      setUpiId(prediction);
    }
  };

  const handlePredictionClick = (prediction) => {
    const [userName] = upiId.split("@");

    const newValue = userName + "@" + prediction;

    setUpiId(newValue);
    setPrediction(newValue);
    setPredictions([]);
  };

  return (
    <form className={styles.form}>
      <input
        value={prediction}
        onChange={() => {}}
        type="text"
        className={styles.prediction}
      />
      <input
        value={upiId}
        onChange={handleUpiIdChange}
        type="text"
        pattern=".+@.+"
        autoComplete="off"
        onKeyDown={handleKeyDown}
        className={styles.input}
      />

      {predictions.length ? (
        <ul className={styles.list}>
          {predictions.map((prediction) => (
            <li
              key={prediction}
              onClick={() => handlePredictionClick(prediction)}
            >
              {prediction}
            </li>
          ))}
        </ul>
      ) : null}
    </form>
  );
};

export default AutoComplete;
