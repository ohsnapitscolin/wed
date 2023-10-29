import { useState, createContext, useEffect } from "react";

type Breakpoint = "sm" | "md" | "lg";

export const LayoutContext = createContext<{
  breakpoint: Breakpoint;
  zIndex: number;
  setZIndex: (value: ((prevState: number) => number) | number) => void;
}>({
  breakpoint: "lg",
  zIndex: 1,
  setZIndex: () => {},
});

export const LayoutProvider = ({ children }) => {
  const [zIndex, setZIndex] = useState(1);
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("lg");

  useEffect(() => {
    const handleResize = () => {
      const breakpoint =
        window.innerWidth < 600 ? "sm" : window.innerWidth < 800 ? "md" : "lg";
      setBreakpoint(breakpoint);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <LayoutContext.Provider value={{ zIndex, setZIndex, breakpoint }}>
      {children}
    </LayoutContext.Provider>
  );
};
