import { Post } from '../../models/post.model';

export interface PostState {
  postList: Post[];
}

export const initialState: PostState = {
  postList: [
    {
      id: '1',
      title: 'sample title 1',
      description: 'Sample description 1'
    }
    ,
      {
      id: '2',
      title: 'sample title 2',
      description: 'Sample description 2'
    }
 
  ]
};
