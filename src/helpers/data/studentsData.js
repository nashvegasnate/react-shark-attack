const students = [
  {
    id: 0,
    firstName: 'Ben',
    lastName: 'Jarrett',
    image: 'https://avatars0.githubusercontent.com/u/76926244?v=4',
    isDead: false
  },
  {
    id: 1,
    firstName: 'Casey',
    lastName: 'Walker',
    image: 'https://avatars2.githubusercontent.com/u/76138733?v=4',
    isDead: false
  },
  {
    id: 2,
    firstName: 'Chie',
    lastName: 'Stroud',
    image: 'https://avatars2.githubusercontent.com/u/68720317?v=4',
    isDead: false
  },
  {
    id: 3,
    firstName: 'Chris',
    lastName: 'Meffley',
    image: 'https://avatars2.githubusercontent.com/u/76795299?v=4',
    isDead: false
  },
  {
    id: 4,
    firstName: 'Dani',
    lastName: 'Crosby',
    image: 'https://avatars0.githubusercontent.com/u/68397076?v=4',
    isDead: false
  },
  {
    id: 5,
    firstName: 'Ellie',
    lastName: 'Walker',
    image: 'https://avatars0.githubusercontent.com/u/76851756?v=4',
    isDead: false
  },
  {
    id: 6,
    firstName: 'Martin',
    lastName: 'Sisk',
    image: 'https://avatars3.githubusercontent.com/u/58958998?v=4',
    isDead: false
  },
  {
    id: 7,
    firstName: 'Gabby',
    lastName: 'Tobermann',
    image: 'https://avatars3.githubusercontent.com/u/76187279?v=4',
    isDead: false
  },
  {
    id: 8,
    firstName: 'Matthew',
    lastName: 'Gonzales',
    image: 'https://avatars3.githubusercontent.com/u/16343050?v=4',
    isDead: false
  },
  {
    id: 9,
    firstName: 'John',
    lastName: 'Maple',
    image: 'https://avatars3.githubusercontent.com/u/51683901?v=4',
    isDead: false
  },
  {
    id: 10,
    firstName: 'Holly',
    lastName: 'Parsons',
    image: 'https://avatars3.githubusercontent.com/u/67122062?v=4',
    isDead: false
  },
  {
    id: 11,
    firstName: 'Hunter',
    lastName: 'Juneau',
    image: 'https://avatars2.githubusercontent.com/u/20494604?v=4',
    isDead: false
  },
  {
    id: 12,
    firstName: 'Jim',
    lastName: 'Conner',
    image: 'https://avatars1.githubusercontent.com/u/76793747?v=4',
    isDead: false
  },
  {
    id: 13,
    firstName: 'Jesse',
    lastName: 'Robinson',
    image: 'https://avatars3.githubusercontent.com/u/45837967?v=4',
    isDead: false
  },
  {
    id: 14,
    firstName: 'Juan',
    lastName: 'Davila',
    image: 'https://avatars2.githubusercontent.com/u/76821980?v=4',
    isDead: false
  },
  {
    id: 15,
    firstName: 'Katy',
    lastName: 'Fry',
    image: 'https://avatars2.githubusercontent.com/u/76188832?v=4',
    isDead: false
  },
  {
    id: 16,
    firstName: 'Lindsey',
    lastName: 'Satterfield',
    image: 'https://avatars2.githubusercontent.com/u/23327097?v=4',
    isDead: false
  },
  {
    id: 17,
    firstName: 'Mitchell',
    lastName: 'Crumbley',
    image: 'https://avatars0.githubusercontent.com/u/76921222?v=4',
    isDead: false
  },
  {
    id: 18,
    firstName: 'Nathan',
    lastName: 'Keith',
    image: 'https://avatars2.githubusercontent.com/u/76710923?v=4',
    isDead: false
  },
  {
    id: 19,
    firstName: 'Sara',
    lastName: 'Schoonover',
    image: 'https://avatars3.githubusercontent.com/u/25774314?v=4',
    isDead: false
  },
  {
    id: 20,
    firstName: 'Rob',
    lastName: 'Cole',
    image: 'https://avatars0.githubusercontent.com/u/76854545?v=4',
    isDead: false
  },
  {
    id: 21,
    firstName: 'Sean',
    lastName: 'Rossettie',
    image: 'https://avatars2.githubusercontent.com/u/76828201?v=4',
    isDead: false
  },
  {
    id: 22,
    firstName: 'Honey-Rae',
    lastName: 'Swan',
    image: 'https://avatars3.githubusercontent.com/u/76716670?v=4',
    isDead: false
  },
  {
    id: 23,
    firstName: 'Tad',
    lastName: 'Sekeres',
    image: 'https://avatars0.githubusercontent.com/u/74842096?v=4',
    isDead: false
  }
];

const getLiveStudents = () => students.filter((student) => !student.isDead);
const getDeadStudents = () => students.filter((student) => student.isDead);
const killStudent = () => {
  const currentLiveStudents = getLiveStudents();
  const randomStudent = currentLiveStudents[Math.floor(Math.random() * currentLiveStudents.length)];

  const index = students.indexOf(randomStudent);
  students[index].isDead = true;

  return [getLiveStudents(), getDeadStudents()];
};

export {
  getLiveStudents,
  getDeadStudents,
  killStudent,
  students
};
