"use client";
import React from "react";
import "../globals.css";
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import {
  NavbarMenuToggle,
  NavbarContent,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { useRouter } from 'next/navigation'
const AcmeLogo = () => (
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

const SearchIcon = ({
  size = 24,
  strokeWidth = 1.5,
  width,
  height,
  ...props
}) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={height || size}
    role="presentation"
    viewBox="0 0 24 24"
    width={width || size}
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
  </svg>
);

const RegistrationModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:3009/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          fullName,
          phoneNumber,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Registration successful, you can handle the success scenario here
        console.log("User registered successfully");

        onClose(); // Close the modal on successful registration
      } else {
        // Handle registration failure
        console.error("Registration failed:", data);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };
  

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose} placement="top-center">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Register</ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                label="Email"
                placeholder="Enter your email"
                variant="bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label="Password"
                placeholder="Enter your password"
                type="password"
                variant="bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                autoFocus
                label="Full Name"
                placeholder="Enter your Name"
                variant="bordered"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <Input
                label="Phone"
                placeholder="Enter your Phone Number"
                type="number"
                variant="bordered"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={handleRegister}>
                Sign up
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  // const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [isOpenFirstModal, setOpenFirstModal] = React.useState(false);
  const [isOpenSecondModal, setOpenSecondModal] = React.useState(false);

  const openFirstModal = () => setOpenFirstModal(true);
  const closeFirstModal = () => setOpenFirstModal(false);

  const openSecondModal = () => setOpenSecondModal(true);
  const closeSecondModal = () => setOpenSecondModal(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);


  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isAdmin, setIsAdmin] = React.useState(false);
  const route = useRouter();

  const Admin =()=>{
    route.push('/AdminPanel')
  }

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3009/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Login successful, handle success scenario
        
      setIsLoggedIn(true); // Set login status to true
      setIsAdmin(data.data.admin); 
    localStorage.setItem("token",data.data.token)
        console.log("User logged in successfully");
        // onClose(); // Close the modal on successful login
      } else {
        // Handle login failure
        console.error("Login failed:", data);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];


const handleProfileClick = () => {
  console.log("Hello");
  // Add any additional logic you want to execute when the "Profile" link is clicked
};
  return (
    <div className="navbar px-7">
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="flex justify-between"
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent justify="start" className="max-w-full ">
          <NavbarBrand className="mr-4 ">
            <AcmeLogo />
            <p className="hidden sm:block font-bold text-inherit text-xl">
              Ramble Agency
            </p>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent>
          <Input
            classNames={{
              base: "md:w-full lg:w-full h-10 w-48",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            startContent={<SearchIcon size={18} />}
            type="search"
          />
        </NavbarContent>

        <NavbarContent
          as="div"
          className="items-center hidden md:flex lg:flex gap-12"
          justify="end"
          >
          <NavbarItem>
          {isAdmin && isLoggedIn && (
            <Link color="foreground" href="#">
               <Button color="warning" variant="flat" onClick={Admin}>
                Admin
              </Button>
            </Link>
          )}
        </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              About us
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" color="secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-orange-800"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </Link>
          </NavbarItem>
          <NavbarItem>
          {isLoggedIn ? (
    // Render the SVG when logged in
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="black"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
      
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
      />
    </svg>
  ) : (
            <Link color="foreground" href="#">
              <Button color="warning" variant="flat" onClick={openFirstModal}>
                Login
              </Button>
              <Modal
                isOpen={isOpenFirstModal}
                onOpenChange={closeFirstModal}
                placement="top-center"
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">
                        Log in
                      </ModalHeader>
                      <ModalBody>
                        <Input
                          autoFocus
                          label="Email"
                          placeholder="Enter your email"
                          value={email}
                          variant="bordered"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                          label="Password"
                          placeholder="Enter your password"
                          type="password"
                          variant="bordered"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="flex py-2 px-1 justify-between">
                          <Link color="primary" href="#" size="sm">
                            Forgot password?
                          </Link>
                          <Link
                            color="primary"
                            href="#"
                            size="sm"
                            onClick={openSecondModal}
                            onPress={closeFirstModal}
                          >
                            Haven't Registered Yet?
                          </Link>
                        </div>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="danger" variant="flat" onPress={onClose}>
                          Close
                        </Button>
                        <Button
                          color="primary"
                          onPress={onClose}
                          onClick={handleLogin}
                        >
                          Sign in
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
              <Modal
                isOpen={isOpenSecondModal}
                onOpenChange={closeSecondModal}
                placement="top-center"
              >
                <RegistrationModal
                  isOpen={isOpenSecondModal}
                  onClose={closeSecondModal}
                />
              </Modal>
            </Link>
             )}
          </NavbarItem>
        
          {/* <Dropdown placement="bottom-end" className="avatar">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown> */}
        </NavbarContent>
        <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            {item === "Profile" ? (
              <button onClick={handleProfileClick}>
                {/* You can customize the button's appearance if needed */}
                <span>{item}</span>
              </button>
            ) : (
              <Link
                className="w-full"
                color={
                  index === 2
                    ? "warning"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
                size="lg"
              >
                {item}
              </Link>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      </Navbar>
    </div>
  );
}
