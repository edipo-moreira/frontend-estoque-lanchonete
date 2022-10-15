import { Layout, Admin, Resource } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import { ProductList, ProductCreate, ProductEdit } from './components/products/index'
import { MyAppBar } from './components/app-bar/app-bar'
import { ProductHistoryCreate, ProductHistoryEdit, ProductHistoryList } from './components/products-history'
import polyglotI18nProvider from 'ra-i18n-polyglot';
import ptBrMessages from 'ra-language-pt-br';
import { DashboardList } from './components/dashboard'
import GridViewIcon from '@mui/icons-material/GridView';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const dataProvider = jsonServerProvider('https://backend-ldc.herokuapp.com')
const MyLayout = (props) => <Layout {...props} appBar={MyAppBar} />;

const messages = {
  'pt-br': ptBrMessages,
};
const i18nProvider = polyglotI18nProvider(locale => messages[locale], 'pt-br');

function App() {
  return (
   <Admin i18nProvider={i18nProvider} dataProvider={dataProvider} layout={MyLayout}>
    <Resource options={{ label: 'Dashboard' }} icon={GridViewIcon} name='dashboard' list={DashboardList} />
    <Resource options={{ label: 'Produtos' }} icon={ShoppingCartIcon} name='products' list={ProductList} create={ProductCreate} edit={ProductEdit} />
    <Resource options={{ label: 'Controle de Estoque' }} icon={AttachMoneyIcon} name='products-history' list={ProductHistoryList} create={ProductHistoryCreate} edit={ProductHistoryEdit} />
   </Admin>
  )
}

export default App
