<<<<<<< HEAD
import React, { useState } from "react";

import imgBtnPlus from "../../img/plus.svg";

export const BtnPlus = () => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [nameBtn, setNameBtn] = useState("Add card");

  const [inputValue, setInputValue] = useState("");
  const [submitedValue, setSubmitedValue] = useState("");

  const addInput = () => {
    setIsInputVisible(!isInputVisible);

    if (isInputVisible === false) {
      setNameBtn("Submit");
    } else {
      setNameBtn("Add card");
    }
  };

  const addCard = () => {
    setSubmitedValue(inputValue);
    setIsInputVisible(false);
    setNameBtn("Add card");
    setInputValue("");
  };

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      {submitedValue && <p>Отправленные данные: {submitedValue}</p>}
      {isInputVisible && (
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Введите текст"
        />
      )}
      <button
        onClick={() => {
          if (isInputVisible) {
            addCard();
          }
          if (!isInputVisible) {
            addInput();
          }
        }}
      >
        {!isInputVisible && <img src={imgBtnPlus} alt="plus" />}
        {nameBtn}
      </button>
    </>
  );
};
=======
import imgBtnPlus from "../../img/plus.svg";

const addCard = () => {};

export const BtnPlus = () => {
  return (
    <button onClick={addCard}>
      <img src={imgBtnPlus} alt="plus" />
      Add card
    </button>
  );
};
>>>>>>> 24cfef71f5f651d2c01728297902fefe854ec05a
