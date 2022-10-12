import axios from "axios";

import { API_URL } from "./URL";

export function getCompanies(setCompaniesListState){
    const promise = axios.get(API_URL+"/company");
    promise.then(res => {
        setCompaniesListState(res.data)
    }).catch(erro => console.log(erro));
};

export function getUnits(setUnitsListState, data){
    const promise = axios.post(API_URL+"/units", data);
    promise.then(res => {
        setUnitsListState(res.data);
    }).catch(erro => console.log(erro));
};

export function getById(collection, documentId, setState){
    const promise = axios.get(`${API_URL}/${collection}/${documentId}`);
    promise.then(res => setState(res.data)).catch(erro => console.log(erro))
    return
};