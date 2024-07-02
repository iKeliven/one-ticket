import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeaderPages from "../components/HeaderPages";
import { DataGrid, GridPagination } from '@mui/x-data-grid';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import { DeleteOutline, DriveFileRenameOutline } from '@mui/icons-material';
import ModalCadastroProdutora from "../modal/ModalCadastroProdutora";
import React, { useState } from 'react';
import FiltroProdutora from "../components/FiltroProdutora"


// Dados de exemplo para a tabela
const rows = [
  { id: 1, nome: 'Ana Silva', data: '2024-05-05', plano: 'Teatro', usuarios: 250, status: 'Ativo' },
  { id: 2, nome: 'João Santos', data: '2024-05-06', plano: 'Balada', usuarios: 150, status: 'Inativo' },
  { id: 3, nome: 'Pedro Oliveira', data: '2024-05-07', plano: 'Show', usuarios: 300, status: 'Ativo' },
  { id: 4, nome: 'Mariana Costa', data: '2024-05-08', plano: 'Workshops', usuarios: 200, status: 'Inativo' },
  { id: 5, nome: 'Carla Pereira', data: '2024-05-09', plano: 'Esportes', usuarios: 400, status: 'Ativo' },
  { id: 6, nome: 'Rafael Santos', data: '2024-05-10', plano: 'Teatro', usuarios: 180, status: 'Inativo' },
  { id: 7, nome: 'Juliana Lima', data: '2024-05-11', plano: 'Balada', usuarios: 350, status: 'Ativo' },
  { id: 8, nome: 'Fernando Souza', data: '2024-05-12', plano: 'Show', usuarios: 220, status: 'Inativo' },
  { id: 9, nome: 'Cristina Almeida', data: '2024-05-13', plano: 'Workshops', usuarios: 280, status: 'Ativo' },
  { id: 10, nome: 'Lucas Oliveira', data: '2024-05-14', plano: 'Esportes', usuarios: 160, status: 'Inativo' },
  { id: 11, nome: 'Patricia Costa', data: '2024-05-15', plano: 'Teatro', usuarios: 320, status: 'Ativo' },
  { id: 12, nome: 'Roberto Santos', data: '2024-05-16', plano: 'Balada', usuarios: 240, status: 'Inativo' },
  { id: 13, nome: 'Maria Fernandes', data: '2024-05-17', plano: 'Show', usuarios: 380, status: 'Ativo' },
  { id: 14, nome: 'Gustavo Lima', data: '2024-05-18', plano: 'Workshops', usuarios: 190, status: 'Inativo' },
  { id: 15, nome: 'Camila Oliveira', data: '2024-05-19', plano: 'Esportes', usuarios: 410, status: 'Ativo' },
  { id: 16, nome: 'Paulo Silva', data: '2024-05-20', plano: 'Teatro', usuarios: 200, status: 'Inativo' },
  { id: 17, nome: 'Aline Santos', data: '2024-05-21', plano: 'Balada', usuarios: 370, status: 'Ativo' },
  { id: 18, nome: 'Daniel Almeida', data: '2024-05-22', plano: 'Show', usuarios: 230, status: 'Inativo' },
  { id: 19, nome: 'Juliano Oliveira', data: '2024-05-23', plano: 'Workshops', usuarios: 300, status: 'Ativo' },
  { id: 20, nome: 'Beatriz Lima', data: '2024-05-24', plano: 'Esportes', usuarios: 170, status: 'Inativo' },
];

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'nome',
    headerName: 'Nome',
    width: 220,
    renderCell: (params) => (
      <Chip
        avatar={<Avatar alt={params.value} src="/static/images/avatar/1.jpg" />}
        label={params.value}
        variant="outlined"
      />
    ),
  },
  { field: 'data', headerName: 'Data Cadastro', width: 130 },
  { field: 'plano', headerName: 'Plano', width: 130 },
  { field: 'usuarios', headerName: 'Usuários', width: 100 },
  {
    field: 'status', headerName: 'Status', width: 130, renderCell: (params) => <Chip
      avatar={<Avatar alt={params.value} src="/static/images/avatar/1.jpg" />}
      label={params.value}
      variant="outlined"
    />
  },
  {
    field: 'acoes',
    headerName: 'Ações',
    width: 90,
    renderCell: (params) => (
      <div className="flex gap-3 mt-3">
        <DeleteOutline sx={{ color: '#FF9800', fontSize: 24 }} />
        <DriveFileRenameOutline sx={{ color: '#FF9800', fontSize: 24 }} />
      </div>
    ),
  },
];

export default function Produtoras() {
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
        <div className=" w-[85vw]">
          <Header />
          <HeaderPages titulo={"Produtoras"} total={`${rows.length} produtoras`} handleAddNovoClick={handleAddNovoClick} />
          <div className="flex gap-5 p-5">
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
            <FiltroProdutora />
          </div>

        </div>
      </div>
      <Footer />
      <ModalCadastroProdutora open={openModal} handleClose={handleCloseModal} />
    </div>
  );
}
