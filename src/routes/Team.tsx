import { useParams } from "react-router-dom";

interface Params{
    teamId:string;
};

function Team(){
    const {teamId}=useParams<Params>();
    return(
        <h1>team name :{teamId}</h1>
    );
}

export default Team;