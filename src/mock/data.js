import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 't.shirakura', // e.g: 'Name | Developer'
  lang: 'jp', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Software Developer portfolio',
  name: 't.shirakura',
  subtitle: 'I am Independent Web and Mobile app developer.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'aboutme.jpg',
  paragraphOne: 'I am an independent web and mobile app developer. I hope I can help you in your exciting and prosperous life.',
  paragraphTwo: '私はインディペンデントのウェブとモバイルアプリ開発者です。みなさんの刺激的で豊かな生活を手助けできることを願っています。',
  paragraphThree: 'My technical skills are React, React Native, GatsbyJS, WordPress and DIY PC.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'react-native-expo-firebase.png',
    title: 'React Native Expo Firebase',
    info: 'This is a demo of using Firestore realtime listener to rewrite the app color scheme and drawer menu in real time from the browser.',
    info2: 'Firestore realtime listenerを使って、アプリの配色やドロワーメニューをリアルタイムにブラウザ上から書き換えるデモです。',
    url: 'https://youtu.be/Hsd_55z4YvM',
    repo: 'https://github.com/kiyohken2000/react-native-expo-firebase', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'reactnative-expo-firebase-boilerplate.jpg',
    title: 'React Native Expo with Firebase',
    info: 'React Narive Expo boilerplate. It uses Firebase for the backend, and supports account creation, image upload, get and save push notifications token, and dark theme.',
    info2: 'Firebase用のReact Native Expoのボイラープレートです。アカウントの作成とユーザー情報の更新、画像のアップロード、プッシュ通知トークンの取得と保存、ダークモードをサポートしています。',
    url: 'https://github.com/kiyohken2000/reactnative-expo-firebase-boilerplate',
    repo: 'https://github.com/kiyohken2000/reactnative-expo-firebase-boilerplate', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fgo.png',
    title: 'Find Good One',
    info: 'Find Good One is a treasure hunt app that uses background location and geofences. The app was built with React Native, Expo, and Firebase.',
    info2: 'Find Good Oneはバックグラウンドロケーションとジオフェンスを使用した宝探しアプリです。使用技術はReact NativeとExpo、Firebaseです。',
    url: 'https://findgoodone.ml',
    repo: 'https://github.com/kiyohken2000/maptrap', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pinepro.png',
    title: 'PINE pro',
    info: 'PINE pro is a messenger app for iOS and Android. I built this app with React Native and Expo. The backend is Firebase Authentication, Firestore, Storage, Cloud Functions, Hosting.',
    info2: 'PINE proはiOS/Android用メッセンジャーアプリです。React Native + Expoです。バックエンドにはFirebase(Authentication, Firestore, Storage, Cloud Functions, Hosting)を使用しています。',
    url: 'https://pinepro.ml',
    repo: 'https://github.com/kiyohken2000/kenmochat', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'grafhouse.png',
    title: 'Grafhouse',
    info: 'Grafhouse is a social networking app about graffiti collaboration. Built with React Native. Used Firebase for the backend.',
    info2: 'Grafhouseは落書きのコラボレーションをテーマとしたSNSアプリです。React Native製です。バックエンドにはFirebaseを利用しました。',
    url: 'https://grafhouse.ml/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'kenmoreader.png',
    title: 'kenmo reader',
    info: 'The simple style news reader app on Android and iOS. You can browse various news and matome sites without ads. You can browse in a simpler and more unified format. Rendering in native view, not web view, provides a comfortable browsing experience.',
    info2: 'シンプルスタイルニュースリーダーアプリです。様々なニュースやまとめサイトを、広告を排除したシンプルかつ統一されたフォーマットで閲覧することができます。ウェブビューではなくネイティブビューでレンダリングしているため、快適なブラウジング体験を実現しました。',
    url: 'https://kenmo-reader.ml/',
    repo: 'https://github.com/kiyohken2000/kenmo-reader', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'retwpay.png',
    title: 'Retwpay',
    info: 'Retwpay is Retweet Flea Market App. Retwpay helps matching that buy and sell of Retweet.',
    info2: 'リツイートフリマアプリです。リツイートを「買いたい」と「売りたい」のマッチングを支援します。ユーザー同士のコミュニケーションにはツイッターを、決済には様々な電子マネーの個人間決済を利用します。リンク先のランディングページでは開発ブログも投稿しています。',
    url: 'https://retwpay.ml/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'votepurchase.png',
    title: 'Votepurchase',
    info: 'This is the first product I made. This is the web application version of Retwpay.',
    info2: '私が初めて作った製品です。Retwpayのウェブアプリ版です。',
    url: 'https://votepurchase.net/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '@votepurchase',
  btn: 'mail to',
  email: 'votepurchase@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/votepurchase',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/聡明-白倉-9627a01bb/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/kiyohken2000',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
