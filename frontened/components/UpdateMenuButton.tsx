"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { MenuItem } from "@/lib/generated/prisma";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Pencil } from "lucide-react";
import { useActionState } from "react";
import { updateMenu } from "@/action/udate_menu";

const categories = ["Pizza", "Pasta", "Salad", "Dessert", "Drink"];

export function UpdateMenuButton({item}: {item: MenuItem}) {
  const [formState, action, isPending] = useActionState(
    updateMenu.bind(null, item.id),
    {success: false, errors: {} },
  );
console.log(formState,"formState of update")
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Pencil className="h-4 w-4" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <form action={action}>
          <DialogHeader>
            <DialogTitle>Edit Menu Item</DialogTitle>
            <DialogDescription>
              Update your menu item below. Click save when you're done.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
            {/* Item Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Item Name</Label>
              <Input
                name="name"
                defaultValue={item.name}
                placeholder="e.g. Margherita Pizza"
              />
              {formState.errors.name && (
                <p className="text-red-500 text-sm">
                  {formState.errors.name[0]}
                </p>
              )}
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                name="description"
                defaultValue={item.description}
                placeholder="Brief description of the item"
              />
              {formState.errors.description && (
                <p className="text-red-500 text-sm">
                  {formState.errors.description[0]}
                </p>
              )}
            </div>

            {/* Price and Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Price ($)</Label>
                <Input
                  name="price"
                  type="number"
                  defaultValue={item.price.toFixed(2)}
                  step="0.01"
                  placeholder="0.00"
                />
                {formState.errors.price && (
                  <p className="text-red-500 text-sm">
                    {formState.errors.price[0]}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select name="category" defaultValue={item.category}>
                  <SelectTrigger id="category" className="w-full">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {formState.errors.category && (
                  <p className="text-red-500 text-sm">
                    {formState.errors.category[0]}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <Button disabled={isPending} type="submit" className="w-full mt-4">
              {isPending ? "Saving..." : "Save Changes"}
            </Button>

            {formState.errors.formError && (
              <p className="text-red-500 text-sm mt-2">
                {formState.errors.formError[0]}
              </p>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
