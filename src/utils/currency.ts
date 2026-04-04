export function parseCurrency(value: string) {
	if (!value) return 0

	const cleaned = value
		.replace(/[^\d,.-]/g, "")
		.replace(/\./g, "")
		.replace(",", ".")

	return parseFloat(cleaned) || 0
}

export function formatCurrency(value: number) {
	return value.toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
	})
}

export function formatDocument(value: string) {
	if (!value) return ""

	let numbers = value.replace(/\D/g, "")

	// 🔒 limite máximo (CNPJ = 14)
	numbers = numbers.slice(0, 14)

	// 🪪 CPF (11 dígitos exatos)
	if (numbers.length === 11) {
		return numbers
			.replace(/(\d{3})(\d)/, "$1.$2")
			.replace(/(\d{3})(\d)/, "$1.$2")
			.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
	}

	// 🏢 CNPJ (até 14)
	return numbers
		.replace(/^(\d{2})(\d)/, "$1.$2")
		.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
		.replace(/\.(\d{3})(\d)/, ".$1/$2")
		.replace(/(\d{4})(\d)/, "$1-$2")
}

export function formatCurrencyInput(value: string) {
	if (!value) return ""

	const numbers = value.replace(/\D/g, "")

	const number = Number(numbers) / 100

	return number.toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
	})
}