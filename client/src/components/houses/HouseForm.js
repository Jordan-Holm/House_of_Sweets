import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import {HouseConsumer} from '../../providers/HouseProvider';

import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const HouseForm = ({ addHouse, updateHouse, setAdd, setEdit, id, house_name, address, city, img }) => {
  const [house, setHouse] = useState({ house_name: '', address: '', city: '', img: '' })
  const [file, setFile] = useState()

  useEffect( () => {
    if (id) {
      setHouse({ house_name, address, city, img })
    }
  }, [])

  const defautlImg = "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
  const handleFileUpdate = (fileItems) => {
    if (fileItems.length !== 0) {
      setFile(fileItems)
      setHouse({ ...house, img: fileItems[0].file })
    }
  }

  const handleFileRemoved = ( e, file ) => {
    setFile(null)
    setHouse({ ...house, img: null })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateHouse(id, house)
      setEdit(false)
    } else {
      if (house.img === ''){
        const newHouse = { ...house, img: defautlImg}
        addHouse(newHouse)
      } else {
        addHouse(house)
      }
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
          <FilePond
            files={file}
            onupdatefiles={handleFileUpdate} 
            onremovefile={handleFileRemoved}
            allowMultiple={false}
            name="image"
            labelIdle='Drag and Drop your files or <span class="filepond--label-action">Browse</span>'
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