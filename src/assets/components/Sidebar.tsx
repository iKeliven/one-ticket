import { Link, useLocation } from 'react-router-dom';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import SidebarItems from './SidebarItems'; // Certifique-se de importar o componente SidebarItems correto

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="top-0 left-0 shadow-md bg-white w-[15vw] flex flex-col items-start justify-start pt-10 pr-4 pl-4 gap-[40px] text-left">
      <div className="fixed">
        <img
          className="w-[190px] pl-4 py-10"
          alt="OneTicket"
          src="logo.png"
          style={{ borderBottom: '2px solid #e2e2e2' }}
        />

        <div className="flex flex-col top-0 justify-start items-start">
          <div className="flex flex-col items-start">
          <Link to="/">
            <SidebarItems label="Página Inicial" active={location.pathname === '/'}> 
                  <AutoAwesomeMosaicOutlinedIcon sx={{ color: '#FF9800', fontSize: 40 }} />
                
              </SidebarItems>
            </Link>
            <Link to="/estabelecimentos">
            <SidebarItems label="Estabelecimentos" active={location.pathname === '/estabelecimentos'}>
              
            </SidebarItems>
            </Link>
            <Link to="/produtoras">
              <SidebarItems label="Produtoras" active={location.pathname === '/produtoras'}>
                
              </SidebarItems>
            </Link>
            <Link to="/planos">
            <SidebarItems label="Planos" active={location.pathname === '/planos'}>
              
            </SidebarItems></Link>
            <Link to="/maquininhas">
            <SidebarItems label="Maquininhas" active={location.pathname === '/maquininhas'}>
              
            </SidebarItems></Link>

            <Link to="/usuarios"><SidebarItems label="Usuários" active={location.pathname === '/usuarios'}>
              
            </SidebarItems></Link>
            <Link to="/clientes">
            <SidebarItems label="Clientes" active={location.pathname === '/clientes'}>
              
            </SidebarItems></Link>
            <Link to="/ajuda">
              <SidebarItems label="Central de Ajuda" active={location.pathname === '/ajuda'}>
             
            </SidebarItems>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
