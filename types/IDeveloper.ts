import type { EDeveloperRoles } from './EDeveloperRoles';

export interface IDeveloper {
	id: number;
	name: string;
	role: EDeveloperRoles;
}
