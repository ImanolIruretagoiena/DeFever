import React, { useContext } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import { AppDispatch } from "../CovidWorld";

function CountriesChart({ data, dataKey }) {
  const dispatch = useContext(AppDispatch);

  function onClick(payload = {}) {
    if (payload.activeLabel) {
      dispatch({ type: "SET_COUNTRY", country: payload.activeLabel });
    }
  }

  return (
    <BarChart
      width={1000}
      height={250}
      style={{ margin: "auto" }}
      margin={{ top: 30, left: 20, right: 30 }}
      data={data}
      onClick={onClick}
    >
      <CartesianGrid  strokeDasharray='3 3' />
      <XAxis dataKey='country' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey={dataKey} fill='#3366ff' />
    </BarChart>
  );
}

export default CountriesChart;
