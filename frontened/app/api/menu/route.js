// app/api/menu/route.js

import { prisma } from "@/lib/prisma"; // Import Prisma client
import { NextResponse } from "next/server"; // For Next.js server response handling

// Define the GET request for fetching menu items
export async function GET() {
  try {
    // Set the Cache-Control header to prevent caching
    const menuItems = await prisma.menuItem.findMany({
      orderBy: { created_at: "desc" }, // You can change the ordering based on your needs
    });

    // Return a JSON response with the menu items
    return NextResponse.json(menuItems, {
      headers: {
        "Cache-Control": "no-store, max-age=0, must-revalidate", // Prevent caching
      },
    });
  } catch (error) {
    console.error("Failed to fetch menu items:", error);
    return NextResponse.json(
      { message: "An error occurred while fetching data" },
      { status: 500 },
    );
  }
}
