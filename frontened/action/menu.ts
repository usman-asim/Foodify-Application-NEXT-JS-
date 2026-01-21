"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";
import { de } from "zod/locales";
type ActionState = {
  error: {
    name?: string[];
    description?: string[];
    price?: string[];
    imageUrl?: string[];
    category?: string[];
    formerror?: string[];
  };
  success?: boolean;
};

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  category: z.string().min(1, { message: "Category is required" }),
  price: z.coerce
    .number()
    .min(0.01, { message: "Price must be at least $0.01" }),
  imageUrl: z
    .string()
    .url({ message: "Image must be a valid URL" })
    .optional()
    .or(z.literal("")),
});
export const CeateMenuAction = async (
  state: ActionState,
  formData: FormData,
): Promise<ActionState> => {
  const result = formSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    price: formData.get("price"),
    imageUrl: formData.get("imageUrl"),
    category: formData.get("category"),
  });

  if (!result.success) {
    return { success: false, error: result.error.flatten().fieldErrors };
  }

  try {
    await prisma.menuItem.create({
      data: {
        name: result.data.name,
        description: result.data.description,
        price: result.data.price,
        imageUrl:result.data.imageUrl as string,
        category: result.data.category,
      },
    });
    revalidatePath("/admin/menu/create")
    
    return { success:true, error: {} };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        error: {
          formerror: [error.message],
        },
      };
    }

    return {
      error: {
        formerror: ["An unexpected error occurred"],
      },
    };
  }
};
