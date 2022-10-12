import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

import { API_URL } from "../../assets/URL";
import Header from "../../assets/components/Header";
import CompaniesList from "../../assets/components/CompaniesList";
import { getCompanies } from "../../assets/functions";
import Button from "../../assets/components/Button";

export default function HomePage (){

    const [buttonLoading, setButtonLoading] = useState(false);
    const [companiesListState, setCompaniesListState] = useState([]);
    const [newCompany, setNewCompany] = useState({
        name: ""
    });


    useEffect(()=> {
        getCompanies(setCompaniesListState);
    }, []);

    function registerCompany(){
        setButtonLoading(true)
        const promise = axios.post(API_URL+"/company", newCompany)
        promise.then(res => {
            setButtonLoading(false)
            setNewCompany("");
            setTimeout(getCompanies(setCompaniesListState), 5000);
        }).catch(() => setButtonLoading(false));
    };

    return(
        <Conteiner>
            <Header/>
            <main>
                <h2>Register a company:</h2>
                <div className="register">
                    <form onSubmit={() => registerCompany()}>
                        <input
                            type="name"
                            placeholder="company`s name"
                            onChange={(e) => setNewCompany({...newCompany, name: e.target.value})}
                        />
                        <Button buttonLoading={buttonLoading} />
                    </form>
                </div>
                <h2>Registered companies:</h2>
                <CompaniesList companiesListState={companiesListState} />
            </main>
        </Conteiner>
    )
};

const Conteiner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
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
`