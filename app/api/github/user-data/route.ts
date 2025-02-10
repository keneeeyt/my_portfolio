import { NextRequest, NextResponse } from "next/server";

export const GET = async (req:NextRequest) => {
  try{

    // get  Authorization Token from header

    const accessToken = req.headers.get("Authorization");

    if(!accessToken){
      return NextResponse.json(
        { error: "Invalid Request", details: "No access token provided" },
        { status: 400 }
      );
    }

    const getUserData = await fetch("https://api.github.com/user", {
      method: "GET",
      headers: {
        "Authorization": accessToken
      }
    })

    const data = await getUserData.json();

    if(data.error){
      return NextResponse.json(
        { error: "Invalid Request", details: data.error_description },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { data: data },
      { status: 200 }
    );



  }catch(err){
    console.log("Error getting user data")
    return NextResponse.json(
      { error: "Internal Server Error", details: (err as Error).message },
      { status: 500 }
    );
  }
}