import { BanknoteArrowUp, LayoutGrid, SquareArrowRightExit, History } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

export function NavBottom() {
    const location = useLocation()
    const isActive = (path: string) => location.pathname === path
    const logout = useLogout()

    return (
        <nav className="fixed bottom-0 left-0 w-full">
            <div className="max-w-[600px] m-auto flex justify-around items-center px-4 pt-6 pb-4 bg-white/80 backdrop-blur-md rounded-t-3xl">
                <Link 
                    to="/dashboard"
                    className={`flex flex-col items-center ${
                        isActive("/dashboard") ? "text-indigo-600" : "text-gray-400"
                    }`}
                >
                    <LayoutGrid size={22} />
                    <span className="text-xs">Home</span>
                </Link>

                <Link 
                    to="/transfer"
                    className={`flex flex-col items-center ${
                        isActive("/transfer") ? "text-indigo-600" : "text-gray-400"
                    }`}
                >
                    <BanknoteArrowUp size={22} />
                    <span className="text-xs">PIX</span>
                </Link>

                <Link 
                    to="/transactions"
                    className={`flex flex-col items-center ${
                        isActive("/transactions") || location.pathname.startsWith("/receipt") ? "text-indigo-600" : "text-gray-400"
                    }`}
                >
                    <History size={22} />
                    <span className="text-xs">Transações</span>
                </Link>

                
                <button onClick={logout} 
                    className={`flex flex-col items-center ${
                        isActive("/") ? "text-indigo-600" : "text-gray-400"
                    }`}
                >
                    <SquareArrowRightExit size={22} />
                    <span className="text-xs">Sair</span>
                </button>
            </div>
        </nav>
    )
}