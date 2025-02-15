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


- we always have to use (use client directives or 'use client')  in componets not in app folder there only the ssr thing will remain


/api/signup <- alike style compnent in which we make file in the name of page.jsx , here in api we make the file with name of routes.js


- To generate random token or secret token we usually do following

prashant-malviya\Nextjs\blog-app> node
Welcome to Node.js v22.13.1.
Type ".help" for more information.
> require("crypto").randomBytes(32).toString('hex')
'generated token'

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