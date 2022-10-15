import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="homecontainer">
      {/*  First home container*/}

      <div className="homecontainersub">
        <div className="homecontainersub-left">
          <div className="headingcontainer">
            <b className="heading1">
              Lorem ipsum dolor sit amet,<br></br>
              <p className="colorchange">consectrtur adipising elit</p>
            </b>
          </div>
          <div className="textcontainer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            optent taciti sociosquad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque.Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </div>
          <div className="btncontainer">
            <button className="learnmorebtn">Learn more</button>
          </div>
        </div>

        <div>
          <img
            className="modelimg1"
            src={require("./modelimg/model1.png")}
            alt=""
          ></img>
        </div>
      </div>

      {/*  second home container*/}

      <div className="homecontainer2">
        <div className="secondcontainer">
          <div className="secondcontainerbox1">
            <img
              className="modelimg2"
              src={require("./modelimg/model2.png")}
              alt=""
            ></img>
          </div>

          <div className="box1">
            <div className="textclass">
              <h3 className="textheading">Our Mission</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elite Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis. Ut commodo efficitur neque. Ut diam quam,
                semper iaculis condimentum ac, vestibulum eu nisl.
              </p>
            </div>
          </div>
        </div>

        <div className="secondcontainer">
          <div className="box2">
            <div className="textclass">
              <h3 className="textheading">Our Vision</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elite Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis. Ut commodo efficitur neque. Ut diam quam,
                semper iaculis condimentum ac, vestibulum eu nisl.
              </p>
            </div>
          </div>

          <div className="secondcontainerbox1">
            <img
              className="modelimg2"
              src={require("./modelimg/model3.png")}
              alt=""
            ></img>
          </div>
        </div>
      </div>

      {/*  Third home container*/}

      <div>
        <div>
          <h1 className="founderheading">Our FOUNDER</h1>
        </div>

        <div className="scroll">
          <div className="horizontalscroll1">
            <h1>
              <span><h1>&#129170;</h1></span>
            </h1>
          </div>
          <div className="horizontalscroll2">
            <h1>
              <span><h1>&#129168;</h1></span>
            </h1>
          </div>
        </div>

        <div className="founderlist ">
          <div className="founder1">
            <div className="subfounder1">
              <img
                className="founderimg"
                src={require("./founderimg/ellipse1.png")}
                alt=""
              ></img>
            </div>

            <div className="Foundertext">
              <div className="foundercenterspace">
                <h3 className="founderheading">Lorem ipsum</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class
                </p>
              </div>
              <div className="textlinkdiv">
                <NavLink path="/" className="textlink">
                  More
                </NavLink>
              </div>
            </div>
          </div>

          <div className="founder2">
            <div className="subfounder2">
              <img
                className="founderimg"
                src={require("./founderimg/ellipse2.png")}
                alt=""
              ></img>
            </div>

            <div className="Foundertext">
              <div className="foundercenterspace">
                <h3 className="founderheading">Lorem ipsum</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class
                </p>
              </div>
              <div className="textlinkdiv">
                <NavLink path="/" className="textlink">
                  More
                </NavLink>
              </div>
            </div>
          </div>

          <div className="founder3">
            <div className="subfounder3">
              <img
                className="founderimg"
                src={require("./founderimg/ellipse3.png")}
                alt=""
              ></img>
            </div>

            <div className="Foundertext">
              <div className="foundercenterspace">
                <h3 className="founderheading">Lorem ipsum</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class
                </p>
              </div>
              <div className="textlinkdiv">
                <NavLink path="/" className="textlink">
                  More
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  Fourth home container*/}

      <div>
        <div>
          <div className="awardsheading">
            <h2>AWARDS & ACHIEVEMENTS</h2>
          </div>
        </div>

        <div className="awardscontainermain">
          <div className="awardscontainer">
            <div>
              <img
                className="awardsimg1"
                src={require("./awardsimg/awards2.png")}
                alt=""
              ></img>
            </div>
            <div className="awardscenterspace">
              <h3 className="awardstextheading">Lorem ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class
              </p>
            </div>
          </div>
          <div className="awardscontainer">
            <div>
              <img
                className="awardsimg2"
                src={require("./awardsimg/awards3.png")}
                alt=""
              ></img>
            </div>
            <div className="awardscenterspace">
              <h3 className="awardstextheading">Lorem ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class
              </p>
            </div>
          </div>

          <div className="awardscontainer">
            <div>
              <img
                className="awardsimg3"
                src={require("./awardsimg/awards4.png")}
                alt=""
              ></img>
            </div>
            <div className="awardscenterspace">
              <h3 className="awardstextheading">Lorem ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class
              </p>
            </div>
          </div>

          <div className="awardscontainer">
            <div>
              <img
                className="awardsimg4"
                src={require("./awardsimg/awards1.png")}
                alt=""
              ></img>
            </div>
            <div className="awardscenterspace">
              <h3 className="awardstextheading">Lorem ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
