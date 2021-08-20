import { Link } from "react-router-dom";
import ThumbIcon from "./ThumbIcon";

function Home() {
  return (
    <div>
      <Link to="/home" className="get-started__button">
        <ThumbIcon />
        Click begin to get started.
      </Link>
    </div>
  );
}

export default Home;
