import { useSelector } from "react-redux";
import { Container, Row, Col, ProgressBar, Image } from "react-bootstrap";
import { Heart, HeartFill } from 'react-bootstrap-icons'; 
import shuffleIcon from "../assets/playerbuttons/shuffle.png";
import prevIcon from "../assets/playerbuttons/prev.png";
import playIcon from "../assets/playerbuttons/play.png";
import nextIcon from "../assets/playerbuttons/next.png";
import repeatIcon from "../assets/playerbuttons/repeat.png";

const selectCurrentSong = state => state.player.currentSong;    //! Selezionatore per lo stato della canzone corrente

const MusicBar = () => {
  const currentSong = useSelector(selectCurrentSong);
  const likes = useSelector(state => state.likes);
  const isLiked = currentSong ? likes.some(like => like.id === currentSong.id) : false;

  if (!currentSong) {
    return (
      <Container fluid className="pageBG fixed-bottom bg-container pt-1">
        <Row className="h-100">
          <Col lg={10} className="offset-lg-2">
            <p className="text-white text-center pLoading">
              Select your favourite song . . .
            </p>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2">
          <Row className="h-100 align-items-center">
            <Col xs={6} md={3} className="col-12 dettailsSong text-white text-center d-flex mb-3">
              <Image src={currentSong.artist.picture_small} alt="Artist" className="artist-image mt-2 col-2" />
              <div className="ms-2 mt-4 contTextArt col-8">
                <div className="separated">
                <p className="mb-0 textArtist">{currentSong.artist.name}</p>
                <p className="mb-0">{currentSong.album.title}</p>
                <div className="mt-2 col-2">
                </div>
                </div>
                  {isLiked ? <HeartFill className="ml-3" /> : <Heart className="ml-3" />}
              </div>
            </Col>
            <Col xs={6} md={5} className="playerControls text-center">
              <p className="text-white">
                {currentSong.title} by {currentSong.artist.name}
              </p>
              <div className="d-flex justify-content-center align-items-center">
                <Image src={shuffleIcon} alt="shuffle" className="mx-3" />
                <Image src={prevIcon} alt="prev" className="mx-3" />
                <Image src={playIcon} alt="play" className="mx-3" />
                <Image src={nextIcon} alt="next" className="mx-3" />
                <Image src={repeatIcon} alt="repeat" className="mx-3"/>
              </div>
              <ProgressBar now={60} className="mt-3"/>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MusicBar;
