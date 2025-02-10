import { connectDB } from "@/config/mongo-connect";
import Testimonial from "@/model/testimonial";
import { NextRequest, NextResponse } from "next/server";


export const POST = async (req: NextRequest) => {
  try {

    await connectDB()

    const { user_avatar, user_name, user_id, user_position, user_testimonial, user_html_url, user_login } = await req.json();

    const testimonial = new Testimonial({
      user_avatar,
      user_name,
      user_id,
      user_position,
      user_testimonial,
      user_html_url,
      user_login,
    });

    await testimonial.save();

    return NextResponse.json({ message: "Testimonial created successfully" });

  }catch(err){
    console.log("Failed to create testimonial", err);
    return NextResponse.json(
          { error: "Internal Server Error", details: (err as Error).message },
          { status: 500 }
        );
  }
}

export const GET = async (req: NextRequest) => { // eslint-disable-line
  try{

    await connectDB();

    const testimonilas = await Testimonial.find({}).sort({ createdAt: -1 });

    return NextResponse.json({ testimonilas });

  }catch(err){
    console.log("Failed to get testimonilas", err);
    return NextResponse.json(
          { error: "Internal Server Error", details: (err as Error).message },
          { status: 500 }
        );
  }
}