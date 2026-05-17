import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDeleteToy, onUpdateLikes }) {
  return (
    <div className="toy-container">
      {toys.map((toy) => (
        <ToyCard
          key={toy.id}
          toy={toy}
          onDeleteToy={onDeleteToy}
          onUpdateLikes={onUpdateLikes}
        />
      ))}
    </div>
  );
}

export default ToyContainer;