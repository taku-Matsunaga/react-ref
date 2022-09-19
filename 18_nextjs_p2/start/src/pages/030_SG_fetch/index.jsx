import axios from 'axios'
import Head from 'next/head'
import ArticlesList from '../../components/articleList'

export default function Page({ articles }) {
  if (!articles) {
    return <div>データがありません</div>
  }
  return (
    <>
      <Head>
        <title>ページ一覧</title>
      </Head>
      <h3>fetch & SG</h3>
      <ArticlesList list={articles} />
    </>
  )
}

export async function getStaticProps() {
  const ENDPOINT = 'http://localhost:4030/articles'
  const result = await axios.get(ENDPOINT).then((res) => res.data)
  console.log(result)
  return { props: { articles: result } }
}
