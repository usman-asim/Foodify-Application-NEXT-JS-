"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteMenuAction = async (id: string) => {
  try {
    await prisma.menuItem.delete({
      where: { id },
    });

    // Revalidate the path to update the cache
    revalidatePath("/admin/menu");
    revalidatePath("/menu");
    redirect("/admin/menu");
    

  } catch (error) {
    console.error("Failed to delete menu item:", error);
    throw new Error("Failed to delete menu item");
  }
};

