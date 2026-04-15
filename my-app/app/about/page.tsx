// app/page.tsx
import Hero from "@/app/ui/about/hero";
import ContactCta from "@/app/ui/details/contactcta";


export default function Home() {
  return (
    <main>
      <Hero
        title="Services"
        description="Home and Moving cleaning services, customizable to suit your needs."
        buttonText="BOOK NOW"
        image="/clean_service.jpg"
      />

      <ContactCta
        title="Need a Trusted Cleaning Team?"
        description="Reach out today and we will help you choose the right service for your home or business."
        buttonText="Get in Touch"
      />
    </main>
  );
}