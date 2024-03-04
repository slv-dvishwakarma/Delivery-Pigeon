import { App } from "@/components/sections/App";
import { Hero } from "@/components/sections/Hero";
import { OrderForm } from "@/components/sections/OrderForm";
import { Service } from "@/components/sections/Service";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Works } from "@/components/sections/Works";


export default function Home() {


  return (
    <>
    <Hero />
    <OrderForm />
    <Works />
    <WhyChoose />
    <Service />
    <App />
    </>
  );
}
