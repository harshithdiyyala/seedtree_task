import './index.css'
import avatar from '../images/avatar.png'

const ReviewsContainer = () => {
  return(<div className = 'review-container model2'>
  
  <p className = 'review-content'>🙶"The customized package from Seedtree was exactly what I needed to bring my vision to life. I'm thrilled with my new home design!🙷</p>
  <div>
  <img src = {avatar} alt = 'review-avatar' /> 

      <p className = 'reviewer'> Alessio Belcastro</p>
      </div>    
</div>)
}

export default ReviewsContainer