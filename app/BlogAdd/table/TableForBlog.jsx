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
import { useRouter } from "next/navigation";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export function CardDefault() {
  const [isOpenFirstModal, setOpenFirstModal] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [selectedFile, setSelectedFile] = React.useState(null);

  const [descripiton, setdescripiton] = React.useState("");
  const [title, settitle] = React.useState("");
  const [imageurl, setimageurl] = React.useState("");
  const [blogs, setBlogs] = React.useState([]);

  const { toggle: toggleModal } = useDisclosure();
  const openFirstModal = () => setOpenFirstModal(true);
  const closeFirstModal = () => {
    setOpenFirstModal(false);
    setSelectedImage(null);
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
  const router = useRouter();

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
    formData.append("imageUrl", imageurl);
    formData.append("title", title);
    formData.append("description", descripiton);

    const blogData = JSON.stringify({
      title: title,
      description: descripiton,
      imageUrl: imageurl
    })

    fetch("http://localhost:3009/admin/add-blog", {
      method: "POST",
      body: blogData,
      headers: {
        "Content-Type": "application/json",
        Authorization: token, // Include the token in the headers
        // Add any other required headers
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.success === true){
        console.log("Response from server:", data);
        closeFirstModal();
        settitle("");
        setdescripiton("");
        //
        toast.success("Added Successfully");
        window.location.reload();
        }
        else{
          toast.error(data.message)
        }
      })
      .catch((error) => {
        console.error("Error posting data:", error);
        toast.error("Error Adding Blog", error);
      });
  };

  const handleView = (blogId) => {
    router.push(`/BlogMain?id=${blogId}`);
  };

  const handleDelete = (blogId) => {
    const token = localStorage.getItem("token");

    fetch(`http://localhost:3009/admin/delete-blog?id=${blogId}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from server:", data);
        toast.success("Blog deleted successfully");
        // Fetch the updated blog list after deletion
        fetch("http://localhost:3009/all-blogs")
          .then((response) => response.json())
          .then((data) => {
            setBlogs(data.data);
          })
          .catch((error) => {
            console.error("Error fetching blogs:", error);
          });
      })
      .catch((error) => {
        console.error("Error deleting blog:", error);
        toast.error("Error deleting blog", error);
      });
  };
  return (
    <div className="lg:px-16 md:px-12 px-8">
      <Button
        color="primary"
        className="lg:mb-6 md:mb-6 m-auto lg:mt-10 lg:flex md:flex flex "
        onClick={openFirstModal}
      >
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
      <div className="flex flex-wrap lg:justify-between md:justify-between justify-center items-center">
        {" "}
        {blogs.map((blog) => (
          <Card className="mt-9 w-96">
            <CardHeader color="blue-gray" className="relative h-56 mt-6">
              <img
                src={`${blog.image_url}`}
                alt="card-image"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {blog.title}
              </Typography>
            </CardBody>
            <CardFooter>
              <div className="flex justify-between">
                <Button  color="primary"
                  onPress={() => handleView(blog.id)}>
                  View
                </Button>
                <Button
                  color="danger"
                  onPress={() => {
                    handleDelete(blog.id);
                    // Close the modal after deletion
                    closeFirstModal();
                  }}
                >
                  Delete
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
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
                  <Input
                  value={imageurl}
                  label="Enter image URL"
                  onChange={(e)=> {setimageurl(e.target.value)}}
                  />
               
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
