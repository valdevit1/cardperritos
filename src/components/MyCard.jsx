import Card from "react-bootstrap/card";
import Tags from "./Tags.jsx";

function MyCard(props) {
  return (
    <Card style={{ width: "18rem", marginRight: "1rem" }}>
      <Card.Img src={props.imagen} />
      <Card.Body>
        <Card.Title>{props.nombre}</Card.Title>
        <Card.Text>{props.descripcion}</Card.Text>
        <Tags color={props.tagcolor} nombre={props.tagNombre} />
      </Card.Body>
    </Card>
  );
}

export default MyCard;
