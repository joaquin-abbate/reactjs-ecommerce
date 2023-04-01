import React, { useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/shop.css";

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="filter__widget " onClick={toggleMenu}>
        Categorias
      </button>

      {isOpen && (
        <ListGroup className="dropdown-menu">
          <ListGroupItem>
            <Link to="../shop">Todos</Link>
          </ListGroupItem>

          <ListGroupItem>
            <Link to="../shop/mobile">Telefonos</Link>
          </ListGroupItem>

          <ListGroupItem>
            <Link to="../shop/chair">Sillas</Link>
          </ListGroupItem>

          <ListGroupItem>
            <Link to="../shop/sofa">Sillones</Link>
          </ListGroupItem>

          <ListGroupItem>
            <Link to="../shop/watch">Relojes</Link>
          </ListGroupItem>

          <ListGroupItem>
            <Link to="../shop/wireless">Auriculares</Link>
          </ListGroupItem>
        </ListGroup>
      )}
    </div>
  );
}

export default DropdownMenu;
