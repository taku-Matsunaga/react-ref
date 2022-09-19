import { useEffect, useState } from 'react'

export default function SSR({ message = 'test' }) {
  console.log('hello')
  console.log(message)
  const [state, setState] = useState('bye')
  const val = 0

  useEffect(() => {
    console.log('use effect')
    document.cookie = 'val=0; path=/;'
  }, [])
  return <h3>{state}</h3>
}

// export async function getServerSideProps(context) {
//   const { cookie } = context.req.headers
//   console.log(cookie)
//   return {
//     // redirect: {
//     //   destination: '/',
//     //   permanent: true
//     // },
//     props: { message: 'From Serve Side Props' }
//   }
// }
