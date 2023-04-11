export default function UserInfo(props){
    const userDetail = props.userDetail;
    
    return(
        <>
            <div className="card" style={{width: '20rem' , margin:20}}>
                <img className="card-img-top" src={userDetail.avatar_url} alt="Character card"/>
                <div className="card-body">
                    <h5 className="card-title">{userDetail.name}</h5>
                    <h5 className="card-title">Present Company: {userDetail.company}</h5>
                    <h5 className="card-title">Present Location: {userDetail.location}</h5>
                    <h5 className="card-title">UserId: {userDetail.login}</h5>
                </div>
                <button onClick={props.showrepoDetails} >Show repo details</button>

            </div>
        </>
    )
}