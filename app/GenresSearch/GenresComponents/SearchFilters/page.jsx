"use client"
import React from "react";
import {Input} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox,  Link} from "@nextui-org/react";
import {CheckboxGroup} from "@nextui-org/react";
import './filters.css'
import { Slider } from "@material-tailwind/react";

const Filters =() => {
    // const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [isOpenFirstModal, setOpenFirstModal] = React.useState(false);
    const [isOpenSecondModal, setOpenSecondModal] = React.useState(false);
    const [isOpenThirdModal, setOpenThirdModal] = React.useState(false);
    const [selected, setSelected] = React.useState(["buenos-aires", "sydney"]);
  
    const openFirstModal = () => setOpenFirstModal(true);
    const closeFirstModal = () => setOpenFirstModal(false);
  
    const openSecondModal = () => setOpenSecondModal(true);
    const closeSecondModal = () => setOpenSecondModal(false);
  
    const openThirdModal = () => setOpenThirdModal(true);
    const closeThirdModal = () => setOpenThirdModal(false);
  
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
      

  return (
    <div className="flex w-full lg:p-12 md:p-8 p-6 flex-wrap justify-center items-center md:flex-wrap lg:flex-wrap gap-8">
      <Input type="Location" label="Search For Location"  endContent={
                   <SearchIcon size={18} onClick={()=>{
                    console.log("hello")
                   }}/>
                  }  className="lg:w-1/4 md:w-2/4 px-5"/>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 filtericon"  onClick={openFirstModal} style={{cursor: "pointer"}} >
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
</svg>
    
      <Modal 
      isOpen={isOpenFirstModal} onOpenChange={closeFirstModal}
        placement="top-center"
        className="lg:m-0 md:m-0 m-5"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Location Filters</ModalHeader>
              <ModalBody>
              <div className="flex flex-col gap-3">
      <CheckboxGroup
        label="Select cities"
        color="warning"
        value={selected}
        onValueChange={setSelected}
      >
        <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
        <Checkbox value="sydney">Sydney</Checkbox>
        <Checkbox value="London">London</Checkbox>
        <Checkbox value="Rajsthan">Rajsthan</Checkbox>
        <Checkbox value="New York">New York</Checkbox>
        <Checkbox value="Paris">Paris</Checkbox>
      </CheckboxGroup>
      <p className="text-default-500 text-small">Selected: {selected.join(", ")}</p>
    </div>
               
              </ModalBody>
              <ModalFooter>
                
                <Button color="primary" onPress={onClose}>
                  Set Filters
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 filtericon" onClick={openSecondModal} style={{cursor: "pointer"}}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
</svg>
<Modal 
        isOpen={isOpenSecondModal} onOpenChange={closeSecondModal}
        placement="top-center"
        
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Location Filters</ModalHeader>
              <ModalBody>
              <div className="flex flex-col gap-3">
      <CheckboxGroup
        label="Select cities"
        color="warning"
        value={selected}
        onValueChange={setSelected}
      >
        <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
        <Checkbox value="sydney">Sydney</Checkbox>
        <Checkbox value="London">London</Checkbox>
        <Checkbox value="Rajsthan">Rajsthan</Checkbox>
        <Checkbox value="New York">New York</Checkbox>
        <Checkbox value="Paris">Paris</Checkbox>
      </CheckboxGroup>
      <p className="text-default-500 text-small">Selected: {selected.join(", ")}</p>
      <Slider defaultValue={50} color="blue" />
    </div>
               
              </ModalBody>
              <ModalFooter>
                
                <Button color="primary" onPress={onClose}>
                  Set Filters
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 filtericon" onClick={openThirdModal} style={{cursor: "pointer"}}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>


      <Modal 
        isOpen={isOpenThirdModal} onOpenChange={closeThirdModal}
        placement="top-center"
        
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Location Filters</ModalHeader>
              <ModalBody>
              <div className="flex flex-col gap-3">
      <CheckboxGroup
        label="Select cities"
        color="warning"
        value={selected}
        onValueChange={setSelected}
      >
        <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
        <Checkbox value="sydney">Sydney</Checkbox>
        <Checkbox value="London">London</Checkbox>
        <Checkbox value="Rajsthan">Rajsthan</Checkbox>
        <Checkbox value="New York">New York</Checkbox>
        <Checkbox value="Paris">Paris</Checkbox>
      </CheckboxGroup>
      <p className="text-default-500 text-small">Selected: {selected.join(", ")}</p>
    </div>
              
              </ModalBody>
              <ModalFooter>
                
                <Button color="primary" onPress={onClose}>
                  Set Filters
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      {/* <Button onPress={onOpen} color="primary">Open Modal</Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
        
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
               
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                />
                <Input
                 
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Button onPress={onOpen} color="primary">Open Modal</Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
        
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
               
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                />
                <Input
                 
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal> */}
    </div>
  );
}
export default Filters