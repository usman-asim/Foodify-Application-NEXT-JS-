"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Upload } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useActionState, useEffect, useState } from "react";
import Link from "next/link";
import UploadExample from "@/components/Upload-image";
import { CeateMenuAction } from "@/action/menu";
import { useRouter } from "next/navigation";

const categories = ["Pizza", "Pasta", "Salad", "Dessert", "Drink"];

export default function AdminMenuPage() {
const [ispending, setispending] = useState(false)
const [uploadResetKey, setUploadResetKey] = useState(false);

  const [formState, formAction, isPending] = useActionState(CeateMenuAction, {
    success: false,
    error: {},
  });
  

const router = useRouter();

useEffect(() => {
  if (formState.success) {
    router.push("/admin/menu");
  }
}, [formState.success]);

  const [imageUrl, setImageUrl] = useState<string | null>(null);
const handleurl=(formData:FormData)=>{
  formData.append("imageUrl", imageUrl || "");
  return formAction(formData);
}
  return (
    <div className="min-h-screen flex items-start justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white ">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <h1>Add New Menu Item</h1>
            <Link href={"/admin/menu"}>
              <Button variant={"link"}>All menu list</Button>
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form action={handleurl} className="space-y-4">
            {/* Item Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Item Name</Label>
              <Input
                type="text"
                name="name"
                placeholder="e.g. Margherita Pizza"
              />
            </div>
            <p>
              {formState?.error?.name && (
                <span className="text-red-500">{formState.error.name}</span>
              )}
            </p>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                name="description"
                placeholder="Brief description of the item"
              />
              <p>
                {formState?.error?.description && (
                  <span className="text-red-500">
                    {formState.error.description}
                  </span>
                )}
              </p>
            </div>

            {/* Price and Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Price ($)</Label>
                <Input
                  name="price"
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                />
                <p>
                  {formState?.error?.price && (
                    <span className="text-red-500">
                      {formState.error.price}
                    </span>
                  )}
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select name="category">
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
                <p>
                  {formState?.error?.category && (
                    <span className="text-red-500">
                      {formState.error.category}
                    </span>
                  )}
                </p>
              </div>
            </div>

            {/* Upload */}
            <div className="space-y-2">
              <UploadExample
                setImageUrl={setImageUrl}
                resetKey={uploadResetKey}
              />
            </div>

            {/* Submit */}
            <Button disabled={isPending} type="submit" className="w-full mt-4">
              {isPending ? (
                "Loading..."
              ) : (
                <>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Menu Item
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
