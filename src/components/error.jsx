import { Link } from "react-router-dom";
import Nav from "./Nav/Nav";
import "./error.css"
export default function Error(){
    return (
        <>
        <div className="error">
             <h1>Page not found</h1>
        <Link to="/"><p>Back to home</p></Link>
        </div>
       
        </>
    )
}