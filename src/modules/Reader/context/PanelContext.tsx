import { ReactNode, createContext, useState } from "react";
import { ReaderTabs } from "../enums/RedarTabs";
interface IPanelContext {
  orientation: "right" | "left";
  isPanelOpen: boolean;
  currentTab: ReaderTabs | null;
  updatePanel: (newValues: Omit<IPanelContext, "updatePanel">) => void;
}

export type PanelState = Omit<IPanelContext, "updatePanel">;

interface IPanelContextProvider {
  children: ReactNode;
}

export const PanelContext = createContext<IPanelContext>({
  orientation: "right",
  isPanelOpen: false,
  currentTab: null,
  updatePanel: () => {},
});

const PanelContextProvider: React.FC<IPanelContextProvider> = ({
  children,
}) => {
  const [panelState, setPanelState] = useState<PanelState>({
    isPanelOpen: false,
    orientation: "right",
    currentTab: null,
  });

  const handlePanelUpdate = (newValues: PanelState) => {
    setPanelState(newValues);
  };

  return (
    <PanelContext.Provider
      value={{
        isPanelOpen: panelState.isPanelOpen,
        orientation: panelState.orientation,
        currentTab: panelState.currentTab,
        updatePanel: handlePanelUpdate,
      }}
    >
      {children}
    </PanelContext.Provider>
  );
};

export default PanelContextProvider;
