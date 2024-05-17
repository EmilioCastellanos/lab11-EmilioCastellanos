import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';  

function NewTown() {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body> 
          <Card.Title>New Town</Card.Title>
          <Card.Text>
          New Town is a vibrant, modern city known for its innovative architecture, green spaces, and thriving cultural scene.
          </Card.Text>
          <Button as={Link} to="/new-town">Explore New Town</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default NewTown;