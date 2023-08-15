const TrackList = ({tracks}) => {
    return (
        <>
            <ul>
                {tracks.map((track) =>(
                  <li key={track.id}>
                      {track.title} by
                      {/*{track.author.name}*/}
                      <audio controls>
                          <source src={track.audio_file} type="audio/mp3"/>
                          Your browser does not support the audio channel
                      </audio>
                  </li>
                ))}
            </ul>
        </>
    )
}
export default TrackList;