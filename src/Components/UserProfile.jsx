import "./UserProfile.css"

function UserProfile(props) {
    return (
        <>
            {props.userdata ? <div className="user-container">
                <img className="user-picture" src={props.userdata.picture} alt={`${props.userdata.firstName} ${props.userdata.lastName}`} />

                <div className="user-text">
                    <p><b>Username: </b>{props.userdata.username}</p>
                    <p><b>Email: </b>{props.userdata.email}</p>
                    <p><b>Full Name: </b>{props.userdata.firstName} {props.userdata.lastName}</p>
                </div>

            </div> : <div>
                <p>Userdata is still loading...</p>
            </div>}
        </>
    )
}

export default UserProfile