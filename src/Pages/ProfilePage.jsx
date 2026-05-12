import { useEffect, useState } from "react"
import UserProfile from "../Components/UserProfile"
import { USER_API_URL } from '../apiHelper.js'

function ProfilePage() {
    const [userdata, setUserdata] = useState()
    const [trigger, setTrigger] = useState(false)

    // Hooks:
    useEffect(() => {
        async function getUserDataAsync() {
            // fetch a random user from the USER_API_URL
            const response = await fetch(USER_API_URL)
            const jsonData = await response.json()

            // do something with the data
            setUserdata({
                email: jsonData.results[0].email,
                firstName: jsonData.results[0].name.first,
                lastName: jsonData.results[0].name.last,
                username: jsonData.results[0].login.username,
                picture: jsonData.results[0].picture.large
            })

        }
        getUserDataAsync()

    }, [ trigger ]) // 0 dependencies, the useEffect will only run ONCE

    function handleRetriggerEffect() {
        setTrigger(!trigger)
    }

    return (
        <>
            <button onClick={handleRetriggerEffect}>Retrigger</button>
            <UserProfile userdata={userdata} />
        </>
    )
}

export default ProfilePage