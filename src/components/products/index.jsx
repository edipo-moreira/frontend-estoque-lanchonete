import { List, Datagrid, TextField, Create, SimpleForm, TextInput, Edit, NumberInput } from 'react-admin'

export const ProductList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" disabled />
            <TextField source="name" />
            <TextField source="quantity" />
            <TextField source="price" />            
        </Datagrid>
    </List>
)

export const ProductCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <NumberInput source="quantity" />
            <NumberInput source="price" />            
        </SimpleForm>
    </Create>
)

export const ProductEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="name" />
            <TextInput source="quantity" />
            <TextInput source="price" />            
        </SimpleForm>
    </Edit>
)