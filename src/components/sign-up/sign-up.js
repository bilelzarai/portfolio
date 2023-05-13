// import { Button } from "react-md";
// import React from "react";


import './sign-up.scss';

const SignUp = () => {
    return (
        <>

            <form className="form">
                <p className="title">Register </p>
                <p className="message">Signup now and get full access to our app. </p>
                <div className="flex">
                    <label>
                        <input type="submit" required="" placeholder="First name" className="input" />
                        <span></span>
                    </label>

                    <label>
                        <input required="" placeholder="Last name" type="text" className="input"/>
                        <span></span>
                    </label>
                </div>

                <label>
                    <input required="" placeholder="Email" type="email" className="input" />
                    <span></span>
                </label>

                <label>
                    <input required="" placeholder="Password" type="password" className="input" />
                    <span></span>
                </label>
                <label>
                    <input required="" placeholder="Confirm password" type="password" className="input" />
                    <span></span>
                </label>
                <button className="submit">Submit</button>
                <p className="signin">Already have an acount ? <a href="#">Signin</a> </p>
            </form>
        </>



    )
}
export default SignUp;