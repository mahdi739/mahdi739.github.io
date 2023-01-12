'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "bf87ec0391761d03cd1d21e9c9a17f10",
".git/config": "fce2e8cb447b2bdeaadff4d7b854ebca",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7c40df4c19dde85cc97467d0486beb36",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1f499f04550f25046743c1f29cb8f1d8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5fed8a8fbe581b587064881cb6dcaeed",
".git/logs/refs/heads/main": "4f99ca36c77d3996801621d45ea6e4f0",
".git/logs/refs/remotes/origin/main": "21e90e6bb805af9004f1e4641e7a2ba1",
".git/objects/00/ef1d908902f7515172e3e4edeb79c0e615b58f": "aecbcb6fd2e85ae915759ab6c9a1d183",
".git/objects/03/94c89976fc2e59fa392d1e349cafac7caf0931": "7b78a4150d81b1ba30a452c948cf30e1",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/10/731bf9e0ffa817b91d7ebfee1b2892054dcdf7": "46bab5206cda26d95321f1deb06c6d3b",
".git/objects/10/7329ef0c35358e6fd24f3bd2367101fb101920": "00db992e206b151fd7049d2a25d802c5",
".git/objects/10/aab536ac6462cc59c4f7d91b5da70deb2d48a4": "b7218272b0b394e492924c3b972e8509",
".git/objects/14/1612188739406979b2e3f0c28d252f0b5ef984": "6743743972c265930bfa1ea19856f0ce",
".git/objects/15/68695cf5bbbe39366e1d3aec01ee3155dd68be": "29e294a54a958508df5ec7a999abd2bc",
".git/objects/18/6b6a4a9dfa306ecb7dcb2b0cc67326f3ca65f5": "ca23744c899d60d21bb6fcd565d138e2",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/21/0d85e18902e2ddd6193190c84b9170cc7bd260": "85c1c7d9ce34fb54dffed19519e7089b",
".git/objects/28/1d82d663": "4e42b47506a8b0b9975074b6b6f081fd",
".git/objects/2a/118865e71db222fb82f1041bbbca92859f297c": "683f84896044056021f4c97b861a8962",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/34/2b95292a31cb5dd2c580485e2e720672cc7774": "a57e45a855838d4b81a7c533993e009f",
".git/objects/35/a5ded5f3e5d91784c41117867157a7bb517529": "35d98804490bd8a45b971b1740cbeb6c",
".git/objects/3e/e99e52d46dbca5be0839c9c7b28ffb5fee0ca5": "68c02ea3edb3ad2b5075120b6782c51d",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/58/3a861305b40de7ed2f652b25689d4682011b7d": "8eb62475671ba74159de7e534fd41586",
".git/objects/65/3e393f44752a851a68db02d8b852fce146d5fb": "b4a4d3a2e879dcad30de022210f51253",
".git/objects/65/62c10e3e58ef31f0ec5c7d4a484328da4d2c9d": "68da1dc998da45614ff6f5deed9d50b7",
".git/objects/65/b394574b71fe5a34a7d816da82958e016e1385": "7d4af15fee10ba715b44cb01dfef7434",
".git/objects/66/bf3e1338d3d4cb1b291801f7e461f32bd42c36": "437f825b4b31e97e6ec5d95d8ed60367",
".git/objects/6e/b4304dff21dbb9e0c25f00e53e864153f82389": "6e6c5d3cb18749667840869c5c50e5e0",
".git/objects/6f/42b3d337fd02eb24252f806f037b3716589d87": "bcb7516db3c30023d3c47d09506344ed",
".git/objects/70/57b88eba10ce3d8a65d50cd0bc136fb73ac3c8": "e647bfac5f22e1cfb0b468355d942ded",
".git/objects/71/ff07fa7e6ce4cbcc3de266fa43a9b17a7dac2e": "f94a0a0a0dd14816c4d61ae0b65c4920",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/f9355ae597f909b0056e356b1d53fa9e747527": "138666e31dccd1c3d956e7775cec5a8d",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/80/f92a73981f3382e3ee8d81373336f082bc37bd": "7e3831a1dff59263f7d9ec1f44fc188c",
".git/objects/88/f4b4fda3": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/52d5798bf4c310909586daf14c182259a2f361": "6c031f1b39b6a55fe8b3e5a6a52159c7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/e1be9af8d903379630e8bc0c10638d7af1eddb": "2096dc1bb2667cf9a3ff7b6c4053122a",
".git/objects/8c/e6e8c8845fec8f1ea74e5af65069fec9a58cf5": "5978ab801bdb9bbffaa9f0f12300ad33",
".git/objects/93/104ffc16a055dbbb80a692e24bbbb2b52e824a": "9da3c8080292393ac7d3ad2ba07a024d",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/bd8f18eb45fc0c488fe530c3313a428bdd8418": "bb11628c874a1576ea8d1a6387cd6525",
".git/objects/af/ed53ca70ba5766d421ce6ba086fa379592a7f5": "3e39398dcfb73863583e6b0e716cf70f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/a5aef46f294b8f6c6d7f19e9f0bba191ed2023": "5f4d69b14bbab15ada113d24f65e378c",
".git/objects/bc/0b31086fcd0847f14fecc2b9ad447d569cb3d2": "aff8dd0898763f74e5a1dddf155bb550",
".git/objects/c3/15b2fb82f0f3d6c605e58da78c98161c080851": "fab1a736d0b8db7d7ff748288c9ba02e",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/54c58210c0c948ec7fc3f00e097d6531dc9575": "ff3290dad5ef0033af31386ac1754e29",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/d2589d9c63a71b0ef03f5ed030ce07a8486284": "5beab4cfbea2b7fd760554865939476c",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/929ddd9c56d92c9eda739a9465c0db62dc9296": "2cd4b0f567a5b8177e8b03ce4cf80355",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/82dcad0199ae5eeb6a2a85c3a160f752a962ab": "ac8d18c30329091628941a792355c1b6",
".git/objects/ef/c1be93764d1196ddd666436760d9f766402ca1": "5f2e64354e9789264dc910bd1869416e",
".git/objects/f5/1a4dbdb4bf728dce744c064620616e32668f25": "97dac927f7df6d8741300f85f97f9f11",
".git/objects/f8/a2421330de143978ebfe9b75b9f799ab970858": "4e1d97debebf7580bceef2400e16b9fc",
".git/objects/f9/0b26817803beacf71de09f5907e21731f736f4": "41f87eeef88e2974ba0599873bdfcb90",
".git/objects/f9/f2854fc00cdc23e03bc646a544cbb09c2802fd": "5ed54414e87767eddf9833d19057b6a1",
".git/objects/fe/a786298727ddfc73cf22a0745422c60c1e7f7d": "7bb959f9c9ec17f2e3fa29d186bd2b92",
".git/ORIG_HEAD": "0f501c286e0c05112ba4933996491257",
".git/refs/heads/main": "0f501c286e0c05112ba4933996491257",
".git/refs/remotes/origin/main": "0f501c286e0c05112ba4933996491257",
"assets/AssetManifest.json": "07934f4a72af026fb2546c93555a627a",
"assets/assets/IRAN%2520Sans%2520Regular.ttf": "9e9280f763cbbb0ae72c95c53879b9f6",
"assets/FontManifest.json": "fef3237b5d8f0a1eafbcf5a562fbac00",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "2bc3e3f854a7d0f32800aad50fd7113d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "92514212ce53a9136d5fcd4f9279b044",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f1db8447bce9fa76ee2f04ff974e7835",
"/": "f1db8447bce9fa76ee2f04ff974e7835",
"main.dart.js": "8065a443ac90199cd3f56c4565cbfad3",
"manifest.json": "5131bd99f5f015c24c28d5b640d75b8b",
"README.md": "e1a5bdbebf3525c4d1f7d0a8b577bd47",
"version.json": "c96933c42cde059199832e9df04af3c3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
