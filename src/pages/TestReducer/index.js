import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { handleIncrement, handleDecrement } from "./actions";

function TestReducer() {
  const dispatch = useDispatch();
  const [t] = useTranslation();

  const { counter } = useSelector(state => state.testReducer);

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={() => dispatch(handleDecrement())}>
        {t("buttons.1")}
      </button>
      <button onClick={() => dispatch(handleIncrement())}>
        {t("buttons.2")}
      </button>
    </div>
  );
}

export default TestReducer;
