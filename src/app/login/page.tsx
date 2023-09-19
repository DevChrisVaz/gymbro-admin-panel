import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
            <div className="sm:shadow-xl px-8 pb8 pt12 sm:bg-white rounded-xl space-y-12">
                <h1 className=" text-black font-semibold text-2xl">Login</h1>
                <p className="text-center text-black">
                    Need to create an account?{' '}
                    <Link className="text-indigo-500 hover:underline" href="/login">
                        Sign up
                    </Link> {' '}
                </p>
            </div>
        </div>
    )
}