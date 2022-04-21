import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {register} from '../redux/actions/action';
import {login} from '../redux/actions/action';

const Register = () => {
  const [user, setUser] = useState([]);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    active:""
  });

  let navigate = useNavigate();

  const handelsubmit = (event) => {
     
    event.preventDefault();

    localStorage.setItem("test", JSON.stringify(data));
    this.props.register(data)
    navigate("/login");

    user.push({
      name: data.name,
      email: data.email,
      password: data.password,
      active: data.active
    });

    setUser(user);
    console.log("777", user);
    localStorage.setItem("test",JSON.stringify(user))

    setData({
      ...user,
      name: "",     
      email: "",
      password: "",
      active:""
    });
  };
  console.log(9999, data);

  return (
    <>
        <div>
            <Link to="/">&laquo;back to home</Link>
         
        </div>
      <h4> Register here!</h4>
      <form onSubmit={handelsubmit}>
        <label>Name</label>
        <br/>
        <input
          type="text"
          placeholder="Enter your name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        /><br/><br />

        <label>Email</label>
        <br />
        <input
          type="email"
          placeholder="Enter your email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <br /><br />
        <label>Password</label>
        <br></br>
        <input
          type="password"
          placeholder="Enter your password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <br /><br />
        <label>Status{' '}</label>
            <select onChange={(e) => setData({ ...data, active: e.target.value })}>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
            </select><br/> <br/>

        <button>Submit</button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
    return {
      posts: state.posts.posts,
    };
  };

const mapDispatchToProps = {
    register,
    login
  };

export default Register;
