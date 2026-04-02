// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TransactionItem } from "../components/TransactionItem";
import { NavBottom } from "../components/NavBottom";
import { NavTop } from "../components/NavTop";

function Dashboard() {
    return (
        <div className="bg-surface text-on-surface min-h-screen flex flex-col pb-24">

            {/* Header */}
            <NavTop />

            {/* Main */}
            <main className="flex-1 px-6 pt-6 max-w-2xl mx-auto w-full">

                {/* Welcome */}
                <section className="mb-8 text-left">
                    <p className="text-md opacity-70">
                        Bem-vindo(a)
                    </p>
                    <p className="text-xl font-bold">
                        Thiago
                    </p>
                </section>

                {/* Balance */}
                <section className="grid gap-4 mb-5 text-left">

                    <div className="md:col-span-2 bg-white p-8 rounded-[2rem] shadow relative overflow-hidden">

                        <div className="relative z-10">
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
                    </div>
                </section>

                {/* Button */}
                <section className="grid gap-4 w-full mb-10 text-left">
                    <Link
                        to="/transfer"
                        className="w-full text-center relative bg-gradient-to-br from-[#4648d4] to-[#6063ee] text-white font-bold py-4 rounded-xl hover:opacity-90 transition disabled:opacity-50"
                    >
                        Realizar Pix
                    </Link>
                </section>

                {/* Transactions */}
                <section className="mb-6">
                    <div className="flex justify-between mb-4">
                        <h3 className="text-lg font-semibold">
                            Últimas Transações
                        </h3>
                        <Link to="/transactions" className="text-indigo-600 text-sm font-bold">
                            Ver Todas
                        </Link>
                    </div>

                    {/* Item */}
                    <div className="space-y-3">
                        <TransactionItem title={""} amount={0} date={"01/04/2026"} />
                    </div>
                </section>
            </main>

            {/* Nav */}
            <NavBottom />
        </div>
    );
}

export default Dashboard