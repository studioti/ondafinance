// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TransactionItem } from "../components/TransactionItem";
import { NavBottom } from "../components/NavBottom";
import { NavTop } from "../components/NavTop";
import { TitlePage } from "../components/TitlePage";
import { Check, CircleCheck } from "lucide-react";

function Receipt() {
    return (
        <div className="bg-surface text-on-surface min-h-screen flex flex-col pb-24">

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

                {/* RECEIPT */}
                <div className="md:col-span-2 bg-white p-8 rounded-[2rem] shadow relative overflow-hidden">

                    {/* Price */}
                    <div className="flex flex-col items-center mb-10 relative z-10">
                        <span className="text-md opacity-70">
                            Saldo Total
                        </span>
                        <div className="mt-2 flex items-baseline gap-1">
                            <span className="font-bold text-4xl">
                                R$
                            </span>
                            <span className="text-4xl font-bold">
                                1.000,00
                            </span>
                        </div>
                    </div>

                    {/* From */}
                    <div className="flex justify-between items-center py-4 border-b border-dashed text-left">
                        <div>
                            <p className="text-sm text-on-surface-variant">
                                Para
                            </p>
                            <p className="font-semibold break-all text-md">
                                thiago.aguiar86@gmail.com
                            </p>
                        </div>
                    </div>

                    {/* Detail */}
                    <div className="grid grid-cols-2 gap-8 mt-6 text-left">
                        <div className="space-y-6">
                            <div>
                                <p className="text-sm text-on-surface-variant">
                                    Data
                                </p>
                                <p className="font-semibold">
                                    25/04/2024
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-on-surface-variant">
                                    Tipo
                                </p>
                                <p className="font-semibold">
                                    Pix Enviado
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <p className="text-sm text-on-surface-variant">
                                    Instituição
                                </p>
                                <p className="font-semibold">
                                    Onda Finance
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-on-surface-variant">
                                    Status
                                </p>
                                <div className="flex items-center gap-2">
                                    <p className="text-tertiary font-semibold">
                                        Concluído
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ID */}
                    <div className="pt-6 mt-6 border-t border-dashed text-left">
                        <p className="text-sm text-on-surface-variant">
                            ID da Transação
                        </p>

                        <div className="flex justify-between items-center bg-indigo-50 rounded-xl px-3 py-3 mt-3">
                            <code className="text-sm break-all">
                                E00038166202404251430s7a29e1z
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