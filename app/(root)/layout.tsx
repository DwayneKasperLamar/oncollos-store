import Navbar from "@/components/Navbar";
import { SanityLive } from "@/sanity/lib/live";


export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="font-work-sans">
            <SanityLive/>
            <Navbar />

            {children}
        </main>
    )
} 
