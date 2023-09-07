import './index.css'
import myImage from '../images/img2.jpg'
const DetailContainer2 = () => {
    
    return(<div className = 'homepage-container'>
        <div className = 'image-container left'>
                <img src = {myImage} alt = 'chairs'/>
        </div>
        <div className = 'content-container'>
            <h1>Expert consultations.</h1>
            <p>Our experienced interior designers will work<br/> with you to create a personalized design plan<br/> tailored to your unique needs and style.  </p>
        </div>
    </div>)
}

export default DetailContainer2