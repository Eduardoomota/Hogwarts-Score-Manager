import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useLoading, Puff } from "@agney/react-loading";

// COMPONENTS
import StudentsList from "../StudentsList";
import Modal from "../Modal";

// STYLES
import { Container, Button } from "./styles";

const Students = ({ students }) => {
  const [open, setOpen] = useState(false);
  const [student, setStudent] = useState({});

  const { indicatorEl } = useLoading({
    loading: true,
    indicator: <Puff width="50" />,
  });

  const history = useHistory();

  const setModal = (student) => {
    setOpen(true);
    setStudent(student);
  };

  return (
    <Container>
      <Button onClick={() => history.push("/")}>Back to Houses</Button>
      {students.length === 0 ? (
        indicatorEl
      ) : (
        <StudentsList students={students} setModal={setModal} />
      )}

      {open && <Modal setOpen={setOpen} student={student} />}
    </Container>
  );
};

export default Students;
