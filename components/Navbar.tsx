"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Poppins, Roboto, Inter } from "next/font/google";
import { Sparkles, Diamond } from "lucide-react";

import { cn } from "@/lib/utils";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useProModal } from "@/hooks/use-pro-modal";
import Image from "next/image";
import logo from "../public/logo.png";

// const font = Poppins({ weight: "600", subsets: ["latin"] });
const font = Inter({ weight: ["700"], subsets: ["latin"] });

interface NavbarProps {
  isPro: boolean;
}

export const Navbar = ({ isPro }: NavbarProps) => {
  const proModal = useProModal();

  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 h-16 border-b border-primary/10 bg-secondary">
      <div className="flex items-center">
        <MobileSidebar isPro={isPro} />
        <Link href="/" className="flex flex-row items-center">
          <Image
            src={logo}
            className="rounded-xl max-w-[35px] max-h-[35px] mr-2"
            alt="Logo"
          />
          <h1
            className={cn(
              "hidden md:block text-xl md:text-3xl font-bold text-primary",
              font.className
            )}
          >
            Converse.AI
          </h1>
          {isPro &&
          <Button  size="sm" variant="pro" className="ml-4">
             Pro
            <Diamond className="h-4 w-4 fill-white text-white ml-2" />
          </Button>
          }
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        {!isPro && (
          <Button onClick={proModal.onOpen} size="sm" variant="premium">
            Upgrade
            <Sparkles className="h-4 w-4 fill-white text-white ml-2" />
          </Button>
        )}
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};
