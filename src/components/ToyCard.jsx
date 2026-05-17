function ToyCard({ toy, onDeleteToy, onUpdateLikes }) {
  function handleDelete() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    }).then(() => {
      onDeleteToy(toy.id);
    });
  }

  function handleLike() {
    const updatedLikes = toy.likes + 1;

    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: updatedLikes,
      }),
    })
      .then((res) => res.json())
      .then((updatedToy) => {
        onUpdateLikes(updatedToy);
      });
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>

      <img src={toy.image} alt={toy.name} width="200" />

      <p>{toy.likes} Likes </p>

      <button onClick={handleLike}>Like &lt;3</button>

      <button onClick={handleDelete}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;