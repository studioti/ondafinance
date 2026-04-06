import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Waves } from "lucide-react";
import { createBankIfNotExists } from "../services/bank";
import { useForm } from "react-hook-form";
import { useUserStore } from "../store/useStore"
import { Loading } from "../components/Loading";

function Login() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false)

    const setEmail = useUserStore((state) => state.setEmail)

    const { register, handleSubmit, watch } = useForm()

    const formValues = watch()

    const isDisabled =
        !formValues.email ||
        !formValues.password

    function handleLogin(data: any) {

        setLoading(true)

        const user = {
            id: Math.floor(Math.random() * 10000),
            email: data.email,
        }

        setEmail(formValues.email)

        try {
            localStorage.setItem("user", JSON.stringify(user))

            createBankIfNotExists()

            setTimeout(() => {
                navigate("/dashboard")
            }, 1500)

        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    return (
        <main className="page min-h-screen flex items-center justify-center p-6 relative overflow-hidden font-body text-[#131b2e]">

            {/* Background */}
            <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl"></div>

            <div className="w-full z-10">

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center mb-6">
                        <div className="w-14 h-14 bg-gradient-to-br from-[#4648d4] to-[#6063ee] rounded-full flex items-center justify-center shadow-lg">
                            <Waves color="white" />
                        </div>
                    </div>
                    <h1 className="font-headline font-extrabold text-4xl tracking-tighter mb-0 text-[32px]">
                        Onda Finance
                    </h1>
                    <p className="text-sm opacity-70">
                        Seu fluxo financeiro inteligente.
                    </p>
                </div>

                {/* Login */}
                <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg border border-white/50">
                    <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>

                        {/* Email */}
                        <div className="space-y-2">
                            <div className="flex justify-between ml-1">
                                <label className="text-sm font-semibold" htmlFor="email">E-mail</label>
                            </div>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2">
                                    <Mail />
                                </span>
                                <input
                                    type="email"
                                    placeholder="exemplo@email.com"
                                    className="w-full pl-12 pr-4 py-4 bg-gray-100 rounded-xl focus:ring-2 focus:ring-indigo-200 outline-none"
                                    id="email"
                                    {...register("email")}
                                    onChange={(e) => {
                                        register("email").onChange(e)
                                    }}
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <div className="flex justify-between ml-1">
                                <label className="text-sm font-semibold" htmlFor="password">Senha</label>
                            </div>

                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2">
                                    <Lock />
                                </span>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-4 py-4 bg-gray-100 rounded-xl focus:ring-2 focus:ring-indigo-200 outline-none"
                                    id="password"
                                    {...register("password")}
                                    onChange={(e) => {
                                        register("password").onChange(e)
                                    }}
                                />
                            </div>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            disabled={isDisabled}
                            className="w-full bg-gradient-to-br from-[#4648d4] to-[#6063ee] text-white font-bold py-4 rounded-xl hover:opacity-90 transition disabled:opacity-50 flex justify-center align-center"
                        >
                            {loading && <Loading />}
                            {loading ? "Processando..." : "Entrar"}
                        </button>
                    </form>
                </div>

            </div>
        </main>
    );
}

export default Login