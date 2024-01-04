import { Navigation } from "../components/Navigation"
import { About } from "../components/About"
import { PostList } from "../components/PostList"

export const HomePage = () => {
    return (
        <div>
            <Navigation/>
            <About/>
            {/* <PostList/> */}
        </div>
    )
}


