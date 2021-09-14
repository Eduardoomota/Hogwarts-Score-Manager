import { FiEdit2 } from "react-icons/fi";
import * as S from "./styles";

const StudentsList = ({ students, setModal }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>House</th>
        <th>Edit</th>
      </tr>
    </thead>

    <S.TableList>
      {students.map((student, index) => (
        <tr key={index}>
          <th>{student.name}</th>
          <td>{student.house}</td>
          <td>
            <button onClick={() => setModal(student)}>
              <FiEdit2 />
              <span>Edit</span>
            </button>
          </td>
        </tr>
      ))}
    </S.TableList>
  </table>
);

export default StudentsList;
