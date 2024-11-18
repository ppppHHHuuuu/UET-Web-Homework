import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
      <>
        <div id="sidebar">
          <nav>
            <ul>
              <li>
                <Link to={`/`}>Home</Link>
              </li>
              <li>
                <Link to={`/login`}>Login</Link>
              </li>
              <li>
                <Link to={`/about`}>About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
  