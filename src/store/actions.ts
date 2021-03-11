import { ApolloClient, ApolloQueryResult, gql, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { JokeInterface } from "../interfaces";
import { setCategories, setInDeterminateProgress, setJoke } from "./reducers";


const GET_JOKE_CATEGORIES = gql`
    query {
        categories
    }
`;

const GET_JOKE_IN_CATEGORY = gql`
    query ($category: String!) {
      joke (category: $category){
        value
        icon_url
        categories
      }
    }
`;

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: process.env.REACT_APP_API_ENDPOINT || 'https://tprbz.sse.codesandbox.io',
    cache: new InMemoryCache()
});

export const fetchCategories = () => (dispatch: Function) => {
    client.query({ query: GET_JOKE_CATEGORIES }).then((result: ApolloQueryResult<any>) => {
        const categories: Array<string> = result.data.categories;
        dispatch(setCategories(categories));
    });
};

export const fetchJoke = (category: string) => (dispatch: Function) => {
        dispatch(setInDeterminateProgress(true));
        client.query({
            query: GET_JOKE_IN_CATEGORY,
            variables: { category },
        }).then((result: ApolloQueryResult<any>) => {
            const joke: JokeInterface = result.data.joke
            dispatch(setInDeterminateProgress(false));
            dispatch(setJoke(joke));
        });
};