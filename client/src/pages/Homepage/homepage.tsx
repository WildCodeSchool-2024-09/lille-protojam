import { Link } from "react-router-dom";
import "./homepage.css";

function Homepage() {
  return (
    <main>
      {" "}
      <div className="button-container">
        <Link to="/login">
          <button type="button" className="button-connexion">
            Se connecter
          </button>
        </Link>
      </div>
      <div className="img-container">
        <img className="image-feelgood" src="feelgood.png" alt="" />
      </div>
      <div className="citation-container">
        <h1 className="title">Citation du jour</h1>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
          laudantium facilis neque, est maxime laborum illo saepe dicta rerum,
          nisi explicabo consectetur laboriosam asperiores pariatur obcaecati,
          vel eveniet iste tenetur.
        </p>
      </div>
    </main>
  );
}

export default Homepage;
