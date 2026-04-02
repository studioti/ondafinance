import { BanknoteArrowUp } from "lucide-react"
import { useNavigate } from "react-router-dom"

type Props = {
    title: string
    amount: number
    date: string
}

export function TransactionItem({ title, amount, date }: Props) {

    const navigate = useNavigate();

    function handleReceipt() {
        navigate("/receipt/1")
    }

    return (
        <div className="bg-white p-4 rounded-2xl flex justify-between items-center" onClick={handleReceipt}>
            <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-100 flex justify-center items-center">
                    <BanknoteArrowUp />
                </div>
                <div className="ps-3">
                    <div className="text-left max-w-[120px]">
                        <p className="font-semibold text-sm">
                            Transferência Enviada
                        </p>
                        <p className="text-xs text-gray-500">
                            {date}
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-right pointer">
                <p className="font-bold text-dark-600">
                    - R$ {amount}
                </p>
                <p className="text-xs text-[var(--color-indigo-600)] font-semibold">
                    PIX
                </p>
            </div>
        </div>
    )
}