import { Button, Form, Input } from "antd"
import { useEffect, useState } from "react"

const UpdateContact = props => {
    const [form] = Form.useForm()
    const [, forceUpdate] = useState()

    useEffect(() => {
       forceUpdate() 
    }, [])

    return(
        <Form
        form={form}
        name='update-contact-form'
        layout='inline'
        size='large'>
            <Form.Item name='firstName'
            rules={[{required: true, message:'Please input your first name!'}]}>
                <Input 
                placeholder='i.e. John'/>
            </Form.Item>

            <Form.Item name='lastName'
            rules={[{required: true, message:'Please input your last name!'}]}>
                <Input 
                placeholder='i.e. Smith'/>
            </Form.Item>

            <Form.Item shouldUpdate={true}>
                {() => (
                    <Button
                    type='primary'
                    htmlType="submit"
                    disabled={(!form.isFieldTouched('firstName') && !form.isFieldTouched('lastName')) || form.getFieldError().filter(({errors}) => errors.length).length
                    }>
                        Update Contact
                    </Button>
                )}
            </Form.Item>
            <Button onClick={props.onButtonClick}>Cancel</Button>
        </Form>
    )
}

export default UpdateContact