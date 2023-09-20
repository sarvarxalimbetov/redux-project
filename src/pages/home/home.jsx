import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addData } from "../../redux/actions/action";
import { request } from "../../request/request";
import { useNavigate } from 'react-router-dom';
import "./home.css"

const Home = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch()
  const dispatchData = (data) => {
    request.post('/users', data)
    request.get('/users').then(res => {
      dispatch(addData(res.data))
    })

    navigate("/profiles", {replace: true})
  }

  return (
    <div className="home">
      <form className="home_form" onSubmit={handleSubmit(dispatchData)}>
        <input
          className="home_nameInput"
          type="text"
          placeholder="Enter your name"
          {...register("name", {
            required: "this is required!",
            minLength: { value: 3, message: "min length 3" },
          })}
        />
        <p className="home_errorMessage">{errors.name?.message}</p>

        <input
          className="home_emailInput"
          type="email"
          placeholder="Enter your email"
          {...register("email", {
            required: "this is required!"
          })}
        />
        <p className="home_errorMessage">{errors.email?.message}</p>

        <input
          className="home_passwordInput"
          type="password"
          placeholder="Enter your password"
          {...register("password", {
            required: "this is required!",
            minLength: { value: 8, message: "min length 8" },
          })}
        />
        <p className="home_errorMessage">{errors.password?.message}</p>

        <input
          className="home_avatarInput"
          type="text"
          placeholder="Enter your avatar link"
          {...register("avatar", {
            required: "this is required!"
          })}
        />
        <p className="home_errorMessage">{errors.avatar?.message}</p>

        <button className="home_submit" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
