// import Link from "next/link";

export default function LoginPage() {
    return (
        <section className="bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5">
                <div className="sm:w-1/2 px-16">
                    <h2 className="text-light-green font-bold text-2xl">Inicio de sesión</h2>
                    <p className="text-sm mt-4">Si aún no eres miembro, contáctanos</p>
                    <form className="flex flex-col gap-4">
                        <input 
                            className="p-2 rounded-xl border mt-8"
                            type="text" 
                            name="userName"
                            placeholder="Usuario"
                        />
                        <input 
                            className="p-2 rounded-xl border"
                            type="password" 
                            name="password" 
                            placeholder="Contraseña"
                        />
                        <button className="bg-light-green rounded-xl text-white py-2">Ingresar</button>
                    </form>
                </div>
                <div className="sm:block hidden w-1/2">
                    <img className="rounded-2xl" src="" alt="" />
                </div>
            </div>
        </section>
    );
};