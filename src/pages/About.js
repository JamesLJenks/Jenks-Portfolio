import React from "react"



function About() {
  return (
    <div className="App">
       {/* <!-- Skills Section --> */}
    <section id="skills" class="skills-section container-fluid p-5">
        <div>
            <h2 class="text-center">What I Do</h2>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="container col-md-4 skills-card text-center p-4">
                    <img src="./assets/images/Design-Icon.png" alt="Design icon"/>
                    <h4 class="skills-title">Design</h4>
                    <p>Thoughtfully create high-quality digital and print graphics, layouts, and visual brand identities.</p>
                </div>
                <div class="container col-md-4 skills-card text-center p-4">
                    <img src="./assets/images/UX-Icon.png" alt="UI/UX icon"/>
                    <h4 class="skills-title">UI/UX</h4>
                    <p>Design user-oriented interfaces and apps that address pain points and improve experiences.</p>
                </div>
                <div class="container col-md-4 skills-card text-center p-4">
                    <img src="./assets/images/Dev-Icon.png" alt="Development icon"/>
                    <h4 class="skills-title">Web Development</h4>
                    <p>Develop full-stack web applications with attention to user story and acceptance criteria.</p>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
}

export default About;
