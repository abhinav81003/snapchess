import './Team.css';

const Team = () => {
    return (  
        <div>
            <div className="top-row">
                <img src= {require("./images/abhinav-bitmoji.png")} className="team-photo" alt="Photo of Abhinav"></img>
                <div className="under-1"/>
                <div className="text">
                    <p className="member-name">Abhinav Gupta</p>
                    <p className="member-desc">desc</p>
                </div>

                <img src= {require("./images/daniel-bitmoji.png")} className="team-photo" alt="Photo of Daniel"></img>
                <div className="under-2"/>
                <div className="text">
                    <p className="member-name">Daniel He</p>
                    <p className="member-desc">desc</p>
                </div>
            </div>

            <div className="bottom-row">
                <img src= {require("./images/wonjun-bitmoji.png")} className="team-photo" alt="Photo of Wonjun"></img>
                <div className="under-3"/>
                <div className="text">
                    <p className="member-name">Wonjun Lee</p>
                    <p className="member-desc">desc</p>
                </div>

                <img src= {require("./images/cecil-bitmoji.png")} className="team-photo" alt="Photo of Cecil"></img>
                <div className="under-4"/>
                <div className="text">
                    <p className="member-name">Cecil Kong</p>
                    <p className="member-desc">desc</p>
                </div>
            </div>
        </div>
    );
}
 
export default Team;