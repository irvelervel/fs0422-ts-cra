import { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import Book from './Book'
import { FoodBook } from '../types'

// if you're working with any kind of data coming from an external API or
// something not directly written from you, you need to shape the resources...
// create an interface for it! you can use https://app.quicktype.io/

const FetchComponent = () => {
  const [foodBooks, setFoodBooks] = useState<FoodBook[]>([])

  useEffect(() => {
    fetchBooks()
  }, [])

  const fetchBooks = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/food-books'
      )
      console.log('RESPONSE', response)
      if (response.ok) {
        let data = await response.json()
        console.log('DATA', data)
        setFoodBooks(data)
      } else {
        console.log('error from the server')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>Let's fetch some data!</h1>
      <ListGroup className="text-dark">
        {foodBooks.map((book) => (
          <Book book={book} key={book.id} />
        ))}
      </ListGroup>
    </div>
  )
}

export default FetchComponent
