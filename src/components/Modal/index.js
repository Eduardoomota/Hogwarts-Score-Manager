import GainOrLose from "../GainOrLose";

import * as S from "./styles";
import { GrClose } from "react-icons/gr";

const Modal = ({ setOpen, student }) => (
  <S.Container>
    <S.Card>
      <S.CardHeader>
        <h3>{student.name}</h3>
        <button onClick={() => setOpen(false)}>
          <GrClose />
        </button>
      </S.CardHeader>

      <S.CardImage src={student.image} alt="" />

      <S.CardDescription>
        <GainOrLose />
      </S.CardDescription>
    </S.Card>
  </S.Container>
);

export default Modal;
