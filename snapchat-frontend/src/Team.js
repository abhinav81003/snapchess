import './Team.css';

const Team = () => {
    return (  
        <div>
            <h1>our team</h1>
            <div className="top-row">
                <div className='under-1'>

                    <img src= {require("./images/abhinav-bitmoji.png")} className="team-photo" alt="Photo of Abhinav"></img>
                
                    <div className="text">
                        <p className="member-name">Abhinav Gupta</p>
                        <p className="member-desc">Fullstack developer and AI researcher. CSCI Major at USC.</p>
                    </div>
                </div>

                <div className='under-2'>
                    <img src= {require("./images/daniel-bitmoji.png")} className="team-photo" alt="Photo of Daniel"></img>
                    <div className="text">
                        <p className="member-name">Daniel He</p>
                        <p className="member-desc">CSCI Major at USC.</p>
                    </div>
                </div>
            </div>

            <div className="bottom-row">
                <div className='under-3'> 
                    <img src= {require("./images/wonjun-bitmoji.png")} className="team-photo" alt="Photo of Wonjun"></img>
                    <div className="text">
                        <p className="member-name">Wonjun Lee</p>
                        <p className="member-desc">CSCI Major at USC.</p>
                    </div>
                </div>

                <div className='under-4'> 
                    <img src= {require("./images/cecil-bitmoji.png")} className="team-photo" alt="Photo of Cecil"></img>
                    <div className="text">
                        <p className="member-name">Cecil Kong</p>
                        <p className="member-desc">CS (Games) Major at USC.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Team;