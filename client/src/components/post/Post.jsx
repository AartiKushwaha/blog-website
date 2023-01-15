import { Link } from "react-router-dom"
import "./post.css"

export default function Post() {
  return (
    <div className='post'>
      <img className='postImg' src='https://wallpapers.com/images/file/a-whisker-away-hinode-with-taro-t1ushv1siyazdbhp-t1ushv1siyazdbhp.jpg' alt='img' />  
      <div className='postInfo'>
        <div className='postCats'>
            <span className='postCat'>Anime</span>
            <span className='postCat'>Music</span>
        </div>
        <span className='postTitle'><Link className="link" to="/post/:postId">This is the title</Link></span>
        <span className='postDate'>2 hours ago</span>
        <p className="postDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
        <hr/>
      </div>
    </div>
  )
}
