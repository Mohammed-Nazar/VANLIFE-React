import { Outlet } from "react-router-dom"
import Nav from "../Nav/Nav"
import Footer from "../footer/footer"
import "./layout.css"

export default function Layout(){
    return (
        <>
        
        <Nav/>
        <div className="layout">
        <Outlet/>
        </div>
        <Footer/>
        </>
    )
}