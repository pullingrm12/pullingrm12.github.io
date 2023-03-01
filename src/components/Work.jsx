import React, { useState, useEffect } from "react";

function Work() {
  const [index, setIndex] = useState(0);
  const companies = ["Crumbl Cookies", "City Bark", "PedalHeads", "Target"];
  const descriptions = [
    "Driving lead and delivery driver at Crumbl, delivering cookies around 16 hours a week during school and 32 hours a week during break. Worked at three different locations.  Extended roles included scheduling, interviewing, hiring, and managing, as well as administering internal systems.",
    "Observed and protected dogs at a pet resort for the summer. Helped teach dogs, in groups of up to 15, behavior such as waiting at a gate as well as trained new employees. ",
    "Camp counselor for kids over the summer. Taught kids ranging from eight to fourteen in groups of two to five how to bike.  Led groups on trail rides. Created games and challenges to help in learning. ",
    "Worked as a guest advocate which entailed working at checkout, self-checkout, and guest services. Communicated with customers to address issues and improve their shopping experience proactively.",
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((index) => (index + 1) % companies.length);
    }, 10000);
    return () => clearInterval(id);
  });

  return (
    <div className="container">
      <div className="card">
        <div className="content">
          <div className="cardContent">
            <h3>
              Work Experience : <br></br>
              General
            </h3>
            <h3>{companies[index]}</h3>
            <p className="cardP">{descriptions[index]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
