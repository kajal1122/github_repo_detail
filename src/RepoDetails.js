import React,{useEffect, useState} from 'react';
import axios from 'axios';
import RepoDetail from './RepoDetail';

export default function RepoDetails(){
    const [repoDetails , setrepoDetails ] = useState([]);
    useEffect(()=>{
        getRepoDetails();
    }, []);

    const getRepoDetails = ()=>{
        axios.get('https://api.github.com/users/kajal1122/repos').then(
            response => setrepoDetails(response.data)
        )
    }
    return(
        <div>
            <div>{repoDetails.map(repo => <RepoDetail key={repo.id} repoDetail = {repo}/> )}</div>
        </div>
    )
}