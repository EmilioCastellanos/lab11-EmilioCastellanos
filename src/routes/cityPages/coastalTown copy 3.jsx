import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function RiverCityPage() {
    return (
        <>
            <h1>River City</h1>
            <h5>Famous for its riverside cafes and bohemian neighborhoods.</h5>
            <Button as={Link} to="sunset-pier">Sunset Pier</Button>
            <Button as={Link} to="marine-discovery-center">Marine Discovery Center</Button>
            <Outlet/>
        </>
    );
}

export default RiverCityPage;