import axios from "axios";

const api_url = 'http://localhost:5000';

export const getConteoPuestoDepartamento = async () => {
    try {
        const response = await axios.get(`${api_url}/count-puestos-departamento`);
        return response.data;
    } catch (error) {
        console.error("Error al hacer la solicitud:", error);
        throw error;
    }
};

export const getSumaSalarioDepartamento = async () => {
    try {
        const response = await axios.get(`${api_url}/sum-salario-departamento`);
        return response.data;
    } catch (error) {
        console.error("Error al hacer la solicitud:", error);
        throw error;
    }
};

export const getMaxSalarioDepartamento = async () => {
    try {
        const response = await axios.get(`${api_url}/max-salario-departamento`);
        return response.data;
    } catch (error) {
        console.error("Error al hacer la solicitud:", error);
        throw error;
    }
};