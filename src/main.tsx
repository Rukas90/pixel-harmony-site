import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import { ForegroundProvider } from "components/ForegroundContext"
import Foreground from "components/Foreground"
import App from "./App"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ForegroundProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <Foreground />
    </ForegroundProvider>
  </StrictMode>
)
