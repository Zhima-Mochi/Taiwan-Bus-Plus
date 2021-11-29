import { useHistory } from "react-router";
import west_24dp from '../../assets/icons/west_24dp.svg';

export default function BackPage({ content = "返回上頁" }) {
    let history = useHistory();
    return (
        <div className="bg-white view-border pt-4 flex pl-1" >
            <div className="flex" onClick={() => history.goBack()} style={{ cursor: "pointer" }}>
                <img src={west_24dp} alt='回上一頁 back to previous page' />
                <span className="ml-2">{content}</span>
            </div>
        </div>
    )
}