import { ReactNode, createContext, useState } from "react";
import { ReaderTabs } from "../enums/RedarTabs";
interface IPanelContext {
  isLeftPanelOpen: boolean;
  currentTab: ReaderTabs | null;
  updatePanel: (newValues: Omit<IPanelContext, "updatePanel">) => void;
}

export type PanelState = Omit<IPanelContext, "updatePanel">;

interface IPanelContextProvider {
  children: ReactNode;
}

export const PanelContext = createContext<IPanelContext>({
  isLeftPanelOpen: false,
  currentTab: null,
  updatePanel: () => {},
});

const PanelContextProvider: React.FC<IPanelContextProvider> = ({
  children,
}) => {
  const [panelState, setPanelState] = useState<PanelState>({
    isLeftPanelOpen: false,
    currentTab: null,
  });

  const handlePanelUpdate = (newValues: PanelState) => {
    setPanelState(newValues);
  };

  return (
    <PanelContext.Provider
      value={{
        isLeftPanelOpen: panelState.isLeftPanelOpen,
        currentTab: panelState.currentTab,
        updatePanel: handlePanelUpdate,
      }}
    >
      {children}
    </PanelContext.Provider>
  );
};

export default PanelContextProvider;
