import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useLoading, Puff } from "@agney/react-loading";

import StudentsList from "../StudentsList";
import Modal from "../Modal";

import * as S from "./styles";

const Students = ({ students }) => {
  const [open, setOpen] = useState(false);
  const [student, setStudent] = useState({});

  const history = useHistory();

  const { indicatorEl } = useLoading({
    loading: true,
    indicator: <Puff width="50" />,
  });

  const setModal = (student) => {
    setOpen(true);
    setStudent(student);
  };

  return (
    <S.Container>
      <S.Button onClick={() => history.push("/")}>Back to Houses</S.Button>
      {students.length === 0 ? (
        indicatorEl
      ) : (
        <StudentsList students={students} setModal={setModal} />
      )}

      {open && <Modal setOpen={setOpen} student={student} />}
    </S.Container>
  );
};

export default Students;
