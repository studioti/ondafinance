// components/ui/Loading.tsx
import { Loader } from "lucide-react"

export function Loading() {
    return (
        <div className="flex items-center justify-center">
            <Loader className="h-5 w-5 animate-spin text-muted-foreground me-2" />
        </div>
    )
}