## Topics Covered

1. UI routing
2. Layout setup
3. use client directive
4. usePathname (hook)

## ssr and csr

1. server ----> cache ---> server side rendering - ssr
2. browser ---> cache ----> client side rendering - csr

- if the heading paragraph etc content is visible in view page sourse then it is ssr
- if not then it is csr

asp .net , php and html websites are bydefault ssr

other tech stack like angular vue and react which has framework universal , nuxtjs and nextjs is 90 to 95% are ssr

note:- react,angular and vue by default they are on csr when using whith framerwork they are on ssr

- we always have to use (use client directives or 'use client') in componets not in app folder there only the ssr thing will remain

/api/signup <- alike style compnent in which we make file in the name of page.jsx , here in api we make the file with name of routes.js

- To generate random token or secret token we usually do following

prashant-malviya\Nextjs\blog-app> node
Welcome to Node.js v22.13.1.
Type ".help" for more information.

> require("crypto").randomBytes(32).toString('hex')
> 'generated token'

- whatever we write in .env treated as string

- when we are in app/page then we will import useRouter from {'next/router'} and if we are in component where we have written 'use client' then there we will import from {'next/navigation'}

- middleware code is always run on server
- since authenticity always check on server , so middleware gives us advantage on that part.
- react code is always run on browser , and on browser our code is not secure

- if we are protecting any of the route then it would be validated from server

-- in middleware we cannot use axios we have to use fetch method instead

- {'Content-Type': 'application/json'} <----- it is important to give if you are using nextjs, only then you are able to read data from the api

- basically we use axios for data fetching but we can also use "swr" but it can only be used in private routes or where seo is not necessary while axios can be used in public routes where seo is needed

-- import useSWR from "swr";

in useSWR() to live update we use mutate method

- whatever define in swr we pass that in mutate method

- for caching in nextjs we have inbuilt method available ie. fetch()

//seo must know things:-

- the page of which we want seo then we should write its code on route or page in app directory, since for seo server side rendering is important

- if code runs on browser side then seo is not as good or may not fully seo friendly.

- if you fetch data on server then only the data will be cached on server

- and if you use useSWR and useEffect then the data won't be cached on server , both the methods work on browser means on client side not in server side.

- simple thing is the page of which u want seo, the logic for that page should not be in component or client side component.
- always write code in route or in server side compnent of which you want seo

- in nextjs in server axios won't support but in node it supports

- when we fetch data through fetch method ie. fetch() then from server we get server instance , and when we call .json method with the data then we'll get data in json formate.

- whenever we use fetch method on server then we need specify the domain also along with api route ie
  http://localhost:3000/api/blog

- in nextjs in every api we need to establish connection with database , if we have stablished the connection in one of the route and if we are working in on another route where database connection not established then also we are able to work with database , because of session storage, but sometime we will get the data on other time we may not ,
- so in summary you need to establish connection on every api route since nextjs treats every api seperate

- caching means once we fetched data from server than we are able to use that data until we don't want to take new data from server, we can so the cached data till that time.

- to forfully remove the cache we can use the following command
  rm -rf .next

- cache deletion know as cache revalidation

- To remove caching we have two ways to do that in nextjs
  1- custome revalidation(on demand) - which means when needed than only cache will be deleted.
  2- isr -> increamental static regeneration - which means we will save a time on server and after that time data will be again fetched from the server , in simple terms fetch method will again called to fetche the data.

export const revalidate = 86400; through this we set the time for isr process in nextjs, this 86400 is basically seconds which means a 1 day.

- in big websites like amazon , these website make changes 2-3 days before so that seo become stronger for the content, as long the time is , then it is good for seo.
- realtime changes or very frequent changes in content makes seo slower for web apps

- as long the cache is that strong the seo for websites

import { NextResponse as res } from "next/server"
import { revalidatePath } from "next/cache"

- below code is known as on demand revalidation

export const POST = (request)=> {
revalidatePath('/blog')
return res.json({success: true})
}

- slug:- is basically the content after the url, below is known as slug "MERN-Stack-Authentication"
  http://localhost:3000/blog/MERN-Stack-Authentication

- we create the slug or the dynamic url using following code snippet

```bash

      <div className="w-8/12 mx-auto space-y-8">
        {data?.map((item, index) => (
          <Link key={index} href={`/blog/${item.title.split(" ").join("-")}`}>
            <Card hoverable>
              <h1 className="capitalize text-2xl font-semibold">
                {item.title}{" "}
              </h1>
            </Card>
          </Link>
        ))}
      </div>

```

- must know rules for slug for seo purpose

1. slug for content

2. show slug as heading tag on webpage

3. show that content as webpage title

4. website trafic is also most factor due to which our website won't rank on google, since other websites have good trafic thats by they rank top of all other websites.Even your website has all good points in terms of seo but due to low trafic google won't suggest your website on top.

5. Even on your website there is high trafic but if content is not sufficient then also your website won't be come in search results.

6. Google hates duplicate routes links

7. create seperate page for specific slug
