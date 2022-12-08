import { useState, ChangeEvent, FormEvent } from 'react'
import { Alert, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const BootstrapComponent = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkboxValue, setCheckboxValue] = useState(true)

  const navigate = useNavigate()

  // if you want to link to an event listener your own separate function,
  // the event carried over loses its typings
  // so you'll have to assign the type of the event manually
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('form sent!')
  }

  return (
    <div>
      <Alert variant="success" dismissible={true}>
        Just an example Alert!
      </Alert>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmail}
            // onChange={handleEmail}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Check
            type="checkbox"
            label="Check me out"
            checked={checkboxValue}
            onChange={(e) => setCheckboxValue(e.target.checked)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

        <div>
          <Button variant="warning" onClick={() => navigate('/')}>
            GO HOME
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default BootstrapComponent
