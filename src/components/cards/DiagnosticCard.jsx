import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Doughnut } from "react-chartjs-2";
import { diagnosticsData } from "../../data/dashboardData";

const DiagnosticsCard = () => {
  return (
    <Card>
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold">Diagnostics</h2>
        <Doughnut data={diagnosticsData.data} options={diagnosticsData.options} />
        <p className="text-sm text-gray-500">187.2k patients</p>
      </CardContent>
    </Card>
  );
};

export default DiagnosticsCard;
