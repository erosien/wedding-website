import { signOut } from "firebase/auth";
import { auth } from "../config/firebase.config";
import { Button } from 'react-bootstrap';

export default function AuthState() {
    const user = auth.currentUser;
    if (user !== null) {
      const displayName = user.displayName;
      const email = user.email;
      const emailVerified = user.emailVerified;
    }

  return (
    <></>
  )
}