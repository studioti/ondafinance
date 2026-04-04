import { api } from "./api"

export async function getBank() {
    const response = await api.get("/bank")
    return response.data
}

export async function setBank(data: any) {
    const response = await api.post("/bank", data)
    return response.data
}

export function createBankIfNotExists() {
    const existingBank = localStorage.getItem("bank")

    if (!existingBank) {
        const initialData = {
            balance: 1000,
            transactions: [],
        }

        localStorage.setItem("bank", JSON.stringify(initialData))
    }
}