import Link from "next/link"
import styled from "@emotion/styled"
import { ROUTES } from "../../constants";

interface ROUTE {
  ID: number,
  PATH: string,
  LABEL: string,
}

export const Navigation = () => {
  return (
    <Header>
      <Inner>
      <Logo><Link href="/program/">Futurama</Link></Logo>
      <nav>
        <Menu>
          {
            ROUTES.map((routeObject: ROUTE) => {
              return (
                <MenuItem key={`main-menu-${routeObject.ID}`}>
                  <Link href={routeObject.PATH}>{routeObject.LABEL}</Link>
                </MenuItem>
              )
            })
          }
        </Menu>
      </nav>
      </Inner>
    </Header>
  )
}

const Header = styled.header`
  margin-bottom: 100px;
  border-bottom: 1px solid #eee;
`
const Logo = styled.h1`
  color: #2e79eb;
`

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  height: 90px;
  padding: 0 3%;
  margin: 0 auto;
  box-sizing: border-box;
`

const Menu = styled.ul`
  display: flex;
  list-style: none;
`

const MenuItem = styled.li`
  margin-left: 25px;
  list-style: none;
`

