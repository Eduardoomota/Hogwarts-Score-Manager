import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// COMPONENTS
import Students from "../../components/Students";

const HousesEdit = () => {
  const [students, setStudents] = useState([]);
  const { name } = useParams();

  const url = `http://hp-api.herokuapp.com/api/characters/house/${name}`;

  useEffect(() => {
    axios.get(url).then((res) => setStudents(res.data));
  }, [url]);

  return <Students students={students} />;
};

export default HousesEdit;
