import { useState } from "react"
import "./Campaign.css"
export default function FundingForm({handlesavenext2}) {
    const [flBkColor, setFlBkColor] = useState("#2a2a2a")
    const [flColor, setFlColor] = useState("#ffffff")
    const [fiBkColor, setFiBkColor] = useState("#ffffff")
    const [fiColor, setFiColor] = useState("#2a2a2a")
   
    return <div className="Basic2RightMainDiv2ndDiv">
        <h2>Funding Type</h2>
        <h4>Indiegogo offers two funding types: Flexible Funding (keep what you raise) and Fixed Funding (all-or-nothing). Learn about the differences and the pricing for each.</h4>
        <button onClick={() => {
            setFlBkColor("#2a2a2a")
            setFlColor("#ffffff")
            setFiBkColor("#ffffff")
            setFiColor("#2a2a2a")
        }} style={{ backgroundColor: `${flBkColor}`, color: `${flColor}`,marginTop:25 }} className="Flexibal">Flexibal Funding</button>
        <button onClick={() => {
            setFlBkColor("#ffffff")
            setFlColor("#2a2a2a")
            setFiBkColor("#2a2a2a")
            setFiColor("#ffffff")
        }} style={{ backgroundColor: `${fiBkColor}`, color: `${fiColor}`,marginBottom:30 }} className="Fixed">Fixed Funding</button>
        
        <h2>Campaign Goal Amount & Currency<span>*</span></h2>
        <h4>How much money would you like to raise for this campaign? A minimum goal of 500 in your currency is required. For help on choosing a goal amount, see this article. Make sure you keep in mind our fees and your reserved funds.</h4>
        <input className="Basic2RightMainDiv2ndDiv1stInput"  type="number" />
        <hr></hr>
        <h2>Bank Information</h2>
        <h4>Fill out your bank account information. We’ll only be able to send you funds if you’ve raised more than 100 in your currency after fees. Learn more about payouts.</h4>
        <h4 className="Basic2RightMainDiv2ndDivh4" >BSB Number<span>*</span></h4>
        <h5>Enter the 6-digit BSB number that identifies your bank.</h5>
        <input className="Basic2RightMainDiv2ndDiv2ndInput" type="number" />
        
        <h4 className="Basic2RightMainDiv2ndDiv2h4">Account Number<span>*</span></h4>
        <h5>Enter the account number where you want the funds deposited.</h5>
        <input className="Basic2RightMainDiv2ndDiv3rdInput"  type="number" />
        
        <h5>Retype account number.</h5>
        <input className="Basic2RightMainDiv2ndDiv3rdInput"  type="number" />
        <hr className="Basic2RightMainDiv2ndDivhr" ></hr>
        <h2>Customer Billing Statement<span>*</span></h2>
        <h4>This description will appear on your customer’s card statements. Use a unique name that is related to your project title, project purpose, or business. Avoid using only common terms or geographic locations, or else it may result in unsuccessful payments. The name can only contain letters, numbers, and spaces.</h4>
        <div className="Basic2RightMainDiv2ndDiv1stdiv" >
            <h3>INDIEGOGO*</h3>
            <input  type="text"/>
        </div>
        <hr></hr>
        <button className="Basic2RightMainDiv2ndDivButton" onClick={()=>{handlesavenext2()}} >Save & Next</button>
    </div>
}