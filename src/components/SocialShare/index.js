import React from "react";

const SocialShare = () => (
    <div className="social-share">
            <amp-social-share  class="share-button" type="system"></amp-social-share>
            {/*<amp-social-share class="share-button" type="facebook"></amp-social-share>*/}
            <amp-social-share class="share-button" type="linkedin"></amp-social-share>
            <amp-social-share class="share-button" type="pinterest" ></amp-social-share>
            <amp-social-share class="share-button" type="twitter"></amp-social-share>
            <amp-social-share class="share-button" type="whatsapp"></amp-social-share>
    </div>
);

export default SocialShare;