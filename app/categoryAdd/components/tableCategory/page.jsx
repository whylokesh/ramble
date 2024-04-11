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

  };

  const [searchInput, setSearchInput] = React.useState(""); // New state for search input
  const [imageUrl, setImageUrl] = React.useState(""); // New state for image URL

  const [name, setName] = React.useState("");
  const [descripiton, setdescripiton] = React.useState("");

  const [CategoryName, setCategoryName] = React.useState("");
  const [State, setState] = React.useState("");

  const [categories, setCategories] = React.useState([]);
  const [states, setStates] = React.useState([]);
  const handleSubmit = () => {
    const token = localStorage.getItem("token"); // Replace with your actual token key

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", descripiton);
    formData.append("imageUrl", imageUrl);

    const categoryData = JSON.stringify({
      name: name,
      descripiton: descripiton,
      imageUrl: imageUrl
    })

    fetch("/api/admin/add-category", {
      method: "POST",
      body: categoryData,
      headers: {
        "Content-Type": "application/json",
        Authorization: token, // Include the token in the headers
        // Add any other required headers
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from server:", data);
        closeFirstModal();
        if (data.success) {
          toast.success("Category added successfully");
        }
      })
      .catch((error) => {
        console.error("Error posting data:", error);
        toast.error("Error Adding Category", error);
      });
  };

  const filteredCategories = categories.filter((categories) =>
    categories.name.toLowerCase().includes(searchInput.toLowerCase())
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

    fetch(`/api/admin/delete-category?id=${deleteItemId}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from server:", data);
        closeDeleteModal();
        // You may want to refresh the data after deletion
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
      <h1 className="font-bold bg-gradient-to-r py-2 from-[#F5A524] to-[#FF705B] to-danger to-[#FF6890] bg-clip-text text-transparent text-3xl md:text-4xl lg:text-6xl px-8 mt-6 flex justify-center items-center mb-8">
        Add Categories
      </h1>
      <div className="flex justify-between">
        <Input
          type="Location"
          label="Search For Category Name"
          endContent={
            <SearchIcon
              size={18}
              className="mb-2"
              onClick={() => {
                console.log("hello");
              }}
            />
          }
          className="lg:w-[30%] md:w-[50%] w-[60%] mb-8 mt-4"
          value={searchInput}
          onChange={(e) => setSearchInput(e.currentTarget.value)}
        />
        <Button className="mb-8 mt-5" onClick={openFirstModal} color="primary">
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
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add new
        </Button>
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
          <TableColumn key="delete">Delete</TableColumn>
        </TableHeader>
        <TableBody items={items}>
          {(item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>
                <img
                  src={`${item.image_url}`}
                  alt={`${item.name}'s Avatar`}
                  className="w-8 h-8 rounded-full"
                />
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.description}</TableCell>

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
                Add category
              </ModalHeader>
              <ModalBody>
                <Input
                  label="Image URL"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className=""
                />
                <Input
                  label="Category Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <Input
                  label="Description"
                  value={descripiton}
                  onChange={(e) => {
                    setdescripiton(e.target.value);
                  }}
                />
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
                Are you sure you want to delete this category?
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
      <ToastContainer />
    </div>
  );
}
