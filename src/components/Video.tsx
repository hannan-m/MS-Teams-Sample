function Video() {
  return (
    <div className="col-12">
      <div className="ratio ratio-16x9 text-center mt-2 mb-2 ">
        <iframe
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/nYh-n7EOtMA?controls=0"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default Video;
