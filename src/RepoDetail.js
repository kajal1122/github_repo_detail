export default function RepoDetail(props){
    const repoDetail = props.repoDetail;
    return(
        <div className="card" style={{width: '28rem' , margin:10}}>
                <div className="card-body">
                    <h5 className="card-title">{repoDetail.name}</h5>
                    <p className="card-text"><a href={repoDetail.html_url} target="_blank" rel="noreferrer">{repoDetail.html_url}</a></p>
                </div>
        </div>
    )
}