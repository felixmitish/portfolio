import Image from 'next/image'

export default function Home() {

  const words = 'hello felix'
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     {words} 
    </main>
  )
}

export function addTwoNumbers(a:any, b:any){
  return a+b;
}
