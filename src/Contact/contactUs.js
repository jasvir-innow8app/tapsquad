import React, { useState } from 'react';
import "../Contact/contact.css"
import Navbar from '../Navbar';
import Footer from '../Footer/footer';
const ContactUs = () => {
  const [currentStep, setCurrentStep] = useState(1); // Track current step

  // Handler to move to the next step
  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Handler to move to the previous step
  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  return (
    <>

      <Navbar />
      <div className='contactUs'>




        <div class="page-content">
          <div class="form-container">

            <div class="steps">
              {[1, 2, 3, 4, 5, 6].map((step) => (
                <div
                  key={step}
                  className={`step ${currentStep === step ? 'current' : currentStep > step ? 'active' : ''}`}
                >
                  <div className="circle">{step}</div>
                  {step < 6 && <div className="line"></div>}
                </div>
              ))}
              {/* <div class="step active">
                <div class="circle">1</div>
                <div class="line"></div>
              </div>
              <div class="step">
                <div class="circle">2</div>
                <div class="line"></div>
              </div>
              <div class="step">
                <div class="circle">3</div>
                <div class="line"></div>
              </div>
              <div class="step">
                <div class="circle">4</div>
                <div class="line"></div>
              </div>
              <div class="step">
                <div class="circle">5</div>
                <div class="line"></div>
              </div>
              <div class="step">
                <div class="circle">6</div>
              </div> */}
            </div>


            <form class="form">

              {currentStep === 1 && (
                <>
                  <div class="form-row">
                    <div class="form-group">
                      <label for="field1">Name</label>
                      <input type="text" id="field1" />
                    </div>
                    <div class="form-group">
                      <label for="field2">Role within the Company</label>
                      <input type="text" id="field2" />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <label for="field3">Company Name</label>
                      <input type="text" id="field3" />
                    </div>
                    <div class="form-group">
                      <label for="field4">Company Website</label>
                      <input type="text" id="field4" />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <label for="field3">Email Id</label>
                      <input type="text" id="field3" />
                    </div>
                    <div class="form-group">
                      <label for="field4">Contact Number</label>
                      <input type="text" id="field4" />
                    </div>
                  </div>
                </>

              )}

              {currentStep === 2 && (
                <>
                  <div class="form-row">
                    <div class="form-group">
                      <label for="field1">Please provide a brief description of your business and its industry</label>
                      <input type="text" id="field1" />
                    </div>
                    <div class="form-group">
                      <label for="field2">What is the size of your company?</label>
                      <label style={{ fontSize: "6px" }}>(Please choose from the options – startup, small business, medium business, large enterprise)</label>
                      <input type="text" id="field2" />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <label for="field1">Is your business currently using any AI solutions? If yes, please specify</label>
                      <input type="text" id="field1" />
                    </div>
                  </div>
                </>
              )}
              {currentStep === 3 && (
                <>
                  <div class="form-row">
                    <div class="form-group">
                      <label for="field1">Please describe any specific operational challenges in your business that you believe could be addressed by AI</label>
                      <input type="text" id="field1" />
                    </div>
                    <div class="form-group">
                      <label for="field2">What specific features or functions are you looking for in an AI solution?</label>
                      <input type="text" id="field2" />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <label for="field1">If you have previously implemented any AI technology, were there any limitations or additional features you wished it had?</label>
                      <input type="text" id="field1" />
                    </div>
                  </div>
                </>
              )}
              {currentStep === 4 && (
                <div class="form-row">
                  <div class="form-group">
                    <label for="field1">Have you allocated a budget for the implementation of AI? If yes, could you provide a rough estimate?</label>
                    <input type="text" id="field1" />
                  </div>
                  <div class="form-group">
                    <label for="field2">Are you the primary decision-maker for this project, or are there others involved in the decision-making process?</label>
                    <input type="text" id="field2" />
                  </div>
                </div>
              )}
              {currentStep === 5 && (
                <>


                  <div class="form-row">
                    <div class="form-group">
                      <label for="field1">Do you have any specific expectations, goals, or concerns regarding the implementation of AI in your business?</label>
                      <input type="text" id="field1" />
                    </div>
                    <div class="form-group">
                      <label for="field2">Is there any other information you'd like us to be aware of?</label>
                      <input type="text" id="field2" />
                    </div>
                  </div>
                </>
              )}
              {currentStep === 6 && (
                <>
                  <div class="form-row">
                    <div class="form-group">
                      <label for="field1">Can you describe your existing data infrastructure?</label>
                      <input type="text" id="field1" />
                    </div>
                    <div class="form-group">
                      <label for="field2">What are the primary data sources your business relies on?</label>
                      <input type="text" id="field2" />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <label for="field1">Do you have any documented templates or processes currently in use that we should know about?</label>
                      <input type="text" id="field1" />
                    </div>
                    <div class="form-group">
                      <label for="field2">What data management or analytics systems do you currently use, if any?</label>
                      <input type="text" id="field2" />
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label for="field1">How does your organization handle data privacy and security?</label>
                      <input type="text" id="field1" />
                    </div>
                  </div>
                </>
              )}

              {/* <div class="form-row">
                <div class="form-group">
                  <label for="field3">Company Name</label>
                  <input type="text" id="field3" />
                </div>
                <div class="form-group">
                  <label for="field4">Company Website</label>
                  <input type="text" id="field4" />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="field5">Email Id</label>
                  <input type="text" id="field5" />
                </div>
                <div class="form-group">
                  <label for="field6">Contact Number</label>
                  <input type="text" id="field6" />
                </div>
              </div> */}
              {/* <div class="form-buttons">
                <button type="button" class="cancel">Cancel</button>
                <button type="submit" class="next">Next</button>
              </div> */}




              {/* {currentStep === 2 && (
                <div class="form-row">
                  <div class="form-group">
                    <label for="field1">Name</label>
                    <input type="text" id="field1" />
                  </div>
                  <div class="form-group">
                    <label for="field2">Role within the Company</label>
                    <input type="text" id="field2" />
                  </div>
                </div>
              )}
              <div class="form-row">
                <div class="form-group">
                  <label for="field3">Company Name</label>
                  <input type="text" id="field3" />
                </div>
                <div class="form-group">
                  <label for="field4">Company Website</label>
                  <input type="text" id="field4" />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="field5">Email Id</label>
                  <input type="text" id="field5" />
                </div>
                <div class="form-group">
                  <label for="field6">Contact Number</label>
                  <input type="text" id="field6" />
                </div>
              </div> */}
              <div className="form-buttons">
                {currentStep > 1 && (
                  <button
                    type="button"
                    className="cancel"
                    onClick={handlePrevious}
                  >
                    Cancel
                  </button>
                )}
                {currentStep < 6 ? (
                  <button
                    type="button"
                    className="next"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                ) : (
                  <button type="submit" className="submit">
                    Submit
                  </button>
                )}
              </div>

            </form>
          </div>
        </div>

        {/* <footer class="footer">
          <p>Footer Content</p>
        </footer> */}

      </div>
      <Footer />



    </>

  )
}
export default ContactUs;