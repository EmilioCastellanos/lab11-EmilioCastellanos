import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function NewTownPage() {
    return (
        <>
            <h1>New Town</h1>
            <h5>New Town is a vibrant, modern city known for its innovative architecture, green spaces, and thriving cultural scene.</h5>
            <Button as={Link} to="sunset-pier">Sunset Pier</Button>
            <Button as={Link} to="marine-discovery-center">Marine Discovery Center</Button>
            <Outlet/>
        </>
    );
}

export default NewTownPage;