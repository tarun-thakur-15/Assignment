import "./App.css";
import ReactModal from "react-modal";

//  images
import ImageOne from "./images/imageOne.webp";
import toggleList from "./images/toggleList.svg";
import toggleOptions from "./images/toggleOptions.svg";
import cross from "./images/cross.svg";
import CardImageOne from "./images/cardImageOne.jpg";
import CardImageTwo from "./images/cardImageTwo.jpg";
import CardImageThree from "./images/cardImageThree.jpg";
import CardImageFour from "./images/cardImageFour.jpg";
import CardImageFive from "./images/cardImageFive.jpg";
import CardImage from "./images/CardImage.webp";
import ModalImage from "./images/ModalImage.webp";

import { useState } from "react";

function App() {
  const [tabValue, setTabValue] = useState(1);
  const [toggleDesign, setToggleDesign] = useState(true);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => {
    setModalIsOpen(false);
    setIsBlurred(!isBlurred);
  };

  const [sidebarWidth, setIsSidebarWidth] = useState(391);
  const [isBlurred, setIsBlurred] = useState(false);

  return (
    <section
      className={`parent app-container ${
        isBlurred ? "blurred-background" : ""
      }`}
    >
      <div className="container content-to-blur">
        <div
          className={`background-blur-layer ${isBlurred ? "blurred-bg" : ""}`}
        ></div>
        <div className="container-inner">
          {/* -----------sidebar------------- */}
          <div
            className={`sidebar content-layer ${
              sidebarWidth ? "sidebarWidthNormal" : "sidebarWidthExpanded"
            }`}
          >
            <div className="sidebarInner">
              <div className="sidebarInnerOne">
                {/* ---box 1--- */}
                <div className="sidebBarBoxOne sideBarboxOneHeight">
                  <div className="sidebarBoxImage">
                    <img src={ImageOne} className="sideBarImageCommon" />
                  </div>
                  <div className="sideBarContentCommon">
                    <h2 className="personName">Hi Reader,</h2>
                    <p className="personDesc">Here’s your News!</p>
                  </div>
                </div>
                {/* ---box 2--- */}
                <div className="sidebBarBoxOne sideBarboxTwoHeight">
                  <h2 className="toggleText">View Toggle</h2>
                  <div className="toggleButtonsParent">
                    <button
                      onClick={() => {
                        setToggleDesign(true);
                      }}
                      className={`toggleButtonCommon ${
                        toggleDesign ? "toggleButtonTwo" : "toggleButtonOne"
                      }`}
                    >
                      <img src={toggleList} className="toggleBtns" />
                    </button>
                    <button
                      onClick={() => {
                        setToggleDesign(false);
                      }}
                      className={`toggleButtonCommon ${
                        toggleDesign ? "toggleButtonOne" : "toggleButtonTwo"
                      }`}
                    >
                      <img src={toggleOptions} className="toggleBtns" />
                    </button>
                  </div>
                </div>
                {/* ---box 3--- */}
                <div className="sidebBarBoxOne sideBarboxTwoHeight">
                  <h2 className="toggleText">Have a Feedback?</h2>
                  <button
                    onClick={() => {
                      setIsSidebarWidth(!sidebarWidth);
                      // setIsBlurred(!isBlurred);
                    }}
                    className={`ListeningBtn ${
                      sidebarWidth
                        ? "ListeningBtnColorNormal"
                        : "ListeningBtnColorExpanded"
                    } `}
                  >
                    We’re Listening!
                  </button>
                </div>
              </div>
              {!sidebarWidth && (
                <div className="sidebarInnerTwo margintop">
                  <div>
                    <h3 className="expandedHeading">
                      Thank you so much for taking the time!
                    </h3>
                    <p className="expandedPara">
                      Please provie the below details!
                    </p>
                  </div>

                  <div className="inputFeilds">
                    {/* --------first name-------- */}
                    <div className="nameInputDiv">
                      <div className="">
                        <label className="inputLabelCommon" htmlFor="myInput">
                          First Name:
                        </label>
                      </div>
                      <div>
                        <input
                          type="text"
                          id="myInput"
                          name="userName"
                          placeholder="John"
                          className="inputFirstName"
                        />
                      </div>
                    </div>

                    {/* --------last name-------- */}
                    <div className="nameInputDiv">
                      <div className="">
                        <label className="inputLabelCommon" htmlFor="myInput">
                          Last Name:
                        </label>
                      </div>
                      <div>
                        <input
                          type="text"
                          id="myInput"
                          name="userName"
                          placeholder="Doe"
                          className="inputFirstName"
                        />
                      </div>
                    </div>

                    {/* --------address-------- */}
                    <div className="nameInputDiv">
                      <div className="">
                        <label className="inputLabelCommon" htmlFor="myInput">
                          Last Name:
                        </label>
                      </div>
                      <div>
                        <textarea
                          type="text"
                          id="myInput"
                          name="address"
                          placeholder="Enter your full Postal Address"
                          className="inputFirstName texarea"
                        />
                      </div>
                    </div>

                    {/* --------country-------- */}
                    <div className="nameInputDiv">
                      <div className="">
                        <label className="inputLabelCommon" htmlFor="myInput">
                          Last Name:
                        </label>
                      </div>
                      <div>
                        <input
                          type="text"
                          id="myInput"
                          name="India"
                          placeholder="Doe"
                          className="inputFirstName"
                        />
                      </div>
                    </div>

                    {/* --------email-------- */}
                    <div className="nameInputDiv">
                      <div className="">
                        <label className="inputLabelCommon" htmlFor="myInput">
                          Email ID:
                        </label>
                      </div>
                      <div>
                        <input
                          type="email"
                          id="myInput"
                          name="India"
                          placeholder="example@sample.com"
                          className="inputFirstName"
                        />
                      </div>
                    </div>

                    {/* --------phone number-------- */}
                    <div className="nameInputDiv">
                      <div className="">
                        <label className="inputLabelCommon" htmlFor="myInput">
                          Phone Number:
                        </label>
                      </div>
                      <div>
                        <input
                          type="email"
                          id="myInput"
                          name="India"
                          placeholder="example@sample.com"
                          className="inputFirstName"
                        />
                      </div>
                    </div>
                  </div>

                  <button className="sbtFeedbackBtn">Submit Feedback</button>
                </div>
              )}
            </div>
          </div>

          {/* ----------right side----------- */}
          <div className="right">
            {tabValue === 1 && (
              <>
                {toggleDesign ? (
                  <>
                    <div
                      onClick={() => {
                        openModal();
                        setIsBlurred(!isBlurred);
                      }}
                      className="cardParent margintop"
                    >
                      <div className="card">
                        <div className="card-inner">
                          <div className="cardImageParent">
                            <img src={CardImageOne} className="cardImage" />
                          </div>
                          <div className="cardImageInner">
                            <h3 className="cardHeading">
                              Urna, tempor aliquet maecenas aliquam risus
                              maecenas ut morbi. Mi...
                            </h3>
                            <p className="cardDesc">
                              Non suscipit sagittis nunc, pharetra. Eget quam
                              facilisi non nunc libero...
                            </p>

                            <span className="cardTimeStamp">
                              Mon, 21 Dec 2020 14:57 GMT
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="status">
                        <img src={cross} className="statusSvg" />
                      </div>
                    </div>

                    <div
                      onClick={() => {
                        openModal();
                        setIsBlurred(!isBlurred);
                      }}
                      className="cardParent"
                    >
                      <div className="card">
                        <div className="card-inner">
                          <div className="cardImageParent">
                            <img src={CardImageTwo} className="cardImage" />
                          </div>
                          <div className="cardImageInner">
                            <h3 className="cardHeading">
                              Eget eu ipsum in sed placerat ante. Tortor
                              porttitor sit adipiscing donec...
                            </h3>
                            <p className="cardDesc">
                              Quam aliquam tincidunt faucibus hendrerit
                              malesuada lectus. Velit.
                            </p>

                            <span className="cardTimeStamp">
                              Mon, 21 Dec 2020 14:57 GMT
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="status">
                        <img src={cross} className="statusSvg" />
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        openModal();
                        setIsBlurred(!isBlurred);
                      }}
                      className="cardParent"
                    >
                      <div className="card">
                        <div className="card-inner">
                          <div className="cardImageParent">
                            <img src={CardImageThree} className="cardImage" />
                          </div>
                          <div className="cardImageInner">
                            <h3 className="cardHeading">
                              Accumsan amet sit in id arcu odio. Tristique non,
                              quisque commodo viverra...
                            </h3>
                            <p className="cardDesc">
                              Arcu libero vivamus egestas sit suspendisse eu
                              iaculis velit. Mollis.
                            </p>

                            <span className="cardTimeStamp">
                              Mon, 21 Dec 2020 14:57 GMT
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="status">
                        <img src={cross} className="statusSvg" />
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        openModal();
                        setIsBlurred(!isBlurred);
                      }}
                      className="cardParent"
                    >
                      <div className="card">
                        <div className="card-inner">
                          <div className="cardImageParent">
                            <img src={CardImageFour} className="cardImage" />
                          </div>
                          <div className="cardImageInner">
                            <h3 className="cardHeading">
                              Nisl est dui egestas turpis. Purus in integer diam
                              ultrices fames lectus eget..
                            </h3>
                            <p className="cardDesc">
                              Porttitor in amet ultrices aliquam pharetra,
                              egestas erat scelerisque.
                            </p>

                            <span className="cardTimeStamp">
                              Mon, 21 Dec 2020 14:57 GMT
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="status">
                        <img src={cross} className="statusSvg" />
                      </div>
                    </div>

                    <div
                      onClick={() => {
                        openModal();
                        setIsBlurred(!isBlurred);
                      }}
                      className="cardParent"
                    >
                      <div className="card">
                        <div className="card-inner">
                          <div className="cardImageParent">
                            <img src={CardImageFive} className="cardImage" />
                          </div>
                          <div className="cardImageInner">
                            <h3 className="cardHeading">
                              Tortor, gravida fringilla quam cursus ut felis.
                              Amet ultricies tempor enim...
                            </h3>
                            <p className="cardDesc">
                              Vel facilisis purus tincidunt purus quam eleifend
                              et, orci, tortor. Luctus.
                            </p>

                            <span className="cardTimeStamp">
                              Mon, 21 Dec 2020 14:57 GMT
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="status">
                        <img src={cross} className="statusSvg" />
                      </div>
                    </div>
                  </>
                ) : (
                  // ------square box----
                  <div className="squareBox margintop">
                    <div className="box">
                      <div className="boxInner">
                        <h3 className="boxHeading">
                          Sed volutpat vitae id eleifend. Commodo...
                        </h3>
                        <p className="boxDescription">
                          Interdum pretium porttitor nibh cursus...
                        </p>
                        <span className="boxTimestamp">
                          Mon, 21 Dec 2020 14:57 GMT
                        </span>

                        <div className="cardImageSizing">
                          <img
                            src={CardImage}
                            alt="CardImage"
                            className="cardImage"
                          />
                        </div>
                      </div>
                      <button className="cancelCardButton">
                        <img
                          src={cross}
                          alt="cancel"
                          className="cancelCardIcon"
                        />
                      </button>
                    </div>

                    <div className="box">
                      <div className="boxInner">
                        <h3 className="boxHeading">
                          Sed volutpat vitae id eleifend. Commodo...
                        </h3>
                        <p className="boxDescription">
                          Interdum pretium porttitor nibh cursus...
                        </p>
                        <span className="boxTimestamp">
                          Mon, 21 Dec 2020 14:57 GMT
                        </span>

                        <div className="cardImageSizing">
                          <img
                            src={CardImage}
                            alt="CardImage"
                            className="cardImage"
                          />
                        </div>
                      </div>
                      <button className="cancelCardButton">
                        <img
                          src={cross}
                          alt="cancel"
                          className="cancelCardIcon"
                        />
                      </button>
                    </div>

                    <div className="box">
                      <div className="boxInner">
                        <h3 className="boxHeading">
                          Sed volutpat vitae id eleifend. Commodo...
                        </h3>
                        <p className="boxDescription">
                          Interdum pretium porttitor nibh cursus...
                        </p>
                        <span className="boxTimestamp">
                          Mon, 21 Dec 2020 14:57 GMT
                        </span>

                        <div className="cardImageSizing">
                          <img
                            src={CardImage}
                            alt="CardImage"
                            className="cardImage"
                          />
                        </div>
                      </div>
                      <button className="cancelCardButton">
                        <img
                          src={cross}
                          alt="cancel"
                          className="cancelCardIcon"
                        />
                      </button>
                    </div>

                    <div className="box">
                      <div className="boxInner">
                        <h3 className="boxHeading">
                          Sed volutpat vitae id eleifend. Commodo...
                        </h3>
                        <p className="boxDescription">
                          Interdum pretium porttitor nibh cursus...
                        </p>
                        <span className="boxTimestamp">
                          Mon, 21 Dec 2020 14:57 GMT
                        </span>

                        <div className="cardImageSizing">
                          <img
                            src={CardImage}
                            alt="CardImage"
                            className="cardImage"
                          />
                        </div>
                      </div>
                      <button className="cancelCardButton">
                        <img
                          src={cross}
                          alt="cancel"
                          className="cancelCardIcon"
                        />
                      </button>
                    </div>

                    <div className="box">
                      <div className="boxInner">
                        <h3 className="boxHeading">
                          Sed volutpat vitae id eleifend. Commodo...
                        </h3>
                        <p className="boxDescription">
                          Interdum pretium porttitor nibh cursus...
                        </p>
                        <span className="boxTimestamp">
                          Mon, 21 Dec 2020 14:57 GMT
                        </span>

                        <div className="cardImageSizing">
                          <img
                            src={CardImage}
                            alt="CardImage"
                            className="cardImage"
                          />
                        </div>
                      </div>
                      <button className="cancelCardButton">
                        <img
                          src={cross}
                          alt="cancel"
                          className="cancelCardIcon"
                        />
                      </button>
                    </div>

                    <div className="box">
                      <div className="boxInner">
                        <h3 className="boxHeading">
                          Sed volutpat vitae id eleifend. Commodo...
                        </h3>
                        <p className="boxDescription">
                          Interdum pretium porttitor nibh cursus...
                        </p>
                        <span className="boxTimestamp">
                          Mon, 21 Dec 2020 14:57 GMT
                        </span>

                        <div className="cardImageSizing">
                          <img
                            src={CardImage}
                            alt="CardImage"
                            className="cardImage"
                          />
                        </div>
                      </div>
                      <button className="cancelCardButton">
                        <img
                          src={cross}
                          alt="cancel"
                          className="cancelCardIcon"
                        />
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}

            {tabValue === 2 && (
              <>
                <div className="cardParent margintop">
                  <div className="card">
                    <div className="card-inner">
                      <div className="cardImageParent">
                        <img
                          src={CardImageOne}
                          alt="CardImageOne"
                          className="cardImage"
                        />
                      </div>
                      <div className="cardImageInner">
                        <h3 className="cardHeading">tab 2</h3>
                        <p className="cardDesc">
                          Non suscipit sagittis nunc, pharetra. Eget quam
                          facilisi non nunc libero...
                        </p>

                        <span className="cardTimeStamp">
                          Mon, 21 Dec 2020 14:57 GMT
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="status">
                    <img src={cross} alt="cross" className="statusSvg" />
                  </div>
                </div>

                <div className="cardParent">
                  <div className="card">
                    <div className="card-inner">
                      <div className="cardImageParent">
                        <img
                          src={CardImageTwo}
                          alt="CardImageTwo"
                          className="cardImage"
                        />
                      </div>
                      <div className="cardImageInner">
                        <h3 className="cardHeading">
                          Eget eu ipsum in sed placerat ante. Tortor porttitor
                          sit adipiscing donec...
                        </h3>
                        <p className="cardDesc">
                          Quam aliquam tincidunt faucibus hendrerit malesuada
                          lectus. Velit.
                        </p>

                        <span className="cardTimeStamp">
                          Mon, 21 Dec 2020 14:57 GMT
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="status">
                    <img src={cross} alt="cross" className="statusSvg" />
                  </div>
                </div>
                <div className="cardParent">
                  <div className="card">
                    <div className="card-inner">
                      <div className="cardImageParent">
                        <img
                          src={CardImageThree}
                          alt="CardImageThree"
                          className="cardImage"
                        />
                      </div>
                      <div className="cardImageInner">
                        <h3 className="cardHeading">
                          Accumsan amet sit in id arcu odio. Tristique non,
                          quisque commodo viverra...
                        </h3>
                        <p className="cardDesc">
                          Arcu libero vivamus egestas sit suspendisse eu iaculis
                          velit. Mollis.
                        </p>

                        <span className="cardTimeStamp">
                          Mon, 21 Dec 2020 14:57 GMT
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="status">
                    <img src={cross} className="statusSvg" />
                  </div>
                </div>
                <div className="cardParent">
                  <div className="card">
                    <div className="card-inner">
                      <div className="cardImageParent">
                        <img src={CardImageFour} className="cardImage" />
                      </div>
                      <div className="cardImageInner">
                        <h3 className="cardHeading">
                          Nisl est dui egestas turpis. Purus in integer diam
                          ultrices fames lectus eget..
                        </h3>
                        <p className="cardDesc">
                          Porttitor in amet ultrices aliquam pharetra, egestas
                          erat scelerisque.
                        </p>

                        <span className="cardTimeStamp">
                          Mon, 21 Dec 2020 14:57 GMT
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="status">
                    <img src={cross} alt="" className="statusSvg" />
                  </div>
                </div>

                <div className="cardParent">
                  <div className="card">
                    <div className="card-inner">
                      <div className="cardImageParent">
                        <img src={CardImageFive} alt="" className="cardImage" />
                      </div>
                      <div className="cardImageInner">
                        <h3 className="cardHeading">
                          Tortor, gravida fringilla quam cursus ut felis. Amet
                          ultricies tempor enim...
                        </h3>
                        <p className="cardDesc">
                          Vel facilisis purus tincidunt purus quam eleifend et,
                          orci, tortor. Luctus.
                        </p>

                        <span className="cardTimeStamp">
                          Mon, 21 Dec 2020 14:57 GMT
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="status">
                    <img src={cross} alt="" className="statusSvg" />
                  </div>
                </div>
              </>
            )}

            {tabValue === 3 && (
              <>
                <div className="cardParent margintop">
                  <div className="card">
                    <div className="card-inner">
                      <div className="cardImageParent">
                        <img src={CardImageOne} alt="" className="cardImage" />
                      </div>
                      <div className="cardImageInner">
                        <h3 className="cardHeading">Tab 3</h3>
                        <p className="cardDesc">
                          Non suscipit sagittis nunc, pharetra. Eget quam
                          facilisi non nunc libero...
                        </p>

                        <span className="cardTimeStamp">
                          Mon, 21 Dec 2020 14:57 GMT
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="status">
                    <img src={cross} className="statusSvg" />
                  </div>
                </div>

                <div className="cardParent">
                  <div className="card">
                    <div className="card-inner">
                      <div className="cardImageParent">
                        <img src={CardImageTwo} className="cardImage" />
                      </div>
                      <div className="cardImageInner">
                        <h3 className="cardHeading">
                          Eget eu ipsum in sed placerat ante. Tortor porttitor
                          sit adipiscing donec...
                        </h3>
                        <p className="cardDesc">
                          Quam aliquam tincidunt faucibus hendrerit malesuada
                          lectus. Velit.
                        </p>

                        <span className="cardTimeStamp">
                          Mon, 21 Dec 2020 14:57 GMT
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="status">
                    <img src={cross} className="statusSvg" />
                  </div>
                </div>
                <div className="cardParent">
                  <div className="card">
                    <div className="card-inner">
                      <div className="cardImageParent">
                        <img src={CardImageThree} className="cardImage" />
                      </div>
                      <div className="cardImageInner">
                        <h3 className="cardHeading">
                          Accumsan amet sit in id arcu odio. Tristique non,
                          quisque commodo viverra...
                        </h3>
                        <p className="cardDesc">
                          Arcu libero vivamus egestas sit suspendisse eu iaculis
                          velit. Mollis.
                        </p>

                        <span className="cardTimeStamp">
                          Mon, 21 Dec 2020 14:57 GMT
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="status">
                    <img src={cross} className="statusSvg" />
                  </div>
                </div>
                <div className="cardParent">
                  <div className="card">
                    <div className="card-inner">
                      <div className="cardImageParent">
                        <img src={CardImageFour} className="cardImage" />
                      </div>
                      <div className="cardImageInner">
                        <h3 className="cardHeading">
                          Nisl est dui egestas turpis. Purus in integer diam
                          ultrices fames lectus eget..
                        </h3>
                        <p className="cardDesc">
                          Porttitor in amet ultrices aliquam pharetra, egestas
                          erat scelerisque.
                        </p>

                        <span className="cardTimeStamp">
                          Mon, 21 Dec 2020 14:57 GMT
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="status">
                    <img src={cross} className="statusSvg" />
                  </div>
                </div>

                <div className="cardParent">
                  <div className="card">
                    <div className="card-inner">
                      <div className="cardImageParent">
                        <img src={CardImageFive} className="cardImage" />
                      </div>
                      <div className="cardImageInner">
                        <h3 className="cardHeading">
                          Tortor, gravida fringilla quam cursus ut felis. Amet
                          ultricies tempor enim...
                        </h3>
                        <p className="cardDesc">
                          Vel facilisis purus tincidunt purus quam eleifend et,
                          orci, tortor. Luctus.
                        </p>

                        <span className="cardTimeStamp">
                          Mon, 21 Dec 2020 14:57 GMT
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="status">
                    <img src={cross} className="statusSvg" />
                  </div>
                </div>
              </>
            )}

            {tabValue === 4 && (
              <>
                <div className="cardParent margintop">
                  <div className="card">
                    <div className="card-inner">
                      <div className="cardImageParent">
                        <img src={CardImageOne} className="cardImage" />
                      </div>
                      <div className="cardImageInner">
                        <h3 className="cardHeading">Tab 4</h3>
                        <p className="cardDesc">
                          Non suscipit sagittis nunc, pharetra. Eget quam
                          facilisi non nunc libero...
                        </p>

                        <span className="cardTimeStamp">
                          Mon, 21 Dec 2020 14:57 GMT
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="status">
                    <img src={cross} className="statusSvg" />
                  </div>
                </div>

                <div className="cardParent">
                  <div className="card">
                    <div className="card-inner">
                      <div className="cardImageParent">
                        <img src={CardImageTwo} className="cardImage" />
                      </div>
                      <div className="cardImageInner">
                        <h3 className="cardHeading">
                          Eget eu ipsum in sed placerat ante. Tortor porttitor
                          sit adipiscing donec...
                        </h3>
                        <p className="cardDesc">
                          Quam aliquam tincidunt faucibus hendrerit malesuada
                          lectus. Velit.
                        </p>

                        <span className="cardTimeStamp">
                          Mon, 21 Dec 2020 14:57 GMT
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="status">
                    <img src={cross} className="statusSvg" />
                  </div>
                </div>
                <div className="cardParent">
                  <div className="card">
                    <div className="card-inner">
                      <div className="cardImageParent">
                        <img src={CardImageThree} className="cardImage" />
                      </div>
                      <div className="cardImageInner">
                        <h3 className="cardHeading">
                          Accumsan amet sit in id arcu odio. Tristique non,
                          quisque commodo viverra...
                        </h3>
                        <p className="cardDesc">
                          Arcu libero vivamus egestas sit suspendisse eu iaculis
                          velit. Mollis.
                        </p>

                        <span className="cardTimeStamp">
                          Mon, 21 Dec 2020 14:57 GMT
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="status">
                    <img src={cross} className="statusSvg" />
                  </div>
                </div>
                <div className="cardParent">
                  <div className="card">
                    <div className="card-inner">
                      <div className="cardImageParent">
                        <img src={CardImageFour} className="cardImage" />
                      </div>
                      <div className="cardImageInner">
                        <h3 className="cardHeading">
                          Nisl est dui egestas turpis. Purus in integer diam
                          ultrices fames lectus eget..
                        </h3>
                        <p className="cardDesc">
                          Porttitor in amet ultrices aliquam pharetra, egestas
                          erat scelerisque.
                        </p>

                        <span className="cardTimeStamp">
                          Mon, 21 Dec 2020 14:57 GMT
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="status">
                    <img src={cross} className="statusSvg" />
                  </div>
                </div>

                <div className="cardParent">
                  <div className="card">
                    <div className="card-inner">
                      <div className="cardImageParent">
                        <img src={CardImageFive} className="cardImage" />
                      </div>
                      <div className="cardImageInner">
                        <h3 className="cardHeading">
                          Tortor, gravida fringilla quam cursus ut felis. Amet
                          ultricies tempor enim...
                        </h3>
                        <p className="cardDesc">
                          Vel facilisis purus tincidunt purus quam eleifend et,
                          orci, tortor. Luctus.
                        </p>

                        <span className="cardTimeStamp">
                          Mon, 21 Dec 2020 14:57 GMT
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="status">
                    <img src={cross} className="statusSvg" />
                  </div>
                </div>
              </>
            )}

            <div className="pagination">
              <button
                className={`paginationButton ${
                  tabValue === 1
                    ? "paginationButtonNormal"
                    : "paginationButtonActive"
                }`}
                onClick={() => {
                  setTabValue(1);
                }}
              >
                1
              </button>
              <button
                className={`paginationButton ${
                  tabValue === 2
                    ? "paginationButtonNormal"
                    : "paginationButtonActive"
                }`}
                onClick={() => {
                  setTabValue(2);
                }}
              >
                2
              </button>
              <button
                className={`paginationButton ${
                  tabValue === 3
                    ? "paginationButtonNormal"
                    : "paginationButtonActive"
                }`}
                onClick={() => {
                  setTabValue(3);
                }}
              >
                3
              </button>
            </div>
          </div>
        </div>
      </div>

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div className="ModalImageParent">
          <img src={ModalImage} alt="ModalImage" className="ModalImage" />
        </div>
      </ReactModal>
    </section>
  );
}

export default App;
