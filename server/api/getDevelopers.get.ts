import developers from '~/server/data/developers.json';
export default defineEventHandler(event => {
	return developers;
});
