import { useEffect, useState } from "react";
import ToyContainer from "./ToyContainer";
import ToyForm from "./ToyForm";

function App() {
  const [toys, setToys] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // GET request
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  // ADD TOY
  function addToy(newToy) {
    setToys([...toys, newToy]);
  }

  function toggleForm() {
    setShowForm((show) => !show);
  }

  // DELETE TOY
  function deleteToy(id) {
    const updatedToys = toys.filter((toy) => toy.id !== id);
    setToys(updatedToys);
  }

  // UPDATE LIKES
  function updateLikes(updatedToy) {
    const updatedToys = toys.map((toy) =>
      toy.id === updatedToy.id ? updatedToy : toy
    );

    setToys(updatedToys);
  }

  return (
    <div>
      <button onClick={toggleForm}>Add a Toy</button>
      {showForm ? <ToyForm onAddToy={addToy} /> : null}
      <ToyContainer
        toys={toys}
        onDeleteToy={deleteToy}
        onUpdateLikes={updateLikes}
      />
    </div>
  );
}

export default App;