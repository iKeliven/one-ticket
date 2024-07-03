import React from 'react';
import { TextField, Button, Chip, Stack, MenuItem } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

export default function FiltroProdutora() {
  const [status, setStatus] = React.useState([]);

  const handleStatusChange = (status) => {
    setStatus((prevStatus) =>
      prevStatus.includes(status) ? prevStatus.filter((s) => s !== status) : [...prevStatus, status]
    );
  };

  return (
    <div className="bg-white w-[300px] h-[fit-content] p-5 box-border gap-5 shadow-md rounded-xl">
      <div className="flex items-center gap-2 mb-4">
        <FilterListIcon />
        <Heading size="big">Filtros</Heading>
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
        <TextField label="Plano" select>
          <MenuItem value="">
            <em>-----</em>
          </MenuItem>
          <MenuItem value="Concerto">Concerto</MenuItem>
          <MenuItem value="Teatro">Teatro</MenuItem>
          <MenuItem value="Teatro">Balada</MenuItem>
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
        <Button variant="contained" style={{background: "#f97316", border: "none"}}>
          Aplicar Filtros
        </Button>
      </div>
    </div>
  );
}
