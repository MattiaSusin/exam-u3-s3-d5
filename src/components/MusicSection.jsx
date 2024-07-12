import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux'; 
import AlbumMusic from './AlbumMusic';

const MusicSection = ({ title, artist, sectionId }) => {
  const songs = useSelector(state => state.search.songs[artist] || []);

  if (!songs.length) {
    return (
      <Container id={sectionId} className="my-4">
        <h2>{title}</h2>
        <p>No songs available for {artist}.</p>
      </Container>
    );
  }

  return (
    <Container id={sectionId} className="my-4">
      <h2>{title}</h2>
      <Row className="imgLinks py-3">
        {songs.slice(0, 4).map(song => (
          <Col key={song.id} xs={12} sm={6} lg={3}>
            <AlbumMusic song={song} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MusicSection;
