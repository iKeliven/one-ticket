import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import HeaderData from "../components/HeaderData";
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import { DeleteOutline, DriveFileRenameOutline } from '@mui/icons-material';
import Footer from "../components/Footer";
import ModalCadastroUsuario from "../modal/ModalCadastroUsuario";
import React, { useState } from "react";
import HeaderPages from "../components/HeaderPages";

const rows = [
  { id: 1, nome: 'Ana Silva', dataCadastro: '2024-05-05', setor: 'Financeiro', nivelAcesso: 1, status: 'Ativo' },
  { id: 2, nome: 'João Santos', dataCadastro: '2024-05-06', setor: 'Administração', nivelAcesso: 2, status: 'Inativo' },
  { id: 3, nome: 'Pedro Oliveira', dataCadastro: '2024-05-07', setor: 'Marketing', nivelAcesso: 3, status: 'Ativo' },
  { id: 4, nome: 'Mariana Costa', dataCadastro: '2024-05-08', setor: 'Produção', nivelAcesso: 1, status: 'Inativo' },
  { id: 5, nome: 'Ana Silva', dataCadastro: '2024-05-05', setor: 'Financeiro', nivelAcesso: 1, status: 'Ativo' },
  { id: 6, nome: 'João Santos', dataCadastro: '2024-05-06', setor: 'Administração', nivelAcesso: 2, status: 'Inativo' },
  { id: 7, nome: 'Pedro Oliveira', dataCadastro: '2024-05-07', setor: 'Marketing', nivelAcesso: 3, status: 'Ativo' },
  { id: 8, nome: 'Mariana Costa', dataCadastro: '2024-05-08', setor: 'Produção', nivelAcesso: 1, status: 'Inativo' },
  { id: 9, nome: 'João Santos', dataCadastro: '2024-05-06', setor: 'Administração', nivelAcesso: 2, status: 'Inativo' },
  { id: 10, nome: 'Mariana Costa', dataCadastro: '2024-05-06', setor: 'Administração', nivelAcesso: 2, status: 'Inativo' },

  // Adicione mais linhas conforme necessário
];

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'nome',
    headerName: 'Nome',
    width: 300,
    renderCell: (params) => (
      <Chip
        avatar={<Avatar alt={params.value} src="/static/images/avatar/1.jpg" />}
        label={params.value}
        variant="outlined"
      />
    ),
  },
  { field: 'dataCadastro', headerName: 'Data Cadastro', width: 180 },
  { field: 'setor', headerName: 'Setor', width: 180 },
  { field: 'nivelAcesso', headerName: 'Nível de Acesso', width: 180 },
  { field: 'status', headerName: 'Status', width: 130, renderCell: (params) => <Chip label={params.value} color={params.value === 'Ativo' ? 'success' : 'error'} /> },
  {
    field: 'acoes',
    headerName: 'Ações',
    width: 150,
    renderCell: (params) => (
      <div className="flex gap-3 mt-3">
        <DeleteOutline sx={{ color: '#FF9800', fontSize: 24 }} />
        <DriveFileRenameOutline sx={{ color: '#FF9800', fontSize: 24 }} />
      </div>
    ),
  },
];

export default function DadosProdutora() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalProdutora, setOpenModalProdutora] = useState(false);

  const handleAddNovoClick = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleAddNovoClickProdutora = () => {
    setOpenModalProdutora(true);
  };

  const handleCloseModalProdutora = () => {
    setOpenModalProdutora(false);
  };
  return (
    <div className="flex flex-col min-h-screen bg-[#e2e2e2]">
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-[85vw]">
          <Header />
          <HeaderData titulo={"Produtora"} total={"Nome aqui"} handleAddNovoClick={handleAddNovoClickProdutora} />
          <div className="flex bg-white items-center justify-between shadow-md rounded-lg m-5 p-8 gap-5 items-center w-[77vw]">
            <div className="flex items-center justify-between w-[90%]">
              <img src="Rectangle" alt="Perfil" className="rounded-lg w-[150px] h-[150px]" />
              <div className="flex flex-col">
                <p><strong>Nome: </strong></p>
                <p><strong>CPF: </strong></p>
                <p><strong>Telefone: </strong></p>
                <p><strong>Email: </strong></p>
              </div>
              <div className="flex flex-col">
                <p>João Carlos</p>
                <p>000.000.000-00</p>
                <p>48 99999-9999</p>
                <p>joaocarlos@gmail.com</p>
              </div>
              <div className="flex flex-col">
                <p><strong>Endereco: </strong></p>
                <p><strong>Plano: </strong></p>
                <p><strong>Data de Cadastro: </strong></p>
                <p><strong>Status: </strong></p>
              </div>
              <div className="flex flex-col">
                <p>Endereço Aqui</p>
                <p>Teatro</p>
                <p>00/00/00</p>
                <Chip label="Ativo" color="success" />
              </div>
            </div>
            
          </div>
          <HeaderPages titulo={"Usuarios"} total={"10 usuários"} handleAddNovoClick={handleAddNovoClick} />
            <div className="flex bg-white flex-wrap shadow-md rounded-xl p-8 mx-8 mb-5 gap-9">
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pagination
                    pageSize={8}
                    rowsPerPageOptions={[8, 16, 24]}
                    checkboxSelection
                    components={{ pagination: GridPagination }}
                />
            </div>
        </div>
      </div>
      <Footer /> 
      <ModalCadastroUsuario open={openModal} handleClose={handleCloseModal} />
      <ModalCadastroProdutora open={openModalProdutora} handleClose={handleCloseModalProdutora} />

    </div>
  );
}
