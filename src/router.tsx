import { type FC, lazy, Suspense } from "react"
import { Route, Routes } from "react-router"


const HomePage = lazy(() => import('./pages/homePage'))
const ArticlesPage = lazy(() => import('./pages/articlesPage'))
const AboutPage = lazy(() => import('./pages/aboutPage'))

const Router: FC = () => {
  return (
    <Routes>
       <Route index element={<Suspense><HomePage /></Suspense>} />
       <Route path="articles" element={<Suspense><ArticlesPage /></Suspense>} />
       <Route path="about" element={<Suspense><AboutPage /></Suspense>} />
    </Routes>
  )
}

export default Router

