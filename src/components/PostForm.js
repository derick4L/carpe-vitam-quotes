import { useState } from react;
import { setDoc } from "firebase/firestore";
//import firebase functions up here

const [sendingBanner, setSendingBanner] = useState(false);
const [postData, setPostData] = useState({});


const reducer = (state, e) => {
    return {
        ...state,
        [e.target.firstName]: e.target.value,
        [e.target.lastName]: e.target.value,
        [e.target.quote]: e.target.value,
    }
}

const postFormData = (e) => {
    e.preventDefault();
    setSendingBanner(true);

    setTimeout(() => {
        setSendingBanner(false)
    })
}

const PostForm = () => {
    return (
        <>
            {sendingBanner &&
                <h3 className="sending-banner">Sending to Carpe Vitam Quotes database...</h3>
            }
            <form className="post-form-container" onSubmit={postFormData}>
                <fieldset>
                    <div className="post-form-author-container">
                        <div className="post-form-author-first-name" onChange={setPostData}>
                            {/* input box here */}
                        </div>
                        <div className="post-form-author-last-name" onChange={setPostData}>
                            {/* input box here */}
                        </div>
                    </div>
                    <div className="post-form-quote-container">
                        <div className="post-form-quote" onChange={setPostData}>
                            {/* input box here */}
                        </div>
                    </div>
                </fieldset>
                <button type='submit' title="SEND" onSubmit={postFormData} />
            </form>
        </>
    )
}
export default PostForm;