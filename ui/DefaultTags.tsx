import Script from "next/script";

// Default <head> tags we want shared across the app
{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" 
crossOrigin="anonymous" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
async>

</script> */}
export function DefaultTags() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* <link
        href="/"
        rel="stylesheet"
      
      /> */}
      
      <link
        href="/favicon/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="/favicon/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/favicon/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link href="/favicon/site.webmanifest" rel="manifest" />
      <link
        color="#000000"
        href="/favicon/safari-pinned-tab.svg"
        rel="mask-icon"
      />
      
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" 
				crossOrigin="anonymous"  
				async/>
				{/*integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" */}
		  
      
      <link href="/favicon/favicon.ico" rel="shortcut icon" />
    </>
  );
}



