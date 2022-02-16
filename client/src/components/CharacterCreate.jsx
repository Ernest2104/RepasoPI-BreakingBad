import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postCharacter, getOccupations } from '../actions/index.js'
import { useDispatch, useSelector } from "react-redux";

export default function CharacterCreate(){
    const dispatch = useDispatch()
    const history = useHistory()
    const occupations = useSelector((state) => state.occupations)

    const [input, setInput] = useState({
        name:"",
        nickname:"",
        birthday:"",
        status:"",
        occupation:[]
    })

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        console.log(input)
    }

    function handleCheck(e){
        if (e.target.checked){
            setInput({
                ...input,
                status: e.target.value
            })
        }
    }

    function handleSelect(e){
        setInput({
            ...input,
            occupation: [...input.occupation, e.target.value]
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(input)
        dispatch(postCharacter(input))
        alert("Personaje creado!!")
        setInput({
            name:"",
            nickname:"",
            birthday:"",
            status:"",
            occupation:[]
        })
        history.push('/home')
    }
    
    function handleDelete(el){
        setInput({
            ...input,
            occupation: input.occupation.filter(oc => oc !== el)
        })
    }

    useEffect(() => {
        dispatch(getOccupations())
    }, []);

    return (
        <div>
            <Link to='/home'><button>Volver a Home</button></Link>
            <h1>Crea tu personaje</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label>Nombre:</label>
                    <input type='text' value={input.name} name ='name' onChange={handleChange}/>
                </div>
                <div>           
                    <label>Nickname:</label>
                    <input type='text' value={input.nickname} name ='nickname' onChange={handleChange}/>
                </div>
                <div>
                    <label>Birthday:</label>
                    <input type='text' value={input.birthday} name ='birthday' onChange={handleChange}/>
                </div>
                <div>
                    <label>Image:</label>
                    <input type='text' value={input.image} name ='image' onChange={handleChange}/>
                </div>
                <div>
                    <label>Status: </label>
                    <label>Alive
                        <input type='checkbox' value='Alive' name ='Alive' onChange={e => handleCheck(e)}/>
                    </label>
                    <label>Deceased
                        <input type='checkbox' value='Deceased' name ='Deceased' onChange={e => handleCheck(e)}/>
                    </label>
                    <label>Unknown
                        <input type='checkbox' value='Unknown' name ='Unknown' onChange={e => handleCheck(e)}/>
                    </label>
                    <label>Presumed Dead
                        <input type='checkbox' value='Presumed Dead' name ='Presumed Dead' onChange={e => handleCheck(e)}/>
                    </label>
                </div>
                <select onChange={(e) => handleSelect(e)}>
                    {occupations.map(oc => (
                        <option value={oc.name}>{oc.name}</option>
                    ))}
                </select>
                <ul>
                    <li>
                        {input.occupation.map(oc => oc + " ,")}
                    </li>
                </ul>
                <button type="submit">Crear personaje</button>
            </form>
            {input.occupation.map(oc => 
                <div>
                    <p>{oc}</p>
                    <button onClick={() => handleDelete(oc)}>x</button>
                </div>
            )}
        </div>
    )
}
