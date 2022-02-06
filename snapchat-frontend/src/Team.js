import './Team.css';

const Team = () => {
    return (  
        <div>
            <div className="top-row">
                <img src= {require("./images/abhinav-bitmoji.jpg")} className="team-photo" alt="Photo of Abhinav"></img>
                <p class="member-name">Abhinav Gupta</p>
                <p class="member-desc">desc</p>

                <img src= {require("./images/daniel-bitmoji.jpg")} className="team-photo" alt="Photo of Daniel"></img>
                <p class="member-name">Daniel He</p>
                <p class="member-desc">desc</p>
            </div>
            <div className="bottom-row">
                <img src= {require("./images/wonjun-bitmoji.jpg")} className="team-photo" alt="Photo of Wonjun"></img>
                <p class="member-name">Wonjun Lee</p>
                <p class="member-desc">desc</p>

                <img src= {require("./images/cecil-bitmoji.jpg")} className="team-photo" alt="Photo of Cecil"></img>
                <p class="member-name">Cecil Kong</p>
                <p class="member-desc">desc</p>
            </div>
        </div>
    );
}
 
export default Team;