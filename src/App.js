import { Title } from "./components/title/title";
import { Field } from "./components/playing-field/playing-field";
import { Keyboard } from "./components/keyboard/keyboard";

const field = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
]

function App() {
  return (
    <div className="app">
      <Title />
      <Field field={field} />
      <Keyboard />
    </div>
  );
}

export default App;
