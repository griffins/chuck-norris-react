import { Link } from "react-router-dom";
import { CategoryInterface } from "../../interfaces";

export const Category = ({title}: CategoryInterface) => (<li><Link to={title}>{title}</Link></li>);