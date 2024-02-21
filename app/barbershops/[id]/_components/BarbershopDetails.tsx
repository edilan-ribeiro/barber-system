const BarbershopDetails = () => {
  const weekDays = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
  ];

  const workTime = [
    "00:09 - 17:00",
    "Fechado",
    "Fechado",
    "00:09 - 17:00",
    "00:09 - 17:00",
    "00:09 - 17:00",
    "00:09 - 17:00",
  ];

  return (
    <>
      <div className="mb-6 border-b border-solid border-secondary px-5">
        <h2 className="mb-3 text-xs font-bold uppercase text-gray-400">
          sobre nós
        </h2>
        <p className="pb-6 text-sm">
          Bem-vindo à nossa barbearia, onde tradição encontra estilo. Nossa
          equipe de mestres barbeiros transforma cortes de cabelo e barbas em
          obras de arte. Em um ambiente acolhedor, promovemos confiança, estilo
          e uma comunidade unida.
        </p>
      </div>

      <div className="flex justify-between px-5">
        <ul className="flex flex-col gap-2">
          {weekDays.map((days) => (
            <li key={days} className="text-sm text-gray-400">
              {days}
            </li>
          ))}
        </ul>

        <ul className="flex flex-col gap-2">
          {workTime.map((workTime) => (
            <li key={workTime}>
              <time className="flex flex-col text-sm">{workTime}</time>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BarbershopDetails;
