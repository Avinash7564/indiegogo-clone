/* eslint-disable no-sequences */
import React from "react";
import "../css/Modal.css";
import axios from "axios";

function Modal({ setOpenModal, setOpenModal1, login, setLogin}) {
    const [datas,setData] = React.useState("")
    const [email, setemail] = React.useState("")
    const [password, setpassword] = React.useState("")

    let count = 0;

    React.useEffect(() => {
        getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const getUsers = async () => {
        try {
            const { data } = await axios.get(" http://localhost:3031/users")
            console.log(data)
            setData(data)
            console.log(datas)
            
            datas.map((item) => {
                        return (item.email===email && item.password === password)?count++:count
                    })
            if (count > 0) {
                setOpenModal(false)
                setLogin(true)
                console.log(login)
            }
            else {
                return alert("Invalid Username or Password")
            }
        }
        catch (err) {
            console.log(err)
        }


    }    


    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="title">
                    <h1>Welcome!</h1>
                    <p>Log in to continue</p>
                </div>
                <div style={{display:"flex" , flexDirection:"column"}} className="body">
                    <p className="body-h9">Email</p>
                    <input className="modal_input" type="text" placeholder="Your Email" onChange={(e) => {setemail(e.target.value)}}></input>
                    <p className="body-h9">Password</p>
                    <input className="modal_input" type="password" placeholder="Your Password" onChange={(e) => {setpassword(e.target.value)}}></input>
                    <p className="body-h91">forgot your password?</p>
                </div>
                <div className="footer">
                    <button onClick={() => {
                        getUsers()
                    }}>
                        LOG IN
                    </button>
                    <h2>OR</h2>
                    <button style={{ backgroundColor: "rgb(59,84,148)" }}>CONTINUE WITH FACEBOOK</button>
                    <br/>
                    <p>No Post without your permission</p>
                    <h4>New to Indigogo?<span onClick={() => {
                        setOpenModal(false);
                        setOpenModal1(true)
                        }}>Sign up</span></h4>
                </div>
            </div>
        </div>
    );
}

export default Modal;