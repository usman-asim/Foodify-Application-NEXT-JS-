// app/menu/page.tsx

import { MenuList } from "@/components/MenuList";
import { MenuSkeleton } from "@/components/MenuSecleton";
import { Suspense } from "react";

export default function MenuPage() {
  return (
    <div className="container mx-auto py-8 px-7">
      <div className="gap-4 mb-8">
        <h1 className="md:text-3xl text-2xl font-bold">Our Menu</h1>
      </div>
      <Suspense fallback={<MenuSkeleton />}>
        <MenuList />
      </Suspense>
    </div>
  );
}
