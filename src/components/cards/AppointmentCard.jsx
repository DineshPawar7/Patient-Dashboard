import React from "react";
import { Card, CardContent } from "../ui/card";
import { Bar } from "react-chartjs-2";
import { appointmentsData } from "../../data/dashboardData";

const appointmentCard = () => {
  return (
    <Card>
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold">Diagnostics</h2>
        <Bar data={appointmentsData.data} options={appointmentsData.options} />
        <p className="text-sm text-gray-500">187.2k patients</p>
      </CardContent>
    </Card>
  );
};

export default appointmentCard;