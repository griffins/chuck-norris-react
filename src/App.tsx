import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from './logo.png';
import './App.css';
import { useEffect } from "react";
import { Jokes } from './components/Jokes';
import { useSelector, useDispatch } from 'react-redux'
import { fetchCategories } from "./store/actions";
import { JokesInterface } from "./interfaces";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch]);

    const data = useSelector((data: any) => {
        return data.jokes as JokesInterface
    });

    const spinner = data.isLoading && (<div className="loader">Loading...</div>);

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="SovTech-logo" alt="logo"/>
                    <h4>SovTech / api.chucknorris.io</h4>
                    {spinner}
                </header>
                <Switch>
                    <Route path="/:category?" children={(<Jokes {...data}/>)}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
