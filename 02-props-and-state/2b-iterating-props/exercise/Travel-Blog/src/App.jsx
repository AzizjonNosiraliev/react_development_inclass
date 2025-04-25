import "./App.css";
import Article from "./components/Article";
import articlesData from "./data/articles";

function App() {
  return (
    <>
      <div className="container ">
        <p className="flex justify-center text-3xl font-serif p-5">
          My Travel Blog
        </p>
        <div className="flex justify-around">
          {articlesData.map((article) => (
            <Article key={article.id} content={article} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
