import axios from "axios";

import { API_URL } from "./URL";

export function getCompanies(setCompaniesListState){
    const promise = axios.get(API_URL+"/company")
    promise.then(res => {
        setCompaniesListState(res.data)
    }).catch(erro => console.log(erro));
};