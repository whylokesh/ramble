"use client"
import React, { useEffect, useState } from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
} from "@nextui-org/react";

export default function TableMain() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token"); // Replace with your actual token key
                const response = await fetch(
                    "http://localhost:3009/admin/get-all-users-from-newsletter",
                    {
                        headers: {
                            Authorization: token,
                        },
                    }
                );
                const data = await response.json();
                if (data.success) {
                    setUserData(data.data);
                } else {
                    console.error("API request failed");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <h1 className="font-bold bg-gradient-to-r from-[#F5A524] pt-4 to-[#FF705B] to-danger to-[#FF6890]  bg-clip-text text-transparent text-3xl md:text-4xl lg:text-6xl px-8 mt-6 flex justify-center items-center mb-8">
               NewsLetter Details
            </h1>
        <Table isStriped aria-label="Example static collection table" className="lg:px-12 md:px-6 px-4 py-16">
            <TableHeader>
                <TableColumn>NAME</TableColumn>
                <TableColumn>EMAIL</TableColumn>
            </TableHeader>
            <TableBody>
                {userData.map((user, index) => (
                    <TableRow key={index}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </>
    );
}
