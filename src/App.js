import Form from "./Form";
import Tasks from "./Tasks"
import Buttons from "./Buttons"
import Section from "./Section"
import Container from "./Container"
import { useState } from "react";

const tasks = [
  { id: 1, content: "zjeść obiad", done: true},
  { id: 2, content: "przejść na Reacta", done: false},
];

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

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
        <Tasks tasks={tasks} hideDone={hideDone} />
      }
      extraHeaderContent={
        <Buttons 
          tasks={tasks} 
          hideDone={hideDone} 
          toggleHideDone={toggleHideDone} 
        /> 
      }
    />
  </Container>
  );
}

export default App;
