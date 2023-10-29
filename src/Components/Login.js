import React, { useState } from "react";
import { FormGroup, Form, Label, Input, Button } from "reactstrap";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [usera, setUsera] = useState("rahul");
    const [passa, setPassa] = useState("rahul");
    const [userb, setUserb] = useState("shubham");
    const [passb, setPassb] = useState("shubham");
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submit")
        console.log(user, pass)
        if((user===usera && pass===passa) || (user===userb && pass===passb)){
            localStorage.setItem('user',user)
            localStorage.setItem('isLoggedIn', 'true')
            navigate('/dashboard');
            window.location.reload(false); 
        } 
    }

    const handleEmail = (e) => {
        setUser(e.target.value)
    }

    const handlePassword = (e) => {
        setPass(e.target.value)
    }

    return (
        <div className="login-container">
            <h1 className="login-title">Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="exampleUser">User</Label>
                    <Input
                        id="exampleUser"
                        name="user"
                        placeholder="User"
                        type="user"
                        onChange={handleEmail}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="Password"
                        type="password"
                        onChange={handlePassword}
                    />
                </FormGroup>
                <Button color="primary" className="login-button">Submit</Button>
            </Form>
        </div>
    );
}

export default Login;
