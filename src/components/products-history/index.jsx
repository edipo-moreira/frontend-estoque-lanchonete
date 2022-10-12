import {
  List,
  Datagrid,
  TextField,
  Create,
  SimpleForm,
  Edit,
  NumberInput,
  SelectInput,
  ReferenceInput,
  DateInput,
} from "react-admin";
import { Pagination } from 'react-admin';

const PostPagination = () => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} />;
const postFilters = [
  <DateInput source="start_date" label="Data Inicial" />,
  <DateInput source="end_date" label="Data Final" />
];

export const ProductHistoryList = (props) => (
  <List pagination={<PostPagination />} {...props} filters={postFilters}>
    <Datagrid rowClick="edit">
      <TextField source="Product.name" label="Nome do produto" />
      <TextField source="Product.quantity" label="Quantidade disponível" />
      <TextField source="Product.price" label="Preço" />
      <TextField source="quantity" label="Quantidade utilizada" />
      <TextField source="total" label="Total" />
    </Datagrid>
  </List>
);

export const ProductHistoryCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="fk_product_id" reference="products">
        <SelectInput optionText="name" label="Produto"/>
      </ReferenceInput>
      <NumberInput source="quantity" label="Quantidade"/>
    </SimpleForm>
  </Create>
);

export const ProductHistoryEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
    <ReferenceInput source="fk_product_id" reference="products">
        <SelectInput optionText="name" label="Produto"/>
      </ReferenceInput>
      <NumberInput source="quantity" label="Quantidade"/>
    </SimpleForm>
  </Edit>
);
