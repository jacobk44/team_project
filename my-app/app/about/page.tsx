// app/page.tsx
import Hero from "@/app/ui/about/hero";


export default function Home() {
  return (
    <main>
      <Hero
        title="Services"
        description="Home and Moving cleaning services, customizable to suit your needs."
        buttonText="BOOK NOW"
        image="/clean_service.jpg"
      />
    </main>
  );
}