import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import MainSection from './components/MainSection';
import MusicBar from './components/MusicBar';
import './App.css';
import Sidebar from './components/SideBar';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="App d-flex flex-column flex-md-row">
      <Sidebar setSearchQuery={setSearchQuery} />
      <Container fluid className="flex-grow-1">
        <MainSection searchQuery={searchQuery} />
      </Container>
      <MusicBar />
    </div>
  );
};

export default App;
