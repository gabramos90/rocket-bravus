import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { ProductAnalytics } from './pages/ProductAnalytics'
import { ProductMat } from './pages/ProductMat'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<ProductMat />} />
        <Route path="/analytics" element={<ProductAnalytics />} />
      </Route>
    </Routes>
  )
}
