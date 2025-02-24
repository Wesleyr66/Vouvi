import FormCard from "../../Cards/FormCard";
import Title from "../../Cards/FormTitle";
import InfoButton from "../../Buttons/InfoButton";
import SecondaryButton from "../../Buttons/SecondaryButton";

import Header from "../../Header/HeaderWhite"

// import { Link, Route, Routes } from "react-router-dom";
function FormMain() {

    return (
        <>
            <Header />
        
            < div className="flex items-center justify-center w-[100vw] h-[100vh]" >
                <FormCard className="flex items-center justify-center flex-col">
                    <p className="text-[#FFFFFF] w-[892px] h-[60px] text-md m-auto pt-2 text-center">Compartilhe suas metas financeiras e vamos juntos nessa!</p>

                    <Title text="Qual é o seu objetivo principal com a educação financeira?" />
                    <div className="flex flex-wrap p-5 gap-6 rounded-lg">
                        <InfoButton
                            text="Organizar finanças" />
                        <InfoButton
                            text="Aprender educação financeira" />
                        <InfoButton
                            text="Sair das dívidas" />
                        <InfoButton
                            text="Insvestir melhor" />
                    </div>

                    
                        <div className=" w-[90%] m-auto flex justify-between">
                            <SecondaryButton
                            
                                text="Preencher depois" />
                            <SecondaryButton
                                
                                text="Próximo"/>
                                
                        </div>
                  
                </FormCard>
            </div >
        </>

    )
}
export default FormMain