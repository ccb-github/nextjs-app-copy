import '#/styles/globals.css';
import Head from './head';
import TranslationWrapper  from './translationProvider'

 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log(JSON.stringify(children))
  return (
    <html lang="en" className="[color-scheme:light]">
      <Head/>
      <body>
        {/* <TranslationWrapper> */}
        {children}
          {/* </TranslationWrapper> */}
      </body>
    </html>
  );
}




{/* <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20"></div> */}