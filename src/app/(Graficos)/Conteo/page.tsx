'use client'
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { getConteoPuestoDepartamento } from '@/app/Servicios/Api';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ConteoPage() {
    const [chartData, setChartData] = useState({
        labels: [] as string[],
        datasets: [{
            label: 'Conteo de empleados por departamento',
            data: [] as number[],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }]
    });

    useEffect(() => {
        getConteoPuestoDepartamento().then(data => {
            const labels = data.map((item: any) => `${item.DEPARTMENT_ID} - ${item.JOB_ID}`);
            const counts = data.map((item: any) => item.total_count);
            setChartData({
                labels,
                datasets: [{
                    label: 'Conteo de empleados por departamento',
                    data: counts,
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                }]
            });
        }).catch(error => {
            console.error("Error al obtener los datos:", error);
        });
    }, []);

    return (
        <div>
            <h1>Gráfico de Conteo (Bar Chart)</h1>
            <Bar data={chartData} />
        </div>
    );
}