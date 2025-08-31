export const TitleSection = ({ title }: { title: string }) => {
    return (
        <h2 className="title-section mt-16 mb-4 inline-block">
            {title}
            <div className="mt-4 w-[100px] h-[8px] bg-[#091057] dark:bg-[#fff] rounded"></div>
        </h2>
    )
}