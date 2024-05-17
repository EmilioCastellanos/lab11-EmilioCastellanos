import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';  

function RiverCity() {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body> 
          <Card.Title>River City</Card.Title>
          <Card.Text>
            Famous for its riverside cafes and bohemian neighborhoods.
          </Card.Text>
          <Button as={Link} to="/river-city">Explore River City</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default RiverCity;