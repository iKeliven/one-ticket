import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LocalItem from "../components/LocalItem";
import HeaderPages from "../components/HeaderPages";
import ModalCadastroLocal from "../modal/ModalCadastroLocal";
import React, {useState} from "react";

export default function  Locais(){
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
            <HeaderPages titulo={"Estabelecimentos"} total={"4 Estabelecimentos"} handleAddNovoClick={handleAddNovoClick}/>
            <div className="flex bg-white flex-wrap shadow-md rounded-xl p-8 mx-8 mb-5 gap-9">
              <LocalItem nome={"CIC"} endereco={"Florianópolis/SC"}/>
              <LocalItem nome={"CIC"} endereco={"Florianópolis/SC"}/>
              <LocalItem nome={"CIC"} endereco={"Florianópolis/SC"}/>
              <LocalItem nome={"CIC"} endereco={"Florianópolis/SC"}/>
            </div>
        </div>
      </div>
      <Footer />
      <ModalCadastroLocal open={openModal} handleClose={handleCloseModal} />
    </div>
  )
}