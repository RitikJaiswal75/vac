import React from "react";
function Home(props) {
  return (
    <div className="container my-4 text-center">
      <div className="card" width="18">
        <div className="card-body d-flex row h-50">
            <img src={props.imgs} alt="" className="col-6"/>
            <div className="my-auto col-6 ">
            <h3 className="card-title">Name : {props.name}</h3>
            <p className="card-text">Age: {props.age} <br /> RollNumber: 20181CCE0075 <br /> Course: React VAC <br />Sem: 7</p>
            </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Home;
