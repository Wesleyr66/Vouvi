import FormCard from "../../components/Cards/FormCard";
import Title from "../../components/Cards/FormTitle";
import InfoButton from "../../components/Buttons/InfoButton";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
function QuartenaryQuestion() {
    return (

        <div className="flex items-center justify-center w-[100vw] h-[100vh]">
            <FormCard>
                <Title
                    text="Você tem algum objetivo de longo prazo?" />
                <div className="flex flex-wrap p-5 gap-6 rounded-lg ">
                    <InfoButton
                        text="Casa ou Carro" />
                    <InfoButton
                        text="Aposentadoria" />
                    <InfoButton
                        text="Outros" />
                    <InfoButton
                        text="Não tenho" />
                </div>
                <div className=" w-[90%] m-auto mt-5 flex justify-between">
                    <SecondaryButton
                        text="Anterior" />
                    <SecondaryButton
                        text="Próximo" />
                </div>
            </FormCard>
        </div>
    )

}
export default QuartenaryQuestion;