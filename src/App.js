import { CryptoConvertor } from "./components/Convertor/CryptoConvertor";
import "antd/dist/antd.css";
import { Content } from "antd/lib/layout/layout";
import { Context } from "./components/Convertor/ContextPrimary";

import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";

import MainPage from "./Components/CoinHistoryAndData/MainPage";
import CoinList from "./Components/coinList/CoinList";
import News from "./Components/news/News";
import Trending from "./Components/trending/Trending";
import HeaderNav from "./Components/header/HeaderNav";

import "./App.css";
import About from "./Components/CoinHistoryAndData/About";

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
<<<<<<< HEAD
              <Route path="/" element={<Trending />} />
              <Route path="/search-a-coin" element={<MainPage />} />
              <Route path="/coin-convertor" element={<CryptoConvertor />} />
=======
              <Route path="/" element={<Trending/>} />
              <Route path="/search-a-coin" element={ <MainPage/>} />
              <Route path="/coin-convertor" />
              <Route path="/about" element= {<About/>}/>
>>>>>>> 8b110a9457e23cdd90934ab4dde9204ecd13410e
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
