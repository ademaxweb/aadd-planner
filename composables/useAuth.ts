import type { IDeveloper } from '~/types/IDeveloper';

export const useAuth = () => {
	const user = useState<IDeveloper | null>('user', () => null);

	const login = (developer: IDeveloper) => {
		user.value = developer;
	};

	const logout = () => {
		user.value = null;
	};

	const isLoggedIn = computed(() => !!user.value);

	return { user, isLoggedIn, login, logout };
};
