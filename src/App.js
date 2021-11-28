import { renderRoutes } from 'react-router-config';
import routes from './router';
import './assets/styles/index.scss';
import StoreBusStation from './components/LocalStorage/StoreBusStation';
import { createContext, useContext, useState } from 'react';
import PosUserLocation from './components/Location/PosUserLocation';
import StoreBusRoute from './components/LocalStorage/StoreBusRoute';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


export const BusStationContext = createContext([]);
export const BusRouteContext = createContext([]);
export const UserLocationContext = createContext({ longitude: 121.5410178, latitude: 25.0208745 });
function App() {
  const [busStation, setBusStation] = useState([]);
  const [busRoute, setBusRoute] = useState([]);
  const [userLocation, setUserLocation] = useState(useContext(UserLocationContext));
  // console.log(busStation);
  // console.log('user location', userLocation);
  // console.log('near by bus station', getNearByBusStation(busStation, userLocation));
  // console.log('get bus estimated arrival', getBusRouteEstimatedArrival('Taipei', 'TPE10181'));
  return (
    <div className="App" >

      <PosUserLocation setUserLocation={setUserLocation} />
      <StoreBusStation setBusStation={setBusStation} />
      <StoreBusRoute setBusRoute={setBusRoute} />
      <UserLocationContext.Provider value={userLocation}>
        <BusStationContext.Provider value={busStation}>
          <BusRouteContext.Provider value={busRoute}>
            <div className='min-h-screen flex flex-col flex-nowrap' >
            <Header />
              {renderRoutes(routes)}
            <Footer/>
            </div>
          </BusRouteContext.Provider>
        </BusStationContext.Provider>
      </UserLocationContext.Provider>
    </div>
  );
}

export default App;
