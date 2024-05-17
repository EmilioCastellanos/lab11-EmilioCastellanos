import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function CoastalTownPage() {
    return (
        <>
            <h1>Coastal Town</h1>
            <h5>A beautiful seaside town sith a laid-back atmosphere.</h5>
            <Button as={Link} to="sunset-pier">Sunset Pier</Button>
            <Button as={Link} to="marine-discovery-center">Marine Discovery Center</Button>
            <Outlet/>
        </>
    );
}

export default CoastalTownPage;