import { CryptoConvertor } from "./Components/Convertor/CryptoConvertor";
import "antd/dist/antd.css";
import { Content } from "antd/lib/layout/layout";
import { Context } from "./Components/Convertor/ContextPrimary";

import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";

import MainPage from "./Components/CoinHistoryAndData/MainPage";
import CoinList from "./Components/coinList/CoinList";
import News from "./Components/news/News";
import Trending from "./Components/trending/Trending";
import HeaderNav from "./Components/header/HeaderNav";

import "./App.css";
import About from "./Components/CoinHistoryAndData/About";
import CovertorMainPage from "./Components/Convertor/CovertorMainPage";

const { Header, Sider } = Layout;

function App() {
  return (
    <div>
      <Layout className="main">
        <Header style={{ height: "12vh", paddingBottom: "1%" }}>
          <CoinList />
        </Header>
        <Layout>
          <Sider>
            <News />
          </Sider>
          <Content>
            <HeaderNav />
            <Routes>
              
             
              <Route path="/" element={<Trending/>} />
              <Route path="/search-a-coin" element={ <MainPage/>} />
              <Route path="/coin-convertor" element={<CovertorMainPage />} />
            
              <Route path="/about" element= {<About/>}/>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
