import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export interface Props {}

const AuthRoute: React.FunctionComponent<Props> = (props) => {
  const auth = getAuth();
  const [pending, setPending] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AuthCheck();
  }, [auth])

  const AuthCheck = onAuthStateChanged(auth, (user) => {
    if (user) {
      setPending(false);
    } else {
      console.log('unauthorized');
      navigate('/login');
    }
  })

  if (pending) return <p>Loading...</p>

  return (
    <></>
  );
}

export default AuthRoute;