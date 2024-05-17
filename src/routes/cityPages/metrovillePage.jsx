import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function MetrovillePage() {
    return (
        <>
            <h1>Metroville</h1>
            <h5>A srawling metropolitan area known for its high-tech industry and vibrant arts scene.</h5>
            <Button as={Link} to="sunset-pier">Sunset Pier</Button>
            <Button as={Link} to="marine-discovery-center">Marine Discovery Center</Button>
            <Outlet/>
        </>
    );
}

export default MetrovillePage;