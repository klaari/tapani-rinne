export default class Api {
    static async getEvents() {
        return await this.callApi("events");
    }
    static async callApi(path) {
        const fetchUrl = `https://api.tapanirinne.com/api/${path}`;

        try {
            const data = await fetch(fetchUrl).then((response) =>
                response.json()
            );
            return data;
        } catch (error) {
            throw new Error(`Could not fetch data from ${fetchUrl}`);
        }
    }
}
