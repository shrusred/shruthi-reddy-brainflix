/*unique key(key) to outer most element when rendering a list of objects*/
function NextVideos(props){
   const v = props.videos.map((video)=>{
        return(
            <div key={video.id} className="nextvideo" onClick={(event)=>{
                props.handleClickVideo(video)
            }}>
                <img className="nextvideo" src={video.image} alt="nextvideo"></img>
                <h2>{video.title}</h2>
                <h3>{video.channel}</h3>
            </div>
        )
   })
    return(
       <div className="nextvideos">
            <h2 className="nextvideos__title">NEXT VIDEOS</h2>
            {v}
       </div>
    );
}
export default NextVideos;