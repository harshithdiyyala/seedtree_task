
import myImage from '../images/img4.jpg'
const DetailContainer4 = () => {
    
    return(<div className = 'homepage-container'>
        <div className = 'image-container left'>
                <img src = {myImage} alt = 'chairs'/>
        </div>
        <div className = 'content-container'>
            <h1>Online platform.</h1>
            <p>Take advantage of our online platform<br/> to collaborate remotely with your<br/> designer, share ideas and get real-<br/>time feedback on your design project.
</p>
        </div>
    </div>)
}

export default DetailContainer4