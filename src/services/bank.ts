export function getBank() {
    return JSON.parse(localStorage.getItem("bank") || "null")
}

export function setBank(data: any) {
    localStorage.setItem("bank", JSON.stringify(data))
    return data
}

export function createBankIfNotExists() {
    const existing = getBank()

    if (!existing) {
        const initialData = {
            balance: 1000,
            transactions: [],
        }

        localStorage.setItem("bank", JSON.stringify(initialData))
        return initialData
    }

    return existing
}