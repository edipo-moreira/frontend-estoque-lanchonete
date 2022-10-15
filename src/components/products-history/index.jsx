import {
  List,
  Datagrid,
  TextField,
  Create,
  SimpleForm,
  Edit,
  NumberInput,
  NumberField,
  AutocompleteInput,
  ReferenceInput,
  DateInput,
} from "react-admin";
import { Pagination } from "react-admin";

const PostPagination = () => (
  <Pagination rowsPerPageOptions={[10, 25, 50, 100]} />
);
const postFilters = [
  <DateInput source="start_date" label="Data Inicial" />,
  <DateInput source="end_date" label="Data Final" />,
];

export const ProductHistoryList = (props) => (
  <List
    empty={false}
    pagination={<PostPagination />}
    {...props}
    filters={postFilters}
  >
    <Datagrid rowClick="edit">
      <TextField source="Product.name" label="Nome do produto" />
      <TextField 
        source="Product.quantity"
        label="Quantidade disponível"
      />
      <NumberField 
        source="Product.price"
        options={{
          style: "currency",
          currency: "BRL",
        }}
        textAlign="left"
      />
      <TextField source="quantity" label="Quantidade utilizada" />
      <NumberField 
        source="total"
        options={{
          style: "currency",
          currency: "BRL",
        }}
        sx={{ fontWeight: "bold" }}
      />
    </Datagrid>
  </List>
);

export const ProductHistoryCreate = (props) => (
  <Create redirect="list" {...props}>
    <SimpleForm>
      <ReferenceInput source="fk_product_id" reference="all-products">
        <AutocompleteInput optionText="name" label="Produto" />
      </ReferenceInput>
      <NumberInput source="quantity" label="Quantidade" />
    </SimpleForm>
  </Create>
);

export const ProductHistoryEdit = (props) => (
  <Edit redirect="list" {...props}>
    <SimpleForm>
      <ReferenceInput source="fk_product_id" reference="all-products">
        <AutocompleteInput optionText="name" label="Produto" />
      </ReferenceInput>
      <NumberInput source="quantity" label="Quantidade" />
    </SimpleForm>
  </Edit>
);
