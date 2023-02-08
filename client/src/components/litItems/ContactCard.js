import { Card } from "antd"
import { EditOutlined } from '@ant-design/icons'
import RemoveContact from "../buttons/RemoveContact"
import { useState } from "react"
import UpdateContact from "../forms/UpdateContact"

const getStyles = () => ({
    card:{
        width: '500px'
    }
})

const ContactCard = props => {
    const {id, firstName, lastName} = props
    const styles = getStyles()

    const [editMode, setEditMode] = useState(false)

    const handleButtonClick = () => {
        setEditMode(!editMode)
    }
 

    return(
        <div>
            {editMode ? (<UpdateContact onButtonClick={handleButtonClick} />) : (
                <Card style={styles.card}
                actions={[
                    <EditOutlined key='edit' onClick={handleButtonClick}/>, <RemoveContact />
                ]}>
                    {firstName} {lastName}
                </Card>
            ) }
        
        
        </div>
    )
}

export default ContactCard