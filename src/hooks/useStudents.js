import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GET_STUDENTS } from "../constants/endpoints";

const useStudents = () => {
  const [students, setStudents] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    axios
      .get(`${GET_STUDENTS}/${name}`)
      .then((res) => setStudents(res.data))
      .catch((err) => err);
  }, [name]);

  return students;
};

export default useStudents;
