// import logo from './logo.svg';
import {useEffect, useState} from "react";
import './App.css';
import axios from "axios"

function App() {
  const [students, setStudents] = useState([]);
  useEffect(()=>{
    async function getStudents(){
      try {
        const student = await axios.get("http://localhost:3000/api/student");
        setStudents(student.data) 
        console.log(student.data)
      } catch (error) {
        console.log(error)
      }
    }
    getStudents()
  },[])

// console.log(students)

  return (
    <div className="App">
      <h1>Mohit Pardhi</h1>

      <div>
        {students.map((value,idx)=>{
          return (<h2 key={idx}>{value.stuname} @@ {value.email}</h2>)
      })}
      </div>
    </div>
  );
}

export default App;
