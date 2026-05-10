import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Fragment } from 'react'

const RootLayout = () => (
  <Fragment>
    <div className="p-2 flex gap-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
      <Link to="/json" className="[&.active]:font-bold">
        Json
      </Link>
    </div>
    <hr />
    <Outlet />
    <TanStackRouterDevtools />
  </Fragment>
)

export const Route = createRootRoute({ component: RootLayout })