import React from 'react'

function Skills() {
  return (
    <div>
       <div className="service_section">
            <h2 className="service_heading font-bold text-xl">My Skills</h2>
            <div className="service_container">
                <div className="service_card">
                    <i className="uil uil-create-dashboard"></i>
                    <h4 className="card_heading">Web Development</h4>
                </div>
                <div className="service_card">
                    <i className="uil uil-images"></i>
                    <h4 className="card_heading">Graphic Design</h4>
                </div>
                <div className="service_card">
                    <i className="uil uil-java-script"></i>
                    <h4 className="card_heading">JavaScript</h4>
                </div>
                <div className="service_card">
                    <i className="uil uil-html5-alt"></i>
                    <h4 className="card_heading">HTML</h4>
                </div>
                <div className="service_card">
                    <i className="uil uil-css3-simple"></i>
                    <h4 className="card_heading">CSS</h4>
                </div>
                <div className="service_card">
                    <i className="uil uil-palette"></i>
                    <h4 className="card_heading">Web Design</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
