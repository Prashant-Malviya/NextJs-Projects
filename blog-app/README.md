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