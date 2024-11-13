import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="w-[200px]">
      <img src="/logo.svg" alt="logo" className="h-8" />
    </Link>
  );
}
