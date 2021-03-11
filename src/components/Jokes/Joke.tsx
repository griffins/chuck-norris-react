import { JokeInterface } from "../../interfaces";

export const Joke = ({icon_url, value}: JokeInterface) => (<div>
    <img src={icon_url} alt="Chuck Norris"/>
    <h4>
        {value}
    </h4>
</div>);