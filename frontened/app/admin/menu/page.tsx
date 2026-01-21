import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import DeleteMenuButton from "@/components/DeleteMenuButton";
import { UpdateMenuButton } from "@/components/UpdateMenuButton";
import Link from "next/link";



const page = async () => {
  const menuItems = await prisma.menuItem.findMany({
    orderBy: { created_at: "desc" },
  });

  return (
    <div className="lg:col-span-2 my-4 container mx-auto p-2 px-7 mt-5">
      <div className="flex justify-between ">
        <h1 className="font-bold text-3xl">Our Menu</h1>
        <h2 className="tracking-tight leading-tight hover:underline text-2xl font-bold">
          {" "}
          <Link href="/admin/menu/create">Create New Menu</Link>
        </h2>
      </div>

      <Card className="my-2">
        <CardHeader>
          <CardTitle>Current Menu Items</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {menuItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {item.description}
                  </TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>${item.price.toFixed(2)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <UpdateMenuButton item={item} />
                      <DeleteMenuButton id={item.id} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
