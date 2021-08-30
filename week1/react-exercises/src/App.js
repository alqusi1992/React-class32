import HobbyList from "./components/HobbyList";
import Guarantee from "./components/Guarantee";
import chat from "./assets/chat.png";
import coin from "./assets/coin.png";
import exercise2 from "./assets/exercise2.png";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HobbyList />
      <section>
        <Guarantee
          img={chat}
          title="Contact"
          description="Please contact us if you have any question"
        />
        <Guarantee
          img={coin}
          title="Bitcoins"
          description="Bitcoin is a new currency that was created in 2009 by an unknown person using the alias Satoshi Nakamoto."
        />
        <Guarantee
          img={exercise2}
          title="money back"
          description="You can refund your money whenever you want"
        />
      </section>

      <Counter />
    </div>
  );
}

export default App;
