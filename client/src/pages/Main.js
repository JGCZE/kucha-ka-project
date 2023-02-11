import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Material from '../components/Material'

const Main = () => {
    const [materialy, setMaterialy] = useState([]);
    const [serverMessage, setServerMessage] = useState("")
    const [kliknutoUtivatelem, setKliknutoUtivatelem] = useState("")

    useEffect(() => {
        pridaniMaterialu()
       
    }, [])

    const pridaniMaterialu = async () => {
        setServerMessage("načítám data");
        const data = await fetch("http://localhost:5000/get-materials");
        const finalData = await data.json();
        const {msg, documents} = finalData
        setMaterialy(documents)
        setServerMessage(msg)
    }

    const kliknuto = (material) => {
        setKliknutoUtivatelem(material)
    }

    return (
        <div>
            {
                materialy.map((material, index) => {
                    return (
                        <Material eventklik={kliknuto} name={material.name} key={index} cislovporadi={index}/>
                    )
                })    
            }
            
            <div className="msg">{serverMessage}</div>
            {kliknutoUtivatelem}
        </div>
    )
}

export default Main
