import { ListGroup } from 'react-bootstrap'
import { FoodBook } from '../types'

interface BookProps {
  book: FoodBook
}

const Book = ({ book }: BookProps) => {
  return (
    <ListGroup.Item>
      {book.title} | {book.price}$
    </ListGroup.Item>
  )
}

export default Book
