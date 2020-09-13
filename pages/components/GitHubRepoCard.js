export default function GitHubRepoCard(props) {
    console.log(props);
    return (
        <div className={`card`}>
            <a href={props.html_url}><h3>{props.name}</h3></a>
            <p>{props.description}</p>
        </div>
    )
}