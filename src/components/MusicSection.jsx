import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSongs } from '../redux/actions';
import MusicSection from './MusicSection';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainSection = ({ searchQuery }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllSongs = async () => {
      try {
        await dispatch(fetchSongs('queen'));
        await dispatch(fetchSongs('katyperry'));
        await dispatch(fetchSongs('eminem'));
      } catch (error) {
        console.error("Error fetching songs: ", error);
      }
    };

    fetchAllSongs();
  }, [dispatch]);

  useEffect(() => {
    if (searchQuery) {
      dispatch(fetchSongs(searchQuery));
    }
  }, [dispatch, searchQuery]);

  return (
    <div className="mainPage col-md-9 offset-md-3">
      <Nav className="mainLinks d-none d-md-flex">
        <Nav.Link href="#">TRENDING</Nav.Link>
        <Nav.Link href="#">PODCAST</Nav.Link>
        <Nav.Link href="#">MOODS AND GENRES</Nav.Link>
        <Nav.Link href="#">NEW RELEASES</Nav.Link>
        <Nav.Link href="#">DISCOVER</Nav.Link>
      </Nav>
      {searchQuery && <MusicSection title="Search Results" artist={searchQuery} sectionId="searchSection" />}
      <MusicSection title="Rock Classics" artist="queen" sectionId="rockSection" />
      <MusicSection title="Pop Culture" artist="katyperry" sectionId="popSection" />
      <MusicSection title="#HipHop" artist="eminem" sectionId="hipHopSection" />
    </div>
  );
};

export default MainSection;
