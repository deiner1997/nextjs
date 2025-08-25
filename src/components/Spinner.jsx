import React from 'react';
import spinner from "../assets/Spinner.gif"

const Spinner = (props) => {
  const {language} = props;
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="p-4 rounded">
        <img src={spinner} alt="Loading" />
        <h3 className="text-center">{language===0 ? "LOADING...." : "CARGANDO..."}</h3>
      </div>
    </div>
  )
}

export default Spinner