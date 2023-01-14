import "./write.css";

export default function Write() {
  return (
    <div className="write">
        <img src="https://wallpapers.com/images/hd/blue-sky-darling-in-the-franxx-z23ra7nbugluaeje.webp" alt="pic" className="writeImg"/>
      <form className="writeForm">
        <div className="writeFormGroup">
          <input type="file" id="fileInput" style={{ display: "none" }} />
          
          <label htmlFor="fileInput">
            <i class="writeFormIcon fa-sharp fa-solid fa-plus"></i>
          </label>
          <input type="text" placeholder="Title" className="writeInput title" autoFocus={true} />
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="Write your perspective...." type="text" className="writeInput writeText"></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
