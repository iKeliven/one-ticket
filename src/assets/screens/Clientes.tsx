import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeaderCliente from "../components/HeaderCliente";
import { DataGrid, GridPagination } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';
import { DeleteOutline, DriveFileRenameOutline } from '@mui/icons-material';
import React, { useState } from 'react';
import { TextField, Button, Chip, Stack, MenuItem } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

// Dados de exemplo para a tabela de usuários
const rows = [
  { id: 1, nome: 'Ana Silva', dataCadastro: '2024-05-05', status: 'Ativo' },
  { id: 2, nome: 'João Santos', dataCadastro: '2024-05-06', status: 'Inativo' },
  { id: 3, nome: 'Pedro Oliveira', dataCadastro: '2024-05-07', status: 'Ativo' },
  { id: 4, nome: 'Mariana Costa', dataCadastro: '2024-05-08', status: 'Inativo' },
  { id: 5, nome: 'Ana Silva', dataCadastro: '2024-05-05', status: 'Ativo' },
  { id: 6, nome: 'João Santos', dataCadastro: '2024-05-06', status: 'Inativo' },
  { id: 7, nome: 'Pedro Oliveira', dataCadastro: '2024-05-07', status: 'Ativo' },
  { id: 8, nome: 'Mariana Costa', dataCadastro: '2024-05-08', status: 'Inativo' },
  { id: 9, nome: 'João Santos', dataCadastro: '2024-05-06', status: 'Inativo' },
  { id: 10, nome: 'Mariana Costa', dataCadastro: '2024-05-06', status: 'Inativo' },

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

export default function Clientes() {
  const [status, setStatus] = React.useState([]);

  const handleStatusChange = (status) => {
    setStatus((prevStatus) =>
      prevStatus.includes(status) ? prevStatus.filter((s) => s !== status) : [...prevStatus, status]
    );
  };

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
          <HeaderCliente titulo={"Clientes"} total={`${rows.length} clientes`} />
          <div className="flex gap-5 p-5">

            <div className="flex bg-white w-[58vw] flex-wrap shadow-md rounded-xl p-8 gap-9">
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
            <div className="bg-white w-[300px] h-[fit-content] p-5 box-border gap-5 shadow-md rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <FilterListIcon />
                <h2 className="font-bold">Filtros</h2>
              </div>
              <div className="flex flex-col gap-4">
                <TextField
                  label="De"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  label="Até"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                />
                <TextField label="Cidade" select>
                  <MenuItem value="">
                    <em>-----</em>
                  </MenuItem>
                  <MenuItem value="Florianópolis - SC">Florianópolis - SC</MenuItem>
                  <MenuItem value="São Paulo - SP">São Paulo - SP</MenuItem>
                </TextField>
                <TextField label="Nome" />
                <TextField label="Setor" select>
                  <MenuItem value="">
                    <em>-----</em>
                  </MenuItem>
                  <MenuItem value="Concerto">Financeiro</MenuItem>
                  <MenuItem value="Teatro">Marketing</MenuItem>
                  <MenuItem value="Teatro">Atendimento</MenuItem>
                </TextField>
                <div>
                  <h3 className="font-bold mb-2">Status</h3>
                  <Stack direction="row" spacing={1}>
                    <Chip
                      label="Inativo"
                      color={status.includes('encerrado') ? 'primary' : 'default'}
                      onClick={() => handleStatusChange('encerrado')}
                    />
                    <Chip
                      label="Ativo"
                      color={status.includes('ativo') ? 'primary' : 'default'}
                      onClick={() => handleStatusChange('ativo')}
                    />
                  </Stack>
                </div>
                <Button variant="contained" style={{ background: "#f97316", border: "none" }}>
                  Aplicar Filtros
                </Button>
              </div>
            </div>

          </div>

        </div>
      </div>
      <Footer />

    </div>
  );
}
