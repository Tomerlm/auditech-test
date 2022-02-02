import './global.scss';
import EventGrid from './components/Event/EventGrid.jsx';
import Notification from './components/Notification/Notification.jsx';

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <Notification></Notification>
        <EventGrid></EventGrid>
      </div>
    </div>
  );
}

export default App;
