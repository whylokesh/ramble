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
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

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
} from "@nextui-org/react";
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
  onClick,
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
    onClick={onClick}
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
        toast.success("Registration successful!");
        onClose(); // Close the modal on successful registration
      } else {
        // Handle registration failure
        console.error("Registration failed:", data);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Registration failed:", error.message);
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
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [isSearching, setIsSearching] = React.useState(false);
  const route = useRouter();

  const Admin = () => {
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
        setIsAdmin(data.data.admin === true); // Set isAdmin based on the response
        localStorage.setItem("token", data.data.token)
        console.log("User logged in successfully");
        toast.success("Logged in Successfully")
        if (data.data.admin === true) {
          localStorage.setItem("isAdmin", "true");
        }
        // onClose(); // Close the modal on successful login
      } else {
        // Handle login failure
        toast.error("Logged in failed")
        console.error("Login failed:", data);
      }
    } catch (error) {
      toast.error("Login failed:", error.message);
      console.error("Error during login:", error);
    }
  };

  React.useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        setIsSearching(true);
        const response = await fetch(
          `http://localhost:3009/search/particular-service?searchTerm=${searchTerm}`
        );
        const data = await response.json();

        if (data.success) {
          setSearchResults(data.data.services);
        } else {
          console.error("Search failed:", data);
        }
      } catch (error) {
        console.error("Error during search:", error);
      } finally {
        setIsSearching(false);
      }
    };

    // Trigger the API call only if the search term is not empty
    if (searchTerm.trim() !== "") {
      fetchSearchResults();
    } else {
      setSearchResults([]); // Clear the results if the search term is empty
    }
  }, [searchTerm]);

  const menuItems = [
    isLoggedIn ? "Admin" : null, // Show "Admin" only when logged in
    "Cart",
    "Contact us",
    isLoggedIn ? "Log Out" : "Log in", // Show "Log Out" if logged in, else "Log in"
  ];


  const handleProfileClick = () => {
    console.log("Hello");
    // Add any additional logic you want to execute when the "Profile" link is clicked
  };


  React.useEffect(() => {
    const AdminValue = localStorage.getItem("isAdmin")
    // Check for the presence of the token during page load
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      // If the token is present, consider the user as logged in
      setIsLoggedIn(true);
    }
    const IsAdmin = localStorage.getItem("isAdmin") === "true";
    if (IsAdmin) {
      setIsAdmin(true);
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token")
  }

  const [value, setValue] = React.useState('');
  const [selectedKey, setSelectedKey] = React.useState(null);

  const onSelectionChange = (id) => {
    setSelectedKey(id);
  };

  const onInputChange = (value) => {
    setValue(value);
    setSearchTerm(value);
  };

  const onSearchIconClick = () => {
    if (selectedKey !== null && searchResults.length > 0) {
      const selectedService = searchResults.find((item) => item.name === selectedKey);
      if (selectedService) {
        route.push(`/ProductMain/${selectedService.id}`);
      }
    }
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };




  return (
    <div className="navbar lg:px-7 md:px-7 px-1 overflow-x-hidden">
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
            <img src="./logomain.png" alt="Ramble group" className="m-1 w-12 h-12" />
            <Link href="/">
              <p className="hidden sm:block font-bold text-inherit text-xl" >
                Ramble Agency
              </p>
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent>

          <Autocomplete
            variant="flat"
            labelPlacement="outside"
            defaultItems={searchResults}
            placeholder="Search..."
            className="max-w-sm max-h-10 md:w-full lg:w-full h-10 w-48"
            selectorIcon={<SearchIcon size={17} onClick={onSearchIconClick} />}
            disableSelectorIconRotation
            allowsCustomValue
            onSelectionChange={onSelectionChange}
            onInputChange={onInputChange}
          >
            {(item) => <AutocompleteItem key={item.name}>{item.name}</AutocompleteItem>}
          </Autocomplete>

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
            <Link color="foreground" href="/AboutUsMain">
              About us
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="/Cart" aria-current="page" color="secondary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-6 h-6">
                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
              </svg>
            </Link>
          </NavbarItem>
          <NavbarItem>
            {isLoggedIn ? (
              // Render the SVG when logged in
              <Button color="warning" variant="flat" onClick={handleLogout}>
                Logout
              </Button>

            ) : (
              <Link color="foreground" href="#">
                <Button color="warning" variant="flat" onClick={openFirstModal}>
                  Login
                </Button>
                <Modal
                  isOpen={isOpenFirstModal}
                  onOpenChange={closeFirstModal}
                  placement="top-center"
                  className="lg:m-4 md:m-4 m-auto"
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
                // Handle "Log in" directly to open the login modal
                item === "Log in" ? (
                  <button onClick={openFirstModal}>
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
                    onClick={() => {
                      // Handle other menu items here
                      if (item === "Log Out") {
                        handleLogout();
                      } else {
                        // Handle other menu items if needed
                      }
                    }}
                  >
                    {item}
                  </Link>
                )
              )}
            </NavbarMenuItem>
          ))}
        </NavbarMenu>

      </Navbar>
      <ToastContainer />
    </div>
  );
}
