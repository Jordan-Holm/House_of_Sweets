import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import {HouseConsumer} from '../../providers/HouseProvider'

const HouseForm = ({ addHouse, updateHouse, setAdd, id, house_name, address, city, img, setEdit }) => {
  const [house, setHouse] = useState({ house_name: '', address: '', city: '', img: '' })
  
  useEffect( () => {
    if (id) {
      setHouse({ house_name, address, city, img, })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateHouse(id, house)
      setEdit(false)
    } else {
      addHouse(house)
      setAdd(false)
    }
    setHouse({ house_name: '', address: '', city: '', img: '' })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>House Name</Form.Label>
          <Form.Control 
            name='house_name'
            value={house.house_name}
            onChange={(e) => setHouse({...house, house_name: e.target.value })}
            placeholder="house name" 
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control 
            name='Address'
            value={house.address}
            onChange={(e) => setHouse({...house, address: e.target.value })}
            placeholder="address" 
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>City</Form.Label>
          <Form.Control 
            name='City'
            value={house.city}
            onChange={(e) => setHouse({...house, city: e.target.value })}
            placeholder="city" 
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>House Image</Form.Label>
          <Form.Control 
            name='img'
            value={house.img}
            onChange={(e) => setHouse({...house, img: e.target.value })}
            placeholder="image" 
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedHouseForm = (props) => (
  <HouseConsumer>
    { value => <HouseForm {...props} {...value} />}
  </HouseConsumer>
)

export default ConnectedHouseForm;