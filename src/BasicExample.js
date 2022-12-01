import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { GrTrash, GrEdit } from "react-icons/gr";
import "./styles.css";
import { api } from "./api";
function getFooter() {
  var x = document.getElementById("footer");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function BasicExample({ first, last, dob, description }) {
  const [show, setShow] = useState("");

  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header onClick={getFooter}>
            {first} {last}
          </Accordion.Header>
          <Accordion.Body>{description}</Accordion.Body>
          <footer id="footer">
            <span className="trash"></span>
            <GrTrash
              onClick={() => (
                <Modal.Dialog>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <p>Text.</p>
                  </Modal.Body>

                  <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                  </Modal.Footer>
                </Modal.Dialog>
              )}
            />
            <span className="edit"></span>
            <GrEdit />
          </footer>
        </Accordion.Item>
      </Accordion>
      <input
        type="text"
        placeholder="search"
        value={show}
        onChange={(e) => setShow(e.target.value)}
      />
    </>
  );
}

export default BasicExample;
