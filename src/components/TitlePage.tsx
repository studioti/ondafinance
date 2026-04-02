type Props = {
    title: string
    subtitle: string
}

export function TitlePage({ title, subtitle }: Props) {
    return (
        <div className="text-center mb-10">
            <h1 className="text-[24px]">
                {title}
            </h1>
            <p className="text-md opacity-70">
                {subtitle}
            </p>
        </div>
    )
}