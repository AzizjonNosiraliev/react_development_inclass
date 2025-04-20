import "./App.css";
import { Movie, Actor } from "./components";

function App() {
  const movie1 = "Inception";
  const movie2 = "The Matrix";
  const movie3 = "Interstellar";

  const actor1 = { id: 1, name: "Leonardo DiCaprio", age: 46 };
  const actor2 = { id: 2, name: "Keanu Reeves", age: 57 };
  const actor3 = { id: 3, name: "Matthew McConaughey", age: 52 };

  return (
    <div>
      <h1>Favorite Movies and Actors</h1>
      <div>
        <ol>
          <li>
            <Movie movie={movie1} />
          </li>
          <li>
            <Movie movie={movie2} />
          </li>
          <li>
            <Movie movie={movie3} />
          </li>
        </ol>
      </div>

      <div>
        <ul>
          <li>
            <Actor actor={actor1} />
          </li>
          <li>
            <Actor actor={actor2} />
          </li>
          <li>
            <Actor actor={actor3} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
