import React, { useState } from 'react'
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
<div>
<div className="flex justify-center my-20 text-center">
        <div className={toggleState === 1 
        ? "qualification_button qualification_active button--flex": "qualification_button button--flex"}
        onClick={() => toggleTab(1)}
        >
            <i className="uil uil-graduation-cap mr-1 text-3xl"> </i> {" "}Education
        </div>
        <div className={toggleState ===  2 
        ? "qualification_button qualification_active button--flex": "qualification_button button--flex"}
        onClick={() => toggleTab(2)}
        >
            <i className="uil uil-briefcase-alt mr-1 text-3xl"> </i> {" "}Experience
        </div>
</div>
<div className="container block">

  <div className="timeline">
  <div className={toggleState === 1 ? 
        "flex" : "hidden"}
        >
    <ul>
      <li>
        <div className="timeline-content">
          <h3 className="date">2021- Present</h3>
          <h1>Web Developer</h1>
          <p>Spain - Institute</p>
        </div>
      </li>
      <li>
        <div className="timeline-content">
          <h3 className="date">2021- Present </h3>
          <h1>Front end Developer</h1>
          <p>Spain - Institute</p>
        </div>
      </li>
      <li>
        <div className="timeline-content">
          <h3 className="date">2021- Present   </h3>
          <h1>Mechanical Engineer</h1>
          <p>Cali - Universidad Autónoma de Occidente</p>
        </div>
      </li>
      <li>
        <div className="timeline-content">
          <h3 className="date">2019- 2020   </h3>
          <h1>Mechanical Engineer Intern</h1>
          <p>Cali - Colombian Air Force</p>
        </div>
      </li>
    </ul>
  </div>
  </div>

  <div className="timeline">
  <div className={toggleState === 2 ? 
        "flex" : "hidden"}
        >
    <ul>
      <li>
        <div className="timeline-content">
          <h3 className="date">2023 - Present</h3>
          <h1>Team Lead</h1>
          <p>The Support Heroes</p>
        </div>
      </li>
      <li>
        <div className="timeline-content">
          <h3 className="date">2022-2023</h3>
          <h1>Tier 2</h1>
          <p>The Support Heroes</p>
        </div>
      </li>
      <li>
        <div className="timeline-content">
          <h3 className="date">2021-2022</h3>
          <h1>Tier 1</h1>
          <p>The Support Heroes</p>
        </div>
      </li>
      <li>
        <div className="timeline-content">
          <h3 className="date">2021</h3>
          <h1>Customer Success Advisor(Walmart Groceries and Ebay)</h1>
          <p>Teleperformance</p>
        </div>
      </li>
    </ul>
  </div>
  </div>
</div>
</div>
  )
}

export default Qualification
