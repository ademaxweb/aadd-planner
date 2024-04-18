import type { IDeveloper } from '~/types/IDeveloper';
import type { IDeveloperTiming } from '~/types/IDeveloperTiming';

export const useDevelopers = () => {
	const developers = useState<IDeveloper[] | null>('developers', () => null);
	const timings = useState<IDeveloperTiming[] | null>('timings', () => null);

	const fetchDevelopers = async () => {
		const { data } = await useFetch<IDeveloper[] | null>('/api/getDevelopers');
		developers.value = data.value;
	};

	const fetchDevelopersTimings = async () => {
		
	};

	return { developers, timings, fetchDevelopers, fetchDevelopersTimings };
};
