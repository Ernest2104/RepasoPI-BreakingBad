import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions/index.js";
import { useEffect } from "react";

export default function Detail(props){
    console.log(props)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDetail(props.match.params.id))
    },[])

    const myCharacter = useSelector(state => state.detail)

    return (
        <div>
        {
            myCharacter.length > 0 ?
            <div>
                <h1>Soy{myCharacter[0].name}</h1>
                <img src={myCharacter[0].img ? myCharacter[0].img :  myCharacter[0].image} alt="img not found"/>
                <h2>Status: {myCharacter[0].state}</h2>
                <p>Cumpleaños: {myCharacter[0].birdhday}</p>
                <h4>Ocupaciones: {!myCharacter[0].createdInDb ? myCharacter[0].occupation + ' ' : myCharacter[0].occupations.map(el => el.name + ' ')}</h4>
            </div> : <p>Loading...</p>
        }
        <Link to='/home'>
            <button>Volver</button>
        </Link>
        </div>
    )
}

