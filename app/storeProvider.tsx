'use client';

//Providing the redux Store to the whole app
import { useRef } from 'react';
import { Provider } from 'react-redux';
//AppStore is a type
import { makeStore, AppStore } from '@redux/configureStore';

export default function StoreProvider({
  //count = 0,
  children,
}: {
  //count?: number;
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    //Create the store instance the first time this renders
    storeRef.current = makeStore();
    //storeRef.current.dispatch(initializeCount(count));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
