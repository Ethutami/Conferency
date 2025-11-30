export const PrimaryButton = ({ title, style }: { title: string, style: string }) => {
    return (
        <button className={`primary-button ${style} transition mt-6`}>
            {title}
        </button>

    )
}

export const SecondaryButton = ({ title, style }: { title: string, style: string }) => {
    return (
        <button className={`secondary-button ${style} transition mt-6`}>
            {title}
        </button>

    )
}