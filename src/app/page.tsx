"use client"
import {useRouter} from 'next/navigation';
import Link from "next/link";

export default function Home() {
  const rout = useRouter(); 
  return (
    <>
    <h1>Welcome to my Next.js Website</h1>
    <ul>
      <li><Link href='/Navbar'>Navbar</Link></li>
      <li><Link href='/About'>About</Link></li>
      <li><Link href='/Contact'>Contact</Link></li>
      <li><Link href='/Footer'>Footer</Link></li>
    </ul>

    <button onClick={() => rout.push('/Navbar')}>Go to Navbar page</button>
    <br></br>
    <button onClick={() => rout.push('/About')}>Go to About page</button>
    <br></br>
    <button onClick={() => rout.push('/Contact')}>Go to Contact page</button>
    <br></br>
    <button onClick={() => rout.push('/Footer')}>Go to Footer page</button>
    </>
   
  );
}
