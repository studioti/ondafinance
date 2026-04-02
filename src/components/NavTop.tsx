import { SquareArrowRightExit, CircleUser, Waves } from "lucide-react";
import { Link } from "react-router-dom";

export function NavTop() {
    return (
        <header className="flex items-center w-full px-6 py-4 bg-[#faf8ff] backdrop-blur-md relative">

            {/* User */}
            <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center">
                <CircleUser size={28} />
            </div>

            {/* Logo */}
            <div className="absolute left-1/2 -translate-x-1/2">
                <div className="w-10 h-10 bg-gradient-to-br from-[#4648d4] to-[#6063ee] rounded-2xl flex items-center justify-center shadow-lg">
                    <Waves size={22} color="white" />
                </div>
            </div>

            {/* Logout */}
            <div className="ml-auto">
                <Link to="/">
                    <SquareArrowRightExit size={25} />
                </Link>
            </div>

        </header>
    )
}