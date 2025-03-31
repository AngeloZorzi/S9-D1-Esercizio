import "./App.css";
import Image from "./ImageComponent";
import Button from "./ButtonComponent";

function App() {
  return (
    <>
      <h1 id="titolo"> REACT ESERCIZI DAY 1</h1>
      <Button link="https://placecats.com/" text="Place Cats" />
      <Image src="https://www.placecats.com/200/200" alt="Immagine Gatto" />
      <Button link="https://placedog.net/" text="Place Dogs" />
      <Image src="https://www.placedog.net/200/200" alt="Immagine Cane" />
      <Button link="https://placebear.com/" text="Place Bears" />
      <Image src="https://www.placebear.com/200/200" alt="Immagine Orso" />
      <div className="learn">
        <Button link="https://it.legacy.reactjs.org/" text="Learn React!!!" />
      </div>
    </>
  );
}

export default App;
