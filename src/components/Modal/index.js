// COMPONENTS
import GainOrLose from "../GainOrLose";

// STYLES
import {
  Card,
  Container,
  CardHeader,
  CardImage,
  CardDescription,
} from "./styles";
import { GrClose } from "react-icons/gr";

const Modal = ({ setOpen, student }) => {
  return (
    <Container>
      <Card>
        <CardHeader>
          <h3>{student.name}</h3>
          <button onClick={() => setOpen(false)}>
            <GrClose />
          </button>
        </CardHeader>

        <CardImage src={student.image} alt="" />

        <CardDescription>
          <GainOrLose />
        </CardDescription>
      </Card>
    </Container>
  );
};

export default Modal;
