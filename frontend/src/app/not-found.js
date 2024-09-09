"use client"
import Link from "next/link";



export default function NotFound() {




    return (
        <main>
            <h1 className="text-center text-4xl mt-20">Página no encontrada</h1>
            <Link href="/" className="block text-2xl text-center my-8 hover:text-orange-600 duration-300">
                Volver al inicio
            </Link>
            <img className="w-3/6 m-auto my-16" src="/assets/img/404.png" />

        </main>
    );
}
