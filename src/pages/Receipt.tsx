// import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { NavBottom } from "../components/NavBottom";
import { NavTop } from "../components/NavTop";
import { TitlePage } from "../components/TitlePage";
import { Check } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getBank } from "../services/bank";
import { formatCurrency } from "../utils/currency";

function Receipt() {
    interface Transaction {
        id: number;
        amount: number;
        key: string;
        date: string;
        hash: string;
    }

    const { data } = useQuery({
        queryKey: ["bank"],
        queryFn: getBank,
    })

    const { id } = useParams()

    const transaction = data?.transactions.find(
        (t: Transaction) => t.id === Number(id)
    )

    if (!transaction) {
        return (
            <div className="page bg-surface text-on-surface min-h-screen flex flex-col pb-24">
                <div className="page min-h-screen flex items-center justify-center">
                    Carregando transação...
                </div>
            </div>
        )
    }

    return (
        <div className="page bg-surface text-on-surface min-h-screen flex flex-col pb-24">

            {/* Header */}
            <NavTop />

            {/* Main */}
            <main className="flex-1 px-6 pt-6 max-w-2xl mx-auto w-full">

                {/* Icon */}
                <div className="w-15 h-15 rounded-full bg-green-300 flex items-center justify-center m-auto mb-5">
                    <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center">
                        <Check size={20} className="text-green-300 font-bold" />
                    </div>
                </div>

                {/* Title */}
                <TitlePage title={"Transferência Enviada"} subtitle={"Sua transação foi processada com sucesso"} />

                {/* Receipt */}
                <div className="md:col-span-2 bg-white p-8 rounded-[2rem] shadow relative overflow-hidden">

                    {/* Price */}
                    <div className="flex flex-col items-center mb-10 relative z-10">
                        <span className="text-md opacity-70">
                            Saldo Total
                        </span>
                        <div className="mt-2 flex items-baseline gap-1">
                            <span className="text-4xl font-bold">
                                {formatCurrency(Math.abs(transaction.amount))}
                            </span>
                        </div>
                    </div>

                    {/* From */}
                    <div className="flex justify-between items-center py-4 border-b border-dashed text-left text-sm">
                        <span className="text-on-surface-variant">
                            Para
                        </span>
                        <span className="font-semibold break-all">
                            {transaction.key}
                        </span>
                    </div>

                    {/* Date */}
                    <div className="flex justify-between items-center py-4 border-b border-dashed text-left text-sm">
                        <span className="text-on-surface-variant">
                            Data
                        </span>
                        <span className="font-semibold break-all">
                            {transaction.date}
                        </span>
                    </div>

                    {/* To */}
                    <div className="flex justify-between items-center py-4 border-b border-dashed text-left text-sm">
                        <span className="text-on-surface-variant">
                            Instituição
                        </span>
                        <span className="font-semibold break-all">
                            Onda Finance
                        </span>
                    </div>

                    {/* Type */}
                    <div className="flex justify-between items-center py-4 border-b border-dashed text-left text-sm">
                        <span className="text-on-surface-variant">
                            Tipo de transação
                        </span>
                        <span className="font-semibold break-all">
                            PIX Enviado
                        </span>
                    </div>

                    {/* Status */}
                    <div className="flex justify-between items-center py-4 border-b border-dashed text-left text-sm">
                        <span className="text-on-surface-variant">
                            Status
                        </span>
                        <span className="font-semibold text-green-700 break-all">
                            Concluído
                        </span>
                    </div>

                    {/* ID */}
                    <div className="pt-8 pb-2 text-left">
                        <p className="text-sm text-on-surface-variant">
                            ID da Transação
                        </p>

                        <div className="flex justify-between items-center bg-indigo-50 rounded-xl px-3 py-3 mt-3">
                            <code className="text-sm break-all uppercase">
                                {transaction.hash}
                            </code>
                        </div>
                    </div>
                </div>

                {/* Button */}
                <section className="grid gap-4 w-full mt-7 mb-10 text-left">
                    <Link
                        to="/transactions"
                        className="w-full text-center relative bg-gradient-to-br from-[#4648d4] to-[#6063ee] text-white font-bold py-4 rounded-xl hover:opacity-90 transition disabled:opacity-50"
                    >
                        Voltar ao histórico
                    </Link>
                </section>

            </main>

            {/* Nav */}
            <NavBottom />
        </div>
    );
}

export default Receipt