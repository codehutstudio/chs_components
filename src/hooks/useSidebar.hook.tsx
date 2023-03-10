import { useRecoilState, RecoilState } from "recoil";
import { SidebarMode } from "../store";

export default function useSidebar() {
  const [sidebarMode, setSidebarMode] = useRecoilState(SidebarMode)
    return {
        sidebarMode,
        setSidebarMode
    }
}