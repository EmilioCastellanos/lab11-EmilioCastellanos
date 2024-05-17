import RiverCity from "./cityCards/riverCity";
import CoastalTown from "./cityCards/coastalTown";
import Metroville from "./cityCards/metroville";
import NewTown from "./cityCards/newTown";
import '../App.css';

function Main() {
    return (
        <div id='Main'>
            <RiverCity/>
            <Metroville/>
            <CoastalTown/>
            <NewTown/>
        </div>
    )
}
export default Main;