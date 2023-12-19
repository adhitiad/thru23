import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <div className="w-full justify-center items-center">
        <Image src="/images/logo.png" alt="logo" width={300} height={300} />
        <Link
          href="/dashboard"
          className="btn btn-primary btn-outline btn-circle btn-lg mt-3"
        >
          Kasir
        </Link>
      </div>
    </>
  );
}
