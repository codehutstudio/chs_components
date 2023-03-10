import { ThemeProvider } from "@mui/material"
import { RecoilRoot } from "recoil"
import theme from "./AppMuiTheme"
import AppRouting from "./AppRouting"
import Dashboard from "./shared/Dashboard"
import { SnackbarProvider } from 'notistack';
import AppNotificationClsoe from "./appComponents/AppNotificationClose"
function App() {

  return (
    <RecoilRoot>
      <SnackbarProvider maxSnack={3} action={snackbarKey => <AppNotificationClsoe snackbarKey={snackbarKey} />}>
        <ThemeProvider theme={theme}>
          <AppRouting />
        </ThemeProvider>
      </SnackbarProvider>
    </RecoilRoot>

  )
}

export default App
