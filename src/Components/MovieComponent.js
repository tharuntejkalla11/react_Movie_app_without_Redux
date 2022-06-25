import React from "react";
import styled from "styled-components";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 280px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
  background-color:rgba(255,255,255,0.4);
  border-radius: 5px;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 362px;
`;
const MovieName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: white;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`;
const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
  color: black;

`;
const MovieComponent = (props) => {
    const { Title, Year, imdbID, Type, Poster, Genre
    } = props.movie;
    // console.log(props.movie);
    return (
        <MovieContainer
            onClick={() => {
                props.onMovieSelect(imdbID);
                window.scrollTo({ top: 0, behavior: "smooth" });
            }}
        >
            <CoverImage src={Poster} alt={Title} />
            <MovieName>{Title}</MovieName>
            <InfoColumn>
                <MovieInfo>Year : {Year}</MovieInfo>
                <MovieInfo>Type : {Type}</MovieInfo>
                {/* <MovieInfo>Genre : {Genre}</MovieInfo> */}
            </InfoColumn>
        </MovieContainer>
    );
};
export default MovieComponent;