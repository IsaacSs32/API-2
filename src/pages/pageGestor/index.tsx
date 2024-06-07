import FaixaGestor from "../../components/gestor/menuGestor/FaixaGestor";
import City from "../../components/gestor/statistics/GraficCyt";

import GestorPage from "../../components/gestor/menuGestor/ButtonSelector";
import { GraphicNumberPol } from "../../components/gestor/statistics/GraphicQuantityofGraphs";

export default function PageGestor() {
  return (
    <div>
      <FaixaGestor />
      <div className="flex">
        <GestorPage />
        <div className=" flex mt-[50px] p-2 py-3">
          <GraphicNumberPol />
          <City />
        </div>
      </div>
    </div>
  );
}