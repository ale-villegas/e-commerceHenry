import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = ({ dispatch, resultados }) => {
  return (
    <div className={style.Links}>
      <Link className={style.inputNav} to={"/home"}>
        Home
      </Link>
      <Link className={style.inputNav} to={"/about"}>
        {" "}
        About{" "}
      </Link>

      <SearchBar resultados={resultados} dispatch={dispatch} />
    </div>
  );
};

export default Nav;
