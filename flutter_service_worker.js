'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a2603cc1f8de252664bd6dea22f5e89d",
"version.json": "c7d4916227a2d09b56a587bcc124136d",
"splash/img/light-2x.png": "e32dd10d6a71190b30281afa3743284b",
"splash/img/dark-4x.png": "620664481757411f8f646258cf48a445",
"splash/img/light-3x.png": "6a6965bd412b2778780815a03bc0e777",
"splash/img/dark-3x.png": "6a6965bd412b2778780815a03bc0e777",
"splash/img/light-4x.png": "620664481757411f8f646258cf48a445",
"splash/img/dark-2x.png": "e32dd10d6a71190b30281afa3743284b",
"splash/img/dark-1x.png": "454bdbd9da820207f9848a8ddbfd3f0a",
"splash/img/light-1x.png": "454bdbd9da820207f9848a8ddbfd3f0a",
"index.html": "817b960f0395e6941965137d64cfa858",
"/": "817b960f0395e6941965137d64cfa858",
"main.dart.js": "d10f550e66248407c5aef71392e085cb",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "69e12c82b0c5b14a71e43949e69205ce",
"icons/Icon-192.png": "7374ef38ba3d26eed1501cedd589efd2",
"icons/Icon-maskable-192.png": "7374ef38ba3d26eed1501cedd589efd2",
"icons/Icon-maskable-512.png": "e32dd10d6a71190b30281afa3743284b",
"icons/Icon-512.png": "e32dd10d6a71190b30281afa3743284b",
"manifest.json": "0a3dddc676cb97f96040e178d7ee5b87",
".git/ORIG_HEAD": "c28bd9e857fbec6d2ae26b0dd9c42918",
".git/config": "0bae39e81795121d6957aa555be74ba8",
".git/objects/50/93c47b32b24d47016bfd31981faf08de1f3aba": "deeeae334493c4be0f7d77aa44681128",
".git/objects/50/c9b0514aa060a6c30bd89e175414d3319d06da": "69ce523a530d24a30e092cdc9ff908ec",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "adfbc6c173c4e9b037c82eb43ea9b9d0",
".git/objects/0b/daabf0a4e295f71a3052896480c2b05bab08de": "da31e197ca4a856805e768e237fff4ef",
".git/objects/93/eee2acc1be44b22fa59003ded92af577907d88": "82a811d698755cb21f44be674c128919",
".git/objects/60/60bba3660b046333db10a2c1d048967c423240": "334bf8bd464485b7c14c269cf508a447",
".git/objects/9d/9f784e92b4c3758bb07b9e9f80ee4a87e70266": "bde81cd7af546907642a8e1b1a723951",
".git/objects/bd/46f3fc2125e410b6b8e92c8fc3a37b3f4c32b9": "85b748eead14f78065107e444d862202",
".git/objects/d8/7f64be4cc2744a8405b95a4684df841b868e9e": "31700494f6a9ba7b6463b82d459c4a9f",
".git/objects/f4/b74d32100b6079c13f4ec98b1209f5fbf1cb41": "a8c91b03fb27ec8ae0b562cfffeee2ff",
".git/objects/f4/a4957972267c02b3467758b47cb12edfd33c74": "9a25dc7641eaf57d5e22c41d53743fbc",
".git/objects/c0/dab371ddc194bddebab3463fd6dd7f2604e6c4": "1678b71ecb5f694922c3070d97213ce5",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "db30ba7b07ab1aaa8d98491333de54a7",
".git/objects/ed/d49da7175528b4d1421b4a1c0fd4bf54b2647a": "ec3feb1617f40587270e67218c049b69",
".git/objects/c1/cd2f0a328f835f743194ff5df83d53467b01fc": "220e97b908a7383a50d5c69be48c8948",
".git/objects/pack/pack-3e1c622764d6d78481bb67bb81bad2235d3f06fe.pack": "49c0da6f763340f669655ec31de305ad",
".git/objects/pack/pack-3e1c622764d6d78481bb67bb81bad2235d3f06fe.idx": "5315d94bd98ff1557b62fdcbbd152fab",
".git/objects/16/6d9e5f6e83e213ad56010f49d13804ef6ecc65": "b14fc0316494cb8569b4d7a20e789b3b",
".git/objects/89/566e6c8f0b41622aa4fd19282c06022875e5f0": "720d3872a25765d060a8ace315e64046",
".git/objects/28/43d22a10ac07e3599fd2a6e8497223f2501e66": "940c429c1bb0067a39a545c0a51ed169",
".git/objects/10/d7819763a913a2fa476ddba8379b5218ca04c4": "07b6f6457e6b372d7e6254e72c3cdc79",
".git/objects/26/ff46c14d1220284f54a22b40b80a91c13ed2ce": "2679886592049205e1b7c5c0451980d3",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "b0486f433d29368a047e2605d1a4d154",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "efc2c4346f61190dfbaa3b3cf7556de8",
".git/objects/00/a80fa82722c1e50debe8e041f2689b3d9e6289": "21e128f0e8178ad780b340ef6946160f",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "62e5b19dc0e38064163a0f5de7638115",
".git/objects/62/10ccd13bb13f926cbfd69b1a114dff70c4ddb6": "89d6b2903fd411a839857c64206d2835",
".git/objects/5b/6ab30ddb33a2eeccf4ce9c307a42a7540270cf": "393dd2fa09fa884a2783882143f8202f",
".git/objects/01/2d6650dfff496a8349f22631d8ba5d115b9b76": "0a9c284a4b6e77b140f0a36a1f09774d",
".git/objects/6c/112fc95ec8151c6d7b6895b4f67ea8de2841b1": "6011ef0369c2c153ce4e7b902c3daa5e",
".git/objects/a1/9dd8b8a179b844685ca643f7bf47b9cc7bac66": "7673872e48844f3f40c4e3eaf97ab630",
".git/objects/c3/67e40fdaecee28c1cdcf41c3ced970844c6e92": "4ee6e06d4acc55fd27f715dfacef4d52",
".git/objects/e1/7ccb1c34e1455bf615294dc0509afa05983386": "74294090e31c4b5f6ab96a70dd123c91",
".git/objects/cd/720427ab3b0bb12617c09d460bfd811a7e97ea": "959545dfa9ce0908424a53e765f00f8d",
".git/objects/41/205d536f99e9b71ffbf15f21679d472c51f196": "e69462cea1c3e34892847bc5e86414c8",
".git/objects/77/471158ebcc83888bd802de2196fb44e8b54792": "bda3442209ebac42acf0d3e4b81669d8",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "54ab11d80a5332cf91fd2999264849ea",
".git/objects/4a/c2a236a09ac5a89e10fd53e8f33232077c2f85": "adc1d4006da72df8961585ecb752c9b8",
".git/objects/23/12578086f0f1db64d6b6b2f574d3445ab8f4f6": "1f922e8caca4da160117c37443163c8e",
".git/objects/82/09f77036655d8ecf486cdd18a05782e2e620e2": "9b6cad28330df1623ec7051c0aaa1b13",
".git/objects/40/a3f80df8eb1a6935181e426ee4a000c7c3b796": "fd19b3d6c8f7eb2151e93f9a781ae1c1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e6b32887a7c4d13dde1e91066b98ce2a",
".git/logs/refs/heads/main": "e6b32887a7c4d13dde1e91066b98ce2a",
".git/logs/refs/remotes/origin/HEAD": "0ff46c12ce98d6e6c86957e89fe164a4",
".git/logs/refs/remotes/origin/main": "5bfc2670c74dafe16acb6dea8926d9a4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "eede11d801ec809dabc2abb959cf2c3a",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "eede11d801ec809dabc2abb959cf2c3a",
".git/index": "d43baa98a2d910cd57e8c0581d5ff495",
".git/packed-refs": "f11a3ab72906013744b054f1170dbdba",
".git/COMMIT_EDITMSG": "98baa60bbb0bdce9a596deddc1dd7b0b",
".git/FETCH_HEAD": "883017acd0480ba6a60ab3713c3ffff7",
"assets/AssetManifest.json": "f1e66cd8d722e73cf8a6bd0746e469e7",
"assets/NOTICES": "f0ea48f9cbc48cdb90fca48eaf31d6fc",
"assets/FontManifest.json": "d947bacefeabced61a7e48422f11efcf",
"assets/AssetManifest.bin.json": "2fd50bd8532a538436710a5c406d76d1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "27efd77dd5df61ab5f531ebc5bdc2aad",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/on_boarding_images/Zinglet_text_transparent.png": "70fb9664bd3a30c9ca909b8bf25e857d",
"assets/assets/images/content/bg_wall_light.jpg": "ed85b6dd26055e0e75c18f9b1bb67797",
"assets/assets/images/content/user.png": "f9e447f2bebc53ca0294824e2db43c82",
"assets/assets/images/content/bg_wall_dark.jpg": "acf5ffc4091b4d9d7a6048663875aea5",
"assets/assets/images/animations/72462-check-register.json": "f025dd10b211685777be1fc8b9d43f37",
"assets/assets/images/animations/141594-animation-of-docer.json": "0447d6592aa7c62f7464b5a867a18bf7",
"assets/assets/images/animations/67263-security-icon-transparent.json": "c6aa8a75f3bdf204d2c7fe86a68076e0",
"assets/assets/logos/available-on-playstore.png": "c4297e6187f7e5fd482c44cc2524905f",
"assets/assets/logos/facebook-icon.png": "be0423f843fc36586991cbf92c059422",
"assets/assets/logos/google-play-logo.png": "160c8359731126142ed6ab73df42e11a",
"assets/assets/logos/ZLlogo_no_bg.png": "816e78b977448b9b498116efb76bbe6d",
"assets/assets/logos/linkedin-logo-icon.jpg": "178ffbd3ca3cb8207b1f3e521f66fd03",
"assets/assets/logos/google-icon.png": "b95e5615716a3ae4b62f14a430bb1253",
"assets/assets/logos/instagram-icon.png": "67643e793eaa11c84df869dcf558269c",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
