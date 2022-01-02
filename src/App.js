import Form from "./Form";
import Tasks from "./Tasks"
import Buttons from "./Buttons"
import Section from "./Section"
import Container from "./Container"

const tasks = [
  { id: 1, content: "zjeść obiad", done: true},
  { id: 2, content: "przejść na Reacta", done: false},
];

const hideDoneTasks = false;

function App() {
  return (
    <Container>
    <h2>Lista zadań</h2>
    <Section 
      title="Dodaj nowe zadanie" 
      body={ <Form />} 
    />
    <Section 
      title="Lista zadań"
      body={
        <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
      }
      extraHeaderContent={
        <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} /> 
      }
    />
  </Container>
  );
}

export default App;
