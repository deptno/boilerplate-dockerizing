import {NextPage} from 'next'
import {useEffect, useState} from 'react'

export const Index: NextPage = props => {
  const [items, setItems] = useState([])
  const read = () => {
    fetch('/api/readTable0')
      .then(response => response.json())
      .then(setItems)
  }
  const create = e => {
    e.preventDefault()

    fetch('/api/postTable0', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        name: e.target.elements.namedItem('name').value
      }),
    })
      .then(response => response.json())
      .then(setItems)
      .then(read)
  }

  useEffect(read, [])

  return (
    <div>
      <form onSubmit={create}>
        <input name="name" type="text" placeholder="이름"/>
        <button>생성</button>
      </form>
      <ul>
        {items.map(item => {
          return (
            <li>{item.id}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default Index

type Props = {}
