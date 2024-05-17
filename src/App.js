import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Main from './routes/Main.jsx';
import ColorSchemesExample from "./routes/cityCards/navbar.jsx";
import Metroville from './routes/cityCards/metroville.jsx';
import RiverCity from "./routes/cityCards/riverCity.jsx";
import NewTown from './routes/cityCards/newTown.jsx';
import CoastalTownPage from './routes/cityPages/coastalTown.jsx';
import SunsetPier from './routes/features/sunsetPier.jsx';
import MarineDiscoveryCenter from './routes/features/marineDiscoveryCenter.jsx';
import MetrovillePage from './routes/cityPages/metrovillePage.jsx';
import NewTownPage from './routes/cityPages/newTown.jsx';
import RiverCityPage from './routes/cityPages/coastalTown copy 3.jsx';


function App() {
  return (
    <BrowserRouter>
      <ColorSchemesExample />
      <Routes>
        <Route path='/' element={<Main />} />

        <Route path='/metroville' element={<MetrovillePage />} >
          <Route path='sunset-pier' element={<SunsetPier />} />
          <Route path='marine-discovery-center' element={<MarineDiscoveryCenter />} />
        </Route>

        <Route path='/river-city' element={<RiverCityPage />} >
          <Route path='sunset-pier' element={<SunsetPier />} />
          <Route path='marine-discovery-center' element={<MarineDiscoveryCenter />} />
        </Route>

        <Route path='/coastal-town' element={<CoastalTownPage />}>
          <Route path='sunset-pier' element={<SunsetPier />} />
          <Route path='marine-discovery-center' element={<MarineDiscoveryCenter />} />
        </Route>

        <Route path='/new-town' element={<NewTownPage />} >
          <Route path='sunset-pier' element={<SunsetPier />} />
          <Route path='marine-discovery-center' element={<MarineDiscoveryCenter />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
