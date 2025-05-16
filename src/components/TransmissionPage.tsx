import "../css/TransmissionPage.css";
import Button from "react-bootstrap/Button";

function TransmissionPage() {
  return (
    <div>
      <h1 className="title">Transmission Page</h1>
      <div className="addTorrent">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Torrent Magnet Link"
          ></input>
          <button className="btn btn-primary" type="button" id="button-addon2">
            Download
          </button>
        </div>
      </div>
      <div className="torrentList">test</div>
    </div>
  );
}

export default TransmissionPage;
