
"use client";

import { prisma } from "@/lib/prisma";
import { Menuitem } from "./Items";
import type { MenuItem } from "@/lib/generated/prisma";
import { AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";
export async function MenuList() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch("/api/menu");
        const data = await response.json();
        setMenuItems(data); 
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    fetchMenuItems();
  }, []);

  return (
   <>
   {menuItems.length>0 ?<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {menuItems.map((item: MenuItem) => (
        <Menuitem key={item.id} item={item} />
      ))}
    </div>:<h1 className="items-center flex justify-center w-full"><AlertTriangle size={23}/> No menu items found. </h1>
   }</> 
  );
}
