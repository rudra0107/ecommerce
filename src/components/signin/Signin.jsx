import React from "react";
import "./Signin.scss";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { auth } from "../../firebase/firebase";
import { provider } from "../../firebase/firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      redirect: "",
    };
  }

  handlesubmit = async (Event) => {
    Event.preventDefault();

    const { email, password } = this.state;

    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredentials.user);
    } catch (error) {
      console.log(error);
    }

    this.setState({
      email: "",
      password: "",
    });
  };

  handleonchange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  signInWithGoogle = async () => {
    signInWithPopup(auth, provider);
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <div className="sign-in">
          <h1>I Already Have An Account</h1>
          <span>Sign in with your email and password</span>
          <form onSubmit={this.handlesubmit}>
            <FormInput
              name="email"
              type="email"
              onChange={this.handleonchange}
              value={email}
              label="email"
            />
            <FormInput
              name="password"
              type="password"
              onChange={this.handleonchange}
              value={password}
              label="password"
            />
            <div className="buttons">
              <CustomButton type="submit">SIGN IN</CustomButton>
              <CustomButton onClick={this.signInWithGoogle} isGoogleSignIn>
                Sign In with google
              </CustomButton>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Signin;
