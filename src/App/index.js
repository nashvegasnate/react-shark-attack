import React, { useState, useEffect } from 'react';
import './App.scss';
import { Button } from 'reactstrap';
import {
  getLiveStudents,
  killStudent,
  getDeadStudents
} from '../helpers/data/studentsData';
import StudentList from '../components/StudentList';
// import tombstone from '../images/tombstone.png';

function App() {
  const [livingStudents, setLivingStudents] = useState([]);
  const [deadStudents, setDeadStudents] = useState([]);

  useEffect(() => {
    setLivingStudents(getLiveStudents());
    setDeadStudents(getDeadStudents());
  }, []);

  const sharkAttack = () => {
    const [living, dead] = killStudent();
    setLivingStudents(living);
    setDeadStudents(dead);
  };

  return (
   <div className='App'>
    {livingStudents.length
      ? <Button color='danger' onClick={sharkAttack}>Shark Attack!</Button>
      : ''}
    <h2>Shark Tank</h2>
    <div className="shark-tank">
    <StudentList color='info' studentArray={livingStudents} />
    </div>
    <hr></hr>
    <h2>Graveyard</h2>
    <div className="graveyard">
    <StudentList color='secondary' studentArray={deadStudents} />
    </div>
    </div>
  );
}

export default App;
