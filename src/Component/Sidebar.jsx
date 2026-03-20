const Sidebar = ({ selectedTab, setSelectedTab, setLoginButton }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{ width: "180px" }}
    >
      {" "}
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        {" "}
        <span className="fs-4">FriendSpot</span>{" "}
      </a>{" "}
      <hr />{" "}
      <ul className="nav nav-pills flex-column mb-auto">
        {" "}
        <li
          className="nav-item"
          onClick={() => {
            setSelectedTab("Home");
            setLoginButton("");
          }}
        >
          {" "}
          <a
            href="#"
            className={`nav-link text-white ${selectedTab === "Home" && "active"}`}
            aria-current="page"
          >
            {" "}
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>{" "}
        </li>{" "}
        <li
          onClick={() => {
            setSelectedTab("Create post");
            setLoginButton("");
          }}
        >
          {" "}
          <a
            href="#"
            className={`nav-link text-white ${selectedTab === "Create post" && "active"}`}
          >
            {" "}
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create Post
          </a>{" "}
        </li>{" "}
      </ul>{" "}
      <hr />{" "}
      <div className="dropdown">
        {" "}
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {" "}
          <strong>Profile</strong>{" "}
        </a>{" "}
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          {" "}
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>{" "}
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>{" "}
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>{" "}
          <li>
            <hr className="dropdown-divider" />
          </li>{" "}
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>{" "}
        </ul>{" "}
      </div>{" "}
    </div>
  );
};

export default Sidebar;
