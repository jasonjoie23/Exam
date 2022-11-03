import logo from "./logo.png";
import bg from "./photo.jpg";
import "./App.css";

function App() {
  return (
    <>
      <div className="item"></div>
      <div className="item3"></div>
      <img className="item2" src={bg}></img>
      <div className="details">
        <div className="grid-container">
          <img src={logo} className="logo"></img>

          <button className="button1">About OA</button>
          <button className="button1"> About SP</button>
          <button className="button2">Login</button>
        </div>

        <section>
          <div className="details2">
            <p className="jambo1">Data to enrich your</p>
            <p className="jambo2">offshore business</p>
            <div className="content">
              <p className="p1">
                Anim aute ud manga aliqu ad ad non deserunt sunt. Qui
              </p>
              <p className="p1">
                {" "}
                irure qui lorem cupidata commodo.Elit sunt amet Fugiat
              </p>
              <p className="p1">venian occaecat fugia aliqua</p>
            </div>
            <div>
              <button className="buttonStrap">Get started</button>
              <button className="buttonStrap2">View recent leads</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
