import { Title } from "./components/title";
import { Field } from "./components/playing field";
import {Keyboard} from "./components/keyboard"

function App() {
  return (
    < >
     <div className="app">
        <Title />
        <Field />
        <Keyboard />
     </div>
    </>
  );
}

export default App;
