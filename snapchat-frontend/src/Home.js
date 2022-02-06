import './Home.css';
import { Outlet, Link } from "react-router-dom";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";


const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());



const Home = () => {
    return (  
        <ScrollContainer  class="background">
            <ScrollPage page={0}>
                <Animator>
                <div class="middle">
                    <p class="middle-text">Leap into AR</p>
                </div> 
                </Animator>
            </ScrollPage>
            {/* <ScrollPage page={1}></ScrollPage> */}
            <ScrollPage page={2}>
                <Animator animation={ZoomInScrollOut}>
                {/* <span style={{ fontSize: "40px" }}>I'm FadeUpScrollOut ✨</span> */}
                    <img src= {require('./images/chess-3.png')} />
                </Animator>
            </ScrollPage>
            <ScrollPage page={3}>
                <Animator animation={FadeUp}>
                <span style={{ fontSize: "60px" }} class="white">Change the Way You Play Chess!</span>
                </Animator>
            </ScrollPage>
            <ScrollPage page={4}>
                <Animator animation={ZoomInScrollOut}>
                    <img src= {require('./images/spectacles.png')} />
                </Animator>
            </ScrollPage>
            <ScrollPage page={5}>
                <Animator animation={FadeUp}>
                    <img src= {require('./images/Snapchat-logo-2.jpg')} />
                </Animator>
            </ScrollPage>
            <ScrollPage page={5}>
                <Animator animation={FadeUp}>
                    {/* <span style={{ fontSize: "40px" }} class="highlight">Learn more about Spectacles! </span> */}
                    <a href="https://www.spectacles.com" style={{ fontSize: "40px" }} class="highlight">Learn more about Spectacles! 🕶️</a>
                    <br></br>
                    <br></br>
                    {/* <span style={{ fontSize: "40px" }} class="highlight">Learn more about Us! </span> */}
                    <Link to="/team" style={{ fontSize: "40px" }} class="highlight">Learn more about us! 😎</Link>
                    
                </Animator>
            </ScrollPage>
            
        </ScrollContainer>
    );
}
 
export default Home;

/*<ScrollPage page={0}>
                <Animator animation={Sticky()}>
                  <Route index element={<Home/>} />
                </Animator>
              </ScrollPage>*/