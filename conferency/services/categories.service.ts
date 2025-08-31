import axios from 'axios';
import { PUBLIC_API_URL } from '@/app/config';

const url = `${PUBLIC_API_URL}/api/categories`
export async function fetchCategories() {
    try {
        const response = await axios.get(url);
        return response?.data?.data
    } catch (error) {
        console.error('Something Wrong:', error);
    }
}