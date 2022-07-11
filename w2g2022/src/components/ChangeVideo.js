import React from "react";
import { change_video, parseIdFromURL } from "../utils/webRTC_utils";

class ChangeVideo extends React.Component {
  changeVideo = e => {
    e.preventDefault();
    let video_url = e.target.video_url.value;
    let video_id = parseIdFromURL(video_url);
    if (video_id) {
      change_video(video_id, true);
    }
  };

  render() {
    return (
      <div className="box info_box">
        <div className="">
          <form onSubmit={this.changeVideo}>
            <div className="field is-grouped">
              <p className="control is-expanded">
                <input
                  className="input"
                  type="text"
                  name="video_url"
                  placeholder="Neue Video-URL eingeben"
                  required
                />
              </p>
              <p className="control">
                <button className="button is-primary">Video ändern</button>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ChangeVideo;