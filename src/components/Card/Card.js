import "./Card.css";

const Card = ({ fullName, avatar, title, email, about, interests }) => {
    return (
        <div className="card">
            <div className="card--header">
                <img src={avatar} alt={fullName} />
            </div>
            <div className="card--body">
                <div className="card--body--title">
                    <h1>{fullName}</h1>
                    <p className="card--body--title--position">{title}</p>
                    <p className="card--body--title--email">{email}</p>
                </div>
                <div className="card--body--link">
                    <button className="card--body--link--email">
                        <i class="fa-solid fa-envelope"></i>
                        <span>Email</span>
                    </button>
                    <button className="card--body--link--linkedin">
                        <i class="fa-brands fa-linkedin"></i>
                        <span>LinkdIn</span>
                    </button>
                </div>
                <div className="card--body--info">
                    <div>
                        <h3>About</h3>
                        <p>{about}</p>
                    </div>
                    <div>
                        <h3>Interests</h3>
                        <p>{interests}</p>
                    </div>
                </div>
            </div>
            <div className="card--footer">
                <i class="fa-brands fa-square-twitter"></i>
                <i class="fa-brands fa-square-facebook"></i>
                <i class="fa-brands fa-square-instagram"></i>
                <i class="fa-brands fa-square-github"></i>
            </div>
        </div>
    )
}

export default Card;