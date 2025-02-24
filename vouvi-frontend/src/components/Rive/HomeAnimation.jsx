import { useRive } from "@rive-app/react-canvas";

function HomeAnimation({ stateMachine }) {
  const { rive, RiveComponent } = useRive({
    src: "animations/animacoes.riv",
    stateMachines: stateMachine,
    autoplay: true,
  });

  return <RiveComponent />;
}

export default HomeAnimation;
