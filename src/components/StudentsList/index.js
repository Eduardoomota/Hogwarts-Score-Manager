// STYLES
import { FiEdit2 } from "react-icons/fi";
import { TableList } from "./styles";

const StudentsList = ({ students, setModal }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>House</th>
          <th>Edit</th>
        </tr>
      </thead>

      <TableList>
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
      </TableList>
    </table>
  );
};

export default StudentsList;
