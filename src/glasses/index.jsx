import { useState } from "react";
import data from "./data.json";

export default function Glasses() {
  const [listGlasses] = useState(data);
  const [imgPath, setImgPath] = useState(listGlasses[0].url);
  const [selectedGlass, setSelectedGlass] = useState(listGlasses[0]);

  const Render = (glass) => {
    setImgPath(glass.url);
    setSelectedGlass(glass);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background */}
      <img
        src="./glassesImage/background.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center pt-8 text-white">
        <h1 className="text-3xl font-bold uppercase mb-8">
          Try Glasses App Online
        </h1>
        <div className="relative mb-8">
          <img
            src="./glassesImage/model.jpg"
            alt="Model"
            className="w-[325px] rounded-lg shadow-lg border-4 border-white"
          />
          <img
            src={imgPath}
            alt="Glasses"
            className="absolute top-[100px] left-[76px] w-[176px] opacity-70"
          />

          {/* Thông tin */}
          <div className="absolute bottom-0 w-full bg-black/50 backdrop-blur-md text-white px-3 py-2 rounded-b-lg">
            <h2 className="font-bold text-base">{selectedGlass.name}</h2>
            <p className="text-xs italic leading-tight">
              {selectedGlass.desc}
            </p>
            <p className="text-sm font-semibold text-orange-400">
              Price: ${selectedGlass.price}
            </p>
          </div>
        </div>

        {/* Danh sách kính  */}
        <div className="bg-white/90 p-4 rounded-xl shadow-lg">
          <div className="grid grid-cols-5 gap-3">
            {listGlasses.map((glass) => (
              <div
                key={glass.id}
                className="bg-white rounded-md p-1 aspect-square flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                onClick={() => Render(glass)}
              >
                <img
                  src={glass.url}
                  alt={glass.name}
                  className="w-[86px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
