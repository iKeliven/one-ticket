import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeaderPages from "../components/HeaderPages";
import { DataGrid, GridPagination } from '@mui/x-data-grid';
import Chip from '@mui/material/Chip';
import { DeleteOutline, DriveFileRenameOutline } from '@mui/icons-material';
import React, { useState } from "react";
import ModalCadastroMaquininha from "../modal/ModalCadastroMaquininha.tsx";
import FiltroMaquininha from "../components/FiltroMaquininha"

// Dados de exemplo para a tabela de maquininhas (10 primeiras maquininhas)
const rows = [
  { id: 1, numeroMaquininha: '123456', nomeProdutor: 'Ana Silva', cidade: 'São Paulo', dataCadastro: '2024-05-05', status: 'Ativo' },
  { id: 2, numeroMaquininha: '654321', nomeProdutor: 'João Santos', cidade: 'Rio de Janeiro', dataCadastro: '2024-05-06', status: 'Inativo' },
  { id: 3, numeroMaquininha: '789123', nomeProdutor: 'Pedro Oliveira', cidade: 'Belo Horizonte', dataCadastro: '2024-05-07', status: 'Ativo' },
  { id: 4, numeroMaquininha: '456789', nomeProdutor: 'Mariana Costa', cidade: 'Salvador', dataCadastro: '2024-05-08', status: 'Inativo' },
  { id: 5, numeroMaquininha: '987654', nomeProdutor: 'Carla Pereira', cidade: 'Porto Alegre', dataCadastro: '2024-05-09', status: 'Ativo' },
  { id: 6, numeroMaquininha: '321654', nomeProdutor: 'Rafael Santos', cidade: 'Curitiba', dataCadastro: '2024-05-10', status: 'Inativo' },
  { id: 7, numeroMaquininha: '159753', nomeProdutor: 'Juliana Lima', cidade: 'Brasília', dataCadastro: '2024-05-11', status: 'Ativo' },
  { id: 8, numeroMaquininha: '753159', nomeProdutor: 'Fernando Souza', cidade: 'Fortaleza', dataCadastro: '2024-05-12', status: 'Inativo' },
  { id: 9, numeroMaquininha: '258369', nomeProdutor: 'Cristina Almeida', cidade: 'Recife', dataCadastro: '2024-05-13', status: 'Ativo' },
  { id: 10, numeroMaquininha: '369258', nomeProdutor: 'Lucas Oliveira', cidade: 'Manaus', dataCadastro: '2024-05-14', status: 'Inativo' },
];

const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'numeroMaquininha', headerName: 'Número', width: 160 },
  { field: 'nomeProdutor', headerName: 'Nome do Produtor', width: 150 },
  { field: 'cidade', headerName: 'Cidade', width: 150 },
  { field: 'dataCadastro', headerName: 'Data Cadastro', width: 150 },
  {
    field: 'status', headerName: 'Status', width: 100
    , renderCell: (params) => <Chip label={params.value} color={params.value === 'Ativo' ? 'success' : 'error'} />
  },
  {
    field: 'acoes',
    headerName: 'Ações',
    width: 120,
    renderCell: (params) => (
      <div className="flex gap-3 mt-3">
        <DeleteOutline sx={{ color: '#FF9800', fontSize: 24 }} />
        <DriveFileRenameOutline sx={{ color: '#FF9800', fontSize: 24 }} />
      </div>
    ),
  },
];

export default function Maquininhas() {
  const [openModal, setOpenModal] = useState(false);

  const handleAddNovoClick = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="flex flex-col w-[100vw] bg-[#e2e2e2]">
      <div className="flex">
        <Sidebar />
        <div className="w-[85vw]">
          <Header />
          <HeaderPages titulo={"Maquininhas"} total={`${rows.length} Maquininhas`} handleAddNovoClick={handleAddNovoClick} />
          <div className="flex p-5 gap-5">
            <div className="flex w-[58vw] bg-white flex-wrap shadow-md rounded-xl p-8 gap-9">
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
            <FiltroMaquininha />
          </div>

        </div>
      </div>
      <Footer />
      <ModalCadastroMaquininha open={openModal} handleClose={handleCloseModal} />

    </div>
  );
}
