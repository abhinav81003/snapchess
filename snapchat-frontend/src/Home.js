import './Home.css';

import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";


const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());


const Home = () => {
    return (  
        <ScrollContainer>
            <ScrollPage page={0}>
                <Animator animation={Fade()}>
                <div class="middle">
                    <p class="middle-text">Leap into AR</p>
                </div> 
                </Animator>
            </ScrollPage>
            <ScrollPage page={1}>
                <Animator animation={ZoomInScrollOut}>
                {/* <span style={{ fontSize: "40px" }}>I'm FadeUpScrollOut ✨</span> */}
                    <img src= {require('./images/chess-123.jpg')} />
                </Animator>
            </ScrollPage>
            <ScrollPage page={2}>
                <Animator animation={FadeUp}>
                <span style={{ fontSize: "40px" }}>New Way to Play Chess</span>
                </Animator>
            </ScrollPage>
            <ScrollPage page={3}>
                <Animator animation={ZoomInScrollOut}>
                    <img src= {require('./images/spectacles.png')} />
                </Animator>
            </ScrollPage>
            <ScrollPage page={4}>
                <Animator animation={FadeUp}>
                    <img src= {require('./images/Snapchat-logo-2.jpg')} />
                </Animator>
            </ScrollPage>
            <ScrollPage page={5}>

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