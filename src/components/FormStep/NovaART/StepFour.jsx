import { Button } from "react-bootstrap";
import { db } from "../../../firebase";
import React, { useState } from 'react';
import { addDoc, collection, getDocs
} from "firebase/firestore";

const StepFour = () => {
    const ref = collection(db, "Art")
    let [arts, setArts] = useState({
        usuario: ""
    });

    const inputs = (e) => setArts({ ...arts, [e.target.name]: e.target.value});
    
    async function listarArt() {
        console.log(ref);
        const query = await collection(db, "Art");

        const res = []
        console.log(query);
         //query.forEach((doc) => {  console.log(doc.id, " => ", doc.data());
            //res.push(doc.data().toString());
          
            //setArts(doc.data());
        //s})
        //console.log(res);
        //setArts(res);

    
    }
    async function listarArt() {
        try{
            const data = await getDocs(ref);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            alert(filteredData);
            console.log(filteredData);
        }catch(e){console.log(e)}
    }
    function adicionarArt(e){

        // Bloquear o recarregamento da página
        e.preventDefault();


        try{
            //DADO A SER INSERIDO NO BANCO DE DADOS - AQUI PRECISA SER ADICIONADO O OBJETO;
            addDoc(ref, {"usuario:" : arts});
            console.log("ART:Enviado");
//console.log("->"+ JSON.stringify(ref) + JSON.stringify(db));
        }catch(error){
            alert(error);
        }
    } 
    return (
        <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}><br></br><br></br>
            <input onChange={inputs} name="art" id="art" type="text" placeholder="Valor a ser adicionado no banco de dados"/>
            <button onClick={adicionarArt} style={{backgroundColor:'blue',color:'white'}}> Enviar </button> 
            <button onClick={listarArt} style={{backgroundColor:'blue',color:'white'}}> Listar </button>            
        </div>)

}
export default StepFour