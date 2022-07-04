// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const images = [
  {
    id: 1,
    href: "https://unsplash.com/photos/X5REiD-cIlw",
    imageSrc: "https://images.unsplash.com/photo-1656268164012-119304af0c69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    href: "https://unsplash.com/photos/z6BYp6it5Rg",
    imageSrc: "https://images.unsplash.com/photo-1655853459092-a7bae19f9806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    href: "https://unsplash.com/photos/t9MP5ZyTxlI",
    imageSrc: "https://images.unsplash.com/photo-1506368670575-2ecb8dd6d86e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    href: "https://unsplash.com/photos/v1UKZ55xl7g",
    imageSrc: "https://images.unsplash.com/photo-1508151320989-03bc63351215?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 5,
    href: "https://unsplash.com/photos/s1T9RGy9lE8",
    imageSrc: "https://images.unsplash.com/photo-1655669131176-c23c3a7b9bfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 6,
    href: "https://unsplash.com/photos/piS9K4ef63o",
    imageSrc: "https://images.unsplash.com/photo-1655434065501-246b35310ab7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 7,
    href: "https://unsplash.com/photos/_zM9EoOHF6o",
    imageSrc: "https://images.unsplash.com/photo-1655500025272-5e9246e62716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 8,
    href: "https://unsplash.com/photos/TR_ItdPx_D4",
    imageSrc: "https://images.unsplash.com/photo-1655212874354-5dace1fdc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 9,
    href: "https://unsplash.com/photos/xaCJso4Q2nM",
    imageSrc: "https://images.unsplash.com/photo-1526228653958-2fda2c7479eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 10,
    href: "https://unsplash.com/photos/iuyR_HEwk24",
    imageSrc: "https://images.unsplash.com/photo-1625293961325-170b642843dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 11,
    href: "https://unsplash.com/photos/Qhi4sY3sPLg",
    imageSrc: "https://images.unsplash.com/photo-1655284847835-1684a56f80d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 12,
    href: "https://unsplash.com/photos/iO6kL9tUae4",
    imageSrc: "https://images.unsplash.com/photo-1654840471863-20b08bdbfa03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 13,
    href: "https://unsplash.com/photos/9xwLf_csaQ8",
    imageSrc: "https://images.unsplash.com/photo-1655215271909-f894e3dd3f98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 14,
    href: "https://unsplash.com/photos/6bG3jXCfLhw",
    imageSrc: "https://images.unsplash.com/photo-1654868739497-ee031a3d7088?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 15,
    href: "https://unsplash.com/photos/Myg7TfcEPeI",
    imageSrc: "https://images.unsplash.com/photo-1649133816831-de3d91d25288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 16,
    href: "https://unsplash.com/photos/4HMSNHOXa6Y",
    imageSrc: "https://images.unsplash.com/photo-1654554396063-09b7b57e7c74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 17,
    href: "https://unsplash.com/photos/29mFwu6BENc",
    imageSrc: "https://images.unsplash.com/photo-1654512799227-94e56fbed599?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 18,
    href: "https://unsplash.com/photos/2edfhUQDh34",
    imageSrc: "https://images.unsplash.com/photo-1654970209837-c5f100294796?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 19,
    href: "https://unsplash.com/photos/4X0bFW4S_QE",
    imageSrc: "https://images.unsplash.com/photo-1654284392067-10486b12edc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 20,
    href: "https://unsplash.com/photos/rZMiCdPAlss",
    imageSrc: "https://images.unsplash.com/photo-1654455103120-e33ac58ab56a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 21,
    href: "https://unsplash.com/photos/1ucE8osHLXg",
    imageSrc: "https://images.unsplash.com/photo-1654365432316-86dbf215553c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 22,
    href: "https://unsplash.com/photos/IzJZDmqgG_M",
    imageSrc: "https://images.unsplash.com/photo-1608644139016-4b938587ff67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 23,
    href: "https://unsplash.com/photos/GqQViO0y3xc",
    imageSrc: "https://images.unsplash.com/photo-1653122952207-f20ba3c64f35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 24,
    href: "https://unsplash.com/photos/zsv1nD4zcS8",
    imageSrc: "https://images.unsplash.com/photo-1653161926463-725f4b39a739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 25,
    href: "https://unsplash.com/photos/t9WDKWCesbU",
    imageSrc: "https://images.unsplash.com/photo-1629447236132-22c57cd0f0bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 26,
    href: "https://unsplash.com/photos/EHO2azRTzWY",
    imageSrc: "https://images.unsplash.com/photo-1653123787817-3c244597d8ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 27,
    href: "https://unsplash.com/photos/dnrCYthNXG4",
    imageSrc: "https://images.unsplash.com/photo-1653039771398-6a59d5d71ac0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 28,
    href: "https://unsplash.com/photos/M3HA9FkK4rs",
    imageSrc: "https://images.unsplash.com/photo-1653043506251-05cecdfe9cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 29,
    href: "https://unsplash.com/photos/Sc3I0v2YK_4",
    imageSrc: "https://images.unsplash.com/photo-1653162126007-7ec087750f00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 30,
    href: "https://unsplash.com/photos/2ntbW-snsfY",
    imageSrc: "https://images.unsplash.com/photo-1653076362668-a717e53fe8f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 31,
    href: "https://unsplash.com/photos/FHq5Qu2lUhE",
    imageSrc: "https://images.unsplash.com/photo-1619375011284-90b1391fcc64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 32,
    href: "https://unsplash.com/photos/dJxvs8rOt74",
    imageSrc: "https://images.unsplash.com/photo-1650433849872-c97a2e8b2c66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 33,
    href: "https://unsplash.com/photos/d-RHk4PKdb0",
    imageSrc: "https://images.unsplash.com/photo-1652355153737-3e2be5f2a751?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 34,
    href: "https://unsplash.com/photos/m32uq7W4uEg",
    imageSrc: "https://images.unsplash.com/photo-1652576779520-ffb6553a733f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 35,
    href: "https://unsplash.com/photos/_2mLg07Yn6s",
    imageSrc: "https://images.unsplash.com/photo-1652039033571-b4ea004b9369?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 36,
    href: "https://unsplash.com/photos/y50kCzzgIh8",
    imageSrc: "https://images.unsplash.com/photo-1652345645898-dcc4aad9fb05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 37,
    href: "https://unsplash.com/photos/w983z7CebCw",
    imageSrc: "https://images.unsplash.com/photo-1650965082276-558f3057cf38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 38,
    href: "https://unsplash.com/photos/CHrlgUbvb7Q",
    imageSrc: "https://images.unsplash.com/photo-1648073141651-c61c052d9079?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 39,
    href: "https://unsplash.com/photos/5pwjiX0OIgo",
    imageSrc: "https://images.unsplash.com/photo-1650871669661-8914cf440a4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  }
]

export default function handler(req, res) {
  res.status(200).json(images)
}
