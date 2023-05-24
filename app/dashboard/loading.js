export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <>
        <section
            className="relative grid min-h-screen bg-green-400 place-items-center max-w-screen"
        >
            <div
                className="absolute w-48 h-48 rounded-full shadow-2xl bg-gradient-to-r from-green-500 blur animate-ping delay-5s"
            ></div>
            <div
                className="absolute w-32 h-32 rounded-full shadow-xl bg-gradient-to-l from-green-500 animate-ping"
            ></div>
            <div
                className="absolute w-24 h-24 rounded-full shadow-xl bg-gradient-to-r from-green-500 animate-ping delay-5s"
            ></div>
            <div
                className="absolute w-24 h-24 bg-white rounded-full shadow-xl"
            ></div>
            <img src="https://claimmylawyer.com/images/logo.png" className="z-10 w-16" alt="Claim My Lawyer Logo" />
        </section>
        <section
            class="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-loading text-green-500 blur-md invert drop-shadow-xl md:filter-none"
        >Loading
        </section>
    </>;
}