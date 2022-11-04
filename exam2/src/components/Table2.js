import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import fetchClient from "../hoc/fetch";

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: ["1", , "1", , "1", , "1", , "1", , "1", "1"],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Top Covid-19 Recoverd ",
    },
  },
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Table2 = () => {
  const [labels, setlabels] = useState([]);
  const [datapayload, setdatapayload] = useState([]);
  useEffect(() => {
    TopRegionCase();
  }, []);

  const TopRegionCase = () => {
    fetchClient("https://covid19-api-philippines.herokuapp.com/api/top-regions")
      .get()
      .then((result) => {
        var holdLabels = [];
        var holddata = [];
        console.log(result.data);
        for (let index = 0; index < 9; index++) {
          holdLabels.push(result.data.data[index].region);
          holddata.push(result.data.data[index].cases);
        }

        setdatapayload(holddata);
        setlabels(holdLabels);
        console.log(labels);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="bar">
        <Bar
          options={options}
          data={{
            labels,
            datasets: [
              {
                label: "Dataset 1",
                data: datapayload,
                backgroundColor: "rgba(255, 99, 132, 0.5)",
              },
            ],
          }}
        />
      </div>
    </>
  );
};

export default Table2;
