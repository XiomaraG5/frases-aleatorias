
import axios from 'axios';
import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import endpoint from '../helpers/Urls';


const Caja = ()=>{

    const [frase, setFrase] = useState([]);

    const [mostrarfrase, setMostrarfrase] = useState({
        "id": "",
        "frase": "Siembras una acción cosechas un hábito. Siembras un hábito, cosechas un carácter. Siembras un carácter, cosechas un destino.",
        "Autor": "Anonimo"
    })
    

    useEffect(()=>{
        getData()
        
    },[])

    

    
   
    
    const getData = ()=>{
        axios.get(endpoint)
            .then(res=>{
                setFrase(res.data)
            })
            .catch(error =>{console.log(error)})
            
    };

    const Mostrar = ()=>{
       const mostrarItem = frase[Math.floor(Math.random()* frase.length)]
           setMostrarfrase ({
                        ...mostrarItem
                    }); 
               
    
    };

    const handleClick = ()=>{
        Mostrar()
    }

console.log(frase);

    return(
        <div className='contenedor'>
            <div id="quote-box">
                 <div id='quote-text'>
                    <i className="bi bi-lightbulb-fill"></i>
                    <p id="text">{mostrarfrase.frase}</p>
                    
                 </div>
                    <p  id="author"> - {mostrarfrase.Autor}</p>
            
                <div className='botones'>
                    <Link to={"https://twitter.com/Xiomara_G5"} id="tweet-quote" target="_blank" rel="noopener">
                    <i className="bi bi-twitter"></i>
                    </Link>
                    <button className='btn' onClick={handleClick }> Siguiente frase</button>
                </div>
            </div>
        </div>
    )


}

export default Caja