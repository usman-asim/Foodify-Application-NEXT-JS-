// components/menu/menu-list.tsx
// import { MenuItem } from "@/components/menu/item";
import { prisma } from "@/lib/prisma";
// import type { MenuItem as Item } from "@/lib/generated/prisma";
import { Menuitem } from "./Items";
import type { MenuItem } from "@/lib/generated/prisma";
import { AlertTriangle } from "lucide-react";
export async function MenuList() {
  const menuItems = await prisma.menuItem.findMany({
    orderBy: {
      name: "desc",
    },
  });

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
