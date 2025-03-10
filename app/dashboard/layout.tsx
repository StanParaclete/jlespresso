import "../globals.css";
import Navbar from "./(components)/Navbar";



export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
              className={`w-full antialiased`}
>
  <Navbar/>
  {children}</body>
    </html>
  )
}
