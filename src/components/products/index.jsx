import {
  List,
  Datagrid,
  TextField,
  Create,
  SimpleForm,
  TextInput,
  Edit,
  NumberInput,
  NumberField
} from "react-admin";
import PostPagination from "../config/pagination";
import { Typography } from "@mui/material";

export const ProductList = (props) => (
  <List pagination={<PostPagination />} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" disabled />
      <TextField source="name" label="Nome" />
      <TextField source="quantity" label="Quantidade disponível" />
      <NumberField
        source="price"
        options={{
          style: "currency",
          currency: "BRL",
        }}
        sx={{ fontWeight: "bold" }}
      />
    </Datagrid>
  </List>
);

export const ProductCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" label="Nome" />
      <NumberInput source="quantity" label="Quantidade disponível" />
      <NumberInput source="price" label="Preço Unitário" />
    </SimpleForm>
  </Create>
);

export const ProductEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" label="Nome" />
      <NumberInput source="quantity" label="Quantidade disponível" />
      <NumberInput source="price" label="Preço Unitário" />
    </SimpleForm>
  </Edit>
);
