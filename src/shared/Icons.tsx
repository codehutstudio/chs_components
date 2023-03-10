import { createElement, forwardRef } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import GridViewIcon from '@mui/icons-material/GridView'; // Dashboard
import StorageIcon from '@mui/icons-material/Storage'; // Database
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Products, Store
import GroupIcon from '@mui/icons-material/Group'; // Users, Clients
import PaymentIcon from '@mui/icons-material/Payment'; // Orders
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import PushPinIcon from '@mui/icons-material/PushPin';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SaveIcon from '@mui/icons-material/Save';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ReplayIcon from '@mui/icons-material/Replay';
import ConstructionIcon from '@mui/icons-material/Construction';
import ClearIcon from '@mui/icons-material/Clear';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildIcon from '@mui/icons-material/Build';
import MenuIcon from '@mui/icons-material/Menu';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
const Icons = forwardRef((props: any, ref) => {
    const { type, ...rest } = props as any
    switch (type) {
        case 'start':
        case 'play':
            return createElement(PlayCircleFilledIcon, { ...rest, ref })
        case 'menu':
            return createElement(MenuIcon, { ...rest, ref })
        case 'id':
            return createElement(PermIdentityIcon, { ...rest, ref })
        case 'build2':
            return createElement(BuildIcon, { ...rest, ref })
        case 'settings':
            return createElement(SettingsIcon, { ...rest, ref })
        case 'close':
        case 'clear':
            return createElement(ClearIcon, { ...rest, ref })
        case 'build':
            return createElement(ConstructionIcon, { ...rest, ref })
        case 'undo':
            return createElement(ReplayIcon, { ...rest, ref })
        case 'paste':
            return createElement(ContentPasteIcon, { ...rest, ref })
        case 'save':
            return createElement(SaveIcon, { ...rest, ref })
        case 'moreVert':
            return createElement(MoreVertIcon, { ...rest, ref })
        case 'pin':
            return createElement(PushPinIcon, { ...rest, ref })
        case 'more':
            return createElement(ExpandMore, { ...rest, ref })
        case 'less':
            return createElement(ExpandLess, { ...rest, ref })
        case 'menuToggle':
            return createElement(MenuOpenIcon, { ...rest, ref })
        case 'dashboard':
            return createElement(GridViewIcon, { ...rest, ref })
        case 'database':
            return createElement(StorageIcon, { ...rest, ref })
        case 'products':
        case 'store':
            return createElement(ShoppingCartIcon, { ...rest, ref })
        case 'users':
        case 'clients':
            return createElement(GroupIcon, { ...rest, ref })
        case 'orders':
            return createElement(PaymentIcon, { ...rest, ref })
        case 'add':
            return createElement(AddIcon, { ...rest, ref })
        case 'delete':
            return createElement(DeleteForeverIcon, { ...rest, ref })
        case 'edit':
            return createElement(EditIcon, { ...rest, ref })
        case 'view':
            return createElement(VisibilityIcon, { ...rest, ref })
        default:
            return createElement(AddIcon, { ...rest, ref })
    }
})
export default Icons