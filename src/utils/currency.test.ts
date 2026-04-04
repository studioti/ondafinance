import { describe, it, expect } from "vitest"
import { parseCurrency } from "./currency"

describe("parseCurrency", () => {
    it("deve converter 'R$ 25,50' para 25.5", () => {
        const result = parseCurrency("R$ 25,50")
        expect(result).toBe(25.5)
    })

    it("deve retornar 0 para string vazia", () => {
        const result = parseCurrency("")
        expect(result).toBe(0)
    })

    it("deve converter 'R$ 1.000,00' corretamente", () => {
        const result = parseCurrency("R$ 1.000,00")
        expect(result).toBe(1000)
    })
})