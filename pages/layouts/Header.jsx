import { Navbar,Dropdown ,Button, ico,  Text, collapseItems , Avatar } from "@nextui-org/react";
import { useState } from "react";
import { icons } from "../../icons/Icons";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const [variant, setVariant] = useState("sticky");

    const variants = ["static", "floating", "sticky"];
    const collapseItems = [
      "Features",
      "Customers",
      "Pricing",
      "Company",
      "Legal",
      "Team",
      "Help & Feedback",
      "Login",
      "Sign Up",
    ];
    return <>  
 
      <Navbar css={{background:'$primaryDark'}}  variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <Image src='/images/logo/logo.png' alt="Logo" width={173} height={44} />
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="primaryDark"
          hideIn="xs"
          
          variant="highlight-rounded"
        >
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link href="#">
            Customers
          </Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="secondary"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
}
