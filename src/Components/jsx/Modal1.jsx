/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "../css/Modal1.css"
import axios from "axios";

function Modal1({ setOpenModal1, setOpenModal }) {
    const [firstname, setfirstname] = React.useState("")
    const [lastname, setlastname] = React.useState("")
    const [email, setemail] = React.useState("")
    const [password, setpassword] = React.useState("")
    const [datas, setData] = React.useState("")
    
    
      React.useEffect(() => {
        getUsers();
    },[])

    const getUsers = async () => {
        try {
            const { data } = await axios.get(" http://localhost:3031/users")
            console.log(data, datas)
            setData(data)
          
        }
        catch (err) {
            console.log(err)
        }


    }    


    const addUsers = (firstname,email,lastname,password) => {
        const payload = {
            firstname,
            lastname,
            email,
            password,
        }

        axios.post("http://localhost:3031/users", payload)
            .then(() => {
                return console.log(payload);
            })
            .catch((err) => {
                console.log(err)
            });
        
    }
    
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            setOpenModal1(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="title">
                    <h1>Welcome!</h1>
                    <p>Sign up to join Indiegogo.</p>
                </div>
                <div style={{display:"flex" , flexDirection:"column"}} className="body">
                    <p className="body-h9">First Name</p>
                    <input type="text" placeholder="Your First Name"
                    onChange={(e) => {setfirstname(e.target.value)}}></input>
                    <p className="body-h9">Last Name</p>
                    <input type="text" placeholder="Your Last Name" onChange={(e) => {setlastname(e.target.value)}}></input>
                    <p className="body-h9">Email</p>
                    <input type="email" placeholder="Your Email" onChange={(e) => {setemail(e.target.value)}}></input>
                    <p className="body-h9">Password</p>
                    <input type="password" placeholder="Your Password" onChange={(e) => {setpassword(e.target.value)}}></input>
                    <h4 className="body-h91">
                        <input type="checkbox" className="checkbox"></input>
                        Sign me up for the Indiegogo newsletter
                    </h4>
                </div>
                <div className="footer">
                    <button onClick={() => {
                        setOpenModal1(false);
                        setOpenModal(true);
                        addUsers(firstname,email,lastname,password)
                        }}>
                        CREATE ACCOUNT
                    </button>
                    <h2>OR</h2>
                    <button style={{ backgroundColor: "rgb(59,84,148)" }}>CONTINUE WITH FACEBOOK</button>
                    <br/>
                    <p className="permission- p">No post without your permission</p>
                    <h4>Already have an account?<span onClick={() => {
                        setOpenModal1(false);
                        setOpenModal(true)
                        }}>Log in</span></h4>
                </div>
            </div>
        </div>
    );
}

export default Modal1;