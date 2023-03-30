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
    img: 'abe-talk.png',
    title: 'Abe Talk',
    info: `This is a web application that reads out Kenmou-ita thread titles in Shinzo Abe's voice. The frontend of this app is Next.js. The backend is Firebase and GCP Cloud Run. Voice synthesis is by Uberduck.`,
    info2: '嫌儲のスレタイを安倍晋三声で読み上げるウェブアプリです。フロントエンドにはNext.jsを、バックエンドにはFirebaseとGCP Cloud Runを、合成音声にはUberduckを使用しました。',
    url: 'https://abe-talk.vercel.app',
    repo: 'https://github.com/kiyohken2000/abe-talk', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'heishinsan.png',
    title: '意味のない質問だよ/Hey 晋さん',
    info: 'This is an application to talk with Shinzo Abe. When a question is inputted through speech recognition, Shinzo Abe-like answers are generated and Shinzo Abe synthesized voice is played. This app was built with React Native, Cloud Run, Firebase, and Uberduck.',
    info2: 'AI安倍晋三との会話アプリです。音声認識により質問を入力すると安倍晋三風の回答を生成し安倍晋三の合成音声を再生します。アプリはReact Native、バックエンドはCloud RunとFirebaseを、合成音声の作成にはUberduckを使用しました。',
    url: 'https://youtu.be/BdToa3l6goA',
    repo: 'https://github.com/kiyohken2000/hei-shin-san', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'abeshinzoexplorer.png',
    title: '安倍晋三エクスプローラー',
    info: 'This application is for viewing Shinzo Abe statements in the Diet. It also supports Text to Speech. Flutter and Firebase were used to build the app.',
    info2: '安倍晋三の国会での発言を閲覧するためのアプリです。音声での読み上げにも対応しています。彼の発言を閲覧していて疲れたときにはギャラリー画面の美しい画像を見て息抜きできます。FlutterとFirebaseを使用しました。',
    url: 'https://kiyohken2000.github.io/flutter-practice/ja',
    repo: 'https://github.com/kiyohken2000/flutter-practice', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'design-demo.png',
    title: 'design-demo',
    info: 'This is a sample photo editing application using the PhotoEditorSDK provided by img.ly. I used EAS build for this library because it uses native code.',
    info2: 'img.lyの提供するPhotoEditorSDKを使用した画像編集アプリのサンプルです。ネイティブコードを使用するSDKのためEAS buildを使用しました。',
    url: 'https://youtu.be/vfAbrMrfoxQ',
    repo: 'https://github.com/kiyohken2000/design-demo', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ocacatalk.jpg',
    title: 'Ocacatalk',
    info: 'Ocacatalk is a video streaming social networking app. Build with Expo Application Services (EAS). A backend for the video chat is AgoraIO.',
    info2: 'Ocacatalkは動画配信SNSアプリです。Expo EAS Buildを使用しました。ビデオチャットのバックエンドはAgoraIOです。',
    url: 'https://ocacatalk.ml',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'react-native-expo-firebase.png',
    title: 'React Native Expo Firebase',
    info: 'This is a demo of using Firestore realtime listener to rewrite the app color scheme and drawer menu in real time from the browser.',
    info2: 'Firestore realtime listenerを使って、アプリの配色やドロワーメニューをリアルタイムにブラウザ上から書き換えるデモです。',
    url: 'https://youtu.be/OpHKSqBw3Fo',
    repo: 'https://github.com/kiyohken2000/react-native-expo-firebase', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'reactnative-expo-firebase-boilerplate.jpg',
    title: 'React Native Expo with Firebase',
    info: 'React Narive Expo boilerplate. It uses Firebase for the backend, and supports account creation, image upload, get and save push notifications token, and dark theme.',
    info2: 'Firebase用のReact Native Expoのボイラープレートです。アカウントの作成とユーザー情報の更新、画像のアップロード、プッシュ通知トークンの取得と保存、ダークモードをサポートしています。',
    url: 'https://github.com/kiyohken2000/ReactNative-Expo-Firebase-Boilerplate-v2',
    repo: 'https://github.com/kiyohken2000/ReactNative-Expo-Firebase-Boilerplate-v2', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fgo.png',
    title: 'Find Good One',
    info: 'Find Good One is a treasure hunt app that uses background location and geofences. The app was built with React Native, Expo, and Firebase.',
    info2: 'Find Good Oneはバックグラウンドロケーションとジオフェンスを使用した宝探しアプリです。使用技術はReact NativeとExpo、Firebaseです。',
    url: 'https://maptrap.web.app',
    repo: 'https://github.com/kiyohken2000/maptrap', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pinepro.png',
    title: 'PINE pro',
    info: 'PINE pro is a messenger app for iOS and Android. I built this app with React Native and Expo. The backend is Firebase Authentication, Firestore, Storage, Cloud Functions, Hosting.',
    info2: 'PINE proはiOS/Android用メッセンジャーアプリです。React Native + Expoです。バックエンドにはFirebase(Authentication, Firestore, Storage, Cloud Functions, Hosting)を使用しています。',
    url: 'https://kenmochat.web.app',
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
  }
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
