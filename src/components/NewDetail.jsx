// import TelegramIcon from "@mui/icons-material/Telegram";
// import XIcon from "@mui/icons-material/X";
// import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
// import EventsList from "../Data.json";
// import "./TimeIcon.css";

// const NewDetail = () => {
//   return (
//     <div>
//       {EventsList.map((event) => (
//         <div key={event.eventId}>
//           {/* Top Image */}
//           <div className="d-flex justify-content-center h-5 border border-primary p-4 m-4">
//             <img
//               src={event.imageUrl}
//               className="object-fit-contain border rounded"
//               alt="Centered Image"
//               width="200px"
//               height="150px"
//             />
//           </div>

//           {/* Left Session */}
//           <div className="contain d-flex justify-content-between border border-danger m-4">
//             <div
//               className="left border border-dark flex-grow-1 me-3 p-4"
//               style={{ width: "645px" }}
//             >
//               <div className="fl">
//                 <h1>{event.title}</h1>
//                 <div className="d-flex p-3">
//                   <div className="row align-items-center">
//                     <div className="col p-0">
//                       <img
//                         src={event.image1Url}
//                         alt="Image 1"
//                         className="img-responsive rounded-circle"
//                         width="30px"
//                         height="30px"
//                       />
//                     </div>
//                     <div className="col p-0">
//                       <img
//                         src={event.image2Url}
//                         alt="Image 2"
//                         className="img-responsive rounded-circle"
//                         width="30px"
//                         height="30px"
//                         style={{ marginLeft: "-40%" }}
//                       />
//                     </div>
//                     <div className="col p-0">
//                       <img
//                         src={event.image3Url}
//                         alt="Image 3"
//                         className="img-responsive rounded-circle"
//                         width="30px"
//                         height="30px"
//                         style={{ marginLeft: "-60%" }}
//                       />
//                     </div>
//                     <div className="col p-0">
//                       <p className="mb-0">Hosted By {event.mentorName1}, {event.mentorName2} CDC Community</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="date d-flex my-2">
//                 <div className="icon">
//                   <strong>{event.Month}</strong>
//                   <span>{event.Date}</span>
//                 </div>
//                 <div className="date&time fs-6 ms-2">
//                   <div>{event.Date} {event.Month} {event.Years}</div>
//                   <div>{event.Time}</div>
//                 </div>
//               </div>
//               <div className="loc d-flex">
//                 <PlaceOutlinedIcon style={{ width: "41px", height: "41px", marginRight: "5px" }} />
//                 <div>
//                   <dt>{event.location.city}</dt>
//                   <dd>{event.location.State}, {event.location.country}</dd>
//                 </div>
//               </div>
//               <p className="para d-flex align-items-center justify-content-center">{event.des}</p>
//             </div>

//             {/* Right Session */}
//             <div className="right ms-3" style={{ width: "314px" }}>
//               <div className="shadow-sm p-3 mb-5 bg-body-tertiary rounded">
//                 <h1>Speaker</h1>
//                 <div className="main d-flex">
//                   <div className="instructor w-75">
//                     <dt className="n1 fs-4 m-0">{event.mentorName1}</dt>
//                     <dd className="data w-75">Instructor at CDC Company</dd>
//                     <div className="media d-flex">
//                       <div className="twitter me-3"><XIcon /></div>
//                       <TelegramIcon />
//                     </div>
//                   </div>
//                   <div className="image align-self-start w-25">
//                     <img
//                       src={event.speakerImageUrl}
//                       width="50px"
//                       alt="#"
//                       className="rounded-circle"
//                     />
//                   </div>
//                 </div>

//                 <div className="main d-flex mt-3">
//                   <div className="instructor w-75">
//                     <dt className="n1 fs-4">{event.mentorName2}</dt>
//                     <dd className="data w-75">Open Source dev at CDC Company</dd>
//                     <div className="media d-flex">
//                       <div className="twitter me-3"><XIcon /></div>
//                       <TelegramIcon />
//                     </div>
//                   </div>
//                   <div className="image align-self-center w-25">
//                     <img
//                       src={event.cobatImageUrl}
//                       width="50px"
//                       alt="#"
//                       className="rounded-circle"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Map Section */}
//               <div className="map my-5 bg-dark-subtle" style={{ borderRadius: "20px", alignItems: "end" }}>
//                 <div className="location">
//                   <div className="icons d-flex align-items-center h5 p-1 ms-1">
//                     <PlaceOutlinedIcon />
//                     Location
//                   </div>
//                   <div className="loc align-self-end">
//                     <iframe
//                       src={event.mapEmbedUrl}
//                       width="100%"
//                       height="100%"
//                       style={{
//                         border: "0",
//                         marginBottom: "0",
//                         padding: "0",
//                         borderBottomLeftRadius: "15px",
//                         borderBottomRightRadius: "15px",
//                         margin: "0"
//                       }}
//                       allowFullScreen
//                       loading="lazy"
//                       referrerPolicy="no-referrer-when-downgrade"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NewDetail;


