import FormCard from "../../Cards/FormCard";
import Title from "../../Cards/FormTitle";
import InfoButton from "../../Buttons/InfoButton";
import SecondaryButton from "../../Buttons/SecondaryButton";
function SecundaryQuestion() {
    return (

        <div className="flex items-center justify-center w-[100vw] h-[100vh]">
            <FormCard>
                <Title
                    text="Qual a sua renda mensal aproximada?"
                    paragraph="(Opcional, ajuda a gente a te dar dicas mais certeiras)"
                />

                <div className="flex flex-wrap p-5 gap-6 rounded-lg ">
                    <InfoButton
                        text="Menos de R$ 1.000" />
                    <InfoButton
                        text="Entre R$ 1.000 e R$ 3.000" />
                    <InfoButton
                        text="Entre R$ 3.000 e R$ 5.000" />
                    <InfoButton
                        text="Mais de R$ 5.000" />
                </div>
                <div>

                    <div className=" w-[90%] m-auto mt-5 flex justify-between">
                        <SecondaryButton

                            text="Anterior" />
                        <div className="flex justify-between w-[40%]">

                            <SecondaryButton
                                text="Pular" />
                            <SecondaryButton
                                text="Próximo" />
                        </div>
                    </div>
                </div>
            </FormCard>
        </div>
    )

}
export default SecundaryQuestion;