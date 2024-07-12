import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong, toggleLike } from "../redux/actions";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AlbumMusic = ({ song }) => {
  const dispatch = useDispatch();
  const likes = useSelector((state) => state.likes);
  const isLiked = likes.some((like) => like.id === song.id);

  const handlePlay = () => {
    dispatch(setCurrentSong(song));
  };

  const handleLike = () => {
    dispatch(toggleLike(song));
  };

  return (
    <Card className="text-center cardAlbum">
      <Card.Img
        variant="top"
        className="imgCard"
        src={song.album.cover_medium}
        alt="track"
      />
      <Card.Body className="bodyCard">
        <Card.Text className="textCard">
          Track: "{song.title}"<br />
          Artist: {song.artist.name}
        </Card.Text>
        <Button className="btnplay" variant="primary" onClick={handlePlay}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-play-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
          </svg>
        </Button>
        <Button
          variant="outline-secondary"
          onClick={handleLike}
          className="ml-2 btnLike"
        >
          {isLiked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
          )}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AlbumMusic;
