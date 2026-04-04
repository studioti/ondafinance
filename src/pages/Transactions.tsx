// import { useState } from "react";
import { Link } from "react-router-dom";
import { NavBottom } from "../components/NavBottom";
import { NavTop } from "../components/NavTop";
import { TransactionItem } from "../components/TransactionItem";
import { TitlePage } from "../components/TitlePage";
import { getBank } from "../services/bank";

function Transaction() {

    const transactions = getBank()?.transactions ?? null

    return (
        <div className="page bg-surface text-on-surface min-h-screen flex flex-col pb-24">

            {/* Header */}
            <NavTop />

            {/* Main */}
            <main className="flex-1 px-6 pt-6 max-w-2xl mx-auto w-full">
                
                {/* Transactions */}
                <section className="mb-6">

                    {/* Title */}
                    <TitlePage title={"Histórico de Transações"} subtitle={"Visualize seus fluxos financeiros"} />
                    
                    {/* Item */}
                    <div className="space-y-3">
                        {transactions.length ? (
                            transactions.map((t: any) => (
                                <TransactionItem
                                    key={t.id}
                                    id={t.id}
                                    amount={t.amount}
                                    date={t.date}
                                />
                            ))
                            ) : (
                            <p className="pb-4">Não há transações realizadas.</p>
                        )}
                    </div>

                    {/* Button */}
                    <section className="grid gap-4 w-full mt-7 mb-10 text-left">
                        <Link
                            to="/dashboard"
                            className="w-full text-center relative bg-gradient-to-br from-[#4648d4] to-[#6063ee] text-white font-bold py-4 rounded-xl hover:opacity-90 transition disabled:opacity-50"
                        >
                            Voltar ao início
                        </Link>
                    </section>

                </section>
            </main>

            {/* Nav */}
            <NavBottom />
        </div>
    );
}

export default Transaction