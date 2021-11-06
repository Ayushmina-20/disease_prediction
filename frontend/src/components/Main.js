import React from "react";
import { Form, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import "../styles.css";

function Main() {
  return (
    <div className="main-body">
      <div className="card ">
        <img
          style={{
            height: "400px",
            width: "95%",
            margin: "auto",
            marginTop: "10px",
          }}
          className="card-img-top"
          src={require("../img/heart.jpg").default}
          alt="..."
        />
        <div className="card-body">
          <div class="mb-3 row">
            <label for="input" class="col-sm-2 col-form-label">
              Age
            </label>
            <div class="col-sm-10">
              <input type="Number" class="form-control" />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Gender
            </label>
            <div className="col-sm-10">
              <select className="gender" name="gender">
                <option value="volvo">Male</option>
                <option value="saab">Female</option>
              </select>
            </div>
          </div>
          <div class="mb-3 row">
            <label for="input" class="col-sm-2 col-form-label">
              Height
            </label>
            <div class="col-sm-10">
              <input type="Number" class="form-control" />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="input" class="col-sm-2 col-form-label">
              Weight
            </label>
            <div class="col-sm-10">
              <input type="input" class="form-control" />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Cholestrol
            </label>
            <div className="col-sm-10">
              <select className="gender" name="gender">
                <option value="volvo">Male</option>
                <option value="saab">Female</option>
              </select>
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Glucose
            </label>
            <div className="col-sm-10">
              <select className="gender" name="gender">
                <option value="volvo">Male</option>
                <option value="saab">Female</option>
              </select>
            </div>
          </div>
          <div class="mb-3 row">
            <label for="input" class="col-sm-2 col-form-label">
              Systolic BP
            </label>
            <div class="col-sm-10">
              <input type="input" class="form-control" />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="input" class="col-sm-2 col-form-label">
              Diastolic BP
            </label>
            <div class="col-sm-10">
              <input type="input" class="form-control" />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Smoke
            </label>
            <div className="col-sm-10">
              <select className="gender" name="gender">
                <option value="volvo">Male</option>
                <option value="saab">Female</option>
              </select>
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Alcohol
            </label>
            <div className="col-sm-10">
              <select className="gender" name="gender">
                <option value="volvo">Yes</option>
                <option value="saab">No</option>
              </select>
            </div>
          </div>

          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Submit
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">This is a modal</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