import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import EventsList from "../Data.json";
import "./TimeIcon.css";

const NewDetail = () => {
  return (
    <div>
      {EventsList.map((event) => (
        <div key={event.eventId} className="container">
          <div className="row">
            <button
              type="button"
              className="btn-close p-2"
              aria-label="Close"
              formAction="none"
            />
            <div className="col-lg-8">
              <div className="d-flex justify-content-center h-5 m-4">
                <img
                  src={event.imageUrl}
                  className="object-fit-contain border rounded"
                  alt="Centered Image"
                  width="100%"
                  height="auto"
                />
              </div>

              <div className="contain d-flex justify-content-between m-4">
                <div className="left border border-dark flex-grow-1 me-3 p-4 rounded-5">
                  <div className="fl">
                    <h1>{event.title}</h1>
                    <div className="d-flex p-3">
                      <div className="row">
                        <div className="col p-0">
                          <img
                            src={event.image1Url}
                            alt="Image 1"
                            className="img-responsive rounded-circle"
                            width="30px"
                            height="30px"
                          />
                        </div>
                        <div className="col p-0">
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
                      </div>
                      <p className="host align-self-end">
                        Hosted By {event.mentorName1}, {event.mentorName2} CDC
                        Community
                      </p>
                    </div>
                  </div>

                  <div className="date d-flex my-2">
                    <div className="icon">
                      <strong>{event.Month}</strong>
                      <span>{event.Date}</span>
                    </div>
                    <div className="date&time fs-6 ms-2">
                      <div>
                        <dt>
                          {event.Date} {event.Month} {event.Years}
                        </dt>
                      </div>
                      <div>{event.Time}</div>
                    </div>
                  </div>
                  <div className="loc d-flex">
                    <PlaceOutlinedIcon
                      style={{
                        width: "41px",
                        height: "41px",
                        marginRight: "5px",
                      }}
                    />
                    <div>
                      <dt>{event.location.city}</dt>
                      <dd>
                        {event.location.State}, {event.location.country}
                      </dd>
                    </div>
                  </div>
                  <div className="link">
                    <button className="reg m-2 p-2 me-2 w-100 border border-success text-center rounded-3">
                      Register
                    </button>
                    <button className="reg m-2 p-2 me-2 w-100 border border-success text-center rounded-3">
                      Not Register
                    </button>
                  </div>
                  <p className="para d-flex align-items-start justify-content-center text-start">
                    {event.des}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="shadow-sm mb-4 bg-dark-subtle rounded-5 p-4">
                <h2>Speakers</h2>
                <div className="main d-flex">
                  <div className="instructor w-75">
                    <dt className="n1 fs-4 m-0">{event.mentorName1}</dt>
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
                  <div className="image mt-4 w-25">
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
                    <dt className="n1 fs-4">{event.mentorName2}</dt>
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
                  <div className="image mt-4 w-25">
                    <img
                      src={event.image2Url}
                      width="50px"
                      alt="#"
                      className="rounded-circle"
                    />
                  </div>
                </div>
              </div>

              <div className="map my-5 bg-dark-subtle">
                <div className="location">
                  <div className="icons d-flex align-items-center h5 p-1 ms-1">
                    <PlaceOutlinedIcon />
                    Location
                  </div>
                  <div className="loc align-self-end">
                    <iframe
                      title={`map-${event.eventId}`}
                      src={event.mapEmbedUrl}
                      width="100%"
                      height="250"
                      style={{
                        border: "0",
                        marginBottom: "0",
                        padding: "0",
                        borderBottomLeftRadius: "15px",
                        borderBottomRightRadius: "15px",
                      }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewDetail;
