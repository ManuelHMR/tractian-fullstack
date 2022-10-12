import styled from "styled-components";

export default function Header(){
    return(
        <Container>
            <nav>
                <a href="https://tractian.com/">
                    <img src="https://imgs.search.brave.com/XaEMGTtv-2cdZTOQAWigF9DE0REagptw4KjRfcOck0M/rs:fit:648:142:1/g:ce/aHR0cHM6Ly9yZXZp/c3RhbWFudXRlbmNh/by5jb20uYnIvaW1h/Z2Vucy9ldmVudG9z/L3RyYWN0aWFuLnBu/Zw" alt="tractian"/>
                </a>
                

            </nav>
        </Container>
    )
};

const Container = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100px;
    border-bottom: 3px solid blue;
    display: flex;
    justify-content: center;
    nav{
        width: 1000px;
        img{
            height: 80px;
        }
    }
`
