import myImage from '../images/Ellipse 3.png'
import myImage1 from '../images/Ellipse 4.png'
import myImage2 from '../images/Ellipse 5.png'
import myImage3 from '../images/Ellipse 6.png'
import myImage4 from '../images/Ellipse 7.png'
import myImage5 from '../images/Ellipse 8.png'
import myImage6 from '../images/Ellipse 10.png'
import './index.css'

const FooterContainer = () => {

    return(<div className = 'footer-container'>
        <div className = 'footer-content'>
            <div>
            <img src = {myImage} alt = 'avatar'/>
            <img src = {myImage1} alt = 'avatar'/>
            <img src = {myImage2} alt = 'avatar'/>
            <img src = {myImage3} alt = 'avatar'/>
            <img src = {myImage4} alt = 'avatar'/>
            <img src = {myImage5} alt = 'avatar'/>
            <img src = {myImage6} alt = 'avatar'/>
            </div>
            <h1>Start designing your dream home today.</h1>
            
            <button className = 'footer-container-btn'>Book a Call</button>

        </div>
    </div>)
}
export default FooterContainer