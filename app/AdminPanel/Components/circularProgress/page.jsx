"use client"
import React from "react";
import {CircularProgress, Card, CardBody, CardFooter, Chip} from "@nextui-org/react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Tooltip, getKeyValue} from "@nextui-org/react";
import {EditIcon} from "./EditIcon";
import {DeleteIcon} from "./DeleteIcon";
import {EyeIcon} from "./EyeIcon";
import {columns, users} from "./data";
const statusColorMap = {
    active: "success",
    paused: "danger",
    vacation: "warning",
  };
  

export default function CircularData() {
    const renderCell = React.useCallback((user, columnKey) => {
        const cellValue = user[columnKey];
    
        switch (columnKey) {
          case "name":
            return (
              <User
                avatarProps={{radius: "lg", src: user.avatar}}
                description={user.email}
                name={cellValue}
              >
                {user.email}
              </User>
            );
          case "role":
            return (
              <div className="flex flex-col">
                <p className="text-bold text-sm capitalize">{cellValue}</p>
                <p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
              </div>
            );
          case "status":
            return (
              <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
                {cellValue}
              </Chip>
            );
          case "actions":
            return (
              <div className="relative flex items-center gap-2">
                <Tooltip content="Details">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <EyeIcon />
                  </span>
                </Tooltip>
                <Tooltip content="Edit user">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <EditIcon />
                  </span>
                </Tooltip>
                <Tooltip color="danger" content="Delete user">
                  <span className="text-lg text-danger cursor-pointer active:opacity-50">
                    <DeleteIcon />
                  </span>
                </Tooltip>
              </div>
            );
          default:
            return cellValue;
        }
      }, []);
  return (
    <>
     <h1 className="font-bold bg-gradient-to-r from-[#F5A524] to-[#FF705B] to-danger bg-clip-text text-transparent text-4xl px-8 mt-6 flex justify-center items-center">Client Progress</h1>
    
<div className="flex p-12 flex-wrap lg:justify-normal md:justify-center justify-center lg:gap-24 ">

  <Table aria-label="Example table with custom cells" className="lg:w-3/5 md:w-full w-full">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={users}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>

    <Card className="lg:w-[31%] md:w-full w-full gap-4 bg-black lg:mt-0 md:mt-5 mt-5" >
      <Card className=" lg:mt-0 md:mt-0 mt-1  h-[12rem] border-none  bg-gradient-to-br from-[#9C27B0] to-[#E500FF]"> 
      <CardBody className="justify-center items-center pb-0">
        <CircularProgress
          classNames={{
            svg: "w-36 h-36 drop-shadow-md",
            indicator: "stroke-white",
            track: "stroke-white/10",
            value: "text-3xl font-semibold text-white",
          }}
          value={70}
          strokeWidth={4}
          showValueLabel={true}
        />
      </CardBody>
      <CardFooter className="justify-center items-center pt-0">
        <Chip
          classNames={{
            base: "border-1 border-white/30",
            content: "text-white/90 text-small font-semibold",
          }}
          variant="bordered"
        >
          2800 Clients Approached   
        </Chip>
      </CardFooter>
      </Card>
      <Card className=" lg:mt-0 md:mt-0  h-[12rem] border-none  bg-gradient-to-br from-[#ffcc00] to-[#E500FF] to-[#990000] to-[#E500FF]"> 
      <CardBody className="justify-center items-center pb-0">
        <CircularProgress
          classNames={{
            svg: "w-36 h-36 drop-shadow-md",
            indicator: "stroke-white",
            track: "stroke-white/10",
            value: "text-3xl font-semibold text-white",
          }}
          value={30}
          strokeWidth={4}
          showValueLabel={true}
        />
      </CardBody>
      <CardFooter className="justify-center items-center pt-0">
        <Chip
          classNames={{
            base: "border-1 border-white/30",
            content: "text-white/90 text-small font-semibold",
          }}
          variant="bordered"
        >
          2800 Clients Approached   
        </Chip>
      </CardFooter>
      </Card>
    </Card>
    </div>
    </>
  );
}
