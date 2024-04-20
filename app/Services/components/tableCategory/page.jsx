"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Input,
  Button,
} from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Select, SelectSection, SelectItem, Avatar } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import * as XLSX from "xlsx";
function truncateDescription(description) {
  if (description.length > 100) {
    return `${description.slice(0, 100)}...`;
  }
  return description;
}

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

export default function App() {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 4;
  const [isOpenFirstModal, setOpenFirstModal] = React.useState(false);
  const openFirstModal = () => setOpenFirstModal(true);
  const closeFirstModal = () => {
    setOpenFirstModal(false);
    setSelectedImage(null);
  };
  const [isOpenSecondModal, setOpenSecondModal] = React.useState(false);
  const openSecondModal = () => setOpenSecondModal(true);
  const closeSecondModal = () => {
    setOpenSecondModal(false);
  };

  const [searchInput, setSearchInput] = React.useState(""); // New state for search input

  const [selectedImage, setSelectedImage] = React.useState(null);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [name, setName] = React.useState("");
  const [description, setdescription] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [CategoryName, setCategoryName] = React.useState("");
  const [State, setState] = React.useState("");
  const [Location, setLocation] = React.useState("");
  const [Price, setPrice] = React.useState("");
  const [code, setCode] = React.useState("");
  const [Media, setMedia] = React.useState("");
  const [FTF, setFtf] = React.useState("");
  const [TotalArea, setTotalArea] = React.useState("");
  const [size, setSize] = React.useState("");
  const [categories, setCategories] = React.useState([]);
  const [states, setStates] = React.useState([]);
  const router = useRouter();
  const [Services, setServices] = React.useState([]);
  const [ServicesToAdd, setServicesToAdd] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      const headers = jsonData[0].map(header => header.trim());
      const serviceData = jsonData.slice(1).map((row) => {
        const service = {};
        headers.forEach((header, index) => {
          service[header] = row[index];
        });
        return service;
      });

      console.log(serviceData);
      setServicesToAdd(serviceData);

    };

    reader.readAsArrayBuffer(file);

  };
  const handleSubmit = () => {
    const token = localStorage.getItem("token"); // Replace with your actual token key

    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", Price);
    formData.append("location", Location);
    formData.append("categoryName", CategoryName);
    formData.append("stateName", State);
    formData.append("code", code);
    formData.append("media", Media);
    formData.append("ftf", FTF);
    formData.append("totalArea", TotalArea);
    formData.append("size", size);

    const Data = JSON.stringify({
      imageUrl: imageUrl,
      name: name,
      description: description,
      price: Price,
      location: Location,
      categoryName: CategoryName,
      stateName: State,
      code: code,
      media: Media,
      ftf: FTF,
      totalArea: TotalArea,
      size: size,
    });

    fetch("/api/admin/add-service", {
      method: "POST",
      body: Data,
      headers: {
        "Content-Type": "application/json",
        Authorization: token, // Include the token in the headers
        // Add any other required headers
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from server:", data);
        if (!data.success) {
          toast.error("Failed to add service");
        } else {
          toast.success("Service added successfully");
          closeFirstModal();
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      })
      .catch((error) => {
        console.error("Error posting data:", error);
        toast.error("Error adding service", error);
      });
  };
  const handleSubmitCSV = async () => {
    const token = localStorage.getItem("token"); // Replace with your actual token key
    const batchSize = 20; // Number of objects to send in each batch
    let errorOccurred = false; // Flag to track if an error occurred

    const chunkedServices = [];
    for (let i = 0; i < ServicesToAdd.length; i += batchSize) {
      chunkedServices.push(ServicesToAdd.slice(i, i + batchSize));
    }

    const postBatch = async (batch) => {
      const data = JSON.stringify({
        servicesToAdd: batch, // Array of services to add
      });

      try {
        const response = await fetch("/api/admin/bulk-add-services", {
          method: "POST",
          body: data,
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });
        const responseData = await response.json();
        console.log("Response from server:", responseData);
        if (!responseData.success) {
          errorOccurred = true; // Set the flag if an error occurred
          console.error("Failed to add services");
        } else {
          console.log("Services added successfully");
        }
      } catch (error) {
        errorOccurred = true; // Set the flag if an error occurred
        console.error("Error posting data:", error);
      }
    };

    // Post each batch sequentially
    for (let i = 0; i < chunkedServices.length; i++) {
      await postBatch(chunkedServices[i]);
    }

    if (errorOccurred) {
      toast.error("Failed to add services");
    } else {
      toast.success("All services added successfully");
      window.location.reload();
    }

    closeSecondModal();
  };


  React.useEffect(() => {
    // Fetch data from the API
    fetch("/api/services")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setServices(data.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const filteredCategories = Services.filter((Service) =>
    Service.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const pages = Math.ceil(filteredCategories.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredCategories.slice(start, end);
  }, [page, filteredCategories]);

  //service Delete code
  const [isOpenDeleteModal, setOpenDeleteModal] = React.useState(false);
  const [deleteItemId, setDeleteItemId] = React.useState(null);

  const openDeleteModal = (id) => {
    setDeleteItemId(id);
    setOpenDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setDeleteItemId(null);
    setOpenDeleteModal(false);
  };

  const handleDelete = () => {
    const token = localStorage.getItem("token"); // Replace with your actual token key

    fetch(`/api/admin/delete-service?id=${deleteItemId}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from server:", data);
        if (!data.error) {
          toast.success("Service deleted successfully!");
          closeDeleteModal();
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else {
          toast.error("Error deleting Service! Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
        // Handle error scenarios
      });
  };

  React.useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/categories");
        const data = await response.json();

        if (data.success) {
          setCategories(data.data);
        } else {
          console.error("Failed to fetch categories:", data);
        }
      } catch (error) {
        console.error("Error during category fetch:", error);
      }
    };

    fetchCategories();
  }, []);

  React.useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch("/api/states");
        const data = await response.json();

        if (data.success) {
          setStates(data.data);
        } else {
          console.error("Failed to fetch states:", data);
        }
      } catch (error) {
        console.error("Error during state fetch:", error);
      }
    };

    fetchStates();
  }, []);

  const handleSelectionChange = (e) => {
    setState(e.target.value);
    console.log(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategoryName(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="lg:px-16 md:px-12 px-8">
      <h1 className="font-bold bg-gradient-to-r from-[#F5A524] to-[#FF705B] to-danger to-[#FF6890] bg-clip-text text-transparent text-3xl md:text-4xl lg:text-6xl py-2 px-8 mt-6 flex justify-center items-center mb-8">
        Add Services
      </h1>
      <div className="flex lg:justify-between md:justify-between justify-center flex-wrap">
        <Input
          type="Location"
          label="Search For Service Name"
          endContent={
            <SearchIcon
              size={18}
              className="mb-2"
              onClick={() => {
                console.log("hello");
              }}
            />
          }
          className="lg:w-[30%] md:w-[50%] w-full mb-8 mt-4"
          value={searchInput}
          onChange={(e) => setSearchInput(e.currentTarget.value)}
        />
        <div className="flex flex-nowrap">
          <Button className="mb-8 mt-5 mr-2" color="warning" onClick={openSecondModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Upload CSV
          </Button>
          <Button
            className="mb-8 mt-5"
            onClick={openFirstModal}
            color="primary"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add new
          </Button>
        </div>
      </div>
      <Table
        aria-label="Example table with client side pagination"
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="secondary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        }
        classNames={{
          wrapper: "min-h-[222px]",
        }}
      >
        <TableHeader>
          <TableColumn key="id">ID</TableColumn>
          <TableColumn key="avatar">AVATAR</TableColumn>
          <TableColumn key="name">NAME</TableColumn>
          <TableColumn key="description">DESCRIPTION</TableColumn>

          <TableColumn key="Price">Price</TableColumn>
          <TableColumn key="location">Location</TableColumn>
          <TableColumn key="Code">Code</TableColumn>
          <TableColumn key="Media">Media</TableColumn>
          <TableColumn key="ftf">FTF</TableColumn>
          <TableColumn key="Total Area">Total Area</TableColumn>
          <TableColumn key="delete">Delete</TableColumn>
        </TableHeader>
        <TableBody items={items}>
          {(item) => (
            <TableRow
              key={item.id}
            >
              <TableCell>{item.id}</TableCell>
              <TableCell>
                <img
                  src={`${item.image_url[0]}`}
                  alt={`${item.name}'s Avatar`}
                  className="w-8 h-8 rounded-full"
                />
              </TableCell>
              <TableCell onClick={() => router.push(`/ProductMain/${item.id}`)} className=" cursor-pointer">{item.name}</TableCell>
              <TableCell onClick={() => router.push(`/ProductMain/${item.id}`)} className=" cursor-pointer">{truncateDescription(item.description)}</TableCell>
              <TableCell onClick={() => router.push(`/ProductMain/${item.id}`)} className=" cursor-pointer">{item.price}</TableCell>
              <TableCell onClick={() => router.push(`/ProductMain/${item.id}`)} className=" cursor-pointer">{item.location}</TableCell>
              <TableCell onClick={() => router.push(`/ProductMain/${item.id}`)} className=" cursor-pointer">{item.code}</TableCell>
              <TableCell onClick={() => router.push(`/ProductMain/${item.id}`)} className=" cursor-pointer">{item.media}</TableCell>
              <TableCell onClick={() => router.push(`/ProductMain/${item.id}`)} className=" cursor-pointer">{item.ftf}</TableCell>
              <TableCell onClick={() => router.push(`/ProductMain/${item.id}`)} className=" cursor-pointer">{item.total_area}</TableCell>
              <TableCell>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  onClick={() => openDeleteModal(item.id)}
                  className="w-6 h-6  text-red-700 hover:text-white hover:cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <Modal isOpen={isOpenFirstModal} onOpenChange={closeFirstModal}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add Service
              </ModalHeader>
              <ModalBody>
                <Input
                  label="Image URL"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className=""
                />
                <Input
                  label="Service Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <Input
                  label="Description"
                  value={description}
                  onChange={(e) => {
                    setdescription(e.target.value);
                  }}
                />

                <div className="flex justify-between gap-2 ">
                  <Select
                    label="Category Name"
                    value={CategoryName}
                    onChange={handleCategoryChange}
                  >
                    {categories.map((category) => (
                      <SelectItem key={category.name} value={category.name}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </Select>

                  <Select
                    label="State Name"
                    value={State}
                    onChange={handleSelectionChange}
                  >
                    {states.map((state) => (
                      <SelectItem key={state.name} value={state.name}>
                        {state.name}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
                <Input
                  label="Location"
                  value={Location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                ></Input>
                <div className="flex justify-between gap-2 ">
                  <Input
                    label="Price"
                    value={Price}
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  ></Input>
                  <Input
                    label="Code"
                    value={code}
                    onChange={(e) => {
                      setCode(e.target.value);
                    }}
                  ></Input>
                </div>
                <div className="flex justify-between gap-2 ">
                  <Input
                    label="Media"
                    value={Media}
                    onChange={(e) => {
                      setMedia(e.target.value);
                    }}
                  ></Input>
                  <Input
                    label="FTF"
                    value={FTF}
                    onChange={(e) => {
                      setFtf(e.target.value);
                    }}
                  ></Input>
                </div>
                <div className="flex justify-between gap-2 ">
                  <Input
                    label="Total Area"
                    value={TotalArea}
                    onChange={(e) => {
                      setTotalArea(e.target.value);
                    }}
                  ></Input>

                  <Input
                    label="size"
                    value={size}
                    onChange={(e) => {
                      setSize(e.target.value);
                    }}
                  ></Input>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={closeFirstModal}
                >
                  Close
                </Button>
                <Button color="primary" onPress={handleSubmit}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal isOpen={isOpenDeleteModal} onOpenChange={closeDeleteModal}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Confirmation</ModalHeader>
              <ModalBody>
                Are you sure you want to delete this service?
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={closeDeleteModal}
                >
                  Cancel
                </Button>
                <Button color="primary" onPress={handleDelete}>
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal isOpen={isOpenSecondModal} onOpenChange={closeSecondModal}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Upload Excel</ModalHeader>
              <ModalBody>
                <input type="file" onChange={handleFileUpload} />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={closeSecondModal}
                >
                  Cancel
                </Button>
                <Button
                  color="success"
                  variant="light"
                  onPress={handleSubmitCSV}
                >
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <ToastContainer />
    </div>
  );
}
