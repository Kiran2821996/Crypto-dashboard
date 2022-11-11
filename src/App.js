import CoinList from "./components/coinList/CoinList";
import News from "./components/news/News";
import Trending from "./components/trending/Trending";
import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import HeaderNav from "./components/header/HeaderNav";

import "./App.css";

const { Header, Sider, Content } = Layout;

function App() {
  return (
    <div  >
 <Layout className="main">
      <Header style={{height:"12vh",paddingBottom:"1%"}}>
        <CoinList />
      </Header>
      <Layout>
        <Sider>
          <News />
        </Sider>
        <Content>
          <HeaderNav />
        <Routes>
        <Route path="/" element={<Trending />} />
        <Route path="/shivansh-component" />
        <Route path="/ketan-component" />
        
      </Routes>
          
        </Content>
      </Layout>
    </Layout>
    </div>
   
  );
}

export default App;
