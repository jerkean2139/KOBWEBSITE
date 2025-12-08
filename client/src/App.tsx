import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import ManumationCoach from "./pages/ManumationCoach";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Assessment from "./pages/Assessment";
import Book from "./pages/Book";
import DirtySecretCoaching from "./pages/DirtySecretCoaching";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path="/jeremys-calendar" component={Calendar} />
      <Route path="/become-a-coach" component={ManumationCoach} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/assessment" component={Assessment} />
      <Route path="/book" component={Book} />
      <Route path="/coaching-truth" component={DirtySecretCoaching} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
