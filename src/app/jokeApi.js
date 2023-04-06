import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const jokeApi = createApi({
    reducerPath: 'jokes',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://v2.jokeapi.dev/joke'
    }),
    endpoints(builder) {
        return {
            fetchRandomJoke: builder.query({
                query: () => {
                    return {
                        url: '/Any?type=twopart&safe-mode',
                        params: {
                        },
                        method: 'GET',
                    }
                }
            })
        }
    }
})

export const {useFetchRandomJokeQuery} = jokeApi;
export { jokeApi }