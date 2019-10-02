import { SERVER_URL } from '../redux/constants';

export const toCamelCase = (type) => {
    return type
        .split('_')
        .map((word, index) => (index !== 0 ? word[0] + word.slice(1).toLocaleLowerCase() : word.toLocaleLowerCase()))
        .join('');
};

const getAdiService = () => {
    const serverUrl = 'http://localhost:7070/api';

    async function sentRequest(url, body) {
        const response = await fetch(`${serverUrl}/${url}`, body);
        const data = await response.json();

        return {
            status: response.status,
            data,
        };
    }

    return {
        fetchTopSales: () => sentRequest('top-sales'),
        fetchCategories: () => sentRequest('categories'),
        fetchItems: ({ queryString }) => sentRequest(`items${queryString}`),
        makeOrder: ({ body }) => sentRequest(`order`, { method: 'POST', body }),
        getQueryString(payload) {
            let url = '';
            if (payload.id) {
                return `${url}/${payload.id}`;
            }

            if (Object.keys(payload).length) {
                url += '?';
                Object.keys(payload).forEach((key) => {
                    url += payload[key] ? `${key}=${payload[key]}&` : '';
                });
            }
            return url;
        },
    };
};

export const apiService = getAdiService();
