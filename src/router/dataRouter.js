
//Pages
import Main from "../pages/Main";
import Search from "../pages/Search";
import Mediateka from "../pages/Mediateka";

//Utils 
import { routes } from "../utils/routes";

export const dataRouter = [
    {
        url: routes.main, 
        components: Main,
        title: "Главная | Spotify "
    },
    {
        url: routes.search, 
        components: Search,
        title: "Поиск | Spotify "
    },
    {
        url: routes.mediateka, 
        components: Mediateka,
        title: "Медиатека | Spotify "
    }
]