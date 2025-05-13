import React from "react";
import {
  Card,
  CardContent,
} from "../components/ui/card";
import { Bar, Line, Doughnut  } from "react-chartjs-2";
import 'chart.js/auto';
import DiagnosticsCard from "../components/cards/DiagnosticCard";
import PatientsCard from "../components/cards/PatientsCard";
import HealthIndex from "../components/cards/HealthIndex";
import AppointmentCard from "../components/cards/AppointmentCard";



const Dashboard = () => {
  return (
    <div className="w-full min-h-screen bg-white p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Welcome Vivian,</h1>
      <p className="text-gray-500">How're you feeling today?</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        <DiagnosticsCard />
       

       <PatientsCard />

        <HealthIndex />

        <AppointmentCard />

        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold">Company Growth</h2>
            <div className="text-3xl font-bold text-red-500">80% Growth</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
