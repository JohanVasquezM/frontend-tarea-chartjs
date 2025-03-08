'use client'
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { getSumaSalarioDepartamento } from '@/app/Servicios/Api';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function SumaPage() {
    const [chartData, setChartData] = useState({
        labels: [] as string[],
        datasets: [{
            label: 'Suma de salarios por departamento',
            data: [] as number[],
            borderColor: 'rgb(75, 192, 192)',
            fill: false
        }]
    });

    useEffect(() => {
        getSumaSalarioDepartamento().then(data => {
            const labels = data.map((item: any) => `Dept ${item.DEPARTMENT_ID}`);
            const totals = data.map((item: any) => item.total_salary);
            setChartData({
                labels,
                datasets: [{
                    label: 'Suma de salarios por departamento',
                    data: totals,
                    borderColor: 'rgb(75, 192, 192)',
                    fill: false
                }]
            });
        }).catch(error => {
            console.error("Error al obtener los datos:", error);
        });
    }, []);

    return (
        <div>
            <h1>Gráfico de Suma (Line Chart)</h1>
            <Line data={chartData} />
        </div>
    );
}