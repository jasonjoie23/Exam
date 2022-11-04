import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useEffect, useState } from "react";
import fetchClient from "../hoc/fetch";
ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Covid Case Total ",
    },
  },
};

const Table1 = () => {
  const [payloadData, setpayloadData] = useState([]);

  useEffect(() => {
    TotalCase();
  }, []);

  const TotalCase = () => {
    fetchClient("https://covid19-api-philippines.herokuapp.com/api/summary")
      .get()
      .then((result) => {
        var hold = [];
        hold.push(result.data.data.active_cases);
        hold.push(result.data.data.deaths);
        hold.push(result.data.data.recoveries);
        console.log();
        setpayloadData(hold);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="circle">
      <Pie
        options={options}
        data={{
          labels: ["Active", "Death", "Recoverd"],
          datasets: [
            {
              label: "Total Covid Cases",
              data: payloadData,
              backgroundColor: [
                "rgb(255, 206, 86,1)",
                "rgb(0, 0, 0,1)",
                "rgb(0, 0, 255,1)",
              ],
            },
          ],
        }}
      />
    </div>
  );
};

export default Table1;
