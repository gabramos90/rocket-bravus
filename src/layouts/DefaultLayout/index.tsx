import { Outlet } from 'react-router-dom'
import { Aside } from '../../components/Aside'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Aside />
      <Outlet />
    </LayoutContainer>
  )
}
