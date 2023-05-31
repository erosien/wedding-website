import { useNavigate } from "react-router-dom";
import { useEffect } from "react"
import { auth } from "../config/firebase.config";
import { signOut } from "firebase/auth";

export default function SignOut () {
    const navigate = useNavigate();

    useEffect(() => {
        signOut(auth)
            .then(() => {
                navigate("/")
            })
    }, [])

    return <></>
}