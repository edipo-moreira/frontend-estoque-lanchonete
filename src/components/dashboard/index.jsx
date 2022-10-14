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
import PostPagination from '../config/pagination'

const postFilters = [
  <DateInput source="start_date" label="Data Inicial" />,
  <DateInput source="end_date" label="Data Final" />
];

export const DashboardList = (props) => (
  <List pagination={PostPagination} {...props} filters={postFilters}>
    <Datagrid>
    <TextField source="Product.date" label="Data" />
      <TextField source="Product.name" label="Nome do produto" />
      <TextField source="quantity" label="Quantidade utilizada" />
      <TextField source="total" label="Total" />
    </Datagrid>
  </List>
);
