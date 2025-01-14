import * as React from "react";
import { NavigationLink } from "./NavigationLink";
import { navigationLinks } from "./NavigationData";
import { TiThMenuOutline } from "react-icons/ti";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


export function MainNavigation() {
  return (
    <nav
      className="flex flex-wrap gap-10 md:items-start md:self-center mt-5 max-md:max-w-full"
      role="navigation"
      aria-label="Main navigation"
    >

      <div className="hidden md:flex md:gap-10">
        {navigationLinks.map((link) => (
          <NavigationLink key={link.id} text={link.text} />
        ))}
      </div>


      <Sheet>
        <SheetTrigger className="text-black md:hidden text-left text-2xl">
          <TiThMenuOutline />

        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Navbar</SheetTitle>
            
          </SheetHeader>
          <div className="flex flex-col mx-auto gap-3 mt-3">
            {navigationLinks.map((link) => (
              <NavigationLink key={link.id} text={link.text} />
            ))}
          </div>
        </SheetContent>
      </Sheet>

    </nav>
  );
}
