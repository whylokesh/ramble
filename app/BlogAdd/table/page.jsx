"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Input } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Checkbox,
  Button,
  Link,
} from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export function CardDefault() {
  const [isOpenFirstModal, setOpenFirstModal] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [selectedFile, setSelectedFile] = React.useState(null);

  const [descripiton, setdescripiton] = React.useState("");
  const [title, settitle] = React.useState("");
  const [blogs, setBlogs] = React.useState([]);

  const { toggle: toggleModal } = useDisclosure();
  const openFirstModal = () => setOpenFirstModal(true);
  const closeFirstModal = () => {
    setOpenFirstModal(false);
    setSelectedImage(null); // Clear selected image on modal close
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  React.useEffect(() => {
    // Make API call to fetch blogs
    fetch("http://localhost:3009/all-blogs")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data.data);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, []);

  const handleSubmit = () => {
    const token = localStorage.getItem("token"); // Replace with your actual token key

    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("title", title);
    formData.append("description", descripiton);

    fetch("http://localhost:3009/admin/add-blog", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: token, // Include the token in the headers
        // Add any other required headers
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from server:", data);
        closeFirstModal();
        settitle("");
        setdescripiton("");
        // window.location.reload();
        // toast.success("Added Successfully")
        // toggleModal(); // Close the modal after successful submission
      })
      .catch((error) => {
        console.error("Error posting data:", error);
        toast.error("Error Adding Blog",error);
      });
  };

  return (
    <div className="lg:px-16 md:px-12 px-8">
      <Button color="primary" className="lg:mb-6 md:mb-6 m-auto lg:mt-10 lg:flex md:flex flex " onClick={openFirstModal}>
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>{" "}
        Add New
      </Button>
    <div className="flex flex-wrap lg:justify-between md:justify-between justify-center items-center">  {blogs.map((blog) => (<Card className="mt-9 w-96">
      <CardHeader color="blue-gray" className="relative h-56 mt-6">
        <img
          src={`http://localhost:3009${blog.image_url}`}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        {blog.title}
        </Typography>
      
      </CardBody>
   
    </Card>))}</div>
      <Modal
        isOpen={isOpenFirstModal}
        onOpenChange={closeFirstModal}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Location Filters
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-3">
                  {/* File Input for Image Upload */}
                  <Input
                    type="file"
                    value={null}
                    onChange={(event) => {
                      const file = event.target.files[0];
                      if (file) {
                        setSelectedFile(file);
                      }
                    }}
                    className="mb-4"
                  />
                  {/* Image preview */}
                  {selectedFile && (
                    <img
                      src={URL.createObjectURL(selectedFile)}
                      alt="Selected Preview"
                      className="w-3/5 mb-4 flex justify-center items-center m-auto"
                    />
                  )}
                </div>
                <Input
                  label="Blog Name"
                  value={title}
                  onChange={(e) => {
                    settitle(e.currentTarget.value);
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
      <ToastContainer />
    </div>
  );
}
