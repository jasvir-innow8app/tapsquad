import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer/footer'
import "../TapsquadTeam/team.css"
import member1 from "../TapsquadTeam/teamMembers/member1.png"
import member2 from "../TapsquadTeam/teamMembers/member2.png"
import member3 from "../TapsquadTeam/teamMembers/member3.png"
import member4 from "../TapsquadTeam/teamMembers/member4.png"
import member5 from "../TapsquadTeam/teamMembers/member5.png"
import member6 from "../TapsquadTeam/teamMembers/member6.png"
import member7 from "../TapsquadTeam/teamMembers/member7.png"
import member8 from "../TapsquadTeam/teamMembers/member8.png"

const Team = () => {
  return (
    <>
      <Navbar />

      <div class="container">
        <div class="heading-section">
          <h2>Our Team</h2>
          <h1>Meet the TapSquad team</h1>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form, by injected humour</p>
        </div>

        <div class="team-cards-section">
          <div class="team-card">
            <img src={member1} />
            <div class="team-card-details">
              <h3>Jocelyn Schleifer</h3>
              <p class="designation">Software Engineer</p>
              <p class="bio">There are many variations of passages of Lorem Ipsum available</p>
              <div class="social-icons">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-twitter"></i>
              </div>
            </div>
          </div>
          <div class="team-card">
            <img src={member2} />
            <div class="team-card-details">
              <h3>Martin Donin</h3>
              <p class="designation">Software Engineer</p>
              <p class="bio">There are many variations of passages of Lorem Ipsum available</p>
              <div class="social-icons">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-twitter"></i>
              </div>
            </div>
          </div>
          <div class="team-card">
            <img src={member3} />
            <div class="team-card-details">
              <h3>Jordyn Septimus</h3>
              <p class="designation">Software Engineer</p>
              <p class="bio">There are many variations of passages of Lorem Ipsum available</p>
              <div class="social-icons">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-twitter"></i>
              </div>
            </div>
          </div>
          <div class="team-card">
            <img src={member4} />
            <div class="team-card-details">
              <h3>Leo Arcand</h3>
              <p class="designation">Software Engineer</p>
              <p class="bio">There are many variations of passages of Lorem Ipsum available</p>
              <div class="social-icons">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-twitter"></i>
              </div>
            </div>
          </div>
          <div class="team-card">
            <img src={member5} />
            <div class="team-card-details">
              <h3>Marilyn Levin</h3>
              <p class="designation">Software Engineer</p>
              <p class="bio">There are many variations of passages of Lorem Ipsum available</p>
              <div class="social-icons">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-twitter"></i>
              </div>
            </div>
          </div>
          <div class="team-card">
            <img src={member6} />
            <div class="team-card-details">
              <h3>Lindsey Dokidis</h3>
              <p class="designation">Software Engineer</p>
              <p class="bio">There are many variations of passages of Lorem Ipsum available</p>
              <div class="social-icons">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-twitter"></i>
              </div>
            </div>
          </div>
          <div class="team-card">
            <img src={member7} />
            <div class="team-card-details">
              <h3>Hanna Dias</h3>
              <p class="designation">Software Engineer</p>
              <p class="bio">There are many variations of passages of Lorem Ipsum available</p>
              <div class="social-icons">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-twitter"></i>
              </div>
            </div>
          </div>

          <div class="team-card">
            <img src={member8} />
            <div class="team-card-details">
              <h3>Ryan Gouse</h3>
              <p class="designation">Software Engineer</p>
              <p class="bio">There are many variations of passages of Lorem Ipsum available</p>
              <div class="social-icons">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-twitter"></i>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default Team