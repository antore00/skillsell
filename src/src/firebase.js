import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzSyA-R45PcaYirxrsvm3qWmF5b9ZjIJmDJE0",
  authDomain: "skillsell-prod.firebaseapp.com",
  projectId: "skillsell-prod",
  storageBucket: "skillsell-prod.appspot.com",
  messagingSenderId: "536227007696",
  appId: "1:536227007696:web:b653789494124d383ea2d5",
  measurementId: "G-M9KV06MEJ"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
