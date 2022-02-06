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
                    <img src= {require('./chess-123.jpg')} />
                </Animator>
            </ScrollPage>
            <ScrollPage page={2}>
                <Animator animation={FadeUp}>
                <span style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</span>
                </Animator>
            </ScrollPage>
            <ScrollPage page={3}></ScrollPage>
        </ScrollContainer>
    );
}
 
export default Home;

/*<ScrollPage page={0}>
                <Animator animation={Sticky()}>
                  <Route index element={<Home/>} />
                </Animator>
              </ScrollPage>*/