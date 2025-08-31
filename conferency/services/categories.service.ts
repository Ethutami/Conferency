import { API_URL } from '@/app/config';
import axios from 'axios';
const url = `${API_URL}api/categories`;

export async function fetchCategories() {
    try {
        const response = await axios.get(url);
        return response?.data?.data
    } catch (error) {
        console.error('Something Wrong:', error);
    }
}