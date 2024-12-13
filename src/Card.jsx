import profilePic from './assets/my picture.png'
function Card(){

    return(
        <div className="card">
            <img className='cardImage' src={profilePic} alt="profile picture" />
            <h2 className='cardTitle'>Abdellah Khouden</h2>
            <p className='cardText'>I make webistes and and play video games</p>
        </div>
    );
}


export default Card;