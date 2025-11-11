import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { useUser } from '../../hooks/useUser.jsx';
import ThemedLoader from '../ThemedLoader';

const UserOnly = ({ children }) => {
  const { user, authCheck } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (authCheck && !user) {
      router.replace('/Login'); // safe: only runs after authCheck
    }
  }, [authCheck, user]);

  if (!authCheck) return <ThemedLoader />; // wait until authCheck finishes
  if (!user) return null; // render nothing while redirecting

  return children;
};

export default UserOnly;
