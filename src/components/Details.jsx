import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import EventsList from "../Data.json";
import "./TimeIcon.css";
// import Footer from "./Footer";
// import Navbar from "./Navbar";
import { CheckCircleOutline } from "@mui/icons-material";
import { useState } from "react";
import Footer from "./Footer";

const Details = () => {
  const [registered, setRegistered] = useState(false);
  const handleRegister = () => {
    setRegistered(!registered);
  };
  return (
    <div>
      {/* <button type="button" className="btn-close" aria-label="Close" /> */}
      {/* ----------------Top Image-------------------*/}
      {/* <Navbar/> */}
      {EventsList.map(event =>
        <div key={event.eventId}>
          <button
            type="button"
            className="btn-close p-2 h3"
            aria-label="Close"
            formAction="none"
          />
          <div className="d-flex justify-content-center h-5  m-4">
            <img
              src={event.imageUrl}
              className="object-fit-scale border border-0 rounded"
              alt="Centered Image"
              width="742px"
              height="290px"
            />
          </div>

          {/*---------------------Left Session -----------------------*/}

          <div
            className="contain d-flex justify-content-between m-4  "
            key={event.eventId}
          >
            <div
              className="left border border-dark flex-grow-1 me-3 p-4 rounded-5 shadow-sm"
              style={{
                width: "645px",
                boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.8);"
                // height: "828px"
              }}
            >
              <div className="fl">
                <h1>
                  {event.title}
                </h1>
                <div className="d-flex p-3">
                  {/* <div className="container d-flex me-0"> */}
                  <div className="row ">
                    <div className="col p-0 ">
                      <img
                        src={event.image1Url}
                        alt="Image 1"
                        className="img-responsive rounded-circle"
                        width="30px"
                        height="30px"
                      />
                    </div>
                    <div className="col p-0 ">
                      <img
                        src={event.image2Url}
                        alt="Image 2"
                        className="img-responsive rounded-circle"
                        width="30px"
                        height="30px"
                        style={{ marginLeft: "-40%" }}
                      />
                    </div>
                    <div className="col p-0">
                      <img
                        src={event.image3Url}
                        alt="Image 3"
                        className="img-responsive rounded-circle"
                        width="30px"
                        height="30px"
                        style={{ marginLeft: "-60%" }}
                      />
                    </div>
                    {/* </div> */}
                  </div>
                  <p className="host align-self-end">
                    Hosted By {event.mentorName1}, {event.mentorName2} CDC
                    Community
                  </p>
                </div>
              </div>

              <div className="date d-flex my-2">
                <div className="icon">
                  {/* <em>Saturday</em> */}
                  <strong>
                    {event.Month}
                  </strong>
                  <span>
                    {event.Date}
                  </span>
                </div>
                <div className="date&time fs-6 ms-2">
                  <div>
                    <dt>
                      {event.Date} {event.Month} {event.Years}
                    </dt>
                  </div>
                  <div>
                    {event.Time}
                  </div>
                </div>
              </div>
              <div className="loc d-flex ">
                <PlaceOutlinedIcon
                  style={{ width: "41px", height: "41px", marginRight: "5px" }}
                />
                <div>
                  <dt>{event.location.city}</dt>
                  <dd>
                    {event.location.State} , {event.location.country}
                  </dd>{" "}
                </div>
              </div>
             

              {registered
                ? <div>
                    <span className="no d-flex justify-content-center w-25">
                      <CheckCircleOutline /> You have Registerd
                    </span>{" "}
                    <button
                      onClick={handleRegister}
                      className="reg m-2 p-2 me-2 w-25 text-center rounded-3 table-hover"
                      style={{ border: "2px solid green" }}
                    >
                      Unregister{" "}
                    </button>
                  </div>
                : <div>
                    <span className="no d-flex justify-content-center w-25">
                      You have not Registerd
                    </span>{" "}
                    <button
                      onClick={handleRegister}
                      className="reg m-2 p-2 me-2 w-25 text-center rounded-3 table-hover"
                      style={{ border: "2px solid green" }}
                    >
                      Register{" "}
                    </button>
                  </div>}

              <p className="para d-flex align-items-start justify-content-center text-start">
                {event.des}
              </p>
            </div>

            {/* ------------------Right Session------------------- */}
            <div
              className="right ms-3 "
              style={{
                width: "314px"
              }}
            >
              <div className="shadow-sm mb-4 bg-dark-subtle rounded-5 p-4">
                <h2>Speakers</h2>
                <div className="main d-flex">
                  <div className="instructor w-75">
                    <dt className="n1 fs-4 m-0">
                      {event.mentorName1}
                    </dt>
                    <dd className="data w-75">Instructor at CDC Company</dd>
                    <div className="media d-flex">
                      <div className="twitter me-2">
                        <a
                          href="https://twitter.com/i/flow/login"
                          className="twitter text-dark"
                        >
                          <XIcon />
                        </a>
                      </div>
                      <a
                        href="https://web.telegram.org/k/"
                        className="telegram text-dark"
                      >
                        <TelegramIcon />
                      </a>
                    </div>
                  </div>
                  <div className="image w-25">
                    <img
                      src={event.image1Url}
                      width="50px"
                      alt="#"
                      className="rounded-circle"
                    />
                  </div>
                </div>

                <div className="main d-flex mt-3">
                  <div className="instructor w-75">
                    <dt className="n1 fs-4">
                      {event.mentorName2}
                    </dt>
                    <dd className="data w-75">
                      Open Source dev at CDC Company
                    </dd>
                    <div className="media d-flex">
                      <div className="twitter me-2">
                        <a
                          href="https://twitter.com/i/flow/login"
                          className="twitter text-dark"
                        >
                          <XIcon />
                        </a>
                      </div>
                      <a
                        href="https://web.telegram.org/k/"
                        className="telegram text-dark"
                      >
                        <TelegramIcon />
                      </a>
                    </div>
                  </div>
                  <div className="image w-25">
                    <img
                      src={event.image2Url}
                      width="50px"
                      alt="#"
                      className="rounded-circle"
                    />
                  </div>
                </div>
              </div>

              {/* --------------------------Map Section-------------------- */}
              <div
                className="map my-5 bg-dark-subtle"
                style={{ borderRadius: "20px", alignItems: "end" }}
              >
                <div className="location">
                  <div className="icons d-flex align-items-center h5 p-1 ms-1">
                    <PlaceOutlinedIcon />
                    {`${event.location.city}, ${event.location.State}, ${event
                      .location.country}`}
                  </div>
                  <div className="loc align-self-end">
                    <iframe
                      src={`https://maps.google.com/maps?q=${event.location
                        .coordinates.latitude},${event.location.coordinates
                        .longitude}&z=15&output=embed`}
                      width="100%"
                      height="100%"
                      style={{
                        border: "0",
                        marginBottom: "0",
                        padding: "0",
                        borderBottomLeftRadius: "15px",
                        borderBottomRightRadius: "15px",
                        margin: "0"
                      }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Footer/> */}
        </div>
      )}
    </div>
  );
};

export default Details;
