import { useRouter } from 'next/router'

export default function Setting({ query }) {
  const router = useRouter()
  console.log(router.query)
  const clickHandler = () => {
    router.replace('/')
  }

  return (
    <>
      <h1>routerから取得:{router.query.name}</h1>
      <button onClick={clickHandler}>画面遷移</button>
    </>
  )
}

export async function getServerSideProps({ query }) {
  return {
    props: { query }
  }
}
