import React from "react";
import "./index.css";

import { useForm } from "react-hook-form";

function SignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <>
      <center>
        <form>
          <h1 className="h1signup">Sign Up</h1>
          <p className="ptag">No credit card required</p>
          <input
            type="text"
            className="inpt"
            placeholder="Email address"
            required
          />
          <br />
          <input
            type="text"
            className="inpt"
            placeholder="Company name"
            {...register("test", {
              required: true,
            })}
          />
          <br />
          <input
            type="password"
            className="inpt"
            placeholder="Password"
            required
          />
          <br />
          <div className="row">
            <input type="checkbox" className="checkbox " />
            <p className=" fs-5 w-75">I agree to the Terms & Conditions</p>
          </div>
          <br />
          <button className="btnsignup">
            <b>Get Started</b>
          </button>
          <br />
          <p className="p-3 fs-5">
            Already have an account?<a href="#">Sign in</a>
          </p>
        </form>
      </center>
    </>
  );
}

export default SignUpForm;
