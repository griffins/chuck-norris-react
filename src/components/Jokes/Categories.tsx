import { Category } from "./Category";

export const Categories = (categories: Array<string>) => {
    return (
        <div className="Jokes">
            <ul className="Categories">
                <li><h4>Joke Categories</h4></li>
                {Object.values(categories).map((category: string) => (
                    <Category key={category} title={category}/>
                ))}
            </ul>
        </div>
    )
}