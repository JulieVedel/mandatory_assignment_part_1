import { useFetchRandomJokeQuery } from "../../app/jokeApi"

export default function Joke() {
    const {data, error, isFetching, refetch} = useFetchRandomJokeQuery()

    if (isFetching) return (<div id="joke">Loading...</div>)
    else if (error) return (<div id="joke">An error occured</div>)
    else return (
        <div id="joke">
            <p>{data.setup}</p>
            <p>- {data.delivery}</p>
            <button onClick={() => refetch()}>Ny joke</button>
        </div>
    )
}
