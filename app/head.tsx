import { DefaultTags } from '#/ui/DefaultTags';
import Script from 'next/script';

//integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
export default function Head() {
  return (
    <>
      <DefaultTags />
      <title>Next.js content manage system</title>
      <meta
        name="description"
        content="A simple nextjs 13 app(With beta next.js 13 app dir)"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
        defer
        async
      />
      <Script src={'/javascript/qrcode/qrcode.js'} async />
      <Script src={'/javascript/qrcode/html5-qrcode.js'} async />

      {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" rel="stylesheet"  
           precedence="default" crossOrigin="anonymous" /> */}

      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        precedence="default"
        crossOrigin="anonymous"
      />
    </>
  )
    //bootstrap script integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
  //integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
}
