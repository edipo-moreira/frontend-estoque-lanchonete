import { Layout, Admin, Resource } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import { ProductList, ProductCreate, ProductEdit } from './components/products/index'
import { MyAppBar } from './components/app-bar/app-bar'
import { ProductHistoryCreate, ProductHistoryEdit, ProductHistoryList } from './components/products-history'
import polyglotI18nProvider from 'ra-i18n-polyglot';
import ptBrMessages from 'ra-language-pt-br';
import { DashboardList } from './components/dashboard'

const dataProvider = jsonServerProvider('https://backend-ldc.herokuapp.com')
const MyLayout = (props) => <Layout {...props} appBar={MyAppBar} />;

const messages = {
  'pt-br': ptBrMessages,
};
const i18nProvider = polyglotI18nProvider(locale => messages[locale], 'pt-br');

function App() {
  return (
   <Admin dataProvider={dataProvider} layout={MyLayout}>
    <Resource options={{ label: 'Dashboard' }} name='dashboard' list={DashboardList} />
    <Resource options={{ label: 'Produtos' }} name='products' list={ProductList} create={ProductCreate} edit={ProductEdit} />
    <Resource options={{ label: 'Controle de Estoque' }} name='products-history' list={ProductHistoryList} create={ProductHistoryCreate} edit={ProductHistoryEdit} />
   </Admin>
  )
}

export default App
