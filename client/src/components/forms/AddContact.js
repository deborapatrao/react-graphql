import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Button, Form, Input } from 'antd'

const AddContact = () => {
    const [id] = useState(uuidv4())
    const [form] = Form.useForm()
    const[,forceUpdate] = useState()

    useEffect(() => {
        forceUpdate([])
    }, [])

    const onFinish = values => {
        console.log('values: ', values)
    }

return(
    <Form 
    name='add-contact-form'
    form={form}
    layout='inline'
    onFinish={onFinish}
    size='large'
    style={{marginBottom: '40px'}}>
        <Form.Item name='firstName' rules={[{required:true, message:'Please input your first name!'}]}>
            <Input placeholder='i.e. John'/>
        </Form.Item>

        <Form.Item name='LastName' rules={[{required:true, message:'Please input last name!'}]}>
            <Input placeholder='i.e. Smith'/>
        </Form.Item>

        <Form.Item shouldUpdate={true}>
            {() => (
                <Button 
                type='primary'
                htmlType='submit'
                disabled={!form.isFieldsTouched(true) || form.getFieldsError().filter(({ errors }) => errors.length).length}>Add Contact</Button>
            )}
        </Form.Item>
    </Form>
)

}

export default AddContact