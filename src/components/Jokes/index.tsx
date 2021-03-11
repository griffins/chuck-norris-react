import { useHistory, useParams } from "react-router-dom";
import { Joke } from "./Joke";
import { Categories } from "./Categories";
import { JokesInterface } from "../../interfaces";
import { useEffect } from "react";
import { fetchJoke } from "../../store/actions";
import { useDispatch } from "react-redux";

export const Jokes = (data: JokesInterface) => {
    const { category }: any = useParams();
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if (category) {
            dispatch(fetchJoke(category));
        } else if (data.categories) {
            history.push(`/${data.categories[0]}`)
        }
    }, [category, data.categories, history,dispatch])

    let empty = (<div className="Empty"><h1>Please wait</h1></div>);

    let joke = data.joke ? (
        <div className="Joke">
            <Joke {...data.joke}/>
        </div>
    ) : empty;

    if (data.categories) {
        const categories = data.categories;
        return (
            <div className="Jokes">
                <Categories {...categories}/>
                {joke}
            </div>
        )
    } else {
        return empty;
    }
}