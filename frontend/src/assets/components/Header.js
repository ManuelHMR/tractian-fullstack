import styled from "styled-components";

export default function Header(){
    return(
        <Container>
            <nav>
                <a href="https://tractian.com/">
                    <img src="https://lh6.googleusercontent.com/yCq1MQecmfRpyJFVF_5HJP4hDVSPiaUSly5ZKAhm1V9uRN43JYwdvVTlyYJzxLtr9zcGzLUOYohL0oxCqUTGytKKxBG26ocRfg9IMo6XwwjsSBmf-IJ7aE9YMarH1TT4EZJSSae_1hviehXuzO1oDm75sBRwKWtObHodbD45nMN-d5gi-w4QBNE=s800" alt="tractian"/>
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
            height: 100px;
        }
    }
`
