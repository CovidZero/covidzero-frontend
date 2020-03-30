import React from "react";

const SocialShare = () => {
    const link = window.location.href;

    return (
        <div className="social-share">
            <amp-social-share class="share-button" type="system" data-param-text={link}></amp-social-share>
            <amp-social-share class="share-button" type="whatsapp" ></amp-social-share>
            <amp-social-share class="share-button" type="linkedin"></amp-social-share>
            <amp-social-share class="share-button" type="twitter"></amp-social-share>
        </div>
    );
}

export default SocialShare;