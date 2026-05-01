import { useEffect, useRef, useState } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Loader } from "@/components/Loader";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import WeddingPhotography from "@/pages/WeddingPhotography";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/weddings" component={WeddingPhotography} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function RouteLoader() {
  const [location] = useLocation();
  const [loaderKey, setLoaderKey] = useState<number | null>(0);
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    setLoaderKey(Date.now());
    window.scrollTo(0, 0);
  }, [location]);

  if (loaderKey === null) return null;
  return <Loader key={loaderKey} short={loaderKey !== 0} />;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
<<<<<<< HEAD
        <RouteLoader />
=======
        <Loader />
>>>>>>> a90ad3d886d01b67b74572b8e44c09a605613558
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;