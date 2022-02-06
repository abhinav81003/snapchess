import './About.css';

const About = () => {
    return (  
        <div className="about-class">
            <h1 class="about-header">about</h1>
            <p>Simple joys are here to stay...Leap into AR!</p>

            <p>SnapChess! is a fully scaled revamp and simulation of the classical game of chess.</p>
            <p>SnapChess! runs primarily on the Snap Spectacles Physics API. Integrating tap-gesture 
                selection and persistent marker memory throughout each move, we were able to create a 
                seamless and intuitive user experience that easily scales to an endless array of board 
                games and tabletop experiences.</p>

            <p>After making it through the initial Lens Studio learning curve...    
               we discovered the possibilities of what Snap Spectacles can become, we faced two main issues. 
               Primarily, the limited persistent data storage capacity (3 kb) made continuous experiences--across 
               multiple uses of the lenses--virtually impossible. Still, we designed the underlying applications of 
               the simple game of chess to be easily extended once the technology is ready for it. A larger 
               spectacle display size would also be nice! </p>

            <p>Snap Spectacles are such a new and exciting product. But this comes with some drawbacks...
               For one, the lack of online resources (besides the official API), made it initially difficult 
               to get a handle on the application. However, we understand that this is merely because the product 
               themselves aren't commercially available.</p>

            <p>We are excited for what the future of Snap Lens Development holds...
               While the technology is currently in its early stages of adoption and public recognition, 
               we recognized the potential that a pair of AR glasses offers. If executed correctly, the will 
               democratize a new era of immersive experiences, breakthrough entertainment, and the human experience.</p>

            <p>The goal of SnapChess! was never just to show that ARchess was possible, or that we could build something 
               fun and easily shared with Snap Spectacles tech (although we did)...
               Instead, our purpose in this years edition of HackSC was to prove one simple belief: Immersive experiences 
               start with others. Regardless of how visually impressive or innovative AR technology becomes, there's no 
               future to be had without the joy and company joy of spending time with those we care about.</p>

            <p>Scan our code and make a move! Leap into SnapChess!</p>
        </div>
    );
}
 
export default About;