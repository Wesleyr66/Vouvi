import FormCard from "../../Cards/FormCard";
import Title from "../../Cards/FormTitle";
import InfoButton from "../../Buttons/InfoButton";
import SecondaryButton from "../../Buttons/SecondaryButton";
function PrimaryQuestion() {
    return (

        <div className="flex items-center justify-center w-[100vw] h-[100vh]">
            <FormCard>
                <Title
                    text="Quanto você conhece sobre finanças?" />
                <div className="flex flex-wrap p-5 gap-6 rounded-lg">
                    <InfoButton
                        text="Sou iniciante" />
                    <InfoButton
                        text="Sei o básico" />
                    <InfoButton
                        text="Entendo bem" />
                    <InfoButton
                        text="Sou expert" />
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
export default PrimaryQuestion;