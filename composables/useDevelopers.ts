import type { IDeveloper } from '~/types/IDeveloper';

export const useDevelopers = () => {
	const developers = useState<IDeveloper[] | null>('developers', () => []);

	const fetchDevelopers = async () => {
		const { data } = await useFetch<IDeveloper[] | null>('/api/getDevelopers');
		developers.value = data.value;
	};

	return { developers, fetchDevelopers };
};
