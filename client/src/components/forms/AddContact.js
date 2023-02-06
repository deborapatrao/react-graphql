import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Form, Input } from 'antd'

const AddContact = () => {
    const [id] = useState(uuidv4())


return(
    <Form 
    name='add-contact-form'
    layout='inline'
    size='large'
    style={{marginBottom: '40px'}}>
        <Form.Item name='firstName' rules={[{required:true, message:'Please input your first name!'}]}>
            <Input placeholder='i.e. John'/>
        </Form.Item>

        <Form.Item name='LasttName' rules={[{required:true, message:'Please input last name!'}]}>
            <Input placeholder='i.e. Smith'/>
        </Form.Item>
    </Form>
)

}

export default AddContact