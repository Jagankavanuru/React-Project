import Footer from "../pages/Footer";
import Navbar from "../pages/Navbar";

function UHome(){
    return(
         <>
            <div>
                <Navbar />
                <h1 className="text-center display-2 text-primary">User Home</h1>
            </div>
            <Footer/>
        </>
    )
}
export default UHome;