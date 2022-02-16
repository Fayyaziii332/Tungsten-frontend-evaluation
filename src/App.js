import './App.css';
import 'antd/dist/antd.css';
import { PageHeader, Layout, Typography } from 'antd';
import MainContent from './Components/MainContent';

const { Footer } = Layout;
const { Text } = Typography;

const App = () => {
  return (
    <div className="app-body">
      <PageHeader
        className="page-header"
        title="TFE"
        avatar={{ src: 'logo.jpeg' }}
        subTitle="This page is for evaluation task"
      />
      <MainContent />
      <Footer className="page-footer"><Text>Developed by @fayyaz</Text></Footer>
    </div>
  );
}

export default App;
