import { Nav, Navbar, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import logo from '../assets/logo/logo.png';
import { BookFill, HouseDoorFill } from 'react-bootstrap-icons';

const Sidebar = ({ setSearchQuery }) => {
  const likes = useSelector(state => state.likes);
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    setSearchQuery(inputValue);
  };

  return (
    <aside className="col-12 col-md-2 p-0">
      <Navbar expand="md" className="flex-md-column align-items-start" id="sidebar">
        <Navbar.Brand href="index.html" className="w-100">
          <img src={logo} alt="Spotify Logo" width="131" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup" className="flex-md-column align-items-start w-100">
          <Nav className="flex-column w-100">
            <Nav.Link href="#">
              <HouseDoorFill /> Home
            </Nav.Link>
            <Nav.Link href="#">
              <BookFill /> Your Library
            </Nav.Link>
            <div className="inputSearch input-group mt-3 w-100">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <div className="input-group-append">
                <Button variant="outline-secondary" className="btn-sm h-100" onClick={handleSearch}>
                  GO
                </Button>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
        <div className="nav-btn mt-auto">
          <Button className="btn signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="btn login-btn" type="button">
            Login
          </Button>
          <a href="#">Cookie Policy</a> | <a href="#">Privacy</a>
        </div>
      </Navbar>
    </aside>
  );
};

export default Sidebar;
