async function fetchClient(endpoint: any, { body, ...customConfig }: any = {}): Promise<any> {
    const headers: any = {};
    let requestBody: any = body;

    if (body && !(body instanceof FormData)) {
        requestBody = JSON.stringify(body);
        headers["content-type"] = "application/json";
    }

    const config: RequestInit = {
        method: body ? "POST" : "GET",
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers,
        },
    };

    if (requestBody) {
        config.body = requestBody;
    }

    const response = await window.fetch(`${endpoint}`, config);

    try {
        return await response.json();
    } catch (err) {
        return response;
    }
}

export default fetchClient;
