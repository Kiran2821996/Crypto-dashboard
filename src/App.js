import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";


import "./App.css";
import MainPage from "./Components/MainPage";
import CoinList from "./Components/coinList/CoinList";
import News from "./Components/news/News";
import Trending from "./Components/trending/Trending";
import HeaderNav from "./Components/header/HeaderNav";

const { Header, Sider, Content } = Layout;

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
              <Route path="/coin-convertor" />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
