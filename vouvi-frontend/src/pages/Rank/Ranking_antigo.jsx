import React, { useState } from "react";

const Ranking = () => {
  const [selectedOption, setSelectedOption] = useState("Especialista");

  const options = [
    { label: "Dedicado", xp: "500 XP" },
    { label: "Economista", xp: "2000 XP" },
    { label: "Esforçado", xp: "3500 XP" },
    { label: "Especialista", xp: "5000 XP" },
  ];

  const users = [
    { name: "Rich", xp: "13,657 XP" },
    { name: "Michael", xp: "12,102 XP" },
    { name: "marcos", xp:  "10,018 XP" },
    { name: "Chris", xp: "9,013 XP" },
    { name: "Chesp", xp: "8,755 XP" },
    { name: "Billie", xp: "8,124 XP" },
    { name: "Naye", xp: "7,802 XP" },
  ];

  const ricos = [
    { name: "Você", vc: "938 VC", position: 12 },
    { name: "Roberto", vc: "8,511 VC" },
    { name: "Chesp", vc: "7,012 VC" },
    { name: "Elon", vc: "6,944 VC" },
    { name: "Michael", vc: "5,500 VC" },
    { name: "Rich", vc: "4,800 VC" },
    { name: "Naye", vc: "4,500 VC" },
    { name: "Luna", vc: "4,000 VC" },
    { name: "Banner", vc: "3,800 VC" },
    { name: "Vilagran", vc: "3,600 VC" },
  ];

  return (
    <div className="flex flex-col bg-gray-800 p-5 text-white min-h-screen ">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-4xl font-extrabold">Os Especialistas!</h2>
          <h3 className="text-xs font-light text-gray-400">
            Ranking de Vcoins
          </h3>
        </div>
        <div className="relative w-80">
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="w-full p-2 border-2 border-purple-500 rounded-lg bg-[#1a001a] text-[#7c20be] focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {options.map((option) => (
              <option
                key={option.label}
                value={option.label}
                className="bg-[#1a001a] text-white"
              >
                {option.label} {option.xp}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-row-reverse justify-center items-stretch gap-6 flex-grow">
        <div className="w-1/3 flex flex-col">
          <div className="p-4 rounded-lg h-full bg-[#1f1f1f] ">
            <h2 className="text-4xl mb-2 text-left font-extrabold">
              Ricos da Vouvi
            </h2>
            <h3 className="text-xs text-left font-light text-gray-400">
              Ranking Atualizado
            </h3>

            <div className="rounded p-2">
              {ricos.map((user, index) => (
                <React.Fragment key={index}>
                  <div
                    className={`flex justify-between items-center p-4 rounded-lg ${
                      user.name === "Você" ? "font-bold" : ""
                    }`}
                    style={{
                      backgroundColor:
                        index >= 1 ? "#3D3D3DCC" : user.name === "Você" ? "#002952" : "",
                      border: "1px solid #3d3d3d",
                      marginBottom: "8px",
                    }}
                  >
                    <div className="flex items-center">
                      {user.name === "Roberto" ? (
                        <img
                          src="/images/coroa.png"
                          alt="Coroa"
                          className="w-8 h-8 mr-2"
                          title="Coroa"
                        />
                      ) : user.name === "Chesp" ? (
                        <img
                          src="/images/prata.png"
                          alt="Troféu de Prata"
                          className="w-8 h-8 mr-2"
                          title="Chesp"
                        />
                      ) : user.name === "Elon" ? (
                        <img
                          src="/images/bronze.png"
                          alt="Troféu de Bronze"
                          className="w-8 h-8 mr-2"
                          title="Troféu de bronze"
                        />
                      ) : user.name === "Você" ? (
                        <div
                          className="flex items-center justify-center"
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            backgroundColor: "#007FFF",
                            marginRight: "10px",
                          }}
                        >
                          <span
                            style={{
                              color: "#002952 md:w-20",
                              fontWeight: "bold",
                    
                            }}
                          >
                            12
                          </span>
                        </div>
                      ) : (
                        <span style={{ marginRight: "10px" }}>{`${index + 1}º`}</span>
                      )}
                      <span
                        className="text-left"
                        style={{
                          marginRight: "10px",
                          color:
                            user.name === "Você"
                              ? "#007FFF"
                              : user.name === "Roberto"
                              ? "#FFD700"
                              : user.name === "Chesp"
                              ? "#C0C0C0"
                              : user.name === "Elon"
                              ? "#CD7F32"
                              : "",
                        }}
                      >
                        {user.name}
                      </span>
                    </div>
                    <span
                      className="text-sm border-b border-gray-400 inline-block"
                      style={{
                        padding: "0 5px",
                        color:
                          user.name === "Você"
                            ? "#007FFF"
                            : user.name === "Roberto"
                            ? "#FFD700"
                            : user.name === "Chesp"
                            ? "#C0C0C0"
                            : user.name === "Elon"
                            ? "#CD7F32"
                            : "",
                      }}
                    >
                      {user.vc}
                    </span>
                  </div>

                  {user.name === "Você" &&
                    ricos[index + 1]?.name === "Roberto" && (
                      <hr
                        className="my-2 mx-auto"
                        style={{ width: "50%", borderTop: "2px solid #3d3d3d" }}
                      />
                    )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className="w-1/2 flex flex-col">
          <div className="p-4 rounded-lg h-full bg-[#1f1f1f]">
            <div className="bg-gray-600 rounded p-2 mb-4">
              <div className="flex justify-center items-center mb-4 gap-4 md:text-[2px]">
                <div className="flex-1 flex flex-col items-center ">
                  <img
                    src="/images/prata.png"
                    alt="Troféu de Prata"
                    className="w-16 h-16"
                  />
                  <p className="text-center">Izzy</p>
                  <p className="text-sm border-b border-gray-400 inline-block text-center md:text-[9px]">
                    12,020 XP
                  </p>
                </div>

                <div className="flex-1 flex flex-col items-center transform scale-110 ">
                  <img
                    src="/images/coroa.png"
                    alt="Coroa"
                    className="w-20 h-20"
                  />
                  <p className="text-center">Você</p>
                  <p
                    className="text-sm border-b inline-block text-center"
                    style={{ color: "#b1b1b1" }}
                  >
                    13,657 XP
                  </p>
                </div>

                <div className="flex-1 flex flex-col items-center ">
                  <img
                    src="/images/bronze.png"
                    alt="Troféu de Bronze"
                    className="w-16 h-16"
                  />
                  <p className="text-center">Kim</p>
                  <p
                    className="text-sm border-b inline-block text-center"
                    style={{ color: "#b1b1b1" }}
                  >
                    10,018 XP
                  </p>
                </div>
              </div>
            </div>

            <div
  className="flex-grow overflow-y-auto"
  style={{ maxHeight: "500px" }}
>
  <div className="grid grid-cols-1 gap-4 ">
    {users.map((user, index) => (
      <div
        key={index}
        className="flex justify-between items-center p-4 rounded-lg"
        style={{
          backgroundColor: "#3D3D3DCC",
          border: "1px solid #b1b1b1",
        }}
      >
        <div className="flex items-center ">
          <span
            className="mr-2 flex items-center justify-center w-8 h-8 rounded-full bg-black text-white"
          >
            {`${index + 4}º`}
          </span>
          <span className="text-left">{user.name}</span>
        </div>
        <span
          className="text-sm border-b inline-block"
          style={{ color: "#b1b1b1" }}
        >
          {user.xp}
        </span>
      </div>
    ))}
  </div>
</div>


            <div className="mt-4 text-center font-bold md:w-20 md;">
              <span style={{ color: "red" }}>▼ Zona de Rebaixamento ▼</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ranking;