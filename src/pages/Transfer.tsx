import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavBottom } from "../components/NavBottom";
import { NavTop } from "../components/NavTop";
import { TitlePage } from "../components/TitlePage";
import { Key, Banknote, MessageSquareQuote } from "lucide-react";

function Receipt() {
    const navigate = useNavigate();
    const [pix_key, setPixKey] = useState("");
    const [price, setPrice] = useState("");
    const [message, setMessage] = useState("");

    function handleTransfer(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        navigate("/dashboard")
        console.log("pagamento realizado:", { pix_key, price, message })
    }

    return (
        <div className="bg-surface text-on-surface min-h-screen flex flex-col pb-24">

            {/* Header */}
            <NavTop />

            {/* Main */}
            <main className="flex-1 px-6 pt-6 max-w-2xl mx-auto w-full">
                
                {/* Title */}
                <TitlePage title={"Enviar Pix"} subtitle={"Transfira instantaneamente"} />

                {/* Transfer */}
                <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg border border-white/50">
                    <form onSubmit={handleTransfer} className="space-y-6">

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
                                    placeholder="E-mail, CPF, CNPJ ou Celular"
                                    className="w-full pl-12 pr-4 py-4 bg-gray-100 rounded-xl focus:ring-2 focus:ring-indigo-200 outline-none"
                                    id="pix_key"
                                    value={pix_key}
                                    onChange={(e) => setPixKey(e.target.value)}
                                />
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
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
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
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            disabled={!pix_key || !price || !message}
                            className="w-full bg-gradient-to-br from-[#4648d4] to-[#6063ee] text-white font-bold py-4 rounded-xl hover:opacity-90 transition disabled:opacity-50"
                        >
                            Enviar Pix
                        </button>
                    </form>
                </div>
                
            </main>

            {/* Nav */}
            <NavBottom />
        </div>
    );
}

export default Receipt