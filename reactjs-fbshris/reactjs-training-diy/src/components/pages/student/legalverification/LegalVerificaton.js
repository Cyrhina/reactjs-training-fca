import React from "react";
import { BiMemoryCard } from "react-icons/bi";

const LegalVerificaton = () => {
  return (
    <>
      <input type="radio" name="tabs" id="tab-3" />
      <label htmlFor="tab-3" className="menu-label">
        <span className="active">Legal Verification</span>
      </label>

      <div className="tab">
        <div className="studentbanner">
          <h2>Legal Verification</h2>
        </div>
        <div className="legalinformation">
          <form>
            <p>
              The school requires that this be a PSA original or "certified true
              copy"Birth Certificate. If not available, a local Civil Registry
              Birth Certificate (original or certified True Copy) or Passport
              (Photocopied at FCA) will be accepted to temporarily be the source
              of the student's full legal name and age.
            </p>
            <h2>
              The indicated documents have been provided to the school and
              copies made:
            </h2>

            <div className="legalinformation__wrapper">
              <div className="legalinfo">
                <label>
                  <input type="checkbox" name="checkbox" />
                  PSA / Philippines Statistics Authority Original Birth
                  Certificate
                </label>
              </div>

              <div className="inputform bottom margin-left10 legalinfo">
                <div className="inputgender">
                  <label className="inputgender  margin-left10">
                    <input type="radio" name="docu-copy" />
                    Original
                  </label>
                  <label className="inputgender  margin-left10">
                    <input type="radio" name="docu-copy" />
                    Photocopy
                  </label>
                </div>
              </div>

              <div className="legalinfo">
                <label>
                  <input type="checkbox" name="checkbox" />
                  LCR / Local Civil Registry Birth Certificate (Temporary
                  Enrollment Only)
                </label>
              </div>

              <div className="legalinfo">
                <label>
                  <input type="checkbox" name="checkbox" />
                  Passport / Photocopy made at FCA (Temporary Enrollment Only)
                </label>
              </div>
            </div>
            <h2>Required School Documents:</h2>

            <div className="legalinformation__wrapper">
              <div className="legalinfo">
                <label>
                  <input type="checkbox" name="checkbox" />
                  Form 138(Report Card) Original
                </label>
              </div>

              <div className="legalinfo">
                <label>
                  <input type="checkbox" name="checkbox" />
                  Certificate of Good Moral
                </label>
              </div>

              <div className="legalinfo">
                <label>
                  <input type="checkbox" name="checkbox" />
                  Certificate of Clearance (Financial and Property
                  Responsibility)
                </label>
              </div>

              <div className="inputform legalinfo">
                <div className="inputname margin-bottom10px">
                  <label>Other Legal Supporting Documents</label>
                </div>
                <div className="input">
                  <textarea
                    name=""
                    id=""
                    cols="140"
                    rows="10"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="inputform legalinfo">
                <div className="inputname margin-bottom10px">
                  <label>Google Drive Folder Link:</label>
                </div>
                <div className="input">
                  <textarea
                    name=""
                    id=""
                    cols="140"
                    rows="10"
                    required
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="studentinfo-button margin-top20">
              <button>
                <span className="margin-r-1rem">
                  <BiMemoryCard />
                </span>
                <span>Save</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LegalVerificaton;
