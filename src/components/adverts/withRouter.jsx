// HOC
import {useParams} from "react-router-dom";

const withRouter = (Comment) => props => {
    const params = useParams();
    return (
        <Comment
            {...props}
            params={params} />
    )
}
export default withRouter;