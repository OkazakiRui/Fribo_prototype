import Greets from "./components/Greets";
import Greets2 from "./components/Greets2";
import MyButton from "./components/Button";
import SummaryText from "./components/SummaryText";
import TextInput from "./components/TextInput";
import "./App.css";

const App: React.FunctionComponent = () => (
  <div className="App">
    <Greets name="Patty" times={4}>
      <span role="img" aria-label="rabbit">
        🐰
      </span>
    </Greets>

    <img src="" alt="" />

    <Greets2 name={"Okazaki"} times={3}>
      <span>👦</span>
    </Greets2>

    <MyButton disable>サンプル</MyButton>
    <MyButton disable={false}>サンプル</MyButton>

    <SummaryText>
      &lt;Summary&gt;
      <br />
      Patty Hope-rabbit, along with her family, arrives in Maple Town, a small
      town inhabited by friendly animals. Soon, the Rabbit Family settles in
      Maple Town as mail carriers and the bitter, yet sweet friendship of Patty
      and Bobby begins to blossom.
    </SummaryText>
    <TextInput />
  </div>
);

export default App;
