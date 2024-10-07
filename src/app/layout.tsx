import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { TooltipProvider } from "@radix-ui/react-tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boqian Liu CV",
  description: "Online CV for Boqian Liu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TooltipProvider>
        <body className={inter.className}>
          <NavigationMenu className="nav-bar fixed m-2 left-1/2 transform -translate-x-1/2 border-2 rounded-full border-slate-400 backdrop-blur-sm overflow-hidden">
            <NavigationMenuList className="flex gap-2">
              <NavigationMenuItem className="w-24 text-center">
                <Link href="#hello" className="block p-4">
                  Hello
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="w-24 text-center">
                <Link href="#skills" className="block p-4">
                  Skills
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="w-24 text-center">
                <Link href="#experience" className="block">
                  Experience
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="w-24 text-center">
                <Link href="#education" className="block">
                  Education
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="w-24 text-center">
                <Link href="#contact" className="block p-4">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          {children}
        </body>
      </TooltipProvider>
    </html>
  );
}
