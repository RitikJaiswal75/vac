import React from "react";

function About(props) {
  return (
    <div className="container my-4">
      <div className="row my-auto">
        <div className="col-9">
          <h1 className="my-4 text-center text-success">{props.name}</h1>
          <p>
            I am a B.Tech Student from Presidency University, Bengaluru. I
            currently am pursuing my degree in B.Tech with Computer and
            Communication Engineering. My grades at the university are
            constantly improving. My latest SGPA was 9.57 and my CGPA is 9.09
            based on relative grading scale.
          </p>
        </div>
        <img src={props.imgs} alt="" className="my-4 col-3" />
      </div>
      <br />
      <hr />
      <div className="container">
        <div className="container my-4">
            <h3 className="text-center text-success">Skills</h3>
        <div className="mx-auto row text-center">
        <table cellspacing="10" className="text-center">
        <tbody>
            <tr>
                <td>
                    <table cellspacing="10">
                        <tbody><tr>
                            <td>Web Development</td>
                            <td>⭐⭐⭐⭐</td>
                        </tr>
                        <tr>
                            <td>Python</td>
                            <td>⭐⭐⭐⭐</td>
                        </tr>
                    </tbody></table>
                </td>
                <td>
                    <table cellspacing="10">
                        <tbody><tr>
                            <td>Java</td>
                            <td>⭐⭐⭐</td>
                        </tr>
                        <tr>
                            <td>C Language</td>
                            <td>⭐⭐⭐</td>
                        </tr>
                    </tbody></table>
                </td>
            </tr>
        </tbody>
    </table>
        </div>
        </div>
      </div>
    </div>
  );
}

export default About;
