import { gql } from 'apollo-server-express'
import { find, remove } from 'lodash'

const contactsArray =[
    {
        id: '1',
        firstName: 'Paul',
        lastName: 'Lam'
    },
    {
        id: '2',
        firstName: 'Elon',
        lastName: 'Musk'
    },
    {
        id: '3',
        firstName: 'Steve',
        lastName: 'Jobs'
    }
]

const typeDefs = gql`
    type Contact {
        id: String!
        firstName: String
        lastName: String
    }

    type Query {
        contact(id: String!): Contact
        contacts: [Contact]
    }

    type Mutation{
        addContact(id: String!, firstName: String!, lastName: String!): Contact
        updateContact(id: String!, firstName: String, lastName: String): Contact
        removeContact(id: String!): Contact
    }
`

const resolvers = {
    Query: {
        contacts: () => contactsArray,
        contact: (root, args) => {
            return find(contactsArray, { id: args.id })
        }
    },

    Mutation: {
        addContact: (root, args) => {
            const newContact = {
                id: args.id,
                firstName: args.firstName,
                lastName: args.lastName
            }

            contactsArray.push(newContact)

            return newContact
        },

        updateContact: (root, args) => {
            const contact = find(contactsArray, { id: args.id })
            if(!contact) throw new Error(`couldn't find contact with id ${args.id}`)

            contact.firstName = args.firstName
            contact.lastName = args.lastName

            return contact
        },

        removeContact: (root, args) => {
            const removeContact = find(contactsArray, { id: args.id })

            if (!removeContact) throw new Error(`couldn't find contact with id ${args.id}`)

            remove(contactsArray, c => {
                return c.id === removeContact.id
            })

            return removeContact
        }
    }
}

export {typeDefs, resolvers}