import axios from 'axios'

const JSON_SERVER_URL = `${process.env.JSON_SERVER_URL}/articles`


export default async function handler(req, res) {
  const { method, query } = req

  try {
    if (method === 'GET') {
      const result = await axios.get(`${JSON_SERVER_URL}/${query.id}`).then((res) => res.data)
      return res.status(200).json(result)
    }
  } catch (error) {}

  return res.status(500).json({
    error: {
      status: 500,
      code: 'Bad_Request',
      message: '不正なリクエストです'
    }
  })
}
