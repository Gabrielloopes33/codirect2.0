"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";

export function ConditionalNavbar() {
  const pathname = usePathname();
  
  // Não mostrar navbar nas rotas /live e /sessao-estrategica
  const hideNavbar = pathname === "/live" || pathname === "/sessao-estrategica";
  
  if (hideNavbar) {
    return null;
  }
  
  return <Navbar />;
}
