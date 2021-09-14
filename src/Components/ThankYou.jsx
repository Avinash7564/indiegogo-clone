import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./jsx/Navbar";

export default function ThankYou(){

    return(
    
    <>
    <Navbar />
    <div className="thankYouMainDiv">
        <div>
            <div className="thankyouHeader">
                <h1>Thank You for your Support.</h1>
            <h3>Your Transaction Number is <span id="trxn">10IN12335675649pW</span></h3>
            <p>For any query reach us : <span id="mail">help@indiegogo.com</span></p></div>
            <Link to="/">  <button id="backToHome">BACK TO HOMEPAGE</button> </Link>
        </div>
        
        
        
        
        
        
        
        
        
        
        </div>


        <Footer />
        </>
        )
}