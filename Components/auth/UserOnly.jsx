import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useUser } from '../../hooks/useUser';

import ThemedLoader from '../ThemedLoader'

const UserOnly = ({ children }) => {
  const { user, authCheck } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (authCheck && user === null) {
      router.replace('/Login');
    }
  }, [user, authCheck]);

  if (!authCheck || user) {
    return (<ThemedLoader/>)
  }

  return children;
};

export default UserOnly;
