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
