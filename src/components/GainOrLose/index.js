import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

// COMPONENTS
import SnackMessage from "../SnackMessage";

// ACTIONS
import {
  addPointToHouseThunk,
  removePointToHouseThunk,
} from "../../store/Modules/Houses/thunk";

// STYLES
import { Input, Button } from "./styles";

const GainOrLose = () => {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const { name } = useParams();

  const gettingValue = (e) => {
    let currentValue = e.target.value;
    currentValue > 0 && setValue(currentValue);
  };

  const settingPoints = (type) => {
    setOpen(true);
    if (type === "gain") {
      dispatch(addPointToHouseThunk(value, name));
      return;
    }

    dispatch(removePointToHouseThunk(value, name));
  };

  return (
    <>
      <Input
        type="number"
        placeholder="Insert your value here"
        value={value}
        onChange={(e) => gettingValue(e)}
      />
      <Button onClick={() => settingPoints("gain")}>Gain</Button>
      <Button onClick={() => settingPoints("lose")}>Lose</Button>

      {open && <SnackMessage open={open} setOpen={setOpen} />}
    </>
  );
};

export default GainOrLose;
