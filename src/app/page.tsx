import Link from "next/link";

export default function Home() {
  return (
    <div className="grid place-items-center min-h-screen p-8">
      <main className="flex flex-col gap-4">
        <Link href="/Conteo">Ingresar a Conteo</Link>
        <Link href="/Suma">Ingresar a Suma</Link>
        <Link href="/Max">Ingresar a Máximo</Link>
      </main>
    </div>
  );
}
