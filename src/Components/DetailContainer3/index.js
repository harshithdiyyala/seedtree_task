
import myImage from '../images/img3.jpg'
const DetailContainer3 = () => {

    return(<div className = 'homepage-container'>
        
        <div className = 'content-container'>
            <h1>Customized packages.</h1>
            <p>Choose from a range of custom<br/> packages that fit your needs, from single room design services<br/> to full house design plans.</p>
        </div>
        <div className = 'image-container'>
                <img src = {myImage} alt = 'chairs'/>
        </div>
    </div>)
}

export default DetailContainer3