import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Bar } from "react-chartjs-2";
import { healthIndexData } from "../../data/dashboardData";

const HealthIndex = () => {
  return (
    <Card>
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold">Health Index</h2>
                <div className="text-3xl font-bold text-blue-600">75%</div>
                <Bar data={healthIndexData.data} options={healthIndexData.options} />
              </CardContent>
            </Card>
  );
};

export default HealthIndex;
