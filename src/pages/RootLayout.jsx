import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../shared/Footer"

const RootLayout = () => {
    return (
        <section className=" relative">
            <Navbar></Navbar>
            <main className="">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </section>
    )
}

export default RootLayout