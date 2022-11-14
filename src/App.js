import './styles/App.css';
import Header from './components/Header/Header.js';
import Row from './components/Row/Row.js';
import Upload from './components/Upload/Upload.js';
import Video from './components/Video/Video.js';
import Title from './components/Title/Title.js';
import Description from './components/Description/Description.js';
import Comment from './components/Comment/Comment.js'
import Comments from './components/Comments/Comments.js'
import NextVideos from './components/NextVideos/NextVideos.js';
import videodatadet from './assets/Data/video-details.json';
import {useState} from 'react';



function App() {
  
  const videos_nextvideos = videodatadet.map((nxtvid)=>{
   return {id:nxtvid.id,image:nxtvid.image,title:nxtvid.title,channel:nxtvid.channel}
  })
 
  const [activeVideo,setActiveVideo]=useState(videodatadet[0]);//the first object has the active video by default
  
  const default_nextvideos =videos_nextvideos.filter(function( nv ) {
    return nv.id!==videodatadet[0].id//by default the next videos section will have all videos except the by default active video
});
  
  const [nextVideos,setNextVideos]=useState(default_nextvideos);//array of information next video requires; id,img url, title, uploader (full-currently active)
 
  const handleClickVideo= (video)=>{
    //1.find full object based on video.id and set in setActiveVideo with this full object
        const new_activevideo = videodatadet.find(function( obj ) {
              return obj.id===video.id
        });
        setActiveVideo(new_activevideo)
       
        console.log("NEW ACTIVE VIDEO",new_activevideo.image)

    //2.reconstruct nextvideos array of objects
        const new_nextvideos = videos_nextvideos.filter(function( obj ) {
          return obj.id!==video.id
        });
  
    //3. set nextvideos with a new value in step 2
        setNextVideos(new_nextvideos)
  }
  
  
  return (
    <>
      <Header />
      <Row />
      <Upload />
      <Video activeVideo={activeVideo}/>
      <Title activeVideo={activeVideo}/>
      <Description activeVideo={activeVideo}/>
      <Comment activeVideo={activeVideo}/>
      <Comments activeVideo={activeVideo}/>
      <NextVideos handleClickVideo={handleClickVideo} videos={nextVideos}/>
    </>
  );
}

export default App;
