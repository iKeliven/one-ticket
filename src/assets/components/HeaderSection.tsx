import { Avatar } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Text } from './Text';
import { SearchOutlined } from '@mui/icons-material';

export default function HeaderSection() {
  return (
    //colocar no botao pesquisar
    // adicionar <Notifications className="cursor-pointer" sx={{ color: '#fff' }} />
    <div className="flex justify-between items-center py-5 px-10">
      <section className='flex flex-col'>
          <Text size="big" className="text-black font-bold">
            Olá, João
          </Text>
          <Text size="small">
            00/00/000
          </Text>
      </section>
      <section className="flex gap-5">
        <div className="flex">
          <input
            type="text"
            placeholder='Pesquisar'
            className="bg-white px-5 py-3 rounded-l-xl text-black outline-none w-[150px] focus:w-[200px] transition-all duration-500"
          />
          <div className="bg-white px-5 pt-2 items-center rounded-r-xl cursor-pointer">
            <SearchOutlined sx={{ color: 'gray' }} /> 
          </div>
        </div>
  
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
