import imgContraloria from "../../assets/CONTRALORIA.png";
import imgDefensoria from "../../assets/Defensoria.png";
import imgFiscalia from "../../assets/LogoFiscalia.jpg";
import imgProcuraduria from "../../assets/Logo_Procuraduria_Colombia.png";

const entities = [
  { 
    image: imgContraloria, 
    name: "Contraloría General de la República" 
  },
  { 
    image: imgDefensoria, 
    name: "Defensoría del Pueblo" 
  },
  { 
    image: imgFiscalia, 
    name: "Fiscalía General de la Nación" 
  },
  { 
    image: imgProcuraduria, 
    name: "Procuraduría General de la Nación" 
  }
];

export function AlliedEntities() {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-[#1A1A1A] mb-4">Entidades Aliadas</h2>
        <p className="text-[#5C5C5C] max-w-2xl mx-auto">
          Instituciones con las que trabajamos en red por la transparencia y el control fiscal
        </p>
      </div>
      
      <div className="flex items-center justify-center gap-8 flex-wrap">
        {entities.map((entity, index) => (
          <div
            key={index}
            className="group flex items-center justify-center w-40 h-24 bg-white border border-gray-200 rounded-lg p-4 hover:border-[#038138] hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#038138]"
          >
            <img 
              src={entity.image} 
              alt={entity.name}
              className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
}