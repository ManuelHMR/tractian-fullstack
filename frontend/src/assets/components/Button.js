import styled from "styled-components";

export default function Button({buttonLoading}){
    return(
        <Container>
            {
                buttonLoading?
                    <button>
                            <div className='loading' />
                    </button>   
                :
                    <button id="button" type='submit'> REGISTER </button>
            }
        </Container>
    )
};

const Container = styled.div`
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