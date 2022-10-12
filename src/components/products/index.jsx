import { List, Datagrid, TextField, Create, SimpleForm, TextInput, Edit, NumberInput } from 'react-admin'
import { Pagination } from 'react-admin';

const PostPagination = () => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} />;
export const ProductList = props => (
    <List pagination={<PostPagination />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" disabled />
            <TextField source="name" label="Nome"/>
            <TextField source="quantity" label="Quantidade disponível"/>
            <TextField source="price" label="Preço Unitário" />            
        </Datagrid>
    </List>
)

export const ProductCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" label="Nome" />
            <NumberInput source="quantity" label="Quantidade disponível"/>
            <NumberInput source="price" label="Preço Unitário"/>            
        </SimpleForm>
    </Create>
)

export const ProductEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="name" label="Nome" />
            <NumberInput source="quantity" label="Quantidade disponível"/>
            <NumberInput source="price" label="Preço Unitário"/>             
        </SimpleForm>
    </Edit>
)