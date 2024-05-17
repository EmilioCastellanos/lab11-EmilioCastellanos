import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';  

function Metroville() {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body> 
          <Card.Title>Metroville</Card.Title>
          <Card.Text>
            A srawling metropolitan area known for its high-tech industry and vibrant arts scene.
          </Card.Text>
          <Button as={Link} to="/metroville">Explore River City</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Metroville;