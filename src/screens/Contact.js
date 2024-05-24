import Bg from "../assets/img/bg.jpg";

export default function Contact() {
    const styling = {
        backgroundImage: `linear-gradient(#252525ad, #252525ad), url("${Bg}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
    };
    
    return (
        <div className="flex flex-col">
            <main
                className="min-h-[50vh] bg-cover bg-no-repeat bg-center relative pt-12"
                style={styling}
            >
                <div className="flex items-center justify-center h-[50vh] flex-col gap-2">
                    <h2 className="lg:text-5xl text-3xl font-bold text-white">
                        Contact
                    </h2>
                    <div>
                        <p className="text-gray-300 lg:text-base text-sm">
                            Contact | About MediSync
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}