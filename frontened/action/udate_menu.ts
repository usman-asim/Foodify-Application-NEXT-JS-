"use server"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
type ActionState = {
  success: boolean;
  errors: {
    name?: string[];
    description?: string[];
    price?: string[];
    category?: string[];
    formError?: string[];
  };
};

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.coerce.number().min(0.01, "Price must be at least $0.01"),
  category: z.string().min(1, "Category is required"),
});

export async function updateMenu(
  id: string,
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const parsed = formSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    price: formData.get("price"),
    category: formData.get("category"),
  });

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.menuItem.update({
      where: { id },
      data: parsed.data,
    });

    revalidatePath("/admin/menu");
    revalidatePath("/menu");
    redirect("/menu");
    return {
        success: true,
        errors: {},
    };
    // redirect("/admin/menu/create");
  } catch (err) {
    return {
      success: false,
      errors: {
        formError: [
          err instanceof Error ? err.message : "Something went wrong",
        ],
      },
    };
  }
}


