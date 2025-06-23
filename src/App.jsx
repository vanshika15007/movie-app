import React, { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import MovieComponents from "./components/MovieComponents";
import MovieInfoComponent from "./components/MovieInfoComponent";
export const API_KEY = "9961bb9a";

// Add new Google Fonts
const bebasFont = `'Bebas Neue', sans-serif`;
const montserratFont = `'Montserrat', 'Josefin Sans', sans-serif`;

// Gradient background for the app
const fadeInApp = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #f7f8fa 0%, #e3e6f3 100%);
  animation: ${fadeInApp} 1s ease;
`;

// Enhanced header
const Header = styled.div`
  background: linear-gradient(90deg, #232526 0%, #414345 100%);
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 18px 10px 10px 10px;
  font-size: 28px;
  font-weight: bold;
  box-shadow: 0 3px 16px 0 #2228;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    font-size: 22px;
    padding: 14px 10px 10px 10px;
  }
`;
const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: ${bebasFont};
  font-size: 2.2rem;
  letter-spacing: 2px;
  animation: appNameFadeIn 1.2s cubic-bezier(0.23, 1, 0.32, 1);
  @keyframes appNameFadeIn {
    from { opacity: 0; transform: translateY(-30px) scale(0.9); }
    to { opacity: 1; transform: none; }
  }
`;
const MovieImage = styled.img`
  width: 54px;
  height: 54px;
  margin: 10px 18px 10px 0;
  border-radius: 12px;
  box-shadow: 0 2px 8px #0002;
  background: #fff;
`;

// Enhanced SearchBox
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  background-color: white;
  border-radius: 20px;
  margin-left: 20px;
  width: 50%;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 12px #0001;
  transition: box-shadow 0.3s;
  &:focus-within {
    box-shadow: 0 4px 24px #3498db44;
    border: 1.5px solid #3498db;
  }
  @media (max-width: 768px) {
    width: 90%;
    margin-left: 0;
  }
`;
const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 10px;
`;

const SearchInput = styled.input`
  flex: 1;
  color: black;
  font-size: 17px;
  font-family: ${montserratFont};
  font-weight: 500;
  border: none;
  outline: none;
  background: transparent;
`;

// Welcome section with background illustration
const WelcomeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  margin-bottom: -32px;
  animation: fadeInWelcome 1.2s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
  z-index: 1;
  @keyframes fadeInWelcome {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: none; }
  }
`;
const WelcomeBg = styled.div`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: 420px;
  height: 180px;
  background: url('https://cdn.pixabay.com/photo/2013/07/12/13/58/film-147882_1280.png') center/contain no-repeat;
  opacity: 0.08;
  z-index: 0;
  pointer-events: none;
  @media (max-width: 600px) {
    width: 90vw;
    height: 100px;
  }
`;
const WelcomeTitle = styled.h2`
  color: #232526;
  font-family: ${bebasFont};
  font-size: 2.3rem;
  font-weight: 700;
  margin-bottom: 8px;
  letter-spacing: 1.5px;
  z-index: 1;
`;
const WelcomeDesc = styled.p`
  color: #555;
  font-family: ${montserratFont};
  font-size: 1.1rem;
  max-width: 480px;
  text-align: center;
  margin: 0;
  z-index: 1;
`;

// Footer
const Footer = styled.footer`
  width: 100%;
  background: linear-gradient(90deg, #232526 0%, #414345 100%);
  color: #fff;
  text-align: center;
  padding: 18px 0 10px 0;
  font-size: 1rem;
  font-family: ${montserratFont};
  letter-spacing: 0.5px;
  margin-top: auto;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  box-shadow: 0 -2px 12px #2222;
`;

const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 24px;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    padding: 20px;
    gap: 16px;
  }
`;

const PlaceholderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 100px 0;
`;
const PlaceholderImg = styled.img`
  width: 120px;
  height: 120px;
  opacity: 0.5;
  margin-bottom: 16px;
`;
const PlaceholderText = styled.div`
  color: #aaa;
  font-size: 1.2rem;
  text-align: center;
`;
const Message = styled.div`
  margin: 150px auto;
  color: #888;
  font-size: 1.2rem;
  text-align: center;
`;
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const Spinner = styled.div`
  border: 6px solid #f3f3f3;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  animation: ${spin} 1s linear infinite;
  margin: 120px auto;
`;
const FadeInContainer = styled.div`
  animation: fadeIn 0.7s ease;
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: none; }
  }
