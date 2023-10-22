import { ReactNode, createContext, useState } from "react";
import { ReaderTabs } from "../enums/RedarTabs";
interface IPanelContext {
  isLeftPanelOpen: boolean;
  isRightPanelOpen: boolean;
  currentTab: ReaderTabs | null;
  updatePanel: (newPanelStateValues: Partial<PanelState>) => void;
}

export type PanelState = Omit<IPanelContext, "updatePanel">;

interface IPanelContextProvider {
  children: ReactNode;
}

export const PanelContext = createContext<IPanelContext>({
  isLeftPanelOpen: false,
  isRightPanelOpen: false,
  currentTab: null,
  updatePanel: () => {},
});

const PanelContextProvider: React.FC<IPanelContextProvider> = ({
  children,
}) => {
  const [panelState, setPanelState] = useState<PanelState>({
    isLeftPanelOpen: false,
    isRightPanelOpen: false,
    currentTab: null,
  });

  const handlePanelUpdate = (newPanelStateValues: Partial<PanelState>) => {
    setPanelState((prevState) => ({ ...prevState, ...newPanelStateValues }));
  };

  return (
    <PanelContext.Provider
      value={{
        isLeftPanelOpen: panelState.isLeftPanelOpen,
        isRightPanelOpen: panelState.isRightPanelOpen,
        currentTab: panelState.currentTab,
        updatePanel: handlePanelUpdate,
      }}
    >
      {children}
    </PanelContext.Provider>
  );
};

export default PanelContextProvider;
