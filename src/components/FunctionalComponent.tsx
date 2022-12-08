import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

interface FunctionalComponentProps {
  subTitle: string
  count: number
  customClassName?: string
}

interface PastaObject {
  id: number
  name: string
  label: string
  price: number
}

// this is an example on how to type the props object without destructuring
// const FunctionalComponent = (props: FunctionalComponentProps) => {}

const FunctionalComponent = ({
  customClassName,
  subTitle,
  count,
}: FunctionalComponentProps) => {
  const [selectedName, setSelectedName] = useState('Alexander')

  const [selectedPasta, setSelectedPasta] = useState<null | PastaObject>(null)

  const navigate = useNavigate()

  return (
    <div>
      <h1 className={customClassName}>Functional TS Component!</h1>
      <h2>{subTitle}</h2>
      <p>{count}</p>
      <h3
        onClick={() => {
          setSelectedName(selectedName === 'Alexander' ? 'Olaf' : 'Alexander')
        }}
      >
        {selectedName}
      </h3>
      <div>
        <h4
          onClick={() =>
            setSelectedPasta({
              name: 'Carbonara',
              id: 0,
              label: 'fatty',
              price: 7.99,
            })
          }
        >
          Current selected pasta:
        </h4>
        {selectedPasta && (
          <div>
            <p>{selectedPasta.name}</p>
            <p>{selectedPasta.label}</p>
            <p>{selectedPasta.price}</p>
          </div>
        )}
      </div>
      <Button variant="warning" onClick={() => navigate('/class')}>
        GO TO CLASS
      </Button>
    </div>
  )
}

export default FunctionalComponent
