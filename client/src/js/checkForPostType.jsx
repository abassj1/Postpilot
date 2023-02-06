import React from 'react';
import InstagramPost from 'components/InstagramPost';

const checkForPostType = (link) => {
    if (link.includes("Instagram")) {
        return <InstagramPost />;
    }
};

export default checkForPostType;
