import {NextApiHandler} from 'next'
import {query} from './lib'
import {sql} from 'asql'

const postTable0: NextApiHandler = (req, res) => {
  const {name} = req.body
  const [q, a] = sql`
insert into
  example.table0
values
  (${name})
`

  query(q, a).then(res.json)
}

export default postTable0