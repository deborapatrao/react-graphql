import { Card } from "antd"

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
        <Card style={styles.card}>
            {firstName} {lastName}
        </Card>
    )
}

export default ContactCard