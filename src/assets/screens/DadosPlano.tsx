import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import HeaderData from "../components/HeaderData";
import { Chip } from "@mui/material";
import Footer from "../components/Footer";
import ModalCadastroUsuario from "../modal/ModalCadastroUsuario";
import React, { useState } from "react";

export default function DadosPlano() {
  const [openModal, setOpenModal] = useState(false);

  const handleAddNovoClick = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#e2e2e2]">
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-[85vw]">
          <Header />
          <HeaderData titulo={"Usuário"} total={"nome aqui"} handleAddNovoClick={handleAddNovoClick} />
          <div className="flex bg-white items-center justify-between shadow-md rounded-lg m-5 p-8 gap-5 items-center w-[77vw]">
            <div className="flex items-center gap-10 w-[90%]">
              <img src="Rectangle" alt="Perfil" className="rounded-lg w-[150px] h-[150px]" />
              <div className="flex flex-col">
                <p><strong>Nome: </strong></p>
                <p><strong>Descrição: </strong></p>
                <p><strong>Status: </strong></p>
              </div>
              <div className="flex flex-col">
                <p>Teatro</p>
                <p>descrição aqui</p>
                <Chip label="Ativo" color="success" />
              </div>
            </div>
            
          </div>
          <div className="flex h-[24vh] justify-between rounded-lg m-5 p-8 gap-5 items-center w-[77vw]">
            </div>
        </div>
      </div>
      <Footer /> 
      <ModalCadastroUsuario open={openModal} handleClose={handleCloseModal} />

    </div>
  );
}
