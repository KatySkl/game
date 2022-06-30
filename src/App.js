import { Title } from "./components/title/title";
import { Field } from "./components/playing-field/playing-field";
import {Keyboard} from "./components/keyboard/keyboard";

function App() {
  return (
     <div className="app">
        <Title />
        <Field />
        <Keyboard />
     </div>
  );
}

export default App;
