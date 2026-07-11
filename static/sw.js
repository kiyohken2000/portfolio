// 自爆型 Service Worker — 絶対に削除しないこと。
//
// このサイトはかつて gatsby-plugin-offline を使っており、訪問者のブラウザには
// 旧 Service Worker (/sw.js) が登録されたまま残っている。プラグインを外しても
// 旧 SW はキャッシュ済みの古いアプリシェルを配り続け、新しいアセットと食い違って
// サイトがクラッシュする。このファイルは旧 SW の更新チェックで取得され、
// 全キャッシュ削除 → 自身の登録解除 → 開いているタブのリロードを行う。
// 削除すると旧訪問者のブラウザで問題が再発する。
self.addEventListener('install', () => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: 'window' });
      clients.forEach((client) => client.navigate(client.url));
    })()
  );
});
