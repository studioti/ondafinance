import { useNavigate } from "react-router-dom";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { NavBottom } from "../components/NavBottom";
import { NavTop } from "../components/NavTop";
import { TitlePage } from "../components/TitlePage";
import { Key, Banknote, MessageSquareQuote } from "lucide-react";
import { useForm } from "react-hook-form"
import { getBank, setBank } from "../services/bank";
import { formatCurrency, formatCurrencyInput, formatDocument, parseCurrency } from "../utils/currency";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

function Transfer() {
    const navigate = useNavigate();

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: setBank,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["bank"] })
        },
    })

    const { data: bank } = useQuery({
        queryKey: ["bank"],
        queryFn: getBank,
    })

    const transferSchema = z.object({
        pix_key: z.string().min(1, "Informe a chave Pix"),
        price: z.string().min(1, "Informe o valor"),
        message: z.string().min(1, "Informe a mensagem"),
    })

    type TransferFormData = z.infer<typeof transferSchema>

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<TransferFormData>({
        resolver: zodResolver(transferSchema),
    })

    const formValues = watch()

    const price = formValues.price || ""
    const amount = parseCurrency(price)

    const isDisabled =
        !formValues.pix_key ||
        !formValues.price ||
        !formValues.message ||
        amount <= 0 ||
        amount > (bank?.balance ?? 0)

    function handleTransfer(data: any) {
        const amount = Math.abs(parseCurrency(data.price))

        const newTransaction = {
            id: Math.floor(Math.random() * 100000),
            key: data.pix_key,
            hash: Date.now().toString(36).toUpperCase() + Math.random().toString(36).substring(2, 8),
            amount: amount,
            message: data.message,
            date: new Date().toLocaleString("pt-BR")
        }

        try {
            if ((bank?.balance ?? 0) >= amount) {

                const updatedBank = {
                    ...bank,
                    balance: bank.balance - amount,
                    transactions: [
                        {
                            ...newTransaction,
                            amount: -amount,
                        },
                        ...bank.transactions,
                    ],
                }

                mutation.mutate(updatedBank, {
                    onSuccess: () => {
                        navigate("/dashboard")
                    }
                })
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="page bg-surface text-on-surface min-h-screen flex flex-col pb-24">

            {/* Header */}
            <NavTop />

            {/* Main */}
            <main className="flex-1 px-6 pt-6 max-w-2xl mx-auto w-full">

                {/* Title */}
                <TitlePage title={"Enviar Pix"} subtitle={"Transfira instantaneamente"} />

                {/* Transfer */}
                <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg border border-white/50">
                    <form className="space-y-6" onSubmit={handleSubmit(handleTransfer)}>

                        {/* Key */}
                        <div className="space-y-2">
                            <div className="flex justify-between ml-1">
                                <label className="text-sm font-semibold" htmlFor="pix_key">Chave Pix</label>
                            </div>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2">
                                    <Key size={20} />
                                </span>
                                <input
                                    type="text"
                                    placeholder="Digite CPF ou CNPJ"
                                    className="w-full pl-12 pr-4 py-4 bg-gray-100 rounded-xl focus:ring-2 focus:ring-indigo-200 outline-none"
                                    id="pix_key"
                                    {...register("pix_key")}
                                    onChange={(e) => {
                                        const formatted = formatDocument(e.target.value)
                                        e.target.value = formatted

                                        register("pix_key").onChange(e)
                                    }}
                                />
                                {errors.pix_key && (
                                    <p className="text-red-500 text-sm">{errors.pix_key.message}</p>
                                )}
                            </div>
                        </div>

                        {/* Price */}
                        <div className="space-y-2">
                            <div className="flex justify-between ml-1">
                                <label className="text-sm font-semibold" htmlFor="price">Valor</label>
                            </div>

                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2">
                                    <Banknote />
                                </span>
                                <input
                                    type="text"
                                    placeholder="R$ 0,00"
                                    className="w-full pl-12 pr-4 py-4 bg-gray-100 rounded-xl focus:ring-2 focus:ring-indigo-200 outline-none"
                                    id="price"
                                    {...register("price")}
                                    onChange={(e) => {
                                        const formatted = formatCurrencyInput(e.target.value)
                                        e.target.value = formatted

                                        register("price").onChange(e)
                                    }}
                                />
                                {errors.price && (
                                    <p className="text-red-500 text-sm">{errors.price.message}</p>
                                )}
                            </div>
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                            <div className="flex justify-between ml-1">
                                <label className="text-sm font-semibold" htmlFor="message">Mensagem</label>
                            </div>

                            <div className="relative">
                                <span className="absolute left-4 top-4">
                                    <MessageSquareQuote />
                                </span>
                                <textarea
                                    placeholder="O que é esse pagamento?"
                                    className="w-full pl-12 pr-4 py-4 bg-gray-100 rounded-xl focus:ring-2 focus:ring-indigo-200 outline-none h-35"
                                    id="message"
                                    {...register("message")}
                                ></textarea>
                                {errors.message && (
                                    <p className="text-red-500 text-sm">{errors.message.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="flex justify-center gap-2">
                            <span>Saldo disponível:</span>
                            <span className="ms-2 font-bold text-green-600">{formatCurrency(bank?.balance ?? 0)}</span>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            disabled={isDisabled}
                            className="w-full bg-gradient-to-br from-[#4648d4] to-[#6063ee] text-white font-bold py-4 rounded-xl hover:opacity-90 transition disabled:opacity-50"
                        >
                            {amount > (bank?.balance ?? 0) ? 'Saldo insuficiente' : 'Enviar Pix'}
                        </button>
                    </form>
                </div>

            </main>

            {/* Nav */}
            <NavBottom />
        </div>
    );
}

export default Transfer

