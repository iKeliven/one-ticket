import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeaderPages from "../components/HeaderPages";
import { DataGrid, GridPagination } from '@mui/x-data-grid';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import { DeleteOutline, DriveFileRenameOutline } from '@mui/icons-material';
import ModalCadastroUsuario from "../modal/ModalCadastroUsuario";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Coloque a URL da sua API aqui
const API_URL = 'http://localhost:5000/api/usuarios';

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsuarios(response.data);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  };

  const handleAddNovoClick = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    fetchUsuarios();  // Atualizar a lista de usuários após fechar o modal
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'nome',
      headerName: 'Nome',
      width: 300,
      renderCell: (params) => (
        <Chip
          avatar={<Avatar alt={params.value} src={params.row.foto} />}
          label={params.value}
          variant="outlined"
        />
      ),
    },
    { field: 'data_cadastro', headerName: 'Data Cadastro', width: 180 },
    { field: 'setor', headerName: 'Setor', width: 180 },
    { field: 'nivel_acesso', headerName: 'Nível de Acesso', width: 180 },
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

  return (
    <div className="flex flex-col w-[100vw] bg-[#e2e2e2]">
      <div className="flex">
        <Sidebar />
        <div className=" w-[85vw]">
          <Header />
          <HeaderPages titulo={"Usuarios"} total={`${usuarios.length} usuários`} handleAddNovoClick={handleAddNovoClick} />
          <div className="flex bg-white flex-wrap shadow-md rounded-xl p-8 mx-8 mb-5 gap-9">
            <DataGrid
              rows={usuarios}
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
    </div>
  );
}
