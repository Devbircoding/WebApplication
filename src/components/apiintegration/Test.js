import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function BasicExample(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Img variant="bottom" src={props.img} />
        <Card.Text>{props.desc}</Card.Text>
        <Link to={props.link}>
          <Button variant="primary">Click</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
