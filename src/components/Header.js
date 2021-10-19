import "../assets/css/nav-bar.css";

const Header = ({ name, basket }) => {
  const openNav = () => {
    document.getElementById("mySidenav").style.height = "350px";
  };

  return (
    <nav className="navbar navbar-light navbar-expand-md navigation-clean sticky-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          {name}
        </a>
        <button
          data-bs-toggle="collapse"
          className="navbar-toggler"
          data-bs-target="#navcol-1"
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="navbar-nav align-items-baseline ms-auto">
            <li className="nav-item">
              <button
                onClick={openNav}
                className="btn btn-outline-dark d-flex align-items-end"
                type="button"
              >
                <i className="fas fa-shopping-basket" />
                <span className="badge bg-danger">{basket}</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
