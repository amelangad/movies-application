import React from 'react';
import { useState, useEffect, useContext } from 'react';
import Post from './Post';
import { MdFavorite } from "react-icons/md";
import { FaTrophy } from 'react-icons/Fa'
import { SearchContext } from './SearchContext.js';
import '../index.css'


const apiKey = '3aa1a549';
const url = `https://www.omdbapi.com/?apikey=${apiKey}&s`;


function MoviesList() {
    const { query, result, setResult, list, setList, setFavourite, setData} = useContext(SearchContext);

    function changeColor(e) {
        e.target.classList.toggle('red')
    }


    const searchMovies = async (props) => {
        try {
            const res = await fetch(`${url}=${query}`)
            const data = await res.json()
            await setResult(data.Search.map((item, id) => {
               setData(data);
                return <div key={id}
                    className="flex flex-col justify-center items-center gap-5 relative">
                    <Post
                        Id={id}
                        Title={item.Title}
                        Poster={item.Poster}
                        Year={item.Year}
                        Type={item.Type} />
                    <div className="flex flex-row justify-center gap-20 items-center bg-milky w-full h-20 rounded-[7px] absolute bottom-[20px]">
                        <label className="text-2xl relative checkbox">
                            <input type="checkbox" className="checked hidden"
                                onClick={() => list.includes(item.Title) ? setList(list.filter(el => el !== item.Title)) : setList(prevList => { return [...prevList, item.Title] })}>
                            </input>
                            <span className="checkbox">
                                <MdFavorite className="absolute bottom-0 left-0 cursor-pointer" />
                            </span></label>
                            <label className="text-2xl relative checkbox">
                            <input type="radio" className="checked hidden"
                                  onClick={() => setFavourite(item.Title)}>
                            </input>
                            <span className="">
                                <FaTrophy className="absolute bottom-0 left-0 cursor-pointer active:scale-150 duration-300" />
                            </span></label>
                    </div></div>
            }))
        }

        catch (err) { return setResult(result) }
    }

    useEffect(() => {
        searchMovies()
    }, [query, list]);


    return (
        <div className="flex flex-col w-full lg:w-full bg-transparent min-h-[100vh] relative">
            <div className=" w-full lg:w-3/4 px-10 lg:px-0 mt-[10%] flex-col">
                <ul
                    className="flex flex-wrap items-center justify-center lg:justify-start px-[10%] gap-10 text-white">
                    {result}
                </ul>
            </div>
        </div>

    )

}
export default MoviesList