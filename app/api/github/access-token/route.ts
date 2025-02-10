import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const url = new URL(req.url);
    const code = url.searchParams.get("code");

    if (!code) {
      return NextResponse.json(
        { error: "Invalid Request", details: "No code provided" },
        { status: 400 }
      );
    }

    const params = new URLSearchParams({
      client_id: process.env.GITHUB_CLIENT_ID!,
      client_secret: process.env.GITHUB_CLIENT_SECRET!,
      code,
    }).toString();

    const getAccessToken = await fetch(
      `https://github.com/login/oauth/access_token?${params}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    if (!getAccessToken.ok) {
      return NextResponse.json(
        { error: "Invalid Request", details: "Failed to fetch access token" },
        { status: 400 }
      );
    }

    const data = await getAccessToken.json();

    if (data.error) {
      return NextResponse.json(
        { error: "Invalid Request", details: data.error_description },
        { status: 400 }
      );
    }

    const accessToken = data.access_token;

    // Get the GitHub user data using Bearer token
    const getUserData = await fetch("https://api.github.com/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!getUserData.ok) {
      return NextResponse.json(
        { error: "Invalid Request", details: "Failed to fetch user data" },
        { status: 400 }
      );
    }

    const userData = await getUserData.json();

    const userDetails = {
      user_id : userData.id,
      user_avatar : userData.avatar_url,
      user_name : userData.name,
      user_login : userData.login,
      user_html_url : userData.html_url,
    }

    return NextResponse.json({ data: userDetails }, { status: 200 });
  } catch (err) {
    console.error("Error getting access token:", err);
    return NextResponse.json(
      { error: "Internal Server Error", details: (err as Error).message },
      { status: 500 }
    );
  }
};
