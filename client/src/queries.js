import { gql } from '@apollo/client'

export const GET_CONTACTS = gql `
{
    contacs{
        id
        firstName
        lastName
    }
}
`