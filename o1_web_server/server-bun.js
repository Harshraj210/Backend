import {serve} from 'bun'
// imports serve function from bun
// serve = createserver()


serve({
  // fetch request handles all the incoming request tothe server
  fetch (request){
    // extracts url from incoming request
    const url =new URL(request.url)
    if (url.pathname === '/') {
      return new Response('Hello welcome to Bun Server ',{status:200})
    }
    else if(url.pathname === '/hello') {
      return new Response ('hello welcome',{status:200})
    }
    else{
      return new Response('404 !! Error Occured',{status:404})
    }
  },
  //  no listen is requires , serve does all the work
  port:3000,
  hostname:'127.0.0.1'
})
// bun run o1_web_server/server-bun.js