import {NextApiHandler} from 'next'
import {query} from './lib'
import {sql} from 'asql'

const readTable0: NextApiHandler = (req, res) => {
  const [q, a] = sql`
select
  id
, create_at
from 
  example.table0
order by
  create_at desc
`

  query(q, a).then(res.json)
}

export default readTable0