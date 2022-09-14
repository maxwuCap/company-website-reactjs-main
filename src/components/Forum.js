import Card from "./Card";
function Forum() {
    return (
        <div className="container contact">
          <h2 className="main-title text-center">FORUM</h2>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4 mb-1">
                <input
                  name="subject"
                  placeholder="Subject"
                  className="contact-input"
                />
              </div>
            </div>
          </div>
          <br />
          <div className="col-md-12">
          <textarea
                name="message"
                placeholder="Message"
                className="contact-textarea"
              />
          </div>
    
          <br></br>
          <div className="row">
            <div className="col-md-12">
              <input className="form-btn" type="post" value="Post!" />
            </div>
          </div>
        </div>
      );
}
export default Forum;
