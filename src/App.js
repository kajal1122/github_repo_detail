import React,{useEffect, useState} from 'react';
import axios from 'axios';
import RepoDetails from './RepoDetails';
import UserInfo from './UserInfo';
function App() {
  const [githubProfile, setGithubProfile] = useState([]);
  const [showRepoDetails, setRepoDetails] = useState(false);
  useEffect(()=>{
    getGithubProfile();
  } ,[]);
  const getGithubProfile = ()=>{
    axios.get('https://api.github.com/users/kajal1122').then(
      response=>setGithubProfile(response.data)
    )
  }
  const getRepoDetails = ()=>{
     setRepoDetails(true);
  }
  return (
    <div>
       {showRepoDetails === false ? <UserInfo userDetail={githubProfile} showrepoDetails={getRepoDetails}/> : <RepoDetails />}
    </div>
  );
}

export default App;
