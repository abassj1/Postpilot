import React from 'react';
import { Box, useMediaQuery} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "scenes/navbar";

import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import UserWidget from "scenes/widgets/UserWidget";
import InstagramWidget from "scenes/widgets/Posts/InstagramWidget";
import TwitterWidget from "scenes/widgets/Posts/TwitterWidget";
import LinkedinWidget from "scenes/widgets/Posts/LinkedinWidget";
import GithubWidget from "scenes/widgets/Posts/GithubWidget";
import NotionWidget from "scenes/widgets/Posts/NotionWidget";
// import YoutubeWidget from "scenes/widgets/Posts/YoutubeWidget";
// import RedditWidget from "scenes/widgets/Posts/RedditWidget";
// import FacebookWidget from "scenes/widgets/Posts/FacebookWidget";
// import TiktokWidget from "scenes/widgets/Posts/TiktokWidget";
// import PinterestWidget from "scenes/widgets/Posts/PinterestWidget";
// import TwitchWidget from "scenes/widgets/Posts/TwitchWidget";
// import SpotifyWidget from "scenes/widgets/Posts/SpotifyWidget";
// import SoundcloudWidget from "scenes/widgets/Posts/SoundcloudWidget";
// import MediumWidget from "scenes/widgets/Posts/MediumWidget";


// import { createPostComponent } from 'js/postFunc.js'; // import the createPostComponent function


// function Form({ handleSubmit }) {
//   const [buttonLink, setButtonLink] = React.useState('');

//   return (
//     <form onSubmit={handleSubmit}>
//       <Grid container direction="column" alignItems="center" spacing={3}>
//         <Grid item>
//           <TextField
//             required
//             id="post-link"
//             label="Post Link"
//             value={buttonLink}
//             onChange={(event) => setButtonLink(event.target.value)}
//           />
//         </Grid>
//         <Grid item>
//           <Button type="submit" variant="contained" color="primary">
//             Create
//           </Button>
//         </Grid>
//       </Grid>
//     </form>
//   );
// }

// function PostsContainer({ postContainer }) {
//   return (
//     <Grid container spacing={3}>
//       {postContainer.map((post, index) => (
//         <Grid item xs={12} sm={6} key={index}>
//           {checkForPostType(post.link)}
//         </Grid>
//       ))}
//     </Grid>
//   );
// }

const ProfilePage = () => {

// ----------------- POST Code From Personal -----------------

  //   const title = 'Example Title';
  //   const description = 'Example Description';
  //   const [buttonLink, setButtonLink] = useState('');
  //   const [postContainer, setPostContainer] = useState([]);
    
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     const newPost = createPostComponent(title, description, buttonLink);
  //     setPostContainer([...postContainer, newPost]);
  // };
// ----------------- POST Code From Personal -----------------


  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) return null;

  return (
    <Box>
      <Navbar />

      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
      >

        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={userId} picturePath={user.picturePath} />
          <Box m="2rem 0" />
        </Box>

        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={user.picturePath} />
          <Box m="2rem 0" />
          <PostsWidget userId={userId} isProfile />
        </Box>
        <Box 
        flexBasis={isNonMobileScreens ? "42%" : undefined}
        mt={isNonMobileScreens ? undefined : "2rem"}>
        {/* <Form handleSubmit={handleSubmit} />
        <PostsContainer postContainer={postContainer} /> */}
          <InstagramWidget/>
          <Box m="2rem 0" />
          <TwitterWidget/>
          <Box m="2rem 0" />
          <LinkedinWidget/>
          <Box m="2rem 0" />
          <GithubWidget/>
          <Box m="2rem 0" />
          <NotionWidget/>
      </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
