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
  <List empty={false} {...props} filters={postFilters}>
    <Datagrid>
    <TextField source="start_date" label="Data Inicial" />
    <TextField source="end_date" label="Data Final" />
      <TextField source="total" label="Total" />
    </Datagrid>
  </List>
);
