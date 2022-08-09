import { useState } from react;

const [sendingBanner, setSendingBanner] = useState(false);
const [postData, setPostData] = useState({});


const postFormData = (e) => {
    e.preventDefault();
    setSendingBanner(true);

    setTimeout(() => {
        setSendingBanner(false)
    })
}

// TODO: Convert into Formik form with/ Yup validation

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
                        </div>
                        <div className="post-form-author-last-name" onChange={setPostData}>
                        </div>
                    </div>
                    <div className="post-form-quote-container">
                        <div className="post-form-quote" onChange={setPostData}>
                        </div>
                    </div>
                </fieldset>
                <button type='submit' title="SEND" onSubmit={postFormData} />
            </form>
        </>
    )
}
export default PostForm;