//Author: MAHBUB

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

export default function Home() {
    return (
        <div className="home">
            <Navbar />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                <h1>HOME PAGE</h1>
            </div>

            <Footer />
        </div>
    )
}