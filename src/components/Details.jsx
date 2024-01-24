import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";

const Details = () => {
  return (
    <div>
      {/* ----------------Top Image------------------- */}
      <div className="d-flex justify-content-center h-800 border border-primary p-4 m-4">
        <img
          src="https://i.pinimg.com/564x/4c/67/39/4c673997bf18f12cdbf3887e8d29d159.jpg"
          className="object-fit-contain border rounded"
          alt="Centered Image"
        />
      </div>

      {/* ---------------------Left Session ----------------------- */}
      <div className="contain d-flex justify-content-between border border-danger m-4">
        <div className="left border border-dark p-3 flex-grow-1 me-3">
          <div className="fl">
            <h1>Open Source</h1>
            <p>Hosted By Alice Boob</p>
          </div>
        </div>

        {/* ------------------Right Session------------------- */}
        <div className="right ms-3 p-4 border border-success">
          <h1>Speaker</h1>
          <div className="main d-flex">
            <div className="instructor">
              <dt>Alice Boob</dt>
              <dd>Instructor at CDC Company</dd>
              <div className="icons d-flex">
                <div className="twitter me-3">
                  <XIcon />
                </div>
                <TelegramIcon />
              </div>
            </div>
            <div className="image align-self-start">
              <img
                src="https://i.pinimg.com/564x/d4/f5/43/d4f54319b0673b526fde2af615c917f8.jpg"
                width="50px"
                alt="#"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
