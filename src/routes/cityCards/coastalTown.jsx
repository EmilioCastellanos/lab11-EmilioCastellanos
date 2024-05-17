import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';  

function CoastalTown() {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body> 
          <Card.Title>Coastal Town</Card.Title>
          <Card.Text>
            A beautiful seaside town sith a laid-back atmosphere.
          </Card.Text>
          <Button as={Link} to="/coastal-town">Explore Coastal Town</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default CoastalTown;