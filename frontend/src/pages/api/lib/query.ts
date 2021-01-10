import {Pool} from 'pg'
import debug from 'debug'
import {createQuery} from './createQuery'

const pool = new Pool({
  database: 'example',
  user: 'postgres',
})

pool.on('error', (e) => debug.fatal('PG POOL ERROR: %s', e));

export const query = createQuery(pool)
