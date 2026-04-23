import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, type Auth } from "firebase/auth";
import { getStorage, type FirebaseStorage } from "firebase/storage";

function readFirebaseClientConfig() {
  return {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };
}

function ensureClientApp(): FirebaseApp {
  if (getApps().length > 0) return getApps()[0]!;

  const config = readFirebaseClientConfig();
  if (!config.apiKey || !config.authDomain || !config.projectId) {
    throw new Error(
      "Firebase client is not configured. Set NEXT_PUBLIC_FIREBASE_API_KEY, NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN, and NEXT_PUBLIC_FIREBASE_PROJECT_ID."
    );
  }

  return initializeApp(config);
}

function createLazyService<T extends object>(factory: () => T): T {
  return new Proxy({} as T, {
    get(_target, prop, receiver) {
      const instance = factory();
      const value = Reflect.get(instance as object, prop, receiver);
      return typeof value === "function" ? (value as (...args: unknown[]) => unknown).bind(instance) : value;
    },
  });
}

export const db = createLazyService<Firestore>(() => getFirestore(ensureClientApp()));
export const auth = createLazyService<Auth>(() => getAuth(ensureClientApp()));
export const storage = createLazyService<FirebaseStorage>(() => getStorage(ensureClientApp()));
export const googleProvider = new GoogleAuthProvider();
