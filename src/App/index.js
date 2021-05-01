import React, { useState, useEffect } from 'react';
import './App.scss';
import { Button } from 'reactstrap';
import {
  getLiveStudents,
  killStudent,
  getDeadStudents
} from '../helpers/data/studentsData';
import StudentList from '../components/StudentList';

function App() {
  const [livingStudents, setLivingStudents] = useState([]);
  const [deadStudents, setDeadStudents] = useState([]);

  useEffect(() => {
    setLivingStudents(getLiveStudents());
    setDeadStudents(getDeadStudents());
  }, []);

  const killEmDead = () => {
    const [living, dead] = killStudent();
    setLivingStudents(living);
    setDeadStudents(dead);
  };

  return (
   <div className='App'>
    {livingStudents.length
      ? <Button color='danger' onClick={killEmDead}>Kill Student</Button>
      : ''}
    <h2>Living Students</h2>
    <StudentList color='info' studentArray={livingStudents} />
    <h2>Dead Students</h2>
    <StudentList color='secondary' studentArray={deadStudents}/>
    </div>
  );
}

export default App;
