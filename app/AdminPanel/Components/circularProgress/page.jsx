"use client"
import React from "react";
import { CircularProgress, Card, CardBody, CardFooter, Chip } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Tooltip, getKeyValue, Button,Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure, } from "@nextui-org/react";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import { EyeIcon } from "./EyeIcon";
import { Switch } from "@nextui-org/react";
const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

export default function CircularData() {
  const [tableData, setTableData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [isOpenFirstModal, setOpenFirstModal] = React.useState(false);
  const openFirstModal = () => setOpenFirstModal(true);
  const closeFirstModal = () => setOpenFirstModal(false);
  const [orderDetails, setOrderDetails] = React.useState(null);

  React.useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token"); // Replace with your actual token key
        const response = await fetch("http://localhost:3009/admin/orders", {
          method: "GET",
          headers: {
            Authorization: token,
          },
        });

        const data = await response.json();

        if (data.success) {
          setTableData(data.data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);



  const fetchOrderDetails = async (orderId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:3009/admin/order-details?id=${orderId}`, {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });

      const data = await response.json();

      if (data.success) {
        setOrderDetails(data.data.orderDetails);
      } else {
        console.error("Failed to fetch order details");
      }
    } catch (error) {
      console.error("Error fetching order details:", error);
    }
  };

  const openFirstModalId = (orderId) => {
    fetchOrderDetails(orderId);
    setOpenFirstModal(true);
  };

  const columns = [
    { name: "Order ID", uid: "orderId" },
    { name: "Total Amount", uid: "totalAmount" },
    { name: "User ID", uid: "user.id" },
    { name: "Username", uid: "user.username" },
    { name: "Email", uid: "user.email" },
    { name: "Phone Number", uid: "user.phoneNumber" },
    {
      name: "View",
      uid: "eyeIcon",
      align: "center",
    },
    {
      name: "Delete",
      uid: "deleteIcon",
      align: "center",
    },
  ];

  const renderCell = React.useCallback((item, columnKey) => {
    const cellValue = getKeyValue(item, columnKey);

    switch (columnKey) {
      case "user.id":
      case "user.username":
      case "user.email":
      case "user.phoneNumber":
        return <>{getKeyValue(item.user, columnKey.split(".")[1])}</>;

      case "orderId":
      case "totalAmount":
        return <>{cellValue}</>;

      case "eyeIcon":
        return (
          <Tooltip content="Details">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50"  onClick={() => openFirstModalId(item.orderId)}>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
            </span>
          </Tooltip>
        );

      case "deleteIcon":
        return (
          <Tooltip color="danger" content="Delete user">
            <span className="text-lg text-danger cursor-pointer active:opacity-50">
              <DeleteIcon />
            </span>
          </Tooltip>
        );

      default:
        return cellValue;
    }
  }, [openFirstModalId]);
  return (
    <>
      {loading ? (
        <CircularProgress size={100} />
      ) : (
        <div className="flex flex-wrap lg:justify-normal md:justify-center justify-center lg:gap-24 lg:p-12 md:p-10 p-4">
          <Table aria-label="Example table with custom cells" className="lg:w-full md:w-full w-full" >
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.uid} align="start">
                  {column.name}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={tableData}>
              {(item) => (
                <TableRow key={item.orderId}>
                  {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      )}
       <Modal
        size="full"
        isOpen={isOpenFirstModal}
        onOpenChange={closeFirstModal}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Order Details</ModalHeader>
              <ModalBody>
                {orderDetails && (
                  <>
                    <h2>Order Details:</h2>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell>Order ID:</TableCell>
                          <TableCell>{orderDetails.id}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>User ID:</TableCell>
                          <TableCell>{orderDetails.user_id}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Total Amount:</TableCell>
                          <TableCell>{orderDetails.total_amount}</TableCell>
                        </TableRow>
                        {/* ... (display other order details) */}
                      </TableBody>
                    </Table>

                    <h2>Order Items:</h2>
                    <Table>
                      <TableHeader>
                        <TableColumn>Service ID</TableColumn>
                        <TableColumn>Quantity</TableColumn>
                        {/* ... (add more columns as needed) */}
                        <TableColumn>Service Details</TableColumn>
                      </TableHeader>
                      <TableBody>
                        {orderDetails.OrderItems.map((orderItem) => (
                          <TableRow key={orderItem.id}>
                            <TableCell>{orderItem.service_id}</TableCell>
                            <TableCell>{orderItem.quantity}</TableCell>
                            {/* ... (add more columns as needed) */}
                            <TableCell>
                              <Table>
                                <TableBody>
                                  <TableRow>
                                    <TableCell>Name:</TableCell>
                                    <TableCell>{orderItem.Service.name}</TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell>Description:</TableCell>
                                    <TableCell>{orderItem.Service.description}</TableCell>
                                  </TableRow>
                                  {/* ... (display other service details) */}
                                </TableBody>
                              </Table>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={closeFirstModal}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
