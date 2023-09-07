import './index.css'
import myImage from '../images/homepageimage.jpg'
import avatar from '../images/avatar.png'


const DetailContainer1 = () => {
    return (<div className = 'homepage-container'>
        <div className = 'content-container'>
            <h1>Design your Dream<br/> home with <br/> Seedtree</h1>
            <p>Custom interior design packages<br/> for single rooms or entire homes<br/> with expert consultations</p>
            <button className = 'book-a-call-btn'> Book a Call</button>

            <div className = 'review-container'>
                    <img src = {avatar} alt = 'review-avatar'/>
                    <div>
                    <p className = 'review-content'>🙶Seedtree made my home renovation project enjoyable and stress free. I highly recommend
                        their interior design services to anyone looking for an expert design plan.🙷</p>

                        <p className = 'reviewer'>- David Greene</p>
                        </div>    
            </div>
            
        </div>
        <div className = 'image-container'>
                <img src = {myImage} alt ='homepage'/>
            </div>
    </div>)
}

export default DetailContainer1