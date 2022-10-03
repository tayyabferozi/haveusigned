import React from "react";

import Button from "../Button/Button";

const ShareEnvelope = () => {
  return (
    <>
      <h5 className="text-center">I want to pass this envelope to</h5>
      <br />
      <div className="add-button text-center w-100">
        <a href="#0" className="add-button">
          <i className="ti ti-plus"></i>
        </a>
      </div>
      <div className="d-flex justify-content-center mb-5">
        <Button>Add</Button>
      </div>
      <table className="recipient-table w-100">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email Address</th>
          </tr>
          <tr>
            <td>Ada Lace</td>
            <td>ada.lace@example.com</td>
          </tr>
          <tr>
            <td>Grance Hopper</td>
            <td>grace@example.com</td>
          </tr>
        </tbody>
      </table>
      <br />
      <form className="hys-form w-100">
        <Button className="w-100">Share</Button>
      </form>
    </>
  );
};

export default ShareEnvelope;
