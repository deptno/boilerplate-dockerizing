import {createQuery} from 'asql'

export const query = createQuery({
  username: 'postgres',
  database: 'example',
})