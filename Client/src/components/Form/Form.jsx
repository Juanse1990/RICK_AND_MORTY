import { useState } from "react";
import validation from "../Validation/Validation";
import "./Form.Module.css";
import img from "./img/img.js";

const Form = ({ login }) => {
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    email: ``,
    password: ``,
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <>
      <h1 className="title">Rick & Morty</h1>
      <div className="contenedor">
        <form className="form" onSubmit={handleSubmit}>
          <img className="imagen" src={img.ram} alt="RickAndMorty" />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          <label
            htmlFor="password"
            style={{
              color: "white",
            }}
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
          <button className="bform">Submit</button>
        </form>
      </div>
    </>
  );
};
export default Form;
