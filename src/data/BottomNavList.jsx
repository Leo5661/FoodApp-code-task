export const BottomNavList = [
  {
    src: () => (
      <img
        className="menuIcon"
        src={`src/assets/icons/bolt.png`}
        alt="Bottom nav icon"
      />
    ),

    badge: false,
  },
  {
    src: () => (
      <img
        className="menuIcon"
        src={`src/assets/icons/book_open.png`}
        alt="Bottom nav icon"
      />
    ),

    badge: false,
  },
  {
    src: () => (
      <img
        className="menuIcon"
        src={`src/assets/icons/shopping_bag.png`}
        alt="Bottom nav icon"
      />
    ),

    badge: true,
  },
];
