import styled from "styled-components";

export default function CompaniesList({companiesListState}){
    return(
        <Container>
            {
            companiesListState?
                <div className="companies-box">
                    {companiesListState.map((company, index) => (
                        <div key={index} className="box"> 
                            <h2>{company.name}</h2>
                        </div>
                    ))}
                </div>
            :
                <h3>No company registered</h3>
            }
        </Container>
    )
};

const Container = styled.div`
    .box{
        width: 500px;
        height: 50px;
        border-radius: 5px;
        background-color: lightblue;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid blue;
        margin-bottom: 10px;
        h2{
            font-size: 30px;
            color: white;
        }
    }
    .box:hover{
        background-color: blue;
    }
`