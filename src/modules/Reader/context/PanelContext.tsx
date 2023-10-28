import { ReactNode, createContext, useState } from "react";
import { ReaderTabs } from "../enums/RedarTabs";

interface IPanelContext {
  isLeftPanelOpen: boolean;
  isRightPanelOpen: boolean;
  currentLeftTab: ReaderTabs | null;
  currentRightTab: ReaderTabs | null;
  updatePanel: (newPanelStateValues: Partial<PanelState>) => void;
}

export type PanelState = Omit<IPanelContext, "updatePanel">;

interface IPanelContextProvider {
  children: ReactNode;
}

export const PanelContext = createContext<IPanelContext>({
  isLeftPanelOpen: false,
  isRightPanelOpen: false,
  currentLeftTab: null,
  currentRightTab: null,
  updatePanel: () => {},
});

const PanelContextProvider: React.FC<IPanelContextProvider> = ({
  children,
}) => {
  const [panelState, setPanelState] = useState<PanelState>({
    isLeftPanelOpen: false,
    isRightPanelOpen: false,
    currentLeftTab: null,
    currentRightTab: null,
  });

  const handlePanelUpdate = (newPanelStateValues: Partial<PanelState>) => {
    setPanelState((prevState) => ({ ...prevState, ...newPanelStateValues }));
  };

  return (
    <PanelContext.Provider
      value={{
        isLeftPanelOpen: panelState.isLeftPanelOpen,
        isRightPanelOpen: panelState.isRightPanelOpen,
        currentLeftTab: panelState.currentLeftTab,
        currentRightTab: panelState.currentRightTab,
        updatePanel: handlePanelUpdate,
      }}
    >
      {children}
    </PanelContext.Provider>
  );
};

export default PanelContextProvider;
