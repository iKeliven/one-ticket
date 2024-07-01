import { DeleteOutline, DriveFileRenameOutline } from '@mui/icons-material';
import { Heading } from './Heading';
import { Text } from './Text';
import fundoFake from '../../../public/fundofake.png'; // Certifique-se de ajustar o caminho correto para a imagem

export default function LocalItem({ nome, endereco }) {
    return (
        <div className="flex flex-col rounded-xl shadow-md w-[48%] h-[250px] bg-[#e2e2e2]">
            <div className="flex justify-start p-5 items-end h-[20vh]"  style={{ backgroundImage: `url(${fundoFake})`, backgroundSize: 'cover' }}>
                <Heading size='medium'>{nome}</Heading>
            </div>
            <div className="flex justify-between items-center p-5  ">
                <Text size="medium">{endereco}</Text>
                <div className="flex">
                    <DeleteOutline sx={{ color: '#FF9800', fontSize: 40 }} />
                    <DriveFileRenameOutline sx={{ color: '#FF9800', fontSize: 40 }} />
                </div>
            </div>
        </div>
    )
}
