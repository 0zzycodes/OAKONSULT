import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import {
  All_Blogs,
  Carers_Hero,
  Parent_Hero,
  Sibling_Hero,
} from '../../constants/Data';
import { firestore } from '../../firebase/config';
import TagOverviewPostPreview from '../TagOverviewPostPreview/TagOverviewPostPreview';
import CustomButton from '../CustomButton/CustomButton';
import Spacing from '../Spacing/Spacing';
import placeholder from '../../assetz/images/placeholder.png';

import './styles.scss';

const TagOverview = () => {
  const location = useLocation().pathname;
  const endpoint = location.split('/')[location.split('/').length - 1];
  const [isLoading, setIsLoading] = useState(true);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [lastDoc, setLastDoc] = useState(null);
  const [posts, setPosts] = useState([]);
  const [noPost, setNoPost] = useState(false);
  const [onEndReachedCalled, setOnEndReachedCalled] = useState(false);
  console.log(endpoint);
  const [tagRef] = useState(
    firestore.collection('blogs').where('main_tag', '==', endpoint)
  );
  const data =
    endpoint === 'for-parents'
      ? Parent_Hero
      : endpoint === 'for-siblings'
      ? Sibling_Hero
      : Carers_Hero;

  const onLoadTagPosts = () => {
    setIsLoading(true);
    const slug = tagRef.orderBy('posted_at', 'desc').limit(10);
    slug.onSnapshot((snapshot) => {
      if (snapshot.empty) {
        setNoPost(true);
        return;
      }
      let newPosts = [];
      setLastDoc(snapshot.docs[snapshot.docs.length - 1]);

      for (let i = 0; i < snapshot.docs.length; i++) {
        newPosts.push(snapshot.docs[i].data());
      }
      console.log(newPosts);
      setPosts(newPosts);
    });
  };
  const onLoadMoreTagPosts = async () => {
    if (lastDoc) {
      setOnEndReachedCalled(false);
      setIsMoreLoading(true);
      const slug = await tagRef
        .orderBy('created_at')
        .startAfter(lastDoc.data().created_at)
        .limit(10);
      slug.onSnapshot((snapShot) => {
        if (!snapShot.empty) {
          let newPosts = posts;

          setLastDoc(snapShot.docs[snapShot.docs.length - 1]);

          for (let i = 0; i < snapShot.docs.length; i++) {
            newPosts.push(snapShot.docs[i].data());
          }

          setPosts(newPosts);
          if (snapShot.docs.length < 10) setLastDoc(null);
        } else {
          setLastDoc(null);
        }
      });
      setIsMoreLoading(false);
    }
  };
  useEffect(() => {
    onLoadTagPosts();
  }, ['']);
  return (
    <div className='tag-overview'>
      <div
        className='hero'
        style={{
          backgroundImage:
            endpoint === 'for-parents'
              ? `linear-gradient(#cac492b4, #cac4923f), url(${placeholder})`
              : endpoint === 'for-siblings'
              ? `linear-gradient(#cac492b4, #cac4923f), url(${placeholder})`
              : `linear-gradient(#cac492b4, #cac4923f), url(${placeholder})`,
        }}
      >
        <div className='hero-text-wrapper'>
          <h1 className='hero-title'>{data.title}</h1>
          <Spacing height={`6em`} />
          <p className='hero-description'>{data.description}</p>
        </div>
      </div>
      <Spacing height={`6em`} />
      <div className='posts'>
        {posts.map((item, index) => (
          <TagOverviewPostPreview key={index} data={item} />
        ))}
      </div>
      {onEndReachedCalled && <CustomButton label={`LOAD MORE`} />}
    </div>
  );
};

export default TagOverview;
