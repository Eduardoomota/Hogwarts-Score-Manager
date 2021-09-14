import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import SnackMessage from "../SnackMessage";

import {
  addPointToHouseThunk,
  removePointToHouseThunk,
} from "../../store/Modules/Houses/thunk";

import * as S from "./styles";

const GainOrLose = () => {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const { name } = useParams();

  const gettingValue = (e) => e.target.value && setValue(e.target.value);

  const settingPoints = (type) => {
    setOpen(true);

    type === "gain"
      ? dispatch(addPointToHouseThunk(value, name))
      : dispatch(removePointToHouseThunk(value, name));
  };

  return (
    <>
      <S.Input
        type="number"
        placeholder="Insert your value here"
        value={value}
        onChange={(e) => gettingValue(e)}
      />
      <S.Button onClick={() => settingPoints("gain")}>Gain</S.Button>
      <S.Button onClick={() => settingPoints("lose")}>Lose</S.Button>

      {open && <SnackMessage open={open} setOpen={setOpen} />}
    </>
  );
};

export default GainOrLose;
