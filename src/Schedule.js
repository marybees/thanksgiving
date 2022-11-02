import React from "react";
import turkey from "./bw-turkey.png";
import table from "./assets/wes.JPG";

const Schedule = () => {
    return (
        <div>
            <div className="body">
                <div className="body-half" id="body-two">
                    <div id="body-two-heading-container">
                    </div>
                    <div id="body-two-title">
                        <h1>Schedule of Events</h1>
                        <div className="image">
                            <img src={turkey} alt="turkey" />
                        </div>
                    </div>
                    <div className="body-two-paragraph">
                        <p>1:00 PM: Arrive</p>
                        <p>3:00 PM: Dinner</p>
                        <p>3:30 PM: Dessert</p>
                        <p>4:00 PM: Thanksgiving Olympics</p>
                        <br></br>
                        <p style={{ fontStyle: "italic" }}>Reigning Champ: Wesley Griffith</p>
                    </div>
                </div>
                <div className="body-half" id="body-one" style={{ backgroundImage: `url(${table})`, transform: 'scale(1, 1)' }}></div>
            </div>
        </div>
    );
};

export default Schedule;
