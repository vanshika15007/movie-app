import React from "react";
import styled from "styled-components";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 280px;
  box-shadow: 0 3px 10px 0 grey;
  cursor: pointer;
  background: #fff;
  border-radius: 12px;
  transition: box-shadow 0.3s, transform 0.2s;
  outline: none;

  &:hover, &:focus {
    box-shadow: 0 8px 24px 0 #3498db33;
    transform: translateY(-4px) scale(1.03);
    border: 1.5px solid #3498db;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 362px;
`;
const MovieName = styled.span`
font-size: 18px;
font-weight: 600;
color: black;
margin: 15px 0;
white-space:nowrap;
text-overflow: ellipsis;
over-flow: hidden;
`;
const InfoColoumn=styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;
const MovieInfo = styled.span`
    font-size: 16px;
    font-weight: 500;
    color:black;
    text-transform: capitalize;  
`;
const MovieComponents = (props) => {
  const{Title, Year, imdbID, Type, Poster }= props.movie;
  return (
    <MovieContainer onClick={() => props.onMovieSelect(imdbID)} tabIndex={0} aria-label={`Show details for ${Title}`}>
      <CoverImage src={Poster} alt={Title} />
      <MovieName>{Title}</MovieName>
      <InfoColoumn>
        <MovieInfo>year: {Year}</MovieInfo>
        <MovieInfo>type: {Type}</MovieInfo>
      </InfoColoumn>
    </MovieContainer>
  );
};
export default MovieComponents;
