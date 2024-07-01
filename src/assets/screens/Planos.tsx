import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeaderPages from "../components/HeaderPages";
import PlanoItem from "../components/PlanoItem";
import ModalCadastroPlano from "../modal/ModalCadastroPlano";
import React, {useState} from "react";

export default function Planos(){
  const [openModal, setOpenModal] = useState(false);
  
  const handleAddNovoClick = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    
    <div className="flex flex-col w-[100%]">
      <div className="flex">
        <Sidebar />
        <div className="bg-[#e2e2e2] w-[100%]">
            <Header />
            <HeaderPages titulo={"Planos"} total={"4 Planos"} handleAddNovoClick={handleAddNovoClick}/>
            <div className="flex bg-white flex-wrap h-[70vh] shadow-md rounded-xl p-8 mx-8 mb-5 gap-9">
              <PlanoItem nome={"Teatro"}/>
              <PlanoItem nome={"Balada"}/>
              <PlanoItem nome={"Esporte"}/>
            </div>
        </div>
      </div>
      <Footer />
      <ModalCadastroPlano open={openModal} handleClose={handleCloseModal} />
    </div>
  )
}