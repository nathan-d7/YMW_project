import { type FC, lazy, Suspense } from "react"
import { Route, Routes } from "react-router"


const HomePage = lazy(() => import('./pages/homePage'))
const ArticlesPage = lazy(() => import('./pages/articlesPage'))
const AboutPage = lazy(() => import('./pages/aboutPage'))
const SubscriptionPage = lazy(() => import('./pages/subscriptionPage'))
const GradesPage = lazy(() => import('./pages/gradesPage'))
const GradePage = lazy(() => import('./pages/transferGradePage'))
const GrammarMaterialsTable = lazy(() => import('../src/pages/materialsPage/grammarPage/index.tsx'))

const Router: FC = () => {
  return (
    <Routes>
       <Route index element={<Suspense><HomePage /></Suspense>} />
       <Route path="articles" element={<Suspense><ArticlesPage /></Suspense>} />
       <Route path="about" element={<Suspense><AboutPage /></Suspense>} />
       <Route path="subscription" element={<Suspense><SubscriptionPage /></Suspense>} />
       <Route path="grades" element={<Suspense><GradesPage /></Suspense>} />
       <Route path="grades/:grade" element={<Suspense><GradePage /></Suspense>} />
       <Route path="grades/:grade/grammar" element={<Suspense><GrammarMaterialsTable /></Suspense>} />
    </Routes>
  )
}

export default Router

