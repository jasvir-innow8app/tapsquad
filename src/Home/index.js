import React from 'react'
import logo from "../../src/images/tapsquad-logo.png";
import image1 from "../../src/images/image1.png";
import target from "../../src/images/target 1.png";
import vision from "../../src/images/focus 1.png";
import value from "../../src/images/value 1.png";
import ourSkills from "../../src/images/our-skills.png";
import ourService from "../../src/images/our-service.png";
import Schedule from "../../src/images/schedule.png";
import person1 from "../../src/images/person1.png";
import person2 from "../../src/images/person2.png";
import person3 from "../../src/images/person3.png";
import person4 from "../../src/images/person4.png";
import kwipo from "../../src/images/kwipo-img.png";
import tapSquad from "../../src/images/tapsquad.png";
import consultation from "../../src/images/consultation.png";
import partnership from "../../src/images/partnership.png";
import analysis from "../../src/images/analysis-icon.png";
import success from "../../src/images/success.png";
import strategies from "../../src/images/strategies.png";
import intigration from "../../src/images/intigration.png";
import workflow from "../../src/images/workflow.png";
import partner from "../../src/images/partner.png";
import ourWork from "../../src/images/our-work.png";
import testimonial1 from "../../src/images/testimonial1.png";
import testimonial2 from "../../src/images/testimonial2.png";
import testimonial3 from "../../src/images/testimonial3.png";
import microsoft from "../../src/images/microsoft.png";
import azureAi from "../../src/images/azure-ai.png";
import engagement from "../../src/images/engagement.png";
import processing from "../../src/images/processing.png";
import revision from "../../src/images/revision.png";
import backend from "../../src/images/backend.png";
import facebook from "../../src/images/facebook-black.png";
import twitter from "../../src/images/twitter-black.png";
import tsBlack from "../../src/images/TS-black.png";
import youtube from "../../src/images/youtube-black.png";
import navbarIcon from "../../src/images/navbar-icon.png"
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer/footer';

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = (data) => {
    navigate(`/${data}`)
  }
  return (
    <>
      <Navbar />
      <section className='main-section'>
        <div className='container'>
          <div className='main-content'>
            <div className='text-content'>
              <p className='para-1'>Welcome to <span>TapSquad</span></p>
              <p className='para-2'>Your Trusted Partner
                for AI-driven
                <span> Business Transformation</span></p>
              <p className='para-3'>Guided by innovation, transparency, trust, and excellence, our commitment is to continuously innovate in the realm of AI, ensuring our clients remain at the forefront of technology.</p>
              <button className='read-btn'>Read More</button>
              <button className='btn' onClick={() => handleNavigate("contact")}>Contact-us</button>
            </div>
            <div className='img-content'>
              <img src={image1} />
            </div>
          </div>
        </div>
      </section>
      <div className='container'>
        <div className="card-container">
          <h1 className='card-heading'>Vision, Mission, and Value</h1>
          <div className='card-items'>
            <div className='card-details'>
              <img src={target} />
              <h2>Mission</h2>
              <p>To empower mid-market companies with annual revenues between $5 million and $100 million to leverage AI technologies, disrupting traditional business methodologies and optimizing workflows to achieve superior operational efficiency.</p>
            </div>
            <div className='card-details'>
              <img src={vision} />
              <h2>Vision</h2>
              <p>To transform AI from an add-on feature to a key operational element in businesses, revolutionizing the way organizations operate and enhancing their competitiveness in the market.</p>
            </div>
            <div className='card-details'>
              <img src={value} />
              <h2>Values</h2>
              <p>We prioritize Innovation, constantly pushing the boundaries of AI technology. Efficiency is key, as we optimize workflows for maximum operational effectiveness. Above all, we strive for Excellence, delivering high-quality AI solutions that provide exceptional value to our clients.</p>
            </div>
          </div>
        </div>

      </div>
      <div className="container">
        <div className='our-skills'>
          <div className='skill-content'>
            <h1>Our Skills</h1>
            <p>Our team, comprised of skilled AI professionals, designs and implements AI-based strategies unique to each client's needs. We aim to complement your business's established work flows with AI, seeking to foster growth and enhance efficiency in a realistic and practical manner.</p>
          </div>
          <div className='skill-img'>
            <img src={ourSkills} />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='our-Service'>
          <div className='service-img'>
            <img src={ourService} />
          </div>
          <div className='service-content'>
            <h1 className='service-h1'>Our Services</h1>
            <p className='service-para'>At TapSquad, we leverage Microsoft Power Platforms, Azure OpenAI models along side powerful complimentary models to drive the integration of sophisticated AI technologies into your business operations. Our use of these platforms accelerates the delivery of AI strategies due to Microsoft 's leading position in the marketplace and the widespread adoption of their applications.</p>
            <p className='service-para'>Schedule a consultation call</p>
            <img className='schedule' src={Schedule} />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='Ourteam-content'>
          <h1 className='team-heading'>Our Team</h1>
          <div className='team-cards'>
            <div className='team-people'>
              <div className='team-img'>
                <img src={person1} />
              </div>
              <h2 className='team-h2'>James Simmons</h2>
            </div>
            <div className='team-people'>
              <div className='team-img'>
                <img src={person2} />
              </div>
              <h2 className='team-h2'>Justin Simmons</h2>
            </div>
            <div className='team-people'>
              <div className='team-img'>
                <img src={person3} />
              </div>
              <h2 className='team-h2'>Kapil Bindal</h2>
            </div>
            <div className='team-people'>
              <div className='team-img'>
                <img src={person4} />
              </div>
              <h2 className='team-h2'>Jon Krystafik</h2>
            </div>

          </div>
          <button className='view-btn' onClick={() => handleNavigate("team")}>View more</button>
        </div>

      </div>
      <div className='container'>
        <div className="case-studies">
          <div className="kwipo-img">
            <img src={kwipo} />
          </div>
          <div className="tapsquad-img">
            <img src={tapSquad} />
          </div>
        </div>
        <div className='contact-details'>
          <div className='form-detail'>
            <h2 className='detail-h2'>Get a <span>FREE Consultation</span> Call Today</h2>
            <form className='contact-form'>
              <label className='form-label'>Phone Number</label>
              <input type='text' />
              <label className='form-label'>Email ID</label>
              <input type='text' />
            </form>
            <button className='btn'>Contact us</button>
          </div>
          <div className='form-img'>
            <img src={consultation} />
          </div>
        </div>
      </div>

      <div className="container">
        <div className='partner'>
          <div className='partner-img'>
            <img src={partnership} />
          </div>
          <div className='partner-content'>
            <h1>Partner With Us</h1>
            <p>Our team at TapSquad is leading the way in helping businesses across North America harness the power of AI. We’re committed to providing the necessary AI tools to elevate your competitiveness in the modern, AI-driven business landscape. Partner with TapSquad today and let us guide you through the transition to an AI-enhanced future.</p>
          </div>

        </div>
      </div>
      <div className="container">
        <h1 className='work-heading'>Work Process</h1>
        <div class="work-process-container">
          <div class="work-process-card">
            <div class="work-process-number">01</div>
            <div class="work-process-content">
              <h3 class="work-process-heading">Business Need Analysis</h3>
              <div class="work-process-icon-text">
                <img src={analysis} />
                <p class="work-process-paragraph">We  begin our process by thoroughlyunderstanding your unique business needs. Our  experts study your existingoperation to identify the areas that can be enhanced using AI technology.</p>
              </div>
            </div>
          </div>

          <div class="work-process-card">
            <div class="work-process-number">02</div>
            <div class="work-process-content">
              <h3 class="work-process-heading">Identification of Success Pathways and Challenges</h3>
              <div class="work-process-icon-text">
                <img src={success} />
                <p class="work-process-paragraph">Post understanding your business needs, we identify potential pathways to success and map  thechallenges you face. This helps us to tailor our AI strategies effectively.</p>
              </div>
            </div>
          </div>

          <div class="work-process-card">
            <div class="work-process-number">03</div>
            <div class="work-process-content">
              <h3 class="work-process-heading">Development of Custom AI Strategies</h3>
              <div class="work-process-icon-text">
                <img src={strategies} />
                <p class="work-process-paragraph">Leveraging our deep understanding of your business, we devise advanced AI strategies that are explicitly tailored to enhance your business operations and financial results.</p>
              </div>
            </div>
          </div>

          <div class="work-process-card">
            <div class="work-process-number">04</div>
            <div class="work-process-content">
              <h3 class="work-process-heading"> AI Integration</h3>
              <div class="work-process-icon-text">
                <img src={intigration} />
                <p class="work-process-paragraph">Our team of seasoned AI specialists and dedicated developers combines their expertise to integrate these innovative AI strategies into your existing operations with minimal disruption.</p>
              </div>
            </div>
          </div>

          <div class="work-process-card">
            <div class="work-process-number">05</div>
            <div class="work-process-content">
              <h3 class="work-process-heading">Workflow Optimization</h3>
              <div class="work-process-icon-text">
                <img src={workflow} />
                <p class="work-process-paragraph">Post-integration, we take necessary steps to magnify efficiency and smoothen the transition into AI-enabled operations, ensuring your workflows are more productive and less time-consuming.</p>
              </div>
            </div>
          </div>

          <div class="work-process-card">
            <div class="work-process-number">06</div>
            <div class="work-process-content">
              <h3 class="work-process-heading">Long-term Strategic Partnership</h3>
              <div class="work-process-icon-text">
                <img src={partner} />
                <p class="work-process-paragraph">Our ultimate goal is to build a long-term strategic partnership with you, constantly helping your business navigate challenges and convert these into opportunities for growth and success. Our services evolve in line with the world's changing needs, ensuring your business remains at the forefront of innovation.</p>
              </div>
            </div>
          </div>
        </div>


      </div>

      <div className="container">
        <h1 className='work-heading'>Our Work</h1>
        <div class="our-work-container">
          <div class="our-work-item">
            <div class="our-work-image">
              <img src={ourWork} />
            </div>
            <div class="our-work-content">
              <h2 class="our-work-heading">Streamlining Financial Operations with BrightStar LLM Integration</h2>
              <p class="our-work-paragraph">
                In a strategic partnership with BrightStar, TapSquad transformed their financial processes by implementing our customized Large Language Model (LLM) solutions. Our AI technology reduced manual data entry by automating data extraction from financial documents, thereby reducing human error. We introduced automated reporting capabilities, generating critical financial summaries, operational statuses, and timely progress reports. Further, we used an LLM-powered chatbot to automate BrightStar's customer services for 24/7 support and efficient handling of frequently asked questions.
              </p>
              <button class="our-work-btn">Read More</button>
            </div>
          </div>
        </div>


        <div class="our-work-container">
          <div class="our-work-item">

            <div class="left-content">
              <h2 class="our-work-heading">Boosting Sales Productivity with Kwipo LLM Integration</h2>
              <p class="our-work-paragraph">
                During our engagement with Kwipo, we elevated their sales productivity by establishing a generative AI notification system. Our LLM personalized celebratory messages based on the context, adding special value to their accomplishments. Our automated sales report generation provided highlights of key achievements, identified prevailing trends, and suggested potential areas of improvement. Incorporating an LLM- based chatbot enhanced customer interaction, providing instant support and sales assistance
              </p>
              <button class="our-work-btn2">Read More</button>
            </div>
            <div class="our-work-image">
              <img src={ourWork} />
            </div>
          </div>
        </div>


        <div class="our-work-container">
          <div class="our-work-item">
            <div class="our-work-image">
              <img src={ourWork} />
            </div>
            <div class="our-work-content">
              <h2 class="our-work-heading">AI-Powered Meeting Scheduling for Enhanced Productivity</h2>
              <p class="our-work-paragraph">
                To enhance productivity, we developed an AI-powered meetng scheduling assistant using GPT-3.5-Turbo. This assistant, capable of understanding natural language inputs from users, integrated with the Microsoft Outlook API to automate meeting schedules. This project validated the potential of AI-enabled seamless task automation and conversational in increasing productivity.
              </p>
              <button class="our-work-btn">Read More</button>
            </div>
          </div>
        </div>


        <div class="our-work-container">
          <div class="our-work-item">

            <div class="left-content">
              <h2 class="our-work-heading">Revolutionizing Invoice Processing with AI</h2>
              <p class="our-work-paragraph">
                We devised an AI-powered invoice processing system to facilitate the automatic monitoring of emails for invoices. Upon detecting an invoice, our AI model forwards it for approval by reading the necessary details, after which the system updates the invoice status according to the manager's response, concurrently sending noticafications to the relevant parties. This project affirms the potential of AI in bolstering efficiency and streamlining financial procedures, embodying the transformative potential al of AI in business operations.
              </p>
              <button class="our-work-btn2">Read More</button>
            </div>
            <div class="our-work-image">
              <img src={ourWork} />
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <div className="container">
          <h1 className='Testimonial-heading'>Testimonials</h1>
          <p className='Testimonial-para'>What our clients have to say</p>
          <div class="testimonial-section">
            <div class="testimonial-container">

              <div class="testimonial-card-active">
                <div class="testimonial-stars">
                  ★★★★★
                </div>
                <p class="testimonial-text">
                  On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.
                </p>
                <div class="testimonial-profile">
                  <img src={testimonial1} />
                  <div class="profile-info">
                    <p class="profile-name">Serhiy Hipskyy</p>
                    <p class="profile-profession">CEO Universal</p>
                  </div>
                </div>
              </div>


              <div class="testimonial-card">
                <div class="testimonial-stars">
                  ★★★★★
                </div>
                <p class="testimonial-text">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
                </p>
                <div class="testimonial-profile">
                  <img src={testimonial2} />
                  <div class="profile-info">
                    <p class="profile-name">Justus Menke</p>
                    <p class="profile-profession">CEO Eronaman</p>
                  </div>
                </div>
              </div>


              <div class="testimonial-card">
                <div class="testimonial-stars">
                  ★★★★★
                </div>
                <p class="testimonial-text">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.              </p>
                <div class="testimonial-profile">
                  <img src={testimonial3} />
                  <div class="profile-info">
                    <p class="profile-name">Britain Eriksen</p>
                    <p class="profile-profession">CEO Universal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div className="container">
        <h1 className='ai-heading'>AI Business Integration</h1>
        <div class="ai-integration-section">
          <div class="ai-integration-container">

            <div class="ai-integration-card">
              <div class="ai-integration-icon">
                <img src={microsoft} />
              </div>
              <h3 class="ai-integration-heading">Utilizing Microsoft Power Platform</h3>
              <p class="ai-integration-text">We commit to leveraging cutting-edge technology, thereby using the Microsoft Power Platform extensively. This advanced technology stack allows us to provide you with innovative and efficient solutions.</p>
            </div>

            <div class="ai-integration-card">
              <div class="ai-integration-icon">
                <img src={azureAi} />
              </div>
              <h3 class="ai-integration-heading">Azure Open AI Models for LLM Calls</h3>
              <p class="ai-integration-text">We use Microsoft Power Platforms and Azure OpenAI to manage Large Language Model (LLM) calls. By utilizing these models, we enable businesses to solve dynamic problems and derive actionable insights.</p>
            </div>

            <div class="ai-integration-card">
              <div class="ai-integration-icon">
                <img src={engagement} />
              </div>
              <h3 class="ai-integration-heading">Facilitating User Engagement through Work flows</h3>
              <p class="ai-integration-text">The range of automated help includes areas such as proposal generation, HR management, invoicing, scheduling, time management, and more. These services showcase the capabilities of our technology in helping businesses allocate more resources towards growth and expansion.</p>
            </div>
          </div>

          <div class="ai-integration-container">

            <div class="ai-integration-card">
              <div class="ai-integration-icon">
                <img src={backend} />
              </div>
              <h3 class="ai-integration-heading">Robust Backend Structures</h3>
              <p class="ai-integration-text">Our robust yet flexible backend structures offer dynamic control over various workflow sets. This provides us the ability to customize workflows based on your needs and ensures consistent, reliable operations.</p>
            </div>

            <div class="ai-integration-card">
              <div class="ai-integration-icon">
                <img src={processing} />
              </div>
              <h3 class="ai-integration-heading">Efficient Document Processing</h3>
              <p class="ai-integration-text">We use a systematic approach for processing information from various business documents. Our system effectively captures, organizes, and processes information to make precise LLM calls, thereby reducing data wastage and boosting productivity.</p>
            </div>

            <div class="ai-integration-card">
              <div class="ai-integration-icon">
                <img src={revision} />
              </div>
              <h3 class="ai-integration-heading">Revise and Finalize Outputs Interface</h3>
              <p class="ai-integration-text">It helps ensure the results align with your business goals and offers the opportunity for vital adjustments, promoting transparency and inclusivity of our AI solutions. This innovative feature contributes to improved workflow and finanancial growth for your business.</p>
            </div>
          </div>
        </div>

      </div>
      <div className="FAQs">
        <div className="container">
          <h1 className='faq-h1'>Frequently Asked Questions</h1>
          <div class="faq-section">
            <div class="faq-container">

              <div class="faq-card">
                <p class="faq-question">How can adopting TapSquad AI solutions impact my business costs?</p>
                <span class="faq-icon">+</span>
              </div>

              <div class="faq-card">
                <p class="faq-question">Can TapSquads AI solutions be applied to my industry?</p>
                <span class="faq-icon">+</span>
              </div>
            </div>

            <div class="faq-container">

              <div class="faq-card">
                <p class="faq-question">What sets TapSquad apart from other AI development companies?</p>
                <span class="faq-icon">+</span>
              </div>

              <div class="faq-card">
                <p class="faq-question">How do I contact customer support?</p>
                <span class="faq-icon">+</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />

      {/* <div className="container">
        <div class="email-section">
          <div class="email-container">

            <p class="email-text">Email ID</p>


            <div class="email-input-container">
              <input type="email" class="email-input" placeholder="Enter your email" />
              <button class="submit-button">Submit</button>
            </div>
          </div>
        </div>

      </div>

      <div className="container">
        <div className='social-media'>
          <div>
            <p>+1-234-567-8910</p>
          </div>
          <div className='social-links'>
            <img src={facebook} />
            <img src={twitter} />
            <img src={tsBlack} />
            <img src={youtube} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer">
          <div className="footer-details">
            <div>
              <p>© 2023 TapSquad. All rights reserved.</p>
            </div>
            <div>
              <img src={logo} />
            </div>
            <div className='privacy'>
              <p className='privacy-para'>Terms of Service <span>Privacy Policy</span></p>

            </div>
          </div>

        </div>
      </div> */}
    </>
  )
}

export default Home;