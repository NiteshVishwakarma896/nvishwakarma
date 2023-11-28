import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   Link,  Button,  NavbarMenuItem, NavbarMenuToggle, NavbarMenu} from "@nextui-org/react";
import { useState } from "react";

export default function SiteNav(){

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar maxWidth="xl" disableAnimation isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>
      <NavbarBrand>
        <a href="https://nvishwakarma.in/" style={{fontSize:'1.4rem', fontWeight:'normal'}} className="text-inherit">nvishwakarma</a>
      </NavbarBrand>


      <NavbarContent className="hidden sm:flex gap-12" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#blogs">
            Blogs
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <NavbarItem className="mb-2">
            <Link color="foreground" size="lg" href="#about">
              About
            </Link>
          </NavbarItem>
          <NavbarItem className="mb-2">
            <Link color="foreground" size="lg" href="#projects">
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem className="mb-2">
            <Link color="foreground" size="lg" href="#blogs">
              Blogs
            </Link>
          </NavbarItem>
          <p className="text-tiny mt-6 text-gray-300" >This website is made with ❤️ by Nitesh Vishwakarma.</p>
        </NavbarMenuItem>
      </NavbarMenu>

    </Navbar>
  );
}
