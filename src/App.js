import { CryptoConvertor } from "./components/Convertor/CryptoConvertor";
import "antd/dist/antd.css";
import { Content } from "antd/lib/layout/layout";
import { Context } from "./components/Convertor/ContextPrimary";

import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";

import MainPage from "./components/CoinHistoryAndData/MainPage";
import CoinList from "./components/coinList/CoinList";
import News from "./components/news/News";
import Trending from "./components/trending/Trending";
import HeaderNav from "./components/header/HeaderNav";

import "./App.css";

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
              <Route path="/" element={<Trending />} />
              <Route path="/search-a-coin" element={<MainPage />} />
              <Route path="/coin-convertor" element={<CryptoConvertor />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
