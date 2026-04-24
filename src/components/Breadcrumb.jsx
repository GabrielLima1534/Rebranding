import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter(x => x);

  return (
    <div style={{ padding: "10px 60px", color: "#aaa" }}>
      <Link to="/">Home</Link>

      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;

        return (
          <span key={name}>
            {" > "}
            <Link to={routeTo}>{name}</Link>
          </span>
        );
      })}
    </div>
  );
}