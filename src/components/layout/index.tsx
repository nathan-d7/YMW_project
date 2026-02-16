import type { FC } from "react"
import Header from "./header"
import Promo from "./promo"
import Router from "../../router"


const Layout: FC = () => {
  return (
    <>
      <Header />
      <Promo />
      <div
        style={{
          // height: 'calc(100vh - 60px)',
          // height: '100vh',
          // overflow: 'hidden',
          // display: 'flex',
          // justifyContent: 'center'
        }}
      >
        <Router />
      </div>
    </>
  )
}

export default Layout