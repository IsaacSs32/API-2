import * as echarts from "echarts";
import { useEffect, useState } from "react";
import { GraphicRevisorProps } from "../../../types";

const GraficRevisor = () => {
  const [data, setData] = useState<GraphicRevisorProps[]>([]); // Tipagem do estado

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3100/tbgradestatusrevisor"
        );
        const result: GraphicRevisorProps[] = await response.json(); // Tipagem do resultado
        setData(result);
      } catch (error) {
        console.error("Erro ao obter os dados:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const cities = ["Cruzeiro", "Atibaia", "Taubate"];
      const cityData: { [key: string]: GraphicRevisorProps[] } = {};
      cities.forEach((city) => {
        cityData[city] = data.filter((item) => item.cidade === city);
      });

      cities.forEach((city) => {
        const cityItems = cityData[city];

        const categories = cityItems.map(
          (item) => `${item.analista ?? "Sem Analista"}`
        );
        const andamentoData = cityItems.map((item) => item.andamento);
        const finalizadoData = cityItems.map((item) => item.finalizado);

        const option: echarts.EChartsOption = {
          // Alteração aqui para EChartsOption
          title: {
            text: `Status dos Analistas em ${city}`,
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          legend: {
            data: ["Andamento", "Finalizado"],
          },
          xAxis: {
            type: "category",
            data: categories,
            axisLabel: {
              interval: 0,
              rotate: 0,
            },
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              name: "Andamento",
              type: "bar",
              data: andamentoData,
              itemStyle: {
                color: "blue",
              },
            },
            {
              name: "Finalizado",
              type: "bar",
              data: finalizadoData,
              itemStyle: {
                color: "green",
              },
            },
          ],
        };

        const chartDom = document.getElementById(`main-${city}`);
        if (chartDom) {
          const myChart = echarts.init(chartDom);
          myChart.setOption(option);
        }
      });
    }
  }, [data]);

  return (
    <div className="flex flex-col mt-10 ml-[50px] h-auto p-4 mb-4">
      <div id="main-Atibaia" style={{ width: "1000px", height: "400px" }}></div>
      <div
        id="main-Cruzeiro"
        style={{ width: "1000px", height: "400px" }}
      ></div>
      <div id="main-Taubate" style={{ width: "1000px", height: "400px" }}></div>
    </div>
  );
};

export default GraficRevisor;
