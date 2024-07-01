import { Heading } from "./Heading"

export default function Atalhos(){
    return(
        <div className="shadow-md rounded-xl bg-white w-[16vw] flex flex-col items-center justify-start p-5 gap-5 z-[1]">
          <Heading size="medium">Atalhos</Heading>
      <button className="cursor-pointer [border:none] p-5 bg-darkorange w-[15vw] rounded-md flex flex-row items-start justify-center font-bold hover:bg-chocolate">
          Cadastrar Usuário
      </button>
      <button className="cursor-pointer [border:none] p-5 bg-darkorange w-[15vw] rounded-md flex flex-row items-start justify-center font-bold hover:bg-chocolate">
          Cadastrar Local
      </button>
      <button className="cursor-pointer [border:none] p-5 bg-darkorange w-[15vw] rounded-md flex flex-row items-start justify-center font-bold hover:bg-chocolate">
          Cadastrar Plano
      </button>
      <button className="cursor-pointer [border:none] p-5 bg-darkorange w-[15vw] rounded-md flex flex-row items-start justify-center font-bold hover:bg-chocolate">
          Cadastrar Produtor
      </button>
      <button className="cursor-pointer [border:none] p-5 bg-darkorange w-[15vw] rounded-md flex flex-row items-start justify-center font-bold hover:bg-chocolate">
          Cadastrar Maquininha
      </button>
      
    </div>  
    )
}