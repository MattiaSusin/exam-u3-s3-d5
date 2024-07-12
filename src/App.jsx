import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import MainSection from './components/MainSection';
import MusicBar from './components/MusicBar';
import './App.css';
import Sidebar from './components/SideBar';

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Container fluid>
        <MainSection />
      </Container>
      <MusicBar />
    </div>
  );
};

export default App;
