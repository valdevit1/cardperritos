import Badge from "react-bootstrap/Badge";

function Tags(props) {
  return <Badge bg={props.color}>{props.nombre}</Badge>;
}

export default Tags;
