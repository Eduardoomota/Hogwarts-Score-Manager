import Students from "../../components/Students";
import useStudents from "../../hooks/useStudents";

const HousesEdit = () => {
  const students = useStudents();

  return <Students students={students} />;
};

export default HousesEdit;
