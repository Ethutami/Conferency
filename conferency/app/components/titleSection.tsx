export const TitleSection = ({ title, styles }: { title: string, styles?: string }) => {
    return (
        <h2 className={`section-title mt-16 mb-6 inline-block ${styles}`}>
            {title}
            <div className="mt-2 w-[60px] md:w-[80px] lg:w-[100px] h-[4px] md:h-[6px] lg:h-[8px] bg-[#091057] dark:bg-[#fff] rounded"></div>
        </h2>
    )
}