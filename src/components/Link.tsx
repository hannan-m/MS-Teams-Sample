// @ts-ignore
import {useState} from "react";

function ExternalLink() {

    const [link, setLink] = useState(localStorage.getItem('link'));
    //const link = localStorage.getItem('link');
    return (
        <div className="col-12">
            <div className="ratio ratio-16x9 text-center mt-2 mb-2 ">
                <iframe
                    className="embed-responsive-item"
                    src={link!}
                    allowFullScreen
                />
            </div>
        </div>
    );
}

export default ExternalLink;
