import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import Header from "../../assets/components/Header";
import UnitsList from "../../assets/components/UnitsList";
import { getUnits } from "../../assets/functions";
import { API_URL } from "../../assets/URL";
import Button from "../../assets/components/Button";

export default function UnitsPage(){

    let { companyId } = useParams();

    const [ unitsListState, setUnitsListState ] = useState([]);
    const [ buttonLoading, setButtonLoading ] = useState(false);
    const [ newUnit, setNewUnit ] = useState({
        name: "",
        companyId: Number(companyId)
    })

    useEffect(() => {
        getUnits(setUnitsListState, {companyId: Number(companyId)});
    }, []);

    function registerUnit(){
        setButtonLoading(true)
        const promise = axios.post(API_URL+"/unit", newUnit)
        promise.then(res => {
            setButtonLoading(false)
            setNewUnit("");
            getUnits(setUnitsListState);
        }).catch(() => setButtonLoading(false));
    };

    return(
        <Container>
            <Header/>
            <main>
            <h2>Register a company:</h2>
                <div className="register">
                    <form onSubmit={() => registerUnit()}>
                        <input
                            type="name"
                            placeholder="units`s name"
                            onChange={(e) => setNewUnit({...newUnit, name: e.target.value})}
                        />
                        <Button buttonLoading={buttonLoading} />
                    </form>
                </div>
            <h2>Registered units:</h2>
                <UnitsList unitsListState={unitsListState} />
            </main>
        </Container>
    )
};

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    display: flex;
    justify-content: center;
    main{
        width: 1000px;
        margin-top: 120px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .register{
        width: 500px;
        margin-bottom: 20px;
        form{
            display: flex;
            flex-direction: column;
            align-items: center;
            button{
                width: 200px;
                height: 30px;
                margin-bottom: 5px;
            }
            input{
                height: 30px;
                width: 500px;
                margin-bottom: 10px;
                margin-top: 10px;
            }
        }
    }
    button{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 65px;
            width: 500px;
            background-color: lightblue;
            border: none;
            font-size: 15px;
            color: #ffffff;
            border-radius: 5px;
            margin-bottom: 15px;
        }
    button:hover{
        cursor: pointer;
    }    
    .loading {
        animation: is-rotating 1s infinite;
        width: 25px;
        height: 25px;
        border: 4px solid lightblue;
        border-top-color: #ffffff;
        border-radius: 50%;
        margin: 15px;
    }
    @keyframes is-rotating {
        to {
            transform: rotate(1turn);
        }
    }
`