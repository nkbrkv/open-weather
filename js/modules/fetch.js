export default async function getWeatherData(url) {
    return await fetch(url).then(
        successResponse => successResponse.status != 200 ? null : successResponse.json(),
        failResponse => null);
}