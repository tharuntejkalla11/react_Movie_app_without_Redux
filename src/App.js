import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import SortbyComponent from './Components/SortbyComponent';
import React, { useState } from 'react';
import Axios from "axios";
import styled from "styled-components";
import { Button } from 'react-bootstrap'
import MovieInfoComponent from './Components/MovieInfoComponent';
import MovieComponent from './Components/MovieComponent';


export const API_KEY = "49e9df05";

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 10px;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  background-color: white;
  opacity:80%; 
`;
const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
`;

const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* padding: 30px; */
  gap: 25px;
  justify-content: space-evenly;
  /*background-color:rgb(245, 195, 207);*/
  background-color:black;
`;
const Placeholder = styled.div`
  background-color: black;
  color:rgb(157, 151, 151);
  height: 50rem;
  opacity: 100%;
`;
function App() {
  const [searchQuery, updateSearchQuery] = useState("");

  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();

  const [timeoutId, updateTimeoutId] = useState();

  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`);
    updateMovieList(response.data.Search);
  };

  const onTextChange = (e) => {
    onMovieSelect("")
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };

  return (
    <>
      <div className='Container'>
        <div className="Header">
          <div className='BackGroundImage' style={{ backgroundImage: `url("https://miro.medium.com/max/1400/1*5lyavS59mazOFnb55Z6znQ.png")` }}>Hello
            <img className='NetFlixLogo' src="https://cdn.vox-cdn.com/thumbor/AwKSiDyDnwy_qoVdLPyoRPUPo00=/39x0:3111x2048/1400x1400/filters:focal(39x0:3111x2048):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png" alt="" />

            <div className="search-box">
              <SearchBox>
                <SearchInput
                  placeholder="Search Movie"
                  value={searchQuery}
                  onChange={onTextChange}
                />
              </SearchBox>
              <Button id='searchButtonId' variant="danger">Search</Button>
            </div>
          </div>
        </div>
        {/* sort by div */}
        <div class="sortbydiv">
          <h4 id='MoviesFoundText'>Variable Movies Found</h4>
          <div className='divWithSortBy'>
            <h4 id="SortByText">Sort By</h4>
            <Button id='buttonsInSortBy1' variant="danger">Release Date</Button>
            <Button id='buttonsInSortBy2' variant="danger">Rating</Button>
          </div>
        </div>
        {/* Bottom Container */}
        {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect} />}

        <MovieListContainer>
          {movieList?.length ? (
            movieList.map((movie, index) => (
              <MovieComponent
                key={index}
                movie={movie}
                onMovieSelect={onMovieSelect}
              />
            ))
          ) : (
            <Placeholder>
              <h1>Search For Something</h1>
            </Placeholder>
          )}
        </MovieListContainer>
      </div >
    </>
  );
}

export default App;
