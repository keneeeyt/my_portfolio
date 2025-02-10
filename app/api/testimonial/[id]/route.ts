import { connectDB } from "@/config/mongo-connect";
import Testimonial from "@/model/testimonial";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req: NextRequest) => {
  try {
    // Connect to the database
    await connectDB();

    // Extract the id from the URL parameters
    const id = req.nextUrl.pathname.split('/').pop();

    if (!id) {
      return NextResponse.json(
        { error: "Testimonial ID is required" },
        { status: 400 }
      );
    }

    // Attempt to find and delete the testimonial by user_id
    const deletedTestimonial = await Testimonial.findOneAndDelete({ user_id: Number(id) });

    // If no testimonial is found, return a 404 response
    if (!deletedTestimonial) {
      return NextResponse.json(
        { error: "Testimonial not found" },
        { status: 404 }
      );
    }

    // Return success message if the testimonial was deleted
    return NextResponse.json({ message: "Testimonial deleted successfully" });

  } catch (err) {
    console.error("Failed to delete testimonial", err);

    // Return detailed error message
    return NextResponse.json(
      { error: "Internal Server Error", details: (err as Error).message },
      { status: 500 }
    );
  }
};