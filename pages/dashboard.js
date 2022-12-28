import {useSession} from 'next-auth/react'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import {signOut} from 'next-auth/react';

function dashboard() {
  const router = useRouter();
  const {status, data} = useSession();
  useEffect(() => {
    if(status === 'unauthenticated') router.push('/login')
  }, [status])

  if(status === 'authenticated'){
    return (
      <div>
        {JSON.stringify(data.user, null, 2)}
        <button onClick={() => fetch('/api/posts', {method: 'POST'})}>Get session</button>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }

  return (
    <div>Loading...</div>
  )
}

export default dashboard