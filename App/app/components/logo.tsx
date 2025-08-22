const Logo = () => {
    return (
        <div className="flex flex-row items-center">


            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="113.6 104 307 214"
                width="70"
                height="48.75"
                className="block text-[#091057] dark:text-[#FFFFFF]"
            >
                <g fill="currentColor">
                    <circle cx="269.2" cy="148.4" r="44" />
                    <circle cx="173.2" cy="152.4" r="34.8" />
                    <circle cx="367.2" cy="152.4" r="34.8" />
                    <path d="M194.8 260 A75.2 57.6 0 0 1 344.4 260 L339.6 294.4 C336.4 312.8 324.4 318.4 295.6 318.4 H244.4 C215.6 318.4 203.6 312.8 200.4 294.4 L194.8 260Z" />
                    <path d="M113.6 248 A50.8 41.6 0 0 1 215.2 248 L212 272 C210 284.8 204.4 288 185.2 288 H143.6 C124.4 288 118.8 284.8 116.8 272 L113.6 248Z" />
                    <path d="M319.2 248 A50.8 41.6 0 0 1 420.8 248 L419 272 C417.2 284.8 411.6 288 392.4 288 H351.2 C332 288 326.4 284.8 325.2 272 L319.2 248Z" />
                </g>
            </svg>
            <div className="ml-6" >
                <p className="font-bold text-[30px] text-[#091057] dark:text-[#FFFFFF]">Conferency</p>
                <p className="font-medium text-[16px] text-[#EC8305]">Event Management</p>
            </div>
        </div>

    )
}

export default Logo