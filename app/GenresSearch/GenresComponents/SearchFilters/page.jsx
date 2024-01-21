"use client"
import React from "react";
import {Input} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox,  Link} from "@nextui-org/react";
import {CheckboxGroup} from "@nextui-org/react";
import './filters.css'
import {Slider} from "@nextui-org/react";
import { useRouter } from "next/navigation";
const Filters =() => {
    // const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [isOpenFirstModal, setOpenFirstModal] = React.useState(false);
    const [isOpenSecondModal, setOpenSecondModal] = React.useState(false);
    const [isOpenThirdModal, setOpenThirdModal] = React.useState(false);
    const [selected, setSelected] = React.useState(["buenos-aires", "sydney"]);
    const [locationValue, setLocationValue] = React.useState("");
    const [priceRange, setPriceRange] = React.useState([]); // Set initial range based on your needs

    const openSecondModal = () => setOpenSecondModal(true);
    const closeSecondModal = () => setOpenSecondModal(false);
  
    const openThirdModal = () => setOpenThirdModal(true);
    const closeThirdModal = () => setOpenThirdModal(false);
  
    const router = useRouter();
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
      

      const handleSearch = () => {
        if (locationValue.trim() !== "") {
          router.push(`/GenresSearch?location=${encodeURIComponent(locationValue)}`);
        }
        setTimeout(() => {
          window.location.reload();
        }, 500);
      };

      const handleSetFilters = () => {
        const selectedValue = priceRange[1]; // Assuming you want to use the maximum value
        router.push(`/GenresSearch?categoryId=2&stateId=&price=${selectedValue}`);
        setTimeout(() => {
          window.location.reload();
        }, 500);
      };
  return (
    <div className="flex w-full lg:p-12 md:p-8 p-6 flex-wrap justify-center items-center md:flex-wrap lg:flex-wrap gap-8">
     <Input
        id="location-input"
        type="Location"
        label="Search For Location"
        value={locationValue}
        onChange={(e) => setLocationValue(e.target.value)} // Update locationValue on input change
        endContent={
          <SearchIcon
            size={18}
            className="mb-2 cursor-pointer"
            onClick={handleSearch}
          />
        }
        className="lg:w-1/4 md:w-2/4 px-5"
      />
    
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
              <ModalHeader className="flex flex-col gap-1">Price Filters</ModalHeader>
              <ModalBody>
     
              {/* <Slider 
       label="Price Range"
       step={1000}
       maxValue={300000}
       minValue={12000}
       defaultValue={priceRange}
       onChange={(values) => setPriceRange(values)}
       showSteps={true}
       showTooltip={true}  // Set this to false if you don't want the tooltip
       showOutline={true}
       disableThumbScale={true}
       range={false} // Set this to false for a single-thumb slider
       formatOptions={{ style: "currency", currency: "INR" }}
       tooltipValueFormatOptions={{ style: "currency", currency: "INR", maximumFractionDigits: 0 }}
      classNames={{
        base: "max-w-md",
        filler: "bg-gradient-to-r from-primary-500 to-secondary-400",
        labelWrapper: "mb-2",
        label: "font-medium text-default-700 text-medium",
        value: "font-medium text-default-500 text-small",
        thumb: [
          "transition-size",
          "bg-gradient-to-r from-secondary-400 to-primary-500",
          "data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20",
          "data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6"
        ],
        step: "data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50"
      }}
      tooltipProps={{
        offset: 10,
        placement: "bottom",
        classNames: {
          base: [
            // arrow color
            "before:bg-gradient-to-r before:from-secondary-400 before:to-primary-500",
          ],
          content: [
            "py-2 shadow-xl",
            "text-white bg-gradient-to-r from-secondary-400 to-primary-500",
          ],
        },
      }}
    /> */}
<Slider 
  label="Price" 
  color="warning"
  showTooltip={true}
  formatOptions={{ style: 'currency', currency: 'INR' }}
  tooltipValueFormatOptions={{ style: 'currency', currency: 'INR', maximumFractionDigits: 0 }}
  defaultValue={40000} // Assuming 40,000 INR as the default value, adjust as needed
  maxValue={300000} // Set the maximum value to 3 lac INR
  className="max-w-md"
  onChange={(value) => setPriceRange([value, value])} // Set the price range with the selected value
/>      
              </ModalBody>
              <ModalFooter>
                
                <Button color="warning" onPress={() => {
    handleSetFilters();
    onClose();
  }}>
                  Set Filters
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
  
    </div>
  );
}
export default Filters