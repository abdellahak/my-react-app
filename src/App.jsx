import Student from "./Student.jsx"

function App() {
  return (
    <>
      <Student name="Abdellah" age={22} isStudent={true}/>
      <Student name="Othman" age={20} isStudent={false}/>
      <Student name="Maryame" age={24} isStudent={false}/>
      <Student name="Zakariya" age={10} isStudent={true}/>
      <Student name="aymane"/>
    </>
  );
}

export default App;
