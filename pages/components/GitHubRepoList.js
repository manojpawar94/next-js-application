import useSWR from 'swr'
import GitHubRepoCard from './GitHubRepoCard'

const fetcher = url => fetch(url).then(r => r.json())

export default function GitHubRepoList() {
    const { data, error } = useSWR('https://api.github.com/users/manojpawar94/repos', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    console.log(data)
    return (
        <div>
            <h2>My GitHub Repositories</h2>
            {
                data.map((github,index) => (
                    <GitHubRepoCard key={index} {...github} />
                ))
            }
        </div>
    )
}