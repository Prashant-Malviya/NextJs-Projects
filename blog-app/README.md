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





