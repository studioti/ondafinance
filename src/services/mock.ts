import { api } from "./api"

api.interceptors.request.use((config) => {
    if (config.url === "/bank" && config.method === "get") {
        const data = JSON.parse(localStorage.getItem("bank") || "null")

        return {
            ...config,
            adapter: async () => ({
                data,
                status: 200,
                statusText: "OK",
                headers: {},
                config,
            }),
        }
    }

    if (config.url === "/bank" && config.method === "post") {
        const raw = config.data

        const body = typeof raw === "string"
            ? raw
            : JSON.stringify(raw)

        localStorage.setItem("bank", body)

        return {
            ...config,
            adapter: async () => ({
                data: JSON.parse(body),
                status: 200,
                statusText: "OK",
                headers: {},
                config,
            }),
        }
    }

    return config
})