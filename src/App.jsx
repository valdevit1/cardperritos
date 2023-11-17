import "./App.css";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";

const data = [
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas
    doloremque, aliquid repellat fugiat error ipsum deserunt id corporis qui
    commodi quia aspernatur consequatur, suscipit obcaecati repudiandae, saepe
    eos eum.
  </p>,
];

function App() {
  return (
    <div>
      <Header />
      <main className="fila">
        <MyCard
          nombre="Labrador"
          descripcion={data[0]}
          imagen="labrador.jpg"
          tagName="Labrador"
          tagColor="imfo"
        />

        <MyCard
          nombre="Maltes"
          descripcion={data[0]}
          imagen="Maltes.jpg"
          tagName="Maltes"
          tagColor="imfo"
        />

        <MyCard
          nombre="Pastoraleman"
          descripcion={data[0]}
          imagen="pastoraleman.jpg"
          tagName="pastoraleman"
          tagColor="imfo"
        />

        <MyCard
          nombre="salchica"
          descripcion={data[0]}
          imagen="salchicha.jpg"
          tagName="salchicha"
          tagColor="imfo"
        />
      </main>

      <Footer></Footer>
    </div>
  );
}
export default App;
