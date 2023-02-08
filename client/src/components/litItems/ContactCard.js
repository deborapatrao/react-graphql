import { Card } from "antd"
import { EditOutlined } from '@ant-design/icons'
import RemoveContact from "../buttons/RemoveContact"

const getStyles = () => ({
    card:{
        width: '500px'
    }
})

const ContactCard = props => {
    const {id, firstName, lastName} = props
    console.log('props', props)

    const styles = getStyles()


    return(
        <Card style={styles.card}
        actions={[
            <EditOutlined key='edit'/>, <RemoveContact />
        ]}>
            {firstName} {lastName}
        </Card>
    )
}

export default ContactCard