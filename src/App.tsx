import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Home from "components/pages/home/Home"
import Documentation from "components/pages/docs/Documentation"
import TopBar from "./components/TopBar"
import PageContainer from "./components/PageContainer"
import Roadmap from "components/pages/roadmap/Roadmap"
import Support from "components/pages/support/Support"
import Page404 from "components/pages/page404/Page404"

const App: React.FC = () => {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <TopBar />
      <PageContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/documentation"
            element={<Navigate to="/docs" replace />}
          />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/docs/:page" element={<Documentation />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </PageContainer>
    </div>
  )
}

export default App
