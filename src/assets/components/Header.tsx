import { Avatar } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Text } from './Text';
import { SearchOutlined } from '@mui/icons-material';

export default function Header() {
  return (
    //colocar no botao pesquisar
    // adicionar <Notifications className="cursor-pointer" sx={{ color: '#fff' }} />
    <div className="flex justify-between items-center py-5 px-10 bg-white">
      <section className='flex flex-col'>
          <Text size="big" className="text-black font-bold">
            Olá, João
          </Text>
          <Text size="small">
            00/00/000
          </Text>
      </section>
      <section className="flex gap-5">  
        <div className="flex items-center gap-3">
          <Text size="medium">
            Joao Carlos
          </Text>
          <Avatar
            className="cursor-pointer"
            alt="Joao Sharp"
          >JC</Avatar>
        </div>
      </section>
    </div>
  );
}
