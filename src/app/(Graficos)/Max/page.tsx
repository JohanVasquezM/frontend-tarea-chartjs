'use client'
import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { getMaxSalarioDepartamento } from '@/app/Servicios/Api';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function MaxPage() {
    const [chartData, setChartData] = useState({
        labels: [] as string[],
        datasets: [{
            label: 'Máximo salario por departamento',
            data: [] as number[],
            backgroundColor: [
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)'
            ],
        }]
    });

    useEffect(() => {
        getMaxSalarioDepartamento().then(data => {
            const labels = data.map((item: any) => `Dept ${item.DEPARTMENT_ID}`);
            const maxSalaries = data.map((item: any) => item.max_salary);
            setChartData({
                labels,
                datasets: [{
                    label: 'Máximo salario por departamento',
                    data: maxSalaries,
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.5)',
                        'rgba(255, 159, 64, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)'
                    ],
                }]
            });
        }).catch(error => {
            console.error("Error al obtener los datos:", error);
        });
    }, []);

    return (
        <div>
            <h1>Gráfico de Máximo (Doughnut Chart)</h1>
            <Doughnut data={chartData} />
        </div>
    );
}