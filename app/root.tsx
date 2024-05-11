import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <Link to='/nations' prefetch="intent" className="text-2xl  font-semibold flex justify-center">
    <h2>War Crimes </h2>
</Link>

      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
      
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
