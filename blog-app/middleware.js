import { NextResponse as res } from "next/server";

export const config = {
  matcher: "/admin/:path*",
};

export const middleware = async(request) => {
  // .get("some value") method will give us only one cookie and if we want all cokies then we will use getAll() method
  const cookies = request.cookies.get("accessToken");
  console.log(cookies);

  if (!cookies) {
    return res.redirect(new URL('/login',request.url))
  }

  const apiResponse = await fetch(`${process.env.SERVER}/api/session`,{
    method: 'post',
    body: JSON.stringify({token: cookies}),
    headers: {
        'Content-Type': 'application/json'
    }
  })

  console.log('apiResponse',apiResponse);

  if(!apiResponse.ok)
    return res.redirect(new URL('/login',request.url))
  
  return res.next();
};
