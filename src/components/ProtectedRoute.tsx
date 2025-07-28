import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuthContext();
  const [allowed, setAllowed] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!user) return;

    const checkPermission = async () => {
      const docRef = doc(db, 'users', user.uid);
      const snap = await getDoc(docRef);

      if (snap.exists()) {
        const siteId = snap.data().siteId;
        const currentSubdomain = window.location.hostname.split('.')[0];

        if (siteId === currentSubdomain) {
          setAllowed(true);
        }
      }
      setChecked(true);
    };

    checkPermission();
  }, [user]);

  if (!user) return <Navigate to="/login" replace />;
  if (!checked) return <div>Loading...</div>;
  if (!allowed) return <Navigate to="/" replace />;

  return <>{children}</>;
};

export default ProtectedRoute;
