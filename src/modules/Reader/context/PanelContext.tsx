import { ReactNode, createContext, useState } from "react";

interface IPanelContext {
  orientation: "right" | "left";
  isOpen: boolean;
  updatePanel: (newValues: Omit<IPanelContext, "updatePanel">) => void;
}

interface IPanelContextProvider {
  children: ReactNode;
}

export const PanelContext = createContext<IPanelContext>({
  orientation: "right",
  isOpen: false,
  updatePanel: () => {},
});

const PanelContextProvider: React.FC<IPanelContextProvider> = ({
  children,
}) => {
  const [panelState, setPanelState] = useState<
    Omit<IPanelContext, "updatePanel">
  >({ isOpen: false, orientation: "right" });

  const handlePanelUpdate = (newValues: Omit<IPanelContext, "updatePanel">) => {
    setPanelState(newValues);
  };

  return (
    <PanelContext.Provider
      value={{
        isOpen: panelState.isOpen,
        orientation: panelState.orientation,
        updatePanel: handlePanelUpdate,
      }}
    >
      {children}
    </PanelContext.Provider>
  );
};

export default PanelContextProvider;
