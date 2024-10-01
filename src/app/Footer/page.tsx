import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1>Welcome to my Footer Webpage</h1>
    <ul>
        <li><Link href='/'>Home</Link></li>
      <li><Link href='/Navbar'>Navbar</Link></li>
      <li><Link href='/About'>About</Link></li>
      <li><Link href='/Contact'>Contact</Link></li>
    </ul>
    </>
   
  );
}