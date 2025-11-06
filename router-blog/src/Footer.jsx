import { useStoreState } from "easy-peasy";

const Footer = () => {
  const postCount = useStoreState((state) => state.postCount);
  
  return (
    <p className='Footer'>{postCount} Total Posts</p>
  )
}

export default Footer