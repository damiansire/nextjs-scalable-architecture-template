import { Metadata } from "next"

export default function Page() {
  return <h1>Hello, Home page!</h1>
}

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
}