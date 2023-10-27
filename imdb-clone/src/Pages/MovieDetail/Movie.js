import React,{useState, useEffect} from "react";
import "./Movie.css";
import { useParams } from "react-router-dom";
const Movie = () =>{
    const[currentMovieDetail,setMovie]= useState();
    const{ id  }= useParams();
    useEffect(()=>{
        getData(
            window.scrollTo(0,0)
        )
    },[])
    const getData = ()=>{
        fetch('https://api.themoviedb.org/3/movie/${id}?api_key=c15c8e090ac80bf1d27f81be556b30a9&language=en-US')
        .then(res =>res.json())
        .then(data=> setMovie(data))
    }
}
export default Movie