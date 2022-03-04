import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    margin-top:30px;
    margin-bottom: 10px;
    padding: 5px 25px;
`;
const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;
const Title = styled.h1`
    color:${(props)=>props.theme.accentColor};
    font-size:48px;
`

const TeamList = styled.ul``;

const Team = styled.li`
    background-color:  white;
    color:${(props)=>props.theme.mainColor};
    margin-bottom: 10px;
    border-radius: 15px;
    padding:20px;
`;

const teams = [
    {
        id:"FC WONDER WOMAN",
        name:"FC WONDER WOMAN",
        emblem:"#",
        mainColor:"#7B0411"

    }, 
    {
        id:"FC ANACONDA",
        name:"FC ANACONDA",
        emblem:"#",
        mainColor:"#000099"
    }, 
    {
        id:"FC ACTIONISTAR",
        name:"FC ACTIONISTAR",
        emblem:"#",
        mainColor:"#FF8C00"
    },
]

function Teams(){
    return(
        <Container>
            <Header>
                <Title>Goal Hit Girls</Title>
            </Header>
            <TeamList>
                {teams.map((team)=>(
                    <Team key={team.id}>
                        <Link to={`/${team.id}`}>{team.name} &rarr;</Link>
                    </Team>
                ))}
            </TeamList>
        </Container>
    );
}

export default Teams;