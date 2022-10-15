import {
  List,
  Datagrid,
  TextField,
  DateInput,
} from "react-admin";

const postFilters = [
  <DateInput source="start_date" label="Data Inicial" />,
  <DateInput source="end_date" label="Data Final" />
];

export const DashboardList = (props) => (
  <List sort={false}  exporter={false} hasList={false} empty={false} {...props} pagination={false} filters={postFilters}>
    <Datagrid sort={false}  bulkActionButtons={false}>
    <TextField source="start_date" label="Data Inicial" />
    <TextField source="end_date" label="Data Final" />
      <TextField source="total" label="Total" />
    </Datagrid>
  </List>
);