`;
function App() {
  const [searchQuery, updateSearchQuery] = useState("");
  const [timeoutId, updateTimeoutId] = useState();
  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const descriptionRef = useRef(null);

  const handleMovieSelect = (movieId) => {
    onMovieSelect(movieId);
    setTimeout(() => {
      if (descriptionRef.current) {
        descriptionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100); // Wait for the component to render
  };

  const fetchData = async (searchString) => {
    if (!searchString || searchString.trim().length < 2) {
      updateMovieList([]);
      setError("");
      setLoading(false);
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
      );
      if (response.data.Response === "True" && response.data.Search) {
        updateMovieList(response.data.Search);
        setError("");
      } else {
        updateMovieList([]);
        setError(response.data.Error || "No movies found.");
      }
    } catch (err) {
      updateMovieList([]);
      setError("Failed to fetch movies. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    updateSearchQuery(event.target.value);
    setError("");
    setLoading(false);
    const value = event.target.value;
    if (!value || value.trim().length < 2) {
      updateMovieList([]);
      return;
    }
    const timeout = setTimeout(() => fetchData(value), 500);
    updateTimeoutId(timeout);
  };
  const getPoster = (poster) =>
    poster && poster !== "N/A"
      ? poster
      : "https://freemiumicons.com/wp-content/uploads/2023/06/action-movie-icon-1.png";
  const showWelcome = !searchQuery.trim() && !loading && !error && !movieList.length && !selectedMovie;
  return (
    <Container>
      <Header>
        <AppName>
          <MovieImage src="https://th.bing.com/th/id/OIP.19eOcs_L9HWel9NYlfZZrwHaHa?rs=1&pid=ImgDetMain" alt="CineScope Logo" />
          CineScope
        </AppName>
        <SearchBox>
          <SearchIcon src="https://www.freeiconspng.com/uploads/search-icon-png-21.png" alt="Search Icon" />
          <SearchInput
            placeholder="Search movie"
            value={searchQuery}
            onChange={onTextChange}
            aria-label="Search movie"
          />
        </SearchBox>
      </Header>
      {showWelcome && (
        <WelcomeSection>
          <WelcomeBg />
          <WelcomeTitle>Welcome to CineScope 🎬</WelcomeTitle>
          <WelcomeDesc>
            Discover movies from around the world. Start by typing a movie name above to search and explore details, ratings, and more!
          </WelcomeDesc>
        </WelcomeSection>
      )}
      {selectedMovie && (
        <div ref={descriptionRef}>
          <MovieInfoComponent
            selectedMovie={selectedMovie}
            onMovieSelect={onMovieSelect}
          />
        </div>
      )}
      <MovieListContainer>
        {loading ? (
          <Spinner />
        ) : error ? (
          <Message>{error}</Message>
        ) : movieList?.length ? (
          movieList.map((movie, index) => (
            <FadeInContainer key={index}>
              <MovieComponents
                movie={{ ...movie, Poster: getPoster(movie.Poster) }}
                onMovieSelect={handleMovieSelect}
              />
            </FadeInContainer>
          ))
        ) : searchQuery.trim().length >= 2 ? (
          <PlaceholderWrapper>
            <PlaceholderImg src="https://freemiumicons.com/wp-content/uploads/2023/06/action-movie-icon-1.png" alt="No movies found" />
            <PlaceholderText>No movies found.</PlaceholderText>
          </PlaceholderWrapper>
        ) : (
          <PlaceholderWrapper>
            <PlaceholderImg src="https://freemiumicons.com/wp-content/uploads/2023/06/action-movie-icon-1.png" alt="Placeholder" />
            <PlaceholderText>Start typing to search for movies!</PlaceholderText>
          </PlaceholderWrapper>
        )}
      </MovieListContainer>
      <Footer>
        Made with ❤️ by Vanshika Sharma &copy; 2025
      </Footer>
    </Container>
  );
}

export default App;
