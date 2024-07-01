import { FunctionComponent } from "react";
import Sidebar from "../components/Sidebar";
import DashData from "../components/DashData";
import HeaderSection from "../components/HeaderSection";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Chart from "../components/Chart";
import Atalhos from "../components/Atalhos";
import Sheets from "../components/Sheets";
import Footer from "../components/Footer";

const Home: FunctionComponent = () => {
  return (
    <div className="flex flex-col">
      <div className="flex bg-white w-[100vw]">
        <Sidebar />
        <div className="flex flex-col w-[90vw] bg-[#e6e6e6] gap-5">
          <HeaderSection />
          <div className="flex px-8 gap-8">
            <DashData icone={<TrendingUpIcon sx={{ fontSize: 40 }} />} titulo={"Eventos"} dado={"250"} imagem={"Vector125.png"} />
            <DashData icone={<TrendingUpIcon sx={{ fontSize: 40 }} />} titulo={"Produtores"} dado={"20"} imagem={"Growth.png"} />
            <DashData icone={<TrendingUpIcon sx={{ fontSize: 40 }} />} titulo={"Estabelecimentos"} dado={"20"} imagem={"Vector124.png"} />
            <DashData icone={<TrendingUpIcon sx={{ fontSize: 40 }} />} titulo={"Planos"} dado={"5"} imagem={"Growth.png"} />
          </div>
          <div className="flex px-8 gap-5">
            <Chart />
            
            <Atalhos />
          </div>
          <div className="flex px-8 mb-5">
            <Sheets />
          </div>
        </div>
      </div>
    <Footer />
    </div>
  );
};

export default Home;
